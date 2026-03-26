'use client';

import { Shield, Clock, Lock, Sparkles, Building2, ArrowRight, MessageSquare, ChevronDown, RefreshCw, Database, Layers, Zap, ChartBar as BarChart3, Target, CreditCard, Sun, Bolt, ShoppingCart, Chrome as HomeIcon, Plane, Heart, ShoppingBag, Ticket, UserCheck, ChevronLeft, ChevronRight, Smile, FileStack, TrendingUp, BookOpen, Globe, CircleCheck as CheckCircle2, Puzzle, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function DataFactoryPage() {
  const [solutionsSlide, setSolutionsSlide] = useState(0);
  const [currentCapability, setCurrentCapability] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const solutions = [
    {
      title: 'E-commerce',
      description: 'Retailers digitales que compiten por precio, stock y posicionamiento global.',
      icon: ShoppingCart,
      iconColor: 'from-purple-500 to-purple-600',
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Real Estate',
      description: 'Plataformas e inversores que basan su rentabilidad en el dinamismo del mercado inmobiliario.',
      icon: HomeIcon,
      iconColor: 'from-blue-500 to-blue-600',
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Turismo y viajes',
      description: 'Agencias y motores de reserva que operan con inventarios y tarifas de alta volatilidad.',
      icon: Plane,
      iconColor: 'from-cyan-500 to-cyan-600',
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Salud y Pharma',
      description: 'Organizaciones sanitarias que gestionan suministros, servicios y tendencias del sector.',
      icon: Heart,
      iconColor: 'from-pink-500 to-pink-600',
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Consumo y Retail',
      description: 'Marcas y distribuidores que necesitan trazabilidad de sus canales y conocimiento de la demanda.',
      icon: ShoppingBag,
      iconColor: 'from-orange-500 to-orange-600',
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Ciberseguridad',
      description: 'Equipos de defensa digital que monitorean amenazas y vulnerabilidad en la red.',
      icon: Lock,
      iconColor: 'from-red-500 to-red-600',
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Fintech',
      description: 'Instituciones financieras que requieren datos alternativos y flujos de mercado precisos.',
      icon: CreditCard,
      iconColor: 'from-green-500 to-green-600',
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Eventos y Ticketing',
      description: 'Plataformas de eventos que enfrentan alta demanda y necesitan control de inventario real.',
      icon: Ticket,
      iconColor: 'from-yellow-500 to-yellow-600',
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Recursos Humanos y Talento',
      description: 'Consultoras de talento y portales que analizan la oferta y demanda laboral masiva.',
      icon: UserCheck,
      iconColor: 'from-indigo-500 to-indigo-600',
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Gobierno y Sector Público',
      description: 'Entidades analistas que requieren transparencia en registros, licitaciones y datos oficiales.',
      icon: Building2,
      iconColor: 'from-slate-500 to-slate-600',
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Consultoría y Analytics',
      description: 'Firmas de análisis que necesitan materia prima de alta fidelidad para alimentar las decisiones de sus clientes.',
      icon: BarChart3,
      iconColor: 'from-violet-500 to-violet-600',
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    }
  ];

  const nextSolutionsSlide = () => {
    setSolutionsSlide((prev) => (prev >= solutions.length - 1 ? 0 : prev + 1));
  };

  const prevSolutionsSlide = () => {
    setSolutionsSlide((prev) => (prev <= 0 ? solutions.length - 1 : prev - 1));
  };

  const capabilities = [
    {
      title: 'Estrategias de Pricing',
      subtitle: 'COMMITTED TO YOUR SUCCESS',
      description: 'Monitoreo de precios y promociones para ejecutar ajustes competitivos que protejan tus márgenes de beneficio.',
      icon: Target,
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Indexación Inmobiliaria',
      subtitle: 'COMMITTED TO YOUR SUCCESS',
      description: 'Captura masiva de listados y variaciones de propiedades para valoración y detección de oportunidades.',
      icon: Building2,
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Monitoreo de Airbnb',
      subtitle: 'COMMITTED TO YOUR SUCCESS',
      description: 'Seguimiento de disponibilidad y tarifas en el sector alojamiento para maximizar la rentabilidad mediante precios dinámicos.',
      icon: HomeIcon,
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Extracción de Linkedin',
      subtitle: 'COMMITTED TO YOUR SUCCESS',
      description: 'Selección de perfiles profesionales y datos de empresas para nutrir estrategias de captación B2B con precisión.',
      icon: Users,
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Generación de Leads',
      subtitle: 'COMMITTED TO YOUR SUCCESS',
      description: 'Identificación de prospectos calificados para acelerar el ciclo de ventas mediante bases de contacto siempre actualizadas.',
      icon: UserCheck,
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Catálogos de E-commerce',
      subtitle: 'COMMITTED TO YOUR SUCCESS',
      description: 'Rastreo de inventarios y stock de la competencia para ajustar tu oferta comercial en tiempo real y sin fricciones.',
      icon: ShoppingCart,
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Registro de Google Maps',
      subtitle: 'COMMITTED TO YOUR SUCCESS',
      description: 'Consolidación de datos locales y geográficos para el análisis de competencia y expansión en mercados específicos.',
      icon: Globe,
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Métricas Financieras',
      subtitle: 'COMMITTED TO YOUR SUCCESS',
      description: 'Obtención de indicadores bursátiles y valores económicos para fortalecer la toma de decisiones e inversiones de alto nivel.',
      icon: TrendingUp,
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    },
    {
      title: 'Entrenamiento de IA',
      subtitle: 'COMMITTED TO YOUR SUCCESS',
      description: 'Procesamiento de sitios no estructurados para alimentar y escalar la inteligencia artificial de tu producto.',
      icon: Sparkles,
      tags: ['Result-Driven', 'Strategic Alignment', 'Business Value']
    }
  ];

  const nextCapability = () => {
    setCurrentCapability((prev) => (prev >= capabilities.length - 1 ? 0 : prev + 1));
  };

  const prevCapability = () => {
    setCurrentCapability((prev) => (prev <= 0 ? capabilities.length - 1 : prev - 1));
  };

  const faqs = [
    {
      question: '¿En qué consiste exactamente el servicio de Data Factory?',
      answer: 'Es el suministro regular de datos procesados basado en requerimientos específicos del cliente. No es una herramienta de autoservicio; es una solución de ingeniería donde nosotros ejecutamos la extracción y el envío de forma recurrente según tus definiciones.',
      icon: FileStack,
      iconColor: 'from-cyan-400 to-cyan-500'
    },
    {
      question: '¿Qué incluye la contratación del servicio?',
      answer: 'Recibes un flujo de datos estructurado y validado según tus requerimientos técnicos. El servicio cubre desde el diseño de la arquitectura de extracción hasta el mantenimiento de los scripts y la entrega final, eliminando cualquier carga operativa para tu equipo.',
      icon: CheckCircle2,
      iconColor: 'from-pink-400 to-pink-500'
    },
    {
      question: '¿Cuál es el tiempo estimado para iniciar la entrega?',
      answer: 'El cronograma se define tras un análisis de viabilidad técnica. Evaluamos la complejidad de la fuente para presentar una propuesta que garantice plazos de entrega realistas.',
      icon: CheckCircle2,
      iconColor: 'from-green-400 to-green-500'
    },
    {
      question: '¿Con qué frecuencia de pueden recibir los datos?',
      answer: 'La frecuencia es totalmente personalizada: diaria, semanal, mensual o bajo intervalos técnicos específicos. El objetivo es asegurar que tu base de datos cuente con información actualizada para procesos que dependen de registros en tiempo real.',
      icon: Clock,
      iconColor: 'from-orange-400 to-orange-500'
    },
    {
      question: '¿En qué formatos se realiza la entrega?',
      answer: 'Entregamos formatos compatibles con tu infraestructura actual (JSON, CSV, bases de datos o integración vía API). El dato llega listo para su uso, eliminando la necesidad de procesamiento adicional por parte de tu equipo de análisis.',
      icon: Database,
      iconColor: 'from-cyan-400 to-cyan-500'
    },
    {
      question: '¿Dónde es indispensable este servicio?',
      answer: 'Para cualquier flujo operativo que no permita latencia: seguimiento de precios dinámicos, monitoreo de stock de competidores, reportes de mercado en tiempo real y alimentación de modelos de inversión o algoritmos de decisión que requieran una base de información constante y precisa.',
      icon: Target,
      iconColor: 'from-purple-400 to-purple-500'
    },
    {
      question: '¿Qué sectores se benefician con Data Factory?',
      answer: 'Aquellos donde su operación dependa de información de alta volatilidad y precisión técnica. Es una arquitectura diseñada para convertir el volumen de datos en una ventaja estratégica inmediata, eliminando la latencia en la toma de decisiones.',
      icon: BarChart3,
      iconColor: 'from-blue-400 to-blue-500'
    },
    {
      question: '¿Qué ocurre si un sitio web cambia su estructura?',
      answer: 'Nuestros sistemas de monitoreo detectan alteraciones en el código fuente de origen. Ante un cambio, el equipo técnico interviene de inmediato para ajustar la lógica de extracción, asegurando que el flujo de información se mantenga ininterrumpido y con la calidad pactada.',
      icon: RefreshCw,
      iconColor: 'from-cyan-400 to-cyan-500'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSolutionsSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [solutionsSlide]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1247] via-[#2d1b69] to-[#1a1247]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute top-40 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        <div className="absolute top-60 right-32 w-2 h-2 bg-pink-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-40 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-80 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-white text-sm font-medium tracking-wide uppercase">
                Extracción de datos a escala industrial
              </span>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Data </span>
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#7B92FF] to-[#9D7EFF] bg-clip-text text-transparent">
              Factory
            </span>
            <span className="text-[#60A5FA]">.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            Automatizamos la extracción para que recibas datos estructurados y<br />
            listos para integrar, eliminando cualquier fricción técnica de tu camino.<br />
            Tú marcas el objetivo, nosotros ejecutamos la captura.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 flex items-center gap-3">
              <MessageSquare className="w-5 h-5" />
              <span>Hablar con un experto</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Conocer el proceso
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex items-center justify-center gap-4 mb-20">
            <div className="bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 backdrop-blur-sm border border-[#10b981]/30 rounded-2xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Disponibilidad</p>
                <p className="text-gray-300 text-sm">Inmediata</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3b82f6]/20 to-[#2563eb]/20 backdrop-blur-sm border border-[#3b82f6]/30 rounded-2xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Compromiso</p>
                <p className="text-gray-300 text-sm">Ético y legal</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#ec4899]/20 to-[#db2777]/20 backdrop-blur-sm border border-[#ec4899]/30 rounded-2xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Máximo rigor</p>
                <p className="text-gray-300 text-sm">En cada entrega</p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-left hover:border-purple-500/30 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">
                Actualizado a tu medida
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Recibe tus datos en la frecuencia que tú necesites, desde cada hora hasta una vez al día, para que siempre trabajes con lo más reciente sin esperas.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-left hover:border-purple-500/30 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">
                Estructura lista para usar
              </h3>
              <p className="text-gray-400 leading-relaxed">
                JSON, CSV, XML o directo a tu base. Te entregamos la información limpia para que puedas usarla al instante.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-left hover:border-purple-500/30 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">
                Flujo estable y continuo
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Nos encargamos de que la estrategia de extracción supere cualquier bloqueo técnico, manteniendo una operativa siempre activa y confiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados recurrentes, Gestion cero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Decorative background shapes and shadows */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 text-xs font-bold uppercase tracking-wide">
                Automated Excellence
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-bold text-center mb-6">
            <span className="text-gray-900">Resultados recurrentes,</span>
            <br />
            <span className="bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent">
              Gestion cero
            </span>
          </h2>

          {/* Description */}
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16">
            Datafactory es nuestra solución más completa, diseñada para<br />
            quienes necesitan un flujo de información periódica, sin lidiar con la<br />
            infraestructura o el mantenimiento.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Card - What is Data Factory */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What is Data Factory?</h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're building job boards, tracking financial markets, monitoring e-commerce trends, or analyzing real estate data, our Data Factory ensures you always have the freshest, most accurate data at your fingertips. We transform complex web extraction into a simple, reliable service that runs on autopilot.
              </p>

              {/* Feature List */}
              <div className="space-y-4 mb-8">
                <div className="bg-purple-50 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Fully Automated</h4>
                    <p className="text-sm text-gray-600">Set it and forget it - data flows automatically on your schedule.</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Custom Structured</h4>
                    <p className="text-sm text-gray-600">Data formatted exactly how you need it, ready to use.</p>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Your Schedule</h4>
                    <p className="text-sm text-gray-600">Hourly, daily, weekly, or custom frequency to match your needs.</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  Job Boards
                </span>
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  Finance
                </span>
                <span className="bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  E-commerce
                </span>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  Real Estate
                </span>
              </div>
            </div>

            {/* Right Side - Two Cards */}
            <div className="space-y-8">
              {/* Tu defines la necesidad */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Tu defines la necesidad</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-start gap-2 mb-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-gray-900">Periodic Reports</h4>
                        <p className="text-sm text-gray-600">Nos indicas qué información buscas, el formato de entrega que necesitas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nosotros resolvemos la ejecución */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Nosotros resolvemos la ejecución</h3>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  Superamos bloqueos y gestionamos la infraestructura de forma constante.
                </p>

                {/* Frequency Options */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-2xl p-6 text-center border-2 border-blue-200">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Bolt className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="font-bold text-gray-900">Hourly</p>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6 text-center border-2 border-blue-200">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Sun className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="font-bold text-gray-900">Daily</p>
                  </div>
                </div>
              </div>

              {/* Tu defines la necesidad (duplicate) */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Tu defines la necesidad</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-start gap-2 mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-gray-900">Periodic Reports</h4>
                        <p className="text-sm text-gray-600">Nos indicas qué información buscas, el formato de entrega que necesitas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Carousel Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Decorative Blurred Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-300/40 rounded-full blur-3xl"></div>
          <div className="absolute top-40 left-1/4 w-64 h-64 bg-blue-300/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
              <Heart className="w-4 h-4 fill-pink-600" />
              KEY BENEFITS
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Soluciones adaptadas
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              a tu necesidad de negocio
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
            Our approach delivers tangible advantages that accelerate your data initiatives and maximize ROI
          </p>

          {/* Carousel Container */}
          <div className="relative max-w-2xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevSolutionsSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition z-10"
              aria-label="Previous solution"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextSolutionsSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition z-10"
              aria-label="Next solution"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Card */}
            <div className="bg-gradient-to-br from-purple-50/80 to-white rounded-3xl shadow-xl p-10 border border-purple-100/50 backdrop-blur-sm transition-all duration-500">
              {/* Icon */}
              <div className="flex justify-start mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${solutions[solutionsSlide].iconColor} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500`}>
                  {(() => {
                    const IconComponent = solutions[solutionsSlide].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>
              </div>

              {/* Title & Badge */}
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-gray-900 mb-2 transition-all duration-300">
                  {solutions[solutionsSlide].title}
                </h3>
                <div className="inline-block">
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                    COMMITTED TO YOUR SUCCESS
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 transition-all duration-300">
                {solutions[solutionsSlide].description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {solutions[solutionsSlide].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-medium border border-purple-200 transition-all duration-200 hover:bg-purple-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSolutionsSlide(index)}
                  className={`transition-all ${
                    index === solutionsSlide
                      ? 'w-8 h-2 bg-pink-500'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  } rounded-full`}
                  aria-label={`Go to solution ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Pilares del Web Scraping */}
          <div className="mt-40">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                <Zap className="w-3 h-3" />
                METODOLOGÍA SENIOR
              </div>
            </div>

            {/* Title */}
            <h3 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pilares del <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Web Scraping</span>
            </h3>

            {/* Description */}
            <p className="text-center text-gray-600 text-base mb-12 max-w-2xl mx-auto">
              Aplicamos procesos de ética y rigor en cada etapa para garantizar que el acceso a la información sea siempre constante y seguro.
            </p>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Agilidad técnica */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Agilidad técnica</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Automatizamos procesos complejos para reducir tiempos de entrega y permitir que tu ejecución avance sin esperas.
                </p>
              </div>

              {/* Rigor senior */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <FileStack className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Rigor senior</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cada solución cuenta con el respaldo y la mentoría de expertos que garantiza la precisión del dato.
                </p>
              </div>

              {/* Compromiso ético */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Smile className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Compromiso ético</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Operamos con total transparencia y bajo los marcos legales vigentes, asegurando la integridad en cada extracción.
                </p>
              </div>

              {/* Escalabilidad real */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Escalabilidad real</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Diseñamos arquitecturas pensadas para crecer junto a tu volumen de información sin perder estabilidad.
                </p>
              </div>

              {/* Cercanía colaborativa */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Cercanía colaborativa</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Priorizamos el acompañamiento constante para ofrecerte respuestas claras y soluciones al momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia verificada Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#0E155B] to-[#1E2DC1] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/90 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-xs font-bold uppercase tracking-wide">
                RESPALDO EN CIFRAS
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-6">
            Experiencia verificada en cada entrega
          </h2>

          {/* Description */}
          <p className="text-center text-blue-100 text-base md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
            Miles de horas de ejecución y millones de registros procesados validan nuestra capacidad para gestionar proyectos de alta complejidad técnica.
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {/* Fuentes extraídas */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                  <Globe className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+5000</div>
              <div className="text-sm text-blue-100 font-medium">Fuentes extraídas</div>
            </div>

            {/* registros entregados */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                  <Database className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+2 billones</div>
              <div className="text-sm text-blue-100 font-medium">registros entregados</div>
            </div>

            {/* Proyectos finalizados */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                  <Layers className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+350</div>
              <div className="text-sm text-blue-100 font-medium">Proyectos finalizados</div>
            </div>

            {/* Jobs done */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+149</div>
              <div className="text-sm text-blue-100 font-medium">Jobs done</div>
            </div>

            {/* Horas de ejecución */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                  <Clock className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+65 000</div>
              <div className="text-sm text-blue-100 font-medium">Horas de ejecución</div>
            </div>

            {/* de efectividad */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99,9%</div>
              <div className="text-sm text-blue-100 font-medium">de efectividad</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Necesitas un flujo de Extraccion */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-[#1a1247] via-[#2d1b69] to-[#1a1247] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Puzzle className="w-4 h-4 text-white" />
              <span className="text-white text-xs font-bold uppercase tracking-wide">
                EXPERT TALENT
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">¿Necesitas un flujo de</span>
            <br />
            <span className="bg-gradient-to-r from-[#7B92FF] via-[#9D7EFF] to-[#B97EFF] bg-clip-text text-transparent">
              Extracción a medida?
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Desarrollamos arquitecturas de entrega personalizadas que se integran con tu entorno de trabajo.
          </p>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-[#7B92FF] to-[#9D7EFF] hover:from-[#6B82EF] hover:to-[#8D6EEF] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 inline-flex items-center gap-3 text-lg">
            <span>Validar viabilidad técnica</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Capacidades técnicas Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
        {/* Background decorative circles */}
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
              <span className="text-gray-900">Capacidades técnicas</span>
              <br />
              <span className="text-purple-600">aplicadas a tus objetivos</span>
            </h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mt-6"></div>
          </div>

          {/* Carousel Card */}
          <div className="mb-12">
            <div className="relative max-w-3xl mx-auto">
              {/* Navigation Buttons */}
              <button
                onClick={prevCapability}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all z-10 border border-gray-200"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <button
                onClick={nextCapability}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all z-10 border border-gray-200"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      {(() => {
                        const IconComponent = capabilities[currentCapability].icon;
                        return <IconComponent className="w-7 h-7 text-white" />;
                      })()}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-purple-600 text-xs font-bold uppercase tracking-wide">
                        {capabilities[currentCapability].subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {capabilities[currentCapability].title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-4">
                      {capabilities[currentCapability].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {capabilities[currentCapability].tags.map((tag, idx) => (
                        <span key={idx} className="text-purple-600 text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {capabilities.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCapability(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentCapability ? 'bg-purple-600 w-8' : 'bg-purple-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-10 text-center border border-gray-100">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 rounded-full px-4 py-2">
                  <Sparkles className="w-4 h-4 text-pink-600" />
                  <span className="text-pink-600 text-xs font-bold uppercase tracking-wide">
                    POR QUÉ NOSOTROS
                  </span>
                </div>
              </div>

              {/* Heading */}
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ingeniería validada por líderes
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
                Nuestra capacidad técnica nos ha permitido consolidarnos como Solution Partner oficial de Bright Data, al fortalecer su ecosistema global de datos.
              </p>

              {/* CTA Button */}
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg inline-flex items-center gap-3">
                <span>Ver perfil de Partner</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-purple-200 rounded-full"></div>
          <div className="absolute bottom-40 right-32 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-20 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-2">
              <MessageSquare className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 text-xs font-bold uppercase tracking-wide">
                RESOLVEMOS TUS DUDAS
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="text-gray-900">Preguntas frecuentes sobre</span>
              <br />
              <span className="text-purple-600">Data Factory</span>
            </h2>
            <p className="text-gray-600 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              Todo lo que necesitas saber sobre nuestra arquitectura de extracción, plazos de entrega y cómo cuidamos la legalidad de tus procesos.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-all hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center gap-4 p-6 text-left transition-all"
                >
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${faq.iconColor} rounded-xl flex items-center justify-center`}>
                    {(() => {
                      const IconComponent = faq.icon;
                      return <IconComponent className="w-6 h-6 text-white" />;
                    })()}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      {faq.question}
                    </h3>
                    {openFaqIndex !== index && (
                      <p className="text-sm text-purple-600 mt-1">Click to learn more</p>
                    )}
                  </div>

                  <div className="flex-shrink-0">
                    <ChevronDown
                      className={`w-6 h-6 transition-transform ${
                        openFaqIndex === index ? 'rotate-180 text-purple-600' : 'text-gray-400'
                      }`}
                    />
                  </div>
                </button>

                {openFaqIndex === index && (
                  <div className="px-6 pb-6 pt-2 animate-in slide-in-from-top">
                    <p className="text-gray-600 leading-relaxed pl-16">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 overflow-hidden bg-white">
        {/* Background decorative circles */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-64 h-64 bg-purple-500/25 rounded-full blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Contact Info */}
            <div>
              <span className="inline-flex items-center gap-2 text-purple-600 text-xs font-bold mb-6">
                <MessageSquare className="w-4 h-4" />
                Let&apos;s Talk
              </span>

              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                ¿Hablamos de como hacer <span className="bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] bg-clip-text text-transparent">Crecer tu negocio?</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Nos aseguramos de que lo que sucede en la web se convierta en tu mejor activo. Sin rodeos: nos involucramos en tu proyecto para que cada paso que des sea firme y transparente.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <p className="text-gray-600">hello@autoscraping.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <p className="text-gray-600">+1 831-400-4766</p>
                  </div>
                </div>
              </div>

              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#C084FC]/40 via-[#60A5FA]/40 to-[#F472B6]/40 rounded-xl blur-xl"></div>
                <button className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#7B5FE8] to-[#9D62FA] hover:from-[#6B4FD8] hover:to-[#8D52EA] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Calendar className="w-5 h-5" />
                  Book a Meeting
                  <ArrowRight className="w-4 h-4" />
                </button>
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
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <p>Trusted by 10,000+ companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
