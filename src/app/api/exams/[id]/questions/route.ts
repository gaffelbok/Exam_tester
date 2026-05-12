import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  try {
    const questions = db.prepare('SELECT * FROM questions WHERE exam_id = ?').all(id);
    
    // Parse JSON strings back to arrays
    const parsedQuestions = questions.map((q: any) => ({
      ...q,
      options: JSON.parse(q.options),
      correct_indexes: JSON.parse(q.correct_indexes),
      ai_generated: Boolean(q.ai_generated)
    }));

    return NextResponse.json(parsedQuestions);
  } catch (error) {
    console.error(`Failed to fetch questions for exam ${id}:`, error);
    return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
  }
}
