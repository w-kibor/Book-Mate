import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { SimplifyingMultiplicationInteractive } from '@/components/interactive/simplifying-multiplication-interactive';

export default function SimplifyingMultiplicationPage() {
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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Topic 6.4</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Simplifying Algebraic Expressions: Multiplication</h1>
        <p className="text-sm text-muted-foreground max-w-3xl">Learn how to simplify multiplication of algebraic terms by multiplying coefficients and combining variables. All examples and practice avoid the "$" symbol.</p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Multiply coefficients (numbers) correctly</li>
            <li>Combine variables by adding exponents</li>
            <li>Write simplified expressions in canonical order</li>
            <li>Use "^" to indicate powers (e.g., x^2)</li>
            <li>Avoid using "$" in expressions</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Rules for Multiplying Terms</CardTitle>
            <CardDescription>Plain text expressions, no "$"</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-700">
            <div className="bg-white p-4 rounded border border-slate-200">
              <p className="font-semibold">Examples:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>2x * 3 = 6x</li>
                <li>x * x = x^2</li>
                <li>3a * 2b = 6ab</li>
                <li>4y * y = 4y^2</li>
                <li>2 * 3x = 6x</li>
                <li>-2x * 3 = -6x</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded border border-blue-200">
              <p className="font-semibold mb-2">Step-by-step:</p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>Multiply the numbers (coefficients)</li>
                <li>Combine variables: add powers for same letters (x * x = x^2)</li>
                <li>Write variables in alphabetical order (ab, not ba)</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Practice Examples</CardTitle>
            <CardDescription>Try simplifying these</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-700">
            <div className="bg-white p-4 rounded border border-slate-200">
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>2x * 5x → 10x^2</li>
                <li>3y * 4 → 12y</li>
                <li>a * a * a → a^3</li>
                <li>2ab * 3a → 6a^2b</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-purple-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>Enter simplified expressions as plain text (e.g., 6x, x^2)</CardDescription>
        </CardHeader>
        <CardContent>
          <SimplifyingMultiplicationInteractive />
        </CardContent>
      </Card>
    </section>
  );
}
