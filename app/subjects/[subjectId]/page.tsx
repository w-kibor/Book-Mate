import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface SubjectPageProps {
  params: Promise<{ subjectId: string }>;
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { subjectId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Map subject IDs to codes
  const subjectMap: Record<string, string> = {
    math: 'MATH',
    science: 'INT_SCI',
  };

  const subjectCode = subjectMap[subjectId];

  if (!subjectCode) {
    redirect('/dashboard');
  }

  // Fetch strands for this subject (subject_id references subjects.code)
  const { data: strands } = await supabase
    .from('strands')
    .select('*')
    .eq('subject_id', subjectCode)
    .order('order');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            {subjectId === 'math' ? 'Mathematics' : 'Integrated Science'}
          </h1>
          <p className="text-muted-foreground">
            Select a strand to begin learning
          </p>

          {subjectId === 'math' && (
            <div className="mt-4">
              <Link
                href="/subjects/math/grade-7"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View Grade 7 Mathematics strands overview →
              </Link>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {strands?.map((strand) => (
            <Link key={strand.id} href={`/strands/${strand.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{strand.name}</CardTitle>
                  {strand.description && (
                    <CardDescription>{strand.description}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Tap to view sub-strands
                  </p>
                </CardContent>
              </Card>
            </Link>
          )) || (
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-center">
                  No strands available yet. Check back soon!
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

