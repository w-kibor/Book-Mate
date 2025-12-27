'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

type Operation = 'addition' | 'subtraction' | 'mixed';

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateAdditionProblem(level: number): { num1: number; num2: number; answer: number } {
  let num1: number, num2: number;
  
  switch (level) {
    case 1: // Easy: 2-digit numbers
      num1 = generateRandomNumber(10, 99);
      num2 = generateRandomNumber(10, 99);
      break;
    case 2: // Medium: 3-digit numbers
      num1 = generateRandomNumber(100, 999);
      num2 = generateRandomNumber(100, 999);
      break;
    case 3: // Hard: 4-digit numbers
      num1 = generateRandomNumber(1000, 9999);
      num2 = generateRandomNumber(1000, 9999);
      break;
    default:
      num1 = generateRandomNumber(10, 99);
      num2 = generateRandomNumber(10, 99);
  }
  
  return { num1, num2, answer: num1 + num2 };
}

function generateSubtractionProblem(level: number): { num1: number; num2: number; answer: number } {
  let num1: number, num2: number;
  
  switch (level) {
    case 1: // Easy: 2-digit numbers, no borrowing
      num1 = generateRandomNumber(20, 99);
      num2 = generateRandomNumber(10, num1 - 10);
      break;
    case 2: // Medium: 3-digit numbers with borrowing
      num1 = generateRandomNumber(200, 999);
      num2 = generateRandomNumber(100, num1 - 50);
      break;
    case 3: // Hard: 4-digit numbers with borrowing
      num1 = generateRandomNumber(2000, 9999);
      num2 = generateRandomNumber(1000, num1 - 500);
      break;
    default:
      num1 = generateRandomNumber(20, 99);
      num2 = generateRandomNumber(10, num1 - 10);
  }
  
  return { num1, num2, answer: num1 - num2 };
}

export function AdditionSubtractionInteractive() {
  const [operation, setOperation] = useState<Operation>('addition');
  const [level, setLevel] = useState<number>(1);
  const [problem, setProblem] = useState<{ num1: number; num2: number; answer: number; type: 'addition' | 'subtraction' }>(() => {
    const op = 'addition';
    const prob = generateAdditionProblem(1);
    return { ...prob, type: 'addition' };
  });
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);
  const [showWork, setShowWork] = useState(false);

  const isAddition = problem.type === 'addition';

  const generateNewProblem = () => {
    const op = operation === 'mixed' ? (Math.random() > 0.5 ? 'addition' : 'subtraction') : operation;
    const newProblem = op === 'addition' ? generateAdditionProblem(level) : generateSubtractionProblem(level);
    setProblem({ ...newProblem, type: op });
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
    setShowWork(false);
  };

  const handleSubmit = () => {
    const answer = parseInt(userAnswer);
    if (isNaN(answer)) {
      setFeedback({ type: 'incorrect', message: 'Please enter a valid number!' });
      return;
    }

    if (answer === problem.answer) {
      setFeedback({ 
        type: 'correct', 
        message: `Excellent! ${problem.num1} ${isAddition ? '+' : '-'} ${problem.num2} = ${problem.answer}. Great work!` 
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
          onClick={() => handleOperationChange('addition')}
          variant={operation === 'addition' ? 'default' : 'outline'}
          size="sm"
        >
          Addition
        </Button>
        <Button
          onClick={() => handleOperationChange('subtraction')}
          variant={operation === 'subtraction' ? 'default' : 'outline'}
          size="sm"
        >
          Subtraction
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
          Easy (2-digit)
        </Button>
        <Button
          onClick={() => handleLevelChange(2)}
          variant={level === 2 ? 'default' : 'outline'}
          size="sm"
          className="text-xs"
        >
          Medium (3-digit)
        </Button>
        <Button
          onClick={() => handleLevelChange(3)}
          variant={level === 3 ? 'default' : 'outline'}
          size="sm"
          className="text-xs"
        >
          Hard (4-digit)
        </Button>
      </div>

      {/* Problem Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm font-semibold text-slate-700 mb-4">
                {isAddition ? 'Solve this addition problem:' : 'Solve this subtraction problem:'}
              </p>
              
              {/* Visual Problem Display */}
              <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                <div className="font-mono text-2xl md:text-3xl space-y-2">
                  <div className="flex justify-end items-center gap-4">
                    <span className="text-slate-600 text-sm font-normal">+</span>
                    <span className="font-bold">{formatNumber(problem.num1)}</span>
                  </div>
                  <div className="flex justify-end items-center gap-4 border-b-2 border-slate-400 pb-2">
                    <span className="text-slate-600 text-sm font-normal">{isAddition ? '+' : '-'}</span>
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
              </div>

              {/* Hint */}
              {showHint && (
                <div className="bg-yellow-50 p-3 rounded border border-yellow-300 mb-4">
                  <p className="text-xs text-yellow-900">
                    {isAddition ? (
                      <>💡 <span className="font-semibold">Hint:</span> Add the ones first, then tens, then hundreds. Don't forget to carry over when the sum is 10 or more!</>
                    ) : (
                      <>💡 <span className="font-semibold">Hint:</span> Subtract from right to left. Borrow from the next higher place value when needed!</>
                    )}
                  </p>
                </div>
              )}

              {/* Show Work */}
              {showWork && (
                <div className="bg-purple-50 p-4 rounded border border-purple-300 mb-4">
                  <p className="text-xs font-semibold text-purple-900 mb-2">Step-by-step solution:</p>
                  {isAddition ? (
                    <div className="text-xs text-purple-800 space-y-1">
                      <p>1. Add the ones: {problem.num1 % 10} + {problem.num2 % 10} = {(problem.num1 % 10) + (problem.num2 % 10)}</p>
                      <p>2. Add the tens: {Math.floor((problem.num1 % 100) / 10)} + {Math.floor((problem.num2 % 100) / 10)} = {Math.floor((problem.num1 % 100) / 10) + Math.floor((problem.num2 % 100) / 10)}</p>
                      <p>3. Continue with hundreds, thousands, etc.</p>
                      <p className="font-semibold mt-2">Answer: {formatNumber(problem.answer)}</p>
                    </div>
                  ) : (
                    <div className="text-xs text-purple-800 space-y-1">
                      <p>1. Start from the right (ones place)</p>
                      <p>2. If the top digit is smaller, borrow from the next place</p>
                      <p>3. Subtract each place value from right to left</p>
                      <p className="font-semibold mt-2">Answer: {formatNumber(problem.answer)}</p>
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
          <li>Choose an operation (Addition, Subtraction, or Mixed) and difficulty level</li>
          <li>Solve the problem by entering your answer in the input field</li>
          <li>Click "Check Answer" to see if you're correct</li>
          <li>Use "Show Hint" for helpful tips or "Show Work" to see step-by-step solutions</li>
          <li>Click "New Problem" to practice more or "Reset Score" to start over</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Remember:</span> For addition, align numbers by place value and carry over when needed. 
          For subtraction, borrow from higher place values when the top digit is smaller.
        </p>
      </div>
    </div>
  );
}

