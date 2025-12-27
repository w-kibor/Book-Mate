import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const topics = [
  { id: '1.3.1', title: 'Comparing Fractions', href: '/subjects/math/grade-7/numbers/fractions/comparing-fractions' },
  { id: '1.3.2', title: 'Adding Fractions', href: '/subjects/math/grade-7/numbers/fractions/adding-fractions' },
  { id: '1.3.3', title: 'Subtracting Fractions', href: '/subjects/math/grade-7/numbers/fractions/subtracting-fractions' },
  { id: '1.3.4', title: 'Multiplying a fraction by a whole number', href: '/subjects/math/grade-7/numbers/fractions/multiplying-fraction-whole' },
  { id: '1.3.5', title: 'Multiplying a fraction by a fraction', href: '/subjects/math/grade-7/numbers/fractions/multiplying-fractions' },
  { id: '1.3.6', title: 'Reciprocal of a Fraction', href: '/subjects/math/grade-7/numbers/fractions/reciprocal' },
  { id: '1.3.7', title: 'Dividing a fraction by a whole number', href: '/subjects/math/grade-7/numbers/fractions/dividing-fraction-whole' },
  { id: '1.3.8', title: 'Dividing a fraction by a fraction', href: '/subjects/math/grade-7/numbers/fractions/dividing-fractions' },
  { id: '1.3.9', title: 'Dividing a whole number by a fraction', href: '/subjects/math/grade-7/numbers/fractions/dividing-whole-fraction' },
  { id: '1.3.10', title: 'Number Sequences Involving Fractions', href: '/subjects/math/grade-7/numbers/fractions/fraction-sequences' },
];

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
