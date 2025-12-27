import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Topic = {
  id: string;
  title: string;
};

type SubStrand = {
  id: string;
  number: string;
  title: string;
  description: string;
  lessons: number;
  topics: Topic[];
};

const subStrands: SubStrand[] = [
  {
    id: 'data-handling',
    number: '18',
    title: 'Data Handling and Probability: Data Handling',
    description:
      'Meaning of data, collecting and organising, tabular representation, graph scales, pictographs, bar and pie charts, and line/travel graphs.',
    lessons: 11,
    topics: [
      { id: '18.1', title: 'The Meaning of Data' },
      { id: '18.2', title: 'Collecting and Organising Data' },
      { id: '18.3', title: 'Representing Data in Tables' },
      { id: '18.4', title: 'Choosing Suitable Scales for Graphs' },
      { id: '18.5', title: 'Drawing Pictographs' },
      { id: '18.6', title: 'Drawing Bar Graphs' },
      { id: '18.7', title: 'Interpreting Bar Graphs' },
      { id: '18.8', title: 'Drawing Pie Charts' },
      { id: '18.9', title: 'Interpreting Pie Charts of Data' },
      { id: '18.10', title: 'Drawing Line Graphs' },
      { id: '18.11', title: 'Interpreting Travel Graphs' },
    ],
  },
];

export default function Grade7DataPage() {
  return (
    <section className="space-y-8">
      {/* Strand Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Strand 5.0
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Data Handling &amp; Probability
        </h2>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Sub-strand 18 focuses on data handling: collecting, organising, and
          representing data with appropriate scales and graphs. Probability
          language can extend here later.
        </p>
      </div>

      {/* Sub-strands Overview */}
      <div className="space-y-6">
        {subStrands.map((subStrand) => (
          <Card
            key={subStrand.id}
            className="border-2 border-primary/20 hover:border-primary/40 transition-colors shadow-sm"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                      Sub-strand {subStrand.number}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {subStrand.lessons} lessons
                    </span>
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-2">
                    {subStrand.title}
                  </CardTitle>
                  <CardDescription className="text-sm max-w-2xl">
                    {subStrand.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-700">
                  Topics ({subStrand.topics.length}):
                </p>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {subStrand.topics.map((topic) => (
                    <div
                      key={topic.id}
                      className="group flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                    >
                      <span className="text-xs font-mono text-muted-foreground min-w-[3.5rem]">
                        {topic.id}
                      </span>
                      <span className="text-sm text-slate-700 group-hover:text-primary transition-colors flex-1">
                        {topic.title}
                      </span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    <Link href={`/subjects/math/grade-7/data/${subStrand.id}`}>
                      Explore {subStrand.title}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Navigation */}
      <Card className="border-dashed border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-sm">Quick Navigation</CardTitle>
          <CardDescription className="text-xs">
            Jump to any topic in data handling
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {subStrands.map((subStrand) => (
              <Button key={subStrand.id} asChild variant="secondary" size="sm">
                <Link href={`/subjects/math/grade-7/data/${subStrand.id}`}>
                  {subStrand.number} {subStrand.title}
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}



