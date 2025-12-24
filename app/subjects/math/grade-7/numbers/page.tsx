import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MathRenderer } from '@/components/math/math-renderer';

export default function Grade7NumbersPage() {
  return (
    <section className="space-y-10">
      {/* Strand intro */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Strand 1.0
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Numbers
        </h2>
        <p className="text-sm text-muted-foreground max-w-3xl">
          This strand follows <span className="font-semibold">STRAND 1.0:
          NUMBERS</span> of the Grade 7 Mathematics CBC design. It includes the
          sub-strands: Whole Numbers, Factors, Fractions, Decimals, and Squares
          &amp; Square Roots.
        </p>
      </div>

      {/* Sub-strand 1.1 – Whole Numbers */}
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Sub-strand 1.1
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
            Whole Numbers
          </h3>
          <p className="text-sm text-muted-foreground max-w-3xl">
            Place value and total value up to hundreds of millions, reading and
            writing numbers in symbols and words, rounding off, classifying
            numbers (even, odd, prime), operations, and number sequences.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Quick Concept */}
          <Card className="border-primary/10 shadow-sm">
            <CardHeader>
              <CardTitle>Quick Concept</CardTitle>
              <CardDescription className="text-sm">
                Place Value &amp; Rounding (up to hundreds of millions)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p>
                  A digit&apos;s <span className="font-semibold">place
                  value</span> tells its position (ones, tens, hundreds, …,
                  millions). The <span className="font-semibold">total
                  value</span> is the digit &times; its place value.
                </p>
                <p className="text-primary font-semibold">Example</p>
                <p>
                  In the number{' '}
                  <MathRenderer>{'572\\,648\\,319'}</MathRenderer>:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    The <span className="font-semibold">7</span> is in the ten
                    millions place, so its total value is{' '}
                    <MathRenderer>{'70\\,000\\,000'}</MathRenderer>.
                  </li>
                  <li>
                    The <span className="font-semibold">3</span> is in the tens
                    place, so its total value is{' '}
                    <MathRenderer>{'30'}</MathRenderer>.
                  </li>
                </ul>
                <p className="text-primary font-semibold mt-2">
                  Rounding example
                </p>
                <p>
                  Round <MathRenderer>{'572\\,648\\,319'}</MathRenderer> to the
                  nearest million. Look at the hundred-thousands digit (6): it
                  is 5 or more, so we round up:
                </p>
                <div>
                  <MathRenderer display>
                    {'572\\,648\\,319 \\approx 573\\,000\\,000'}
                  </MathRenderer>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Practice Question */}
          <Card className="border-primary/10 shadow-sm">
            <CardHeader>
              <CardTitle>Practice Question</CardTitle>
              <CardDescription className="text-sm">
                Whole numbers &amp; sequences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-sm text-slate-800">
                <li>
                  For the number{' '}
                  <MathRenderer>{'408\\,375\\,962'}</MathRenderer>, write:
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      the place value and total value of the digit{' '}
                      <span className="font-semibold">8</span>.
                    </li>
                    <li>
                      the number in words.
                    </li>
                  </ul>
                </li>
                <li>
                  Round{' '}
                  <MathRenderer>{'408\\,375\\,962'}</MathRenderer> to the nearest
                  hundred million and to the nearest thousand.
                </li>
                <li>
                  Classify the numbers{' '}
                  <MathRenderer>{'27,\\; 41,\\; 56,\\; 73'}</MathRenderer> as
                  even, odd or prime.
                </li>
                <li>
                  Complete the number sequence and describe the rule:
                  <br />
                  <MathRenderer>
                    {'9,\\; 18,\\; 27,\\; 36,\\; \\square,\\; \\square'}
                  </MathRenderer>
                </li>
              </ol>
              <div className="mt-3 text-xs text-muted-foreground">
                Tip: Encourage learners to use place value charts, number cards
                and simple digital tools to explore very large numbers and
                patterns.
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning outcomes & competencies */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-primary/10 bg-white/60">
            <CardHeader>
              <CardTitle className="text-sm">
                Learning Outcomes &amp; Experiences
              </CardTitle>
              <CardDescription className="text-xs">
                Based on the Grade 7 design – Whole Numbers (20 lessons)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs font-semibold mb-1">By the end, learners should be able to:</p>
              <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                <li>
                  Use place value and total value of digits up to hundreds of
                  millions in real life.
                </li>
                <li>
                  Read and write numbers in symbols and in words (up to
                  millions).
                </li>
                <li>
                  Round off numbers up to the nearest hundreds of millions.
                </li>
                <li>
                  Classify natural numbers as even, odd and prime.
                </li>
                <li>
                  Apply operations of whole numbers in real-life situations.
                </li>
                <li>
                  Identify and create number sequences and use IT devices to
                  explore whole numbers.
                </li>
              </ul>
              <p className="text-xs font-semibold mt-3 mb-1">Suggested learning experiences:</p>
              <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                <li>
                  Use place value apparatus and charts to read, write and round
                  numbers.
                </li>
                <li>
                  Write numbers in words on cards and practise writing dummy
                  cheques for different sums of money.
                </li>
                <li>
                  Play games that involve making and sorting number cards into
                  even, odd and prime.
                </li>
                <li>
                  Use simple digital devices to practise combined operations and
                  number sequences.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/10 bg-white/60">
            <CardHeader>
              <CardTitle className="text-sm">
                Core Competencies, Values &amp; Assessment Focus
              </CardTitle>
              <CardDescription className="text-xs">
                Summary aligned with the curriculum design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs font-semibold mb-1">Core competencies:</p>
              <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                <li>
                  <span className="font-semibold">Communication &amp; collaboration</span> – pair/group work with
                  place value charts and rounding.
                </li>
                <li>
                  <span className="font-semibold">Critical thinking &amp; problem solving</span> – identifying and
                  extending number patterns.
                </li>
                <li>
                  <span className="font-semibold">Creativity &amp; imagination</span> – creating number puzzles and
                  games involving sequences.
                </li>
              </ul>

              <p className="text-xs font-semibold mt-3 mb-1">Values:</p>
              <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                <li>Respect and unity as learners work in groups and play number games.</li>
                <li>Peace as they share roles and support one another.</li>
              </ul>

              <p className="text-xs font-semibold mt-3 mb-1">Pertinent &amp; contemporary issues:</p>
              <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                <li>Financial literacy – writing dummy cheques and large money amounts.</li>
                <li>Self-esteem – success in creating and solving number puzzles.</li>
              </ul>

              <p className="text-xs font-semibold mt-3 mb-1">Assessment lens (rubric focus):</p>
              <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                <li>
                  Accurate use of place value and total value up to hundreds of millions.
                </li>
                <li>
                  Correct reading/writing of numbers in symbols and words up to millions.
                </li>
                <li>
                  Correct rounding, correct classification (even/odd/prime), and correct
                  application of operations and sequences.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional sub-strands placeholders – to be detailed later */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Other sub-strands in Strand 1.0 (to be expanded next)
        </h3>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Next, we will build dedicated blocks for the remaining sub-strands in
          <span className="font-semibold"> STRAND 1.0: NUMBERS</span>:
          Factors (1.2), Fractions (1.3), Decimals (1.4) and Squares &amp;
          Square Roots (1.5), mirroring the learning outcomes, suggested
          experiences and assessment rubrics in the curriculum design.
        </p>
      </div>
    </section>
  );
}

