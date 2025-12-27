import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { SidesRightTriangleInteractive } from '@/components/interactive/sides-right-triangle-interactive';

export default function SidesRightTrianglePage() {
  return (
    <section className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/subjects/math/grade-7/measurements/pythagorean-relationship">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Pythagorean Relationship
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Topic 9.1
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Sides of a Right-angled Triangle
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn to identify and name the sides of a right-angled triangle: the hypotenuse, adjacent side, and opposite side.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Identify right-angled triangles</li>
            <li>Name the three sides: hypotenuse, opposite, and adjacent</li>
            <li>Understand which side is the hypotenuse</li>
            <li>Identify opposite and adjacent sides relative to an angle</li>
            <li>Apply knowledge to solve problems involving right triangles</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What is a Right-angled Triangle?</CardTitle>
            <CardDescription>
              Understanding right triangles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              A <span className="font-semibold">right-angled triangle</span> (also called a right triangle) is a triangle 
              that has one angle measuring exactly 90 degrees. This 90-degree angle is called the <span className="font-semibold">right angle</span>, 
              and it's usually marked with a small square in diagrams.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Characteristics:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 ml-4">
                <li>Has exactly one right angle (90°)</li>
                <li>The side opposite the right angle is called the <span className="font-semibold">hypotenuse</span></li>
                <li>The other two sides are called <span className="font-semibold">legs</span> or <span className="font-semibold">catheti</span></li>
                <li>The hypotenuse is always the longest side</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>The Three Sides of a Right Triangle</CardTitle>
            <CardDescription>
              Naming the sides correctly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">1. The Hypotenuse</p>
              <div className="bg-white p-4 rounded border border-green-300">
                <p className="text-sm text-slate-700 mb-2">
                  The <span className="font-semibold">hypotenuse</span> is the side opposite the right angle. 
                  It is always the longest side of the right triangle.
                </p>
                <p className="text-xs text-muted-foreground">
                  In diagrams, the hypotenuse is usually labeled as "c" or "hyp".
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">2. The Opposite Side</p>
              <div className="bg-white p-4 rounded border border-purple-300">
                <p className="text-sm text-slate-700 mb-2">
                  The <span className="font-semibold">opposite side</span> is the side opposite to a given angle 
                  (not the right angle). It's "opposite" relative to the angle you're considering.
                </p>
                <p className="text-xs text-muted-foreground">
                  The opposite side is perpendicular to the adjacent side.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">3. The Adjacent Side</p>
              <div className="bg-white p-4 rounded border border-yellow-300">
                <p className="text-sm text-slate-700 mb-2">
                  The <span className="font-semibold">adjacent side</span> is the side next to a given angle 
                  (not the right angle). It's the side that forms the angle along with the hypotenuse.
                </p>
                <p className="text-xs text-muted-foreground">
                  The adjacent side touches both the angle and the right angle.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Visual Example</CardTitle>
            <CardDescription>
              Identifying sides in a right triangle
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Example Triangle:</p>
              <div className="bg-white p-4 rounded border border-blue-300">
                <div className="text-sm text-slate-700 space-y-3">
                  <p>Consider a right triangle with angle A (not the right angle).</p>
                  <div className="border-l-4 border-primary pl-3 space-y-1">
                    <p className="font-semibold">• Hypotenuse (c):</p>
                    <p className="ml-4">The side opposite the right angle. Always the longest side.</p>
                    <p className="font-semibold mt-2">• Opposite side (a):</p>
                    <p className="ml-4">The side opposite to angle A. It doesn't touch angle A.</p>
                    <p className="font-semibold mt-2">• Adjacent side (b):</p>
                    <p className="ml-4">The side next to angle A. It forms angle A along with the hypotenuse.</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Note: The names "opposite" and "adjacent" depend on which angle you're referring to. 
                    The hypotenuse is always opposite the right angle.
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
              <li>A right-angled triangle has exactly one 90-degree angle</li>
              <li>The hypotenuse is always opposite the right angle and is the longest side</li>
              <li>The opposite and adjacent sides depend on which angle you're considering</li>
              <li>The adjacent side touches the angle, while the opposite side doesn't</li>
              <li>Always identify the right angle first to find the hypotenuse</li>
              <li>Practice labeling triangles to become more familiar with the terms</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice identifying the sides of right-angled triangles with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SidesRightTriangleInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of right triangle sides
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Identifying Sides</p>
              <p className="text-sm text-slate-700 mb-3">
                In a right-angled triangle:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>Which side is always the longest?</li>
                <li>Which side is opposite the right angle?</li>
                <li>How do you identify the opposite side relative to an angle?</li>
                <li>How do you identify the adjacent side relative to an angle?</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Labeling Triangles</p>
              <p className="text-sm text-slate-700 mb-3">
                Draw a right-angled triangle and label:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>The right angle</li>
                <li>The hypotenuse</li>
                <li>The opposite side (relative to one of the acute angles)</li>
                <li>The adjacent side (relative to the same acute angle)</li>
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
            Where do we see right-angled triangles in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Construction:</span> Ensuring walls meet at right angles</li>
            <li><span className="font-semibold">Carpentry:</span> Making square corners and frames</li>
            <li><span className="font-semibold">Architecture:</span> Designing buildings with right angles</li>
            <li><span className="font-semibold">Navigation:</span> Calculating distances and directions</li>
            <li><span className="font-semibold">Engineering:</span> Structural design and measurements</li>
            <li><span className="font-semibold">Surveying:</span> Measuring land and distances</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

