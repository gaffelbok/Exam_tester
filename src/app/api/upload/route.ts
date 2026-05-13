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
    const manualTitle = formData.get('title') as string;
    const mode = formData.get('mode') as string; // 'extract' or 'generate'

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    let modelInput: any;

    if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      // For Word docs, extract text using mammoth
      const result = await mammoth.extractRawText({ buffer });
      modelInput = result.value;
    } else {
      // For PDF (and others supported by Gemini), send as base64
      modelInput = {
        inlineData: {
          data: buffer.toString('base64'),
          mimeType: file.type
        }
      };
    }

    // Initialize Gemini model
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      generationConfig: {
        responseMimeType: "application/json",
      }
    });

    let prompt = "";
    if (mode === 'generate') {
      prompt = `
        You are an expert educator. Analyze the provided content (which is a course summary or notes) 
        and generate a comprehensive set of 10-15 high-quality multiple-choice questions to test knowledge of the key concepts.
        
        Requirements:
        1. Each question must have exactly 4 options.
        2. Provide a clear, detailed explanation for the correct answer.
        3. Set "ai_generated" to true for all questions.
        
        Return the data in the following JSON format:
        {
          "title": "Generated Exam Title",
          "description": "Exam generated from content summary",
          "questions": [
            {
              "text": "Question text?",
              "options": ["Option A", "Option B", "Option C", "Option D"],
              "correct_indexes": [0],
              "explanation": "Detailed explanation...",
              "ai_generated": true
            }
          ]
        }
      `;
    } else {
      prompt = `
        You are an expert at extracting exam questions from documents. 
        Analyze the provided content and extract all existing exam questions.
        
        Requirements:
        1. Extract the question text, options, and correct answers.
        2. If the document DOES NOT provide an explanation, you MUST generate one yourself based on the context and set "ai_generated" to true for that question.

        Return the data in the following JSON format:
        {
          "title": "Extracted Exam Title",
          "description": "Questions extracted from document",
          "questions": [
            {
              "text": "Question text?",
              "options": ["Option A", "Option B", "Option C", "Option D"],
              "correct_indexes": [0],
              "explanation": "Explanation here...",
              "ai_generated": false
            }
          ]
        }
      `;
    }

    const result = await model.generateContent([prompt, modelInput]);
    const responseText = result.response.text();
    const quizData = JSON.parse(responseText);

    // Save to Database
    const info = db.prepare('INSERT INTO exams (title, description) VALUES (?, ?)').run(
      manualTitle || quizData.title || file.name.split('.')[0], 
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
