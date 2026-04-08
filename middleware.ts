import { type NextRequest, NextResponse } from 'next/server';
import { sessionCookieName } from '@/lib/auth/session';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(sessionCookieName)?.value;
  const pathname = request.nextUrl.pathname;

  const isPublicPath =
    pathname.startsWith('/login') ||
    pathname.startsWith('/signup') ||
    pathname.startsWith('/api/auth');

  if (!token && !isPublicPath) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (token && (pathname.startsWith('/login') || pathname.startsWith('/signup'))) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

