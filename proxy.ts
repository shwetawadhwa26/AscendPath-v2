import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(req: NextRequest) {
  // 1. We only want to protect routes inside the /admin folder
  if (req.nextUrl.pathname.startsWith('/admin')) {
    
    // 2. Grab the authorization header from the browser
    const basicAuth = req.headers.get('authorization');

    if (basicAuth) {
      // 3. Decode the base64 username and password the browser sends
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      // 4. Compare it against your secure .env variables
      const validUser = process.env.ADMIN_USERNAME;
      const validPass = process.env.ADMIN_PASSWORD;

      if (user === validUser && pwd === validPass) {
        // Success! Let them through to the admin page.
        return NextResponse.next();
      }
    }

    // 5. If they fail, or haven't logged in yet, trigger the browser's native login popup
    return new NextResponse('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Admin Area"',
      },
    });
  }

  // Allow all other public pages (Homepage, Sales Reps, etc.) to load normally
  return NextResponse.next();
}

// 6. Tell Next.js exactly which paths this middleware should run on for performance
export const config = {
  matcher: ['/admin/:path*'],
};