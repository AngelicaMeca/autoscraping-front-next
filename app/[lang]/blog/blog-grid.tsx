'use client';

import { useState, useMemo } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Search, BookOpen, Bell } from 'lucide-react';
import type { StrapiPost, StrapiCategory } from '@/lib/strapi';
import BlogCard from './blog-card';

interface Props {
  posts: StrapiPost[];
  categories: StrapiCategory[];
  lang: string;
  initialCategory?: string;
}

export default function BlogGrid({ posts, categories, lang, initialCategory = 'all' }: Props) {
  const isEn = lang === 'en';
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState('');

  // Category filter via URL so server can also filter
  const handleCategory = (slug: string) => {
    setActiveCategory(slug);
    const params = new URLSearchParams(searchParams?.toString());
    if (slug === 'all') {
      params.delete('category');
    } else {
      params.set('category', slug);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Client-side text search on already-loaded posts
  const filtered = useMemo(() => {
    if (!query.trim()) return posts;
    const q = query.toLowerCase();
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        (p.excerpt ?? '').toLowerCase().includes(q),
    );
  }, [posts, query]);

  const allLabel = isEn ? 'All Articles' : 'Todos los artículos';

  return (
    <>
      {/* ── Filters ──────────────────────────────────────────────────── */}
      <section className="py-12 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {isEn ? 'Explore our content' : 'Explora nuestro contenido'}
            </h2>
            <p className="text-gray-500">
              {isEn
                ? 'Filter by category or search directly for what interests you.'
                : 'Filtra por categoría o busca directamente lo que te interesa.'}
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-xl mx-auto mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={isEn ? 'Search articles…' : 'Buscar artículos…'}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm transition"
            />
          </div>

          {/* Category pills — "All" + dynamic from Strapi */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => handleCategory('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] text-white shadow-md shadow-purple-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {allLabel}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategory(cat.slug)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 capitalize ${
                  activeCategory === cat.slug
                    ? 'bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] text-white shadow-md shadow-purple-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid ─────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center max-w-xl mx-auto py-16">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {query
                  ? (isEn ? 'No results found' : 'Sin resultados')
                  : (isEn ? 'No articles in this category yet' : 'Todavía no hay artículos en esta categoría')}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                {isEn
                  ? 'New content is on its way. Check back soon!'
                  : '¡El contenido está en camino. Volvé pronto!'}
              </p>
              <div className="flex justify-center">
                <div
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-purple-700"
                  style={{ background: 'rgba(147,51,234,0.08)', border: '1px solid rgba(147,51,234,0.2)' }}
                >
                  <Bell className="w-4 h-4" />
                  {isEn ? 'Weekly updates are on the way' : 'Las actualizaciones semanales están en camino'}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <BlogCard
                  key={post.documentId ?? post.id}
                  post={post}
                  lang={lang}
                  featured={i === 0 && filtered.length > 2}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
