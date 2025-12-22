'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  type: 'multiple_choice' | 'practical_activity';
  options?: string[];
  correctAnswer?: string;
}

interface QuizComponentProps {
  questions: Question[];
  subStrandId: string;
  onSubmit: (answers: Record<string, string | File>) => Promise<void>;
}

export function QuizComponent({ questions, subStrandId, onSubmit }: QuizComponentProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<Record<string, File>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await onSubmit({ ...answers, ...files });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {questions.map((question, index) => (
        <Card key={question.id}>
          <CardHeader>
            <CardTitle className="text-lg">
              Question {index + 1}: {question.question}
            </CardTitle>
            {question.type === 'practical_activity' && (
              <CardDescription>
                Upload your practical activity work (image or PDF)
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {question.type === 'multiple_choice' && question.options ? (
              <RadioGroup
                value={answers[question.id] || ''}
                onValueChange={(value) =>
                  setAnswers({ ...answers, [question.id]: value })
                }
              >
                {question.options.map((option, optIndex) => (
                  <div key={optIndex} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`${question.id}-${optIndex}`} />
                    <Label
                      htmlFor={`${question.id}-${optIndex}`}
                      className="cursor-pointer"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <div className="space-y-4">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setFiles({ ...files, [question.id]: file });
                    }
                  }}
                  className="hidden"
                  id={`file-${question.id}`}
                />
                <Label
                  htmlFor={`file-${question.id}`}
                  className="flex items-center gap-2 cursor-pointer border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 hover:border-primary transition-colors"
                >
                  <Upload className="h-5 w-5" />
                  <span>
                    {files[question.id]
                      ? files[question.id].name
                      : 'Click to upload your work'}
                  </span>
                </Label>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-end">
        <Button onClick={handleSubmit} disabled={isSubmitting} size="lg">
          {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
        </Button>
      </div>
    </div>
  );
}

