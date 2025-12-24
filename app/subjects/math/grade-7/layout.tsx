import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const strands = [
  { id: 'overview', label: 'Overview', href: '/subjects/math/grade-7' },
  { id: 'numbers', label: 'Numbers', href: '/subjects/math/grade-7/numbers' },
  { id: 'algebra', label: 'Algebra', href: '/subjects/math/grade-7/algebra' },
  { id: 'measurements', label: 'Measurements', href: '/subjects/math/grade-7/measurements' },
  { id: 'geometry', label: 'Geometry', href: '/subjects/math/grade-7/geometry' },
  { id: 'data', label: 'Data Handling', href: '/subjects/math/grade-7/data' },
];

export default function Grade7MathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-primary font-semibold">
              Grade 7 • Mathematics
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">
              CBC Strands
            </h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Use the sidebar to move between strands. Start with Numbers, then
              build up to Algebra, Measurement, Geometry, and Data Handling as
              outlined in the Grade 7 Mathematics curriculum design.
            </p>
          </div>
          <Button asChild variant="secondary">
            <Link href="/dashboard">Back to Dashboard</Link>
          </Button>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-[260px,1fr]">
          <aside className="lg:sticky lg:top-6 h-fit">
            <Card className="border-primary/10 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Strands</CardTitle>
                <CardDescription>
                  Navigate across Numbers, Algebra, Measurement, Geometry and
                  Data Handling.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1">
                {strands.map((strand) => (
                  <Link
                    key={strand.id}
                    href={strand.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {strand.label}
                  </Link>
                ))}
              </CardContent>
            </Card>
          </aside>

          <main className="space-y-6">{children}</main>
        </div>
      </div>
    </div>
  );
}


