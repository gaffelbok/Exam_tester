import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'exams.db');
const db = new Database(dbPath);

// Initialize schema
db.exec(`
  CREATE TABLE IF NOT EXISTS exams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    exam_id INTEGER NOT NULL,
    text TEXT NOT NULL,
    options TEXT NOT NULL, -- JSON string array
    correct_indexes TEXT NOT NULL, -- JSON string array of numbers
    explanation TEXT,
    ai_generated BOOLEAN DEFAULT 0,
    FOREIGN KEY (exam_id) REFERENCES exams (id) ON DELETE CASCADE
  );
`);

export default db;
