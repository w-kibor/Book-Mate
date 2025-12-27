import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { SquaresWholeNumbersInteractive } from '@/components/interactive/squares-whole-numbers-interactive';

export default function SquaresWholeNumbersPage() {
  return (
    <section className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/subjects/math/grade-7/numbers/squares-square-roots">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Squares and Square Roots
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Topic 1.5.1
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Squares of Whole Numbers
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn to find the square of whole numbers by multiplying a number by itself, and understand the concept of perfect squares.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Understand what squaring a number means</li>
            <li>Calculate squares of whole numbers</li>
            <li>Recognize perfect squares</li>
            <li>Use multiplication to find squares</li>
            <li>Apply knowledge of squares to solve problems</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What is a Square?</CardTitle>
            <CardDescription>
              Understanding the concept of squaring
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              The <span className="font-semibold">square</span> of a number is the result of multiplying that number by itself. 
              We write it using the exponent 2, or by saying "squared".
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Notation:</p>
              <p className="text-sm text-slate-700 mb-2">
                The square of a number <MathRenderer display={false}>$n$</MathRenderer> is written as:
              </p>
              <div className="bg-white p-3 rounded border border-blue-300">
                <MathRenderer display={true}>$n^2 = n \times n$</MathRenderer>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                We read <MathRenderer display={false}>$n^2$</MathRenderer> as "n squared" or "n to the power of 2"
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Examples:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li><MathRenderer display={false}>$5^2 = 5 \times 5 = 25$</MathRenderer> (5 squared equals 25)</li>
                <li><MathRenderer display={false}>$7^2 = 7 \times 7 = 49$</MathRenderer> (7 squared equals 49)</li>
                <li><MathRenderer display={false}>$10^2 = 10 \times 10 = 100$</MathRenderer> (10 squared equals 100)</li>
                <li><MathRenderer display={false}>$12^2 = 12 \times 12 = 144$</MathRenderer> (12 squared equals 144)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Perfect Squares</CardTitle>
            <CardDescription>
              Numbers that are squares of whole numbers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              A <span className="font-semibold">perfect square</span> is a number that is the square of a whole number. 
              For example, 25 is a perfect square because <MathRenderer display={false}>$25 = 5^2$</MathRenderer>.
            </p>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">First 15 Perfect Squares:</p>
              <div className="bg-white p-4 rounded border border-purple-300">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 text-sm">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((n) => (
                    <div key={n} className="text-center p-2 bg-primary/5 rounded border border-primary/20">
                      <p className="font-mono text-xs text-muted-foreground">{n}²</p>
                      <p className="font-bold text-primary">{n * n}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  These are: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Finding Squares by Multiplication</CardTitle>
            <CardDescription>
              Step-by-step method
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Find <MathRenderer display={false}>$8^2$</MathRenderer></p>
              <div className="bg-white p-4 rounded border border-blue-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Write the multiplication</p>
                  <p className="text-slate-700"><MathRenderer display={false}>$8^2 = 8 \times 8$</MathRenderer></p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Multiply</p>
                  <p className="text-slate-700">8 × 8 = 64</p>
                  
                  <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>$8^2 = 64$</MathRenderer></p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Find <MathRenderer display={false}>$15^2$</MathRenderer></p>
              <div className="bg-white p-4 rounded border border-green-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Write the multiplication</p>
                  <p className="text-slate-700"><MathRenderer display={false}>$15^2 = 15 \times 15$</MathRenderer></p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Multiply using column method</p>
                  <div className="font-mono text-sm bg-slate-50 p-2 rounded">
                    <div className="flex justify-end gap-2">
                      <span>1</span>
                      <span>5</span>
                    </div>
                    <div className="flex justify-end gap-2 border-b border-slate-400 pb-1">
                      <span>×</span>
                      <span>1</span>
                      <span>5</span>
                    </div>
                    <div className="flex justify-end gap-2 pt-1">
                      <span className="text-muted-foreground">7</span>
                      <span className="text-muted-foreground">5</span>
                      <span className="text-xs text-muted-foreground">(15 × 5)</span>
                    </div>
                    <div className="flex justify-end gap-2">
                      <span className="text-muted-foreground">1</span>
                      <span className="text-muted-foreground">5</span>
                      <span className="text-muted-foreground">0</span>
                      <span className="text-xs text-muted-foreground">(15 × 10)</span>
                    </div>
                    <div className="flex justify-end gap-2 border-t-2 border-primary pt-1 mt-1">
                      <span className="font-bold text-primary">2</span>
                      <span className="font-bold text-primary">2</span>
                      <span className="font-bold text-primary">5</span>
                    </div>
                  </div>
                  
                  <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>$15^2 = 225$</MathRenderer></p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 3: Find <MathRenderer display={false}>$20^2$</MathRenderer></p>
              <div className="bg-white p-4 rounded border border-yellow-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Method 1: Direct multiplication</p>
                  <p className="text-slate-700"><MathRenderer display={false}>$20^2 = 20 \times 20 = 400$</MathRenderer></p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Method 2: Using the pattern</p>
                  <p className="text-slate-700">For numbers ending in 0: <MathRenderer display={false}>$20^2 = (2 \times 10)^2 = 2^2 \times 10^2 = 4 \times 100 = 400$</MathRenderer></p>
                  
                  <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>$20^2 = 400$</MathRenderer></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Visual Representation</CardTitle>
            <CardDescription>
              Understanding squares using area
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              A square number can be visualized as the area of a square. For example, <MathRenderer display={false}>$5^2 = 25$</MathRenderer> 
              represents a square with sides of length 5 units, which has an area of 25 square units.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Example: <MathRenderer display={false}>$4^2 = 16$</MathRenderer></p>
              <div className="bg-white p-4 rounded border border-blue-300">
                <div className="text-sm text-slate-700">
                  <p>Imagine a square with 4 units on each side.</p>
                  <p className="mt-2">The area = 4 × 4 = 16 square units</p>
                  <p className="mt-2">This is why we call it "squaring" a number!</p>
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
              <li>The square of a number is that number multiplied by itself</li>
              <li>We write <MathRenderer display={false}>$n^2$</MathRenderer> to mean "n squared"</li>
              <li>Perfect squares are numbers like 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, etc.</li>
              <li>To find a square, multiply the number by itself</li>
              <li>Squares can be visualized as the area of a square</li>
              <li>Practice memorizing common perfect squares for faster calculations</li>
              <li>Any whole number squared gives a perfect square</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice finding squares of whole numbers with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SquaresWholeNumbersInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of squares of whole numbers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Calculate Squares</p>
              <p className="text-sm text-slate-700 mb-3">
                Find the square of these numbers:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li><MathRenderer display={false}>$6^2 = ?$</MathRenderer></li>
                <li><MathRenderer display={false}>$9^2 = ?$</MathRenderer></li>
                <li><MathRenderer display={false}>$11^2 = ?$</MathRenderer></li>
                <li><MathRenderer display={false}>$14^2 = ?$</MathRenderer></li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Identify Perfect Squares</p>
              <p className="text-sm text-slate-700 mb-3">
                Which of these numbers are perfect squares?
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>36</li>
                <li>50</li>
                <li>64</li>
                <li>72</li>
                <li>81</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3: Word Problems</p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>A square garden has sides of 12 meters. What is the area of the garden?</li>
                <li>If a number is squared and the result is 144, what is the original number?</li>
                <li>A square tile has an area of 49 square centimeters. How long is each side?</li>
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
            Where do we use squares of numbers in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Area Calculations:</span> Finding the area of square rooms, tiles, or plots of land</li>
            <li><span className="font-semibold">Construction:</span> Calculating materials needed for square-shaped structures</li>
            <li><span className="font-semibold">Art and Design:</span> Creating square patterns and grids</li>
            <li><span className="font-semibold">Mathematics:</span> Used in algebra, geometry, and advanced math</li>
            <li><span className="font-semibold">Science:</span> Calculating areas in physics and engineering</li>
            <li><span className="font-semibold">Games:</span> Chess boards, game grids, and puzzles</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

