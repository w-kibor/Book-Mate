import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { ComparingFractionsInteractive } from '@/components/interactive/comparing-fractions-interactive';

export default function ComparingFractionsPage() {
  return (
    <section className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/subjects/math/grade-7/numbers/fractions">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Fractions
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Topic 1.3.1
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Comparing Fractions
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn different methods to compare fractions and determine which fraction is larger, smaller, or equal.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Compare fractions using common denominators</li>
            <li>Compare fractions using cross multiplication</li>
            <li>Compare fractions using visual models</li>
            <li>Order fractions from least to greatest and greatest to least</li>
            <li>Identify equivalent fractions</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What Does Comparing Fractions Mean?</CardTitle>
            <CardDescription>
              Understanding the concept
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              Comparing fractions means determining which fraction is <span className="font-semibold">larger</span>, 
              <span className="font-semibold"> smaller</span>, or if they are <span className="font-semibold">equal</span>. 
              We use symbols: <span className="font-mono font-bold">&gt;</span> (greater than), 
              <span className="font-mono font-bold"> &lt;</span> (less than), or 
              <span className="font-mono font-bold"> =</span> (equal to).
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Example:</p>
              <p className="text-sm text-slate-700">
                <MathRenderer display={false}>$\frac{3}{4} &gt; \frac{1}{2}$</MathRenderer> means three-fourths is greater than one-half
              </p>
              <p className="text-sm text-slate-700 mt-2">
                <MathRenderer display={false}>$\frac{1}{3} &lt; \frac{2}{3}$</MathRenderer> means one-third is less than two-thirds
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Method 1: Common Denominators</CardTitle>
            <CardDescription>
              Convert fractions to have the same denominator
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              When fractions have the same denominator, the fraction with the larger numerator is larger. 
              If denominators are different, find a common denominator first.
            </p>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Compare <MathRenderer display={false}>$\frac{3}{4}$</MathRenderer> and <MathRenderer display={false}>$\frac{5}{8}$</MathRenderer></p>
              <div className="bg-white p-4 rounded border border-green-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Find a common denominator</p>
                  <p className="text-slate-700">LCM of 4 and 8 = 8</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Convert both fractions</p>
                  <p className="text-slate-700"><MathRenderer display={false}>$\frac{3}{4} = \frac{3 \times 2}{4 \times 2} = \frac{6}{8}$</MathRenderer></p>
                  <p className="text-slate-700"><MathRenderer display={false}>$\frac{5}{8} = \frac{5}{8}$</MathRenderer> (already has denominator 8)</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 3: Compare numerators</p>
                  <p className="text-slate-700"><MathRenderer display={false}>$\frac{6}{8} &gt; \frac{5}{8}$</MathRenderer> because 6 &gt; 5</p>
                  
                  <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>$\frac{3}{4} &gt; \frac{5}{8}$</MathRenderer></p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Compare <MathRenderer display={false}>$\frac{2}{5}$</MathRenderer> and <MathRenderer display={false}>$\frac{3}{7}$</MathRenderer></p>
              <div className="bg-white p-4 rounded border border-green-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Find a common denominator</p>
                  <p className="text-slate-700">LCM of 5 and 7 = 35</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Convert both fractions</p>
                  <p className="text-slate-700"><MathRenderer display={false}>$\frac{2}{5} = \frac{2 \times 7}{5 \times 7} = \frac{14}{35}$</MathRenderer></p>
                  <p className="text-slate-700"><MathRenderer display={false}>$\frac{3}{7} = \frac{3 \times 5}{7 \times 5} = \frac{15}{35}$</MathRenderer></p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 3: Compare numerators</p>
                  <p className="text-slate-700"><MathRenderer display={false}>$\frac{14}{35} &lt; \frac{15}{35}$</MathRenderer> because 14 &lt; 15</p>
                  
                  <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>$\frac{2}{5} &lt; \frac{3}{7}$</MathRenderer></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Method 2: Cross Multiplication</CardTitle>
            <CardDescription>
              A quick method for comparing two fractions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              Cross multiplication is a quick way to compare two fractions without finding a common denominator.
            </p>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">How it works:</p>
              <p className="text-sm text-slate-700 mb-3">
                To compare <MathRenderer display={false}>$\frac{a}{b}$</MathRenderer> and <MathRenderer display={false}>$\frac{c}{d}$</MathRenderer>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>Multiply: a × d and b × c</li>
                <li>If a × d &gt; b × c, then <MathRenderer display={false}>$\frac{a}{b} &gt; \frac{c}{d}$</MathRenderer></li>
                <li>If a × d &lt; b × c, then <MathRenderer display={false}>$\frac{a}{b} &lt; \frac{c}{d}$</MathRenderer></li>
                <li>If a × d = b × c, then <MathRenderer display={false}>$\frac{a}{b} = \frac{c}{d}$</MathRenderer></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-purple-300">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example: Compare <MathRenderer display={false}>$\frac{3}{4}$</MathRenderer> and <MathRenderer display={false}>$\frac{5}{7}$</MathRenderer></p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-slate-700">Step 1: Cross multiply</p>
                <p className="text-slate-700">3 × 7 = 21</p>
                <p className="text-slate-700">4 × 5 = 20</p>
                
                <p className="font-semibold text-slate-700 mt-3">Step 2: Compare the products</p>
                <p className="text-slate-700">21 &gt; 20</p>
                
                <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>$\frac{3}{4} &gt; \frac{5}{7}$</MathRenderer></p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Method 3: Visual Models</CardTitle>
            <CardDescription>
              Using diagrams to compare fractions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              Drawing visual models (like circles or rectangles divided into equal parts) can help you see which fraction is larger.
            </p>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example: Compare <MathRenderer display={false}>$\frac{2}{3}$</MathRenderer> and <MathRenderer display={false}>$\frac{3}{4}$</MathRenderer></p>
              <div className="bg-white p-4 rounded border border-yellow-300">
                <div className="space-y-3 text-sm">
                  <p className="text-slate-700">Draw two identical shapes (circles or rectangles)</p>
                  <p className="text-slate-700">Divide the first into 3 equal parts, shade 2 parts → <MathRenderer display={false}>$\frac{2}{3}$</MathRenderer></p>
                  <p className="text-slate-700">Divide the second into 4 equal parts, shade 3 parts → <MathRenderer display={false}>$\frac{3}{4}$</MathRenderer></p>
                  <p className="text-slate-700">Compare the shaded areas visually</p>
                  <p className="text-primary font-semibold mt-2">You'll see that <MathRenderer display={false}>$\frac{3}{4}$</MathRenderer> has more shaded area, so <MathRenderer display={false}>$\frac{3}{4} &gt; \frac{2}{3}$</MathRenderer></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ordering Fractions</CardTitle>
            <CardDescription>
              Arranging fractions from least to greatest or greatest to least
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example: Order from least to greatest: <MathRenderer display={false}>$\frac{1}{2}, \frac{3}{4}, \frac{2}{5}$</MathRenderer></p>
              <div className="bg-white p-4 rounded border border-blue-300">
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Find a common denominator</p>
                  <p className="text-slate-700">LCM of 2, 4, and 5 = 20</p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Convert all fractions</p>
                  <p className="text-slate-700"><MathRenderer display={false}>$\frac{1}{2} = \frac{10}{20}$</MathRenderer></p>
                  <p className="text-slate-700"><MathRenderer display={false}>$\frac{3}{4} = \frac{15}{20}$</MathRenderer></p>
                  <p className="text-slate-700"><MathRenderer display={false}>$\frac{2}{5} = \frac{8}{20}$</MathRenderer></p>
                  
                  <p className="font-semibold text-slate-700 mt-3">Step 3: Compare numerators</p>
                  <p className="text-slate-700">8 &lt; 10 &lt; 15</p>
                  
                  <p className="text-primary font-semibold mt-3">Answer: <MathRenderer display={false}>$\frac{2}{5} &lt; \frac{1}{2} &lt; \frac{3}{4}$</MathRenderer></p>
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
              <li>When denominators are the same, compare numerators (larger numerator = larger fraction)</li>
              <li>When denominators are different, find a common denominator first</li>
              <li>Cross multiplication is a quick method for comparing two fractions</li>
              <li>Visual models can help you understand which fraction is larger</li>
              <li>To order multiple fractions, convert them all to have the same denominator</li>
              <li>Practice with different methods to find which one works best for you</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice comparing fractions with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ComparingFractionsInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of comparing fractions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Compare using common denominators</p>
              <p className="text-sm text-slate-700 mb-3">
                Compare these pairs of fractions:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li><MathRenderer display={false}>$\frac{3}{5}$</MathRenderer> and <MathRenderer display={false}>$\frac{4}{7}$</MathRenderer></li>
                <li><MathRenderer display={false}>$\frac{2}{3}$</MathRenderer> and <MathRenderer display={false}>$\frac{5}{8}$</MathRenderer></li>
                <li><MathRenderer display={false}>$\frac{1}{4}$</MathRenderer> and <MathRenderer display={false}>$\frac{3}{10}$</MathRenderer></li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Use cross multiplication</p>
              <p className="text-sm text-slate-700 mb-3">
                Compare using cross multiplication:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li><MathRenderer display={false}>$\frac{4}{9}$</MathRenderer> and <MathRenderer display={false}>$\frac{5}{11}$</MathRenderer></li>
                <li><MathRenderer display={false}>$\frac{7}{12}$</MathRenderer> and <MathRenderer display={false}>$\frac{3}{5}$</MathRenderer></li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3: Order fractions</p>
              <p className="text-sm text-slate-700 mb-3">
                Order from least to greatest:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li><MathRenderer display={false}>$\frac{1}{3}, \frac{2}{5}, \frac{3}{8}$</MathRenderer></li>
                <li><MathRenderer display={false}>$\frac{5}{6}, \frac{3}{4}, \frac{7}{12}$</MathRenderer></li>
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
            Where do we compare fractions in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Cooking:</span> Comparing recipe measurements to see which uses more of an ingredient</li>
            <li><span className="font-semibold">Shopping:</span> Comparing discounts and sale prices</li>
            <li><span className="font-semibold">Sports:</span> Comparing win rates and statistics</li>
            <li><span className="font-semibold">Time Management:</span> Comparing how much time is spent on different activities</li>
            <li><span className="font-semibold">Sharing:</span> Determining fair portions when dividing items</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

