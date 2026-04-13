'use client';

import { Settings, Zap, Heart, Sparkles, BookOpen, RefreshCw } from 'lucide-react';
import { useLang } from '@/hooks/useLang';

function ValueCard({
  icon: Icon,
  iconBg,
  title,
  description,
  borderColor,
}: {
  icon: typeof Settings;
  iconBg: string;
  title: string;
  description: string;
  borderColor: string;
}) {
  return (
    <div
      className="rounded-2xl p-7 transition-all duration-300 hover:shadow-lg"
      style={{
        background: '#ffffff',
        border: `1.5px solid ${borderColor}`,
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: iconBg }}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-gray-900 font-bold text-lg mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function ValuesSection() {
  const lang = useLang();
  const isEn = lang === 'en';

  const values = [
    {
      icon: Settings,
      iconBg: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
      title: isEn ? 'Data obsession' : 'Obsesión por el dato',
      description: isEn
        ? 'An inaccurate data point is a potential bad decision. We accept no shortcuts: truthfulness is the axis of our architecture.'
        : 'Un dato impreciso es una mala decisión en potencia. No aceptamos atajos: la veracidad es el eje de nuestra arquitectura.',
      borderColor: 'rgba(167,139,250,0.25)',
    },
    {
      icon: Zap,
      iconBg: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
      title: isEn ? 'Speed with judgment' : 'Velocidad con criterio',
      description: isEn
        ? 'We act fast, but with rigor. In high-demand businesses, technical precision weighs as much as time.'
        : 'Actuamos rápido, pero con rigor. En negocios de alta exigencia, la precisión técnica pesa tanto como el tiempo.',
      borderColor: 'rgba(244,114,182,0.25)',
    },
    {
      icon: Heart,
      iconBg: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
      title: isEn ? 'Real closeness' : 'Cercanía real',
      description: isEn
        ? 'No bureaucracy or ticket systems. We build trust through direct contact between specialists and those who need the solution.'
        : 'Sin burocracia ni sistema de tickets. Construimos confianza mediante el trato directo entre los especialistas y quienes necesitan la solución.',
      borderColor: 'rgba(34,211,238,0.25)',
    },
    {
      icon: Sparkles,
      iconBg: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
      title: isEn ? 'Radical transparency' : 'Transparencia radical',
      description: isEn
        ? 'We are honest about what is viable and what is not. Our policy is clarity, ethics, and legality at every stage of the project.'
        : 'Somos honestos sobre lo que es viable y lo que no. Nuestra política es la claridad, ética y legalidad en cada etapa del proyecto.',
      borderColor: 'rgba(74,222,128,0.25)',
    },
    {
      icon: BookOpen,
      iconBg: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
      title: isEn ? 'Operational responsibility' : 'Responsabilidad operativa',
      description: isEn
        ? 'We do not delegate quality. Every team member assumes full commitment over the result of each delivery.'
        : 'No delegamos la calidad. Cada integrante del equipo asume el compromiso total sobre el resultado de la entrega.',
      borderColor: 'rgba(251,146,60,0.25)',
    },
    {
      icon: RefreshCw,
      iconBg: 'linear-gradient(135deg, #e879f9 0%, #d946ef 100%)',
      title: isEn ? 'Constant evolution' : 'Evolución constante',
      description: isEn
        ? 'Standing still is moving backwards. We learn and experiment every day to ensure our methodology is always the most advanced.'
        : 'Quedarse estático es retroceder. Aprendemos y experimentamos cada día para asegurar que nuestra metodología siempre sea la más avanzada.',
      borderColor: 'rgba(232,121,249,0.25)',
    },
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gray-50">
      <div
        className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/4"
        style={{ background: 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-15 translate-x-1/3 translate-y-1/4"
        style={{ background: 'linear-gradient(135deg, #bfdbfe 0%, #93c5fd 100%)' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5"
              style={{
                background: 'rgba(139,92,246,0.08)',
                border: '1px solid rgba(139,92,246,0.15)',
              }}
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.12em]">
                {isEn ? 'What guides us' : 'Lo que nos guía'}
              </span>
            </div>
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            <span className="text-gray-900 font-extrabold">{isEn ? 'Our ' : 'Nuestros '}</span>
            <span
              className="font-extrabold italic bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #c084fc 100%)',
              }}
            >
              {isEn ? 'values' : 'valores'}
            </span>
          </h2>

          <p className="text-gray-500 mt-5 max-w-xl mx-auto leading-relaxed" style={{ fontSize: '1.05rem' }}>
            {isEn
              ? 'Standards that govern our work and guarantee the solidity of every solution we offer.'
              : 'Estándares que rigen nuestro trabajo y garantizan la solidez de cada solución que ofrecemos.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <ValueCard key={v.title} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
