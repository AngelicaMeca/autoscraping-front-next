'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLang } from '@/hooks/useLang';
import { useTranslation } from '@/hooks/useTranslation';

export default function BlogPage() {
  const lang = useLang();
  const isEn = lang === 'en';

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-28 pb-4 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb
            items={[{ label: 'Blog' }]}
            className="text-gray-500"
          />
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-purple-600 text-xs font-bold uppercase tracking-widest mb-4">
            {isEn ? 'Knowledge Hub' : 'Centro de Conocimiento'}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {isEn ? 'Blog' : 'Blog'}
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent text-4xl md:text-5xl mt-2">
              {isEn ? 'Web Scraping & Data Insights' : 'Web Scraping y Datos'}
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {isEn
              ? 'Practical articles about web scraping, data extraction, AI automation and data strategy from our engineering team.'
              : 'Artículos prácticos sobre web scraping, extracción de datos, automatización con IA y estrategia data-driven de nuestro equipo de ingeniería.'}
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {isEn ? 'Articles coming soon' : 'Artículos próximamente'}
          </h2>
          <p className="text-gray-500 leading-relaxed">
            {isEn
              ? 'We are preparing in-depth guides on web scraping, data pipelines, and AI-powered automation. Stay tuned.'
              : 'Estamos preparando guías en profundidad sobre web scraping, pipelines de datos y automatización con IA. Vuelve pronto.'}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
