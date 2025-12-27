'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';

type GameMode = 'find-square' | 'find-number' | 'perfect-squares';

function generateRandomNumber(): number {
  return Math.floor(Math.random() * 20) + 1; // 1 to 20
}

export function SquaresWholeNumbersInteractive() {
  const [gameMode, setGameMode] = useState<GameMode>('find-square');
  const [number, setNumber] = useState<number>(generateRandomNumber());
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);
  const [showWork, setShowWork] = useState(false);

  const square = number * number;

  const generateNewProblem = () => {
    setNumber(generateRandomNumber());
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

    if (gameMode === 'find-square') {
      if (answer === square) {
        setFeedback({ 
          type: 'correct', 
          message: `Excellent! ${number}² = ${square}. Great work!` 
        });
        setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        const difference = Math.abs(answer - square);
        setFeedback({ 
          type: 'incorrect', 
          message: `Not quite. ${number}² = ${square}. You were ${difference} ${difference === 1 ? 'number' : 'numbers'} off. Remember: square means multiply the number by itself!` 
        });
        setScore(prev => ({ total: prev.total + 1 }));
      }
    } else if (gameMode === 'find-number') {
      // Find the number whose square is given
      const correctNumber = Math.sqrt(parseInt(userAnswer));
      if (correctNumber === number && answer === number) {
        setFeedback({ 
          type: 'correct', 
          message: `Perfect! The number whose square is ${square} is ${number}. ${number}² = ${square}.` 
        });
        setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        setFeedback({ 
          type: 'incorrect', 
          message: `Not quite. The number whose square is ${square} is ${number}. ${number}² = ${square}.` 
        });
        setScore(prev => ({ total: prev.total + 1 }));
      }
    } else {
      // Perfect squares mode - check if answer is a perfect square
      const isPerfectSquare = Number.isInteger(Math.sqrt(answer));
      if (isPerfectSquare) {
        const root = Math.sqrt(answer);
        setFeedback({ 
          type: 'correct', 
          message: `Correct! ${answer} is a perfect square. ${root}² = ${answer}.` 
        });
        setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        setFeedback({ 
          type: 'incorrect', 
          message: `${answer} is NOT a perfect square. A perfect square is a number that is the square of a whole number (like 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, etc.).` 
        });
        setScore(prev => ({ total: prev.total + 1 }));
      }
    }
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    generateNewProblem();
  };

  const handleModeChange = (mode: GameMode) => {
    setGameMode(mode);
    generateNewProblem();
  };

  return (
    <div className="space-y-6">
      {/* Game Mode Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          onClick={() => handleModeChange('find-square')}
          variant={gameMode === 'find-square' ? 'default' : 'outline'}
          size="sm"
        >
          Find Square
        </Button>
        <Button
          onClick={() => handleModeChange('find-number')}
          variant={gameMode === 'find-number' ? 'default' : 'outline'}
          size="sm"
        >
          Find Number
        </Button>
        <Button
          onClick={() => handleModeChange('perfect-squares')}
          variant={gameMode === 'perfect-squares' ? 'default' : 'outline'}
          size="sm"
        >
          Perfect Squares
        </Button>
      </div>

      {/* Problem Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="text-center">
              {gameMode === 'find-square' && (
                <>
                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    Find the square of this number:
                  </p>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <MathRenderer display={true}>
                        {`${number}^2 = ?`}
                      </MathRenderer>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-slate-600">Answer:</span>
                      <input
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="?"
                        className="w-32 text-center font-bold text-primary border-2 border-primary/30 rounded px-3 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
                        autoFocus
                      />
                    </div>
                  </div>
                </>
              )}

              {gameMode === 'find-number' && (
                <>
                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    What number, when squared, equals this?
                  </p>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <MathRenderer display={true}>
                        {`?^2 = ${square}`}
                      </MathRenderer>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-slate-600">Answer:</span>
                      <input
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="?"
                        className="w-32 text-center font-bold text-primary border-2 border-primary/30 rounded px-3 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
                        autoFocus
                      />
                    </div>
                  </div>
                </>
              )}

              {gameMode === 'perfect-squares' && (
                <>
                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    Is this number a perfect square?
                  </p>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                    <p className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4">
                      {square}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-slate-600">Is this a perfect square?</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setUserAnswer('yes')}
                          className={`px-4 py-2 rounded border-2 font-semibold ${
                            userAnswer === 'yes'
                              ? 'bg-green-500 text-white border-green-600'
                              : 'bg-white border-slate-300 hover:bg-green-50'
                          }`}
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => setUserAnswer('no')}
                          className={`px-4 py-2 rounded border-2 font-semibold ${
                            userAnswer === 'no'
                              ? 'bg-red-500 text-white border-red-600'
                              : 'bg-white border-slate-300 hover:bg-red-50'
                          }`}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Hint */}
              {showHint && gameMode === 'find-square' && (
                <div className="bg-yellow-50 p-3 rounded border border-yellow-300 mb-4">
                  <p className="text-xs text-yellow-900">
                    💡 <span className="font-semibold">Hint:</span> To find the square, multiply {number} by itself: {number} × {number} = ?
                  </p>
                </div>
              )}

              {showHint && gameMode === 'find-number' && (
                <div className="bg-yellow-50 p-3 rounded border border-yellow-300 mb-4">
                  <p className="text-xs text-yellow-900">
                    💡 <span className="font-semibold">Hint:</span> What number multiplied by itself equals {square}? Try thinking of perfect squares you know.
                  </p>
                </div>
              )}

              {/* Show Work */}
              {showWork && gameMode === 'find-square' && (
                <div className="bg-purple-50 p-4 rounded border border-purple-300 mb-4">
                  <p className="text-xs font-semibold text-purple-900 mb-2">Step-by-step solution:</p>
                  <div className="text-xs text-purple-800 space-y-1">
                    <p>To find {number}², multiply {number} by itself:</p>
                    <p className="font-mono">{number} × {number}</p>
                    <p className="font-semibold mt-2">Answer: {square}</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 justify-center">
                <Button onClick={handleSubmit} className="flex-1 min-w-[120px]" disabled={!userAnswer}>
                  Check Answer
                </Button>
                {gameMode !== 'perfect-squares' && (
                  <>
                    <Button onClick={() => setShowHint(!showHint)} variant="outline" size="sm">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      {showHint ? 'Hide' : 'Show'} Hint
                    </Button>
                    {gameMode === 'find-square' && (
                      <Button onClick={() => setShowWork(!showWork)} variant="outline" size="sm">
                        {showWork ? 'Hide' : 'Show'} Work
                      </Button>
                    )}
                  </>
                )}
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
          <li>Choose a game mode: Find Square, Find Number, or Perfect Squares</li>
          <li><span className="font-semibold">Find Square:</span> Calculate the square of a given number</li>
          <li><span className="font-semibold">Find Number:</span> Find the number whose square is given</li>
          <li><span className="font-semibold">Perfect Squares:</span> Determine if a number is a perfect square</li>
          <li>Enter your answer and click "Check Answer"</li>
          <li>Use "Show Hint" or "Show Work" for help</li>
          <li>Click "New Problem" to practice more or "Reset Score" to start over</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Remember:</span> The square of a number is that number multiplied by itself. 
          A perfect square is a number that is the square of a whole number (like 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, etc.).
        </p>
      </div>
    </div>
  );
}

