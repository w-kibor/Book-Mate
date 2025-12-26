import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { PlaceValueInteractive } from '@/components/interactive/place-value-interactive';

export default function PlaceValuePage() {
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
            Topic 1.1.1
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Place Value of Digits in a Number
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn to identify the position and value of each digit in numbers up to hundreds of millions.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Understand what place value means</li>
            <li>Identify the place value of digits in numbers up to hundreds of millions</li>
            <li>Recognize the place value chart structure</li>
            <li>Apply place value knowledge to real-life situations</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What is Place Value?</CardTitle>
            <CardDescription>
              Understanding the position of digits in a number
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              <span className="font-semibold">Place value</span> tells us the position of a digit in a number. 
              Each position has a specific name and value. The position of a digit determines its value in the number.
            </p>
            
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Place Value Chart (up to hundreds of millions):</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-slate-300 px-3 py-2 text-left">Hundreds of Millions</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Tens of Millions</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Millions</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Hundred Thousands</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Ten Thousands</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Thousands</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Hundreds</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Tens</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Ones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2 text-center">100,000,000</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">10,000,000</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">1,000,000</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">100,000</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">10,000</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">1,000</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">100</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">10</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Example: Finding Place Values</CardTitle>
            <CardDescription>
              Let's analyze a number step by step
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example: Find the place value of each digit in <MathRenderer>{'572\\,648\\,319'}</MathRenderer></p>
              
              <div className="space-y-2 text-sm">
                <p>Let's break down the number:</p>
                <div className="grid grid-cols-9 gap-1 mt-3">
                  {['5', '7', '2', '6', '4', '8', '3', '1', '9'].map((digit, index) => {
                    const places = [
                      'Hundreds of Millions',
                      'Tens of Millions',
                      'Millions',
                      'Hundred Thousands',
                      'Ten Thousands',
                      'Thousands',
                      'Hundreds',
                      'Tens',
                      'Ones'
                    ];
                    return (
                      <div key={index} className="text-center p-2 bg-white rounded border border-blue-300">
                        <div className="font-bold text-lg text-primary">{digit}</div>
                        <div className="text-xs text-slate-600 mt-1">{places[index]}</div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-4 space-y-1 text-slate-700">
                  <p><span className="font-semibold">5</span> is in the <span className="text-primary font-semibold">hundreds of millions</span> place</p>
                  <p><span className="font-semibold">7</span> is in the <span className="text-primary font-semibold">tens of millions</span> place</p>
                  <p><span className="font-semibold">2</span> is in the <span className="text-primary font-semibold">millions</span> place</p>
                  <p><span className="font-semibold">6</span> is in the <span className="text-primary font-semibold">hundred thousands</span> place</p>
                  <p><span className="font-semibold">4</span> is in the <span className="text-primary font-semibold">ten thousands</span> place</p>
                  <p><span className="font-semibold">8</span> is in the <span className="text-primary font-semibold">thousands</span> place</p>
                  <p><span className="font-semibold">3</span> is in the <span className="text-primary font-semibold">hundreds</span> place</p>
                  <p><span className="font-semibold">1</span> is in the <span className="text-primary font-semibold">tens</span> place</p>
                  <p><span className="font-semibold">9</span> is in the <span className="text-primary font-semibold">ones</span> place</p>
                </div>
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
              <li>Place value is read from <span className="font-semibold">right to left</span> (ones, tens, hundreds, ...)</li>
              <li>Each place is <span className="font-semibold">10 times</span> greater than the place to its right</li>
              <li>The same digit can have different values depending on its position</li>
              <li>For example, in the number 333, the first 3 represents 300 (hundreds), the second 3 represents 30 (tens), and the third 3 represents 3 (ones)</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice identifying place values with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PlaceValueInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of place value
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1:</p>
              <p className="text-sm text-slate-700">
                In the number <MathRenderer>{'847\\,392\\,156'}</MathRenderer>, what is the place value of:
              </p>
              <ul className="list-decimal list-inside space-y-1 text-sm text-slate-700 mt-2 ml-4">
                <li>The digit 8?</li>
                <li>The digit 4?</li>
                <li>The digit 7?</li>
                <li>The digit 1?</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2:</p>
              <p className="text-sm text-slate-700">
                Write a 9-digit number where:
              </p>
              <ul className="list-decimal list-inside space-y-1 text-sm text-slate-700 mt-2 ml-4">
                <li>The digit in the hundreds of millions place is 3</li>
                <li>The digit in the millions place is 7</li>
                <li>The digit in the thousands place is 5</li>
                <li>The digit in the ones place is 9</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3:</p>
              <p className="text-sm text-slate-700">
                In the number <MathRenderer>{'123\\,456\\,789'}</MathRenderer>, identify which digit is in:
              </p>
              <ul className="list-decimal list-inside space-y-1 text-sm text-slate-700 mt-2 ml-4">
                <li>The tens of millions place</li>
                <li>The hundred thousands place</li>
                <li>The tens place</li>
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
            Where do we use place value in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Money:</span> Understanding large amounts like KSh 45,678,900 (forty-five million, six hundred seventy-eight thousand, nine hundred shillings)</li>
            <li><span className="font-semibold">Population:</span> Reading population figures for cities or countries</li>
            <li><span className="font-semibold">Distances:</span> Understanding measurements in meters or kilometers</li>
            <li><span className="font-semibold">Banking:</span> Reading account balances and transaction amounts</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

