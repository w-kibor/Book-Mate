'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

type SideType = 'hypotenuse' | 'opposite' | 'adjacent';
type QuestionType = 'identify-side' | 'which-longest' | 'opposite-to';

interface Question {
  type: QuestionType;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

function generateQuestion(): Question {
  const types: QuestionType[] = ['identify-side', 'which-longest', 'opposite-to'];
  const type = types[Math.floor(Math.random() * types.length)];

  switch (type) {
    case 'identify-side':
      const sides = [
        { name: 'Hypotenuse', correct: true },
        { name: 'Opposite side', correct: false },
        { name: 'Adjacent side', correct: false },
      ];
      const shuffled = sides.sort(() => Math.random() - 0.5);
      return {
        type: 'identify-side',
        question: 'Which side is opposite the right angle in a right-angled triangle?',
        options: shuffled.map(s => s.name),
        correctAnswer: shuffled.findIndex(s => s.correct),
        explanation: 'The hypotenuse is the side opposite the right angle. It is always the longest side of a right-angled triangle.',
      };
    
    case 'which-longest':
      return {
        type: 'which-longest',
        question: 'Which side is always the longest in a right-angled triangle?',
        options: ['Hypotenuse', 'Opposite side', 'Adjacent side', 'They are all equal'],
        correctAnswer: 0,
        explanation: 'The hypotenuse is always the longest side in a right-angled triangle. It is opposite the right angle.',
      };
    
    case 'opposite-to':
      const angles = ['right angle', 'acute angle A', 'acute angle B'];
      const angle = angles[Math.floor(Math.random() * angles.length)];
      let correct = '';
      let explanation = '';
      
      if (angle === 'right angle') {
        correct = 'Hypotenuse';
        explanation = 'The side opposite the right angle is called the hypotenuse.';
      } else {
        correct = 'Opposite side';
        explanation = `The side opposite to ${angle} is called the opposite side (relative to that angle).`;
      }
      
      return {
        type: 'opposite-to',
        question: `What is the name of the side opposite to the ${angle}?`,
        options: ['Hypotenuse', 'Opposite side', 'Adjacent side', 'Base'],
        correctAnswer: angle === 'right angle' ? 0 : 1,
        explanation,
      };
    
    default:
      return generateQuestion();
  }
}

export function SidesRightTriangleInteractive() {
  const [question, setQuestion] = useState<Question>(generateQuestion);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);

  const generateNewQuestion = () => {
    setQuestion(generateQuestion());
    setSelectedAnswer(null);
    setFeedback({ type: null, message: '' });
    setShowHint(false);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      setFeedback({ type: 'incorrect', message: 'Please select an answer!' });
      return;
    }

    if (selectedAnswer === question.correctAnswer) {
      setFeedback({ 
        type: 'correct', 
        message: `Correct! ${question.explanation}` 
      });
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback({ 
        type: 'incorrect', 
        message: `Incorrect. The correct answer is: ${question.options[question.correctAnswer]}. ${question.explanation}` 
      });
      setScore(prev => ({ total: prev.total + 1 }));
    }
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    generateNewQuestion();
  };

  const getHint = (): string => {
    switch (question.type) {
      case 'identify-side':
        return 'Remember: The hypotenuse is the side opposite the right angle. It\'s always the longest side.';
      case 'which-longest':
        return 'Think about which side is opposite the right angle. That side is always the longest.';
      case 'opposite-to':
        return 'The side opposite the right angle is the hypotenuse. The sides opposite to acute angles are called opposite sides (relative to those angles).';
      default:
        return 'Think carefully about which side is opposite which angle.';
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
                {question.question}
              </p>
              
              <div className="bg-white p-6 rounded-lg border-2 border-primary/30 mb-4">
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedAnswer(index)}
                      className={`
                        w-full p-4 rounded-lg border-2 text-left transition-all
                        ${selectedAnswer === index
                          ? 'bg-primary text-white border-primary shadow-lg scale-105'
                          : 'bg-white border-slate-300 hover:bg-primary/10 hover:border-primary'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`
                          w-6 h-6 rounded-full border-2 flex items-center justify-center
                          ${selectedAnswer === index
                            ? 'border-white bg-white text-primary'
                            : 'border-slate-400'
                          }
                        `}>
                          {selectedAnswer === index && '✓'}
                        </div>
                        <span className="font-semibold">{option}</span>
                      </div>
                    </button>
                  ))}
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
                <Button onClick={handleSubmit} className="flex-1 min-w-[120px]" disabled={selectedAnswer === null}>
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
          <Button onClick={generateNewQuestion} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            New Question
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
          <li>Read the question carefully</li>
          <li>Select your answer by clicking on one of the options</li>
          <li>Click "Check Answer" to see if you're correct</li>
          <li>Use "Show Hint" for helpful tips</li>
          <li>Click "New Question" to practice more or "Reset Score" to start over</li>
        </ol>
        <p className="text-xs text-blue-800 mt-2">
          <span className="font-semibold">Remember:</span> The hypotenuse is always opposite the right angle and is the longest side. 
          The opposite and adjacent sides are named relative to the angle you're considering.
        </p>
      </div>
    </div>
  );
}

