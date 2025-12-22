-- Incremental Database Schema Creation Script
-- Use this if you want to create tables one by one without dropping existing ones
-- Only run the CREATE TABLE statements that haven't been created yet

-- Step 1: Create grades table (no dependencies)
CREATE TABLE IF NOT EXISTS grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  level INTEGER NOT NULL CHECK (level IN (7, 8, 9)),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 2: Create subjects table (no dependencies)
CREATE TABLE IF NOT EXISTS subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 3: Create strands table (depends on subjects)
CREATE TABLE IF NOT EXISTS strands (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id TEXT NOT NULL REFERENCES subjects(code),
  name TEXT NOT NULL,
  description TEXT,
  "order" INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 4: Create sub_strands table (depends on strands)
CREATE TABLE IF NOT EXISTS sub_strands (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  strand_id UUID NOT NULL REFERENCES strands(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  "order" INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 5: Create lessons table (depends on sub_strands)
CREATE TABLE IF NOT EXISTS lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sub_strand_id UUID NOT NULL REFERENCES sub_strands(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  "order" INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 6: Create student_progress table (depends on sub_strands and auth.users)
CREATE TABLE IF NOT EXISTS student_progress (
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

-- Step 7: Create assessments table (depends on sub_strands)
CREATE TABLE IF NOT EXISTS assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sub_strand_id UUID NOT NULL REFERENCES sub_strands(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('multiple_choice', 'practical_activity')),
  questions JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 8: Create profiles table (depends on grades and auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  grade_id UUID REFERENCES grades(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS) - run these after creating tables
DO $$
BEGIN
  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'grades') THEN
    ALTER TABLE grades ENABLE ROW LEVEL SECURITY;
  END IF;
  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'subjects') THEN
    ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
  END IF;
  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'strands') THEN
    ALTER TABLE strands ENABLE ROW LEVEL SECURITY;
  END IF;
  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'sub_strands') THEN
    ALTER TABLE sub_strands ENABLE ROW LEVEL SECURITY;
  END IF;
  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'lessons') THEN
    ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
  END IF;
  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'student_progress') THEN
    ALTER TABLE student_progress ENABLE ROW LEVEL SECURITY;
  END IF;
  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'assessments') THEN
    ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
  END IF;
  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'profiles') THEN
    ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Create policies (only if they don't exist)
DO $$
BEGIN
  -- Grades policies
  IF NOT EXISTS (SELECT FROM pg_policies WHERE tablename = 'grades' AND policyname = 'Public read access') THEN
    CREATE POLICY "Public read access" ON grades FOR SELECT USING (true);
  END IF;
  
  -- Subjects policies
  IF NOT EXISTS (SELECT FROM pg_policies WHERE tablename = 'subjects' AND policyname = 'Public read access') THEN
    CREATE POLICY "Public read access" ON subjects FOR SELECT USING (true);
  END IF;
  
  -- Strands policies
  IF NOT EXISTS (SELECT FROM pg_policies WHERE tablename = 'strands' AND policyname = 'Public read access') THEN
    CREATE POLICY "Public read access" ON strands FOR SELECT USING (true);
  END IF;
  
  -- Sub-strands policies
  IF NOT EXISTS (SELECT FROM pg_policies WHERE tablename = 'sub_strands' AND policyname = 'Public read access') THEN
    CREATE POLICY "Public read access" ON sub_strands FOR SELECT USING (true);
  END IF;
  
  -- Lessons policies
  IF NOT EXISTS (SELECT FROM pg_policies WHERE tablename = 'lessons' AND policyname = 'Public read access') THEN
    CREATE POLICY "Public read access" ON lessons FOR SELECT USING (true);
  END IF;
  
  -- Student progress policies
  IF NOT EXISTS (SELECT FROM pg_policies WHERE tablename = 'student_progress' AND policyname = 'Users can view own progress') THEN
    CREATE POLICY "Users can view own progress" ON student_progress FOR SELECT USING (auth.uid() = user_id);
  END IF;
  IF NOT EXISTS (SELECT FROM pg_policies WHERE tablename = 'student_progress' AND policyname = 'Users can update own progress') THEN
    CREATE POLICY "Users can update own progress" ON student_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
    CREATE POLICY "Users can update own progress" ON student_progress FOR UPDATE USING (auth.uid() = user_id);
  END IF;
  
  -- Assessments policies
  IF NOT EXISTS (SELECT FROM pg_policies WHERE tablename = 'assessments' AND policyname = 'Public read access') THEN
    CREATE POLICY "Public read access" ON assessments FOR SELECT USING (true);
  END IF;
  
  -- Profiles policies
  IF NOT EXISTS (SELECT FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can view own profile') THEN
    CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
  END IF;
  IF NOT EXISTS (SELECT FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can update own profile') THEN
    CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
  END IF;
END $$;

