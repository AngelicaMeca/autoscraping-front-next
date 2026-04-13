'use client';

import { useLang } from '@/hooks/useLang';

export default function CtaBanner() {
  const lang = useLang();
  const isEn = lang === 'en';

  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1060 0%, #2a1a8a 20%, #3b2ab0 40%, #2563eb 70%, #3b82f6 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 80% at 20% 50%, rgba(139,92,246,0.4) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 30% 60% at 80% 50%, rgba(59,130,246,0.2) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2
          className="text-white font-extrabold leading-tight mb-6"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
        >
          {isEn
            ? 'The future of your operation starts with a partner who takes charge'
            : 'El futuro de tu operación empieza con un aliado que se hace cargo'}
        </h2>
        <p
          className="leading-relaxed max-w-2xl mx-auto"
          style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem' }}
        >
          {isEn
            ? 'Every project we take on has the same goal: ensuring our clients are always one step ahead.'
            : 'Cada proyecto que tomamos tiene el mismo norte: que nuestros clientes siempre estén un paso adelante.'}
        </p>
      </div>
    </section>
  );
}
