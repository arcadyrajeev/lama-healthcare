import { NextRequest, NextResponse } from "next/server";

const ADMIN_CODE = process.env.A_PATH!;
const ADMIN_SECRET = process.env.A_SECRET!;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const adminRoot = `/${ADMIN_CODE}`;

  // Allow admin login page
  if (pathname === `${adminRoot}/login`) {
    return NextResponse.next();
  }

  // Allow admin login API
  if (pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  const session = request.cookies.get("admin_session")?.value;

  // Protect admin pages
  if (pathname.startsWith(adminRoot)) {
    if (session !== ADMIN_SECRET) {
      return NextResponse.redirect(new URL(`${adminRoot}/login`, request.url));
    }
  }

  // Protect admin APIs
  if (pathname.startsWith("/api/admin")) {
    if (session !== ADMIN_SECRET) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (except we handle /api/admin in code)
     * - _next/static
     * - _next/image
     * - favicon
     * - images and other static assets
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
    "/api/admin/:path*",
  ],
};
