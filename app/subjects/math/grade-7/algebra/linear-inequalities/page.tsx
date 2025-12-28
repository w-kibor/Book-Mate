import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

const topics = [
  { id: '8.1', title: 'Inequality Symbols', href: '/subjects/math/grade-7/algebra/linear-inequalities/inequality-symbols' },
  { id: '8.2', title: 'Forming Simple Inequalities in One Unknown', href: '/subjects/math/grade-7/algebra/linear-inequalities/forming-simple-inequalities' },
  { id: '8.3', title: 'Showing Simple Inequalities on a Number Line', href: '/subjects/math/grade-7/algebra/linear-inequalities/showing-simple-inequalities' },
  { id: '8.4', title: 'Forming Compound Inequalities', href: '/subjects/math/grade-7/algebra/linear-inequalities/forming-compound-inequalities' },
  { id: '8.5', title: 'Showing Compound Inequalities on a Number Line', href: '/subjects/math/grade-7/algebra/linear-inequalities/showing-compound-inequalities' },
];

export default function LinearInequalitiesPage() {
  return (
    <section className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/subjects/math/grade-7/algebra">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Algebra
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Sub-strand 8.0 • 5 lessons</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Linear Inequalities</h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Understanding inequality symbols, forming and solving simple and compound inequalities, and representing them on number lines.
        </p>
      </div>

      {/* Topics */}
      <Card className="border-dashed border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-sm">Topics in this sub-strand</CardTitle>
          <CardDescription className="text-xs">Click on a topic to view detailed content</CardDescription>
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
                      Learn {topic.title.toLowerCase()} →
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Click on any topic to begin learning.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
