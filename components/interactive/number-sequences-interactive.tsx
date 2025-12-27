'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

type GameMode = 'find-missing' | 'continue' | 'identify-pattern';
type Difficulty = 'easy' | 'medium' | 'hard';

interface SequenceProblem {
  sequence: (number | null)[];
  answer: number | number[];
  pattern: string;
  type: 'arithmetic' | 'geometric' | 'square' | 'triangular' | 'other';
}

function generateArithmeticSequence(start: number, difference: number, length: number, missingIndex?: number): SequenceProblem {
  const sequence: (number | null)[] = [];
  for (let i = 0; i < length; i++) {
    if (i === missingIndex) {
      sequence.push(null);
    } else {
      sequence.push(start + i * difference);
    }
  }
  const answer = missingIndex !== undefined ? start + missingIndex * difference : start + length * difference;
  return {
    sequence,
    answer,
    pattern: difference > 0 ? `Add ${difference} to each term` : `Subtract ${Math.abs(difference)} from each term`,
    type: 'arithmetic'
  };
}

function generateGeometricSequence(start: number, ratio: number, length: number, missingIndex?: number): SequenceProblem {
  const sequence: (number | null)[] = [];
  for (let i = 0; i < length; i++) {
    if (i === missingIndex) {
      sequence.push(null);
    } else {
      sequence.push(start * Math.pow(ratio, i));
    }
  }
  const answer = missingIndex !== undefined ? start * Math.pow(ratio, missingIndex) : start * Math.pow(ratio, length);
  return {
    sequence,
    answer,
    pattern: `Multiply by ${ratio}`,
    type: 'geometric'
  };
}

function generateSquareSequence(length: number, missingIndex?: number): SequenceProblem {
  const sequence: (number | null)[] = [];
  for (let i = 0; i < length; i++) {
    if (i === missingIndex) {
      sequence.push(null);
    } else {
      sequence.push((i + 1) * (i + 1));
    }
  }
  const answer = missingIndex !== undefined ? (missingIndex + 1) * (missingIndex + 1) : (length + 1) * (length + 1);
  return {
    sequence,
    answer,
    pattern: 'Square numbers: 1², 2², 3², 4², ...',
    type: 'square'
  };
}

function generateTriangularSequence(length: number, missingIndex?: number): SequenceProblem {
  const sequence: (number | null)[] = [];
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += (i + 1);
    if (i === missingIndex) {
      sequence.push(null);
    } else {
      sequence.push(sum);
    }
  }
  // Recalculate for missing index
  sum = 0;
  for (let i = 0; i <= (missingIndex !== undefined ? missingIndex : length); i++) {
    sum += (i + 1);
  }
  const answer = missingIndex !== undefined ? sum : sum;
  return {
    sequence,
    answer,
    pattern: 'Triangular numbers: add 2, then 3, then 4, ...',
    type: 'triangular'
  };
}

function generateProblem(mode: GameMode, difficulty: Difficulty): SequenceProblem {
  if (mode === 'find-missing') {
    const missingIndex = Math.floor(Math.random() * 5) + 1; // Missing term in position 1-5
    const sequenceType = Math.random();
    
    if (sequenceType < 0.5) {
      // Arithmetic
      const start = Math.floor(Math.random() * 20) + 1;
      const difference = difficulty === 'easy' ? (Math.random() > 0.5 ? 2 : 3) : 
                         difficulty === 'medium' ? (Math.floor(Math.random() * 5) + 2) : 
                         (Math.floor(Math.random() * 10) + 1);
      return generateArithmeticSequence(start, difference, 6, missingIndex);
    } else if (sequenceType < 0.8) {
      // Geometric
      const start = Math.floor(Math.random() * 5) + 2;
      const ratio = difficulty === 'easy' ? 2 : difficulty === 'medium' ? (Math.random() > 0.5 ? 2 : 3) : (Math.floor(Math.random() * 3) + 2);
      return generateGeometricSequence(start, ratio, 6, missingIndex);
    } else if (sequenceType < 0.9) {
      // Square
      return generateSquareSequence(6, missingIndex);
    } else {
      // Triangular
      return generateTriangularSequence(6, missingIndex);
    }
  } else if (mode === 'continue') {
    const sequenceType = Math.random();
    const start = Math.floor(Math.random() * 10) + 1;
    
    if (sequenceType < 0.5) {
      // Arithmetic - return first 5 terms, need next 3
      const difference = difficulty === 'easy' ? (Math.random() > 0.5 ? 2 : 3) : 
                         difficulty === 'medium' ? (Math.floor(Math.random() * 5) + 2) : 
                         (Math.floor(Math.random() * 10) + 1);
      const problem = generateArithmeticSequence(start, difference, 5);
      const nextTerms = [
        start + 5 * difference,
        start + 6 * difference,
        start + 7 * difference
      ];
      return {
        ...problem,
        answer: nextTerms,
        pattern: problem.pattern
      };
    } else {
      // Geometric - return first 4 terms, need next 3
      const ratio = difficulty === 'easy' ? 2 : difficulty === 'medium' ? (Math.random() > 0.5 ? 2 : 3) : (Math.floor(Math.random() * 3) + 2);
      const problem = generateGeometricSequence(start, ratio, 4);
      const nextTerms = [
        start * Math.pow(ratio, 4),
        start * Math.pow(ratio, 5),
        start * Math.pow(ratio, 6)
      ];
      return {
        ...problem,
        answer: nextTerms,
        pattern: problem.pattern
      };
    }
  } else {
    // identify-pattern - show full sequence, need to identify pattern
    const sequenceType = Math.random();
    const start = Math.floor(Math.random() * 10) + 1;
    
    if (sequenceType < 0.4) {
      const difference = Math.floor(Math.random() * 5) + 2;
      const problem = generateArithmeticSequence(start, difference, 5);
      return problem;
    } else if (sequenceType < 0.7) {
      const ratio = Math.floor(Math.random() * 3) + 2;
      const problem = generateGeometricSequence(start, ratio, 5);
      return problem;
    } else if (sequenceType < 0.85) {
      return generateSquareSequence(5);
    } else {
      return generateTriangularSequence(5);
    }
  }
}

