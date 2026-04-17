import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';
import { type Locale } from '@/lib/i18n/config';
import { getPost, getStrapiImageUrl, getPublishedAt } from '@/lib/strapi';
import JsonLd from '@/components/JsonLd';

type Props = { params: { lang: Locale; slug: string }; children: React.ReactNode };

export async function generateMetadata({ params }: { params: { lang: Locale; slug: string } }): Promise<Metadata> {
  const { lang, slug } = params;
  const post = await getPost(slug);
  if (!post) return { title: lang === 'en' ? 'Article not found' : 'Artículo no encontrado' };

  const coverUrl = getStrapiImageUrl(post.cover, 'large');
  const canonical = `${SITE_URL}/${lang}/blog/${slug}`;
  const excerpt = post.excerpt ?? '';

  return {
    title: post.title,
    description: excerpt,
    alternates: {
      canonical,
      languages: {
        es: `${SITE_URL}/es/blog/${slug}`,
        en: `${SITE_URL}/en/blog/${slug}`,
        'x-default': `${SITE_URL}/es/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: excerpt,
      url: canonical,
      type: 'article',
      publishedTime: getPublishedAt(post),
      modifiedTime: post.updatedAt,
      ...(coverUrl ? {
        images: [{
          url: coverUrl,
          width: Array.isArray(post.cover) ? (post.cover[0]?.width ?? 1200) : 1200,
          height: Array.isArray(post.cover) ? (post.cover[0]?.height ?? 630) : 630,
          alt: Array.isArray(post.cover) ? (post.cover[0]?.alternativeText ?? post.title) : post.title,
        }],
      } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: excerpt,
      ...(coverUrl ? { images: [coverUrl] } : {}),
    },
  };
}

function buildArticleSchema(post: NonNullable<Awaited<ReturnType<typeof getPost>>>, lang: string) {
  const coverUrl = getStrapiImageUrl(post.cover, 'large');
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt ?? '',
    url: `${SITE_URL}/${lang}/blog/${post.slug}`,
    datePublished: getPublishedAt(post) ?? post.createdAt,
    dateModified: post.updatedAt,
    inLanguage: lang === 'en' ? 'en-US' : 'es-ES',
    publisher: { '@id': `${SITE_URL}/#organization` },
    ...(coverUrl ? { image: { '@type': 'ImageObject', url: coverUrl } } : {}),
    ...(post.author ? { author: { '@type': 'Person', name: post.author.name } } : {}),
  };
}

export default async function BlogPostLayout({ children, params }: Props) {
  const post = await getPost(params.slug);
  return (
    <>
      {post && <JsonLd schema={buildArticleSchema(post, params.lang)} />}
      {children}
    </>
  );
}
