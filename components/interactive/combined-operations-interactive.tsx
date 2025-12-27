'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

type Difficulty = 'easy' | 'medium' | 'hard';

interface Problem {
  expression: string;
  answer: number;
  steps: string[];
}

function generateProblem(difficulty: Difficulty): Problem {
  switch (difficulty) {
    case 'easy': {
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      const num3 = Math.floor(Math.random() * 10) + 1;
      
      if (Math.random() > 0.5) {
        // Addition and Multiplication
        const expression = `${num1} + ${num2} × ${num3}`;
        const answer = num1 + num2 * num3;
        const steps = [
          `${num1} + ${num2} × ${num3}`,
          `= ${num1} + ${num2 * num3}  (First: ${num2} × ${num3} = ${num2 * num3})`,
          `= ${answer}  (Then: ${num1} + ${num2 * num3} = ${answer})`
        ];
        return { expression, answer, steps };
      } else {
        // Subtraction and Multiplication
        const num4 = num1 + num2 * num3; // Ensure positive result
        const expression = `${num4} - ${num2} × ${num3}`;
        const answer = num4 - num2 * num3;
        const steps = [
          `${num4} - ${num2} × ${num3}`,
          `= ${num4} - ${num2 * num3}  (First: ${num2} × ${num3} = ${num2 * num3})`,
          `= ${answer}  (Then: ${num4} - ${num2 * num3} = ${answer})`
        ];
        return { expression, answer, steps };
      }
    }
    
    case 'medium': {
      const num1 = Math.floor(Math.random() * 20) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      const num3 = Math.floor(Math.random() * 10) + 1;
      const num4 = Math.floor(Math.random() * 10) + 1;
      
      if (Math.random() > 0.5) {
        // Division and Multiplication
        const num5 = num2 * num3; // Ensure divisible
        const expression = `${num5} ÷ ${num2} + ${num3} × ${num4}`;
        const answer = num3 + num3 * num4;
        const steps = [
          `${num5} ÷ ${num2} + ${num3} × ${num4}`,
          `= ${num3} + ${num3} × ${num4}  (First: ${num5} ÷ ${num2} = ${num3})`,
          `= ${num3} + ${num3 * num4}  (Then: ${num3} × ${num4} = ${num3 * num4})`,
          `= ${answer}  (Finally: ${num3} + ${num3 * num4} = ${answer})`
        ];
        return { expression, answer, steps };
      } else {
        // All four operations
        const num5 = num1 + num2 * num3; // Ensure positive
        const expression = `${num5} - ${num2} × ${num3} + ${num4}`;
        const answer = num5 - num2 * num3 + num4;
        const steps = [
          `${num5} - ${num2} × ${num3} + ${num4}`,
          `= ${num5} - ${num2 * num3} + ${num4}  (First: ${num2} × ${num3} = ${num2 * num3})`,
          `= ${num5 - num2 * num3} + ${num4}  (Then: ${num5} - ${num2 * num3} = ${num5 - num2 * num3})`,
          `= ${answer}  (Finally: ${num5 - num2 * num3} + ${num4} = ${answer})`
        ];
        return { expression, answer, steps };
      }
    }
    
    case 'hard': {
      const num1 = Math.floor(Math.random() * 30) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      const num3 = Math.floor(Math.random() * 10) + 1;
      const num4 = Math.floor(Math.random() * 10) + 1;
      const num5 = Math.floor(Math.random() * 10) + 1;
      
      if (Math.random() > 0.5) {
        // With brackets
        const num6 = num1 - num2;
        const expression = `(${num1} - ${num2}) × ${num3} + ${num4} × ${num5}`;
        const answer = num6 * num3 + num4 * num5;
        const steps = [
          `(${num1} - ${num2}) × ${num3} + ${num4} × ${num5}`,
          `= ${num6} × ${num3} + ${num4} × ${num5}  (First: ${num1} - ${num2} = ${num6})`,
          `= ${num6 * num3} + ${num4 * num5}  (Then: ${num6} × ${num3} = ${num6 * num3}, ${num4} × ${num5} = ${num4 * num5})`,
          `= ${answer}  (Finally: ${num6 * num3} + ${num4 * num5} = ${answer})`
        ];
        return { expression, answer, steps };
      } else {
        // Complex without brackets
        const num6 = num1 * num2;
        const expression = `${num1} × ${num2} ÷ ${num3} + ${num4} - ${num5}`;
        const answer = Math.floor(num6 / num3) + num4 - num5;
        const steps = [
          `${num1} × ${num2} ÷ ${num3} + ${num4} - ${num5}`,
          `= ${num6} ÷ ${num3} + ${num4} - ${num5}  (First: ${num1} × ${num2} = ${num6})`,
          `= ${Math.floor(num6 / num3)} + ${num4} - ${num5}  (Then: ${num6} ÷ ${num3} = ${Math.floor(num6 / num3)})`,
          `= ${Math.floor(num6 / num3) + num4} - ${num5}  (Then: ${Math.floor(num6 / num3)} + ${num4} = ${Math.floor(num6 / num3) + num4})`,
          `= ${answer}  (Finally: ${Math.floor(num6 / num3) + num4} - ${num5} = ${answer})`
        ];
        return { expression, answer, steps };
      }
    }
  }
}

