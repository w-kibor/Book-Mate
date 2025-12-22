import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { MathContent } from '@/components/math/math-renderer';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LessonPageProps {
  params: Promise<{ lessonId: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch lesson data
  const { data: lesson } = await supabase
    .from('lessons')
    .select(`
      *,
      sub_strands (
        id,
        name,
        strand_id,
        strands (
          id,
          name,
          subject_id
        )
      )
    `)
    .eq('id', lessonId)
    .single();

  if (!lesson) {
    redirect('/dashboard');
  }

  // Fetch all lessons in the same sub-strand for navigation
  const { data: allLessons } = await supabase
    .from('lessons')
    .select('id, title, order')
    .eq('sub_strand_id', lesson.sub_strand_id)
    .order('order');

  // Check if lesson is completed
  const { data: progress } = await supabase
    .from('student_progress')
    .select('completed')
    .eq('user_id', user.id)
    .eq('sub_strand_id', lesson.sub_strand_id)
    .single();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <Link
            href={`/sub-strands/${lesson.sub_strand_id}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          {progress?.completed && (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-medium">Completed</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Lessons</h3>
                <nav className="space-y-2">
                  {allLessons?.map((l) => (
                    <Link
                      key={l.id}
                      href={`/lessons/${l.id}`}
                      className={`block p-2 rounded-md text-sm transition-colors ${
                        l.id === lessonId
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      {l.order}. {l.title}
                    </Link>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  {lesson.title}
                </h1>
                <div className="prose prose-lg max-w-none">
                  <MathContent content={lesson.content} />
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 flex justify-end">
              <Button asChild>
                <Link href={`/assessments/${lesson.sub_strand_id}`}>
                  Take Assessment
                </Link>
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

