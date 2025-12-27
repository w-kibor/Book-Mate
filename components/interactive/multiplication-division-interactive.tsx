'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

type Operation = 'multiplication' | 'division' | 'mixed';

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMultiplicationProblem(level: number): { num1: number; num2: number; answer: number } {
  let num1: number, num2: number;
  
  switch (level) {
    case 1: // Easy: 2-digit × 1-digit or 2-digit × 2-digit (small)
      if (Math.random() > 0.5) {
        num1 = generateRandomNumber(10, 99);
        num2 = generateRandomNumber(2, 9);
      } else {
        num1 = generateRandomNumber(10, 50);
        num2 = generateRandomNumber(10, 20);
      }
      break;
    case 2: // Medium: 2-digit × 2-digit or 3-digit × 1-digit
      if (Math.random() > 0.5) {
        num1 = generateRandomNumber(10, 99);
        num2 = generateRandomNumber(10, 99);
      } else {
        num1 = generateRandomNumber(100, 999);
        num2 = generateRandomNumber(2, 9);
      }
      break;
    case 3: // Hard: 3-digit × 2-digit or 3-digit × 3-digit
      if (Math.random() > 0.5) {
        num1 = generateRandomNumber(100, 999);
        num2 = generateRandomNumber(10, 99);
      } else {
        num1 = generateRandomNumber(100, 500);
        num2 = generateRandomNumber(100, 200);
      }
      break;
    default:
      num1 = generateRandomNumber(10, 99);
      num2 = generateRandomNumber(2, 9);
  }
  
  return { num1, num2, answer: num1 * num2 };
}

function generateDivisionProblem(level: number): { num1: number; num2: number; answer: number; remainder: number } {
  let num1: number, num2: number;
  
  switch (level) {
    case 1: // Easy: 2-digit ÷ 1-digit (no remainder)
      num2 = generateRandomNumber(2, 9);
      const quotient1 = generateRandomNumber(2, 12);
      num1 = num2 * quotient1;
      return { num1, num2, answer: quotient1, remainder: 0 };
    case 2: // Medium: 3-digit ÷ 1-digit or 2-digit ÷ 2-digit
      if (Math.random() > 0.5) {
        num2 = generateRandomNumber(2, 9);
        const quotient2 = generateRandomNumber(10, 99);
        num1 = num2 * quotient2;
        return { num1, num2, answer: quotient2, remainder: 0 };
      } else {
        num2 = generateRandomNumber(10, 30);
        const quotient2 = generateRandomNumber(5, 20);
        const remainder = generateRandomNumber(0, num2 - 1);
        num1 = num2 * quotient2 + remainder;
        return { num1, num2, answer: quotient2, remainder };
      }
    case 3: // Hard: 3-digit ÷ 2-digit or 4-digit ÷ 2-digit
      if (Math.random() > 0.5) {
        num2 = generateRandomNumber(10, 99);
        const quotient3 = generateRandomNumber(5, 50);
        const remainder = generateRandomNumber(0, num2 - 1);
        num1 = num2 * quotient3 + remainder;
        return { num1, num2, answer: quotient3, remainder };
      } else {
        num2 = generateRandomNumber(10, 50);
        const quotient3 = generateRandomNumber(20, 100);
        const remainder = generateRandomNumber(0, num2 - 1);
        num1 = num2 * quotient3 + remainder;
        return { num1, num2, answer: quotient3, remainder };
      }
    default:
      num2 = generateRandomNumber(2, 9);
      const quotient = generateRandomNumber(2, 12);
      num1 = num2 * quotient;
      return { num1, num2, answer: quotient, remainder: 0 };
  }
}

