'use client';

import { useLang } from '@/hooks/useLang';
import { TrendingUp, BookOpen, Cpu } from 'lucide-react';

export default function BlogHero() {
  const lang = useLang();
  const isEn = lang === 'en';

  const cards = [
    {
      icon: <TrendingUp className="w-5 h-5 text-purple-400" />,
      label: isEn ? 'Industry trends' : 'Tendencias del sector',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-pink-400" />,
      label: isEn ? 'Guides & best practices' : 'Guías y mejores prácticas',
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      label: isEn ? 'New technologies' : 'Nuevas tecnologías',
    },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, #0a0e2a 0%, #111642 20%, #1a1f5e 40%, #1e2470 55%, #1a1f5e 70%, #111642 85%, #0a0e2a 100%)',
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 45%, rgba(120,80,220,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Decorative dots */}
      <div className="hidden md:block absolute top-[28%] left-[20%] w-2 h-2 bg-blue-400 rounded-full opacity-60" />
      <div className="hidden md:block absolute top-[33%] right-[20%] w-2 h-2 bg-blue-400 rounded-full opacity-60" />
      <div className="hidden md:block absolute bottom-[30%] left-[28%] w-1.5 h-1.5 bg-pink-400 rounded-full opacity-60" />
      <div className="hidden md:block absolute bottom-[26%] right-[23%] w-1.5 h-1.5 bg-gray-400 rounded-full opacity-40" />
      <div className="hidden md:block absolute top-[50%] left-[10%] w-1 h-1 bg-purple-400 rounded-full opacity-50" />
      <div className="hidden md:block absolute top-[45%] right-[12%] w-1 h-1 bg-purple-400 rounded-full opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex items-center gap-2.5 rounded-full px-6 py-3"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-white text-xs font-bold uppercase tracking-[0.18em]">
              {isEn ? 'Technical Resources' : 'Recursos Técnicos'}
            </span>
          </div>
        </div>

        {/* H1 */}
        <h1
          className="font-extrabold leading-[1.08] mb-7"
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
        >
          <span className="text-white">
            {isEn ? 'Data engineering,' : 'Ingeniería de datos,'}
          </span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #a78bfa 0%, #c084fc 40%, #f472b6 100%)',
            }}
          >
            {isEn ? 'unfiltered' : 'sin filtro'}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-16 leading-relaxed max-w-xl"
          style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.15rem' }}
        >
          {isEn
            ? 'Weekly cases, analysis and lessons, straight from our team.'
            : 'Casos, análisis y lecciones semanales, directo desde nuestro equipo.'}
        </p>

        {/* Cards row */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                {card.icon}
              </div>
              <span className="text-white text-sm font-semibold whitespace-nowrap">
                {card.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
