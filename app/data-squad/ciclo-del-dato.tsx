'use client';

import { RefreshCw, Database, Globe as Globe2, Cpu, ChartBar as BarChart2, File as FileEdit, Settings, Lock, CircleCheck as CheckCircle2, FlaskConical, LayoutDashboard, Monitor, Eye, Layers, Activity, Shield, HardDrive } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Role {
  name: string;
  sub: string;
  icon: LucideIcon;
  iconBg: string;
}

interface Step {
  num: number;
  title: string;
  description: string;
  roles: Role[];
}

const steps: Step[] = [
  {
    num: 1,
    title: 'Generación y captura de Datos',
    description:
      'Extraemos información de valor sin importar la complejidad de la fuente. Transformamos entornos no estructurados en activos constantes, superando cualquier barrera de acceso.',
    roles: [
      { name: 'Data Engineer', sub: 'Pipeline Architecture', icon: HardDrive, iconBg: 'from-cyan-500 to-blue-600' },
      { name: 'Web Scraping Specialist', sub: 'Web Data Extraction', icon: Globe2, iconBg: 'from-cyan-400 to-teal-500' },
      { name: 'RPA Developer', sub: 'Process Automation', icon: Cpu, iconBg: 'from-blue-500 to-purple-600' },
      { name: 'Data Analyst', sub: 'Requirements Definition', icon: BarChart2, iconBg: 'from-pink-500 to-rose-500' },
      { name: 'Data Entry Specialist', sub: 'Manual Input', icon: FileEdit, iconBg: 'from-orange-400 to-pink-500' },
      { name: 'Python Developer', sub: 'Web Data Extraction', icon: Globe2, iconBg: 'from-cyan-500 to-blue-600' },
    ],
  },
  {
    num: 2,
    title: 'Arquitectura y resguardo',
    description:
      'Diseñamos espacios seguros y escalables para alojar tu información. Organizamos cada dato en sistemas de alta disponibilidad, garantizando que todo esté protegido y listo para usar.',
    roles: [
      { name: 'Data Engineer', sub: 'Storage Architecture', icon: HardDrive, iconBg: 'from-cyan-500 to-blue-600' },
      { name: 'Database Administrator', sub: 'Operations & Maintenance', icon: Settings, iconBg: 'from-purple-500 to-pink-500' },
      { name: 'Data Security Specialist', sub: 'Protection & Compliance', icon: Lock, iconBg: 'from-purple-500 to-blue-600' },
      { name: 'Python Developer', sub: 'Web Data Extraction', icon: Globe2, iconBg: 'from-cyan-500 to-blue-600' },
    ],
  },
  {
    num: 3,
    title: 'Refinamiento y ETL',
    description:
      'Transformamos registros brutos en material de alto valor. Aplicamos procesos de limpieza y normalización para que tu equipo trabaje con información impecable.',
    roles: [
      { name: 'Data Engineer', sub: 'Pipeline Architecture', icon: HardDrive, iconBg: 'from-cyan-500 to-blue-600' },
      { name: 'Data Quality Analyst', sub: 'Quality Assurance', icon: CheckCircle2, iconBg: 'from-teal-400 to-emerald-500' },
      { name: 'Python Developer', sub: 'Automation & Scripting', icon: Globe2, iconBg: 'from-cyan-500 to-blue-600' },
      { name: 'ETL Developer', sub: 'Data Transformation', icon: RefreshCw, iconBg: 'from-blue-500 to-purple-500' },
    ],
  },
  {
    num: 4,
    title: 'Análisis y modelado',
    description:
      'Aplicamos modelos estadísticos y detección de patrones que respaldan tus decisiones con evidencia técnica y tendencias predictivas reales.',
    roles: [
      { name: 'Data Scientist', sub: 'Predictive Modeling', icon: FlaskConical, iconBg: 'from-purple-500 to-pink-500' },
      { name: 'Data Analyst', sub: 'Statistical Analysis', icon: BarChart2, iconBg: 'from-pink-500 to-rose-500' },
      { name: 'Python Developer', sub: 'ML & Analytics', icon: Globe2, iconBg: 'from-cyan-500 to-blue-600' },
    ],
  },
  {
    num: 5,
    title: 'Visualización activa',
    description:
      'Creamos interfaces claras que transforman números en movimientos. Diseñamos visualizaciones de impacto para que tu equipo interprete métricas y ejecute acciones de inmediato.',
    roles: [
      { name: 'BI Developer', sub: 'Dashboard Design', icon: LayoutDashboard, iconBg: 'from-orange-400 to-amber-500' },
      { name: 'Mobile Developer', sub: 'App Interfaces', icon: Monitor, iconBg: 'from-blue-500 to-cyan-500' },
      { name: 'Data Visualization Specialist', sub: 'Visual Analytics', icon: Eye, iconBg: 'from-teal-400 to-cyan-500' },
      { name: 'Python Developer', sub: 'Backend & APIs', icon: Globe2, iconBg: 'from-cyan-500 to-blue-600' },
      { name: 'FullStack Web Developer', sub: 'Web Applications', icon: Layers, iconBg: 'from-purple-500 to-blue-600' },
    ],
  },
  {
    num: 6,
    title: 'Implementación y monitoreo',
    description:
      'Mantenemos tus soluciones activas y optimizadas. Supervisamos el rendimiento de cada proceso para asegurar una entrega constante, sin errores ni interrupciones.',
    roles: [
      { name: 'Machine Learning Engineer', sub: 'Model Deployment', icon: Cpu, iconBg: 'from-blue-500 to-cyan-500' },
      { name: 'DataOps', sub: 'Operations & Monitoring', icon: Activity, iconBg: 'from-teal-400 to-emerald-500' },
      { name: 'Python Developer', sub: 'Automation & Pipelines', icon: Globe2, iconBg: 'from-cyan-500 to-blue-600' },
    ],
  },
  {
    num: 7,
    title: 'Eliminación y Archivo de datos',
    description:
      'Administramos el cierre del ciclo de vida de la información. Gestionamos el archivo o eliminación segura, asegurando el orden de tus registros y la integridad del proceso.',
    roles: [
      { name: 'Database Administrator', sub: 'Data Lifecycle', icon: Settings, iconBg: 'from-purple-500 to-pink-500' },
      { name: 'Compliance Specialist', sub: 'Regulatory Compliance', icon: Shield, iconBg: 'from-blue-500 to-purple-600' },
      { name: 'Python Developer', sub: 'Secure Deletion Scripts', icon: Globe2, iconBg: 'from-cyan-500 to-blue-600' },
    ],
  },
];

