import type { Metadata } from 'next';
import { locales, type Locale } from '@/lib/i18n/config';
import { SITE_URL } from '@/lib/seo';
import { es } from '@/lib/i18n/dictionaries/es';
import { en } from '@/lib/i18n/dictionaries/en';

const dicts = { es, en };

type Props = {
  children: React.ReactNode;
  params: { lang: Locale };
};

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const { lang } = params;
  const t = dicts[lang] ?? dicts.es;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.meta.home.title,
      template: `%s | Autoscraping`,
    },
    description: t.meta.home.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        es: `${SITE_URL}/es`,
        en: `${SITE_URL}/en`,
        'x-default': `${SITE_URL}/es`,
      },
    },
  };
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function LangLayout({ children }: Props) {
  // Language context is read by client components via usePathname() + useLang()
  return <>{children}</>;
}
