'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';

// A simple algebra simplifier for expressions with one variable and +/-
// Supports terms like: x, -x, 2x, -3x, numbers, and sequences joined by + or -
// It ignores spaces and accepts variables x, y, a, b

type Problem = {
  prompt: string; // unsimplified, to show to the student
  variable: 'x' | 'y' | 'a' | 'b';
  answer: string; // canonical simplified answer string
};

function canonicalForm(coeff: number, constant: number, variable: string): string {
  const parts: string[] = [];
  if (coeff !== 0) {
    const coeffStr = coeff === 1 ? '' : coeff === -1 ? '-' : String(coeff);
    parts.push(`${coeffStr}${variable}`);
  }
  if (constant !== 0) {
    const sign = constant > 0 ? (parts.length ? ' + ' : '') : (parts.length ? ' - ' : '-');
    parts.push(`${sign}${Math.abs(constant)}`);
  }
  if (parts.length === 0) return '0';
  return parts.join('');
}

function simplifyExpression(raw: string): { coeff: number; constant: number; varName: string | null } {
  let s = raw.replace(/\s+/g, '');
  s = s.replace(/−/g, '-');
  s = s.replace(/\+/g, '+');
  // Normalize leading sign
  if (s[0] !== '+' && s[0] !== '-') s = '+' + s;

  // Detect variable letters (first one wins)
  const varMatch = s.match(/[a-zA-Z]/);
  const varName = varMatch ? varMatch[0] : null;

  // Split into signed terms: e.g., +2x, -x, +5, -3
  const terms = s.match(/[+-][^+-]+/g) || [];
  let coeff = 0;
  let constant = 0;

  for (const t of terms) {
    const sign = t[0] === '-' ? -1 : 1;
    const body = t.slice(1);
    // Variable term like 2x or x
    if (/[a-zA-Z]/.test(body)) {
      const m = body.match(/^(\d+)?([a-zA-Z])$/);
      if (m) {
        const c = m[1] ? parseInt(m[1], 10) : 1;
        coeff += sign * c;
        continue;
      }
      // Handle formats like 10x or 1x explicitly
      const m2 = body.match(/^(\d+)([a-zA-Z])$/);
      if (m2) {
        const c2 = parseInt(m2[1], 10);
        coeff += sign * c2;
        continue;
      }
      // If body is exactly the variable
      const m3 = body.match(/^([a-zA-Z])$/);
      if (m3) {
        coeff += sign * 1;
        continue;
      }
    } else {
      // Pure number term
      const n = parseInt(body, 10);
      if (!Number.isNaN(n)) constant += sign * n;
    }
  }

  return { coeff, constant, varName };
}

function getProblems(): Problem[] {
  return [
    { prompt: 'x + x + 5', variable: 'x', answer: '2x + 5' },
    { prompt: '3x - x + 4 - 2', variable: 'x', answer: '2x + 2' },
    { prompt: '5 + y - 2 + y', variable: 'y', answer: '2y + 3' },
    { prompt: '2a + 3 - a - 5', variable: 'a', answer: 'a - 2' },
    { prompt: 'b + 7 - 3 + b - 2', variable: 'b', answer: '2b + 2' },
    { prompt: '10 - x + 4 + x - 3', variable: 'x', answer: '11' },
    { prompt: '4y - 2 + y + 3', variable: 'y', answer: '5y + 1' },
    { prompt: '6 - 2a + a + 1', variable: 'a', answer: '7 - a' },
    { prompt: '3b + 2 - b + 5', variable: 'b', answer: '2b + 7' },
    { prompt: 'x - 3 + x - 2', variable: 'x', answer: '2x - 5' },
  ];
}

function getRandomProblem(): Problem {
  const list = getProblems();
  return list[Math.floor(Math.random() * list.length)];
}

export function SimplifyingAdditionSubtractionInteractive() {
  const [problem, setProblem] = useState<Problem>(getRandomProblem);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);
  const promptMath: string = `$${problem.prompt}$`;

  const normalize = (expr: string): string => expr.replace(/\s+/g, '').toLowerCase();

  const generateNewProblem = () => {
    setProblem(getRandomProblem());
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
  };

  const compareSimplified = (user: string, expected: string): boolean => {
    const u = simplifyExpression(user);
    const e = simplifyExpression(expected);
    // If user used a different variable, that's fine as long as coefficients/constants match
    return u.coeff === e.coeff && u.constant === e.constant;
  };

  const handleSubmit = () => {
    if (compareSimplified(userAnswer, problem.answer)) {
      setFeedback({
        type: 'correct',
        message: `Great job! The simplified form is ${problem.answer}.`,
      });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      const userSim = simplifyExpression(userAnswer);
      const canonical = canonicalForm(userSim.coeff, userSim.constant, userSim.varName || problem.variable);
      setFeedback({
        type: 'incorrect',
        message: `Not quite. Expected ${problem.answer}. Your answer simplifies to ${canonical}. Remember to combine like terms (same variable) and constants.`,
      });
      setScore(prev => ({ correct: prev.correct, total: prev.total + 1 }));
    }
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    generateNewProblem();
  };

  const getHint = (): string => {
    return 'Combine like terms: add/subtract coefficients of the same variable (e.g., x + 3x = 4x). Then combine the constant numbers.';
  };

  return (
    <div className="space-y-6">
      {/* Problem Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-600 mb-2">Simplify this expression:</p>
              <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                <p className="text-lg font-semibold text-slate-900">
                  <MathRenderer display={false}>{promptMath}</MathRenderer>
                </p>
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
              <label className="block text-sm font-semibold text-slate-700 mb-2">Your Answer:</label>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="e.g., 2x + 5"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <p className="text-xs text-slate-500 mt-2">Use 'x', 'y', 'a', or 'b'. Write multiplication as 2x and keep spaces around '+' or '-' for readability.</p>
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
