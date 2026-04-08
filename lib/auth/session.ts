import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken';

const SESSION_COOKIE_NAME = 'bookmate_session';
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;
const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error('Missing JWT_SECRET environment variable.');
}

export interface SessionUser {
  id: string;
  email: string;
}

function getJwtSecret(): string {
  if (!jwtSecret) {
    throw new Error('Missing JWT_SECRET environment variable.');
  }

  return jwtSecret;
}

function signSessionToken(user: SessionUser): string {
  return jwt.sign(user, getJwtSecret(), { expiresIn: SESSION_MAX_AGE_SECONDS });
}

function verifySessionToken(token: string): SessionUser | null {
  try {
    const decoded = jwt.verify(token, getJwtSecret());

    if (
      typeof decoded === 'object' &&
      decoded !== null &&
      'id' in decoded &&
      'email' in decoded
    ) {
      return {
        id: String(decoded.id),
        email: String(decoded.email),
      };
    }

    return null;
  } catch {
    return null;
  }
}

export async function createSessionCookie(user: SessionUser): Promise<void> {
  const cookieStore = await cookies();
  const token = signSessionToken(user);

  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function getSessionUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  return verifySessionToken(token);
}

export async function requireSessionUser(): Promise<SessionUser> {
  const user = await getSessionUser();

  if (!user) {
    redirect('/login');
  }

  return user;
}

export const sessionCookieName = SESSION_COOKIE_NAME;
