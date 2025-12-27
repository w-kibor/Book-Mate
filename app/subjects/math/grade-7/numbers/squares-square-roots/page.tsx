import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const topics = [
  { id: '1.5.1', title: 'Squares of Whole Numbers', href: '/subjects/math/grade-7/numbers/squares-square-roots/squares-whole-numbers' },
  { id: '1.5.2', title: 'Squares of Fractions', href: '/subjects/math/grade-7/numbers/squares-square-roots/squares-fractions' },
  { id: '1.5.3', title: 'Squares of Decimals', href: '/subjects/math/grade-7/numbers/squares-square-roots/squares-decimals' },
  { id: '1.5.4', title: 'Square Roots of Whole Numbers', href: '/subjects/math/grade-7/numbers/squares-square-roots/square-roots-whole-numbers' },
  { id: '1.5.5', title: 'Square Roots of Fractions', href: '/subjects/math/grade-7/numbers/squares-square-roots/square-roots-fractions' },
  { id: '1.5.6', title: 'Square Roots of Decimals', href: '/subjects/math/grade-7/numbers/squares-square-roots/square-roots-decimals' },
];

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
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={topic.href}
                className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-primary group-hover:text-primary/90">
                      {topic.id} {topic.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Learn {topic.title.toLowerCase()} with interactive practice →
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Click on any topic to begin learning with interactive practice!
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
