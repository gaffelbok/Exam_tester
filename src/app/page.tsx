import Link from 'next/link';
import { PlusCircle, BookOpen, Trash2 } from 'lucide-react';
import db from '@/lib/db';

async function getExams() {
  return db.prepare('SELECT * FROM exams ORDER BY created_at DESC').all();
}

export default async function Home() {
  const exams: any = await getExams();

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Exam Tester</h1>
            <p className="mt-2 text-sm text-gray-600">Prepare for your certifications with AI-powered insights.</p>
          </div>
          <Link
            href="/upload"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Upload Exam
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {exams.length > 0 ? (
            exams.map((exam: any) => (
              <div
                key={exam.id}
                className="relative group bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer"
              >
                <Link href={`/exam/${exam.id}`} className="block">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                      <BookOpen className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {exam.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-1">{exam.description || 'No description available'}</p>
                    </div>
                  </div>
                </Link>
                <div className="absolute top-4 right-4">
                  {/* Delete functionality could be added here */}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center bg-white rounded-xl border-2 border-dashed border-gray-300">
              <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No exams yet</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by uploading your first exam document.</p>
              <div className="mt-6">
                <Link
                  href="/upload"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Exam
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
