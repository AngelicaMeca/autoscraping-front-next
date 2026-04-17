'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useLang } from '@/hooks/useLang';

/* ─── Cookie table data ─────────────────────────────────────────────────────── */
const cookieTableEn = [
  {
    category: 'Strictly Necessary',
    description: 'Essential for the website to function. They cannot be disabled.',
    cookies: [
      { name: 'session_id', provider: 'autoscraping.com', purpose: 'Maintains your session while browsing the site.', duration: 'Session' },
      { name: 'csrf_token', provider: 'autoscraping.com', purpose: 'Protects against cross-site request forgery attacks.', duration: 'Session' },
      { name: 'cookie_consent', provider: 'autoscraping.com', purpose: 'Stores your cookie consent preferences.', duration: '1 year' },
    ],
  },
  {
    category: 'Analytics & Performance',
    description: 'Help us understand how visitors interact with the website, allowing us to improve it.',
    cookies: [
      { name: '_ga', provider: 'Google Analytics', purpose: 'Registers a unique ID used to generate statistical data on how you use the website.', duration: '2 years' },
      { name: '_gid', provider: 'Google Analytics', purpose: 'Registers a unique ID used to generate statistical data on how you use the website.', duration: '24 hours' },
      { name: '_gat', provider: 'Google Analytics', purpose: 'Used to throttle request rate.', duration: '1 minute' },
    ],
  },
  {
    category: 'Functional',
    description: 'Allow the website to remember choices you make (language, region) and provide enhanced features.',
    cookies: [
      { name: 'lang_pref', provider: 'autoscraping.com', purpose: 'Stores your preferred language (es/en).', duration: '1 year' },
      { name: 'ui_theme', provider: 'autoscraping.com', purpose: 'Remembers your display preferences.', duration: '1 year' },
    ],
  },
  {
    category: 'Marketing & Targeting',
    description: 'Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.',
    cookies: [
      { name: '_fbp', provider: 'Meta (Facebook)', purpose: 'Used to deliver, measure, and improve the relevance of ads.', duration: '3 months' },
      { name: 'li_fat_id', provider: 'LinkedIn', purpose: 'Used for LinkedIn Insight Tag to track conversions.', duration: '30 days' },
      { name: 'rb2b_id', provider: 'RB2B.com', purpose: 'Associates browsing data with B2B company profiles for commercial purposes (US only).', duration: 'Session' },
    ],
  },
];

