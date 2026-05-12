'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, FileText, Loader2, CheckCircle2, AlertCircle, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

export default function UploadPage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (!validTypes.includes(selectedFile.type)) {
        setError('Please upload a PDF or Word (.docx) document.');
        setFile(null);
        return;
      }

      setError(null);
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    setError(null);
    setStatus('Uploading and analyzing document with Gemini...');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to process document');
      }

      setStatus('Exam created successfully! Redirecting...');
      setTimeout(() => {
        router.push(`/exam/${result.examId}`);
      }, 1500);

    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 transition-colors mb-4">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Create New Exam</h1>
          <p className="mt-2 text-sm text-gray-600">Upload a PDF or Word document to generate a custom exam using AI.</p>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div 
            className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
              file ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              disabled={isUploading}
            />
            
            {file ? (
              <div className="flex flex-col items-center">
                <div className="bg-indigo-600 p-3 rounded-lg text-white mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{file.name}</h3>
                <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                <button 
                  onClick={() => setFile(null)}
                  disabled={isUploading}
                  className="mt-4 text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Remove file
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 p-3 rounded-lg text-gray-400 mb-4">
                  <Upload className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Click to upload or drag and drop</h3>
                <p className="text-sm text-gray-500">PDF or Word files only</p>
              </div>
            )}
          </div>

          {error && (
            <div className="mt-6 flex items-center p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-800 text-sm">
              <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              {error}
            </div>
          )}

          {isUploading && (
            <div className="mt-6 flex flex-col items-center p-6 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-800">
              <Loader2 className="h-8 w-8 animate-spin mb-3" />
              <p className="text-sm font-medium">{status}</p>
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={!file || isUploading}
            className="mt-8 w-full py-4 px-6 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg flex items-center justify-center"
          >
            {isUploading ? 'Processing...' : 'Generate Exam'}
          </button>
        </div>

        <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">How it works</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
              Our AI analyzes your document to find relevant questions and answers.
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
              It formats them into a professional quiz structure.
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
              If explanations are missing, Gemini generates helpful context for each answer.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
