'use client';

import { ChevronDown, Zap, CircleCheck, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Timeline from './timeline';
import CtaBanner from './cta-banner';
import ValuesSection from './values-section';
import TeamSection from './team-section';
import ContactCta from './contact-cta';

export default function AboutPage() {
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
                EL EQUIPO DETR&Aacute;S DE LOS DATOS
              </span>
            </div>
          </div>

          <h1 className="font-extrabold leading-[1.1] mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            <span className="text-white">Conoce a los que</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #7c6bf0 0%, #a78bfa 30%, #60a5fa 70%, #7dd3fc 100%)',
              }}
            >
              lo hacen posible
            </span>
          </h1>

          <p className="mx-auto mb-14 leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem' }}>
            Ingenieros, analistas y estrategas unidos por una misma convicci&oacute;n: los datos
            <br />
            bien gestionados cambian el rumbo de cualquier negocio.
          </p>

          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-xs font-bold uppercase tracking-widest">
              Explore Our Team
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
              <span className="text-white font-extrabold">Nuestra </span>
              <span
                className="bg-clip-text text-transparent font-extrabold italic"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #c084fc 40%, #f472b6 100%)',
                }}
              >
                historia
              </span>
            </h2>
            <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem' }}>
              Desde una idea clara hasta una operaci&oacute;n global. Este es el camino que
              <br />
              construimos con cada proyecto, cada cliente y cada dato entregado.
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

              <h3 className="text-white text-xl font-bold mb-4">Como empezamos</h3>
              <p className="leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem' }}>
                Todo empez&oacute; con una certeza simple: la informaci&oacute;n
                m&aacute;s valiosa del mundo estaba en la web, pero
                segu&iacute;a siendo inaccesible para quienes m&aacute;s la
                necesitaban. Decidimos cambiar eso.
              </p>

              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: expandedCard === 'origin' ? '400px' : '0px',
                  opacity: expandedCard === 'origin' ? 1 : 0,
                }}
              >
                <div className="pt-2 pb-4 space-y-4" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  <p>
                    En 2019, dos ingenieros en Santiago del Estero, Argentina, identificaron un problema concreto: las empresas necesitaban datos masivos con urgencia, y las soluciones que exist&iacute;an eran lentas, manuales y poco confiables.
                  </p>
                  <p>
                    Arrancamos con una meta clara: dominar el web scraping a nivel t&eacute;cnico para ofrecer soluciones que realmente funcionaran. Aprendimos r&aacute;pido, ejecutamos mejor y priorizamos los resultados por encima de cualquier otra cosa.
                  </p>
                  <p>
                    Hoy gestionamos infraestructuras complejas para clientes en mercados de alta exigencia, mientras la determinaci&oacute;n del primer d&iacute;a sigue siendo la misma.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setExpandedCard(expandedCard === 'origin' ? null : 'origin')}
                className="flex items-center gap-2 text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors mt-2"
              >
                <span>{expandedCard === 'origin' ? 'Show less' : 'Click to read more'}</span>
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

              <h3 className="text-white text-xl font-bold mb-4">Nuestra misi&oacute;n: convertir datos en decisiones</h3>
              <p className="leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem' }}>
                Existimos para que la tecnolog&iacute;a no sea una
                barrera, sino el motor de crecimiento de nuestros
                clientes.
              </p>

              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: expandedCard === 'mission' ? '400px' : '0px',
                  opacity: expandedCard === 'mission' ? 1 : 0,
                }}
              >
                <div className="pt-2 pb-4 space-y-4" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  <p>
                    La extracci&oacute;n de datos es un sector que hist&oacute;ricamente oper&oacute; sin est&aacute;ndares claros. Nosotros llegamos a cambiar eso con ingenier&iacute;a estructurada, equipos especializados y un compromiso real con la calidad de cada entrega.
                  </p>
                  <p>
                    No solo entregamos datos. Construimos la infraestructura que permite a nuestros clientes tomar decisiones respaldadas por informaci&oacute;n real, precisa y disponible cuando la necesitan.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setExpandedCard(expandedCard === 'mission' ? null : 'mission')}
                className="flex items-center gap-2 text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors mt-2"
              >
                <span>{expandedCard === 'mission' ? 'Show less' : 'Click to read more'}</span>
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
