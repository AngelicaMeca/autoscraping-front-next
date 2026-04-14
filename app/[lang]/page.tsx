'use client';

import { ChevronDown, Lightbulb, Monitor, Database, Zap, Shield, TrendingUp, Target, Settings, ShoppingCart, Chrome as HomeIcon, Plane, Heart, ShoppingBag, Lock, CreditCard, Ticket, UserCheck, Building2, ChartBar as BarChart3, ChevronLeft, ChevronRight, Sparkles, ArrowRight, FileText, Infinity, Quote, Star, ExternalLink, MessageCircle, ThumbsUp, Code, File as Document, ArrowUpRight as Growth, Eye, Clock, CircleCheck as CheckCircle, Boxes, Wrench, RefreshCw, Users, UsersRound, Linkedin, Github, Twitter, Facebook, Instagram, BookText, Mail, Phone, Calendar } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactCTA from '@/components/ContactCTA';
import InstagramCard from '@/components/InstagramCard';
import AnimatedSection from '@/components/AnimatedSection';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '@/hooks/useLang';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/seo';

function CountUp({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  separator = '.',
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: string;
}) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(end);
    };
    requestAnimationFrame(tick);
  }, [started, end, duration, decimals]);

  const formatted = decimals > 0
    ? value.toFixed(decimals).replace('.', ',')
    : Math.floor(value).toLocaleString('de-DE');

  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

