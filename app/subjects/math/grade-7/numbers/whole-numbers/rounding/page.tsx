import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { RoundingInteractive } from '@/components/interactive/rounding-interactive';

export default function RoundingPage() {
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
            Topic 1.1.5
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Rounding off Numbers
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn to round numbers to the nearest ten, hundred, thousand, million, and up to hundreds of millions using proper rounding rules.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Understand what rounding means and why we round numbers</li>
            <li>Round numbers to the nearest ten, hundred, thousand, etc.</li>
            <li>Round numbers up to the nearest hundreds of millions</li>
            <li>Apply the rounding rule: 5 or more rounds up, less than 5 rounds down</li>
            <li>Use rounding in real-life situations</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What is Rounding?</CardTitle>
            <CardDescription>
              Understanding the concept of rounding
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              <span className="font-semibold">Rounding</span> means making a number simpler or easier to work with by 
              replacing it with a nearby number that is close in value. We round numbers to make them easier to 
              understand, estimate, or calculate with.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">The Rounding Rule:</p>
              <div className="space-y-2 text-sm text-slate-700">
                <p>Look at the digit to the <span className="font-semibold">right</span> of the place you're rounding to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>If it's <span className="font-semibold text-green-600">5 or more</span>, round <span className="font-semibold text-green-600">UP</span></li>
                  <li>If it's <span className="font-semibold text-red-600">less than 5</span>, round <span className="font-semibold text-red-600">DOWN</span></li>
                </ul>
                <p className="mt-2">After rounding, all digits to the right become <span className="font-semibold">zero</span>.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Round Numbers</CardTitle>
            <CardDescription>
              Step-by-step guide with examples
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Round to the nearest thousand</p>
                <p className="text-sm text-slate-700 mb-2">Round <MathRenderer>{'45\\,678'}</MathRenderer> to the nearest thousand</p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Identify the thousands place</p>
                  <p className="text-slate-700">The digit in the thousands place is <span className="font-bold text-primary">5</span></p>
                  <p className="font-semibold text-slate-700 mt-2">Step 2: Look at the digit to the right</p>
                  <p className="text-slate-700">The digit to the right is <span className="font-bold text-primary">6</span> (hundreds place)</p>
                  <p className="font-semibold text-slate-700 mt-2">Step 3: Apply the rule</p>
                  <p className="text-slate-700">Since 6 ≥ 5, we round <span className="font-semibold text-green-600">UP</span></p>
                  <div className="bg-white p-3 rounded border border-green-300 mt-2">
                    <p className="text-slate-700">
                      <MathRenderer>{'45\\,678'}</MathRenderer> rounds to <MathRenderer>{'46\\,000'}</MathRenderer>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Round to the nearest million</p>
                <p className="text-sm text-slate-700 mb-2">Round <MathRenderer>{'572\\,648\\,319'}</MathRenderer> to the nearest million</p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Identify the millions place</p>
                  <p className="text-slate-700">The digit in the millions place is <span className="font-bold text-primary">2</span></p>
                  <p className="font-semibold text-slate-700 mt-2">Step 2: Look at the digit to the right</p>
                  <p className="text-slate-700">The digit to the right is <span className="font-bold text-primary">6</span> (hundred thousands place)</p>
                  <p className="font-semibold text-slate-700 mt-2">Step 3: Apply the rule</p>
                  <p className="text-slate-700">Since 6 ≥ 5, we round <span className="font-semibold text-green-600">UP</span></p>
                  <div className="bg-white p-3 rounded border border-purple-300 mt-2">
                    <p className="text-slate-700">
                      <MathRenderer>{'572\\,648\\,319'}</MathRenderer> rounds to <MathRenderer>{'573\\,000\\,000'}</MathRenderer>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm font-semibold mb-3 text-slate-900">Example 3: Round down</p>
                <p className="text-sm text-slate-700 mb-2">Round <MathRenderer>{'847\\,392\\,156'}</MathRenderer> to the nearest hundred million</p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Identify the hundred millions place</p>
                  <p className="text-slate-700">The digit in the hundred millions place is <span className="font-bold text-primary">8</span></p>
                  <p className="font-semibold text-slate-700 mt-2">Step 2: Look at the digit to the right</p>
                  <p className="text-slate-700">The digit to the right is <span className="font-bold text-primary">4</span> (ten millions place)</p>
                  <p className="font-semibold text-slate-700 mt-2">Step 3: Apply the rule</p>
                  <p className="text-slate-700">Since 4 &lt; 5, we round <span className="font-semibold text-red-600">DOWN</span> (keep the same)</p>
                  <div className="bg-white p-3 rounded border border-yellow-300 mt-2">
                    <p className="text-slate-700">
                      <MathRenderer>{'847\\,392\\,156'}</MathRenderer> rounds to <MathRenderer>{'800\\,000\\,000'}</MathRenderer>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rounding to Different Place Values</CardTitle>
            <CardDescription>
              Examples of rounding to various place values
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-slate-300 px-3 py-2 text-left">Original Number</th>
                    <th className="border border-slate-300 px-3 py-2 text-left">Round To</th>
                    <th className="border border-slate-300 px-3 py-2 text-left">Rounded Number</th>
                    <th className="border border-slate-300 px-3 py-2 text-left">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-mono"><MathRenderer>{'45\\,678'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2">Nearest ten</td>
                    <td className="border border-slate-300 px-3 py-2 font-mono text-primary font-semibold"><MathRenderer>{'45\\,680'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2 text-xs">8 ≥ 5, round up</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-mono"><MathRenderer>{'45\\,678'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2">Nearest hundred</td>
                    <td className="border border-slate-300 px-3 py-2 font-mono text-primary font-semibold"><MathRenderer>{'45\\,700'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2 text-xs">7 ≥ 5, round up</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-mono"><MathRenderer>{'45\\,678'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2">Nearest thousand</td>
                    <td className="border border-slate-300 px-3 py-2 font-mono text-primary font-semibold"><MathRenderer>{'46\\,000'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2 text-xs">6 ≥ 5, round up</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-mono"><MathRenderer>{'572\\,648\\,319'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2">Nearest million</td>
                    <td className="border border-slate-300 px-3 py-2 font-mono text-primary font-semibold"><MathRenderer>{'573\\,000\\,000'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2 text-xs">6 ≥ 5, round up</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-mono"><MathRenderer>{'847\\,392\\,156'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2">Nearest hundred million</td>
                    <td className="border border-slate-300 px-3 py-2 font-mono text-primary font-semibold"><MathRenderer>{'800\\,000\\,000'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2 text-xs">4 &lt; 5, round down</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Points to Remember</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
              <li>Always look at the digit to the <span className="font-semibold">right</span> of the place you're rounding to</li>
              <li><span className="font-semibold text-green-600">5 or more</span> → round <span className="font-semibold text-green-600">UP</span></li>
              <li><span className="font-semibold text-red-600">Less than 5</span> → round <span className="font-semibold text-red-600">DOWN</span> (keep the same)</li>
              <li>After rounding, all digits to the right become <span className="font-semibold">zero</span></li>
              <li>Rounding makes numbers easier to work with and estimate</li>
              <li>Practice with place value charts to visualize rounding</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice rounding numbers with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RoundingInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of rounding numbers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Round to different place values</p>
              <p className="text-sm text-slate-700 mb-3">
                Round <MathRenderer>{'847\\,392\\,156'}</MathRenderer> to:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>The nearest ten</li>
                <li>The nearest hundred</li>
                <li>The nearest thousand</li>
                <li>The nearest million</li>
                <li>The nearest hundred million</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Round these numbers</p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>Round <MathRenderer>{'123\\,456\\,789'}</MathRenderer> to the nearest million</li>
                <li>Round <MathRenderer>{'456\\,789\\,012'}</MathRenderer> to the nearest hundred thousand</li>
                <li>Round <MathRenderer>{'789\\,012\\,345'}</MathRenderer> to the nearest ten million</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3: Real-life rounding</p>
              <p className="text-sm text-slate-700 mb-3">
                A city has a population of <MathRenderer>{'3\\,456\\,789'}</MathRenderer> people. Round this to:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>The nearest thousand (for a quick estimate)</li>
                <li>The nearest hundred thousand (for a newspaper headline)</li>
                <li>The nearest million (for a general statement)</li>
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
            Where do we use rounding in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Shopping:</span> Rounding prices for quick mental calculations (KSh 1,247 ≈ KSh 1,250)</li>
            <li><span className="font-semibold">Population:</span> News reports often round population figures (3,456,789 ≈ 3.5 million)</li>
            <li><span className="font-semibold">Distance:</span> Rounding distances for travel estimates (1,247 km ≈ 1,200 km)</li>
            <li><span className="font-semibold">Money:</span> Rounding amounts for budgeting and estimates</li>
            <li><span className="font-semibold">Statistics:</span> Rounding data for easier presentation and understanding</li>
            <li><span className="font-semibold">Time:</span> Rounding time estimates (e.g., "about 2 hours" instead of "1 hour 47 minutes")</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

