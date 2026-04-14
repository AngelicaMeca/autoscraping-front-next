'use client';

import { useLang } from '@/hooks/useLang';
import { BookOpen, Bell } from 'lucide-react';

export default function BlogEmpty() {
  const lang = useLang();
  const isEn = lang === 'en';

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Skeleton cards grid for visual context */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 opacity-30 pointer-events-none select-none">
          {/* Large card */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 rounded-2xl bg-gray-100 h-80 lg:h-full min-h-[320px] animate-pulse" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-2xl bg-gray-100 h-40 animate-pulse" />
          ))}
        </div>

        {/* Coming soon message */}
        <div className="text-center max-w-xl mx-auto">
          <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-purple-500" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {isEn ? 'Articles coming soon' : 'Artículos próximamente'}
          </h2>

          <p className="text-gray-500 leading-relaxed mb-8">
            {isEn
              ? 'We are preparing in-depth guides on web scraping, data pipelines, and AI-powered automation. Check back soon.'
              : 'Estamos preparando guías en profundidad sobre web scraping, pipelines de datos y automatización con IA. Volvé pronto.'}
          </p>

          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-purple-700"
            style={{
              background: 'rgba(147,51,234,0.08)',
              border: '1px solid rgba(147,51,234,0.2)',
            }}
          >
            <Bell className="w-4 h-4" />
            {isEn ? 'Weekly updates are on the way' : 'Las actualizaciones semanales están en camino'}
          </div>
        </div>
      </div>
    </section>
  );
}
