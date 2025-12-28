import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function ShowingCompoundInequalitiesPage() {
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
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">8.5 • Number Line (Compound)</p>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Showing Compound Inequalities on a Number Line</h1>
      <p className="text-sm text-muted-foreground max-w-3xl">Represent combined ranges with two endpoints and appropriate open/closed circles and shading.</p>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Overview</CardTitle>
          <CardDescription className="text-xs">Interactive number line coming soon.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          <ul className="list-disc pl-6 space-y-2">
            <li>2 ≤ x &lt; 5: closed circle at 2, open circle at 5, shade between</li>
            <li>y ≤ −1 or y &gt; 3: two shaded regions (to the left of −1; to the right of 3)</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
