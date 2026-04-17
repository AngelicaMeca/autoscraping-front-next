'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useLang } from '@/hooks/useLang';
import Link from 'next/link';

export default function DisclaimerPage() {
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
          <h1
            className="text-white font-extrabold leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {isEn ? 'Disclaimer' : 'Aviso Legal'}
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

            {/* Introduction */}
            <DisclaimerSection title={isEn ? 'Introduction' : 'Introducción'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'This disclaimer («Disclaimer») sets forth the terms and conditions under which AutoScraping provides access to its website and services. By using this site, you agree to the terms outlined in this document.'
                  : 'Este aviso legal («Aviso Legal») establece los términos y condiciones bajo los cuales AutoScraping proporciona acceso a su sitio web y servicios. Al utilizar este sitio, usted acepta los términos descritos en este documento.'}
              </p>
            </DisclaimerSection>

            {/* Use of site */}
            <DisclaimerSection title={isEn ? 'Use of the Site and Services' : 'Uso del Sitio y los Servicios'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'The content and services provided on this website are for informational and commercial purposes only. AutoScraping does not guarantee the accuracy, completeness, or timeliness of the information published. You use this site and the services at your own risk, accepting that AutoScraping will not be liable for any damages arising from the use of the site or the reliance placed on its content.'
                  : 'El contenido y los servicios ofrecidos en este sitio web tienen fines exclusivamente informativos y comerciales. AutoScraping no garantiza la exactitud, integridad o actualidad de la información publicada. El uso de este sitio y de los servicios es bajo su propio riesgo, aceptando que AutoScraping no será responsable de ningún daño derivado del uso del sitio o de la confianza depositada en su contenido.'}
              </p>
            </DisclaimerSection>

            {/* Compliance */}
            <DisclaimerSection title={isEn ? 'Compliance with Regulations' : 'Cumplimiento Normativo'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'AutoScraping strives to comply with all applicable regulations, such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). However, it is the client\'s responsibility to ensure that the use of our services complies with the specific laws and regulations of their jurisdiction or industry. AutoScraping recommends that users periodically review the applicable regulations regarding the collection and use of data.'
                  : 'AutoScraping se esfuerza por cumplir con todas las normativas aplicables, como el Reglamento General de Protección de Datos (RGPD) y la Ley de Privacidad del Consumidor de California (CCPA). No obstante, es responsabilidad del cliente garantizar que el uso de nuestros servicios cumpla con las leyes y regulaciones específicas de su jurisdicción o sector. AutoScraping recomienda a los usuarios revisar periódicamente las normativas aplicables en materia de recopilación y uso de datos.'}
              </p>
            </DisclaimerSection>

            {/* Limitation of Warranties */}
            <DisclaimerSection title={isEn ? 'Limitation of Warranties' : 'Limitación de Garantías'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'AutoScraping does not guarantee that the services on the site will be available uninterrupted, secure, or error-free. It also does not guarantee the accuracy of the information, the completeness of the data, or the suitability of the services for any particular purpose. The use of AutoScraping\'s services is at your own risk.'
                  : 'AutoScraping no garantiza que los servicios del sitio estén disponibles de forma ininterrumpida, segura o libre de errores. Tampoco garantiza la exactitud de la información, la integridad de los datos ni la idoneidad de los servicios para un fin determinado. El uso de los servicios de AutoScraping es bajo su propia responsabilidad.'}
              </p>
            </DisclaimerSection>

            {/* Limitations of Liability */}
            <DisclaimerSection title={isEn ? 'Limitations of Liability' : 'Limitaciones de Responsabilidad'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {isEn ? 'AutoScraping will not be liable for:' : 'AutoScraping no será responsable de:'}
              </p>
              <ul className="space-y-3">
                {(isEn ? [
                  'Direct, indirect, incidental, or consequential damages related to the use of this site or the services.',
                  'Technical issues or interruptions in access to the website.',
                  'Misuse or unauthorized use of data obtained through our services by clients.',
                ] : [
                  'Daños directos, indirectos, incidentales o consecuentes relacionados con el uso de este sitio o los servicios.',
                  'Problemas técnicos o interrupciones en el acceso al sitio web.',
                  'Uso indebido o no autorizado de datos obtenidos a través de nuestros servicios por parte de los clientes.',
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </DisclaimerSection>

            {/* Third-party links */}
            <DisclaimerSection title={isEn ? 'Links to Third-Party Sites' : 'Enlaces a Sitios de Terceros'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'This site may contain links to third-party websites for convenience or reference. AutoScraping does not control or endorse these sites and is not responsible for the content, practices, or privacy policies of these sites. We recommend that you review the terms and conditions of any external site you visit. Any transaction or other interaction between you and a third party is your sole responsibility.'
                  : 'Este sitio puede contener enlaces a sitios web de terceros por motivos de conveniencia o referencia. AutoScraping no controla ni respalda dichos sitios y no se hace responsable de su contenido, prácticas ni políticas de privacidad. Recomendamos revisar los términos y condiciones de cualquier sitio externo que visite. Cualquier transacción u otra interacción entre usted y un tercero es de su exclusiva responsabilidad.'}
              </p>
            </DisclaimerSection>

            {/* Intellectual Property */}
            <DisclaimerSection title={isEn ? 'Intellectual Property' : 'Propiedad Intelectual'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'All content on this site, including but not limited to text, graphics, logos, software, and other materials related to our services, is the property of AutoScraping or its licensors and is protected by intellectual property laws. Reproduction, modification, or distribution of any content without prior authorization is strictly prohibited. All rights to the content are expressly reserved. This means the content cannot be used, copied, reproduced, distributed, transmitted, or modified in any way without AutoScraping\'s prior written consent.'
                  : 'Todo el contenido de este sitio, incluyendo, entre otros, textos, gráficos, logotipos, software y demás materiales relacionados con nuestros servicios, es propiedad de AutoScraping o de sus licenciantes y está protegido por las leyes de propiedad intelectual. La reproducción, modificación o distribución de cualquier contenido sin autorización previa está estrictamente prohibida. Todos los derechos sobre el contenido están expresamente reservados. Esto significa que el contenido no puede ser utilizado, copiado, reproducido, distribuido, transmitido ni modificado de ninguna forma sin el consentimiento previo por escrito de AutoScraping.'}
              </p>
            </DisclaimerSection>

            {/* Jurisdiction */}
            <DisclaimerSection title={isEn ? 'Jurisdiction' : 'Jurisdicción'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'Any dispute arising from the use of this website or the services provided by AutoScraping will be governed and interpreted in accordance with the laws of the country where AutoScraping primarily conducts its business operations.'
                  : 'Cualquier disputa derivada del uso de este sitio web o de los servicios prestados por AutoScraping se regirá e interpretará de conformidad con las leyes del país en el que AutoScraping desarrolla principalmente sus operaciones comerciales.'}
              </p>
            </DisclaimerSection>

            {/* Modifications */}
            <DisclaimerSection title={isEn ? 'Modifications to the Disclaimer' : 'Modificaciones al Aviso Legal'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'AutoScraping reserves the right to modify this Disclaimer at any time, without prior notice. Modifications will be posted on this page, and continued use of the site implies acceptance of the changes. We recommend regularly reviewing this page to stay informed of any modifications.'
                  : 'AutoScraping se reserva el derecho de modificar este Aviso Legal en cualquier momento y sin previo aviso. Las modificaciones se publicarán en esta página, y el uso continuado del sitio implica la aceptación de los cambios. Recomendamos revisar esta página con regularidad para mantenerse informado de cualquier modificación.'}
              </p>
            </DisclaimerSection>

            {/* Consent */}
            <DisclaimerSection title={isEn ? 'Consent' : 'Consentimiento'} isLast>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn ? (
                  <>
                    By using this site, you declare that you have read, understood, and accepted the terms and conditions outlined in this Disclaimer. By accessing, navigating, or using the website and/or acquiring any of our services, you agree to be bound by our legal terms and conditions (hereinafter, «Terms») as well as our{' '}
                    <Link href={`/${lang}/privacy-policy`} className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">
                      Privacy Policy
                    </Link>.
                  </>
                ) : (
                  <>
                    Al utilizar este sitio, usted declara que ha leído, comprendido y aceptado los términos y condiciones establecidos en este Aviso Legal. Al acceder, navegar o utilizar el sitio web y/o adquirir cualquiera de nuestros servicios, usted acepta quedar vinculado por nuestros términos y condiciones legales (en adelante, «Términos»), así como por nuestra{' '}
                    <Link href={`/${lang}/privacy-policy`} className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">
                      Política de Privacidad
                    </Link>.
                  </>
                )}
              </p>
            </DisclaimerSection>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ─── Helper ─────────────────────────────────────────────────────────────────── */
function DisclaimerSection({
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
