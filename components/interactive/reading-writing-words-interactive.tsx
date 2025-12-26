'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MathRenderer } from '@/components/math/math-renderer';
import { RefreshCw, CheckCircle2, XCircle } from 'lucide-react';

type QuestionType = 'read' | 'write';

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function generateRandomNumber(): number {
  return Math.floor(Math.random() * 900_000_000) + 100_000_000;
}

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatNumberForMath(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
}

function numberToWords(num: number): string {
  if (num === 0) return 'zero';
  
  const numStr = num.toString().padStart(9, '0');
  const parts: string[] = [];
  
  // Helper function to convert 3-digit group to words
  const convertThreeDigits = (h: number, t: number, o: number): string => {
    const result: string[] = [];
    if (h > 0) {
      result.push(`${ones[h]} hundred`);
    }
    if (t === 1) {
      result.push(teens[o]);
    } else if (t > 1) {
      if (o > 0) {
        result.push(`${tens[t]}-${ones[o]}`);
      } else {
        result.push(tens[t]);
      }
    } else if (o > 0) {
      result.push(ones[o]);
    }
    return result.join(' ');
  };
  
  // Hundreds of millions and tens of millions
  const hm = parseInt(numStr[0]);
  const tm = parseInt(numStr[1]);
  const m = parseInt(numStr[2]);
  
  if (hm > 0 || tm > 0 || m > 0) {
    const millions = convertThreeDigits(hm, tm, m);
    if (millions) {
      parts.push(`${millions} million`);
    }
  }
  
  // Thousands
  const ht = parseInt(numStr[3]);
  const tt = parseInt(numStr[4]);
  const t = parseInt(numStr[5]);
  
  if (ht > 0 || tt > 0 || t > 0) {
    const thousands = convertThreeDigits(ht, tt, t);
    if (thousands) {
      parts.push(`${thousands} thousand`);
    }
  }
  
  // Ones
  const ho = parseInt(numStr[6]);
  const to = parseInt(numStr[7]);
  const o = parseInt(numStr[8]);
  
  if (ho > 0 || to > 0 || o > 0) {
    const onesPart = convertThreeDigits(ho, to, o);
    if (onesPart) {
      parts.push(onesPart);
    }
  }
  
  return parts.join(', ');
}

function wordsToNumber(words: string): number | null {
  // Simplified parser - remove common variations and normalize
  const normalized = words.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  
  // This is a simplified version - a full implementation would be more complex
  // For now, we'll use a basic approach that works for most cases
  try {
    // Try to extract numbers from common patterns
    const parts = normalized.split(',').map(p => p.trim());
    let total = 0;
    
    for (const part of parts) {
      if (part.includes('million')) {
        const numPart = part.replace('million', '').trim();
        // Extract number from words (simplified)
        const num = extractNumberFromWords(numPart);
        total += num * 1_000_000;
      } else if (part.includes('thousand')) {
        const numPart = part.replace('thousand', '').trim();
        const num = extractNumberFromWords(numPart);
        total += num * 1_000;
      } else {
        const num = extractNumberFromWords(part);
        total += num;
      }
    }
    
    return total > 0 ? total : null;
  } catch {
    return null;
  }
}

function extractNumberFromWords(words: string): number {
  // Very simplified - in production you'd want a more robust parser
  const parts = words.split(/\s|-/);
  let result = 0;
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (part.includes('hundred')) {
      const hundredIndex = ones.indexOf(part.replace('hundred', '').trim());
      if (hundredIndex > 0) {
        result += hundredIndex * 100;
      }
    } else {
      const onesIndex = ones.indexOf(part);
      const tensIndex = tens.indexOf(part);
      const teensIndex = teens.indexOf(part);
      
      if (onesIndex > 0) {
        result += onesIndex;
      } else if (tensIndex > 1) {
        result += tensIndex * 10;
      } else if (teensIndex >= 0) {
        result += 10 + teensIndex;
      }
    }
  }
  
  return result;
}

