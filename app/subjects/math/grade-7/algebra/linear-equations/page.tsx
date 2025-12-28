import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function LinearEquationsPage() {
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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Sub-strand 7.0</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Linear Equations</h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Forming and solving linear equations in one unknown, and applying them to real-world contexts.
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
            <Link href="/subjects/math/grade-7/algebra/linear-equations/forming-addition-subtraction" className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-primary group-hover:text-primary/90">7.1 Forming Linear Equations in One Unknown Involving Addition and Subtraction</p>
                  <p className="text-xs text-muted-foreground mt-1">Learn to write linear equations from word phrases using + and - →</p>
                </div>
                <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </div>
            </Link>

            <Link href="/subjects/math/grade-7/algebra/linear-equations/forming-multiplication-division" className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-primary group-hover:text-primary/90">7.2 Forming Linear Equations in One Unknown Involving Multiplication and Division</p>
                  <p className="text-xs text-muted-foreground mt-1">Learn to write linear equations from word phrases using × and ÷ →</p>
                </div>
                <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </div>
            </Link>

            <Link href="/subjects/math/grade-7/algebra/linear-equations/solving-one-unknown" className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-primary group-hover:text-primary/90">7.3 Solving Linear Equations in One Unknown</p>
                  <p className="text-xs text-muted-foreground mt-1">Practice solving equations like 2x + 3 = 11 step-by-step →</p>
                </div>
                <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </div>
            </Link>

            <Link href="/subjects/math/grade-7/algebra/linear-equations/applications" className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-primary group-hover:text-primary/90">7.4 Applying Linear Equations in One Unknown</p>
                  <p className="text-xs text-muted-foreground mt-1">Use equations to solve word problems and real-life scenarios →</p>
                </div>
                <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
