import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function ShowingSimpleInequalitiesPage() {
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
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">8.3 • Number Line Representation</p>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Showing Simple Inequalities on a Number Line</h1>
      <p className="text-sm text-muted-foreground max-w-3xl">Open circle for &lt; or &gt;; closed circle for ≤ or ≥. Shade the direction.</p>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Overview</CardTitle>
          <CardDescription className="text-xs">Interactive number line coming soon.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          <ul className="list-disc pl-6 space-y-2">
            <li>x &gt; 2: open circle at 2, shade to the right</li>
            <li>y ≤ −1: closed circle at −1, shade to the left</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