function RoleCard({ role }: { role: Role }) {
  const Icon = role.icon;
  return (
    <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-between gap-3 border border-cyan-200/40">
      <div className="min-w-0">
        <p className="text-gray-900 font-bold text-sm leading-tight truncate">{role.name}</p>
        <p className="text-cyan-500 text-xs font-medium mt-0.5 truncate">{role.sub}</p>
      </div>
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${role.iconBg}`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
    </div>
  );
}

function StepCard({ step }: { step: Step }) {
  return (
    <div className="flex gap-5 items-start">
      <div
        className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm mt-4"
        style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}
      >
        {step.num}
      </div>

      <div
        className="flex-1 rounded-2xl p-6"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
        }}
      >
        <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
        <p className="mb-5 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {step.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {step.roles.map((role, ri) => (
            <RoleCard key={ri} role={role} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CicloDelDatoSection() {
  return (
    <section className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #070d1f 0%, #0c1631 40%, #0a1228 100%)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex items-center gap-2.5 rounded-full px-6 py-3"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <RefreshCw className="w-4 h-4 text-cyan-400" />
            <span className="text-white text-xs font-bold uppercase tracking-[0.15em]">
              COBERTURA TÉCNICA INTEGRAL
            </span>
          </div>
        </div>

        <h2 className="text-center font-bold mb-6 leading-tight text-white" style={{ fontSize: '3rem' }}>
          Dominio total del{' '}
          <span
            className="italic"
            style={{
              background: 'linear-gradient(90deg, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ciclo del Dato
          </span>
        </h2>

        <p
          className="text-center mb-20 leading-relaxed max-w-2xl mx-auto"
          style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem' }}
        >
          Integramos al especialista exacto en cada fase de tu operación. Desde la captura
          estratégica hasta el archivo final: tu Squad asume el desafío para que tú lideres el
          resultado.
        </p>

        <div className="flex flex-col gap-10">
          {steps.map((step) => (
            <StepCard key={step.num} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