export function CombinedOperationsInteractive() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [problem, setProblem] = useState<Problem>(() => generateProblem('easy'));
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  const generateNewProblem = () => {
    const newProblem = generateProblem(difficulty);
    setProblem(newProblem);
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
    setShowSteps(false);
  };

  const handleSubmit = () => {
    const answer = parseInt(userAnswer);
    if (isNaN(answer)) {
      setFeedback({ type: 'incorrect', message: 'Please enter a valid number!' });
      return;
    }

    if (answer === problem.answer) {
      setFeedback({ 
        type: 'correct', 
        message: `Excellent! ${problem.expression} = ${problem.answer}. Great work following BODMAS!` 
      });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      const difference = Math.abs(answer - problem.answer);
      setFeedback({ 
        type: 'incorrect', 
        message: `Not quite. The correct answer is ${problem.answer}. You were ${difference} ${difference === 1 ? 'number' : 'numbers'} off. Remember to follow BODMAS order!` 
      });
      setScore(prev => ({ total: prev.total + 1 }));
    }
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    generateNewProblem();
  };

  const handleDifficultyChange = (newDifficulty: Difficulty) => {
    setDifficulty(newDifficulty);
    const newProblem = generateProblem(newDifficulty);
    setProblem(newProblem);
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
    setShowSteps(false);
  };

  return (
    <div className="space-y-6">
      {/* Difficulty Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          onClick={() => handleDifficultyChange('easy')}
          variant={difficulty === 'easy' ? 'default' : 'outline'}
          size="sm"
        >
          Easy
        </Button>
        <Button
          onClick={() => handleDifficultyChange('medium')}
          variant={difficulty === 'medium' ? 'default' : 'outline'}
          size="sm"
        >
          Medium
        </Button>
        <Button
          onClick={() => handleDifficultyChange('hard')}
          variant={difficulty === 'hard' ? 'default' : 'outline'}
          size="sm"
        >
          Hard
        </Button>
      </div>

      {/* Problem Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm font-semibold text-slate-700 mb-4">
                Solve this problem using BODMAS order:
              </p>
              
              {/* Visual Problem Display */}
              <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                <div className="font-mono text-3xl md:text-4xl font-bold text-primary mb-4">
                  {problem.expression}
                </div>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-slate-600 text-lg">=</span>
                  <input
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="?"
                    className="w-32 md:w-40 text-right font-bold text-primary border-2 border-primary/30 rounded px-3 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    autoFocus
                  />
                </div>
              </div>

              {/* BODMAS Reminder */}
              <div className="bg-yellow-50 p-3 rounded border border-yellow-300 mb-4">
                <p className="text-xs font-semibold text-yellow-900 mb-1">Remember BODMAS:</p>
                <p className="text-xs text-yellow-800">
                  <span className="font-bold">B</span>rackets → <span className="font-bold">O</span>rders → 
                  <span className="font-bold">D</span>ivision → <span className="font-bold">M</span>ultiplication → 
                  <span className="font-bold">A</span>ddition → <span className="font-bold">S</span>ubtraction
                </p>
              </div>

              {/* Hint */}
              {showHint && (
                <div className="bg-purple-50 p-3 rounded border border-purple-300 mb-4">
                  <p className="text-xs text-purple-900">
                    💡 <span className="font-semibold">Hint:</span> {
                      problem.expression.includes('(') 
                        ? 'Start by solving what\'s inside the brackets first!'
                        : problem.expression.includes('×') || problem.expression.includes('÷')
                        ? 'Do multiplication and division before addition and subtraction. Work left to right!'
                        : 'Work from left to right, but remember: multiplication/division come before addition/subtraction!'
                    }
                  </p>
                </div>
              )}

              {/* Show Steps */}
              {showSteps && (
                <div className="bg-green-50 p-4 rounded border border-green-300 mb-4">
                  <p className="text-xs font-semibold text-green-900 mb-2">Step-by-step solution:</p>
                  <div className="font-mono text-xs text-green-800 space-y-1">
                    {problem.steps.map((step, index) => (
                      <div key={index} className={index === problem.steps.length - 1 ? 'font-bold text-primary' : ''}>
                        {step}
                      </div>
                    ))}
                  </div>
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
                <Button onClick={() => setShowSteps(!showSteps)} variant="outline" size="sm">
                  {showSteps ? 'Hide' : 'Show'} Steps
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
          <li>Choose a difficulty level (Easy, Medium, or Hard)</li>
          <li>Look at the expression and solve it using BODMAS order</li>
          <li>Enter your answer in the input field</li>
          <li>Click "Check Answer" to see if you're correct</li>
          <li>Use "Show Hint" for helpful tips or "Show Steps" to see the step-by-step solution</li>
          <li>Click "New Problem" to practice more or "Reset Score" to start over</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Remember BODMAS:</span> Brackets → Orders → Division → Multiplication → Addition → Subtraction. 
          When operations have the same priority, work from left to right!
        </p>
      </div>
    </div>
  );
}

