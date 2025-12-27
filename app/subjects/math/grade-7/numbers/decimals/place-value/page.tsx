import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { DecimalPlaceValueInteractive } from '@/components/interactive/decimal-place-value-interactive';

export default function DecimalPlaceValuePage() {
  return (
    <section className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/subjects/math/grade-7/numbers/decimals">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Decimals
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Topic 1.4.1
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Place Value of Digits in a Decimal
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn to identify the place value of each digit in decimal numbers, understanding the value of digits before and after the decimal point.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Understand the place value system for decimals</li>
            <li>Identify the place value of digits in decimal numbers</li>
            <li>Read and write decimal place values correctly</li>
            <li>Use place value charts for decimals</li>
            <li>Apply place value knowledge to solve problems</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Understanding Decimal Place Values</CardTitle>
            <CardDescription>
              The decimal place value system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              In decimal numbers, the <span className="font-semibold">decimal point</span> separates the whole number part 
              from the fractional part. Each digit has a specific place value based on its position relative to the decimal point.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Decimal Place Value Chart:</p>
              <div className="bg-white p-4 rounded border border-blue-300 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-slate-300 px-2 py-2 text-center">Hundreds</th>
                      <th className="border border-slate-300 px-2 py-2 text-center">Tens</th>
                      <th className="border border-slate-300 px-2 py-2 text-center">Ones</th>
                      <th className="border border-slate-300 px-2 py-2 text-center bg-yellow-100">.</th>
                      <th className="border border-slate-300 px-2 py-2 text-center">Tenths</th>
                      <th className="border border-slate-300 px-2 py-2 text-center">Hundredths</th>
                      <th className="border border-slate-300 px-2 py-2 text-center">Thousandths</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-2 py-2 text-center">100</td>
                      <td className="border border-slate-300 px-2 py-2 text-center">10</td>
                      <td className="border border-slate-300 px-2 py-2 text-center">1</td>
                      <td className="border border-slate-300 px-2 py-2 text-center bg-yellow-100">.</td>
                      <td className="border border-slate-300 px-2 py-2 text-center">0.1</td>
                      <td className="border border-slate-300 px-2 py-2 text-center">0.01</td>
                      <td className="border border-slate-300 px-2 py-2 text-center">0.001</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                The decimal point separates whole numbers (left) from fractional parts (right).
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Place Values After the Decimal Point</CardTitle>
            <CardDescription>
              Understanding tenths, hundredths, thousandths, and beyond
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Key Place Values:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                <li><span className="font-semibold">Tenths</span> (1st place after decimal): 0.1 = <MathRenderer display={false}>$\frac{1}{10}$</MathRenderer></li>
                <li><span className="font-semibold">Hundredths</span> (2nd place after decimal): 0.01 = <MathRenderer display={false}>$\frac{1}{100}$</MathRenderer></li>
                <li><span className="font-semibold">Thousandths</span> (3rd place after decimal): 0.001 = <MathRenderer display={false}>$\frac{1}{1000}$</MathRenderer></li>
                <li><span className="font-semibold">Ten-thousandths</span> (4th place after decimal): 0.0001 = <MathRenderer display={false}>$\frac{1}{10000}$</MathRenderer></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-300">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example: Identify place values in 45.678</p>
              <div className="space-y-2 text-sm">
                <div className="font-mono text-lg mb-3 text-center">
                  <span className="text-blue-600">4</span>
                  <span className="text-blue-600">5</span>
                  <span className="text-yellow-600 font-bold">.</span>
                  <span className="text-green-600">6</span>
                  <span className="text-green-600">7</span>
                  <span className="text-green-600">8</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-50 p-2 rounded">
                    <p className="font-semibold text-blue-700">4 → Tens place</p>
                    <p className="text-xs text-blue-600">Value: 40</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <p className="font-semibold text-blue-700">5 → Ones place</p>
                    <p className="text-xs text-blue-600">Value: 5</p>
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <p className="font-semibold text-green-700">6 → Tenths place</p>
                    <p className="text-xs text-green-600">Value: 0.6</p>
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <p className="font-semibold text-green-700">7 → Hundredths place</p>
                    <p className="text-xs text-green-600">Value: 0.07</p>
                  </div>
                  <div className="bg-green-50 p-2 rounded col-span-2">
                    <p className="font-semibold text-green-700">8 → Thousandths place</p>
                    <p className="text-xs text-green-600">Value: 0.008</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reading Decimal Place Values</CardTitle>
            <CardDescription>
              How to identify and name place values
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: 23.45</p>
              <div className="bg-white p-4 rounded border border-purple-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Place value breakdown:</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                    <li>2 is in the <span className="font-semibold">tens</span> place</li>
                    <li>3 is in the <span className="font-semibold">ones</span> place</li>
                    <li>4 is in the <span className="font-semibold">tenths</span> place</li>
                    <li>5 is in the <span className="font-semibold">hundredths</span> place</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: 156.789</p>
              <div className="bg-white p-4 rounded border border-purple-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Place value breakdown:</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                    <li>1 is in the <span className="font-semibold">hundreds</span> place</li>
                    <li>5 is in the <span className="font-semibold">tens</span> place</li>
                    <li>6 is in the <span className="font-semibold">ones</span> place</li>
                    <li>7 is in the <span className="font-semibold">tenths</span> place</li>
                    <li>8 is in the <span className="font-semibold">hundredths</span> place</li>
                    <li>9 is in the <span className="font-semibold">thousandths</span> place</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 3: 0.345</p>
              <div className="bg-white p-4 rounded border border-purple-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Place value breakdown:</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                    <li>0 is in the <span className="font-semibold">ones</span> place (no whole number part)</li>
                    <li>3 is in the <span className="font-semibold">tenths</span> place</li>
                    <li>4 is in the <span className="font-semibold">hundredths</span> place</li>
                    <li>5 is in the <span className="font-semibold">thousandths</span> place</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Using Place Value Charts</CardTitle>
            <CardDescription>
              Visual representation of decimal place values
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example: Place 67.234 in a place value chart</p>
              <div className="bg-white p-4 rounded border border-yellow-300 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-slate-300 px-2 py-2 text-center">Tens</th>
                      <th className="border border-slate-300 px-2 py-2 text-center">Ones</th>
                      <th className="border border-slate-300 px-2 py-2 text-center bg-yellow-100">.</th>
                      <th className="border border-slate-300 px-2 py-2 text-center">Tenths</th>
                      <th className="border border-slate-300 px-2 py-2 text-center">Hundredths</th>
                      <th className="border border-slate-300 px-2 py-2 text-center">Thousandths</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-2 py-2 text-center font-bold text-primary">6</td>
                      <td className="border border-slate-300 px-2 py-2 text-center font-bold text-primary">7</td>
                      <td className="border border-slate-300 px-2 py-2 text-center bg-yellow-100 font-bold">.</td>
                      <td className="border border-slate-300 px-2 py-2 text-center font-bold text-green-600">2</td>
                      <td className="border border-slate-300 px-2 py-2 text-center font-bold text-green-600">3</td>
                      <td className="border border-slate-300 px-2 py-2 text-center font-bold text-green-600">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                6 tens, 7 ones, 2 tenths, 3 hundredths, 4 thousandths
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Points to Remember</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
              <li>The decimal point separates whole numbers from fractional parts</li>
              <li>Place values to the left of the decimal point: ones, tens, hundreds, etc.</li>
              <li>Place values to the right of the decimal point: tenths, hundredths, thousandths, etc.</li>
              <li>Each place value is 10 times smaller as you move to the right</li>
              <li>Each place value is 10 times larger as you move to the left</li>
              <li>Use place value charts to visualize and understand decimal numbers</li>
              <li>Practice identifying place values to become more confident with decimals</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice identifying place values in decimal numbers with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DecimalPlaceValueInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of decimal place values
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Identify Place Values</p>
              <p className="text-sm text-slate-700 mb-3">
                Identify the place value of each digit in these numbers:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>23.45</li>
                <li>156.789</li>
                <li>0.345</li>
                <li>12.567</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Place Value Charts</p>
              <p className="text-sm text-slate-700 mb-3">
                Place these numbers in place value charts:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>45.67</li>
                <li>123.456</li>
                <li>0.789</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3: Specific Place Values</p>
              <p className="text-sm text-slate-700 mb-3">
                What digit is in the tenths place? Hundredths place? Thousandths place?
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>67.234</li>
                <li>89.567</li>
                <li>12.345</li>
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
            Where do we use decimal place values in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Money:</span> Understanding cents (hundredths) in currency</li>
            <li><span className="font-semibold">Measurements:</span> Length, weight, and volume measurements often use decimals</li>
            <li><span className="font-semibold">Sports:</span> Timing records (seconds and milliseconds)</li>
            <li><span className="font-semibold">Science:</span> Precise measurements in experiments</li>
            <li><span className="font-semibold">Shopping:</span> Prices and discounts</li>
            <li><span className="font-semibold">Weather:</span> Temperature readings and rainfall measurements</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

