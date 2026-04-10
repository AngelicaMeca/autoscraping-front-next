import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';
import { type Locale } from '@/lib/i18n/config';

/**
 * Future blog post layout.
 * Replace the static title/description with dynamic data from your CMS or MDX.
 */
type Props = { params: { lang: Locale; slug: string }; children: React.ReactNode };

export async function generateMetadata({ params }: { params: { lang: Locale; slug: string } }): Promise<Metadata> {
  const { lang, slug } = params;

  // TODO: fetch post metadata from CMS / MDX file based on slug
  // const post = await getPost(slug, lang);

  return {
    // title: post.title,
    // description: post.excerpt,
    alternates: {
      canonical: `/${lang}/blog/${slug}`,
      languages: {
        es: `${SITE_URL}/es/blog/${slug}`,
        en: `${SITE_URL}/en/blog/${slug}`,
        'x-default': `${SITE_URL}/es/blog/${slug}`,
      },
    },
    openGraph: {
      // title: post.title,
      url: `/${lang}/blog/${slug}`,
      type: 'article',
    },
  };
}

export default function BlogPostLayout({ children }: Props) {
  return <>{children}</>;
}
