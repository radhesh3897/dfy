import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.[^/]+$/;
const ALLOWED_PREFIXES = ["/_next"];
const ALLOWED_PATHS = new Set(["/", "/favicon.ico", "/robots.txt", "/sitemap.xml"]);

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (ALLOWED_PATHS.has(pathname) || ALLOWED_PREFIXES.some((prefix) => pathname.startsWith(prefix)) || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  const homeUrl = request.nextUrl.clone();
  homeUrl.pathname = "/";
  homeUrl.search = "";

  return NextResponse.redirect(homeUrl);
}

export const config = {
  matcher: ["/((?!api).*)"],
};
