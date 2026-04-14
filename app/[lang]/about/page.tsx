'use client';

import { ChevronDown, Zap, CircleCheck, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/navbar';
import { useLang } from '@/hooks/useLang';
import Footer from '@/components/footer';
import Timeline from './timeline';
import CtaBanner from './cta-banner';
import ValuesSection from './values-section';
import TeamSection from './team-section';
import ContactCta from './contact-cta';

export default function AboutPage() {
  const lang = useLang();
  const isEn = lang === 'en';
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      <Navbar />

      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #0a0e2a 0%, #111642 20%, #1a1f5e 40%, #1e2470 55%, #1a1f5e 70%, #111642 85%, #0a0e2a 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(120,80,220,0.15) 0%, transparent 70%)',
          }}
        />

        <div className="hidden md:block absolute top-[26%] left-[24%] w-2 h-2 bg-blue-400 rounded-full opacity-70" />
        <div className="hidden md:block absolute top-[32%] right-[24%] w-2 h-2 bg-blue-400 rounded-full opacity-70" />
        <div className="hidden md:block absolute bottom-[28%] left-[32%] w-1.5 h-1.5 bg-pink-400 rounded-full opacity-70" />
        <div className="hidden md:block absolute bottom-[24%] right-[22%] w-1.5 h-1.5 bg-gray-400 rounded-full opacity-40" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-10">
            <div
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-3"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-white text-xs font-bold uppercase tracking-[0.15em]">
                {isEn ? 'THE TEAM BEHIND THE DATA' : 'EL EQUIPO DETRÁS DE LOS DATOS'}
              </span>
            </div>
          </div>

          <h1 className="font-extrabold leading-[1.1] mb-8" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
            <span className="text-white">{isEn ? 'Meet the people who' : 'Conoce a los que'}</span>
            <span className="hidden sm:inline"><br /></span>{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #7c6bf0 0%, #a78bfa 30%, #60a5fa 70%, #7dd3fc 100%)',
              }}
            >
              {isEn ? 'make it happen' : 'lo hacen posible'}
            </span>
          </h1>

          <p className="mx-auto mb-14 leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem' }}>
            {isEn
              ? 'Engineers, analysts and strategists united by the same conviction: data well managed can change the course of any business.'
              : 'Ingenieros, analistas y estrategas unidos por una misma convicción: los datos bien gestionados cambian el rumbo de cualquier negocio.'
            }
          </p>

          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-xs font-bold uppercase tracking-widest">
              {isEn ? 'Explore Our Team' : 'Conoce el equipo'}
            </span>
            <div
              className="w-8 h-12 rounded-full flex items-center justify-center"
              style={{
                border: '2px solid rgba(255,255,255,0.2)',
              }}
            >
              <ChevronDown className="w-4 h-4 text-white/60 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-28 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0a0e2a 0%, #0f1338 40%, #111642 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 40% at 50% 20%, rgba(100,60,200,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              <span className="text-white font-extrabold">{isEn ? 'Our ' : 'Nuestra '}</span>
              <span
                className="bg-clip-text text-transparent font-extrabold italic"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #c084fc 40%, #f472b6 100%)',
                }}
              >
                {isEn ? 'story' : 'historia'}
              </span>
            </h2>
            <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem' }}>
              {isEn
                ? 'From a clear idea to a global operation. This is the path we build with every project, every client and every data point delivered.'
                : 'Desde una idea clara hasta una operación global. Este es el camino que construimos con cada proyecto, cada cliente y cada dato entregado.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="rounded-2xl p-8 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.25) 0%, rgba(168,85,247,0.15) 100%)',
                }}
              >
                <Zap className="w-5 h-5 text-purple-400" />
              </div>

              <h3 className="text-white text-xl font-bold mb-4">
                {isEn ? 'How we started' : 'Como empezamos'}
              </h3>
              <p className="leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem' }}>
                {isEn
                  ? 'It all started with a simple certainty: the most valuable information in the world was on the web, but it remained inaccessible to those who needed it most. We decided to change that.'
                  : 'Todo empezó con una certeza simple: la información más valiosa del mundo estaba en la web, pero seguía siendo inaccesible para quienes más la necesitaban. Decidimos cambiar eso.'}
              </p>

              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: expandedCard === 'origin' ? '400px' : '0px',
                  opacity: expandedCard === 'origin' ? 1 : 0,
                }}
              >
                <div className="pt-2 pb-4 space-y-4" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {isEn ? (
                    <>
                      <p>
                        In 2019, two engineers in Santiago del Estero, Argentina, identified a concrete problem: companies urgently needed massive data, and the solutions that existed were slow, manual and unreliable.
                      </p>
                      <p>
                        We started with a clear goal: to master web scraping at a technical level to offer solutions that actually worked. We learned fast, executed better and prioritized results above everything else.
                      </p>
                      <p>
                        Today we manage complex infrastructures for clients in high-demand markets, while the determination of the first day remains the same.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        En 2019, dos ingenieros en Santiago del Estero, Argentina, identificaron un problema concreto: las empresas necesitaban datos masivos con urgencia, y las soluciones que existían eran lentas, manuales y poco confiables.
                      </p>
                      <p>
                        Arrancamos con una meta clara: dominar el web scraping a nivel técnico para ofrecer soluciones que realmente funcionaran. Aprendimos rápido, ejecutamos mejor y priorizamos los resultados por encima de cualquier otra cosa.
                      </p>
                      <p>
                        Hoy gestionamos infraestructuras complejas para clientes en mercados de alta exigencia, mientras la determinación del primer día sigue siendo la misma.
                      </p>
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={() => setExpandedCard(expandedCard === 'origin' ? null : 'origin')}
                className="flex items-center gap-2 text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors mt-2"
              >
                <span>{expandedCard === 'origin' ? (isEn ? 'Show less' : 'Ver menos') : (isEn ? 'Click to read more' : 'Leer más')}</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300"
                  style={{ transform: expandedCard === 'origin' ? 'rotate(90deg)' : 'rotate(0deg)' }}
                />
              </button>
            </div>

            <div
              className="rounded-2xl p-8 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(236,72,153,0.25) 0%, rgba(244,114,182,0.15) 100%)',
                }}
              >
                <CircleCheck className="w-5 h-5 text-pink-400" />
              </div>

              <h3 className="text-white text-xl font-bold mb-4">
                {isEn ? 'Our mission: turning data into decisions' : 'Nuestra misión: convertir datos en decisiones'}
              </h3>
              <p className="leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem' }}>
                {isEn
                  ? 'We exist so that technology is not a barrier, but the growth engine for our clients.'
                  : 'Existimos para que la tecnología no sea una barrera, sino el motor de crecimiento de nuestros clientes.'}
              </p>

              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: expandedCard === 'mission' ? '400px' : '0px',
                  opacity: expandedCard === 'mission' ? 1 : 0,
                }}
              >
                <div className="pt-2 pb-4 space-y-4" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {isEn ? (
                    <>
                      <p>
                        Data extraction is a sector that historically operated without clear standards. We came to change that with structured engineering, specialized teams and a real commitment to the quality of every delivery.
                      </p>
                      <p>
                        We don't just deliver data. We build the infrastructure that allows our clients to make decisions backed by real, accurate information available when they need it.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        La extracción de datos es un sector que históricamente operó sin estándares claros. Nosotros llegamos a cambiar eso con ingeniería estructurada, equipos especializados y un compromiso real con la calidad de cada entrega.
                      </p>
                      <p>
                        No solo entregamos datos. Construimos la infraestructura que permite a nuestros clientes tomar decisiones respaldadas por información real, precisa y disponible cuando la necesitan.
                      </p>
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={() => setExpandedCard(expandedCard === 'mission' ? null : 'mission')}
                className="flex items-center gap-2 text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors mt-2"
              >
                <span>{expandedCard === 'mission' ? (isEn ? 'Show less' : 'Ver menos') : (isEn ? 'Click to read more' : 'Leer más')}</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300"
                  style={{ transform: expandedCard === 'mission' ? 'rotate(90deg)' : 'rotate(0deg)' }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-28 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #111642 0%, #0d1130 50%, #0a0e2a 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 40% 30% at 20% 50%, rgba(100,60,200,0.06) 0%, transparent 70%)',
          }}
        />
        <Timeline />
      </section>

      <CtaBanner />
      <ValuesSection />
      <TeamSection />
      <ContactCta />

      <Footer />
    </main>
  );
}
