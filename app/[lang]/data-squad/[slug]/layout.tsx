import type { Metadata } from 'next';
import { servicesData } from './data';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/seo';
import { type Locale } from '@/lib/i18n/config';

type Props = {
  params: { lang: Locale; slug: string };
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = params;
  const data = servicesData[slug];

  if (!data) {
    return {
      title: 'Service not found',
      robots: { index: false, follow: false },
    };
  }

  const serviceTitle = [data.titlePart1, data.titlePartGradient, data.titlePart2]
    .filter(Boolean).join(' ').trim();

  const title = `${serviceTitle} | Data Squad`;
  const rawDesc = data.description ?? '';
  const description = rawDesc.length > 160 ? rawDesc.slice(0, 157).trimEnd() + '...' : rawDesc;
  const url = `/${lang}/data-squad/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${SITE_URL}/es/data-squad/${slug}`,
        en: `${SITE_URL}/en/data-squad/${slug}`,
        'x-default': `${SITE_URL}/es/data-squad/${slug}`,
      },
    },
    openGraph: { title, description, url, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

function buildSchemas(lang: Locale, slug: string) {
  const data = servicesData[slug];
  if (!data) return null;

  const serviceTitle = [data.titlePart1, data.titlePartGradient, data.titlePart2]
    .filter(Boolean).join(' ').trim();
  const pageUrl = `${SITE_URL}/${lang}/data-squad/${slug}`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schemas: Record<string, any>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceTitle,
      provider: { '@id': `${SITE_URL}/#organization` },
      url: pageUrl,
      description: data.description,
      serviceType: lang === 'en' ? 'Data Consulting and Outsourcing' : 'Consultoría y Outsourcing de Datos',
      areaServed: 'Worldwide',
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE_URL}/${lang}/book-a-meeting` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/${lang}` },
        { '@type': 'ListItem', position: 2, name: 'Data Squad', item: `${SITE_URL}/${lang}/data-squad` },
        { '@type': 'ListItem', position: 3, name: serviceTitle, item: pageUrl },
      ],
    },
  ];

  if (data.faqs?.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }

  return schemas;
}

export default function ServiceLayout({ children, params }: Props) {
  const schemas = buildSchemas(params.lang, params.slug);
  return (
    <>
      {schemas && <JsonLd schema={schemas} />}
      {children}
    </>
  );
}
