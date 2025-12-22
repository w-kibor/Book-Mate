import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, BookOpen, CheckCircle2 } from 'lucide-react';

interface SubStrandPageProps {
  params: Promise<{ subStrandId: string }>;
}

export default async function SubStrandPage({ params }: SubStrandPageProps) {
  const { subStrandId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch sub-strand with lessons
  const { data: subStrand } = await supabase
    .from('sub_strands')
    .select(`
      *,
      strands (
        id,
        name,
        subject_id
      )
    `)
    .eq('id', subStrandId)
    .single();

  if (!subStrand) {
    redirect('/dashboard');
  }

  // Fetch lessons
  const { data: lessons } = await supabase
    .from('lessons')
    .select('*')
    .eq('sub_strand_id', subStrandId)
    .order('order');

  // Check progress
  const { data: progress } = await supabase
    .from('student_progress')
    .select('completed, formative_assessment_score')
    .eq('user_id', user.id)
    .eq('sub_strand_id', subStrandId)
    .single();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href={`/strands/${subStrand.strand_id}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            {subStrand.name}
          </h1>
          {subStrand.description && (
            <p className="text-muted-foreground">{subStrand.description}</p>
          )}
          {progress?.completed && (
            <div className="mt-4 flex items-center gap-2 text-green-600">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-medium">
                Completed • Score: {progress.formative_assessment_score?.toFixed(0) || 0}%
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lessons?.map((lesson) => (
            <Link key={lesson.id} href={`/lessons/${lesson.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          Lesson {lesson.order}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {lesson.title}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          )) || (
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-center">
                  No lessons available yet. Check back soon!
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {lessons && lessons.length > 0 && (
          <div className="mt-8">
            <Link href={`/assessments/${subStrandId}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-secondary/10 border-secondary">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Take Formative Assessment
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Test your understanding of this sub-strand
                      </p>
                    </div>
                    <div className="text-2xl">📝</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

