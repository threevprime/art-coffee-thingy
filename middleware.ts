import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define public routes that don't require authentication
const publicRoutes = ['/login', '/signup', '/auth/callback', '/'];
const authRoutes = ['/login', '/signup'];

export async function middleware(req: NextRequest) {
  // Create a response object that we can modify
  const res = NextResponse.next();
  
  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res });
  
  try {
    // Refresh session if expired - required for Server Components
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('Session error:', error);
      // If there's an error getting the session, redirect to login
      const redirectUrl = new URL('/login', req.url);
      redirectUrl.searchParams.set('error', 'session_error');
      return NextResponse.redirect(redirectUrl);
    }
    
    // Get the current path
    const path = req.nextUrl.pathname;
    
    // Check if the current path is a public route
    const isPublicRoute = publicRoutes.some(route => path.startsWith(route));
    const isAuthRoute = authRoutes.some(route => path.startsWith(route));
    
    // Handle authentication logic
    if (!session && !isPublicRoute) {
      // Redirect unauthenticated users to login
      const redirectUrl = new URL('/login', req.url);
      redirectUrl.searchParams.set('redirectedFrom', path);
      return NextResponse.redirect(redirectUrl);
    }
    
    if (session && isAuthRoute) {
      // Redirect authenticated users away from auth pages
      return NextResponse.redirect(new URL('/', req.url));
    }
    
    // Return the response with the session refreshed
    return res;
  } catch (error) {
    console.error('Auth middleware error:', error);
    // On error, redirect to login with error message
    const redirectUrl = new URL('/login', req.url);
    redirectUrl.searchParams.set('error', 'auth_error');
    return NextResponse.redirect(redirectUrl);
  }
}

// Configure the middleware to run on all routes except static files and API routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api routes
     */
    '/((?!_next/static|_next/image|favicon.ico|public|api).*)',
  ],
};