import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';

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
    id: 'pythagorean-relationship',
    number: '9.0',
    title: 'Pythagorean Relationship',
    description:
      'Understanding the sides of right-angled triangles and applying the Pythagorean theorem to solve problems.',
    lessons: 3,
    topics: [
      { id: '9.1', title: 'Sides of a Right-angled Triangle' },
      { id: '9.2', title: 'The Pythagorean Relationship' },
      { id: '9.3', title: 'Applying the Pythagorean Relationship' },
    ],
  },
  {
    id: 'length',
    number: '10.0',
    title: 'Length',
    description:
      'Converting units of length, operations with lengths, and calculating perimeters of plane figures and combined shapes.',
    lessons: 8,
    topics: [
      { id: '10.1', title: 'Converting units of length' },
      { id: '10.2', title: 'Addition involving units of length' },
      { id: '10.3', title: 'Subtraction Involving Units of Length' },
      { id: '10.4', title: 'Multiplication Involving Units of Length' },
      { id: '10.5', title: 'Division Involving Units of Length' },
      { id: '10.6', title: 'Perimeter of Plane Figures' },
      { id: '10.7', title: 'Perimeter of Combined Shapes' },
      { id: '10.8', title: 'Relationship Between Circumference and Diameter' },
    ],
  },
  {
    id: 'area',
    number: '11.0',
    title: 'Area',
    description:
      'Understanding square metres, acres, and hectares. Calculating areas of rectangles, parallelograms, rhombuses, trapeziums, circles, and combined shapes.',
    lessons: 7,
    topics: [
      { id: '11.1', title: 'Square Metres, Acres and Hectares' },
      { id: '11.2', title: 'Area of a Rectangle' },
      { id: '11.3', title: 'Area of a Parallelogram' },
      { id: '11.4', title: 'Area of a Rhombus' },
      { id: '11.5', title: 'Area of a Trapezium' },
      { id: '11.6', title: 'Area of a Circle' },
      { id: '11.7', title: 'Area of Borders and Combined Shapes' },
    ],
  },
  {
    id: 'volume-capacity',
    number: '12.0',
    title: 'Volume and Capacity',
    description:
      'Understanding cubic metres, calculating volumes of cubes, cuboids, and cylinders, and relationships between volume units and litres.',
    lessons: 6,
    topics: [
      { id: '12.1', title: 'The Cubic Metre (m³)' },
      { id: '12.2', title: 'Volume of a Cube and Cuboid' },
      { id: '12.3', title: 'Volume of Cylinders' },
      { id: '12.4', title: 'Relationship Between cm³ and Litres' },
      { id: '12.5', title: 'Relationship Between m³ and Litres' },
      { id: '12.6', title: 'Capacity of Containers in Real Life Situations' },
    ],
  },
  {
    id: 'time-distance-speed',
    number: '13.0',
    title: 'Time, Distance and Speed',
    description:
      'Converting units of time and distance, understanding speed, and converting between km/h and m/s.',
    lessons: 5,
    topics: [
      { id: '13.1', title: 'Units of Measuring Time. Converting Units of Time' },
      { id: '13.2', title: 'Converting Units of Measuring Distance' },
      { id: '13.3', title: 'Speed' },
      { id: '13.4', title: 'Converting km/h into m/s' },
      { id: '13.5', title: 'Converting m/s into km/h' },
    ],
  },
  {
    id: 'temperature',
    number: '14.0',
    title: 'Temperature',
    description:
      'Understanding temperature conditions, units of measuring temperature, and converting between different temperature scales.',
    lessons: 4,
    topics: [
      { id: '14.1', title: 'Temperature Conditions in our Environment. Comparing Temperature' },
      { id: '14.2', title: 'Units of Measuring Temperature' },
      { id: '14.3', title: 'Converting Units of Measuring Temperature' },
      { id: '14.4', title: 'Working Out Temperature in Degrees' },
    ],
  },
  {
    id: 'money',
    number: '15.0',
    title: 'Money',
    description:
      'Understanding profit and loss, discounts, commissions, interpreting and preparing bills, postal charges, and mobile money services.',
    lessons: 10,
    topics: [
      { id: '15.1', title: 'Profit and Loss' },
      { id: '15.2', title: 'Percentage Profit and Loss' },
      { id: '15.3', title: 'Discount' },
      { id: '15.4', title: 'Percentage Discount' },
      { id: '15.5', title: 'Commission and Percentage Commission' },
      { id: '15.6', title: 'Interpreting Bills' },
      { id: '15.7', title: 'Preparing Bills' },
      { id: '15.8', title: 'Postal Charges (1)' },
      { id: '15.9', title: 'Postal Charges (2)' },
      { id: '15.10', title: 'Mobile Money Services' },
    ],
  },
];

export default function Grade7MeasurementPage() {
  return (
    <section className="space-y-8">
      {/* Strand Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Strand 3.0
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Measurement
        </h2>
        <p className="text-sm text-muted-foreground max-w-3xl">
          This strand covers seven sub-strands: Pythagorean Relationship, Length, Area, Volume and Capacity, 
          Time Distance and Speed, Temperature, and Money. Each sub-strand focuses on understanding and applying 
          measurement concepts in real-world situations.
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
                  {subStrand.topics.map((topic, index) => (
                    <Link
                      key={topic.id}
                      href={`/subjects/math/grade-7/measurement/${subStrand.id}`}
                      className="group flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer"
                    >
                      <span className="text-xs font-mono text-muted-foreground min-w-[3rem]">
                        {topic.id}
                      </span>
                      <span className="text-sm text-slate-700 group-hover:text-primary transition-colors flex-1">
                        {topic.title}
                      </span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    <Link href={`/subjects/math/grade-7/measurement/${subStrand.id}`}>
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
            Start with any sub-strand to begin learning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {subStrands.map((subStrand) => (
              <Button
                key={subStrand.id}
                asChild
                variant="secondary"
                size="sm"
              >
                <Link href={`/subjects/math/grade-7/measurement/${subStrand.id}`}>
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

