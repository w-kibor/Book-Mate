import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { SolvingLinearEquationsOneUnknownInteractive } from '@/components/interactive/solving-linear-equations-one-unknown-interactive';

export default function SolvingOneUnknownPage() {
  return (
    <section className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/subjects/math/grade-7/algebra/linear-equations">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Linear Equations
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Topic 7.3</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Solving Linear Equations in One Unknown</h1>
        <p className="text-sm text-muted-foreground max-w-3xl">Learn step-by-step to isolate the variable and find its value. Student input is plain text (no dollar signs).</p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Move constants across the equals sign</li>
            <li>Divide by the coefficient of the variable</li>
            <li>Solve equations that include x divided by a number</li>
            <li>Check solutions by substitution</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Examples</CardTitle>
            <CardDescription>Worked solutions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white p-4 rounded border border-slate-200">
              <p className="text-sm text-slate-700">
                Solve <MathRenderer display={false}>$2x + 3 = 11$</MathRenderer><br />
                Subtract 3 from both sides: <MathRenderer display={false}>$2x = 8$</MathRenderer><br />
                Divide both sides by 2: <MathRenderer display={false}>$x = 4$</MathRenderer>
              </p>
            </div>

            <div className="bg-white p-4 rounded border border-slate-200">
              <p className="text-sm text-slate-700">
                Solve <MathRenderer display={false}>$x/2 + 5 = 9$</MathRenderer><br />
                Subtract 5: <MathRenderer display={false}>$x/2 = 4$</MathRenderer><br />
                Multiply both sides by 2: <MathRenderer display={false}>$x = 8$</MathRenderer>
              </p>
            </div>

            <div className="bg-white p-4 rounded border border-slate-200">
              <p className="text-sm text-slate-700">
                Solve <MathRenderer display={false}>$3x - 7 = 2$</MathRenderer><br />
                Add 7: <MathRenderer display={false}>$3x = 9$</MathRenderer><br />
                Divide by 3: <MathRenderer display={false}>$x = 3$</MathRenderer>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-purple-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>Enter a plain-text numeric solution (e.g., 4 or 3/2)</CardDescription>
        </CardHeader>
        <CardContent>
          <SolvingLinearEquationsOneUnknownInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>Try solving these</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>2x + 5 = 15</li>
                <li>x/3 - 2 = 5</li>
                <li>4 + x = 1</li>
                <li>6y - 12 = 0</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
