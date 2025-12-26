'use client';

import { useState, useEffect } from 'react';
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
  // Generate a random number between 100,000,000 and 999,999,999
  return Math.floor(Math.random() * 900_000_000) + 100_000_000;
}

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
}

export function PlaceValueInteractive() {
  const [number, setNumber] = useState<number>(generateRandomNumber());
  const [selectedDigit, setSelectedDigit] = useState<number | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const numberStr = number.toString();
  const digits = numberStr.split('').map(Number);

  const handleDigitClick = (index: number) => {
    setSelectedDigit(index);
    setSelectedPlace(null);
    setFeedback({ type: null, message: '' });
  };

  const handlePlaceClick = (placeIndex: number) => {
    if (selectedDigit === null) {
      setFeedback({ type: 'incorrect', message: 'Please select a digit first!' });
      return;
    }

    setSelectedPlace(placeIndex);
    
    // Check if the selected digit is in the correct place
    // The place index corresponds to the position from left (0 = hundreds of millions)
    const correctPlace = selectedDigit;
    
    if (placeIndex === correctPlace) {
      setFeedback({ 
        type: 'correct', 
        message: `Correct! The digit ${digits[selectedDigit]} is in the ${placeNames[placeIndex]} place.` 
      });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback({ 
        type: 'incorrect', 
        message: `Incorrect. The digit ${digits[selectedDigit]} is in the ${placeNames[correctPlace]} place, not ${placeNames[placeIndex]}.` 
      });
      setScore(prev => ({ total: prev.total + 1 }));
    }
  };

  const handleNewNumber = () => {
    setNumber(generateRandomNumber());
    setSelectedDigit(null);
    setSelectedPlace(null);
    setFeedback({ type: null, message: '' });
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    handleNewNumber();
  };

  return (
    <div className="space-y-6">
      {/* Number Display */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">Click on a digit, then click its place value</p>
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

      {/* Place Value Buttons */}
      <div>
        <p className="text-sm font-semibold mb-3 text-slate-700">Select the place value:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {placeNames.map((place, index) => (
            <button
              key={index}
              onClick={() => handlePlaceClick(index)}
              disabled={selectedDigit === null}
              className={`
                p-3 text-xs rounded-lg border-2 transition-all text-left
                ${selectedPlace === index && selectedDigit === index
                  ? 'bg-green-100 border-green-500 text-green-900'
                  : selectedPlace === index
                  ? 'bg-red-100 border-red-500 text-red-900'
                  : selectedDigit !== null
                  ? 'bg-white border-slate-300 hover:border-primary hover:bg-primary/5 text-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                }
              `}
            >
              <div className="font-semibold">{place}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {formatNumber(placeValues[index])}
              </div>
            </button>
          ))}
        </div>
      </div>

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
          <li>Then click on the place value name that matches that digit's position</li>
          <li>Get instant feedback and track your score!</li>
          <li>Click "New Number" to practice with a different number</li>
        </ol>
      </div>
    </div>
  );
}

