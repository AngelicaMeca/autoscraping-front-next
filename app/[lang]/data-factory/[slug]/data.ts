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

export function getServicesData(isEn: boolean): Record<string, ServiceData> {
  return {
  'generacion-de-leads': {
    slug: 'generacion-de-leads',
    badge: 'Lead Generation Platform',
    titlePart1: '',
    titlePartGradient: isEn ? 'Lead Generation' : 'Generación de Leads',
    titlePart2: '',
    description: isEn ? 'Perfect for companies that need to collect large volumes of prospect data or automate the lead verification process, reducing time and resources in campaigns.' : 'Perfecto para empresas que necesitan recopilar grandes volúmenes de datos de prospectos o automatizar el proceso de verificación de leads, reduciendo tiempo y recursos en campañas.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"This service completely changed how we manage partnerships, making our lead capture processes significantly faster and more efficient."' : '"Este servicio cambió rotundamente nuestra forma de gestionar alianzas, haciendo nuestros procesos de captación significativamente más rápidos y eficientes."',
        authorName: 'Sarah J.',
        authorRole: isEn ? 'Sales Director, Technology' : 'Directora de Ventas, Tecnología',
        authorInitials: 'SJ'
      },
      {
        rating: 5,
        text: isEn ? '"We experienced a huge leap thanks to automation in lead acquisition, allowing our team to exceed expectations."' : '"Experimentamos un gran salto gracias a la automatización en la obtención de leads, permitiendo a nuestro equipo superar las expectativas."',
        authorName: 'Mark D.',
        authorRole: isEn ? 'Lead Generation Executive' : 'Ejecutivo de Generación de Leads',
        authorInitials: 'MD'
      }
    ],
    features: [
      {
        icon: Target,
        title: isEn ? 'Updated contact data' : 'Datos de contacto actualizados',
        description: isEn ? 'Access accurate contact information to build a solid database for your sales efforts.' : 'Accede a información de contacto precisa para construir una base de datos sólida para tus esfuerzos de ventas.'
      },
      {
        icon: Zap,
        title: isEn ? 'Customizable criteria' : 'Criterios personalizables',
        description: isEn ? 'Define specific criteria to pre-qualify leads, ensuring extracted data aligns with your target market.' : 'Define criterios específicos para precalificar leads garantizando que los datos extraídos se alineen a tu mercado objetivo.'
      },
      {
        icon: Shield,
        title: isEn ? 'Proven time savings' : 'Ahorro de tiempo comprobado',
        description: isEn ? 'Automate collection, letting your sales team focus on closing deals instead of finding customers.' : 'Automatiza la recolección, permitiendo a tu equipo comercial enfocarse en cerrar tratos en lugar de buscar clientes.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Continuous integration' : 'Integración continua',
        description: isEn ? 'Receive data in a format that integrates seamlessly and natively into your CRM platform.' : 'Recibe datos en un formato que se integra de manera fluida y nativa a tu plataforma de CRM.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need Lead Scraping' : 'Cómo saber si necesitas el Scraping de Leads',
    needThisDescription: isEn ? 'If your company struggles generating leads manually, losing time and money on low-quality prospects that fail to convert, automating contact databases is the only way out.' : 'Si tu compañía sufre al generar clientes potenciales manualmente, perdiendo tiempo y dinero en prospectos de baja calidad que fallan en convertir, automatizar las bases de contactos es la única salida.',
    helpYouSub: isEn ? 'Our Approach' : 'Nuestro Enfoque',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'The contact scraping solutions we provide ethically and reliably extract highly relevant information about key decision-makers, organizing data in an ideal format.' : 'Las soluciones de scraping de contactos que proporcionamos extraen de manera ética y confiable la información altamente relevante sobre responsables en tomar decisiones clave, organizando los datos en un formato ideal.',
    helpYouList: isEn ? [
      'Automated prospect extraction',
      'Structured data ready to use',
      'Empower your sales force'
    ] : [
      'Extracción automatizada de prospectos',
      'Datos estructurados listos para utilizar',
      'Empodera a tu fuerza de ventas'
    ],
    ctaTitle: isEn ? 'Ready to transform your customer pipeline?' : '¿Listo para transformar tu flujo de clientes?',
    ctaDescription: isEn ? 'Start automating your outreach today and see instant results.' : 'Comienza a automatizar tu alcance hoy mismo y visualiza resultados instantáneos.',
    faqs: [
      {
        question: isEn ? 'What does automated Lead Generation involve?' : '¿Qué involucra la Generación de Leads automatizada?',
        answer: isEn ? 'It is the methodical process of extracting hyper-segmented contact information from digital profiles to pre-enrich base lists.' : 'Es el proceso de extraer metodológicamente la información de contacto hipersegmentada a partir de los perfiles digitales para pre-enriquecer listas bases.'
      },
      {
        question: isEn ? 'Who is the target audience for this service?' : '¿Quién es la audiencia objetivo de este servicio?',
        answer: isEn ? 'It is aimed at B2B marketing departments, direct sales forces, and growth agencies.' : 'Está dirigido a departamentos de marketing B2B, fuerzas de venta directa y agencias de crecimiento.'
      },
      {
        question: isEn ? 'What real benefits does it offer over buying databases?' : '¿Qué beneficios reales ofrece frente a comprar bases de datos?',
        answer: isEn ? 'It eliminates the risk of using recycled, competitor-saturated databases; the tailor-made information obtained is fresh, validated in real time, and precisely matched to your product\'s pain points.' : 'Elimina el riesgo de usar bases recicladas y saturadas por tu competidor; la información obtenida a medida es virgen, validada en tiempo real y dispuesta con exactitud a los dolores de tu producto.'
      }
    ]
  },
  'ai-web-scraping': {
    slug: 'ai-web-scraping',
    badge: 'AI Scraping',
    titlePart1: '',
    titlePartGradient: 'AI Web Scraping',
    titlePart2: '',
    description: isEn ? 'Perfect for companies that need to centralize large volumes of data or optimize automated workflows with Artificial Intelligence.' : 'Perfecto para compañías que precisan centralizar grandes volúmenes de datos u optimizar flujos automatizados con Inteligencia Artificial.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"Thanks to AI-powered extraction, we discarded hundreds of thousands of false positives in government records in minutes."' : '"Gracias a la extracción apoyada en IA, descartamos cientos de miles de falsos positivos en registros gubernamentales en minutos."',
        authorName: 'John D.',
        authorRole: isEn ? 'E-commerce Director' : 'Director E-commerce',
        authorInitials: 'JD'
      },
      {
        rating: 5,
        text: isEn ? '"The speed at which AUTOScraping implemented vision and refraction models on the bot gave us a time advantage over our competition."' : '"La rapidez con la que AUTOScraping implementó los modelos de visión y refracción sobre el bot nos dio la ventaja temporal ante nuestra competencia."',
        authorName: 'Elena M.',
        authorRole: 'Product Owner',
        authorInitials: 'EM'
      }
    ],
    features: [
      {
        icon: Zap,
        title: isEn ? 'Dynamic adaptability' : 'Adaptabilidad dinámica',
        description: isEn ? 'LLM-powered network navigation understands site schemas and survives even when the base webpage changes its design.' : 'La navegación en red alimentada con LLMs comprende el esquema del sitio y sobrevive incluso si la página web base cambia su diseño.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Enhanced parsing' : 'Parseo mejorado',
        description: isEn ? 'Chaotic data without CSS selectors is interpreted semantically, preventing breakages or reading failures.' : 'La data caótica sin selectores CSS es interpretada semánticamente previniendo roturas o fallos de lectura.'
      },
      {
        icon: Target,
        title: isEn ? 'QA reduction' : 'Reducción de QA',
        description: isEn ? 'Avoid losing entire sessions reviewing scripts manually thanks to the model\'s iterative analysis.' : 'Evita perder sesiones completas revisando scripts manualmente gracias al análisis iterativo del modelo.'
      },
      {
        icon: Shield,
        title: isEn ? 'Bypass and AI solutions' : 'Bypass y soluciones AI',
        description: isEn ? 'We solve hyper-complex captchas and logics by mimicking the cognitive patterns humans use when interacting.' : 'Solventamos lógicas y captchas hiper-complicos mimetizando los patrones cognitivos que usa el ser humano al interactuar.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need Classic or AI Scraping' : 'Cómo saber si necesitas el Scraping Clásico o con IA',
    needThisDescription: isEn ? 'If the portals you want to extract information from are blocked behind hard barriers (CAPTCHAs, Cloudflare, biometric rotators) and unpredictable designs (Canvas rendering, Dynamic JS), classic spiders will fail and you will need AI.' : 'Si los portales de los que quieres sacar la información están bloqueados detrás de barreras duras (CAPTCHAS, Cloudflare, rotadores biométricos) y diseños no-predecibles (Renderizado de Canvas, JS Dinámico), los spiders clásicos van a fallar y requerirás IA.',
    helpYouSub: 'AI Solutions',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'Our solution couples advanced models that simulate "human eyes", interpreting and capturing data even when a portal is hermetically sealed in source code.' : 'Nuestra solución se encarga de acoplar modelos avanzados que permiten simular "ojos humanos", interpretando y tomando los datos aunque un portal sea hermético en código fuente.',
    helpYouList: isEn ? [
      'Automation of repetitive tasks against changing pages.',
      'Constant real-time adaptation.',
      'Reading of injection-rendered data.'
    ] : [
      'Automatización de tareas repetitivas frente a páginas cambiantes.',
      'Adaptación constante en tiempo real.',
      'Lectura de datos inyectados por renderizado.'
    ],
    ctaTitle: isEn ? 'Leverage autonomous collection powered by the latest algorithms' : 'Aprovecha la recolección autónoma apalancada con los últimos algoritmos',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'What does Web Scraping with Artificial Intelligence bring?' : '¿Qué aporta hacer Web Scraping con Inteligencia Artificial?',
        answer: isEn ? 'It reduces dependence on selectors (xPaths, QuerySelectors) that break when the page creator changes them, requiring manual maintenance of the extraction script.' : 'Permite reducir la dependencia de selectores (xPaths, QuerySelectors) que al momento en que el creador de la página decide cambiarlos, el script de extracción explota y requiere mantenimiento manual.'
      },
      {
        question: isEn ? 'For what systems is AI-based Scraping essential?' : '¿Para qué sistemas es fundamental el uso de Scraping basado en IA?',
        answer: isEn ? 'Mainly for modern sites (SPAs) where content is hidden or heavily masked against old-school extraction robots.' : 'Principalmente para sitios modernos (SPAs) donde el contenido vive oculto o está fuertemente enmascarado frente a robots de extracción de la vieja escuela.'
      },
      {
        question: isEn ? 'Is implementing Artificial Intelligence in my bots more expensive?' : '¿Es más costoso implementar Inteligencia Artificial en mis bots?',
        answer: isEn ? 'It involves a slightly higher compute load, but in the medium term generates exponential savings due to zero need for technical maintenance against typical bot code breakage.' : 'Involucra una carga por computación ligeramente mayor, pero a mediano plazo genera ahorros exponenciales debido a la nula necesidad de mantenimiento técnico frente a la rotura del código habitual de un bot.'
      }
    ]
  },
  'extraccion-de-linkedin': {
    slug: 'extraccion-de-linkedin',
    badge: 'LinkedIn',
    titlePart1: '',
    titlePartGradient: isEn ? 'LinkedIn Extraction' : 'Extracción de LinkedIn',
    titlePart2: '',
    description: isEn ? 'Perfect for businesses looking to collect professional data or automate B2B lead generation, reducing operational hours.' : 'Perfecto para negocios que buscan coleccionar datos profesionales o automatizar la generación de leads B2B reduciendo horas operativas.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"We were able to rebuild the entire org chart of the agencies we wanted to sell to. LinkedIn Web Scraping was the can-opener for our sales teams."' : '"Pudimos reconstruir el organigrama entero de las agencias a quienes queríamos vender. LinkedIn Web Scraping fue el abrelatas de nuestros equipos comerciales."',
        authorName: 'Carlos A.',
        authorRole: isEn ? 'Recruitment Industry' : 'Industria de Reclutamiento',
        authorInitials: 'CA'
      },
      {
        rating: 5,
        text: isEn ? '"The constant flow of organized data saved us entire weeks blocked in manual prospecting and building Excel databases."' : '"El flujo constante de datos organizados nos ahorró semanas completas bloqueadas en prospección manual y armados de bases en Excel."',
        authorName: 'Fabiola T.',
        authorRole: isEn ? 'B2B Marketing CEO' : 'CEO de Marketing B2B',
        authorInitials: 'FT'
      }
    ],
    features: [
      {
        icon: UserCheck,
        title: isEn ? 'Profile extraction (MQLs)' : 'Extracción de perfiles (MQLs)',
        description: isEn ? 'Extract with high precision job titles, areas, and public corporate emails of LinkedIn members matching your ideal roles (B2B).' : 'Extrae con alta precisión cargos, áreas y correos públicos corporativos de miembros de LinkedIn acorde a tus roles ideales (B2B).'
      },
      {
        icon: Users,
        title: isEn ? 'Organizational mapping' : 'Mapeo organizacional',
        description: isEn ? 'Build the complete corporate picture of a competitor or target organization based on their workforce size and growth.' : 'Construye la foto corporativa completa de un competidor u organización objetivo en base al tamaño de su fuerza laboral y crecimiento.'
      },
      {
        icon: Zap,
        title: isEn ? 'Historical and updated data' : 'Data histórica y actualizada',
        description: isEn ? 'Capture educational and career timelines to profile whether a prospect perfectly fits the service you plan to offer.' : 'Captura cronologías educativas y laborales para perfilar si el prospecto calza perfectamente con el servicio que planeas ofrecerle.'
      },
      {
        icon: Shield,
        title: isEn ? 'Perfect structure' : 'Estructura perfecta',
        description: isEn ? 'We provide clean, sanitized dumps of search listings, directly in the format your analytics platform demands.' : 'Proveemos volcados ordenados y saneados de listados de búsqueda, directo al formato que demande tu plataforma analítica.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need to Automate on LinkedIn' : 'Cómo saber si precisas Automatizar sobre LinkedIn',
    needThisDescription: isEn ? 'If your B2B team still depends on manual copy-pasting of titles into a CRM, arriving late to investment rounds or losing against fast commercial follow-ups; our dedicated LinkedIn scraping belongs to you.' : 'Si tu equipo B2B todavía depende de copias y pegues manuales de cargos hacia un CRM, llegando tarde a las rondas de inversión o perdiendo frente al seguimiento comercial rápido; nuestro scraping dedicado de LinkedIn te pertenece.',
    helpYouSub: isEn ? 'B2B Data' : 'Data B2B',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'Our service intercedes and automates the tedium of prospecting, providing you with hundreds or thousands of qualified LinkedIn leads, building competitive insight dashboards or directly integrating the feed into your systems.' : 'Nuestro servicio intercede y automatiza el tedio de la prospección, proporcionándote cientos o miles de leads cualificados de LinkedIn, armando tableros de insights competitivos o integrando directamente el feed a tus sistemas.',
    helpYouList: isEn ? [
      'Bulk export of companies and individual profiles.',
      'Bypassing rigid search limits of the parent portal.',
      'Seamless and scheduled DaaS integration.'
    ] : [
      'Exportación en volumen de empresas y perfiles individuales.',
      'Sorteo de límites de búsqueda rígidos del portal madre.',
      'Integración DaaS fluida y programada.'
    ],
    ctaTitle: isEn ? 'Multiply the impact of your Outreach with Data Factory' : 'Multiplica el impacto de tu Outreach apoyándote en Data Factory',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'What exactly is LinkedIn Data Extraction?' : '¿Qué es exactamente la Extracción de Datos de LinkedIn?',
        answer: isEn ? 'It is the automated methodology for processing and grouping large lists of corporate results, educational histories, professional profiles, and job postings on the network for analytical or commercial purposes.' : 'Es la metodología autómata para procesar y agrupar grandes listados de resultados corporativos, historiales educativos, perfiles profesionales y vacantes publicadas en la red con motivo analítico o comercial.'
      },
      {
        question: isEn ? 'Which departments benefit primarily?' : '¿Qué tipo de departamentos se benefician primordialmente?',
        answer: isEn ? 'Essential for areas focused on account-based marketing, headhunter agencies, and B2B Business Intelligence analysts.' : 'Fundamental para áreas orientadas a account-based marketing, agencias headhunters y analistas de Business Intelligence B2B.'
      },
      {
        question: isEn ? 'Is it more profitable than LinkedIn Sales Navigator or other solutions?' : '¿Es más rentable que LinkedIn Sales Navigator u otras soluciones?',
        answer: isEn ? 'Unlike direct UI tools, we deliver programmatic raw data. You don\'t need teams sitting hours using our software; you simply receive master databases ready and pre-digested.' : 'A diferencia de herramientas de UI directa, nosotros entregamos raw data programática. No precisas equipos sentados horas usando nuestro software, simplemente recibes las bases maestras listas y pre-digeridas.'
      }
    ]
  },
  'monitoreo-de-airbnb': {
    slug: 'monitoreo-de-airbnb',
    badge: 'Airbnb',
    titlePart1: '',
    titlePartGradient: isEn ? 'Airbnb Monitoring' : 'Monitoreo de Airbnb',
    titlePart2: '',
    description: isEn ? 'Essential for proptech firms, urban hosting companies, and hotel managers who need to audit the colossal real estate volume and anticipate the pricing matrix in real time.' : 'Esencial para firmas proptechs, hostings urbanos y managers hoteleros que necesitan auditar el colosal volumen inmobiliario y anticipar la matriz tarifaria en tiempo real.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"Being able to track in parallel the rate, hidden discount, or vacancy of our direct competitors on the block completely transformed our RevPAR."' : '"Poder trazar paralelamente la tarifa, descuento escondido o vacancia de nuestros competidores directos en la cuadra transformó el RevPAR por completo."',
        authorName: 'Maria C.',
        authorRole: isEn ? 'Asset Manager Proptech' : 'Asset Manager Proptech',
        authorInitials: 'MC'
      },
      {
        rating: 5,
        text: isEn ? '"The occupancy and rate reports have been gold dust for knowing when to aggressively scale prices during off-seasons."' : '"Los reportes de ocupación y tarifas nos han resultado oro en polvo para saber cuando escalar el precio agresivamente durante temporadas muertas."',
        authorName: 'James P.',
        authorRole: isEn ? 'Real Estate Investment Fund' : 'Fondo Inversor Real Estate',
        authorInitials: 'JP'
      }
    ],
    features: [
      {
        icon: BarChart,
        title: isEn ? 'Profitability analysis' : 'Análisis de rentabilidad',
        description: isEn ? 'Daily capture of reviews, property scores, policies, and guest profiles.' : 'Captura diaria de reviews, puntuación de propiedades, políticas y perfiles de huéspedes.'
      },
      {
        icon: Target,
        title: isEn ? 'Competitor radar' : 'Radar de competidores',
        description: isEn ? 'Monitor competitive range, undervalued listings, and top hosts in the city by mapping their seasonal calendar.' : 'Vigila el rango competitivo, listados subvaluados y host principales de la ciudad mapeando su calendario estacional.'
      },
      {
        icon: Zap,
        title: isEn ? 'Price alerts' : 'Alertas de precios',
        description: isEn ? 'Visualize demand spikes based on alerts about general rate variability at 1, 3, or 6 months view for a city.' : 'Visualiza picos de demanda según las alertas sobre variabilidad general de las tarifas a 1, 3 o 6 meses vistas de una ciudad.'
      },
      {
        icon: Shield,
        title: isEn ? 'Integrated formats' : 'Formatos integrados',
        description: isEn ? 'Tabular data can cross your accounting systems natively to update prices dynamically.' : 'Los datos tabulares pueden cruzar tus sistemas contables de forma nativa para actualizar precios dinámicamente.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need automatic tracking on Airbnb' : 'Cómo saber si requieres el tracking automático en Airbnb',
    needThisDescription: isEn ? 'If you can\'t answer what the real market rates were last month around your complex, or why the competition was 100% full while your place sat vacant... you\'re operating blind. AUTOScraping solves this.' : 'Si no puedes responder cuáles fueron las tarifas reales de mercado el último mes en la redonda de tu complejo, ni por qué la competencia estuvo 100% full mientras tu lugar vacante... estás operando a ciegas. AUTOScraping resuelve esto.',
    helpYouSub: isEn ? 'Proptech Data' : 'Data Proptech',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We configure dense programmatic extraction networks (Scraping) on Airbnb, mapping geo-referenced listings, reviews, and calendars to give you the final snapshot of how tenants behave and what prices they accept.' : 'Configuramos redes densas de extracción programática (Scraping) sobre Airbnb mapeando listados, reviews y calendarios georrefenciados para ofrecerte la radiografía final de cómo se comportan los inquilinos y qué precios aceptan.',
    helpYouList: isEn ? [
      'Daily tracking of competitor nightly prices.',
      'Deep analytics (Occupancy, Estimated RevPAR, Rules).',
      'Comment mining to identify neglected niches.'
    ] : [
      'Seguimiento diario de precios nocturnos de competidores.',
      'Analíticas profundas (Ocupación, RevPAR estimado, Reglas).',
      'Minado de comentarios para identificar nichos descuidados.'
    ],
    ctaTitle: isEn ? 'The power of expert talent ready to boost your tourism operations' : 'El poder del talento experto listo para potenciar tus operaciones turísticas',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'What exactly is Airbnb Data Extraction?' : '¿Qué es exactamente la Extracción de Datos en Airbnb?',
        answer: isEn ? 'It is the methodical process of traversing the public property inventory, processing their interlinked rates (season/weekends) and status (occupied/free) to understand microeconomic trends.' : 'Es el proceso metodológico de recorrer el inventario público de propiedades, procesando sus tarifas interconectadas (temporada/fines de semana) y estado (ocupado/libre) para comprender tendencias microeconómicas.'
      },
      {
        question: isEn ? 'What would a hotel agency or proptech use this for?' : '¿Para qué usaría esto una agencia hotelera o proptech?',
        answer: isEn ? 'Basically: "Dynamic Pricing". If the city is surprisingly saturated on a weekend due to an unmapped event, automated reading will report it so you can raise rates instantly or identify the month\'s dominant search profile.' : 'Básicamente: "Dynamic Pricing". Si la ciudad está sorpresivamente saturada un fin de semana a razón de un evento no mapeado, la lectura automatizada se encargará de reportarlo para que puedas subir tarifas al instante o identificar el perfil de búsqueda dominador del mes.'
      },
      {
        question: isEn ? 'What are the advantages of structured data vs. canned dashboards?' : '¿Qué ventajas tienen los datos estructurados vs dashboards enlatados?',
        answer: isEn ? 'By providing raw and curated Data in private Datawarehouses, you have the freedom to design your own internal dashboards mixing your private revenue flow against external results, without analytically depending on a third-party SaaS.' : 'Al brindarte Data Cruda y curada en Datawarehouses privados, tienes la libertad de diseñar tus propios tableros internos con la mezcla de tu flujo de ingresos privados contra los resultados ajenos; y no depender analíticamente del SaaS de un tercero.'
      }
    ]
  },
  'registro-de-google-maps': {
    slug: 'registro-de-google-maps',
    badge: 'Google Maps',
    titlePart1: '',
    titlePartGradient: isEn ? 'Google Maps Registration' : 'Registro de Google Maps',
    titlePart2: '',
    description: isEn ? 'Perfect for agencies and franchises that need to automate location intelligence, obtaining reviews, hours, and ratings of local businesses at global scale.' : 'Perfecto para agencias y franquicias que necesitan automatizar la inteligencia locacional, obteniendo reviews, horarios y ratings del comercio local a escala global.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"This service helped us identify key local companies for partnerships, making our expansion into Mexico much more accurate and efficient."' : '"Este servicio nos ayudó a identificar empresas locales clave para alianzas, haciendo nuestra expansión a México mucho más certera y eficiente."',
        authorName: 'Sandra L.',
        authorRole: isEn ? 'Expansion Manager, Tourism' : 'Manager de Expansión, Turismo',
        authorInitials: 'SL'
      },
      {
        rating: 5,
        text: isEn ? '"The processed Google Maps data allowed us to map the locations and customer density of our competition, improving radial logistics."' : '"Los datos procesados de Google Maps nos permitieron mapear las ubicaciones y densidad de clientes de nuestra competencia, mejorando la logística radial."',
        authorName: 'Alex T.',
        authorRole: isEn ? 'Logistics and Last Mile' : 'Logística y Última Milla',
        authorInitials: 'AT'
      }
    ],
    features: [
      {
        icon: Target,
        title: isEn ? 'Competitor analysis' : 'Análisis de competidores',
        description: isEn ? 'Extract local competitor information (Reviews, Stars, Hours, Phones) to understand market conditions.' : 'Extrae información de rivales locales (Reviews, Estrellas, Horarios, Teléfonos) para entender las condiciones del mercado.'
      },
      {
        icon: Globe,
        title: isEn ? 'Potential customer mapping' : 'Mapeo de clientes potenciales',
        description: isEn ? 'Build highly segmented cold lists of physical businesses based on direct Maps coordinates.' : 'Construye listas frías altamente segmentadas de negocios físicos basados en las coordenadas directas de Maps.'
      },
      {
        icon: Zap,
        title: isEn ? 'Opening updates' : 'Actualizaciones de apertura',
        description: isEn ? 'Identify and alert which locations opened or permanently closed in your sector each month.' : 'Identifica y alerta sobre qué locaciones abrieron o cerraron permanentemente en tu sector cada mes.'
      },
      {
        icon: Shield,
        title: isEn ? 'Address cleansing (GCP)' : 'Limpieza de direcciones (GCP)',
        description: isEn ? 'We format and cross-check pins against Google Cloud Platform databases for uniformity.' : 'Formateamos y cruzamos los pines contra las bases de datos de Google Cloud Platform para uniformidad.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need Google Maps Scraping' : 'Cómo saber si necesitas el Scraping de Google Maps',
    needThisDescription: isEn ? 'If your B2B team manually navigates the map searching for agencies, restaurants, or hospitals to build a commercial route, losing days in the process; automating polygon extraction solves your problem.' : 'Si tu equipo B2B navega por el mapa buscando agencias, restaurantes u hospitales manualmente para armar una ruta comercial, perdiendo días en el proceso; automatizar dicha extracción de polígonos resuelve tu problema.',
    helpYouSub: isEn ? 'Georeferenced Data' : 'Data Georreferenciada',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'Our Maps extraction service processes coordinates of target cities, simulating explorations to retrieve categorized businesses, providing databases full of phone numbers, websites, and reviews.' : 'Nuestro servicio de extracción sobre Maps procesa las coordenadas de las ciudades objetivo, simulando exploraciones para recuperar negocios categorizados, proveyendo bases repletas de números web y opiniones.',
    helpYouList: isEn ? [
      'Extraction within specific polygons or zip codes.',
      'Reading of reviews and urban metadata.',
      'Building infallible B2B cold audiences.'
    ] : [
      'Extracción dentro de polígonos o códigos postales concretos.',
      'Lectura de opiniones y metadata urbana.',
      'Construcción de audiencias B2B frías infalibles.'
    ],
    ctaTitle: isEn ? 'Boost your hyper-local growth with our geographic intelligence' : 'Impulsa tu crecimiento hiper-local con nuestra inteligencia geográfica',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'What specific information do you extract from Google Maps?' : '¿Qué información específica extraen de Google Maps?',
        answer: isEn ? 'We extract business title, category, overall rating, total reviews, unified postal address, linked website, commercial phone numbers, and business hours.' : 'Extráemos título del negocio, categoría, nota global, total de reviews, dirección postal unificada, página web ligada, números de teléfono comerciales y el horario de atención.'
      },
      {
        question: isEn ? 'Is there a way to extract comments within each business?' : '¿Hay forma de extraer los comentarios dentro de cada negocio?',
        answer: isEn ? 'Yes. Through deeper scripts (Deep-Crawling) we can download comment text, per-person stars, date, and the business response if available.' : 'Sí. A través de scripts más profundos (Deep-Crawling) podemos bajar el texto de los comentarios, las estrellas por persona, fecha y la respuesta del negocio si la hay.'
      },
      {
        question: isEn ? 'What is the latency for processing an entire city?' : '¿Cuál es la latencia de procesar una ciudad completa?',
        answer: isEn ? 'Depending on the breadth and population density of the search (e.g., "all restaurants in Madrid" vs "all cybersecurity companies in Buenos Aires"), collection takes an average of 24 to 48 hours.' : 'Dependiendo la amplitud y densidad poblacional de la búsqueda (ej: "todos los restaurantes de Madrid" frente a "Todas las empresas de ciberseguridad en Buenos Aires"), el recaudo toma en promedio 24 a 48 horas.'
      }
    ]
  },
  'web-scraping-automation': {
    slug: 'web-scraping-automation',
    badge: 'Automation',
    titlePart1: '',
    titlePartGradient: 'Web Scraping Automation',
    titlePart2: '',
    description: isEn ? 'Perfect for businesses that need to orchestrate repetitive mass extraction automations, permanently eliminating human dependency.' : 'Perfecto para negocios que necesitan orquestar automatizaciones repetitivas de extracción masiva desvinculando la dependencia humana para siempre.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"Automating our web collection, instead of manually outsourcing it every Friday, allowed us to build true Data-Driven schemes."' : '"Automatizar nuestra recolección web, en vez de tercerizarla manualmente cada viernes, nos permitió construir verdaderos esquemas Data-Driven."',
        authorName: 'Tom W.',
        authorRole: isEn ? 'CEO Content Operations' : 'CEO Operaciones de Contenido',
        authorInitials: 'TW'
      },
      {
        rating: 5,
        text: isEn ? '"We recovered speed, accuracy, and margin in our commercial offering. It is definitely the invisible key asset of our company."' : '"Recuperamos velocidad, exactitud y margen en nuestra oferta comercial. Definitivamente es el activo invisible clave de nuestra empresa."',
        authorName: 'Rachel S.',
        authorRole: isEn ? 'Growth & Entertainment' : 'Growth & Entertaiment',
        authorInitials: 'RS'
      }
    ],
    features: [
      {
        icon: Shield,
        title: isEn ? 'Zero human risk' : 'Cero riesgo humano',
        description: isEn ? 'Automated spiders don\'t copy the wrong field or take breaks; they ensure perpetual accuracy when capturing critical data.' : 'Los spiders automatizados no copian el campo equivocado ni descansan; aseguran exactitud perpetua al capturar data crítica.'
      },
      {
        icon: Zap,
        title: isEn ? 'Constant orchestration' : 'Orquestación constante',
        description: isEn ? 'We configure CRONs and pipelines (Airflow) where data ingestion runs in the background without requiring intervention.' : 'Configuramos CRONs y pipelines (Airflow) donde la ingesta de data transcurre por debajo sin demandar intervención.'
      },
      {
        icon: Target,
        title: isEn ? 'Customizable schedules' : 'Horarios personalizables',
        description: isEn ? 'Whether you need hourly updates (like the stock market) or Sunday nights, the system delivers without fail.' : 'Independientemente de si necesitas actualizaciones cada hora (como el mercado bursátil) o domingos en la noche, el sistema cumple a rajatabla.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Capital efficiency' : 'Eficiencia de Capital',
        description: isEn ? 'Assign the intellectual value of your engineers to innovating with analytics, delegating the burden of obtaining raw data to us.' : 'Asigna el valor intelectual de tus ingenieros a innovar con los analíticos, delegando el peso de conseguir el dato crudo a nosotros.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need DaaS extraction architectures' : 'Cómo saber si precisas de arquitecturas de extracción DaaS',
    needThisDescription: isEn ? 'If you have an army of interns transcribing tables to feed weekly analytics and everything breaks when columns change, then you need a formal scraper architecture.' : 'Si tienes un ejército de pasantes transcribiendo tablas para alimentar los analíticos semanales y todo arde cuando cambian las columnas, entonces necesitas arquitectura formal de scrapers.',
    helpYouSub: isEn ? 'Data Automation' : 'Data Automation',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We provide all the Data Factory engineering that connects tools, IP rotations, cloud databases, and injection scripts; building the pipeline from start to finish to your servers.' : 'Te proporcionamos toda la ingeniería de Data Factory que conecta herramientas, saltos de IP, bases en la nube y scripts inyectores; armando la tubería (Pipeline) de principio a fin hacia tus servidores.',
    helpYouList: isEn ? [
      'Robust self-managed infrastructure (Serverless).',
      'Concurrent flow configuration (Millions of daily requests).',
      'Elimination of the manual collection gap.'
    ] : [
      'Infraestructura robusta autogestionada (Serverless).',
      'Configuración de flujos concurrentes (Millones de peticiones diarias).',
      'Eliminación de la brecha de recolección manual.'
    ],
    ctaTitle: isEn ? 'Level up by turning data into the invisible engine of your profitability' : 'Sube al siguiente nivel transformando al dato en el motor invisible de tu rentabilidad',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'What exactly is Scraping Automation (DaaS)?' : '¿Qué es exactamente la Automatización de Scraping (DaaS)?',
        answer: isEn ? 'Data as a Service. It means consuming external information periodically via ready endpoints without worrying at all about how scripts bypass firewalls, blocks, or render the required injection to obtain them in the first place.' : 'Data as a Service. Es consumir la información externa periódicamente mediante endpoints listos sin preocuparte en absoluto en cómo los scripts libran firewalls, bloqueos, o renderizan la inyección requerida para conseguirlos en primera instancia.'
      },
      {
        question: isEn ? 'What corporations depend on this structure?' : '¿Qué corporaciones dependen de esta estructura?',
        answer: isEn ? 'From models that feed intelligence and recommendation engines, to massive logistics corporations that must audit global supply chains every night to function.' : 'Desde modelos que alimentan las inteligencias y motores de recomendación, hasta corporaciones masivas de logística que deben auditar cadenas mundiales cada noche para funcionar.'
      },
      {
        question: isEn ? 'Do you guarantee the "Uptime" or lifespan of connectors?' : '¿Garantizan el "Uptime" o vida útil de los conectores?',
        answer: isEn ? 'Yes. Through our "Data Squad" we build data health monitors. If the source portal changes dramatically, our alarms detect it and we intervene in record time to correct the pipeline and secure your data.' : 'Sí. A través de nuestro "Data Squad" construimos monitoreos de salud de datos. Si el portal fuente cambia drásticamente, nuestras alarmas lo detectan e intercedemos en tiempo récord para corregir la tubería y asegurar tus datos.'
      }
    ]
  },
  'metricas-financieras': {
    slug: 'metricas-financieras',
    badge: 'Financial Data',
    titlePart1: '',
    titlePartGradient: isEn ? 'Financial Metrics' : 'Métricas Financieras',
    titlePart2: '',
    description: isEn ? 'Critical for hedge funds, investors, and fintech firms that demand precise metrics on economic indicators constantly and automatically.' : 'Crítico para fondos de cobertura, inversionistas y firmas fintech que demandan métricas precisas sobre indicadores económicos de forma constante y automática.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"By automating the consumption of retail reports and stock market indicators from the Asian market, we were able to consolidate decisions with a three-hour lead." ' : '"Al automatizar el consumo de reportes e indicadores bursátiles minoristas del mercado asiático pudimos consolidar decisiones con tres horas de ventaja."',
        authorName: 'Laura T.',
        authorRole: isEn ? 'Investment Manager' : 'Manager de Inversiones',
        authorInitials: 'LT'
      },
      {
        rating: 5,
        text: isEn ? '"The uninterrupted flow of bond and rate fluctuations guaranteed us the creation of absolutely stellar forecasting estimates."' : '"El flujo ininterrumpido sobre la fluctuación de bonos y tasas nos garantizó la creación de estimativas (forecasting) absolutamente estelares."',
        authorName: 'Robert G.',
        authorRole: isEn ? 'Analytical Structural Fund' : 'Fondo Estructural Analítico',
        authorInitials: 'RG'
      }
    ],
    features: [
      {
        icon: BarChart,
        title: isEn ? 'Macroeconomic analysis' : 'Análisis macroeconómico',
        description: isEn ? 'Massive retrieval of balances, reports, and GDP indicators issued by government entities.' : 'Obtención masiva de balances, memorias e indicativos del PBI dictados por los entes gubernamentales.'
      },
      {
        icon: TrendingUp,
        title: isEn ? 'Intraday market monitoring' : 'Monitoreo bursátil intradía',
        description: isEn ? 'Ultra-fast (Low Latency) reading of asset status and indices on stock exchange portals.' : 'Lectura ultra rápida (Low Latency) del estado e índices de activos en portales de la bolsa.'
      },
      {
        icon: Target,
        title: isEn ? 'Crypto asset tracking' : 'Tracking de criptoactivos',
        description: isEn ? 'Collection of sentiment and public On-Chain metrics disseminated across dozens of informational forums and directories.' : 'Colección de sentimiento y métricas On-Chain públicas diseminadas a través de docenas de foros y directorios informativos.'
      },
      {
        icon: Shield,
        title: isEn ? 'Immaculate data' : 'Data inmaculada',
        description: isEn ? 'Robustly encrypted and channeled so that percentage values and currencies always preserve the expected state and format.' : 'Cifrado robusto y canalizado de manera tal que los valores porcentuales y divisas siempre preserven el estado y formato esperado.'
      }
    ],
    needThisTitle: isEn ? 'Why prioritize localized financial data collection' : 'Por qué priorizar el levantamiento de Data financiera localizada',
    needThisDescription: isEn ? 'If you rely exclusively on centralized market providers like Bloomberg that impose exorbitant costs, lacking certain regional and decentralized public bond indicators that you specifically require.' : 'Si dependes exclusivamente de proveedores de mercado centralizados como Bloomberg que imponen costos exorbitantes, careciendo además de ciertos indicativos regionales y de bonos públicos descentralizados que tú mismo requieres.',
    helpYouSub: isEn ? 'Data & Fintech' : 'Data y Fintech',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We generate persistent flows by silently connecting to any monetary entity or report, downloading PDFs, reading HTML, and serving it to your banking core as a fresh data service.' : 'Generamos flujos persistentes conectándonos silenciosamente sobre cualquier ente o reporte monetario, descargando PDFs, leyendo el HTML y sirviéndolo a tu core bancario como un servicio de data fresco.',
    helpYouList: isEn ? [
      'Engineering focused on algorithmic precision of values.',
      'Reading of assembly PDFs and local tax tabulators.',
      'Ensuring agile delivery vital for trends.'
    ] : [
      'Ingeniería enfocada en precisión algorítmica de los valores.',
      'Lectura de PDFs de asambleas y tabuladores fiscales locales.',
      'Aseguramiento de entrega ágil vital para las tendencias.'
    ],
    ctaTitle: isEn ? 'Conquer your market advantage with our analytical extraction' : 'Conquista tu ventaja en el mercado aprovechando nuestra extracción analítica',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'Where do you extract financial information from?' : '¿De dónde extraen la información financiera?',
        answer: isEn ? 'We connect bridges to regional central banks (Interest Rates, Exchange Rates), public stock platforms, auditing organizations that upload annual reports (SEC), and currency processors.' : 'Conectamos puentes hacia bancos centrales regionales (Tasas de Interés, Tipo de Cambio), plataformas accionarias públicas, organismos de auditoria que suben reportes anuales (SEC), y procesadores de divisas.'
      },
      {
        question: isEn ? 'What is deep financial scraping or referential OCR?' : '¿Qué es scraping financiero profundo u ORC referencial?',
        answer: isEn ? 'When a government document lives inside an image embedded within a PDF hidden behind an old URL; our engineers implement Optical Recognition (AI) to recover those numbers.' : 'Cuando el documento gubernamental vive dentro de una imagen incrustada dentro de un PDF escondido tras una URL antigua; nuestros ingenieros implementan Optical Recognition (IA) para recuperar esos números.'
      },
      {
        question: isEn ? 'Is it ethical/legal to web scrape stock or bond prices?' : '¿Es ético / legal hacer web scraping de precios de acciones o bonos?',
        answer: isEn ? 'Absolutely, as of today, and under general jurisprudence, collecting numerical data provided publicly on the internet with a crawler-friendly structure fully fits legitimate analytical use (Fair Use / Data Analytics).' : 'Absolutamente, a día de hoy, y bajo jurisprudencia general, recopilar datos numéricos provistos públicamente en internet con una estructura de rastreo amigable encaja totalmente en el uso legítimo analítico (Fair Use / Data Analytics).'
      }
    ]
  },
  'catalogos-de-e-commerce': {
    slug: 'catalogos-de-e-commerce',
    badge: 'Ecommerce Scraping',
    titlePart1: '',
    titlePartGradient: isEn ? 'E-commerce Catalogs' : 'Catálogos de E-commerce',
    titlePart2: '',
    description: isEn ? 'Perfect for commercial brands that need to manage massive inventory volumes and audit competitor catalogs by automating their decision-making.' : 'Perfecto para marcas comerciales que precisan de gestionar masivos volúmenes de inventario y auditar el catálogo de sus competidores automatizando su toma de decisiones.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"By automating competitor price and promotion tracking during seasonal events, we were able to offer tickets 3% more aggressively and sell out stock."' : '"Al automatizar el rastreo de precios y promociones de rivales en eventos de temporada, pudimos ofrecer tickets un 3% más agresivos y agotar stock."',
        authorName: 'Jenna F.',
        authorRole: isEn ? 'Head of E-commerce' : 'Head de E-commerce',
        authorInitials: 'JF'
      },
      {
        rating: 5,
        text: isEn ? '"Being able to monitor fluctuations in real time saved us from losing a 15% margin we weren\'t accounting for in external shipping costs."' : '"Poder monitorear las fluctuaciones en tiempo real nos salvó de perder un margen del 15% que no estabamos contemplando en costos de envío ajenos."',
        authorName: 'Mark K.',
        authorRole: isEn ? 'Growth Analyst' : 'Analista de Growth',
        authorInitials: 'MK'
      }
    ],
    features: [
      {
        icon: Target,
        title: isEn ? 'Price mapping' : 'Mapeo de precios',
        description: isEn ? 'Audit base prices, active promotions, and hidden deals of competitors to protect your penetration margin.' : 'Audita los precios base, promociones activas y ofertas ocultas de competidores para proteger tu margen de penetración.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Review analysis' : 'Análisis de reviews',
        description: isEn ? 'Extract hundreds of thousands of star ratings and complaints from competitor e-commerces to fuel your next product launches.' : 'Extrae cientos de miles de estrellitas y quejas desde los e-commerces competidores para nutrir tus próximos lanzamientos de producto.'
      },
      {
        icon: ShoppingCart,
        title: isEn ? 'Inventory monitoring' : 'Monitoreo de inventario',
        description: isEn ? 'Constant visibility on which SKUs frequently run out in other stores to increase safe stocking in yours.' : 'Visibilidad constante sobre qué SKUs se agotan frecuentemente en otras tiendas para incrementar el abastecimiento seguro en la tuya.'
      },
      {
        icon: Shield,
        title: isEn ? 'Clean metadata' : 'Metadata en limpio',
        description: isEn ? 'We dispatch curated data in a flat file containing ASIN, Category, Price, Photo, and Availability in tabular exact form.' : 'Despachamos los datos curados en un archivo plano conteniendo el ASIN, Categoría, Precio, Foto y Disponibilidad tabularmente exactos.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need to automatically track catalogs' : 'Cómo saber si precisas trackear catálogos automáticamente',
    needThisDescription: isEn ? 'If you spend thousands of dollars on analysts refreshing portals to manually find when your competition activates a promotion on shared categories, leaving you days behind... you need this service.' : 'Si gastas miles de dólares en analistas refrescando portales para encontrar de manera manual cuándo tu competencia activa una promoción sobre categorías compartidas, dejándote días en desventaja... necesitas este servicio.',
    helpYouSub: isEn ? 'E-commerce Data' : 'Data E-commerce',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'Our E-commerce Mapping service simultaneously navigates millions of product pages from leading brands, comparing prices and inventory to send you direct reports on how to maneuver.' : 'Nuestro servicio de E-commerce Mapeo navega millones de páginas de productos de las marcas líderes simultáneamente, comparando precios e inventario para enviarte reportes directos sobre cómo debes maniobrar.',
    helpYouList: isEn ? [
      'Immediate alert on stock or price changes.',
      'Technical bypass of massively shielded stores.',
      'Your structured listings ready to cross data.'
    ] : [
      'Alerta inmediata sobre cambios de stock o precio.',
      'Sorteo técnico de tiendas masivas fuertemente blindadas.',
      'Tus listados estructurados listos para cruzar datos.'
    ],
    ctaTitle: isEn ? 'Boost conversions by integrating an invisible engine that monitors your catalogs' : 'Sube las conversiones integrando un motor invisible que vigila tus catálogos',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'Which online stores can be extracted from?' : '¿De qué tiendas en línea se puede extraer información?',
        answer: isEn ? 'Technically any B2B/B2C Retail or Marketplace, including internationally controlled giants down to individual stores built on Shopify, Vtex, or Magento.' : 'Técnicamente de cualquier Retail o Marketplace B2B/B2C, incluyendo gigantes internacionales hiper controlados hasta tiendas particulares montadas sobre Shopify, Vtex, o Magento.'
      },
      {
        question: isEn ? 'Can you extract data from registrations or "Prices hidden"?' : '¿Consiguen extraer datos bajo registros o "Prices hidden"?',
        answer: isEn ? 'Yes. Our automations register bots and log them into the purchase flow with genuine profiles simulating a buyer\'s ubiquity, decrypting exclusive hidden discounts at cart or zipcode level.' : 'Sí. Nuestras automatizaciones se encargan de registrar bots y loggearlos dentro del flujo de compra con perfiles verdaderos simulando ubicuidad de un comprador, desencriptando descuentos ocultos exclusivos a nivel carrito o zipcode.'
      },
      {
        question: isEn ? 'At what speed do you recommend running this scraping?' : '¿Con qué velocidad recomiendan ejecutar este scraping?',
        answer: isEn ? 'In normal periods we suggest weekly category extractions. During events like Black Friday or Hot Sale we suggest programmatic scanning every 4-6 hours to enable Dynamic Pricing (automated algorithmic adjustment).' : 'En temporalidades normales sugerimos extracciones semanales por categoría. Durante eventos como Black Friday o Hot Sale sugerimos un escaneo programático cada 4-6 horas para posibilitar Dynamic Pricing (Ajuste algorítmico automatizado).'
      }
    ]
  },
  'insights-de-marketing': {
    slug: 'insights-de-marketing',
    badge: 'Marketing',
    titlePart1: '',
    titlePartGradient: isEn ? 'Marketing Insights' : 'Insights de Marketing',
    titlePart2: '',
    description: isEn ? 'Perfect for marketing teams that need to process large volumes of data or automate vital tasks, reducing campaign validation times by leveraging Web Scraping for Marketing.' : 'Perfecto para equipos de marketing que necesitan procesar grandes volúmenes de datos u automatizar tareas vitales, reduciendo tiempos de validación de campañas al apoyarse en el Web Scraping para Marketing.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"Web Scraping for Marketing transformed how we identify trends and competitor strategies, giving us a clear analytical advantage within the industry."' : '"El Web Scraping para Marketing transformó nuestra manera de identificar tendencias y estrategias de nuestra competencia, dándonos una clara ventaja analítica dentro de la industria."',
        authorName: 'Sofia M.',
        authorRole: isEn ? 'Growth Marketing Agency' : 'Agencia de Growth Marketing',
        authorInitials: 'SM'
      },
      {
        rating: 5,
        text: isEn ? '"We have used Web Scraping to automate our lead pre-enrichment, resulting in a very high-level conversion jump in cold emails."' : '"Hemos utilizado el Web Scraping para automatizar nuestro pre-enriquecimiento de leads resultando en un salto de conversión en correos en frío a un nivel altísimo."',
        authorName: 'James C.',
        authorRole: isEn ? 'B2B Platform' : 'Plataforma B2B',
        authorInitials: 'JC'
      }
    ],
    features: [
      {
        icon: Users,
        title: isEn ? 'Enhanced audience segmentation' : 'Segmentación de audiencia mejorada',
        description: isEn ? 'Access data from social networks and forums that let you assertively segment your audience and personalize mass emails.' : 'Accede a datos en redes y foros que te permiten segmentar asertivamente a tu audiencia y personalizar tus correos masivos.'
      },
      {
        icon: Target,
        title: isEn ? 'Competitor marketing strategies' : 'Estrategias de marketing de competidores',
        description: isEn ? 'Directly monitor your competitors\' efforts by extracting metadata from their ads and product descriptions.' : 'Monitorea directamente los esfuerzos de tus competidores extrayendo la metadata de sus anuncios y descripciones de producto.'
      },
      {
        icon: Zap,
        title: isEn ? 'Frequent updates' : 'Actualización frecuente',
        description: isEn ? 'Receive constantly refreshed data dumps to ensure your campaigns breathe relevant and current context.' : 'Recibe volcados de datos refrescados constantemente para asegurarte de que tus campañas transpiran un contexto relevante y actual.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Curated reports and dashboards' : 'Reportajes y dashboards curados',
        description: isEn ? 'We deliver informed, pre-digested dashboards focused on key metrics for your advertising initiative.' : 'Entregamos tableros informados y pre-digeridos centrados en las métricas clave para tu iniciativa publicitaria.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need Marketing Web Scraping' : 'Cómo saber si necesitas Web Scraping de Marketing',
    needThisDescription: isEn ? 'If your marketing department wastes weeks grouping competitor data in Excel sheets and manually tabulating audiences, automated Web Scraping strongly urges itself upon you.' : 'Si tu departamento de marketing desperdicia semanas agrupando datos de la competencia en Excels y tabulando audiencias manualmente, el Web Scraping automatizado te urge fuertemente.',
    helpYouSub: isEn ? 'Data & Campaigns' : 'Data y Campañas',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'Our dedicated team of engineers orchestrates the retrieval of social data, competitor advertising, and prices to give you real direction before launching or running ads online.' : 'Nuestro equipo dedicado de ingenieros orquesta la recuperación de datos sociales, publicidades ajenas y precios para darte la directriz real antes de lanzar o pautar online.',
    helpYouList: isEn ? [
      'Automate comparative dashboards on prices and ads.',
      'Mass collection of profiles and reviews scattered across the web.',
      'Empower your campaigns team by freeing them from manual searching.'
    ] : [
      'Automatizar tableros comparativos sobre precios y pautas.',
      'Obtención masiva de perfiles y opiniones regadas por la web.',
      'Empoderar a tu equipo de campañas liberándolos de la búsqueda manual.'
    ],
    ctaTitle: isEn ? 'Multiply your ROI and prospect conversion by backing your decisions with precise data' : 'Multiplica tu ROI y la conversión de prospectos respaldando tus decisiones con datos precisos',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'What does Web Scraping for the Marketing area cover?' : '¿Qué abarca el Web Scraping para el área de Marketing?',
        answer: isEn ? 'It consists of identifying, organizing, and presenting scattered data relating to consumption preferences, seasonal pricing, and competitive strategies to shape your next commercial initiative.' : 'Consiste en identificar, ordenar y presentar datos dispersos relativos a las preferencias de consumición, precios estacionales y estrategias competitivas para moldear tu próxima iniciativa comercial.'
      },
      {
        question: isEn ? 'Which industries benefit most from this?' : '¿Qué industrias se benefician mayoritariamente de esto?',
        answer: isEn ? 'From creative agencies that need to understand what is being discussed in forums before creating content, to Brand Managers of major brands auditing their competition before Black Friday.' : 'Desde agencias creativas que requieren entender de qué se habla en foros antes de crear contenido, hasta Brand Managers de grandes marcas que auditan a su competencia antes de Black Friday.'
      },
      {
        question: isEn ? 'What are the net advantages behind investing in this?' : '¿Cuáles son las ventajas netas detrás de invertir en esto?',
        answer: isEn ? 'Drastic risk mitigation. Instead of launching a product blindly assuming "who likes it and at what price they would pay," analytics tell you exactly at what price and where it is being paid today.' : 'Mitigación drástica del riesgo. En vez de lanzar un producto a ciegas asumiendo "a quién le gusta y a qué precio pagaría", la analítica te dice exactamente a cuánto y dónde lo están pagando hoy mismo.'
      }
    ]
  },
  'indexacion-inmobiliaria': {
    slug: 'indexacion-inmobiliaria',
    badge: 'Real Estate',
    titlePart1: '',
    titlePartGradient: isEn ? 'Real Estate Indexing' : 'Indexación Inmobiliaria',
    titlePart2: '',
    description: isEn ? 'Perfect for real estate agents, franchises, or investment funds that need to daily track the value of properties listed on leading portals to capitalize on market volume.' : 'Perfecto para agentes, franquicias o fondos inversores inmobiliarios que precisan trackear diariamente el valor de las propiedades publicadas dentro de los portales líderes para capitalizar el volumen del mercado.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"We were able to index all our competitors\' properties around Florida and predict when the market was under imminent recession, selling with high margin in time."' : '"Pudimos indexar todas las propiedades de nuestros competidores alrededor de Florida y predecir cuándo el mercado estaba bajo una recesión inminente, vendiendo con alto margen a tiempo."',
        authorName: 'Maria C.',
        authorRole: isEn ? 'Real Estate Fund Manager' : 'Gestor Fondo Real Estate',
        authorInitials: 'MC'
      },
      {
        rating: 5,
        text: isEn ? '"The reports on mortgage market trends and variations we managed to structure allowed us to invest without risk in the pool."' : '"Los reportes de la tendencia del mercado hipotecario y las variaciones que conseguimos estructurar nos permitieron invertir sin riesgo con el pool."',
        authorName: 'James P.',
        authorRole: isEn ? 'Real Estate Family Office' : 'Family Office Inmobiliario',
        authorInitials: 'JP'
      }
    ],
    features: [
      {
        icon: TrendingUp,
        title: isEn ? 'Price and availability monitoring' : 'Monitoreo de precios y disponibilidad',
        description: isEn ? 'Get daily updated valuation metrics and listing status to support decisions.' : 'Obtén métricas de tasación y estatus de los listados actualizados a diario para fundamentar decisiones.'
      },
      {
        icon: Target,
        title: isEn ? 'Competitive inventory analysis' : 'Análisis de inventario competitivo',
        description: isEn ? 'Discover which locations, property types, or exact square meters your competitors offer regularly.' : 'Descubre qué ubicaciones, tipo de propiedades o metros cuadrados exactos ofertan tus competidores recurrentemente.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Rental patterns (Market Trends)' : 'Patrones de renta (Market Trends)',
        description: isEn ? 'Correlate rental policies and variability in direct returns by ZIP Code or neighborhood of listings.' : 'Correlaciona las políticas de alquiler y la variabilidad en los retornos directos según el ZIP Code o Barrio de los listados.'
      },
      {
        icon: Shield,
        title: isEn ? 'CRM integrations (MLS)' : 'Integraciones a CRMs (MLS)',
        description: isEn ? 'We supply connections and exports so you can immediately feed your logistics/MLS system.' : 'Suministramos conexiones y exportables para que alimentes de inmediato tu sistema logístico / MLS.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need Real Estate analytics' : 'Cómo saber si necesitas analítica en Real Estate',
    needThisDescription: isEn ? 'If your franchise agents must manually cross comparables for hours just to appraise a property, while the real investment opportunity (Deal) reaches competitors first.' : 'Si los agentes de tu franquicia deben entrar a mano cruzando comparables por horas enteras solo para tasar una propiedad, mientras la verdadera oportunidad de inversión (Deal) le llega antes a la competencia.',
    helpYouSub: isEn ? 'Proptech Data' : 'Proptech Data',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We collect the entire universe of listings from real estate portals and aggregators, processing latitude, sqm, description, and prices to deliver a Datawarehouse ready to filter and target.' : 'Recolectamos el universo entero de publicaciones provenientes de portales inmobiliarios y agregadores, procesando la latitud, m2, descripción y precios para entregarte un Datawarehouse listo para filtrar y atacar.',
    helpYouList: isEn ? [
      'Parallel capture of millions of listings from public portals.',
      'Reading of amenities and seller profiles.',
      'Clear dashboards and comparatives without appraisal subjectivity.'
    ] : [
      'Captura paralela de millones de listados en portales públicos.',
      'Lectura de amenidades y perfiles de los vendedores.',
      'Dashboards y comparativas claras sin subjetividades al tasar.'
    ],
    ctaTitle: isEn ? 'Gain your real estate advantage by ensuring decision-making with pure data' : 'Adquiere tu ventaja en el sector inmobiliario asegurándote la toma de decisiones con datos puros',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'What can be extracted from common real estate portals?' : '¿Qué se puede extraer desde los portales inmobiliarios comunes?',
        answer: isEn ? 'We commonly extract the daily listed price (identifying subtle price drops over the month), sales history, covered sqm, listing agent, photographs, and all metadata attached to the online listing.' : 'Comúnmente extraemos el precio ofertado a diario (identificando caídas sutiles de precio con el paso del mes), historial de ventas, M2 cubiertos, agente a cargo, fotografías, y toda la metadata adjunta al aviso en línea.'
      },
      {
        question: isEn ? 'Who is Real Estate Indexing aimed at?' : '¿A quiénes va dirigida la Indexación Inmobiliaria?',
        answer: isEn ? 'Trusts seeking undervalued opportunities (Flipping house), large proptech funds, banks evaluating appraisals, and traditional agencies with enormous real estate flow (RE/MAX).' : 'Fideicomisos en búsqueda de oportunidades subvaluadas (Flipping house), grandes fondos proptech, bancos evaluando tasaciones y agencias tradicionales de enorme flujo inmobiliario (RE/MAX).'
      },
      {
        question: isEn ? 'What are the cardinal advantages of this service?' : '¿Cuáles son las ventajas cardinales de este servicio?',
        answer: isEn ? 'Identifying arbitrages. When the market dictates X amount per sqm, our algorithm and work can detect an offer 15% below before the general buyer notices it, allowing you to buy it before anyone else.' : 'Identificar arbitrariedades. Cuando el mercado dicta X monto el m2, nuestro algoritmo y tabajos pueden detectar una oferta 15% por debajo antes que el comprador general la note, permitiendo comprarla antes que nadie.'
      }
    ]
  },
  'auditoria-seo': {
    slug: 'auditoria-seo',
    badge: 'Scraping for SEO',
    titlePart1: '',
    titlePartGradient: isEn ? 'SEO Audit' : 'Auditoría SEO',
    titlePart2: '',
    description: isEn ? 'Perfect for brands or agencies with aggressive digital presence that need to programmatically audit millions of URLs, meta tags, and competitor clusters.' : 'Perfecto para marcas o agencias con presencia digital agresiva que requieren auditar programáticamente millones de URLs, meta tags y clústers de competidores.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"By retrospectively analyzing how our rival\'s top news pieces were linked (Backlinks), we rebuilt our SEO matrix capturing their traffic in three weeks."' : '"Al analizar retrospectivamente cómo se enlazaban las noticias top de nuestro rival (Backlinks), reconstruimos nuestra matriz SEO acaparando su tráfico en tres semanas."',
        authorName: 'Michael S.',
        authorRole: isEn ? 'SEO Lead E-commerce' : 'SEO Lead E-commerce',
        authorInitials: 'MS'
      },
      {
        rating: 5,
        text: isEn ? '"The daily information provided on trending searches (Trends) gave us the opportunity to modify our portal H1s on-the-fly, gaining organic volume."' : '"La información diaria provista sobre las búsquedas tendencia (Trends) nos entregó la oportunidad de modificar on-the-fly los H1 de nuestros portales ganando volumen orgánico."',
        authorName: 'Jessica K.',
        authorRole: isEn ? 'National News Outlet' : 'Diario Noticiario Nacional',
        authorInitials: 'JK'
      }
    ],
    features: [
      {
        icon: Target,
        title: isEn ? 'Clandestine backlink audit' : 'Auditoría de backlinks clandestinos',
        description: isEn ? 'Systematically extract hidden incoming and outgoing link connections (referrals) to understand the push force.' : 'Extrae sistemáticamente las conexiones de links entrantes y salientes ocultos (referrals) para entender la fuerza de empuje.'
      },
      {
        icon: Shield,
        title: isEn ? 'Periodic content monitoring' : 'Monitoreo periódico de contenido',
        description: isEn ? 'Track whether direct competitors alter their keyword density in real time and adjust your positioning against their attacks.' : 'Traquea si competidores directos alteran la densidad de sus palabras claves en tiempo real y ajusta tu posicionamiento ante sus embates.'
      },
      {
        icon: TrendingUp,
        title: isEn ? 'Trend and behavior search' : 'Búsqueda de tendencias y comportamiento',
        description: isEn ? 'Collect hourly Top 100 SERP results from major search engines to dictate the most sought-after articles.' : 'Colecciona el resultado (Top 100 SERP) proveniente de los principales motores por hora para dictaminar los artículos más codiciados.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Introspective analysis (Tech SEO)' : 'Análisis introspectivo (Tech SEO)',
        description: isEn ? 'We can crawl and index your own portal to verify there are no missing tags, 404s, or massive navigation loops.' : 'Podemos rastrear e indexar tu propio portal para corroborar que no existen etiquetas faltantes, 404 ni bucles (loops) de navegación masivos.'
      }
    ],
    needThisTitle: isEn ? 'When to adopt crawling and scraping for strategic SEO' : 'Cuándo adoptar el rastreo y scraping para SEO estratégico',
    needThisDescription: isEn ? 'If your traffic drops with Google updates without warning; or if your agency wastes fortunes crawling directories with low-capacity tools instead of owning the raw tactical map to generate their own semantic artificial intelligence.' : 'Si tu tráfico cae ante actualizaciones de Google sin advertencia; o si tu agencia malgasta fortunas rastreando directorios en tools de baja capacidad en vez de poseer el mapa táctico crudo para generar su propia inteligencia artificial semántica.',
    helpYouSub: isEn ? 'Technical Search Intelligence' : 'Technical Search Intelligence',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We run hyper-lightweight robots capable of downloading hundreds of thousands of pages (including SPA Javascript-rendered) in parallel, processing their DOM hierarchy, links, schemas, and delivering them in an absolute dump.' : 'Corremos robots hiper-livianos capaces de descargar paralelamente cientos de miles de páginas (incluso renderizadas en SPA Javascript) procesando su jerarquía DOM, links, esquemas, y dándotelas en un volcado absoluto.',
    helpYouList: isEn ? [
      'Massive reading of H1/H2 hierarchies, metadata, and schemas.',
      'Bypassing analytical blockers to review competition.',
      'Continuous maintenance and SEO alerting.'
    ] : [
      'Lectura de jerarquías H1/H2, metadatos y schemas masiva.',
      'Sorteo de bloqueadores analíticos para revisar la competencia.',
      'Mantenimiento continuo y alertamiento SEO.'
    ],
    ctaTitle: isEn ? 'Conquer search engine rankings by grounding your strategy in infallible data volumes' : 'Conquista la cima del buscador fundamentando tu estrategia en volúmenes infalibles de datos',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'What does extracting Data for SEO (Search Engine Optimization) involve?' : '¿Qué involucra extraer Datos para el área de SEO (Search Engine Optimization)?',
        answer: isEn ? 'It involves traversing portals imitating the native behaviors of Google or Bing "Crawlers" (spiders), parsing the cleanliness of their source code, tags, and hyperlinks.' : 'Involucra recorrer portales imitando los comportamientos nativos de los "Crowlers" (arañas) de Google o Bing, parseando la limpieza de su código fuente, etiquetas e hipervínculos.'
      },
      {
        question: isEn ? 'Who can benefit most from this over SEMRush or Ahrefs?' : '¿Quién puede beneficiarse mayormente de esto en contraposición de SEMRush o Ahrefs?',
        answer: isEn ? 'Highly transactional digital-native companies that need to forensically see what words the ten sites that outranked them embedded, and digital agencies that must audit PBN sites with technical speed at granular million-scale farms.' : 'Empresas nativas digitales altísimamente transaccionales que precisan ver a nivel forense qué palabras incrustaron los diez sitios que les ganaron el ranking y agencias digitales que deben auditar sitios PBN con rapidez técnica y a granjas granulares de escalas millonarias.'
      },
      {
        question: isEn ? 'What are the typical returns (KPIs) after logistical use?' : '¿Cuáles son los retornos (KPIs) típicos tras el uso logístico?',
        answer: isEn ? 'An increase in CTR (Clicks in search engine) due to semantic optimization adjustments guided by a total (not partial) analytical spectrum; increasing the organic traffic volume captured by the company each month, reducing dependence on buying Google ads (PPC).' : 'Un incremento en el CTR (Clics en buscador) debido a ajustes de optimizaciones semánticas guiados por un espectro analítico total; y no parcial, aumentando el volumen de tráfico que capta la empresa orgánicamente cada mes, bajando la dependencia de comprar anuncios a Google (PPC).'
      }
    ]
  },
  'estrategias-de-pricing': {
    slug: 'estrategias-de-pricing',
    badge: 'Pricing Intelligence',
    titlePart1: '',
    titlePartGradient: isEn ? 'Pricing Strategies' : 'Estrategias de Pricing',
    titlePart2: '',
    description: isEn ? 'Price and promotion monitoring to execute competitive adjustments that protect your profit margins and strengthen your market penetration.' : 'Monitoreo de precios y promociones para ejecutar ajustes competitivos que protejan tus márgenes de beneficio y fortalezcan tu penetración en el mercado.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"By automating competitor price tracking, we were able to react 80% faster to market variations."' : '"Al automatizar el rastreo de precios de nuestra competencia, pudimos reaccionar un 80% más rápido ante las variaciones del mercado."',
        authorName: 'Camila R.',
        authorRole: isEn ? 'Pricing Director, Retail' : 'Directora de Pricing, Retail',
        authorInitials: 'CR'
      },
      {
        rating: 5,
        text: isEn ? '"Dynamic promotion monitoring saved our corporate margins; it is the fundamental tool of our commercial team."' : '"El monitoreo de promociones dinámicas nos salvó los márgenes corporativos, es la herramienta fundamental de nuestro equipo comercial."',
        authorName: 'David L.',
        authorRole: isEn ? 'Financial Manager' : 'Manager Financiero',
        authorInitials: 'DL'
      }
    ],
    features: [
      {
        icon: Target,
        title: isEn ? 'Dynamic tracking' : 'Rastreo dinámico',
        description: isEn ? 'Monitor complete catalogs to detect price changes in real time.' : 'Monitorea catálogos completos para detectar alteraciones de precios en tiempo real.'
      },
      {
        icon: TrendingUp,
        title: isEn ? 'Margin protection' : 'Protección de márgenes',
        description: isEn ? 'Ensure profitability by configuring automatic strategies against sector fluctuation.' : 'Asegura la rentabilidad configurando estrategias automáticas frente a la fluctuación del sector.'
      },
      {
        icon: Shield,
        title: isEn ? 'Promotion analysis' : 'Análisis de promociones',
        description: isEn ? 'Detect your rivals\' offer cycles to counter their impact in time.' : 'Detecta los ciclos de ofertas de tus rivales para contrarrestar su impacto a tiempo.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Visual reports' : 'Reportajes visuales',
        description: isEn ? 'Consume consolidated dashboards illustrating the direct comparison between your products and the market.' : 'Consume dashboards consolidados que ilustran la comparativa directa entre tus productos y el mercado.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need to automate your Pricing Strategies' : 'Cómo saber si necesitas automatizar tus Estrategias de Pricing',
    needThisDescription: isEn ? 'If your sales team spends countless hours comparing market value against competitors manually via spreadsheets, and still always lags behind discounts... you need this service.' : 'Si tu equipo comercial pierde incontables horas homologando el valor de mercado contra tus competidores manualmente mediante hojas de cálculo, y aún así siempre vas detrás de los descuentos... necesitas este servicio.',
    helpYouSub: isEn ? 'Data Collection' : 'Data Collection',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'Our Price Intelligence service extracts, cleanses, and standardizes rate fluctuations across thousands of platforms to provide you with actionable alerts about your catalog.' : 'Nuestro servicio de Inteligencia de Precios se encarga de extraer, limpiar y estandarizar las fluctuaciones de tarifas en miles de plataformas para brindarte alertas accionables sobre tu catálogo.',
    helpYouList: isEn ? [
      'We configure extraction rules on direct competition.',
      'We alert on price fluctuations or out-of-stock.',
      'We maximize profit margins while maintaining competitiveness.'
    ] : [
      'Configuramos reglas de extracción sobre la competencia directa.',
      'Alertamos sobre fluctuaciones de precios o falta de stock.',
      'Maximizamos los márgenes de ganancia manteniendo competitividad.'
    ],
    ctaTitle: isEn ? 'The power of expert talent ready to provide you with the best pricing strategies' : 'El poder del talento experto listo para proveerte las mejores estrategias de pricing',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'What exactly is Price Intelligence or Pricing Scraping?' : '¿Qué es exactamente la Inteligencia de Precios o Pricing Scraping?',
        answer: isEn ? 'It consists of ethically and automatically extracting selling values, descriptors, and availability of items from public competitor platforms to analyze and adjust your own cost structure and offers.' : 'Consiste en extraer de manera ética y automática los valores de venta, descriptores y disponibilidad de artículos desde plataformas públicas de competidores para analizarlos y ajustar tu propia estructura de costos y ofertas.'
      },
      {
        question: isEn ? 'How often are monitors updated?' : '¿Con qué frecuencia se actualizan los monitoreos?',
        answer: isEn ? 'It can be configured from monthly updates to hourly sweeps during critical periods (like Black Friday), ensuring minimum reaction time.' : 'Puede configurarse desde actualizaciones mensuales hasta barridos por hora en periodos críticos (como Black Friday), asegurando un tiempo de reacción mínimo.'
      },
      {
        question: isEn ? 'What type of companies benefit from this service?' : '¿A qué tipo de empresas beneficia este servicio?',
        answer: isEn ? 'Retailers, consumer goods manufacturers, e-commerce, hospitality, and travel agencies that base their competitive advantage on direct market financial tabulators.' : 'Retailers, fabricantes de bienes de consumo, e-commerce, hotelería y agencias de viaje que basan su ventaja competitiva en los tabuladores financieros del mercado directo.'
      }
    ]
  },
  'entrenamiento-de-ia': {
    slug: 'entrenamiento-de-ia',
    badge: 'AI Training',
    titlePart1: '',
    titlePartGradient: isEn ? 'AI Training' : 'Entrenamiento de IA',
    titlePart2: '',
    description: isEn ? 'Massive processing of sites and unstructured databases to feed, scale, and refine language models and machine learning algorithms.' : 'Procesamiento masivo de sitios y bases de datos no estructuradas para alimentar, escalar y perfeccionar modelos de lenguaje y algoritmos de machine learning.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"We needed thousands of clean multilingual interactions and datasets for our LLM. AUTOScraping solved in weeks what promised to take years."' : '"Necesitábamos miles de interacciones y datasets multilingües limpios para nuestro LLM. AUTOScraping resolvió en semanas lo que prometía demorar años."',
        authorName: 'Fernando T.',
        authorRole: isEn ? 'Lead Machine Learning Engineer' : 'Lead Machine Learning Engineer',
        authorInitials: 'FT'
      },
      {
        rating: 5,
        text: isEn ? '"Extracting text corpus to train our sentiment classifier was a frictionless process, all provided in perfect JSONs."' : '"Extraer corpus de texto para entrenar nuestro clasificador de sentimiento fue un proceso sin fricción, todo provisto en JSON perfectos."',
        authorName: 'Ana V.',
        authorRole: isEn ? 'Co-founder of Deep Tech Startup' : 'Cofundadora de Startup Deep Tech',
        authorInitials: 'AV'
      }
    ],
    features: [
      {
        icon: Database,
        title: isEn ? 'Massive dataset creation' : 'Creación de datasets masivos',
        description: isEn ? 'Collection of millions of tokens and paragraphs from thousands of websites in parallel and uninterrupted.' : 'Recolección de millones de tokens y párrafos de miles de webs de manera paralela e ininterrumpida.'
      },
      {
        icon: Sparkles,
        title: isEn ? 'Clean and parsed data' : 'Data limpia y parseada',
        description: isEn ? 'We eliminate noise, ads, and HTML bloatware to deliver raw data ready for machine learning pipelines.' : 'Eliminamos ruido, ads, y bloatware HTML para entregar data cruda lista para pipelines de machine learning.'
      },
      {
        icon: Shield,
        title: isEn ? 'Compliance and anonymization' : 'Cumplimiento y anonimización',
        description: isEn ? 'We filter sensitive information (PII) during the extraction process to protect privacy.' : 'Filtramos información sensible (PII) durante el proceso de extracción para proteger la privacidad.'
      },
      {
        icon: Zap,
        title: isEn ? 'Automatic scalability' : 'Escalabilidad automática',
        description: isEn ? 'Our serverless infrastructure scales regardless of whether you need 1,000 or 1,000,000 queries per day.' : 'Nuestra infraestructura sin servidores escala independientemente de si requieres 1,000 o 1,000,000 de consultas al día.'
      }
    ],
    needThisTitle: isEn ? 'When to rely on us for training your AI' : 'Cuándo apoyarte en nosotros para entrenar tu IA',
    needThisDescription: isEn ? 'If your data science team spends more than 60% of their time cleaning malformed HTML code or devising ways to bypass blocks to scrape forums and news, it\'s time to delegate data acquisition.' : 'Si tu equipo de científicos de datos pasa más del 60% de su tiempo limpiando código HTML mal formateado o ideando formas de saltar bloqueos para scrapear foros y noticias, es el momento de delegar la obtención del dato.',
    helpYouSub: isEn ? 'AI & Data Engineering' : 'AI & Data Engineering',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We provide the absolute pipeline for collection and transformation of information, structuring immense knowledge banks from forums, records, and papers that will serve as the foundational base for your next algorithm.' : 'Proveemos la canalización (pipeline) absoluta de la colección y transformación de la información, estructurando inmensos bancos de conocimiento de foros, registros y papers que fungirán como base fundacional para tu próximo algoritmo.',
    helpYouList: isEn ? [
      'Automatic discovery and navigation of complex directories.',
      'Extraction of images, metadata, and linguistic corpora.',
      'Delivery in secure repositories, directly to the Data Lake.'
    ] : [
      'Descubrimiento y navegación automática de directorios complejos.',
      'Extracción de imágenes, metadata y corpus lingüísticos.',
      'Entrega en repositorios seguros, directo al Data Lake.'
    ],
    ctaTitle: isEn ? 'Feed the potential of your AI models with our data factory' : 'Alimenta el potencial de tus modelos de IA con nuestra factoría de datos',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'What type of data can you extract to train a model?' : '¿Qué tipo de datos pueden extraer para entrenar un modelo?',
        answer: isEn ? 'We can process almost any source format: news text, forum posts, gallery images with their respective labels, e-commerce reviews, and technical discussions.' : 'Podemos procesar casi cualquier formato de origen: texto de noticias, posteos de foros, imágenes de galerías con su respectiva etiqueta, reviews en e-commerce y discusiones técnicas.'
      },
      {
        question: isEn ? 'How do you guarantee the quality of the information?' : '¿Cómo garantizan que la información sea de calidad?',
        answer: isEn ? 'We implement redundancy checks, elimination of corrupt languages or characters, referential integrity validation, and strict structuring (JSON/CSV) previously agreed with your team.' : 'Implementamos chequeos de redundancia, eliminación de lenguajes o caracteres corruptos, validación de integridad referencial y estructurado estricto (JSON/CSV) previamente acordado con tu equipo.'
      },
      {
        question: isEn ? 'Is it possible to acquire data periodically or only once?' : '¿Es posible adquirir datos de forma periódica o solo de una vez?',
        answer: isEn ? 'Since these are iterative models, we offer recurring DaaS channels where our orchestrator continuously feeds your databases each week with "fresh" market knowledge.' : 'Al tratarse de modelos iterativos, ofrecemos canales DaaS recurrentes donde nuestro orquestador alimenta continuamente tus bases de datos cada semana con conocimiento "fresco" del mercado.'
      }
    ]
  },
  'comparativa-de-vuelos': {
    slug: 'comparativa-de-vuelos',
    badge: 'Travel Insights',
    titlePart1: '',
    titlePartGradient: isEn ? 'Flight Comparison' : 'Comparativa de Vuelos',
    titlePart2: '',
    description: isEn ? 'Real-time extraction of airfares, itineraries, and routes to optimize competitiveness for agencies, OTAs, and tourism booking engines.' : 'Extracción de tarifas aéreas, trayectos y rutas en tiempo real para optimizar la competitividad de agencias, OTAs y motores de reserva turística.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"Flight scraping reduced abandonment on our portal by always offering the most aggressive fare against the flag carrier."' : '"El scrap de vuelos redujo el abandono en nuestro portal ofreciendo siempre la tarifa más agresiva contra la aerolínea bandera."',
        authorName: 'Sebastián M.',
        authorRole: isEn ? 'CEO of Reseller Agency' : 'CEO de Agencia Resellers',
        authorInitials: 'SM'
      },
      {
        rating: 5,
        text: isEn ? '"We can audit and find price disparities in real time for millions of city pairs. Brilliant technical work."' : '"Podemos auditar y encontrar disparidad de precios en tiempo real para millones de pares de ciudades. Un trabajo técnico brillante."',
        authorName: 'Valeria C.',
        authorRole: isEn ? 'Tourism Analyst' : 'Analista de Turismo',
        authorInitials: 'VC'
      }
    ],
    features: [
      {
        icon: Plane,
        title: isEn ? 'Dynamic fare scraping' : 'Scraping de tarifas dinámicas',
        description: isEn ? 'Multi-route fare tracking considering variations by seat, carry-on luggage, and seasons.' : 'Tracking de tarifas multi-ruta teniendo en cuenta variaciones por asiento, equipaje de mano y temporadas.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Route and stopover mapping' : 'Mapeo de rutas y escalas',
        description: isEn ? 'Detailed analysis of flight connection behavior, allowing detection of inefficient hubs.' : 'Análisis minucioso del comportamiento en la conexión de vuelos, permitiendo detectar hubs ineficientes.'
      },
      {
        icon: Zap,
        title: isEn ? 'Extraction speed' : 'Velocidad en extracción',
        description: isEn ? 'Ultra-low response times needed to feed booking systems prone to continuous changes.' : 'Tiempos de respuesta ultra bajos necesarios para alimentar sistemas de reservas propensos al cambio contínuo.'
      },
      {
        icon: Shield,
        title: isEn ? 'Premium anti-blocking' : 'Anti-bloqueos premium',
        description: isEn ? 'Heavy rotating residential proxy infrastructure and human simulation to avoid strict airline firewalls.' : 'Infraestructura de proxies rotativos pesados (residential) y simulación humana para evitar los estrictos firewalls aéreos.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need Flight Scraping' : 'Cómo saber si necesitas el Scraping de Vuelos',
    needThisDescription: isEn ? 'Consolidating airline prices through third-party aggregators can be costly, with limited margins and not always reliable data. If you\'re an OTA looking to do without expensive APIs, this is the way.' : 'Consolidar precios de aerolíneas a través de agregadores de terceros puede resultar costoso, con márgenes limitados y data no siempre fidedigna. Si eres una OTA y buscas prescindir de costosas APIS, esta es la forma.',
    helpYouSub: isEn ? 'Travel Data' : 'Travel Data',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We extract and cross-reference data from root airline portals or leading engines. We structure duration, cost, and flight type via scripts ready to inject this knowledge directly into your vacation software UI.' : 'Extraemos y cruzamos datos desde los portales raíz de las aerolíneas o motores líderes. Estructuramos la duración, el costo y el tipo de vuelo mediante scripts listos para inyectar este conocimiento directo en la UI de tu software vacacional.',
    helpYouList: isEn ? [
      'Grouping prices, class, origin, and destination from multiple airlines.',
      'Bypassing rigid CAPTCHA systems in the sector.',
      'High-frequency synchronization based on ticket seasonality.'
    ] : [
      'Agrupamiento de precios, clase, origen y destino de múltiples aerolíneas.',
      'Sorteo y bypass de sistemas CAPTCHA rígidos del sector.',
      'Sincronización en alta frecuencia según la estacionalidad del boleto.'
    ],
    ctaTitle: isEn ? 'Automate your fare collection and take off above the competition' : 'Automatiza tu recaudo tarifario y despega sobre la competencia',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'Which airline sites or comparison engines can be audited?' : '¿Qué sitios aéros o comparadores se pueden auditar?',
        answer: isEn ? 'Virtually any. Our team of engineers designs integrations in classic GDS engines and especially publicly on direct portals of local Low-Costs or massive multinational search engines.' : 'Virtualmente cualquiera. Nuestro equipo de ingenieros diseña integraciones en motores GDS clásicos y sobre todo de manera pública en portales directos de Low-Costs locales o buscadores masivos multinacionales.'
      },
      {
        question: isEn ? 'How do you handle price variability by location (geopricing)?' : '¿Cómo lidian con la variabilidad de precios según ubicación (geopricing)?',
        answer: isEn ? 'We assign geolocated extraction nodes to ensure the reflected price is the same as experienced by the base user in the area where your sales efforts operate.' : 'Asignamos nodos de extracción geolocalizados para asegurar que el precio reflejado sea igual al experimentado por el usuario base de la zona donde operan tus esfuerzos de venta.'
      },
      {
        question: isEn ? 'What degree of latency exists in flight captures?' : '¿Qué grado de latencia existe en las capturas de vuelos?',
        answer: isEn ? 'We create parallel multi-threaded systems that enormously reduce latency. Although it\'s not a raw API connection, it\'s ideal for building trend reports or caching systems in your backend.' : 'Creamos sistemas paralelos de múltiples hilos que reducen la latencia enormemente. Aunque no sea una conexión API cruda, es lo ideal para construir reportes de tendencias, o sistemas de caching en tu backend.'
      }
    ]
  },
  'gestion-de-reputacion': {
    slug: 'gestion-de-reputacion',
    badge: 'Brand Sentiment',
    titlePart1: '',
    titlePartGradient: isEn ? 'Reputation Management' : 'Gestión de Reputación',
    titlePart2: '',
    description: isEn ? 'Constant collection of reviews, social comments, and ratings on key platforms for sentiment analysis and critical care of your corporation\'s image.' : 'Recolección constante de reseñas, comentarios sociales y valoraciones en plataformas clave para el análisis de sentimiento y cuidado crítico de la imagen de tu corporación.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"We went from manually responding to local reviews to having a general command dashboard for brand status across all of Latin America."' : '"Pasamos de responder reviews locales manualmente a tener un dashboard de mando general sobre el estado de marca en toda Latinoamérica."',
        authorName: 'Patricio F.',
        authorRole: isEn ? 'Corporate Communications Manager' : 'Manager de Comunicación Corporativa',
        authorInitials: 'PF'
      },
      {
        rating: 5,
        text: isEn ? '"The constant data flow allowed us to detect product crisis alerts in time based on Twitter and Google Reviews comments."' : '"El flujo constante de datos nos permitió detectar a tiempo alertas de crisis de producto basadas en comentarios de Twitter y Google Reviews."',
        authorName: 'Luciana D.',
        authorRole: isEn ? 'Customer Success' : 'Customer Success',
        authorInitials: 'LD'
      }
    ],
    features: [
      {
        icon: Heart,
        title: isEn ? 'Sentiment analysis' : 'Análisis de sentimiento',
        description: isEn ? 'Data structuring into positive, negative, and neutral, facilitating integration with language analytical models.' : 'Estructuración de datos en positivo, negativo y neutral, facilitando la integración con modelos analíticos de lenguaje.'
      },
      {
        icon: Users,
        title: isEn ? 'Multi-channel' : 'Multicanalidad',
        description: isEn ? 'Monitoring of niche forums, portals like TrustPilot, Yelp, and E-commerce stores unified in a central schema.' : 'Monitoreo de foros nicho, portales como TrustPilot, Yelp y tiendas de E-commerce unificados en un esquema central.'
      },
      {
        icon: MessageSquare,
        title: isEn ? 'Metadata consolidation' : 'Consolidación de metadata',
        description: isEn ? 'Retrieval and crossing of user data and existing response from your customer support team.' : 'Obtención y cruzamiento de data del usuario y la respuesta existente de tu equipo de customer support.'
      },
      {
        icon: CheckSquare,
        title: isEn ? 'Pattern detection' : 'Detección de patrones',
        description: isEn ? 'By identifying an anomalous volume increase on a specific complaint, we help prevent irreversible PR damage.' : 'Al identificar un incremento anómalo de volumen sobre una queja en específico, ayudamos a prevenir daños irreversibles de PR.'
      }
    ],
    needThisTitle: isEn ? 'Why prioritize reputation management (Review Scraping)' : 'Por qué priorizar la gestión de la reputación (Review Scraping)',
    needThisDescription: isEn ? 'If you have hundreds or thousands of locations, products, and digital channels to manage, maintaining manual traceability of "what the customer says" is utopian and a potential time bomb.' : 'Si tienes cientos o miles de locaciones, productos y canales digitales que atender, mantener la trazabilidad manual de "qué dice el cliente" es utópico y una potencial bomba de tiempo.',
    helpYouSub: isEn ? 'Data Collection' : 'Data Collection',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We handle the complex technical task of connecting to dozens of different rating forums and networks, adapting to each design, extracting stars, comments, dates, and idiosyncrasies, delivering it to your unified CRM.' : 'Manejamos la compleja tarea técnica de conectarnos a decenas de foros y redes de valoración distintas, adaptándonos al diseño de cada uno, extrayendo las estrellas, comentarios, fechas e idiosincracia, para entregártelo en tu propio CRM unificado.',
    helpYouList: isEn ? [
      'Centralized feeding of the "Customer Response Team".',
      'Segmented extraction by locations, branches, and franchises.',
      'Building brand health dashboards.'
    ] : [
      'Alimentación centralizada del "Customer Response Team".',
      'Extracción segmentada por locaciones, sucursales y franquicias.',
      'Construcción de dashboards de salud de marca.'
    ],
    ctaTitle: isEn ? 'Know everything your customers say with our Data Factory infrastructure' : 'Conoce todo lo que opinan tus clientes con nuestra infraestructura Data Factory',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'What information do you collect from a "review"?' : '¿Qué información recolectan de una "review"?',
        answer: isEn ? 'We collect the title, extended comment content, publication date, overall score (stars), number of "likes", origin and user metadata (if public), and whether images or purchase validations have been attached.' : 'Recolectamos el título, contenido extendido del comentario, fecha de publicación, puntuación global (estrellas), cantidad de "me gustas", metadata de origen y usuario (si es público), y si se han adjuntado imágenes o validaciones de compra.'
      },
      {
        question: isEn ? 'Do you have functional support for extracting government complaint reports?' : '¿Tienen soporte funcional para extraer sitios gubernamentales de reportes o reclamos?',
        answer: isEn ? 'Yes, we can build custom scrapers oriented to consumer defense platforms or government forums, providing your company with all possible flashpoints in the public arena.' : 'Sí, podemos construir scrapers a la medida orientados a plataformas de defensa al consumidor o foros del estado, dotando tu empresa de todos los posibles focos de incendio en la arena pública.'
      },
      {
        question: isEn ? 'Do you offer Sentiment Dashboard deployment or only mining?' : '¿Ofrecen el despliegue del Dashboard de Sentimiento o sólo la minería?',
        answer: isEn ? 'Through our Data Squad model we can work iteratively and closely not only delivering data (JSON/CSV), but also designing visualization via Power BI, Tableau, or other interfaces.' : 'A través de nuestro modelo de Data Squad podemos trabajar iterativa y cercanamente no solo entregando los datos (JSON/CSV), sino también diseñando la visualización mediante Power BI, Tableau u otras interfaces.'
      }
    ]
  },
  'tendencias-laborales': {
    slug: 'tendencias-laborales',
    badge: 'Recruitment Data',
    titlePart1: '',
    titlePartGradient: isEn ? 'Labor Trends' : 'Tendencias Laborales',
    titlePart2: '',
    description: isEn ? 'Deep tracking of job offers (Job Boards) and salary structures to feed modern headhunting platforms and human resources analytics.' : 'Rastreo profundo de ofertas de empleo (Job Boards) y estructuras salariales para nutrir plataformas de headhunting y analíticas de recursos humanos modernas.',
    testimonials: [
      {
        rating: 5,
        text: isEn ? '"Creating the salary opportunity map by industry would have taken our entire lives without their massive and refined scraping process."' : '"Crear el mapa de oportunidades salariales por industria habría tomado nuestra vida entera sin su proceso masivo y refinado de scraping."',
        authorName: 'Guillermo V.',
        authorRole: isEn ? 'CEO Local Job Portal' : 'CEO Portal Laboral Local',
        authorInitials: 'GV'
      },
      {
        rating: 5,
        text: isEn ? '"We monitor the talent and profiles that Fortune 500s are actively recruiting to anticipate their technology launches."' : '"Monitorizamos el talento y perfiles que las Fortune 500 están activamente reclutando para anticipar sus lanzamientos tecnológicos."',
        authorName: 'Mónica A.',
        authorRole: isEn ? 'Corporate Business Analyst' : 'Analista de Negocios Corporativos',
        authorInitials: 'MA'
      }
    ],
    features: [
      {
        icon: FileStack,
        title: isEn ? 'Mapped vacancy mining' : 'Minería mapeada de vacantes',
        description: isEn ? 'Traceability of positions, raw requirements, hiring location, and urgency reflected in the offer or candidate volume.' : 'Trazabilidad de puestos, requerimientos crudos, locación de contratación y la urgencia reflejada en la oferta o volumen de candidatos.'
      },
      {
        icon: Building2,
        title: isEn ? 'Salary scan (Benchmarking)' : 'Escaneo salarial (Benchmarking)',
        description: isEn ? 'Collection of base salary ranges and promised benefits to build precise income standardizations.' : 'Recolección de las horquillas de sueldo base y prestaciones prometidas para construir estandarizaciones precisas sobre ingresos.'
      },
      {
        icon: Target,
        title: isEn ? 'Key skills by role' : 'Skills clave por rol',
        description: isEn ? 'Light NLP parsing to categorize and structure the technological or operational stacks demanded by the market.' : 'Parseo de lenguaje natural (NLP) ligero para categorizar y estructurar los stacks tecnológicos u operacionales que demanda el mercado.'
      },
      {
        icon: Globe,
        title: isEn ? 'Multi-region monitoring' : 'Monitoreo multi-región',
        description: isEn ? 'Specific tracking of the remote ecosystem, comparing national salaries with opportunities offering overlapping time zones and relocation.' : 'Tracking específico del ecosistema remoto, comparando salarios nacionales con oportunidades que ofrecen husos horarios solapados y relocalización.'
      }
    ],
    needThisTitle: isEn ? 'Discover and anticipate tomorrow\'s human capital' : 'Descubre y anticipa el capital humano del mañana',
    needThisDescription: isEn ? 'Hiring requires certainty about the salary environment. Or perhaps you have a niche portal and need to aggregate thousands of internet jobs every night to supply your site. Either way, you\'ll need constant large-scale mining.' : 'Contratar requiere tener certeza del entorno salarial. O tal vez cuentas con un portal de nicho y requieres agregar los miles de empleos de internet cada noche para abastecer tu sitio. De cualquier manera, requerirás minería constante a gran escala.',
    helpYouSub: isEn ? 'Job Board Extraction' : 'Job Board Extraction',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We generate recurring data flows on public jobs (Scraping of ATS Systems, B2B Directories, and search aggregators), providing them in a unified way to eliminate labor market duplicates before they reach your hands.' : 'Generamos flujos recurrentes de Data sobre empleos públicos (Scraping de ATS Systems, Directorios B2B y agregadores de búsqueda), proveyéndolos de manera unificada para eliminar duplicados del mercado laboral antes de llegar a tus manos.',
    helpYouList: isEn ? [
      'Massive collection of transient data without false positives from dropped listings.',
      'Synchronization of immense catalogs via APIs (DaaS).',
      'Normalization of chaotic descriptions toward record architectures (BDD).'
    ] : [
      'Levantamiento masivo de datos transitorios sin falsos positivos de listados caídos.',
      'Sincronización de catálogos inmensos mediante APIs (DaaS).',
      'Normalización de descripciones caóticas hacia arquitecturas de registro (BDD).'
    ],
    ctaTitle: isEn ? 'Elevate the value of your agency and labor metrics with our Data Squad' : 'Eleva el valor de tu agencia y métricas laborales apoyándote en nuestro Data Squad',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'Which specific job sites do you extract?' : '¿Qué sitios de empleo específicos extraen?',
        answer: isEn ? 'It depends on your business needs. We can cover from giant professional networks to integrating direct career portals of target organizations.' : 'Depende de tus necesidades empresariales. Podemos cubrir desde redes gigantes orientadas al ámbito profesional e integrando portales de carrera directos de las organizaciones objetivo.'
      },
      {
        question: isEn ? 'Do you measure the actual opening and closing date of job searches?' : '¿Miden la fecha de apertura y cierre real de las búsquedas laborales?',
        answer: isEn ? 'Yes. We design our logic to keep history or recurring snapshots and mark a vacancy (temporary UUID) as resolved, precisely measuring how many days it takes to fill a position in industry x or y.' : 'Sí. Diseñamos nuestras lógicas para que guarden histórico o snapshots recurrentes y marquen una vacante (UUID temporal) como resuelta, midiendo con precisión cuántos días cuesta llenar una posición en la industria x o y.'
      },
      {
        question: isEn ? 'What are some common use cases?' : '¿Cuales son algunos casos de uso comunes?',
        answer: isEn ? 'The most notable: Providing data and alerts to competing companies (e.g., if a rival hires 10 Flutter experts, they will launch a mobile App); Consolidation boxes that resell unified listings ("Job Aggregators"); Market research and government agencies analyzing the overall state of employment.' : 'Los más destacados: Proveer datos y alertas a empresas competidoras (ej: si rival contrata 10 expertos en Flutter, lanzarán App móvil); Cajas de consolidación que revenden listados unificados ("Agregadores de Puestos"); Market research y agencias gubernamentales analizando el estado general del empleo.'
      }
    ]
  }
  };
}
