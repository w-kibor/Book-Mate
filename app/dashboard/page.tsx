import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Calculator } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch user's grade (default to 7 if not set)
  const { data: profile } = await supabase
    .from('profiles')
    .select('grade_id')
    .eq('id', user.id)
    .single();

  const currentGrade = profile?.grade_id || '7'; // Default to Grade 7

  const subjects = [
    {
      id: 'math',
      name: 'Mathematics',
      code: 'MATH',
      icon: Calculator,
      description: 'Explore mathematical concepts and problem-solving',
      color: 'bg-blue-500',
    },
    {
      id: 'science',
      name: 'Integrated Science',
      code: 'INT_SCI',
      icon: BookOpen,
      description: 'Discover the world through scientific inquiry',
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Welcome back!
          </h1>
          <p className="text-muted-foreground">
            Grade {currentGrade} • Continue your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            const href =
              subject.id === 'math'
                ? '/subjects/math/grade-7'
                : `/subjects/${subject.id}`;
            const cta =
              subject.id === 'math'
                ? 'View Grade 7 strands and concepts'
                : 'Tap to view strands and start learning';
            return (
              <Link key={subject.id} href={href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`${subject.color} p-3 rounded-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{subject.name}</CardTitle>
                        <CardDescription>{subject.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cta}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

