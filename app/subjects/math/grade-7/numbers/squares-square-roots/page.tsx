import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SquaresSquareRootsPage() {
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
          Sub-strand 1.5 • 5 lessons
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Squares and Square Roots
        </h2>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Finding squares and square roots of whole numbers, fractions, and decimals.
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
            <p className="text-xs text-muted-foreground">1.5.1 Squares of Whole Numbers</p>
            <p className="text-xs text-muted-foreground">1.5.2 Squares of Fractions</p>
            <p className="text-xs text-muted-foreground">1.5.3 Squares of Decimals</p>
            <p className="text-xs text-muted-foreground">1.5.4 Square Roots of Whole Numbers</p>
            <p className="text-xs text-muted-foreground">1.5.5 Square Roots of Fractions</p>
            <p className="text-xs text-muted-foreground">1.5.6 Square Roots of Decimals</p>
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Content for each topic will be added here. Start with topic 1.5.1 to begin learning.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

