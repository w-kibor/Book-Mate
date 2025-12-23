import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MathRenderer } from '@/components/math/math-renderer';

type Section = {
  id: string;
  title: string;
  strand: string;
  quickConcept: { title: string; body: React.ReactNode };
  practicePrompt: string;
};

const sections: Section[] = [
  {
    id: 'numbers',
    title: 'Numbers',
    strand: 'Whole Numbers • Fractions • Decimals • Squares & Roots',
    quickConcept: {
      title: 'Order of Operations',
      body: (
        <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p>Remember BODMAS: Brackets → Orders → Division/Multiplication → Addition/Subtraction.</p>
          <p className="text-primary font-semibold">Example</p>
          <div>
            <MathRenderer display>{'3 + 4 \\times 2 = 11'}</MathRenderer>
          </div>
          <div>
            <MathRenderer display>{'(3 + 4) \\times 2 = 14'}</MathRenderer>
          </div>
        </div>
      ),
    },
    practicePrompt:
      'Compute 180 ÷ 6 × 5, and simplify \\(\\tfrac{3}{4} + \\tfrac{5}{8}\\).',
  },
  {
    id: 'algebra',
    title: 'Algebra',
    strand: 'Expressions and Linear Equations',
    quickConcept: {
      title: 'Coming soon',
      body: <p className="text-sm text-muted-foreground">This section will include key rules and worked examples.</p>,
    },
    practicePrompt: 'Practice questions will appear here.',
  },
  {
    id: 'measurements',
    title: 'Measurements',
    strand: 'Area • Volume • Capacity • Money',
    quickConcept: {
      title: 'Coming soon',
      body: <p className="text-sm text-muted-foreground">This section will include key rules and worked examples.</p>,
    },
    practicePrompt: 'Practice questions will appear here.',
  },
  {
    id: 'geometry',
    title: 'Geometry',
    strand: 'Angles and Constructions',
    quickConcept: {
      title: 'Coming soon',
      body: <p className="text-sm text-muted-foreground">This section will include key rules and worked examples.</p>,
    },
    practicePrompt: 'Practice questions will appear here.',
  },
  {
    id: 'data',
    title: 'Data Handling',
    strand: 'Tables and Graphs',
    quickConcept: {
      title: 'Coming soon',
      body: <p className="text-sm text-muted-foreground">This section will include key rules and worked examples.</p>,
    },
    practicePrompt: 'Practice questions will appear here.',
  },
];

export default function Grade7MathPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-primary font-semibold">Grade 7 • Mathematics</p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">CBC Strands Overview</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Quick concepts and practice prompts aligned to the CBC strands. Use the sidebar to jump to any strand.
            </p>
          </div>
          <Button asChild variant="secondary">
            <Link href="/dashboard">Back to Dashboard</Link>
          </Button>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-[280px,1fr]">
          {/* Sidebar navigation */}
          <aside className="lg:sticky lg:top-6 h-fit">
            <Card className="border-primary/10 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Strands</CardTitle>
                <CardDescription>Select a strand to view content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </CardContent>
            </Card>
          </aside>

          {/* Main content */}
          <main className="space-y-8">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
              >
                <div className="flex flex-col gap-2 mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Strand</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{section.title}</h2>
                  <p className="text-sm text-muted-foreground">{section.strand}</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-primary/10 shadow-sm">
                    <CardHeader>
                      <CardTitle>Quick Concept</CardTitle>
                      <CardDescription className="text-sm">Fast recall for the classroom</CardDescription>
                    </CardHeader>
                    <CardContent>{section.quickConcept.body}</CardContent>
                  </Card>

                  <Card className="border-primary/10 shadow-sm">
                    <CardHeader>
                      <CardTitle>Practice Question</CardTitle>
                      <CardDescription className="text-sm">Try it, then discuss</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-800 leading-relaxed">
                        {section.practicePrompt}
                      </p>
                      <div className="mt-3 text-xs text-muted-foreground">
                        Tip: Show working clearly. You can render math with LaTeX, e.g.,{' '}
                        <MathRenderer>{'A = \\pi r^2'}</MathRenderer>.
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}

