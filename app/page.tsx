'use client';

import { ChevronDown, Lightbulb, Monitor, Database, Zap, Shield, TrendingUp, Target, Settings, ShoppingCart, Chrome as HomeIcon, Plane, Heart, ShoppingBag, Lock, CreditCard, Ticket, UserCheck, Building2, ChartBar as BarChart3, ChevronLeft, ChevronRight, Sparkles, ArrowRight, FileText, Infinity, Quote, Star, ExternalLink, MessageCircle, ThumbsUp, Code, File as Document, ArrowUpRight as Growth, Eye, Clock, CircleCheck as CheckCircle, Boxes, Wrench, RefreshCw, Users, UsersRound, Linkedin, Github, Twitter, Facebook, Instagram, BookText, Mail, Phone, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactCTA from '@/components/ContactCTA';
import InstagramCard from '@/components/InstagramCard';
import AnimatedSection from '@/components/AnimatedSection';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [logoSlide, setLogoSlide] = useState(0);
  const [teamSlide, setTeamSlide] = useState(0);

  const industries = [
    { name: 'E-COMMERCE', icon: ShoppingCart },
    { name: 'REAL ESTATE', icon: HomeIcon },
    { name: 'TURISMO Y VIAJES', icon: Plane },
    { name: 'SALUD Y PHARMA', icon: Heart },
    { name: 'CONSUMO Y RETAIL', icon: ShoppingBag },
    { name: 'CIBERSEGURIDAD', icon: Lock },
    { name: 'FINTECH', icon: CreditCard },
    { name: 'EVENTOS Y TICKETING', icon: Ticket },
    { name: 'RECURSOS HUMANOS Y TALENTO', icon: UserCheck },
    { name: 'GOBIERNO Y SECTOR PÚBLICO', icon: Building2 },
    { name: 'CONSULTORÍA Y ANALYTICS', icon: BarChart3 },
  ];

  const companies = [
    'Metalist', 'Clau', 'Cella', 'DataCo', 'TechPro', 'InfoSys', 'WebFlow', 'DataLink'
  ];

  const teamMembers = [
    {
      name: 'Francisco Battan',
      title: 'CEO',
      initials: 'FB',
      quote: 'Los datos son nuestro lenguaje, pero lo que realmente importa es lo que significan para tu negocio. Te acompañamos en el proceso de convertir información en decisiones concretas.',
      expertise: [
        { title: 'Ejecucion', subtitle: 'De Proyectos' },
        { title: 'Relacion', subtitle: 'Con Clientes' },
        { title: 'Liderazgo', subtitle: 'Técnico' }
      ]
    },
    {
      name: 'Benjamín Arjona',
      title: 'CCO',
      initials: 'BA',
      quote: 'Cada negocio tiene necesidades de datos distintas y únicas. Nos enfocamos en entender las tuyas para construir una solución que se ajuste a lo que necesitas hoy y escale con lo que viene mañana.',
      expertise: [
        { title: 'Desarrollo', subtitle: 'Comercial' },
        { title: 'Soluciones', subtitle: 'A Medida' },
        { title: 'Partnerships', subtitle: 'Estratégicos' }
      ]
    },
    {
      name: 'Cesar Farhat',
      title: 'CTO',
      initials: 'CF',
      quote: 'Como pioneros en extracción de datos, combinamos tecnología de avanzada con automatización para que lo técnico nunca sea tu problema.',
      expertise: [
        { title: 'Arquitectura', subtitle: 'De Datos' },
        { title: 'Automatización', subtitle: 'A Escala' },
        { title: 'Innovación', subtitle: 'Técnica' }
      ]
    }
  ];

  const itemsPerView = 4;
  const maxSlide = Math.ceil(industries.length / itemsPerView) - 1;
  const logosPerView = 4;
  const maxLogoSlide = Math.ceil(companies.length / logosPerView) - 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const nextLogoSlide = () => {
    setLogoSlide((prev) => (prev >= maxLogoSlide ? 0 : prev + 1));
  };

  const prevLogoSlide = () => {
    setLogoSlide((prev) => (prev <= 0 ? maxLogoSlide : prev - 1));
  };

  // Autoplay para el carrusel de líderes
  useEffect(() => {
    const timer = setInterval(() => {
      setTeamSlide((prev) => (prev + 1) % teamMembers.length);
    }, 5000); // 5 segundos
    return () => clearInterval(timer);
  }, [teamMembers.length]);

  return (
    <>
      <Navbar variant="adaptive" />

      <div className="relative min-h-screen overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0E155B 0%, #2A327A 25%, #9D62FA 50%, #2A327A 75%, #0E155B 100%)'
        }}>

        <AnimatedSection>
          <main className="relative z-10 mx-auto max-w-7xl px-6 pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="max-w-4xl">
            <p className="text-blue-200 text-sm font-medium mb-8">
              Leading Web Scraping Solutions
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 md:mb-8">
              Ingeniería humana<br className="hidden md:block"/>
              para una extracción<br className="hidden md:block"/>
              de datos continua y precisa
            </h1>

            <p className="text-blue-200 text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-2xl">
              Resolvemos los desafíos técnicos del scraping para que recibas información estructurada y lista para usar. Mientras tú escalas tu negocio, nosotros aseguramos la integridad y transparencia de cada dato.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-a-meeting" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-purple-700 font-medium px-8 py-3 rounded-lg transition inline-block text-center">
                Hablemos de tu proyecto
              </Link>
              <a href="#infraestructura" className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-medium px-8 py-3 rounded-lg border-2 border-white/30 transition inline-block text-center">
                Descubre más
              </a>
            </div>
          </div>
          </main>
        </AnimatedSection>
      </div>
      
      <AnimatedSection>
        <section id="infraestructura" className="relative bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/20 py-24 pb-64 z-20">
        {/* Decorative elements - 3 circles with specified colors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(167, 139, 250, 0.4)' }}></div>
          <div className="absolute top-1/2 right-20 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(14, 165, 233, 0.4)' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(167, 139, 250, 0.35)' }}></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-medium mb-4 px-4 py-2 rounded-full border bg-white" style={{ color: '#9D62FA', borderColor: 'rgba(157, 98, 250, 0.3)' }}>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#9D62FA' }}></div>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#9D62FA' }}></div>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#9D62FA' }}></div>
              </div>
              NUESTROS PILARES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Infraestructura que da<br className="hidden md:inline" />
              <span className="md:ml-2" style={{ background: 'linear-gradient(to right, #9D62FA, #7B68EE, #2A327A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>sentido a tu estrategia</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Combinamos capacidad técnica y soporte directo para que tu equipo se centre en el análisis, delegando en nosotros la complejidad de la extracción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Columna Izquierda */}
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl p-8 border" style={{ background: 'linear-gradient(to bottom right, rgba(157, 98, 250, 0.15), rgba(157, 98, 250, 0.05))', borderColor: 'rgba(157, 98, 250, 0.2)' }}>
                <span className="inline-flex items-center gap-2 text-xs font-medium mb-4" style={{ color: '#9D62FA' }}>
                  <Lightbulb className="w-4 h-4" />
                  INGENIERÍA HUMANA
                </span>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: '#9D62FA' }}>
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Acompañamiento real
                </h3>
                <p className="text-gray-600 mb-4">
                  Eliminamos la barrera de los tickets. Tratas directamente con los ingenieros que gestionan tus datos, para resolver dudas.
                </p>
                <a href="#" className="font-medium text-sm flex items-center gap-2" style={{ color: '#9D62FA' }}>
                  Soluciones en tiempo real
                  <span>→</span>
                </a>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-200">
                <span className="inline-flex items-center gap-2 text-xs font-medium mb-4" style={{ color: '#7B68EE' }}>
                  <Database className="w-4 h-4" />
                  CALIDAD DEL DATO
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Información lista para usar para que empieces a trabajar de inmediato
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Monitor className="w-10 h-10 mx-auto mb-2" style={{ color: '#9D62FA' }} />
                    <p className="text-sm font-semibold text-gray-900">Datos limpios</p>
                  </div>
                  <div className="text-center">
                    <RefreshCw className="w-10 h-10 mx-auto mb-2" style={{ color: '#9D62FA' }} />
                    <p className="text-sm font-semibold text-gray-900">Datos verificados</p>
                  </div>
                  <div className="text-center">
                    <Database className="w-10 h-10 mx-auto mb-2" style={{ color: '#9D62FA' }} />
                    <p className="text-sm font-semibold text-gray-900">Datos estructurados</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-10 h-10 mx-auto mb-2" style={{ color: '#9D62FA' }} />
                    <p className="text-sm font-semibold text-gray-900">Archivos precisos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-8 border border-gray-200">
                <span className="inline-flex items-center gap-2 text-xs font-medium mb-4" style={{ color: '#7B68EE' }}>
                  <Shield className="w-4 h-4" />
                  ÉTICA Y LEGALIDAD
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Transparencia y seguridad legal
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'rgba(157, 98, 250, 0.15)' }}>
                      <Shield className="w-3 h-3" style={{ color: '#9D62FA' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        Garantizamos una extracción de datos honesta
                      </p>
                      <p className="text-gray-600 text-sm">
                        Deja estructuras limpias
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'rgba(157, 98, 250, 0.15)' }}>
                      <TrendingUp className="w-3 h-3" style={{ color: '#9D62FA' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        Tu negocio crece
                      </p>
                      <p className="text-gray-600 text-sm">
                        con la tranquilidad de trabajar con procesos éticos y claros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl p-8 text-white" style={{ background: 'linear-gradient(to bottom right, #2A327A, #1e2456)' }}>
                <span className="inline-flex items-center gap-2 text-blue-200 text-xs font-medium mb-4">
                  <Zap className="w-4 h-4" />
                  AGILIDAD DE LA RESPUESTA
                </span>
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Sin esperas ni intermediarios
                </h3>
                <p className="text-blue-100 text-sm">
                  Valoramos tu tiempo. Hablas directamente con los especialistas que gestionan tu solución para obtener respuestas al momento y asegurar que nada detenga el ritmo de tu negocio.
                </p>
              </div>

              <div className="rounded-3xl p-8 border" style={{ background: 'linear-gradient(to bottom right, rgba(123, 104, 238, 0.15), rgba(123, 104, 238, 0.05))', borderColor: 'rgba(123, 104, 238, 0.2)' }}>
                <span className="inline-flex items-center gap-2 text-xs font-medium mb-4" style={{ color: '#7B68EE' }}>
                  <Target className="w-4 h-4" />
                  POTENCIA TÉCNICA
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Extracción sin obstáculos
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'rgba(123, 104, 238, 0.2)' }}>
                      <Shield className="w-3 h-3" style={{ color: '#7B68EE' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        Superamos los bloqueos técnicos
                      </p>
                      <p className="text-gray-600 text-sm">
                        con tecnología que se adapta a la web.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'rgba(123, 104, 238, 0.2)' }}>
                      <Zap className="w-3 h-3" style={{ color: '#7B68EE' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        Trabajamos para que recibas un flujo
                      </p>
                      <p className="text-gray-600 text-sm">
                        de información estable y continuo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Worldwide Customers Carousel - Overlapping */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-full max-w-4xl px-4 md:px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-gray-200">
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-6 md:mb-8">
              Worldwide customers who trusted us
            </h3>
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden px-8 md:px-12">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${(logoSlide * 100).toString()}%)` }}
                >
                  {Array.from({ length: Math.ceil(companies.length / logosPerView) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="min-w-full grid grid-cols-2 md:flex md:items-center md:justify-center gap-6 md:gap-12 place-items-center py-2 md:py-0">
                      {companies.slice(slideIndex * logosPerView, (slideIndex + 1) * logosPerView).map((company, idx) => (
                        <span key={idx} className="text-gray-900 font-bold text-lg md:text-xl text-center">
                          {company}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevLogoSlide}
                className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md flex items-center justify-center transition"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
              </button>
              <button
                onClick={nextLogoSlide}
                className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-gray-100 hover:bg-gray-200 rounded-full shadow-md flex items-center justify-center transition"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative bg-[#0E155B] pt-32 md:pt-48 pb-16 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Capacidad operativa al servicio de tu negocio
            </h2>
            <p className="text-blue-200 text-base md:text-lg max-w-3xl mx-auto">
              Métricas que garantizan la precisión, legalidad y operativa escalable con el respaldo directo de nuestro equipo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-blue-900/50 backdrop-blur rounded-2xl p-8 text-center border border-blue-800">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-white mb-2">+100k</p>
              <p className="text-blue-300 text-sm">Scraped Websites</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur rounded-2xl p-8 text-center border border-blue-800">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Database className="w-12 h-12 text-blue-400" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">+170</p>
              <p className="text-blue-300 text-sm">Repositories</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur rounded-2xl p-8 text-center border border-blue-800">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Database className="w-12 h-12 text-blue-400" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">+3M</p>
              <p className="text-blue-300 text-sm">Data cells delivered</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur rounded-2xl p-8 text-center border border-blue-800">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-white mb-2">+149</p>
              <p className="text-blue-300 text-sm">Jobs done</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur rounded-2xl p-8 text-center border border-blue-800">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-white mb-2">+13700</p>
              <p className="text-blue-300 text-sm">Hours worked</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur rounded-2xl p-8 text-center border border-blue-800">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-white mb-2">100%</p>
              <p className="text-blue-300 text-sm">Success</p>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(ellipse at center, #302B63 0%, #24243E 40%, #0F0C29 70%)',
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] rounded-full blur-[120px] opacity-80" style={{ background: 'radial-gradient(circle, #5B4DB5 0%, #302B63 50%, transparent 100%)' }}></div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 text-blue-200 text-sm font-medium px-4 py-2 rounded-full border border-blue-300/30 bg-blue-500/10">
              <Users className="w-4 h-4" />
              EXPERT TALENT
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">La confianza de</span>
            <br className="hidden md:block" />
            <span className="text-blue-400"> Los líderes globales</span>
          </h2>

          <p className="text-blue-100 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-4xl mx-auto">
            Somos Solution Partner oficial de Bright Data,<br className="hidden md:block"/>
            colaborando activamente en la resolución de desafíos complejos<br className="hidden md:block"/>
            de extracción de datos para la red más importante del mundo.
          </p>

          <a href="https://brightdata.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-lg transition inline-flex justify-center items-center gap-2 text-base md:text-lg">
            Conoce nuestra alianza estratégica
            <span>→</span>
          </a>
        </div>
      </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-white to-purple-100/30"></div>

        {/* Three blur circles with color #7B68EE */}
        <div className="absolute top-20 left-20 w-[200px] h-[200px] rounded-full blur-[80px]" style={{ backgroundColor: 'rgba(123, 104, 238, 0.7)' }}></div>
        <div className="absolute top-20 right-20 w-[200px] h-[200px] rounded-full blur-[80px]" style={{ backgroundColor: 'rgba(123, 104, 238, 0.7)' }}></div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[250px] h-[250px] rounded-full blur-[90px]" style={{ backgroundColor: 'rgba(123, 104, 238, 0.7)' }}></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 mb-6">
              <Sparkles className="w-4 h-4" />
              SOLUCIONES A MEDIDA
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 md:mb-4">
              <span className="text-gray-900">Elige como quieres </span><br className="block md:hidden"/>
              <span className="bg-gradient-to-r from-[#9D62FA] to-[#0E155B] bg-clip-text text-transparent">dominar la web</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#9D62FA] to-[#0E155B] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-16 md:mb-24">
            {/* Data Factory Card */}
            <Link href="/data-factory" className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow block">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block text-purple-600 text-xs font-bold px-3 py-1 rounded-full bg-purple-100 mb-4">
                    DATOS BAJO DEMANDA
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Data Factory</h3>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Tú defines qué datos necesitas y nosotros automatizamos su entrega. Recibes información limpia y lista para integrarla de inmediato, sin que tu equipo tenga que gestionar servidores o escribir una sola línea de código.
              </p>
            </Link>

            {/* Data Squad Card */}
            <Link href="/data-squad" className="relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 md:p-10 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow block">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#60A5FA]/20 via-[#C084FC]/20 to-[#F472B6]/20 rounded-3xl blur-2xl -z-10"></div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block text-teal-700 text-xs font-bold px-3 py-1 rounded-full bg-teal-100 mb-4">
                    TALENTO TÉCNICO
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Data Squad</h3>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 hover:bg-teal-200 transition">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Tú defines qué datos necesitas y nosotros automatizamos su entrega. Recibes información limpia y lista para integrarla de inmediato, sin que tu equipo tenga que gestionar servidores o escribir una sola línea de código.
              </p>
            </Link>
          </div>

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Tu mercado, con una</span>
              <br />
              <span className="bg-gradient-to-r from-[#9D62FA] to-[#0E155B] bg-clip-text text-transparent">visión clara</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Nos adaptamos a lo que buscas en tu sector. Trabajamos junto a ti para que lo que sucede en la web sea tu mejor ventaja al decidir y avanzar con seguridad.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden px-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(currentSlide * 100).toString()}%)` }}
              >
                {Array.from({ length: Math.ceil(industries.length / itemsPerView) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full flex items-center">
                    {industries.slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView).map((industry, idx) => {
                      const Icon = industry.icon;
                      const isLastInSlide = Boolean(idx === itemsPerView - 1 || slideIndex * itemsPerView + idx === industries.length - 1);
                      return (
                        <div key={idx} className="flex items-center flex-1">
                          <div className="flex flex-col items-center justify-center text-center py-8 flex-1">
                            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-3 hover:bg-purple-200 transition">
                              <Icon className="w-8 h-8 text-purple-600" />
                            </div>
                            <p className="text-purple-600 text-xs font-bold tracking-wide uppercase">{industry.name}</p>
                          </div>
                          {!isLastInSlide && <div className="w-px h-24 bg-gray-200"></div>}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#1a1654] via-[#1e1a5e] to-[#0f0c3d]">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Un camino directo hacia </span><br className="block md:hidden"/>
              <span className="text-blue-400">tus datos</span>
            </h2>
            <p className="text-blue-200 text-lg">
              Te ofrecemos un proceso tan ágil como las decisiones que necesitas tomar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  <span>1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-2xl font-bold mb-3">Alineamos tu objetivo</h3>
                  <p className="text-blue-200 leading-relaxed mb-4">
                    Hablamos sobre lo que buscas y cómo necesitas recibirlo. Colaboramos desde el primer minuto para trazar el alcance real de tu proyecto y asegurar que la solución se ajuste a lo que tu negocio necesita.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Consulta inicial sin compromiso</span>
                  </div>
                </div>
              </div>
              <div className="absolute left-7 top-14 w-px h-full bg-gradient-to-b from-purple-500/50 to-transparent"></div>
            </div>

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  <span>2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-2xl font-bold mb-3">Definimos el plan</h3>
                  <p className="text-blue-200 leading-relaxed mb-4">
                    Preparamos una propuesta clara y transparente. Sabrás exactamente qué vamos a hacer y en qué plazos, para que tengas el control total desde el inicio.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Propuesta detallada en 48h</span>
                  </div>
                </div>
              </div>
              <div className="absolute left-7 top-14 w-px h-full bg-gradient-to-b from-blue-500/50 to-transparent"></div>
            </div>

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  <span>3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-2xl font-bold mb-3">Activamos la solución</h3>
                  <p className="text-blue-200 leading-relaxed mb-4">
                    Ponemos en marcha nuestra tecnología o el equipo necesario. Nosotros resolvemos los bloqueos y la parte técnica del día a día para que tú sigas al mando de la estrategia con total tranquilidad.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm">
                    <Zap className="w-4 h-4" />
                    <span>Implementación en días, no meses</span>
                  </div>
                </div>
              </div>
              <div className="absolute left-7 top-14 w-px h-full bg-gradient-to-b from-purple-500/50 to-transparent"></div>
            </div>

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  <span>4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-2xl font-bold mb-3">Recibes y escalas</h3>
                  <p className="text-blue-200 leading-relaxed mb-4">
                    Te entregamos el valor que necesitas y nos ocupamos del mantenimiento. Cuidamos que el servicio sea constante y el flujo de información no se detenga, para que nada frene tu crecimiento.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm">
                    <RefreshCw className="w-4 h-4" />
                    <span>Soporte continuo incluido</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/book-a-meeting" className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium px-10 py-4 rounded-lg transition shadow-lg">
              Book a meeting
            </Link>
          </div>
        </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300/40 rounded-full blur-2xl"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-300/35 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-pink-300/40 rounded-full blur-2xl"></div>
        <div className="absolute top-40 left-1/3 w-48 h-48 bg-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/4 w-56 h-56 bg-blue-400/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-40 h-40 bg-pink-400/35 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/2 w-44 h-44 bg-purple-300/35 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-20 w-36 h-36 bg-blue-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-52 h-52 bg-pink-300/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Rating badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-gray-900">Rated 4.9/5 from 500+ reviews</span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Confianza construida con <span className="bg-gradient-to-r from-[#9D62FA] to-[#0E155B] bg-clip-text text-transparent">hechos</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Nos integramos en tu día a día para que la información nunca sea un obstáculo. Mira cómo ayudamos a otros líderes a tomar decisiones con total seguridad.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>

              <p className="text-gray-700 italic mb-8 leading-relaxed">
                &quot;AutoScraping completely revolutionized how we handle data. What used to take days now happens in hours. The quality and reliability are exceptional.&quot;
              </p>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-600">CEO, TechCorp</p>
                  <p className="text-xs text-gray-500">Using for 3+ years</p>
                </div>
                <div className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  Enterprise Client
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>

              <p className="text-gray-700 italic mb-8 leading-relaxed">
                &quot;The accuracy and reliability is unmatched. Their technology is years ahead of the competition. We&apos;ve seen a 300% improvement in data quality.&quot;
              </p>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Sarah Martinez</p>
                  <p className="text-sm text-gray-600">Data Director</p>
                  <p className="text-xs text-gray-500">Using for 3+ years</p>
                </div>
                <div className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  50M+ Records
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>

              <p className="text-gray-700 italic mb-8 leading-relaxed">
                &quot;The API integration was seamless. AutoScraping has become essential to our entire data infrastructure. Couldn&apos;t imagine our workflow without it.&quot;
              </p>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    MK
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Michael Kim</p>
                  <p className="text-sm text-gray-600">CTO, DataFlow Inc</p>
                  <p className="text-xs text-gray-500">Using for 18+ months</p>
                </div>
                <div className="text-xs font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
                  API Partner
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <p className="text-5xl font-bold text-purple-600 mb-2">500+</p>
              <p className="text-gray-700 font-medium">Happy Clients</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <p className="text-5xl font-bold text-purple-600 mb-2">99.9%</p>
              <p className="text-gray-700 font-medium">Uptime Guarantee</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <p className="text-5xl font-bold text-purple-600 mb-2">24/7</p>
              <p className="text-gray-700 font-medium">Support Available</p>
            </div>
          </div>
        </div>
        </section>
      </AnimatedSection>

      {/* Team Leadership Carousel Section */}
      <AnimatedSection>
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/20 to-gray-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-400/25 to-blue-400/15 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-purple-400/15 rounded-full blur-3xl" style={{ animation: 'floatReverse 10s ease-in-out infinite' }}></div>
          <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-gradient-to-bl from-purple-300/25 to-pink-400/15 rounded-full blur-3xl" style={{ animation: 'floatSlow 12s ease-in-out infinite' }}></div>
          <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-indigo-400/20 to-purple-400/15 rounded-full blur-3xl" style={{ animation: 'drift 15s ease-in-out infinite' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-blue-300/25 to-purple-300/15 rounded-full blur-3xl" style={{ animation: 'pulse 7s ease-in-out infinite' }}></div>

          <div className="absolute top-1/4 left-20 w-32 h-32 border-3 border-purple-300/30 rounded-2xl" style={{ animation: 'spin 20s linear infinite' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-28 h-28 border-3 border-blue-300/30 rotate-45" style={{ animation: 'spinSlow 25s linear infinite' }}></div>
          <div className="absolute top-2/3 left-1/3 w-24 h-24 border-2 border-purple-400/35 rounded-lg rotate-12" style={{ animation: 'float 9s ease-in-out infinite' }}></div>
          <div className="absolute top-1/2 right-20 w-40 h-40 border-2 border-indigo-300/30 rounded-full" style={{ animation: 'pulse 6s ease-in-out infinite' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-36 h-36 border-3 border-pink-300/30 rounded-3xl rotate-45" style={{ animation: 'drift 11s ease-in-out infinite' }}></div>

          <div className="absolute top-1/3 left-10 w-16 h-16 bg-purple-400/30 rounded-lg rotate-12" style={{ animation: 'float 7s ease-in-out infinite' }}></div>
          <div className="absolute bottom-1/2 right-10 w-20 h-20 bg-blue-400/25 rounded-full" style={{ animation: 'pulse 9s ease-in-out infinite' }}></div>
          <div className="absolute top-3/4 left-1/4 w-12 h-12 bg-purple-300/35 rotate-45" style={{ animation: 'spinSlow 18s linear infinite' }}></div>

          <div className="absolute top-1/4 right-1/4 w-8 h-40 bg-gradient-to-b from-purple-400/15 to-transparent rounded-full blur-xl" style={{ animation: 'drift 16s ease-in-out infinite' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-40 h-8 bg-gradient-to-r from-blue-400/15 to-transparent rounded-full blur-xl" style={{ animation: 'floatSlow 14s ease-in-out infinite' }}></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Header Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white border border-purple-200 px-4 py-2 rounded-full shadow-sm">
              <UsersRound className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Equipo Líder</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">El respaldo detras de tu </span>
              <span className="bg-gradient-to-r from-[#9D62FA] to-[#6B46C1] bg-clip-text text-transparent">Estrategia</span>
            </h2>
            <p className="text-purple-600 text-base md:text-lg">
              Conoce a los especialistas que lideran la ejecución de cada proyecto.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-[#0E155B] via-[#1a1f5f] to-[#2d2180] rounded-3xl p-8 md:p-12 shadow-2xl min-h-[650px] md:min-h-[450px] lg:min-h-[420px]">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#C084FC]/30 via-[#60A5FA]/30 to-[#F472B6]/30 rounded-3xl blur-3xl -z-10"></div>
              {/* Decorative corner brackets */}
              <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-purple-400/30 rounded-tl-2xl"></div>
              <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-purple-400/30 rounded-tr-2xl"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-purple-400/30 rounded-bl-2xl"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-purple-400/30 rounded-br-2xl"></div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={teamSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
                >
                  {/* Left side - Avatar with initials */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-[#C084FC]/50 via-[#60A5FA]/50 to-[#F472B6]/50 rounded-2xl blur-2xl"></div>
                      <div className="relative w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-5xl font-bold text-white">{teamMembers[teamSlide].initials}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Name and Title */}
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-white mb-1">{teamMembers[teamSlide].name}</h3>
                      <span className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-md text-white text-sm font-medium uppercase tracking-wide">
                        {teamMembers[teamSlide].title}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-200 text-base leading-relaxed mb-8 italic">
                      &quot;{teamMembers[teamSlide].quote}&quot;
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                      {teamMembers[teamSlide].expertise.map((exp, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                          <p className="text-white font-semibold text-sm">{exp.title}</p>
                          <p className="text-gray-300 text-xs uppercase tracking-wide">{exp.subtitle}</p>
                        </div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start gap-3">
                      <button className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center transition-colors">
                        <Linkedin className="w-5 h-5 text-white" />
                      </button>
                      <button className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center transition-colors">
                        <Github className="w-5 h-5 text-white" />
                      </button>
                      <button className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center transition-colors">
                        <Twitter className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {teamMembers.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTeamSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === teamSlide ? 'bg-white' : 'bg-white/30'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        </section>
      </AnimatedSection>

      {/* Expert Talent CTA Section */}
      <AnimatedSection>
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#0f0b24] via-[#1f1447] to-[#0f0b24]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Users className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">EXPERT TALENT</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">Informacion clara,</span>
            <br />
            <span className="bg-gradient-to-r from-[#C084FC] to-[#60A5FA] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(192,132,252,0.8)]">decisiones seguras</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed">
            Nos ocupamos de que los datos de la web lleguen directo a tu flujo de trabajo. Sin filtros ni demoras, solo un camino despejado hacia tus objetivos.
          </p>

          {/* CTA Button */}
          <div className="relative inline-block w-full sm:w-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#C084FC]/40 via-[#60A5FA]/40 to-[#F472B6]/40 rounded-xl blur-xl"></div>
            <Link href="/book-a-meeting" className="relative w-full sm:w-auto bg-gradient-to-r from-[#7B5FE8] to-[#9D62FA] hover:from-[#6B4FD8] hover:to-[#8D52EA] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center">
              Contactar con un experto
            </Link>
          </div>
        </div>
        </section>
      </AnimatedSection>

      {/* Social Media Section */}
      <AnimatedSection>
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/20">
        {/* Background decorative circles */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-blue-300/40 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-32 w-56 h-56 bg-purple-300/35 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-52 h-52 bg-pink-300/40 rounded-full blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-purple-600 text-sm font-medium mb-4 px-4 py-2 rounded-full border border-purple-200 bg-white">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
              SÍGUENOS EN TIEMPO REAL
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Nuestro trabajo <span className="bg-gradient-to-r from-[#9D62FA] to-[#0E155B] bg-clip-text text-transparent">Sin filtros</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubre lo que hacemos, cómo lo resolvemos y quiénes están detrás. Porque la transparencia es parte de cómo operamos.
            </p>
          </div>

          {/* Social Media Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LinkedIn Card - Large */}
            <div className="relative lg:row-span-2 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-3xl shadow-lg text-white overflow-hidden flex flex-col">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#60A5FA]/25 via-[#C084FC]/25 to-[#F472B6]/25 rounded-3xl blur-2xl -z-10"></div>
              
              {/* Post Image */}
              <div className="relative w-full h-56 lg:h-64 overflow-hidden">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5622AQHCcasDDuOE1g/feedshare-shrink_2048_1536/B56ZzdmHJnHIAg-/0/1773244281709?e=2147483647&v=beta&t=8rFPr0VtQn0evMkzyVp3Huy_6tMD-uRR0UB0ChEY9I0"
                  alt="AutoScraping team at Milan international expansion event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004182]/80 via-transparent to-transparent"></div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Linkedin className="w-7 h-7 text-[#0A66C2]" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">AutoScraping</p>
                    <p className="text-blue-200 text-sm">1.931 seguidores · Editada</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  Escalar es un deporte de equipo: Nuestra experiencia en Milán 🇦🇷🤝🇮🇹
                </h3>

                <p className="text-blue-100 leading-relaxed mb-4 text-sm">
                  Nuestras soluciones de autoscraping y automatización tienen un espacio real y necesario en el mercado global. Compartir el camino con otros fundadores argentinos refuerza la idea de que la tecnología argentina es una marca de calidad exportable.
                </p>

                <p className="text-blue-200 text-xs mb-5">
                  #ExpansionInternacional #StartupsArgentina #Italy #TechLeadership #Innovation #Networking #ArgentinaAlMundo
                </p>

                <a
                  href="https://www.linkedin.com/posts/autoscraping_expansioninternacional-startupsargentinas-activity-7437525596605304832-boOo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0A66C2] font-medium px-6 py-3 rounded-lg transition mb-6 self-start"
                >
                  Ver en LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-6 text-sm border-t border-white/20 pt-5 mt-auto">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    <span>16 reacciones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Comentarios</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    <span>Compartir</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">AutoScraping</p>
                  <p className="text-gray-500 text-xs">3 de marzo · Fira Barcelona Gran Via 📍</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-2 text-sm flex-1">
                ¡Día 1 en el #MWC26: Check! ✅🇦🇷 Deslizá para ver lo que fue la segunda parte de nuestra primera jornada en Barcelona. 🇪🇸 De la adrenalina de presentar en el Hub Argentino ante empresas y partners, a perderse en la inmensidad de los pabellones de Samsung, Microsoft y MediaTek. 🤯
              </p>

              <p className="text-[#1877F2] text-xs mb-4 font-medium">
                #MWC2026 #Barcelona #TechLife #InnovaciónArgentina
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-[#1877F2] fill-[#1877F2]" />
                    <span className="text-gray-700 font-medium">Me gusta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-gray-700 font-medium">Comentar</span>
                  </div>
                </div>
                <a
                  href="https://www.facebook.com/AutoScraping/posts/pfbid0EFGg8DBNy4fsA9rVXnn9bUScoQgvWVG534WaYLrgsJhBfGEgxT9sPayywLkvDY8ol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1877F2] hover:text-blue-700 text-sm font-medium flex items-center gap-1.5 transition"
                >
                  Ver en Facebook
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Instagram Card - Dynamic */}
            <InstagramCard />

            {/* GitHub Card */}
            <div className="relative lg:col-span-2 bg-gradient-to-br from-[#24292F] to-[#1C2128] rounded-3xl p-8 shadow-lg text-white">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C084FC]/25 via-[#60A5FA]/25 to-[#F472B6]/25 rounded-3xl blur-2xl -z-10"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Github className="w-7 h-7 text-gray-900" />
                </div>
                <div>
                  <p className="font-bold text-lg">GitHub Activity</p>
                  <p className="text-gray-400 text-sm">This month</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div>
                  <p className="text-green-400 text-4xl font-bold">+2,847</p>
                  <p className="text-gray-400 text-sm">contributions this month across</p>
                </div>
                <div>
                  <p className="text-purple-400 text-4xl font-bold">24</p>
                  <p className="text-gray-400 text-sm">repositories</p>
                </div>
              </div>

              <p className="text-gray-300 mt-6">
                Building open-source tools for the community 🛠️
              </p>
            </div>
          </div>
        </div>
        </section>
      </AnimatedSection>

      {/* Blog Section */}
      <AnimatedSection>
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-purple-50/20">
        {/* Background decorative circles - matching the image */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300/40 rounded-full blur-2xl"></div>
        <div className="absolute top-32 left-32 w-24 h-24 bg-blue-300/30 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-purple-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-purple-300/35 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-32 w-36 h-36 bg-blue-200/40 rounded-full blur-2xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 text-purple-600 text-xs font-bold mb-4">
              <BookText className="w-4 h-4" />
              CONOCIMIENTO EN ACCIÓN
            </span>
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-6xl font-bold text-gray-900 mb-4">
                  Desde el <span className="bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] bg-clip-text text-transparent">Blog</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl">
                  Casos reales, decisiones técnicas y lecciones del campo, documentadas por quienes ejecutan la solución.
                </p>
              </div>
              <button className="px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition flex items-center gap-2">
                View All
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Python Web Scraping */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95] to-[#6b21a8] h-48 flex items-center justify-center">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-purple-500">
                    Tutorial
                  </span>
                </div>
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">
                  Python Web Scraping: Zero to Production
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Build robust scrapers with Beautiful Soup, handle JavaScript-heavy sites with Selenium, and deploy in production.
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    344
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    1K
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    9 min
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 - Extracting Intelligence from PDFs */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95] to-[#6b21a8] h-48 flex items-center justify-center">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-orange-500">
                    GUIDE
                  </span>
                </div>
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <Document className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">
                  Extracting Intelligence from PDFs
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Master PDF parsing with PyPDF2, Tabula, and OCR. Extract tables, forms, and handle scanned documents efficiently.
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    543
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    1K
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    7 min
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 - 23% Margin Boost */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95] to-[#6b21a8] h-48 flex items-center justify-center">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-green-500">
                    CASE STUDY
                  </span>
                </div>
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                  <Growth className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">
                  23% Margin Boost via Price Intelligence
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  How a mid-market retailer leveraged real-time competitive pricing data to optimize their pricing strategy and boost profits.
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    432
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    1K
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    15 min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/10">
        {/* Background decorative circles */}
        <div className="absolute top-20 left-20 w-48 h-48 bg-purple-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-40 h-40 bg-purple-300/30 rounded-full blur-2xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Contact Info */}
            <div>
              <span className="inline-flex items-center gap-2 text-purple-600 text-xs font-bold mb-6">
                <MessageCircle className="w-4 h-4" />
                Let&apos;s Talk
              </span>

              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                ¿Hablamos de como hacer <span className="bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] bg-clip-text text-transparent">crecer tu negocio?</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Nos aseguramos de que lo que sucede en la web se convierta en tu mejor activo. Sin rodeos: nos involucramos en tu proyecto para que cada paso que des sea firme y transparente.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <p className="text-gray-600">hello@autoscraping.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <p className="text-gray-600">+1 831-400-4766</p>
                  </div>
                </div>
              </div>

              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#C084FC]/40 via-[#60A5FA]/40 to-[#F472B6]/40 rounded-xl blur-xl"></div>
                <Link href="/book-a-meeting" className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#7B5FE8] to-[#9D62FA] hover:from-[#6B4FD8] hover:to-[#8D52EA] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Calendar className="w-5 h-5" />
                  Book a Meeting
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column - Stats Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Experiencia</p>
                  <p className="text-sm text-gray-500">Que los datos</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <p className="text-gray-700 font-medium">Tiempo de respuesta</p>
                  </div>
                  <p className="text-purple-600 font-bold">{'< 1 hour'}</p>
                </div>

                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-gray-700 font-medium">Proyectos entregados</p>
                  </div>
                  <p className="text-blue-600 font-bold">99.9%</p>
                </div>

                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <p className="text-gray-700 font-medium">Industrias atendidas</p>
                  </div>
                  <p className="text-pink-600 font-bold">+15</p>
                </div>

                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-gray-700 font-medium">Años de trayectoria</p>
                  </div>
                  <p className="text-green-600 font-bold">+6</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <p>Trusted by 10,000+ companies</p>
              </div>
            </div>
          </div>
        </div>
        </section>
      </AnimatedSection>

      <ContactCTA />

      <Footer />
    </>
  );
}
