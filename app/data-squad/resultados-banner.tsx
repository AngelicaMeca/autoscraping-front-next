'use client';

import { Zap, CalendarDays, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '+13.700', label: 'Horas de ingeniería' },
  { value: '99,9%', label: 'Tasa de exito' },
  { value: '+170', label: 'Repositorios mantenidos' },
  { value: '+500', label: 'Sitios web procesados' },
];

export default function ResultadosBanner() {
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
              HISTORIAL DE EJECUCIÓN COMPROBABLE
            </span>
          </div>
        </div>

        <h2 className="text-white font-extrabold leading-[1.15] mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
          Resultados de alto valor{'\n'}
          <br />
          Respaldados por la experiencia
        </h2>

        <p className="mx-auto mb-12 leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem' }}>
          No teorizamos sobre datos; los dominamos.
          <br />
          Transformamos desafíos complejos en sistemas de alto
          <br />
          rendimiento, asegurando que cada entrega potencie tu
          <br />
          capacidad de respuesta y el crecimiento de tu operación.
        </p>

        <div className="flex justify-center mb-14">
          <Link
            href="/book-a-meeting"
            className="inline-flex items-center gap-3 bg-white text-gray-900 font-semibold rounded-full px-8 py-4 text-sm hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
          >
            <CalendarDays className="w-5 h-5" />
            <span>Book a Meeting</span>
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
