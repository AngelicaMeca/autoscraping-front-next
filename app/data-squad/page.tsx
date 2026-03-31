'use client';

import { UsersRound, MessageSquare, Shield, Database, Layers, Zap, TrendingUp, CircleCheck as CheckCircle2, ChartBar as BarChart3, Globe, Sparkles, ChevronDown, ChevronLeft, ChevronRight, DollarSign, BookOpen, Rocket, GraduationCap, Target, BookText } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CicloDelDatoSection from './ciclo-del-dato';
import ResultadosBanner from './resultados-banner';
import FaqSection from './faq-section';
import DataFactoryCta from './data-factory-cta';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function DataSquadPage() {
  const whyCards = [
    {
      icon: DollarSign,
      title: 'Ahorro operativo real',
      subtitle: 'ELIMINA COSTOS DE CONTRATACIÓN',
      description: 'Elimina costos de contratación, onboarding y gestión administrativa. Solo pagas por el talento que necesitas, cuando lo necesitas.',
      tags: ['Inversión optimizada', 'Sin burocracia', 'Eficiencia inmediata'],
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: BookOpen,
      title: 'Formación continua',
      subtitle: 'TECNOLOGÍA SIEMPRE ACTUALIZADA',
      description: 'Nuestros especialistas se mantienen actualizados en cada ciclo tecnológico.',
      tags: ['Aprendizaje constante', 'Adaptable', 'Al día'],
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: Rocket,
      title: 'Activación en 2 semanas',
      subtitle: 'SIN PROCESOS LARGOS NI DEMORAS',
      description: 'Seleccionamos, validamos e integramos tu squad en un plazo de dos semanas.',
      tags: ['Rápido', 'Sin fricciones', 'Listo para operar'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: GraduationCap,
      title: 'Mentoría interna',
      subtitle: 'CALIDAD TÉCNICA GARANTIZADA',
      description: 'Cada miembro cuenta con el respaldo de ingenieros que supervisan la calidad técnica del trabajo.',
      tags: ['Respaldo', 'Apoyo', 'En equipo'],
      gradient: 'from-orange-400 to-amber-500',
    },
    {
      icon: Target,
      title: 'Foco en soluciones',
      subtitle: 'ORIENTADO AL RESULTADO',
      description: 'Sumamos perfiles orientados a resolver; que identifican el problema, proponen el camino y lo ejecutan.',
      tags: ['Resolutivo', 'Proactivo', 'Orientado al resultado'],
      gradient: 'from-indigo-500 to-violet-600',
    },
  ];

  const [whySlide, setWhySlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToNextSlide = useCallback(() => {
    setSlideDirection(1);
    setWhySlide((prev) => (prev >= whyCards.length - 1 ? 0 : prev + 1));
  }, [whyCards.length]);

  const goToPrevSlide = useCallback(() => {
    setSlideDirection(-1);
    setWhySlide((prev) => (prev <= 0 ? whyCards.length - 1 : prev - 1));
  }, [whyCards.length]);

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(goToNextSlide, 4000);
  }, [goToNextSlide]);

  useEffect(() => {
    autoplayRef.current = setInterval(goToNextSlide, 4000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [goToNextSlide]);
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1247] via-[#2d1b69] to-[#1a1247]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        {/* Decorative dots - matching Data Factory */}
        <div className="absolute top-40 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        <div className="absolute top-60 right-32 w-2 h-2 bg-pink-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-40 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-80 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>

        <div className="mx-auto max-w-6xl text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-10">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <UsersRound className="w-5 h-5 text-white" />
            <span className="text-white font-medium text-sm tracking-wide uppercase">TALENTO BAJO DEMANDA</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          </div>

          {/* Title */}
          <h1 className="text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Data </span>
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#7B92FF] to-[#9D7EFF] bg-clip-text text-transparent">Squad</span>
            <span className="text-[#60A5FA]">.</span>
          </h1>

          {/* Description */}
          <p className="text-white/90 text-xl max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Escala tu capacidad técnica con un equipo de élite en extracción de datos. Integra especialistas senior a tu flujo de trabajo para resolver la complejidad de la captura, análisis y mantenimiento.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 mb-20">
            <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 flex items-center gap-3">
              <MessageSquare className="w-5 h-5" />
              <span>Hablar con un experto</span>
              <span className="ml-1">→</span>
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Conocer el proceso
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex items-center justify-center gap-4 mb-20">
            <div className="bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 backdrop-blur-sm border border-[#10b981]/30 rounded-2xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center">
                <UsersRound className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Talento senior</p>
                <p className="text-gray-300 text-sm">1:1</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3b82f6]/20 to-[#2563eb]/20 backdrop-blur-sm border border-[#3b82f6]/30 rounded-2xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Mantenimiento</p>
                <p className="text-gray-300 text-sm">Proactivo</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#ec4899]/20 to-[#db2777]/20 backdrop-blur-sm border border-[#ec4899]/30 rounded-2xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Escalabilidad</p>
                <p className="text-gray-300 text-sm">Inmediata</p>
              </div>
            </div>
          </div>

          {/* Value Proposition Cards */}
          <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-left hover:border-purple-500/30 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Integración inmediata</h3>
              <p className="text-gray-400 leading-relaxed">
                Potencia tu capacidad operativa integrando especialistas expertos a tus flujos actuales.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-left hover:border-purple-500/30 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Gestión Garantizada</h3>
              <p className="text-gray-400 leading-relaxed">
                Recibe visibilidad total del progreso con reportes regulares, eliminando la carga de la microgestión.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-left hover:border-purple-500/30 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Continuidad activa</h3>
              <p className="text-gray-400 leading-relaxed">
                Transfiere la complejidad del mantenimiento y la resolución de bloqueos a un equipo dedicado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La Solución DataSquad Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background decorative blurred shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 text-xs font-bold uppercase tracking-wide">
                CONSTRUIDO PARA TRABAJAR EN EQUIPO
              </span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-5xl font-bold text-center mb-6">
            <span className="text-gray-900">La Solución</span>
            <br />
            <span className="bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent">DataSquad</span>
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

      {/* Por qué elegir DataSquad + Pilares - unified section */}
      <section className="relative py-24 px-6 overflow-hidden bg-white">
        {/* Background Decorative Blurred Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-300/40 rounded-full blur-3xl"></div>
          <div className="absolute top-40 left-1/4 w-64 h-64 bg-blue-300/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/10 rounded-full blur-3xl"></div>
          {/* Decorative border circles */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-200 rounded-full"></div>
          <div className="absolute top-40 left-32 w-24 h-24 border-2 border-blue-200 rounded-full"></div>
          <div className="absolute bottom-32 right-20 w-40 h-40 border-2 border-purple-100 rounded-full"></div>
          <div className="absolute top-60 right-40 w-28 h-28 border-2 border-blue-100 rounded-full"></div>
          <div className="absolute bottom-20 left-40 w-36 h-36 bg-purple-100/30 rounded-full blur-2xl"></div>
          <div className="absolute top-32 right-32 w-48 h-48 bg-blue-100/30 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10">
          {/* --- Por qué elegir DataSquad --- */}
          <div className="max-w-5xl mx-auto mb-32">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 fill-pink-600" />
                EL ESTÁNDAR QUE NOS EXIGIMOS
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Por qué elegir
              </h2>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                DataSquad
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-center text-gray-600 text-base max-w-lg mx-auto mb-16 leading-relaxed">
              Porque la responsabilidad, la precisión y la continuidad no son opcionales para nosotros, son el punto de partida.
            </p>

            {/* Carousel - one card at a time with horizontal slide */}
            <div className="relative max-w-2xl mx-auto">
              {/* Navigation Buttons */}
              <button
                onClick={() => { goToPrevSlide(); resetAutoplay(); }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition z-10"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <button
                onClick={() => { goToNextSlide(); resetAutoplay(); }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition z-10"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Card */}
              <div className="bg-gradient-to-br from-purple-50/80 to-white rounded-3xl shadow-xl p-10 border border-purple-100/50 backdrop-blur-sm min-h-[340px] overflow-hidden">
                <AnimatePresence mode="wait" custom={slideDirection}>
                  <motion.div
                    key={whySlide}
                    custom={slideDirection}
                    initial={{ opacity: 0, x: slideDirection * 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: slideDirection * -80 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                  >
                    {/* Icon */}
                    <div className="flex justify-start mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${whyCards[whySlide].gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        {(() => {
                          const Icon = whyCards[whySlide].icon;
                          return <Icon className="w-8 h-8 text-white" />;
                        })()}
                      </div>
                    </div>

                    {/* Title & Badge */}
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {whyCards[whySlide].title}
                      </h3>
                      <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                        {whyCards[whySlide].subtitle}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {whyCards[whySlide].description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {whyCards[whySlide].tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-medium border border-purple-200 hover:bg-purple-50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {whyCards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setSlideDirection(i > whySlide ? 1 : -1); setWhySlide(i); resetAutoplay(); }}
                    className={`transition-all ${
                      i === whySlide
                        ? 'w-8 h-2 bg-pink-500'
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    } rounded-full`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* --- Pilares de DataSquad --- */}
          <div className="max-w-6xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                <Zap className="w-3 h-3" />
                LO QUE NOS DEFINE
              </div>
            </div>

            {/* Title */}
            <h3 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pilares de <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">DataSquad</span>
            </h3>

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
