import { NextResponse } from "next/server";

// Middleware performs light, non-destructive checks for session cookies.
// NOTE: This middleware tries to detect common Supabase session cookie names.
// Because this project currently stores auth tokens in localStorage, middleware
// cannot reliably enforce dashboard protection until a server-set cookie is available.

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Skip public files and _next static files
  if (PUBLIC_FILE.test(pathname) || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  // common cookie names to probe (best-effort)
  const tokenCookieNames = [
    "supabase.auth.token",
    "supabase-session",
    "sb:token",
    "sb-access-token",
    "supabase_token",
    "fintrack_session",
  ];

  let hasSession = false;
  try {
    for (const name of tokenCookieNames) {
      const cookie = req.cookies.get ? req.cookies.get(name) : null;
      if (cookie) {
        const value = cookie.value ?? cookie;
        if (value && value !== "null") {
          hasSession = true;
          break;
        }
      }
    }
  } catch (err) {
    // If cookie access fails, don't block — fallback to allow
    hasSession = false;
  }

  // If user is on login or signup and already has a session cookie, redirect them away
  if (
    (pathname === "/pages/login" || pathname === "/pages/signup") &&
    hasSession
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/pages/dashboard";
    return NextResponse.redirect(url);
  }

  // For dashboard routes we do not force-redirect when session cookie is missing
  // because many sessions are stored in localStorage in the current app.
  // Use server-side layout checks for robust protection.

  return NextResponse.next();
}

export const config = {
  matcher: ["/pages/login", "/pages/signup", "/pages/dashboard/:path*"],
};
