import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function FormingCompoundInequalitiesPage() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/subjects/math/grade-7/algebra/linear-inequalities">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Linear Inequalities
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" />
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">8.4 • Compound Inequalities</p>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Forming Compound Inequalities</h1>
      <p className="text-sm text-muted-foreground max-w-3xl">Use words like “between” and “at least/at most” to write combined statements, e.g., 2 ≤ x &lt; 5.</p>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Overview</CardTitle>
          <CardDescription className="text-xs">Interactive practice coming soon.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          <ul className="list-disc pl-6 space-y-2">
            <li>“x is between 2 and 5” → 2 ≤ x &lt; 5</li>
            <li>“y is at least 1 and at most 4” → 1 ≤ y ≤ 4</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
