import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/seo';
import { type Locale } from '@/lib/i18n/config';
import { es } from '@/lib/i18n/dictionaries/es';
import { en } from '@/lib/i18n/dictionaries/en';

const dicts = { es, en };

type Props = { params: { lang: Locale }; children: React.ReactNode };

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const { lang } = params;
  const t = dicts[lang] ?? dicts.es;

  return {
    title: t.meta.dataSquad.title,
    description: t.meta.dataSquad.description,
    alternates: {
      canonical: `/${lang}/data-squad`,
      languages: {
        es: `${SITE_URL}/es/data-squad`,
        en: `${SITE_URL}/en/data-squad`,
        'x-default': `${SITE_URL}/es/data-squad`,
      },
    },
    openGraph: {
      title: t.meta.dataSquad.title,
      description: t.meta.dataSquad.description,
      url: `/${lang}/data-squad`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.dataSquad.title,
      description: t.meta.dataSquad.description,
    },
  };
}

const buildSchema = (lang: string) => [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/${lang}/data-squad/#service`,
    name: 'Data Squad',
    provider: { '@id': `${SITE_URL}/#organization` },
    url: `${SITE_URL}/${lang}/data-squad`,
    serviceType: lang === 'en' ? 'Data Consulting and Outsourcing' : 'Consultoría y Outsourcing de Datos',
    areaServed: 'Worldwide',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE_URL}/${lang}/book-a-meeting` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: lang === 'en'
      ? [
          { '@type': 'Question', name: 'What is the operational deployment time?', acceptedAnswer: { '@type': 'Answer', text: 'Integration is immediate after profile selection and agreement signing. We activate specialists with the exact stack for your project, ensuring traction from day one.' } },
          { '@type': 'Question', name: 'How is the cost of the service calculated?', acceptedAnswer: { '@type': 'Answer', text: 'The investment is structured on demand, considering specialist seniority, technical complexity, and required dedication level. No generic rates or hidden costs.' } },
          { '@type': 'Question', name: 'How do you validate the seniority of assigned talent?', acceptedAnswer: { '@type': 'Answer', text: 'Each specialist passes a rigorous internal technical validation process and has an average of 5 to 7 years of verifiable experience in complex projects.' } },
          { '@type': 'Question', name: 'How is my project data security protected?', acceptedAnswer: { '@type': 'Answer', text: 'We implement confidentiality protocols and technical shielding at every project node, ensuring your intellectual property and data remain protected.' } },
          { '@type': 'Question', name: 'Where are the team members located?', acceptedAnswer: { '@type': 'Answer', text: 'Our offices are in Argentina and the United States, with talent across Latin America. We operate in different time zones to adapt to your calendar.' } },
        ]
      : [
          { '@type': 'Question', name: '¿Cuál es el tiempo de despliegue operativo?', acceptedAnswer: { '@type': 'Answer', text: 'La integración es inmediata tras la selección de perfiles. Activamos especialistas con el stack exacto para tu proyecto, asegurando tracción desde el primer día.' } },
          { '@type': 'Question', name: '¿Cómo se calcula el costo del servicio?', acceptedAnswer: { '@type': 'Answer', text: 'La inversión se estructura bajo demanda, considerando el seniority de los especialistas, la complejidad técnica y el nivel de dedicación. Sin costos ocultos.' } },
          { '@type': 'Question', name: '¿Cómo validan el seniority del talento asignado?', acceptedAnswer: { '@type': 'Answer', text: 'Cada especialista supera un riguroso proceso de validación técnica interna con un promedio de 5 a 7 años de experiencia comprobable.' } },
          { '@type': 'Question', name: '¿Cómo se protege la seguridad de los datos de mi proyecto?', acceptedAnswer: { '@type': 'Answer', text: 'Implementamos protocolos de confidencialidad y blindaje técnico en cada nodo del proyecto.' } },
          { '@type': 'Question', name: '¿Dónde están ubicados los miembros del equipo?', acceptedAnswer: { '@type': 'Answer', text: 'Nuestras oficinas están en Argentina y Estados Unidos, con presencia de talento en toda Latinoamérica.' } },
        ],
  },
];

export default function DataSquadLayout({ children, params }: Props) {
  return (
    <>
      <JsonLd schema={buildSchema(params.lang)} />
      {children}
    </>
  );
}
