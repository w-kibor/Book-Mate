import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Grade7MeasurementsPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Strand 3.0
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Measurements
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          This strand will cover length, area, volume, capacity, mass, time,
          speed, temperature and money, following Strand 3.0 in the Grade 7
          Mathematics design.
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
              We will later add concise notes on perimeter and area of
              rectangles/triangles, volume of cuboids, and real-life money
              problems here.
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
              Practice items for perimeter, area, volume, unit conversions and
              money will be placed here to support topic-by-topic practice.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}



