import { notFound } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import BlogPostHero from './blog-post-hero';
import BlogToc from './blog-toc';
import BlogPostContent from '../blog-post-content';
import BlogAuthorCard from './blog-author-card';
import BlogRelated from './blog-related';
import { BlogShareCompact } from './blog-share';
import {
  getPost,
  getRelatedPosts,
  calcReadingTime,
  extractHeadings,
  type StrapiBlock,
} from '@/lib/strapi';
import { type Locale } from '@/lib/i18n/config';

export const dynamic = 'force-dynamic';

interface Props {
  params: { lang: Locale; slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, lang } = params;

  const post = await getPost(slug);
  if (!post) notFound();

  const blocks = (post.content ?? []) as StrapiBlock[];
  const readingTime = calcReadingTime(blocks);
  const headings = extractHeadings(blocks);

  // Fetch related posts (same category, excluding this post)
  const relatedPosts = post.category?.slug
    ? await getRelatedPosts(post.category.slug, slug)
    : [];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <BlogPostHero post={post} lang={lang} readingTime={readingTime} />

      {/* ── Content + TOC ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex gap-12">

          {/* Article body */}
          <article className="flex-1 min-w-0">
            <BlogPostContent blocks={blocks} />
          </article>

          {/* Sticky TOC sidebar (desktop only) */}
          {headings.length > 0 && (
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-28 bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
                <BlogToc headings={headings} lang={lang} />
              </div>
            </aside>
          )}
        </div>

        {/* Mobile TOC (below article on small screens) */}
        {headings.length > 0 && (
          <div className="lg:hidden mt-10 bg-gray-50 border border-gray-100 rounded-2xl p-5">
            <BlogToc headings={headings} lang={lang} />
          </div>
        )}
      </section>

      {/* ── Author card ────────────────────────────────────────────────── */}
      {post.author && (
        <section className="max-w-4xl mx-auto px-6 pb-10">
          <BlogAuthorCard author={post.author} lang={lang} />
        </section>
      )}

      {/* ── Share section ──────────────────────────────────────────────── */}
      <section
        className="py-16 px-6"
        style={{
          background: 'linear-gradient(160deg, #0a0e2a 0%, #111642 50%, #0d1236 100%)',
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(167,139,250,0.7)' }}>
            {lang === 'en' ? 'Share this article' : 'Compartir este artículo'}
          </p>
          <h2 className="text-2xl font-extrabold text-white mb-6">
            {lang === 'en' ? 'Did you find it useful?' : '¿Te resultó útil?'}
          </h2>
          <BlogShareCompact title={post.title} lang={lang} />
        </div>
      </section>

      {/* ── Related articles ───────────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6">
          <BlogRelated posts={relatedPosts} lang={lang} />
        </section>
      )}

      <Footer />
    </main>
  );
}
