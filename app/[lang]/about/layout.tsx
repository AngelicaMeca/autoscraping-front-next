import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/seo';
import { type Locale } from '@/lib/i18n/config';
import { es } from '@/lib/i18n/dictionaries/es';
import { en } from '@/lib/i18n/dictionaries/en';

const dicts = { es, en };

type Props = { params: { lang: Locale }; children: React.ReactNode };

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const { lang } = params;
  const t = dicts[lang] ?? dicts.es;

  return {
    title: t.meta.about.title,
    description: t.meta.about.description,
    alternates: {
      canonical: `/${lang}/about`,
      languages: {
        es: `${SITE_URL}/es/about`,
        en: `${SITE_URL}/en/about`,
        'x-default': `${SITE_URL}/es/about`,
      },
    },
    openGraph: {
      title: t.meta.about.title,
      description: t.meta.about.description,
      url: `/${lang}/about`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.about.title,
      description: t.meta.about.description,
    },
  };
}

export default function AboutLayout({ children, params }: Props) {
  const { lang } = params;
  const aboutLabel = lang === 'en' ? 'About Us' : 'Nosotros';

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/${lang}` },
      { '@type': 'ListItem', position: 2, name: aboutLabel, item: `${SITE_URL}/${lang}/about` },
    ],
  };

  return (
    <>
      <JsonLd schema={breadcrumb} />
      {children}
    </>
  );
}
