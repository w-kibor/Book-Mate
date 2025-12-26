import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MathRenderer } from '@/components/math/math-renderer';
import { ReadingWritingWordsInteractive } from '@/components/interactive/reading-writing-words-interactive';

export default function ReadingWritingWordsPage() {
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
            Topic 1.1.4
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Reading and Writing Numbers in Words
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Learn to read and write numbers in words correctly up to millions, following proper spelling and formatting rules.
        </p>
      </div>

      {/* Learning Objectives */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Learning Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Read numbers written in words up to millions</li>
            <li>Write numbers in words correctly with proper spelling</li>
            <li>Use commas and hyphens correctly when writing numbers in words</li>
            <li>Recognize number patterns and place value names in words</li>
            <li>Apply this skill in real-life situations (e.g., writing cheques)</li>
          </ul>
        </CardContent>
      </Card>

      {/* Teaching Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What are Numbers in Words?</CardTitle>
            <CardDescription>
              Understanding written number notation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              Numbers written in <span className="font-semibold">words</span> use letters and words to represent values. 
              This is important for writing cheques, legal documents, and formal communication. For example, 
              <MathRenderer>{'45\\,678\\,900'}</MathRenderer> in symbols becomes "forty-five million, six hundred seventy-eight thousand, nine hundred" in words.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold mb-2 text-slate-900">Key Rules for Writing Numbers in Words:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                <li>Write each group (millions, thousands, ones) separately</li>
                <li>Use commas to separate groups (millions, thousands)</li>
                <li>Use hyphens for numbers 21-99 (e.g., twenty-one, thirty-four)</li>
                <li>Spell out place value names: million, thousand, hundred</li>
                <li>Start with the largest place value and work down</li>
                <li>Don't use "and" between groups (e.g., "five million, three hundred" not "five million and three hundred")</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Write Numbers in Words</CardTitle>
            <CardDescription>
              Step-by-step guide with examples
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm font-semibold mb-3 text-slate-900">Example 1: Writing a 9-digit number in words</p>
                <p className="text-sm text-slate-700 mb-2">Write <MathRenderer>{'572\\,648\\,319'}</MathRenderer> in words</p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Step 1: Break into groups</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                    <li>572 millions</li>
                    <li>648 thousands</li>
                    <li>319 ones</li>
                  </ul>
                  <p className="font-semibold text-slate-700 mt-3">Step 2: Write each group in words</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                    <li>572 = five hundred seventy-two</li>
                    <li>648 = six hundred forty-eight</li>
                    <li>319 = three hundred nineteen</li>
                  </ul>
                  <p className="font-semibold text-slate-700 mt-3">Step 3: Combine with place value names</p>
                  <div className="bg-white p-3 rounded border border-green-300">
                    <p className="text-slate-700 italic">
                      "five hundred seventy-two million, six hundred forty-eight thousand, three hundred nineteen"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="text-sm font-semibold mb-3 text-slate-900">Example 2: Reading a number written in words</p>
                <p className="text-sm text-slate-700 mb-2">
                  Read: "eight hundred forty-seven million, three hundred ninety-two thousand, one hundred fifty-six"
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-700">Break it down:</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-white p-2 rounded border border-purple-300">
                      <div className="font-semibold text-primary">eight hundred forty-seven</div>
                      <div className="text-slate-600 mt-1">million</div>
                      <div className="text-slate-500 mt-1">= 847</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-purple-300">
                      <div className="font-semibold text-primary">three hundred ninety-two</div>
                      <div className="text-slate-600 mt-1">thousand</div>
                      <div className="text-slate-500 mt-1">= 392</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-purple-300">
                      <div className="font-semibold text-primary">one hundred fifty-six</div>
                      <div className="text-slate-600 mt-1">ones</div>
                      <div className="text-slate-500 mt-1">= 156</div>
                    </div>
                  </div>
                  <p className="text-slate-700 mt-2">
                    <span className="font-semibold">Answer:</span> <MathRenderer>{'847\\,392\\,156'}</MathRenderer>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Number Words Reference</CardTitle>
            <CardDescription>
              Common number words you need to know
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold mb-2 text-slate-700">Ones (1-19):</p>
                <div className="text-xs text-slate-600 space-y-1">
                  <p>one, two, three, four, five, six, seven, eight, nine, ten,</p>
                  <p>eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2 text-slate-700">Tens (20-90):</p>
                <div className="text-xs text-slate-600 space-y-1">
                  <p>twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety</p>
                  <p className="mt-2">For 21-99: use hyphen (e.g., twenty-one, thirty-four, ninety-nine)</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2 text-slate-700">Hundreds:</p>
                <div className="text-xs text-slate-600 space-y-1">
                  <p>one hundred, two hundred, three hundred, ... nine hundred</p>
                  <p className="mt-2">For 101-999: combine (e.g., "one hundred twenty-three", "five hundred sixty-seven")</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2 text-slate-700">Place Values:</p>
                <div className="text-xs text-slate-600 space-y-1">
                  <p>thousand (1,000)</p>
                  <p>million (1,000,000)</p>
                  <p>hundred million (100,000,000)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Patterns and Examples</CardTitle>
            <CardDescription>
              Practice with different number patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-slate-300 px-3 py-2 text-left">Number in Symbols</th>
                    <th className="border border-slate-300 px-3 py-2 text-left">Number in Words</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-mono"><MathRenderer>{'123'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2">one hundred twenty-three</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-mono"><MathRenderer>{'4\\,567'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2">four thousand, five hundred sixty-seven</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-mono"><MathRenderer>{'89\\,012'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2">eighty-nine thousand, twelve</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-mono"><MathRenderer>{'123\\,456'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2">one hundred twenty-three thousand, four hundred fifty-six</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-mono"><MathRenderer>{'7\\,890\\,123'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2">seven million, eight hundred ninety thousand, one hundred twenty-three</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-mono"><MathRenderer>{'456\\,789\\,012'}</MathRenderer></td>
                    <td className="border border-slate-300 px-3 py-2">four hundred fifty-six million, seven hundred eighty-nine thousand, twelve</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Points to Remember</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
              <li>Always use commas to separate millions and thousands</li>
              <li>Use hyphens for compound numbers 21-99 (twenty-one, thirty-four, etc.)</li>
              <li>Don't use "and" between groups (Kenyan format)</li>
              <li>Start with the largest place value (millions) and work down</li>
              <li>Practice writing dummy cheques to reinforce this skill</li>
              <li>Double-check spelling, especially: forty (not fourty), ninety (not ninty)</li>
              <li>For numbers ending in zeros, you can omit the word (e.g., "five thousand" not "five thousand, zero hundred")</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl">Interactive Practice</CardTitle>
          <CardDescription>
            Practice reading and writing numbers in words with this interactive tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ReadingWritingWordsInteractive />
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Questions</CardTitle>
          <CardDescription>
            Test your understanding of reading and writing numbers in words
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 1: Write in words</p>
              <p className="text-sm text-slate-700 mb-3">
                Write these numbers in words:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li><MathRenderer>{'345\\,678\\,912'}</MathRenderer></li>
                <li><MathRenderer>{'891\\,234\\,567'}</MathRenderer></li>
                <li><MathRenderer>{'123\\,456\\,789'}</MathRenderer></li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 2: Write in symbols</p>
              <p className="text-sm text-slate-700 mb-3">
                Write these numbers in symbols:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 ml-4">
                <li>four hundred fifty-six million, seven hundred eighty-nine thousand, one hundred twenty-three</li>
                <li>seven hundred eighty-nine million, twelve thousand, three hundred forty-five</li>
                <li>two hundred thirty-four million, five hundred sixty-seven thousand, eight hundred ninety</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold mb-2">Question 3: Write a cheque</p>
              <p className="text-sm text-slate-700 mb-3">
                Write a dummy cheque for KSh <MathRenderer>{'45\\,678\\,900'}</MathRenderer>:
              </p>
              <div className="bg-white p-3 rounded border border-slate-300 text-sm">
                <p className="font-semibold mb-2">Pay to: _________________________</p>
                <p className="font-semibold mb-2">Amount in words: _________________________________________________</p>
                <p className="font-semibold mb-2">Amount in symbols: KSh _________________________</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-life Application */}
      <Card className="border-dashed border-primary/30">
        <CardHeader>
          <CardTitle className="text-sm">Real-life Application</CardTitle>
          <CardDescription className="text-xs">
            Where do we use reading and writing numbers in words?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">Banking:</span> Writing cheques - you must write the amount in both words and symbols</li>
            <li><span className="font-semibold">Legal Documents:</span> Contracts, agreements, and legal papers often require amounts in words</li>
            <li><span className="font-semibold">Business:</span> Invoices, receipts, and financial statements</li>
            <li><span className="font-semibold">Government:</span> Official documents, budgets, and financial reports</li>
            <li><span className="font-semibold">Education:</span> Understanding written financial information and documents</li>
            <li><span className="font-semibold">Daily Life:</span> Reading price tags, understanding large amounts in news articles</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

