# Book Mate - CBC Learning Platform

A CBC-aligned learning platform for Kenyan Junior School (Grade 7-9) focusing on Mathematics and Integrated Science.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS + Shadcn/UI (Mobile-first design)
- **Backend/Auth**: Supabase (PostgreSQL) for Auth, Database, and Storage
- **App Metadata**: Web manifest, theme color, and Apple touch icon support
- **Math Rendering**: KaTeX for high-performance mathematical notation

## Features

- 📚 **Curriculum Hierarchy**: Grades → Subjects → Strands → Sub-strands → Lessons
- 📊 **Progress Tracking**: Tracks completion of sub-strands and formative assessment scores
- 📱 **Offline Status**: Shows when the browser loses network connectivity
- 🧮 **Math Support**: KaTeX rendering for mathematical formulas
- 📝 **Assessments**: Multiple-choice and practical activity uploads
- 🎨 **Modern UI**: Mobile-first design with Royal Blue (#1E3A8A) and Sunny Yellow (#FACC15) color scheme

n## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- A Supabase project

### Installation

1. Clone the repository:
```bash
cd "C:\Users\ELITEBOOK\Desktop\Book Mate"
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Set up Supabase Database:

Run the following SQL in your Supabase SQL editor to create the required tables:

```sql
-- Create grades table
CREATE TABLE grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  level INTEGER NOT NULL CHECK (level IN (7, 8, 9)),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create subjects table
CREATE TABLE subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create strands table
CREATE TABLE strands (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id TEXT NOT NULL REFERENCES subjects(code),
  name TEXT NOT NULL,
  description TEXT,
  "order" INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create sub_strands table
CREATE TABLE sub_strands (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  strand_id UUID NOT NULL REFERENCES strands(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  "order" INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create lessons table
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sub_strand_id UUID NOT NULL REFERENCES sub_strands(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  "order" INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create student_progress table
CREATE TABLE student_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  sub_strand_id UUID NOT NULL REFERENCES sub_strands(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT FALSE,
  completion_date TIMESTAMPTZ,
  formative_assessment_score NUMERIC(5,2) CHECK (formative_assessment_score >= 0 AND formative_assessment_score <= 100),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, sub_strand_id)
);

-- Create assessments table
CREATE TABLE assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sub_strand_id UUID NOT NULL REFERENCES sub_strands(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('multiple_choice', 'practical_activity')),
  questions JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create profiles table (for user grade tracking)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  grade_id UUID REFERENCES grades(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE grades ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE strands ENABLE ROW LEVEL SECURITY;
ALTER TABLE sub_strands ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies (adjust as needed for your security requirements)
CREATE POLICY "Public read access" ON grades FOR SELECT USING (true);
CREATE POLICY "Public read access" ON subjects FOR SELECT USING (true);
CREATE POLICY "Public read access" ON strands FOR SELECT USING (true);
CREATE POLICY "Public read access" ON sub_strands FOR SELECT USING (true);
CREATE POLICY "Public read access" ON lessons FOR SELECT USING (true);
CREATE POLICY "Users can view own progress" ON student_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON student_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON student_progress FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Public read access" ON assessments FOR SELECT USING (true);
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Student dashboard
│   ├── subjects/          # Subject pages
│   ├── strands/           # Strand pages
│   ├── sub-strands/       # Sub-strand pages
│   ├── lessons/           # Lesson reading interface
│   └── assessments/       # Assessment pages
├── components/            # React components
│   ├── ui/               # Shadcn/UI components
│   ├── math/             # Math rendering components
│   ├── assessment/       # Assessment components
│   └── auth/             # Authentication components
├── lib/                   # Utility functions
│   └── supabase/         # Supabase client configuration
├── types/                 # TypeScript type definitions
└── public/                # Static assets and app metadata
```

## Key Components

- **MathRenderer**: Renders mathematical formulas using KaTeX
- **QuizComponent**: Handles multiple-choice and practical activity assessments
- **OfflineIndicator**: Shows a banner when the browser is offline
- **Dashboard**: Student home page with subject cards

## Color Scheme

- **Primary**: #1E3A8A (Royal Blue)
- **Accent**: #FACC15 (Sunny Yellow)

## App Metadata

The app includes browser metadata support with:
- `manifest.json` for app metadata
- Theme color and Apple touch icon metadata in the layout
- `OfflineIndicator` for connection status feedback

## Next Steps

1. Add authentication pages (sign up, password reset, security update)
2. Implement file upload for practical activities
3. Add more interactive learning components
4. Implement progress analytics
5. Add teacher/admin dashboard
6. Create app icons (icon-192x192.png, icon-512x512.png)

## License

MIT

