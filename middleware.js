import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.[^/]+$/;
const ALLOWED_PREFIXES = ["/_next"];
const ALLOWED_PATHS = new Set(["/", "/favicon.ico", "/robots.txt", "/sitemap.xml"]);
const ALLOWED_PAGE_PREFIXES = [
  "/locations",
  "/services",
  "/b2b-lead-generation-agency",
  "/lead-quality-improvement",
  "/free-audit",
  "/book-a-call",
  "/results",
  "/resources",
  "/company",
  "/get-free-lead-quality-audit",
];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (
    ALLOWED_PATHS.has(pathname) ||
    ALLOWED_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    ALLOWED_PAGE_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)) ||
    PUBLIC_FILE.test(pathname)
  ) {
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
