'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

const placeValues = [
  { name: 'Hundreds', position: -3, value: 100 },
  { name: 'Tens', position: -2, value: 10 },
  { name: 'Ones', position: -1, value: 1 },
  { name: 'Tenths', position: 1, value: 0.1 },
  { name: 'Hundredths', position: 2, value: 0.01 },
  { name: 'Thousandths', position: 3, value: 0.001 },
  { name: 'Ten-thousandths', position: 4, value: 0.0001 },
];

function generateRandomDecimal(): number {
  const wholePart = Math.floor(Math.random() * 1000);
  const decimalPart = Math.random();
  return parseFloat((wholePart + decimalPart).toFixed(4));
}

function getPlaceValueName(position: number): string {
  const place = placeValues.find(p => p.position === position);
  return place ? place.name : 'Unknown';
}

function getDigitAtPosition(num: number, position: number): number {
  const str = num.toFixed(4);
  const parts = str.split('.');
  
  if (position < 0) {
    // Whole number part (left of decimal)
    const wholePart = parts[0];
    const index = wholePart.length + position;
    return index >= 0 ? parseInt(wholePart[index]) : 0;
  } else {
    // Decimal part (right of decimal)
    const decimalPart = parts[1] || '';
    return position <= decimalPart.length ? parseInt(decimalPart[position - 1]) : 0;
  }
}

type GameMode = 'identify-place' | 'identify-digit' | 'place-chart';

