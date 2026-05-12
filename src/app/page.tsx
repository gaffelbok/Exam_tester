'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PlusCircle, BookOpen, Trash2, AlertTriangle, X, Edit2, Check } from 'lucide-react';

export default function Home() {
  const [exams, setExams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteStep, setDeleteStep] = useState<0 | 1 | 2>(0); // 0: none, 1: first confirm, 2: second confirm
  const [examToDelete, setExamToDelete] = useState<any>(null);
  const [examToRename, setExamToRename] = useState<any>(null);
  const [newTitle, setNewTitle] = useState('');
  const [isRenaming, setIsRenaming] = useState(false);

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const res = await fetch('/api/exams');
      const data = await res.json();
      setExams(data);
    } catch (err) {
      console.error('Failed to fetch exams:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!examToDelete) return;

    try {
      const res = await fetch(`/api/exams/${examToDelete.id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setExams(exams.filter(e => e.id !== examToDelete.id));
        closeDeleteModal();
      }
    } catch (err) {
      console.error('Failed to delete exam:', err);
    }
  };

  const handleRename = async () => {
    if (!examToRename || !newTitle.trim()) return;
    setIsRenaming(true);

    try {
      const res = await fetch(`/api/exams/${examToRename.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle }),
      });
      if (res.ok) {
        setExams(exams.map(e => e.id === examToRename.id ? { ...e, title: newTitle } : e));
        closeRenameModal();
      }
    } catch (err) {
      console.error('Failed to rename exam:', err);
    } finally {
      setIsRenaming(false);
    }
  };

  const closeDeleteModal = () => {
    setDeleteStep(0);
    setExamToDelete(null);
  };

  const closeRenameModal = () => {
    setExamToRename(null);
    setNewTitle('');
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

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
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
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
                className="relative group bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-indigo-300 transition-all"
              >
                <Link href={`/exam/${exam.id}`} className="block pr-10">
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
                <div className="absolute top-4 right-4 flex space-x-1">
                  <button 
                    onClick={() => { setExamToRename(exam); setNewTitle(exam.title); }}
                    className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    title="Rename Exam"
                  >
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => { setExamToDelete(exam); setDeleteStep(1); }}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete Exam"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
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

      {/* Double Confirmation Modal */}
      {deleteStep > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-red-100 p-2 rounded-lg text-red-600">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <button onClick={closeDeleteModal} className="text-gray-400 hover:text-gray-600">
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {deleteStep === 1 ? (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Delete "{examToDelete?.title}"?</h3>
                  <p className="text-gray-600 mb-6">Are you sure you want to delete this exam? This action cannot be undone.</p>
                  <div className="flex space-x-3">
                    <button 
                      onClick={closeDeleteModal}
                      className="flex-1 py-2.5 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => setDeleteStep(2)}
                      className="flex-1 py-2.5 px-4 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-red-600 mb-2">Final Confirmation</h3>
                  <p className="text-gray-600 mb-6">Type "DELETE" below to permanently remove all questions from the database.</p>
                  <input 
                    type="text" 
                    placeholder="Type DELETE"
                    className="w-full mb-6 p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 outline-none transition-all uppercase"
                    onChange={(e) => {
                      if (e.target.value === 'DELETE') {
                        handleDelete();
                      }
                    }}
                  />
                  <button 
                    onClick={closeDeleteModal}
                    className="w-full py-2.5 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                  >
                    Go Back
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Rename Modal */}
      {examToRename && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  <Edit2 className="h-6 w-6" />
                </div>
                <button onClick={closeRenameModal} className="text-gray-400 hover:text-gray-600">
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rename Exam</h3>
              <p className="text-gray-600 mb-6">Enter a new name for this exam.</p>
              
              <input 
                type="text" 
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Exam Title"
                className="w-full mb-6 p-3 border-2 border-gray-200 rounded-xl focus:border-indigo-600 outline-none transition-all"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleRename();
                  if (e.key === 'Escape') closeRenameModal();
                }}
              />
              
              <div className="flex space-x-3">
                <button 
                  onClick={closeRenameModal}
                  className="flex-1 py-2.5 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleRename}
                  disabled={!newTitle.trim() || isRenaming}
                  className="flex-1 py-2.5 px-4 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                >
                  {isRenaming ? 'Saving...' : 'Save Name'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
