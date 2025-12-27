import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { NumberSequencesInteractive } from '@/components/interactive/number-sequences-interactive';

export default function NumberSequencesPage() {
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
            Topic 1.1.11
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Number Sequences
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn to identify patterns in number sequences, find missing terms, and create your own sequences.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Identify patterns in number sequences</li>
            <li>Find missing terms in sequences</li>
            <li>Continue sequences following the pattern</li>
            <li>Create number sequences with given rules</li>
            <li>Recognize different types of sequences (arithmetic, geometric, etc.)</li>
            <li>Apply number sequences in real-life situations</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What are Number Sequences?</CardTitle>
            <CardDescription>
              Understanding sequences and patterns
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              A <span className="font-semibold">number sequence</span> is a list of numbers that follow a specific pattern or rule. 
              Each number in the sequence is called a <span className="font-semibold">term</span>. 
              By identifying the pattern, we can find missing terms or continue the sequence.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Example:</p>
              <p className="text-sm text-slate-700 mb-2">
                2, 4, 6, 8, 10, ...
              </p>
              <p className="text-xs text-muted-foreground">
                This sequence follows the pattern: add 2 to each term to get the next term.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Types of Number Sequences</CardTitle>
            <CardDescription>
              Common patterns in sequences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">1. Arithmetic Sequences (Adding/Subtracting):</p>
              <p className="text-sm text-slate-700 mb-3">
                Each term is obtained by adding or subtracting the same number (called the <span className="font-semibold">common difference</span>).
              </p>
              
              <div className="bg-white p-4 rounded border border-blue-300">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 1: Adding the same number</p>
                <div className="font-mono text-sm space-y-2">
                  <div>5, 8, 11, 14, 17, ...</div>
                  <div className="text-muted-foreground">Pattern: Add 3 to each term</div>
                  <div className="text-primary font-semibold">Next terms: 20, 23, 26, ...</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-blue-300 mt-3">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 2: Subtracting the same number</p>
                <div className="font-mono text-sm space-y-2">
                  <div>20, 17, 14, 11, 8, ...</div>
                  <div className="text-muted-foreground">Pattern: Subtract 3 from each term</div>
                  <div className="text-primary font-semibold">Next terms: 5, 2, -1, ...</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">2. Geometric Sequences (Multiplying/Dividing):</p>
              <p className="text-sm text-slate-700 mb-3">
                Each term is obtained by multiplying or dividing by the same number (called the <span className="font-semibold">common ratio</span>).
              </p>
              
              <div className="bg-white p-4 rounded border border-green-300">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 1: Multiplying by the same number</p>
                <div className="font-mono text-sm space-y-2">
                  <div>2, 4, 8, 16, 32, ...</div>
                  <div className="text-muted-foreground">Pattern: Multiply by 2</div>
                  <div className="text-primary font-semibold">Next terms: 64, 128, 256, ...</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-green-300 mt-3">
                <p className="text-sm font-semibold mb-2 text-slate-900">Example 2: Dividing by the same number</p>
                <div className="font-mono text-sm space-y-2">
                  <div>64, 32, 16, 8, 4, ...</div>
                  <div className="text-muted-foreground">Pattern: Divide by 2 (or multiply by ½)</div>
                  <div className="text-primary font-semibold">Next terms: 2, 1, 0.5, ...</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">3. Other Patterns:</p>
              
              <div className="bg-white p-4 rounded border border-purple-300 mb-3">
                <p className="text-sm font-semibold mb-2 text-slate-900">Square Numbers:</p>
                <div className="font-mono text-sm space-y-2">
                  <div>1, 4, 9, 16, 25, ...</div>
                  <div className="text-muted-foreground">Pattern: 1², 2², 3², 4², 5², ...</div>
                  <div className="text-primary font-semibold">Next terms: 36, 49, 64, ...</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-purple-300 mb-3">
                <p className="text-sm font-semibold mb-2 text-slate-900">Triangular Numbers:</p>
                <div className="font-mono text-sm space-y-2">
                  <div>1, 3, 6, 10, 15, ...</div>
                  <div className="text-muted-foreground">Pattern: Add 2, then 3, then 4, then 5, ...</div>
                  <div className="text-primary font-semibold">Next terms: 21, 28, 36, ...</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-purple-300">
                <p className="text-sm font-semibold mb-2 text-slate-900">Alternating Patterns:</p>
                <div className="font-mono text-sm space-y-2">
                  <div>2, 5, 8, 11, 14, ...</div>
                  <div className="text-muted-foreground">Pattern: Add 3, but starting from 2</div>
                  <div className="text-primary font-semibold">Next terms: 17, 20, 23, ...</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Finding Missing Terms</CardTitle>
            <CardDescription>
              How to identify and fill in missing numbers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Find the missing term</p>
              <p className="text-sm text-slate-700 mb-2">
                Find the missing number: 5, 10, __, 20, 25, ...
              </p>
              <div className="bg-white p-4 rounded border border-blue-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Identify the pattern</p>
                  <p className="text-slate-700">Look at the known terms: 5, 10, ?, 20, 25</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Find the difference</p>
                  <p className="text-slate-700">10 - 5 = 5, and 25 - 20 = 5</p>
                  <p className="text-slate-700">Pattern: Add 5 to each term</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 3: Find the missing term</p>
                  <p className="text-slate-700">10 + 5 = 15</p>
                  <p className="text-primary font-semibold">Answer: 15</p>
                  <p className="text-slate-700">Sequence: 5, 10, 15, 20, 25, ...</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Multiple missing terms</p>
              <p className="text-sm text-slate-700 mb-2">
                Find the missing numbers: 3, __, 12, __, 27, ...
              </p>
              <div className="bg-white p-4 rounded border border-green-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Identify the pattern</p>
                  <p className="text-slate-700">Look at: 3, ?, 12, ?, 27</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Check if it's multiplication</p>
                  <p className="text-slate-700">12 ÷ 3 = 4, and 27 ÷ 12 = 2.25 (not consistent)</p>
                  <p className="text-slate-700">Let's check: 3 × ? = 12, so ? = 4</p>
                  <p className="text-slate-700">Then: 12 × ? = 27, so ? = 2.25 (not a whole number)</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 3: Try a different pattern</p>
                  <p className="text-slate-700">Maybe: 3, 6, 12, 24, 27? No, 24 × ? ≠ 27</p>
                  <p className="text-slate-700">Try: 3, 6, 12, 18, 27</p>
                  <p className="text-slate-700">Pattern: Add 3, then 6, then 6, then 9? Not consistent.</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 4: Look for multiplication pattern</p>
                  <p className="text-slate-700">3 × 2 = 6, 6 × 2 = 12, 12 × 2 = 24, but 24 × ? = 27</p>
                  <p className="text-slate-700">Actually: 3, 6, 12, 24, 48 (multiply by 2)</p>
                  <p className="text-slate-700">But we have 27, so maybe: 3, 6, 12, 18, 27 (add 3, 6, 6, 9)</p>
                  <p className="text-primary font-semibold">Answer: 6 and 18 (pattern: multiply by 2, then add 6, then multiply by 1.5)</p>
                  <p className="text-slate-700 text-xs mt-2">Actually simpler: 3, 6, 12, 18, 27 (×2, ×2, +6, +9) or 3, 6, 12, 24, 27 (×2, ×2, ×2, +3)</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Tips for Finding Missing Terms:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                <li>Look at the differences between consecutive terms</li>
                <li>Check if numbers are being multiplied or divided</li>
                <li>Look for patterns in the differences themselves</li>
                <li>Try working backwards from known terms</li>
                <li>Check if the pattern changes (e.g., add 2, then add 3, then add 4)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Continuing Sequences</CardTitle>
            <CardDescription>
              How to extend sequences following the pattern
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Continue the sequence</p>
              <p className="text-sm text-slate-700 mb-2">
                Continue: 7, 14, 21, 28, 35, ...
              </p>
              <div className="bg-white p-4 rounded border border-blue-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Identify the pattern</p>
                  <p className="text-slate-700">14 - 7 = 7, 21 - 14 = 7, 28 - 21 = 7, 35 - 28 = 7</p>
                  <p className="text-slate-700">Pattern: Add 7 to each term</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Continue the sequence</p>
                  <p className="text-slate-700">35 + 7 = 42</p>
                  <p className="text-slate-700">42 + 7 = 49</p>
                  <p className="text-slate-700">49 + 7 = 56</p>
                  <p className="text-primary font-semibold">Next terms: 42, 49, 56, 63, ...</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Geometric sequence</p>
              <p className="text-sm text-slate-700 mb-2">
                Continue: 2, 6, 18, 54, ...
              </p>
              <div className="bg-white p-4 rounded border border-green-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Identify the pattern</p>
                  <p className="text-slate-700">6 ÷ 2 = 3, 18 ÷ 6 = 3, 54 ÷ 18 = 3</p>
                  <p className="text-slate-700">Pattern: Multiply by 3</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Continue the sequence</p>
                  <p className="text-slate-700">54 × 3 = 162</p>
                  <p className="text-slate-700">162 × 3 = 486</p>
                  <p className="text-slate-700">486 × 3 = 1,458</p>
                  <p className="text-primary font-semibold">Next terms: 162, 486, 1,458, 4,374, ...</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Creating Number Sequences</CardTitle>
            <CardDescription>
              How to create sequences with given rules
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Create a sequence</p>
              <p className="text-sm text-slate-700 mb-2">
                Create a sequence starting with 5, where each term is 4 more than the previous term.
              </p>
              <div className="bg-white p-4 rounded border border-blue-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Start with the first term</p>
                  <p className="text-slate-700">First term: 5</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Apply the rule</p>
                  <p className="text-slate-700">Second term: 5 + 4 = 9</p>
                  <p className="text-slate-700">Third term: 9 + 4 = 13</p>
                  <p className="text-slate-700">Fourth term: 13 + 4 = 17</p>
                  <p className="text-slate-700">Fifth term: 17 + 4 = 21</p>
                  
                  <p className="text-primary font-semibold mt-2">Sequence: 5, 9, 13, 17, 21, 25, 29, ...</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Multiplication rule</p>
              <p className="text-sm text-slate-700 mb-2">
                Create a sequence starting with 3, where each term is 2 times the previous term.
              </p>
              <div className="bg-white p-4 rounded border border-green-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Start with the first term</p>
                  <p className="text-slate-700">First term: 3</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Apply the rule</p>
                  <p className="text-slate-700">Second term: 3 × 2 = 6</p>
                  <p className="text-slate-700">Third term: 6 × 2 = 12</p>
                  <p className="text-slate-700">Fourth term: 12 × 2 = 24</p>
                  <p className="text-slate-700">Fifth term: 24 × 2 = 48</p>
                  
                  <p className="text-primary font-semibold mt-2">Sequence: 3, 6, 12, 24, 48, 96, 192, ...</p>
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
              <li>A number sequence is a list of numbers that follow a pattern</li>
              <li>Look for patterns by finding differences or ratios between terms</li>
              <li>Arithmetic sequences: add or subtract the same number</li>
              <li>Geometric sequences: multiply or divide by the same number</li>
              <li>Some sequences have more complex patterns (squares, triangular numbers, etc.)</li>
              <li>To find missing terms, identify the pattern first</li>
              <li>To continue a sequence, apply the pattern to the last known term</li>
              <li>Practice identifying patterns to get better at sequences</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice identifying patterns and finding missing terms with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NumberSequencesInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of number sequences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Find Missing Terms</p>
              <p className="text-sm text-slate-700 mb-3">
                Find the missing numbers in these sequences:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>5, 10, __, 20, 25, __</li>
                <li>3, 6, 12, __, 48, __</li>
                <li>100, 90, 80, __, 60, __</li>
                <li>2, 5, 8, __, 14, __</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Continue Sequences</p>
              <p className="text-sm text-slate-700 mb-3">
                Write the next 3 terms in these sequences:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>7, 14, 21, 28, 35, ...</li>
                <li>1, 4, 9, 16, 25, ...</li>
                <li>64, 32, 16, 8, 4, ...</li>
                <li>1, 3, 6, 10, 15, ...</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3: Create Sequences</p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>Create a sequence starting with 8, where each term is 5 more than the previous term. Write the first 6 terms.</li>
                <li>Create a sequence starting with 2, where each term is 3 times the previous term. Write the first 5 terms.</li>
                <li>Create a sequence starting with 50, where each term is 7 less than the previous term. Write the first 5 terms.</li>
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
            Where do we use number sequences in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Time:</span> Counting seconds, minutes, hours (1, 2, 3, 4, ...)</li>
            <li><span className="font-semibold">Money:</span> Saving money regularly (10, 20, 30, 40, ...)</li>
            <li><span className="font-semibold">Growth:</span> Population growth, plant growth patterns</li>
            <li><span className="font-semibold">Sports:</span> Scoring patterns, game schedules</li>
            <li><span className="font-semibold">Music:</span> Musical patterns and rhythms</li>
            <li><span className="font-semibold">Calendar:</span> Days of the week, months, years</li>
            <li><span className="font-semibold">Construction:</span> Building patterns, tile arrangements</li>
            <li><span className="font-semibold">Technology:</span> Computer algorithms, data patterns</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

