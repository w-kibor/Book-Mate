import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Grade7DataPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Strand 5.0
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Data Handling &amp; Probability
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          This strand will include organising data in tables, drawing and
          interpreting graphs, and introductory probability ideas, in line with
          Strand 5.0 of the Grade 7 curriculum.
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
              Here you can later add short notes on frequency tables, bar
              graphs, line graphs and simple probability language such as
              certain, likely and unlikely.
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
              Practice tasks with small data sets (e.g. class attendance) and
              questions that guide learners to interpret graphs and make
              conclusions will go here.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}



