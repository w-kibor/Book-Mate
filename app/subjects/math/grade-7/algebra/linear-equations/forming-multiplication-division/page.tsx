import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { FormingLinearEquationsMulDivInteractive } from '@/components/interactive/forming-linear-equations-mul-div-interactive';

export default function FormingLinearEquationsMulDivPage() {
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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Topic 7.2</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Forming Linear Equations in One Unknown (Multiplication and Division)</h1>
        <p className="text-sm text-muted-foreground max-w-3xl">Translate word phrases involving × or ÷ into clear linear equations with one unknown.</p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Identify multiplication and division phrases</li>
            <li>Use variables (x, y, a, b) to represent the unknown</li>
            <li>Write equations using either 3x or x*3, and x/4 for division</li>
            <li>Check equations by reasoning or substitution</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Common Phrases to Equations</CardTitle>
            <CardDescription>Recognizing multiplication and division</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Multiplication Phrases:</p>
              <div className="bg-white p-4 rounded border border-purple-300 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-slate-300 px-3 py-2 text-left">Word Phrase</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Equation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">A number multiplied by 3 equals 12</td>
                      <td className="border border-slate-300 px-3 py-2">3x = 12</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">3 times a number equals 18</td>
                      <td className="border border-slate-300 px-3 py-2">3x = 18</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">Twice a number equals 10</td>
                      <td className="border border-slate-300 px-3 py-2">2x = 10</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">Triple a number equals 21</td>
                      <td className="border border-slate-300 px-3 py-2">3x = 21</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Division Phrases:</p>
              <div className="bg-white p-4 rounded border border-yellow-300 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-slate-300 px-3 py-2 text-left">Word Phrase</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Equation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">A number divided by 4 equals 3</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>{`$\\frac{x}{4} = 3$`}</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">Half of a number equals 7</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>{`$\\frac{x}{2} = 7$`}</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">The quotient of a number and 5 equals 6</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>{`$\\frac{x}{5} = 6$`}</MathRenderer></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Worked Examples</CardTitle>
            <CardDescription>Translate and form equations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1</p>
              <div className="bg-white p-4 rounded border border-blue-300">
                <p className="text-sm text-slate-700">
                  Phrase: "A number multiplied by 4 equals 20"<br />
                  <span className="font-semibold">Solution:</span> 4x = 20
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2</p>
              <div className="bg-white p-4 rounded border border-green-300">
                <p className="text-sm text-slate-700">
                  Phrase: "A number divided by 2 equals 9"<br />
                  <span className="font-semibold">Solution:</span> x/2 = 9
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 3</p>
              <div className="bg-white p-4 rounded border border-purple-300">
                <p className="text-sm text-slate-700">
                  Phrase: "6 times a number, then divided by 3, equals 8"<br />
                  <span className="font-semibold">Solution:</span> 6x/3 = 8 (which simplifies to 2x = 8)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-purple-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>Write linear equations using × and ÷ with one unknown</CardDescription>
        </CardHeader>
        <CardContent>
          <FormingLinearEquationsMulDivInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>Try translating these phrases</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>A number multiplied by 6 equals 30</li>
                <li>A number divided by 5 equals 4</li>
                <li>Triple a number equals 24</li>
                <li>Half of a number equals 11</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
