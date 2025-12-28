'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';

type Problem = {
  phrase: string;
  expression: string;
  operation: 'multiplication' | 'division' | 'both';
};

const problems: Problem[] = [
  { phrase: '3 times a number', expression: '3x', operation: 'multiplication' },
  { phrase: 'a number multiplied by 5', expression: '5x', operation: 'multiplication' },
  { phrase: 'the product of a number and 2', expression: '2x', operation: 'multiplication' },
  { phrase: 'twice a number', expression: '2x', operation: 'multiplication' },
  { phrase: 'triple a number', expression: '3x', operation: 'multiplication' },
  { phrase: 'half of a number', expression: 'x/2', operation: 'division' },
  { phrase: 'a number divided by 4', expression: 'x/4', operation: 'division' },
  { phrase: 'the quotient of a number and 3', expression: 'x/3', operation: 'division' },
  { phrase: 'a number divided by 2', expression: 'x/2', operation: 'division' },
  { phrase: '3 times a number, divided by 2', expression: '3x/2', operation: 'both' },
  { phrase: 'a number multiplied by 4, then divided by 3', expression: '4x/3', operation: 'both' },
  { phrase: 'twice a number divided by 5', expression: '2x/5', operation: 'both' },
];

function getRandomProblem(): Problem {
  return problems[Math.floor(Math.random() * problems.length)];
}

export function FormingMultiplicationDivisionInteractive() {
  const [problem, setProblem] = useState<Problem>(getRandomProblem);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);

  const normalizeExpression = (expr: string): string => {
    return expr
      .replace(/\s+/g, '')
      .toLowerCase()
      .replace(/÷/g, '/')
      .replace(/×/g, '*');
  };

  const generateNewProblem = () => {
    setProblem(getRandomProblem());
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
  };

  const handleSubmit = () => {
    const normalizedUser = normalizeExpression(userAnswer);
    const normalizedCorrect = normalizeExpression(problem.expression);
    
    // Also check if they used a different variable
    const correctWithY = normalizeExpression(problem.expression.replace(/x/g, 'y'));
    const correctWithA = normalizeExpression(problem.expression.replace(/x/g, 'a'));
    const correctWithB = normalizeExpression(problem.expression.replace(/x/g, 'b'));
    
    // Handle equivalent expressions
    let isCorrect = false;
    if (normalizedUser === normalizedCorrect || 
        normalizedUser === correctWithY || 
        normalizedUser === correctWithA || 
        normalizedUser === correctWithB) {
      isCorrect = true;
    }
    // Also handle alternative forms like 3x vs x*3 or x/2 vs x÷2
    else if (
      normalizedUser.replace(/\*/g, '') === normalizedCorrect.replace(/\*/g, '') ||
      normalizedUser.replace(/\//g, '') === normalizedCorrect.replace(/\//g, '')
    ) {
      isCorrect = true;
    }
    
    if (isCorrect) {
      setFeedback({ 
        type: 'correct', 
        message: `Excellent! "${problem.phrase}" translates to ${problem.expression}. Great work!` 
      });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback({ 
        type: 'incorrect', 
        message: `Not quite. The correct expression is ${problem.expression}. Remember: "times", "multiplied by", or "product" means multiplication, and "divided by" or "quotient" means division.` 
      });
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
        return 'This phrase involves multiplication. Look for words like "times", "multiplied by", "product", "twice", or "triple".';
      case 'division':
        return 'This phrase involves division. Look for words like "divided by", "quotient", "half", "third", or "per".';
      case 'both':
        return 'This phrase involves both multiplication and division. Translate each part step by step, usually multiplication first.';
      default:
        return 'Think about what operation the phrase describes.';
    }
  };

  return (
    <div className="space-y-6">
      {/* Problem Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-600 mb-2">Translate this phrase to an algebraic expression:</p>
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
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Your Answer:
              </label>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="e.g., 3x or 2x/3"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <p className="text-xs text-slate-500 mt-2">
                Use 'x', 'y', 'a', or 'b' for variables. Use '/' for division and numbers directly for multiplication (e.g., 3x means 3 times x).
              </p>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleSubmit} className="flex-1 bg-blue-600 hover:bg-blue-700">
                Check Answer
              </Button>
              <Button onClick={() => setShowHint(!showHint)} variant="outline" size="sm">
                <HelpCircle className="h-4 w-4 mr-2" />
                Hint
              </Button>
              <Button onClick={generateNewProblem} variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Skip
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
                <p className={feedback.type === 'correct' ? 'text-green-800' : 'text-red-800'}>
                  {feedback.message}
                </p>
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
            <p className="text-3xl font-bold text-purple-600">
              {score.correct} / {score.total}
            </p>
            {score.total > 0 && (
              <p className="text-sm text-slate-600 mt-2">
                Accuracy: {Math.round((score.correct / score.total) * 100)}%
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Reset Button */}
      {score.total > 0 && (
        <Button onClick={handleReset} variant="outline" className="w-full">
          <RefreshCw className="h-4 w-4 mr-2" />
          Reset Score
        </Button>
      )}
    </div>
  );
}
