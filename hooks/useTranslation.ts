'use client';

import { useLang } from './useLang';
import { es } from '@/lib/i18n/dictionaries/es';
import { en } from '@/lib/i18n/dictionaries/en';

const dictionaries = { es, en } as const;

/**
 * Returns the translation dictionary for the current language.
 * Usage: const t = useTranslation(); then use t.nav.solutions, etc.
 */
export function useTranslation() {
  return dictionaries[useLang()];
}
