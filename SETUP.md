# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   - Copy `.env.example` to `.env.local`
   - Add your MongoDB and JWT settings:
     ```
     MONGODB_URI=your_mongodb_connection_string
     MONGODB_DB_NAME=book_mate
     JWT_SECRET=your_long_random_secret
     ```

3. **Seed MongoDB Collections**
   - Create or import the collections listed in `README.md`
   - Ensure the `users`, `profiles`, `subjects`, `strands`, `sub_strands`, `lessons`, `assessments`, and `student_progress` collections exist

4. **Create App Icons** (Optional but recommended)
   - Create `public/icon-192x192.png` (192x192 pixels)
   - Create `public/icon-512x512.png` (512x512 pixels)
   - These icons are used by the app manifest and browser metadata

5. **Run Development Server**
   ```bash
   npm run dev
   ```

6. **Access the Application**
   - Open [http://localhost:3000](http://localhost:3000)
   - You'll be redirected to `/login` if not authenticated
   - Sign up through the app to create a test user in MongoDB

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
│   └── offline-indicator.tsx # Offline status indicator
├── lib/
│   ├── auth/               # Cookie session helpers
│   ├── mongodb/            # MongoDB connection and repositories
│   └── utils.ts            # Utility functions
└── public/
   └── manifest.json        # App manifest
```

## Key Features Implemented

✅ **Next.js 15 App Router** with TypeScript
✅ **MongoDB Integration** (auth, curriculum data, progress tracking)
✅ **Browser Metadata** (manifest.json, theme color, Apple touch icon)
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
1. **Add Sample Data**: Populate your MongoDB collections with curriculum content
2. **Create User Accounts**: Set up authentication for students
3. **Add App Icons**: Create the icon files for better browser metadata support
4. **Implement File Uploads**: Complete the practical activity file upload feature
5. **Add More Features**: 
   - Progress analytics
   - Teacher/admin dashboard
   - Content management system
   - Discussion forums
   - Notifications

## Verifying Browser Metadata

1. Build the production version:
   ```bash
   npm run build
   npm start
   ```

2. In Chrome/Edge:
   - Open DevTools (F12)
   - Go to the Application tab
   - Check the Manifest and icon references

## Troubleshooting

- **MongoDB Connection Issues**: Verify `MONGODB_URI` and `JWT_SECRET` are set correctly
- **Type Errors**: Run `npm install` to ensure all dependencies are installed
- **Math Not Rendering**: Check that KaTeX CSS is loaded (should be automatic)

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Shadcn/UI Documentation](https://ui.shadcn.com)
- [KaTeX Documentation](https://katex.org/docs/api.html)

