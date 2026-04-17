import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';
import { type Locale } from '@/lib/i18n/config';

type Props = { params: { lang: Locale }; children: React.ReactNode };

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const { lang } = params;
  const isEn = lang === 'en';

  const title = isEn ? 'Privacy Policy | AUTOScraping' : 'Política de Privacidad | AUTOScraping';
  const description = isEn
    ? 'Learn how AUTOScraping collects, uses, and protects your personal data in accordance with GDPR, CCPA, and Argentine Law 25.326.'
    : 'Conoce cómo AUTOScraping recopila, usa y protege tus datos personales de acuerdo con el RGPD, la CCPA y la Ley Argentina 25.326.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/privacy-policy`,
      languages: {
        es: `${SITE_URL}/es/privacy-policy`,
        en: `${SITE_URL}/en/privacy-policy`,
        'x-default': `${SITE_URL}/es/privacy-policy`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${lang}/privacy-policy`,
      type: 'website',
    },
  };
}

export default function PrivacyPolicyLayout({ children }: Props) {
  return <>{children}</>;
}
