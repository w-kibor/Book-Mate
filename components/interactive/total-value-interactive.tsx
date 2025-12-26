'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MathRenderer } from '@/components/math/math-renderer';
import { RefreshCw, CheckCircle2, XCircle } from 'lucide-react';

const placeNames = [
  'Hundreds of Millions',
  'Tens of Millions',
  'Millions',
  'Hundred Thousands',
  'Ten Thousands',
  'Thousands',
  'Hundreds',
  'Tens',
  'Ones'
];

const placeValues = [
  100_000_000,
  10_000_000,
  1_000_000,
  100_000,
  10_000,
  1_000,
  100,
  10,
  1
];

function generateRandomNumber(): number {
  return Math.floor(Math.random() * 900_000_000) + 100_000_000;
}

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
}

export function TotalValueInteractive() {
  const [number, setNumber] = useState<number>(generateRandomNumber());
  const [selectedDigit, setSelectedDigit] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);

  const numberStr = number.toString();
  const digits = numberStr.split('').map(Number);

  const handleDigitClick = (index: number) => {
    setSelectedDigit(index);
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
  };

  const handleSubmit = () => {
    if (selectedDigit === null) {
      setFeedback({ type: 'incorrect', message: 'Please select a digit first!' });
      return;
    }

    if (!userAnswer.trim()) {
      setFeedback({ type: 'incorrect', message: 'Please enter the total value!' });
      return;
    }

    const correctTotalValue = digits[selectedDigit] * placeValues[selectedDigit];
    const userAnswerNum = parseInt(userAnswer.replace(/,/g, ''));

    if (userAnswerNum === correctTotalValue) {
      setFeedback({ 
        type: 'correct', 
        message: `Correct! The digit ${digits[selectedDigit]} in the ${placeNames[selectedDigit]} place has a total value of ${correctTotalValue.toLocaleString()}.` 
      });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback({ 
        type: 'incorrect', 
        message: `Incorrect. The correct total value is ${correctTotalValue.toLocaleString()}. Remember: Total Value = Digit × Place Value = ${digits[selectedDigit]} × ${placeValues[selectedDigit].toLocaleString()}` 
      });
      setScore(prev => ({ total: prev.total + 1 }));
    }
  };

  const handleNewNumber = () => {
    setNumber(generateRandomNumber());
    setSelectedDigit(null);
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    handleNewNumber();
  };

  const getHint = () => {
    if (selectedDigit === null) return '';
    const digit = digits[selectedDigit];
    const placeValue = placeValues[selectedDigit];
    return `Hint: Total Value = ${digit} × ${placeValue.toLocaleString()} = ${(digit * placeValue).toLocaleString()}`;
  };

  return (
    <div className="space-y-6">
      {/* Number Display */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">Click on a digit, then calculate its total value</p>
        <div className="flex justify-center gap-2 flex-wrap">
          {digits.map((digit, index) => (
            <button
              key={index}
              onClick={() => handleDigitClick(index)}
              className={`
                w-16 h-16 text-2xl font-bold rounded-lg border-2 transition-all
                ${selectedDigit === index 
                  ? 'bg-primary text-white border-primary shadow-lg scale-110' 
                  : 'bg-white text-slate-900 border-slate-300 hover:border-primary hover:bg-primary/10'
                }
              `}
            >
              {digit}
            </button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          Number: <MathRenderer>{formatNumber(number)}</MathRenderer>
        </p>
      </div>

      {/* Selected Digit Info */}
      {selectedDigit !== null && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-700 mb-1">Selected Digit:</p>
                <p className="text-3xl font-bold text-primary">{digits[selectedDigit]}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Place: <span className="font-semibold text-slate-700">{placeNames[selectedDigit]}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Place Value: <span className="font-semibold text-slate-700">{placeValues[selectedDigit].toLocaleString()}</span>
                </p>
              </div>

              <div className="border-t border-blue-300 pt-3">
                <p className="text-sm font-semibold text-slate-700 mb-2">Calculate the Total Value:</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value.replace(/[^0-9,]/g, ''))}
                      placeholder="Enter total value (e.g., 500000000)"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg"
                    />
                  </div>
                  <Button onClick={handleSubmit} className="w-full sm:w-auto">
                    Check Answer
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="text-xs text-primary hover:underline"
                  >
                    {showHint ? 'Hide' : 'Show'} Hint
                  </button>
                  {showHint && (
                    <p className="text-xs text-slate-600 italic">{getHint()}</p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

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
          <li>Click on any digit in the number above</li>
          <li>See the place value of that digit</li>
          <li>Calculate: Total Value = Digit × Place Value</li>
          <li>Enter your answer and click "Check Answer"</li>
          <li>Get instant feedback and track your score!</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Remember:</span> Total Value = Digit × Place Value
        </p>
      </div>
    </div>
  );
}

