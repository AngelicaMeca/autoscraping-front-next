'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import {
  getStrapiImageUrl,
  getExcerptFromBlocks,
  getPublishedAt,
  type StrapiPost,
} from '@/lib/strapi';

interface Props {
  post: StrapiPost;
  lang: string;
  featured?: boolean;
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'web-scraping': { bg: 'bg-blue-50',   text: 'text-blue-700',   border: 'border-blue-200' },
  'automation':   { bg: 'bg-purple-50',  text: 'text-purple-700', border: 'border-purple-200' },
  'case-studies': { bg: 'bg-green-50',   text: 'text-green-700',  border: 'border-green-200' },
  'python':       { bg: 'bg-yellow-50',  text: 'text-yellow-700', border: 'border-yellow-200' },
  'industries':   { bg: 'bg-orange-50',  text: 'text-orange-700', border: 'border-orange-200' },
  'ethics':       { bg: 'bg-red-50',     text: 'text-red-700',    border: 'border-red-200' },
};
const DEFAULT_COLOR = { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200' };

function formatDate(dateStr?: string, locale = 'es') {
  if (!dateStr) return '';
  try {
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'es-AR', {
      year: 'numeric', month: 'short', day: 'numeric',
    }).format(new Date(dateStr));
  } catch {
    return '';
  }
}

export default function BlogCard({ post, lang, featured = false }: Props) {
  const coverUrl = getStrapiImageUrl(post.cover, 'medium');
  const excerpt = post.excerpt ?? getExcerptFromBlocks(post.content, 180);
  const categorySlug = typeof post.category === 'object' ? post.category?.slug : (post.category as string | undefined);
  const categoryName = typeof post.category === 'object' ? post.category?.name : (post.category as string | undefined);
  const categoryColors = categorySlug
    ? (CATEGORY_COLORS[categorySlug] ?? DEFAULT_COLOR)
    : DEFAULT_COLOR;
  const date = formatDate(getPublishedAt(post), lang);

  return (
    <Link
      href={`/${lang}/blog/${post.slug}`}
      className={`group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      {/* Cover */}
      {coverUrl ? (
        <div className={`relative w-full overflow-hidden bg-gray-100 ${featured ? 'h-56 md:h-72' : 'h-44'}`}>
          <Image
            src={coverUrl}
            alt={
              Array.isArray(post.cover)
                ? (post.cover[0]?.alternativeText ?? post.title)
                : post.title
            }
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
          />
        </div>
      ) : (
        <div
          className={`w-full flex items-center justify-center ${featured ? 'h-56 md:h-72' : 'h-44'}`}
          style={{ background: 'linear-gradient(135deg, #f3f0ff 0%, #e9d5ff 50%, #f0fdf4 100%)' }}
        >
          <span className="text-4xl opacity-30">📄</span>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          {categoryName && (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border capitalize ${categoryColors.bg} ${categoryColors.text} ${categoryColors.border}`}>
              <Tag className="w-3 h-3" />
              {categoryName}
            </span>
          )}
          {date && (
            <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
          )}
          {post.author?.name && (
            <span className="text-xs text-gray-400 font-medium">
              {post.author.name}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`font-bold text-gray-900 leading-snug mb-3 group-hover:text-purple-700 transition-colors ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
            {excerpt}
          </p>
        )}

        {/* CTA */}
        <div className="mt-auto pt-2 flex items-center gap-1.5 text-purple-600 font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
          {lang === 'en' ? 'Read article' : 'Leer artículo'}
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
