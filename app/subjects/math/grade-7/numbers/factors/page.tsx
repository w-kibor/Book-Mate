import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function FactorsPage() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/subjects/math/grade-7/numbers">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Numbers
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Sub-strand 1.2 • 7 lessons
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Factors
        </h2>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Divisibility tests, prime factorization, Greatest Common Divisor (GCD), and Least Common Multiples (LCM).
        </p>
      </div>

      <Card className="border-dashed border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-sm">Topics in this sub-strand</CardTitle>
          <CardDescription className="text-xs">
            Click on a topic to view detailed content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">1.2.1 Divisibility test of 2, 3, 4</p>
            <p className="text-xs text-muted-foreground">1.2.2 Divisibility test of 5, 6, 8</p>
            <p className="text-xs text-muted-foreground">1.2.3 Divisibility test of 9, 10, 11</p>
            <p className="text-xs text-muted-foreground">1.2.4 Expressing a Number as a Product of its Prime Factors</p>
            <p className="text-xs text-muted-foreground">1.2.5 Greatest Common Divisor (GCD)</p>
            <p className="text-xs text-muted-foreground">1.2.6 Applying the Greatest Common Divisor (GCD)</p>
            <p className="text-xs text-muted-foreground">1.2.7 Least Common Multiples (LCM)</p>
            <p className="text-xs text-muted-foreground">1.2.8 Applying the Least Common Multiples (LCM)</p>
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Content for each topic will be added here. Start with topic 1.2.1 to begin learning.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

