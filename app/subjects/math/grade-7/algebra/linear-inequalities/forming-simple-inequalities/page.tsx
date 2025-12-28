import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function FormingSimpleInequalitiesPage() {
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
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">8.2 • Forming Simple Inequalities</p>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Forming Simple Inequalities in One Unknown</h1>
      <p className="text-sm text-muted-foreground max-w-3xl">Translate words into inequalities using &lt;, &gt;, ≤, ≥. Inputs will be plain text.</p>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Overview</CardTitle>
          <CardDescription className="text-xs">We will add interactive practice here next.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          <ul className="list-disc pl-6 space-y-2">
            <li>“x is greater than 3” → x &gt; 3</li>
            <li>“y is at most 5” → y ≤ 5</li>
            <li>“a is less than −2” → a &lt; −2</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
