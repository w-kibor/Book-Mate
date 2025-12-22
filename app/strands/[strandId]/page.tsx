import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface StrandPageProps {
  params: Promise<{ strandId: string }>;
}

export default async function StrandPage({ params }: StrandPageProps) {
  const { strandId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch strand with sub-strands
  const { data: strand } = await supabase
    .from('strands')
    .select('*')
    .eq('id', strandId)
    .single();

  if (!strand) {
    redirect('/dashboard');
  }

  // Fetch sub-strands
  const { data: subStrands } = await supabase
    .from('sub_strands')
    .select('*')
    .eq('strand_id', strandId)
    .order('order');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            {strand.name}
          </h1>
          {strand.description && (
            <p className="text-muted-foreground">{strand.description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subStrands?.map((subStrand) => (
            <Link key={subStrand.id} href={`/sub-strands/${subStrand.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{subStrand.name}</CardTitle>
                  {subStrand.description && (
                    <CardDescription>{subStrand.description}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Tap to view lessons
                  </p>
                </CardContent>
              </Card>
            </Link>
          )) || (
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-center">
                  No sub-strands available yet. Check back soon!
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

