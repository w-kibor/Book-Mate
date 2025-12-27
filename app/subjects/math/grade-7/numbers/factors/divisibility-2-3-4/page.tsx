import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { Divisibility234Interactive } from '@/components/interactive/divisibility-234-interactive';

export default function Divisibility234Page() {
  return (
    <section className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/subjects/math/grade-7/numbers/factors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Factors
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Topic 1.2.1
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Divisibility Test of 2, 3, and 4
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn how to quickly determine if a number is divisible by 2, 3, or 4 using simple rules and tests.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Understand what divisibility means</li>
            <li>Test if a number is divisible by 2</li>
            <li>Test if a number is divisible by 3</li>
            <li>Test if a number is divisible by 4</li>
            <li>Apply divisibility tests to solve problems</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What is Divisibility?</CardTitle>
            <CardDescription>
              Understanding the concept
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              A number is <span className="font-semibold">divisible</span> by another number if it can be divided evenly 
              (without a remainder). For example, 12 is divisible by 3 because 12 ÷ 3 = 4 with no remainder.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Example:</p>
              <p className="text-sm text-slate-700">
                18 ÷ 3 = 6 (no remainder) → 18 is divisible by 3 ✓
              </p>
              <p className="text-sm text-slate-700 mt-2">
                19 ÷ 3 = 6 remainder 1 → 19 is NOT divisible by 3 ✗
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Divisibility Test for 2</CardTitle>
            <CardDescription>
              The simplest divisibility rule
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Rule:</p>
              <p className="text-lg font-bold text-primary mb-3">
                A number is divisible by 2 if its last digit is even (0, 2, 4, 6, or 8).
              </p>
              <p className="text-sm text-slate-700">
                Simply look at the last digit of the number!
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-300">
              <p className="text-sm font-semibold mb-3 text-slate-900">Examples:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-lg">24</span>
                  <span className="text-slate-600">→ Last digit is 4 (even)</span>
                  <span className="text-green-700 font-semibold ml-auto">✓ Divisible by 2</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-lg">135</span>
                  <span className="text-slate-600">→ Last digit is 5 (odd)</span>
                  <span className="text-red-700 font-semibold ml-auto">✗ NOT divisible by 2</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-lg">1,248</span>
                  <span className="text-slate-600">→ Last digit is 8 (even)</span>
                  <span className="text-green-700 font-semibold ml-auto">✓ Divisible by 2</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-lg">3,457</span>
                  <span className="text-slate-600">→ Last digit is 7 (odd)</span>
                  <span className="text-red-700 font-semibold ml-auto">✗ NOT divisible by 2</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Key Point:</p>
              <p className="text-sm text-slate-700">
                All even numbers are divisible by 2. All odd numbers are NOT divisible by 2.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Divisibility Test for 3</CardTitle>
            <CardDescription>
              Using the sum of digits
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Rule:</p>
              <p className="text-lg font-bold text-primary mb-3">
                A number is divisible by 3 if the sum of its digits is divisible by 3.
              </p>
              <p className="text-sm text-slate-700">
                Add all the digits together, then check if that sum is divisible by 3.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-300">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Is 123 divisible by 3?</p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-slate-700">Step 1: Add the digits</p>
                <p className="text-slate-700">1 + 2 + 3 = 6</p>
                
                <p className="font-semibold text-slate-700 mt-3">Step 2: Check if the sum is divisible by 3</p>
                <p className="text-slate-700">6 ÷ 3 = 2 (no remainder)</p>
                
                <p className="text-green-700 font-semibold mt-3">✓ 123 is divisible by 3</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-300">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Is 457 divisible by 3?</p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-slate-700">Step 1: Add the digits</p>
                <p className="text-slate-700">4 + 5 + 7 = 16</p>
                
                <p className="font-semibold text-slate-700 mt-3">Step 2: Check if the sum is divisible by 3</p>
                <p className="text-slate-700">16 ÷ 3 = 5 remainder 1</p>
                
                <p className="text-red-700 font-semibold mt-3">✗ 457 is NOT divisible by 3</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-300">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 3: Is 1,248 divisible by 3?</p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-slate-700">Step 1: Add the digits</p>
                <p className="text-slate-700">1 + 2 + 4 + 8 = 15</p>
                
                <p className="font-semibold text-slate-700 mt-3">Step 2: Check if the sum is divisible by 3</p>
                <p className="text-slate-700">15 ÷ 3 = 5 (no remainder)</p>
                
                <p className="text-green-700 font-semibold mt-3">✓ 1,248 is divisible by 3</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Tip:</p>
              <p className="text-sm text-slate-700">
                If the sum of digits is large, you can add the digits of the sum again! 
                For example: 9,876 → 9+8+7+6 = 30 → 3+0 = 3 → Divisible by 3 ✓
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Divisibility Test for 4</CardTitle>
            <CardDescription>
              Using the last two digits
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Rule:</p>
              <p className="text-lg font-bold text-primary mb-3">
                A number is divisible by 4 if its last two digits form a number that is divisible by 4.
              </p>
              <p className="text-sm text-slate-700">
                Look at the last two digits of the number and check if that number is divisible by 4.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-300">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Is 124 divisible by 4?</p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-slate-700">Step 1: Look at the last two digits</p>
                <p className="text-slate-700">Last two digits: 24</p>
                
                <p className="font-semibold text-slate-700 mt-3">Step 2: Check if 24 is divisible by 4</p>
                <p className="text-slate-700">24 ÷ 4 = 6 (no remainder)</p>
                
                <p className="text-green-700 font-semibold mt-3">✓ 124 is divisible by 4</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-300">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Is 1,357 divisible by 4?</p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-slate-700">Step 1: Look at the last two digits</p>
                <p className="text-slate-700">Last two digits: 57</p>
                
                <p className="font-semibold text-slate-700 mt-3">Step 2: Check if 57 is divisible by 4</p>
                <p className="text-slate-700">57 ÷ 4 = 14 remainder 1</p>
                
                <p className="text-red-700 font-semibold mt-3">✗ 1,357 is NOT divisible by 4</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-300">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 3: Is 2,348 divisible by 4?</p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-slate-700">Step 1: Look at the last two digits</p>
                <p className="text-slate-700">Last two digits: 48</p>
                
                <p className="font-semibold text-slate-700 mt-3">Step 2: Check if 48 is divisible by 4</p>
                <p className="text-slate-700">48 ÷ 4 = 12 (no remainder)</p>
                
                <p className="text-green-700 font-semibold mt-3">✓ 2,348 is divisible by 4</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Quick Check for 4:</p>
              <p className="text-sm text-slate-700">
                For numbers ending in 00, 04, 08, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96 → Divisible by 4
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
              <li><span className="font-semibold">Divisible by 2:</span> Last digit is even (0, 2, 4, 6, 8)</li>
              <li><span className="font-semibold">Divisible by 3:</span> Sum of digits is divisible by 3</li>
              <li><span className="font-semibold">Divisible by 4:</span> Last two digits form a number divisible by 4</li>
              <li>These tests save time - you don't need to do long division!</li>
              <li>Practice using these tests to get faster at identifying divisibility</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice testing divisibility by 2, 3, and 4 with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Divisibility234Interactive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of divisibility tests
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Divisibility by 2</p>
              <p className="text-sm text-slate-700 mb-3">
                Which of these numbers are divisible by 2?
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>234</li>
                <li>1,357</li>
                <li>4,568</li>
                <li>9,001</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Divisibility by 3</p>
              <p className="text-sm text-slate-700 mb-3">
                Which of these numbers are divisible by 3?
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>123</li>
                <li>456</li>
                <li>789</li>
                <li>1,234</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3: Divisibility by 4</p>
              <p className="text-sm text-slate-700 mb-3">
                Which of these numbers are divisible by 4?
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>124</li>
                <li>1,356</li>
                <li>2,478</li>
                <li>5,679</li>
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
            Where do we use divisibility tests in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Shopping:</span> Checking if prices can be divided evenly</li>
            <li><span className="font-semibold">Grouping:</span> Dividing items into equal groups</li>
            <li><span className="font-semibold">Time:</span> Calculating schedules and intervals</li>
            <li><span className="font-semibold">Mathematics:</span> Simplifying fractions and finding factors</li>
            <li><span className="font-semibold">Problem Solving:</span> Quick checks in calculations</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

