import { Suspense } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import BlogHero from './blog-hero';
import BlogGrid from './blog-grid';
import BlogCta from './blog-cta';
import { getPosts, getCategories } from '@/lib/strapi';
import { type Locale } from '@/lib/i18n/config';

export const revalidate = 60;

interface Props {
  params: { lang: Locale };
  searchParams: { category?: string };
}

export default async function BlogPage({ params, searchParams }: Props) {
  const { lang } = params;
  const activeCategory = searchParams?.category ?? 'all';

  // Fetch posts and categories in parallel
  const [{ posts }, categories] = await Promise.all([
    getPosts(lang, activeCategory !== 'all' ? activeCategory : undefined),
    getCategories(),
  ]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <BlogHero />
      {/* Suspense needed for useSearchParams() inside BlogGrid */}
      <Suspense fallback={<div className="py-32 text-center text-gray-400">Cargando…</div>}>
        <BlogGrid posts={posts} categories={categories} lang={lang} initialCategory={activeCategory} />
      </Suspense>
      <BlogCta />
      <Footer />
    </main>
  );
}
