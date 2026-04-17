'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useLang } from '@/hooks/useLang';

export default function PrivacyPolicyPage() {
  const lang = useLang();
  const isEn = lang === 'en';

  return (
    <main
      className="min-h-screen"
      style={{ background: 'linear-gradient(160deg, #0a0e2a 0%, #111642 20%, #1a1f5e 40%, #1e2470 55%, #1a1f5e 70%, #111642 85%, #0a0e2a 100%)' }}
    >
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(120,80,220,0.18) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 mb-8"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
            <span className="text-white text-xs font-bold uppercase tracking-[0.12em]">Legal</span>
          </div>
          <h1 className="text-white font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            {isEn ? 'Privacy Policy' : 'Política de Privacidad'}
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

            {/* Context */}
            <PolicySection title={isEn ? 'Context' : 'Contexto'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {isEn
                  ? 'At AutoScraping, we consider data privacy protection a central aspect of our activities. As specialists in Web Scraping, Data Science, automation, software design, outsourcing, and staff augmentation, we recognize the importance of managing data responsibly and ethically. We strive to deliver data solutions that are high quality, compliant with regulations, and ethically sourced, while ensuring the highest privacy standards.'
                  : 'En AutoScraping, consideramos la protección de la privacidad de los datos un aspecto central de nuestras actividades. Como especialistas en Web Scraping, Ciencia de Datos, automatización, diseño de software, outsourcing y aumento de personal, reconocemos la importancia de gestionar los datos de forma responsable y ética. Nos esforzamos por ofrecer soluciones de datos de alta calidad, conformes con las regulaciones y obtenidas éticamente, garantizando los más altos estándares de privacidad.'}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'Since our services are globally accessible, we consider following international regulations, such as the General Data Protection Regulation (GDPR), Argentina\'s Personal Data Protection Law (Law 25.326), and the California Consumer Privacy Act (CCPA). This Privacy Policy explains how we handle personal data, both from users of our services and individuals whose data may be processed. For any inquiries, please contact us at privacy@autoscraping.com.'
                  : 'Dado que nuestros servicios son accesibles globalmente, seguimos regulaciones internacionales como el Reglamento General de Protección de Datos (RGPD), la Ley de Protección de Datos Personales de Argentina (Ley 25.326) y la Ley de Privacidad del Consumidor de California (CCPA). Esta Política de Privacidad explica cómo gestionamos los datos personales, tanto de usuarios de nuestros servicios como de personas cuyos datos puedan ser procesados. Para cualquier consulta, contáctenos en privacy@autoscraping.com.'}
              </p>
            </PolicySection>

            {/* Scope and Acceptance */}
            <PolicySection title={isEn ? 'Scope and Acceptance' : 'Alcance y Aceptación'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'This Privacy Policy applies to AutoScraping\'s website (the «Site»), along with its software, applications, and related services (hereinafter «the Services»). By using the Services or providing us with information through any medium, you confirm your acceptance of the terms set forth in this Privacy Policy, which will be updated periodically to maintain legal compliance and reflect the latest applicable regulations. If you do not agree with these terms, please cease using the Services and notify us so we can take appropriate action if we have collected your personal data.'
                  : 'Esta Política de Privacidad se aplica al sitio web de AutoScraping (el «Sitio»), junto con su software, aplicaciones y servicios relacionados (en adelante «los Servicios»). Al utilizar los Servicios o proporcionarnos información a través de cualquier medio, confirma su aceptación de los términos establecidos en esta Política de Privacidad, que se actualizará periódicamente para mantener el cumplimiento legal y reflejar las últimas regulaciones aplicables. Si no está de acuerdo con estos términos, deje de utilizar los Servicios y notifíquenos para que podamos tomar las medidas oportunas si hemos recopilado sus datos personales.'}
              </p>
            </PolicySection>

            {/* Definitions */}
            <PolicySection title={isEn ? 'Definitions for the User' : 'Definiciones para el Usuario'}>
              <ul className="space-y-3">
                {(isEn ? [
                  { term: 'Authorization', def: 'Prior and informed consent from the data subject for the processing of their personal data.' },
                  { term: 'Privacy Notice', def: 'A verbal or written communication from the Personal Data Controller to the data subject, informing them of the processing of their personal data.' },
                  { term: 'Personal Data Bank', def: 'An organized set of personal data, automated or not, that has a specific purpose, regardless of the form in which it is created, organized, stored, and accessed. Personal data may belong to more than one data bank.' },
                  { term: 'Interconnected Personal Data Bank', def: 'A collection of interconnected personal data databases, structured according to specific criteria, allowing easy access to data across all databases.' },
                  { term: 'Cancellation', def: 'The action described as «suppression» in the law when referring to personal data, which involves eliminating or deleting personal data from a data bank.' },
                  { term: 'Personal Data', def: 'Any numeric, alphabetical, graphical, photographic, acoustic, or other types of information concerning natural persons that identify or make them identifiable.' },
                  { term: 'Public Data', def: 'Data that is not semi-private, private, or sensitive.' },
                  { term: 'Optional Data', def: 'Data that AutoScraping requires for providing additional services.' },
                  { term: 'Sensitive Data', def: 'Personal data referring to a person\'s racial or ethnic origin, economic position, health data, political, religious, philosophical or moral beliefs, union membership, or information related to honor or sexual life, among others.' },
                  { term: 'Data Processor', def: 'A natural or legal person, public or private, who, either independently or in association with others, carries out personal data processing on behalf of the data controller.' },
                  { term: 'Rectification', def: 'A personal action aimed at affecting or modifying a personal data bank, either to update it, include information, or specifically correct its content with accurate data.' },
                  { term: 'Data Controller', def: 'The person responsible for each personal data bank and ensuring compliance with legal requirements regarding it (AutoScraping).' },
                  { term: 'Personal Data Processing', def: 'Any technical operation or procedure, automated or not, that allows the collection, registration, organization, storage, maintenance, processing, modification, extraction, consultation, use, blocking, deletion, transfer, or any other processing of personal data.' },
                  { term: 'Transfer or International Data Transmission', def: 'Process that involves the disclosure of personal data, either nationally or internationally, to a private legal entity, a public legal entity, or an individual, for any purpose whatsoever.' },
                ] : [
                  { term: 'Autorización', def: 'Consentimiento previo e informado del titular para el tratamiento de sus datos personales.' },
                  { term: 'Aviso de Privacidad', def: 'Comunicación verbal o escrita del Responsable del tratamiento dirigida al titular de los datos, informándole sobre el tratamiento de sus datos personales.' },
                  { term: 'Banco de Datos Personales', def: 'Conjunto organizado de datos personales, automatizado o no, con una finalidad específica, independientemente del soporte en que se creen, organicen, almacenen y accedan. Los datos personales pueden pertenecer a más de un banco de datos.' },
                  { term: 'Banco de Datos Personales Interconectado', def: 'Conjunto de bases de datos personales interconectadas, estructuradas según criterios específicos, que permiten acceder fácilmente a los datos de todas las bases.' },
                  { term: 'Cancelación', def: 'La acción descrita como «supresión» en la ley referida a datos personales, que consiste en eliminar o borrar datos personales de un banco de datos.' },
                  { term: 'Datos Personales', def: 'Cualquier información de carácter numérico, alfabético, gráfico, fotográfico, acústico o de cualquier otro tipo concerniente a personas físicas identificadas o identificables.' },
                  { term: 'Datos Públicos', def: 'Datos que no son semiprivados, privados ni sensibles.' },
                  { term: 'Datos Opcionales', def: 'Datos que AutoScraping requiere para la prestación de servicios adicionales.' },
                  { term: 'Datos Sensibles', def: 'Datos personales que hacen referencia al origen racial o étnico de una persona, su posición económica, datos de salud, creencias políticas, religiosas, filosóficas o morales, afiliación sindical, o información relativa a su honor o vida sexual, entre otros.' },
                  { term: 'Encargado del Tratamiento', def: 'Persona natural o jurídica, pública o privada, que por sí misma o en asociación con otros trata datos personales por cuenta del responsable del tratamiento.' },
                  { term: 'Rectificación', def: 'Acción personal orientada a afectar o modificar un banco de datos personales, ya sea para actualizarlo, incluir información o corregir específicamente su contenido con datos precisos.' },
                  { term: 'Responsable del Tratamiento', def: 'Persona responsable de cada banco de datos personales y del cumplimiento de los requisitos legales al respecto (AutoScraping).' },
                  { term: 'Tratamiento de Datos Personales', def: 'Cualquier operación o procedimiento técnico, automatizado o no, que permita la recopilación, registro, organización, almacenamiento, conservación, modificación, extracción, consulta, uso, bloqueo, supresión, transferencia o cualquier otro tratamiento de datos personales.' },
                  { term: 'Transferencia o Transmisión Internacional de Datos', def: 'Proceso que implica la divulgación de datos personales, nacional o internacionalmente, a una entidad jurídica privada, pública o a una persona física, con cualquier finalidad.' },
                ]).map(({ term, def }, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-purple-400 font-bold flex-shrink-0 text-xs mt-0.5">•</span>
                    <span className="text-gray-300 leading-relaxed"><span className="text-purple-300 font-semibold">{term}:</span> {def}</span>
                  </li>
                ))}
              </ul>
            </PolicySection>

            {/* Information We Collect */}
            <PolicySection title={isEn ? 'Information We Collect' : 'Información que Recopilamos'}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-purple-300 font-semibold text-sm uppercase tracking-wider mb-3">{isEn ? 'Non-Personal Information' : 'Información No Personal'}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">{isEn ? 'Non-personal information does not identify you. Examples include:' : 'La información no personal no le identifica. Algunos ejemplos son:'}</p>
                  <BulletList items={isEn ? ['Browser type', 'Pages visited', 'Time spent on pages', 'General location (city or postal code)'] : ['Tipo de navegador', 'Páginas visitadas', 'Tiempo en las páginas', 'Ubicación general (ciudad o código postal)']} />
                </div>
                <div>
                  <h3 className="text-purple-300 font-semibold text-sm uppercase tracking-wider mb-3">{isEn ? 'Personal Information' : 'Información Personal'}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">{isEn ? 'Personal information identifies or can identify you. Examples include:' : 'La información personal le identifica o puede identificarle. Algunos ejemplos son:'}</p>
                  <BulletList items={isEn ? ['Full name, email address, and phone number', 'IP address', 'Home or office address (State, Province, Postal Code, City)'] : ['Nombre completo, dirección de correo electrónico y número de teléfono', 'Dirección IP', 'Domicilio particular o laboral (Estado, Provincia, Código Postal, Ciudad)']} />
                  <p className="text-gray-300 text-sm leading-relaxed mt-3">{isEn ? 'We may also collect personal information provided by you during your communications with us related to our services, such as technical support threads. Additionally, we may need to use your personal information for audits and to comply with our legal obligations under applicable law.' : 'También podemos recopilar información personal que usted nos proporcione durante sus comunicaciones con nosotros relacionadas con nuestros servicios, como hilos de soporte técnico. Además, es posible que necesitemos utilizar su información personal para auditorías y para cumplir con nuestras obligaciones legales bajo la ley aplicable.'}</p>
                </div>
                <div>
                  <h3 className="text-purple-300 font-semibold text-sm uppercase tracking-wider mb-3">{isEn ? 'Public Data' : 'Datos Públicos'}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{isEn ? 'We may collect and use public personal data, such as contact details from online sources, to support our operations.' : 'Podemos recopilar y utilizar datos personales públicos, como información de contacto de fuentes en línea, para apoyar nuestras operaciones.'}</p>
                </div>
                <div>
                  <h3 className="text-purple-300 font-semibold text-sm uppercase tracking-wider mb-3">{isEn ? 'Combined Data' : 'Datos Combinados'}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{isEn ? 'When non-personal data is linked to personal information, we treat the combined data as personal information while the connection exists.' : 'Cuando los datos no personales se vinculan a información personal, tratamos los datos combinados como información personal mientras persista dicha vinculación.'}</p>
                </div>
              </div>
            </PolicySection>

            {/* Legal Basis */}
            <PolicySection title={isEn ? 'Legal Basis for Processing' : 'Base Legal para el Tratamiento'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{isEn ? 'Under GDPR, we process your personal data based on the following legal grounds:' : 'En virtud del RGPD, tratamos sus datos personales sobre las siguientes bases jurídicas:'}</p>
              <ul className="space-y-3">
                {(isEn ? [
                  { term: 'Consent', def: 'When you have given explicit consent to process your personal data for one or more specific purposes.' },
                  { term: 'Contract Performance', def: 'When processing is necessary to perform a contract with you or to take steps at your request before entering into a contract.' },
                  { term: 'Legal Obligations', def: 'When processing is necessary to comply with a legal obligation to which we are subject.' },
                  { term: 'Legitimate Interest', def: 'When processing is necessary for our legitimate interests, provided that such interests do not override your rights and freedoms.' },
                  { term: 'Local (Argentina)', def: 'Informed consent, legitimate interest, compliance with legal obligations.' },
                  { term: 'CCPA (California)', def: 'Compliance with CCPA, right to opt-out of the sale of your personal data.' },
                ] : [
                  { term: 'Consentimiento', def: 'Cuando usted ha dado su consentimiento explícito para el tratamiento de sus datos personales con uno o varios fines específicos.' },
                  { term: 'Ejecución de un contrato', def: 'Cuando el tratamiento es necesario para la ejecución de un contrato con usted o para aplicar medidas precontractuales a petición suya.' },
                  { term: 'Obligaciones legales', def: 'Cuando el tratamiento es necesario para cumplir una obligación legal a la que estamos sujetos.' },
                  { term: 'Interés legítimo', def: 'Cuando el tratamiento es necesario para nuestros intereses legítimos, siempre que dichos intereses no prevalezcan sobre sus derechos y libertades.' },
                  { term: 'Local (Argentina)', def: 'Consentimiento informado, interés legítimo, cumplimiento de obligaciones legales.' },
                  { term: 'CCPA (California)', def: 'Cumplimiento de la CCPA, derecho de exclusión de la venta de sus datos personales.' },
                ]).map(({ term, def }, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-purple-400 font-bold flex-shrink-0 text-xs mt-0.5">•</span>
                    <span className="text-gray-300 leading-relaxed"><span className="text-purple-300 font-semibold">{term}:</span> {def}</span>
                  </li>
                ))}
              </ul>
            </PolicySection>

            {/* What We Use Info For */}
            <PolicySection title={isEn ? 'What We Use Your Information For' : 'Para Qué Usamos Su Información'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{isEn ? 'We use your information to:' : 'Utilizamos su información para:'}</p>
              <BulletList items={isEn ? [
                'Operate and maintain our service.',
                'Notify you of changes to our service.',
                'Gather statistical data to improve our service and personalize your experience.',
                'Provide technical and business support.',
                'Detect, prevent, and address technical issues.',
                'Ensure compliance with laws and regulatory requirements.',
              ] : [
                'Operar y mantener nuestro servicio.',
                'Notificarle los cambios en nuestro servicio.',
                'Recopilar datos estadísticos para mejorar nuestro servicio y personalizar su experiencia.',
                'Prestar soporte técnico y empresarial.',
                'Detectar, prevenir y abordar problemas técnicos.',
                'Garantizar el cumplimiento de las leyes y los requisitos normativos.',
              ]} />
            </PolicySection>

            {/* RB2B */}
            <PolicySection title={isEn ? 'Use of Visitor Identification Technologies (RB2B)' : 'Uso de Tecnologías de Identificación de Visitantes (RB2B)'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {isEn
                  ? 'We use the RB2B.com visitor identification tool to associate browsing data (IP, pages viewed, etc.) with public or informal information about organizations or business users for purely commercial purposes. This tool is activated only if the visitor is in jurisdictions where it is legally permitted, such as the United States, and is additionally deactivated for EU IP addresses, in compliance with GDPR. This tool:'
                  : 'Utilizamos la herramienta de identificación de visitantes RB2B.com para asociar datos de navegación (IP, páginas visitadas, etc.) con información pública o informal sobre organizaciones o usuarios empresariales con fines puramente comerciales. Esta herramienta se activa únicamente si el visitante se encuentra en jurisdicciones donde está legalmente permitida, como Estados Unidos, y está desactivada para direcciones IP de la UE, en cumplimiento del RGPD. Esta herramienta:'}
              </p>
              <BulletList items={isEn ? [
                'Is not used to identify individuals in the EU.',
                'Does not apply to minors or sensitive profiles.',
                'Is used solely for B2B purposes in compliance with CCPA and Argentine legislation.',
                'Can be disabled by following our «Do Not Sell My Information» instructions.',
              ] : [
                'No se utiliza para identificar a personas físicas en la UE.',
                'No se aplica a menores ni a perfiles sensibles.',
                'Se utiliza exclusivamente con fines B2B en cumplimiento de la CCPA y la legislación argentina.',
                'Puede desactivarse siguiendo nuestras instrucciones de «No Vender Mi Información».',
              ]} />
              <p className="text-gray-300 text-sm leading-relaxed mt-3">
                {isEn
                  ? 'Automated decisions may be made about your browsing behavior to determine potential commercial interest. No legal or significant decisions will be made solely based on automated processing without your explicit consent.'
                  : 'Pueden tomarse decisiones automatizadas sobre su comportamiento de navegación para determinar el potencial interés comercial. No se tomarán decisiones legales o significativas basadas únicamente en el procesamiento automatizado sin su consentimiento explícito.'}
              </p>
            </PolicySection>

            {/* Third Parties */}
            <PolicySection title={isEn ? 'Contractual Clauses with Third Parties for Service Provision' : 'Cláusulas Contractuales con Terceros para la Prestación de Servicios'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {isEn
                  ? 'At AutoScraping, we understand the importance of protecting your privacy and the confidentiality of your personal information. Therefore, we share your information only under specific circumstances and with proper precautions. Below are the details of how and when we may share your information:'
                  : 'En AutoScraping, entendemos la importancia de proteger su privacidad y la confidencialidad de su información personal. Por ello, compartimos su información únicamente en circunstancias específicas y con las precauciones adecuadas. A continuación, se detallan cómo y cuándo podemos compartir su información:'}
              </p>
              <BulletList items={isEn ? [
                'Trusted third-party service providers (e.g., file storage and analytics).',
                'Clients, when necessary for service provision.',
                'Regulatory authorities, when required by law.',
              ] : [
                'Proveedores de servicios de terceros de confianza (p. ej., almacenamiento de archivos y análisis).',
                'Clientes, cuando sea necesario para la prestación del servicio.',
                'Autoridades reguladoras, cuando así lo exija la ley.',
              ]} />
              <p className="text-gray-300 text-sm leading-relaxed mt-3 mb-2">{isEn ? 'We may also share information:' : 'También podemos compartir información:'}</p>
              <BulletList items={isEn ? [
                'To comply with legal obligations.',
                'To respond to or notify security breaches.',
                'As required by contracts or company agreements.',
              ] : [
                'Para cumplir con obligaciones legales.',
                'Para responder a o notificar brechas de seguridad.',
                'Según lo exijan los contratos o acuerdos de la empresa.',
              ]} />
              <p className="text-gray-300 text-sm leading-relaxed mt-3">
                {isEn
                  ? 'We place your data with third parties who have access to your personal information solely to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. In the event of a services contract expiration, they must fully and permanently securely destroy the data according to the contract terms, and once the contractual relationship ends, the data must be destroyed or returned to the entity.'
                  : 'Ponemos sus datos en manos de terceros que tienen acceso a su información personal únicamente para realizar estas tareas en nuestro nombre y están obligados a no revelarla ni utilizarla para ningún otro fin. En caso de vencimiento de un contrato de servicios, deben destruir los datos de forma completa, permanente y segura según los términos del contrato, y una vez finalizada la relación contractual, los datos deben ser destruidos o devueltos a la entidad.'}
              </p>
            </PolicySection>

            {/* Security Measures */}
            <PolicySection title={isEn ? 'Security Measures' : 'Medidas de Seguridad'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {isEn
                  ? 'AutoScraping adopts security protocols to protect your data from unauthorized access, modifications, disclosures, or misuse. While we guarantee the security of your information, it is important to note that no system is completely invulnerable. AutoScraping uses appropriate security mechanisms, incident registration, and personal data backup procedures.'
                  : 'AutoScraping adopta protocolos de seguridad para proteger sus datos de accesos no autorizados, modificaciones, divulgaciones o usos indebidos. Si bien garantizamos la seguridad de su información, es importante señalar que ningún sistema es completamente invulnerable. AutoScraping utiliza mecanismos de seguridad adecuados, registro de incidentes y procedimientos de copia de seguridad de datos personales.'}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{isEn ? 'AutoScraping carries out the following control activities:' : 'AutoScraping lleva a cabo las siguientes actividades de control:'}</p>
              <BulletList items={isEn ? [
                'Adequate recording of access profiles and users with access to applications or systems that process personal data, or keep it updated.',
                'Periodic technical review on profiles and users with access to personal data, either fully or partially, or on a regular or occasional basis.',
                'Updated system records (automated or not) where creation, alterations, or destruction of personal data or devices storing personal data in AutoScraping\'s database are logged.',
                'Necessary corrective measures regarding detected incidents, including immediate notification to affected clients and data subjects, as appropriate.',
                'Updated inventory of files or databases that are hosted in our systems.',
                'Regular backups for the files or databases inventory.',
                'In case of detecting a potential security breach, we will notify you so we can proceed with the appropriate investigation.',
              ] : [
                'Registro adecuado de los perfiles de acceso y los usuarios con acceso a aplicaciones o sistemas que tratan datos personales, manteniéndolo actualizado.',
                'Revisión técnica periódica de los perfiles y usuarios con acceso a datos personales, ya sea total o parcialmente, de forma regular u ocasional.',
                'Registros actualizados del sistema (automatizados o no) donde se registren la creación, alteraciones o destrucción de datos personales o dispositivos que almacenen datos personales en la base de datos de AutoScraping.',
                'Medidas correctoras necesarias en relación con los incidentes detectados, incluyendo la notificación inmediata a los clientes afectados y a los interesados, según corresponda.',
                'Inventario actualizado de los ficheros o bases de datos alojados en nuestros sistemas.',
                'Copias de seguridad periódicas del inventario de ficheros o bases de datos.',
                'En caso de detectar una posible brecha de seguridad, le notificaremos para que podamos proceder con la investigación adecuada.',
              ]} />
            </PolicySection>

            {/* International Data Transfers */}
            <PolicySection title={isEn ? 'International Data Transfers' : 'Transferencias Internacionales de Datos'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'If AutoScraping transfers your personal data, we guarantee that such transfers are made under appropriate security measures, such as Standard Contractual Clauses approved by the European Commission or any other authorized mechanism to ensure the protection of your data under GDPR or Law 25.326.'
                  : 'Si AutoScraping transfiere sus datos personales, garantizamos que dichas transferencias se realizan bajo las medidas de seguridad adecuadas, como las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea o cualquier otro mecanismo autorizado para garantizar la protección de sus datos en virtud del RGPD o la Ley 25.326.'}
              </p>
            </PolicySection>

            {/* User Rights */}
            <PolicySection title={isEn ? 'User Rights' : 'Derechos del Usuario'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {isEn
                  ? 'Any AutoScraping user can exercise the right to access their personal data, as well as rectify any inaccurate data or, when applicable, request their deletion. Under certain circumstances, you may request the restriction of processing of data, in which case we will only use it for the exercise or defence of a right or against legal proceedings.'
                  : 'Cualquier usuario de AutoScraping puede ejercer el derecho de acceso a sus datos personales, así como rectificar datos inexactos o, cuando corresponda, solicitar su supresión. En determinadas circunstancias, puede solicitar la limitación del tratamiento de sus datos, en cuyo caso solo los utilizaremos para el ejercicio o la defensa de un derecho o contra procedimientos judiciales.'}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{isEn ? 'Depending on your jurisdiction, you may have the right to:' : 'Dependiendo de su jurisdicción, puede tener derecho a:'}</p>
              <BulletList items={isEn ? [
                'Access and review copies of your personal data.',
                'Request the correction or deletion of your data.',
                'Object to the processing of your data.',
                'Request the limitation of processing of your data.',
                'Request the portability of your data.',
                'Withdraw your consent at any time.',
                'File a complaint with a supervisory authority.',
                'Opt out of the sale of your personal data (CCPA).',
                'Not be discriminated against for exercising your rights (CCPA).',
              ] : [
                'Acceder y revisar copias de sus datos personales.',
                'Solicitar la corrección o supresión de sus datos.',
                'Oponerse al tratamiento de sus datos.',
                'Solicitar la limitación del tratamiento de sus datos.',
                'Solicitar la portabilidad de sus datos.',
                'Retirar su consentimiento en cualquier momento.',
                'Presentar una reclamación ante una autoridad de control.',
                'Excluirse de la venta de sus datos personales (CCPA).',
                'No ser discriminado por ejercer sus derechos (CCPA).',
              ]} />
              <p className="text-gray-300 text-sm leading-relaxed mt-3">
                {isEn
                  ? 'To exercise these rights, please contact us at: privacy@autoscraping.com, specifying the rights you wish to exercise, and we will send you a form for you to fill out. Additionally, you may exercise your right to lodge a complaint through the competent supervisory authority.'
                  : 'Para ejercer estos derechos, contáctenos en: privacy@autoscraping.com, especificando los derechos que desea ejercer, y le enviaremos un formulario para que lo complete. Asimismo, puede ejercer su derecho a presentar una reclamación ante la autoridad de control competente.'}
              </p>
            </PolicySection>

            {/* Cookies */}
            <PolicySection title={isEn ? 'Use of Cookies' : 'Uso de Cookies'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'We use cookies and similar technologies to enhance your experience on our website. These cookies collect information about your online activities and allow us to personalize our interactions with you. You can control the use of cookies through your browser settings. For more details, please consult our Cookie Policy.'
                  : 'Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Estas cookies recopilan información sobre sus actividades en línea y nos permiten personalizar nuestras interacciones con usted. Puede controlar el uso de cookies a través de la configuración de su navegador. Para más detalles, consulte nuestra Política de Cookies.'}
              </p>
            </PolicySection>

            {/* Retention */}
            <PolicySection title={isEn ? 'Retention Policy' : 'Política de Retención'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'We retain personal data only for as long as necessary for commercial or legal purposes. Factors influencing retention include the nature of the data and its processing purpose. We no longer store data once such purpose is met.'
                  : 'Conservamos los datos personales únicamente durante el tiempo necesario para fines comerciales o legales. Los factores que influyen en la retención incluyen la naturaleza de los datos y el propósito de su tratamiento. Dejamos de almacenar los datos una vez cumplido dicho propósito.'}
              </p>
            </PolicySection>

            {/* Do Not Sell */}
            <PolicySection title={isEn ? 'Do Not Sell My Personal Information Policy' : 'Política de No Venta de Información Personal'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'In compliance with the CCPA, AutoScraping offers users residing in California the right to opt out of the sale of their personal information. You can exercise this right at any time by contacting us at privacy@autoscraping.com.'
                  : 'En cumplimiento de la CCPA, AutoScraping ofrece a los usuarios residentes en California el derecho a excluirse de la venta de su información personal. Puede ejercer este derecho en cualquier momento contactándonos en privacy@autoscraping.com.'}
              </p>
            </PolicySection>

            {/* Security Breaches */}
            <PolicySection title={isEn ? 'Notification of Security Breaches' : 'Notificación de Brechas de Seguridad'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'In the event of a data breach affecting your rights and freedoms, we will notify the protection authorities within the legal timeframe following detection, as required by the GDPR. If a breach significantly impacts your rights, we will also notify you directly.'
                  : 'En caso de una brecha de datos que afecte a sus derechos y libertades, notificaremos a las autoridades de protección en el plazo legal tras la detección, tal como exige el RGPD. Si una brecha afecta significativamente a sus derechos, también le notificaremos directamente.'}
              </p>
            </PolicySection>

            {/* Minors */}
            <PolicySection title={isEn ? 'Minors' : 'Menores de Edad'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'We do not intentionally collect personal data from minors under the age of 15 without explicit parental or guardian consent. If we discover that we have collected data from minors under 15 without proper consent, we will take steps to delete such information.'
                  : 'No recopilamos intencionalmente datos personales de menores de 15 años sin el consentimiento explícito de los padres o tutores. Si descubrimos que hemos recopilado datos de menores de 15 años sin el consentimiento adecuado, tomaremos medidas para eliminar dicha información.'}
              </p>
            </PolicySection>

            {/* Changes */}
            <PolicySection title={isEn ? 'Changes to This Privacy Policy' : 'Cambios en Esta Política de Privacidad'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'AutoScraping reserves the right to modify this Privacy Policy. If we do so, we will update the «last update» section at the top of the Privacy Policy. If we make material changes to this policy, we may notify you via email, a blog post, or any other notification method. Your continued use of this website or our service constitutes acceptance of the terms of the current Privacy Policy.'
                  : 'AutoScraping se reserva el derecho de modificar esta Política de Privacidad. Si lo hacemos, actualizaremos la sección de «última actualización» al inicio de la Política de Privacidad. Si realizamos cambios sustanciales en esta política, es posible que le notifiquemos por correo electrónico, una entrada de blog u otro método de notificación. El uso continuado de este sitio web o de nuestro servicio constituye la aceptación de los términos de la Política de Privacidad vigente.'}
              </p>
            </PolicySection>

            {/* Contact */}
            <PolicySection title={isEn ? 'Contact Us' : 'Contáctenos'} isLast>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn ? 'For questions or concerns about this policy, please email us at ' : 'Para preguntas o inquietudes sobre esta política, escríbanos a '}
                <a href="mailto:privacy@autoscraping.com" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">
                  privacy@autoscraping.com
                </a>.
              </p>
            </PolicySection>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ── Helpers ── */

function PolicySection({
  title,
  children,
  isLast = false,
}: {
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div
      className={`${isLast ? '' : 'mb-10 pb-10 border-b'}`}
      style={isLast ? {} : { borderColor: 'rgba(255,255,255,0.07)' }}
    >
      <h2
        className="text-white font-bold text-xl mb-4"
        style={{ borderLeft: '3px solid #a855f7', paddingLeft: '0.75rem' }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}
