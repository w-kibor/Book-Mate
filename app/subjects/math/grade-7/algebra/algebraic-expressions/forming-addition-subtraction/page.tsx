import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { FormingAlgebraicExpressionsInteractive } from '@/components/interactive/forming-algebraic-expressions-interactive';

export default function FormingAlgebraicExpressionsPage() {
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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Topic 6.1
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Forming Algebraic Expressions Involving Addition and Subtraction
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn to translate word problems and real-world situations into algebraic expressions using addition and subtraction.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Understand what algebraic expressions are</li>
            <li>Translate word phrases into algebraic expressions</li>
            <li>Form expressions involving addition and subtraction</li>
            <li>Use variables to represent unknown quantities</li>
            <li>Apply knowledge to solve real-world problems</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What are Algebraic Expressions?</CardTitle>
            <CardDescription>
              Understanding the basics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              An <span className="font-semibold">algebraic expression</span> is a mathematical phrase that contains numbers, 
              variables (letters), and operations (+, -, ×, ÷). Unlike equations, expressions don't have an equals sign.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Examples of Algebraic Expressions:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li><MathRenderer display={false}>$x + 5$</MathRenderer> (x plus 5)</li>
                <li><MathRenderer display={false}>$3a - 7$</MathRenderer> (3 times a minus 7)</li>
                <li><MathRenderer display={false}>$2y + 10$</MathRenderer> (2 times y plus 10)</li>
                <li><MathRenderer display={false}>$b - 4$</MathRenderer> (b minus 4)</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Key Terms:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 ml-4">
                <li><span className="font-semibold">Variable:</span> A letter (like x, y, a, b) that represents an unknown number</li>
                <li><span className="font-semibold">Constant:</span> A fixed number (like 5, 7, 10, 4)</li>
                <li><span className="font-semibold">Term:</span> Parts of an expression separated by + or -</li>
                <li><span className="font-semibold">Coefficient:</span> The number multiplying a variable (in 3a, 3 is the coefficient)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Translating Words to Expressions: Addition</CardTitle>
            <CardDescription>
              Common phrases that mean addition
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Addition Phrases:</p>
              <div className="bg-white p-4 rounded border border-purple-300 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-slate-300 px-3 py-2 text-left">Word Phrase</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Algebraic Expression</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">x plus 5</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$x + 5$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">5 more than x</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$x + 5$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">x increased by 3</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$x + 3$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">the sum of x and 7</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$x + 7$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">x added to 10</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$10 + x$</MathRenderer></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-purple-300">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Translate to an expression</p>
              <p className="text-sm text-slate-700 mb-2">
                "5 more than a number"
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-slate-700">Step 1: Choose a variable</p>
                <p className="text-slate-700">Let x represent the number</p>
                
                <p className="font-semibold text-slate-700 mt-3">Step 2: Translate the phrase</p>
                <p className="text-slate-700">"5 more than" means add 5</p>
                
                <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>$x + 5$</MathRenderer></p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Translating Words to Expressions: Subtraction</CardTitle>
            <CardDescription>
              Common phrases that mean subtraction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Subtraction Phrases:</p>
              <div className="bg-white p-4 rounded border border-yellow-300 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-slate-300 px-3 py-2 text-left">Word Phrase</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Algebraic Expression</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">x minus 4</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$x - 4$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">4 less than x</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$x - 4$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">x decreased by 6</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$x - 6$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">the difference of x and 8</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$x - 8$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">x subtracted from 15</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$15 - x$</MathRenderer></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-yellow-300">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Translate to an expression</p>
              <p className="text-sm text-slate-700 mb-2">
                "7 less than a number"
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-slate-700">Step 1: Choose a variable</p>
                <p className="text-slate-700">Let y represent the number</p>
                
                <p className="font-semibold text-slate-700 mt-3">Step 2: Translate the phrase</p>
                <p className="text-slate-700">"7 less than" means subtract 7</p>
                
                <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>$y - 7$</MathRenderer></p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Combining Addition and Subtraction</CardTitle>
            <CardDescription>
              Expressions with both operations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: "A number plus 5, minus 3"</p>
              <div className="bg-white p-4 rounded border border-blue-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Let x = the number</p>
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Translate step by step</p>
                  <p className="text-slate-700">"plus 5" → <MathRenderer display={false}>$x + 5$</MathRenderer></p>
                  <p className="text-slate-700">"minus 3" → subtract 3 from the result</p>
                  <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>$x + 5 - 3$</MathRenderer> or <MathRenderer display={false}>$x + 2$</MathRenderer></p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: "10 increased by a number, then decreased by 4"</p>
              <div className="bg-white p-4 rounded border border-green-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Let a = the number</p>
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Translate</p>
                  <p className="text-slate-700">"10 increased by a" → <MathRenderer display={false}>$10 + a$</MathRenderer></p>
                  <p className="text-slate-700">"then decreased by 4" → subtract 4</p>
                  <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>$10 + a - 4$</MathRenderer> or <MathRenderer display={false}>$a + 6$</MathRenderer></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Real-World Examples</CardTitle>
            <CardDescription>
              Applying algebraic expressions to everyday situations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Shopping</p>
              <p className="text-sm text-slate-700 mb-2">
                Sarah has some money. She spends 50 shillings, then receives 30 shillings. Write an expression for how much money she has now.
              </p>
              <div className="bg-white p-3 rounded border border-purple-300">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Solution:</span> Let m = the money Sarah had initially<br />
                  Spends 50: <MathRenderer display={false}>$m - 50$</MathRenderer><br />
                  Receives 30: <MathRenderer display={false}>$m - 50 + 30$</MathRenderer> or <MathRenderer display={false}>$m - 20$</MathRenderer>
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Age Problems</p>
              <p className="text-sm text-slate-700 mb-2">
                Tom is 5 years older than his sister. If his sister's age is represented by a, write an expression for Tom's age.
              </p>
              <div className="bg-white p-3 rounded border border-yellow-300">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Solution:</span> Tom's age = <MathRenderer display={false}>$a + 5$</MathRenderer>
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
              <li>Use variables (letters) to represent unknown numbers</li>
              <li>"More than" or "increased by" means addition (+)</li>
              <li>"Less than" or "decreased by" means subtraction (-)</li>
              <li>Order matters: "5 less than x" is <MathRenderer display={false}>$x - 5$</MathRenderer>, not <MathRenderer display={false}>$5 - x$</MathRenderer></li>
              <li>Read word problems carefully to identify the operations</li>
              <li>Practice translating common phrases to build confidence</li>
              <li>You can combine addition and subtraction in one expression</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice forming algebraic expressions with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormingAlgebraicExpressionsInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of forming algebraic expressions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Translate to Expressions</p>
              <p className="text-sm text-slate-700 mb-3">
                Write algebraic expressions for:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>7 more than a number</li>
                <li>12 less than a number</li>
                <li>A number increased by 9</li>
                <li>A number decreased by 5</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Word Problems</p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>Mary has x shillings. She spends 200 shillings. Write an expression for how much she has left.</li>
                <li>A book costs 50 shillings more than a pen. If a pen costs p shillings, write an expression for the book's cost.</li>
                <li>John's age is 3 years less than his brother's age. If his brother is b years old, write an expression for John's age.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-life Application */}
      <Card className="border-dashed border-primary/30">
        <CardHeader>
          <CardTitle className="text-sm">Real-life Application</CardTitle>
          <CardDescription className="text-xs">
            Where do we use algebraic expressions in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Shopping:</span> Calculating costs and discounts</li>
            <li><span className="font-semibold">Budgeting:</span> Tracking income and expenses</li>
            <li><span className="font-semibold">Age Problems:</span> Comparing ages of different people</li>
            <li><span className="font-semibold">Measurement:</span> Finding lengths, areas, and volumes</li>
            <li><span className="font-semibold">Science:</span> Representing relationships between variables</li>
            <li><span className="font-semibold">Business:</span> Calculating profits, costs, and revenues</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

