import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { SignupForm } from '@/components/auth/signup-form';

export default async function SignupPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-yellow-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Book Mate</h1>
          <p className="text-muted-foreground">
            CBC Learning Platform for Grade 7-9
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}


