import { RedirectToSignIn } from '@clerk/nextjs';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';


{/* This is middleware is used to protect certain routes in the application.*/}
const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/resume(.*)',
    '/ai-cover-letter(.*)',
    '/interview(.*)',
    '/onboarding(.*)',
]);

export default clerkMiddleware(async (auth, req)=> {

  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  // If the user is authenticated, allow the request to proceed
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};