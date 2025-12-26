'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MathRenderer } from '@/components/math/math-renderer';
import { RefreshCw, CheckCircle2, XCircle } from 'lucide-react';

function generateRandomNumber(): number {
  return Math.floor(Math.random() * 1000) + 1; // Numbers from 1 to 1000
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

type GameMode = 'classify' | 'properties' | 'sequence';

export function EvenOddInteractive() {
  const [gameMode, setGameMode] = useState<GameMode>('classify');
  const [number, setNumber] = useState<number>(generateRandomNumber());
  const [userAnswer, setUserAnswer] = useState<'even' | 'odd' | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);

  const correctAnswer = isEven(number) ? 'even' : 'odd';
  const lastDigit = number % 10;

  const handleSubmit = () => {
    if (userAnswer === null) {
      setFeedback({ type: 'incorrect', message: 'Please select an answer!' });
      return;
    }

    if (userAnswer === correctAnswer) {
      setFeedback({ 
        type: 'correct', 
        message: `Correct! ${formatNumber(number)} is ${correctAnswer} because it ends in ${lastDigit}. ${isEven(number) ? 'Even numbers end in 0, 2, 4, 6, or 8.' : 'Odd numbers end in 1, 3, 5, 7, or 9.'}` 
      });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback({ 
        type: 'incorrect', 
        message: `Incorrect. ${formatNumber(number)} is ${correctAnswer} because it ends in ${lastDigit}. ${isEven(number) ? 'Even numbers end in 0, 2, 4, 6, or 8.' : 'Odd numbers end in 1, 3, 5, 7, or 9.'}` 
      });
      setScore(prev => ({ total: prev.total + 1 }));
    }
  };

  const handleNewNumber = () => {
    setNumber(generateRandomNumber());
    setUserAnswer(null);
    setFeedback({ type: null, message: '' });
    setShowHint(false);
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    handleNewNumber();
  };

  return (
    <div className="space-y-6">
      {/* Game Mode Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          onClick={() => {
            setGameMode('classify');
            handleNewNumber();
          }}
          variant={gameMode === 'classify' ? 'default' : 'outline'}
          size="sm"
        >
          Classify Numbers
        </Button>
        <Button
          onClick={() => {
            setGameMode('properties');
            handleNewNumber();
          }}
          variant={gameMode === 'properties' ? 'default' : 'outline'}
          size="sm"
        >
          Properties Quiz
        </Button>
        <Button
          onClick={() => {
            setGameMode('sequence');
            handleNewNumber();
          }}
          variant={gameMode === 'sequence' ? 'default' : 'outline'}
          size="sm"
        >
          Number Sequences
        </Button>
      </div>

      {/* Classify Mode */}
      {gameMode === 'classify' && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-700 mb-2">Is this number even or odd?</p>
                <p className="text-5xl font-bold text-primary font-mono mb-2">
                  <MathRenderer>{formatNumber(number)}</MathRenderer>
                </p>
                <p className="text-xs text-muted-foreground">
                  Last digit: <span className="font-bold text-lg">{lastDigit}</span>
                </p>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setUserAnswer('even')}
                  className={`
                    px-6 py-4 rounded-lg border-2 font-semibold text-lg transition-all
                    ${userAnswer === 'even'
                      ? 'bg-green-500 text-white border-green-600 shadow-lg scale-105'
                      : 'bg-white text-green-700 border-green-300 hover:bg-green-50'
                    }
                  `}
                >
                  Even
                </button>
                <button
                  onClick={() => setUserAnswer('odd')}
                  className={`
                    px-6 py-4 rounded-lg border-2 font-semibold text-lg transition-all
                    ${userAnswer === 'odd'
                      ? 'bg-purple-500 text-white border-purple-600 shadow-lg scale-105'
                      : 'bg-white text-purple-700 border-purple-300 hover:bg-purple-50'
                    }
                  `}
                >
                  Odd
                </button>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleSubmit} className="flex-1" disabled={userAnswer === null}>
                  Check Answer
                </Button>
                <Button onClick={() => setShowHint(!showHint)} variant="outline">
                  {showHint ? 'Hide' : 'Show'} Hint
                </Button>
              </div>

              {showHint && (
                <div className="bg-white p-3 rounded border border-blue-300">
                  <p className="text-sm font-semibold text-slate-700 mb-1">Hint:</p>
                  <p className="text-xs text-slate-600">
                    Look at the last digit: {lastDigit}. {isEven(number) 
                      ? 'Even numbers end in 0, 2, 4, 6, or 8.' 
                      : 'Odd numbers end in 1, 3, 5, 7, or 9.'}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Properties Mode */}
      {gameMode === 'properties' && (
        <PropertiesQuiz 
          onScoreUpdate={(correct, total) => setScore(prev => ({ correct: prev.correct + correct, total: prev.total + total }))}
        />
      )}

      {/* Sequence Mode */}
      {gameMode === 'sequence' && (
        <SequenceGame 
          onScoreUpdate={(correct, total) => setScore(prev => ({ correct: prev.correct + correct, total: prev.total + total }))}
        />
      )}

      {/* Feedback */}
      {feedback.type && gameMode === 'classify' && (
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
          {gameMode === 'classify' && (
            <Button onClick={handleNewNumber} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              New Number
            </Button>
          )}
          <Button onClick={handleReset} variant="ghost" size="sm">
            Reset Score
          </Button>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <p className="text-xs font-semibold text-blue-900 mb-2">How to use:</p>
        <ol className="list-decimal list-inside space-y-1 text-xs text-blue-800">
          <li>Choose a game mode: Classify Numbers, Properties Quiz, or Number Sequences</li>
          <li><span className="font-semibold">Classify Numbers:</span> Click "Even" or "Odd" for each number</li>
          <li><span className="font-semibold">Properties Quiz:</span> Answer questions about even/odd number properties</li>
          <li><span className="font-semibold">Number Sequences:</span> Complete sequences of even or odd numbers</li>
          <li>Get instant feedback and track your score!</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Tip:</span> Even numbers end in 0, 2, 4, 6, or 8. Odd numbers end in 1, 3, 5, 7, or 9.
        </p>
      </div>
    </div>
  );
}

// Properties Quiz Component
function PropertiesQuiz({ onScoreUpdate }: { onScoreUpdate: (correct: number, total: number) => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });

  const questions = [
    {
      question: 'Even + Even = ?',
      options: ['Even', 'Odd'],
      correct: 'Even',
      explanation: 'When you add two even numbers, the result is always even. Example: 4 + 6 = 10 (even)'
    },
    {
      question: 'Odd + Odd = ?',
      options: ['Even', 'Odd'],
      correct: 'Even',
      explanation: 'When you add two odd numbers, the result is always even. Example: 5 + 7 = 12 (even)'
    },
    {
      question: 'Even + Odd = ?',
      options: ['Even', 'Odd'],
      correct: 'Odd',
      explanation: 'When you add an even and an odd number, the result is always odd. Example: 4 + 5 = 9 (odd)'
    },
    {
      question: 'Odd × Odd = ?',
      options: ['Even', 'Odd'],
      correct: 'Odd',
      explanation: 'When you multiply two odd numbers, the result is always odd. Example: 5 × 7 = 35 (odd)'
    },
    {
      question: 'Even × Odd = ?',
      options: ['Even', 'Odd'],
      correct: 'Even',
      explanation: 'When you multiply an even and an odd number, the result is always even. Example: 4 × 5 = 20 (even)'
    },
  ];

  const handleSubmit = () => {
    if (!selectedAnswer) {
      setFeedback({ type: 'incorrect', message: 'Please select an answer!' });
      return;
    }

    const question = questions[currentQuestion];
    if (selectedAnswer === question.correct) {
      setFeedback({ type: 'correct', message: `Correct! ${question.explanation}` });
      onScoreUpdate(1, 1);
    } else {
      setFeedback({ type: 'incorrect', message: `Incorrect. ${question.explanation}` });
      onScoreUpdate(0, 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setFeedback({ type: null, message: '' });
    }
  };

  const question = questions[currentQuestion];

  return (
    <Card className="bg-blue-50 border-blue-200">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-2">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <p className="text-lg font-semibold text-slate-700 mb-4">
              {question.question}
            </p>
          </div>

          <div className="space-y-2">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedAnswer(option)}
                className={`
                  w-full p-4 rounded-lg border-2 text-left transition-all
                  ${selectedAnswer === option
                    ? 'bg-primary text-white border-primary shadow-lg'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-primary hover:bg-primary/10'
                  }
                `}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <Button onClick={handleSubmit} className="flex-1" disabled={!selectedAnswer}>
              Check Answer
            </Button>
            {currentQuestion < questions.length - 1 && feedback.type && (
              <Button onClick={handleNext} variant="outline">
                Next Question
              </Button>
            )}
          </div>

          {feedback.type && (
            <div className={`p-3 rounded-lg ${feedback.type === 'correct' ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'}`}>
              <p className={`text-sm ${feedback.type === 'correct' ? 'text-green-900' : 'text-red-900'}`}>
                {feedback.message}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Sequence Game Component
function SequenceGame({ onScoreUpdate }: { onScoreUpdate: (correct: number, total: number) => void }) {
  const [sequenceType, setSequenceType] = useState<'even' | 'odd'>('even');
  const [sequence, setSequence] = useState<number[]>([]);
  const [userAnswers, setUserAnswers] = useState<string[]>(['', '', '']);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });

  const generateSequence = (type: 'even' | 'odd') => {
    const start = Math.floor(Math.random() * 20) + 1;
    const first = type === 'even' 
      ? (start % 2 === 0 ? start : start + 1)
      : (start % 2 === 1 ? start : start + 1);
    return [first, first + 2, first + 4, first + 6, first + 8];
  };

  const handleNewSequence = (type: 'even' | 'odd') => {
    setSequenceType(type);
    const newSeq = generateSequence(type);
    setSequence(newSeq);
    setUserAnswers(['', '', '']);
    setFeedback({ type: null, message: '' });
  };

  const handleSubmit = () => {
    const correctAnswers = sequence.slice(2).map(n => n.toString());
    const allCorrect = userAnswers.every((ans, idx) => ans === correctAnswers[idx]);
    
    if (allCorrect) {
      setFeedback({ 
        type: 'correct', 
        message: `Excellent! The next three ${sequenceType} numbers are: ${correctAnswers.join(', ')}` 
      });
      onScoreUpdate(1, 1);
    } else {
      setFeedback({ 
        type: 'incorrect', 
        message: `Not quite. The correct answers are: ${correctAnswers.join(', ')}. Remember: ${sequenceType} numbers increase by 2.` 
      });
      onScoreUpdate(0, 1);
    }
  };

  if (sequence.length === 0) {
    handleNewSequence('even');
    return null;
  }

  return (
    <Card className="bg-blue-50 border-blue-200">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex gap-2 justify-center">
            <Button
              onClick={() => handleNewSequence('even')}
              variant={sequenceType === 'even' ? 'default' : 'outline'}
              size="sm"
            >
              Even Sequence
            </Button>
            <Button
              onClick={() => handleNewSequence('odd')}
              variant={sequenceType === 'odd' ? 'default' : 'outline'}
              size="sm"
            >
              Odd Sequence
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold text-slate-700 mb-4">
              Complete the {sequenceType} number sequence:
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-2xl font-bold text-primary">{sequence[0]}</span>
              <span className="text-xl text-muted-foreground">,</span>
              <span className="text-2xl font-bold text-primary">{sequence[1]}</span>
              <span className="text-xl text-muted-foreground">,</span>
              <input
                type="number"
                value={userAnswers[0]}
                onChange={(e) => {
                  const newAnswers = [...userAnswers];
                  newAnswers[0] = e.target.value;
                  setUserAnswers(newAnswers);
                }}
                className="w-20 text-2xl font-bold text-center border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <span className="text-xl text-muted-foreground">,</span>
              <input
                type="number"
                value={userAnswers[1]}
                onChange={(e) => {
                  const newAnswers = [...userAnswers];
                  newAnswers[1] = e.target.value;
                  setUserAnswers(newAnswers);
                }}
                className="w-20 text-2xl font-bold text-center border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <span className="text-xl text-muted-foreground">,</span>
              <input
                type="number"
                value={userAnswers[2]}
                onChange={(e) => {
                  const newAnswers = [...userAnswers];
                  newAnswers[2] = e.target.value;
                  setUserAnswers(newAnswers);
                }}
                className="w-20 text-2xl font-bold text-center border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {sequenceType === 'even' ? 'Even numbers increase by 2' : 'Odd numbers increase by 2'}
            </p>
          </div>

          <Button onClick={handleSubmit} className="w-full" disabled={userAnswers.some(a => !a)}>
            Check Answer
          </Button>

          {feedback.type && (
            <div className={`p-3 rounded-lg ${feedback.type === 'correct' ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'}`}>
              <p className={`text-sm ${feedback.type === 'correct' ? 'text-green-900' : 'text-red-900'}`}>
                {feedback.message}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

