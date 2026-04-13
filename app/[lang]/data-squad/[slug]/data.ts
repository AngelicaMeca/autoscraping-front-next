import { ReactNode } from 'react';
import { Users, Brain, Database, Layers, FileText, Briefcase, Home, TrendingDown, Cpu, Target, Zap, Shield, TrendingUp, CheckSquare, MessageSquare, HelpCircle, DollarSign, Clock } from 'lucide-react';

export interface ServiceData {
  slug: string;
  badge: string;
  titlePart1: string;
  titlePartGradient: string;
  titlePart2: string;
  description: string;
  testimonials: {
    rating: number;
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
  'data-squad-as-service': {
    slug: 'data-squad-as-service',
    badge: 'Outsourcing de Datos',
    titlePart1: '',
    titlePartGradient: 'Equipo de Datos',
    titlePart2: 'como Servicio',
    description: 'Perfecto para empresas que necesitan gestionar grandes volúmenes de datos o automatizar procesos de extracción y análisis. Delega la complejidad de tus datos en especialistas senior que se integran directamente a tu operación.',
    testimonials: [
      {
        rating: 5,
        text: '"La asociación con Data Squad nos permitió escalar nuestras capacidades analíticas sin problemas. Su experiencia ha impulsado significativamente nuestra eficiencia."',
        authorName: 'Sarah J.',
        authorRole: 'Directora de Marketing, Tecnología',
        authorInitials: 'SJ'
      },
      {
        rating: 5,
        text: '"Redujimos los plazos de entrega de proyectos en un 50%, permitiendo a nuestro equipo avanzar en ello a una velocidad sin precedentes en nuestra industria."',
        authorName: 'Tom B.',
        authorRole: 'Gerente de Operaciones, Real Estate',
        authorInitials: 'TB'
      }
    ],
    features: [
      {
        icon: DollarSign,
        title: 'Reducción de Costos de Personal',
        description: 'Minimiza gastos relacionados con la contratación de personal permanente externalizando tu equipo de datos con expertos.'
      },
      {
        icon: Zap,
        title: 'Implementación Rápida',
        description: 'Nuestro equipo puede comenzar a trabajar en tus proyectos inmediatamente, acelerando la entrega de soluciones de datos.'
      },
      {
        icon: MessageSquare,
        title: 'Comunicación Constante con Especialistas',
        description: 'Mantenemos comunicación abierta y constante, asegurando que estés actualizado sobre todo el progreso en tus proyectos con la atención de nuestros expertos.'
      },
      {
        icon: Shield,
        title: 'Confidencialidad Garantizada por Expertos',
        description: 'Aseguramos la protección de tu información mediante la firma de acuerdos de confidencialidad, salvaguardando todos los datos que compartes con nosotros.'
      }
    ],
    needThisTitle: '¿Cómo saber si necesitas un Equipo de Datos como Servicio?',
    needThisDescription: 'Si tu organización lucha al gestionar múltiples proyectos de datos complejos, carece de especialistas capacitados internamente, o enfrenta retrasos en la entrega de análisis críticos, un squad dedicado es la solución que necesitas.',
    helpYouSub: 'Nuestro Enfoque',
    helpYouTitle: 'Cómo te Ayudamos',
    helpYouDescription: 'Proporcionamos equipos especializados de expertos en datos que se integran en tu operación con el rigor y la responsabilidad de quien se hace cargo de verdad. Desde captura hasta análisis, cada etapa está cubierta por el perfil correcto.',
    helpYouList: [
      'Extracción y limpieza de datos',
      'Análisis y modelado predictivo',
      'Integración ETL y mantenimiento proactivo'
    ],
    ctaTitle: '¿Listo para escalar tu capacidad en datos?',
    ctaDescription: 'Comienza con un squad dedicado hoy y visualiza cómo tu organización accede a insights que transforman decisiones.',
    faqs: [
      {
        question: '¿Qué es Data Team as a Service?',
        answer: 'Data Team as a Service es un modelo flexible que permite a las empresas acceder a un equipo de datos completo según sea necesario, sin compromisos a largo plazo.'
      },
      {
        question: '¿A quién va dirigido este servicio?',
        answer: 'Va dirigido a empresas que necesitan apoyo en análisis y gestión de datos, especialmente aquellas que no requieren un equipo permanente pero tienen proyectos de datos ocasionales.'
      },
      {
        question: '¿Qué ventajas ofrece el modelo Data Team as a Service?',
        answer: 'Este modelo te permite escalar tus recursos de datos según tus necesidades, acceso a expertos del campo, y reducir costos operacionales manteniendo flexibilidad en la gestión de datos.'
      }
    ]
  },
  'data-scientist-squad': {
    slug: 'data-scientist-squad',
    badge: 'Análisis Avanzado',
    titlePart1: 'Equipo de',
    titlePartGradient: 'Data Scientists',
    titlePart2: '',
    description: 'Perfecto para empresas que necesitan gestionar grandes volúmenes de datos o automatizar procesos de extracción y análisis. Delega la complejidad de tus datos en especialistas senior que se integran directamente a tu operación.',
    testimonials: [
      {
        rating: 5,
        text: '"El Data Scientist Squad nos ayudó a descubrir información que nunca pensamos que fuera posible, transformando nuestras estrategias de marketing."',
        authorName: 'John D.',
        authorRole: 'Industria de E-commerce',
        authorInitials: 'JD'
      },
      {
        rating: 5,
        text: '"Sus modelos predictivos han sido un cambio de juego, permitiéndose pronosticar tendencias y optimizar operaciones de manera efectiva."',
        authorName: 'John L.',
        authorRole: 'Fantasy Sports',
        authorInitials: 'JL'
      }
    ],
    features: [
      {
        icon: Brain,
        title: 'Estrategias Personalizadas',
        description: 'Nos especializamos en abordar problemas complejos, utilizando técnicas avanzadas para extraer información valiosa de tus datos.'
      },
      {
        icon: TrendingUp,
        title: 'Implementación de Modelos Predictivos',
        description: 'Creamos modelos predictivos que te permiten anticipar tendencias y comportamientos, mejorando la toma de decisiones estratégicas con el apoyo de expertos.'
      },
      {
        icon: Users,
        title: 'Colaboración Perfecta con Tu Equipo',
        description: 'Trabajamos estrechamente con tu equipo, asegurando que nuestras soluciones se alineen perfectamente con tus objetivos.'
      },
      {
        icon: FileText,
        title: 'Capacitación y Transferencia de Conocimiento',
        description: 'Proporcionamos capacitación a tu equipo de nuestros expertos para que puedan entender y utilizar eficazmente nuestras soluciones.'
      }
    ],
    needThisTitle: '¿Cómo saber si necesitas un Data Scientist Squad?',
    needThisDescription: 'Si tu organización lucha al gestionar múltiples proyectos de datos complejos, carece de especialistas capacitados internamente, o enfrenta retrasos en la entrega de análisis críticos, un squad dedicado es la solución que necesitas.',
    helpYouSub: 'Nuestro Enfoque',
    helpYouTitle: 'Cómo te Ayudamos',
    helpYouDescription: 'Proporcionamos equipos especializados de expertos en datos que se integran en tu operación con el rigor y la responsabilidad de quien se hace cargo de verdad. Desde captura hasta análisis, cada etapa está cubierta por el perfil correcto.',
    helpYouList: [
      'Análisis exploratorio de datos',
      'Modelado predictivo avanzado',
      'Visualización y estrategia de insights'
    ],
    ctaTitle: '¿Listo para tomar decisiones basadas en datos?',
    ctaDescription: 'Comienza con nuestro Data Scientist Squad hoy y transforma cómo tu organización utiliza los datos para tomar decisiones estratégicas.',
    faqs: [
      {
        question: '¿Qué es un Data Scientist Team?',
        answer: 'Un Data Scientist Team es un grupo de profesionales especializados en análisis de datos, modelado predictivo y generación de información a partir de grandes conjuntos de datos.'
      },
      {
        question: '¿Cuál es el público objetivo del servicio Data Scientist Team?',
        answer: 'Este servicio está dirigido a empresas que necesitan un enfoque analítico sólido y desean obtener información estratégica de sus datos sin necesidad de contratar un equipo permanente.'
      },
      {
        question: '¿Qué ventajas obtengo al contratar un Data Scientist Team?',
        answer: 'Al contratar este equipo, obtienes acceso a una amplia gama de habilidades analíticas, mejoras la toma de decisiones basada en datos y logras una ventaja competitiva significativa en tu mercado.'
      }
    ]
  },
  'core-data-services': {
    slug: 'core-data-services',
    badge: 'Servicios de Datos',
    titlePart1: 'Servicios Core de',
    titlePartGradient: 'Datos',
    titlePart2: '',
    description: 'Soluciones fundamentales para que las empresas gestionen y analicen datos esenciales para sus operaciones. Ideal para organizaciones que buscan establecer una base sólida en la gestión de datos.',
    testimonials: [
      {
        rating: 5,
        text: '"Core Data Services mejoró significativamente nuestra gobernanza de datos, asegurando que nuestra información sea precisa y confiable para toda la organización."',
        authorName: 'Laura F.',
        authorRole: 'Travel Industry',
        authorInitials: 'LF'
      },
      {
        rating: 5,
        text: '"Gracias a Core Data Services, pudimos estandarizar nuestros procesos de datos y agilizar nuestras operaciones considerablemente."',
        authorName: 'James K.',
        authorRole: 'Real Estate',
        authorInitials: 'JK'
      }
    ],
    features: [
      {
        icon: Database,
        title: 'Mejora de Calidad de Datos',
        description: 'Con un equipo especializado, implementamos estrategias para asegurar que tus datos sean precisos, completos y estén actualizados, mejorando la calidad de la información que utilizas.'
      },
      {
        icon: Layers,
        title: 'Optimización de Procesos',
        description: 'Nuestro equipo experto simplifica y optimiza los procesos de gestión de datos, permitiéndote ahorrar tiempo y recursos valiosos.'
      },
      {
        icon: Cpu,
        title: 'Integración Perfecta',
        description: 'Nuestros servicios, respaldados por un equipo profesional, se integran fácilmente con tus sistemas existentes, asegurando una transición suave e ininterrumpida.'
      },
      {
        icon: Clock,
        title: 'Apoyo Continuo',
        description: 'Ofrecemos apoyo continuo y capacitación de nuestros expertos, asegurando que tu equipo siempre esté actualizado en las mejores prácticas de gestión de datos.'
      }
    ],
    needThisTitle: '¿Cómo saber si necesitas Core Data Services?',
    needThisDescription: 'Si tu organización lucha al gestionar y mantener la precisión de datos, carece de procesos efectivos de gestión de datos, o enfrenta problemas de calidad e integración de información, Core Data Services es la solución que necesitas.',
    helpYouSub: 'Nuestro Enfoque',
    helpYouTitle: 'Cómo te Ayudamos',
    helpYouDescription: 'Implementamos un framework completo de gestión de datos que cubre desde la captura y limpieza hasta el análisis y la integración con tus sistemas existentes, usando las mejores prácticas de la industria.',
    helpYouList: [
      'Auditoría y evaluación de calidad de datos',
      'Diseño e implementación de procesos ETL',
      'Capacitación y soporte continuo a equipos'
    ],
    ctaTitle: '¿Listo para establecer una base sólida en datos?',
    ctaDescription: 'Comienza con Core Data Services hoy y transforma cómo tu organización gestiona y utiliza datos para el éxito operacional.',
    faqs: [
      {
        question: '¿Qué son los Core Data Services?',
        answer: 'Core Data Services son soluciones fundamentales que permiten a las empresas gestionar y analizar datos esenciales para sus operaciones. Estos servicios son ideales para organizaciones que buscan establecer una base sólida en la gestión de datos.'
      },
      {
        question: '¿Cuál es el público objetivo para Core Data Services?',
        answer: 'Estos servicios están dirigidos a empresas de todos los tamaños que buscan optimizar sus operaciones a través de una gestión eficiente de datos. Son especialmente útiles para startups y pequeñas negocios que necesitan establecer procesos de datos efectivos.'
      },
      {
        question: '¿Cuáles son las ventajas de contratar Core Data Services?',
        answer: 'Al contratar estos servicios, obtienes acceso a prácticas probadas de gestión de datos, reduciendo el riesgo de errores y mejorando la eficiencia operacional. Además, puedes enfocarte en tu negocio mientras los expertos manejan tus datos.'
      }
    ]
  },
  'advanced-data-services': {
    slug: 'advanced-data-services',
    badge: 'Análisis Avanzado',
    titlePart1: 'Servicios',
    titlePartGradient: 'Avanzados de Datos',
    titlePart2: '',
    description: 'Soluciones complejas de análisis de datos y modelado para empresas que requieren información profunda y capacidades analíticas avanzadas. Perfecto para organizaciones con grandes volúmenes de datos.',
    testimonials: [
      {
        rating: 5,
        text: '"Advanced Data Services nos brindó las herramientas para transformar datos complejos en información accionable, ayudándonos a adelantarnos a la competencia."',
        authorName: 'Mark S.',
        authorRole: 'Real Estate',
        authorInitials: 'MS'
      },
      {
        rating: 5,
        text: '"Los insights que obtuvimos de Advanced Data Services fueron fundamentales en reformular nuestra estrategia de marketing y mejorar nuestro engagement de clientes."',
        authorName: 'Jennifer L.',
        authorRole: 'E-commerce',
        authorInitials: 'JL'
      }
    ],
    features: [
      {
        icon: Zap,
        title: 'Herramientas de Vanguardia',
        description: 'Nuestro equipo capacitado utiliza tecnologías avanzadas para maximizar el valor de tus datos, mejorando tu competitividad en el mercado.'
      },
      {
        icon: Layers,
        title: 'Personalización Adaptada',
        description: 'Adaptamos nuestros servicios avanzados a tus necesidades específicas, asegurando que recibas la información más relevante para tus objetivos, respaldado por nuestros expertos.'
      },
      {
        icon: Users,
        title: 'Capacitación del Equipo',
        description: 'Proporcionamos capacitación especializada de nuestros expertos para que tu equipo pueda aprovechar plenamente las herramientas y métodos avanzados de análisis de datos.'
      },
      {
        icon: TrendingUp,
        title: 'Informes en Tiempo Real',
        description: 'Mantente informado con informes en tiempo real y dashboards elaborados por nuestros expertos, facilitando respuestas rápidas a los cambios del mercado.'
      }
    ],
    needThisTitle: '¿Cómo saber si necesitas Advanced Data Services?',
    needThisDescription: 'Si tu organización necesita análisis más profundos, busca mejorar su capacidad analítica existente, o maneja grandes volúmenes de datos que requieren soluciones avanzadas, Advanced Data Services es la solución perfecta.',
    helpYouSub: 'Nuestro Enfoque',
    helpYouTitle: 'Cómo te Ayudamos',
    helpYouDescription: 'Implementamos soluciones analíticas avanzadas que transforman datos complejos en información estratégica. Nuestro equipo utiliza tecnologías de vanguardia y metodologías probadas para maximizar el valor de tus datos.',
    helpYouList: [
      'Análisis exploratorio y modelado predictivo',
      'Dashboards y visualización de datos avanzada',
      'Optimización continua y asesoría estratégica'
    ],
    ctaTitle: '¿Listo para desbloquear el potencial completo de tus datos?',
    ctaDescription: 'Comienza con Advanced Data Services hoy y lleva tu toma de decisiones al siguiente nivel con análisis profundos y información estratégica.',
    faqs: [
      {
        question: '¿Qué incluyen los Advanced Data Services?',
        answer: 'Los Advanced Data Services ofrecen soluciones más complejas de análisis de datos y modelado, ideales para empresas que necesitan información más profunda y capacidades analíticas avanzadas.'
      },
      {
        question: '¿Quién se beneficia más de los Advanced Data Services?',
        answer: 'Estas soluciones son perfectas para empresas que ya tienen un equipo de datos y buscan mejorar sus capacidades, así como para organizaciones que manejan grandes volúmenes de datos que requieren análisis detallado.'
      },
      {
        question: '¿Qué ventajas obtengo al contratar Advanced Data Services?',
        answer: 'Al optar por estos servicios, puedes mejorar tus decisiones estratégicas con análisis precisos, optimizar tus operaciones y obtener una ventaja competitiva aprovechando efectivamente datos complejos.'
      }
    ]
  },
  'data-collection-services': {
    slug: 'data-collection-services',
    badge: 'Recopilación de Datos',
    titlePart1: '',
    titlePartGradient: 'Recolección de Datos',
    titlePart2: '',
    description: 'Soluciones para facilitar la recopilación y organización de datos relevantes para tu negocio, garantizando que obtengas información de calidad para la toma de decisiones.',
    testimonials: [
      {
        rating: 5,
        text: '"Data Collection Services nos proporcionó acceso a datos relevantes de múltiples fuentes, dándonos una comprensión clara del comportamiento de nuestros clientes."',
        authorName: 'David M.',
        authorRole: 'Cannabis',
        authorInitials: 'DM'
      },
      {
        rating: 5,
        text: '"Los datos recopilados en este servicio fueron instrumentales para refinar nuestras estrategias de marketing y mantenernos adelante de nuestros competidores."',
        authorName: 'Emma S.',
        authorRole: 'E-commerce',
        authorInitials: 'ES'
      }
    ],
    features: [
      {
        icon: Database,
        title: 'Diversidad de Fuentes de Datos',
        description: 'Con el apoyo de nuestro equipo, recopilamos datos de múltiples fuentes, brindándote una visión completa de tu mercado y clientes.'
      },
      {
        icon: Target,
        title: 'Análisis de Competencia',
        description: 'Nuestro equipo especializado te ayuda a monitorear a tus competidores, permitiéndote ajustar tu estrategia de manera efectiva.'
      },
      {
        icon: CheckSquare,
        title: 'Datos Precisos y Confiables',
        description: 'Garantizamos que la información recopilada por nuestro equipo es precisa y confiable, ayudándote a tomar decisiones informadas.'
      },
      {
        icon: Layers,
        title: 'Integración Fácil',
        description: 'Facilitamos la integración de los datos recopilados en tus sistemas existentes, optimizando el flujo de trabajo en tu organización con la experiencia de nuestro equipo.'
      }
    ],
    needThisTitle: '¿Cómo saber si necesitas Data Collection Services?',
    needThisDescription: 'Si tu equipo dedica demasiado tiempo a recopilar datos manualmente, luchas con fuentes de datos fragmentadas, o necesitas información de mercado para aumentar tu velocidad de decisión, Data Collection Services es la solución que necesitas.',
    helpYouSub: 'Nuestro Enfoque',
    helpYouTitle: 'Cómo te Ayudamos',
    helpYouDescription: 'Nuestros Data Collection Services agilizan el proceso de recopilación de datos desde diversas fuentes. Con enfoque en precisión y exhaustividad, entregamos información de alta calidad, accionable, permitiendo que tu negocio tome decisiones informadas rápido y eficientemente.',
    helpYouList: [
      'Recopilación de datos de múltiples fuentes',
      'Análisis de competencia y tendencias de mercado',
      'Integración efectiva en sistemas existentes'
    ],
    ctaTitle: '¿Listo para acceder a datos de calidad?',
    ctaDescription: 'Comienza con Data Collection Services hoy y obtén la información que necesitas para tomar decisiones estratégicas informadas.',
    faqs: [
      {
        question: '¿Qué son los Data Collection Services?',
        answer: 'Data Collection Services son soluciones que facilitan la recopilación y organización de datos relevantes para tu negocio, asegurando que obtengas información de calidad para la toma de decisiones.'
      },
      {
        question: '¿Cuál es el público objetivo para Data Collection Services?',
        answer: 'Estos servicios están dirigidos a empresas que necesitan recopilar datos de múltiples fuentes para análisis y toma de decisiones estratégicas, siendo ideales para sectores como marketing e investigación de mercado.'
      },
      {
        question: '¿Cuáles son los beneficios de contratar Data Collection Services?',
        answer: 'Al utilizar estos servicios, ahorras tiempo y recursos, ya que expertos manejan la recopilación de datos garantizando calidad y relevancia, permitiéndote enfocarte en el análisis e implementación.'
      }
    ]
  },
  'big-data-consulting-services': {
    slug: 'big-data-consulting-services',
    badge: 'Big Data',
    titlePart1: 'Consultoría en',
    titlePartGradient: 'Big Data',
    titlePart2: '',
    description: 'Ideal para empresas que necesitan gestionar grandes volúmenes de información o automatizar procesos de extracción y análisis. Delega la complejidad de tus datos en especialistas senior que se integran directamente a tu operación.',
    testimonials: [
      {
        rating: 5,
        text: '"Big Data Consulting Services nos ayudó a optimizar nuestro almacenamiento de datos y mejorar nuestra eficiencia operacional de datos, mejorando significativamente nuestra inteligencia de datos.',
        authorName: 'Mark J.',
        authorRole: 'E-commerce',
        authorInitials: 'MJ'
      },
      {
        rating: 5,
        text: '"Su equipo nos guió a través de las complejidades de Big Data, permitiéndonos extraer información accionable de grandes volúmenes de datos."',
        authorName: 'Sarah P.',
        authorRole: 'Real Estate',
        authorInitials: 'SP'
      }
    ],
    features: [
      {
        icon: Target,
        title: 'Estrategias Personalizadas',
        description: 'Desarrollamos estrategias adaptadas a las necesidades específicas de tu negocio, asegurando que maximices el valor de tus datos masivos con el apoyo de nuestro equipo.'
      },
      {
        icon: Cpu,
        title: 'Optimización de Almacenamiento de Datos',
        description: 'Nuestro equipo experto te ayudará a optimizar tu infraestructura de almacenamiento, asegurando que puedas manejar eficientemente grandes volúmenes de datos.'
      },
      {
        icon: TrendingUp,
        title: 'Información Accionable',
        description: 'Nuestros expertos transforman grandes conjuntos de datos en información accionable que puede impulsar el crecimiento de tu negocio.'
      },
      {
        icon: Clock,
        title: 'Monitoreo Continuo y Apoyo',
        description: 'Ofrecemos monitoreo continuo y apoyo de nuestros expertos para asegurar que tus soluciones de Big Data están operando de manera óptima.'
      }
    ],
    needThisTitle: '¿Cómo saber si necesitas Big Data Consulting Services?',
    needThisDescription: 'Si tu organización lucha por gestionar y analizar grandes volúmenes de datos efectivamente, te falta información crítica que impulse innovación y competitividad, Big Data Consulting Services es la solución que necesitas.',
    helpYouSub: 'Nuestro Enfoque',
    helpYouTitle: 'Cómo te Ayudamos',
    helpYouDescription: 'Nuestros Big Data Consulting Services ofrecen estrategias personalizadas y orientación de expertos para agilizar tus operaciones de Big Data. Desde implementar soluciones escalables hasta descubrir información accionable, ayudamos a transformar grandes conjuntos de datos en estrategia empresarial.',
    helpYouList: [
      'Diseño e implementación de arquitecturas Big Data',
      'Optimización de infraestructura de almacenamiento',
      'Extracción de información strategy y optimización'
    ],
    ctaTitle: '¿Listo para aprovechar el poder de tus datos?',
    ctaDescription: 'Comienza con Big Data Consulting Services hoy y transforma cómo tu organización extrae valor de grandes volúmenes de datos.',
    faqs: [
      {
        question: '¿Qué son los Big Data Consulting Services?',
        answer: 'Estos servicios ofrecen orientación experta en la gestión y análisis de grandes volúmenes de datos, ayudando a las empresas a extraer valor significativo de sus conjuntos de datos masivos.'
      },
      {
        question: '¿Quién debería considerar Big Data Consulting Services?',
        answer: 'Son ideales para organizaciones que manejan grandes volúmenes de datos y necesitan orientación sobre cómo gestionarlos efectivamente para obtener información valiosa.'
      },
      {
        question: '¿Qué ventajas proporciona contratar Big Data Consulting Services?',
        answer: 'Al trabajar con expertos en Big Data, puedes optimizar tus estrategias de datos, mejorar la toma de decisiones y obtener una ventaja competitiva al comprender mejor tus datos.'
      }
    ]
  },
  'real-estate-data-entry-services': {
    slug: 'real-estate-data-entry-services',
    badge: 'Ingreso de Datos Inmobiliario',
    titlePart1: 'Gestión de Datos',
    titlePartGradient: 'Inmobiliarios',
    titlePart2: '',
    description: 'Servicios especializados en entrada y gestión de datos relacionados con el sector inmobiliario, asegurando que la información sea precisa y esté actualizada.',
    testimonials: [
      {
        rating: 5,
        text: '"Real Estate Data Entry Services nos ahorró tiempo valioso al ingresar con precisión los detalles de las propiedades, reduciendo errores y mejorando nuestra eficiencia operacional."',
        authorName: 'David F.',
        authorRole: 'Real Estate',
        authorInitials: 'DF'
      },
      {
        rating: 5,
        text: '"Gracias a su conocimiento especializado, pudimos simplificar nuestro proceso de ingreso de datos y evitar errores costosos."',
        authorName: 'Elizabeth M.',
        authorRole: 'Real Estate',
        authorInitials: 'EM'
      }
    ],
    features: [
      {
        icon: Clock,
        title: 'Ahorro de Tiempo',
        description: 'Externaliza la entrada de datos para que tu equipo se enfoque en actividades estratégicas mientras nuestro equipo gestiona los datos.'
      },
      {
        icon: TrendingUp,
        title: 'Escalabilidad con Apoyo de Expertos',
        description: 'Nuestros servicios se adaptan a tus necesidades, permitiéndote manejar grandes volúmenes de datos con la asistencia de nuestro equipo experto.'
      },
      {
        icon: Layers,
        title: 'Integración con Sistemas Existentes',
        description: 'Facilitamos la integración de datos inmobiliarios en tus sistemas actuales, optimizando la gestión de información con apoyo experto.'
      },
      {
        icon: Target,
        title: 'Apoyo Especializado del Sector',
        description: 'Contamos con un equipo especializado en el sector inmobiliario que entiende tus necesidades y proporciona soluciones adecuadas.'
      }
    ],
    needThisTitle: '¿Cómo saber si necesitas Real Estate Data Entry Services?',
    needThisDescription: 'Si tu negocio inmobiliario lucha con la gestión imprecisa o retrasada de datos de propiedades, podría estar afectando tu capacidad para cerrar tratos y mantener la confianza del cliente.',
    helpYouSub: 'Nuestro Enfoque',
    helpYouTitle: 'Cómo te Ayudamos',
    helpYouDescription: 'Nuestros Real Estate Data Entry Services proporcionan soluciones precisas, eficientes y escalables para gestionar datos de propiedades. Ya sea listados, transacciones o detalles de clientes, nuestro equipo experto asegura que tus datos sean correctos, completos y accionables, mejorando los resultados de tu negocio y la toma de decisiones en el competitivo mercado inmobiliario.',
    helpYouList: [
      'Entrada de datos de propiedades y clientes',
      'Validación y limpieza de información inmobiliaria',
      'Integración con sistemas CRM y plataformas inmobiliarias'
    ],
    ctaTitle: 'El poder de talento experimentado listo para proporcionarte Real Estate Data Entry Services',
    ctaDescription: 'Comienza con Real Estate Data Entry Services hoy y libera tu equipo para concentrarse en el crecimiento del negocio.',
    faqs: [
      {
        question: '¿Qué son los Real Estate Data Entry Services?',
        answer: 'Estos servicios se especializan en la entrada y gestión de datos relacionados con el sector inmobiliario, asegurando que la información sea precisa y esté actualizada.'
      },
      {
        question: '¿A quién van dirigidos los Real Estate Data Entry Services?',
        answer: 'Van dirigidos a agentes inmobiliarios, desarrolladores y empresas del sector que necesitan gestionar grandes volúmenes de datos de propiedades y clientes de manera eficiente.'
      },
      {
        question: '¿Cuáles son los beneficios de contratar estos servicios?',
        answer: 'Al utilizar estos servicios, aseguras que tus datos inmobiliarios sean precisos y bien gestionados, permitiéndote tomar decisiones informadas y mejorar el servicio al cliente.'
      }
    ]
  },
  'outsource-data-mining-services': {
    slug: 'outsource-data-mining-services',
    badge: 'Minería de Datos',
    titlePart1: '',
    titlePartGradient: 'Minería de Datos',
    titlePart2: '',
    description: 'Servicios que implican la externalización de procesos de minería de datos, donde expertos analizan grandes conjuntos de datos para identificar patrones y tendencias útiles.',
    testimonials: [
      {
        rating: 5,
        text: '"Outsource Data Mining Services nos proporcionó información valiosa que transformó completamente nuestra estrategia de marketing y nos ayudó a identificar nuevas oportunidades de mercado."',
        authorName: 'Michael T.',
        authorRole: 'Marketing Director',
        authorInitials: 'MT'
      },
      {
        rating: 5,
        text: '"Al externalizar nuestra minería de datos, pudimos acceder a expertos especializados sin los costos de construir un equipo interno, obtuvimos resultados rápidos y precisos."',
        authorName: 'Rachel H.',
        authorRole: 'Business Intelligence',
        authorInitials: 'RH'
      }
    ],
    features: [
      {
        icon: Brain,
        title: 'Acceso a Conocimiento Especializado',
        description: 'Obtienes acceso a un equipo de expertos en minería de datos que utilizan técnicas avanzadas para extraer información significativa.'
      },
      {
        icon: Target,
        title: 'Enfócate en Tu Negocio',
        description: 'Permite que nuestro equipo maneje la minería de datos mientras te concentras en las áreas clave de tu negocio.'
      },
      {
        icon: Zap,
        title: 'Resultados Rápidos y Eficientes',
        description: 'Nuestro proceso ágil, gestionado por expertos, asegura que obtengas resultados rápidos y eficientes, optimizando tu toma de decisiones.'
      },
      {
        icon: Shield,
        title: 'Seguridad y Confidencialidad Garantizadas',
        description: 'Aseguramos la confidencialidad de tus datos y su protección durante todo el proceso de minería, con el respaldo de nuestro equipo especializado.'
      }
    ],
    needThisTitle: '¿Cómo saber si necesitas Outsource Data Mining Services?',
    needThisDescription: 'Si tu empresa necesita obtener información profunda de grandes volúmenes de datos, carece de un equipo interno de minería de datos, o busca identificar patrones y tendencias ocultas, Outsource Data Mining Services es la solución que necesitas.',
    helpYouSub: 'Nuestro Enfoque',
    helpYouTitle: 'Cómo te Ayudamos',
    helpYouDescription: 'Nuestros Outsource Data Mining Services utilizan técnicas avanzadas y metodologías probadas para extraer información valiosa de tus datos. Desde identificar patrones hasta predecir tendencias, nuestro equipo experto transforma datos complejos en insights accionables que impulsan el crecimiento de tu negocio.',
    helpYouList: [
      'Análisis de patrones y tendencias en grandes conjuntos de datos',
      'Identificación de oportunidades de negocio y riesgos potenciales',
      'Generación de informes accionables basados en información extraída'
    ],
    ctaTitle: '¿Listo para descubrir información oculta en tus datos?',
    ctaDescription: 'Comienza con Outsource Data Mining Services hoy y obtén los insights que necesitas para impulsar decisiones estratégicas.',
    faqs: [
      {
        question: '¿Qué son los Outsource Data Mining Services?',
        answer: 'Estos servicios implican la externalización de procesos de minería de datos, donde expertos analizan grandes conjuntos de datos para identificar patrones y tendencias útiles.'
      },
      {
        question: '¿Quién se beneficia de los Outsource Data Mining Services?',
        answer: 'Estas soluciones son ideales para empresas que necesitan información profunda de sus datos sin tener un equipo interno de minería de datos.'
      },
      {
        question: '¿Qué ventajas obtengo al externalizar mis servicios de minería de datos?',
        answer: 'Al externalizar, puedes acceder a expertos en minería de datos, lo que reduce costos y te permite obtener información valiosa sin necesidad de invertir en infraestructura o personal permanente.'
      }
    ]
  },
  'b2b-data-services': {
    slug: 'b2b-data-services',
    badge: 'B2B Data',
    titlePart1: 'Servicios de Datos',
    titlePartGradient: 'B2B',
    titlePart2: '',
    description: 'Soluciones de análisis y gestión de datos específicamente diseñadas para empresas que operan en un entorno de negocio a negocio.',
    testimonials: [
      {
        rating: 5,
        text: '"Outsource Data Mining Services nos permitió reducir costos operacionales mientras ganamos acceso a información valiosa sin expandir nuestro equipo interno."',
        authorName: 'Greg T.',
        authorRole: 'Lead Generation',
        authorInitials: 'GT'
      },
      {
        rating: 5,
        text: '"Gracias a su equipo, fuimos capaces de extraer información relevante rápidamente, permitiendo mejores decisiones y estrategias mejoradas."',
        authorName: 'Susan A.',
        authorRole: 'E-commerce',
        authorInitials: 'SA'
      }
    ],
    features: [
      {
        icon: Database,
        title: 'Datos Específicos de la Industria',
        description: 'Proporcionamos datos relevantes y específicos de la industria que te ayudan a identificar nuevas oportunidades de mercado, gracias al conocimiento de nuestro equipo.'
      },
      {
        icon: TrendingUp,
        title: 'Optimización de Estrategia de Marketing',
        description: 'Utiliza nuestros datos, analizados por expertos, para optimizar tus estrategias de marketing B2B, asegurando que llegas a la audiencia correcta.'
      },
      {
        icon: CheckSquare,
        title: 'Mejora de la Toma de Decisiones',
        description: 'Con información precisa y actualizada proporcionada por nuestro equipo experto, mejorarás tu toma de decisiones estratégicas.'
      },
      {
        icon: Zap,
        title: 'Flexibilidad y Adaptabilidad',
        description: 'Nuestros servicios, respaldados por un equipo de expertos, son flexibles y se adaptan a las necesidades cambiantes de tu negocio, asegurando que te mantengas adelante.'
      }
    ],
    needThisTitle: '¿Cómo saber si necesitas B2B Data Services?',
    needThisDescription: 'Si tu negocio lucha por identificar y conectar con la audiencia objetivo correcta, carece de datos precisos en B2B o necesita optimizar tus esfuerzos de ventas y marketing, es hora de considerar servicios de datos especializados B2B.',
    helpYouSub: 'Nuestro Enfoque',
    helpYouTitle: 'Cómo te Ayudamos',
    helpYouDescription: 'Nuestros B2B Data Services proporcionan soluciones de datos personalizadas y específicas de la industria diseñadas para potenciar tus estrategias de marketing y extensión. Al entregar información precisa y accionable, empoderamos a las empresas para identificar posibles socios, optimizar campañas y impulsar el crecimiento a través de decisiones basadas en datos.',
    helpYouList: [
      'Análisis de datos y segmentación de audiencia B2B',
      'Optimización de estrategias de marketing y ventas',
      'Identificación de oportunidades de asociación y clientes potenciales'
    ],
    ctaTitle: 'El poder de talento experimentado listo para proporcionarte B2B Data Services',
    ctaDescription: 'Comienza con B2B Data Services hoy y transforma cómo tu empresa identifica, conecta y crece con clientes potenciales B2B.',
    faqs: [
      {
        question: '¿Qué ofrecen los B2B Data Services?',
        answer: 'B2B Data Services proporcionan soluciones de análisis y gestión de datos específicamente diseñadas para empresas que operan en un entorno de negocio a negocio.'
      },
      {
        question: '¿A quién van dirigidos los B2B Data Services?',
        answer: 'Van dirigidos a empresas que buscan mejorar su estrategia de datos en un contexto B2B, optimizando los procesos de ventas, marketing y gestión de clientes.'
      },
      {
        question: '¿Cuáles son los beneficios de contratar B2B Data Services?',
        answer: 'Al contratar estos servicios, obtienes datos más precisos y relevantes sobre tus clientes y mercados, mejorando tu enfoque empresarial e incrementando la eficiencia operacional.'
      }
    ]
  }
};
