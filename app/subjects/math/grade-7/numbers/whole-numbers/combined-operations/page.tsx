import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { CombinedOperationsInteractive } from '@/components/interactive/combined-operations-interactive';

export default function CombinedOperationsPage() {
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
            Topic 1.1.10
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Operations of Whole Numbers: Combined Operations
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn to solve problems with multiple operations using the correct order of operations (BODMAS/PEMDAS).
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Understand the order of operations (BODMAS/PEMDAS)</li>
            <li>Solve problems with multiple operations in the correct order</li>
            <li>Apply order of operations to addition, subtraction, multiplication, and division</li>
            <li>Solve word problems involving combined operations</li>
            <li>Check answers using estimation and reverse operations</li>
            <li>Apply combined operations in real-life situations</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Order of Operations (BODMAS/PEMDAS)</CardTitle>
            <CardDescription>
              The rules for performing operations in the correct order
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              When a problem has multiple operations (addition, subtraction, multiplication, division), 
              we must follow a specific order to get the correct answer. This order is called <span className="font-semibold">BODMAS</span> or <span className="font-semibold">PEMDAS</span>.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">BODMAS (Kenyan Curriculum):</p>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary w-8">B</span>
                  <span>Brackets (parentheses) - Do operations inside brackets first</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary w-8">O</span>
                  <span>Orders (powers, square roots) - Do powers and roots</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary w-8">D</span>
                  <span>Division - Do division from left to right</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary w-8">M</span>
                  <span>Multiplication - Do multiplication from left to right</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary w-8">A</span>
                  <span>Addition - Do addition from left to right</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary w-8">S</span>
                  <span>Subtraction - Do subtraction from left to right</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Key Rules:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                <li>Always work from left to right when operations have the same priority</li>
                <li>Brackets come first - solve everything inside brackets before anything else</li>
                <li>Multiplication and Division have the same priority - do them left to right</li>
                <li>Addition and Subtraction have the same priority - do them left to right</li>
                <li>Multiplication/Division come before Addition/Subtraction</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Step-by-Step Examples</CardTitle>
            <CardDescription>
              Solving problems with multiple operations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: 3 + 4 × 5</p>
              <div className="bg-white p-4 rounded border border-blue-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Identify operations</p>
                  <p className="text-slate-700">We have: Addition (+) and Multiplication (×)</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Apply BODMAS</p>
                  <p className="text-slate-700">Multiplication comes before Addition</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 3: Solve</p>
                  <div className="font-mono bg-slate-50 p-3 rounded">
                    <div>3 + 4 × 5</div>
                    <div>= 3 + 20  <span className="text-muted-foreground">(First: 4 × 5 = 20)</span></div>
                    <div className="text-primary font-bold">= 23  <span className="text-muted-foreground">(Then: 3 + 20 = 23)</span></div>
                  </div>
                  
                  <p className="text-xs text-red-600 mt-2 font-semibold">
                    ✗ Wrong: 3 + 4 × 5 = 7 × 5 = 35 (This is incorrect!)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: 12 ÷ 3 + 2 × 4</p>
              <div className="bg-white p-4 rounded border border-green-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Identify operations</p>
                  <p className="text-slate-700">We have: Division (÷), Addition (+), and Multiplication (×)</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Apply BODMAS</p>
                  <p className="text-slate-700">Division and Multiplication come before Addition. Work left to right.</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 3: Solve</p>
                  <div className="font-mono bg-slate-50 p-3 rounded">
                    <div>12 ÷ 3 + 2 × 4</div>
                    <div>= 4 + 2 × 4  <span className="text-muted-foreground">(First: 12 ÷ 3 = 4)</span></div>
                    <div>= 4 + 8  <span className="text-muted-foreground">(Then: 2 × 4 = 8)</span></div>
                    <div className="text-primary font-bold">= 12  <span className="text-muted-foreground">(Finally: 4 + 8 = 12)</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 3: (15 - 3) × 2 + 8</p>
              <div className="bg-white p-4 rounded border border-purple-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Identify operations</p>
                  <p className="text-slate-700">We have: Brackets, Multiplication, and Addition</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Apply BODMAS</p>
                  <p className="text-slate-700">Brackets come first, then Multiplication, then Addition</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 3: Solve</p>
                  <div className="font-mono bg-slate-50 p-3 rounded">
                    <div>(15 - 3) × 2 + 8</div>
                    <div>= 12 × 2 + 8  <span className="text-muted-foreground">(First: 15 - 3 = 12)</span></div>
                    <div>= 24 + 8  <span className="text-muted-foreground">(Then: 12 × 2 = 24)</span></div>
                    <div className="text-primary font-bold">= 32  <span className="text-muted-foreground">(Finally: 24 + 8 = 32)</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 4: 20 - 8 ÷ 2 + 3 × 4</p>
              <div className="bg-white p-4 rounded border border-yellow-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Identify operations</p>
                  <p className="text-slate-700">We have: Subtraction, Division, Addition, and Multiplication</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Apply BODMAS</p>
                  <p className="text-slate-700">Division and Multiplication first (left to right), then Addition and Subtraction (left to right)</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 3: Solve</p>
                  <div className="font-mono bg-slate-50 p-3 rounded">
                    <div>20 - 8 ÷ 2 + 3 × 4</div>
                    <div>= 20 - 4 + 3 × 4  <span className="text-muted-foreground">(First: 8 ÷ 2 = 4)</span></div>
                    <div>= 20 - 4 + 12  <span className="text-muted-foreground">(Then: 3 × 4 = 12)</span></div>
                    <div>= 16 + 12  <span className="text-muted-foreground">(Then: 20 - 4 = 16)</span></div>
                    <div className="text-primary font-bold">= 28  <span className="text-muted-foreground">(Finally: 16 + 12 = 28)</span></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes to Avoid</CardTitle>
            <CardDescription>
              Understanding what NOT to do
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Mistake 1: Working left to right without considering order</p>
                <div className="bg-white p-3 rounded border border-red-300">
                  <p className="text-sm text-slate-700 mb-1">Wrong: 3 + 4 × 5 = 7 × 5 = 35</p>
                  <p className="text-sm text-green-700 font-semibold">Correct: 3 + 4 × 5 = 3 + 20 = 23</p>
                  <p className="text-xs text-muted-foreground mt-1">Multiplication must be done before addition!</p>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Mistake 2: Ignoring brackets</p>
                <div className="bg-white p-3 rounded border border-red-300">
                  <p className="text-sm text-slate-700 mb-1">Wrong: (15 - 3) × 2 = 15 - 6 = 9</p>
                  <p className="text-sm text-green-700 font-semibold">Correct: (15 - 3) × 2 = 12 × 2 = 24</p>
                  <p className="text-xs text-muted-foreground mt-1">Always solve brackets first!</p>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Mistake 3: Not working left to right for same priority</p>
                <div className="bg-white p-3 rounded border border-red-300">
                  <p className="text-sm text-slate-700 mb-1">Wrong: 12 ÷ 3 × 2 = 12 ÷ 6 = 2</p>
                  <p className="text-sm text-green-700 font-semibold">Correct: 12 ÷ 3 × 2 = 4 × 2 = 8</p>
                  <p className="text-xs text-muted-foreground mt-1">When operations have same priority, work left to right!</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Word Problems with Combined Operations</CardTitle>
            <CardDescription>
              Applying order of operations to real situations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 1: Shopping Problem</p>
                <p className="text-sm text-slate-700 mb-2">
                  Sarah bought 3 books at 150 shillings each and 2 pens at 25 shillings each. How much did she spend in total?
                </p>
                <div className="bg-white p-3 rounded border border-blue-300 mt-2">
                  <p className="text-sm text-slate-700 mb-2">
                    <span className="font-semibold">Solution:</span>
                  </p>
                  <div className="font-mono bg-slate-50 p-2 rounded text-sm">
                    <div>3 × 150 + 2 × 25</div>
                    <div>= 450 + 50  <span className="text-muted-foreground">(First: 3 × 150 = 450, 2 × 25 = 50)</span></div>
                    <div className="text-primary font-bold">= 500 shillings</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 2: Group Problem</p>
                <p className="text-sm text-slate-700 mb-2">
                  A teacher has 48 students. She divides them into 4 groups, then gives each group 3 worksheets. How many worksheets does she need in total?
                </p>
                <div className="bg-white p-3 rounded border border-green-300 mt-2">
                  <p className="text-sm text-slate-700 mb-2">
                    <span className="font-semibold">Solution:</span>
                  </p>
                  <div className="font-mono bg-slate-50 p-2 rounded text-sm">
                    <div>48 ÷ 4 × 3</div>
                    <div>= 12 × 3  <span className="text-muted-foreground">(First: 48 ÷ 4 = 12)</span></div>
                    <div className="text-primary font-bold">= 36 worksheets</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 3: Budget Problem</p>
                <p className="text-sm text-slate-700 mb-2">
                  Tom had 500 shillings. He spent 120 shillings on lunch and bought 4 items at 45 shillings each. How much money does he have left?
                </p>
                <div className="bg-white p-3 rounded border border-purple-300 mt-2">
                  <p className="text-sm text-slate-700 mb-2">
                    <span className="font-semibold">Solution:</span>
                  </p>
                  <div className="font-mono bg-slate-50 p-2 rounded text-sm">
                    <div>500 - 120 - 4 × 45</div>
                    <div>= 500 - 120 - 180  <span className="text-muted-foreground">(First: 4 × 45 = 180)</span></div>
                    <div>= 380 - 180  <span className="text-muted-foreground">(Then: 500 - 120 = 380)</span></div>
                    <div className="text-primary font-bold">= 200 shillings</div>
                  </div>
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
              <li>Always follow BODMAS order: Brackets → Orders → Division → Multiplication → Addition → Subtraction</li>
              <li>Brackets come first - solve everything inside brackets before other operations</li>
              <li>Multiplication and Division have the same priority - work left to right</li>
              <li>Addition and Subtraction have the same priority - work left to right</li>
              <li>When in doubt, break the problem into smaller steps</li>
              <li>Check your answer by working backwards or using estimation</li>
              <li>Read word problems carefully to identify all operations needed</li>
              <li>Practice regularly to remember the order of operations</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice combined operations with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CombinedOperationsInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of combined operations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Basic Combined Operations</p>
              <p className="text-sm text-slate-700 mb-3">
                Solve these problems using BODMAS:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>5 + 3 × 4 = ?</li>
                <li>12 ÷ 3 + 2 × 5 = ?</li>
                <li>20 - 4 × 3 = ?</li>
                <li>15 ÷ 3 × 2 + 1 = ?</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: With Brackets</p>
              <p className="text-sm text-slate-700 mb-3">
                Solve these problems (remember brackets come first):
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>(10 - 3) × 4 = ?</li>
                <li>15 + (6 ÷ 2) × 3 = ?</li>
                <li>(20 - 5) ÷ 3 + 2 = ?</li>
                <li>8 × (4 + 2) - 10 = ?</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3: Word Problems</p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>John bought 5 apples at 30 shillings each and 3 oranges at 25 shillings each. How much did he spend?</li>
                <li>A school has 120 students. They are divided into 6 classes, and each class gets 8 textbooks. How many textbooks are needed?</li>
                <li>Mary had 200 shillings. She spent 50 shillings and bought 4 items at 30 shillings each. How much money does she have left?</li>
                <li>A factory produces 45 items per hour. In 8 hours, they produce items, then 60 items are sold. How many items remain?</li>
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
            Where do we use combined operations in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Shopping:</span> Calculating total cost when buying multiple items at different prices</li>
            <li><span className="font-semibold">Budgeting:</span> Managing expenses with multiple purchases and payments</li>
            <li><span className="font-semibold">Cooking:</span> Scaling recipes and calculating ingredient costs</li>
            <li><span className="font-semibold">Construction:</span> Calculating materials needed for multiple projects</li>
            <li><span className="font-semibold">Business:</span> Calculating profits, costs, and inventory with multiple factors</li>
            <li><span className="font-semibold">Time Management:</span> Calculating work hours, breaks, and schedules</li>
            <li><span className="font-semibold">Sports:</span> Calculating scores, statistics, and team formations</li>
            <li><span className="font-semibold">Agriculture:</span> Calculating crop yields, fertilizer amounts, and costs</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

