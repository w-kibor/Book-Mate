import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function WholeNumbersPage() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/subjects/math/grade-7/numbers">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Numbers
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Sub-strand 1.1 • 20 lessons
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Whole Numbers
        </h2>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Place value and total value up to hundreds of millions, reading and writing numbers in symbols and words, rounding off, classifying numbers (even, odd, prime), operations, and number sequences.
        </p>
      </div>

      <Card className="border-dashed border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-sm">Topics in this sub-strand</CardTitle>
          <CardDescription className="text-xs">
            Click on a topic to view detailed content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
              <Link 
                href="/subjects/math/grade-7/numbers/whole-numbers/place-value"
                className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-primary group-hover:text-primary/90">
                      1.1.1 Place Value of Digits in a Number
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Learn place value with interactive practice →
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </Link>
              <Link 
                href="/subjects/math/grade-7/numbers/whole-numbers/total-value"
                className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-primary group-hover:text-primary/90">
                      1.1.2 Total value of digits in a number
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Learn total value with interactive practice →
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </Link>
              <Link 
                href="/subjects/math/grade-7/numbers/whole-numbers/reading-writing-symbols"
                className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-primary group-hover:text-primary/90">
                      1.1.3 Reading and Writing Numbers in Symbols
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Learn to read and write numbers in symbols →
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </Link>
              <Link 
                href="/subjects/math/grade-7/numbers/whole-numbers/reading-writing-words"
                className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-primary group-hover:text-primary/90">
                      1.1.4 Reading and Writing Numbers in Words
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Learn to read and write numbers in words →
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </Link>
              <Link 
                href="/subjects/math/grade-7/numbers/whole-numbers/rounding"
                className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-primary group-hover:text-primary/90">
                      1.1.5 Rounding off Numbers
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Learn to round numbers with interactive practice →
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </Link>
              <Link 
                href="/subjects/math/grade-7/numbers/whole-numbers/even-odd-numbers"
                className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-primary group-hover:text-primary/90">
                      1.1.6 Natural Numbers. Even and Odd Numbers
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Learn to classify even and odd numbers →
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </Link>
              <Link 
                href="/subjects/math/grade-7/numbers/whole-numbers/prime-numbers"
                className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-primary group-hover:text-primary/90">
                      1.1.7 Natural Numbers. Prime Numbers
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Learn to identify and classify prime numbers →
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </Link>
              <Link 
                href="/subjects/math/grade-7/numbers/whole-numbers/addition-subtraction"
                className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-primary group-hover:text-primary/90">
                      1.1.8 Operations of Whole Numbers. Addition and Subtraction
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Master addition and subtraction with interactive practice →
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </Link>
              <Link 
                href="/subjects/math/grade-7/numbers/whole-numbers/multiplication-division"
                className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-primary group-hover:text-primary/90">
                      1.1.9 Operation of Whole Numbers. Multiplication and Division
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Master multiplication and division with interactive practice →
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </Link>
              <Link 
                href="/subjects/math/grade-7/numbers/whole-numbers/combined-operations"
                className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-primary group-hover:text-primary/90">
                      1.1.10 Operations of Whole Numbers. Combined Operations
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Master order of operations (BODMAS) with interactive practice →
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </Link>
              <Link 
                href="/subjects/math/grade-7/numbers/whole-numbers/number-sequences"
                className="block p-4 rounded-lg hover:bg-primary/10 transition-all border-2 border-primary/30 hover:border-primary/50 bg-primary/5 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-primary group-hover:text-primary/90">
                      1.1.11 Number Sequences
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Learn to identify patterns and find missing terms →
                    </p>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </Link>
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Click on any topic to begin learning with interactive practice!
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

