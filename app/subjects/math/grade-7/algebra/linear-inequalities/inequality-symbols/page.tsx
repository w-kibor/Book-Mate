import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import MathRenderer from '@/components/math/math-renderer';

export default function InequalitySymbolsPage() {
  return (
    <section className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/subjects/math/grade-7/algebra/linear-inequalities">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Linear Inequalities
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">8.1 • Inequality Symbols</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Inequality Symbols</h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn the meanings of the symbols <span className="font-semibold">&lt;, &gt;, ≤, ≥</span> and how to read and write simple inequalities.
        </p>
      </div>

      {/* Symbols Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Meanings</CardTitle>
          <CardDescription className="text-xs">How each inequality symbol is read</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">x &lt; 5</span> — “x is less than 5”
              <div className="mt-1"><MathRenderer>{"$x<5$"}</MathRenderer></div>
            </li>
            <li>
              <span className="font-semibold">y &gt; 2</span> — “y is greater than 2”
              <div className="mt-1"><MathRenderer>{"$y>2$"}</MathRenderer></div>
            </li>
            <li>
              <span className="font-semibold">a ≤ 7</span> — “a is less than or equal to 7”
              <div className="mt-1"><MathRenderer>{"$a\\le 7$"}</MathRenderer></div>
            </li>
            <li>
              <span className="font-semibold">b ≥ −3</span> — “b is greater than or equal to −3”
              <div className="mt-1"><MathRenderer>{"$b\\ge -3$"}</MathRenderer></div>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Examples */}
      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-base">Examples</CardTitle>
          <CardDescription className="text-xs">Reading and writing inequalities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div>
            <p className="font-semibold">Write an inequality for: “x is at most 4”.</p>
            <p className="mt-1">Answer: <span className="font-mono">x ≤ 4</span></p>
            <div className="mt-1"><MathRenderer>{"$x\\le 4$"}</MathRenderer></div>
          </div>
          <div>
            <p className="font-semibold">Write an inequality for: “y is at least −1”.</p>
            <p className="mt-1">Answer: <span className="font-mono">y ≥ −1</span></p>
            <div className="mt-1"><MathRenderer>{"$y\\ge -1$"}</MathRenderer></div>
          </div>
          <div>
            <p className="font-semibold">True or false: <span className="font-mono">3 &lt; 3</span>?</p>
            <p className="mt-1">False. 3 is not less than 3; it is equal. But <span className="font-mono">3 ≤ 3</span> is true.</p>
            <div className="mt-1"><MathRenderer>{"$3<3$"}</MathRenderer> is false; <MathRenderer>{"$3\\le 3$"}</MathRenderer> is true.</div>
          </div>
        </CardContent>
      </Card>

      {/* Practice (plain text prompts; interactive to be added later) */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Quick Practice</CardTitle>
          <CardDescription className="text-xs">Write each statement as an inequality (plain text)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <ol className="list-decimal pl-6 space-y-2">
            <li>x is greater than 10 →</li>
            <li>a is less than or equal to 0 →</li>
            <li>b is at least 5 →</li>
            <li>y is less than −2 →</li>
          </ol>
          <p className="text-xs text-muted-foreground mt-2">We will add an interactive checker here soon.</p>
        </CardContent>
      </Card>
    </section>
  );
}
