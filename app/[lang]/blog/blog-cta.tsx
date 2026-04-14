'use client';

import { useLang } from '@/hooks/useLang';
import { ArrowRight, Footprints } from 'lucide-react';
import Link from 'next/link';

export default function BlogCta() {
  const lang = useLang();
  const isEn = lang === 'en';

  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0e2a 0%, #1a1f5e 50%, #0a0e2a 100%)',
      }}
    >
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-8 right-16 w-48 h-48 bg-pink-500/8 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-8 left-16 w-40 h-40 bg-blue-500/8 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Label */}
        <div className="flex justify-center mb-7">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-purple-300"
            style={{
              background: 'rgba(147,51,234,0.12)',
              border: '1px solid rgba(147,51,234,0.25)',
            }}
          >
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
            {isEn ? 'Take the first step' : 'Da el primer paso'}
          </span>
        </div>

        {/* H2 */}
        <h2
          className="font-extrabold text-white mb-5"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', lineHeight: 1.12 }}
        >
          {isEn ? (
            <>
              Every project starts with{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)',
                }}
              >
                a conversation
              </span>
            </>
          ) : (
            <>
              Cada proyecto empieza con{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)',
                }}
              >
                una conversación
              </span>
            </>
          )}
        </h2>

        {/* Description */}
        <p
          className="mb-10 leading-relaxed max-w-lg mx-auto"
          style={{ color: 'rgba(255,255,255,0.52)', fontSize: '1.05rem' }}
        >
          {isEn
            ? 'No endless forms or slow processes. Tell us what you need and we\'ll get started.'
            : 'Sin formularios eternos ni procesos lentos. Cuéntanos qué necesitas y empezamos.'}
        </p>

        {/* Button */}
        <div className="relative inline-block">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#C084FC]/40 via-[#60A5FA]/40 to-[#F472B6]/40 rounded-xl blur-xl" />
          <Link
            href={`/${lang}/book-a-meeting`}
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#7B5FE8] to-[#9D62FA] hover:from-[#6B4FD8] hover:to-[#8D52EA] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-base"
          >
            {isEn ? "Let's talk" : 'Hablemos'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
