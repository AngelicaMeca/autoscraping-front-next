import { ReactNode } from 'react';
import { Target, Building2, Home as HomeIcon, Users, UserCheck, ShoppingCart, Globe, CheckSquare, Zap, BarChart, Shield, TrendingUp, Database, Sparkles, Plane, Heart, MessageSquare, FileStack } from 'lucide-react';

export interface ServiceData {
  slug: string;
  badge: string;
  titlePart1: string;
  titlePartGradient: string;
  titlePart2: string;
  description: string;
  testimonials: {
    rating: number; // usually 5
    text: string;
    authorName: string;
    authorRole: string;
    authorInitials: string;
  }[];
  features: {
    icon: any;
    title: string;
    description: string;
  }[];
  needThisTitle: string;
  needThisDescription: string;
  helpYouSub: string;
  helpYouTitle: string;
  helpYouDescription: string;
  helpYouList: string[];
  ctaTitle: string;
  ctaDescription: string;
  faqs: { question: string; answer: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  'generacion-de-leads': {
    slug: 'generacion-de-leads',
    badge: 'Lead Generation Platform',
    titlePart1: '',
    titlePartGradient: 'Generación de Leads',
    titlePart2: '',
    description: 'Perfecto para empresas que necesitan recopilar grandes volúmenes de datos de prospectos o automatizar el proceso de verificación de leads, reduciendo tiempo y recursos en campañas.',
    testimonials: [
      {
        rating: 5,
        text: '"Este servicio cambió rotundamente nuestra forma de gestionar alianzas, haciendo nuestros procesos de captación significativamente más rápidos y eficientes."',
        authorName: 'Sarah J.',
        authorRole: 'Directora de Ventas, Tecnología',
        authorInitials: 'SJ'
      },
      {
        rating: 5,
        text: '"Experimentamos un gran salto gracias a la automatización en la obtención de leads, permitiendo a nuestro equipo superar las expectativas."',
        authorName: 'Mark D.',
        authorRole: 'Ejecutivo de Generación de Leads',
        authorInitials: 'MD'
      }
    ],
    features: [
      {
        icon: Target,
        title: 'Datos de contacto actualizados',
        description: 'Accede a información de contacto precisa para construir una base de datos sólida para tus esfuerzos de ventas.'
      },
      {
        icon: Zap,
        title: 'Criterios personalizables',
        description: 'Define criterios específicos para precalificar leads garantizando que los datos extraídos se alineen a tu mercado objetivo.'
      },
      {
        icon: Shield,
        title: 'Ahorro de tiempo comprobado',
        description: 'Automatiza la recolección, permitiendo a tu equipo comercial enfocarse en cerrar tratos en lugar de buscar clientes.'
      },
      {
        icon: BarChart,
        title: 'Integración continua',
        description: 'Recibe datos en un formato que se integra de manera fluida y nativa a tu plataforma de CRM.'
      }
    ],
    needThisTitle: 'Cómo saber si necesitas el Scraping de Leads',
    needThisDescription: 'Si tu compañía sufre al generar clientes potenciales manualmente, perdiendo tiempo y dinero en prospectos de baja calidad que fallan en convertir, automatizar las bases de contactos es la única salida.',
    helpYouSub: 'Nuestro Enfoque',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Las soluciones de scraping de contactos que proporcionamos extraen de manera ética y confiable la información altamente relevante sobre responsables en tomar decisiones clave, organizando los datos en un formato ideal.',
    helpYouList: [
      'Extracción automatizada de prospectos',
      'Datos estructurados listos para utilizar',
      'Empodera a tu fuerza de ventas'
    ],
    ctaTitle: '¿Listo para transformar tu flujo de clientes?',
    ctaDescription: 'Comienza a automatizar tu alcance hoy mismo y visualiza resultados instantáneos.',
    faqs: [
      {
        question: '¿Qué involucra la Generación de Leads automatizada?',
        answer: 'Es el proceso de extraer metodológicamente la información de contacto hipersegmentada a partir de los perfiles digitales para pre-enriquecer listas bases.'
      },
      {
        question: '¿Quién es la audiencia objetivo de este servicio?',
        answer: 'Está dirigido a departamentos de marketing B2B, fuerzas de venta directa y agencias de crecimiento.'
      },
      {
        question: '¿Qué beneficios reales ofrece frente a comprar bases de datos?',
        answer: 'Elimina el riesgo de usar bases recicladas y saturadas por tu competidor; la información obtenida a medida es virgen, validada en tiempo real y dispuesta con exactitud a los dolores de tu producto.'
      }
    ]
  },
  'ai-web-scraping': {
    slug: 'ai-web-scraping',
    badge: 'AI Scraping',
    titlePart1: '',
    titlePartGradient: 'AI Web Scraping',
    titlePart2: '',
    description: 'Perfecto para compañías que precisan centralizar grandes volúmenes de datos u optimizar flujos automatizados con Inteligencia Artificial.',
    testimonials: [
      {
        rating: 5,
        text: '"Gracias a la extracción apoyada en IA, descartamos cientos de miles de falsos positivos en registros gubernamentales en minutos."',
        authorName: 'John D.',
        authorRole: 'Director E-commerce',
        authorInitials: 'JD'
      },
      {
        rating: 5,
        text: '"La rapidez con la que AUTOScraping implementó los modelos de visión y refracción sobre el bot nos dio la ventaja temporal ante nuestra competencia."',
        authorName: 'Elena M.',
        authorRole: 'Product Owner',
        authorInitials: 'EM'
      }
    ],
    features: [
      {
        icon: Zap,
        title: 'Adaptabilidad Dinámica',
        description: 'La navegación en red alimentada con LLMs comprende el esquema del sitio y sobrevive incluso si la página web base cambia su diseño.'
      },
      {
        icon: BarChart,
        title: 'Parseo Mejorado',
        description: 'La data caótica sin selectores CSS es interpretada semánticamente previniendo roturas o fallos de lectura.'
      },
      {
        icon: Target,
        title: 'Reducción de QA',
        description: 'Evita perder sesiones completas revisando scripts manualmente gracias al análisis iterativo del modelo.'
      },
      {
        icon: Shield,
        title: 'Bypass y Soluciones AI',
        description: 'Solventamos lógicas y captchas hiper-complicos mimetizando los patrones cognitivos que usa el ser humano al interactuar.'
      }
    ],
    needThisTitle: 'Cómo saber si necesitas el Scraping Clásico o con IA',
    needThisDescription: 'Si los portales de los que quieres sacar la información están bloqueados detrás de barreras duras (CAPTCHAS, Cloudflare, rotadores biométricos) y diseños no-predecibles (Renderizado de Canvas, JS Dinámico), los spiders clásicos van a fallar y requerirás IA.',
    helpYouSub: 'AI Solutions',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Nuestra solución se encarga de acoplar modelos avanzados que permiten simular "ojos humanos", interpretando y tomando los datos aunque un portal sea hermético en código fuente.',
    helpYouList: [
      'Automatización de tareas repetitivas frente a páginas cambiantes.',
      'Adaptación constante en tiempo real.',
      'Lectura de datos inyectados por renderizado.'
    ],
    ctaTitle: 'Aprovecha la recolección autónoma apalancada con los últimos algoritmos',
    ctaDescription: '',
    faqs: [
      {
        question: '¿Qué aporta hacer Web Scraping con Inteligencia Artificial?',
        answer: 'Permite reducir la dependencia de selectores (xPaths, QuerySelectors) que al momento en que el creador de la página decide cambiarlos, el script de extracción explota y requiere mantenimiento manual.'
      },
      {
        question: '¿Para qué sistemas es fundamental el uso de Scraping basado en IA?',
        answer: 'Principalmente para sitios modernos (SPAs) donde el contenido vive oculto o está fuertemente enmascarado frente a robots de extracción de la vieja escuela.'
      },
      {
        question: '¿Es más costoso implementar Inteligencia Artificial en mis bots?',
        answer: 'Involucra una carga por computación ligeramente mayor, pero a mediano plazo genera ahorros exponenciales debido a la nula necesidad de mantenimiento técnico frente a la rotura del código habitual de un bot.'
      }
    ]
  },
  'extraccion-de-linkedin': {
    slug: 'extraccion-de-linkedin',
    badge: 'LinkedIn',
    titlePart1: '',
    titlePartGradient: 'Extracción de LinkedIn',
    titlePart2: '',
    description: 'Perfecto para negocios que buscan coleccionar datos profesionales o automatizar la generación de leads B2B reduciendo horas operativas.',
    testimonials: [
      {
        rating: 5,
        text: '"Pudimos reconstruir el organigrama entero de las agencias a quienes queríamos vender. LinkedIn Web Scraping fue el abrelatas de nuestros equipos comerciales."',
        authorName: 'Carlos A.',
        authorRole: 'Industria de Reclutamiento',
        authorInitials: 'CA'
      },
      {
        rating: 5,
        text: '"El flujo constante de datos organizados nos ahorró semanas completas bloqueadas en prospección manual y armados de bases en Excel."',
        authorName: 'Fabiola T.',
        authorRole: 'CEO de Marketing B2B',
        authorInitials: 'FT'
      }
    ],
    features: [
      {
        icon: UserCheck,
        title: 'Extracción de Perfiles (MQLs)',
        description: 'Extrae con alta precisión cargos, áreas y correos públicos corporativos de miembros de LinkedIn acorde a tus roles ideales (B2B).'
      },
      {
        icon: Users,
        title: 'Mapeo Organizacional',
        description: 'Construye la foto corporativa completa de un competidor u organización objetivo en base al tamaño de su fuerza laboral y crecimiento.'
      },
      {
        icon: Zap,
        title: 'Data Histórica y Actualizada',
        description: 'Captura cronologías educativas y laborales para perfilar si el prospecto calza perfectamente con el servicio que planeas ofrecerle.'
      },
      {
        icon: Shield,
        title: 'Estructura Perfecta',
        description: 'Proveemos volcados ordenados y saneados de listados de búsqueda, directo al formato que demande tu plataforma analítica.'
      }
    ],
    needThisTitle: 'Cómo saber si precisas Automatizar sobre LinkedIn',
    needThisDescription: 'Si tu equipo B2B todavía depende de copias y pegues manuales de cargos hacia un CRM, llegando tarde a las rondas de inversión o perdiendo frente al seguimiento comercial rápido; nuestro scraping dedicado de LinkedIn te pertenece.',
    helpYouSub: 'Data B2B',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Nuestro servicio intercede y automatiza el tedio de la prospección, proporcionándote cientos o miles de leads cualificados de LinkedIn, armando tableros de insights competitivos o integrando directamente el feed a tus sistemas.',
    helpYouList: [
      'Exportación en volumen de empresas y perfiles individuales.',
      'Sorteo de límites de búsqueda rígidos del portal madre.',
      'Integración DaaS fluida y programada.'
    ],
    ctaTitle: 'Multiplica el impacto de tu Outreach apoyándote en Data Factory',
    ctaDescription: '',
    faqs: [
      {
        question: '¿Qué es exactamente la Extracción de Datos de LinkedIn?',
        answer: 'Es la metodología autómata para procesar y agrupar grandes listados de resultados corporativos, historiales educativos, perfiles profesionales y vacantes publicadas en la red con motivo analítico o comercial.'
      },
      {
        question: '¿Qué tipo de departamentos se benefician primordialmente?',
        answer: 'Fundamental para áreas orientadas a account-based marketing, agencias headhunters y analistas de Business Intelligence B2B.'
      },
      {
        question: '¿Es más rentable que LinkedIn Sales Navigator u otras soluciones?',
        answer: 'A diferencia de herramientas de UI directa, nosotros entregamos raw data programática. No precisas equipos sentados horas usando nuestro software, simplemente recibes las bases maestras listas y pre-digeridas.'
      }
    ]
  },
  'monitoreo-de-airbnb': {
    slug: 'monitoreo-de-airbnb',
    badge: 'Airbnb',
    titlePart1: '',
    titlePartGradient: 'Monitoreo de Airbnb',
    titlePart2: '',
    description: 'Esencial para firmas proptechs, hostings urbanos y managers hoteleros que necesitan auditar el colosal volumen inmobiliario y anticipar la matriz tarifaria en tiempo real.',
    testimonials: [
      {
        rating: 5,
        text: '"Poder trazar paralelamente la tarifa, descuento escondido o vacancia de nuestros competidores directos en la cuadra transformó el RevPAR por completo."',
        authorName: 'Maria C.',
        authorRole: 'Asset Manager Proptech',
        authorInitials: 'MC'
      },
      {
        rating: 5,
        text: '"Los reportes de ocupación y tarifas nos han resultado oro en polvo para saber cuando escalar el precio agresivamente durante temporadas muertas."',
        authorName: 'James P.',
        authorRole: 'Fondo Inversor Real Estate',
        authorInitials: 'JP'
      }
    ],
    features: [
      {
        icon: BarChart,
        title: 'Análisis de Rentabilidad',
        description: 'Captura diaria de reviews, puntuación de propiedades, políticas y perfiles de huéspedes.'
      },
      {
        icon: Target,
        title: 'Radar de Competidores',
        description: 'Vigila el rango competitivo, listados subvaluados y host principales de la ciudad mapeando su calendario estacional.'
      },
      {
        icon: Zap,
        title: 'Alertas de Precios',
        description: 'Visualiza picos de demanda según las alertas sobre variabilidad general de las tarifas a 1, 3 o 6 meses vistas de una ciudad.'
      },
      {
        icon: Shield,
        title: 'Formatos Integrados',
        description: 'Los datos tabulares pueden cruzar tus sistemas contables de forma nativa para actualizar precios dinámicamente.'
      }
    ],
    needThisTitle: 'Cómo saber si requieres el tracking automático en Airbnb',
    needThisDescription: 'Si no puedes responder cuáles fueron las tarifas reales de mercado el último mes en la redonda de tu complejo, ni por qué la competencia estuvo 100% full mientras tu lugar vacante... estás operando a ciegas. AUTOScraping resuelve esto.',
    helpYouSub: 'Data Proptech',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Configuramos redes densas de extracción programática (Scraping) sobre Airbnb mapeando listados, reviews y calendarios georrefenciados para ofrecerte la radiografía final de cómo se comportan los inquilinos y qué precios aceptan.',
    helpYouList: [
      'Seguimiento diario de precios nocturnos de competidores.',
      'Analíticas profundas (Ocupación, RevPAR estimado, Reglas).',
      'Minado de comentarios para identificar nichos descuidados.'
    ],
    ctaTitle: 'El poder del talento experto listo para potenciar tus operaciones turísticas',
    ctaDescription: '',
    faqs: [
      {
        question: '¿Qué es exactamente la Extracción de Datos en Airbnb?',
        answer: 'Es el proceso metodológico de recorrer el inventario público de propiedades, procesando sus tarifas interconectadas (temporada/fines de semana) y estado (ocupado/libre) para comprender tendencias microeconómicas.'
      },
      {
        question: '¿Para qué usaría esto una agencia hotelera o proptech?',
        answer: 'Básicamente: "Dynamic Pricing". Si la ciudad está sorpresivamente saturada un fin de semana a razón de un evento no mapeado, la lectura automatizada se encargará de reportarlo para que puedas subir tarifas al instante o identificar el perfil de búsqueda dominador del mes.'
      },
      {
        question: '¿Qué ventajas tienen los datos estructurados vs dashboards enlatados?',
        answer: 'Al brindarte Data Cruda y curada en Datawarehouses privados, tienes la libertad de diseñar tus propios tableros internos con la mezcla de tu flujo de ingresos privados contra los resultados ajenos; y no depender analíticamente del SaaS de un tercero.'
      }
    ]
  },
  'registro-de-google-maps': {
    slug: 'registro-de-google-maps',
    badge: 'Google Maps',
    titlePart1: '',
    titlePartGradient: 'Registro de Google Maps',
    titlePart2: '',
    description: 'Perfecto para agencias y franquicias que necesitan automatizar la inteligencia locacional, obteniendo reviews, horarios y ratings del comercio local a escala global.',
    testimonials: [
      {
        rating: 5,
        text: '"Este servicio nos ayudó a identificar empresas locales clave para alianzas, haciendo nuestra expansión a México mucho más certera y eficiente."',
        authorName: 'Sandra L.',
        authorRole: 'Manager de Expansión, Turismo',
        authorInitials: 'SL'
      },
      {
        rating: 5,
        text: '"Los datos procesados de Google Maps nos permitieron mapear las ubicaciones y densidad de clientes de nuestra competencia, mejorando la logística radial."',
        authorName: 'Alex T.',
        authorRole: 'Logística y Última Milla',
        authorInitials: 'AT'
      }
    ],
    features: [
      {
        icon: Target,
        title: 'Análisis de Competidores',
        description: 'Extrae información de rivales locales (Reviews, Estrellas, Horarios, Teléfonos) para entender las condiciones del mercado.'
      },
      {
        icon: Globe,
        title: 'Mapeo de Clientes Potenciales',
        description: 'Construye listas frías altamente segmentadas de negocios físicos basados en las coordenadas directas de Maps.'
      },
      {
        icon: Zap,
        title: 'Actualizaciones de Apertura',
        description: 'Identifica y alerta sobre qué locaciones abrieron o cerraron permanentemente en tu sector cada mes.'
      },
      {
        icon: Shield,
        title: 'Limpieza de Direcciones (GCP)',
        description: 'Formateamos y cruzamos los pines contra las bases de datos de Google Cloud Platform para uniformidad.'
      }
    ],
    needThisTitle: 'Cómo saber si necesitas el Scraping de Google Maps',
    needThisDescription: 'Si tu equipo B2B navega por el mapa buscando agencias, restaurantes u hospitales manualmente para armar una ruta comercial, perdiendo días en el proceso; automatizar dicha extracción de polígonos resuelve tu problema.',
    helpYouSub: 'Data Georreferenciada',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Nuestro servicio de extracción sobre Maps procesa las coordenadas de las ciudades objetivo, simulando exploraciones para recuperar negocios categorizados, proveyendo bases repletas de números web y opiniones.',
    helpYouList: [
      'Extracción dentro de polígonos o códigos postales concretos.',
      'Lectura de opiniones y metadata urbana.',
      'Construcción de audiencias B2B frías infalibles.'
    ],
    ctaTitle: 'Impulsa tu crecimiento hiper-local con nuestra inteligencia geográfica',
    ctaDescription: '',
    faqs: [
      {
        question: '¿Qué información específica extraen de Google Maps?',
        answer: 'Extráemos título del negocio, categoría, nota global, total de reviews, dirección postal unificada, página web ligada, números de teléfono comerciales y el horario de atención.'
      },
      {
        question: '¿Hay forma de extraer los comentarios dentro de cada negocio?',
        answer: 'Sí. A través de scripts más profundos (Deep-Crawling) podemos bajar el texto de los comentarios, las estrellas por persona, fecha y la respuesta del negocio si la hay.'
      },
      {
        question: '¿Cuál es la latencia de procesar una ciudad completa?',
        answer: 'Dependiendo la amplitud y densidad poblacional de la búsqueda (ej: "todos los restaurantes de Madrid" frente a "Todas las empresas de ciberseguridad en Buenos Aires"), el recaudo toma en promedio 24 a 48 horas.'
      }
    ]
  },
  'web-scraping-automation': {
    slug: 'web-scraping-automation',
    badge: 'Automation',
    titlePart1: '',
    titlePartGradient: 'Web Scraping Automation',
    titlePart2: '',
    description: 'Perfecto para negocios que necesitan orquestar automatizaciones repetitivas de extracción masiva desvinculando la dependencia humana para siempre.',
    testimonials: [
      {
        rating: 5,
        text: '"Automatizar nuestra recolección web, en vez de tercerizarla manualmente cada viernes, nos permitió construir verdaderos esquemas Data-Driven."',
        authorName: 'Tom W.',
        authorRole: 'CEO Operaciones de Contenido',
        authorInitials: 'TW'
      },
      {
        rating: 5,
        text: '"Recuperamos velocidad, exactitud y margen en nuestra oferta comercial. Definitivamente es el activo invisible clave de nuestra empresa."',
        authorName: 'Rachel S.',
        authorRole: 'Growth & Entertaiment',
        authorInitials: 'RS'
      }
    ],
    features: [
      {
        icon: Shield,
        title: 'Cero Riesgo Humano',
        description: 'Los spiders automatizados no copian el campo equivocado ni descansan; aseguran exactitud perpetua al capturar data crítica.'
      },
      {
        icon: Zap,
        title: 'Orquestación Constante',
        description: 'Configuramos CRONs y pipelines (Airflow) donde la ingesta de data transcurre por debajo sin demandar intervención.'
      },
      {
        icon: Target,
        title: 'Horarios Personalizables',
        description: 'Independientemente de si necesitas actualizaciones cada hora (como el mercado bursátil) o domingos en la noche, el sistema cumple a rajatabla.'
      },
      {
        icon: BarChart,
        title: 'Eficiencia de Capital',
        description: 'Asigna el valor intelectual de tus ingenieros a innovar con los analíticos, delegando el peso de conseguir el dato crudo a nosotros.'
      }
    ],
    needThisTitle: 'Cómo saber si precisas de Arquitecturas de Extracción DaaS',
    needThisDescription: 'Si tienes un ejército de pasantes transcribiendo tablas para alimentar los analíticos semanales y todo arde cuando cambian las columnas, entonces necesitas arquitectura formal de scrapers.',
    helpYouSub: 'Data Automation',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Te proporcionamos toda la ingeniería de Data Factory que conecta herramientas, saltos de IP, bases en la nube y scripts inyectores; armando la tubería (Pipeline) de principio a fin hacia tus servidores.',
    helpYouList: [
      'Infraestructura robusta autogestionada (Serverless).',
      'Configuración de flujos concurrentes (Millones de peticiones diarias).',
      'Eliminación de la brecha de recolección manual.'
    ],
    ctaTitle: 'Sube al siguiente nivel transformando al dato en el motor invisible de tu rentabilidad',
    ctaDescription: '',
    faqs: [
      {
        question: '¿Qué es exactamente la Automatización de Scraping (DaaS)?',
        answer: 'Data as a Service. Es consumir la información externa periódicamente mediante endpoints listos sin preocuparte en absoluto en cómo los scripts libran firewalls, bloqueos, o renderizan la inyección requerida para conseguirlos en primera instancia.'
      },
      {
        question: '¿Qué corporaciones dependen de esta estructura?',
        answer: 'Desde modelos que alimentan las inteligencias y motores de recomendación, hasta corporaciones masivas de logística que deben auditar cadenas mundiales cada noche para funcionar.'
      },
      {
        question: '¿Garantizan el "Uptime" o vida útil de los conectores?',
        answer: 'Sí. A través de nuestro "Data Squad" construimos monitoreos de salud de datos. Si el portal fuente cambia drásticamente, nuestras alarmas lo detectan e intercedemos en tiempo récord para corregir la tubería y asegurar tus datos.'
      }
    ]
  },
  'metricas-financieras': {
    slug: 'metricas-financieras',
    badge: 'Financial Data',
    titlePart1: '',
    titlePartGradient: 'Métricas Financieras',
    titlePart2: '',
    description: 'Crítico para fondos de cobertura, inversionistas y firmas fintech que demandan métricas precisas sobre indicadores económicos de forma constante y automática.',
    testimonials: [
      {
        rating: 5,
        text: '"Al automatizar el consumo de reportes e indicadores bursátiles minoristas del mercado asiático pudimos consolidar decisiones con tres horas de ventaja."',
        authorName: 'Laura T.',
        authorRole: 'Manager de Inversiones',
        authorInitials: 'LT'
      },
      {
        rating: 5,
        text: '"El flujo ininterrumpido sobre la fluctuación de bonos y tasas nos garantizó la creación de estimativas (forecasting) absolutamente estelares."',
        authorName: 'Robert G.',
        authorRole: 'Fondo Estructural Analítico',
        authorInitials: 'RG'
      }
    ],
    features: [
      {
        icon: BarChart,
        title: 'Análisis Macroeconómico',
        description: 'Obtención masiva de balances, memorias e indicativos del PBI dictados por los entes gubernamentales.'
      },
      {
        icon: TrendingUp,
        title: 'Monitoreo Bursátil Intradía',
        description: 'Lectura ultra rápida (Low Latency) del estado e índices de activos en portales de la bolsa.'
      },
      {
        icon: Target,
        title: 'Tracking de Criptoactivos',
        description: 'Colección de sentimiento y métricas On-Chain públicas diseminadas a través de docenas de foros y directorios informativos.'
      },
      {
        icon: Shield,
        title: 'Data Inmaculada',
        description: 'Cifrado robusto y canalizado de manera tal que los valores porcentuales y divisas siempre preserven el estado y formato esperado.'
      }
    ],
    needThisTitle: 'Por qué priorizar el Levantamiento de Data Financiera Localizada',
    needThisDescription: 'Si dependes exclusivamente de proveedores de mercado centralizados como Bloomberg que imponen costos exorbitantes, careciendo además de ciertos indicativos regionales y de bonos públicos descentralizados que tú mismo requieres.',
    helpYouSub: 'Data y Fintech',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Generamos flujos persistentes conectándonos silenciosamente sobre cualquier ente o reporte monetario, descargando PDFs, leyendo el HTML y sirviéndolo a tu core bancario como un servicio de data fresco.',
    helpYouList: [
      'Ingeniería enfocada en precisión algorítmica de los valores.',
      'Lectura de PDFs de asambleas y tabuladores fiscales locales.',
      'Aseguramiento de entrega ágil vital para las tendencias.'
    ],
    ctaTitle: 'Conquista tu ventaja en el mercado aprovechando nuestra extracción analítica',
    ctaDescription: '',
    faqs: [
      {
        question: '¿De dónde extraen la información financiera?',
        answer: 'Conectamos puentes hacia bancos centrales regionales (Tasas de Interés, Tipo de Cambio), plataformas accionarias públicas, organismos de auditoria que suben reportes anuales (SEC), y procesadores de divisas.'
      },
      {
        question: '¿Qué es scraping financiero profundo u ORC referencial?',
        answer: 'Cuando el documento gubernamental vive dentro de una imagen incrustada dentro de un PDF escondido tras una URL antigua; nuestros ingenieros implementan Optical Recognition (IA) para recuperar esos números.'
      },
      {
        question: '¿Es ético / legal hacer web scraping de precios de acciones o bonos?',
        answer: 'Absolutamente, a día de hoy, y bajo jurisprudencia general, recopilar datos numéricos provistos públicamente en internet con una estructura de rastreo amigable encaja totalmente en el uso legítimo analítico (Fair Use / Data Analytics).'
      }
    ]
  },
  'catalogos-de-e-commerce': {
    slug: 'catalogos-de-e-commerce',
    badge: 'Ecommerce Scraping',
    titlePart1: '',
    titlePartGradient: 'Catálogos de E-commerce',
    titlePart2: '',
    description: 'Perfecto para marcas comerciales que precisan de gestionar masivos volúmenes de inventario y auditar el catálogo de sus competidores automatizando su toma de decisiones.',
    testimonials: [
      {
        rating: 5,
        text: '"Al automatizar el rastreo de precios y promociones de rivales en eventos de temporada, pudimos ofrecer tickets un 3% más agresivos y agotar stock."',
        authorName: 'Jenna F.',
        authorRole: 'Head de E-commerce',
        authorInitials: 'JF'
      },
      {
        rating: 5,
        text: '"Poder monitorear las fluctuaciones en tiempo real nos salvó de perder un margen del 15% que no estabamos contemplando en costos de envío ajenos."',
        authorName: 'Mark K.',
        authorRole: 'Analista de Growth',
        authorInitials: 'MK'
      }
    ],
    features: [
      {
        icon: Target,
        title: 'Mapeo de Precios',
        description: 'Audita los precios base, promociones activas y ofertas ocultas de competidores para proteger tu margen de penetración.'
      },
      {
        icon: BarChart,
        title: 'Análisis de Reviews',
        description: 'Extrae cientos de miles de estrellitas y quejas desde los e-commerces competidores para nutrir tus próximos lanzamientos de producto.'
      },
      {
        icon: ShoppingCart,
        title: 'Monitoreo de Inventario',
        description: 'Visibilidad constante sobre qué SKUs se agotan frecuentemente en otras tiendas para incrementar el abastecimiento seguro en la tuya.'
      },
      {
        icon: Shield,
        title: 'Metadata en Limpio',
        description: 'Despachamos los datos curados en un archivo plano conteniendo el ASIN, Categoría, Precio, Foto y Disponibilidad tabularmente exactos.'
      }
    ],
    needThisTitle: 'Cómo saber si precisas Trackear Catálogos Automáticamente',
    needThisDescription: 'Si gastas miles de dólares en analistas refrescando portales para encontrar de manera manual cuándo tu competencia activa una promoción sobre categorías compartidas, dejándote días en desventaja... necesitas este servicio.',
    helpYouSub: 'Data E-commerce',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Nuestro servicio de E-commerce Mapeo navega millones de páginas de productos de las marcas líderes simultáneamente, comparando precios e inventario para enviarte reportes directos sobre cómo debes maniobrar.',
    helpYouList: [
      'Alerta inmediata sobre cambios de stock o precio.',
      'Sorteo técnico de tiendas masivas fuertemente blindadas.',
      'Tus listados estructurados listos para cruzar datos.'
    ],
    ctaTitle: 'Sube las conversiones integrando un motor invisible que vigila tus catálogos',
    ctaDescription: '',
    faqs: [
      {
        question: '¿De qué tiendas en línea se puede extraer información?',
        answer: 'Técnicamente de cualquier Retail o Marketplace B2B/B2C, incluyendo gigantes internacionales hiper controlados hasta tiendas particulares montadas sobre Shopify, Vtex, o Magento.'
      },
      {
        question: '¿Consiguen extraer datos bajo registros o "Prices hidden"?',
        answer: 'Sí. Nuestras automatizaciones se encargan de registrar bots y loggearlos dentro del flujo de compra con perfiles verdaderos simulando ubicuidad de un comprador, desencriptando descuentos ocultos exclusivos a nivel carrito o zipcode.'
      },
      {
        question: '¿Con qué velocidad recomiendan ejecutar este scraping?',
        answer: 'En temporalidades normales sugerimos extracciones semanales por categoría. Durante eventos como Black Friday o Hot Sale sugerimos un escaneo programático cada 4-6 horas para posibilitar Dynamic Pricing (Ajuste algorítmico automatizado).'
      }
    ]
  },
  'insights-de-marketing': {
    slug: 'insights-de-marketing',
    badge: 'Marketing',
    titlePart1: '',
    titlePartGradient: 'Insights de Marketing',
    titlePart2: '',
    description: 'Perfecto para equipos de marketing que necesitan procesar grandes volúmenes de datos u automatizar tareas vitales, reduciendo tiempos de validación de campañas al apoyarse en el Web Scraping para Marketing.',
    testimonials: [
      {
        rating: 5,
        text: '"El Web Scraping para Marketing transformó nuestra manera de identificar tendencias y estrategias de nuestra competencia, dándonos una clara ventaja analítica dentro de la industria."',
        authorName: 'Sofia M.',
        authorRole: 'Agencia de Growth Marketing',
        authorInitials: 'SM'
      },
      {
        rating: 5,
        text: '"Hemos utilizado el Web Scraping para automatizar nuestro pre-enriquecimiento de leads resultando en un salto de conversión en correos en frío a un nivel altísimo."',
        authorName: 'James C.',
        authorRole: 'Plataforma B2B',
        authorInitials: 'JC'
      }
    ],
    features: [
      {
        icon: Users,
        title: 'Segmentación de Audiencia Mejorada',
        description: 'Accede a datos en redes y foros que te permiten segmentar asertivamente a tu audiencia y personalizar tus correos masivos.'
      },
      {
        icon: Target,
        title: 'Estrategias de Marketing de Competidores',
        description: 'Monitorea directamente los esfuerzos de tus competidores extrayendo la metadata de sus anuncios y descripciones de producto.'
      },
      {
        icon: Zap,
        title: 'Actualización Frecuente',
        description: 'Recibe volcados de datos refrescados constantemente para asegurarte de que tus campañas transpiran un contexto relevante y actual.'
      },
      {
        icon: BarChart,
        title: 'Reportajes y Dashboards Curados',
        description: 'Entregamos tableros informados y pre-digeridos centrados en las métricas clave para tu iniciativa publicitaria.'
      }
    ],
    needThisTitle: 'Cómo saber si necesitas Web Scraping de Marketing',
    needThisDescription: 'Si tu departamento de marketing desperdicia semanas agrupando datos de la competencia en Excels y tabulando audiencias manualmente, el Web Scraping automatizado te urge fuertemente.',
    helpYouSub: 'Data y Campañas',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Nuestro equipo dedicado de ingenieros orquesta la recuperación de datos sociales, publicidades ajenas y precios para darte la directriz real antes de lanzar o pautar online.',
    helpYouList: [
      'Automatizar tableros comparativos sobre precios y pautas.',
      'Obtención masiva de perfiles y opiniones regadas por la web.',
      'Empoderar a tu equipo de campañas liberándolos de la búsqueda manual.'
    ],
    ctaTitle: 'Multiplica tu ROI y la conversión de prospectos respaldando tus decisiones con datos precisos',
    ctaDescription: '',
    faqs: [
      {
        question: '¿Qué abarca el Web Scraping para el área de Marketing?',
        answer: 'Consiste en identificar, ordenar y presentar datos dispersos relativos a las preferencias de consumición, precios estacionales y estrategias competitivas para moldear tu próxima iniciativa comercial.'
      },
      {
        question: '¿Qué industrias se benefician mayoritariamente de esto?',
        answer: 'Desde agencias creativas que requieren entender de qué se habla en foros antes de crear contenido, hasta Brand Managers de grandes marcas que auditan a su competencia antes de Black Friday.'
      },
      {
        question: '¿Cuáles son las ventajas netas detrás de invertir en esto?',
        answer: 'Mitigación drástica del riesgo. En vez de lanzar un producto a ciegas asumiendo "a quién le gusta y a qué precio pagaría", la analítica te dice exactamente a cuánto y dónde lo están pagando hoy mismo.'
      }
    ]
  },
  'indexacion-inmobiliaria': {
    slug: 'indexacion-inmobiliaria',
    badge: 'Real Estate',
    titlePart1: '',
    titlePartGradient: 'Indexación Inmobiliaria',
    titlePart2: '',
    description: 'Perfecto para agentes, franquicias o fondos inversores inmobiliarios que precisan trackear diariamente el valor de las propiedades publicadas dentro de los portales líderes para capitalizar el volumen del mercado.',
    testimonials: [
      {
        rating: 5,
        text: '"Pudimos indexar todas las propiedades de nuestros competidores alrededor de Florida y predecir cuándo el mercado estaba bajo una recesión inminente, vendiendo con alto margen a tiempo."',
        authorName: 'Maria C.',
        authorRole: 'Gestor Fondo Real Estate',
        authorInitials: 'MC'
      },
      {
        rating: 5,
        text: '"Los reportes de la tendencia del mercado hipotecario y las variaciones que conseguimos estructurar nos permitieron invertir sin riesgo con el pool."',
        authorName: 'James P.',
        authorRole: 'Family Office Inmobiliario',
        authorInitials: 'JP'
      }
    ],
    features: [
      {
        icon: TrendingUp,
        title: 'Monitoreo de Precios y Disponibilidad',
        description: 'Obtén métricas de tasación y estatus de los listados actualizados a diario para fundamentar decisiones.'
      },
      {
        icon: Target,
        title: 'Análisis de Inventario Competitivo',
        description: 'Descubre qué ubicaciones, tipo de propiedades o metros cuadrados exactos ofertan tus competidores recurrentemente.'
      },
      {
        icon: BarChart,
        title: 'Patrones de Renta (Market Trends)',
        description: 'Correlaciona las políticas de alquiler y la variabilidad en los retornos directos según el ZIP Code o Barrio de los listados.'
      },
      {
        icon: Shield,
        title: 'Integraciones a CRMs (MLS)',
        description: 'Suministramos conexiones y exportables para que alimentes de inmediato tu sistema logístico / MLS.'
      }
    ],
    needThisTitle: 'Cómo saber si necesitas Analítica en Real Estate',
    needThisDescription: 'Si los agentes de tu franquicia deben entrar a mano cruzando comparables por horas enteras solo para tasar una propiedad, mientras la verdadera oportunidad de inversión (Deal) le llega antes a la competencia.',
    helpYouSub: 'Proptech Data',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Recolectamos el universo entero de publicaciones provenientes de portales inmobiliarios y agregadores, procesando la latitud, m2, descripción y precios para entregarte un Datawarehouse listo para filtrar y atacar.',
    helpYouList: [
      'Captura paralela de millones de listados en portales públicos.',
      'Lectura de amenidades y perfiles de los vendedores.',
      'Dashboards y comparativas claras sin subjetividades al tasar.'
    ],
    ctaTitle: 'Adquiere tu ventaja en el sector inmobiliario asegurándote la toma de decisiones con datos puros',
    ctaDescription: '',
    faqs: [
      {
        question: '¿Qué se puede extraer desde los portales inmobiliarios comunes?',
        answer: 'Comúnmente extraemos el precio ofertado a diario (identificando caídas sutiles de precio con el paso del mes), historial de ventas, M2 cubiertos, agente a cargo, fotografías, y toda la metadata adjunta al aviso en línea.'
      },
      {
        question: '¿A quiénes va dirigida la Indexación Inmobiliaria?',
        answer: 'Fideicomisos en búsqueda de oportunidades subvaluadas (Flipping house), grandes fondos proptech, bancos evaluando tasaciones y agencias tradicionales de enorme flujo inmobiliario (RE/MAX).'
      },
      {
        question: '¿Cuáles son las ventajas cardinales de este servicio?',
        answer: 'Identificar arbitrariedades. Cuando el mercado dicta X monto el m2, nuestro algoritmo y tabajos pueden detectar una oferta 15% por debajo antes que el comprador general la note, permitiendo comprarla antes que nadie.'
      }
    ]
  },
  'auditoria-seo': {
    slug: 'auditoria-seo',
    badge: 'Scraping for SEO',
    titlePart1: '',
    titlePartGradient: 'Auditoría SEO',
    titlePart2: '',
    description: 'Perfecto para marcas o agencias con presencia digital agresiva que requieren auditar programáticamente millones de URLs, meta tags y clústers de competidores.',
    testimonials: [
      {
        rating: 5,
        text: '"Al analizar retrospectivamente cómo se enlazaban las noticias top de nuestro rival (Backlinks), reconstruimos nuestra matriz SEO acaparando su tráfico en tres semanas."',
        authorName: 'Michael S.',
        authorRole: 'SEO Lead E-commerce',
        authorInitials: 'MS'
      },
      {
        rating: 5,
        text: '"La información diaria provista sobre las búsquedas tendencia (Trends) nos entregó la oportunidad de modificar on-the-fly los H1 de nuestros portales ganando volumen orgánico."',
        authorName: 'Jessica K.',
        authorRole: 'Diario Noticiario Nacional',
        authorInitials: 'JK'
      }
    ],
    features: [
      {
        icon: Target,
        title: 'Auditoría de Backlinks Clandestinos',
        description: 'Extrae sistemáticamente las conexiones de links entrantes y salientes ocultos (referrals) para entender la fuerza de empuje.'
      },
      {
        icon: Shield,
        title: 'Monitoreo Periódico de Contenido',
        description: 'Traquea si competidores directos alteran la densidad de sus palabras claves en tiempo real y ajusta tu posicionamiento ante sus embates.'
      },
      {
        icon: TrendingUp,
        title: 'Búsqueda de Tendencias y Comportamiento',
        description: 'Colecciona el resultado (Top 100 SERP) proveniente de los principales motores por hora para dictaminar los artículos más codiciados.'
      },
      {
        icon: BarChart,
        title: 'Análisis Introspectivo (Tech SEO)',
        description: 'Podemos rastrear e indexar tu propio portal para corroborar que no existen etiquetas faltantes, 404 ni bucles (loops) de navegación masivos.'
      }
    ],
    needThisTitle: 'Cuándo adoptar el Rastreo y Scraping para SEO Estratégico',
    needThisDescription: 'Si tu tráfico cae ante actualizaciones de Google sin advertencia; o si tu agencia malgasta fortunas rastreando directorios en tools de baja capacidad en vez de poseer el mapa táctico crudo para generar su propia inteligencia artificial semántica.',
    helpYouSub: 'Technical Search Intelligence',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Corremos robots hiper-livianos capaces de descargar paralelamente cientos de miles de páginas (incluso renderizadas en SPA Javascript) procesando su jerarquía DOM, links, esquemas, y dándotelas en un volcado absoluto.',
    helpYouList: [
      'Lectura de jerarquías H1/H2, metadatos y schemas masiva.',
      'Sorteo de bloqueadores analíticos para revisar la competencia.',
      'Mantenimiento continuo y alertamiento SEO.'
    ],
    ctaTitle: 'Conquista la cima del buscador fundamentando tu estrategia en volúmenes infalibles de datos',
    ctaDescription: '',
    faqs: [
      {
        question: '¿Qué involucra extraer Datos para el área de SEO (Search Engine Optimization)?',
        answer: 'Involucra recorrer portales imitando los comportamientos nativos de los "Crowlers" (arañas) de Google o Bing, parseando la limpieza de su código fuente, etiquetas e hipervínculos.'
      },
      {
        question: '¿Quién puede beneficiarse mayormente de esto en contraposición de SEMRush o Ahrefs?',
        answer: 'Empresas nativas digitales altísimamente transaccionales que precisan ver a nivel forense qué palabras incrustaron los diez sitios que les ganaron el ranking y agencias digitales que deben auditar sitios PBN con rapidez técnica y a granjas granulares de escalas millonarias.'
      },
      {
        question: '¿Cuáles son los retornos (KPIs) típicos tras el uso logístico?',
        answer: 'Un incremento en el CTR (Clics en buscador) debido a ajustes de optimizaciones semánticas guiados por un espectro analítico total; y no parcial, aumentando el volumen de tráfico que capta la empresa orgánicamente cada mes, bajando la dependencia de comprar anuncios a Google (PPC).'
      }
    ]
  },
  'estrategias-de-pricing': {
    slug: 'estrategias-de-pricing',
    badge: 'Pricing Intelligence',
    titlePart1: '',
    titlePartGradient: 'Estrategias de Pricing',
    titlePart2: '',
    description: 'Monitoreo de precios y promociones para ejecutar ajustes competitivos que protejan tus márgenes de beneficio y fortalezcan tu penetración en el mercado.',
    testimonials: [
      {
        rating: 5,
        text: '"Al automatizar el rastreo de precios de nuestra competencia, pudimos reaccionar un 80% más rápido ante las variaciones del mercado."',
        authorName: 'Camila R.',
        authorRole: 'Directora de Pricing, Retail',
        authorInitials: 'CR'
      },
      {
        rating: 5,
        text: '"El monitoreo de promociones dinámicas nos salvó los márgenes corporativos, es la herramienta fundamental de nuestro equipo comercial."',
        authorName: 'David L.',
        authorRole: 'Manager Financiero',
        authorInitials: 'DL'
      }
    ],
    features: [
      {
        icon: Target,
        title: 'Rastreo Dinámico',
        description: 'Monitorea catálogos completos para detectar alteraciones de precios en tiempo real.'
      },
      {
        icon: TrendingUp,
        title: 'Protección de Márgenes',
        description: 'Asegura la rentabilidad configurando estrategias automáticas frente a la fluctuación del sector.'
      },
      {
        icon: Shield,
        title: 'Análisis de Promociones',
        description: 'Detecta los ciclos de ofertas de tus rivales para contrarrestar su impacto a tiempo.'
      },
      {
        icon: BarChart,
        title: 'Reportajes Visuales',
        description: 'Consume dashboards consolidados que ilustran la comparativa directa entre tus productos y el mercado.'
      }
    ],
    needThisTitle: 'Cómo saber si necesitas Automatizar tus Estrategias de Pricing',
    needThisDescription: 'Si tu equipo comercial pierde incontables horas homologando el valor de mercado contra tus competidores manualmente mediante hojas de cálculo, y aún así siempre vas detrás de los descuentos... necesitas este servicio.',
    helpYouSub: 'Data Collection',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Nuestro servicio de Inteligencia de Precios se encarga de extraer, limpiar y estandarizar las fluctuaciones de tarifas en miles de plataformas para brindarte alertas accionables sobre tu catálogo.',
    helpYouList: [
      'Configuramos reglas de extracción sobre la competencia directa.',
      'Alertamos sobre fluctuaciones de precios o falta de stock.',
      'Maximizamos los márgenes de ganancia manteniendo competitividad.'
    ],
    ctaTitle: 'El poder del talento experto listo para proveerte las mejores estrategias de pricing',
    ctaDescription: '',
    faqs: [
      {
        question: '¿Qué es exactamente la Inteligencia de Precios o Pricing Scraping?',
        answer: 'Consiste en extraer de manera ética y automática los valores de venta, descriptores y disponibilidad de artículos desde plataformas públicas de competidores para analizarlos y ajustar tu propia estructura de costos y ofertas.'
      },
      {
        question: '¿Con qué frecuencia se actualizan los monitoreos?',
        answer: 'Puede configurarse desde actualizaciones mensuales hasta barridos por hora en periodos críticos (como Black Friday), asegurando un tiempo de reacción mínimo.'
      },
      {
        question: '¿A qué tipo de empresas beneficia este servicio?',
        answer: 'Retailers, fabricantes de bienes de consumo, e-commerce, hotelería y agencias de viaje que basan su ventaja competitiva en los tabuladores financieros del mercado directo.'
      }
    ]
  },
  'entrenamiento-de-ia': {
    slug: 'entrenamiento-de-ia',
    badge: 'AI Training',
    titlePart1: '',
    titlePartGradient: 'Entrenamiento de IA',
    titlePart2: '',
    description: 'Procesamiento masivo de sitios y bases de datos no estructuradas para alimentar, escalar y perfeccionar modelos de lenguaje y algoritmos de machine learning.',
    testimonials: [
      {
        rating: 5,
        text: '"Necesitábamos miles de interacciones y datasets multilingües limpios para nuestro LLM. AUTOScraping resolvió en semanas lo que prometía demorar años."',
        authorName: 'Fernando T.',
        authorRole: 'Lead Machine Learning Engineer',
        authorInitials: 'FT'
      },
      {
        rating: 5,
        text: '"Extraer corpus de texto para entrenar nuestro clasificador de sentimiento fue un proceso sin fricción, todo provisto en JSON perfectos."',
        authorName: 'Ana V.',
        authorRole: 'Cofundadora de Startup Deep Tech',
        authorInitials: 'AV'
      }
    ],
    features: [
      {
        icon: Database,
        title: 'Creación de Datasets Masivos',
        description: 'Recolección de millones de tokens y párrafos de miles de webs de manera paralela e ininterrumpida.'
      },
      {
        icon: Sparkles,
        title: 'Data Limpia y Parseada',
        description: 'Eliminamos ruido, ads, y bloatware HTML para entregar data cruda lista para pipelines de machine learning.'
      },
      {
        icon: Shield,
        title: 'Cumplimiento y Anonimización',
        description: 'Filtramos información sensible (PII) durante el proceso de extracción para proteger la privacidad.'
      },
      {
        icon: Zap,
        title: 'Escalabilidad Automática',
        description: 'Nuestra infraestructura sin servidores escala independientemente de si requieres 1,000 o 1,000,000 de consultas al día.'
      }
    ],
    needThisTitle: 'Cuándo apoyarte en nosotros para Entrenar tu IA',
    needThisDescription: 'Si tu equipo de científicos de datos pasa más del 60% de su tiempo limpiando código HTML mal formateado o ideando formas de saltar bloqueos para scrapear foros y noticias, es el momento de delegar la obtención del dato.',
    helpYouSub: 'AI & Data Engineering',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Proveemos la canalización (pipeline) absoluta de la colección y transformación de la información, estructurando inmensos bancos de conocimiento de foros, registros y papers que fungirán como base fundacional para tu próximo algoritmo.',
    helpYouList: [
      'Descubrimiento y navegación automática de directorios complejos.',
      'Extracción de imágenes, metadata y corpus lingüísticos.',
      'Entrega en repositorios seguros, directo al Data Lake.'
    ],
    ctaTitle: 'Alimenta el potencial de tus modelos de IA con nuestra factoría de datos',
    ctaDescription: '',
    faqs: [
      {
        question: '¿Qué tipo de datos pueden extraer para entrenar un modelo?',
        answer: 'Podemos procesar casi cualquier formato de origen: texto de noticias, posteos de foros, imágenes de galerías con su respectiva etiqueta, reviews en e-commerce y discusiones técnicas.'
      },
      {
        question: '¿Cómo garantizan que la información sea de calidad?',
        answer: 'Implementamos chequeos de redundancia, eliminación de lenguajes o caracteres corruptos, validación de integridad referencial y estructurado estricto (JSON/CSV) previamente acordado con tu equipo.'
      },
      {
        question: '¿Es posible adquirir datos de forma periódica o solo de una vez?',
        answer: 'Al tratarse de modelos iterativos, ofrecemos canales DaaS recurrentes donde nuestro orquestador alimenta continuamente tus bases de datos cada semana con conocimiento "fresco" del mercado.'
      }
    ]
  },
  'comparativa-de-vuelos': {
    slug: 'comparativa-de-vuelos',
    badge: 'Travel Insights',
    titlePart1: '',
    titlePartGradient: 'Comparativa de Vuelos',
    titlePart2: '',
    description: 'Extracción de tarifas aéreas, trayectos y rutas en tiempo real para optimizar la competitividad de agencias, OTAs y motores de reserva turística.',
    testimonials: [
      {
        rating: 5,
        text: '"El scrap de vuelos redujo el abandono en nuestro portal ofreciendo siempre la tarifa más agresiva contra la aerolínea bandera."',
        authorName: 'Sebastián M.',
        authorRole: 'CEO de Agencia Resellers',
        authorInitials: 'SM'
      },
      {
        rating: 5,
        text: '"Podemos auditar y encontrar disparidad de precios en tiempo real para millones de pares de ciudades. Un trabajo técnico brillante."',
        authorName: 'Valeria C.',
        authorRole: 'Analista de Turismo',
        authorInitials: 'VC'
      }
    ],
    features: [
      {
        icon: Plane,
        title: 'Scraping de Tarifas Dinámicas',
        description: 'Tracking de tarifas multi-ruta teniendo en cuenta variaciones por asiento, equipaje de mano y temporadas.'
      },
      {
        icon: BarChart,
        title: 'Mapeo de Rutas y Escalas',
        description: 'Análisis minucioso del comportamiento en la conexión de vuelos, permitiendo detectar hubs ineficientes.'
      },
      {
        icon: Zap,
        title: 'Velocidad en Extracción',
        description: 'Tiempos de respuesta ultra bajos necesarios para alimentar sistemas de reservas propensos al cambio contínuo.'
      },
      {
        icon: Shield,
        title: 'Anti-Bloqueos Premium',
        description: 'Infraestructura de proxies rotativos pesados (residential) y simulación humana para evitar los estrictos firewalls aéreos.'
      }
    ],
    needThisTitle: 'Cómo saber si necesitas el Scraping de Vuelos',
    needThisDescription: 'Consolidar precios de aerolíneas a través de agregadores de terceros puede resultar costoso, con márgenes limitados y data no siempre fidedigna. Si eres una OTA y buscas prescindir de costosas APIS, esta es la forma.',
    helpYouSub: 'Travel Data',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Extraemos y cruzamos datos desde los portales raíz de las aerolíneas o motores líderes. Estructuramos la duración, el costo y el tipo de vuelo mediante scripts listos para inyectar este conocimiento directo en la UI de tu software vacacional.',
    helpYouList: [
      'Agrupamiento de precios, clase, origen y destino de múltiples aerolíneas.',
      'Sorteo y bypass de sistemas CAPTCHA rígidos del sector.',
      'Sincronización en alta frecuencia según la estacionalidad del boleto.'
    ],
    ctaTitle: 'Automatiza tu recaudo tarifario y despega sobre la competencia',
    ctaDescription: '',
    faqs: [
      {
        question: '¿Qué sitios aéros o comparadores se pueden auditar?',
        answer: 'Virtualmente cualquiera. Nuestro equipo de ingenieros diseña integraciones en motores GDS clásicos y sobre todo de manera pública en portales directos de Low-Costs locales o buscadores masivos multinacionales.'
      },
      {
        question: '¿Cómo lidian con la variabilidad de precios según ubicación (geopricing)?',
        answer: 'Asignamos nodos de extracción geolocalizados para asegurar que el precio reflejado sea igual al experimentado por el usuario base de la zona donde operan tus esfuerzos de venta.'
      },
      {
        question: '¿Qué grado de latencia existe en las capturas de vuelos?',
        answer: 'Creamos sistemas paralelos de múltiples hilos que reducen la latencia enormemente. Aunque no sea una conexión API cruda, es lo ideal para construir reportes de tendencias, o sistemas de caching en tu backend.'
      }
    ]
  },
  'gestion-de-reputacion': {
    slug: 'gestion-de-reputacion',
    badge: 'Brand Sentiment',
    titlePart1: '',
    titlePartGradient: 'Gestión de Reputación',
    titlePart2: '',
    description: 'Recolección constante de reseñas, comentarios sociales y valoraciones en plataformas clave para el análisis de sentimiento y cuidado crítico de la imagen de tu corporación.',
    testimonials: [
      {
        rating: 5,
        text: '"Pasamos de responder reviews locales manualmente a tener un dashboard de mando general sobre el estado de marca en toda Latinoamérica."',
        authorName: 'Patricio F.',
        authorRole: 'Manager de Comunicación Corporativa',
        authorInitials: 'PF'
      },
      {
        rating: 5,
        text: '"El flujo constante de datos nos permitió detectar a tiempo alertas de crisis de producto basadas en comentarios de Twitter y Google Reviews."',
        authorName: 'Luciana D.',
        authorRole: 'Customer Success',
        authorInitials: 'LD'
      }
    ],
    features: [
      {
        icon: Heart,
        title: 'Análisis de Sentimiento',
        description: 'Estructuración de datos en positivo, negativo y neutral, facilitando la integración con modelos analíticos de lenguaje.'
      },
      {
        icon: Users,
        title: 'Multicanalidad',
        description: 'Monitoreo de foros nicho, portales como TrustPilot, Yelp y tiendas de E-commerce unificados en un esquema central.'
      },
      {
        icon: MessageSquare,
        title: 'Consolidación de Metadata',
        description: 'Obtención y cruzamiento de data del usuario y la respuesta existente de tu equipo de customer support.'
      },
      {
        icon: CheckSquare,
        title: 'Detección de Patrones',
        description: 'Al identificar un incremento anómalo de volumen sobre una queja en específico, ayudamos a prevenir daños irreversibles de PR.'
      }
    ],
    needThisTitle: 'Por qué priorizar la Gestión de la Reputación (Review Scraping)',
    needThisDescription: 'Si tienes cientos o miles de locaciones, productos y canales digitales que atender, mantener la trazabilidad manual de "qué dice el cliente" es utópico y una potencial bomba de tiempo.',
    helpYouSub: 'Data Collection',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Manejamos la compleja tarea técnica de conectarnos a decenas de foros y redes de valoración distintas, adaptándonos al diseño de cada uno, extrayendo las estrellas, comentarios, fechas e idiosincracia, para entregértelo en tu propio CRM unificado.',
    helpYouList: [
      'Alimentación centralizada del "Customer Response Team".',
      'Extracción segmentada por locaciones, sucursales y franquicias.',
      'Construcción de dashboards de salud de marca.'
    ],
    ctaTitle: 'Conoce todo lo que opinan tus clientes con nuestra infraestructura Data Factory',
    ctaDescription: '',
    faqs: [
      {
        question: '¿Qué información recolectan de una "review"?',
        answer: 'Recolectamos el título, contenido extendido del comentario, fecha de publicación, puntuación global (estrellas), cantidad de "me gustas", metadata de origen y usuario (si es público), y si se han adjuntado imágenes o validaciones de compra.'
      },
      {
        question: '¿Tienen soporte funcional para extraer sitios gubernamentales de reportes o reclamos?',
        answer: 'Sí, podemos construir scrapers a la medida orientados a plataformas de defensa al consumidor o foros del estado, dotando tu empresa de todos los posibles focos de incendio en la arena pública.'
      },
      {
        question: '¿Ofrecen el despliegue del Dashboard de Sentimiento o sólo la minería?',
        answer: 'A través de nuestro modelo de Data Squad podemos trabajar iterativa y cercanamente no solo entregando los datos (JSON/CSV), sino también diseñando la visualización mediante Power BI, Tableau u otras interfaces.'
      }
    ]
  },
  'tendencias-laborales': {
    slug: 'tendencias-laborales',
    badge: 'Recruitment Data',
    titlePart1: '',
    titlePartGradient: 'Tendencias Laborales',
    titlePart2: '',
    description: 'Rastreo profundo de ofertas de empleo (Job Boards) y estructuras salariales para nutrir plataformas de headhunting y analíticas de recursos humanos modernas.',
    testimonials: [
      {
        rating: 5,
        text: '"Crear el mapa de oportunidades salariales por industria habría tomado nuestra vida entera sin su proceso masivo y refinado de scraping."',
        authorName: 'Guillermo V.',
        authorRole: 'CEO Portal Laboral Local',
        authorInitials: 'GV'
      },
      {
        rating: 5,
        text: '"Monitorizamos el talento y perfiles que las Fortune 500 están activamente reclutando para anticipar sus lanzamientos tecnológicos."',
        authorName: 'Mónica A.',
        authorRole: 'Analista de Negocios Corporativos',
        authorInitials: 'MA'
      }
    ],
    features: [
      {
        icon: FileStack,
        title: 'Minería Mapeada de Vacantes',
        description: 'Trazabilidad de puestos, requerimientos crudos, locación de contratación y la urgencia reflejada en la oferta o volumen de candidatos.'
      },
      {
        icon: Building2,
        title: 'Escaneo Salarial (Benchmarking)',
        description: 'Recolección de las horquillas de sueldo base y prestaciones prometidas para construir estandarizaciones precisas sobre ingresos.'
      },
      {
        icon: Target,
        title: 'Skills Clave por Rol',
        description: 'Parseo de lenguaje natural (NLP) ligero para categorizar y estructurar los stacks tecnológicos u operacionales que demanda el mercado.'
      },
      {
        icon: Globe,
        title: 'Monitoreo Multi-región',
        description: 'Tracking específico del ecosistema remoto, comparando salarios nacionales con oportunidades que ofrecen husos horarios solapados y relocalización.'
      }
    ],
    needThisTitle: 'Descubre y anticipa el Capital Humano del mañana',
    needThisDescription: 'Contratar requiere tener certeza del entorno salarial. O tal vez cuentas con un portal de nicho y requieres agregar los miles de empleos de internet cada noche para abastecer tu sitio. De cualquier manera, requerirás minería constante a gran escala.',
    helpYouSub: 'Job Board Extraction',
    helpYouTitle: 'Cómo te ayudamos',
    helpYouDescription: 'Generamos flujos recurrentes de Data sobre empleos públicos (Scraping de ATS Systems, Directorios B2B y agregadores de búsqueda), proveyéndolos de manera unificada para eliminar duplicados del mercado laboral antes de llegar a tus manos.',
    helpYouList: [
      'Levantamiento masivo de datos transitorios sin falsos positivos de listados caídos.',
      'Sincronización de catálogos inmensos mediante APIs (DaaS).',
      'Normalización de descripciones caóticas hacia arquitecturas de registro (BDD).'
    ],
    ctaTitle: 'Eleva el valor de tu agencia y métricas laborales apoyándote en nuestro Data Squad',
    ctaDescription: '',
    faqs: [
      {
        question: '¿Qué sitios de empleo específicos extraen?',
        answer: 'Depende de tus necesidades empresariales. Podemos cubrir desde redes gigantes orientadas al ámbito profesional e integrando portales de carrera directos de las organizaciones objetivo.'
      },
      {
        question: '¿Miden la fecha de apertura y cierre real de las búsquedas laborales?',
        answer: 'Sí. Diseñamos nuestras lógicas para que guarden histórico o snapshots recurrentes y marquen una vacante (UUID temporal) como resuelta, midiendo con precisión cuántos días cuesta llenar una posición en la industria x o y.'
      },
      {
        question: '¿Cuales son algunos casos de uso comunes?',
        answer: 'Los más destacados: Proveer datos y alertas a empresas competidoras (ej: si rival contrata 10 expertos en Flutter, lanzarán App móvil); Cajas de consolidación que revenden listados unificados ("Agregadores de Puestos"); Market research y agencias gubernamentales analizando el estado general del empleo.'
      }
    ]
  }
};
