'use client';

import { UsersRound, MessageSquare, Shield, Database, Layers, Zap, TrendingUp, CircleCheck as CheckCircle2, ChartBar as BarChart3, Globe, Sparkles, ChevronDown, ChevronLeft, ChevronRight, DollarSign, BookOpen, Rocket, GraduationCap, Target, BookText, Users, Brain, Home, Briefcase, TrendingDown, Cpu, FileText, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import CicloDelDatoSection from './ciclo-del-dato';
import ResultadosBanner from './resultados-banner';
import FaqSection from './faq-section';
import DataFactoryCta from './data-factory-cta';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactCTA from '@/components/ContactCTA';

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

  // Estado y lógica para el carrusel de servicios
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      slug: 'data-squad-as-service',
      title: 'Data Squad As Service',
      subtitle: 'SOLUCIONES COMPLETAS',
      description: 'Acceso a un equipo dedicado de especialistas en extracción de datos, disponible bajo demanda para resolver tus proyectos más complejos sin comprometerse a largo plazo.',
      icon: Users,
      tags: ['Flexible', 'On-demand', 'Escalable']
    },
    {
      slug: 'data-scientist-squad',
      title: 'Data Scientist Squad',
      subtitle: 'ANÁLISIS Y PREDICCIÓN',
      description: 'Científicos de datos con experiencia en machine learning y análisis predictivo para transformar datos crudos en insights estratégicos y modelos de negocio.',
      icon: Brain,
      tags: ['ML', 'Predictivo', 'Insights']
    },
    {
      slug: 'core-data-services',
      title: 'Core Data Services',
      subtitle: 'SERVICIOS FUNDAMENTALES',
      description: 'Servicios esenciales de limpieza, validación y estructuración de datos para asegurar la calidad de tu información desde el primer momento.',
      icon: Database,
      tags: ['Calidad', 'Validación', 'Limpieza']
    },
    {
      slug: 'advanced-data-services',
      title: 'Advanced Data Services',
      subtitle: 'PROCESAMIENTO AVANZADO',
      description: 'Soluciones de procesamiento de alto rendimiento incluyendo transformación ETL, integración multi-fuente y operaciones de datos en tiempo real.',
      icon: Layers,
      tags: ['ETL', 'Real-time', 'Integración']
    },
    {
      slug: 'data-collection-services',
      title: 'Data Collection Services',
      subtitle: 'CAPTURA DE DATOS',
      description: 'Recopilación exhaustiva de datos de múltiples fuentes con técnicas avanzadas de web scraping, APIs y integraciones personalizadas.',
      icon: FileText,
      tags: ['Scraping', 'APIs', 'Recopilación']
    },
    {
      slug: 'big-data-consulting',
      title: 'Big Data Consulting Services',
      subtitle: 'ESTRATEGIA A ESCALA',
      description: 'Asesoramiento estratégico para implementar infraestructuras de big data, seleccionar tecnologías adecuadas y optimizar tus operaciones de datos masivos.',
      icon: Briefcase,
      tags: ['Estrategia', 'Infraestructura', 'Optimización']
    },
    {
      slug: 'real-estate-data-entry',
      title: 'Real Estate Data Entry Services',
      subtitle: 'DATOS INMOBILIARIOS',
      description: 'Captura especializada de datos immobiliarios, listados, valuaciones y mercados para potenciar tu estrategia en el sector real estate.',
      icon: Home,
      tags: ['Inmobiliario', 'Listados', 'Mercado']
    },
    {
      slug: 'outsource-data-mining',
      title: 'Outsource Data Mining Services',
      subtitle: 'EXTRACCIÓN ESPECIALIZADA',
      description: 'Outsourcing completo de minería de datos con equipos dedicados para extraer patrones, tendencias y oportunidades de tus conjuntos de datos.',
      icon: TrendingDown,
      tags: ['Mining', 'Patrones', 'Tendencias']
    },
    {
      slug: 'b2b-data-services',
      title: 'B2B Data Services',
      subtitle: 'DATOS EMPRESARIALES',
      description: 'Bases de datos empresariales actualizadas, prospección B2B, enriquecimiento de contactos y listas de decisores para impulsar tu estrategia comercial.',
      icon: Cpu,
      tags: ['B2B', 'Prospección', 'Contactos']
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev >= services.length - 1 ? 0 : prev + 1));
  };

  const prevService = () => {
    setCurrentService((prev) => (prev <= 0 ? services.length - 1 : prev - 1));
  };

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
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Data </span>
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#7B92FF] to-[#9D7EFF] bg-clip-text text-transparent">Squad</span>
            <span className="text-[#60A5FA]">.</span>
          </h1>

          {/* Description */}
          <p className="text-white/90 text-xl max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Escala tu capacidad técnica con un equipo de élite en extracción de datos. Integra especialistas senior a tu flujo de trabajo para resolver la complejidad de la captura, análisis y mantenimiento.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20 px-4 md:px-0">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 px-4 md:px-0">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 text-xs font-bold uppercase tracking-wide">
                CONSTRUIDO PARA TRABAJAR EN EQUIPO
              </span>
            </div>
          </div>

          {/* Title - Single Line */}
          <h2 className="text-5xl font-bold text-center mb-6">
            <span className="text-gray-900">La Solución </span>
            <span className="bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent">DataSquad</span>
          </h2>

          {/* Description */}
          <p className="text-center text-gray-600 text-base max-w-2xl mx-auto mb-14 leading-relaxed">
            Delega la gestión de tus datos en un equipo especialista que se hace cargo de principio a fin. Desde la captura hasta la entrega, cada etapa del ciclo está cubierta por el perfil correcto.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Card - What is DataSquad? */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">¿Qué es DataSquad?</h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                Es el servicio de outsourcing de datos de Autoscraping. Formamos equipos de expertos que se integran directamente en tu flujo de trabajo, cubriendo cada etapa del ciclo de vida del dato.
              </p>

              {/* Feature List */}
              <div className="space-y-4 mb-8">
                <div className="bg-purple-50 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Equipos Especializados</h4>
                    <p className="text-sm text-gray-600">Ingenieros que entienden tu sector</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Cobertura Total</h4>
                    <p className="text-sm text-gray-600">De captura hasta entrega</p>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Tu Idioma</h4>
                    <p className="text-sm text-gray-600">Expertos que hablan como tú</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  Outsourcing
                </span>
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  Data Squad
                </span>
                <span className="bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  Equipos
                </span>
              </div>
            </div>

            {/* Right Side - Two Cards */}
            <div className="space-y-8">
              {/* Card 1 - Adaptado a tu industria */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">Adaptado a tu industria</h3>
                </div>

                <div className="space-y-3">
                  {/* Item 1 - purple */}
                  <div className="bg-purple-50 rounded-xl p-3.5 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-800 text-sm font-medium">Equipos que entienden tu sector</p>
                  </div>

                  {/* Item 2 - blue */}
                  <div className="bg-blue-50 rounded-xl p-3.5 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-800 text-sm font-medium">Sin perfiles genéricos</p>
                  </div>

                  {/* Item 3 - pink */}
                  <div className="bg-pink-50 rounded-xl p-3.5 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-800 text-sm font-medium">Stack técnico preciso</p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Flexible y escalable */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">Flexible y escalable</h3>
                </div>

                <div className="space-y-5">
                  {/* Item 1 */}
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 bg-pink-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold">Comienza con el talento</p>
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
                Por qué elegir <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">DataSquad</span>
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

            {/* Cards grid with new design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                {
                  icon: BookText,
                  gradient: 'from-blue-500 to-blue-700',
                  bgLight: 'bg-blue-50',
                  borderColor: 'border-blue-200',
                  accentColor: 'from-blue-400 to-blue-600',
                  title: 'Ejecución garantizada',
                  description: 'No solo sumamos expertos; asumimos la responsabilidad técnica de tu proyecto.',
                  decorative: true,
                },
                {
                  icon: Layers,
                  gradient: 'from-pink-500 to-rose-600',
                  bgLight: 'bg-pink-50',
                  borderColor: 'border-pink-200',
                  accentColor: 'from-pink-400 to-rose-600',
                  title: 'Ingeniería Senior',
                  description: 'Especialistas con 5+ años de experiencia que han superado desafíos complejos.',
                  decorative: true,
                },
                {
                  icon: CheckCircle2,
                  gradient: 'from-teal-400 to-emerald-600',
                  bgLight: 'bg-teal-50',
                  borderColor: 'border-teal-200',
                  accentColor: 'from-teal-400 to-emerald-600',
                  title: 'Flujo ininterrumpido',
                  description: 'Monitoreamos y ajustamos proactivamente cada proceso sin fricciones.',
                  decorative: true,
                },
                {
                  icon: Database,
                  gradient: 'from-orange-400 to-amber-500',
                  bgLight: 'bg-orange-50',
                  borderColor: 'border-orange-200',
                  accentColor: 'from-orange-400 to-amber-500',
                  title: 'Socio estratégico',
                  description: 'Nos integramos en tu equipo para transformar desafíos en motores de negocio.',
                  decorative: true,
                },
                {
                  icon: Zap,
                  gradient: 'from-yellow-400 to-lime-500',
                  bgLight: 'bg-yellow-50',
                  borderColor: 'border-yellow-200',
                  accentColor: 'from-yellow-400 to-lime-500',
                  title: 'Integridad y seguridad',
                  description: 'Estándares de seguridad de alto nivel para proteger tu flujo de información.',
                  decorative: true,
                },
              ].map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className={`relative bg-white rounded-3xl border ${pillar.borderColor} p-6 flex flex-col gap-4`}
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-10 pointer-events-none">
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${pillar.accentColor}`}></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 opacity-5 pointer-events-none">
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${pillar.accentColor}`}></div>
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center relative z-10`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 leading-tight relative z-10">{pillar.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed relative z-10">{pillar.description}</p>

                    {/* Bottom accent line */}
                    <div className={`h-1 w-full bg-gradient-to-r ${pillar.accentColor} rounded-full mt-auto`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CicloDelDatoSection />

      {/* Servicios de Data Squad Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-200 rounded-full"></div>
          <div className="absolute top-40 left-32 w-24 h-24 border-2 border-blue-200 rounded-full"></div>
          <div className="absolute bottom-32 right-20 w-40 h-40 border-2 border-purple-100 rounded-full"></div>
          <div className="absolute top-60 right-40 w-28 h-28 border-2 border-blue-100 rounded-full"></div>
          <div className="absolute bottom-20 left-40 w-36 h-36 bg-purple-100/30 rounded-full blur-2xl"></div>
          <div className="absolute top-32 right-32 w-48 h-48 bg-blue-100/30 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="text-gray-900">Tu Arsenal de </span>
              <span className="bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] bg-clip-text text-transparent">Soluciones en Datos</span>
            </h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mt-6"></div>
          </div>

          {/* Carousel Card */}
          <div className="mb-12">
            <div className="relative max-w-3xl mx-auto">
              {/* Navigation Buttons */}
              <button
                onClick={prevService}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all z-10 border border-gray-200"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <button
                onClick={nextService}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all z-10 border border-gray-200"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Card */}
              <Link
                href={`/data-squad/${services[currentService].slug}`}
                className="block bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-2xl cursor-pointer group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      {(() => {
                        const IconComponent = services[currentService].icon;
                        return <IconComponent className="w-7 h-7 text-white" />;
                      })()}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-purple-600 text-xs font-bold uppercase tracking-wide">
                        {services[currentService].subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {services[currentService].title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-4">
                      {services[currentService].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {services[currentService].tags.map((tag, idx) => (
                        <span key={idx} className="text-purple-600 text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentService(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentService ? 'bg-purple-600 w-8' : 'bg-purple-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ResultadosBanner />
      <FaqSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
