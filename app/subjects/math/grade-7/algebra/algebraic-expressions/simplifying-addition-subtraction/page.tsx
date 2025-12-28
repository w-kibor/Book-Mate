import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { SimplifyingAdditionSubtractionInteractive } from '@/components/interactive/simplifying-addition-subtraction-interactive';

export default function SimplifyingAdditionSubtractionPage() {
  return (
    <section className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/subjects/math/grade-7/algebra/algebraic-expressions">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Algebraic Expressions
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Topic 6.3</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Simplifying Algebraic Expressions: Addition and Subtraction</h1>
        <p className="text-sm text-muted-foreground max-w-3xl">Learn how to combine like terms and constants to simplify algebraic expressions that use addition and subtraction.</p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Understand what "like terms" are</li>
            <li>Simplify expressions by combining like terms</li>
            <li>Use coefficients to add and subtract variable terms</li>
            <li>Combine constant numbers</li>
            <li>Check answers by re-simplifying</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What Are Like Terms?</CardTitle>
            <CardDescription>Recognizing terms you can combine</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              <span className="font-semibold">Like terms</span> are terms that have the same variable part. For example, <MathRenderer display={false}>$x$</MathRenderer> and <MathRenderer display={false}>$3x$</MathRenderer> are like terms.
              You can combine them by adding or subtracting their <span className="font-semibold">coefficients</span>.
            </p>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Examples of Like Terms:</p>
              <div className="bg-white p-4 rounded border border-purple-300">
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-4">
                  <li><MathRenderer display={false}>$x + x = 2x$</MathRenderer></li>
                  <li><MathRenderer display={false}>$3x - x = 2x$</MathRenderer></li>
                  <li><MathRenderer display={false}>$2y + y = 3y$</MathRenderer></li>
                  <li><MathRenderer display={false}>$5a - 2a = 3a$</MathRenderer></li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Combining Constants:</p>
              <div className="bg-white p-4 rounded border border-green-300">
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-4">
                  <li><MathRenderer display={false}>$5 + 3 = 8$</MathRenderer></li>
                  <li><MathRenderer display={false}>$10 - 6 = 4$</MathRenderer></li>
                  <li><MathRenderer display={false}>$7 + 2 - 5 = 4$</MathRenderer></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Simplifying Step by Step</CardTitle>
            <CardDescription>Work through examples</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1:</p>
              <div className="bg-white p-4 rounded border border-blue-300">
                <p className="text-sm text-slate-700">
                  Simplify <MathRenderer display={false}>$x + x + 5$</MathRenderer><br />
                  <span className="font-semibold">Solution:</span> Combine like terms: <MathRenderer display={false}>$x + x = 2x$</MathRenderer>. Final answer: <MathRenderer display={false}>$2x + 5$</MathRenderer>
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2:</p>
              <div className="bg-white p-4 rounded border border-yellow-300">
                <p className="text-sm text-slate-700">
                  Simplify <MathRenderer display={false}>$3x - x + 4 - 2$</MathRenderer><br />
                  <span className="font-semibold">Solution:</span> Combine variable terms: <MathRenderer display={false}>$3x - x = 2x$</MathRenderer>. Combine constants: <MathRenderer display={false}>$4 - 2 = 2$</MathRenderer>. Final answer: <MathRenderer display={false}>$2x + 2$</MathRenderer>
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 3:</p>
              <div className="bg-white p-4 rounded border border-purple-300">
                <p className="text-sm text-slate-700">
                  Simplify <MathRenderer display={false}>$2a + 3 - a - 5$</MathRenderer><br />
                  <span className="font-semibold">Solution:</span> Combine variable terms: <MathRenderer display={false}>$2a - a = a$</MathRenderer>. Combine constants: <MathRenderer display={false}>$3 - 5 = -2$</MathRenderer>. Final answer: <MathRenderer display={false}>$a - 2$</MathRenderer>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Points to Remember</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
              <li>Only combine terms that have the same variable part</li>
              <li>Write the simplified expression with variable terms first, then constants</li>
              <li>Use a minus sign for negative constants: e.g., <MathRenderer display={false}>$a - 2$</MathRenderer></li>
              <li>Check your answer by simplifying again</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-purple-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>Practice simplifying expressions by combining like terms</CardDescription>
        </CardHeader>
        <CardContent>
          <SimplifyingAdditionSubtractionInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>Try these on your own</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Simplify the following:</p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li><MathRenderer display={false}>$5 + y - 2 + y$</MathRenderer></li>
                <li><MathRenderer display={false}>$2a + 3 - a - 5$</MathRenderer></li>
                <li><MathRenderer display={false}>$b + 7 - 3 + b - 2$</MathRenderer></li>
                <li><MathRenderer display={false}>$x - 3 + x - 2$</MathRenderer></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
