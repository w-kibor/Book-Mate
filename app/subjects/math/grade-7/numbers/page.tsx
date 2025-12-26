import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';

type Topic = {
  id: string;
  title: string;
};

type SubStrand = {
  id: string;
  number: string;
  title: string;
  description: string;
  lessons: number;
  topics: Topic[];
};

const subStrands: SubStrand[] = [
  {
    id: 'whole-numbers',
    number: '1.1',
    title: 'Whole Numbers',
    description:
      'Place value, reading/writing numbers, rounding, classification (even/odd/prime), operations, and number sequences.',
    lessons: 20,
    topics: [
      { id: '1.1.1', title: 'Place Value of Digits in a Number' },
      { id: '1.1.2', title: 'Total value of digits in a number' },
      { id: '1.1.3', title: 'Reading and Writing Numbers in Symbols' },
      { id: '1.1.4', title: 'Reading and Writing Numbers in Words' },
      { id: '1.1.5', title: 'Rounding off Numbers' },
      { id: '1.1.6', title: 'Natural Numbers. Even and Odd Numbers' },
      { id: '1.1.7', title: 'Natural Numbers. Prime Numbers' },
      { id: '1.1.8', title: 'Operations of Whole Numbers. Addition and Subtraction' },
      { id: '1.1.9', title: 'Operation of Whole Numbers. Multiplication and Division' },
      { id: '1.1.10', title: 'Operations of Whole Numbers. Combined Operations' },
      { id: '1.1.11', title: 'Number Sequences' },
    ],
  },
  {
    id: 'factors',
    number: '1.2',
    title: 'Factors',
    description:
      'Divisibility tests, prime factorization, Greatest Common Divisor (GCD), and Least Common Multiples (LCM).',
    lessons: 7,
    topics: [
      { id: '1.2.1', title: 'Divisibility test of 2, 3, 4' },
      { id: '1.2.2', title: 'Divisibility test of 5, 6, 8' },
      { id: '1.2.3', title: 'Divisibility test of 9, 10, 11' },
      { id: '1.2.4', title: 'Expressing a Number as a Product of its Prime Factors' },
      { id: '1.2.5', title: 'Greatest Common Divisor (GCD)' },
      { id: '1.2.6', title: 'Applying the Greatest Common Divisor (GCD)' },
      { id: '1.2.7', title: 'Least Common Multiples (LCM)' },
      { id: '1.2.8', title: 'Applying the Least Common Multiples (LCM)' },
    ],
  },
  {
    id: 'fractions',
    number: '1.3',
    title: 'Fractions',
    description:
      'Comparing, adding, subtracting, multiplying, and dividing fractions. Reciprocals and number sequences with fractions.',
    lessons: 9,
    topics: [
      { id: '1.3.1', title: 'Comparing Fractions' },
      { id: '1.3.2', title: 'Adding Fractions' },
      { id: '1.3.3', title: 'Subtracting Fractions' },
      { id: '1.3.4', title: 'Multiplying a fraction by a whole number' },
      { id: '1.3.5', title: 'Multiplying a fraction by a fraction' },
      { id: '1.3.6', title: 'Reciprocal of a Fraction' },
      { id: '1.3.7', title: 'Dividing a fraction by a whole number' },
      { id: '1.3.8', title: 'Dividing a fraction by a fraction' },
      { id: '1.3.9', title: 'Dividing a whole number by a fraction' },
      { id: '1.3.10', title: 'Number Sequences Involving Fractions' },
    ],
  },
  {
    id: 'decimals',
    number: '1.4',
    title: 'Decimals',
    description:
      'Place value and total value of decimals, multiplying and dividing decimals by whole numbers and decimals.',
    lessons: 4,
    topics: [
      { id: '1.4.1', title: 'Place Value of Digits in a Decimal' },
      { id: '1.4.2', title: 'Total Value of Digits in a Decimal' },
      { id: '1.4.3', title: 'Multiplying a Decimal by a Whole Number' },
      { id: '1.4.4', title: 'Multiplying a Decimal by a Decimal' },
      { id: '1.4.5', title: 'Dividing a Decimal by a Whole Number' },
      { id: '1.4.6', title: 'Dividing a Decimal by a Decimal' },
    ],
  },
  {
    id: 'squares-square-roots',
    number: '1.5',
    title: 'Squares and Square Roots',
    description:
      'Finding squares and square roots of whole numbers, fractions, and decimals.',
    lessons: 5,
    topics: [
      { id: '1.5.1', title: 'Squares of Whole Numbers' },
      { id: '1.5.2', title: 'Squares of Fractions' },
      { id: '1.5.3', title: 'Squares of Decimals' },
      { id: '1.5.4', title: 'Square Roots of Whole Numbers' },
      { id: '1.5.5', title: 'Square Roots of Fractions' },
      { id: '1.5.6', title: 'Square Roots of Decimals' },
    ],
  },
];

export default function Grade7NumbersPage() {
  return (
    <section className="space-y-8">
      {/* Strand Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Strand 1.0
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Numbers
        </h2>
        <p className="text-sm text-muted-foreground max-w-3xl">
          This strand covers five sub-strands: Whole Numbers, Factors, Fractions,
          Decimals, and Squares &amp; Square Roots. Each sub-strand is broken down
          into specific topics that align with the Grade 7 Mathematics CBC curriculum
          design.
        </p>
      </div>

      {/* Sub-strands Overview */}
      <div className="space-y-6">
        {subStrands.map((subStrand) => (
          <Card
            key={subStrand.id}
            className="border-2 border-primary/20 hover:border-primary/40 transition-colors shadow-sm"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                      Sub-strand {subStrand.number}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {subStrand.lessons} lessons
                    </span>
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-2">
                    {subStrand.title}
                  </CardTitle>
                  <CardDescription className="text-sm max-w-2xl">
                    {subStrand.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-700">
                  Topics ({subStrand.topics.length}):
                </p>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {subStrand.topics.map((topic, index) => (
                    <div
                      key={topic.id}
                      className="group flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                    >
                      <span className="text-xs font-mono text-muted-foreground min-w-[3rem]">
                        {topic.id}
                      </span>
                      <span className="text-sm text-slate-700 group-hover:text-primary transition-colors flex-1">
                        {topic.title}
                      </span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    <Link href={`/subjects/math/grade-7/numbers/${subStrand.id}`}>
                      Explore {subStrand.title}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Navigation */}
      <Card className="border-dashed border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-sm">Quick Navigation</CardTitle>
          <CardDescription className="text-xs">
            Start with any sub-strand to begin learning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {subStrands.map((subStrand) => (
              <Button
                key={subStrand.id}
                asChild
                variant="secondary"
                size="sm"
              >
                <Link href={`/subjects/math/grade-7/numbers/${subStrand.id}`}>
                  {subStrand.number} {subStrand.title}
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
