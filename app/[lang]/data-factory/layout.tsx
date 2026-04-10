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
    title: t.meta.dataFactory.title,
    description: t.meta.dataFactory.description,
    alternates: {
      canonical: `/${lang}/data-factory`,
      languages: {
        es: `${SITE_URL}/es/data-factory`,
        en: `${SITE_URL}/en/data-factory`,
        'x-default': `${SITE_URL}/es/data-factory`,
      },
    },
    openGraph: {
      title: t.meta.dataFactory.title,
      description: t.meta.dataFactory.description,
      url: `/${lang}/data-factory`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.dataFactory.title,
      description: t.meta.dataFactory.description,
    },
  };
}

const buildSchema = (lang: string) => [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/${lang}/data-factory/#service`,
    name: 'Data Factory',
    provider: { '@id': `${SITE_URL}/#organization` },
    url: `${SITE_URL}/${lang}/data-factory`,
    serviceType: lang === 'en' ? 'Web Scraping and Data Extraction' : 'Web Scraping y Extracción de Datos',
    areaServed: 'Worldwide',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE_URL}/${lang}/book-a-meeting` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: lang === 'en'
      ? [
          { '@type': 'Question', name: 'What does the Data Factory service consist of?', acceptedAnswer: { '@type': 'Answer', text: 'It is the regular supply of processed data based on specific client requirements. We handle extraction and delivery on a recurring basis according to your definitions.' } },
          { '@type': 'Question', name: 'What does contracting the service include?', acceptedAnswer: { '@type': 'Answer', text: 'You receive a structured, validated data flow according to your technical requirements, from extraction architecture design to script maintenance and final delivery.' } },
          { '@type': 'Question', name: 'What is the estimated time to start delivery?', acceptedAnswer: { '@type': 'Answer', text: 'The timeline is defined after a technical feasibility analysis to guarantee realistic delivery deadlines.' } },
          { '@type': 'Question', name: 'How often can I receive the data?', acceptedAnswer: { '@type': 'Answer', text: 'The frequency is fully customized: daily, weekly, monthly, or specific technical intervals to keep your database up to date.' } },
          { '@type': 'Question', name: 'In what formats is the data delivered?', acceptedAnswer: { '@type': 'Answer', text: 'We deliver formats compatible with your current infrastructure (JSON, CSV, databases, or API integration). Data arrives ready to use.' } },
        ]
      : [
          { '@type': 'Question', name: '¿En qué consiste exactamente el servicio de Data Factory?', acceptedAnswer: { '@type': 'Answer', text: 'Es el suministro regular de datos procesados basado en requerimientos específicos del cliente. Ejecutamos la extracción y el envío de forma recurrente según tus definiciones.' } },
          { '@type': 'Question', name: '¿Qué incluye la contratación del servicio?', acceptedAnswer: { '@type': 'Answer', text: 'Recibes un flujo de datos estructurado y validado. El servicio cubre desde el diseño de la arquitectura de extracción hasta el mantenimiento de los scripts y la entrega final.' } },
          { '@type': 'Question', name: '¿Cuál es el tiempo estimado para iniciar la entrega?', acceptedAnswer: { '@type': 'Answer', text: 'El cronograma se define tras un análisis de viabilidad técnica para garantizar plazos de entrega realistas.' } },
          { '@type': 'Question', name: '¿Con qué frecuencia se pueden recibir los datos?', acceptedAnswer: { '@type': 'Answer', text: 'La frecuencia es totalmente personalizada: diaria, semanal, mensual o bajo intervalos técnicos específicos.' } },
          { '@type': 'Question', name: '¿En qué formatos se realiza la entrega?', acceptedAnswer: { '@type': 'Answer', text: 'Entregamos formatos compatibles con tu infraestructura actual (JSON, CSV, bases de datos o API). El dato llega listo para su uso.' } },
        ],
  },
];

export default function DataFactoryLayout({ children, params }: Props) {
  return (
    <>
      <JsonLd schema={buildSchema(params.lang)} />
      {children}
    </>
  );
}
