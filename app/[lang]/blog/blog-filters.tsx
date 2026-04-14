'use client';

import { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useLang } from '@/hooks/useLang';

export default function BlogFilters() {
  const lang = useLang();
  const isEn = lang === 'en';
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: isEn ? 'All Articles' : 'Todos los artículos' },
    { id: 'web-scraping', label: 'Web Scraping' },
    { id: 'automation', label: isEn ? 'Automation' : 'Automatización' },
    { id: 'case-studies', label: isEn ? 'Case Studies' : 'Casos de estudio' },
    { id: 'python', label: isEn ? 'Python & Tools' : 'Python y herramientas' },
    { id: 'industries', label: isEn ? 'Industries' : 'Industrias' },
    { id: 'ethics', label: isEn ? 'Ethics & Regulations' : 'Ética y regulaciones' },
  ];

  return (
    <section className="py-16 px-6 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
            placeholder={isEn ? 'Search articles...' : 'Buscar artículos...'}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm transition"
          />
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] text-white shadow-md shadow-purple-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm hover:text-purple-800 transition-colors group">
            {isEn ? 'Discover more' : 'Descubre más'}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
