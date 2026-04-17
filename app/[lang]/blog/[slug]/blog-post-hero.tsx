import Image from 'next/image';
import Link from 'next/link';
import { Clock, ChevronRight } from 'lucide-react';
import { getStrapiImageUrl, getPublishedAt, type StrapiPost } from '@/lib/strapi';
import BlogShare from './blog-share';

interface Props {
  post: StrapiPost;
  lang: string;
  readingTime: number;
}

function formatDate(dateStr?: string, locale = 'es') {
  if (!dateStr) return '';
  try {
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'es-AR', {
      year: 'numeric', month: 'long', day: 'numeric',
    }).format(new Date(dateStr));
  } catch { return ''; }
}

export default function BlogPostHero({ post, lang, readingTime }: Props) {
  const isEn = lang === 'en';
  const coverUrl = getStrapiImageUrl(post.cover, 'large');
  const date = formatDate(getPublishedAt(post), lang);
  const categoryName = post.category?.name ?? '';
  const categorySlug = post.category?.slug ?? '';

  const authorPhotoUrl = post.author?.photo
    ? getStrapiImageUrl(post.author.photo as Parameters<typeof getStrapiImageUrl>[0])
    : '';

  return (
    <section
      className="relative overflow-hidden pt-28 pb-0"
      style={{
        background: 'linear-gradient(160deg, #0a0e2a 0%, #111642 30%, #1a1f5e 60%, #0d1236 100%)',
      }}
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(120,80,220,0.6) 0%, transparent 70%)' }} />
        <div className="absolute top-16 right-0 w-80 h-80 opacity-10 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs font-medium mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
          <Link href={`/${lang}/blog`} className="hover:text-white transition-colors">
            Blog
          </Link>
          {categoryName && (
            <>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href={`/${lang}/blog?category=${categorySlug}`} className="hover:text-white transition-colors capitalize">
                {categoryName}
              </Link>
            </>
          )}
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="line-clamp-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{post.title}</span>
        </nav>

        {/* Badges row */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          {categoryName && (
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide"
              style={{ background: 'rgba(139,92,246,0.25)', border: '1px solid rgba(139,92,246,0.5)', color: '#c4b5fd' }}>
              {categoryName}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <Clock className="w-3.5 h-3.5" />
            {readingTime} {isEn ? 'min read' : 'min de lectura'}
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-extrabold text-white leading-[1.1] mb-5"
          style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)' }}
        >
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '680px' }}>
            {post.excerpt}
          </p>
        )}

        {/* Author + date + share */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          {/* Author */}
          <div className="flex items-center gap-3">
            {authorPhotoUrl ? (
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/20">
                <Image src={authorPhotoUrl} alt={post.author?.name ?? ''} width={40} height={40} className="object-cover w-full h-full" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)' }}>
                {(post.author?.name ?? 'A')[0].toUpperCase()}
              </div>
            )}
            <div>
              <p className="text-white font-semibold text-sm leading-none mb-1">{post.author?.name ?? 'AUTOScraping'}</p>
              {date && <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{date}</p>}
            </div>
          </div>

          {/* Share buttons */}
          <BlogShare title={post.title} lang={lang} />
        </div>
      </div>

      {/* Cover image — sits at bottom of hero, half-overlapping the white section */}
      {coverUrl && (
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="relative w-full rounded-t-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/7' }}>
            <Image
              src={coverUrl}
              alt={Array.isArray(post.cover) ? (post.cover[0]?.alternativeText ?? post.title) : post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(10,14,42,0.3) 100%)' }} />
          </div>
        </div>
      )}
    </section>
  );
}
