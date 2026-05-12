'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { CheckCircle, XCircle, ChevronRight, ChevronLeft, LayoutDashboard, Info, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Question {
  id: number;
  text: string;
  options: string[];
  correct_indexes: number[];
  explanation: string;
  ai_generated: boolean;
}

export default function ExamPage() {
  const { id } = useParams();
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number[]>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    fetch(`/api/exams/${id}/questions`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (questions.length === 0) return <div className="flex flex-col justify-center items-center h-screen">
    <p className="text-xl mb-4">No questions found for this exam.</p>
    <Link href="/" className="text-indigo-600 hover:underline">Back to Dashboard</Link>
  </div>;

  const currentQuestion = questions[currentIndex];
  const currentSelected = selectedOptions[currentIndex] || [];
  const currentShown = showExplanation[currentIndex] || false;

  const handleOptionToggle = (index: number) => {
    if (currentShown) return;
    
    let newSelected: number[];
    if (currentSelected.includes(index)) {
      newSelected = currentSelected.filter(i => i !== index);
    } else {
      newSelected = [...currentSelected, index];
    }
    
    setSelectedOptions({
      ...selectedOptions,
      [currentIndex]: newSelected
    });
  };

  const checkAnswer = () => {
    setShowExplanation({
      ...showExplanation,
      [currentIndex]: true
    });
    
    const isCorrect = 
      currentSelected.length === currentQuestion.correct_indexes.length &&
      currentSelected.every(val => currentQuestion.correct_indexes.includes(val));
    
    if (isCorrect) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center border border-gray-100">
          <div className="mb-6 inline-flex p-4 rounded-full bg-indigo-50 text-indigo-600">
            <CheckCircle className="h-12 w-12" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Exam Completed!</h2>
          <p className="text-gray-600 mb-8">
            You completed <span className="text-indigo-600 font-bold">{questions.length}</span> questions.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => {
                setCurrentIndex(0);
                setScore(0);
                setIsFinished(false);
                setSelectedOptions({});
                setShowExplanation({});
              }}
              className="w-full py-3 px-4 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
            >
              Retry Exam
            </button>
            <Link
              href="/"
              className="w-full inline-block py-3 px-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6">
      <div className="max-w-3xl w-full">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 transition-colors">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
          <div className="text-sm font-medium text-gray-500">
            Question <span className="text-gray-900">{currentIndex + 1}</span> of {questions.length}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-8">
          <div 
            className="bg-indigo-600 h-1.5 rounded-full transition-all duration-300" 
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8">
            <h2 className="text-xl font-medium text-gray-900 leading-relaxed mb-8">
              {currentQuestion.text}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = currentSelected.includes(idx);
                const isCorrect = currentQuestion.correct_indexes.includes(idx);
                
                let optionClasses = "relative w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start space-x-3 group";
                
                if (currentShown) {
                  if (isCorrect) {
                    optionClasses += " border-emerald-500 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-500";
                  } else if (isSelected && !isCorrect) {
                    optionClasses += " border-rose-500 bg-rose-50 text-rose-900 ring-1 ring-rose-500";
                  } else {
                    optionClasses += " border-gray-100 bg-white text-gray-400 opacity-60";
                  }
                } else {
                  if (isSelected) {
                    optionClasses += " border-indigo-600 bg-indigo-50 text-indigo-900";
                  } else {
                    optionClasses += " border-gray-100 hover:border-gray-200 text-gray-700";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionToggle(idx)}
                    disabled={currentShown}
                    className={optionClasses}
                  >
                    <div className={cn(
                      "flex-shrink-0 w-6 h-6 rounded-md border flex items-center justify-center mt-0.5 transition-colors",
                      isSelected ? "bg-indigo-600 border-indigo-600 text-white" : "bg-white border-gray-300 text-transparent group-hover:border-gray-400"
                    )}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="flex-grow">{option}</span>
                    {currentShown && isCorrect && <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />}
                    {currentShown && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-50 border-t border-gray-100 px-8 py-6 flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-indigo-600 disabled:opacity-30 disabled:hover:text-gray-600 transition-colors font-medium"
            >
              <ChevronLeft className="mr-1 h-5 w-5" />
              Previous
            </button>

            {!currentShown ? (
              <button
                onClick={checkAnswer}
                disabled={currentSelected.length === 0}
                className="inline-flex items-center px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all"
              >
                {currentIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {currentShown && (
          <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Info className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 pt-1">Explanation</h3>
              </div>
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {currentQuestion.explanation || "No explanation provided."}
              </div>
              {currentQuestion.ai_generated && (
                <div className="mt-6 flex items-center p-3 bg-amber-50 border border-amber-100 rounded-lg text-amber-800 text-sm italic">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  This explanation was generated by AI and may contain inaccuracies.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
