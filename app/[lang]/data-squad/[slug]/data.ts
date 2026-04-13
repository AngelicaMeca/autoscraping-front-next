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

export function getServicesData(isEn: boolean): Record<string, ServiceData> {
  return {
    'data-squad-as-service': {
      slug: 'data-squad-as-service',
      badge: isEn ? 'Data Outsourcing' : 'Outsourcing de Datos',
      titlePart1: '',
      titlePartGradient: isEn ? 'Data Team' : 'Equipo de Datos',
      titlePart2: isEn ? 'as a Service' : 'como Servicio',
      description: isEn
        ? 'Perfect for companies that need to manage large volumes of data or automate extraction and analysis processes. Delegate the complexity of your data to senior specialists who integrate directly into your operation.'
        : 'Perfecto para empresas que necesitan gestionar grandes volúmenes de datos o automatizar procesos de extracción y análisis. Delega la complejidad de tus datos en especialistas senior que se integran directamente a tu operación.',
      testimonials: [
        {
          rating: 5,
          text: isEn
            ? '"Partnering with Data Squad allowed us to scale our analytical capabilities seamlessly. Their expertise has significantly boosted our efficiency."'
            : '"La asociación con Data Squad nos permitió escalar nuestras capacidades analíticas sin problemas. Su experiencia ha impulsado significativamente nuestra eficiencia."',
          authorName: 'Sarah J.',
          authorRole: isEn ? 'Marketing Director, Technology' : 'Directora de Marketing, Tecnología',
          authorInitials: 'SJ'
        },
        {
          rating: 5,
          text: isEn
            ? '"We reduced project delivery timelines by 50%, allowing our team to advance at an unprecedented speed in our industry."'
            : '"Redujimos los plazos de entrega de proyectos en un 50%, permitiendo a nuestro equipo avanzar en ello a una velocidad sin precedentes en nuestra industria."',
          authorName: 'Tom B.',
          authorRole: isEn ? 'Operations Manager, Real Estate' : 'Gerente de Operaciones, Real Estate',
          authorInitials: 'TB'
        }
      ],
      features: [
        {
          icon: DollarSign,
          title: isEn ? 'Staff Cost Reduction' : 'Reducción de Costos de Personal',
          description: isEn
            ? 'Minimize expenses related to permanent staff hiring by outsourcing your data team to experts.'
            : 'Minimiza gastos relacionados con la contratación de personal permanente externalizando tu equipo de datos con expertos.'
        },
        {
          icon: Zap,
          title: isEn ? 'Fast implementation' : 'Implementación rápida',
          description: isEn
            ? 'Our team can start working on your projects immediately, accelerating the delivery of data solutions.'
            : 'Nuestro equipo puede comenzar a trabajar en tus proyectos inmediatamente, acelerando la entrega de soluciones de datos.'
        },
        {
          icon: MessageSquare,
          title: isEn ? 'Constant communication with specialists' : 'Comunicación constante con especialistas',
          description: isEn
            ? 'We maintain open and constant communication, ensuring you are updated on all progress in your projects with the attention of our experts.'
            : 'Mantenemos comunicación abierta y constante, asegurando que estés actualizado sobre todo el progreso en tus proyectos con la atención de nuestros expertos.'
        },
        {
          icon: Shield,
          title: isEn ? 'Confidentiality guaranteed by experts' : 'Confidencialidad garantizada por expertos',
          description: isEn
            ? 'We ensure the protection of your information through confidentiality agreements, safeguarding all data you share with us.'
            : 'Aseguramos la protección de tu información mediante la firma de acuerdos de confidencialidad, salvaguardando todos los datos que compartes con nosotros.'
        }
      ],
      needThisTitle: isEn
        ? 'How to know if you need a Data Team as a Service?'
        : '¿Cómo saber si necesitas un Equipo de Datos como Servicio?',
      needThisDescription: isEn
        ? 'If your organization struggles managing multiple complex data projects, lacks internally trained specialists, or faces delays in delivering critical analysis, a dedicated squad is the solution you need.'
        : 'Si tu organización lucha al gestionar múltiples proyectos de datos complejos, carece de especialistas capacitados internamente, o enfrenta retrasos en la entrega de análisis críticos, un squad dedicado es la solución que necesitas.',
      helpYouSub: isEn ? 'Our Approach' : 'Nuestro Enfoque',
      helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
      helpYouDescription: isEn
        ? 'We provide specialized teams of data experts who integrate into your operation with the rigor and responsibility of someone who truly takes charge. From capture to analysis, every stage is covered by the right profile.'
        : 'Proporcionamos equipos especializados de expertos en datos que se integran en tu operación con el rigor y la responsabilidad de quien se hace cargo de verdad. Desde captura hasta análisis, cada etapa está cubierta por el perfil correcto.',
      helpYouList: isEn
        ? ['Data extraction and cleansing', 'Analysis and predictive modeling', 'ETL integration and proactive maintenance']
        : ['Extracción y limpieza de datos', 'Análisis y modelado predictivo', 'Integración ETL y mantenimiento proactivo'],
      ctaTitle: isEn ? 'Ready to scale your data capacity?' : '¿Listo para escalar tu capacidad en datos?',
      ctaDescription: isEn
        ? 'Start with a dedicated squad today and see how your organization accesses insights that transform decisions.'
        : 'Comienza con un squad dedicado hoy y visualiza cómo tu organización accede a insights que transforman decisiones.',
      faqs: [
        {
          question: isEn ? 'What is Data Team as a Service?' : '¿Qué es Data Team as a Service?',
          answer: isEn
            ? 'Data Team as a Service is a flexible model that allows companies to access a complete data team as needed, without long-term commitments.'
            : 'Data Team as a Service es un modelo flexible que permite a las empresas acceder a un equipo de datos completo según sea necesario, sin compromisos a largo plazo.'
        },
        {
          question: isEn ? 'Who is this service aimed at?' : '¿A quién va dirigido este servicio?',
          answer: isEn
            ? 'It is aimed at companies that need support in data analysis and management, especially those that do not require a permanent team but have occasional data projects.'
            : 'Va dirigido a empresas que necesitan apoyo en análisis y gestión de datos, especialmente aquellas que no requieren un equipo permanente pero tienen proyectos de datos ocasionales.'
        },
        {
          question: isEn
            ? 'What advantages does the Data Team as a Service model offer?'
            : '¿Qué ventajas ofrece el modelo Data Team as a Service?',
          answer: isEn
            ? 'This model allows you to scale your data resources according to your needs, access field experts, and reduce operational costs while maintaining flexibility in data management.'
            : 'Este modelo te permite escalar tus recursos de datos según tus necesidades, acceso a expertos del campo, y reducir costos operacionales manteniendo flexibilidad en la gestión de datos.'
        }
      ]
    },
    'data-scientist-squad': {
      slug: 'data-scientist-squad',
      badge: isEn ? 'Advanced Analysis' : 'Análisis Avanzado',
      titlePart1: isEn ? 'Team of' : 'Equipo de',
      titlePartGradient: 'Data Scientists',
      titlePart2: '',
      description: isEn
        ? 'Perfect for companies that need to manage large volumes of data or automate extraction and analysis processes. Delegate the complexity of your data to senior specialists who integrate directly into your operation.'
        : 'Perfecto para empresas que necesitan gestionar grandes volúmenes de datos o automatizar procesos de extracción y análisis. Delega la complejidad de tus datos en especialistas senior que se integran directamente a tu operación.',
      testimonials: [
        {
          rating: 5,
          text: isEn
            ? '"The Data Scientist Squad helped us discover information we never thought possible, transforming our marketing strategies."'
            : '"El Data Scientist Squad nos ayudó a descubrir información que nunca pensamos que fuera posible, transformando nuestras estrategias de marketing."',
          authorName: 'John D.',
          authorRole: isEn ? 'E-commerce Industry' : 'Industria de E-commerce',
          authorInitials: 'JD'
        },
        {
          rating: 5,
          text: isEn
            ? '"Their predictive models have been a game-changer, allowing us to forecast trends and optimize operations effectively."'
            : '"Sus modelos predictivos han sido un cambio de juego, permitiéndose pronosticar tendencias y optimizar operaciones de manera efectiva."',
          authorName: 'John L.',
          authorRole: 'Fantasy Sports',
          authorInitials: 'JL'
        }
      ],
      features: [
        {
          icon: Brain,
          title: isEn ? 'Customized strategies' : 'Estrategias personalizadas',
          description: isEn
            ? 'We specialize in tackling complex problems, using advanced techniques to extract valuable insights from your data.'
            : 'Nos especializamos en abordar problemas complejos, utilizando técnicas avanzadas para extraer información valiosa de tus datos.'
        },
        {
          icon: TrendingUp,
          title: isEn ? 'Predictive Model Implementation' : 'Implementación de Modelos Predictivos',
          description: isEn
            ? 'We create predictive models that allow you to anticipate trends and behaviors, improving strategic decision-making with expert support.'
            : 'Creamos modelos predictivos que te permiten anticipar tendencias y comportamientos, mejorando la toma de decisiones estratégicas con el apoyo de expertos.'
        },
        {
          icon: Users,
          title: isEn ? 'Seamless collaboration with your team' : 'Colaboración perfecta con tu equipo',
          description: isEn
            ? 'We work closely with your team, ensuring our solutions align perfectly with your objectives.'
            : 'Trabajamos estrechamente con tu equipo, asegurando que nuestras soluciones se alineen perfectamente con tus objetivos.'
        },
        {
          icon: FileText,
          title: isEn ? 'Training and Knowledge Transfer' : 'Capacitación y Transferencia de Conocimiento',
          description: isEn
            ? 'Our experts train your team so they can understand and effectively use our solutions.'
            : 'Proporcionamos capacitación a tu equipo de nuestros expertos para que puedan entender y utilizar eficazmente nuestras soluciones.'
        }
      ],
      needThisTitle: isEn
        ? 'How to know if you need a Data Scientist Squad?'
        : '¿Cómo saber si necesitas un Data Scientist Squad?',
      needThisDescription: isEn
        ? 'If your organization struggles managing multiple complex data projects, lacks internally trained specialists, or faces delays in delivering critical analysis, a dedicated squad is the solution you need.'
        : 'Si tu organización lucha al gestionar múltiples proyectos de datos complejos, carece de especialistas capacitados internamente, o enfrenta retrasos en la entrega de análisis críticos, un squad dedicado es la solución que necesitas.',
      helpYouSub: isEn ? 'Our Approach' : 'Nuestro Enfoque',
      helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
      helpYouDescription: isEn
        ? 'We provide specialized teams of data experts who integrate into your operation with the rigor and responsibility of someone who truly takes charge. From capture to analysis, every stage is covered by the right profile.'
        : 'Proporcionamos equipos especializados de expertos en datos que se integran en tu operación con el rigor y la responsabilidad de quien se hace cargo de verdad. Desde captura hasta análisis, cada etapa está cubierta por el perfil correcto.',
      helpYouList: isEn
        ? ['Exploratory data analysis', 'Advanced predictive modeling', 'Visualization and insights strategy']
        : ['Análisis exploratorio de datos', 'Modelado predictivo avanzado', 'Visualización y estrategia de insights'],
      ctaTitle: isEn
        ? 'Ready to make data-driven decisions?'
        : '¿Listo para tomar decisiones basadas en datos?',
      ctaDescription: isEn
        ? 'Start with our Data Scientist Squad today and transform how your organization uses data to make strategic decisions.'
        : 'Comienza con nuestro Data Scientist Squad hoy y transforma cómo tu organización utiliza los datos para tomar decisiones estratégicas.',
      faqs: [
        {
          question: isEn ? 'What is a Data Scientist Team?' : '¿Qué es un Data Scientist Team?',
          answer: isEn
            ? 'A Data Scientist Team is a group of professionals specialized in data analysis, predictive modeling, and generating information from large datasets.'
            : 'Un Data Scientist Team es un grupo de profesionales especializados en análisis de datos, modelado predictivo y generación de información a partir de grandes conjuntos de datos.'
        },
        {
          question: isEn
            ? 'Who is the target audience for the Data Scientist Team service?'
            : '¿Cuál es el público objetivo del servicio Data Scientist Team?',
          answer: isEn
            ? 'This service is aimed at companies that need a solid analytical approach and want to obtain strategic information from their data without hiring a permanent team.'
            : 'Este servicio está dirigido a empresas que necesitan un enfoque analítico sólido y desean obtener información estratégica de sus datos sin necesidad de contratar un equipo permanente.'
        },
        {
          question: isEn
            ? 'What advantages do I get by hiring a Data Scientist Team?'
            : '¿Qué ventajas obtengo al contratar un Data Scientist Team?',
          answer: isEn
            ? 'By hiring this team, you gain access to a wide range of analytical skills, improve data-driven decision-making, and achieve a significant competitive advantage in your market.'
            : 'Al contratar este equipo, obtienes acceso a una amplia gama de habilidades analíticas, mejoras la toma de decisiones basada en datos y logras una ventaja competitiva significativa en tu mercado.'
        }
      ]
    },
    'core-data-services': {
      slug: 'core-data-services',
      badge: isEn ? 'Data Services' : 'Servicios de Datos',
      titlePart1: isEn ? 'Core' : 'Servicios Core de',
      titlePartGradient: isEn ? 'Data Services' : 'Datos',
      titlePart2: '',
      description: isEn
        ? 'Fundamental solutions for companies to manage and analyze essential data for their operations. Ideal for organizations looking to establish a solid foundation in data management.'
        : 'Soluciones fundamentales para que las empresas gestionen y analicen datos esenciales para sus operaciones. Ideal para organizaciones que buscan establecer una base sólida en la gestión de datos.',
      testimonials: [
        {
          rating: 5,
          text: isEn
            ? '"Core Data Services significantly improved our data governance, ensuring our information is accurate and reliable across the entire organization."'
            : '"Core Data Services mejoró significativamente nuestra gobernanza de datos, asegurando que nuestra información sea precisa y confiable para toda la organización."',
          authorName: 'Laura F.',
          authorRole: 'Travel Industry',
          authorInitials: 'LF'
        },
        {
          rating: 5,
          text: isEn
            ? '"Thanks to Core Data Services, we were able to standardize our data processes and streamline our operations considerably."'
            : '"Gracias a Core Data Services, pudimos estandarizar nuestros procesos de datos y agilizar nuestras operaciones considerablemente."',
          authorName: 'James K.',
          authorRole: 'Real Estate',
          authorInitials: 'JK'
        }
      ],
      features: [
        {
          icon: Database,
          title: isEn ? 'Data Quality Improvement' : 'Mejora de Calidad de Datos',
          description: isEn
            ? 'With a specialized team, we implement strategies to ensure your data is accurate, complete, and up to date, improving the quality of the information you use.'
            : 'Con un equipo especializado, implementamos estrategias para asegurar que tus datos sean precisos, completos y estén actualizados, mejorando la calidad de la información que utilizas.'
        },
        {
          icon: Layers,
          title: isEn ? 'Process Optimization' : 'Optimización de Procesos',
          description: isEn
            ? 'Our expert team simplifies and optimizes data management processes, allowing you to save valuable time and resources.'
            : 'Nuestro equipo experto simplifica y optimiza los procesos de gestión de datos, permitiéndote ahorrar tiempo y recursos valiosos.'
        },
        {
          icon: Cpu,
          title: isEn ? 'Seamless integration' : 'Integración perfecta',
          description: isEn
            ? 'Our services, backed by a professional team, integrate easily with your existing systems, ensuring a smooth and uninterrupted transition.'
            : 'Nuestros servicios, respaldados por un equipo profesional, se integran fácilmente con tus sistemas existentes, asegurando una transición suave e ininterrumpida.'
        },
        {
          icon: Clock,
          title: isEn ? 'Continuous support' : 'Apoyo continuo',
          description: isEn
            ? 'We offer ongoing support and expert training, ensuring your team is always up to date on best data management practices.'
            : 'Ofrecemos apoyo continuo y capacitación de nuestros expertos, asegurando que tu equipo siempre esté actualizado en las mejores prácticas de gestión de datos.'
        }
      ],
      needThisTitle: isEn
        ? 'How to know if you need Core Data Services?'
        : '¿Cómo saber si necesitas Core Data Services?',
      needThisDescription: isEn
        ? 'If your organization struggles managing and maintaining data accuracy, lacks effective data management processes, or faces quality and information integration issues, Core Data Services is the solution you need.'
        : 'Si tu organización lucha al gestionar y mantener la precisión de datos, carece de procesos efectivos de gestión de datos, o enfrenta problemas de calidad e integración de información, Core Data Services es la solución que necesitas.',
      helpYouSub: isEn ? 'Our Approach' : 'Nuestro Enfoque',
      helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
      helpYouDescription: isEn
        ? 'We implement a complete data management framework covering everything from capture and cleansing to analysis and integration with your existing systems, using industry best practices.'
        : 'Implementamos un framework completo de gestión de datos que cubre desde la captura y limpieza hasta el análisis y la integración con tus sistemas existentes, usando las mejores prácticas de la industria.',
      helpYouList: isEn
        ? ['Data quality audit and assessment', 'ETL process design and implementation', 'Ongoing training and team support']
        : ['Auditoría y evaluación de calidad de datos', 'Diseño e implementación de procesos ETL', 'Capacitación y soporte continuo a equipos'],
      ctaTitle: isEn
        ? 'Ready to establish a solid data foundation?'
        : '¿Listo para establecer una base sólida en datos?',
      ctaDescription: isEn
        ? 'Start with Core Data Services today and transform how your organization manages and uses data for operational success.'
        : 'Comienza con Core Data Services hoy y transforma cómo tu organización gestiona y utiliza datos para el éxito operacional.',
      faqs: [
        {
          question: isEn ? 'What are Core Data Services?' : '¿Qué son los Core Data Services?',
          answer: isEn
            ? 'Core Data Services are fundamental solutions that allow companies to manage and analyze essential data for their operations. These services are ideal for organizations looking to establish a solid foundation in data management.'
            : 'Core Data Services son soluciones fundamentales que permiten a las empresas gestionar y analizar datos esenciales para sus operaciones. Estos servicios son ideales para organizaciones que buscan establecer una base sólida en la gestión de datos.'
        },
        {
          question: isEn
            ? 'Who is the target audience for Core Data Services?'
            : '¿Cuál es el público objetivo para Core Data Services?',
          answer: isEn
            ? 'These services are aimed at companies of all sizes looking to optimize their operations through efficient data management. They are especially useful for startups and small businesses that need to establish effective data processes.'
            : 'Estos servicios están dirigidos a empresas de todos los tamaños que buscan optimizar sus operaciones a través de una gestión eficiente de datos. Son especialmente útiles para startups y pequeñas negocios que necesitan establecer procesos de datos efectivos.'
        },
        {
          question: isEn
            ? 'What are the advantages of hiring Core Data Services?'
            : '¿Cuáles son las ventajas de contratar Core Data Services?',
          answer: isEn
            ? 'By hiring these services, you gain access to proven data management practices, reducing the risk of errors and improving operational efficiency. Plus, you can focus on your business while experts handle your data.'
            : 'Al contratar estos servicios, obtienes acceso a prácticas probadas de gestión de datos, reduciendo el riesgo de errores y mejorando la eficiencia operacional. Además, puedes enfocarte en tu negocio mientras los expertos manejan tus datos.'
        }
      ]
    },
    'advanced-data-services': {
      slug: 'advanced-data-services',
      badge: isEn ? 'Advanced Analysis' : 'Análisis Avanzado',
      titlePart1: isEn ? 'Advanced' : 'Servicios',
      titlePartGradient: isEn ? 'Data Services' : 'Avanzados de Datos',
      titlePart2: '',
      description: isEn
        ? 'Complex data analysis and modeling solutions for companies requiring deep insights and advanced analytical capabilities. Perfect for organizations with large data volumes.'
        : 'Soluciones complejas de análisis de datos y modelado para empresas que requieren información profunda y capacidades analíticas avanzadas. Perfecto para organizaciones con grandes volúmenes de datos.',
      testimonials: [
        {
          rating: 5,
          text: isEn
            ? '"Advanced Data Services gave us the tools to transform complex data into actionable information, helping us stay ahead of the competition."'
            : '"Advanced Data Services nos brindó las herramientas para transformar datos complejos en información accionable, ayudándonos a adelantarnos a la competencia."',
          authorName: 'Mark S.',
          authorRole: 'Real Estate',
          authorInitials: 'MS'
        },
        {
          rating: 5,
          text: isEn
            ? '"The insights we obtained from Advanced Data Services were fundamental in reformulating our marketing strategy and improving our customer engagement."'
            : '"Los insights que obtuvimos de Advanced Data Services fueron fundamentales en reformular nuestra estrategia de marketing y mejorar nuestro engagement de clientes."',
          authorName: 'Jennifer L.',
          authorRole: 'E-commerce',
          authorInitials: 'JL'
        }
      ],
      features: [
        {
          icon: Zap,
          title: isEn ? 'Cutting-Edge Tools' : 'Herramientas de Vanguardia',
          description: isEn
            ? 'Our trained team uses advanced technologies to maximize the value of your data, enhancing your market competitiveness.'
            : 'Nuestro equipo capacitado utiliza tecnologías avanzadas para maximizar el valor de tus datos, mejorando tu competitividad en el mercado.'
        },
        {
          icon: Layers,
          title: isEn ? 'Tailored customization' : 'Personalización adaptada',
          description: isEn
            ? 'We adapt our advanced services to your specific needs, ensuring you receive the most relevant information for your objectives, backed by our experts.'
            : 'Adaptamos nuestros servicios avanzados a tus necesidades específicas, asegurando que recibas la información más relevante para tus objetivos, respaldado por nuestros expertos.'
        },
        {
          icon: Users,
          title: isEn ? 'Team Training' : 'Capacitación del Equipo',
          description: isEn
            ? 'We provide specialized training from our experts so your team can fully leverage advanced data analysis tools and methods.'
            : 'Proporcionamos capacitación especializada de nuestros expertos para que tu equipo pueda aprovechar plenamente las herramientas y métodos avanzados de análisis de datos.'
        },
        {
          icon: TrendingUp,
          title: isEn ? 'Real-Time Reports' : 'Informes en Tiempo Real',
          description: isEn
            ? 'Stay informed with real-time reports and dashboards crafted by our experts, facilitating rapid responses to market changes.'
            : 'Mantente informado con informes en tiempo real y dashboards elaborados por nuestros expertos, facilitando respuestas rápidas a los cambios del mercado.'
        }
      ],
      needThisTitle: isEn
        ? 'How to know if you need Advanced Data Services?'
        : '¿Cómo saber si necesitas Advanced Data Services?',
      needThisDescription: isEn
        ? 'If your organization needs deeper analysis, seeks to improve its existing analytical capacity, or handles large volumes of data requiring advanced solutions, Advanced Data Services is the perfect solution.'
        : 'Si tu organización necesita análisis más profundos, busca mejorar su capacidad analítica existente, o maneja grandes volúmenes de datos que requieren soluciones avanzadas, Advanced Data Services es la solución perfecta.',
      helpYouSub: isEn ? 'Our Approach' : 'Nuestro Enfoque',
      helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
      helpYouDescription: isEn
        ? 'We implement advanced analytical solutions that transform complex data into strategic information. Our team uses cutting-edge technologies and proven methodologies to maximize the value of your data.'
        : 'Implementamos soluciones analíticas avanzadas que transforman datos complejos en información estratégica. Nuestro equipo utiliza tecnologías de vanguardia y metodologías probadas para maximizar el valor de tus datos.',
      helpYouList: isEn
        ? ['Exploratory analysis and predictive modeling', 'Advanced data dashboards and visualization', 'Continuous optimization and strategic advisory']
        : ['Análisis exploratorio y modelado predictivo', 'Dashboards y visualización de datos avanzada', 'Optimización continua y asesoría estratégica'],
      ctaTitle: isEn
        ? 'Ready to unlock the full potential of your data?'
        : '¿Listo para desbloquear el potencial completo de tus datos?',
      ctaDescription: isEn
        ? 'Start with Advanced Data Services today and take your decision-making to the next level with deep analysis and strategic information.'
        : 'Comienza con Advanced Data Services hoy y lleva tu toma de decisiones al siguiente nivel con análisis profundos y información estratégica.',
      faqs: [
        {
          question: isEn ? 'What do Advanced Data Services include?' : '¿Qué incluyen los Advanced Data Services?',
          answer: isEn
            ? 'Advanced Data Services offer more complex data analysis and modeling solutions, ideal for companies that need deeper insights and advanced analytical capabilities.'
            : 'Los Advanced Data Services ofrecen soluciones más complejas de análisis de datos y modelado, ideales para empresas que necesitan información más profunda y capacidades analíticas avanzadas.'
        },
        {
          question: isEn
            ? 'Who benefits most from Advanced Data Services?'
            : '¿Quién se beneficia más de los Advanced Data Services?',
          answer: isEn
            ? 'These solutions are perfect for companies that already have a data team and are looking to improve their capabilities, as well as organizations handling large volumes of data requiring detailed analysis.'
            : 'Estas soluciones son perfectas para empresas que ya tienen un equipo de datos y buscan mejorar sus capacidades, así como para organizaciones que manejan grandes volúmenes de datos que requieren análisis detallado.'
        },
        {
          question: isEn
            ? 'What advantages do I get by hiring Advanced Data Services?'
            : '¿Qué ventajas obtengo al contratar Advanced Data Services?',
          answer: isEn
            ? 'By opting for these services, you can improve your strategic decisions with precise analysis, optimize your operations, and gain a competitive advantage by effectively leveraging complex data.'
            : 'Al optar por estos servicios, puedes mejorar tus decisiones estratégicas con análisis precisos, optimizar tus operaciones y obtener una ventaja competitiva aprovechando efectivamente datos complejos.'
        }
      ]
    },
    'data-collection-services': {
      slug: 'data-collection-services',
      badge: isEn ? 'Data Collection' : 'Recopilación de Datos',
      titlePart1: '',
      titlePartGradient: isEn ? 'Data Collection' : 'Recolección de Datos',
      titlePart2: '',
      description: isEn
        ? 'Solutions to facilitate the collection and organization of relevant data for your business, ensuring you obtain quality information for decision-making.'
        : 'Soluciones para facilitar la recopilación y organización de datos relevantes para tu negocio, garantizando que obtengas información de calidad para la toma de decisiones.',
      testimonials: [
        {
          rating: 5,
          text: isEn
            ? '"Data Collection Services provided us with access to relevant data from multiple sources, giving us a clear understanding of our customer behavior."'
            : '"Data Collection Services nos proporcionó acceso a datos relevantes de múltiples fuentes, dándonos una comprensión clara del comportamiento de nuestros clientes."',
          authorName: 'David M.',
          authorRole: 'Cannabis',
          authorInitials: 'DM'
        },
        {
          rating: 5,
          text: isEn
            ? '"The data collected through this service was instrumental in refining our marketing strategies and keeping us ahead of our competitors."'
            : '"Los datos recopilados en este servicio fueron instrumentales para refinar nuestras estrategias de marketing y mantenernos adelante de nuestros competidores."',
          authorName: 'Emma S.',
          authorRole: 'E-commerce',
          authorInitials: 'ES'
        }
      ],
      features: [
        {
          icon: Database,
          title: isEn ? 'Diversity of Data Sources' : 'Diversidad de Fuentes de Datos',
          description: isEn
            ? "With our team's support, we collect data from multiple sources, giving you a complete view of your market and customers."
            : 'Con el apoyo de nuestro equipo, recopilamos datos de múltiples fuentes, brindándote una visión completa de tu mercado y clientes.'
        },
        {
          icon: Target,
          title: isEn ? 'Competitive Analysis' : 'Análisis de Competencia',
          description: isEn
            ? 'Our specialized team helps you monitor competitors, allowing you to adjust your strategy effectively.'
            : 'Nuestro equipo especializado te ayuda a monitorear a tus competidores, permitiéndote ajustar tu estrategia de manera efectiva.'
        },
        {
          icon: CheckSquare,
          title: isEn ? 'Accurate and reliable data' : 'Datos precisos y confiables',
          description: isEn
            ? 'We guarantee that information collected by our team is accurate and reliable, helping you make informed decisions.'
            : 'Garantizamos que la información recopilada por nuestro equipo es precisa y confiable, ayudándote a tomar decisiones informadas.'
        },
        {
          icon: Layers,
          title: isEn ? 'Easy integration' : 'Integración fácil',
          description: isEn
            ? "We facilitate the integration of collected data into your existing systems, optimizing workflow in your organization with our team's expertise."
            : 'Facilitamos la integración de los datos recopilados en tus sistemas existentes, optimizando el flujo de trabajo en tu organización con la experiencia de nuestro equipo.'
        }
      ],
      needThisTitle: isEn
        ? 'How to know if you need Data Collection Services?'
        : '¿Cómo saber si necesitas Data Collection Services?',
      needThisDescription: isEn
        ? 'If your team spends too much time collecting data manually, struggles with fragmented data sources, or needs market intelligence to increase decision speed, Data Collection Services is the solution you need.'
        : 'Si tu equipo dedica demasiado tiempo a recopilar datos manualmente, luchas con fuentes de datos fragmentadas, o necesitas información de mercado para aumentar tu velocidad de decisión, Data Collection Services es la solución que necesitas.',
      helpYouSub: isEn ? 'Our Approach' : 'Nuestro Enfoque',
      helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
      helpYouDescription: isEn
        ? 'Our Data Collection Services streamline the data collection process from diverse sources. Focused on precision and completeness, we deliver high-quality, actionable information, enabling your business to make informed decisions quickly and efficiently.'
        : 'Nuestros Data Collection Services agilizan el proceso de recopilación de datos desde diversas fuentes. Con enfoque en precisión y exhaustividad, entregamos información de alta calidad, accionable, permitiendo que tu negocio tome decisiones informadas rápido y eficientemente.',
      helpYouList: isEn
        ? ['Data collection from multiple sources', 'Competitive analysis and market trends', 'Effective integration into existing systems']
        : ['Recopilación de datos de múltiples fuentes', 'Análisis de competencia y tendencias de mercado', 'Integración efectiva en sistemas existentes'],
      ctaTitle: isEn ? 'Ready to access quality data?' : '¿Listo para acceder a datos de calidad?',
      ctaDescription: isEn
        ? 'Start with Data Collection Services today and get the information you need to make informed strategic decisions.'
        : 'Comienza con Data Collection Services hoy y obtén la información que necesitas para tomar decisiones estratégicas informadas.',
      faqs: [
        {
          question: isEn ? 'What are Data Collection Services?' : '¿Qué son los Data Collection Services?',
          answer: isEn
            ? 'Data Collection Services are solutions that facilitate the collection and organization of relevant data for your business, ensuring you obtain quality information for decision-making.'
            : 'Data Collection Services son soluciones que facilitan la recopilación y organización de datos relevantes para tu negocio, asegurando que obtengas información de calidad para la toma de decisiones.'
        },
        {
          question: isEn
            ? 'Who is the target audience for Data Collection Services?'
            : '¿Cuál es el público objetivo para Data Collection Services?',
          answer: isEn
            ? 'These services are aimed at companies that need to collect data from multiple sources for strategic analysis and decision-making, ideal for sectors such as marketing and market research.'
            : 'Estos servicios están dirigidos a empresas que necesitan recopilar datos de múltiples fuentes para análisis y toma de decisiones estratégicas, siendo ideales para sectores como marketing e investigación de mercado.'
        },
        {
          question: isEn
            ? 'What are the benefits of hiring Data Collection Services?'
            : '¿Cuáles son los beneficios de contratar Data Collection Services?',
          answer: isEn
            ? 'By using these services, you save time and resources, as experts handle data collection guaranteeing quality and relevance, allowing you to focus on analysis and implementation.'
            : 'Al utilizar estos servicios, ahorras tiempo y recursos, ya que expertos manejan la recopilación de datos garantizando calidad y relevancia, permitiéndote enfocarte en el análisis e implementación.'
        }
      ]
    },
    'big-data-consulting-services': {
      slug: 'big-data-consulting-services',
      badge: 'Big Data',
      titlePart1: isEn ? 'Big Data' : 'Consultoría en',
      titlePartGradient: isEn ? 'Consulting' : 'Big Data',
      titlePart2: '',
      description: isEn
        ? 'Ideal for companies that need to manage large volumes of information or automate extraction and analysis processes. Delegate the complexity of your data to senior specialists who integrate directly into your operation.'
        : 'Ideal para empresas que necesitan gestionar grandes volúmenes de información o automatizar procesos de extracción y análisis. Delega la complejidad de tus datos en especialistas senior que se integran directamente a tu operación.',
      testimonials: [
        {
          rating: 5,
          text: isEn
            ? '"Big Data Consulting Services helped us optimize our data storage and improve our data operational efficiency, significantly enhancing our data intelligence.'
            : '"Big Data Consulting Services nos ayudó a optimizar nuestro almacenamiento de datos y mejorar nuestra eficiencia operacional de datos, mejorando significativamente nuestra inteligencia de datos.',
          authorName: 'Mark J.',
          authorRole: 'E-commerce',
          authorInitials: 'MJ'
        },
        {
          rating: 5,
          text: isEn
            ? '"Their team guided us through the complexities of Big Data, enabling us to extract actionable information from large data volumes."'
            : '"Su equipo nos guió a través de las complejidades de Big Data, permitiéndonos extraer información accionable de grandes volúmenes de datos."',
          authorName: 'Sarah P.',
          authorRole: 'Real Estate',
          authorInitials: 'SP'
        }
      ],
      features: [
        {
          icon: Target,
          title: isEn ? 'Customized strategies' : 'Estrategias personalizadas',
          description: isEn
            ? "We develop strategies tailored to your specific business needs, ensuring you maximize the value of your massive data with our team's support."
            : 'Desarrollamos estrategias adaptadas a las necesidades específicas de tu negocio, asegurando que maximices el valor de tus datos masivos con el apoyo de nuestro equipo.'
        },
        {
          icon: Cpu,
          title: isEn ? 'Data Storage Optimization' : 'Optimización de Almacenamiento de Datos',
          description: isEn
            ? 'Our expert team will help you optimize your storage infrastructure, ensuring you can efficiently handle large volumes of data.'
            : 'Nuestro equipo experto te ayudará a optimizar tu infraestructura de almacenamiento, asegurando que puedas manejar eficientemente grandes volúmenes de datos.'
        },
        {
          icon: TrendingUp,
          title: isEn ? 'Actionable information' : 'Información accionable',
          description: isEn
            ? 'Our experts transform large datasets into actionable information that can drive your business growth.'
            : 'Nuestros expertos transforman grandes conjuntos de datos en información accionable que puede impulsar el crecimiento de tu negocio.'
        },
        {
          icon: Clock,
          title: isEn ? 'Continuous monitoring and support' : 'Monitoreo continuo y apoyo',
          description: isEn
            ? 'We offer continuous monitoring and expert support to ensure your Big Data solutions are operating optimally.'
            : 'Ofrecemos monitoreo continuo y apoyo de nuestros expertos para asegurar que tus soluciones de Big Data están operando de manera óptima.'
        }
      ],
      needThisTitle: isEn
        ? 'How to know if you need Big Data Consulting Services?'
        : '¿Cómo saber si necesitas Big Data Consulting Services?',
      needThisDescription: isEn
        ? 'If your organization struggles to effectively manage and analyze large volumes of data, lacks critical information to drive innovation and competitiveness, Big Data Consulting Services is the solution you need.'
        : 'Si tu organización lucha por gestionar y analizar grandes volúmenes de datos efectivamente, te falta información crítica que impulse innovación y competitividad, Big Data Consulting Services es la solución que necesitas.',
      helpYouSub: isEn ? 'Our Approach' : 'Nuestro Enfoque',
      helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
      helpYouDescription: isEn
        ? 'Our Big Data Consulting Services offer personalized strategies and expert guidance to streamline your Big Data operations. From implementing scalable solutions to uncovering actionable insights, we help transform large datasets into business strategy.'
        : 'Nuestros Big Data Consulting Services ofrecen estrategias personalizadas y orientación de expertos para agilizar tus operaciones de Big Data. Desde implementar soluciones escalables hasta descubrir información accionable, ayudamos a transformar grandes conjuntos de datos en estrategia empresarial.',
      helpYouList: isEn
        ? ['Big Data architecture design and implementation', 'Storage infrastructure optimization', 'Strategic insight extraction and optimization']
        : ['Diseño e implementación de arquitecturas Big Data', 'Optimización de infraestructura de almacenamiento', 'Extracción de información strategy y optimización'],
      ctaTitle: isEn
        ? 'Ready to harness the power of your data?'
        : '¿Listo para aprovechar el poder de tus datos?',
      ctaDescription: isEn
        ? 'Start with Big Data Consulting Services today and transform how your organization extracts value from large data volumes.'
        : 'Comienza con Big Data Consulting Services hoy y transforma cómo tu organización extrae valor de grandes volúmenes de datos.',
      faqs: [
        {
          question: isEn ? 'What are Big Data Consulting Services?' : '¿Qué son los Big Data Consulting Services?',
          answer: isEn
            ? 'These services offer expert guidance in managing and analyzing large volumes of data, helping companies extract significant value from their massive datasets.'
            : 'Estos servicios ofrecen orientación experta en la gestión y análisis de grandes volúmenes de datos, ayudando a las empresas a extraer valor significativo de sus conjuntos de datos masivos.'
        },
        {
          question: isEn
            ? 'Who should consider Big Data Consulting Services?'
            : '¿Quién debería considerar Big Data Consulting Services?',
          answer: isEn
            ? 'They are ideal for organizations that handle large volumes of data and need guidance on how to effectively manage them to obtain valuable information.'
            : 'Son ideales para organizaciones que manejan grandes volúmenes de datos y necesitan orientación sobre cómo gestionarlos efectivamente para obtener información valiosa.'
        },
        {
          question: isEn
            ? 'What advantages does hiring Big Data Consulting Services provide?'
            : '¿Qué ventajas proporciona contratar Big Data Consulting Services?',
          answer: isEn
            ? 'By working with Big Data experts, you can optimize your data strategies, improve decision-making, and gain a competitive advantage by better understanding your data.'
            : 'Al trabajar con expertos en Big Data, puedes optimizar tus estrategias de datos, mejorar la toma de decisiones y obtener una ventaja competitiva al comprender mejor tus datos.'
        }
      ]
    },
    'real-estate-data-entry-services': {
      slug: 'real-estate-data-entry-services',
      badge: isEn ? 'Real Estate Data Entry' : 'Ingreso de Datos Inmobiliario',
      titlePart1: isEn ? 'Real Estate' : 'Gestión de Datos',
      titlePartGradient: isEn ? 'Data Management' : 'Inmobiliarios',
      titlePart2: '',
      description: isEn
        ? 'Specialized services in data entry and management related to the real estate sector, ensuring information is accurate and up to date.'
        : 'Servicios especializados en entrada y gestión de datos relacionados con el sector inmobiliario, asegurando que la información sea precisa y esté actualizada.',
      testimonials: [
        {
          rating: 5,
          text: isEn
            ? '"Real Estate Data Entry Services saved us valuable time by accurately entering property details, reducing errors and improving our operational efficiency."'
            : '"Real Estate Data Entry Services nos ahorró tiempo valioso al ingresar con precisión los detalles de las propiedades, reduciendo errores y mejorando nuestra eficiencia operacional."',
          authorName: 'David F.',
          authorRole: 'Real Estate',
          authorInitials: 'DF'
        },
        {
          rating: 5,
          text: isEn
            ? '"Thanks to their specialized knowledge, we were able to simplify our data entry process and avoid costly errors."'
            : '"Gracias a su conocimiento especializado, pudimos simplificar nuestro proceso de ingreso de datos y evitar errores costosos."',
          authorName: 'Elizabeth M.',
          authorRole: 'Real Estate',
          authorInitials: 'EM'
        }
      ],
      features: [
        {
          icon: Clock,
          title: isEn ? 'Time Savings' : 'Ahorro de Tiempo',
          description: isEn
            ? 'Outsource data entry so your team can focus on strategic activities while our team manages the data.'
            : 'Externaliza la entrada de datos para que tu equipo se enfoque en actividades estratégicas mientras nuestro equipo gestiona los datos.'
        },
        {
          icon: TrendingUp,
          title: isEn ? 'Scalability with Expert Support' : 'Escalabilidad con Apoyo de Expertos',
          description: isEn
            ? 'Our services adapt to your needs, allowing you to handle large data volumes with the assistance of our expert team.'
            : 'Nuestros servicios se adaptan a tus necesidades, permitiéndote manejar grandes volúmenes de datos con la asistencia de nuestro equipo experto.'
        },
        {
          icon: Layers,
          title: isEn ? 'Integration with Existing Systems' : 'Integración con Sistemas Existentes',
          description: isEn
            ? 'We facilitate the integration of real estate data into your current systems, optimizing information management with expert support.'
            : 'Facilitamos la integración de datos inmobiliarios en tus sistemas actuales, optimizando la gestión de información con apoyo experto.'
        },
        {
          icon: Target,
          title: isEn ? 'Specialized sector support' : 'Apoyo especializado del sector',
          description: isEn
            ? 'We have a team specialized in the real estate sector that understands your needs and provides appropriate solutions.'
            : 'Contamos con un equipo especializado en el sector inmobiliario que entiende tus necesidades y proporciona soluciones adecuadas.'
        }
      ],
      needThisTitle: isEn
        ? 'How to know if you need Real Estate Data Entry Services?'
        : '¿Cómo saber si necesitas Real Estate Data Entry Services?',
      needThisDescription: isEn
        ? 'If your real estate business struggles with inaccurate or delayed property data management, it could be affecting your ability to close deals and maintain client trust.'
        : 'Si tu negocio inmobiliario lucha con la gestión imprecisa o retrasada de datos de propiedades, podría estar afectando tu capacidad para cerrar tratos y mantener la confianza del cliente.',
      helpYouSub: isEn ? 'Our Approach' : 'Nuestro Enfoque',
      helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
      helpYouDescription: isEn
        ? 'Our Real Estate Data Entry Services provide accurate, efficient, and scalable solutions to manage property data. Whether listings, transactions, or client details, our expert team ensures your data is correct, complete, and actionable, improving your business outcomes and decision-making in the competitive real estate market.'
        : 'Nuestros Real Estate Data Entry Services proporcionan soluciones precisas, eficientes y escalables para gestionar datos de propiedades. Ya sea listados, transacciones o detalles de clientes, nuestro equipo experto asegura que tus datos sean correctos, completos y accionables, mejorando los resultados de tu negocio y la toma de decisiones en el competitivo mercado inmobiliario.',
      helpYouList: isEn
        ? ['Property and client data entry', 'Real estate information validation and cleansing', 'Integration with CRM systems and real estate platforms']
        : ['Entrada de datos de propiedades y clientes', 'Validación y limpieza de información inmobiliaria', 'Integración con sistemas CRM y plataformas inmobiliarias'],
      ctaTitle: isEn
        ? 'The power of experienced talent ready to provide you with Real Estate Data Entry Services'
        : 'El poder de talento experimentado listo para proporcionarte Real Estate Data Entry Services',
      ctaDescription: isEn
        ? 'Start with Real Estate Data Entry Services today and free your team to focus on business growth.'
        : 'Comienza con Real Estate Data Entry Services hoy y libera tu equipo para concentrarse en el crecimiento del negocio.',
      faqs: [
        {
          question: isEn
            ? 'What are Real Estate Data Entry Services?'
            : '¿Qué son los Real Estate Data Entry Services?',
          answer: isEn
            ? 'These services specialize in the entry and management of data related to the real estate sector, ensuring information is accurate and up to date.'
            : 'Estos servicios se especializan en la entrada y gestión de datos relacionados con el sector inmobiliario, asegurando que la información sea precisa y esté actualizada.'
        },
        {
          question: isEn
            ? 'Who are Real Estate Data Entry Services aimed at?'
            : '¿A quién van dirigidos los Real Estate Data Entry Services?',
          answer: isEn
            ? 'They are aimed at real estate agents, developers, and sector companies that need to efficiently manage large volumes of property and client data.'
            : 'Van dirigidos a agentes inmobiliarios, desarrolladores y empresas del sector que necesitan gestionar grandes volúmenes de datos de propiedades y clientes de manera eficiente.'
        },
        {
          question: isEn
            ? 'What are the benefits of hiring these services?'
            : '¿Cuáles son los beneficios de contratar estos servicios?',
          answer: isEn
            ? 'By using these services, you ensure your real estate data is accurate and well-managed, allowing you to make informed decisions and improve customer service.'
            : 'Al utilizar estos servicios, aseguras que tus datos inmobiliarios sean precisos y bien gestionados, permitiéndote tomar decisiones informadas y mejorar el servicio al cliente.'
        }
      ]
    },
    'outsource-data-mining-services': {
      slug: 'outsource-data-mining-services',
      badge: isEn ? 'Data Mining' : 'Minería de Datos',
      titlePart1: '',
      titlePartGradient: isEn ? 'Data Mining' : 'Minería de Datos',
      titlePart2: '',
      description: isEn
        ? 'Services involving the outsourcing of data mining processes, where experts analyze large datasets to identify useful patterns and trends.'
        : 'Servicios que implican la externalización de procesos de minería de datos, donde expertos analizan grandes conjuntos de datos para identificar patrones y tendencias útiles.',
      testimonials: [
        {
          rating: 5,
          text: isEn
            ? '"Outsource Data Mining Services provided us with valuable information that completely transformed our marketing strategy and helped us identify new market opportunities."'
            : '"Outsource Data Mining Services nos proporcionó información valiosa que transformó completamente nuestra estrategia de marketing y nos ayudó a identificar nuevas oportunidades de mercado."',
          authorName: 'Michael T.',
          authorRole: 'Marketing Director',
          authorInitials: 'MT'
        },
        {
          rating: 5,
          text: isEn
            ? '"By outsourcing our data mining, we could access specialized experts without the costs of building an internal team, obtaining fast and accurate results."'
            : '"Al externalizar nuestra minería de datos, pudimos acceder a expertos especializados sin los costos de construir un equipo interno, obtuvimos resultados rápidos y precisos."',
          authorName: 'Rachel H.',
          authorRole: 'Business Intelligence',
          authorInitials: 'RH'
        }
      ],
      features: [
        {
          icon: Brain,
          title: isEn ? 'Access to Specialized Knowledge' : 'Acceso a Conocimiento Especializado',
          description: isEn
            ? 'You gain access to a team of data mining experts who use advanced techniques to extract meaningful information.'
            : 'Obtienes acceso a un equipo de expertos en minería de datos que utilizan técnicas avanzadas para extraer información significativa.'
        },
        {
          icon: Target,
          title: isEn ? 'Focus on Your Business' : 'Enfócate en Tu Negocio',
          description: isEn
            ? 'Let our team handle data mining while you concentrate on key areas of your business.'
            : 'Permite que nuestro equipo maneje la minería de datos mientras te concentras en las áreas clave de tu negocio.'
        },
        {
          icon: Zap,
          title: isEn ? 'Fast and efficient results' : 'Resultados rápidos y eficientes',
          description: isEn
            ? 'Our agile process, managed by experts, ensures you get fast and efficient results, optimizing your decision-making.'
            : 'Nuestro proceso ágil, gestionado por expertos, asegura que obtengas resultados rápidos y eficientes, optimizando tu toma de decisiones.'
        },
        {
          icon: Shield,
          title: isEn ? 'Guaranteed Security and Confidentiality' : 'Seguridad y Confidencialidad Garantizadas',
          description: isEn
            ? 'We ensure the confidentiality and protection of your data throughout the entire mining process, backed by our specialized team.'
            : 'Aseguramos la confidencialidad de tus datos y su protección durante todo el proceso de minería, con el respaldo de nuestro equipo especializado.'
        }
      ],
      needThisTitle: isEn
        ? 'How to know if you need Outsource Data Mining Services?'
        : '¿Cómo saber si necesitas Outsource Data Mining Services?',
      needThisDescription: isEn
        ? 'If your company needs to obtain deep insights from large data volumes, lacks an internal data mining team, or wants to identify hidden patterns and trends, Outsource Data Mining Services is the solution you need.'
        : 'Si tu empresa necesita obtener información profunda de grandes volúmenes de datos, carece de un equipo interno de minería de datos, o busca identificar patrones y tendencias ocultas, Outsource Data Mining Services es la solución que necesitas.',
      helpYouSub: isEn ? 'Our Approach' : 'Nuestro Enfoque',
      helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
      helpYouDescription: isEn
        ? 'Our Outsource Data Mining Services use advanced techniques and proven methodologies to extract valuable information from your data. From identifying patterns to predicting trends, our expert team transforms complex data into actionable insights that drive your business growth.'
        : 'Nuestros Outsource Data Mining Services utilizan técnicas avanzadas y metodologías probadas para extraer información valiosa de tus datos. Desde identificar patrones hasta predecir tendencias, nuestro equipo experto transforma datos complejos en insights accionables que impulsan el crecimiento de tu negocio.',
      helpYouList: isEn
        ? ['Pattern and trend analysis in large datasets', 'Identification of business opportunities and potential risks', 'Generation of actionable reports based on extracted information']
        : ['Análisis de patrones y tendencias en grandes conjuntos de datos', 'Identificación de oportunidades de negocio y riesgos potenciales', 'Generación de informes accionables basados en información extraída'],
      ctaTitle: isEn
        ? 'Ready to discover hidden information in your data?'
        : '¿Listo para descubrir información oculta en tus datos?',
      ctaDescription: isEn
        ? 'Start with Outsource Data Mining Services today and get the insights you need to drive strategic decisions.'
        : 'Comienza con Outsource Data Mining Services hoy y obtén los insights que necesitas para impulsar decisiones estratégicas.',
      faqs: [
        {
          question: isEn
            ? 'What are Outsource Data Mining Services?'
            : '¿Qué son los Outsource Data Mining Services?',
          answer: isEn
            ? 'These services involve the outsourcing of data mining processes, where experts analyze large datasets to identify useful patterns and trends.'
            : 'Estos servicios implican la externalización de procesos de minería de datos, donde expertos analizan grandes conjuntos de datos para identificar patrones y tendencias útiles.'
        },
        {
          question: isEn
            ? 'Who benefits from Outsource Data Mining Services?'
            : '¿Quién se beneficia de los Outsource Data Mining Services?',
          answer: isEn
            ? 'These solutions are ideal for companies that need deep insights from their data without having an internal data mining team.'
            : 'Estas soluciones son ideales para empresas que necesitan información profunda de sus datos sin tener un equipo interno de minería de datos.'
        },
        {
          question: isEn
            ? 'What advantages do I get by outsourcing my data mining services?'
            : '¿Qué ventajas obtengo al externalizar mis servicios de minería de datos?',
          answer: isEn
            ? 'By outsourcing, you can access data mining experts, reducing costs and allowing you to obtain valuable information without the need to invest in infrastructure or permanent staff.'
            : 'Al externalizar, puedes acceder a expertos en minería de datos, lo que reduce costos y te permite obtener información valiosa sin necesidad de invertir en infraestructura o personal permanente.'
        }
      ]
    },
    'b2b-data-services': {
      slug: 'b2b-data-services',
      badge: 'B2B Data',
      titlePart1: isEn ? 'B2B' : 'Servicios de Datos',
      titlePartGradient: isEn ? 'Data Services' : 'B2B',
      titlePart2: '',
      description: isEn
        ? 'Data analysis and management solutions specifically designed for companies operating in a business-to-business environment.'
        : 'Soluciones de análisis y gestión de datos específicamente diseñadas para empresas que operan en un entorno de negocio a negocio.',
      testimonials: [
        {
          rating: 5,
          text: isEn
            ? '"Outsource Data Mining Services allowed us to reduce operational costs while gaining access to valuable information without expanding our internal team."'
            : '"Outsource Data Mining Services nos permitió reducir costos operacionales mientras ganamos acceso a información valiosa sin expandir nuestro equipo interno."',
          authorName: 'Greg T.',
          authorRole: 'Lead Generation',
          authorInitials: 'GT'
        },
        {
          rating: 5,
          text: isEn
            ? '"Thanks to their team, we were able to extract relevant information quickly, enabling better decisions and improved strategies."'
            : '"Gracias a su equipo, fuimos capaces de extraer información relevante rápidamente, permitiendo mejores decisiones y estrategias mejoradas."',
          authorName: 'Susan A.',
          authorRole: 'E-commerce',
          authorInitials: 'SA'
        }
      ],
      features: [
        {
          icon: Database,
          title: isEn ? 'Industry-specific data' : 'Datos específicos de la industria',
          description: isEn
            ? "We provide relevant and industry-specific data that help you identify new market opportunities, thanks to our team's knowledge."
            : 'Proporcionamos datos relevantes y específicos de la industria que te ayudan a identificar nuevas oportunidades de mercado, gracias al conocimiento de nuestro equipo.'
        },
        {
          icon: TrendingUp,
          title: isEn ? 'Marketing Strategy Optimization' : 'Optimización de Estrategia de Marketing',
          description: isEn
            ? 'Use our expert-analyzed data to optimize your B2B marketing strategies, ensuring you reach the right audience.'
            : 'Utiliza nuestros datos, analizados por expertos, para optimizar tus estrategias de marketing B2B, asegurando que llegas a la audiencia correcta.'
        },
        {
          icon: CheckSquare,
          title: isEn ? 'Improved Decision-Making' : 'Mejora de la Toma de Decisiones',
          description: isEn
            ? 'With accurate and up-to-date information provided by our expert team, you will improve your strategic decision-making.'
            : 'Con información precisa y actualizada proporcionada por nuestro equipo experto, mejorarás tu toma de decisiones estratégicas.'
        },
        {
          icon: Zap,
          title: isEn ? 'Flexibility and Adaptability' : 'Flexibilidad y Adaptabilidad',
          description: isEn
            ? 'Our services, backed by a team of experts, are flexible and adapt to the changing needs of your business, ensuring you stay ahead.'
            : 'Nuestros servicios, respaldados por un equipo de expertos, son flexibles y se adaptan a las necesidades cambiantes de tu negocio, asegurando que te mantengas adelante.'
        }
      ],
      needThisTitle: isEn
        ? 'How to know if you need B2B Data Services?'
        : '¿Cómo saber si necesitas B2B Data Services?',
      needThisDescription: isEn
        ? "If your business struggles to identify and connect with the right target audience, lacks accurate B2B data, or needs to optimize your sales and marketing efforts, it's time to consider specialized B2B data services."
        : 'Si tu negocio lucha por identificar y conectar con la audiencia objetivo correcta, carece de datos precisos en B2B o necesita optimizar tus esfuerzos de ventas y marketing, es hora de considerar servicios de datos especializados B2B.',
      helpYouSub: isEn ? 'Our Approach' : 'Nuestro Enfoque',
      helpYouTitle: isEn ? 'How we help you' : 'Cómo te ayudamos',
      helpYouDescription: isEn
        ? 'Our B2B Data Services provide customized and industry-specific data solutions designed to power your marketing and outreach strategies. By delivering accurate and actionable information, we empower companies to identify potential partners, optimize campaigns, and drive growth through data-driven decisions.'
        : 'Nuestros B2B Data Services proporcionan soluciones de datos personalizadas y específicas de la industria diseñadas para potenciar tus estrategias de marketing y extensión. Al entregar información precisa y accionable, empoderamos a las empresas para identificar posibles socios, optimizar campañas y impulsar el crecimiento a través de decisiones basadas en datos.',
      helpYouList: isEn
        ? ['B2B data analysis and audience segmentation', 'Marketing and sales strategy optimization', 'Identification of partnership opportunities and potential clients']
        : ['Análisis de datos y segmentación de audiencia B2B', 'Optimización de estrategias de marketing y ventas', 'Identificación de oportunidades de asociación y clientes potenciales'],
      ctaTitle: isEn
        ? 'The power of experienced talent ready to provide you with B2B Data Services'
        : 'El poder de talento experimentado listo para proporcionarte B2B Data Services',
      ctaDescription: isEn
        ? 'Start with B2B Data Services today and transform how your company identifies, connects, and grows with B2B potential clients.'
        : 'Comienza con B2B Data Services hoy y transforma cómo tu empresa identifica, conecta y crece con clientes potenciales B2B.',
      faqs: [
        {
          question: isEn ? 'What do B2B Data Services offer?' : '¿Qué ofrecen los B2B Data Services?',
          answer: isEn
            ? 'B2B Data Services provide data analysis and management solutions specifically designed for companies operating in a business-to-business environment.'
            : 'B2B Data Services proporcionan soluciones de análisis y gestión de datos específicamente diseñadas para empresas que operan en un entorno de negocio a negocio.'
        },
        {
          question: isEn ? 'Who are B2B Data Services aimed at?' : '¿A quién van dirigidos los B2B Data Services?',
          answer: isEn
            ? 'They are aimed at companies looking to improve their data strategy in a B2B context, optimizing sales, marketing, and customer management processes.'
            : 'Van dirigidos a empresas que buscan mejorar su estrategia de datos en un contexto B2B, optimizando los procesos de ventas, marketing y gestión de clientes.'
        },
        {
          question: isEn
            ? 'What are the benefits of hiring B2B Data Services?'
            : '¿Cuáles son los beneficios de contratar B2B Data Services?',
          answer: isEn
            ? 'By hiring these services, you get more accurate and relevant data about your customers and markets, improving your business focus and increasing operational efficiency.'
            : 'Al contratar estos servicios, obtienes datos más precisos y relevantes sobre tus clientes y mercados, mejorando tu enfoque empresarial e incrementando la eficiencia operacional.'
        }
      ]
    }
  };
}
