import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { QuizComponent } from '@/components/assessment/quiz-component';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AssessmentPageProps {
  params: Promise<{ subStrandId: string }>;
}

export default async function AssessmentPage({ params }: AssessmentPageProps) {
  const { subStrandId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch assessment data
  const { data: assessment } = await supabase
    .from('assessments')
    .select('*')
    .eq('sub_strand_id', subStrandId)
    .single();

  if (!assessment) {
    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-muted-foreground">
              No assessment available for this sub-strand yet.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const questions = assessment.questions as Array<{
    id: string;
    question: string;
    type: 'multiple_choice' | 'practical_activity';
    options?: string[];
    correctAnswer?: string;
  }>;

  async function handleSubmit(answers: Record<string, string | File>) {
    'use server';
    
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    // Calculate score for multiple choice questions
    let score = 0;
    let totalMCQ = 0;

    questions.forEach((q) => {
      if (q.type === 'multiple_choice' && q.correctAnswer) {
        totalMCQ++;
        if (answers[q.id] === q.correctAnswer) {
          score++;
        }
      }
    });

    const percentage = totalMCQ > 0 ? (score / totalMCQ) * 100 : 0;

    // Update or insert progress
    await supabase.from('student_progress').upsert({
      user_id: user.id,
      sub_strand_id: subStrandId,
      completed: true,
      completion_date: new Date().toISOString(),
      formative_assessment_score: percentage,
    });

    // TODO: Handle file uploads for practical activities
    // This would require Supabase Storage integration
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{assessment.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <QuizComponent
              questions={questions}
              subStrandId={subStrandId}
              onSubmit={handleSubmit}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

