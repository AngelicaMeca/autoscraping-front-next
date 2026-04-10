'use client';

import { useState } from 'react';
import { CircleHelp as HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuál es el tiempo de despliegue operativo?',
    subtitle: 'How we work with your team',
    answer: 'La integración es inmediata tras la selección de perfiles y firma de acuerdos. Nuestra estructura nos permite activar especialistas con el stack exacto para tu proyecto, eliminando curvas de aprendizaje y asegurando tracción desde el primer día.',
  },
  {
    question: '¿Cómo se calcula el costo del servicio?',
    subtitle: 'Pricing structure explained',
    answer: 'La inversión se estructura bajo demanda, considerando el seniority de los especialistas, la complejidad técnica del proyecto y el nivel de dedicación requerido. Sin tarifas genéricas ni costos ocultos.',
  },
  {
    question: '¿Cómo validan el seniority del talento asignado?',
    subtitle: 'Quality assurance process',
    answer: 'Cada especialista supera un riguroso proceso de validación técnica interna y cuenta con un promedio de 5 a 7 años de experiencia comprobable en proyectos complejos.',
  },
  {
    question: '¿Cómo se protege la seguridad de los datos de mi proyecto?',
    subtitle: 'Security and confidentiality measures',
    answer: 'Bajo estándares de seguridad de alto nivel. Implementamos protocolos de confidencialidad y blindaje técnico en cada nodo del proyecto, asegurando que tu propiedad intelectual y tus datos permanezcan siempre protegidos.',
  },
  {
    question: '¿Dónde están ubicados los miembros del equipo?',
    subtitle: 'Geographic distribution and time zones',
    answer: 'Nuestras oficinas están en Argentina y Estados Unidos, con presencia de talento en toda Latinoamérica. Operamos en distintas zonas horarias para adaptarnos a tu calendario.',
  },
  {
    question: '¿Tengo flexibilidad para escalar o cambiar perfiles?',
    subtitle: 'Scalability and adaptability',
    answer: 'Sí. Podemos ampliar la capacidad del Squad o ajustar las especialidades técnicas en ciclos ágiles, adaptándonos a la evolución de tu hoja de ruta sin burocracias.',
  },
  {
    question: '¿Quién mantiene la propiedad intelectual del desarrollo?',
    subtitle: 'Intellectual property ownership',
    answer: 'La propiedad es 100% tuya. Todo el código, repositorios y documentación se entregan de forma íntegra, asegurando que el activo generado permanezca en tu infraestructura.',
  },
  {
    question: '¿Cómo se integra el equipo a mi flujo de trabajo?',
    subtitle: 'Workflow integration',
    answer: 'Sincronía total. El Squad opera bajo tus herramientas de gestión. Reportamos avances mediante informes de desempeño periódicos para auditar el cumplimiento de cada hito.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 40%, #fdf4ff 100%)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-purple-200 rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-300 rounded-full px-5 py-2.5">
            <HelpCircle className="w-4 h-4 text-purple-600" />
            <span className="text-purple-600 text-xs font-bold uppercase tracking-widest">
              CLARIDAD OPERATIVA
            </span>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-gray-900">Preguntas frecuentes sobre</span>
            <br />
            <span className="text-purple-600">DataSquad</span>
          </h2>
          <p className="text-gray-600 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
            Todo lo que necesitas saber para decidir con confianza.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-all hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center gap-4 p-6 text-left transition-all"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex !== index && (
                    <p className="text-sm text-purple-600 mt-1">{faq.subtitle}</p>
                  )}
                </div>

                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index ? 'bg-purple-600' : 'bg-purple-100'
                  }`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openIndex === index ? 'rotate-180 text-white' : 'text-purple-600'
                      }`}
                    />
                  </div>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 animate-in slide-in-from-top">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
