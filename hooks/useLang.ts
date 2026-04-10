'use client';

import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';

/**
 * Reads the current locale from the URL path.
 * Works in any client component without a context provider.
 * Assumes the route structure is /[lang]/...
 */
export function useLang(): Locale {
  const pathname = usePathname();
  return pathname?.startsWith('/en') ? 'en' : 'es';
}
