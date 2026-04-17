import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';
import { type Locale } from '@/lib/i18n/config';

type Props = { params: { lang: Locale }; children: React.ReactNode };

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const { lang } = params;
  const isEn = lang === 'en';

  const title = isEn ? 'Terms and Conditions | AUTOScraping' : 'Términos y Condiciones | AUTOScraping';
  const description = isEn
    ? 'Read the Terms and Conditions governing your access to and use of AUTOScraping\'s website and services.'
    : 'Lee los Términos y Condiciones que rigen el acceso y uso del sitio web y los servicios de AUTOScraping.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/terms-and-conditions`,
      languages: {
        es: `${SITE_URL}/es/terms-and-conditions`,
        en: `${SITE_URL}/en/terms-and-conditions`,
        'x-default': `${SITE_URL}/es/terms-and-conditions`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${lang}/terms-and-conditions`,
      type: 'website',
    },
  };
}

export default function TermsLayout({ children }: Props) {
  return <>{children}</>;
}
