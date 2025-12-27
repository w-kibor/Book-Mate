'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';

type Problem = {
  phrase: string;
  expression: string;
  operation: 'addition' | 'subtraction' | 'both';
};

const problems: Problem[] = [
  { phrase: '5 more than a number', expression: 'x + 5', operation: 'addition' },
  { phrase: '7 less than a number', expression: 'x - 7', operation: 'subtraction' },
  { phrase: 'a number increased by 3', expression: 'x + 3', operation: 'addition' },
  { phrase: 'a number decreased by 4', expression: 'x - 4', operation: 'subtraction' },
  { phrase: 'the sum of a number and 6', expression: 'x + 6', operation: 'addition' },
  { phrase: 'the difference of a number and 8', expression: 'x - 8', operation: 'subtraction' },
  { phrase: '10 added to a number', expression: 'x + 10', operation: 'addition' },
  { phrase: 'a number subtracted from 15', expression: '15 - x', operation: 'subtraction' },
  { phrase: 'a number plus 5, minus 2', expression: 'x + 5 - 2', operation: 'both' },
  { phrase: '12 increased by a number, then decreased by 3', expression: '12 + x - 3', operation: 'both' },
];

function getRandomProblem(): Problem {
  return problems[Math.floor(Math.random() * problems.length)];
}

export function FormingAlgebraicExpressionsInteractive() {
  const [problem, setProblem] = useState<Problem>(getRandomProblem);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);

  const normalizeExpression = (expr: string): string => {
    return expr.replace(/\s+/g, '').toLowerCase();
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
    const correctWithY = normalizeExpression(problem.expression.replace('x', 'y'));
    const correctWithA = normalizeExpression(problem.expression.replace('x', 'a'));
    const correctWithB = normalizeExpression(problem.expression.replace('x', 'b'));
    
    if (normalizedUser === normalizedCorrect || 
        normalizedUser === correctWithY || 
        normalizedUser === correctWithA || 
        normalizedUser === correctWithB) {
      setFeedback({ 
        type: 'correct', 
        message: `Excellent! "${problem.phrase}" translates to ${problem.expression}. Great work!` 
      });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback({ 
        type: 'incorrect', 
        message: `Not quite. The correct expression is ${problem.expression}. Remember: "more than" or "increased by" means addition (+), and "less than" or "decreased by" means subtraction (-).` 
      });
      setScore(prev => ({ total: prev.total + 1 }));
    }
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    generateNewProblem();
  };

  const getHint = (): string => {
    switch (problem.operation) {
      case 'addition':
        return 'This phrase involves addition. Look for words like "more than", "increased by", "plus", or "sum".';
      case 'subtraction':
        return 'This phrase involves subtraction. Look for words like "less than", "decreased by", "minus", or "difference".';
      case 'both':
        return 'This phrase involves both addition and subtraction. Translate each part step by step.';
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
            <div className="text-center">
              <p className="text-sm font-semibold text-slate-700 mb-4">
                Translate this word phrase into an algebraic expression:
              </p>
              
              <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                <p className="text-xl md:text-2xl font-bold text-primary mb-4">
                  "{problem.phrase}"
                </p>
                <div className="flex flex-col items-center gap-3">
                  <p className="text-sm text-slate-600">Your answer (use x, y, a, or b for the variable):</p>
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="e.g., x + 5 or y - 7"
                    className="w-full max-w-md text-center font-mono text-lg border-2 border-primary/30 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    autoFocus
                  />
                  <p className="text-xs text-muted-foreground">
                    Examples: x + 5, y - 3, a + 10 - 2
                  </p>
                </div>
              </div>

              {/* Hint */}
              {showHint && (
                <div className="bg-yellow-50 p-3 rounded border border-yellow-300 mb-4">
                  <p className="text-xs text-yellow-900">
                    💡 <span className="font-semibold">Hint:</span> {getHint()}
                  </p>
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
              <div className="flex-1">
                <p className={`text-sm ${feedback.type === 'correct' ? 'text-green-900' : 'text-red-900'}`}>
                  {feedback.message}
                </p>
                {feedback.type === 'correct' && (
                  <div className="mt-2">
                    <MathRenderer display={true}>
                      {`${problem.expression.replace('x', 'x').replace('+', '+').replace('-', '-')}`}
                    </MathRenderer>
                  </div>
                )}
              </div>
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
          <li>Read the word phrase carefully</li>
          <li>Identify the operation (addition or subtraction)</li>
          <li>Choose a variable (x, y, a, or b) to represent "a number"</li>
          <li>Write the algebraic expression</li>
          <li>Click "Check Answer" to see if you're correct</li>
          <li>Use "Show Hint" for helpful tips</li>
          <li>Click "New Problem" to practice more or "Reset Score" to start over</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Remember:</span> "More than" or "increased by" means addition (+). 
          "Less than" or "decreased by" means subtraction (-). Order matters!
        </p>
      </div>
    </div>
  );
}