export function DecimalPlaceValueInteractive() {
  const [gameMode, setGameMode] = useState<GameMode>('identify-place');
  const [number, setNumber] = useState<number>(generateRandomDecimal());
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);
  const [targetPosition, setTargetPosition] = useState<number>(() => {
    const positions = [-2, -1, 1, 2, 3];
    return positions[Math.floor(Math.random() * positions.length)];
  });

  const generateNewProblem = () => {
    setNumber(generateRandomDecimal());
    if (gameMode === 'identify-digit') {
      const positions = [-2, -1, 1, 2, 3];
      setTargetPosition(positions[Math.floor(Math.random() * positions.length)]);
    }
    setSelectedPosition(null);
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
  };

  const handleSubmit = () => {
    if (gameMode === 'identify-place') {
      if (selectedPosition === null) {
        setFeedback({ type: 'incorrect', message: 'Please select a digit!' });
        return;
      }
      const digit = getDigitAtPosition(number, selectedPosition);
      const placeName = getPlaceValueName(selectedPosition);
      setFeedback({ 
        type: 'correct', 
        message: `Correct! The digit ${digit} is in the ${placeName} place.` 
      });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else if (gameMode === 'identify-digit') {
      const answer = parseInt(userAnswer);
      if (isNaN(answer)) {
        setFeedback({ type: 'incorrect', message: 'Please enter a valid number!' });
        return;
      }
      const correctDigit = getDigitAtPosition(number, targetPosition);
      const placeName = getPlaceValueName(targetPosition);
      if (answer === correctDigit) {
        setFeedback({ 
          type: 'correct', 
          message: `Perfect! The digit in the ${placeName} place is ${correctDigit}.` 
        });
        setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        setFeedback({ 
          type: 'incorrect', 
          message: `Not quite. The digit in the ${placeName} place is ${correctDigit}.` 
        });
        setScore(prev => ({ total: prev.total + 1 }));
      }
    }
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    generateNewProblem();
  };

  const handleModeChange = (mode: GameMode) => {
    setGameMode(mode);
    generateNewProblem();
  };

  const formatNumber = (num: number): string => {
    return num.toFixed(4).replace(/\.?0+$/, '');
  };

  const getNumberParts = (num: number): { whole: string; decimal: string } => {
    const str = num.toFixed(4);
    const parts = str.split('.');
    return { whole: parts[0], decimal: parts[1] };
  };

  const { whole, decimal } = getNumberParts(number);

  return (
    <div className="space-y-6">
      {/* Game Mode Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          onClick={() => handleModeChange('identify-place')}
          variant={gameMode === 'identify-place' ? 'default' : 'outline'}
          size="sm"
        >
          Identify Place Value
        </Button>
        <Button
          onClick={() => handleModeChange('identify-digit')}
          variant={gameMode === 'identify-digit' ? 'default' : 'outline'}
          size="sm"
        >
          Identify Digit
        </Button>
        <Button
          onClick={() => handleModeChange('place-chart')}
          variant={gameMode === 'place-chart' ? 'default' : 'outline'}
          size="sm"
        >
          Place Value Chart
        </Button>
      </div>

      {/* Problem Display */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="text-center">
              {gameMode === 'identify-place' && (
                <>
                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    Click on a digit to identify its place value:
                  </p>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                    <div className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4">
                      {formatNumber(number)}
                    </div>
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      {whole.split('').map((digit, idx) => {
                        const position = idx - whole.length + 1;
                        return (
                          <button
                            key={`whole-${idx}`}
                            onClick={() => setSelectedPosition(position)}
                            className={`
                              px-3 py-2 rounded border-2 text-2xl font-bold transition-all
                              ${selectedPosition === position
                                ? 'bg-primary text-white border-primary scale-110'
                                : 'bg-white border-slate-300 hover:bg-primary/10 hover:border-primary'
                              }
                            `}
                          >
                            {digit}
                          </button>
                        );
                      })}
                      <span className="text-3xl font-bold text-yellow-600">.</span>
                      {decimal.split('').map((digit, idx) => {
                        const position = idx + 1;
                        return (
                          <button
                            key={`decimal-${idx}`}
                            onClick={() => setSelectedPosition(position)}
                            className={`
                              px-3 py-2 rounded border-2 text-2xl font-bold transition-all
                              ${selectedPosition === position
                                ? 'bg-primary text-white border-primary scale-110'
                                : 'bg-white border-slate-300 hover:bg-primary/10 hover:border-primary'
                              }
                            `}
                          >
                            {digit}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {gameMode === 'identify-digit' && (
                <>
                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    What digit is in the {getPlaceValueName(targetPosition)} place?
                  </p>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                    <p className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4">
                      {formatNumber(number)}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-slate-600">Digit in {getPlaceValueName(targetPosition)} place =</span>
                      <input
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="?"
                        className="w-20 text-center font-bold text-primary border-2 border-primary/30 rounded px-3 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
                        autoFocus
                      />
                    </div>
                  </div>
                </>
              )}

              {gameMode === 'place-chart' && (
                <>
                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    Place value chart for:
                  </p>
                  
                  <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                    <p className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4">
                      {formatNumber(number)}
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            {placeValues.filter(p => p.position < 0).reverse().map(p => (
                              <th key={p.position} className="border border-slate-300 px-2 py-2 text-center text-xs">
                                {p.name}
                              </th>
                            ))}
                            <th className="border border-slate-300 px-2 py-2 text-center bg-yellow-100">.</th>
                            {placeValues.filter(p => p.position > 0).map(p => (
                              <th key={p.position} className="border border-slate-300 px-2 py-2 text-center text-xs">
                                {p.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            {placeValues.filter(p => p.position < 0).reverse().map(p => {
                              const digit = getDigitAtPosition(number, p.position);
                              return (
                                <td key={p.position} className="border border-slate-300 px-2 py-2 text-center font-bold text-primary">
                                  {digit}
                                </td>
                              );
                            })}
                            <td className="border border-slate-300 px-2 py-2 text-center bg-yellow-100 font-bold">.</td>
                            {placeValues.filter(p => p.position > 0).map(p => {
                              const digit = getDigitAtPosition(number, p.position);
                              return (
                                <td key={p.position} className="border border-slate-300 px-2 py-2 text-center font-bold text-green-600">
                                  {digit}
                                </td>
                              );
                            })}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}

              {/* Hint */}
              {showHint && gameMode !== 'place-chart' && (
                <div className="bg-yellow-50 p-3 rounded border border-yellow-300 mb-4">
                  <p className="text-xs text-yellow-900">
                    💡 <span className="font-semibold">Hint:</span> {
                      gameMode === 'identify-place'
                        ? 'Click on a digit, then identify its place value. Remember: tenths, hundredths, thousandths are after the decimal point.'
                        : `The ${getPlaceValueName(targetPosition)} place is ${targetPosition > 0 ? `the ${targetPosition}${targetPosition === 1 ? 'st' : targetPosition === 2 ? 'nd' : targetPosition === 3 ? 'rd' : 'th'} digit after the decimal point` : `the ${Math.abs(targetPosition)}${Math.abs(targetPosition) === 1 ? 'st' : Math.abs(targetPosition) === 2 ? 'nd' : 'th'} digit before the decimal point`}.`
                    }
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              {gameMode !== 'place-chart' && (
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button onClick={handleSubmit} className="flex-1 min-w-[120px]" disabled={gameMode === 'identify-place' ? selectedPosition === null : !userAnswer}>
                    Check Answer
                  </Button>
                  <Button onClick={() => setShowHint(!showHint)} variant="outline" size="sm">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    {showHint ? 'Hide' : 'Show'} Hint
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feedback */}
      {feedback.type && gameMode !== 'place-chart' && (
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
          <li>Choose a game mode: Identify Place Value, Identify Digit, or Place Value Chart</li>
          <li><span className="font-semibold">Identify Place Value:</span> Click on a digit to see its place value</li>
          <li><span className="font-semibold">Identify Digit:</span> Enter the digit in a specific place value</li>
          <li><span className="font-semibold">Place Value Chart:</span> View the complete place value breakdown</li>
          <li>Use "Show Hint" for helpful tips</li>
          <li>Click "New Number" to practice more or "Reset Score" to start over</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Remember:</span> Place values after the decimal point are tenths, hundredths, thousandths, etc. 
          Each place is 10 times smaller than the one to its left.
        </p>
      </div>
    </div>
  );
}

