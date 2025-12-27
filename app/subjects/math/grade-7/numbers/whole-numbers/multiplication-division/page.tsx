import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { MultiplicationDivisionInteractive } from '@/components/interactive/multiplication-division-interactive';

export default function MultiplicationDivisionPage() {
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
            Topic 1.1.9
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Operations of Whole Numbers: Multiplication and Division
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Master multiplication and division of whole numbers using various methods including long multiplication, long division, and mental math strategies.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Multiply whole numbers using column method and mental strategies</li>
            <li>Divide whole numbers using long division method</li>
            <li>Understand multiplication and division as inverse operations</li>
            <li>Solve word problems involving multiplication and division</li>
            <li>Estimate products and quotients to check answers</li>
            <li>Apply multiplication and division in real-life situations</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Multiplication of Whole Numbers</CardTitle>
            <CardDescription>
              Methods for multiplying whole numbers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              <span className="font-semibold">Multiplication</span> is the process of adding a number to itself a certain number of times. 
              The numbers being multiplied are called <span className="font-semibold">factors</span>, and the result is called the <span className="font-semibold">product</span>.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Column Method (Long Multiplication):</p>
              <p className="text-sm text-slate-700 mb-3">
                This method is used for multiplying larger numbers. Multiply each digit of the second number by each digit of the first number, then add the results.
              </p>
              
              <div className="bg-white p-4 rounded border border-blue-300">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 1: Multiply 47 × 23</p>
                <div className="font-mono text-sm space-y-1">
                  <div className="flex justify-end gap-2">
                    <span className="text-slate-600">Tens</span>
                    <span className="text-slate-600">Ones</span>
                  </div>
                  <div className="flex justify-end gap-2 border-b-2 border-slate-400 pb-1">
                    <span>4</span>
                    <span>7</span>
                  </div>
                  <div className="flex justify-end gap-2">
                    <span>×</span>
                    <span>2</span>
                    <span>3</span>
                  </div>
                  <div className="flex justify-end gap-2 border-b border-slate-300 pb-1 pt-1">
                    <span className="text-muted-foreground">1</span>
                    <span className="text-muted-foreground">4</span>
                    <span className="text-muted-foreground">1</span>
                    <span className="text-xs text-muted-foreground">(47 × 3)</span>
                  </div>
                  <div className="flex justify-end gap-2 pt-1">
                    <span className="text-muted-foreground">9</span>
                    <span className="text-muted-foreground">4</span>
                    <span className="text-muted-foreground">0</span>
                    <span className="text-xs text-muted-foreground">(47 × 20)</span>
                  </div>
                  <div className="flex justify-end gap-2 border-t-2 border-primary pt-1 mt-1">
                    <span className="font-bold text-primary">1</span>
                    <span className="font-bold text-primary">0</span>
                    <span className="font-bold text-primary">8</span>
                    <span className="font-bold text-primary">1</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Step 1: 47 × 3 = 141 → Step 2: 47 × 20 = 940 → Step 3: 141 + 940 = 1,081
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Multiply 234 × 56</p>
              <div className="bg-white p-4 rounded border border-green-300">
                <div className="font-mono text-sm space-y-1">
                  <div className="flex justify-end gap-2 border-b-2 border-slate-400 pb-1">
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                  </div>
                  <div className="flex justify-end gap-2">
                    <span>×</span>
                    <span>5</span>
                    <span>6</span>
                  </div>
                  <div className="flex justify-end gap-2 border-b border-slate-300 pb-1 pt-1">
                    <span className="text-muted-foreground">1</span>
                    <span className="text-muted-foreground">4</span>
                    <span className="text-muted-foreground">0</span>
                    <span className="text-muted-foreground">4</span>
                    <span className="text-xs text-muted-foreground">(234 × 6)</span>
                  </div>
                  <div className="flex justify-end gap-2 pt-1">
                    <span className="text-muted-foreground">1</span>
                    <span className="text-muted-foreground">1</span>
                    <span className="text-muted-foreground">7</span>
                    <span className="text-muted-foreground">0</span>
                    <span className="text-xs text-muted-foreground">(234 × 50)</span>
                  </div>
                  <div className="flex justify-end gap-2 border-t-2 border-primary pt-1 mt-1">
                    <span className="font-bold text-primary">1</span>
                    <span className="font-bold text-primary">3</span>
                    <span className="font-bold text-primary">1</span>
                    <span className="font-bold text-primary">0</span>
                    <span className="font-bold text-primary">4</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Answer: 13,104
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Mental Math Strategies:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                <li><span className="font-semibold">Breaking apart:</span> 24 × 5 = (20 × 5) + (4 × 5) = 100 + 20 = 120</li>
                <li><span className="font-semibold">Doubling and halving:</span> 16 × 5 = 8 × 10 = 80</li>
                <li><span className="font-semibold">Multiplying by 10, 100, 1000:</span> 47 × 100 = 4,700</li>
                <li><span className="font-semibold">Using known facts:</span> 6 × 7 = 42, so 60 × 7 = 420</li>
                <li><span className="font-semibold">Commutative property:</span> 7 × 8 = 8 × 7 = 56</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Division of Whole Numbers</CardTitle>
            <CardDescription>
              Methods for dividing whole numbers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              <span className="font-semibold">Division</span> is the process of splitting a number into equal parts or finding how many times one number fits into another. 
              The number being divided is called the <span className="font-semibold">dividend</span>, 
              the number dividing is called the <span className="font-semibold">divisor</span>, 
              and the result is called the <span className="font-semibold">quotient</span>. 
              If there's a remainder, it's called the <span className="font-semibold">remainder</span>.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Long Division Method:</p>
              <p className="text-sm text-slate-700 mb-3">
                This method is used for dividing larger numbers. Divide, multiply, subtract, and bring down digits step by step.
              </p>
              
              <div className="bg-white p-4 rounded border border-blue-300">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 1: Divide 456 ÷ 12</p>
                <div className="font-mono text-sm space-y-1">
                  <div className="flex items-start gap-2">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 border-b-2 border-slate-400 pb-1">
                        <span className="text-primary font-bold">3</span>
                        <span className="text-primary font-bold">8</span>
                      </div>
                      <div className="pt-1">
                        <span className="text-slate-600">12</span>
                        <span className="ml-2">4</span>
                        <span>5</span>
                        <span>6</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-8 text-xs text-muted-foreground space-y-1">
                    <div>Step 1: 12 goes into 45, 3 times (12 × 3 = 36)</div>
                    <div>Step 2: 45 - 36 = 9, bring down 6</div>
                    <div>Step 3: 12 goes into 96, 8 times (12 × 8 = 96)</div>
                    <div>Step 4: 96 - 96 = 0 (no remainder)</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Answer: 38 (no remainder)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Divide 1,234 ÷ 25</p>
              <div className="bg-white p-4 rounded border border-green-300">
                <div className="font-mono text-sm space-y-1">
                  <div className="flex items-start gap-2">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 border-b-2 border-slate-400 pb-1">
                        <span className="text-primary font-bold">4</span>
                        <span className="text-primary font-bold">9</span>
                        <span className="text-red-600 text-xs">R9</span>
                      </div>
                      <div className="pt-1">
                        <span className="text-slate-600">25</span>
                        <span className="ml-2">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-8 text-xs text-muted-foreground space-y-1">
                    <div>Step 1: 25 goes into 123, 4 times (25 × 4 = 100)</div>
                    <div>Step 2: 123 - 100 = 23, bring down 4</div>
                    <div>Step 3: 25 goes into 234, 9 times (25 × 9 = 225)</div>
                    <div>Step 4: 234 - 225 = 9 (remainder)</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Answer: 49 remainder 9 (or 49 R9)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Mental Math Strategies:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                <li><span className="font-semibold">Dividing by 10, 100, 1000:</span> 450 ÷ 10 = 45 (move decimal point left)</li>
                <li><span className="font-semibold">Halving:</span> 48 ÷ 2 = 24</li>
                <li><span className="font-semibold">Using multiplication facts:</span> If 7 × 8 = 56, then 56 ÷ 7 = 8</li>
                <li><span className="font-semibold">Breaking apart:</span> 96 ÷ 4 = (80 ÷ 4) + (16 ÷ 4) = 20 + 4 = 24</li>
                <li><span className="font-semibold">Estimation:</span> 234 ÷ 7 ≈ 210 ÷ 7 = 30</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Multiplication and Division as Inverse Operations</CardTitle>
            <CardDescription>
              Understanding the relationship between multiplication and division
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-slate-700">
                Multiplication and division are <span className="font-semibold">inverse operations</span>. 
                This means they "undo" each other. If you multiply two numbers and then divide by one of them, you get the other number back.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Examples:</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                  <li>If 7 × 8 = 56, then 56 ÷ 7 = 8 and 56 ÷ 8 = 7</li>
                  <li>If 12 × 5 = 60, then 60 ÷ 12 = 5 and 60 ÷ 5 = 12</li>
                  <li>If 234 ÷ 6 = 39, then 39 × 6 = 234</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Using Inverse Operations to Check Answers:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                  <li>To check multiplication: Divide the product by one factor to get the other factor</li>
                  <li>To check division: Multiply the quotient by the divisor and add the remainder (if any) to get the dividend</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">
                  Example: If 47 × 23 = 1,081, check by: 1,081 ÷ 47 = 23 ✓
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Checking Your Answers</CardTitle>
            <CardDescription>
              Methods to verify multiplication and division
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">For Multiplication:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                  <li><span className="font-semibold">Estimation:</span> Round numbers and multiply: 47 × 23 ≈ 50 × 20 = 1,000 (actual: 1,081)</li>
                  <li><span className="font-semibold">Reverse operation:</span> Check by dividing: If 47 × 23 = 1,081, then 1,081 ÷ 47 = 23</li>
                  <li><span className="font-semibold">Commutative property:</span> 47 × 23 = 23 × 47</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">For Division:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                  <li><span className="font-semibold">Estimation:</span> Round numbers and divide: 456 ÷ 12 ≈ 450 ÷ 10 = 45 (actual: 38)</li>
                  <li><span className="font-semibold">Reverse operation:</span> Check by multiplying: If 456 ÷ 12 = 38, then 38 × 12 = 456</li>
                  <li><span className="font-semibold">With remainder:</span> (Quotient × Divisor) + Remainder = Dividend</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">
                  Example: 1,234 ÷ 25 = 49 R9, check: (49 × 25) + 9 = 1,225 + 9 = 1,234 ✓
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Word Problems</CardTitle>
            <CardDescription>
              Applying multiplication and division in real situations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 1: Multiplication Word Problem</p>
                <p className="text-sm text-slate-700 mb-2">
                  A box contains 24 pencils. If a school orders 15 boxes, how many pencils will they receive?
                </p>
                <div className="bg-white p-3 rounded border border-blue-300 mt-2">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">Solution:</span> 24 × 15 = 360 pencils
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 2: Division Word Problem</p>
                <p className="text-sm text-slate-700 mb-2">
                  A teacher has 156 students and wants to divide them into groups of 12. How many groups can be formed?
                </p>
                <div className="bg-white p-3 rounded border border-green-300 mt-2">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">Solution:</span> 156 ÷ 12 = 13 groups
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 3: Two-Step Problem</p>
                <p className="text-sm text-slate-700 mb-2">
                  A factory produces 450 items per day. If each item costs 25 shillings to make, and they sell each item for 40 shillings, how much profit do they make per day?
                </p>
                <div className="bg-white p-3 rounded border border-purple-300 mt-2">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">Solution:</span><br />
                    Cost per day: 450 × 25 = 11,250 shillings<br />
                    Revenue per day: 450 × 40 = 18,000 shillings<br />
                    Profit: 18,000 - 11,250 = 6,750 shillings per day
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
              <li>In multiplication, align numbers properly and add partial products correctly</li>
              <li>In division, work from left to right, bringing down digits as needed</li>
              <li>Multiplication and division are inverse operations - use this to check your work</li>
              <li>Estimate first to see if your answer is reasonable</li>
              <li>Practice multiplication tables for faster mental calculations</li>
              <li>When dividing, always check: (Quotient × Divisor) + Remainder = Dividend</li>
              <li>Read word problems carefully to identify what operation to use</li>
              <li>For large numbers, use the column method for accuracy</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice multiplication and division with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MultiplicationDivisionInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of multiplication and division
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Multiplication</p>
              <p className="text-sm text-slate-700 mb-3">
                Solve these multiplication problems:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>47 × 23 = ?</li>
                <li>234 × 56 = ?</li>
                <li>1,234 × 45 = ?</li>
                <li>567 × 89 = ?</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Division</p>
              <p className="text-sm text-slate-700 mb-3">
                Solve these division problems:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>456 ÷ 12 = ?</li>
                <li>1,234 ÷ 25 = ?</li>
                <li>2,345 ÷ 47 = ?</li>
                <li>5,678 ÷ 89 = ?</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3: Word Problems</p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>A school has 24 classrooms. If each classroom has 35 students, how many students are in the school?</li>
                <li>A farmer harvested 1,890 kg of maize. If he packs them in bags of 45 kg each, how many bags will he have?</li>
                <li>A factory produces 156 items per hour. How many items will it produce in 8 hours?</li>
                <li>A library has 2,340 books. If they are arranged on shelves that hold 78 books each, how many shelves are needed?</li>
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
            Where do we use multiplication and division in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Shopping:</span> Calculating total cost when buying multiple items</li>
            <li><span className="font-semibold">Cooking:</span> Scaling recipes up or down for different serving sizes</li>
            <li><span className="font-semibold">Time Management:</span> Calculating work hours, wages, and schedules</li>
            <li><span className="font-semibold">Construction:</span> Calculating materials needed (tiles, bricks, paint)</li>
            <li><span className="font-semibold">Agriculture:</span> Calculating crop yields, fertilizer amounts, and land division</li>
            <li><span className="font-semibold">Business:</span> Calculating profits, costs, and inventory management</li>
            <li><span className="font-semibold">Sports:</span> Calculating scores, statistics, and team formations</li>
            <li><span className="font-semibold">Travel:</span> Calculating distances, fuel consumption, and travel time</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

