'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MathRenderer } from '@/components/math/math-renderer';
import { RefreshCw, CheckCircle2, XCircle } from 'lucide-react';

// First 100 prime numbers for reference
const primesUpTo100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function isPrime(num: number): boolean {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function getFactors(num: number): number[] {
  const factors: number[] = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function generateRandomNumber(): number {
  // Generate numbers between 2 and 100
  return Math.floor(Math.random() * 99) + 2;
}

type GameMode = 'classify' | 'find-factors' | 'prime-list';

export function PrimeNumbersInteractive() {
  const [gameMode, setGameMode] = useState<GameMode>('classify');
  const [number, setNumber] = useState<number>(generateRandomNumber());
  const [userAnswer, setUserAnswer] = useState<'prime' | 'composite' | null>(null);
  const [userFactors, setUserFactors] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showFactors, setShowFactors] = useState(false);

  const isNumberPrime = isPrime(number);
  const factors = getFactors(number);

  const handleClassifySubmit = () => {
    if (userAnswer === null) {
      setFeedback({ type: 'incorrect', message: 'Please select an answer!' });
      return;
    }

    const correctAnswer = isNumberPrime ? 'prime' : 'composite';
    if (userAnswer === correctAnswer) {
      setFeedback({ 
        type: 'correct', 
        message: `Correct! ${number} is ${correctAnswer}. It has ${factors.length} factor(s): ${factors.join(', ')}. ${isNumberPrime ? 'A prime number has exactly 2 factors.' : 'A composite number has more than 2 factors.'}` 
      });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback({ 
        type: 'incorrect', 
        message: `Incorrect. ${number} is ${correctAnswer}. It has ${factors.length} factor(s): ${factors.join(', ')}. ${isNumberPrime ? 'A prime number has exactly 2 factors (1 and itself).' : 'A composite number has more than 2 factors.'}` 
      });
      setScore(prev => ({ total: prev.total + 1 }));
    }
  };

  const handleFactorsSubmit = () => {
    const userFactorsList = userFactors.split(',').map(f => parseInt(f.trim())).filter(n => !isNaN(n) && n > 0).sort((a, b) => a - b);
    const correctFactors = factors;

    if (userFactorsList.length === correctFactors.length && 
        userFactorsList.every((f, i) => f === correctFactors[i])) {
      setFeedback({ 
        type: 'correct', 
        message: `Perfect! The factors of ${number} are: ${correctFactors.join(', ')}. ${isNumberPrime ? 'Since it has exactly 2 factors, it is a prime number.' : 'Since it has more than 2 factors, it is a composite number.'}` 
      });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback({ 
        type: 'incorrect', 
        message: `Not quite. The correct factors of ${number} are: ${correctFactors.join(', ')}. Try listing all numbers that divide ${number} evenly.` 
      });
      setScore(prev => ({ total: prev.total + 1 }));
    }
  };

  const handleNewNumber = () => {
    setNumber(generateRandomNumber());
    setUserAnswer(null);
    setUserFactors('');
    setFeedback({ type: null, message: '' });
    setShowFactors(false);
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    handleNewNumber();
  };

  return (
    <div className="space-y-6">
      {/* Game Mode Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          onClick={() => {
            setGameMode('classify');
            handleNewNumber();
          }}
          variant={gameMode === 'classify' ? 'default' : 'outline'}
          size="sm"
        >
          Classify Numbers
        </Button>
        <Button
          onClick={() => {
            setGameMode('find-factors');
            handleNewNumber();
          }}
          variant={gameMode === 'find-factors' ? 'default' : 'outline'}
          size="sm"
        >
          Find Factors
        </Button>
        <Button
          onClick={() => {
            setGameMode('prime-list');
            handleNewNumber();
          }}
          variant={gameMode === 'prime-list' ? 'default' : 'outline'}
          size="sm"
        >
          Prime Numbers List
        </Button>
      </div>

      {/* Classify Mode */}
      {gameMode === 'classify' && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-700 mb-2">Is this number prime or composite?</p>
                <p className="text-5xl font-bold text-primary font-mono mb-2">
                  {number}
                </p>
                <p className="text-xs text-muted-foreground">
                  Remember: Prime = exactly 2 factors, Composite = more than 2 factors
                </p>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setUserAnswer('prime')}
                  className={`
                    px-6 py-4 rounded-lg border-2 font-semibold text-lg transition-all
                    ${userAnswer === 'prime'
                      ? 'bg-green-500 text-white border-green-600 shadow-lg scale-105'
                      : 'bg-white text-green-700 border-green-300 hover:bg-green-50'
                    }
                  `}
                >
                  Prime
                </button>
                <button
                  onClick={() => setUserAnswer('composite')}
                  className={`
                    px-6 py-4 rounded-lg border-2 font-semibold text-lg transition-all
                    ${userAnswer === 'composite'
                      ? 'bg-blue-500 text-white border-blue-600 shadow-lg scale-105'
                      : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-50'
                    }
                  `}
                >
                  Composite
                </button>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleClassifySubmit} className="flex-1" disabled={userAnswer === null}>
                  Check Answer
                </Button>
                <Button onClick={() => setShowFactors(!showFactors)} variant="outline">
                  {showFactors ? 'Hide' : 'Show'} Factors
                </Button>
              </div>

              {showFactors && (
                <div className="bg-white p-3 rounded border border-blue-300">
                  <p className="text-sm font-semibold text-slate-700 mb-1">Factors of {number}:</p>
                  <p className="text-sm text-slate-600">
                    {factors.join(', ')} ({factors.length} factor{factors.length !== 1 ? 's' : ''})
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Find Factors Mode */}
      {gameMode === 'find-factors' && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-700 mb-2">Find all factors of this number:</p>
                <p className="text-5xl font-bold text-primary font-mono mb-2">
                  {number}
                </p>
                <p className="text-xs text-muted-foreground">
                  Enter all factors separated by commas (e.g., 1, 2, 3, 6)
                </p>
              </div>

              <div>
                <input
                  type="text"
                  value={userFactors}
                  onChange={(e) => setUserFactors(e.target.value)}
                  placeholder="e.g., 1, 2, 3, 6"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg text-center"
                />
              </div>

              <Button onClick={handleFactorsSubmit} className="w-full" disabled={!userFactors.trim()}>
                Check Answer
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Prime List Mode */}
      {gameMode === 'prime-list' && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-700 text-center mb-4">
                Prime Numbers from 1 to 100
              </p>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {primesUpTo100.map((prime) => (
                  <div
                    key={prime}
                    className="bg-primary/20 p-2 rounded border border-primary/40 text-center"
                  >
                    <span className="text-sm font-bold text-primary">{prime}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">
                There are {primesUpTo100.length} prime numbers from 1 to 100. 
                Notice that 2 is the only even prime number!
              </p>
              <div className="bg-white p-3 rounded border border-blue-300">
                <p className="text-xs font-semibold text-slate-700 mb-2">Key Observations:</p>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                  <li>2 is the only even prime number</li>
                  <li>All other prime numbers are odd</li>
                  <li>Prime numbers become less frequent as numbers get larger</li>
                  <li>There is no pattern to predict prime numbers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Feedback */}
      {feedback.type && gameMode !== 'prime-list' && (
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
          {gameMode !== 'prime-list' && (
            <Button onClick={handleNewNumber} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              New Number
            </Button>
          )}
          <Button onClick={handleReset} variant="ghost" size="sm">
            Reset Score
          </Button>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <p className="text-xs font-semibold text-blue-900 mb-2">How to use:</p>
        <ol className="list-decimal list-inside space-y-1 text-xs text-blue-800">
          <li>Choose a game mode: Classify Numbers, Find Factors, or Prime Numbers List</li>
          <li><span className="font-semibold">Classify Numbers:</span> Determine if a number is prime or composite</li>
          <li><span className="font-semibold">Find Factors:</span> List all factors of a given number</li>
          <li><span className="font-semibold">Prime Numbers List:</span> View all prime numbers from 1 to 100</li>
          <li>Get instant feedback and track your score!</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Remember:</span> A prime number has exactly 2 factors (1 and itself). 
          A composite number has more than 2 factors.
        </p>
      </div>
    </div>
  );
}

