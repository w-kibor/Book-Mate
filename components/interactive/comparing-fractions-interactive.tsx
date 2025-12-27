'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

function compareFractions(num1: number, den1: number, num2: number, den2: number): number {
  // Returns: -1 if first < second, 0 if equal, 1 if first > second
  const product1 = num1 * den2;
  const product2 = num2 * den1;
  if (product1 < product2) return -1;
  if (product1 > product2) return 1;
  return 0;
}

function generateFraction(): { numerator: number; denominator: number } {
  const denominator = Math.floor(Math.random() * 12) + 2; // 2 to 13
  const numerator = Math.floor(Math.random() * (denominator - 1)) + 1; // 1 to denominator-1
  const commonFactor = gcd(numerator, denominator);
  return {
    numerator: numerator / commonFactor,
    denominator: denominator / commonFactor
  };
}

type ComparisonType = 'compare' | 'order';

export function ComparingFractionsInteractive() {
  const [gameMode, setGameMode] = useState<ComparisonType>('compare');
  const [fraction1, setFraction1] = useState(() => generateFraction());
  const [fraction2, setFraction2] = useState(() => generateFraction());
  const [fractions, setFractions] = useState<Array<{ numerator: number; denominator: number }>>(() => {
    const fracs = [];
    for (let i = 0; i < 3; i++) {
      fracs.push(generateFraction());
    }
    return fracs;
  });
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);
  const [showMethod, setShowMethod] = useState(false);

  const generateNewProblem = () => {
    if (gameMode === 'compare') {
      setFraction1(generateFraction());
      setFraction2(generateFraction());
    } else {
      const fracs = [];
      for (let i = 0; i < 3; i++) {
        fracs.push(generateFraction());
      }
      setFractions(fracs);
    }
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
    setShowMethod(false);
  };

  const handleSubmit = () => {
    if (gameMode === 'compare') {
      const comparison = compareFractions(fraction1.numerator, fraction1.denominator, fraction2.numerator, fraction2.denominator);
      let correctAnswer = '';
      if (comparison < 0) correctAnswer = '<';
      else if (comparison > 0) correctAnswer = '>';
      else correctAnswer = '=';

      if (userAnswer === correctAnswer) {
        setFeedback({ 
          type: 'correct', 
          message: `Correct! ${fraction1.numerator}/${fraction1.denominator} ${correctAnswer} ${fraction2.numerator}/${fraction2.denominator}` 
        });
        setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        setFeedback({ 
          type: 'incorrect', 
          message: `Not quite. The correct answer is ${fraction1.numerator}/${fraction1.denominator} ${correctAnswer} ${fraction2.numerator}/${fraction2.denominator}` 
        });
        setScore(prev => ({ total: prev.total + 1 }));
      }
    } else {
      // Order mode - check if user's order matches correct order
      const sorted = [...fractions].sort((a, b) => 
        compareFractions(a.numerator, a.denominator, b.numerator, b.denominator)
      );
      const userOrder = userAnswer.split(',').map(s => s.trim());
      const correctOrder = sorted.map(f => `${f.numerator}/${f.denominator}`);
      
      if (userOrder.length === correctOrder.length && 
          userOrder.every((val, idx) => val === correctOrder[idx])) {
        setFeedback({ 
          type: 'correct', 
          message: `Perfect! The correct order is: ${correctOrder.join(', ')}` 
        });
        setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        setFeedback({ 
          type: 'incorrect', 
          message: `Not quite. The correct order is: ${correctOrder.join(', ')}` 
        });
        setScore(prev => ({ total: prev.total + 1 }));
      }
    }
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    generateNewProblem();
  };

  const handleModeChange = (mode: ComparisonType) => {
    setGameMode(mode);
    generateNewProblem();
  };

  const getCommonDenominator = (den1: number, den2: number): number => {
    return lcm(den1, den2);
  };

  return (
    <div className="space-y-6">
      {/* Game Mode Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          onClick={() => handleModeChange('compare')}
          variant={gameMode === 'compare' ? 'default' : 'outline'}
          size="sm"
        >
          Compare Two Fractions
        </Button>
        <Button
          onClick={() => handleModeChange('order')}
          variant={gameMode === 'order' ? 'default' : 'outline'}
          size="sm"
        >
          Order Fractions
        </Button>
      </div>

      {/* Problem Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="text-center">
              {gameMode === 'compare' ? (
                <>
                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    Compare these two fractions:
                  </p>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                      <div className="text-center">
                        <MathRenderer display={true}>
                          {`\\frac{${fraction1.numerator}}{${fraction1.denominator}}`}
                        </MathRenderer>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setUserAnswer('<')}
                          className={`px-4 py-2 rounded border-2 font-bold text-lg ${
                            userAnswer === '<'
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white border-slate-300 hover:bg-primary/10'
                          }`}
                        >
                          &lt;
                        </button>
                        <button
                          onClick={() => setUserAnswer('=')}
                          className={`px-4 py-2 rounded border-2 font-bold text-lg ${
                            userAnswer === '='
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white border-slate-300 hover:bg-primary/10'
                          }`}
                        >
                          =
                        </button>
                        <button
                          onClick={() => setUserAnswer('>')}
                          className={`px-4 py-2 rounded border-2 font-bold text-lg ${
                            userAnswer === '>'
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white border-slate-300 hover:bg-primary/10'
                          }`}
                        >
                          &gt;
                        </button>
                      </div>
                      <div className="text-center">
                        <MathRenderer display={true}>
                          {`\\frac{${fraction2.numerator}}{${fraction2.denominator}}`}
                        </MathRenderer>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    Order these fractions from least to greatest:
                  </p>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
                      {fractions.map((frac, idx) => (
                        <div key={idx} className="text-center">
                          <MathRenderer display={true}>
                            {`\\frac{${frac.numerator}}{${frac.denominator}}`}
                          </MathRenderer>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-2">Enter your answer (comma-separated, e.g., 1/2, 3/4, 5/6):</p>
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="e.g., 1/3, 2/5, 3/8"
                        className="w-full max-w-md px-4 py-2 border-2 border-primary/30 rounded text-center focus:outline-none focus:ring-2 focus:ring-primary"
                        autoFocus
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Hint */}
              {showHint && gameMode === 'compare' && (
                <div className="bg-yellow-50 p-3 rounded border border-yellow-300 mb-4">
                  <p className="text-xs text-yellow-900">
                    💡 <span className="font-semibold">Hint:</span> Find a common denominator or use cross multiplication. 
                    Common denominator: {getCommonDenominator(fraction1.denominator, fraction2.denominator)}
                  </p>
                </div>
              )}

              {/* Show Method */}
              {showMethod && gameMode === 'compare' && (
                <div className="bg-purple-50 p-4 rounded border border-purple-300 mb-4">
                  <p className="text-xs font-semibold text-purple-900 mb-2">Step-by-step solution:</p>
                  <div className="text-xs text-purple-800 space-y-1">
                    <p>Method 1: Common Denominator</p>
                    <p>LCM of {fraction1.denominator} and {fraction2.denominator} = {getCommonDenominator(fraction1.denominator, fraction2.denominator)}</p>
                    <p>
                      {fraction1.numerator}/{fraction1.denominator} = {(fraction1.numerator * (getCommonDenominator(fraction1.denominator, fraction2.denominator) / fraction1.denominator))}/{getCommonDenominator(fraction1.denominator, fraction2.denominator)}
                    </p>
                    <p>
                      {fraction2.numerator}/{fraction2.denominator} = {(fraction2.numerator * (getCommonDenominator(fraction1.denominator, fraction2.denominator) / fraction2.denominator))}/{getCommonDenominator(fraction1.denominator, fraction2.denominator)}
                    </p>
                    <p className="mt-2">Method 2: Cross Multiplication</p>
                    <p>{fraction1.numerator} × {fraction2.denominator} = {fraction1.numerator * fraction2.denominator}</p>
                    <p>{fraction2.numerator} × {fraction1.denominator} = {fraction2.numerator * fraction1.denominator}</p>
                    <p className="font-semibold mt-2">
                      {fraction1.numerator * fraction2.denominator} {compareFractions(fraction1.numerator, fraction1.denominator, fraction2.numerator, fraction2.denominator) < 0 ? '<' : compareFractions(fraction1.numerator, fraction1.denominator, fraction2.numerator, fraction2.denominator) > 0 ? '>' : '='} {fraction2.numerator * fraction1.denominator}
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 justify-center">
                <Button onClick={handleSubmit} className="flex-1 min-w-[120px]" disabled={!userAnswer}>
                  Check Answer
                </Button>
                {gameMode === 'compare' && (
                  <>
                    <Button onClick={() => setShowHint(!showHint)} variant="outline" size="sm">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      {showHint ? 'Hide' : 'Show'} Hint
                    </Button>
                    <Button onClick={() => setShowMethod(!showMethod)} variant="outline" size="sm">
                      {showMethod ? 'Hide' : 'Show'} Method
                    </Button>
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
          <li>Choose a game mode: Compare Two Fractions or Order Fractions</li>
          <li>For Compare mode: Click &lt;, =, or &gt; to indicate the relationship</li>
          <li>For Order mode: Enter the fractions in order from least to greatest (comma-separated)</li>
          <li>Click "Check Answer" to see if you're correct</li>
          <li>Use "Show Hint" or "Show Method" for help (Compare mode only)</li>
          <li>Click "New Problem" to practice more or "Reset Score" to start over</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Tips:</span> Use common denominators or cross multiplication to compare fractions. 
          For ordering, convert all fractions to have the same denominator first.
        </p>
      </div>
    </div>
  );
}

