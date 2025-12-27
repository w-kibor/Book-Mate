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
    id: 'angles',
    number: '16',
    title: 'Geometry: Angles',
    description:
      'Angle facts on straight lines, at a point, transversals, parallelograms, polygons, and solving for unknown angles and sides.',
    lessons: 6,
    topics: [
      { id: '16.1', title: 'Types of Angles on a Straight Line' },
      { id: '16.2', title: 'Angles at a Point' },
      { id: '16.3', title: 'Relating Angles on a Transversal' },
      { id: '16.4', title: 'Angles in a Parallelogram' },
      { id: '16.5', title: 'Angle Properties of Polygons' },
      { id: '16.6', title: 'Solving for Angles and Sides of a Polygon' },
    ],
  },
  {
    id: 'geometrical-constructions',
    number: '17',
    title: 'Geometry: Geometrical Constructions',
    description:
      'Measuring angles and constructing common angles, triangles, and circles using a ruler and pair of compasses.',
    lessons: 7,
    topics: [
      { id: '17.1', title: 'Measuring Angles' },
      { id: '17.2', title: 'Bisecting Angles Using a Ruler and a Pair of Compasses' },
      { id: '17.3', title: 'Constructing Angles of 90° and 45°' },
      { id: '17.4', title: 'Constructing Angles of 60° and 30°' },
      { id: '17.5', title: 'Constructing Angles of 120° and 105°' },
      { id: '17.6', title: 'Constructing Triangles' },
      { id: '17.7', title: 'Constructing Circles' },
    ],
  },
];

export default function Grade7GeometryPage() {
  return (
    <section className="space-y-8">
      {/* Strand Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Strand 4.0
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Geometry
        </h2>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Two sub-strands cover angle properties and geometric constructions. Topics
          align with the Grade 7 CBC design, focusing on real-world reasoning and
          ruler-and-compass accuracy.
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
                    <Link href={`/subjects/math/grade-7/geometry/${subStrand.id}`}>
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
            Jump into angle work or straight into compass-and-ruler builds
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {subStrands.map((subStrand) => (
              <Button key={subStrand.id} asChild variant="secondary" size="sm">
                <Link href={`/subjects/math/grade-7/geometry/${subStrand.id}`}>
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



