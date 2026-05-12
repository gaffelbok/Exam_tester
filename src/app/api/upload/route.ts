import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import db from '@/lib/db';
import mammoth from 'mammoth';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: Request) {
  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'YOUR_API_KEY_HERE') {
    return NextResponse.json({ error: 'Gemini API Key not configured. Please add it to .env.local' }, { status: 500 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    let content: any;
    let modelInput: any;

    if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      // For Word docs, extract text using mammoth
      const result = await mammoth.extractRawText({ buffer });
      content = result.value;
      modelInput = content; // Send as text
    } else {
      // For PDF (and others supported by Gemini), send as base64
      modelInput = {
        inlineData: {
          data: buffer.toString('base64'),
          mimeType: file.type
        }
      };
    }

    // Initialize Gemini model. Note: 2.5-flash is the current stable flash model.
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      generationConfig: {
        responseMimeType: "application/json",
      }
    });

    const prompt = `
      You are an expert at extracting exam questions from documents. 
      Analyze the provided content and extract all exam questions.
      
      For each question, provide:
      1. The question text.
      2. A list of multiple-choice options.
      3. The index(es) of the correct answer(s) (0-based).
      4. A detailed explanation of why the answer is correct. 
         If the content DOES NOT provide an explanation, you MUST generate one yourself based on the question context.
         If you generate the explanation yourself, set "ai_generated" to true for that question.

      Return the data in the following JSON format:
      {
        "title": "Exam Title",
        "description": "Short description of the exam content",
        "questions": [
          {
            "text": "Question text here?",
            "options": ["Option A", "Option B", "Option C", "Option D"],
            "correct_indexes": [0],
            "explanation": "Detailed explanation here...",
            "ai_generated": false
          }
        ]
      }
    `;

    const result = await model.generateContent([prompt, modelInput]);
    const responseText = result.response.text();
    const quizData = JSON.parse(responseText);

    // Save to Database
    const info = db.prepare('INSERT INTO exams (title, description) VALUES (?, ?)').run(
      quizData.title || file.name.split('.')[0], 
      quizData.description || `Generated from ${file.name}`
    );
    const examId = info.lastInsertRowid;

    const insertStmt = db.prepare('INSERT INTO questions (exam_id, text, options, correct_indexes, explanation, ai_generated) VALUES (?, ?, ?, ?, ?, ?)');

    for (const q of quizData.questions) {
      insertStmt.run(
        examId,
        q.text,
        JSON.stringify(q.options),
        JSON.stringify(q.correct_indexes),
        q.explanation,
        q.ai_generated ? 1 : 0
      );
    }

    return NextResponse.json({ success: true, examId });

  } catch (error: any) {
    console.error('Gemini Processing Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to process document with AI' }, { status: 500 });
  }
}