export default function Home() {
  const lang = useLang();
  const isEn = lang === 'en';
  const [currentSlide, setCurrentSlide] = useState(0);
  const [logoSlide, setLogoSlide] = useState(0);
  const [teamSlide, setTeamSlide] = useState(0);

  const industries = [
    { name: 'E-COMMERCE', icon: ShoppingCart },
    { name: 'REAL ESTATE', icon: HomeIcon },
    { name: isEn ? 'TOURISM & TRAVEL' : 'TURISMO Y VIAJES', icon: Plane },
    { name: isEn ? 'HEALTH & PHARMA' : 'SALUD Y PHARMA', icon: Heart },
    { name: isEn ? 'CONSUMER & RETAIL' : 'CONSUMO Y RETAIL', icon: ShoppingBag },
    { name: isEn ? 'CYBERSECURITY' : 'CIBERSEGURIDAD', icon: Lock },
    { name: 'FINTECH', icon: CreditCard },
    { name: isEn ? 'EVENTS & TICKETING' : 'EVENTOS Y TICKETING', icon: Ticket },
    { name: isEn ? 'HR & TALENT' : 'RECURSOS HUMANOS Y TALENTO', icon: UserCheck },
    { name: isEn ? 'GOVERNMENT & PUBLIC SECTOR' : 'GOBIERNO Y SECTOR PÚBLICO', icon: Building2 },
    { name: isEn ? 'CONSULTING & ANALYTICS' : 'CONSULTORÍA Y ANALYTICS', icon: BarChart3 },
  ];

  const companies = [
    'Metalist', 'Clau', 'Cella', 'DataCo', 'TechPro', 'InfoSys', 'WebFlow', 'DataLink'
  ];

  const teamMembers = [
    {
      name: 'Francisco Battan',
      title: 'CEO',
      initials: 'FB',
      quote: isEn
        ? 'Data is our language, but what really matters is what it means for your business. We guide you through the process of turning information into concrete decisions.'
        : 'Los datos son nuestro lenguaje, pero lo que realmente importa es lo que significan para tu negocio. Te acompañamos en el proceso de convertir información en decisiones concretas.',
      expertise: [
        { title: isEn ? 'Project' : 'Ejecución', subtitle: isEn ? 'Execution' : 'de proyectos' },
        { title: isEn ? 'Client' : 'Relación', subtitle: isEn ? 'Relations' : 'con clientes' },
        { title: isEn ? 'Technical' : 'Liderazgo', subtitle: isEn ? 'Leadership' : 'técnico' }
      ]
    },
    {
      name: 'Benjamín Arjona',
      title: 'CCO',
      initials: 'BA',
      quote: isEn
        ? 'Every business has unique and distinct data needs. We focus on understanding yours to build a solution that fits what you need today and scales with what comes tomorrow.'
        : 'Cada negocio tiene necesidades de datos distintas y únicas. Nos enfocamos en entender las tuyas para construir una solución que se ajuste a lo que necesitas hoy y escale con lo que viene mañana.',
      expertise: [
        { title: isEn ? 'Business' : 'Desarrollo', subtitle: isEn ? 'Development' : 'comercial' },
        { title: isEn ? 'Custom' : 'Soluciones', subtitle: isEn ? 'Solutions' : 'a medida' },
        { title: isEn ? 'Strategic' : 'Partnerships', subtitle: isEn ? 'Partnerships' : 'estratégicos' }
      ]
    },
    {
      name: 'Cesar Farhat',
      title: 'CTO',
      initials: 'CF',
      quote: isEn
        ? 'As pioneers in data extraction, we combine cutting-edge technology with automation so that the technical side is never your problem.'
        : 'Como pioneros en extracción de datos, combinamos tecnología de avanzada con automatización para que lo técnico nunca sea tu problema.',
      expertise: [
        { title: isEn ? 'Data' : 'Arquitectura', subtitle: isEn ? 'Architecture' : 'de datos' },
        { title: isEn ? 'Automation' : 'Automatización', subtitle: isEn ? 'at Scale' : 'a escala' },
        { title: isEn ? 'Technical' : 'Innovación', subtitle: isEn ? 'Innovation' : 'técnica' }
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

  const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'AUTOScraping',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '500',
    },
  };

  return (
    <>
      <JsonLd schema={aggregateRatingSchema} />
      <Navbar variant="adaptive" />

      <div className="relative min-h-screen overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0E155B 0%, #2A327A 25%, #9D62FA 50%, #2A327A 75%, #0E155B 100%)'
        }}>

        <AnimatedSection>
          <main className="relative z-10 mx-auto max-w-7xl px-6 pt-24 md:pt-32 pb-16 md:pb-24">
            <div className="max-w-4xl">
              <p className="text-blue-200 text-sm font-medium mb-8">
                {isEn ? 'Leading Web Scraping Solutions' : 'Soluciones de Web Scraping líderes'}
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6 md:mb-8">
                {isEn ? (
                  <>Human engineering{' '}<br className="hidden md:block" />
                  for continuous and{' '}<br className="hidden md:block" />
                  precise data extraction</>
                ) : (
                  <>Ingeniería humana{' '}<br className="hidden md:block" />
                  para una extracción{' '}<br className="hidden md:block" />
                  de datos continua y precisa</>
                )}
              </h1>

              <p className="text-blue-200 text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-2xl">
                {isEn
                  ? 'We solve the technical challenges of scraping so you receive structured, ready-to-use information. While you scale your business, we ensure the integrity and transparency of every data point.'
                  : 'Resolvemos los desafíos técnicos del scraping para que recibas información estructurada y lista para usar. Mientras tú escalas tu negocio, nosotros aseguramos la integridad y transparencia de cada dato.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${lang}/book-a-meeting`} className="w-full sm:w-auto bg-white hover:bg-gray-100 text-purple-700 font-medium px-8 py-3 rounded-lg transition inline-block text-center">
                  {isEn ? "Let's talk about your project" : 'Hablemos de tu proyecto'}
                </Link>
                <a href="#infraestructura" className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-medium px-8 py-3 rounded-lg border-2 border-white/30 transition inline-block text-center">
                  {isEn ? 'Discover more' : 'Descubre más'}
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
                {isEn ? 'OUR PILLARS' : 'NUESTROS PILARES'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isEn ? (
                  <>Infrastructure that gives<br className="hidden md:inline" />
                  <span className="md:ml-2" style={{ background: 'linear-gradient(to right, #9D62FA, #7B68EE, #2A327A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>meaning to your strategy</span></>
                ) : (
                  <>Infraestructura que da<br className="hidden md:inline" />
                  <span className="md:ml-2" style={{ background: 'linear-gradient(to right, #9D62FA, #7B68EE, #2A327A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>sentido a tu estrategia</span></>
                )}
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                {isEn
                  ? 'We combine technical capacity and direct support so your team can focus on analysis, delegating the complexity of extraction to us.'
                  : 'Combinamos capacidad técnica y soporte directo para que tu equipo se centre en el análisis, delegando en nosotros la complejidad de la extracción.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Columna Izquierda */}
              <div className="flex flex-col gap-6">
                <div className="rounded-3xl p-8 border" style={{ background: 'linear-gradient(to bottom right, rgba(157, 98, 250, 0.15), rgba(157, 98, 250, 0.05))', borderColor: 'rgba(157, 98, 250, 0.2)' }}>
                  <span className="inline-flex items-center gap-2 text-xs font-medium mb-4" style={{ color: '#9D62FA' }}>
                    <Lightbulb className="w-4 h-4" />
                    {isEn ? 'HUMAN ENGINEERING' : 'INGENIERÍA HUMANA'}
                  </span>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: '#9D62FA' }}>
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {isEn ? 'Real accompaniment' : 'Acompañamiento real'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {isEn
                      ? 'We eliminate the ticket barrier. You deal directly with the engineers managing your data to resolve any questions.'
                      : 'Eliminamos la barrera de los tickets. Tratas directamente con los ingenieros que gestionan tus datos, para resolver dudas.'}
                  </p>
                  <a href="#" className="font-medium text-sm flex items-center gap-2" style={{ color: '#9D62FA' }}>
                    {isEn ? 'Real-time solutions' : 'Soluciones en tiempo real'}
                    <span>→</span>
                  </a>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-200">
                  <span className="inline-flex items-center gap-2 text-xs font-medium mb-4" style={{ color: '#7B68EE' }}>
                    <Database className="w-4 h-4" />
                    {isEn ? 'DATA QUALITY' : 'CALIDAD DEL DATO'}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {isEn
                      ? 'Ready-to-use information so you can start working immediately'
                      : 'Información lista para usar para que empieces a trabajar de inmediato'}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <Monitor className="w-10 h-10 mx-auto mb-2" style={{ color: '#9D62FA' }} />
                      <p className="text-sm font-semibold text-gray-900">{isEn ? 'Clean data' : 'Datos limpios'}</p>
                    </div>
                    <div className="text-center">
                      <RefreshCw className="w-10 h-10 mx-auto mb-2" style={{ color: '#9D62FA' }} />
                      <p className="text-sm font-semibold text-gray-900">{isEn ? 'Verified data' : 'Datos verificados'}</p>
                    </div>
                    <div className="text-center">
                      <Database className="w-10 h-10 mx-auto mb-2" style={{ color: '#9D62FA' }} />
                      <p className="text-sm font-semibold text-gray-900">{isEn ? 'Structured data' : 'Datos estructurados'}</p>
                    </div>
                    <div className="text-center">
                      <Zap className="w-10 h-10 mx-auto mb-2" style={{ color: '#9D62FA' }} />
                      <p className="text-sm font-semibold text-gray-900">{isEn ? 'Precise files' : 'Archivos precisos'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna Derecha */}
              <div className="flex flex-col gap-6">
                <div className="bg-white rounded-3xl p-8 border border-gray-200">
                  <span className="inline-flex items-center gap-2 text-xs font-medium mb-4" style={{ color: '#7B68EE' }}>
                    <Shield className="w-4 h-4" />
                    {isEn ? 'ETHICS & LEGALITY' : 'ÉTICA Y LEGALIDAD'}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {isEn ? 'Transparency and legal security' : 'Transparencia y seguridad legal'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'rgba(157, 98, 250, 0.15)' }}>
                        <Shield className="w-3 h-3" style={{ color: '#9D62FA' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {isEn ? 'We guarantee honest data extraction' : 'Garantizamos una extracción de datos honesta'}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {isEn ? 'Leaving clean, well-structured data' : 'Deja estructuras limpias'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'rgba(157, 98, 250, 0.15)' }}>
                        <TrendingUp className="w-3 h-3" style={{ color: '#9D62FA' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {isEn ? 'Your business grows' : 'Tu negocio crece'}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {isEn
                            ? 'with the peace of mind of working with ethical and transparent processes.'
                            : 'con la tranquilidad de trabajar con procesos éticos y claros.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl p-8 text-white" style={{ background: 'linear-gradient(to bottom right, #2A327A, #1e2456)' }}>
                  <span className="inline-flex items-center gap-2 text-blue-200 text-xs font-medium mb-4">
                    <Zap className="w-4 h-4" />
                    {isEn ? 'RESPONSE AGILITY' : 'AGILIDAD DE LA RESPUESTA'}
                  </span>
                  <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {isEn ? 'No wait times, no middlemen' : 'Sin esperas ni intermediarios'}
                  </h3>
                  <p className="text-blue-100 text-sm">
                    {isEn
                      ? 'We value your time. You speak directly with the specialists managing your solution to get instant answers and ensure nothing slows down your business rhythm.'
                      : 'Valoramos tu tiempo. Hablas directamente con los especialistas que gestionan tu solución para obtener respuestas al momento y asegurar que nada detenga el ritmo de tu negocio.'}
                  </p>
                </div>

                <div className="rounded-3xl p-8 border" style={{ background: 'linear-gradient(to bottom right, rgba(123, 104, 238, 0.15), rgba(123, 104, 238, 0.05))', borderColor: 'rgba(123, 104, 238, 0.2)' }}>
                  <span className="inline-flex items-center gap-2 text-xs font-medium mb-4" style={{ color: '#7B68EE' }}>
                    <Target className="w-4 h-4" />
                    {isEn ? 'TECHNICAL POWER' : 'POTENCIA TÉCNICA'}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {isEn ? 'Extraction without obstacles' : 'Extracción sin obstáculos'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'rgba(123, 104, 238, 0.2)' }}>
                        <Shield className="w-3 h-3" style={{ color: '#7B68EE' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {isEn ? 'We overcome technical blocks' : 'Superamos los bloqueos técnicos'}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {isEn ? 'with technology that adapts to the web.' : 'con tecnología que se adapta a la web.'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'rgba(123, 104, 238, 0.2)' }}>
                        <Zap className="w-3 h-3" style={{ color: '#7B68EE' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {isEn ? 'We work so you receive a flow' : 'Trabajamos para que recibas un flujo'}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {isEn ? 'of stable and continuous information.' : 'de información estable y continuo.'}
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
                {isEn ? 'Worldwide customers who trusted us' : 'Clientes de todo el mundo que confían en nosotros'}
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
                {isEn ? 'Operational capacity at the service of your business' : 'Capacidad operativa al servicio de tu negocio'}
              </h2>
              <p className="text-blue-200 text-base md:text-lg max-w-3xl mx-auto">
                {isEn
                  ? 'Metrics that guarantee precision, legality and scalable operations with the direct backing of our team.'
                  : 'Métricas que garantizan la precisión, legalidad y operativa escalable con el respaldo directo de nuestro equipo.'}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-blue-900/50 backdrop-blur rounded-2xl p-4 md:p-8 text-center border border-blue-800">
                <div className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <Database className="w-7 h-7 md:w-12 md:h-12 text-blue-400" />
                </div>
                <p className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2"><CountUp end={5000} prefix="+" separator="." /></p>
                <p className="text-blue-300 text-xs md:text-sm">{isEn ? 'Sources monitored' : 'Fuentes monitoreadas'}</p>
              </div>

              <div className="bg-blue-900/50 backdrop-blur rounded-2xl p-4 md:p-8 text-center border border-blue-800">
                <div className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <svg className="w-7 h-7 md:w-12 md:h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2"><CountUp end={65000} prefix="+" separator="." /></p>
                <p className="text-blue-300 text-xs md:text-sm">{isEn ? 'Execution hours' : 'Horas de ejecución'}</p>
              </div>

              <div className="bg-blue-900/50 backdrop-blur rounded-2xl p-4 md:p-8 text-center border border-blue-800">
                <div className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <svg className="w-7 h-7 md:w-12 md:h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <p className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2"><CountUp end={5} prefix="+" suffix=" B" /></p>
                <p className="text-blue-300 text-xs md:text-sm">{isEn ? 'Records processed' : 'Registros procesados'}</p>
              </div>

              <div className="bg-blue-900/50 backdrop-blur rounded-2xl p-4 md:p-8 text-center border border-blue-800">
                <div className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <svg className="w-7 h-7 md:w-12 md:h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2"><CountUp end={99.9} decimals={1} suffix="%" /></p>
                <p className="text-blue-300 text-xs md:text-sm">{isEn ? 'Delivery uptime' : 'Uptime de entregas'}</p>
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
                {isEn ? 'EXPERT TALENT' : 'TALENTO EXPERTO'}
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">{isEn ? 'The trust of' : 'La confianza de'}</span>
              <br className="hidden md:block" />
              <span className="text-blue-400">{isEn ? ' global leaders' : ' los líderes globales'}</span>
            </h2>

            <p className="text-blue-100 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-4xl mx-auto">
              {isEn ? (
                <>We are an official Bright Data Solution Partner,<br className="hidden md:block" />
                actively collaborating in solving complex<br className="hidden md:block" />
                data extraction challenges for the world&apos;s most important network.</>
              ) : (
                <>Somos Solution Partner oficial de Bright Data,<br className="hidden md:block" />
                colaborando activamente en la resolución de desafíos complejos<br className="hidden md:block" />
                de extracción de datos para la red más importante del mundo.</>
              )}
            </p>

            <a href="https://brightdata.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-lg transition inline-flex justify-center items-center gap-2 text-base md:text-lg">
              {isEn ? 'Discover our strategic alliance' : 'Conoce nuestra alianza estratégica'}
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
                {isEn ? 'TAILORED SOLUTIONS' : 'SOLUCIONES A MEDIDA'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 md:mb-4">
                <span className="text-gray-900">{isEn ? 'Choose how you want to ' : 'Elige como quieres '}</span><br className="block md:hidden" />
                <span className="bg-gradient-to-r from-[#9D62FA] to-[#0E155B] bg-clip-text text-transparent">{isEn ? 'dominate the web' : 'dominar la web'}</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#9D62FA] to-[#0E155B] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-16 md:mb-24">
              {/* Data Factory Card */}
              <Link href={`/${lang}/data-factory`} className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow block">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block text-purple-600 text-xs font-bold px-3 py-1 rounded-full bg-purple-100 mb-4">
                      {isEn ? 'DATA ON DEMAND' : 'DATOS BAJO DEMANDA'}
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
                  {isEn
                    ? 'You define what data you need and we automate its delivery. You receive clean information ready to integrate immediately, without your team having to manage servers or write a single line of code.'
                    : 'Tú defines qué datos necesitas y nosotros automatizamos su entrega. Recibes información limpia y lista para integrarla de inmediato, sin que tu equipo tenga que gestionar servidores o escribir una sola línea de código.'}
                </p>
              </Link>

              {/* Data Squad Card */}
              <Link href={`/${lang}/data-squad`} className="relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 md:p-10 shadow-lg border border-teal-100 hover:shadow-xl transition-shadow block">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#60A5FA]/20 via-[#C084FC]/20 to-[#F472B6]/20 rounded-3xl blur-2xl -z-10"></div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block text-teal-700 text-xs font-bold px-3 py-1 rounded-full bg-teal-100 mb-4">
                      {isEn ? 'TECHNICAL TALENT' : 'TALENTO TÉCNICO'}
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
                  {isEn
                    ? 'Data Squad: Add senior specialists to your team to tackle engineering challenges. We handle all technical and administrative management so you can focus solely on leading the project.'
                    : 'Suma especialistas senior a tu equipo para resolver desafíos de ingeniería. Nosotros nos encargamos de toda la gestión técnica y administrativa para que tú solo te enfoques en liderar el proyecto.'}
                </p>
              </Link>
            </div>

            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-900">{isEn ? 'Your market, with a' : 'Tu mercado, con una'}</span>
                <br />
                <span className="bg-gradient-to-r from-[#9D62FA] to-[#0E155B] bg-clip-text text-transparent">{isEn ? 'clear vision' : 'visión clara'}</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                {isEn
                  ? 'We adapt to what you are looking for in your sector. We work alongside you so that what happens on the web becomes your greatest advantage when making decisions and moving forward with confidence.'
                  : 'Nos adaptamos a lo que buscas en tu sector. Trabajamos junto a ti para que lo que sucede en la web sea tu mejor ventaja al decidir y avanzar con seguridad.'}
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Carousel Container */}
              <div className="overflow-hidden px-8 sm:px-12">
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
                <span className="text-white">{isEn ? 'A direct path to ' : 'Un camino directo hacia '}</span><br className="block md:hidden" />
                <span className="text-blue-400">{isEn ? 'your data' : 'tus datos'}</span>
              </h2>
              <p className="text-blue-200 text-lg">
                {isEn
                  ? 'We offer you a process as agile as the decisions you need to make.'
                  : 'Te ofrecemos un proceso tan ágil como las decisiones que necesitas tomar.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    <span>1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl font-bold mb-3">{isEn ? 'We align your objective' : 'Alineamos tu objetivo'}</h3>
                    <p className="text-blue-200 leading-relaxed mb-4">
                      {isEn
                        ? 'We talk about what you are looking for and how you need to receive it. We collaborate from the first minute to outline the real scope of your project and ensure the solution fits your business needs.'
                        : 'Hablamos sobre lo que buscas y cómo necesitas recibirlo. Colaboramos desde el primer minuto para trazar el alcance real de tu proyecto y asegurar que la solución se ajuste a lo que tu negocio necesita.'}
                    </p>
                    <div className="flex items-center gap-2 text-purple-400 text-sm">
                      <FileText className="w-4 h-4" />
                      <span>{isEn ? 'Initial consultation, no commitment' : 'Consulta inicial sin compromiso'}</span>
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
                    <h3 className="text-white text-2xl font-bold mb-3">{isEn ? 'We define the plan' : 'Definimos el plan'}</h3>
                    <p className="text-blue-200 leading-relaxed mb-4">
                      {isEn
                        ? 'We prepare a clear and transparent proposal. You will know exactly what we are going to do and within what timeframes, so you have full control from the start.'
                        : 'Preparamos una propuesta clara y transparente. Sabrás exactamente qué vamos a hacer y en qué plazos, para que tengas el control total desde el inicio.'}
                    </p>
                    <div className="flex items-center gap-2 text-purple-400 text-sm">
                      <FileText className="w-4 h-4" />
                      <span>{isEn ? 'Detailed proposal in 48h' : 'Propuesta detallada en 48h'}</span>
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
                    <h3 className="text-white text-2xl font-bold mb-3">{isEn ? 'We activate the solution' : 'Activamos la solución'}</h3>
                    <p className="text-blue-200 leading-relaxed mb-4">
                      {isEn
                        ? 'We launch our technology or the required team. We handle the day-to-day blockers and technical aspects so you stay in command of the strategy with complete peace of mind.'
                        : 'Ponemos en marcha nuestra tecnología o el equipo necesario. Nosotros resolvemos los bloqueos y la parte técnica del día a día para que tú sigas al mando de la estrategia con total tranquilidad.'}
                    </p>
                    <div className="flex items-center gap-2 text-purple-400 text-sm">
                      <Zap className="w-4 h-4" />
                      <span>{isEn ? 'Implementation in days, not months' : 'Implementación en días, no meses'}</span>
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
                    <h3 className="text-white text-2xl font-bold mb-3">{isEn ? 'You receive and scale' : 'Recibes y escalas'}</h3>
                    <p className="text-blue-200 leading-relaxed mb-4">
                      {isEn
                        ? 'We deliver the value you need and take care of maintenance. We ensure the service is constant and the information flow never stops, so nothing holds back your growth.'
                        : 'Te entregamos el valor que necesitas y nos ocupamos del mantenimiento. Cuidamos que el servicio sea constante y el flujo de información no se detenga, para que nada frene tu crecimiento.'}
                    </p>
                    <div className="flex items-center gap-2 text-purple-400 text-sm">
                      <RefreshCw className="w-4 h-4" />
                      <span>{isEn ? 'Continuous support included' : 'Soporte continuo incluido'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href={`/${lang}/book-a-meeting`} className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium px-10 py-4 rounded-lg transition shadow-lg">
                {isEn ? 'Book a meeting' : 'Agenda una reunión'}
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
            {/* Heading */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {isEn ? <>Trust built with <span className="bg-gradient-to-r from-[#9D62FA] to-[#0E155B] bg-clip-text text-transparent">facts</span></> : <>Confianza construida con <span className="bg-gradient-to-r from-[#9D62FA] to-[#0E155B] bg-clip-text text-transparent">hechos</span></>}
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                {isEn
                  ? 'We integrate into your day-to-day so information is never an obstacle. See how we help other leaders make decisions with total confidence.'
                  : 'Nos integramos en tu día a día para que la información nunca sea un obstáculo. Mira cómo ayudamos a otros líderes a tomar decisiones con total seguridad.'}
              </p>
            </div>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Card 1 — Jordan Stribling */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-700 italic mb-8 leading-relaxed">
                  {isEn
                    ? '"Francisco and his team were wonderful to work with. Great knowledge base and skills for creating many Python web crawlers over an extended period of time. Communication was thorough and timely, as well. I look forward to continuing to work with him."'
                    : '"Francisco y su equipo fueron maravillosos con quienes trabajar. Gran base de conocimientos y habilidades para crear numerosos web crawlers en Python durante un período prolongado. La comunicación fue minuciosa y oportuna. Espero seguir trabajando con ellos."'}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    JS
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Jordan Stribling</p>
                    <p className="text-sm text-gray-600">Operations Manager Of The Policy &amp; Research Group</p>
                  </div>
                </div>
              </div>

              {/* Card 2 — Alfredo Muñoz */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-700 italic mb-8 leading-relaxed">
                  {isEn
                    ? '"Francisco and his team are incredibly knowledgeable, and they are also very flexible to accommodate changes. The value that AUTOScraping has been bringing to us over the years has become an essential part of our operations."'
                    : '"Francisco y su equipo son increíblemente expertos, y también muy flexibles para adaptarse a los cambios. El valor que AUTOScraping nos ha aportado a lo largo de los años se ha convertido en una parte esencial de nuestras operaciones."'}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    AM
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Alfredo Muñoz</p>
                    <p className="text-sm text-gray-600">CEO Of Abiboo</p>
                  </div>
                </div>
              </div>

              {/* Card 3 — Julian Botero */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-700 italic mb-8 leading-relaxed">
                  {isEn
                    ? '"As always it has been a pleasure to work with Francisco and his team. The deadline was achieved as agreed at the beginning and the quality of the deliverables were beyond our expectations. All the project was managed under Scrum methodology."'
                    : '"Como siempre, ha sido un placer trabajar con Francisco y su equipo. Los plazos se cumplieron tal como se acordó desde el principio y la calidad de los entregables superó nuestras expectativas. Todo el proyecto fue gestionado bajo metodología Scrum."'}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    JB
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Julian Botero</p>
                    <p className="text-sm text-gray-600">Project Manager Of Data Knowledge Consultants</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <p className="text-5xl font-bold text-purple-600 mb-2">150+</p>
                <p className="text-gray-700 font-medium">{isEn ? 'Happy Clients' : 'Clientes satisfechos'}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <p className="text-5xl font-bold text-purple-600 mb-2">99.9%</p>
                <p className="text-gray-700 font-medium">{isEn ? 'Uptime Guarantee' : 'Garantía de disponibilidad'}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <p className="text-5xl font-bold text-purple-600 mb-2">24/7</p>
                <p className="text-gray-700 font-medium">{isEn ? 'Support Available' : 'Soporte disponible'}</p>
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
                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">{isEn ? 'Leadership Team' : 'Equipo líder'}</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-900">{isEn ? 'The backing behind your ' : 'El respaldo detrás de tu '}</span>
                <span className="bg-gradient-to-r from-[#9D62FA] to-[#6B46C1] bg-clip-text text-transparent">{isEn ? 'strategy' : 'estrategia'}</span>
              </h2>
              <p className="text-purple-600 text-base md:text-lg">
                {isEn
                  ? 'Meet the specialists who lead the execution of every project.'
                  : 'Conoce a los especialistas que lideran la ejecución de cada proyecto.'}
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
              <span className="text-sm font-medium text-white">{isEn ? 'EXPERT TALENT' : 'TALENTO EXPERTO'}</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">{isEn ? 'Clear information,' : 'Información clara,'}</span>
              <br />
              <span className="bg-gradient-to-r from-[#C084FC] to-[#60A5FA] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(192,132,252,0.8)]">{isEn ? 'secure decisions' : 'decisiones seguras'}</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed">
              {isEn
                ? 'We ensure web data flows directly into your workflow. No filters, no delays — just a clear path to your goals.'
                : 'Nos ocupamos de que los datos de la web lleguen directo a tu flujo de trabajo. Sin filtros ni demoras, solo un camino despejado hacia tus objetivos.'}
            </p>

            {/* CTA Button */}
            <div className="relative inline-block w-full sm:w-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C084FC]/40 via-[#60A5FA]/40 to-[#F472B6]/40 rounded-xl blur-xl"></div>
              <Link href={`/${lang}/book-a-meeting`} className="relative w-full sm:w-auto bg-gradient-to-r from-[#7B5FE8] to-[#9D62FA] hover:from-[#6B4FD8] hover:to-[#8D52EA] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center">
                {isEn ? 'Contact an expert' : 'Contactar con un experto'}
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Social Media Section */}
      <AnimatedSection>
        <section id="social-media" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/20">
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
                {isEn ? 'FOLLOW US IN REAL TIME' : 'SÍGUENOS EN TIEMPO REAL'}
              </span>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                {isEn ? <>Our work, <span className="bg-gradient-to-r from-[#9D62FA] to-[#0E155B] bg-clip-text text-transparent">unfiltered</span></> : <>Nuestro trabajo <span className="bg-gradient-to-r from-[#9D62FA] to-[#0E155B] bg-clip-text text-transparent">sin filtros</span></>}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {isEn
                  ? 'Discover what we do, how we solve it and who is behind it. Because transparency is part of how we operate.'
                  : 'Descubre lo que hacemos, cómo lo resolvemos y quiénes están detrás. Porque la transparencia es parte de cómo operamos.'}
              </p>
            </div>

            {/* Social Media Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* LinkedIn Card - Large */}
              <div className="relative lg:row-span-2 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-3xl shadow-lg text-white overflow-hidden flex flex-col">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#60A5FA]/25 via-[#C084FC]/25 to-[#F472B6]/25 rounded-3xl blur-2xl -z-10"></div>

                {/* Post Image */}
                <div className="relative w-full h-56 lg:h-64 overflow-hidden">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D5622AQHCcasDDuOE1g/feedshare-shrink_2048_1536/B56ZzdmHJnHIAg-/0/1773244281709?e=2147483647&v=beta&t=8rFPr0VtQn0evMkzyVp3Huy_6tMD-uRR0UB0ChEY9I0"
                    alt="AUTOScraping team at Milan international expansion event"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004182]/80 via-transparent to-transparent"></div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <Linkedin className="w-7 h-7 text-[#0A66C2]" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">AUTOScraping</p>
                      <p className="text-blue-200 text-sm">{isEn ? '1,931 followers · Edited' : '1.931 seguidores · Editada'}</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {isEn
                      ? 'Scaling is a team sport: Our experience in Milan 🇦🇷🤝🇮🇹'
                      : 'Escalar es un deporte de equipo: Nuestra experiencia en Milán 🇦🇷🤝🇮🇹'}
                  </h3>

                  <p className="text-blue-100 leading-relaxed mb-4 text-sm">
                    {isEn
                      ? 'Our autoscraping and automation solutions have a real and necessary place in the global market. Sharing the journey with other Argentine founders reinforces the idea that Argentine technology is an exportable quality brand.'
                      : 'Nuestras soluciones de autoscraping y automatización tienen un espacio real y necesario en el mercado global. Compartir el camino con otros fundadores argentinos refuerza la idea de que la tecnología argentina es una marca de calidad exportable.'}
                  </p>

                  <p className="text-blue-200 text-xs mb-5">
                    #InternationalExpansion #ArgentinaStartups #Italy #TechLeadership #Innovation #Networking #ArgentinaToTheWorld
                  </p>

                  <a
                    href="https://www.linkedin.com/posts/autoscraping_expansioninternacional-startupsargentina-activity-7437525596605304832-boOo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6NdK4BJzdQ0uiz6MIlSV5KFGhp5cTwDdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0A66C2] font-medium px-6 py-3 rounded-lg transition mb-6 self-start"
                  >
                    {isEn ? 'View on LinkedIn' : 'Ver en LinkedIn'}
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <div className="flex items-center gap-4 text-sm border-t border-white/20 pt-5 mt-auto flex-wrap">
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{isEn ? '16 reactions' : '16 reacciones'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>{isEn ? 'Comments' : 'Comentarios'}</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      <span>{isEn ? 'Share' : 'Compartir'}</span>
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
                    <p className="font-bold text-gray-900">AUTOScraping</p>
                    <p className="text-gray-500 text-xs">{isEn ? 'March 3 · Fira Barcelona Gran Via 📍' : '3 de marzo · Fira Barcelona Gran Via 📍'}</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-2 text-sm flex-1">
                  {isEn
                    ? 'Day 1 at #MWC26: Check! ✅🇦🇷 Swipe to see what the second part of our first day in Barcelona was like. 🇪🇸 From the adrenaline of presenting at the Argentine Hub to companies and partners, to getting lost in the vastness of the Samsung, Microsoft and MediaTek pavilions. 🤯'
                    : '¡Día 1 en el #MWC26: Check! ✅🇦🇷 Deslizá para ver lo que fue la segunda parte de nuestra primera jornada en Barcelona. 🇪🇸 De la adrenalina de presentar en el Hub Argentino ante empresas y partners, a perderse en la inmensidad de los pabellones de Samsung, Microsoft y MediaTek. 🤯'}
                </p>

                <p className="text-[#1877F2] text-xs mb-4 font-medium">
                  #MWC2026 #Barcelona #TechLife #ArgentinaInnovation
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4 text-[#1877F2] fill-[#1877F2]" />
                      <span className="text-gray-700 font-medium">{isEn ? 'Like' : 'Me gusta'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-gray-700 font-medium">{isEn ? 'Comment' : 'Comentar'}</span>
                    </div>
                  </div>
                  <a
                    href="https://www.facebook.com/AutoScraping/posts/pfbid0EFGg8DBNy4fsA9rVXnn9bUScoQgvWVG534WaYLrgsJhBfGEgxT9sPayywLkvDY8ol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1877F2] hover:text-blue-700 text-sm font-medium flex items-center gap-1.5 transition"
                  >
                    {isEn ? 'View on Facebook' : 'Ver en Facebook'}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Instagram Card - Dynamic */}
              <InstagramCard />

              {/* GitHub Card */}
              <div className="relative bg-gradient-to-br from-[#24292F] to-[#1C2128] rounded-3xl p-8 shadow-lg text-white flex flex-col">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#C084FC]/25 via-[#60A5FA]/25 to-[#F472B6]/25 rounded-3xl blur-2xl -z-10"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Github className="w-7 h-7 text-gray-900" />
                  </div>
                  <div>
                    <a href="https://github.com/autoscraping" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-purple-300 transition-colors">AUTOScraping</a>
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

                <p className="text-gray-300 mt-6 flex-1">
                  Building open-source tools for the community 🛠️
                </p>
              </div>

              {/* YouTube Card */}
              <div className="relative bg-gradient-to-br from-[#1a0a0a] to-[#0f0505] rounded-3xl p-8 shadow-lg text-white flex flex-col overflow-hidden">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#FF0000]/20 via-[#FF4444]/15 to-[#CC0000]/10 rounded-3xl blur-2xl -z-10"></div>
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF0000]/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center flex-shrink-0">
                    {/* YouTube SVG icon */}
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <a
                      href="https://www.youtube.com/@Autoscraping"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-lg hover:text-red-400 transition-colors"
                    >
                      @Autoscraping
                    </a>
                    <p className="text-gray-400 text-sm">YouTube</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {isEn ? 'Tech, data and real cases' : 'Tecnología, datos y casos reales'}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 text-sm flex-1">
                  {isEn
                    ? 'Tutorials, behind-the-scenes and technical deep-dives on web scraping, data engineering and automation. Subscribe and stay ahead.'
                    : 'Tutoriales, behind-the-scenes y análisis técnicos sobre web scraping, ingeniería de datos y automatización. Suscribite y mantente un paso adelante.'}
                </p>

                <a
                  href="https://www.youtube.com/@Autoscraping"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FF0000] hover:bg-[#cc0000] text-white font-semibold px-6 py-3 rounded-xl transition-colors self-start mt-auto"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  {isEn ? 'Watch on YouTube' : 'Ver en YouTube'}
                </a>
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
                {isEn ? 'KNOWLEDGE HUB' : 'CONOCIMIENTO EN ACCIÓN'}
              </span>
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-6xl font-bold text-gray-900 mb-4">
                    {isEn ? <>From the <span className="bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] bg-clip-text text-transparent">Blog</span></> : <>Desde el <span className="bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] bg-clip-text text-transparent">Blog</span></>}
                  </h2>
                  <p className="text-gray-600 text-lg max-w-2xl">
                    {isEn
                      ? 'Real cases, technical decisions and lessons from the field, documented by those who execute the solution.'
                      : 'Casos reales, decisiones técnicas y lecciones del campo, documentadas por quienes ejecutan la solución.'}
                  </p>
                </div>
                <Link href={`/${lang}/blog`} className="px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition flex items-center gap-2">
                  {isEn ? 'View all' : 'Ver todos los artículos'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
      <ContactCTA />

      <Footer />
    </>
  );
}
