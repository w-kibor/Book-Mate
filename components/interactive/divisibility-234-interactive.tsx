'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

function isDivisibleBy2(num: number): boolean {
  return num % 2 === 0;
}

function isDivisibleBy3(num: number): boolean {
  let sum = 0;
  let n = Math.abs(num);
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum % 3 === 0;
}

function isDivisibleBy4(num: number): boolean {
  return num % 4 === 0;
}

function generateRandomNumber(): number {
  return Math.floor(Math.random() * 9999) + 1;
}

type Divisor = 2 | 3 | 4;

export function Divisibility234Interactive() {
  const [number, setNumber] = useState<number>(generateRandomNumber());
  const [selectedDivisor, setSelectedDivisor] = useState<Divisor | null>(null);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const checkDivisibility = (divisor: Divisor): boolean => {
    switch (divisor) {
      case 2:
        return isDivisibleBy2(number);
      case 3:
        return isDivisibleBy3(number);
      case 4:
        return isDivisibleBy4(number);
    }
  };

  const getDivisibilityRule = (divisor: Divisor): string => {
    switch (divisor) {
      case 2:
        return 'A number is divisible by 2 if its last digit is even (0, 2, 4, 6, or 8).';
      case 3:
        const digits = number.toString().split('').map(Number);
        const sum = digits.reduce((a, b) => a + b, 0);
        return `A number is divisible by 3 if the sum of its digits is divisible by 3. Sum of digits: ${digits.join(' + ')} = ${sum}. ${sum} ${sum % 3 === 0 ? 'is' : 'is not'} divisible by 3.`;
      case 4:
        const lastTwo = number % 100;
        return `A number is divisible by 4 if its last two digits form a number divisible by 4. Last two digits: ${lastTwo}. ${lastTwo} ${lastTwo % 4 === 0 ? 'is' : 'is not'} divisible by 4.`;
    }
  };

  const handleDivisorSelect = (divisor: Divisor) => {
    setSelectedDivisor(divisor);
    setUserAnswer(null);
    setFeedback({ type: null, message: '' });
    setShowHint(false);
    setShowExplanation(false);
  };

  const handleAnswerSelect = (answer: boolean) => {
    setUserAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedDivisor === null || userAnswer === null) {
      setFeedback({ type: 'incorrect', message: 'Please select a divisor and your answer!' });
      return;
    }

    const isDivisible = checkDivisibility(selectedDivisor);
    
    if (userAnswer === isDivisible) {
      const message = isDivisible 
        ? `Correct! ${number} is divisible by ${selectedDivisor}.`
        : `Correct! ${number} is NOT divisible by ${selectedDivisor}.`;
      setFeedback({ type: 'correct', message });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      const message = isDivisible
        ? `Incorrect. ${number} IS divisible by ${selectedDivisor}.`
        : `Incorrect. ${number} is NOT divisible by ${selectedDivisor}.`;
      setFeedback({ type: 'incorrect', message });
      setScore(prev => ({ total: prev.total + 1 }));
    }
  };

  const handleNewNumber = () => {
    setNumber(generateRandomNumber());
    setSelectedDivisor(null);
    setUserAnswer(null);
    setFeedback({ type: null, message: '' });
    setShowHint(false);
    setShowExplanation(false);
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    handleNewNumber();
  };

  return (
    <div className="space-y-6">
      {/* Number Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm font-semibold text-slate-700 mb-4">
                Test if this number is divisible by 2, 3, or 4:
              </p>
              
              <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                <p className="text-5xl md:text-6xl font-bold text-primary font-mono">
                  {number.toLocaleString()}
                </p>
              </div>

              {/* Divisor Selection */}
              <div className="flex flex-wrap gap-3 justify-center mb-4">
                <Button
                  onClick={() => handleDivisorSelect(2)}
                  variant={selectedDivisor === 2 ? 'default' : 'outline'}
                  size="lg"
                  className="text-lg"
                >
                  Divisible by 2?
                </Button>
                <Button
                  onClick={() => handleDivisorSelect(3)}
                  variant={selectedDivisor === 3 ? 'default' : 'outline'}
                  size="lg"
                  className="text-lg"
                >
                  Divisible by 3?
                </Button>
                <Button
                  onClick={() => handleDivisorSelect(4)}
                  variant={selectedDivisor === 4 ? 'default' : 'outline'}
                  size="lg"
                  className="text-lg"
                >
                  Divisible by 4?
                </Button>
              </div>

              {/* Answer Selection */}
              {selectedDivisor && (
                <div className="bg-white p-4 rounded-lg border border-blue-300 mb-4">
                  <p className="text-sm font-semibold text-slate-700 mb-3">
                    Is {number} divisible by {selectedDivisor}?
                  </p>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => handleAnswerSelect(true)}
                      className={`
                        px-6 py-3 rounded-lg border-2 font-semibold text-lg transition-all
                        ${userAnswer === true
                          ? 'bg-green-500 text-white border-green-600 shadow-lg scale-105'
                          : 'bg-white text-green-700 border-green-300 hover:bg-green-50'
                        }
                      `}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswerSelect(false)}
                      className={`
                        px-6 py-3 rounded-lg border-2 font-semibold text-lg transition-all
                        ${userAnswer === false
                          ? 'bg-red-500 text-white border-red-600 shadow-lg scale-105'
                          : 'bg-white text-red-700 border-red-300 hover:bg-red-50'
                        }
                      `}
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {/* Hint */}
              {showHint && selectedDivisor && (
                <div className="bg-yellow-50 p-3 rounded border border-yellow-300 mb-4">
                  <p className="text-xs text-yellow-900">
                    💡 <span className="font-semibold">Hint:</span> {getDivisibilityRule(selectedDivisor)}
                  </p>
                </div>
              )}

              {/* Explanation */}
              {showExplanation && selectedDivisor && (
                <div className="bg-purple-50 p-4 rounded border border-purple-300 mb-4">
                  <p className="text-xs font-semibold text-purple-900 mb-2">Explanation:</p>
                  <p className="text-sm text-purple-800">
                    {getDivisibilityRule(selectedDivisor)}
                  </p>
                  {selectedDivisor === 2 && (
                    <p className="text-xs text-purple-700 mt-2">
                      Last digit: {number % 10} → {number % 10 % 2 === 0 ? 'Even' : 'Odd'} → {isDivisibleBy2(number) ? 'Divisible by 2' : 'NOT divisible by 2'}
                    </p>
                  )}
                  {selectedDivisor === 3 && (
                    <p className="text-xs text-purple-700 mt-2">
                      {number.toString().split('').join(' + ')} = {number.toString().split('').map(Number).reduce((a, b) => a + b, 0)} → {isDivisibleBy3(number) ? 'Divisible by 3' : 'NOT divisible by 3'}
                    </p>
                  )}
                  {selectedDivisor === 4 && (
                    <p className="text-xs text-purple-700 mt-2">
                      Last two digits: {number % 100} → {number % 100} ÷ 4 = {Math.floor((number % 100) / 4)} remainder {number % 4} → {isDivisibleBy4(number) ? 'Divisible by 4' : 'NOT divisible by 4'}
                    </p>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 justify-center">
                <Button onClick={handleSubmit} className="flex-1 min-w-[120px]" disabled={selectedDivisor === null || userAnswer === null}>
                  Check Answer
                </Button>
                <Button onClick={() => setShowHint(!showHint)} variant="outline" size="sm" disabled={selectedDivisor === null}>
                  <HelpCircle className="h-4 w-4 mr-2" />
                  {showHint ? 'Hide' : 'Show'} Hint
                </Button>
                <Button onClick={() => setShowExplanation(!showExplanation)} variant="outline" size="sm" disabled={selectedDivisor === null}>
                  {showExplanation ? 'Hide' : 'Show'} Explanation
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
          <Button onClick={handleNewNumber} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            New Number
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
          <li>Look at the number displayed</li>
          <li>Select which divisibility test you want to perform (2, 3, or 4)</li>
          <li>Answer whether the number is divisible by your chosen number</li>
          <li>Click "Check Answer" to see if you're correct</li>
          <li>Use "Show Hint" for the divisibility rule or "Show Explanation" for detailed steps</li>
          <li>Click "New Number" to practice more or "Reset Score" to start over</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Remember:</span> Divisible by 2 = last digit is even. 
          Divisible by 3 = sum of digits is divisible by 3. 
          Divisible by 4 = last two digits form a number divisible by 4.
        </p>
      </div>
    </div>
  );
}

