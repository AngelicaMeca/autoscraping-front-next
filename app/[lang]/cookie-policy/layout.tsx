import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';
import { type Locale } from '@/lib/i18n/config';

type Props = { params: { lang: Locale }; children: React.ReactNode };

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const { lang } = params;
  const isEn = lang === 'en';

  const title = isEn ? 'Cookie Policy | AUTOScraping' : 'Política de Cookies | AUTOScraping';
  const description = isEn
    ? 'Learn how AUTOScraping uses cookies and similar tracking technologies on its website, and how you can manage your preferences.'
    : 'Conoce cómo AUTOScraping utiliza cookies y tecnologías de seguimiento similares en su sitio web y cómo puedes gestionar tus preferencias.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/cookie-policy`,
      languages: {
        es: `${SITE_URL}/es/cookie-policy`,
        en: `${SITE_URL}/en/cookie-policy`,
        'x-default': `${SITE_URL}/es/cookie-policy`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${lang}/cookie-policy`,
      type: 'website',
    },
  };
}

export default function CookiePolicyLayout({ children }: Props) {
  return <>{children}</>;
}
