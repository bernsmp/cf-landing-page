import { NextRequest, NextResponse } from 'next/server';

// /sme is a spoken URL (said out loud on the AI Explored podcast), so people
// type it in every casing. Page routing is case-sensitive; normalize here.
// next.config redirects can't do this: their matching is case-insensitive,
// so a /SME -> /sme rule matches /sme itself and loops.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname !== '/sme' && pathname.toLowerCase() === '/sme') {
    const url = request.nextUrl.clone();
    url.pathname = '/sme';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  // all 8 case variants of "sme"; the lowercase one passes straight through
  // in the proxy function
  matcher: ['/:path(sme|smE|sMe|sME|Sme|SmE|SMe|SME)'],
};
