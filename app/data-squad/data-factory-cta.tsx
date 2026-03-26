import { Beaker, ArrowRight, MessageSquare, Clock } from 'lucide-react';
import Link from 'next/link';

export default function DataFactoryCta() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1247 0%, #2d1b69 50%, #1a1247 100%)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <Beaker className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-bold uppercase tracking-wide">
              DATA FACTORY
            </span>
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-white">¿Necesitas un flujo de</span>
          <br />
          <span className="bg-gradient-to-r from-[#7B92FF] via-[#9D7EFF] to-[#B97EFF] bg-clip-text text-transparent">
            Extracción a medida?
          </span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Desarrollamos arquitecturas de entrega personalizadas que se integran con tu entorno de trabajo.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/data-factory"
            className="bg-gradient-to-r from-[#7B92FF] to-[#9D7EFF] hover:from-[#6B82EF] hover:to-[#8D6EEF] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 inline-flex items-center gap-3 text-lg"
          >
            <span>Conocer Data Factory</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
