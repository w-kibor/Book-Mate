import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { PrimeNumbersInteractive } from '@/components/interactive/prime-numbers-interactive';

export default function PrimeNumbersPage() {
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
            Topic 1.1.7
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Natural Numbers: Prime Numbers
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn to identify, classify, and work with prime numbers. Understand what makes a number prime and how to find prime numbers.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Understand what prime numbers are</li>
            <li>Identify prime numbers up to 100</li>
            <li>Distinguish between prime and composite numbers</li>
            <li>Use methods to test if a number is prime</li>
            <li>Apply knowledge of prime numbers in different situations</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What are Prime Numbers?</CardTitle>
            <CardDescription>
              Understanding prime numbers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              A <span className="font-semibold">prime number</span> is a natural number greater than 1 that has exactly two factors: 
              1 and itself. This means it can only be divided evenly by 1 and itself.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Definition:</p>
              <p className="text-sm text-slate-700">
                A prime number is a number greater than 1 that has <span className="font-semibold">only two factors</span>: 1 and the number itself.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Note: 1 is NOT a prime number because it only has one factor (itself).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Examples of Prime Numbers:</p>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71].map((num) => (
                  <div key={num} className="bg-white p-2 rounded border border-green-300 text-center">
                    <span className="text-sm font-bold text-green-700">{num}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                These are the first 20 prime numbers. Notice they all have exactly 2 factors.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Identify Prime Numbers</CardTitle>
            <CardDescription>
              Methods to test if a number is prime
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Is 7 a prime number?</p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: List all factors of 7</p>
                  <p className="text-slate-700">Try dividing 7 by numbers less than 7:</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                    <li>7 ÷ 1 = 7 ✓</li>
                    <li>7 ÷ 2 = 3.5 ✗ (not a whole number)</li>
                    <li>7 ÷ 3 = 2.33... ✗ (not a whole number)</li>
                    <li>7 ÷ 4 = 1.75 ✗ (not a whole number)</li>
                    <li>7 ÷ 5 = 1.4 ✗ (not a whole number)</li>
                    <li>7 ÷ 6 = 1.17... ✗ (not a whole number)</li>
                    <li>7 ÷ 7 = 1 ✓</li>
                  </ul>
                  <p className="text-slate-700 mt-2">
                    <span className="font-semibold">Factors of 7:</span> 1 and 7 only
                  </p>
                  <p className="text-green-700 font-semibold mt-2">
                    ✓ 7 is a prime number (has exactly 2 factors)
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Is 12 a prime number?</p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: List all factors of 12</p>
                  <p className="text-slate-700">Try dividing 12 by numbers:</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                    <li>12 ÷ 1 = 12 ✓</li>
                    <li>12 ÷ 2 = 6 ✓</li>
                    <li>12 ÷ 3 = 4 ✓</li>
                    <li>12 ÷ 4 = 3 ✓</li>
                    <li>12 ÷ 6 = 2 ✓</li>
                    <li>12 ÷ 12 = 1 ✓</li>
                  </ul>
                  <p className="text-slate-700 mt-2">
                    <span className="font-semibold">Factors of 12:</span> 1, 2, 3, 4, 6, and 12
                  </p>
                  <p className="text-red-700 font-semibold mt-2">
                    ✗ 12 is NOT a prime number (has more than 2 factors - it's a composite number)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prime Numbers vs Composite Numbers</CardTitle>
            <CardDescription>
              Understanding the difference
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-slate-300 px-3 py-2 text-left">Type</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Definition</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Number of Factors</th>
                      <th className="border border-slate-300 px-3 py-2 text-left">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2 font-semibold text-green-700">Prime Number</td>
                      <td className="border border-slate-300 px-3 py-2">Has exactly 2 factors (1 and itself)</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">2</td>
                      <td className="border border-slate-300 px-3 py-2">2, 3, 5, 7, 11, 13, 17, 19, 23, ...</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2 font-semibold text-blue-700">Composite Number</td>
                      <td className="border border-slate-300 px-3 py-2">Has more than 2 factors</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">3 or more</td>
                      <td className="border border-slate-300 px-3 py-2">4, 6, 8, 9, 10, 12, 14, 15, 16, ...</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-3 py-2 font-semibold text-slate-600">1 (Special Case)</td>
                      <td className="border border-slate-300 px-3 py-2">Has only 1 factor (itself)</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">1</td>
                      <td className="border border-slate-300 px-3 py-2">1 (neither prime nor composite)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold mb-2 text-slate-900">Quick Test Method:</p>
                <p className="text-sm text-slate-700 mb-2">
                  To test if a number is prime, try dividing it by prime numbers less than or equal to its square root.
                </p>
                <p className="text-xs text-muted-foreground">
                  Example: To test if 23 is prime, check if it's divisible by 2, 3, 5, 7, 11, 13, 17, or 19. 
                  Since none of these divide evenly, 23 is prime.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prime Numbers from 1 to 100</CardTitle>
            <CardDescription>
              Complete list of prime numbers up to 100
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-3 text-slate-900">Prime Numbers (2 to 100):</p>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].map((num) => (
                  <div key={num} className="bg-primary/10 p-2 rounded border border-primary/30 text-center">
                    <span className="text-sm font-bold text-primary">{num}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                There are 25 prime numbers from 1 to 100. Notice that 2 is the only even prime number!
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Points to Remember</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
              <li>A prime number has exactly <span className="font-semibold">2 factors</span>: 1 and itself</li>
              <li><span className="font-semibold">1 is NOT a prime number</span> (it only has 1 factor)</li>
              <li><span className="font-semibold">2 is the only even prime number</span> (all other even numbers are composite)</li>
              <li>All prime numbers (except 2) are odd</li>
              <li>Composite numbers have more than 2 factors</li>
              <li>To test if a number is prime, check if it's divisible by any prime number less than or equal to its square root</li>
              <li>Prime numbers are the building blocks of all natural numbers</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice identifying and working with prime numbers with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PrimeNumbersInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of prime numbers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Identify prime numbers</p>
              <p className="text-sm text-slate-700 mb-3">
                Which of these numbers are prime? List all factors for each:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>17</li>
                <li>21</li>
                <li>29</li>
                <li>33</li>
                <li>41</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Find all prime numbers</p>
              <p className="text-sm text-slate-700 mb-3">
                List all prime numbers between:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>20 and 30</li>
                <li>40 and 50</li>
                <li>60 and 70</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3: True or False</p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>All prime numbers are odd. (True/False)</li>
                <li>1 is a prime number. (True/False)</li>
                <li>2 is the only even prime number. (True/False)</li>
                <li>Every composite number can be written as a product of prime numbers. (True/False)</li>
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
            Where do we use prime numbers in daily life?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Computer Security:</span> Prime numbers are used in encryption to protect information</li>
            <li><span className="font-semibold">Mathematics:</span> Prime factorization helps simplify fractions and find GCD/LCM</li>
            <li><span className="font-semibold">Coding:</span> Prime numbers are used in algorithms and data structures</li>
            <li><span className="font-semibold">Number Theory:</span> Prime numbers are fundamental in advanced mathematics</li>
            <li><span className="font-semibold">Problem Solving:</span> Understanding prime numbers helps solve many mathematical problems</li>
            <li><span className="font-semibold">Pattern Recognition:</span> Identifying prime numbers helps recognize number patterns</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

