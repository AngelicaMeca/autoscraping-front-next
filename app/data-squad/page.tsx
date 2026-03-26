'use client';

import { UsersRound, MessageSquare, Shield, Database, Layers, Zap, TrendingUp, CircleCheck as CheckCircle2, ChartBar as BarChart3, Globe, Sparkles, ChevronDown, ChevronLeft, ChevronRight, DollarSign, BookOpen, Rocket, GraduationCap, Target, BookText } from 'lucide-react';
import { useState } from 'react';
import CicloDelDatoSection from './ciclo-del-dato';
import ResultadosBanner from './resultados-banner';
import FaqSection from './faq-section';
import DataFactoryCta from './data-factory-cta';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function DataSquadPage() {
  const [whySlide, setWhySlide] = useState(0);

  const whyCards = [
    {
      icon: DollarSign,
      title: 'Ahorro operativo real',
      subtitle: 'ELIMINA COSTOS DE CONTRATACIÓN',
      description: 'Elimina costos de contratación, onboarding y gestión administrativa. Solo pagas por el talento que necesitas, cuando lo necesitas.',
      tags: ['Inversión optimizada', 'Sin burocracia', 'Eficiencia inmediata'],
    },
    {
      icon: BookOpen,
      title: 'Formación continua',
      subtitle: 'TECNOLOGÍA SIEMPRE ACTUALIZADA',
      description: 'Nuestros especialistas se mantienen actualizados en cada ciclo tecnológico. El equipo que integras, opera con las herramientas y metodologías más avanzadas del sector.',
      tags: ['Aprendizaje constante', 'Adaptable', 'Al día'],
    },
    {
      icon: Rocket,
      title: 'Activación en 2 semanas',
      subtitle: 'SIN PROCESOS LARGOS NI DEMORAS',
      description: 'Seleccionamos, validamos e integramos tu squad en un plazo de dos semanas. Sin procesos largos ni demoras.',
      tags: ['Rápido', 'Sin fricciones', 'Listo para operar'],
    },
    {
      icon: GraduationCap,
      title: 'Mentoría interna',
      subtitle: 'CALIDAD TÉCNICA GARANTIZADA',
      description: 'Cada miembro cuenta con el respaldo de ingenieros que supervisan la calidad técnica del trabajo, siempre operando como una unidad.',
      tags: ['Respaldo', 'Apoyo', 'En equipo'],
    },
    {
      icon: Target,
      title: 'Foco en soluciones',
      subtitle: 'ORIENTADO AL RESULTADO',
      description: 'No asignamos personas para ejecutar tareas. Sumamos perfiles orientados a resolver; que identifican el problema, proponen el camino y lo ejecutan.',
      tags: ['Resolutivo', 'Proactivo', 'Orientado al resultado'],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#1e3a8a]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-40 left-20 w-2 h-2 bg-blue-400/30 rounded-full"></div>
        <div className="absolute top-60 right-32 w-3 h-3 bg-blue-300/40 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-blue-400/30 rounded-full"></div>
        <div className="absolute bottom-96 left-1/4 w-1.5 h-1.5 bg-blue-300/40 rounded-full"></div>

        <div className="mx-auto max-w-6xl text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-full px-5 py-2.5 mb-10">
            <UsersRound className="w-5 h-5 text-blue-200" />
            <span className="text-white font-medium text-sm tracking-wide">TALENTO BAJO DEMANDA</span>
            <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
          </div>

          {/* Title */}
          <h1 className="text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Data </span>
            <span className="text-blue-400">Squad</span>
          </h1>

          {/* Description */}
          <p className="text-white/90 text-xl max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Escala tu capacidad técnica con un equipo de élite en extracción de datos. Integra especialistas senior a tu flujo de trabajo para resolver la complejidad de la captura, análisis y mantenimiento.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 mb-20">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition font-medium">
              <MessageSquare className="w-5 h-5" />
              <span>Hablar con un experto</span>
              <span className="ml-1">→</span>
            </button>
            <button className="flex items-center gap-2 bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl transition font-medium">
              <span>Conocer el proceso</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex items-center justify-center gap-4 mb-20">
            <div className="flex items-center gap-3 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl px-6 py-4">
              <div className="bg-purple-500 p-2.5 rounded-xl">
                <UsersRound className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">Talento senior</div>
                <div className="text-blue-200 text-xs">1:1</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl px-6 py-4">
              <div className="bg-purple-500 p-2.5 rounded-xl">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">Mantenimiento</div>
                <div className="text-blue-200 text-xs">Proactivo</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl px-6 py-4">
              <div className="bg-blue-500 p-2.5 rounded-xl">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">Escalabilidad</div>
                <div className="text-blue-200 text-xs">Inmediata</div>
              </div>
            </div>
          </div>

          {/* Value Proposition Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8 text-left">
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-4 rounded-2xl w-fit mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Integracio inmediata</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Potencia tu capacidad operativa integrando especialistas expertos a tus flujos actuales.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8 text-left">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-2xl w-fit mb-6">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Gestion Garantizada</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Recibe visibilidad total del progreso con reportes regulares, eliminando la carga de la microgestión.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8 text-left">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-2xl w-fit mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Continuidad activa</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Transfiere la complejidad del mantenimiento y la resolución de bloqueos a un equipo dedicado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La Solución DataSquad Section */}
      <section className="relative py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 40%, #fdf2f8 100%)' }}>
        {/* Background decorative blurred shapes */}
        <div className="absolute top-16 left-8 w-56 h-56 bg-purple-400/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-12 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
              <UsersRound className="w-4 h-4 text-purple-500" />
              <span className="text-gray-600 text-xs font-semibold uppercase tracking-widest">
                CONSTRUIDO PARA TRABAJAR EN EQUIPO
              </span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center font-bold mb-6 leading-tight" style={{ fontSize: '3rem' }}>
            <span className="text-gray-900">La Solución </span>
            <span className="text-blue-500">DataSquad</span>
          </h2>

          {/* Description */}
          <p className="text-center text-gray-600 text-base max-w-xl mx-auto mb-14 leading-relaxed">
            Delega la gestión de tus datos en un equipo especialista que se hace cargo de principio a fin. Desde la captura hasta la entrega, cada etapa del ciclo está cubierta por el perfil correcto.
          </p>

          {/* Two Column Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Card */}
            <div className="bg-white rounded-2xl p-7 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Adaptado a tu industria</h3>
              </div>

              <div className="space-y-3">
                {/* Item 1 - purple */}
                <div className="bg-purple-50 rounded-xl p-3.5 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-800 text-sm font-medium">Cada Squad de ingenieros que entienden tu sector</p>
                </div>

                {/* Item 2 - blue */}
                <div className="bg-blue-50 rounded-xl p-3.5 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-800 text-sm font-medium">Sin perfiles genéricos</p>
                </div>

                {/* Item 3 - pink */}
                <div className="bg-pink-50 rounded-xl p-3.5 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-800 text-sm font-medium">Expertos que hablan tu idioma</p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-2xl p-7 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Flexible y escalable</h3>
              </div>

              <div className="space-y-5">
                {/* Item 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-pink-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 text-sm font-bold">Emplieza con el talento</p>
                    <p className="text-gray-500 text-sm">que necesitas hoy</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-pink-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 text-sm font-bold">Suma capacidad a medida que</p>
                    <p className="text-gray-500 text-sm">tu proyecto crece</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-pink-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 text-sm font-bold">Sin recursos desperdiciados,</p>
                    <p className="text-gray-500 text-sm">sin demoras</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegir DataSquad Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-white">
        {/* Background decorative blobs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-pink-100 border border-pink-200 rounded-full px-5 py-2.5">
              <CheckCircle2 className="w-4 h-4 text-pink-500" />
              <span className="text-pink-600 text-xs font-bold uppercase tracking-widest">
                EL ESTÁNDAR QUE NOS EXIGIMOS
              </span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center font-bold mb-5 leading-tight" style={{ fontSize: '3rem' }}>
            <span className="text-gray-900">Por qué elegir </span>
            <span className="text-purple-600">DataSquad</span>
          </h2>

          {/* Subtitle */}
          <p className="text-center text-gray-600 text-base max-w-lg mx-auto mb-16 leading-relaxed">
            Porque la responsabilidad, la precisión y la continuidad no son opcionales para nosotros, son el punto de partida.
          </p>

          {/* Carousel */}
          <div className="relative flex items-center justify-center gap-6">
            {/* Left arrow */}
            <button
              onClick={() => setWhySlide((prev) => (prev <= 0 ? whyCards.length - 1 : prev - 1))}
              className="flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            </button>

            {/* Card */}
            <div className="flex-1 max-w-xl bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              {/* Card header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const Icon = whyCards[whySlide].icon;
                    return <Icon className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{whyCards[whySlide].title}</h3>
                  <p className="text-pink-500 text-xs font-bold uppercase tracking-wide mt-0.5">{whyCards[whySlide].subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed mb-5">{whyCards[whySlide].description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {whyCards[whySlide].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-gray-700 border border-pink-300 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={() => setWhySlide((prev) => (prev >= whyCards.length - 1 ? 0 : prev + 1))}
              className="flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {whyCards.map((_, i) => (
              <button
                key={i}
                onClick={() => setWhySlide(i)}
                className={`rounded-full transition-all ${
                  i === whySlide
                    ? 'w-4 h-4 bg-pink-500'
                    : 'w-3 h-3 bg-pink-200 hover:bg-pink-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pilares de DataSquad Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-pink-100 border border-pink-200 rounded-full px-5 py-2.5">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-pink-600 text-xs font-bold uppercase tracking-widest">
                LO QUE NOS DEFINE
              </span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center font-bold mb-5 leading-tight" style={{ fontSize: '3rem' }}>
            <span className="text-gray-900">Pilares de </span>
            <span className="text-purple-600 underline decoration-purple-300 underline-offset-4">DataSquad</span>
          </h2>

          {/* Subtitle */}
          <p className="text-center text-gray-600 text-base max-w-3xl mx-auto mb-16 leading-relaxed">
            Formamos equipos que se integran a tu operación con el rigor y la responsabilidad de quien se hace cargo de verdad.
          </p>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                icon: BookText,
                gradient: 'from-blue-500 to-blue-700',
                borderColor: 'border-blue-100',
                title: 'Ejecución garantizada',
                description: 'No solo sumamos expertos; asumimos la responsabilidad técnica de tu proyecto. Mantén el control total mediante informes de desempeño y métricas de valor, asegurando resultados medibles en cada etapa.',
              },
              {
                icon: Layers,
                gradient: 'from-pink-500 to-rose-600',
                borderColor: 'border-pink-100',
                title: 'Ingeniería Senior',
                description: 'Accede a perfiles con más de 5 años de experiencia técnica. Integramos especialistas que ya han superado los desafíos más complejos del sector, eliminando curvas de aprendizaje y riesgos operativos.',
              },
              {
                icon: CheckCircle2,
                gradient: 'from-teal-400 to-emerald-600',
                borderColor: 'border-teal-100',
                title: 'Flujo ininterrumpido',
                description: 'Monitoreamos y ajustamos proactivamente cada proceso para que tu información fluya sin fricciones, evitando cualquier incidencia en tu sistema.',
              },
              {
                icon: Database,
                gradient: 'from-orange-400 to-amber-500',
                borderColor: 'border-orange-100',
                title: 'Socio estratégico',
                description: 'Nos fundimos con tu equipo, tus herramientas y tus metas para actuar como un aliado que transforma desafíos técnicos en motores de negocio.',
              },
              {
                icon: Zap,
                gradient: 'from-yellow-400 to-lime-500',
                borderColor: 'border-yellow-100',
                title: 'Integridad y seguridad',
                description: 'Operamos bajo estándares de seguridad de alto nivel, brindando el respaldo necesario para que tu flujo de información sea siempre legítimo y protegido.',
              },
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-2xl border ${pillar.borderColor} p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${pillar.gradient} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CicloDelDatoSection />
      <ResultadosBanner />
      <FaqSection />
      <DataFactoryCta />
      <Footer />
    </main>
  );
}
