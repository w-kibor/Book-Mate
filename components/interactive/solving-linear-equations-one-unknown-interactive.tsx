'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

// Interactive: Solve linear equations in one unknown (plain text, no $)
// Supported forms on LHS: ax + b, x + b, x/d + b, b + ax, b + x, b + x/d
// RHS: c

type Problem = {
  equation: string; // e.g., '2x + 3 = 11'
  variable: 'x' | 'y' | 'a' | 'b';
  solution: number; // numeric solution
};

function normalize(s: string): string {
  return s
    .replace(/\s+/g, '')
    .replace(/×|·/g, '*')
    .replace(/÷/g, '/')
    .toLowerCase();
}

function parseEquation(eq: string): { A: number; B: number; C: number; varName: string | null } {
  const n = normalize(eq);
  const [L, R] = n.split('=');
  if (!R) return { A: NaN, B: NaN, C: NaN, varName: null };
  const C = parseFloat(R);

  // Extract variable letter from LHS (first alphabetical)
  const vMatch = L.match(/[a-z]/);
  const varName = vMatch ? vMatch[0] : null;

  // Split LHS into signed terms
  let lhs = L;
  if (lhs[0] !== '+' && lhs[0] !== '-') lhs = '+' + lhs;
  const terms = lhs.match(/[+-][^+-]+/g) || [];
  let A = 0; // coefficient for variable
  let B = 0; // constant term

  for (const t of terms) {
    const sign = t[0] === '-' ? -1 : 1;
    const body = t.slice(1);
    if (varName && body.includes(varName)) {
      // Handle forms: kx, x, x/d, d*var, var*d
      // kx
      let m = body.match(/^(\d+)\*?([a-z])$/);
      if (m && m[2] === varName) {
        A += sign * parseInt(m[1], 10);
        continue;
      }
      // x
      m = body.match(/^([a-z])$/);
      if (m && m[1] === varName) {
        A += sign * 1;
        continue;
      }
      // x/d
      m = body.match(/^([a-z])\/(\d+)$/);
      if (m && m[1] === varName) {
        const d = parseInt(m[2], 10);
        A += sign * (1 / d);
        continue;
      }
      // d*var
      m = body.match(/^(\d+)\*([a-z])$/);
      if (m && m[2] === varName) {
        A += sign * parseInt(m[1], 10);
        continue;
      }
      // var*d
      m = body.match(/^([a-z])\*(\d+)$/);
      if (m && m[1] === varName) {
        A += sign * parseInt(m[2], 10);
        continue;
      }
    }
    // Constant term (number)
    const nConst = parseFloat(body);
    if (!Number.isNaN(nConst)) B += sign * nConst;
  }

  return { A, B, C, varName };
}

function solve(eq: string): number | null {
  const parsed = parseEquation(eq);
  const { A, B, C } = parsed;
  if (!isFinite(A) || !isFinite(B) || !isFinite(C) || A === 0) return null;
  return (C - B) / A;
}

function makeProblems(): Problem[] {
  const raw = [
    { equation: '2x + 3 = 11', variable: 'x' as const },
    { equation: '3x - 7 = 2', variable: 'x' as const },
    { equation: 'x + 5 = 9', variable: 'x' as const },
    { equation: 'x/2 + 5 = 9', variable: 'x' as const },
    { equation: '4 + x = 10', variable: 'x' as const },
    { equation: '12 = x + 5', variable: 'x' as const },
    { equation: 'y - 9 = -3', variable: 'y' as const },
    { equation: '6a + 12 = 0', variable: 'a' as const },
    { equation: 'b/3 - 2 = 4', variable: 'b' as const },
    { equation: '3y + 3 = 0', variable: 'y' as const },
  ];
  return raw.map((p) => ({ ...p, solution: solve(p.equation) ?? NaN }));
}

function getRandomProblem(): Problem {
  const list = makeProblems();
  return list[Math.floor(Math.random() * list.length)];
}

function parseUserNumber(s: string): number | null {
  const t = s.trim();
  if (/^-?\d+\/\d+$/.test(t)) {
    const [p, q] = t.split('/');
    const num = parseFloat(p);
    const den = parseFloat(q);
    if (den === 0) return null;
    return num / den;
  }
  const v = parseFloat(t);
  return Number.isNaN(v) ? null : v;
}

export function SolvingLinearEquationsOneUnknownInteractive() {
  const [problem, setProblem] = useState<Problem>(getRandomProblem);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);

  const generateNewProblem = () => {
    setProblem(getRandomProblem());
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
  };

  const handleSubmit = () => {
    const expected = problem.solution;
    const gotNum = parseUserNumber(userAnswer);
    if (gotNum === null || !isFinite(expected)) {
      setFeedback({ type: 'incorrect', message: 'Please enter a valid number (e.g., 3, -2, or 3/2).' });
      setScore((prev) => ({ correct: prev.correct, total: prev.total + 1 }));
      return;
    }
    const ok = Math.abs(gotNum - expected) <= 1e-6;
    if (ok) {
      setFeedback({ type: 'correct', message: `Correct! The solution is ${expected}.` });
      setScore((prev) => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback({ type: 'incorrect', message: `Not quite. The solution is ${expected}.` });
      setScore((prev) => ({ correct: prev.correct, total: prev.total + 1 }));
    }
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    generateNewProblem();
  };

  const getHint = (): string => {
    return 'Isolate the variable: move constants to the other side by adding/subtracting, then divide by the coefficient of the variable.';
  };

  return (
    <div className="space-y-6">
      {/* Problem Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-600 mb-2">Solve for the unknown (plain text, no $):</p>
              <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                <p className="text-lg font-semibold text-slate-900">{problem.equation}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Input Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Your Solution (number):</label>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="e.g., 4 or -1.5 or 3/2"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <p className="text-xs text-slate-500 mt-2">Enter a numeric value; fractions allowed with '/'. No dollar signs.</p>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleSubmit} className="flex-1 bg-blue-600 hover:bg-blue-700">Check Answer</Button>
              <Button onClick={() => setShowHint(!showHint)} variant="outline" size="sm">
                <HelpCircle className="h-4 w-4 mr-2" /> Hint
              </Button>
              <Button onClick={generateNewProblem} variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" /> Skip
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hint Section */}
      {showHint && (
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <p className="text-sm text-slate-700">{getHint()}</p>
          </CardContent>
        </Card>
      )}

      {/* Feedback Section */}
      {feedback.type && (
        <Card className={feedback.type === 'correct' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}>
          <CardContent className="pt-6">
            <div className="flex gap-3 items-start">
              {feedback.type === 'correct' ? (
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p className={feedback.type === 'correct' ? 'text-green-800' : 'text-red-800'}>{feedback.message}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Score Display */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-sm text-slate-600 mb-1">Progress</p>
            <p className="text-3xl font-bold text-purple-600">{score.correct} / {score.total}</p>
            {score.total > 0 && (
              <p className="text-sm text-slate-600 mt-2">Accuracy: {Math.round((score.correct / score.total) * 100)}%</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Reset Button */}
      {score.total > 0 && (
        <Button onClick={handleReset} variant="outline" className="w-full">
          <RefreshCw className="h-4 w-4 mr-2" /> Reset Score
        </Button>
      )}
    </div>
  );
}
