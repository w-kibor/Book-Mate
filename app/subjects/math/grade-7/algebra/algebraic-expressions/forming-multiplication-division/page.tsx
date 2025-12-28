import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { FormingMultiplicationDivisionInteractive } from '@/components/interactive/forming-multiplication-division-interactive';

export default function FormingMultiplicationDivisionPage() {
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
            Topic 6.2
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Forming Algebraic Expressions Involving Multiplication and Division
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn to translate word problems and real-world situations into algebraic expressions using multiplication and division.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Understand how to form expressions with multiplication</li>
            <li>Translate phrases involving multiplication into algebraic expressions</li>
            <li>Understand how to form expressions with division</li>
            <li>Translate phrases involving division into algebraic expressions</li>
            <li>Form expressions combining both multiplication and division</li>
            <li>Apply knowledge to solve real-world problems</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Forming Algebraic Expressions with Multiplication</CardTitle>
            <CardDescription>
              Translating multiplication phrases
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              When a word problem contains phrases like "times", "multiplied by", "product", "twice", "double", "triple", or "of", 
              you need to use multiplication in your algebraic expression.
            </p>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Multiplication Phrases:</p>
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
                      <td className="border border-slate-300 px-3 py-2">3 times a number</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$3x$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">a number multiplied by 5</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$5x$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">the product of a number and 2</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$2x$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">twice a number</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$2x$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">triple a number</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$3x$</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">double a number</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>$2x$</MathRenderer></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-purple-300">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Translate to an expression</p>
              <p className="text-sm text-slate-700 mb-2">
                "5 times a number"
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-slate-700">Step 1: Choose a variable</p>
                <p className="text-slate-700">Let x represent the number</p>
                
                <p className="font-semibold text-slate-700 mt-3">Step 2: Translate the phrase</p>
                <p className="text-slate-700">"5 times" means multiply by 5</p>
                
                <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>$5x$</MathRenderer></p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Translate to an expression</p>
              <p className="text-sm text-slate-700 mb-2">
                "Twice a number"
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-slate-700">Step 1: Let y = the number</p>
                
                <p className="font-semibold text-slate-700 mt-3">Step 2: Translate</p>
                <p className="text-slate-700">"Twice" means 2 times</p>
                
                <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>$2y$</MathRenderer></p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Forming Algebraic Expressions with Division</CardTitle>
            <CardDescription>
              Translating division phrases
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              When a word problem contains phrases like "divided by", "quotient", "half", "third", "quarter", "per", or "each", 
              you need to use division in your algebraic expression.
            </p>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Division Phrases:</p>
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
                      <td className="border border-slate-300 px-3 py-2">a number divided by 2</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>{`$\\frac{x}{2}$`}</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">the quotient of a number and 4</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>{`$\\frac{x}{4}$`}</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">half of a number</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>{`$\\frac{x}{2}$`}</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">one-third of a number</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>{`$\\frac{x}{3}$`}</MathRenderer></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">a number divided by 5</td>
                      <td className="border border-slate-300 px-3 py-2"><MathRenderer display={false}>{`$\\frac{x}{5}$`}</MathRenderer></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-yellow-300">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Translate to an expression</p>
              <p className="text-sm text-slate-700 mb-2">
                "A number divided by 3"
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-slate-700">Step 1: Choose a variable</p>
                <p className="text-slate-700">Let x represent the number</p>
                
                <p className="font-semibold text-slate-700 mt-3">Step 2: Translate the phrase</p>
                <p className="text-slate-700">"divided by 3" means divide by 3</p>
                
                <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>{`$\\frac{x}{3}$`}</MathRenderer> or <MathRenderer display={false}>$x/3$</MathRenderer></p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Translate to an expression</p>
              <p className="text-sm text-slate-700 mb-2">
                "Half of a number"
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-slate-700">Step 1: Let a = the number</p>
                
                <p className="font-semibold text-slate-700 mt-3">Step 2: Translate</p>
                <p className="text-slate-700">"Half of" means divide by 2</p>
                
                <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>{`$\\frac{a}{2}$`}</MathRenderer> or <MathRenderer display={false}>$a/2$</MathRenderer></p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Combining Multiplication and Division</CardTitle>
            <CardDescription>
              Expressions with both operations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: "3 times a number, divided by 2"</p>
              <div className="bg-white p-4 rounded border border-purple-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Let x = the number</p>
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Translate step by step</p>
                  <p className="text-slate-700">"3 times a number" → <MathRenderer display={false}>$3x$</MathRenderer></p>
                  <p className="text-slate-700">"divided by 2" → divide the result by 2</p>
                  <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>{`$\\frac{3x}{2}$`}</MathRenderer></p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: "A number multiplied by 6, then divided by 4"</p>
              <div className="bg-white p-4 rounded border border-green-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Let b = the number</p>
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Translate</p>
                  <p className="text-slate-700">"multiplied by 6" → <MathRenderer display={false}>$6b$</MathRenderer></p>
                  <p className="text-slate-700">"then divided by 4" → divide by 4</p>
                  <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>{`$\\frac{6b}{4}$`}</MathRenderer> or simplified <MathRenderer display={false}>{`$\\frac{3b}{2}$`}</MathRenderer></p>
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
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Shopping (Multiplication)</p>
              <p className="text-sm text-slate-700 mb-2">
                If pencils cost 20 shillings each and you buy x pencils, write an expression for the total cost.
              </p>
              <div className="bg-white p-3 rounded border border-purple-300">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Solution:</span> Total cost = <MathRenderer display={false}>$20x$</MathRenderer> shillings<br />
                  (20 shillings times x pencils)
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Sharing (Division)</p>
              <p className="text-sm text-slate-700 mb-2">
                If you have m shillings and want to share equally among 5 friends, how much does each friend get?
              </p>
              <div className="bg-white p-3 rounded border border-yellow-300">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Solution:</span> Each friend gets <MathRenderer display={false}>{`$\\frac{m}{5}$`}</MathRenderer> shillings
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 3: Combined Operations</p>
              <p className="text-sm text-slate-700 mb-2">
                A rectangular garden has length 2x meters and width 4 meters. Write an expression for its area, then an expression for the area divided into 3 equal sections.
              </p>
              <div className="bg-white p-3 rounded border border-blue-300">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Solution:</span> <br />
                  Area = <MathRenderer display={false}>$2x \times 4 = 8x$</MathRenderer> square meters<br />
                  Each section = <MathRenderer display={false}>{`$\\frac{8x}{3}$`}</MathRenderer> square meters
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
              <li>"Times", "multiplied by", "product", "twice", "triple", or "double" means multiplication (×)</li>
              <li>"Divided by", "quotient", "half", "third", "quarter" means division (÷)</li>
              <li>When writing expressions, multiplication is usually written without a symbol: <MathRenderer display={false}>$3x$</MathRenderer> not <MathRenderer display={false}>$3 \times x$</MathRenderer></li>
              <li>Division can be written as a fraction: <MathRenderer display={false}>{`$\\frac{x}{2}$`}</MathRenderer> or with a slash: <MathRenderer display={false}>$x/2$</MathRenderer></li>
              <li>Order matters in division: <MathRenderer display={false}>{`$\\frac{x}{3}$`}</MathRenderer> is not the same as <MathRenderer display={false}>{`$\\frac{3}{x}$`}</MathRenderer></li>
              <li>When combining operations, multiplication usually comes before division</li>
              <li>Always read word problems carefully to identify all operations</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-purple-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice forming algebraic expressions with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormingMultiplicationDivisionInteractive />
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
              <p className="text-sm font-semibold mb-2">Question 1: Multiplication Expressions</p>
              <p className="text-sm text-slate-700 mb-3">
                Write algebraic expressions for:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>7 times a number</li>
                <li>A number multiplied by 12</li>
                <li>Twice a number</li>
                <li>Triple a number</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Division Expressions</p>
              <p className="text-sm text-slate-700 mb-3">
                Write algebraic expressions for:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>A number divided by 4</li>
                <li>Half of a number</li>
                <li>One-third of a number</li>
                <li>The quotient of a number and 8</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3: Word Problems</p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>Oranges cost 50 shillings each. If you buy n oranges, write an expression for the total cost.</li>
                <li>You have 1000 shillings and want to share equally with 4 friends. How much does each friend get?</li>
                <li>A book costs 3 times as much as a pen. If a pen costs p shillings, write an expression for the book's cost.</li>
                <li>A rope of length L meters is cut into 6 equal pieces. What is the length of each piece?</li>
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
            Where do we use multiplication and division in algebraic expressions?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Shopping:</span> Calculating cost when buying multiple items</li>
            <li><span className="font-semibold">Sharing:</span> Dividing quantities among people or groups</li>
            <li><span className="font-semibold">Cooking:</span> Multiplying recipe amounts or dividing portions</li>
            <li><span className="font-semibold">Speed & Distance:</span> Distance = Speed × Time relationships</li>
            <li><span className="font-semibold">Area & Perimeter:</span> Calculating areas of shapes</li>
            <li><span className="font-semibold">Business:</span> Calculating profits, costs, and unit prices</li>
            <li><span className="font-semibold">Science:</span> Expressing relationships between variables</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
