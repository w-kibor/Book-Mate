import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function FractionsPage() {
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
          Sub-strand 1.3 • 9 lessons
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Fractions
        </h2>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Comparing, adding, subtracting, multiplying, and dividing fractions. Reciprocals and number sequences with fractions.
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
            <p className="text-xs text-muted-foreground">1.3.1 Comparing Fractions</p>
            <p className="text-xs text-muted-foreground">1.3.2 Adding Fractions</p>
            <p className="text-xs text-muted-foreground">1.3.3 Subtracting Fractions</p>
            <p className="text-xs text-muted-foreground">1.3.4 Multiplying a fraction by a whole number</p>
            <p className="text-xs text-muted-foreground">1.3.5 Multiplying a fraction by a fraction</p>
            <p className="text-xs text-muted-foreground">1.3.6 Reciprocal of a Fraction</p>
            <p className="text-xs text-muted-foreground">1.3.7 Dividing a fraction by a whole number</p>
            <p className="text-xs text-muted-foreground">1.3.8 Dividing a fraction by a fraction</p>
            <p className="text-xs text-muted-foreground">1.3.9 Dividing a whole number by a fraction</p>
            <p className="text-xs text-muted-foreground">1.3.10 Number Sequences Involving Fractions</p>
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Content for each topic will be added here. Start with topic 1.3.1 to begin learning.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

