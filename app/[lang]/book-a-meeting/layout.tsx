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
    title: t.meta.bookMeeting.title,
    description: t.meta.bookMeeting.description,
    alternates: {
      canonical: `/${lang}/book-a-meeting`,
      languages: {
        es: `${SITE_URL}/es/book-a-meeting`,
        en: `${SITE_URL}/en/book-a-meeting`,
        'x-default': `${SITE_URL}/es/book-a-meeting`,
      },
    },
    openGraph: {
      title: t.meta.bookMeeting.title,
      description: t.meta.bookMeeting.description,
      url: `/${lang}/book-a-meeting`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.bookMeeting.title,
      description: t.meta.bookMeeting.description,
    },
  };
}

export default function BookAMeetingLayout({ children, params }: Props) {
  const { lang } = params;
  const pageLabel = lang === 'en' ? 'Book a Meeting' : 'Agenda una Reunión';

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/${lang}` },
        { '@type': 'ListItem', position: 2, name: pageLabel, item: `${SITE_URL}/${lang}/book-a-meeting` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: pageLabel,
      url: `${SITE_URL}/${lang}/book-a-meeting`,
      provider: { '@id': `${SITE_URL}/#organization` },
    },
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      {children}
    </>
  );
}
