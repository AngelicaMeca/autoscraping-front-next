'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useLang } from '@/hooks/useLang';

export default function TermsAndConditionsPage() {
  const lang = useLang();
  const isEn = lang === 'en';

  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(160deg, #0a0e2a 0%, #111642 20%, #1a1f5e 40%, #1e2470 55%, #1a1f5e 70%, #111642 85%, #0a0e2a 100%)' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(120,80,220,0.18) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 mb-8" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
            <span className="text-white text-xs font-bold uppercase tracking-[0.12em]">
              {isEn ? 'Legal' : 'Legal'}
            </span>
          </div>
          <h1 className="text-white font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            {isEn ? 'Terms and Conditions' : 'Términos y Condiciones'}
          </h1>
          <p className="text-purple-300 text-sm">
            {isEn ? 'Last updated: 2025' : 'Última actualización: 2025'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-14"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
          >
            {/* Intro */}
            <p className="text-gray-300 text-sm leading-relaxed mb-10">
              {isEn
                ? 'Welcome to the AutoScraping website (the «Site»). These Terms and Conditions («Terms») govern your access to and use of the Site and the services provided by AutoScraping, a company specializing in web scraping, data science, outsourcing, staff augmentation, and software design (the «Services»). By using this Site, you agree to comply with these Terms. If you do not agree with them, we ask that you do not use the Site or the Services.'
                : 'Bienvenido al sitio web de AutoScraping (el «Sitio»). Estos Términos y Condiciones («Términos») rigen el acceso y uso del Sitio y los servicios proporcionados por AutoScraping, una empresa especializada en web scraping, ciencia de datos, outsourcing, aumento de personal y diseño de software (los «Servicios»). Al utilizar este Sitio, usted acepta cumplir con estos Términos. Si no está de acuerdo, le pedimos que no utilice el Sitio ni los Servicios.'}
            </p>

            <TermsSection
              title={isEn ? 'Acceptance of the Terms' : 'Aceptación de los Términos'}
              items={isEn ? [
                'By accessing, navigating, or using the website and/or acquiring any of the services offered therein, you accept and are bound by the following legal terms and conditions (hereinafter referred to as «Terms»), as well as our Privacy Policy. If you do not agree with these Terms or the Privacy Policy, we recommend that you refrain from using the Site or acquiring the services offered online through it.',
                'By accepting these Terms, you declare that you have the legal capacity to enter into a binding contract and that you will comply with these Terms and all applicable laws and regulations when using the Site and the services offered therein.',
                'If you are using the Site on behalf of an entity, organization, or company, you represent and warrant that you have the authority to bind that entity to these Terms, and in such case, «you» and «your» will refer to such entity, organization, or company.',
                'In addition to these Terms, certain areas or services offered on the Site may be subject to additional or specific terms and conditions, which will be provided to you before you access them and which you must also accept in order to use them.',
              ] : [
                'Al acceder, navegar o utilizar el sitio web y/o adquirir cualquiera de los servicios ofrecidos en él, usted acepta y queda vinculado por los siguientes términos y condiciones legales (en adelante denominados «Términos»), así como por nuestra Política de Privacidad. Si no está de acuerdo con estos Términos o la Política de Privacidad, le recomendamos que se abstenga de utilizar el Sitio o de adquirir los servicios ofrecidos en él.',
                'Al aceptar estos Términos, usted declara tener la capacidad legal para celebrar un contrato vinculante y que cumplirá con estos Términos y todas las leyes y regulaciones aplicables al utilizar el Sitio y los servicios ofrecidos.',
                'Si utiliza el Sitio en nombre de una entidad, organización o empresa, usted declara y garantiza que tiene autoridad para vincular dicha entidad a estos Términos, y en tal caso, «usted» y «su» se referirán a dicha entidad, organización o empresa.',
                'Además de estos Términos, ciertas áreas o servicios ofrecidos en el Sitio pueden estar sujetos a términos y condiciones adicionales o específicos, que le serán proporcionados antes de que acceda a ellos y que también deberá aceptar para utilizarlos.',
              ]}
            />

            <TermsSection
              title={isEn ? 'Definitions' : 'Definiciones'}
              items={isEn ? [
                '«Site»: Refers to the AutoScraping website.',
                '«Services»: Includes all services offered by AutoScraping, as defined below.',
                '«Clients»: Any individual or entity who contracts AutoScraping\'s services.',
                '«Content»: All content available on the Site, including texts, images, logos, and software.',
              ] : [
                '«Sitio»: Hace referencia al sitio web de AutoScraping.',
                '«Servicios»: Incluye todos los servicios ofrecidos por AutoScraping, según se define a continuación.',
                '«Clientes»: Cualquier persona física o jurídica que contrata los servicios de AutoScraping.',
                '«Contenido»: Todo el contenido disponible en el Sitio, incluyendo textos, imágenes, logotipos y software.',
              ]}
            />

            <TermsSection
              title={isEn ? 'Permitted Use' : 'Uso Permitido'}
            >
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {isEn
                  ? 'You may access and use the Site solely for lawful purposes and in accordance with these Terms. The following are prohibited:'
                  : 'Usted puede acceder y utilizar el Sitio únicamente para fines lícitos y de conformidad con estos Términos. Las siguientes acciones están prohibidas:'}
              </p>
              <ul className="space-y-2">
                {(isEn ? [
                  'Using the Services for fraudulent, illegal activities or activities that infringe third-party rights.',
                  'Attempting to decompile, reverse engineer, or derive the source code of AutoScraping\'s systems.',
                  'Using the Site or Services to collect sensitive data without authorization.',
                ] : [
                  'Utilizar los Servicios para actividades fraudulentas, ilegales o que infrinjan derechos de terceros.',
                  'Intentar descompilar, realizar ingeniería inversa o derivar el código fuente de los sistemas de AutoScraping.',
                  'Utilizar el Sitio o los Servicios para recopilar datos sensibles sin autorización.',
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </TermsSection>

            <TermsSection title={isEn ? 'Services Offered' : 'Servicios Ofrecidos'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {isEn
                  ? 'AutoScraping provides a range of customized services to meet the needs of our clients in various industries. The following are the main services we offer:'
                  : 'AutoScraping ofrece una gama de servicios personalizados para satisfacer las necesidades de nuestros clientes en diversas industrias. Los siguientes son los principales servicios que ofrecemos:'}
              </p>
              {(isEn ? [
                {
                  label: 'Web Scraping and Data Extraction',
                  bullets: [
                    'We provide advanced solutions for the automated extraction of data from public websites, complying with applicable laws and acceptable use policies.',
                    'The data collected is delivered in structured formats such as JSON, CSV, or Excel, depending on the client\'s needs.',
                    'We implement technical measures to respect website restrictions, such as cookie management, captchas, and the use of rotating proxies.',
                  ],
                },
                {
                  label: 'Data Science and Advanced Analytics',
                  bullets: [
                    'We design and execute data analysis projects to extract key insights and support strategic decision-making.',
                    'Our solutions include predictive modeling, analysis of large datasets, and creation of interactive dashboards.',
                    'We work with cutting-edge technologies in Python, R, and machine learning platforms.',
                  ],
                },
                {
                  label: 'Outsourcing and Staff Augmentation',
                  bullets: [
                    'We provide qualified personnel to reinforce our clients\' teams in areas such as software development, project management, and data analysis.',
                    'Our staff works under a flexible model, either as part of the client\'s internal team or remotely.',
                    'We ensure continuity and quality through rigorous selection processes and ongoing performance monitoring.',
                  ],
                },
                {
                  label: 'Software Design and Development',
                  bullets: [
                    'We create custom software solutions, from web applications to complex backend systems.',
                    'We offer end-to-end development services, including planning, architectural design, implementation, testing, and maintenance.',
                    'We apply agile methodologies to ensure iterative deliveries and continuous optimization throughout the project.',
                  ],
                },
                {
                  label: 'Technical Consulting and Support',
                  bullets: [
                    'We advise our clients on best practices for data management, process automation, and software development.',
                    'We provide real-time technical support to ensure the operational continuity of the implemented solutions.',
                  ],
                },
                {
                  label: 'Regulatory and Ethical Compliance',
                  bullets: [
                    'We ensure that all services comply with local and international regulations, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).',
                    'We are committed to respecting the privacy policies and terms of service of third-party websites when conducting data extraction processes.',
                  ],
                },
                {
                  label: 'Delivery and Contract Models',
                  bullets: [
                    'Time and Material (T&M) Projects: Tailored for dynamic projects where needs evolve over time.',
                    'Fixed Scope Projects: Ideal for projects with defined requirements and clear budgets.',
                    'Ongoing Subscriptions: Recurring services such as periodic data extraction or system maintenance.',
                  ],
                },
              ] : [
                {
                  label: 'Web Scraping y Extracción de Datos',
                  bullets: [
                    'Ofrecemos soluciones avanzadas para la extracción automatizada de datos de sitios web públicos, cumpliendo con las leyes aplicables y las políticas de uso aceptable.',
                    'Los datos recopilados se entregan en formatos estructurados como JSON, CSV o Excel, según las necesidades del cliente.',
                    'Implementamos medidas técnicas para respetar las restricciones de los sitios web, como la gestión de cookies, captchas y el uso de proxies rotativos.',
                  ],
                },
                {
                  label: 'Ciencia de Datos y Analítica Avanzada',
                  bullets: [
                    'Diseñamos y ejecutamos proyectos de análisis de datos para extraer información clave y apoyar la toma de decisiones estratégicas.',
                    'Nuestras soluciones incluyen modelado predictivo, análisis de grandes conjuntos de datos y creación de dashboards interactivos.',
                    'Trabajamos con tecnologías de vanguardia en Python, R y plataformas de machine learning.',
                  ],
                },
                {
                  label: 'Outsourcing y Aumento de Personal',
                  bullets: [
                    'Proporcionamos personal calificado para reforzar los equipos de nuestros clientes en áreas como desarrollo de software, gestión de proyectos y análisis de datos.',
                    'Nuestro personal trabaja bajo un modelo flexible, ya sea como parte del equipo interno del cliente o de forma remota.',
                    'Garantizamos continuidad y calidad mediante rigurosos procesos de selección y seguimiento continuo del desempeño.',
                  ],
                },
                {
                  label: 'Diseño y Desarrollo de Software',
                  bullets: [
                    'Creamos soluciones de software personalizadas, desde aplicaciones web hasta sistemas backend complejos.',
                    'Ofrecemos servicios de desarrollo de extremo a extremo, incluyendo planificación, diseño arquitectónico, implementación, pruebas y mantenimiento.',
                    'Aplicamos metodologías ágiles para garantizar entregas iterativas y optimización continua a lo largo del proyecto.',
                  ],
                },
                {
                  label: 'Consultoría y Soporte Técnico',
                  bullets: [
                    'Asesoramos a nuestros clientes sobre las mejores prácticas en gestión de datos, automatización de procesos y desarrollo de software.',
                    'Brindamos soporte técnico en tiempo real para garantizar la continuidad operativa de las soluciones implementadas.',
                  ],
                },
                {
                  label: 'Cumplimiento Regulatorio y Ético',
                  bullets: [
                    'Nos aseguramos de que todos los servicios cumplan con las regulaciones locales e internacionales, incluyendo el Reglamento General de Protección de Datos (RGPD) y la Ley de Privacidad del Consumidor de California (CCPA).',
                    'Estamos comprometidos a respetar las políticas de privacidad y los términos de servicio de sitios web de terceros al realizar procesos de extracción de datos.',
                  ],
                },
                {
                  label: 'Modelos de Entrega y Contrato',
                  bullets: [
                    'Proyectos Time and Material (T&M): Adaptados para proyectos dinámicos donde las necesidades evolucionan con el tiempo.',
                    'Proyectos de Alcance Fijo: Ideales para proyectos con requisitos definidos y presupuestos claros.',
                    'Suscripciones Continuas: Servicios recurrentes como extracción periódica de datos o mantenimiento de sistemas.',
                  ],
                },
              ]).map((group, gi) => (
                <div key={gi} className="mb-5">
                  <p className="text-purple-300 text-sm font-semibold mb-2">{String.fromCharCode(97 + gi)}. {group.label}</p>
                  <ul className="space-y-1.5 pl-4">
                    {group.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-gray-300 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/60 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </TermsSection>

            <TermsSection
              title={isEn ? 'Intellectual Property' : 'Propiedad Intelectual'}
              items={isEn ? [
                'All content on the Site, including texts, images, logos, and software, is the exclusive property of AutoScraping or its licensors and is protected by international intellectual property laws.',
                'Clients retain ownership of the data they provide, while AutoScraping retains ownership of any tools or software developed as part of the project.',
              ] : [
                'Todo el contenido del Sitio, incluyendo textos, imágenes, logotipos y software, es propiedad exclusiva de AutoScraping o sus licenciantes y está protegido por las leyes internacionales de propiedad intelectual.',
                'Los Clientes conservan la propiedad de los datos que proporcionan, mientras que AutoScraping conserva la propiedad de cualquier herramienta o software desarrollado como parte del proyecto.',
              ]}
            />

            <TermsSection title={isEn ? 'Payment Terms' : 'Términos de Pago'}>
              <ul className="space-y-2">
                {(isEn ? [
                  'Services must be paid according to the terms agreed upon in the corresponding proposal. AutoScraping reserves the right to suspend or cancel the Services in the event of non-payment.',
                  'Any outstanding payments will be due immediately upon termination of the contract.',
                ] : [
                  'Los servicios deben pagarse según los términos acordados en la propuesta correspondiente. AutoScraping se reserva el derecho de suspender o cancelar los Servicios en caso de impago.',
                  'Cualquier pago pendiente será exigible de inmediato al momento de la terminación del contrato.',
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </TermsSection>

            <TermsSection title={isEn ? 'Limitation of Liability' : 'Limitación de Responsabilidad'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {isEn
                  ? 'To the fullest extent permitted by law, AutoScraping will not be liable for any indirect, incidental, or consequential damages arising from the use of this Site or the Services, including data loss or lost profits.'
                  : 'En la máxima medida permitida por la ley, AutoScraping no será responsable de ningún daño indirecto, incidental o consecuente derivado del uso de este Sitio o los Servicios, incluyendo la pérdida de datos o lucro cesante.'}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'The client is responsible for providing accurate information and maintaining the confidentiality of any accounts or credentials associated with the Services. Any unauthorized use of these accounts should be immediately reported to AutoScraping.'
                  : 'El cliente es responsable de proporcionar información precisa y de mantener la confidencialidad de las cuentas o credenciales asociadas a los Servicios. Cualquier uso no autorizado de estas cuentas debe reportarse de inmediato a AutoScraping.'}
              </p>
            </TermsSection>

            <TermsSection
              title={isEn ? 'Privacy and Data Protection' : 'Privacidad y Protección de Datos'}
              items={isEn ? [
                'The privacy of our users is paramount. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal data.',
                'Personal data will be processed in compliance with applicable regulations and only for the purposes described in the specific agreements with each client.',
              ] : [
                'La privacidad de nuestros usuarios es primordial. Consulte nuestra Política de Privacidad para obtener información sobre cómo recopilamos, usamos y protegemos sus datos personales.',
                'Los datos personales serán procesados en cumplimiento de las regulaciones aplicables y únicamente para los fines descritos en los acuerdos específicos con cada cliente.',
              ]}
            />

            <TermsSection title={isEn ? 'Confidentiality' : 'Confidencialidad'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'All information shared between AutoScraping and its clients will be treated as confidential, unless otherwise agreed upon in writing.'
                  : 'Toda la información compartida entre AutoScraping y sus clientes será tratada como confidencial, salvo que se acuerde lo contrario por escrito.'}
              </p>
            </TermsSection>

            <TermsSection
              title={isEn ? 'Modification of the Terms' : 'Modificación de los Términos'}
              items={isEn ? [
                'AutoScraping reserves the right to modify these Terms at any time.',
                'Modifications will take effect upon publication on the Site, and continued use of the Services after such publication constitutes acceptance of the modified terms.',
                'We recommend that you review these Terms periodically to stay informed of any updates.',
                'AutoScraping is committed to clearly indicating the date of the last update of the Terms at the top of this document, so users can easily verify when the most recent modifications were made.',
              ] : [
                'AutoScraping se reserva el derecho de modificar estos Términos en cualquier momento.',
                'Las modificaciones entrarán en vigencia una vez publicadas en el Sitio, y el uso continuado de los Servicios tras dicha publicación constituye la aceptación de los términos modificados.',
                'Le recomendamos que revise estos Términos periódicamente para mantenerse informado de cualquier actualización.',
                'AutoScraping se compromete a indicar claramente la fecha de la última actualización de los Términos al inicio de este documento, para que los usuarios puedan verificar fácilmente cuándo se realizaron las modificaciones más recientes.',
              ]}
            />

            <TermsSection title={isEn ? 'Termination' : 'Terminación'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'AutoScraping may suspend or terminate your access to the Site or the Services if we detect a violation of these Terms or illegal activities.'
                  : 'AutoScraping podrá suspender o cancelar su acceso al Sitio o a los Servicios si detecta una violación de estos Términos o actividades ilegales.'}
              </p>
            </TermsSection>

            <TermsSection title={isEn ? 'Jurisdiction and Applicable Law' : 'Jurisdicción y Ley Aplicable'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'These Terms will be governed and interpreted in accordance with the laws of the country where AutoScraping primarily conducts its business operations.'
                  : 'Estos Términos se regirán e interpretarán de conformidad con las leyes del país donde AutoScraping desarrolla principalmente sus operaciones comerciales.'}
              </p>
            </TermsSection>

            <TermsSection title={isEn ? 'Exclusion of Warranties' : 'Exclusión de Garantías'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'AutoScraping provides the Services as described on its website and contract terms but does not guarantee that the Services will be uninterrupted, error free, or meet all of the client\'s expectations.'
                  : 'AutoScraping presta los Servicios tal como se describen en su sitio web y en los términos del contrato, pero no garantiza que los Servicios sean ininterrumpidos, libres de errores ni que cumplan todas las expectativas del cliente.'}
              </p>
            </TermsSection>

            <TermsSection title={isEn ? 'Indemnification' : 'Indemnización'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'The client agrees to indemnify and hold AutoScraping and its employees harmless from any claim, damage, loss, or liability arising from the misuse of the Services.'
                  : 'El cliente acepta indemnizar y eximir de responsabilidad a AutoScraping y a sus empleados de cualquier reclamación, daño, pérdida o responsabilidad que surja del uso indebido de los Servicios.'}
              </p>
            </TermsSection>

            <TermsSection title={isEn ? 'Force Majeure' : 'Fuerza Mayor'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {isEn
                  ? 'AutoScraping will not be liable for any failure to perform its obligations under these Terms if such failure is caused by factors beyond its control, including but not limited to natural disasters, internet outages, cyberattacks, or any other cause of force majeure.'
                  : 'AutoScraping no será responsable por ningún incumplimiento de sus obligaciones bajo estos Términos si dicho incumplimiento es causado por factores fuera de su control, incluyendo, entre otros, desastres naturales, interrupciones de internet, ciberataques u cualquier otra causa de fuerza mayor.'}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'AutoScraping will provide technical support during standard business hours. Any additional support outside of these hours may be subject to additional fees, depending on the specific agreement with the client.'
                  : 'AutoScraping brindará soporte técnico durante el horario comercial estándar. Cualquier soporte adicional fuera de este horario podrá estar sujeto a tarifas adicionales, según el acuerdo específico con el cliente.'}
              </p>
            </TermsSection>

            <TermsSection title={isEn ? 'Dispute Resolution' : 'Resolución de Disputas'} isLast>
              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {isEn
                    ? 'a. Any dispute arising from these Terms will first be discussed between the parties in an attempt to resolve it amicably.'
                    : 'a. Cualquier disputa que surja de estos Términos será discutida primero entre las partes en un intento de resolverla amigablemente.'}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {isEn
                    ? 'b. If such negotiations do not resolve the dispute within 60 (sixty) calendar days after written notice of the dispute, the following dispute resolution process will apply:'
                    : 'b. Si dichas negociaciones no resuelven la disputa dentro de los 60 (sesenta) días calendario posteriores a la notificación escrita de la disputa, se aplicará el siguiente proceso de resolución:'}
                </p>
                <ul className="space-y-2 pl-4">
                  {(isEn ? [
                    'Mediation: Either party may initiate mediation by delivering written notice to the other party. The parties will agree on a mediator and a mutually acceptable location. The parties will participate in the mediation in good faith and will attempt to reach a mutually acceptable resolution of the dispute.',
                    'Arbitration: If mediation fails, either party may initiate arbitration by providing written notice to the other party. The parties will agree on an arbitrator and a mutually acceptable location. The decision of the arbitrator will be final and binding for both parties.',
                  ] : [
                    'Mediación: Cualquiera de las partes puede iniciar una mediación mediante notificación escrita a la otra parte. Las partes acordarán un mediador y un lugar mutuamente aceptable. Las partes participarán en la mediación de buena fe e intentarán alcanzar una resolución mutuamente aceptable.',
                    'Arbitraje: Si la mediación fracasa, cualquiera de las partes puede iniciar un arbitraje mediante notificación escrita a la otra parte. Las partes acordarán un árbitro y un lugar mutuamente aceptable. La decisión del árbitro será definitiva y vinculante para ambas partes.',
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {isEn
                    ? 'c. The parties agree to cooperate in good faith with any dispute resolution process initiated under this clause and to comply with any decision or award rendered in connection with such process. The costs of any dispute resolution process will be shared equally between the parties, unless the mediator or arbitrator determines otherwise.'
                    : 'c. Las partes acuerdan cooperar de buena fe con cualquier proceso de resolución de disputas iniciado bajo esta cláusula y cumplir con cualquier decisión o laudo dictado en relación con dicho proceso. Los costos de cualquier proceso de resolución de disputas serán compartidos en partes iguales entre las partes, salvo que el mediador o árbitro determine lo contrario.'}
                </p>
              </div>
            </TermsSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ── Helpers ── */

function TermsSection({
  title,
  items,
  children,
  isLast = false,
}: {
  title: string;
  items?: string[];
  children?: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div className={`${isLast ? '' : 'mb-10 pb-10 border-b'}`} style={isLast ? {} : { borderColor: 'rgba(255,255,255,0.07)' }}>
      <h2 className="text-white font-bold text-xl mb-4" style={{ borderLeft: '3px solid #a855f7', paddingLeft: '0.75rem' }}>
        {title}
      </h2>
      {items ? (
        <ol className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
              <span className="text-purple-400 font-bold flex-shrink-0 text-xs mt-0.5">{String.fromCharCode(97 + i)}.</span>
              {item}
            </li>
          ))}
        </ol>
      ) : (
        children
      )}
    </div>
  );
}
