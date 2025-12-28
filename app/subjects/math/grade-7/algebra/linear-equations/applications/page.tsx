import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function LinearEquationsApplicationsPage() {
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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Topic 7.4</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Applying Linear Equations in One Unknown</h1>
        <p className="text-sm text-muted-foreground max-w-3xl">Form and solve linear equations from real-life situations using plain text equations (no dollar signs).</p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Identify the unknown and represent it with a variable</li>
            <li>Translate word problems into linear equations</li>
            <li>Solve and interpret the solution in context</li>
            <li>Check solutions by substitution</li>
          </ul>
        </CardContent>
      </Card>

      {/* Real-life Scenarios */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Shopping and Budgeting</CardTitle>
            <CardDescription>Cost, quantity, and totals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-700">
            <div className="bg-white p-4 rounded border border-slate-200">
              <p className="font-semibold mb-2">Example 1</p>
              <p>
                Sarah buys x pencils at 20 shillings each and a notebook for 60 shillings. Her total is 200 shillings.
                Form an equation and find x.
              </p>
              <p className="mt-2">Equation: 20x + 60 = 200 → 20x = 140 → x = 7</p>
            </div>

            <div className="bg-white p-4 rounded border border-slate-200">
              <p className="font-semibold mb-2">Example 2</p>
              <p>
                A shirt costs 50 shillings more than a pair of socks. If the socks cost s shillings, and the total for one shirt and one pair of socks is 260 shillings, find s.
              </p>
              <p className="mt-2">Equation: s + (s + 50) = 260 → 2s + 50 = 260 → 2s = 210 → s = 105</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Age Problems</CardTitle>
            <CardDescription>Comparing ages with differences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-700">
            <div className="bg-white p-4 rounded border border-slate-200">
              <p className="font-semibold mb-2">Example 3</p>
              <p>
                Tom is 5 years older than his sister. The sum of their ages is 29. If the sister's age is a, find a.
              </p>
              <p className="mt-2">Equation: a + (a + 5) = 29 → 2a + 5 = 29 → 2a = 24 → a = 12</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distance, Speed, and Time</CardTitle>
            <CardDescription>Using D = S × T</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-700">
            <div className="bg-white p-4 rounded border border-slate-200">
              <p className="font-semibold mb-2">Example 4</p>
              <p>
                A cyclist travels at a constant speed of 12 km/h. If the distance travelled is 36 km, find the time t in hours.
              </p>
              <p className="mt-2">Equation: 12t = 36 → t = 3</p>
            </div>

            <div className="bg-white p-4 rounded border border-slate-200">
              <p className="font-semibold mb-2">Example 5</p>
              <p>
                A bus travels for 2 hours at speed v km/h and covers 160 km. Find v.
              </p>
              <p className="mt-2">Equation: v × 2 = 160 → 2v = 160 → v = 80</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Work and Rates</CardTitle>
            <CardDescription>Combining rates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-700">
            <div className="bg-white p-4 rounded border border-slate-200">
              <p className="font-semibold mb-2">Example 6</p>
              <p>
                A tap fills a tank in 6 hours and another tap fills it in 3 hours. Working together, they fill the tank in t hours.
                Find t.
              </p>
              <p className="mt-2">Equation (rate addition): (1/6 + 1/3) × t = 1 → (1/2) × t = 1 → t = 2</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>Form and solve equations (plain text)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>Mary has m shillings. She spends 250 shillings and now has 430 shillings. Form an equation and find m.</li>
                <li>The length of a rectangle is 3 cm more than its width w. If the perimeter is 26 cm, form an equation and find w.</li>
                <li>John buys 3 pens at p shillings each and a book for 120 shillings. He spends 300 shillings in total. Form an equation and find p.</li>
                <li>A car travels at 60 km/h for t hours and covers 150 km. Form an equation and find t.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
