import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const exams = db.prepare('SELECT * FROM exams ORDER BY created_at DESC').all();
    return NextResponse.json(exams);
  } catch (error) {
    console.error('Failed to fetch exams:', error);
    return NextResponse.json({ error: 'Failed to fetch exams' }, { status: 500 });
  }
}
