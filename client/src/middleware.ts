import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
  const protected_routes = [ "/feed", "/jobs"]
  const isAuthenticated = request.cookies.get("access_token")?.value;
  const { pathname } = request.nextUrl;
   if (!isAuthenticated && protected_routes.includes(pathname) ){
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (isAuthenticated &&( pathname === "/login" || pathname ==="/signup")) {
    return NextResponse.redirect(new URL("/feed", request.url));
  }
  NextResponse.next()
}

export const config = {
  matcher: ["/feed", "/jobs", "/login", '/signup'],
};
