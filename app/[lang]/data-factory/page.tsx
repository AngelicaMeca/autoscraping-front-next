'use client';

import { Shield, Clock, Lock, Sparkles, Building2, ArrowRight, MessageSquare, ChevronDown, RefreshCw, Database, Layers, Zap, ChartBar as BarChart3, Target, CreditCard, Sun, Bolt, ShoppingCart, Chrome as HomeIcon, Plane, Heart, ShoppingBag, Ticket, UserCheck, ChevronLeft, ChevronRight, Smile, FileStack, TrendingUp, BookOpen, Globe, CircleCheck as CheckCircle2, Puzzle, Calendar, Users, Search, Settings, Server, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactCTA from '@/components/ContactCTA';
import { useLang } from '@/hooks/useLang';

export default function DataFactoryPage() {
  const lang = useLang();
  const isEn = lang === 'en';
  const [solutionsSlide, setSolutionsSlide] = useState(0);
  const [currentCapability, setCurrentCapability] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const solutions = [
    {
      title: 'E-commerce',
      description: isEn
        ? 'Digital retailers competing on price, stock and global positioning.'
        : 'Retailers digitales que compiten por precio, stock y posicionamiento global.',
      icon: ShoppingCart,
      iconColor: 'from-purple-500 to-purple-600',
      tags: isEn
        ? ['Results-oriented', 'Strategic alignment', 'Business value']
        : ['Orientado a resultados', 'Alineación estratégica', 'Valor de negocio']
    },
    {
      title: 'Real Estate',
      description: isEn
        ? 'Platforms and investors whose profitability depends on the dynamism of the real estate market.'
        : 'Plataformas e inversores que basan su rentabilidad en el dinamismo del mercado inmobiliario.',
      icon: HomeIcon,
      iconColor: 'from-blue-500 to-blue-600',
      tags: isEn
        ? ['Market valuation', 'Real-time data', 'Real estate intelligence']
        : ['Valoración de mercado', 'Datos en tiempo real', 'Inteligencia inmobiliaria']
    },
    {
      title: isEn ? 'Tourism & Travel' : 'Turismo y viajes',
      description: isEn
        ? 'Agencies and booking engines operating with high-volatility inventories and rates.'
        : 'Agencias y motores de reserva que operan con inventarios y tarifas de alta volatilidad.',
      icon: Plane,
      iconColor: 'from-cyan-500 to-cyan-600',
      tags: isEn
        ? ['Dynamic pricing', 'High volatility', 'Booking optimization']
        : ['Tarifas dinámicas', 'Alta volatilidad', 'Optimización de reservas']
    },
    {
      title: isEn ? 'Health & Pharma' : 'Salud y Pharma',
      description: isEn
        ? 'Healthcare organisations managing supplies, services and industry trends.'
        : 'Organizaciones sanitarias que gestionan suministros, servicios y tendencias del sector.',
      icon: Heart,
      iconColor: 'from-pink-500 to-pink-600',
      tags: isEn
        ? ['Data traceability', 'Regulatory compliance', 'Supply management']
        : ['Trazabilidad de datos', 'Cumplimiento normativo', 'Gestión de suministros']
    },
    {
      title: isEn ? 'Consumer & Retail' : 'Consumo y Retail',
      description: isEn
        ? 'Brands and distributors that need channel traceability and demand intelligence.'
        : 'Marcas y distribuidores que necesitan trazabilidad de sus canales y conocimiento de la demanda.',
      icon: ShoppingBag,
      iconColor: 'from-orange-500 to-orange-600',
      tags: isEn
        ? ['Channel traceability', 'Real-time demand', 'Market intelligence']
        : ['Trazabilidad de canales', 'Demanda en tiempo real', 'Inteligencia de mercado']
    },
    {
      title: isEn ? 'Cybersecurity' : 'Ciberseguridad',
      description: isEn
        ? 'Digital defence teams monitoring threats and network vulnerabilities.'
        : 'Equipos de defensa digital que monitorean amenazas y vulnerabilidad en la red.',
      icon: Lock,
      iconColor: 'from-red-500 to-red-600',
      tags: isEn
        ? ['Threat monitoring', 'Proactive defence', 'Risk intelligence']
        : ['Monitoreo de amenazas', 'Defensa proactiva', 'Inteligencia de riesgos']
    },
    {
      title: 'Fintech',
      description: isEn
        ? 'Financial institutions requiring alternative data and precise market flows.'
        : 'Instituciones financieras que requieren datos alternativos y flujos de mercado precisos.',
      icon: CreditCard,
      iconColor: 'from-green-500 to-green-600',
      tags: isEn
        ? ['Alternative data', 'Market flows', 'Financial analysis']
        : ['Datos alternativos', 'Flujos de mercado', 'Análisis financiero']
    },
    {
      title: isEn ? 'Events & Ticketing' : 'Eventos y Ticketing',
      description: isEn
        ? 'Event platforms facing high demand that need real inventory control.'
        : 'Plataformas de eventos que enfrentan alta demanda y necesitan control de inventario real.',
      icon: Ticket,
      iconColor: 'from-yellow-500 to-yellow-600',
      tags: isEn
        ? ['Inventory control', 'Demand management', 'Price optimisation']
        : ['Control de inventario', 'Gestión de demanda', 'Optimización de precios']
    },
    {
      title: isEn ? 'HR & Talent' : 'Recursos Humanos y Talento',
      description: isEn
        ? 'Talent consultancies and portals analysing mass labour supply and demand.'
        : 'Consultoras de talento y portales que analizan la oferta y demanda laboral masiva.',
      icon: UserCheck,
      iconColor: 'from-indigo-500 to-indigo-600',
      tags: isEn
        ? ['Mass job supply', 'Talent analysis', 'Market intelligence']
        : ['Oferta laboral masiva', 'Análisis de talento', 'Inteligencia de mercado']
    },
    {
      title: isEn ? 'Government & Public Sector' : 'Gobierno y Sector Público',
      description: isEn
        ? 'Analytical entities requiring transparency in records, tenders and official data.'
        : 'Entidades analistas que requieren transparencia en registros, licitaciones y datos oficiales.',
      icon: Building2,
      iconColor: 'from-slate-500 to-slate-600',
      tags: isEn
        ? ['Data transparency', 'Official records', 'Open data']
        : ['Transparencia de datos', 'Registros oficiales', 'Datos abiertos']
    },
    {
      title: isEn ? 'Consulting & Analytics' : 'Consultoría y Analytics',
      description: isEn
        ? 'Analysis firms that need high-fidelity raw material to feed their clients\' decisions.'
        : 'Firmas de análisis que necesitan materia prima de alta fidelidad para alimentar las decisiones de sus clientes.',
      icon: BarChart3,
      iconColor: 'from-violet-500 to-violet-600',
      tags: isEn
        ? ['High fidelity', 'Data-driven decisions', 'Advanced analytics']
        : ['Alta fidelidad', 'Decisiones basadas en datos', 'Análisis avanzado']
    }
  ];

  const nextSolutionsSlide = () => {
    setSolutionsSlide((prev) => (prev >= solutions.length - 1 ? 0 : prev + 1));
  };

  const prevSolutionsSlide = () => {
    setSolutionsSlide((prev) => (prev <= 0 ? solutions.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSolutionsSlide((prev) => (prev >= solutions.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [solutions.length]);

  const capabilities = [
    {
      slug: 'estrategias-de-pricing',
      title: isEn ? 'Pricing Strategies' : 'Estrategias de Pricing',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Price and promotion monitoring to execute competitive adjustments that protect your profit margins.'
        : 'Protege tus márgenes de beneficio con una visión total del mercado. Ejecuta ajustes competitivos basados en el monitoreo de precios y promociones.',
      icon: Target,
      tags: isEn
        ? ['Results-oriented', 'Strategic alignment', 'Business value']
        : ['Orientado a resultados', 'Alineación estratégica', 'Valor de negocio']
    },
    {
      slug: 'indexacion-inmobiliaria',
      title: isEn ? 'Real Estate Indexing' : 'Indexación Inmobiliaria',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Mass capture of property listings and variations for valuation and opportunity detection.'
        : 'Capitaliza cada oportunidad mediante la detección temprana de ofertas. Accede a valoraciones precisas con la captura masiva de listados y variaciones.',
      icon: Building2,
      tags: isEn
        ? ['Mass capture', 'Asset valuation', 'Opportunity detection']
        : ['Captura masiva', 'Valoración de activos', 'Detección de oportunidades']
    },
    {
      slug: 'monitoreo-de-airbnb',
      title: isEn ? 'Airbnb Monitoring' : 'Monitoreo de Airbnb',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Availability and rate tracking in the accommodation sector to maximise profitability through dynamic pricing.'
        : 'Maximiza tu rentabilidad mediante estrategias de precios dinámicos. Domina el sector alojamiento con un seguimiento constante de disponibilidad y tarifas.',
      icon: HomeIcon,
      tags: isEn
        ? ['Dynamic pricing', 'Real-time availability', 'Maximised profitability']
        : ['Precios dinámicos', 'Disponibilidad en tiempo real', 'Rentabilidad maximizada']
    },
    {
      slug: 'extraccion-de-linkedin',
      title: isEn ? 'LinkedIn Extraction' : 'Extracción de Linkedin',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Selection of professional profiles and company data to fuel B2B acquisition strategies with precision.'
        : 'Nutre tus estrategias de captación B2B con datos de alta precisión. Accede a perfiles profesionales y empresas para acelerar tu prospección comercial',
      icon: Users,
      tags: isEn
        ? ['B2B acquisition', 'Profile data', 'Targeting precision']
        : ['Captación B2B', 'Datos de perfiles', 'Precisión de targeting']
    },
    {
      slug: 'generacion-de-leads',
      title: isEn ? 'Lead Generation' : 'Generación de Leads',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Identification of qualified prospects to accelerate the sales cycle through always up-to-date contact databases.'
        : 'Identificación de prospectos calificados para acelerar el ciclo de ventas mediante bases de contacto siempre actualizadas.',
      icon: UserCheck,
      tags: isEn
        ? ['Qualified prospects', 'Sales acceleration', 'Updated databases']
        : ['Prospectos calificados', 'Aceleración de ventas', 'Bases actualizadas']
    },
    {
      slug: 'catalogos-de-e-commerce',
      title: isEn ? 'E-commerce Catalogues' : 'Catálogos de E-commerce',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Competitor inventory and stock tracking to adjust your commercial offer in real time and without friction.'
        : 'Rastreo de inventarios y stock de la competencia para ajustar tu oferta comercial en tiempo real y sin fricciones.',
      icon: ShoppingCart,
      tags: isEn
        ? ['Inventory tracking', 'Real-time competition', 'Commercial adjustment']
        : ['Rastreo de inventario', 'Competencia en tiempo real', 'Ajuste comercial']
    },
    {
      slug: 'registro-de-google-maps',
      title: isEn ? 'Google Maps Registry' : 'Registro de Google Maps',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Consolidation of local and geographic data for competitive analysis and expansion in specific markets.'
        : 'Consolidación de datos locales y geográficos para el análisis de competencia y expansión en mercados específicos.',
      icon: Globe,
      tags: isEn
        ? ['Geographic data', 'Local analysis', 'Market expansion']
        : ['Datos geográficos', 'Análisis local', 'Expansión de mercado']
    },
    {
      slug: 'metricas-financieras',
      title: isEn ? 'Financial Metrics' : 'Métricas Financieras',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Obtaining stock market indicators and economic values to strengthen high-level investment decisions.'
        : 'Obtención de indicadores bursátiles y valores económicos para fortalecer la toma de decisiones e inversiones de alto nivel.',
      icon: TrendingUp,
      tags: isEn
        ? ['Stock market indicators', 'Investment decisions', 'Economic data']
        : ['Indicadores bursátiles', 'Decisiones de inversión', 'Datos económicos']
    },
    {
      slug: 'entrenamiento-de-ia',
      title: isEn ? 'AI Training' : 'Entrenamiento de IA',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Processing of unstructured sites to feed and scale the artificial intelligence of your product.'
        : 'Procesamiento de sitios no estructurados para alimentar y escalar la inteligencia artificial de tu producto.',
      icon: Sparkles,
      tags: isEn
        ? ['Unstructured data', 'Model scalability', 'LLM feeding']
        : ['Datos no estructurados', 'Escalabilidad de modelos', 'Alimentación de LLMs']
    },
    {
      slug: 'insights-de-marketing',
      title: isEn ? 'Marketing Insights' : 'Insights de Marketing',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Detection of trends and brand mentions to measure the impact of campaigns and sector positioning.'
        : 'Detección de tendencias y menciones de marca para medir el impacto de campañas y el posicionamiento en el sector.',
      icon: Users,
      tags: isEn
        ? ['Brand trends', 'Campaign impact', 'Sentiment analysis']
        : ['Tendencias de marca', 'Impacto de campañas', 'Análisis de sentimiento']
    },
    {
      slug: 'auditoria-seo',
      title: isEn ? 'SEO Audit' : 'Auditoría SEO',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Automated search result tracking to monitor and improve the organic ranking of your platform.'
        : 'Seguimiento automatizado de resultados de búsqueda para monitorear y mejorar el ranking orgánico de tu plataforma.',
      icon: Search,
      tags: isEn
        ? ['Organic ranking', 'Automated monitoring', 'SERP positioning']
        : ['Ranking orgánico', 'Monitoreo automatizado', 'Posicionamiento SERP']
    },
    {
      slug: 'comparativa-de-vuelos',
      title: isEn ? 'Flight Comparison' : 'Comparativa de vuelos',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Real-time extraction of airline fares and routes to optimise the competitiveness of agencies and booking engines.'
        : 'Extracción de tarifas aéreas y rutas en tiempo real para optimizar la competitividad de agencias y motores de reserva.',
      icon: Plane,
      tags: isEn
        ? ['Airline fares', 'Real-time routes', 'Booking competitiveness']
        : ['Tarifas aéreas', 'Rutas en tiempo real', 'Competitividad de reservas']
    },
    {
      slug: 'gestion-de-reputacion',
      title: isEn ? 'Reputation Management' : 'Gestión de reputación',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Collection of reviews and ratings on key platforms for sentiment analysis and brand image care.'
        : 'Recolección de reseñas y valoraciones en plataformas clave para análisis de sentimiento y cuidado de la imagen de la marca.',
      icon: Heart,
      tags: isEn
        ? ['Sentiment analysis', 'Reviews and ratings', 'Brand image']
        : ['Análisis de sentimiento', 'Reseñas y valoraciones', 'Imagen de marca']
    },
    {
      slug: 'tendencias-laborales',
      title: isEn ? 'Labour Trends' : 'Tendencias laborales',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Tracking of job offers and salary scales to feed recruitment platforms and human capital analysis.'
        : 'Rastreo de ofertas de empleo y escalas salariales para alimentar plataformas de reclutamiento y análisis de capital humano.',
      icon: FileStack,
      tags: isEn
        ? ['Job offers', 'Salary scales', 'Talent intelligence']
        : ['Ofertas de empleo', 'Escalas salariales', 'Inteligencia de talento']
    },
    {
      slug: 'web-scraping-automation',
      title: isEn ? 'Web Scraping Automation' : 'Web Scraping Automatizado',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Automated data pipelines that collect, structure, and deliver what you need every day—without manual intervention.'
        : 'Flujos de datos automatizados que recolectan, estructuran y entregan lo que necesitas cada día, sin intervención manual.',
      icon: RefreshCw,
      tags: isEn
        ? ['Daily automation', 'Structured delivery', 'Zero manual effort']
        : ['Automatización diaria', 'Entrega estructurada', 'Sin esfuerzo manual']
    },
    {
      slug: 'ai-web-scraping',
      title: isEn ? 'AI Web Scraping' : 'Web Scraping con IA',
      subtitle: isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO',
      description: isEn
        ? 'Intelligent extraction that adapts to site changes and keeps your data flowing even when layouts shift.'
        : 'Extracción inteligente que se adapta a los cambios de los sitios y mantiene tus datos fluyendo aunque los diseños cambien.',
      icon: Zap,
      tags: isEn
        ? ['Adaptive extraction', 'Layout resilience', 'Continuous data flow']
        : ['Extracción adaptativa', 'Resiliencia de diseño', 'Flujo continuo de datos']
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
      question: isEn
        ? 'What exactly does the Data Factory service consist of?'
        : '¿En qué consiste exactamente el servicio de Data Factory?',
      answer: isEn
        ? 'It is the regular supply of processed data based on specific client requirements. It is not a self-service tool; it is an engineering solution where we execute the extraction and delivery on a recurring basis according to your definitions.'
        : 'Es el suministro regular de datos procesados basado en requerimientos específicos del cliente. No es una herramienta de autoservicio; es una solución de ingeniería donde nosotros ejecutamos la extracción y el envío de forma recurrente según tus definiciones.',
      icon: FileStack,
      iconColor: 'from-cyan-400 to-cyan-500'
    },
    {
      question: isEn
        ? 'What does the service contract include?'
        : '¿Qué incluye la contratación del servicio?',
      answer: isEn
        ? 'You receive a structured and validated data flow according to your technical requirements. The service covers everything from designing the extraction architecture to maintaining the scripts and the final delivery, eliminating any operational burden for your team.'
        : 'Recibes un flujo de datos estructurado y validado según tus requerimientos técnicos. El servicio cubre desde el diseño de la arquitectura de extracción hasta el mantenimiento de los scripts y la entrega final, eliminando cualquier carga operativa para tu equipo.',
      icon: CheckCircle2,
      iconColor: 'from-pink-400 to-pink-500'
    },
    {
      question: isEn
        ? 'What is the estimated time to start delivery?'
        : '¿Cuál es el tiempo estimado para iniciar la entrega?',
      answer: isEn
        ? 'The timeline is defined after a technical feasibility analysis. We evaluate the complexity of the source to present a proposal that guarantees realistic delivery deadlines.'
        : 'El cronograma se define tras un análisis de viabilidad técnica. Evaluamos la complejidad de la fuente para presentar una propuesta que garantice plazos de entrega realistas.',
      icon: CheckCircle2,
      iconColor: 'from-green-400 to-green-500'
    },
    {
      question: isEn
        ? 'How often can data be received?'
        : '¿Con qué frecuencia de pueden recibir los datos?',
      answer: isEn
        ? 'The frequency is fully customised: daily, weekly, monthly or at specific technical intervals. The goal is to ensure your database has up-to-date information for processes that depend on real-time records.'
        : 'La frecuencia es totalmente personalizada: diaria, semanal, mensual o bajo intervalos técnicos específicos. El objetivo es asegurar que tu base de datos cuente con información actualizada para procesos que dependen de registros en tiempo real.',
      icon: Clock,
      iconColor: 'from-orange-400 to-orange-500'
    },
    {
      question: isEn
        ? 'In what formats is delivery made?'
        : '¿En qué formatos se realiza la entrega?',
      answer: isEn
        ? 'We deliver formats compatible with your current infrastructure (JSON, CSV, databases or API integration). The data arrives ready to use, eliminating the need for additional processing by your analysis team.'
        : 'Entregamos formatos compatibles con tu infraestructura actual (JSON, CSV, bases de datos o integración vía API). El dato llega listo para su uso, eliminando la necesidad de procesamiento adicional por parte de tu equipo de análisis.',
      icon: Database,
      iconColor: 'from-cyan-400 to-cyan-500'
    },
    {
      question: isEn
        ? 'Where is this service indispensable?'
        : '¿Dónde es indispensable este servicio?',
      answer: isEn
        ? 'For any operational flow that does not allow latency: dynamic price tracking, competitor stock monitoring, real-time market reports and feeding investment models or decision algorithms that require a constant and precise information base.'
        : 'Para cualquier flujo operativo que no permita latencia: seguimiento de precios dinámicos, monitoreo de stock de competidores, reportes de mercado en tiempo real y alimentación de modelos de inversión o algoritmos de decisión que requieran una base de información constante y precisa.',
      icon: Target,
      iconColor: 'from-purple-400 to-purple-500'
    },
    {
      question: isEn
        ? 'Which sectors benefit from Data Factory?'
        : '¿Qué sectores se benefician con Data Factory?',
      answer: isEn
        ? 'Those whose operations depend on high-volatility information and technical precision. It is an architecture designed to convert data volume into an immediate strategic advantage, eliminating latency in decision-making.'
        : 'Aquellos donde su operación dependa de información de alta volatilidad y precisión técnica. Es una arquitectura diseñada para convertir el volumen de datos en una ventaja estratégica inmediata, eliminando la latencia en la toma de decisiones.',
      icon: BarChart3,
      iconColor: 'from-blue-400 to-blue-500'
    },
    {
      question: isEn
        ? 'What happens if a website changes its structure?'
        : '¿Qué ocurre si un sitio web cambia su estructura?',
      answer: isEn
        ? 'Our monitoring systems detect alterations in the source code of origin. When a change occurs, the technical team intervenes immediately to adjust the extraction logic, ensuring that the information flow remains uninterrupted and at the agreed quality.'
        : 'Nuestros sistemas de monitoreo detectan alteraciones en el código fuente de origen. Ante un cambio, el equipo técnico interviene de inmediato para ajustar la lógica de extracción, asegurando que el flujo de información se mantenga ininterrumpido y con la calidad pactada.',
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
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute top-40 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        <div className="absolute top-60 right-32 w-2 h-2 bg-pink-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-40 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-80 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-white text-sm font-medium tracking-wide uppercase">
                {isEn ? 'Industrial-scale data extraction' : 'Extracción de datos a escala industrial'}
              </span>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-3xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Data </span>
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#7B92FF] to-[#9D7EFF] bg-clip-text text-transparent">
              Factory
            </span>
            <span className="text-[#60A5FA]">.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            {isEn ? (
              <>
                We automate extraction so you receive structured data<br />
                ready to integrate, eliminating any technical friction from your path.<br />
                You set the goal, we execute the capture.
              </>
            ) : (
              <>
                Automatizamos la extracción para que recibas datos estructurados y<br />
                listos para integrar, eliminando cualquier fricción técnica de tu camino.<br />
                Tú marcas el objetivo, nosotros ejecutamos la captura.
              </>
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 px-4 md:px-0">
            <Link href={`/${lang}/book-a-meeting`} className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 flex items-center gap-3">
              <MessageSquare className="w-5 h-5" />
              <span>{isEn ? 'Talk to an expert' : 'Hablar con un experto'}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={() => document.getElementById('proceso-df')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all"
            >
              {isEn ? 'Learn about the process' : 'Conocer el proceso'}
            </button>
          </div>

          {/* Feature Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 px-4 md:px-0"
          >
            <div className="bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 backdrop-blur-sm border border-[#10b981]/30 rounded-2xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">{isEn ? 'Availability' : 'Disponibilidad'}</p>
                <p className="text-gray-300 text-sm">{isEn ? 'Immediate' : 'Inmediata'}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3b82f6]/20 to-[#2563eb]/20 backdrop-blur-sm border border-[#3b82f6]/30 rounded-2xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">{isEn ? 'Commitment' : 'Compromiso'}</p>
                <p className="text-gray-300 text-sm">{isEn ? 'Ethical and legal' : 'Ético y legal'}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#ec4899]/20 to-[#db2777]/20 backdrop-blur-sm border border-[#ec4899]/30 rounded-2xl px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">{isEn ? 'Maximum rigour' : 'Máximo rigor'}</p>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-left hover:border-purple-500/30 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">
                {isEn ? 'Updated on your terms' : 'Actualizado a tu medida'}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {isEn
                  ? 'Receive your data at the frequency you need, from every hour to once a day, so you always work with the most recent information without waiting.'
                  : 'Recibe tus datos en la frecuencia que tú necesites, desde cada hora hasta una vez al día, para que siempre trabajes con lo más reciente sin esperas.'}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-left hover:border-purple-500/30 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">
                {isEn ? 'Structure ready to use' : 'Estructura lista para usar'}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {isEn
                  ? 'JSON, CSV, XML or straight to your database. We deliver the information clean so you can use it instantly.'
                  : 'JSON, CSV, XML o directo a tu base. Te entregamos la información limpia para que puedas usarla al instante.'}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-left hover:border-purple-500/30 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">
                {isEn ? 'Stable and continuous flow' : 'Flujo estable y continuo'}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {isEn
                  ? 'We ensure the extraction strategy overcomes any technical blockage, keeping operations always active and reliable.'
                  : 'Nos encargamos de que la estrategia de extracción supere cualquier bloqueo técnico, manteniendo una operativa siempre activa y confiable.'}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Resultados recurrentes, Gestion cero Section */}
      <section id="proceso-df" className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Decorative background shapes and shadows */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/10 rounded-full blur-3xl"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 text-xs font-bold uppercase tracking-wide">
                {isEn ? 'Automated excellence' : 'Excelencia automatizada'}
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-bold text-center mb-6">
            <span className="text-gray-900">{isEn ? 'Recurring results,' : 'Resultados recurrentes,'}</span>
            <br />
            <span className="bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent">
              {isEn ? 'zero management' : 'gestión cero'}
            </span>
          </h2>

          {/* Description */}
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16">
            {isEn ? (
              <>
                Data Factory is our most complete solution, designed for<br />
                those who need a periodic information flow, without dealing with<br />
                infrastructure or maintenance.
              </>
            ) : (
              <>
                Datafactory es nuestra solución más completa, diseñada para<br />
                quienes necesitan un flujo de información periódica, sin lidiar con la<br />
                infraestructura o el mantenimiento.
              </>
            )}
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Card - What is Data Factory */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{isEn ? 'What is Data Factory?' : '¿Qué es Data Factory?'}</h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                {isEn
                  ? 'It is the recurring extraction service from AUTOScraping. Designed for companies that need periodic information without managing the infrastructure that makes it possible.'
                  : 'Es el servicio de extracción recurrente de AUTOScraping. Diseñado para empresas que necesitan información periódica sin gestionar la infraestructura que la hace posible.'}
              </p>

              {/* Feature List */}
              <div className="space-y-4 mb-8">
                <div className="bg-purple-50 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{isEn ? 'You choose the format' : 'Eliges el formato'}</h4>
                    <p className="text-sm text-gray-600">{isEn ? 'You decide what data you need, how often and in what format.' : 'Tú decides qué datos necesitas, con qué frecuencia y en qué formato.'}</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{isEn ? 'Resilient architecture' : 'Arquitectura resiliente'}</h4>
                    <p className="text-sm text-gray-600">{isEn ? 'We build the architecture, overcome technical blockages and deliver clean, validated records.' : 'Construimos la arquitectura, superamos los bloqueos técnicos y entregamos registros limpios y validados.'}</p>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{isEn ? 'Continuous results' : 'Resultados continuos'}</h4>
                    <p className="text-sm text-gray-600">{isEn ? 'Uninterrupted deliveries ready to operate. Behind every milestone is a committed engineering team.' : 'Entregas ininterrumpidas listas para operar. Detrás de cada hito hay un equipo de ingeniería comprometido.'}</p>
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
              {/* Card 1: Tu defines la necesidad */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">{isEn ? 'You define the need' : 'Tú defines la necesidad'}</h3>
                </div>
                <div className="pl-16">
                  <p className="text-gray-600">{isEn ? 'You tell us what information you are looking for and the delivery format you need.' : 'Nos indicas qué información buscas y el formato de entrega que necesitas.'}</p>
                </div>
              </div>

              {/* Card 2: Nosotros resolvemos la ejecución */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">{isEn ? 'We handle the execution' : 'Nosotros resolvemos la ejecución'}</h3>
                </div>
                <div className="pl-16">
                  <p className="text-gray-600">{isEn ? 'We overcome blockages and manage the infrastructure on a constant basis.' : 'Superamos bloqueos y gestionamos la infraestructura de forma constante.'}</p>
                </div>
              </div>

              {/* Card 3: Recibe datos listos para usar */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">{isEn ? 'Receive data ready to use' : 'Recibe datos listos para usar'}</h3>
                </div>
                <div className="pl-16">
                  <p className="text-gray-600">{isEn ? 'You get periodic deliveries in the format that best fits your system.' : 'Cuentas con entregas periódicas en el formato que mejor se adapte a tu sistema.'}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Solutions Carousel Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Decorative Blurred Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-300/40 rounded-full blur-3xl"></div>
          <div className="absolute top-40 left-1/4 w-64 h-64 bg-blue-300/30 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl px-6"
        >
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
              <Heart className="w-4 h-4 fill-pink-600" />
              {isEn ? 'Key benefits' : 'Beneficios clave'}
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {isEn ? 'Tailored solutions' : 'Soluciones adaptadas'}
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {isEn ? 'to your business need' : 'a tu necesidad de negocio'}
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
            {isEn
              ? 'Our approach delivers tangible advantages that accelerate your data initiatives and maximise ROI'
              : 'Nuestro enfoque entrega ventajas tangibles que aceleran tus iniciativas de datos y maximizan el ROI'}
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
                    {isEn ? 'COMMITTED TO YOUR SUCCESS' : 'COMPROMETIDOS CON TU ÉXITO'}
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
                {isEn ? 'SENIOR METHODOLOGY' : 'METODOLOGÍA SENIOR'}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {isEn ? 'Pillars of' : 'Pilares del'} <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Web Scraping</span>
            </h3>

            {/* Description */}
            <p className="text-center text-gray-600 text-base mb-12 max-w-2xl mx-auto">
              {isEn
                ? 'We apply ethics and rigour processes at every stage to ensure that access to information is always constant and secure.'
                : 'Aplicamos procesos de ética y rigor en cada etapa para garantizar que el acceso a la información sea siempre constante y seguro.'}
            </p>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Agilidad técnica */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{isEn ? 'Technical agility' : 'Agilidad técnica'}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {isEn
                    ? 'We automate complex processes to reduce delivery times and let your execution move forward without delays.'
                    : 'Automatizamos procesos complejos para reducir tiempos de entrega y permitir que tu ejecución avance sin esperas.'}
                </p>
              </div>

              {/* Rigor senior */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <FileStack className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{isEn ? 'Senior rigour' : 'Rigor senior'}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {isEn
                    ? 'Every solution is backed by expert mentorship that guarantees data precision.'
                    : 'Cada solución cuenta con el respaldo y la mentoría de expertos que garantiza la precisión del dato.'}
                </p>
              </div>

              {/* Compromiso ético */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Smile className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{isEn ? 'Ethical commitment' : 'Compromiso ético'}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {isEn
                    ? 'We operate with full transparency and under applicable legal frameworks, ensuring integrity in every extraction.'
                    : 'Operamos con total transparencia y bajo los marcos legales vigentes, asegurando la integridad en cada extracción.'}
                </p>
              </div>

              {/* Escalabilidad real */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{isEn ? 'Real scalability' : 'Escalabilidad real'}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {isEn
                    ? 'We design architectures built to grow alongside your information volume without losing stability.'
                    : 'Diseñamos arquitecturas pensadas para crecer junto a tu volumen de información sin perder estabilidad.'}
                </p>
              </div>

              {/* Cercanía colaborativa */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{isEn ? 'Collaborative closeness' : 'Cercanía colaborativa'}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {isEn
                    ? 'We prioritise constant support to offer you clear answers and immediate solutions.'
                    : 'Priorizamos el acompañamiento constante para ofrecerte respuestas claras y soluciones al momento.'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
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
                {isEn ? 'BACKED BY NUMBERS' : 'RESPALDO EN CIFRAS'}
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-6">
            {isEn ? 'Verified experience in every delivery' : 'Experiencia verificada en cada entrega'}
          </h2>

          {/* Description */}
          <p className="text-center text-blue-100 text-base md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
            {isEn
              ? 'Thousands of hours of execution and millions of processed records validate our capacity to manage projects of high technical complexity.'
              : 'Miles de horas de ejecución y millones de registros procesados validan nuestra capacidad para gestionar proyectos de alta complejidad técnica.'}
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
              <div className="text-sm text-blue-100 font-medium">{isEn ? 'Extracted sources' : 'Fuentes extraídas'}</div>
            </div>

            {/* registros entregados */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                  <Database className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{isEn ? '+2 billion' : '+2 billones'}</div>
              <div className="text-sm text-blue-100 font-medium">{isEn ? 'records delivered' : 'registros entregados'}</div>
            </div>

            {/* Proyectos finalizados */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                  <Layers className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+350</div>
              <div className="text-sm text-blue-100 font-medium">{isEn ? 'Completed projects' : 'Proyectos finalizados'}</div>
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
              <div className="text-sm text-blue-100 font-medium">{isEn ? 'Execution hours' : 'Horas de ejecución'}</div>
            </div>

            {/* de efectividad */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99,9%</div>
              <div className="text-sm text-blue-100 font-medium">{isEn ? 'effectiveness' : 'de efectividad'}</div>
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
                {isEn ? 'EXPERT TALENT' : 'TALENTO EXPERTO'}
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">{isEn ? 'Do you need a custom' : '¿Necesitas un flujo de'}</span>
            <br />
            <span className="bg-gradient-to-r from-[#7B92FF] via-[#9D7EFF] to-[#B97EFF] bg-clip-text text-transparent">
              {isEn ? 'extraction flow?' : 'extracción a medida?'}
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            {isEn
              ? 'We develop personalised delivery architectures that integrate with your working environment.'
              : 'Desarrollamos arquitecturas de entrega personalizadas que se integran con tu entorno de trabajo.'}
          </p>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-[#7B92FF] to-[#9D7EFF] hover:from-[#6B82EF] hover:to-[#8D6EEF] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 inline-flex items-center gap-3 text-lg">
            <span>{isEn ? 'Validate technical feasibility' : 'Validar viabilidad técnica'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Unified Capabilities and FAQ Section */}
      <section className="bg-white">
        {/* Capacidades técnicas Section */}
        <div className="relative pt-24 pb-16 px-6 overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-gray-900">{isEn ? 'Technical capabilities' : 'Capacidades técnicas'}</span>
              <br />
              <span className="bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] bg-clip-text text-transparent">{isEn ? 'applied to your goals' : 'aplicadas a tus objetivos'}</span>
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
              <Link
                href={`/data-factory/${capabilities[currentCapability].slug}`}
                className="block bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-2xl cursor-pointer group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
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
              </Link>

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
                    {isEn ? 'WHY US' : 'POR QUÉ NOSOTROS'}
                  </span>
                </div>
              </div>

              {/* Heading */}
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {isEn ? 'Engineering validated by leaders' : 'Ingeniería validada por líderes'}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
                {isEn
                  ? 'Our technical capability has allowed us to consolidate ourselves as an official Solution Partner of Bright Data, strengthening their global data ecosystem.'
                  : 'Nuestra capacidad técnica nos ha permitido consolidarnos como Solution Partner oficial de Bright Data, al fortalecer su ecosistema global de datos.'}
              </p>

              {/* CTA Button */}
              <Link href="https://brightdata.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg inline-flex items-center gap-3">
                <span>{isEn ? 'View Partner profile' : 'Ver perfil de Partner'}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

        {/* FAQ Section */}
        <div className="relative pt-16 pb-24 px-6 overflow-hidden">
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
                {isEn ? 'WE ANSWER YOUR QUESTIONS' : 'RESOLVEMOS TUS DUDAS'}
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-gray-900">{isEn ? 'Frequently asked questions about' : 'Preguntas frecuentes sobre'}</span>
              <br />
              <span className="bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] bg-clip-text text-transparent">Data Factory</span>
            </h2>
            <p className="text-gray-600 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              {isEn
                ? 'Everything you need to know about our extraction architecture, delivery timelines and how we protect the legality of your processes.'
                : 'Todo lo que necesitas saber sobre nuestra arquitectura de extracción, plazos de entrega y cómo cuidamos la legalidad de tus procesos.'}
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
                      <p className="text-sm text-purple-600 mt-1">{isEn ? 'Click to learn more' : 'Haz clic para saber más'}</p>
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
        </div>
      </section>

      {/* Contact Section */}
      <ContactCTA />

      <Footer />
    </main>
  );
}
