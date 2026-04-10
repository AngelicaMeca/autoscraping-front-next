import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/seo';
import { type Locale } from '@/lib/i18n/config';

type Props = { params: { lang: Locale }; children: React.ReactNode };

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const { lang } = params;
  const isEn = lang === 'en';

  return {
    title: isEn ? 'Blog | Web Scraping & Data Insights' : 'Blog | Web Scraping y Datos',
    description: isEn
      ? 'Articles about web scraping, data extraction, AI automation and data-driven strategy from the AUTOScraping team.'
      : 'Artículos sobre web scraping, extracción de datos, automatización con IA y estrategia data-driven del equipo AUTOScraping.',
    alternates: {
      canonical: `/${lang}/blog`,
      languages: {
        es: `${SITE_URL}/es/blog`,
        en: `${SITE_URL}/en/blog`,
        'x-default': `${SITE_URL}/es/blog`,
      },
    },
    openGraph: {
      title: isEn ? 'Blog | Web Scraping & Data Insights' : 'Blog | Web Scraping y Datos',
      url: `/${lang}/blog`,
      type: 'website',
    },
  };
}

const buildSchema = (lang: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: lang === 'en' ? 'AUTOScraping Blog' : 'Blog de AUTOScraping',
  url: `${SITE_URL}/${lang}/blog`,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: lang === 'en' ? 'en-US' : 'es-ES',
  description:
    lang === 'en'
      ? 'Articles about web scraping, data extraction and AI automation.'
      : 'Artículos sobre web scraping, extracción de datos y automatización con IA.',
});

export default function BlogLayout({ children, params }: Props) {
  return (
    <>
      <JsonLd schema={buildSchema(params.lang)} />
      {children}
    </>
  );
}
