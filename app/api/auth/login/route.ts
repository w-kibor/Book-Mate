import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { getDb } from '@/lib/mongodb/client';
import { createSessionCookie } from '@/lib/auth/session';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const db = await getDb();
    const user = await db.collection('users').findOne({ email: normalizedEmail });

    if (!user || !user.password_hash) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
    }

    const isValidPassword = await bcrypt.compare(password, String(user.password_hash));
    if (!isValidPassword) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
    }

    await createSessionCookie({ id: String(user.id), email: normalizedEmail });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Failed to sign in.' }, { status: 500 });
  }
}
