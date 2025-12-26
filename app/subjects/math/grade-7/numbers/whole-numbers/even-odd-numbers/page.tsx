import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { EvenOddInteractive } from '@/components/interactive/even-odd-interactive';

export default function EvenOddNumbersPage() {
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
            Topic 1.1.6
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Natural Numbers: Even and Odd Numbers
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn to identify, classify, and work with even and odd numbers. Understand the properties and patterns of even and odd numbers.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Understand what natural numbers are</li>
            <li>Identify even and odd numbers</li>
            <li>Classify numbers as even or odd</li>
            <li>Recognize patterns in even and odd numbers</li>
            <li>Apply knowledge of even and odd numbers in different situations</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What are Natural Numbers?</CardTitle>
            <CardDescription>
              Understanding the number system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              <span className="font-semibold">Natural numbers</span> are the counting numbers starting from 1: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ...
              They are also called positive integers. Natural numbers can be classified into two main groups: <span className="font-semibold">even</span> and <span className="font-semibold">odd</span>.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Natural Numbers:</p>
              <p className="text-sm text-slate-700">
                <MathRenderer>{'\\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ...\\}'}</MathRenderer>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                These are the numbers we use for counting objects.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Even Numbers</CardTitle>
            <CardDescription>
              Numbers divisible by 2
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              An <span className="font-semibold">even number</span> is any number that can be divided by 2 with no remainder. 
              Even numbers always end in 0, 2, 4, 6, or 8.
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Examples of Even Numbers:</p>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40].map((num) => (
                  <div key={num} className="bg-white p-2 rounded border border-green-300 text-center">
                    <span className="text-sm font-bold text-green-700">{num}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Notice: All even numbers end in 0, 2, 4, 6, or 8
              </p>
            </div>

            <div className="space-y-2 text-sm text-slate-700">
              <p className="font-semibold">Properties of Even Numbers:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Even + Even = Even (e.g., 4 + 6 = 10)</li>
                <li>Even + Odd = Odd (e.g., 4 + 5 = 9)</li>
                <li>Even × Even = Even (e.g., 4 × 6 = 24)</li>
                <li>Even × Odd = Even (e.g., 4 × 5 = 20)</li>
                <li>All even numbers are divisible by 2</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Odd Numbers</CardTitle>
            <CardDescription>
              Numbers not divisible by 2
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              An <span className="font-semibold">odd number</span> is any number that cannot be divided by 2 evenly (there is a remainder of 1). 
              Odd numbers always end in 1, 3, 5, 7, or 9.
            </p>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Examples of Odd Numbers:</p>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39].map((num) => (
                  <div key={num} className="bg-white p-2 rounded border border-purple-300 text-center">
                    <span className="text-sm font-bold text-purple-700">{num}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Notice: All odd numbers end in 1, 3, 5, 7, or 9
              </p>
            </div>

            <div className="space-y-2 text-sm text-slate-700">
              <p className="font-semibold">Properties of Odd Numbers:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Odd + Odd = Even (e.g., 5 + 7 = 12)</li>
                <li>Odd + Even = Odd (e.g., 5 + 4 = 9)</li>
                <li>Odd × Odd = Odd (e.g., 5 × 7 = 35)</li>
                <li>Odd × Even = Even (e.g., 5 × 4 = 20)</li>
                <li>Odd numbers always have a remainder of 1 when divided by 2</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Identify Even and Odd Numbers</CardTitle>
            <CardDescription>
              Quick methods to classify numbers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Method 1: Look at the last digit</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                  <li>If the last digit is <span className="font-semibold">0, 2, 4, 6, or 8</span> → the number is <span className="text-green-600 font-semibold">EVEN</span></li>
                  <li>If the last digit is <span className="font-semibold">1, 3, 5, 7, or 9</span> → the number is <span className="text-purple-600 font-semibold">ODD</span></li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">Examples: 234 (ends in 4) is even, 567 (ends in 7) is odd</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Method 2: Divide by 2</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                  <li>If a number ÷ 2 has <span className="font-semibold">no remainder</span> → the number is <span className="text-green-600 font-semibold">EVEN</span></li>
                  <li>If a number ÷ 2 has a <span className="font-semibold">remainder of 1</span> → the number is <span className="text-purple-600 font-semibold">ODD</span></li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">Examples: 24 ÷ 2 = 12 (no remainder, even), 25 ÷ 2 = 12 remainder 1 (odd)</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-slate-300 px-3 py-2 text-left">Number</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Last Digit</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Classification</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2 font-mono">234</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">4</td>
                      <td className="border border-slate-300 px-3 py-2 text-green-600 font-semibold">Even</td>
                      <td className="border border-slate-300 px-3 py-2 text-xs">Ends in 4 (even digit)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2 font-mono">567</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">7</td>
                      <td className="border border-slate-300 px-3 py-2 text-purple-600 font-semibold">Odd</td>
                      <td className="border border-slate-300 px-3 py-2 text-xs">Ends in 7 (odd digit)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2 font-mono">1,234</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">4</td>
                      <td className="border border-slate-300 px-3 py-2 text-green-600 font-semibold">Even</td>
                      <td className="border border-slate-300 px-3 py-2 text-xs">Ends in 4 (even digit)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2 font-mono">8,765</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">5</td>
                      <td className="border border-slate-300 px-3 py-2 text-purple-600 font-semibold">Odd</td>
                      <td className="border border-slate-300 px-3 py-2 text-xs">Ends in 5 (odd digit)</td>
                    </tr>
                  </tbody>
                </table>
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
              <li>Natural numbers start from 1 (1, 2, 3, 4, 5, ...)</li>
              <li>Even numbers end in 0, 2, 4, 6, or 8</li>
              <li>Odd numbers end in 1, 3, 5, 7, or 9</li>
              <li>Every natural number is either even or odd (never both)</li>
              <li>Zero (0) is considered even</li>
              <li>You can quickly identify even/odd by looking at the last digit</li>
              <li>Even numbers are divisible by 2, odd numbers are not</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice identifying and classifying even and odd numbers with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EvenOddInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of even and odd numbers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Classify these numbers</p>
              <p className="text-sm text-slate-700 mb-3">
                Classify each number as even or odd:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li><MathRenderer>{'234'}</MathRenderer></li>
                <li><MathRenderer>{'567'}</MathRenderer></li>
                <li><MathRenderer>{'1\\,234'}</MathRenderer></li>
                <li><MathRenderer>{'8\\,765'}</MathRenderer></li>
                <li><MathRenderer>{'12\\,345\\,678'}</MathRenderer></li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Properties of even and odd numbers</p>
              <p className="text-sm text-slate-700 mb-3">
                Determine if the result is even or odd:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>Even + Even = ?</li>
                <li>Odd + Odd = ?</li>
                <li>Even + Odd = ?</li>
                <li>Odd × Odd = ?</li>
                <li>Even × Odd = ?</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3: Find the pattern</p>
              <p className="text-sm text-slate-700 mb-3">
                List the next 5 even numbers after 20:
              </p>
              <p className="text-sm text-slate-700 mb-3">
                List the next 5 odd numbers after 19:
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-life Application */}
      <Card className="border-dashed border-primary/30">
        <CardHeader>
          <CardTitle className="text-sm">Real-life Application</CardTitle>
          <CardDescription className="text-xs">
            Where do we use even and odd numbers in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">House Numbers:</span> Streets often alternate between even and odd numbers on opposite sides</li>
            <li><span className="font-semibold">Seating Arrangements:</span> Organizing seats in rows (even number of seats per row)</li>
            <li><span className="font-semibold">Pairing:</span> Even numbers can be divided into pairs (2, 4, 6, 8...)</li>
            <li><span className="font-semibold">Sports:</span> Team sizes, scoring systems, and tournament brackets</li>
            <li><span className="font-semibold">Cooking:</span> Recipes often call for even numbers of items (2 eggs, 4 cups)</li>
            <li><span className="font-semibold">Time:</span> Understanding patterns in schedules and timetables</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

