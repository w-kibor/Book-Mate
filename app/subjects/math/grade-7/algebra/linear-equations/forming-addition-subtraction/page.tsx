import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { FormingLinearEquationsAddSubInteractive } from '@/components/interactive/forming-linear-equations-add-sub-interactive';
import { MathRenderer } from '@/components/math/math-renderer';

export default function FormingLinearEquationsAddSubPage() {
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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Topic 7.1</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Forming Linear Equations in One Unknown (Addition and Subtraction)</h1>
        <p className="text-sm text-muted-foreground max-w-3xl">Learn how to translate word phrases into linear equations using + and - in one unknown.</p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Identify phrases that indicate addition or subtraction</li>
            <li>Use variables (x, y, a, b) to represent unknowns</li>
            <li>Form equations with an equals sign</li>
            <li>Check your equations by reasoning or substitution</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Common Phrases and Their Equations</CardTitle>
            <CardDescription>Recognize addition and subtraction phrases</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Addition Phrases:</p>
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
                      <td className="border border-slate-300 px-3 py-2">A number plus 7 equals 15</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$x + 7 = 15$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">The sum of a number and 12 is 20</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$x + 12 = 20$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">A number increased by 9 equals 21</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$x + 9 = 21$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">The sum of 10 and a number equals 16</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$10 + x = 16$</MathRenderer></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Subtraction Phrases:</p>
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
                      <td className="border border-slate-300 px-3 py-2">A number minus 5 equals 9</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$x - 5 = 9$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">7 less than a number equals 18</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$x - 7 = 18$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">A number decreased by 4 equals 10</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$x - 4 = 10$</MathRenderer></td>
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
                  Phrase: "A number plus 8 then minus 3 equals 20"<br />
                  <span className="font-semibold">Solution:</span> Let x represent the number. Translate step-by-step: x + 8 - 3 = 20
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2</p>
              <div className="bg-white p-4 rounded border border-green-300">
                <p className="text-sm text-slate-700">
                  Phrase: "12 increased by a number, then decreased by 5, equals 25"<br />
                  <span className="font-semibold">Solution:</span> 12 + x - 5 = 25
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
          <CardDescription>Write linear equations using + and - with one unknown</CardDescription>
        </CardHeader>
        <CardContent>
          <FormingLinearEquationsAddSubInteractive />
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
                <li>A number plus 6 equals 19</li>
                <li>13 less than a number equals 2</li>
                <li>A number decreased by 11 equals 4</li>
                <li>The sum of a number and 3 equals 9</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
