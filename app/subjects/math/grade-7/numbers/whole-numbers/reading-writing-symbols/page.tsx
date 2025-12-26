import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { ReadingWritingSymbolsInteractive } from '@/components/interactive/reading-writing-symbols-interactive';

export default function ReadingWritingSymbolsPage() {
  return (
    <section className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/subjects/math/grade-7/numbers/whole-numbers">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Whole Numbers
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Topic 1.1.3
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Reading and Writing Numbers in Symbols
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn to read and write numbers in symbols (numerals) correctly up to hundreds of millions, using proper formatting and grouping.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Read numbers written in symbols up to hundreds of millions</li>
            <li>Write numbers in symbols correctly with proper grouping</li>
            <li>Use commas or spaces to separate thousands, millions, etc.</li>
            <li>Recognize and write numbers in standard form</li>
            <li>Apply this skill in real-life situations</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What are Numbers in Symbols?</CardTitle>
            <CardDescription>
              Understanding numerical notation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              Numbers written in <span className="font-semibold">symbols</span> (also called numerals) use digits (0-9) to represent values. 
              This is different from writing numbers in words. For example, <MathRenderer>{'45\\,678\\,900'}</MathRenderer> is written in symbols, 
              while "forty-five million, six hundred seventy-eight thousand, nine hundred" is written in words.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Key Rules for Writing Numbers in Symbols:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                <li>Use digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9</li>
                <li>Group digits in sets of three from right to left</li>
                <li>Use commas or spaces to separate groups (thousands, millions, etc.)</li>
                <li>Start from the right: ones, tens, hundreds, then thousands, millions, etc.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Write Numbers in Symbols</CardTitle>
            <CardDescription>
              Step-by-step guide with examples
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Writing a 9-digit number</p>
                <p className="text-sm text-slate-700 mb-2">Write: Five hundred seventy-two million, six hundred forty-eight thousand, three hundred nineteen</p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Identify each part</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                    <li>Five hundred seventy-two million = 572,000,000</li>
                    <li>Six hundred forty-eight thousand = 648,000</li>
                    <li>Three hundred nineteen = 319</li>
                  </ul>
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Combine them</p>
                  <div className="bg-white p-3 rounded border border-green-300">
                    <MathRenderer display>{'572\\,000\\,000 + 648\\,000 + 319 = 572\\,648\\,319'}</MathRenderer>
                  </div>
                  <p className="text-slate-700 mt-2">
                    <span className="font-semibold">Answer:</span> <MathRenderer>{'572\\,648\\,319'}</MathRenderer>
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Reading a number in symbols</p>
                <p className="text-sm text-slate-700 mb-2">Read: <MathRenderer>{'847\\,392\\,156'}</MathRenderer></p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Break it down:</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-white p-2 rounded border border-purple-300 text-center">
                      <div className="font-bold text-primary">847</div>
                      <div className="text-slate-600">millions</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-purple-300 text-center">
                      <div className="font-bold text-primary">392</div>
                      <div className="text-slate-600">thousands</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-purple-300 text-center">
                      <div className="font-bold text-primary">156</div>
                      <div className="text-slate-600">ones</div>
                    </div>
                  </div>
                  <p className="text-slate-700 mt-2">
                    <span className="font-semibold">Answer:</span> Eight hundred forty-seven million, three hundred ninety-two thousand, one hundred fifty-six
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Number Grouping and Formatting</CardTitle>
            <CardDescription>
              How to properly format large numbers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-slate-700">
                When writing large numbers in symbols, we group digits in sets of three from right to left. 
                This makes numbers easier to read and understand.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-slate-300 px-3 py-2 text-left">Number of Digits</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Example</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Grouping</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">1-3 digits</td>
                      <td className="border border-slate-300 px-3 py-2 font-mono">456</td>
                      <td className="border border-slate-300 px-3 py-2">No grouping needed</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">4-6 digits</td>
                      <td className="border border-slate-300 px-3 py-2 font-mono">45,678</td>
                      <td className="border border-slate-300 px-3 py-2">Thousands group</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2">7-9 digits</td>
                      <td className="border border-slate-300 px-3 py-2 font-mono">123,456,789</td>
                      <td className="border border-slate-300 px-3 py-2">Millions and thousands groups</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Important Notes:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                  <li>In Kenya, we typically use commas (,) to separate groups</li>
                  <li>Some countries use spaces instead: <MathRenderer>{'123\\,456\\,789'}</MathRenderer> or <MathRenderer>{'123\\ 456\\ 789'}</MathRenderer></li>
                  <li>Always group from right to left</li>
                  <li>Each group represents: ones, thousands, millions, etc.</li>
                </ul>
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
              <li>Numbers in symbols use digits (0-9) only</li>
              <li>Group digits in sets of three from right to left</li>
              <li>Use commas to separate thousands, millions, etc.</li>
              <li>Read from left to right, identifying each group</li>
              <li>Practice writing dummy cheques to reinforce this skill</li>
              <li>Always double-check your grouping to avoid errors</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice reading and writing numbers in symbols with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ReadingWritingSymbolsInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of reading and writing numbers in symbols
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Write in symbols</p>
              <p className="text-sm text-slate-700 mb-3">
                Write these numbers in symbols with proper grouping:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>Three hundred forty-five million, six hundred seventy-eight thousand, nine hundred twelve</li>
                <li>Eight hundred ninety-one million, two hundred thirty-four thousand, five hundred sixty-seven</li>
                <li>One hundred twenty-three million, four hundred fifty-six thousand, seven hundred eighty-nine</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Read these numbers</p>
              <p className="text-sm text-slate-700 mb-3">
                Read these numbers in symbols aloud or write them in words:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li><MathRenderer>{'456\\,789\\,123'}</MathRenderer></li>
                <li><MathRenderer>{'789\\,012\\,345'}</MathRenderer></li>
                <li><MathRenderer>{'234\\,567\\,890'}</MathRenderer></li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3: Format these numbers</p>
              <p className="text-sm text-slate-700 mb-3">
                Add commas to properly group these numbers:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>123456789</li>
                <li>987654321</li>
                <li>456789012</li>
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
            Where do we use reading and writing numbers in symbols?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Banking:</span> Writing cheques with amounts like KSh 45,678,900</li>
            <li><span className="font-semibold">Business:</span> Recording sales, expenses, and profits in financial statements</li>
            <li><span className="font-semibold">Government:</span> Budget figures, population statistics, and economic data</li>
            <li><span className="font-semibold">Shopping:</span> Price tags showing large amounts like KSh 1,234,567</li>
            <li><span className="font-semibold">Sports:</span> Viewership numbers, prize money, and statistics</li>
            <li><span className="font-semibold">Science:</span> Measurements, distances, and quantities in research</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

