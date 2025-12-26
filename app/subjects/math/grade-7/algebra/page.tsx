import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Grade7AlgebraPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Strand 2.0
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Algebra
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          This strand will cover algebraic expressions, linear equations, and
          inequalities as outlined in the Grade 7 Mathematics design.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-primary/10 shadow-sm">
          <CardHeader>
            <CardTitle>Quick Concept</CardTitle>
            <CardDescription className="text-sm">
              Placeholder – to be detailed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              We will add focused notes on simplifying expressions, substituting
              into formulas, and solving one-step and two-step equations here.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/10 shadow-sm">
          <CardHeader>
            <CardTitle>Practice Question</CardTitle>
            <CardDescription className="text-sm">
              Placeholder – to be detailed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This area will host practice questions and examples aligned to
              CBC sub-strands such as algebraic expressions and linear
              equations.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}



