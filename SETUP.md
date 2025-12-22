# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   - Copy `.env.example` to `.env.local`
   - Add your Supabase credentials:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

3. **Set Up Supabase Database**
   - Go to your Supabase project SQL Editor
   - Run the SQL schema provided in `README.md` to create all tables
   - Ensure Row Level Security (RLS) policies are set up correctly

4. **Create PWA Icons** (Optional but recommended)
   - Create `public/icon-192x192.png` (192x192 pixels)
   - Create `public/icon-512x512.png` (512x512 pixels)
   - These icons will be used for the "Add to Home Screen" feature

5. **Run Development Server**
   ```bash
   npm run dev
   ```

6. **Access the Application**
   - Open [http://localhost:3000](http://localhost:3000)
   - You'll be redirected to `/login` if not authenticated
   - Create a test user in Supabase Auth or use the Supabase dashboard

## Project Structure Overview

```
Book Mate/
├── app/                      # Next.js 15 App Router
│   ├── dashboard/           # Student dashboard (home page)
│   ├── subjects/            # Subject selection (Math, Science)
│   ├── strands/             # Strand listing
│   ├── sub-strands/         # Sub-strand listing
│   ├── lessons/             # Lesson reading interface
│   ├── assessments/         # Assessment/quiz pages
│   └── login/               # Authentication page
├── components/
│   ├── ui/                  # Shadcn/UI components (Button, Card, etc.)
│   ├── math/                # KaTeX math rendering components
│   ├── assessment/         # Quiz and assessment components
│   ├── auth/                # Login/signup forms
│   └── offline-indicator.tsx # PWA offline status indicator
├── lib/
│   ├── supabase/           # Supabase client configuration
│   └── utils.ts            # Utility functions
├── types/
│   └── database.types.ts   # TypeScript types for Supabase
└── public/
    └── manifest.json        # PWA manifest
```

## Key Features Implemented

✅ **Next.js 15 App Router** with TypeScript
✅ **Supabase Integration** (Auth, Database, Storage ready)
✅ **PWA Configuration** (manifest.json, service worker via next-pwa)
✅ **KaTeX Math Rendering** (MathRenderer component)
✅ **Offline Indicator** (shows connection status)
✅ **Dashboard** (subject cards for Math and Integrated Science)
✅ **Curriculum Navigation** (Subjects → Strands → Sub-strands → Lessons)
✅ **Assessment System** (multiple-choice and practical activity support)
✅ **Progress Tracking** (student_progress table integration)
✅ **Mobile-First Design** (Tailwind CSS + Shadcn/UI)
✅ **Color Scheme** (Royal Blue #1E3A8A, Sunny Yellow #FACC15)

## Next Steps

1. **Add Sample Data**: Populate your Supabase database with curriculum content
2. **Create User Accounts**: Set up authentication for students
3. **Add PWA Icons**: Create the icon files for better PWA experience
4. **Implement File Uploads**: Complete the practical activity file upload feature
5. **Add More Features**: 
   - Progress analytics
   - Teacher/admin dashboard
   - Content management system
   - Discussion forums
   - Notifications

## Testing the PWA

1. Build the production version:
   ```bash
   npm run build
   npm start
   ```

2. In Chrome/Edge:
   - Open DevTools (F12)
   - Go to Application tab
   - Check "Service Workers" and "Manifest"
   - Use "Add to Home Screen" to test PWA installation

## Troubleshooting

- **Supabase Connection Issues**: Verify your environment variables are set correctly
- **Type Errors**: Run `npm install` to ensure all dependencies are installed
- **PWA Not Working**: Ensure you're running a production build (`npm run build && npm start`)
- **Math Not Rendering**: Check that KaTeX CSS is loaded (should be automatic)

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Shadcn/UI Documentation](https://ui.shadcn.com)
- [KaTeX Documentation](https://katex.org/docs/api.html)