export function ReadingWritingWordsInteractive() {
  const [questionType, setQuestionType] = useState<QuestionType>('read');
  const [number, setNumber] = useState<number>(generateRandomNumber());
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showAnswer, setShowAnswer] = useState(false);

  const numberInWords = numberToWords(number);
  const formattedNumber = formatNumber(number);

  const handleSubmit = () => {
    if (!userAnswer.trim()) {
      setFeedback({ type: 'incorrect', message: 'Please enter your answer!' });
      return;
    }

    if (questionType === 'read') {
      // For reading, normalize and compare
      const userNormalized = userAnswer.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      const correctNormalized = numberInWords.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      
      // More lenient matching - check if key parts match
      const userWords = userNormalized.split(/\s|,/);
      const correctWords = correctNormalized.split(/\s|,/);
      const matchCount = userWords.filter(w => correctWords.includes(w) && w.length > 2).length;
      const isCorrect = matchCount >= correctWords.length * 0.7 || 
                       userNormalized.includes(correctNormalized.split(',')[0]) ||
                       correctNormalized.includes(userNormalized.split(',')[0]);
      
      if (isCorrect) {
        setFeedback({ 
          type: 'correct', 
          message: `Excellent! The number ${formattedNumber} is written as: "${numberInWords}"` 
        });
        setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        setFeedback({ 
          type: 'incorrect', 
          message: `Not quite. The correct answer is: "${numberInWords}". Remember to use commas between groups and hyphens for numbers 21-99.` 
        });
        setScore(prev => ({ total: prev.total + 1 }));
      }
    } else {
      // For writing, check if the number matches
      const userNum = parseInt(userAnswer.replace(/,/g, ''));
      if (userNum === number) {
        setFeedback({ 
          type: 'correct', 
          message: `Perfect! "${numberInWords}" written in symbols is: ${formattedNumber}` 
        });
        setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        setFeedback({ 
          type: 'incorrect', 
          message: `Incorrect. The correct answer is: ${formattedNumber}. Try breaking down the words into groups (millions, thousands, ones).` 
        });
        setScore(prev => ({ total: prev.total + 1 }));
      }
    }
  };

  const handleNewQuestion = () => {
    setNumber(generateRandomNumber());
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowAnswer(false);
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    handleNewQuestion();
  };

  return (
    <div className="space-y-6">
      {/* Question Type Selector */}
      <div className="flex gap-2 justify-center">
        <Button
          onClick={() => {
            setQuestionType('read');
            handleNewQuestion();
          }}
          variant={questionType === 'read' ? 'default' : 'outline'}
          size="sm"
        >
          Read Numbers (Symbols → Words)
        </Button>
        <Button
          onClick={() => {
            setQuestionType('write');
            handleNewQuestion();
          }}
          variant={questionType === 'write' ? 'default' : 'outline'}
          size="sm"
        >
          Write Numbers (Words → Symbols)
        </Button>
      </div>

      {/* Question Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            {questionType === 'read' ? (
              <>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Write this number in words:</p>
                  <p className="text-4xl font-bold text-primary font-mono">
                    <MathRenderer>{formatNumberForMath(number)}</MathRenderer>
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Remember: Use commas between groups, hyphens for 21-99
                  </p>
                </div>
                <div className="border-t border-blue-300 pt-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Type the number in words:</p>
                  <textarea
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="e.g., five hundred seventy-two million, six hundred forty-eight thousand, three hundred nineteen"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm min-h-[120px]"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Write this number in symbols:</p>
                  <p className="text-2xl font-semibold text-slate-800 italic leading-relaxed">
                    "{numberInWords}"
                  </p>
                </div>
                <div className="border-t border-blue-300 pt-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Enter the number in symbols (use commas for grouping):</p>
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value.replace(/[^0-9,]/g, ''))}
                    placeholder="e.g., 123,456,789"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg font-mono text-center"
                  />
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Break down: millions, thousands, ones
                  </p>
                </div>
              </>
            )}
            
            <div className="flex gap-2">
              <Button onClick={handleSubmit} className="flex-1">
                Check Answer
              </Button>
              <Button onClick={() => setShowAnswer(!showAnswer)} variant="outline">
                {showAnswer ? 'Hide' : 'Show'} Answer
              </Button>
            </div>

            {showAnswer && (
              <div className="bg-white p-3 rounded border border-blue-300">
                <p className="text-sm font-semibold text-slate-700 mb-1">Correct Answer:</p>
                {questionType === 'read' ? (
                  <p className="text-sm text-slate-700 italic">{numberInWords}</p>
                ) : (
                  <p className="text-lg font-mono text-primary">{formattedNumber}</p>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Feedback */}
      {feedback.type && (
        <Card className={feedback.type === 'correct' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              {feedback.type === 'correct' ? (
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <p className={`text-sm ${feedback.type === 'correct' ? 'text-green-900' : 'text-red-900'}`}>
                {feedback.message}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Score and Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <div className="text-sm">
          <span className="font-semibold text-slate-700">Score: </span>
          <span className="text-primary font-bold">{score.correct}</span>
          <span className="text-muted-foreground"> / {score.total}</span>
          {score.total > 0 && (
            <span className="text-muted-foreground ml-2">
              ({Math.round((score.correct / score.total) * 100)}%)
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <Button onClick={handleNewQuestion} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            New Question
          </Button>
          <Button onClick={handleReset} variant="ghost" size="sm">
            Reset Score
          </Button>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <p className="text-xs font-semibold text-blue-900 mb-2">How to use:</p>
        <ol className="list-decimal list-inside space-y-1 text-xs text-blue-800">
          <li>Choose "Read Numbers" to practice writing numbers in words, or "Write Numbers" to practice writing numbers in symbols</li>
          <li>Read the question carefully</li>
          <li>Enter your answer in the text field</li>
          <li>Click "Check Answer" to see if you're correct</li>
          <li>Use "Show Answer" if you need help</li>
          <li>Click "New Question" to practice with a different number</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Tips:</span> Use commas between groups (millions, thousands). Use hyphens for numbers 21-99 (e.g., twenty-one, thirty-four).
        </p>
      </div>
    </div>
  );
}