const cookieTableEs = [
  {
    category: 'Estrictamente Necesarias',
    description: 'Son esenciales para el funcionamiento del sitio web. No se pueden desactivar.',
    cookies: [
      { name: 'session_id', provider: 'autoscraping.com', purpose: 'Mantiene tu sesión mientras navegas por el sitio.', duration: 'Sesión' },
      { name: 'csrf_token', provider: 'autoscraping.com', purpose: 'Protege contra ataques de falsificación de solicitudes entre sitios.', duration: 'Sesión' },
      { name: 'cookie_consent', provider: 'autoscraping.com', purpose: 'Almacena tus preferencias de consentimiento de cookies.', duration: '1 año' },
    ],
  },
  {
    category: 'Analíticas y Rendimiento',
    description: 'Nos ayudan a entender cómo los visitantes interactúan con el sitio web, permitiéndonos mejorarlo.',
    cookies: [
      { name: '_ga', provider: 'Google Analytics', purpose: 'Registra un ID único utilizado para generar datos estadísticos sobre cómo usas el sitio web.', duration: '2 años' },
      { name: '_gid', provider: 'Google Analytics', purpose: 'Registra un ID único utilizado para generar datos estadísticos sobre cómo usas el sitio web.', duration: '24 horas' },
      { name: '_gat', provider: 'Google Analytics', purpose: 'Se usa para reducir la tasa de solicitudes.', duration: '1 minuto' },
    ],
  },
  {
    category: 'Funcionales',
    description: 'Permiten que el sitio web recuerde las elecciones que haces (idioma, región) y ofrezca funciones mejoradas.',
    cookies: [
      { name: 'lang_pref', provider: 'autoscraping.com', purpose: 'Almacena tu idioma preferido (es/en).', duration: '1 año' },
      { name: 'ui_theme', provider: 'autoscraping.com', purpose: 'Recuerda tus preferencias de visualización.', duration: '1 año' },
    ],
  },
  {
    category: 'Marketing y Segmentación',
    description: 'Se utilizan para mostrar anuncios relevantes y medir la efectividad de nuestras campañas de marketing.',
    cookies: [
      { name: '_fbp', provider: 'Meta (Facebook)', purpose: 'Utilizada para entregar, medir y mejorar la relevancia de los anuncios.', duration: '3 meses' },
      { name: 'li_fat_id', provider: 'LinkedIn', purpose: 'Utilizada por LinkedIn Insight Tag para rastrear conversiones.', duration: '30 días' },
      { name: 'rb2b_id', provider: 'RB2B.com', purpose: 'Asocia datos de navegación con perfiles de empresas B2B con fines comerciales (solo EE.UU.).', duration: 'Sesión' },
    ],
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function CookiePolicyPage() {
  const lang = useLang();
  const isEn = lang === 'en';
  const cookieTable = isEn ? cookieTableEn : cookieTableEs;

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
            {isEn ? 'Cookie Policy' : 'Política de Cookies'}
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
                ? 'This Cookie Policy explains what cookies are, how AUTOScraping uses them on its website (autoscraping.com), and the choices you have regarding their use. By continuing to browse our site, you accept the use of cookies in accordance with this policy.'
                : 'Esta Política de Cookies explica qué son las cookies, cómo AUTOScraping las utiliza en su sitio web (autoscraping.com) y las opciones que tienes respecto a su uso. Al continuar navegando por nuestro sitio, aceptas el uso de cookies de acuerdo con esta política.'}
            </p>

            {/* What are cookies */}
            <CookieSection title={isEn ? 'What Are Cookies?' : '¿Qué Son las Cookies?'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {isEn
                  ? 'Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.'
                  : 'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tableta o móvil) cuando visitas un sitio web. Se utilizan ampliamente para que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.'}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'Cookies are not harmful to your device and do not contain any personally identifiable information unless you have provided such information to the website. They allow us to recognize your device and remember certain information about your visit.'
                  : 'Las cookies no son dañinas para tu dispositivo y no contienen ninguna información de identificación personal a menos que hayas proporcionado dicha información al sitio web. Nos permiten reconocer tu dispositivo y recordar cierta información sobre tu visita.'}
              </p>
            </CookieSection>

            {/* Types of cookies we use */}
            <CookieSection title={isEn ? 'Types of Cookies We Use' : 'Tipos de Cookies que Utilizamos'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {isEn
                  ? 'We use the following categories of cookies on our website. For each category, we describe their purpose and the specific cookies deployed:'
                  : 'Utilizamos las siguientes categorías de cookies en nuestro sitio web. Para cada categoría, describimos su finalidad y las cookies específicas implementadas:'}
              </p>

              <div className="space-y-8">
                {cookieTable.map((group, gi) => (
                  <div key={gi}>
                    {/* Category header */}
                    <div className="flex items-start gap-3 mb-3">
                      <span
                        className="mt-0.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0"
                        style={{
                          background: gi === 0 ? 'rgba(34,197,94,0.15)' : gi === 1 ? 'rgba(59,130,246,0.15)' : gi === 2 ? 'rgba(168,85,247,0.15)' : 'rgba(249,115,22,0.15)',
                          color: gi === 0 ? '#4ade80' : gi === 1 ? '#60a5fa' : gi === 2 ? '#c084fc' : '#fb923c',
                          border: `1px solid ${gi === 0 ? 'rgba(34,197,94,0.3)' : gi === 1 ? 'rgba(59,130,246,0.3)' : gi === 2 ? 'rgba(168,85,247,0.3)' : 'rgba(249,115,22,0.3)'}`,
                        }}
                      >
                        {group.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{group.description}</p>

                    {/* Table */}
                    <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                      <table className="w-full text-sm">
                        <thead>
                          <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                            {[isEn ? 'Cookie' : 'Cookie', isEn ? 'Provider' : 'Proveedor', isEn ? 'Purpose' : 'Finalidad', isEn ? 'Duration' : 'Duración'].map((h) => (
                              <th key={h} className="text-left text-purple-300 font-semibold text-xs uppercase tracking-wider px-4 py-3">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {group.cookies.map((cookie, ci) => (
                            <tr
                              key={ci}
                              style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: ci % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}
                            >
                              <td className="px-4 py-3 text-white font-mono text-xs">{cookie.name}</td>
                              <td className="px-4 py-3 text-gray-400 text-xs">{cookie.provider}</td>
                              <td className="px-4 py-3 text-gray-300 text-xs leading-relaxed">{cookie.purpose}</td>
                              <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">{cookie.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </CookieSection>

            {/* Third-party cookies */}
            <CookieSection title={isEn ? 'Third-Party Cookies' : 'Cookies de Terceros'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {isEn
                  ? 'Some cookies on our site are placed by third-party services that appear on our pages. These third parties have their own privacy policies governing the use of this information. We have no control over these third-party cookies and they are not covered by this Cookie Policy.'
                  : 'Algunas cookies en nuestro sitio son colocadas por servicios de terceros que aparecen en nuestras páginas. Estos terceros tienen sus propias políticas de privacidad que rigen el uso de esta información. No tenemos control sobre estas cookies de terceros y no están cubiertas por esta Política de Cookies.'}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {isEn ? 'The main third-party services we use include:' : 'Los principales servicios de terceros que utilizamos incluyen:'}
              </p>
              <ul className="space-y-3">
                {(isEn ? [
                  { name: 'Google Analytics', link: 'https://policies.google.com/privacy', desc: 'Website traffic analytics and user behavior tracking.' },
                  { name: 'Meta (Facebook) Pixel', link: 'https://www.facebook.com/policy.php', desc: 'Advertising campaign measurement and audience targeting.' },
                  { name: 'LinkedIn Insight Tag', link: 'https://www.linkedin.com/legal/privacy-policy', desc: 'Conversion tracking and audience insights for LinkedIn campaigns.' },
                  { name: 'RB2B', link: 'https://www.rb2b.com/privacy-policy', desc: 'B2B visitor identification for commercial purposes (US only, GDPR exempt).' },
                ] : [
                  { name: 'Google Analytics', link: 'https://policies.google.com/privacy', desc: 'Análisis de tráfico del sitio web y seguimiento del comportamiento de los usuarios.' },
                  { name: 'Meta (Facebook) Pixel', link: 'https://www.facebook.com/policy.php', desc: 'Medición de campañas publicitarias y segmentación de audiencias.' },
                  { name: 'LinkedIn Insight Tag', link: 'https://www.linkedin.com/legal/privacy-policy', desc: 'Seguimiento de conversiones e información de audiencia para campañas de LinkedIn.' },
                  { name: 'RB2B', link: 'https://www.rb2b.com/privacy-policy', desc: 'Identificación de visitantes B2B con fines comerciales (solo EE.UU., exento de RGPD).' },
                ]).map(({ name, link, desc }, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <span className="text-gray-300 leading-relaxed">
                      <a href={link} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 font-semibold transition-colors">
                        {name}
                      </a>
                      {' — '}{desc}
                    </span>
                  </li>
                ))}
              </ul>
            </CookieSection>

            {/* How to manage cookies */}
            <CookieSection title={isEn ? 'How to Manage and Control Cookies' : 'Cómo Gestionar y Controlar las Cookies'}>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {isEn
                  ? 'You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the following ways:'
                  : 'Tienes derecho a decidir si aceptas o rechazas las cookies. Puedes ejercer tus derechos sobre las cookies estableciendo tus preferencias de las siguientes maneras:'}
              </p>

              <div className="space-y-5">
                {/* Browser settings */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: 'rgba(168,85,247,0.07)', border: '1px solid rgba(168,85,247,0.15)' }}
                >
                  <h4 className="text-purple-300 font-semibold text-sm mb-2">
                    {isEn ? '🌐 Browser Settings' : '🌐 Configuración del Navegador'}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {isEn
                      ? 'Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies, delete existing cookies, or alert you when cookies are being sent.'
                      : 'La mayoría de los navegadores web te permiten controlar las cookies a través de su configuración. Puedes configurar tu navegador para rechazar cookies, eliminar las existentes o alertarte cuando se envían cookies.'}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      { name: 'Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                      { name: 'Firefox', url: 'https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer' },
                      { name: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
                      { name: 'Edge', url: 'https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge' },
                      { name: 'Opera', url: 'https://help.opera.com/en/latest/web-preferences/#cookies' },
                    ].map(({ name, url }) => (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-purple-300 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
                      >
                        <span className="w-1 h-1 rounded-full bg-purple-400" />
                        {name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Opt-out tools */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.15)' }}
                >
                  <h4 className="text-blue-300 font-semibold text-sm mb-2">
                    {isEn ? '🚫 Opt-Out Tools' : '🚫 Herramientas de Exclusión'}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {isEn
                      ? 'You can opt out of specific third-party tracking tools:'
                      : 'Puedes excluirte de herramientas de seguimiento de terceros específicas:'}
                  </p>
                  <ul className="space-y-2">
                    {(isEn ? [
                      { label: 'Google Analytics Opt-out', url: 'https://tools.google.com/dlpage/gaoptout' },
                      { label: 'Meta Ad Preferences', url: 'https://www.facebook.com/ads/preferences' },
                      { label: 'LinkedIn Ad Settings', url: 'https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out' },
                      { label: 'Network Advertising Initiative Opt-out', url: 'https://optout.networkadvertising.org' },
                    ] : [
                      { label: 'Exclusión de Google Analytics', url: 'https://tools.google.com/dlpage/gaoptout' },
                      { label: 'Preferencias de anuncios de Meta', url: 'https://www.facebook.com/ads/preferences' },
                      { label: 'Configuración de anuncios de LinkedIn', url: 'https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out' },
                      { label: 'Exclusión de la Network Advertising Initiative', url: 'https://optout.networkadvertising.org' },
                    ]).map(({ label, url }) => (
                      <li key={label} className="flex items-center gap-2 text-xs">
                        <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Important note */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: 'rgba(234,179,8,0.07)', border: '1px solid rgba(234,179,8,0.2)' }}
                >
                  <p className="text-yellow-200 text-sm leading-relaxed">
                    <span className="font-semibold">⚠️ {isEn ? 'Important:' : 'Importante:'}</span>{' '}
                    {isEn
                      ? 'Please note that disabling certain cookies may affect the functionality of our website. Strictly necessary cookies cannot be disabled as they are essential for the site to operate correctly.'
                      : 'Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad de nuestro sitio web. Las cookies estrictamente necesarias no se pueden deshabilitar, ya que son esenciales para el correcto funcionamiento del sitio.'}
                  </p>
                </div>
              </div>
            </CookieSection>

            {/* Do Not Track */}
            <CookieSection title={isEn ? 'Do Not Track Signals' : 'Señales "Do Not Track"'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'Some browsers include a "Do Not Track" (DNT) feature that signals websites not to track your activity. Our website currently does not respond to DNT signals. However, you can use the opt-out methods described above to limit tracking.'
                  : 'Algunos navegadores incluyen una función "Do Not Track" (DNT) que indica a los sitios web que no rastreen tu actividad. Nuestro sitio web actualmente no responde a las señales DNT. Sin embargo, puedes utilizar los métodos de exclusión descritos anteriormente para limitar el seguimiento.'}
              </p>
            </CookieSection>

            {/* GDPR / CCPA */}
            <CookieSection title={isEn ? 'Your Rights Under GDPR and CCPA' : 'Tus Derechos bajo el RGPD y la CCPA'}>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    label: isEn ? 'GDPR (European Users)' : 'RGPD (Usuarios Europeos)',
                    color: 'rgba(168,85,247,0.1)',
                    border: 'rgba(168,85,247,0.25)',
                    text: '#c084fc',
                    items: isEn ? [
                      'Right to access cookie data we hold about you.',
                      'Right to withdraw consent at any time.',
                      'Right to request deletion of cookie-related data.',
                      'Right to object to profiling based on cookie data.',
                    ] : [
                      'Derecho a acceder a los datos de cookies que tenemos sobre ti.',
                      'Derecho a retirar el consentimiento en cualquier momento.',
                      'Derecho a solicitar la eliminación de datos relacionados con cookies.',
                      'Derecho a oponerte al perfilado basado en datos de cookies.',
                    ],
                  },
                  {
                    label: isEn ? 'CCPA (California Users)' : 'CCPA (Usuarios de California)',
                    color: 'rgba(59,130,246,0.1)',
                    border: 'rgba(59,130,246,0.25)',
                    text: '#60a5fa',
                    items: isEn ? [
                      'Right to know what personal data is collected via cookies.',
                      'Right to opt out of the "sale" of data via tracking cookies.',
                      'Right to non-discrimination for exercising your rights.',
                      'Right to request deletion of cookie-related personal data.',
                    ] : [
                      'Derecho a saber qué datos personales se recopilan mediante cookies.',
                      'Derecho a excluirte de la "venta" de datos a través de cookies de seguimiento.',
                      'Derecho a no ser discriminado por ejercer tus derechos.',
                      'Derecho a solicitar la eliminación de datos personales relacionados con cookies.',
                    ],
                  },
                ].map(({ label, color, border, text, items }) => (
                  <div key={label} className="rounded-2xl p-5" style={{ background: color, border: `1px solid ${border}` }}>
                    <h4 className="font-semibold text-sm mb-3" style={{ color: text }}>{label}</h4>
                    <ul className="space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-xs leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: text }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CookieSection>

            {/* Retention */}
            <CookieSection title={isEn ? 'Cookie Retention Periods' : 'Períodos de Retención de Cookies'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'Cookies are retained for different periods depending on their purpose. Session cookies expire when you close your browser. Persistent cookies remain on your device for a set period (as indicated in the table above) or until you delete them. You can clear all cookies stored on your device at any time through your browser settings.'
                  : 'Las cookies se conservan durante diferentes períodos según su finalidad. Las cookies de sesión expiran cuando cierras tu navegador. Las cookies persistentes permanecen en tu dispositivo durante un período determinado (como se indica en la tabla anterior) o hasta que las elimines. Puedes borrar todas las cookies almacenadas en tu dispositivo en cualquier momento a través de la configuración de tu navegador.'}
              </p>
            </CookieSection>

            {/* Changes */}
            <CookieSection title={isEn ? 'Changes to This Cookie Policy' : 'Cambios en Esta Política de Cookies'}>
              <p className="text-gray-300 text-sm leading-relaxed">
                {isEn
                  ? 'We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the «Last updated» date at the top of this page. We encourage you to review this policy periodically.'
                  : 'Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en nuestras prácticas u otras razones operativas, legales o reglamentarias. Te notificaremos de cualquier cambio sustancial actualizando la fecha de «Última actualización» en la parte superior de esta página. Te recomendamos que revises esta política periódicamente.'}
              </p>
            </CookieSection>

            {/* Contact */}
            <CookieSection title={isEn ? 'Contact Us' : 'Contáctenos'} isLast>
              <p className="text-gray-300 text-sm leading-relaxed mb-1">
                {isEn
                  ? 'If you have any questions about our use of cookies or this Cookie Policy, please contact us at:'
                  : 'Si tienes alguna pregunta sobre el uso de cookies o esta Política de Cookies, contáctanos en:'}
              </p>
              <a
                href="mailto:privacy@autoscraping.com"
                className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2 text-sm font-medium"
              >
                privacy@autoscraping.com
              </a>
            </CookieSection>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ─── Helpers ───────────────────────────────────────────────────────────────── */
function CookieSection({
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
