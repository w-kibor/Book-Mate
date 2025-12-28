'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

// Interactive: Form linear equations in one unknown using addition/subtraction
// Prompts are plain text; expected answer is a simple equation like x + 5 = 12

type Problem = {
  phrase: string;
  equation: string; // canonical equation with 'x'
  operation: 'addition' | 'subtraction' | 'both';
};

const problems: Problem[] = [
  { phrase: 'A number plus 7 equals 15', equation: 'x+7=15', operation: 'addition' },
  { phrase: 'The sum of a number and 12 is 20', equation: 'x+12=20', operation: 'addition' },
  { phrase: 'A number increased by 9 equals 21', equation: 'x+9=21', operation: 'addition' },
  { phrase: 'A number minus 5 equals 9', equation: 'x-5=9', operation: 'subtraction' },
  { phrase: '7 less than a number equals 18', equation: 'x-7=18', operation: 'subtraction' },
  { phrase: 'A number decreased by 4 equals 10', equation: 'x-4=10', operation: 'subtraction' },
  { phrase: 'A number plus 8 then minus 3 equals 20', equation: 'x+8-3=20', operation: 'both' },
  { phrase: '12 increased by a number, then decreased by 5, equals 25', equation: '12+x-5=25', operation: 'both' },
  { phrase: 'The difference of a number and 6 equals 14', equation: 'x-6=14', operation: 'subtraction' },
  { phrase: 'The sum of 10 and a number equals 16', equation: '10+x=16', operation: 'addition' },
];

function getRandomProblem(): Problem {
  return problems[Math.floor(Math.random() * problems.length)];
}

function normalizeEquation(eq: string): string {
  return eq.replace(/\s+/g, '').toLowerCase();
}

function isEquationMatch(userEq: string, correctEq: string): boolean {
  const u = normalizeEquation(userEq);
  const c = normalizeEquation(correctEq);
  if (!u.includes('=')) return false;

  // Accept variable names x, y, a, b
  const variants = ['x', 'y', 'a', 'b'];
  for (const v of variants) {
    const cVar = c.replace(/x/g, v);
    if (u === cVar) return true;
    // Accept swapped sides (commutativity of equality)
    const [uL, uR] = u.split('=');
    const [cL, cR] = cVar.split('=');
    if (uL === cR && uR === cL) return true;
  }
  return false;
}

export function FormingLinearEquationsAddSubInteractive() {
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
      setFeedback({ type: 'correct', message: `Great! ${problem.phrase} translates to ${problem.equation.replace(/x/g, 'x')}.` });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback({ type: 'incorrect', message: `Not quite. One correct equation is ${problem.equation}. Remember to include '=' and use + or - as described.` });
      setScore(prev => ({ correct: prev.correct, total: prev.total + 1 }));
    }
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    generateNewProblem();
  };

  const getHint = (): string => {
    switch (problem.operation) {
      case 'addition':
        return 'Use "+" to represent phrases like "more than", "increased by", "sum". Ensure you include the equals sign to make an equation.';
      case 'subtraction':
        return 'Use "-" for "less than", "decreased by", "difference". Place the unknown appropriately and include the equals sign.';
      case 'both':
        return 'Translate each phrase step-by-step. Combine + and - on one side, then set equal to the given total.';
      default:
        return 'Think about whether the phrase implies +, -, or both, and write an equation with =.';
    }
  };

  return (
    <div className="space-y-6">
      {/* Problem Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-600 mb-2">Translate this phrase to a linear equation:</p>
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
                placeholder="e.g., x + 5 = 12 or 12 = x + 5"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <p className="text-xs text-slate-500 mt-2">Use x, y, a, or b for the unknown. Include '=' and use plain text.</p>
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
