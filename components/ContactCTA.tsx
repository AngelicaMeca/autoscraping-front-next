'use client';

import { MessageSquare, Clock, Calendar, ArrowRight, BarChart3, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useLang } from '@/hooks/useLang';

export default function ContactCTA() {
  const t = useTranslation();
  const lang = useLang();
  const c = t.contactCta;

  return (
    <section className="relative py-32 overflow-hidden bg-white -mt-16">
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-40 w-64 h-64 bg-purple-500/25 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-purple-600 text-xs font-bold mb-6">
              <MessageSquare className="w-4 h-4" />
              {c.badge}
            </span>

            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {c.title}
              <span className="bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] bg-clip-text text-transparent">
                {c.titleHighlight}
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">{c.description}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{c.emailLabel}</p>
                  <p className="text-gray-600">info@autoscraping.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{c.callLabel}</p>
                  <p className="text-gray-600">+1 (631) 400-4766</p>
                </div>
              </div>
            </div>

            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C084FC]/40 via-[#60A5FA]/40 to-[#F472B6]/40 rounded-xl blur-xl" />
              <Link
                href={`/${lang}/book-a-meeting`}
                className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#7B5FE8] to-[#9D62FA] hover:from-[#6B4FD8] hover:to-[#8D52EA] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                {c.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{c.statsTitle}</p>
                <p className="text-sm text-gray-500">{c.statsSubtitle}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <p className="text-gray-700 font-medium">{c.responseTime}</p>
                </div>
                <p className="text-purple-600 font-bold">{'< 1 hour'}</p>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-gray-700 font-medium">{c.projectsDelivered}</p>
                </div>
                <p className="text-blue-600 font-bold">99.9%</p>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full" />
                  <p className="text-gray-700 font-medium">{c.industries}</p>
                </div>
                <p className="text-pink-600 font-bold">+15</p>
              </div>

              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-gray-700 font-medium">{c.yearsExp}</p>
                </div>
                <p className="text-green-600 font-bold">+6</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <p>{c.trustedBy}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
