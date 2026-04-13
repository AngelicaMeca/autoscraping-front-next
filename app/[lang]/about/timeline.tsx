'use client';

import { useLang } from '@/hooks/useLang';

function TimelineCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      className="rounded-2xl px-7 py-6"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <h4 className="text-white font-bold text-base mb-2">{title}</h4>
      <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: '1.6' }}>
        {description}
      </p>
    </div>
  );
}

export default function Timeline() {
  const lang = useLang();
  const isEn = lang === 'en';

  const timelineData = [
    {
      year: '2019',
      yearColor: '#f472b6',
      dotColor: '#a78bfa',
      title: isEn ? 'From Upwork to own brand' : 'De Upwork a marca propia',
      description: isEn
        ? 'AUTOScraping is born after scaling global demand for data engineering.'
        : 'Nace AUTOScraping tras escalar la demanda global de ingeniería de datos.',
      side: 'left' as const,
    },
    {
      year: '2020',
      yearColor: '#22d3ee',
      dotColor: '#f472b6',
      title: isEn ? 'Leap to the corporate market' : 'Salto al mercado corporativo',
      description: isEn
        ? 'First corporate client acquired and technical team expanded.'
        : 'Captación del primer cliente corporativo y expansión del equipo técnico.',
      side: 'right' as const,
    },
    {
      year: '2021',
      yearColor: '#a78bfa',
      dotColor: '#22d3ee',
      title: isEn ? 'Internationalization' : 'Internacionalización',
      description: isEn
        ? 'Legal incorporation in the United States to streamline operations in global markets.'
        : 'Constitución legal en Estados Unidos para agilizar la operación en mercados globales.',
      side: 'left' as const,
    },
    {
      year: '2022',
      yearColor: '#4ade80',
      dotColor: '#4ade80',
      title: isEn ? 'Data Factory launch' : 'Lanzamiento Data Factory',
      description: isEn
        ? 'We activated the mass extraction unit and began commercial missions.'
        : 'Activamos la unidad de extracción masiva e inicio de misiones comerciales.',
      side: 'right' as const,
    },
    {
      year: '2023',
      yearColor: '#60a5fa',
      dotColor: '#f472b6',
      title: isEn ? 'Data Squad deployment' : 'Despliegue de Data Squad',
      description: isEn
        ? 'Integrated team deployment and opening of operational headquarters in Argentina.'
        : 'Despliegue de equipos integrados y apertura de sede operativa en Argentina.',
      side: 'left' as const,
    },
    {
      year: '2024',
      yearColor: '#fbbf24',
      dotColor: '#fbbf24',
      title: isEn ? 'Series A & B clients' : 'Clientes Series A y B',
      description: isEn
        ? 'Consolidation as technology partners for companies in Silicon Valley.'
        : 'Afianzamiento como socios tecnológicos de empresas en Silicon Valley.',
      side: 'right' as const,
    },
    {
      year: '2025',
      yearColor: '#f472b6',
      dotColor: '#a78bfa',
      title: isEn ? 'MetricFlow & Crawlos' : 'MetricFlow y Crawlos',
      description: isEn
        ? 'Launch of new business units and partnership with Bright Data.'
        : 'Lanzamiento de nuevas unidades de negocio y partnership con Bright Data.',
      side: 'left' as const,
    },
    {
      year: '2026',
      yearColor: '#22d3ee',
      dotColor: '#22d3ee',
      title: isEn ? 'Projection' : 'Proyección',
      description: isEn
        ? 'Continued growth of our global network and brand strengthening.'
        : 'Crecimiento continuo de nuestra red global y fortalecimiento de la marca.',
      side: 'right' as const,
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(168,130,255,0.3) 5%, rgba(244,114,182,0.3) 50%, rgba(34,211,238,0.2) 95%, transparent 100%)',
        }}
      />

      <div className="absolute left-6 top-0 bottom-0 w-px md:hidden"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(168,130,255,0.3) 5%, rgba(244,114,182,0.3) 50%, rgba(34,211,238,0.2) 95%, transparent 100%)',
        }}
      />

      <div className="flex flex-col gap-12 md:gap-16">
        {timelineData.map((item) => (
          <div key={item.year} className="relative">
            <div
              className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 z-10 top-1/2 -translate-y-1/2"
              style={{
                backgroundColor: item.dotColor,
                boxShadow: `0 0 12px ${item.dotColor}60, 0 0 24px ${item.dotColor}30`,
              }}
            />

            <div className="md:hidden flex flex-col gap-3 pl-14">
              <span
                className="font-extrabold text-2xl"
                style={{ color: item.yearColor }}
              >
                {item.year}
              </span>
              <TimelineCard title={item.title} description={item.description} />
            </div>

            <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
              {item.side === 'left' ? (
                <>
                  <div className="flex justify-end">
                    <div className="max-w-sm w-full">
                      <TimelineCard title={item.title} description={item.description} />
                    </div>
                  </div>
                  <div className="w-6" />
                  <div className="flex items-center">
                    <span
                      className="font-extrabold text-3xl"
                      style={{ color: item.yearColor }}
                    >
                      {item.year}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-end items-center">
                    <span
                      className="font-extrabold text-3xl"
                      style={{ color: item.yearColor }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className="w-6" />
                  <div className="flex justify-start">
                    <div className="max-w-sm w-full">
                      <TimelineCard title={item.title} description={item.description} />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
