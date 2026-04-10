import type { MetadataRoute } from 'next';
import { servicesData as dataFactoryServices } from './[lang]/data-factory/[slug]/data';
import { servicesData as dataSquadServices } from './[lang]/data-squad/[slug]/data';
import { locales } from '@/lib/i18n/config';

const SITE_URL = 'https://www.autoscraping.com';
const LAST_MODIFIED = new Date();

type Freq = 'weekly' | 'monthly';

function localized(path: string, changeFrequency: Freq, priority: number): MetadataRoute.Sitemap {
  return locales.map((lang) => ({
    url: `${SITE_URL}/${lang}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    // Root (redirects to /es or /en)
    { url: SITE_URL, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 1 },
    ...localized('', 'weekly', 1),
    ...localized('/about', 'monthly', 0.8),
    ...localized('/data-factory', 'weekly', 0.9),
    ...localized('/data-squad', 'weekly', 0.9),
    ...localized('/book-a-meeting', 'monthly', 0.7),
    ...localized('/blog', 'weekly', 0.6),
  ];

  const dataFactoryRoutes: MetadataRoute.Sitemap = Object.keys(dataFactoryServices).flatMap(
    (slug) => localized(`/data-factory/${slug}`, 'monthly', 0.7)
  );

  const dataSquadRoutes: MetadataRoute.Sitemap = Object.keys(dataSquadServices).flatMap(
    (slug) => localized(`/data-squad/${slug}`, 'monthly', 0.7)
  );

  return [...staticRoutes, ...dataFactoryRoutes, ...dataSquadRoutes];
}
