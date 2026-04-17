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
    badge: isEn ? 'Lead Generation Platform' : 'Plataforma de Generación de Leads',
    titlePart1: '',
    titlePartGradient: isEn ? 'Lead Generation' : 'Generación de Leads',
    titlePart2: '',
    description: isEn ? 'Accelerate your sales cycle with qualified prospects. Keep your commercial reach always active through contact databases updated at the source.' : 'Acelera tu ciclo de ventas con prospectos calificados. Mantén tu alcance comercial siempre activo mediante bases de contacto actualizadas en origen.',
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
    badge: isEn ? 'AI Scraping' : 'Scraping con IA',
    titlePart1: '',
    titlePartGradient: isEn ? 'AI Web Scraping' : 'Web Scraping con IA',
    titlePart2: '',
    description: isEn ? 'Guarantee the availability of your data against structural changes. Ensure an uninterrupted flow through scrapers that adapt automatically.' : 'Garantiza la disponibilidad de tus datos frente a cambios estructurales. Asegura un flujo ininterrumpido mediante scrapers que se adaptan automáticamente.',
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
        title: isEn ? 'Automatic adaptation to site changes' : 'Adaptación automática a cambios del sitio',
        description: isEn
          ? 'When a website changes its structure, many scrapers break silently. Ours detect the change and adjust, and our team reviews before every delivery.'
          : 'Cuando una web cambia su estructura, muchos scrapers se rompen en silencio. Los nuestros detectan el cambio y se ajustan, y nuestro equipo revisa antes de cada entrega.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Extraction from images, PDFs, and complex tables' : 'Extracción desde imágenes, PDFs y tablas complejas',
        description: isEn
          ? 'A lot of valuable information lives in PDFs, invoices, scanned reports, or tables inside images. We extract that data and deliver it structured, ready to use.'
          : 'Mucha información valiosa está en PDFs, facturas, reportes escaneados o tablas que están dentro de imágenes. Extraemos esos datos y los entregamos estructurados, listos para usar.'
      },
      {
        icon: Target,
        title: isEn ? 'Quality validation before every delivery' : 'Validación de calidad antes de cada entrega',
        description: isEn
          ? 'We check that the data makes sense before it reaches your operation. If something deviates from the historical baseline, we flag it and fix it.'
          : 'Revisamos que los datos tengan sentido antes de que lleguen a tu operación. Si algo se desvía del histórico, lo marcamos y lo corregimos.'
      },
      {
        icon: Shield,
        title: isEn ? 'Handling restrictions without involving you' : 'Superación de restricciones sin que te involucres',
        description: isEn
          ? 'When a site gets harder to scrape, we handle it. Your team keeps receiving the data without knowing there was a hiccup.'
          : 'Cuando un sitio se pone más difícil, nos encargamos nosotros. Tu equipo sigue recibiendo los datos sin saber que hubo un bache.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need Classic or AI Scraping' : 'Cómo saber si necesitas el Scraping Clásico o con IA',
    needThisDescription: isEn ? 'If the portals you want to extract information from are blocked behind hard barriers (CAPTCHAs, Cloudflare, biometric rotators) and unpredictable designs (Canvas rendering, Dynamic JS), classic spiders will fail and you will need AI.' : 'Si los portales de los que quieres sacar la información están bloqueados detrás de barreras duras (CAPTCHAS, Cloudflare, rotadores biométricos) y diseños no-predecibles (Renderizado de Canvas, JS Dinámico), los spiders clásicos van a fallar y requerirás IA.',
    helpYouSub: isEn ? 'AI Solutions' : 'Soluciones con IA',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'Our solution couples advanced models that simulate "human eyes", interpreting and capturing data even when a portal is hermetically sealed in source code.' : 'Nuestra solución se encarga de acoplar modelos avanzados que permiten simular "ojos humanos", interpretando y tomando los datos aunque un portal sea hermético en código fuente.',
    helpYouList: isEn ? [
      'Our scrapers adapt when sites change, without you having to tell us.',
      'We read text, tables, PDFs and images—not just plain HTML.',
      'We validate data before delivering it. If something breaks, we see it first.',
      'We deliver in the format your team already uses.'
    ] : [
      'Nuestros scrapers se adaptan cuando los sitios cambian, sin que tengas que avisarnos.',
      'Leemos texto, tablas, PDFs e imágenes, no solo HTML plano.',
      'Validamos los datos antes de entregarlos. Si algo se rompe, lo vemos nosotros primero.',
      'Entregamos en el formato que tu equipo ya usa.'
    ],
    ctaTitle: isEn ? 'Leverage autonomous collection powered by the latest algorithms' : 'Aprovecha la recolección autónoma apalancada con los últimos algoritmos',
    ctaDescription: '',
    faqs: [
      {
        question: isEn
          ? 'How is this different from a traditional scraper?'
          : '¿En qué se diferencia esto de un scraper tradicional?',
        answer: isEn
          ? 'A traditional scraper depends on fixed rules about the site\'s structure. If the site changes, the scraper breaks. With AI, we can recognize the content even if the structure changes and keep deliveries stable for longer.'
          : 'Un scraper tradicional depende de reglas fijas sobre la estructura del sitio. Si el sitio cambia, el scraper se rompe. Con IA, podemos reconocer el contenido aunque la estructura cambie y mantener las entregas estables por más tiempo.'
      },
      {
        question: isEn
          ? 'Can you extract data from PDFs and scanned documents?'
          : '¿Pueden extraer datos de PDFs y documentos escaneados?',
        answer: isEn
          ? 'Yes. We read PDFs, invoices, financial reports, and documents with complex tables, even when they are scanned. We deliver them structured in the format you use.'
          : 'Sí. Leemos PDFs, facturas, reportes financieros y documentos con tablas complejas, incluso cuando están escaneados. Te los entregamos estructurados en el formato que uses.'
      },
      {
        question: isEn
          ? 'Who maintains the scrapers when something changes?'
          : '¿Quién mantiene los scrapers cuando algo cambia?',
        answer: isEn
          ? 'We do. Maintenance is included in the Data Factory service. You receive the data; we make sure that keeps happening.'
          : 'Nosotros. El mantenimiento está incluido en el servicio de Data Factory. Tú recibes los datos, nosotros nos encargamos de que eso siga pasando.'
      },
      {
        question: isEn
          ? 'What types of sites can you scrape?'
          : '¿Qué tipo de sitios pueden scrapear?',
        answer: isEn
          ? 'E-commerce sites, marketplaces, real estate portals, search engines, directories, content sites, public databases, review platforms, and many others. If you need data from a specific source, we evaluate it in the first meeting.'
          : 'Sitios de e-commerce, marketplaces, portales inmobiliarios, buscadores, directorios, sitios de contenido, bases públicas, plataformas de reviews y muchos otros. Si necesitas datos de una fuente en particular, lo evaluamos en la primera reunión.'
      },
      {
        question: isEn
          ? 'How do I receive the data?'
          : '¿Cómo recibo los datos?',
        answer: isEn
          ? 'In the format your team already uses: CSV, Excel, JSON, API, or directly to your database. We define frequency and schema at kickoff.'
          : 'En el formato que tu equipo ya usa: CSV, Excel, JSON, API o directo a tu base de datos. Definimos frecuencia y esquema en el kickoff.'
      }
    ]
  },
  'extraccion-de-linkedin': {
    slug: 'extraccion-de-linkedin',
    badge: 'LinkedIn',
    titlePart1: '',
    titlePartGradient: isEn ? 'LinkedIn Extraction' : 'Extracción de LinkedIn',
    titlePart2: '',
    description: isEn ? 'Fuel your B2B acquisition strategies with high-precision data. Access professional profiles and companies to accelerate your commercial prospecting.' : 'Nutre tus estrategias de captación B2B con datos de alta precisión. Accede a perfiles profesionales y empresas para acelerar tu prospección comercial.',
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
    description: isEn ? 'Maximize your profitability through dynamic pricing strategies. Dominate the accommodation sector with constant tracking of availability and rates.' : 'Maximiza tu rentabilidad mediante estrategias de precios dinámicos. Domina el sector alojamiento con un seguimiento constante de disponibilidad y tarifas.',
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
        title: isEn ? 'Monitoring by geographic zone' : 'Monitoreo por zona geográfica',
        description: isEn
          ? 'You define the zones that interest you: neighborhoods, cities, tourist districts, or specific coordinates. We collect all active listings within those zones and keep them updated.'
          : 'Defines las zonas que te interesan: barrios, ciudades, distritos turísticos o coordenadas específicas. Recopilamos todos los listados activos dentro de esas zonas y los mantenemos actualizados.'
      },
      {
        icon: Target,
        title: isEn ? 'Prices and historical availability' : 'Precios y disponibilidad histórica',
        description: isEn
          ? 'We track the evolution of prices and occupancy over time. Ideal for teams analyzing trends, seasonality, or the impact of local events.'
          : 'Seguimos la evolución de precios y ocupación en el tiempo. Ideal para equipos que analizan tendencias, estacionalidad o impacto de eventos locales.'
      },
      {
        icon: Zap,
        title: isEn ? 'Reviews and ratings' : 'Reseñas y valoraciones',
        description: isEn
          ? 'We collect public reviews of accommodations so you can analyze sentiment, recurring topics, and reputation evolution by zone or operator.'
          : 'Recopilamos reseñas públicas de los alojamientos para que puedas analizar sentimiento, temas recurrentes y evolución de la reputación por zona u operador.'
      },
      {
        icon: Shield,
        title: isEn ? 'Data delivered, not dashboards to build' : 'Datos entregados, no dashboards para construir',
        description: isEn
          ? 'We don\'t give you a tool to use. We give you the data in the format your team already consumes, ready for your BI, your model, or your report.'
          : 'No te damos una herramienta para que la uses. Te damos los datos en el formato que tu equipo ya consume, listos para tu BI, tu modelo o tu reporte.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need automatic tracking on Airbnb' : 'Cómo saber si necesitas el tracking automático en Airbnb',
    needThisDescription: isEn ? 'If you can\'t answer what the real market rates were last month around your complex, or why the competition was 100% full while your place sat vacant... you\'re operating blind. AUTOScraping solves this.' : 'Si no puedes responder cuáles fueron las tarifas reales de mercado el último mes alrededor de tu complejo, ni por qué la competencia estuvo 100% llena mientras tu lugar estaba vacante... estás operando a ciegas. AUTOScraping resuelve esto.',
    helpYouSub: isEn ? 'Proptech Data' : 'Data Proptech',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We configure dense programmatic extraction networks (Scraping) on Airbnb, mapping geo-referenced listings, reviews, and calendars to give you the final snapshot of how tenants behave and what prices they accept.' : 'Configuramos redes densas de extracción programática (Scraping) sobre Airbnb mapeando listados, reseñas y calendarios georreferenciados para ofrecerte la radiografía final de cómo se comportan los huéspedes y qué precios aceptan.',
    helpYouList: isEn ? [
      'We monitor Airbnb in the zones that interest you, at the level of detail you need.',
      'We deliver prices, availability, new listings, reviews, and historical data.',
      'You receive the data at the frequency you use: daily, weekly, monthly, or on demand.',
      'We handle maintenance. You only receive data ready to analyze.'
    ] : [
      'Monitoreamos Airbnb en las zonas que te interesan, al nivel de detalle que necesites.',
      'Te entregamos precios, disponibilidad, nuevos listados, reseñas y datos históricos.',
      'Recibes los datos con la frecuencia que uses: diaria, semanal, mensual o a demanda.',
      'Nos encargamos del mantenimiento. Solo recibes datos listos para analizar.'
    ],
    ctaTitle: isEn ? 'The power of expert talent ready to boost your tourism operations' : 'El poder del talento experto listo para potenciar tus operaciones turísticas',
    ctaDescription: '',
    faqs: [
      {
        question: isEn
          ? 'What data can I receive for each listing?'
          : '¿Qué datos puedo recibir de cada alojamiento?',
        answer: isEn
          ? 'Nightly price, availability calendar, property type, capacity, amenities, location, operator, price change history, and public reviews. We define the exact set based on your case.'
          : 'Precio por noche, calendario de disponibilidad, tipo de propiedad, capacidad, servicios, ubicación, operador, histórico de cambios de precio y reseñas públicas. Definimos el set exacto según tu caso.'
      },
      {
        question: isEn
          ? 'Can you monitor entire cities or only specific zones?'
          : '¿Pueden monitorear ciudades completas o solo zonas específicas?',
        answer: isEn
          ? 'Both. We can cover everything from a small area to entire cities or multiple cities in parallel. We discuss scope based on the volume and frequency you need.'
          : 'Las dos cosas. Podemos cubrir desde una zona pequeña hasta ciudades enteras o varias ciudades en paralelo. Lo discutimos en función del volumen y la frecuencia que necesites.'
      },
      {
        question: isEn
          ? 'How often do you update the data?'
          : '¿Con qué frecuencia actualizan los datos?',
        answer: isEn
          ? 'Based on what works for you: daily for those managing dynamic pricing, weekly or monthly for trend analysis. We define the frequency at kickoff.'
          : 'Según lo que te sirva: diaria para quienes operan precios dinámicos, semanal o mensual para análisis de tendencias. Definimos la frecuencia en el kickoff.'
      },
      {
        question: isEn
          ? 'Do you also cover other portals (Booking, Vrbo, etc.)?'
          : '¿También cubren otros portales (Booking, Vrbo, etc.)?',
        answer: isEn
          ? 'Yes. If you want to compare Airbnb against other portals, we set it up within the same project, with the same field schema, so the analysis is straightforward.'
          : 'Sí. Si te interesa comparar Airbnb contra otros portales, lo armamos en el mismo proyecto, con el mismo esquema de campos, para que el análisis sea directo.'
      },
      {
        question: isEn
          ? 'How do I receive the data?'
          : '¿Cómo recibo los datos?',
        answer: isEn
          ? 'In CSV, Excel, JSON, via API, or direct insertion into your database. We agree on the format at the start.'
          : 'En CSV, Excel, JSON, via API o inserción directa en tu base de datos. El formato lo acordamos al inicio.'
      }
    ]
  },
  'registro-de-google-maps': {
    slug: 'registro-de-google-maps',
    badge: 'Google Maps',
    titlePart1: '',
    titlePartGradient: isEn ? 'Google Maps Registration' : 'Registro de Google Maps',
    titlePart2: '',
    description: isEn ? 'Expand your presence in specific markets with location intelligence. Consolidate geographic data for an in-depth analysis of your local competition.' : 'Expande tu presencia en mercados específicos con inteligencia locacional. Consolida datos geográficos para un análisis profundo de tu competencia local.',
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
    badge: isEn ? 'Automation' : 'Automatización',
    titlePart1: '',
    titlePartGradient: isEn ? 'Web Scraping Automation' : 'Web Scraping Automatizado',
    titlePart2: '',
    description: isEn ? 'Eliminate human dependency in your extractions. Orchestrate repetitive processes so your team can focus on strategic value.' : 'Elimina la dependencia humana en tus extracciones. Orquesta procesos repetitivos para que tu equipo se enfoque en el valor estratégico.',
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
        title: isEn ? 'Continuous delivery, no maintenance on your end' : 'Entrega continua, sin mantenimiento de tu lado',
        description: isEn
          ? 'We configure the frequency that works for you (daily, weekly, monthly, or on-demand) and make sure data arrives on time. If the source site changes, we adapt before you notice.'
          : 'Configuramos la frecuencia que te sirve (diaria, semanal, mensual o a demanda) y nos encargamos de que los datos lleguen puntuales. Si el sitio origen cambia, lo adaptamos antes de que lo notes.'
      },
      {
        icon: Zap,
        title: isEn ? 'Data ready to decide with, not to clean' : 'Datos listos para decidir, no para limpiar',
        description: isEn
          ? 'We clean, validate, and structure data before delivery. Your team consumes it directly in their reports, models, or dashboards—no intermediate steps.'
          : 'Limpiamos, validamos y estructuramos los datos antes de entregarlos. Tu equipo los consume directo en sus reportes, modelos o dashboards, sin pasos intermedios.'
      },
      {
        icon: MessageSquare,
        title: isEn ? 'A team that responds when something happens' : 'Un equipo que responde cuando algo pasa',
        description: isEn
          ? 'When there are incidents, we notify you first with a concrete resolution time. No ticket to open, no waiting.'
          : 'Cuando hay incidencias, te avisamos nosotros primero, con un tiempo de resolución concreto. No hay que abrir un ticket ni esperar.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Capital efficiency' : 'Eficiencia de Capital',
        description: isEn ? 'Assign the intellectual value of your engineers to innovating with analytics, delegating the burden of obtaining raw data to us.' : 'Asigna el valor intelectual de tus ingenieros a innovar con los analíticos, delegando el peso de conseguir el dato crudo a nosotros.'
      }
    ],
    needThisTitle: isEn
      ? 'Still pulling the same data manually every week?'
      : '¿Sigues pidiendo los mismos datos a mano cada semana?',
    needThisDescription: isEn
      ? 'If your team is downloading, copying, or requesting the same data on a recurring basis, you are spending people time on something that can run on its own. We automate that process so you never have to think about it.'
      : 'Si tu equipo está descargando, copiando o solicitando los mismos datos de forma recurrente, estás gastando tiempo de personas en algo que puede correr solo. Automatizamos ese proceso para que no tengas que pensar en él.',
    helpYouSub: isEn ? 'Our Approach' : 'Nuestro Enfoque',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn
      ? 'You define the source, the fields, and the frequency. We take care of everything else: extraction, maintenance, cleaning, and delivery.'
      : 'Tú defines la fuente, los campos y la frecuencia. Nosotros nos encargamos de todo lo demás: extracción, mantenimiento, limpieza y entrega.',
    helpYouList: isEn ? [
      'You define the data once. You receive it every week, month, or day—without asking again.',
      'We handle blocks, site changes, and incidents. You just see the data arriving.',
      'We deliver in CSV, Excel, JSON, API, or directly to your database.',
      'You work with a team that responds in under 1 hour when something changes.'
    ] : [
      'Defines los datos una vez. Los recibes todas las semanas, meses o días, según lo que necesites, sin pedirlos de nuevo.',
      'Nosotros resolvemos los bloqueos, los cambios en los sitios y las incidencias. Tú los ves llegar como si nada.',
      'Te entregamos en CSV, Excel, JSON, API o directo a tu base de datos.',
      'Trabajas con un equipo que responde en menos de 1 hora cuando algo cambia.'
    ],
    ctaTitle: isEn ? 'Schedule a free consultation' : 'Agenda una consulta gratuita',
    ctaDescription: isEn
      ? 'Tell us what data you need. In a 30-minute call we give you a plan and a concrete delivery timeline.'
      : 'Cuéntanos qué datos necesitas. En una llamada de 30 minutos te damos un plan y un tiempo de entrega concreto.',
    faqs: [
      {
        question: isEn
          ? 'What does it mean in practice that you automate collection?'
          : '¿Qué significa en la práctica que ustedes automatizan la recolección?',
        answer: isEn
          ? 'You tell us what data you need, from which sites, and how often. After that, you receive it in your email, database, or via API on a recurring basis. You do not have to request it or remember: it arrives on its own.'
          : 'Significa que tú nos dices qué datos necesitas, de qué sitios y cada cuánto. Después de eso, los recibes en tu correo, en tu base de datos o vía API, de forma recurrente. No tienes que pedirlos ni acordarte: llegan solos.'
      },
      {
        question: isEn
          ? 'What happens if the source site changes or starts blocking?'
          : '¿Qué pasa si el sitio origen cambia o empieza a bloquear?',
        answer: isEn
          ? 'Our team monitors the quality of every delivery. When the site changes or adds restrictions, we resolve it and keep delivering. If the change requires revisiting the scope, we reach out before you notice.'
          : 'Nuestro equipo monitorea la calidad de cada entrega. Cuando el sitio cambia o pone más restricciones, lo resolvemos y seguimos entregando. Si el cambio requiere rediscutir el alcance, te escribimos antes de que lo notes.'
      },
      {
        question: isEn
          ? 'Do you deliver the scraper code?'
          : '¿Me entregan el código del scraper?',
        answer: isEn
          ? 'By default, no. The product is the data, not the code. This lets us maintain and update the extraction without passing the work to you. If your case requires receiving the code (for compliance or internal strategy), we discuss it as an exception.'
          : 'Por defecto no. El producto son los datos, no el código. Eso nos permite mantener y actualizar la extracción sin pasarte el trabajo. Si tu caso requiere recibir el código (por compliance o estrategia interna), lo conversamos como excepción.'
      },
      {
        question: isEn
          ? 'In what format do I receive the data?'
          : '¿En qué formato recibo los datos?',
        answer: isEn
          ? 'In whatever works for you: CSV, Excel, JSON, via API, or directly to your database. We define the format at the start along with the field schema your team needs to consume.'
          : 'En el que te sirva: CSV, Excel, JSON, via API o directo a tu base de datos. Definimos el formato al inicio junto con el esquema de campos que tu equipo necesita consumir.'
      },
      {
        question: isEn
          ? 'How long does it take to get started?'
          : '¿Cuánto tarda arrancar?',
        answer: isEn
          ? 'It depends on the source and volume, but in most cases we deliver the first extraction in days, not weeks. In our first meeting we give you a concrete timeline for your case.'
          : 'Depende de la fuente y el volumen, pero en la mayoría de los casos entregamos la primera extracción en días, no en semanas. En la primera reunión te damos un plazo concreto para tu caso.'
      }
    ]
  },
  'metricas-financieras': {
    slug: 'metricas-financieras',
    badge: 'Financial Data',
    titlePart1: '',
    titlePartGradient: isEn ? 'Financial Metrics' : 'Métricas Financieras',
    titlePart2: '',
    description: isEn ? 'Strengthen your high-level investments with constant market indicators. Ground your financial decisions in economic values obtained with precision.' : 'Fortalece tus inversiones de alto nivel con indicadores bursátiles constantes. Fundamenta tus decisiones financieras en valores económicos obtenidos con precisión.',
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
        title: isEn ? 'Data extraction from reports and PDFs' : 'Extracción de datos desde reportes y PDFs',
        description: isEn
          ? 'A lot of financial data lives in quarterly reports, regulatory files, prospectuses, or investor relations PDFs. We read them, structure them, and deliver them as data, not documents.'
          : 'Muchos datos financieros están en reportes trimestrales, archivos de regulador, prospectos o PDFs de investor relations. Los leemos, los estructuramos y te los entregamos como datos, no como documentos.'
      },
      {
        icon: TrendingUp,
        title: isEn ? 'Custom delivery frequency' : 'Frecuencia de entrega a medida',
        description: isEn
          ? 'You need daily, intraday, weekly, or monthly updates. We configure the frequency to your case and sustain it without any intervention on your end.'
          : 'Necesitas actualizaciones diarias, intradía, semanales o mensuales. Configuramos la frecuencia según tu caso y la sostenemos sin intervención de tu lado.'
      },
      {
        icon: Target,
        title: isEn ? 'Validation before delivery' : 'Validación previa a la entrega',
        description: isEn
          ? 'Before the data reaches your operation, we check that it makes sense. If something falls outside the historical range, we flag it and review it.'
          : 'Antes de que los datos lleguen a tu operación, revisamos que tengan sentido. Si algo se sale del rango histórico, lo marcamos y lo revisamos.'
      },
      {
        icon: Shield,
        title: isEn ? 'Delivery in the format you already use' : 'Entrega en el formato que ya usas',
        description: isEn
          ? 'CSV, Excel, JSON, API, or direct insertion into your database. No intermediate steps or adaptations on your end.'
          : 'CSV, Excel, JSON, API o inserción directa en tu base de datos. Sin pasos intermedios ni adaptaciones de tu lado.'
      }
    ],
    needThisTitle: isEn ? 'Why prioritize localized financial data collection' : 'Por qué priorizar el levantamiento de data financiera localizada',
    needThisDescription: isEn ? 'If you rely exclusively on centralized market providers like Bloomberg that impose exorbitant costs, lacking certain regional and decentralized public bond indicators that you specifically require.' : 'Si dependes exclusivamente de proveedores de mercado centralizados como Bloomberg que imponen costos exorbitantes, careciendo además de ciertos indicadores regionales y de bonos públicos descentralizados que tu mismo requieres.',
    helpYouSub: isEn ? 'Data & Fintech' : 'Data y Fintech',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We generate persistent flows by silently connecting to any monetary entity or report, downloading PDFs, reading HTML, and serving it to your banking core as a fresh data service.' : 'Generamos flujos persistentes conectándonos silenciosamente sobre cualquier ente o reporte monetario, descargando PDFs, leyendo el HTML y sirviéndolo a tu core bancario como un servicio de datos fresco.',
    helpYouList: isEn ? [
      'We collect financial metrics from public sources: exchanges, regulators, open databases, corporate portals.',
      'We read numbers inside PDFs, scanned reports, and complex tables.',
      'We deliver at the frequency your team needs, without waiting or reprocessing.',
      'We validate data before every delivery so no noise enters your models.'
    ] : [
      'Recopilamos métricas financieras de fuentes públicas: bolsas, reguladores, bases abiertas, portales corporativos.',
      'Leemos números que están dentro de PDFs, reportes escaneados y tablas complejas.',
      'Entregamos con la frecuencia que tu equipo necesita, sin esperar ni reprocesar.',
      'Validamos los datos antes de cada entrega para que no entren ruidos a tus modelos.'
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
    description: isEn ? 'Adjust your commercial offer in real time and without technical friction. Take control of inventory by tracking your competition\'s stock.' : 'Ajusta tu oferta comercial en tiempo real y sin fricciones técnicas. Toma el control del inventario rastreando el stock de tu competencia.',
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
    description: isEn ? 'Measure the real impact of your campaigns and your positioning. Detect trends and brand mentions to lead the conversation in your sector.' : 'Mide el impacto real de tus campañas y tu posicionamiento. Detecta tendencias y menciones de marca para liderar la conversación en tu sector.',
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
        title: isEn ? 'Coverage of relevant external sources' : 'Cobertura de fuentes externas relevantes',
        description: isEn
          ? 'We work on competitor websites, sector portals, press, forums, directories, and other public sources that matter for your brand. We define the list together at the start.'
          : 'Trabajamos sobre webs de competidores, portales sectoriales, prensa, foros, directorios y otras fuentes públicas que importen para tu marca. La lista la definimos juntos al inicio.'
      },
      {
        icon: Target,
        title: isEn ? 'Data translated into marketing language' : 'Datos traducidos a lenguaje de marketing',
        description: isEn
          ? 'Instead of delivering raw HTML, we structure the data into fields your team already understands: product, price, offer, mentions, topics, author, date, channel. Ready for dashboards or reports.'
          : 'En vez de entregarte HTML crudo, estructuramos los datos en campos que tu equipo ya entiende: producto, precio, oferta, menciones, temas, autor, fecha, canal. Listos para tableros o reportes.'
      },
      {
        icon: Zap,
        title: isEn ? 'Recurring delivery without technical friction' : 'Entrega recurrente sin fricción técnica',
        description: isEn
          ? 'We define the frequency (daily, weekly, monthly) and updates arrive on their own. No need to manage scrapers or deal with sources that change.'
          : 'Definimos la frecuencia (diaria, semanal, mensual) y te llegan las actualizaciones solas. No necesitas gestionar scrapers ni pelearte con fuentes que cambian.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Integration with the tools you already use' : 'Integración con las herramientas que ya usas',
        description: isEn
          ? 'We deliver in CSV, Excel, Google Sheets, or direct import to your BI or data warehouse. No need to change your stack to consume the data.'
          : 'Entregamos en CSV, Excel, Google Sheets, import directo a tu BI o a tu data warehouse. No tenés que cambiar tu stack para consumir los datos.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need Marketing Web Scraping' : 'Cómo saber si necesitas Web Scraping de Marketing',
    needThisDescription: isEn ? 'If your marketing department wastes weeks grouping competitor data in Excel sheets and manually tabulating audiences, automated Web Scraping strongly urges itself upon you.' : 'Si tu departamento de marketing desperdicia semanas agrupando datos de la competencia en Excels y tabulando audiencias manualmente, el Web Scraping automatizado te urge fuertemente.',
    helpYouSub: isEn ? 'Data & Campaigns' : 'Data y Campañas',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'Our dedicated team of engineers orchestrates the retrieval of social data, competitor advertising, and prices to give you real direction before launching or running ads online.' : 'Nuestro equipo dedicado de ingenieros orquesta la recuperación de datos sociales, publicidades ajenas y precios para darte la directriz real antes de lanzar o pautar online.',
    helpYouList: isEn ? [
      'We define with you which external data feeds your marketing decisions.',
      'We monitor sources on a recurring basis, without your team having to do it manually.',
      'We deliver ready-made tables for your analysts or agency to use directly.',
      'When a source changes or a new one appears, we handle it.'
    ] : [
      'Definimos con vos qué datos externos alimentan tus decisiones de marketing.',
      'Monitoreamos las fuentes de forma recurrente, sin que tu equipo tenga que hacerlo manual.',
      'Te entregamos tablas listas para que tus analistas o tu agencia las usen directo.',
      'Cuando una fuente cambia o aparece una nueva, lo resolvemos nosotros.'
    ],
    ctaTitle: isEn ? 'Multiply your ROI and prospect conversion by backing your decisions with precise data' : 'Multiplica tu ROI y la conversión de prospectos respaldando tus decisiones con datos precisos',
    ctaDescription: '',
    faqs: [
      {
        question: isEn
          ? 'How is this different from a marketing analytics tool like GA4?'
          : '¿En qué se diferencia esto de un marketing analytics como GA4?',
        answer: isEn
          ? 'GA4 measures what happens inside your site. We give you what happens outside: competition, mentions, trends, industry content. They complement each other, they don\'t compete.'
          : 'GA4 mide lo que pasa dentro de tu sitio. Nosotros te damos lo que pasa fuera: competencia, menciones, tendencias, contenido del sector. Se complementan, no compiten.'
      },
      {
        question: isEn
          ? 'What types of external data can you extract?'
          : '¿Qué tipo de datos externos pueden extraer?',
        answer: isEn
          ? 'Whatever is publicly available on the web: competitor prices, launches, promotions, brand mentions, press articles, forum content, rankings, search results, and other sources. The scope is agreed at the start.'
          : 'Lo que esté públicamente disponible en la web: precios de competidores, lanzamientos, promociones, menciones de marca, artículos de prensa, contenido de foros, rankings, resultados de búsqueda y otras fuentes. El alcance lo acordamos al inicio.'
      },
      {
        question: isEn
          ? 'How often do you update the data?'
          : '¿Con qué frecuencia actualizan los datos?',
        answer: isEn
          ? 'At whatever frequency works for you. Competitive intelligence cases usually request daily or weekly frequency; trend cases can be monthly. We define it together.'
          : 'En la que te sirva. Los casos de competencia suelen pedir frecuencia diaria o semanal, los de tendencias pueden ser mensuales. Lo definimos juntos.'
      },
      {
        question: isEn
          ? 'How do you deliver the data to my marketing team?'
          : '¿Cómo entregan los datos a mi equipo de marketing?',
        answer: isEn
          ? 'In the format they already use: Excel, Google Sheets, CSV, or directly to your BI tool. We can also load it to a database or system of your choice.'
          : 'En el formato que ya usan: Excel, Google Sheets, CSV, o directo a tu herramienta de BI. También podemos cargar a una base o sistema de tu elección.'
      },
      {
        question: isEn
          ? 'Do you also do the analysis or just deliver the data?'
          : '¿Hacen también el análisis o solo entregan los datos?',
        answer: isEn
          ? 'Our focus is delivering clean, structured data. The analysis and interpretation are done by your team or agency, because they know the business context better than anyone.'
          : 'Nuestro foco es entregarte los datos limpios y estructurados. El análisis y la interpretación los hace tu equipo o tu agencia, porque conocen el contexto del negocio mejor que nadie.'
      }
    ]
  },
  'indexacion-inmobiliaria': {
    slug: 'indexacion-inmobiliaria',
    badge: 'Real Estate',
    titlePart1: '',
    titlePartGradient: isEn ? 'Real Estate Indexing' : 'Indexación Inmobiliaria',
    titlePart2: '',
    description: isEn ? 'Capitalize on every opportunity through early offer detection. Access precise valuations with mass capture of listings and variations.' : 'Capitaliza cada oportunidad mediante la detección temprana de ofertas. Accede a valoraciones precisas con la captura masiva de listados y variaciones.',
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
        title: isEn ? 'Coverage of portals and geographic areas' : 'Cobertura de portales y zonas geográficas',
        description: isEn
          ? 'We define together which portals, cities, provinces, or countries to work on. We can cover one or several portals at once, with the same data structure so you can compare them.'
          : 'Definimos juntos sobre qué portales, ciudades, provincias o países trabajamos. Podemos cubrir uno o varios portales a la vez, con la misma estructura de datos para que los compares.'
      },
      {
        icon: Target,
        title: isEn ? 'Standardized real estate fields' : 'Campos inmobiliarios estandarizados',
        description: isEn
          ? 'Each listing arrives with consistent fields: price, currency, area, bedrooms, bathrooms, location, coordinates, attributes, operation type, publication date, status. Defined at the start alongside your schema.'
          : 'Cada listado llega con campos consistentes: precio, moneda, superficie, habitaciones, baños, ubicación, coordenadas, atributos, tipo de operación, fecha de publicación, estado. Lo definimos al inicio junto con tu esquema.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Historical data and time evolution' : 'Histórico y evolución temporal',
        description: isEn
          ? 'Beyond active listings, we can deliver price history, changes, new listings, and delistings so you can measure real market evolution in the areas that matter to you.'
          : 'Además de los listados activos, podemos entregar el histórico de precios, cambios, altas y bajas, para que midas la evolución real del mercado en las zonas que te importan.'
      },
      {
        icon: Shield,
        title: isEn ? 'Delivery to your analysis tool or product' : 'Entrega en tu herramienta de análisis o producto',
        description: isEn
          ? 'CSV, Excel, JSON, via API, or direct import to your database or data warehouse. We define the schema at the start so it fits your model.'
          : 'CSV, Excel, JSON, via API o import directo a tu base o data warehouse. Definimos el esquema al inicio para que encaje con tu modelo.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need Real Estate analytics' : 'Cómo saber si necesitas analítica en Real Estate',
    needThisDescription: isEn ? 'If your franchise agents must manually cross comparables for hours just to appraise a property, while the real investment opportunity (Deal) reaches competitors first.' : 'Si los agentes de tu franquicia deben entrar a mano cruzando comparables por horas enteras solo para tasar una propiedad, mientras la verdadera oportunidad de inversión (Deal) le llega antes a la competencia.',
    helpYouSub: isEn ? 'Proptech Data' : 'Proptech Data',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We collect the entire universe of listings from real estate portals and aggregators, processing latitude, sqm, description, and prices to deliver a Datawarehouse ready to filter and target.' : 'Recolectamos el universo entero de publicaciones provenientes de portales inmobiliarios y agregadores, procesando la latitud, m2, descripción y precios para entregarte un Datawarehouse listo para filtrar y atacar.',
    helpYouList: isEn ? [
      'We cover the real estate portals and areas that matter to you, not a generic sample.',
      'We structure each listing into consistent fields: price, area, bedrooms, location, attributes.',
      'We deliver historical data and recurring updates so you can measure market evolution.',
      'When a portal changes, we handle it before you notice.'
    ] : [
      'Cubrimos los portales inmobiliarios y las zonas que te importan, no un muestreo genérico.',
      'Estructuramos cada listado en campos consistentes: precio, superficie, habitaciones, ubicación, atributos.',
      'Te entregamos datos históricos y actualizaciones recurrentes para que puedas medir evolución.',
      'Cuando un portal cambia, lo resolvemos antes de que lo notes.'
    ],
    ctaTitle: isEn ? 'Gain your real estate advantage by ensuring decision-making with pure data' : 'Adquiere tu ventaja en el sector inmobiliario asegurándote la toma de decisiones con datos puros',
    ctaDescription: '',
    faqs: [
      {
        question: isEn
          ? 'Which portals can you work with?'
          : '¿Con qué portales pueden trabajar?',
        answer: isEn
          ? 'We work with real estate portals, marketplaces, and public classifieds sites. The specific list depends on your market and we define it in the first meeting.'
          : 'Trabajamos con portales inmobiliarios, marketplaces y sitios de clasificados públicos. La lista concreta depende de tu mercado y la definimos en la primera reunión.'
      },
      {
        question: isEn
          ? 'Can you deliver price history and changes?'
          : '¿Pueden entregar histórico de precios y cambios?',
        answer: isEn
          ? 'Yes. We can deliver the current state of listings and also the history (new listings, delistings, price changes) depending on the scope we define at the start. This is useful for measuring market evolution.'
          : 'Sí. Podemos entregar el estado actual de los listados y también el histórico (altas, bajas, cambios de precio) según el alcance que definamos al inicio. Esto es útil para medir evolución del mercado.'
      },
      {
        question: isEn
          ? 'How often do you update the data?'
          : '¿Con qué frecuencia actualizan los datos?',
        answer: isEn
          ? 'Daily, weekly, or monthly, depending on your use case. Active pricing cases require higher frequency; market analysis cases can be monthly.'
          : 'Diaria, semanal o mensual, según tu caso de uso. Los casos de pricing activo piden mayor frecuencia; los de análisis de mercado pueden ser mensuales.'
      },
      {
        question: isEn
          ? 'What happens when a portal changes its structure?'
          : '¿Qué pasa cuando un portal cambia su estructura?',
        answer: isEn
          ? 'Our team monitors every delivery and adapts the extraction when needed. If a change affects the schema, we reach out first with concrete options.'
          : 'Nuestro equipo monitorea cada entrega y adapta la extracción cuando hace falta. Si un cambio afecta el esquema, te escribimos antes con opciones concretas.'
      },
      {
        question: isEn
          ? 'In what format do I receive the data?'
          : '¿En qué formato recibo los datos?',
        answer: isEn
          ? 'CSV, Excel, JSON, via API, or directly to your database. We define the schema and destination at the start based on your product or analysis model.'
          : 'CSV, Excel, JSON, via API o directo a tu base. Definimos esquema y destino al inicio según tu producto o tu modelo de análisis.'
      }
    ]
  },
  'auditoria-seo': {
    slug: 'auditoria-seo',
    badge: 'Scraping for SEO',
    titlePart1: '',
    titlePartGradient: isEn ? 'SEO Audit' : 'Auditoría SEO',
    titlePart2: '',
    description: isEn ? 'Constantly improve your platform\'s organic ranking. Secure your visibility through automated tracking of search results.' : 'Mejora el ranking orgánico de tu plataforma de manera constante. Asegura tu visibilidad mediante el seguimiento automatizado de los resultados de búsqueda.',
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
        title: isEn ? 'Meta, headings, and structure extraction' : 'Extracción de meta, headings y estructura',
        description: isEn
          ? 'We crawl your sites or your competitors\' and extract titles, meta descriptions, headings, canonicals, hreflang, schema, and the structure of each page. Ideal for auditing at scale or monitoring changes on large sites.'
          : 'Recorremos tus sitios o los de tus competidores y extraemos títulos, meta descriptions, headings, canonicales, hreflang, schema y la estructura de cada página. Ideal para auditar a escala o monitorear cambios en sitios grandes.'
      },
      {
        icon: Shield,
        title: isEn ? 'SERP data by keyword and country' : 'Datos de SERPs por keyword y país',
        description: isEn
          ? 'We capture the search results your audience sees: positions, featured snippets, local results, and ads. We deliver them so your team can cross-reference with their own data.'
          : 'Capturamos los resultados de búsqueda que ve tu audiencia: posiciones, featured snippets, resultados locales y anuncios. Te los entregamos para que tu equipo los cruce con sus propios datos.'
      },
      {
        icon: TrendingUp,
        title: isEn ? 'Backlink data at high volume' : 'Datos de backlinks a gran volumen',
        description: isEn
          ? 'We extract incoming link data from reference sites for your competitive analyses. We deliver the dataset, not a tool.'
          : 'Extraemos datos de enlaces entrantes a sitios de referencia para tus análisis competitivos. Te entregamos el dataset, no una herramienta.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Competitor content clusters' : 'Clusters de contenido de competidores',
        description: isEn
          ? 'Maps of how the leading sites in your category structure their content: topics covered, depth, formats, internal links. Direct input for your editorial strategy.'
          : 'Mapas de cómo estructuran su contenido los sitios líderes de tu categoría: temas cubiertos, profundidad, formatos, enlaces internos. Insumo directo para tu estrategia editorial.'
      }
    ],
    needThisTitle: isEn ? 'When to adopt crawling and scraping for strategic SEO' : 'Cuándo adoptar el rastreo y scraping para SEO estratégico',
    needThisDescription: isEn ? 'If your traffic drops with Google updates without warning; or if your agency wastes fortunes crawling directories with low-capacity tools instead of owning the raw tactical map to generate their own semantic artificial intelligence.' : 'Si tu tráfico cae ante actualizaciones de Google sin advertencia; o si tu agencia gasta demasiado rastreando directorios con herramientas de baja capacidad, en vez de tener el mapa táctico en bruto para generar su propia inteligencia semántica.',
    helpYouSub: isEn ? 'Technical Search Intelligence' : 'Technical Search Intelligence',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We run hyper-lightweight robots capable of downloading hundreds of thousands of pages (including SPA Javascript-rendered) in parallel, processing their DOM hierarchy, links, schemas, and delivering them in an absolute dump.' : 'Ejecutamos robots livianos capaces de descargar en paralelo cientos de miles de páginas (incluso renderizadas en SPA Javascript), procesando su jerarquía DOM, enlaces, esquemas y entregando los resultados en un volcado completo.',
    helpYouList: isEn ? [
      'We extract SEO data from your own sites, competitors, SERPs, and public sources, at the volume you need.',
      'We deliver raw, structured data ready for your analysis, model, or dashboard.',
      'We support volumes that standard tools don\'t cover, or charge a premium to extend.',
      'We update datasets at the frequency your SEO team needs.'
    ] : [
      'Extraemos datos SEO desde sitios propios, competidores, SERPs y fuentes públicas, al volumen que necesites.',
      'Te entregamos los datos crudos y estructurados, listos para tu análisis, tu modelo o tu dashboard.',
      'Soportamos volúmenes que las herramientas estándar no cubren, o que cobran caro por extenderlos.',
      'Actualizamos los datasets con la frecuencia que tu equipo SEO necesita.'
    ],
    ctaTitle: isEn ? 'Conquer search engine rankings by grounding your strategy in infallible data volumes' : 'Conquista la cima del buscador fundamentando tu estrategia en volúmenes infalibles de datos',
    ctaDescription: '',
    faqs: [
      {
        question: isEn
          ? 'How is this different from an SEO tool like Ahrefs or Semrush?'
          : '¿En qué se diferencia esto de una herramienta SEO como Ahrefs o Semrush?',
        answer: isEn
          ? 'Those tools are ready-made products that cover many use cases. We solve what falls outside: huge volumes, specific sources, custom data structures, or direct integration into your database—without going through a monthly export.'
          : 'Esas herramientas son productos listos que cubren muchos casos. Nosotros resolvemos lo que queda afuera: volúmenes grandes, fuentes específicas, estructuras de datos a medida o integración directa en tu base de datos, sin pasar por un export mensual.'
      },
      {
        question: isEn
          ? 'Is this a consultative SEO audit?'
          : '¿Esto es una auditoría SEO consultiva?',
        answer: isEn
          ? 'No. This is raw, structured SEO data extraction for in-house SEO teams and agencies that already have analysts. If you need an audit with recommendations, ask us about our SEO consulting service.'
          : 'No. Esto es extracción de datos SEO en bruto y estructurados, para equipos SEO in-house y agencias que ya tienen analistas. Si necesitas una auditoría con recomendaciones, consúltanos por el servicio de consultoría SEO.'
      },
      {
        question: isEn
          ? 'Can you extract data from my competitors\' sites?'
          : '¿Pueden extraer datos de los sitios de mis competidores?',
        answer: isEn
          ? 'Yes, as long as it is public information. We crawl their pages and extract meta, headings, structure, internal links, and more. We give you the dataset in the format you use.'
          : 'Sí, siempre que sea información pública. Crawleamos sus páginas, extraemos meta, headings, estructura, enlaces internos y más. Te damos el dataset en el formato que uses.'
      },
      {
        question: isEn
          ? 'What volumes do you work at?'
          : '¿A qué volúmenes trabajan?',
        answer: isEn
          ? 'Whatever you need. We handle projects ranging from dozens of sites to millions of URLs in parallel. We discuss it based on your case.'
          : 'A los que necesites. Hacemos proyectos desde decenas de sitios hasta millones de URLs en paralelo. Lo discutimos en función de tu caso.'
      },
      {
        question: isEn
          ? 'How do I receive the data?'
          : '¿Cómo recibo los datos?',
        answer: isEn
          ? 'In CSV, JSON, API, or directly to your database. Many SEO teams load them into BigQuery, their internal data warehouse, or their analytics stack. We adapt to your setup.'
          : 'En CSV, JSON, API o directo a tu base de datos. Muchos equipos SEO los cargan en BigQuery, en su data warehouse interno o en su stack de análisis. Nos adaptamos.'
      }
    ]
  },
  'estrategias-de-pricing': {
    slug: 'estrategias-de-pricing',
    badge: 'Pricing Intelligence',
    titlePart1: '',
    titlePartGradient: isEn ? 'Pricing Strategies' : 'Estrategias de Pricing',
    titlePart2: '',
    description: isEn ? 'Protect your profit margins with a complete view of the market. Execute competitive adjustments based on price and promotion monitoring.' : 'Protege tus márgenes de beneficio con una visión total del mercado. Ejecuta ajustes competitivos basados en el monitoreo de precios y promociones.',
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
        title: isEn ? 'Coverage of products and stores tailored to you' : 'Cobertura de productos y tiendas a tu medida',
        description: isEn
          ? 'We work on the list of products and stores you define. We can start with a small subset and scale as the use case grows.'
          : 'Trabajamos sobre la lista de productos y tiendas que definas. Podemos arrancar con un subset pequeño y escalar a medida que el caso de uso crezca.'
      },
      {
        icon: TrendingUp,
        title: isEn ? 'Matching between your products and competitors\'' : 'Matching entre tus productos y los del competidor',
        description: isEn
          ? 'We define the matching key together (code, normalized title, attributes) so the price comparison is valid. This avoids comparing against non-equivalent products.'
          : 'Definimos juntos la clave de matching (código, título normalizado, atributos) para que la comparación de precios sea válida. Así evitas comparar contra productos que no son equivalentes.'
      },
      {
        icon: Shield,
        title: isEn ? 'Configurable frequency for your case' : 'Frecuencia configurable según tu caso',
        description: isEn
          ? 'Some pricing decisions need daily updates; others work fine with a weekly or monthly run. We define the optimal frequency in the first meeting.'
          : 'Hay decisiones de pricing que piden actualización diaria y otras que funcionan con una corrida semanal o mensual. Definimos la frecuencia óptima en la primera reunión.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Delivery ready for your pricing tool' : 'Entrega lista para tu herramienta de pricing',
        description: isEn
          ? 'CSV, Excel, JSON, via API, or direct import to your database or pricing tool. We define the schema at the start.'
          : 'CSV, Excel, JSON, via API o import directo a tu base o a tu herramienta de pricing. Definimos el esquema al inicio.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need to automate your Pricing Strategies' : 'Cómo saber si necesitas automatizar tus Estrategias de Pricing',
    needThisDescription: isEn ? 'If your sales team spends countless hours comparing market value against competitors manually via spreadsheets, and still always lags behind discounts... you need this service.' : 'Si tu equipo comercial pierde incontables horas homologando el valor de mercado contra tus competidores manualmente mediante hojas de cálculo, y aún así siempre vas detrás de los descuentos... necesitas este servicio.',
    helpYouSub: isEn ? 'Data Collection' : 'Data Collection',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'Our Price Intelligence service extracts, cleanses, and standardizes rate fluctuations across thousands of platforms to provide you with actionable alerts about your catalog.' : 'Nuestro servicio de Inteligencia de Precios se encarga de extraer, limpiar y estandarizar las fluctuaciones de tarifas en miles de plataformas para brindarte alertas accionables sobre tu catálogo.',
    helpYouList: isEn ? [
      'You define which products and stores to monitor. We set up the tracking.',
      'We deliver updated prices at the frequency your case needs.',
      'We match your products with equivalent competitor products so the comparison is useful.',
      'When a store changes, we handle it before your report arrives with gaps.'
    ] : [
      'Defines qué productos y qué tiendas quieres monitorear. Nosotros armamos el seguimiento.',
      'Entregamos precios actualizados con la frecuencia que tu caso necesita.',
      'Alineamos productos tuyos con productos equivalentes de competidores para que la comparación sea útil.',
      'Cuando una tienda cambia, lo resolvemos antes de que tu reporte llegue con huecos.'
    ],
    ctaTitle: isEn ? 'The power of expert talent ready to provide you with the best pricing strategies' : 'El poder del talento experto listo para proveerte las mejores estrategias de pricing',
    ctaDescription: '',
    faqs: [
      {
        question: isEn
          ? 'How do you match my products with my competitors\'?'
          : '¿Cómo hacen el matching entre mis productos y los de mis competidores?',
        answer: isEn
          ? 'We define the key together: universal code (if it exists), normalized title, brand, model, key attributes. With that key we group equivalent products so your comparison is useful.'
          : 'Definimos juntos la clave: código universal (si existe), título normalizado, marca, modelo, atributos clave. Con esa clave agrupamos productos equivalentes para que tu comparación sea útil.'
      },
      {
        question: isEn
          ? 'How often do you deliver prices?'
          : '¿Con qué frecuencia entregan los precios?',
        answer: isEn
          ? 'At the frequency your case needs: daily, several times a day, weekly, or monthly. For active pricing we usually recommend at least daily; for strategic analysis, weekly is sufficient.'
          : 'En la frecuencia que tu caso necesita: diaria, varias veces al día, semanal o mensual. Para pricing activo solemos recomendar al menos diario; para análisis estratégico, semanal es suficiente.'
      },
      {
        question: isEn
          ? 'Can you also monitor stock and promotions?'
          : '¿Pueden monitorear también stock y promociones?',
        answer: isEn
          ? 'Yes. Beyond price we can capture stock, promotions, discounts, coupons, bundles, and other attributes that affect the pricing decision. We agree on this in the scope definition at the start.'
          : 'Sí. Además del precio podemos capturar stock, promociones, descuentos, cupones, bundles y otros atributos que afectan la decisión de pricing. Lo acordamos en el alcance al inicio.'
      },
      {
        question: isEn
          ? 'What happens when a competitor changes their site or hides prices?'
          : '¿Qué pasa cuando un competidor cambia su sitio o esconde los precios?',
        answer: isEn
          ? 'Our team monitors every delivery. When there are changes that affect the capture, we adjust the extraction before the next run. If the change prevents covering that source, we notify you with options.'
          : 'Nuestro equipo monitorea cada entrega. Cuando hay cambios que afectan la captura, ajustamos la extracción antes de la siguiente corrida. Si el cambio impide seguir cubriendo esa fuente, te avisamos con opciones.'
      },
      {
        question: isEn
          ? 'In what format do I receive the data?'
          : '¿En qué formato recibo los datos?',
        answer: isEn
          ? 'CSV, Excel, JSON, API, or direct import to your database or pricing tool. We define the schema and destination at the start.'
          : 'CSV, Excel, JSON, API o import directo a tu base de datos o herramienta de pricing. Definimos el esquema y el destino al inicio.'
      }
    ]
  },
  'entrenamiento-de-ia': {
    slug: 'entrenamiento-de-ia',
    badge: 'AI Training',
    titlePart1: '',
    titlePartGradient: isEn ? 'AI Training' : 'Entrenamiento de IA',
    titlePart2: '',
    description: isEn ? 'Scale your product\'s intelligence with data ready to process. Feed your algorithms through the processing of unstructured sites.' : 'Escala la inteligencia de tu producto con datos listos para procesar. Alimenta tus algoritmos mediante el procesamiento de sitios no estructurados.',
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
        title: isEn ? 'Source coverage agreed case by case' : 'Cobertura de fuentes acordada caso por caso',
        description: isEn
          ? 'We define together which sites go into the dataset, with what criteria, and what volume. We can start with a small pilot, measure quality, and scale.'
          : 'Definimos juntos qué sitios entran al dataset, con qué criterios y qué volumen. Podemos arrancar con un piloto pequeño, medir la calidad y escalar.'
      },
      {
        icon: Sparkles,
        title: isEn ? 'Cleaning before delivery' : 'Limpieza antes de entregar',
        description: isEn
          ? 'Each dataset is delivered clean: duplicates removed, normalized text, consistent encoding, ordered metadata. Your team does not spend time preprocessing.'
          : 'Cada dataset se entrega limpio: duplicados removidos, texto normalizado, encoding consistente, metadata ordenada. Tu equipo no pierde tiempo en preprocesar.'
      },
      {
        icon: Shield,
        title: isEn ? 'Labeling according to your training schema' : 'Etiquetado según tu esquema de training',
        description: isEn
          ? 'If your model needs pairs, classes, spans, bounding boxes, or another format, we apply it during extraction. We define the schema at the start and follow it in every delivery.'
          : 'Si tu modelo necesita pares, clases, spans, bounding boxes u otro formato, lo aplicamos al extraer. Definimos el esquema al inicio y lo respetamos en cada entrega.'
      },
      {
        icon: Zap,
        title: isEn ? 'Delivery in the format your training pipeline consumes' : 'Entrega en el formato que tu pipeline de training consume',
        description: isEn
          ? 'JSONL, CSV, parquet, files by class, or directly to your storage. We define the destination at the start so your team can begin training without intermediate steps.'
          : 'JSONL, CSV, parquet, archivos por clase, o directo a tu almacenamiento. Definimos el destino al inicio para que tu equipo pueda empezar a entrenar sin pasos intermedios.'
      }
    ],
    needThisTitle: isEn ? 'When to rely on us for training your AI' : 'Cuándo apoyarte en nosotros para entrenar tu IA',
    needThisDescription: isEn ? 'If your data science team spends more than 60% of their time cleaning malformed HTML code or devising ways to bypass blocks to scrape forums and news, it\'s time to delegate data acquisition.' : 'Si tu equipo de científicos de datos pasa más del 60% de su tiempo limpiando código HTML mal formateado o buscando formas de sortear bloqueos para extraer datos de foros y noticias, es el momento de delegar la obtención del dato.',
    helpYouSub: isEn ? 'AI & Data Engineering' : 'AI & Data Engineering',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We provide the absolute pipeline for collection and transformation of information, structuring immense knowledge banks from forums, records, and papers that will serve as the foundational base for your next algorithm.' : 'Proveemos el flujo completo de recolección y transformación de la información, estructurando grandes bases de conocimiento de foros, registros y documentos que servirán como base fundacional para tu próximo modelo.',
    helpYouList: isEn ? [
      'We define together what data your model needs and in what format.',
      'We extract from the agreed sources and clean the data before delivery.',
      'We apply the labeling schema you use: JSONL format, input-output pairs, structured columns, or whatever your training pipeline requires.',
      'When you need more data (volume, domain, language), we add it without starting from scratch.'
    ] : [
      'Definimos juntos qué datos necesita tu modelo y en qué formato.',
      'Extraemos desde las fuentes acordadas y limpiamos los datos antes de entregarlos.',
      'Aplicamos el esquema de etiquetado que uses: formato JSONL, pares input-output, columnas estructuradas, o lo que tu pipeline de training pida.',
      'Cuando necesites más datos (volumen, dominio, idioma), los incorporamos sin empezar de cero.'
    ],
    ctaTitle: isEn ? 'Feed the potential of your AI models with our data factory' : 'Alimenta el potencial de tus modelos de IA con nuestra factoría de datos',
    ctaDescription: '',
    faqs: [
      {
        question: isEn
          ? 'What types of data can you extract for training?'
          : '¿Qué tipos de datos pueden extraer para training?',
        answer: isEn
          ? 'Text (articles, documentation, forums, reviews), tables, full pages, multilingual content, images, PDFs, or scanned documents. The specific scope depends on your model\'s use case.'
          : 'Texto (artículos, documentación, foros, reseñas), tablas, páginas completas, contenido multilingüe, imágenes, documentos en PDF o escaneados. El alcance concreto depende del caso de uso de tu modelo.'
      },
      {
        question: isEn
          ? 'Can you deliver labeled data?'
          : '¿Pueden entregar los datos con etiquetas?',
        answer: isEn
          ? 'Yes, when labels can be derived from the source or from a schema we define together. For complex human labeling we evaluate it case by case depending on the project.'
          : 'Sí, cuando las etiquetas se pueden derivar de la fuente o de un esquema que definamos juntos. Para etiquetado humano complejo lo evaluamos caso a caso según el proyecto.'
      },
      {
        question: isEn
          ? 'How do you handle duplicates and dataset quality?'
          : '¿Cómo manejan duplicados y calidad del dataset?',
        answer: isEn
          ? 'We apply deduplication, text normalization, and schema validation before each delivery. If the dataset has special quality requirements (class balance, minimum length, language), we apply them to the process.'
          : 'Aplicamos deduplicación, normalización de texto y validación de esquema antes de cada entrega. Si el dataset tiene requisitos especiales de calidad (balance por clase, longitud mínima, idioma), los aplicamos al proceso.'
      },
      {
        question: isEn
          ? 'In what format do you deliver datasets?'
          : '¿En qué formato entregan los datasets?',
        answer: isEn
          ? 'JSONL, CSV, parquet, or files organized according to the structure your training pipeline expects. We define this at the start.'
          : 'JSONL, CSV, parquet, o archivos organizados según la estructura que tu pipeline de training espera. Lo definimos al inicio.'
      },
      {
        question: isEn
          ? 'Can you grow the dataset over time?'
          : '¿Pueden crecer el dataset con el tiempo?',
        answer: isEn
          ? 'Yes. Many training projects start with a base dataset and then grow with additional batches (more sources, more domains, more languages). We run those cycles on a recurring basis.'
          : 'Sí. Muchos proyectos de training arrancan con un dataset base y después crecen con lotes adicionales (más fuentes, más dominios, más idiomas). Operamos esos ciclos de forma recurrente.'
      }
    ]
  },
  'comparativa-de-vuelos': {
    slug: 'comparativa-de-vuelos',
    badge: 'Travel Insights',
    titlePart1: '',
    titlePartGradient: isEn ? 'Flight Comparison' : 'Comparativa de Vuelos',
    titlePart2: '',
    description: isEn ? 'Optimize the competitiveness of your booking engine in real time. Access updated airfares and routes to guarantee the best offer.' : 'Optimiza la competitividad de tu motor de reservas en tiempo real. Accede a tarifas aéreas y rutas actualizadas para garantizar la mejor oferta.',
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
        icon: Target,
        title: isEn ? 'Route and origin coverage tailored to your operation' : 'Cobertura de rutas y orígenes a tu medida',
        description: isEn ? 'We work on the routes, origins, and sources that your operation defines. We can cover a few critical routes or a broad map, depending on the case.' : 'Trabajamos sobre las rutas, orígenes y fuentes que defina tu operación. Podemos cubrir un par de rutas críticas o un mapa amplio, según el caso.'
      },
      {
        icon: Zap,
        title: isEn ? 'Configurable freshness for your use case' : 'Frescura configurable según tu caso',
        description: isEn ? 'Flight prices move fast. We define the capture frequency your product needs and make sure it keeps running over time.' : 'Los precios de vuelos se mueven rápido. Definimos la frecuencia de captura que tu producto necesita, y nos encargamos de que siga funcionando en el tiempo.'
      },
      {
        icon: Database,
        title: isEn ? 'Full context for every fare' : 'Contexto completo de cada tarifa',
        description: isEn ? 'Each record arrives with the relevant fields: price, currency, airline, flight date and time, stopovers, class, baggage, availability, and capture date. So your analysis has all the context.' : 'Cada registro llega con los campos relevantes: precio, moneda, aerolínea, fecha y hora de vuelo, escalas, clase, equipaje, disponibilidad y fecha de captura. Así tu análisis tiene todo el contexto.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Delivery into your product or your model' : 'Entrega en tu producto o tu modelo',
        description: isEn ? 'CSV, Excel, JSON, via API, or direct import to your database or data warehouse. We define the destination upfront so it fits your stack.' : 'CSV, Excel, JSON, vía API o import directo a tu base o data warehouse. Definimos el destino al inicio para que encaje con tu stack.'
      }
    ],
    needThisTitle: isEn ? 'How to know if you need Flight Scraping' : 'Cómo saber si necesitas el Scraping de Vuelos',
    needThisDescription: isEn ? 'Consolidating airline prices through third-party aggregators can be costly, with limited margins and not always reliable data. If you\'re an OTA looking to do without expensive APIs, this is the way.' : 'Consolidar precios de aerolíneas a través de agregadores de terceros puede resultar costoso, con márgenes limitados y data no siempre fidedigna. Si eres una OTA y buscas prescindir de costosas APIS, esta es la forma.',
    helpYouSub: isEn ? 'Travel Data' : 'Travel Data',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We extract and cross-reference data from root airline portals or leading engines. We structure duration, cost, and flight type via scripts ready to inject this knowledge directly into your vacation software UI.' : 'Extraemos y cruzamos datos desde los portales raíz de las aerolíneas o motores líderes. Estructuramos la duración, el costo y el tipo de vuelo mediante scripts listos para inyectar este conocimiento directo en la UI de tu software vacacional.',
    helpYouList: isEn ? [
      'We define together the routes, origins, and sources that go into each cycle.',
      'We monitor at the frequency that works for you: several times a day, daily, or weekly.',
      'We deliver each fare with its full context: stopovers, airline, class, baggage, and capture date.',
      'When a source changes, we adjust the flow so your product is never left in the dark.'
    ] : [
      'Definimos juntos las rutas, los orígenes y las fuentes que entran en cada ciclo.',
      'Monitoreamos con la frecuencia que te sirve: varias veces al día, diario, semanal.',
      'Te entregamos cada tarifa con su contexto: escalas, aerolínea, clase, equipaje, fecha de captura.',
      'Cuando una fuente cambia, ajustamos el flujo para que tu producto no quede a ciegas.'
    ],
    ctaTitle: isEn ? 'Automate your fare collection and take off above the competition' : 'Automatiza tu recaudo tarifario y despega sobre la competencia',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'Which routes can you monitor?' : '¿Qué rutas pueden monitorear?',
        answer: isEn ? 'The ones we define in the proposal based on your use case. They can be critical routes for your product, specific markets, or a broad map by region. The scope adjusts to your operation.' : 'Las que definamos en la propuesta según tu caso de uso. Pueden ser rutas críticas para tu producto, mercados concretos o un mapa amplio por región. El alcance se ajusta a tu operación.'
      },
      {
        question: isEn ? 'How often do you update fares?' : '¿Con qué frecuencia actualizan las tarifas?',
        answer: isEn ? 'At the frequency your product needs. Operational cases (OTA, active agency) usually request capture several times a day; trend analysis cases, daily or weekly.' : 'En la frecuencia que tu producto necesita. Los casos operativos (OTA, agencia activa) suelen pedir captura varias veces al día; los casos de análisis de tendencias, diaria o semanal.'
      },
      {
        question: isEn ? 'What fields do you deliver per fare?' : '¿Qué campos entregan por tarifa?',
        answer: isEn ? 'Origin, destination, date and time, airline, flight code, stopovers, class, price, currency, baggage, availability, capture date. The final list is agreed upon at the start based on your case.' : 'Origen, destino, fecha y hora, aerolínea, código de vuelo, escalas, clase, precio, moneda, equipaje, disponibilidad, fecha de captura. El listado final se acuerda al inicio según tu caso.'
      },
      {
        question: isEn ? 'What happens when a source changes or starts restricting access?' : '¿Qué pasa cuando una fuente cambia o empieza a restringir?',
        answer: isEn ? 'We monitor every delivery. When there are changes, we adapt the extraction before the next run. If a source is no longer viable, we reach out with alternatives.' : 'Monitoreamos cada entrega. Cuando hay cambios, adaptamos la extracción antes de la siguiente corrida. Si una fuente deja de ser viable, te escribimos con alternativas.'
      },
      {
        question: isEn ? 'In what format do I receive the data?' : '¿En qué formato recibo los datos?',
        answer: isEn ? 'CSV, Excel, JSON, via API, or directly to your database or data warehouse. We define the schema and destination at the start.' : 'CSV, Excel, JSON, vía API o directo a tu base o tu data warehouse. Definimos el esquema y el destino al inicio.'
      }
    ]
  },
  'gestion-de-reputacion': {
    slug: 'gestion-de-reputacion',
    badge: 'Brand Sentiment',
    titlePart1: '',
    titlePartGradient: isEn ? 'Reputation Management' : 'Gestión de Reputación',
    titlePart2: '',
    description: isEn ? 'Protect your brand image with critical care for public perception. Identify sentiments through the collection of reviews on key platforms.' : 'Protege tu imagen de marca con un cuidado crítico de la percepción pública. Identifica sentimientos mediante la recolección de reseñas en plataformas clave.',
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
        icon: Globe,
        title: isEn ? 'Coverage of public sources' : 'Cobertura de fuentes públicas',
        description: isEn ? 'We work on review portals, forums, opinion sites, press, marketplaces, and other public sources where your brand appears. We define the specific list together.' : 'Trabajamos sobre portales de reseñas, foros, sitios de opinión, prensa, marketplaces y otras fuentes públicas donde aparezca tu marca. La lista concreta la definimos juntos.'
      },
      {
        icon: Database,
        title: isEn ? 'Structured mentions, not loose text' : 'Menciones estructuradas, no texto suelto',
        description: isEn ? 'Each mention arrives with source, URL, author (when public), date, content type, rating (if applicable), full text, and relevant metadata. Your team does not have to scrape anything.' : 'Cada mención llega con fuente, URL, autor (cuando es público), fecha, tipo de contenido, rating (si aplica), texto completo y metadatos relevantes. Tu equipo no tiene que raspar nada.'
      },
      {
        icon: TrendingUp,
        title: isEn ? 'Recurring updates with historical data' : 'Actualización recurrente con histórico',
        description: isEn ? 'We capture new mentions at the frequency that works for you and maintain the historical record so you can measure the evolution of the conversation, not just the snapshot of the day.' : 'Capturamos las menciones nuevas en la frecuencia que te sirva y mantenemos el histórico para que puedas medir evolución de la conversación, no solo el snapshot del día.'
      },
      {
        icon: BarChart,
        title: isEn ? 'Delivery into your analytics tool' : 'Entrega en tu herramienta de análisis',
        description: isEn ? 'CSV, Excel, JSON, via API, or direct import to your database or analytics tool. We define the schema at the start.' : 'CSV, Excel, JSON, vía API o import directo a tu base o a tu herramienta de analítica. El esquema lo definimos al inicio.'
      }
    ],
    needThisTitle: isEn ? 'Why prioritize reputation management (Review Scraping)' : 'Por qué priorizar la gestión de la reputación (Review Scraping)',
    needThisDescription: isEn ? 'If you have hundreds or thousands of locations, products, and digital channels to manage, maintaining manual traceability of "what the customer says" is utopian and a potential time bomb.' : 'Si tienes cientos o miles de locaciones, productos y canales digitales que atender, mantener la trazabilidad manual de "qué dice el cliente" es utópico y una potencial bomba de tiempo.',
    helpYouSub: isEn ? 'Data Collection' : 'Data Collection',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We handle the complex technical task of connecting to dozens of different rating forums and networks, adapting to each design, extracting stars, comments, dates, and idiosyncrasies, delivering it to your unified CRM.' : 'Manejamos la compleja tarea técnica de conectarnos a decenas de foros y redes de valoración distintas, adaptándonos al diseño de cada uno, extrayendo las estrellas, comentarios, fechas e idiosincracia, para entregártelo en tu propio CRM unificado.',
    helpYouList: isEn ? [
      'We define together the sources where your brand appears and the ones you care about monitoring.',
      'We capture each new mention with its context, at the frequency that works for you.',
      'We deliver structured data — not screenshots or loose threads.',
      'We can build a historical record so you can measure the evolution of the conversation over time.'
    ] : [
      'Definimos juntos las fuentes donde tu marca aparece y las que te importa monitorear.',
      'Capturamos cada mención nueva con su contexto, en la frecuencia que te sirva.',
      'Te entregamos datos estructurados, no capturas de pantalla ni hilos sueltos.',
      'Podemos armar histórico para que midas evolución de la conversación en el tiempo.'
    ],
    ctaTitle: isEn ? 'Know everything your customers say with our Data Factory infrastructure' : 'Conoce todo lo que opinan tus clientes con nuestra infraestructura Data Factory',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'Which sources can you monitor?' : '¿Qué fuentes pueden monitorear?',
        answer: isEn ? 'Review portals, public forums, opinion sites, online press, marketplaces, sector directories, and other sources where your brand or products appear. The specific list depends on your case and is agreed upon in the first meeting.' : 'Portales de reseñas, foros públicos, sitios de opinión, prensa online, marketplaces, directorios sectoriales y otras fuentes donde tu marca o tus productos aparezcan. La lista concreta depende de tu caso y se acuerda en la primera reunión.'
      },
      {
        question: isEn ? 'How often do you capture new mentions?' : '¿Con qué frecuencia capturan menciones nuevas?',
        answer: isEn ? 'Daily, weekly, or at custom intervals. Brands with high exposure usually request daily capture; smaller categories work well with weekly.' : 'Diaria, semanal o en intervalos personalizados. Las marcas con alta exposición suelen pedir captura diaria; las categorías más pequeñas funcionan bien con semanal.'
      },
      {
        question: isEn ? 'Do you work case by case or with a fixed catalog?' : '¿Trabajan caso por caso o con un catálogo fijo?',
        answer: isEn ? 'Each client has their own configuration: sources, keywords, languages, regions, delivery schema. We define it together at kickoff and adjust as the case evolves, with close communication between our team and yours.' : 'Cada cliente tiene una configuración propia: fuentes, keywords, idiomas, regiones, esquema de entrega. Lo definimos juntos en el kickoff y lo ajustamos a medida que el caso evoluciona, con comunicación cercana entre nuestro equipo y el tuyo.'
      },
      {
        question: isEn ? 'Do you analyze the sentiment of mentions?' : '¿Analizan el sentimiento de las menciones?',
        answer: isEn ? 'When applicable, we deliver a sentiment estimate as an additional field. The business interpretation is done by your team, who knows the context. We do not promise an exhaustive emotional analysis.' : 'Cuando aplica, entregamos una estimación de sentimiento como campo adicional. La interpretación de negocio la hace tu equipo, que conoce el contexto. No prometemos un análisis exhaustivo de emociones.'
      },
      {
        question: isEn ? 'In what format do I receive the data?' : '¿En qué formato recibo los datos?',
        answer: isEn ? 'CSV, Excel, JSON, via API, or directly to your database or analytics tool. We define the schema and destination at the start.' : 'CSV, Excel, JSON, vía API o directo a tu base de datos o herramienta de analítica. Definimos esquema y destino al inicio.'
      }
    ]
  },
  'tendencias-laborales': {
    slug: 'tendencias-laborales',
    badge: 'Recruitment Data',
    titlePart1: '',
    titlePartGradient: isEn ? 'Labor Trends' : 'Tendencias Laborales',
    titlePart2: '',
    description: isEn ? 'Ground your human capital decisions with real sector data. Fuel your recruitment platforms by analyzing job offers and salary scales.' : 'Fundamenta tus decisiones de capital humano con datos reales del sector. Nutre tus plataformas de reclutamiento analizando ofertas de empleo y escalas salariales.',
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
        icon: Globe,
        title: isEn ? 'Portal and region coverage' : 'Cobertura de portales y regiones',
        description: isEn ? 'We work on public job portals, sector boards, and company sites in the regions that matter to you. The specific list is defined at the start based on your product or coverage area.' : 'Trabajamos sobre portales de empleo públicos, bolsas sectoriales y sitios de empresa en las regiones que te importen. La lista concreta se define al inicio según tu producto o tu área de cobertura.'
      },
      {
        icon: FileStack,
        title: isEn ? 'Structured job postings with the fields that matter' : 'Avisos estructurados con los campos que importan',
        description: isEn ? 'Each job posting arrives with company, position, location, modality (on-site, remote, hybrid), publication date, description, listed skills, and salary ranges when available.' : 'Cada job posting llega con empresa, puesto, ubicación, modalidad (presencial, remoto, híbrido), fecha de publicación, descripción, skills listadas y rangos salariales cuando están disponibles.'
      },
      {
        icon: TrendingUp,
        title: isEn ? 'Historical data to measure evolution' : 'Histórico para medir evolución',
        description: isEn ? 'In addition to the daily snapshot, we build a history of postings, changes, additions, and removals so your product can show how the labor market evolves in the categories you cover.' : 'Además del snapshot del día, armamos histórico de avisos, cambios, altas y bajas para que tu producto muestre evolución del mercado laboral en las categorías que cubras.'
      },
      {
        icon: Database,
        title: isEn ? 'Delivery into your product or talent model' : 'Entrega en tu producto o tu modelo de talent',
        description: isEn ? 'CSV, Excel, JSON, via API, or directly to your database or data warehouse. We define the schema and destination at the start based on your pipeline.' : 'CSV, Excel, JSON, vía API o directo a tu base o data warehouse. Definimos esquema y destino al inicio según tu pipeline.'
      }
    ],
    needThisTitle: isEn ? 'Discover and anticipate tomorrow\'s human capital' : 'Descubre y anticipa el capital humano del mañana',
    needThisDescription: isEn ? 'Hiring requires certainty about the salary environment. Or perhaps you have a niche portal and need to aggregate thousands of internet jobs every night to supply your site. Either way, you\'ll need constant large-scale mining.' : 'Contratar requiere tener certeza del entorno salarial. O tal vez cuentas con un portal de nicho y requieres agregar los miles de empleos de internet cada noche para abastecer tu sitio. De cualquier manera, requerirás minería constante a gran escala.',
    helpYouSub: isEn ? 'Job Board Extraction' : 'Job Board Extraction',
    helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
    helpYouDescription: isEn ? 'We generate recurring data flows on public jobs (Scraping of ATS Systems, B2B Directories, and search aggregators), providing them in a unified way to eliminate labor market duplicates before they reach your hands.' : 'Generamos flujos recurrentes de Data sobre empleos públicos (Scraping de ATS Systems, Directorios B2B y agregadores de búsqueda), proveyéndolos de manera unificada para eliminar duplicados del mercado laboral antes de llegar a tus manos.',
    helpYouList: isEn ? [
      'We define together the portals, regions, and position types we cover.',
      'We extract each job posting with its relevant fields: company, position, location, modality, skills, salary.',
      'We deliver historical data so your product can measure the evolution of the labor market.',
      'When a portal changes, we fix it before your dashboard ends up with gaps.'
    ] : [
      'Definimos juntos los portales, las regiones y los tipos de puesto que cubrimos.',
      'Extraemos cada aviso con sus campos relevantes: empresa, puesto, ubicación, modalidad, skills, salario.',
      'Entregamos histórico para que tu producto pueda medir evolución del mercado laboral.',
      'Cuando un portal cambia, lo resolvemos antes de que tu dashboard quede con huecos.'
    ],
    ctaTitle: isEn ? 'Elevate the value of your agency and labor metrics with our Data Squad' : 'Eleva el valor de tu agencia y métricas laborales apoyándote en nuestro Data Squad',
    ctaDescription: '',
    faqs: [
      {
        question: isEn ? 'Which portals can you cover?' : '¿Qué portales pueden cubrir?',
        answer: isEn ? 'Public job portals, sector boards, and company sites in the regions that matter to you. The specific list depends on your market and we define it in the first meeting.' : 'Portales de empleo públicos, bolsas sectoriales y sitios de empresa en las regiones que te importen. La lista concreta depende de tu mercado y la definimos en la primera reunión.'
      },
      {
        question: isEn ? 'Can you extract required skills by position?' : '¿Pueden extraer skills requeridas por puesto?',
        answer: isEn ? 'Yes, when the posting lists them in a structured way or they can be identified in the description text. We define it case by case based on the portals and the level of structure of the data.' : 'Sí, cuando el aviso las lista de forma estructurada o se pueden identificar en el texto de la descripción. Lo definimos caso a caso según los portales y el nivel de estructura de los datos.'
      },
      {
        question: isEn ? 'What happens with salaries when portals do not publish them?' : '¿Qué pasa con los salarios cuando los portales no los publican?',
        answer: isEn ? 'Some portals publish ranges, others do not. When there is a range, we extract it. When there is not, we leave it empty or infer it from complementary sources if that is part of the agreed scope. We do not invent data that is not there.' : 'Algunos portales publican rangos, otros no. Cuando hay rango, lo extraemos. Cuando no, lo dejamos vacío o lo inferimos desde fuentes complementarias si forma parte del alcance acordado. No inventamos datos que no están.'
      },
      {
        question: isEn ? 'How often do you update the data?' : '¿Con qué frecuencia actualizan los datos?',
        answer: isEn ? 'Daily, weekly, or monthly. Operational products request high frequency; strategic analysis cases work well with lower cadences.' : 'Diaria, semanal o mensual. Los productos operativos piden frecuencia alta; los casos de análisis estratégico funcionan con cadencias más bajas.'
      },
      {
        question: isEn ? 'In what format do I receive the data?' : '¿En qué formato recibo los datos?',
        answer: isEn ? 'CSV, Excel, JSON, via API, or directly to your database or data warehouse. The schema is defined at the start so it fits your product or model.' : 'CSV, Excel, JSON, vía API o directo a tu base o data warehouse. El esquema se define al inicio para que encaje con tu producto o modelo.'
      }
    ]
  }
  };
}
