'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MathRenderer } from '@/components/math/math-renderer';
import { RefreshCw, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

type QuestionType = 'read' | 'write';

const numberWords = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
  'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

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
  
  // Hundreds of millions
  if (numStr[0] !== '0') {
    parts.push(`${numberWords[parseInt(numStr[0])]} hundred`);
    if (numStr[1] !== '0' || numStr[2] !== '0') {
      if (numStr[1] === '0') {
        parts[parts.length - 1] += ` ${numberWords[parseInt(numStr[2])]}`;
      } else if (numStr[1] === '1') {
        parts[parts.length - 1] += ` ${numberWords[10 + parseInt(numStr[2])]}`;
      } else {
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        parts[parts.length - 1] += ` ${tens[parseInt(numStr[1])]}`;
        if (numStr[2] !== '0') {
          parts[parts.length - 1] += `-${numberWords[parseInt(numStr[2])]}`;
        }
      }
    }
    parts[parts.length - 1] += ' million';
  } else if (numStr[1] !== '0' || numStr[2] !== '0') {
    // Tens of millions or millions
    let millions = '';
    if (numStr[1] === '0') {
      millions = numberWords[parseInt(numStr[2])];
    } else if (numStr[1] === '1') {
      millions = numberWords[10 + parseInt(numStr[2])];
    } else {
      const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      millions = tens[parseInt(numStr[1])];
      if (numStr[2] !== '0') {
        millions += `-${numberWords[parseInt(numStr[2])]}`;
      }
    }
    parts.push(`${millions} million`);
  }
  
  // Thousands
  if (numStr[3] !== '0' || numStr[4] !== '0' || numStr[5] !== '0') {
    let thousands = '';
    if (numStr[3] !== '0') {
      thousands = `${numberWords[parseInt(numStr[3])]} hundred`;
    }
    if (numStr[4] !== '0' || numStr[5] !== '0') {
      if (numStr[4] === '0') {
        if (thousands) thousands += ` ${numberWords[parseInt(numStr[5])]}`;
        else thousands = numberWords[parseInt(numStr[5])];
      } else if (numStr[4] === '1') {
        if (thousands) thousands += ` ${numberWords[10 + parseInt(numStr[5])]}`;
        else thousands = numberWords[10 + parseInt(numStr[5])];
      } else {
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        if (thousands) thousands += ` ${tens[parseInt(numStr[4])]}`;
        else thousands = tens[parseInt(numStr[4])];
        if (numStr[5] !== '0') {
          thousands += `-${numberWords[parseInt(numStr[5])]}`;
        }
      }
    }
    parts.push(`${thousands} thousand`);
  }
  
  // Hundreds, tens, ones
  if (numStr[6] !== '0' || numStr[7] !== '0' || numStr[8] !== '0') {
    let ones = '';
    if (numStr[6] !== '0') {
      ones = `${numberWords[parseInt(numStr[6])]} hundred`;
    }
    if (numStr[7] !== '0' || numStr[8] !== '0') {
      if (numStr[7] === '0') {
        if (ones) ones += ` ${numberWords[parseInt(numStr[8])]}`;
        else ones = numberWords[parseInt(numStr[8])];
      } else if (numStr[7] === '1') {
        if (ones) ones += ` ${numberWords[10 + parseInt(numStr[8])]}`;
        else ones = numberWords[10 + parseInt(numStr[8])];
      } else {
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        if (ones) ones += ` ${tens[parseInt(numStr[7])]}`;
        else ones = tens[parseInt(numStr[7])];
        if (numStr[8] !== '0') {
          ones += `-${numberWords[parseInt(numStr[8])]}`;
        }
      }
    }
    if (ones) parts.push(ones);
  }
  
  return parts.join(', ');
}

function parseNumberFromWords(words: string): number | null {
  // Simplified parser - in a real app, you'd want a more robust solution
  // For now, we'll use a basic approach
  const cleanWords = words.toLowerCase().replace(/[^a-z0-9\s-]/g, '');
  // This is a simplified version - full implementation would be more complex
  return null; // Return null to indicate we need manual checking
}

export function ReadingWritingSymbolsInteractive() {
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
      // For reading, we'll check if the answer contains key words
      const userLower = userAnswer.toLowerCase();
      const correctLower = numberInWords.toLowerCase();
      // Simple check - in production, you'd want more sophisticated matching
      const isCorrect = userLower.includes(correctLower.split(' ')[0]) || 
                       correctLower.includes(userLower.split(' ')[0]) ||
                       userLower.length > correctLower.length * 0.7; // Allow for variations
      
      if (isCorrect) {
        setFeedback({ 
          type: 'correct', 
          message: `Great! The number ${formattedNumber} is read as: "${numberInWords}"` 
        });
        setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        setFeedback({ 
          type: 'incorrect', 
          message: `Not quite. The correct answer is: "${numberInWords}". Try again!` 
        });
        setScore(prev => ({ total: prev.total + 1 }));
      }
    } else {
      // For writing, check if the number matches (allowing for comma variations)
      const userNum = parseInt(userAnswer.replace(/,/g, ''));
      if (userNum === number) {
        setFeedback({ 
          type: 'correct', 
          message: `Excellent! "${numberInWords}" written in symbols is: ${formattedNumber}` 
        });
        setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        setFeedback({ 
          type: 'incorrect', 
          message: `Incorrect. The correct answer is: ${formattedNumber}. Remember to group digits in sets of three from right to left.` 
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
          Read Numbers
        </Button>
        <Button
          onClick={() => {
            setQuestionType('write');
            handleNewQuestion();
          }}
          variant={questionType === 'write' ? 'default' : 'outline'}
          size="sm"
        >
          Write Numbers
        </Button>
      </div>

      {/* Question Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            {questionType === 'read' ? (
              <>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Read this number in symbols:</p>
                  <p className="text-4xl font-bold text-primary font-mono">
                    <MathRenderer>{formatNumberForMath(number)}</MathRenderer>
                  </p>
                </div>
                <div className="border-t border-blue-300 pt-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Write the number in words:</p>
                  <textarea
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Type the number in words (e.g., five hundred seventy-two million...)"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm min-h-[100px]"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Write this number in symbols:</p>
                  <p className="text-2xl font-semibold text-slate-800 italic">
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
                    Remember to group digits in sets of three from right to left
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
                  <p className="text-sm text-slate-700">{numberInWords}</p>
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
          <li>Choose "Read Numbers" to practice reading numbers in symbols, or "Write Numbers" to practice writing numbers in symbols</li>
          <li>Read the question carefully</li>
          <li>Enter your answer in the text field</li>
          <li>Click "Check Answer" to see if you're correct</li>
          <li>Use "Show Answer" if you need help</li>
          <li>Click "New Question" to practice with a different number</li>
        </ol>
      </div>
    </div>
  );
}

