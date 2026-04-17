import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { getStrapiImageUrl, getPublishedAt, getExcerptFromBlocks, type StrapiPost } from '@/lib/strapi';

interface Props {
  posts: StrapiPost[];
  lang: string;
}

function formatDate(dateStr?: string, locale = 'es') {
  if (!dateStr) return '';
  try {
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'es-AR', {
      year: 'numeric', month: 'short', day: 'numeric',
    }).format(new Date(dateStr));
  } catch { return ''; }
}

export default function BlogRelated({ posts, lang }: Props) {
  const isEn = lang === 'en';
  if (!posts.length) return null;

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-1">
          {isEn ? 'Related Articles' : 'Artículos relacionados'}
        </h2>
        <p className="text-sm text-gray-400">
          {isEn ? 'More from the same category' : 'Más de la misma categoría'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => {
          const coverUrl = getStrapiImageUrl(post.cover, 'small');
          const excerpt = post.excerpt ?? getExcerptFromBlocks(post.content, 100);
          const date = formatDate(getPublishedAt(post), lang);

          return (
            <Link
              key={post.documentId ?? post.id}
              href={`/${lang}/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Cover */}
              <div className="relative w-full h-40 overflow-hidden bg-gray-100">
                {coverUrl ? (
                  <Image
                    src={coverUrl}
                    alt={Array.isArray(post.cover) ? (post.cover[0]?.alternativeText ?? post.title) : post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #f3f0ff, #e9d5ff)' }} />
                )}
                {post.category && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide"
                    style={{ background: 'rgba(139,92,246,0.9)', color: 'white' }}>
                    {post.category.name}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                {date && (
                  <p className="inline-flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                    <Calendar className="w-3 h-3" />
                    {date}
                  </p>
                )}
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-purple-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                {excerpt && (
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 flex-1 line-clamp-2">{excerpt}</p>
                )}
                <div className="mt-auto flex items-center gap-1 text-purple-600 text-xs font-semibold">
                  {isEn ? 'Read' : 'Leer'}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
