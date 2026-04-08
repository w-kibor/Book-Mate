import { randomUUID } from 'crypto';
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

    if (password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters.' }, { status: 400 });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const db = await getDb();
    const users = db.collection('users');

    const existingUser = await users.findOne({ email: normalizedEmail });
    if (existingUser) {
      return NextResponse.json({ error: 'An account with this email already exists.' }, { status: 409 });
    }

    const userId = randomUUID();
    const passwordHash = await bcrypt.hash(password, 10);

    await users.insertOne({
      id: userId,
      email: normalizedEmail,
      password_hash: passwordHash,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    await db.collection('profiles').insertOne({
      id: userId,
      grade_id: '7',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    await createSessionCookie({ id: userId, email: normalizedEmail });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ error: 'Failed to create account.' }, { status: 500 });
  }
}
