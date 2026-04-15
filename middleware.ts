import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, type Locale } from '@/lib/i18n/config';

/**
 * Detects the preferred locale from the Accept-Language header.
 * Defaults to Spanish if no English preference is found.
 */
function detectLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  const preferred = acceptLanguage.split(',')[0]?.split('-')[0]?.toLowerCase();
  return preferred === 'en' ? 'en' : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path already starts with a known locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    // Already localized — just tag the response header so root layout knows the lang
    const lang: Locale = pathname.startsWith('/en') ? 'en' : 'es';
    const response = NextResponse.next();
    response.headers.set('x-lang', lang);
    return response;
  }

  // No locale in path → redirect to the detected (or default) locale version
  const lang = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname}`;
  const response = NextResponse.redirect(url);
  response.headers.set('x-lang', lang);
  return response;
}

export const config = {
  // Skip API routes, Next.js internals, and static files
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|og-image.png|logo.png|testimonials|founders|empleados).*)',
  ],
};
