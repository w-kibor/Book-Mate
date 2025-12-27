import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { AdditionSubtractionInteractive } from '@/components/interactive/addition-subtraction-interactive';

export default function AdditionSubtractionPage() {
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
            Topic 1.1.8
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Operations of Whole Numbers: Addition and Subtraction
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Master addition and subtraction of whole numbers using various methods including column method, mental math, and estimation.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Add whole numbers using column method and mental strategies</li>
            <li>Subtract whole numbers using column method and mental strategies</li>
            <li>Solve word problems involving addition and subtraction</li>
            <li>Estimate sums and differences to check answers</li>
            <li>Apply addition and subtraction in real-life situations</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Addition of Whole Numbers</CardTitle>
            <CardDescription>
              Methods for adding whole numbers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              <span className="font-semibold">Addition</span> is the process of combining two or more numbers to get a total (sum). 
              The numbers being added are called <span className="font-semibold">addends</span>, and the result is called the <span className="font-semibold">sum</span>.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Column Method (Vertical Addition):</p>
              <p className="text-sm text-slate-700 mb-3">
                This is the most common method for adding large numbers. Line up the numbers by place value and add from right to left.
              </p>
              
              <div className="bg-white p-4 rounded border border-blue-300">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 1: Add 347 + 256</p>
                <div className="font-mono text-sm space-y-1">
                  <div className="flex justify-end gap-2">
                    <span className="text-slate-600">Hundreds</span>
                    <span className="text-slate-600">Tens</span>
                    <span className="text-slate-600">Ones</span>
                  </div>
                  <div className="flex justify-end gap-2 border-b-2 border-slate-400 pb-1">
                    <span>3</span>
                    <span>4</span>
                    <span>7</span>
                  </div>
                  <div className="flex justify-end gap-2">
                    <span>+</span>
                    <span>2</span>
                    <span>5</span>
                    <span>6</span>
                  </div>
                  <div className="flex justify-end gap-2 border-t-2 border-primary pt-1 mt-1">
                    <span className="font-bold text-primary">6</span>
                    <span className="font-bold text-primary">0</span>
                    <span className="font-bold text-primary">3</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Step 1: 7 + 6 = 13 (write 3, carry 1) → Step 2: 4 + 5 + 1 = 10 (write 0, carry 1) → Step 3: 3 + 2 + 1 = 6
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Add 1,234 + 5,678</p>
              <div className="bg-white p-4 rounded border border-green-300">
                <div className="font-mono text-sm space-y-1">
                  <div className="flex justify-end gap-2">
                    <span className="text-slate-600">Thousands</span>
                    <span className="text-slate-600">Hundreds</span>
                    <span className="text-slate-600">Tens</span>
                    <span className="text-slate-600">Ones</span>
                  </div>
                  <div className="flex justify-end gap-2 border-b-2 border-slate-400 pb-1">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                  </div>
                  <div className="flex justify-end gap-2">
                    <span>+</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                  </div>
                  <div className="flex justify-end gap-2 border-t-2 border-primary pt-1 mt-1">
                    <span className="font-bold text-primary">6</span>
                    <span className="font-bold text-primary">9</span>
                    <span className="font-bold text-primary">1</span>
                    <span className="font-bold text-primary">2</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Answer: 6,912
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Mental Math Strategies:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                <li><span className="font-semibold">Breaking apart:</span> 47 + 35 = (40 + 30) + (7 + 5) = 70 + 12 = 82</li>
                <li><span className="font-semibold">Making tens:</span> 28 + 7 = 28 + 2 + 5 = 30 + 5 = 35</li>
                <li><span className="font-semibold">Doubles:</span> 15 + 15 = 30</li>
                <li><span className="font-semibold">Near doubles:</span> 15 + 16 = 15 + 15 + 1 = 31</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subtraction of Whole Numbers</CardTitle>
            <CardDescription>
              Methods for subtracting whole numbers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              <span className="font-semibold">Subtraction</span> is the process of finding the difference between two numbers. 
              The number being subtracted from is called the <span className="font-semibold">minuend</span>, 
              the number being subtracted is called the <span className="font-semibold">subtrahend</span>, 
              and the result is called the <span className="font-semibold">difference</span>.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Column Method (Vertical Subtraction):</p>
              <p className="text-sm text-slate-700 mb-3">
                Line up numbers by place value and subtract from right to left. When needed, borrow from the next higher place value.
              </p>
              
              <div className="bg-white p-4 rounded border border-blue-300">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 1: Subtract 523 - 187</p>
                <div className="font-mono text-sm space-y-1">
                  <div className="flex justify-end gap-2">
                    <span className="text-slate-600">Hundreds</span>
                    <span className="text-slate-600">Tens</span>
                    <span className="text-slate-600">Ones</span>
                  </div>
                  <div className="flex justify-end gap-2 border-b-2 border-slate-400 pb-1">
                    <span>5</span>
                    <span className="line-through">2</span>
                    <span className="text-red-600">1</span>
                    <span className="line-through">3</span>
                    <span className="text-red-600">13</span>
                  </div>
                  <div className="flex justify-end gap-2">
                    <span>-</span>
                    <span>1</span>
                    <span>8</span>
                    <span>7</span>
                  </div>
                  <div className="flex justify-end gap-2 border-t-2 border-primary pt-1 mt-1">
                    <span className="font-bold text-primary">3</span>
                    <span className="font-bold text-primary">3</span>
                    <span className="font-bold text-primary">6</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Step 1: Borrow 1 from tens (2→1, 3→13), then 13 - 7 = 6 → Step 2: 1 - 8 (borrow from hundreds), 11 - 8 = 3 → Step 3: 4 - 1 = 3
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Subtract 4,000 - 2,345</p>
              <div className="bg-white p-4 rounded border border-green-300">
                <div className="font-mono text-sm space-y-1">
                  <div className="flex justify-end gap-2">
                    <span className="text-slate-600">Thousands</span>
                    <span className="text-slate-600">Hundreds</span>
                    <span className="text-slate-600">Tens</span>
                    <span className="text-slate-600">Ones</span>
                  </div>
                  <div className="flex justify-end gap-2 border-b-2 border-slate-400 pb-1">
                    <span>4</span>
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                  </div>
                  <div className="flex justify-end gap-2">
                    <span>-</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
                  <div className="flex justify-end gap-2 border-t-2 border-primary pt-1 mt-1">
                    <span className="font-bold text-primary">1</span>
                    <span className="font-bold text-primary">6</span>
                    <span className="font-bold text-primary">5</span>
                    <span className="font-bold text-primary">5</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Answer: 1,655
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Mental Math Strategies:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                <li><span className="font-semibold">Counting back:</span> 45 - 7 = 45 - 5 - 2 = 40 - 2 = 38</li>
                <li><span className="font-semibold">Counting up:</span> 45 - 37 = count from 37 to 45 = 8</li>
                <li><span className="font-semibold">Breaking apart:</span> 67 - 24 = (60 - 20) + (7 - 4) = 40 + 3 = 43</li>
                <li><span className="font-semibold">Using addition:</span> 45 - 18 = ? Think: 18 + ? = 45, so ? = 27</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Checking Your Answers</CardTitle>
            <CardDescription>
              Methods to verify addition and subtraction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">For Addition:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                  <li><span className="font-semibold">Estimation:</span> Round numbers and add: 347 + 256 ≈ 350 + 260 = 610 (actual: 603)</li>
                  <li><span className="font-semibold">Reverse operation:</span> Check by subtracting: If 347 + 256 = 603, then 603 - 256 = 347</li>
                  <li><span className="font-semibold">Add in different order:</span> 347 + 256 = 256 + 347</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">For Subtraction:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                  <li><span className="font-semibold">Estimation:</span> Round numbers and subtract: 523 - 187 ≈ 520 - 190 = 330 (actual: 336)</li>
                  <li><span className="font-semibold">Reverse operation:</span> Check by adding: If 523 - 187 = 336, then 336 + 187 = 523</li>
                  <li><span className="font-semibold">Add difference to subtrahend:</span> 336 + 187 should equal 523</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Word Problems</CardTitle>
            <CardDescription>
              Applying addition and subtraction in real situations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 1: Addition Word Problem</p>
                <p className="text-sm text-slate-700 mb-2">
                  Sarah had 247 books. She bought 156 more books. How many books does she have now?
                </p>
                <div className="bg-white p-3 rounded border border-blue-300 mt-2">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">Solution:</span> 247 + 156 = 403 books
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 2: Subtraction Word Problem</p>
                <p className="text-sm text-slate-700 mb-2">
                  A library had 1,500 books. Students borrowed 387 books. How many books are left in the library?
                </p>
                <div className="bg-white p-3 rounded border border-green-300 mt-2">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">Solution:</span> 1,500 - 387 = 1,113 books
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 3: Two-Step Problem</p>
                <p className="text-sm text-slate-700 mb-2">
                  Tom had 450 shillings. He spent 125 shillings on lunch and 87 shillings on a book. How much money does he have left?
                </p>
                <div className="bg-white p-3 rounded border border-purple-300 mt-2">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">Solution:</span> First, find total spent: 125 + 87 = 212 shillings<br />
                    Then subtract: 450 - 212 = 238 shillings left
                  </p>
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
              <li>Always align numbers by place value (ones under ones, tens under tens, etc.)</li>
              <li>In addition, carry over when the sum in a column is 10 or more</li>
              <li>In subtraction, borrow from the next higher place value when needed</li>
              <li>Check your answers using estimation or reverse operations</li>
              <li>Practice mental math strategies for faster calculations</li>
              <li>Read word problems carefully to identify what operation to use</li>
              <li>Estimate first to see if your answer is reasonable</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice addition and subtraction with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AdditionSubtractionInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of addition and subtraction
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Addition</p>
              <p className="text-sm text-slate-700 mb-3">
                Solve these addition problems:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>234 + 567 = ?</li>
                <li>1,234 + 5,678 = ?</li>
                <li>45,678 + 23,456 = ?</li>
                <li>999 + 1,001 = ?</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Subtraction</p>
              <p className="text-sm text-slate-700 mb-3">
                Solve these subtraction problems:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>856 - 429 = ?</li>
                <li>5,000 - 2,345 = ?</li>
                <li>10,000 - 7,654 = ?</li>
                <li>1,234 - 567 = ?</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3: Word Problems</p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>Mary had 345 shillings. She earned 278 more shillings. How much does she have now?</li>
                <li>A school has 1,200 students. If 456 students are in Grade 7, how many students are in other grades?</li>
                <li>John read 156 pages on Monday and 234 pages on Tuesday. How many pages did he read in total?</li>
                <li>A farmer harvested 2,345 kg of maize. He sold 1,567 kg. How much maize does he have left?</li>
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
            Where do we use addition and subtraction in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Shopping:</span> Calculating total cost and change when buying items</li>
            <li><span className="font-semibold">Banking:</span> Tracking deposits, withdrawals, and account balances</li>
            <li><span className="font-semibold">Cooking:</span> Measuring ingredients and adjusting recipe quantities</li>
            <li><span className="font-semibold">Time Management:</span> Calculating time differences and schedules</li>
            <li><span className="font-semibold">Sports:</span> Keeping score and calculating points</li>
            <li><span className="font-semibold">Travel:</span> Calculating distances, fuel consumption, and expenses</li>
            <li><span className="font-semibold">Inventory:</span> Tracking stock levels and sales</li>
            <li><span className="font-semibold">Budgeting:</span> Managing income and expenses</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

