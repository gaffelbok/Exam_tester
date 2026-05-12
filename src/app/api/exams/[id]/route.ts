import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  try {
    db.prepare('DELETE FROM exams WHERE id = ?').run(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Failed to delete exam ${id}:`, error);
    return NextResponse.json({ error: 'Failed to delete exam' }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  try {
    const { title } = await request.json();
    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }
    db.prepare('UPDATE exams SET title = ? WHERE id = ?').run(title, id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Failed to update exam ${id}:`, error);
    return NextResponse.json({ error: 'Failed to update exam' }, { status: 500 });
  }
}
