'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MathRenderer } from '@/components/math/math-renderer';
import { RefreshCw, CheckCircle2, XCircle, ArrowUp, ArrowDown } from 'lucide-react';

type RoundingPlace = 'ten' | 'hundred' | 'thousand' | 'ten-thousand' | 'hundred-thousand' | 'million' | 'ten-million' | 'hundred-million';

const roundingPlaces: { value: RoundingPlace; label: string; multiplier: number }[] = [
  { value: 'ten', label: 'Nearest Ten', multiplier: 10 },
  { value: 'hundred', label: 'Nearest Hundred', multiplier: 100 },
  { value: 'thousand', label: 'Nearest Thousand', multiplier: 1000 },
  { value: 'ten-thousand', label: 'Nearest Ten Thousand', multiplier: 10000 },
  { value: 'hundred-thousand', label: 'Nearest Hundred Thousand', multiplier: 100000 },
  { value: 'million', label: 'Nearest Million', multiplier: 1000000 },
  { value: 'ten-million', label: 'Nearest Ten Million', multiplier: 10000000 },
  { value: 'hundred-million', label: 'Nearest Hundred Million', multiplier: 100000000 },
];

function generateRandomNumber(): number {
  return Math.floor(Math.random() * 900_000_000) + 100_000_000;
}

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatNumberForMath(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
}

function roundNumber(num: number, place: RoundingPlace): number {
  const multiplier = roundingPlaces.find(p => p.value === place)?.multiplier || 1;
  return Math.round(num / multiplier) * multiplier;
}

function getDigitToCheck(num: number, place: RoundingPlace): { digit: number; position: string } {
  const numStr = num.toString().padStart(9, '0');
  const placeIndex = roundingPlaces.findIndex(p => p.value === place);
  
  if (placeIndex === -1) return { digit: 0, position: '' };
  
  // The digit to check is one position to the right of the rounding place
  const checkIndex = 8 - placeIndex - 1;
  
  if (checkIndex < 0 || checkIndex >= numStr.length) {
    return { digit: 0, position: 'none' };
  }
  
  const positionNames = [
    'ones', 'tens', 'hundreds', 'thousands', 'ten thousands', 
    'hundred thousands', 'millions', 'ten millions'
  ];
  
  return {
    digit: parseInt(numStr[checkIndex]),
    position: positionNames[checkIndex] || ''
  };
}

export function RoundingInteractive() {
  const [number, setNumber] = useState<number>(generateRandomNumber());
  const [selectedPlace, setSelectedPlace] = useState<RoundingPlace>('thousand');
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);

  const correctAnswer = roundNumber(number, selectedPlace);
  const checkDigit = getDigitToCheck(number, selectedPlace);

  const handleSubmit = () => {
    if (!userAnswer.trim()) {
      setFeedback({ type: 'incorrect', message: 'Please enter your answer!' });
      return;
    }

    const userNum = parseInt(userAnswer.replace(/,/g, ''));
    
    if (userNum === correctAnswer) {
      const direction = checkDigit.digit >= 5 ? 'up' : 'down';
      setFeedback({ 
        type: 'correct', 
        message: `Perfect! ${formatNumber(number)} rounded to the ${roundingPlaces.find(p => p.value === selectedPlace)?.label.toLowerCase()} is ${formatNumber(correctAnswer)}. The digit ${checkDigit.digit} in the ${checkDigit.position} place is ${checkDigit.digit >= 5 ? '≥ 5, so we round UP' : '< 5, so we round DOWN'}.` 
      });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback({ 
        type: 'incorrect', 
        message: `Incorrect. The correct answer is ${formatNumber(correctAnswer)}. Remember: Look at the digit to the right of the ${roundingPlaces.find(p => p.value === selectedPlace)?.label.toLowerCase()}. If it's 5 or more, round up. If it's less than 5, round down.` 
      });
      setScore(prev => ({ total: prev.total + 1 }));
    }
  };

  const handleNewNumber = () => {
    setNumber(generateRandomNumber());
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    handleNewNumber();
  };

  return (
    <div className="space-y-6">
      {/* Number Display */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">Round this number:</p>
        <p className="text-4xl font-bold text-primary font-mono">
          <MathRenderer>{formatNumberForMath(number)}</MathRenderer>
        </p>
      </div>

      {/* Rounding Place Selector */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-3">Select the place value to round to:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {roundingPlaces.map((place) => (
                  <button
                    key={place.value}
                    onClick={() => {
                      setSelectedPlace(place.value);
                      setUserAnswer('');
                      setFeedback({ type: null, message: '' });
                      setShowHint(false);
                    }}
                    className={`
                      p-3 rounded-lg border-2 transition-all text-sm
                      ${selectedPlace === place.value
                        ? 'bg-primary text-white border-primary shadow-lg'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-primary hover:bg-primary/10'
                      }
                    `}
                  >
                    {place.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Place Info */}
            <div className="border-t border-blue-300 pt-4">
              <div className="bg-white p-4 rounded-lg border border-blue-300">
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  Rounding to: <span className="text-primary">{roundingPlaces.find(p => p.value === selectedPlace)?.label}</span>
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  Look at the digit in the <span className="font-semibold">{checkDigit.position}</span> place: <span className="font-bold text-primary text-base">{checkDigit.digit}</span>
                </p>
                <div className="flex items-center gap-2 text-sm">
                  {checkDigit.digit >= 5 ? (
                    <>
                      <ArrowUp className="h-4 w-4 text-green-600" />
                      <span className="text-green-700 font-semibold">Round UP (since {checkDigit.digit} ≥ 5)</span>
                    </>
                  ) : (
                    <>
                      <ArrowDown className="h-4 w-4 text-red-600" />
                      <span className="text-red-700 font-semibold">Round DOWN (since {checkDigit.digit} &lt; 5)</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Answer Input */}
            <div className="border-t border-blue-300 pt-4">
              <p className="text-sm font-semibold text-slate-700 mb-2">Enter your rounded answer:</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value.replace(/[^0-9,]/g, ''))}
                  placeholder="e.g., 123,456,000"
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg font-mono text-center"
                />
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
                  <p className="text-xs text-slate-600 italic">
                    Hint: The answer is {formatNumber(correctAnswer)}
                  </p>
                )}
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
          <li>Select the place value you want to round to (e.g., nearest thousand, nearest million)</li>
          <li>Look at the digit to the right of that place value</li>
          <li>If it's 5 or more, round UP. If it's less than 5, round DOWN</li>
          <li>Enter your rounded answer and click "Check Answer"</li>
          <li>Get instant feedback and track your score!</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Remember:</span> 5 or more → round UP, Less than 5 → round DOWN
        </p>
      </div>
    </div>
  );
}

