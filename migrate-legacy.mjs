import fs from 'fs';
import path from 'path';
import Database from 'better-sqlite3';

const db = new Database('exams.db');

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

const legacyDir = './legacy';
const files = fs.readdirSync(legacyDir).filter(f => f.endsWith('.js') && f !== 'ngfw.js');

console.log(`Found ${files.length} legacy files to migrate.`);

files.forEach(file => {
  const content = fs.readFileSync(path.join(legacyDir, file), 'utf-8');
  
  // Extract the array from window.loadExamData([...])
  const match = content.match(/window\.loadExamData\(([\s\S]*)\);/);
  if (!match) {
    console.warn(`Could not find exam data in ${file}`);
    return;
  }

  try {
    // Legacy files are JS, not JSON. Use eval-like approach for migration.
    const dataString = match[1].trim();
    const data = (new Function(`return ${dataString}`))();
    const examName = file.replace('.js', '').toUpperCase();
    
    const info = db.prepare('INSERT INTO exams (title, description) VALUES (?, ?)').run(examName, `Migrated from ${file}`);
    const examId = info.lastInsertRowid;

    const insertStmt = db.prepare('INSERT INTO questions (exam_id, text, options, correct_indexes, explanation) VALUES (?, ?, ?, ?, ?)');

    data.forEach(q => {
      insertStmt.run(
        examId,
        q.text,
        JSON.stringify(q.options),
        JSON.stringify(q.correctIndexes),
        q.explanation || ''
      );
    });

    console.log(`Successfully migrated ${examName} (${data.length} questions).`);
  } catch (err) {
    console.error(`Error parsing ${file}:`, err);
  }
});

console.log('Migration complete.');
db.close();