export function NumberSequencesInteractive() {
  const [gameMode, setGameMode] = useState<GameMode>('find-missing');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [problem, setProblem] = useState<SequenceProblem>(() => generateProblem('find-missing', 'easy'));
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);
  const [showPattern, setShowPattern] = useState(false);

  const generateNewProblem = () => {
    const newProblem = generateProblem(gameMode, difficulty);
    setProblem(newProblem);
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
    setShowPattern(false);
  };

  const handleSubmit = () => {
    if (gameMode === 'continue') {
      // For continue mode, expect comma-separated values
      const userAnswers = userAnswer.split(',').map(a => parseInt(a.trim())).filter(n => !isNaN(n));
      const correctAnswers = Array.isArray(problem.answer) ? problem.answer : [problem.answer];
      
      if (userAnswers.length === correctAnswers.length && 
          userAnswers.every((ans, i) => ans === correctAnswers[i])) {
        setFeedback({ 
          type: 'correct', 
          message: `Excellent! The next terms are: ${correctAnswers.join(', ')}. Pattern: ${problem.pattern}` 
        });
        setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        setFeedback({ 
          type: 'incorrect', 
          message: `Not quite. The correct next terms are: ${correctAnswers.join(', ')}. Pattern: ${problem.pattern}` 
        });
        setScore(prev => ({ total: prev.total + 1 }));
      }
    } else {
      // For find-missing or identify-pattern
      const answer = parseInt(userAnswer);
      if (isNaN(answer)) {
        setFeedback({ type: 'incorrect', message: 'Please enter a valid number!' });
        return;
      }

      const correctAnswer = Array.isArray(problem.answer) ? problem.answer[0] : problem.answer;
      
      if (answer === correctAnswer) {
        const message = gameMode === 'find-missing' 
          ? `Perfect! The missing term is ${correctAnswer}. Pattern: ${problem.pattern}`
          : `Great! You identified the pattern correctly: ${problem.pattern}`;
        setFeedback({ type: 'correct', message });
        setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        const message = gameMode === 'find-missing'
          ? `Not quite. The correct missing term is ${correctAnswer}. Pattern: ${problem.pattern}`
          : `Not quite. The pattern is: ${problem.pattern}`;
        setFeedback({ type: 'incorrect', message });
        setScore(prev => ({ total: prev.total + 1 }));
      }
    }
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    generateNewProblem();
  };

  const handleModeChange = (newMode: GameMode) => {
    setGameMode(newMode);
    const newProblem = generateProblem(newMode, difficulty);
    setProblem(newProblem);
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
    setShowPattern(false);
  };

  const handleDifficultyChange = (newDifficulty: Difficulty) => {
    setDifficulty(newDifficulty);
    const newProblem = generateProblem(gameMode, newDifficulty);
    setProblem(newProblem);
    setUserAnswer('');
    setFeedback({ type: null, message: '' });
    setShowHint(false);
    setShowPattern(false);
  };

  const formatSequence = (seq: (number | null)[]): string => {
    return seq.map(n => n === null ? '___' : n.toString()).join(', ');
  };

  return (
    <div className="space-y-6">
      {/* Game Mode Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          onClick={() => handleModeChange('find-missing')}
          variant={gameMode === 'find-missing' ? 'default' : 'outline'}
          size="sm"
        >
          Find Missing Term
        </Button>
        <Button
          onClick={() => handleModeChange('continue')}
          variant={gameMode === 'continue' ? 'default' : 'outline'}
          size="sm"
        >
          Continue Sequence
        </Button>
        <Button
          onClick={() => handleModeChange('identify-pattern')}
          variant={gameMode === 'identify-pattern' ? 'default' : 'outline'}
          size="sm"
        >
          Identify Pattern
        </Button>
      </div>

      {/* Difficulty Level */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          onClick={() => handleDifficultyChange('easy')}
          variant={difficulty === 'easy' ? 'default' : 'outline'}
          size="sm"
          className="text-xs"
        >
          Easy
        </Button>
        <Button
          onClick={() => handleDifficultyChange('medium')}
          variant={difficulty === 'medium' ? 'default' : 'outline'}
          size="sm"
          className="text-xs"
        >
          Medium
        </Button>
        <Button
          onClick={() => handleDifficultyChange('hard')}
          variant={difficulty === 'hard' ? 'default' : 'outline'}
          size="sm"
          className="text-xs"
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
                {gameMode === 'find-missing' && 'Find the missing term in this sequence:'}
                {gameMode === 'continue' && 'Continue this sequence. Write the next 3 terms:'}
                {gameMode === 'identify-pattern' && 'What is the missing term? (This will help identify the pattern):'}
              </p>
              
              {/* Visual Sequence Display */}
              <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                <div className="font-mono text-xl md:text-2xl font-bold text-primary mb-4">
                  {formatSequence(problem.sequence)}
                  {gameMode === 'continue' && ', ...'}
                </div>
                
                {gameMode === 'find-missing' && (
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-slate-600 text-lg">Missing term =</span>
                    <input
                      type="number"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="?"
                      className="w-32 text-right font-bold text-primary border-2 border-primary/30 rounded px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      autoFocus
                    />
                  </div>
                )}
                
                {gameMode === 'continue' && (
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-sm text-slate-600 mb-2">Enter the next 3 terms (separated by commas):</p>
                    <input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="e.g., 42, 49, 56"
                      className="w-full max-w-md text-center font-bold text-primary border-2 border-primary/30 rounded px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      autoFocus
                    />
                  </div>
                )}
                
                {gameMode === 'identify-pattern' && (
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-sm text-slate-600 mb-2">First, find the missing term:</p>
                    <input
                      type="number"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="?"
                      className="w-32 text-right font-bold text-primary border-2 border-primary/30 rounded px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      autoFocus
                    />
                  </div>
                )}
              </div>

              {/* Hint */}
              {showHint && (
                <div className="bg-yellow-50 p-3 rounded border border-yellow-300 mb-4">
                  <p className="text-xs text-yellow-900">
                    💡 <span className="font-semibold">Hint:</span> {
                      problem.type === 'arithmetic' 
                        ? 'Look at the difference between consecutive terms. Is it the same?'
                        : problem.type === 'geometric'
                        ? 'Look at the ratio between consecutive terms. Do you multiply by the same number?'
                        : problem.type === 'square'
                        ? 'These are square numbers: 1², 2², 3², 4², ...'
                        : 'These are triangular numbers. Look at how much is added each time.'
                    }
                  </p>
                </div>
              )}

              {/* Show Pattern */}
              {showPattern && (
                <div className="bg-green-50 p-4 rounded border border-green-300 mb-4">
                  <p className="text-xs font-semibold text-green-900 mb-2">Pattern:</p>
                  <p className="text-sm text-green-800 font-semibold">{problem.pattern}</p>
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
                <Button onClick={() => setShowPattern(!showPattern)} variant="outline" size="sm">
                  {showPattern ? 'Hide' : 'Show'} Pattern
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
          <li>Choose a game mode: Find Missing Term, Continue Sequence, or Identify Pattern</li>
          <li>Choose a difficulty level (Easy, Medium, or Hard)</li>
          <li>Look at the sequence and identify the pattern</li>
          <li>Enter your answer (for Continue mode, enter 3 terms separated by commas)</li>
          <li>Click "Check Answer" to see if you're correct</li>
          <li>Use "Show Hint" for helpful tips or "Show Pattern" to see the pattern</li>
          <li>Click "New Problem" to practice more or "Reset Score" to start over</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Tips:</span> Look for patterns by finding differences (arithmetic) or ratios (geometric) between terms. 
          Some sequences follow special patterns like square numbers or triangular numbers!
        </p>
      </div>
    </div>
  );
}

