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
- A MongoDB instance

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

Edit `.env.local` and add your MongoDB and JWT settings:
```
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB_NAME=book_mate
JWT_SECRET=your_long_random_secret
```

4. Seed MongoDB collections:

Import or seed the curriculum collections used by the app:

Seed the following collections: `users`, `profiles`, `subjects`, `strands`, `sub_strands`, `lessons`, `assessments`, `student_progress`.

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

