import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { TotalValueInteractive } from '@/components/interactive/total-value-interactive';

export default function TotalValuePage() {
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
            Topic 1.1.2
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Total Value of Digits in a Number
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn to calculate the total value (actual value) of each digit in numbers up to hundreds of millions.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Understand the difference between place value and total value</li>
            <li>Calculate the total value of digits in numbers up to hundreds of millions</li>
            <li>Apply the formula: Total Value = Digit × Place Value</li>
            <li>Use total value in real-life situations</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What is Total Value?</CardTitle>
            <CardDescription>
              Understanding the actual value of a digit in a number
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              While <span className="font-semibold">place value</span> tells us the position of a digit (ones, tens, hundreds, etc.), 
              <span className="font-semibold"> total value</span> tells us the actual value that the digit contributes to the number.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Formula:</p>
              <div className="text-center">
                <MathRenderer display>
                  {'\\text{Total Value} = \\text{Digit} \\times \\text{Place Value}'}
                </MathRenderer>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-700">
              For example, in the number <MathRenderer>{'572'}</MathRenderer>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-4">
              <li>The digit <span className="font-semibold">5</span> is in the <span className="text-primary font-semibold">hundreds</span> place, so its total value is <MathRenderer>{'5 \\times 100 = 500'}</MathRenderer></li>
              <li>The digit <span className="font-semibold">7</span> is in the <span className="text-primary font-semibold">tens</span> place, so its total value is <MathRenderer>{'7 \\times 10 = 70'}</MathRenderer></li>
              <li>The digit <span className="font-semibold">2</span> is in the <span className="text-primary font-semibold">ones</span> place, so its total value is <MathRenderer>{'2 \\times 1 = 2'}</MathRenderer></li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Example: Finding Total Values</CardTitle>
            <CardDescription>
              Let's analyze a larger number step by step
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">
                Example: Find the total value of each digit in <MathRenderer>{'572\\,648\\,319'}</MathRenderer>
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-9 gap-1">
                  {['5', '7', '2', '6', '4', '8', '3', '1', '9'].map((digit, index) => {
                    const placeValues = [100_000_000, 10_000_000, 1_000_000, 100_000, 10_000, 1_000, 100, 10, 1];
                    const totalValue = parseInt(digit) * placeValues[index];
                    return (
                      <div key={index} className="text-center p-2 bg-white rounded border border-green-300">
                        <div className="font-bold text-lg text-primary">{digit}</div>
                        <div className="text-xs text-slate-600 mt-1">
                          × {placeValues[index].toLocaleString()}
                        </div>
                        <div className="text-xs font-semibold text-green-700 mt-1">
                          = {totalValue.toLocaleString()}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-4 space-y-2 text-slate-700 border-t border-green-300 pt-3">
                  <p><span className="font-semibold">5</span> × 100,000,000 = <span className="text-primary font-semibold">500,000,000</span> (five hundred million)</p>
                  <p><span className="font-semibold">7</span> × 10,000,000 = <span className="text-primary font-semibold">70,000,000</span> (seventy million)</p>
                  <p><span className="font-semibold">2</span> × 1,000,000 = <span className="text-primary font-semibold">2,000,000</span> (two million)</p>
                  <p><span className="font-semibold">6</span> × 100,000 = <span className="text-primary font-semibold">600,000</span> (six hundred thousand)</p>
                  <p><span className="font-semibold">4</span> × 10,000 = <span className="text-primary font-semibold">40,000</span> (forty thousand)</p>
                  <p><span className="font-semibold">8</span> × 1,000 = <span className="text-primary font-semibold">8,000</span> (eight thousand)</p>
                  <p><span className="font-semibold">3</span> × 100 = <span className="text-primary font-semibold">300</span> (three hundred)</p>
                  <p><span className="font-semibold">1</span> × 10 = <span className="text-primary font-semibold">10</span> (ten)</p>
                  <p><span className="font-semibold">9</span> × 1 = <span className="text-primary font-semibold">9</span> (nine)</p>
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
              <li>Total value = Digit × Place Value</li>
              <li>The same digit can have different total values in different positions</li>
              <li>For example, in 333: the first 3 has total value 300, the second 3 has total value 30, and the third 3 has total value 3</li>
              <li>Total value helps us understand how much each digit contributes to the overall number</li>
              <li>When we add all the total values together, we get the original number</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Difference Between Place Value and Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-slate-300 px-3 py-2 text-left">Digit</th>
                    <th className="border border-slate-300 px-3 py-2 text-left">Place Value</th>
                    <th className="border border-slate-300 px-3 py-2 text-left">Total Value</th>
                    <th className="border border-slate-300 px-3 py-2 text-left">Calculation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 text-center font-bold">5</td>
                    <td className="border border-slate-300 px-3 py-2">Hundreds of Millions</td>
                    <td className="border border-slate-300 px-3 py-2 font-semibold text-primary">500,000,000</td>
                    <td className="border border-slate-300 px-3 py-2">5 × 100,000,000</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 text-center font-bold">7</td>
                    <td className="border border-slate-300 px-3 py-2">Tens of Millions</td>
                    <td className="border border-slate-300 px-3 py-2 font-semibold text-primary">70,000,000</td>
                    <td className="border border-slate-300 px-3 py-2">7 × 10,000,000</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 text-center font-bold">2</td>
                    <td className="border border-slate-300 px-3 py-2">Millions</td>
                    <td className="border border-slate-300 px-3 py-2 font-semibold text-primary">2,000,000</td>
                    <td className="border border-slate-300 px-3 py-2">2 × 1,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Example using the number 572,000,000
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice calculating total values with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TotalValueInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of total value
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1:</p>
              <p className="text-sm text-slate-700 mb-3">
                In the number <MathRenderer>{'847\\,392\\,156'}</MathRenderer>, find the total value of:
              </p>
              <ul className="list-decimal list-inside space-y-1 text-sm text-slate-700 ml-4">
                <li>The digit 8</li>
                <li>The digit 4</li>
                <li>The digit 7</li>
                <li>The digit 1</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2:</p>
              <p className="text-sm text-slate-700 mb-3">
                In the number <MathRenderer>{'123\\,456\\,789'}</MathRenderer>:
              </p>
              <ul className="list-decimal list-inside space-y-1 text-sm text-slate-700 ml-4">
                <li>What is the total value of the digit in the tens of millions place?</li>
                <li>What is the total value of the digit in the hundred thousands place?</li>
                <li>What is the total value of the digit in the tens place?</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3:</p>
              <p className="text-sm text-slate-700 mb-3">
                Complete the table for the number <MathRenderer>{'305\\,678\\,921'}</MathRenderer>:
              </p>
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 px-2 py-1 text-left">Digit</th>
                      <th className="border border-slate-300 px-2 py-1 text-left">Place Value</th>
                      <th className="border border-slate-300 px-2 py-1 text-left">Total Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-2 py-1 text-center font-bold">3</td>
                      <td className="border border-slate-300 px-2 py-1">Hundreds of Millions</td>
                      <td className="border border-slate-300 px-2 py-1">?</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-2 py-1 text-center font-bold">5</td>
                      <td className="border border-slate-300 px-2 py-1">Millions</td>
                      <td className="border border-slate-300 px-2 py-1">?</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-2 py-1 text-center font-bold">1</td>
                      <td className="border border-slate-300 px-2 py-1">Tens</td>
                      <td className="border border-slate-300 px-2 py-1">?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-life Application */}
      <Card className="border-dashed border-primary/30">
        <CardHeader>
          <CardTitle className="text-sm">Real-life Application</CardTitle>
          <CardDescription className="text-xs">
            Where do we use total value in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Money:</span> Understanding that KSh 45,678,900 means 4 ten-millions (40,000,000) + 5 millions (5,000,000) + 6 hundred-thousands (600,000) + ...</li>
            <li><span className="font-semibold">Banking:</span> Breaking down large account balances to understand each digit's contribution</li>
            <li><span className="font-semibold">Population:</span> Understanding that 12,345,678 people means 1 ten-million + 2 millions + 3 hundred-thousands + ...</li>
            <li><span className="font-semibold">Measurements:</span> Breaking down large distances or quantities into their component values</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