export function MultiplicationDivisionInteractive() {
  const [operation, setOperation] = useState<Operation>('multiplication');
  const [level, setLevel] = useState<number>(1);
  const [problem, setProblem] = useState<{ num1: number; num2: number; answer: number; type: 'multiplication' | 'division'; remainder?: number }>(() => {
    const prob = generateMultiplicationProblem(1);
    return { ...prob, type: 'multiplication' };
  });
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [userRemainder, setUserRemainder] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);
  const [showWork, setShowWork] = useState(false);

  const isMultiplication = problem.type === 'multiplication';

  const generateNewProblem = () => {
    const op = operation === 'mixed' ? (Math.random() > 0.5 ? 'multiplication' : 'division') : operation;
    
    if (op === 'multiplication') {
      const newProblem = generateMultiplicationProblem(level);
      setProblem({ ...newProblem, type: 'multiplication' });
    } else {
      const newProblem = generateDivisionProblem(level);
      setProblem({ ...newProblem, type: 'division' });
    }
    
    setUserAnswer('');
    setUserRemainder('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
    setShowWork(false);
  };

  const handleSubmit = () => {
    const answer = parseInt(userAnswer);
    const remainder = userRemainder ? parseInt(userRemainder) : 0;
    
    if (isNaN(answer)) {
      setFeedback({ type: 'incorrect', message: 'Please enter a valid number!' });
      return;
    }

    if (isMultiplication) {
      if (answer === problem.answer) {
        setFeedback({ 
          type: 'correct', 
          message: `Excellent! ${problem.num1} × ${problem.num2} = ${problem.answer}. Great work!` 
        });
        setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        const difference = Math.abs(answer - problem.answer);
        setFeedback({ 
          type: 'incorrect', 
          message: `Not quite. The correct answer is ${problem.answer}. You were ${difference} ${difference === 1 ? 'number' : 'numbers'} off. Try again!` 
        });
        setScore(prev => ({ total: prev.total + 1 }));
      }
    } else {
      // Division
      if (answer === problem.answer && remainder === (problem.remainder || 0)) {
        const remainderText = problem.remainder ? ` with remainder ${problem.remainder}` : '';
        setFeedback({ 
          type: 'correct', 
          message: `Perfect! ${problem.num1} ÷ ${problem.num2} = ${problem.answer}${remainderText}. Excellent work!` 
        });
        setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        const remainderText = problem.remainder ? ` with remainder ${problem.remainder}` : '';
        setFeedback({ 
          type: 'incorrect', 
          message: `Not quite. The correct answer is ${problem.answer}${remainderText}. Remember: (Quotient × Divisor) + Remainder = Dividend` 
        });
        setScore(prev => ({ total: prev.total + 1 }));
      }
    }
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    generateNewProblem();
  };

  const handleOperationChange = (newOp: Operation) => {
    setOperation(newOp);
    generateNewProblem();
  };

  const handleLevelChange = (newLevel: number) => {
    setLevel(newLevel);
    generateNewProblem();
  };

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <div className="space-y-6">
      {/* Operation Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          onClick={() => handleOperationChange('multiplication')}
          variant={operation === 'multiplication' ? 'default' : 'outline'}
          size="sm"
        >
          Multiplication
        </Button>
        <Button
          onClick={() => handleOperationChange('division')}
          variant={operation === 'division' ? 'default' : 'outline'}
          size="sm"
        >
          Division
        </Button>
        <Button
          onClick={() => handleOperationChange('mixed')}
          variant={operation === 'mixed' ? 'default' : 'outline'}
          size="sm"
        >
          Mixed
        </Button>
      </div>

      {/* Difficulty Level */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          onClick={() => handleLevelChange(1)}
          variant={level === 1 ? 'default' : 'outline'}
          size="sm"
          className="text-xs"
        >
          Easy
        </Button>
        <Button
          onClick={() => handleLevelChange(2)}
          variant={level === 2 ? 'default' : 'outline'}
          size="sm"
          className="text-xs"
        >
          Medium
        </Button>
        <Button
          onClick={() => handleLevelChange(3)}
          variant={level === 3 ? 'default' : 'outline'}
          size="sm"
          className="text-xs"
        >
          Hard
        </Button>
      </div>

      {/* Problem Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm font-semibold text-slate-700 mb-4">
                {isMultiplication ? 'Solve this multiplication problem:' : 'Solve this division problem:'}
              </p>
              
              {/* Visual Problem Display */}
              <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                {isMultiplication ? (
                  <div className="font-mono text-2xl md:text-3xl space-y-2">
                    <div className="flex justify-end items-center gap-4">
                      <span className="text-slate-600 text-sm font-normal">×</span>
                      <span className="font-bold">{formatNumber(problem.num1)}</span>
                    </div>
                    <div className="flex justify-end items-center gap-4 border-b-2 border-slate-400 pb-2">
                      <span className="text-slate-600 text-sm font-normal">×</span>
                      <span className="font-bold">{formatNumber(problem.num2)}</span>
                    </div>
                    <div className="flex justify-end items-center gap-4 border-t-2 border-primary pt-2 mt-2">
                      <span className="text-primary text-sm font-normal">=</span>
                      <input
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="?"
                        className="w-32 md:w-40 text-right font-bold text-primary border-2 border-primary/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        autoFocus
                      />
                    </div>
                  </div>
                ) : (
                  <div className="font-mono text-2xl md:text-3xl space-y-2">
                    <div className="flex justify-end items-center gap-4 border-b-2 border-slate-400 pb-2">
                      <span className="text-primary font-bold text-lg md:text-xl">
                        <input
                          type="number"
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          placeholder="?"
                          className="w-20 md:w-24 text-right font-bold text-primary border-2 border-primary/30 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
                          autoFocus
                        />
                      </span>
                      {problem.remainder !== undefined && problem.remainder > 0 && (
                        <span className="text-red-600 text-sm">
                          R
                          <input
                            type="number"
                            value={userRemainder}
                            onChange={(e) => setUserRemainder(e.target.value)}
                            placeholder="?"
                            className="w-12 text-right font-bold text-red-600 border-2 border-red-300 rounded px-1 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                          />
                        </span>
                      )}
                    </div>
                    <div className="flex justify-end items-center gap-4 pt-2">
                      <span className="text-slate-600 text-sm font-normal">÷</span>
                      <span className="font-bold">{formatNumber(problem.num2)}</span>
                      <span className="text-slate-600 text-sm font-normal">=</span>
                      <span className="font-bold">{formatNumber(problem.num1)}</span>
                    </div>
                    {problem.remainder === 0 && (
                      <p className="text-xs text-muted-foreground mt-2">(No remainder)</p>
                    )}
                  </div>
                )}
              </div>

              {/* Hint */}
              {showHint && (
                <div className="bg-yellow-50 p-3 rounded border border-yellow-300 mb-4">
                  <p className="text-xs text-yellow-900">
                    {isMultiplication ? (
                      <>💡 <span className="font-semibold">Hint:</span> Multiply each digit of the second number by each digit of the first number. Add the partial products correctly!</>
                    ) : (
                      <>💡 <span className="font-semibold">Hint:</span> Divide from left to right. Bring down digits as needed. Check: (Quotient × Divisor) + Remainder = Dividend!</>
                    )}
                  </p>
                </div>
              )}

              {/* Show Work */}
              {showWork && (
                <div className="bg-purple-50 p-4 rounded border border-purple-300 mb-4">
                  <p className="text-xs font-semibold text-purple-900 mb-2">Step-by-step solution:</p>
                  {isMultiplication ? (
                    <div className="text-xs text-purple-800 space-y-1">
                      <p>1. Multiply {problem.num1} by each digit of {problem.num2}</p>
                      <p>2. Write partial products, shifting left for each place value</p>
                      <p>3. Add all partial products together</p>
                      <p className="font-semibold mt-2">Answer: {formatNumber(problem.answer)}</p>
                    </div>
                  ) : (
                    <div className="text-xs text-purple-800 space-y-1">
                      <p>1. Divide {problem.num1} by {problem.num2}</p>
                      <p>2. Find how many times {problem.num2} fits into each part</p>
                      <p>3. Multiply, subtract, and bring down digits</p>
                      {problem.remainder ? (
                        <p className="font-semibold mt-2">Answer: {problem.answer} remainder {problem.remainder}</p>
                      ) : (
                        <p className="font-semibold mt-2">Answer: {problem.answer} (no remainder)</p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 justify-center">
                <Button onClick={handleSubmit} className="flex-1 min-w-[120px]" disabled={!userAnswer.trim()}>
                  Check Answer
                </Button>
                <Button onClick={() => setShowHint(!showHint)} variant="outline" size="sm">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  {showHint ? 'Hide' : 'Show'} Hint
                </Button>
                <Button onClick={() => setShowWork(!showWork)} variant="outline" size="sm">
                  {showWork ? 'Hide' : 'Show'} Work
                </Button>
              </div>
            </div>
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
          <Button onClick={generateNewProblem} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            New Problem
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
          <li>Choose an operation (Multiplication, Division, or Mixed) and difficulty level</li>
          <li>Solve the problem by entering your answer in the input field</li>
          <li>For division with remainder, enter both the quotient and remainder (R)</li>
          <li>Click "Check Answer" to see if you're correct</li>
          <li>Use "Show Hint" for helpful tips or "Show Work" to see step-by-step solutions</li>
          <li>Click "New Problem" to practice more or "Reset Score" to start over</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Remember:</span> For multiplication, multiply each digit and add partial products. 
          For division, check your answer: (Quotient × Divisor) + Remainder = Dividend.
        </p>
      </div>
    </div>
  );
}

