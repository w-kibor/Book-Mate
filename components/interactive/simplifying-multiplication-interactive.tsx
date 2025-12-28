'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

// Simplifier for multiplication of monomials (optional multi-variable), no dollar signs in output
// Examples: 2x * 3 -> 6x, x * x -> x^2, 3a * 2b -> 6ab, 4y * y -> 4y^2, -2x * 3 -> -6x

type Problem = {
  prompt: string; // unsimplified expression (plain text)
  answer: string; // simplified canonical form (plain text)
};

function simplifyMultiply(raw: string): string {
  let s = raw.replace(/\s+/g, '');
  s = s.replace(/×|·/g, '*');
  // split by * while keeping minus signs with numbers/terms
  const tokens = s.split('*').filter(Boolean);
  let coeff = 1;
  const vars: Record<string, number> = {};

  for (let tok of tokens) {
    // Extract sign and numeric part
    const numMatch = tok.match(/^-?\d+/);
    if (numMatch) {
      coeff *= parseInt(numMatch[0], 10);
      tok = tok.slice(numMatch[0].length);
    }
    // Extract variables and optional exponents like x^2, y^3
    const varRegex = /([a-zA-Z])(?:\^(\d+))?/g;
    let m: RegExpExecArray | null;
    while ((m = varRegex.exec(tok)) !== null) {
      const v = m[1];
      const e = m[2] ? parseInt(m[2], 10) : 1;
      vars[v] = (vars[v] || 0) + e;
    }
    // If token is only letters like 'xy' (handled above), nothing else to do
  }

  // Build canonical string: coefficient followed by variables in alphabetical order
  const varKeys = Object.keys(vars).sort();
  const varPart = varKeys
    .map((v) => (vars[v] === 1 ? v : `${v}^${vars[v]}`))
    .join('');

  // If there are variables, omit coefficient 1/-1 as 1 unless -1 present
  if (varPart.length > 0) {
    if (coeff === 1) return varPart || '1';
    if (coeff === -1) return `-${varPart}`;
    return `${coeff}${varPart}`;
  }
  // Only numeric result
  return String(coeff);
}

function makeProblems(): Problem[] {
  const prompts = [
    '2x * 3',
    'x * x',
    '3a * 2b',
    '4y * y',
    '5 * b',
    '2 * 3x',
    'ab * 2a',
    '-2x * 3',
    '3x * y',
    'x * x * x',
  ];
  return prompts.map((p) => ({ prompt: p, answer: simplifyMultiply(p) }));
}

function getRandomProblem(): Problem {
  const list = makeProblems();
  return list[Math.floor(Math.random() * list.length)];
}

export function SimplifyingMultiplicationInteractive() {
  const [problem, setProblem] = useState<Problem>(getRandomProblem);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);

  const normalize = (expr: string): string => simplifyMultiply(expr.toLowerCase());

  const generateNewProblem = () => {
    setProblem(getRandomProblem());
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
  };

  const handleSubmit = () => {
    const expected = problem.answer;
    const got = normalize(userAnswer);
    if (got === expected) {
      setFeedback({ type: 'correct', message: `Excellent! ${problem.prompt} simplifies to ${expected}.` });
      setScore((prev) => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback({ type: 'incorrect', message: `Not quite. ${problem.prompt} simplifies to ${expected}. Your result was ${got}.` });
      setScore((prev) => ({ correct: prev.correct, total: prev.total + 1 }));
    }
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    generateNewProblem();
  };

  const getHint = (): string => {
    return 'Multiply the numbers (coefficients) together, then combine variables: same letters add exponents (x * x = x^2). Order of variables doesn\'t matter.';
  };

  return (
    <div className="space-y-6">
      {/* Problem Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-600 mb-2">Simplify this expression (no $ symbols):</p>
              <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                <p className="text-lg font-semibold text-slate-900">{problem.prompt}</p>
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
              <label className="block text-sm font-semibold text-slate-700 mb-2">Your Answer (e.g., 6x, x^2, 6ab):</label>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="e.g., 6x or x^2"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <p className="text-xs text-slate-500 mt-2">Use plain text; no dollar signs. Use '^' for powers like x^2.</p>
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
