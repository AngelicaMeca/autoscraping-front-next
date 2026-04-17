import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';
import { type Locale } from '@/lib/i18n/config';

type Props = { params: { lang: Locale }; children: React.ReactNode };

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const { lang } = params;
  const isEn = lang === 'en';

  const title = isEn ? 'Disclaimer | AUTOScraping' : 'Aviso Legal | AUTOScraping';
  const description = isEn
    ? 'Read the AUTOScraping disclaimer governing the use of its website and services, including liability limitations and intellectual property rights.'
    : 'Lee el aviso legal de AUTOScraping que rige el uso de su sitio web y servicios, incluyendo limitaciones de responsabilidad y derechos de propiedad intelectual.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/disclaimer`,
      languages: {
        es: `${SITE_URL}/es/disclaimer`,
        en: `${SITE_URL}/en/disclaimer`,
        'x-default': `${SITE_URL}/es/disclaimer`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${lang}/disclaimer`,
      type: 'website',
    },
  };
}

export default function DisclaimerLayout({ children }: Props) {
  return <>{children}</>;
}
