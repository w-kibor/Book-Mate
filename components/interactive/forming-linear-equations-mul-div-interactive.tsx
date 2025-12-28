'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

// Interactive: Form linear equations in one unknown using multiplication/division
// Prompts are plain text; expected answer is a simple equation like 3x = 15 or x/4 = 3

type Problem = {
  phrase: string;
  equation: string; // canonical equation with 'x' as the variable
  operation: 'multiplication' | 'division' | 'both';
};

const problems: Problem[] = [
  { phrase: 'A number multiplied by 3 equals 12', equation: '3x=12', operation: 'multiplication' },
  { phrase: '3 times a number equals 18', equation: '3x=18', operation: 'multiplication' },
  { phrase: 'Twice a number equals 10', equation: '2x=10', operation: 'multiplication' },
  { phrase: 'Triple a number equals 21', equation: '3x=21', operation: 'multiplication' },
  { phrase: 'A number divided by 4 equals 3', equation: 'x/4=3', operation: 'division' },
  { phrase: 'Half of a number equals 7', equation: 'x/2=7', operation: 'division' },
  { phrase: 'The quotient of a number and 5 equals 6', equation: 'x/5=6', operation: 'division' },
  { phrase: 'A number multiplied by 4 equals 20', equation: '4x=20', operation: 'multiplication' },
  { phrase: 'A number divided by 2 equals 9', equation: 'x/2=9', operation: 'division' },
  { phrase: '6 times a number, then divided by 3, equals 8', equation: '6x/3=8', operation: 'both' },
];

function getRandomProblem(): Problem {
  return problems[Math.floor(Math.random() * problems.length)];
}

function normalizeEquation(eq: string): string {
  return eq
    .replace(/\s+/g, '')
    .toLowerCase()
    .replace(/×|·/g, '*')
    .replace(/÷/g, '/');
}

function canonicalizeSide(side: string): string {
  // Put numeric coefficient before variable: x*3 -> 3x, 3*x -> 3x, a*2 -> 2a
  // Handle variables a-z single-letter with optional '*'
  let s = side;
  s = s.replace(/([a-z])\*(\d+)/gi, (_m, v, n) => `${n}${v}`);
  s = s.replace(/(\d+)\*([a-z])/gi, (_m, n, v) => `${n}${v}`);
  // Remove explicit '*'
  s = s.replace(/\*/g, '');
  return s;
}

function canonicalizeEquation(eq: string): string {
  const n = normalizeEquation(eq);
  if (!n.includes('=')) return n;
  const [L, R] = n.split('=');
  const cL = canonicalizeSide(L);
  const cR = canonicalizeSide(R);
  return `${cL}=${cR}`;
}

function isEquationMatch(userEq: string, correctEq: string): boolean {
  const variants = ['x', 'y', 'a', 'b'];
  const u = canonicalizeEquation(userEq);
  for (const v of variants) {
    const cVar = canonicalizeEquation(correctEq.replace(/x/g, v));
    if (u === cVar) return true;
    const [uL, uR] = u.split('=');
    const [cL, cR] = cVar.split('=');
    if (uL === cR && uR === cL) return true; // accept swapped sides
  }
  return false;
}

export function FormingLinearEquationsMulDivInteractive() {
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
    if (isEquationMatch(userAnswer, problem.equation)) {
      setFeedback({ type: 'correct', message: `Great! ${problem.phrase} translates to ${problem.equation}.` });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback({ type: 'incorrect', message: `Not quite. One correct equation is ${problem.equation}. Use '*' for multiply (or write 3x) and '/' for divide.` });
      setScore(prev => ({ correct: prev.correct, total: prev.total + 1 }));
    }
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    generateNewProblem();
  };

  const getHint = (): string => {
    switch (problem.operation) {
      case 'multiplication':
        return 'Use a number before the variable for multiplication: 3x means 3 times x. You can also write x*3 which will be treated as 3x.';
      case 'division':
        return 'Use a fraction style with a slash: x/4 means x divided by 4. Ensure you include the equals sign.';
      case 'both':
        return 'Translate step by step. Example: 6 times a number then divided by 3: 6x/3 = ...';
      default:
        return 'Write a clear equation with =, using * for multiply and / for divide.';
    }
  };

  return (
    <div className="space-y-6">
      {/* Problem Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-600 mb-2">Translate this phrase to a linear equation (×/÷):</p>
              <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                <p className="text-lg font-semibold text-slate-900">{problem.phrase}</p>
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
              <label className="block text-sm font-semibold text-slate-700 mb-2">Your Equation:</label>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="e.g., 3x = 15 or x/4 = 3"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <p className="text-xs text-slate-500 mt-2">Use x, y, a, or b. Use '*' for multiply or prefix number (3x). Use '/' for divide.</p>
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
