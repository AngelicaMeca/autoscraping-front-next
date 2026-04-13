'use client';

import { Zap, CalendarDays, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLang } from '@/hooks/useLang';

export default function ResultadosBanner() {
  const lang = useLang();
  const isEn = lang === 'en';

  const stats = [
    { value: '+13.700', label: isEn ? 'Engineering hours' : 'Horas de ingeniería' },
    { value: '99,9%', label: isEn ? 'Success rate' : 'Tasa de éxito' },
    { value: '+170', label: isEn ? 'Maintained repositories' : 'Repositorios mantenidos' },
    { value: '+500', label: isEn ? 'Websites processed' : 'Sitios web procesados' },
  ];

  return (
    <section className="relative overflow-hidden py-28 px-6">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #3b28cc 0%, #4f39e0 25%, #5b42f0 50%, #6366f1 70%, #7c83f7 100%)',
        }}
      />

      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(139,120,255,0.5) 0%, transparent 70%)',
          transform: 'translate(20%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)',
          transform: 'translate(-30%, 40%)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[400px] opacity-15"
        style={{
          background: 'radial-gradient(ellipse, rgba(167,139,250,0.4) 0%, transparent 60%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex items-center gap-2.5 rounded-full px-6 py-3"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Zap className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-xs font-bold uppercase tracking-[0.15em]">
              {isEn ? 'PROVABLE EXECUTION HISTORY' : 'HISTORIAL DE EJECUCIÓN COMPROBABLE'}
            </span>
          </div>
        </div>

        <h2 className="text-white font-extrabold leading-[1.15] mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
          {isEn ? (
            <>
              High-value results
              <br />
              backed by experience
            </>
          ) : (
            <>
              Resultados de alto valor
              <br />
              respaldados por la experiencia
            </>
          )}
        </h2>

        <p className="mx-auto mb-12 leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem' }}>
          {isEn ? (
            <>
              We don&apos;t theorize about data; we master it.
              <br />
              We transform complex challenges into high-performance
              <br />
              systems, ensuring every delivery boosts your
              <br />
              responsiveness and operational growth.
            </>
          ) : (
            <>
              No teorizamos sobre datos; los dominamos.
              <br />
              Transformamos desafíos complejos en sistemas de alto
              <br />
              rendimiento, asegurando que cada entrega potencie tu
              <br />
              capacidad de respuesta y el crecimiento de tu operación.
            </>
          )}
        </p>

        <div className="flex justify-center mb-14">
          <Link
            href={`/${lang}/book-a-meeting`}
            className="inline-flex items-center gap-3 bg-white text-gray-900 font-semibold rounded-full px-8 py-4 text-sm hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
          >
            <CalendarDays className="w-5 h-5" />
            <span>{isEn ? 'Book a Meeting' : 'Agenda una reunión'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl px-6 py-6 text-center"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <p className="text-white font-extrabold text-3xl md:text-4xl leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
