import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Grade7GeometryPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Strand 4.0
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Geometry
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          This strand will include angles and geometric constructions, aligned
          with Strand 4.0 of the Grade 7 Mathematics curriculum design.
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
              Use this area later to summarise key angle facts (e.g.
              complementary, supplementary, vertically opposite) and basic
              compass-and-ruler constructions.
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
              Practice items involving angle calculations and step-by-step
              construction tasks will appear here.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


