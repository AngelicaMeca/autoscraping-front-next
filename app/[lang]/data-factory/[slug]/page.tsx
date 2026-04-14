'use client';

import { notFound } from 'next/navigation';
import { getServicesData } from './data';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactCTA from '@/components/ContactCTA';
import Breadcrumb from '@/components/Breadcrumb';
import { useState } from 'react';
import { ChevronDown, Sparkles, CheckSquare, Calendar, Star, Check, MessageSquare, Database, CircleHelp as HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { useLang } from '@/hooks/useLang';

export default function ServicePage({ params }: { params: { slug: string } }) {
  const lang = useLang();
  const isEn = lang === 'en';
  const data = getServicesData(isEn)[params.slug];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [openFeatureIndex, setOpenFeatureIndex] = useState<number | null>(0);

  if (!data) {
    notFound();
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleFeature = (index: number) => {
    setOpenFeatureIndex(openFeatureIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="adaptive" />

      {/* Hero Section (includes breadcrumb for seamless gradient) */}
      <section className="relative pt-36 pb-28 px-6 bg-gradient-to-b from-[#1E2DC1] via-[#2D1B85] to-[#4323A0] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-400/30 rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-pink-400/20 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-20 right-32 w-48 h-48 border border-purple-300/20 rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto mb-6 relative z-10">
          <Breadcrumb
            items={[
              { label: 'Data Factory', href: `/${lang}/data-factory` },
              { label: data.titlePartGradient },
            ]}
            className="text-white/70"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-purple-100 text-sm font-bold uppercase tracking-wide">
              {data.badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            {data.titlePart1 && <span>{data.titlePart1} </span>}
            <span className="bg-gradient-to-r from-[#FBCB67] via-[#FF8A76] to-[#C968FF] bg-clip-text text-transparent">
              {data.titlePartGradient}
            </span>
            <br />
            {data.titlePart2}
          </h1>

          <p className="text-purple-100/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {data.description}
          </p>

          <div className="flex justify-center">
            <Link href={`/${lang}/book-a-meeting`} className="bg-gradient-to-r from-pink-300 to-pink-200 hover:from-pink-200 hover:to-white text-purple-900 font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-pink-500/30 inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {isEn ? 'Book a call' : 'Agendar llamada'}
            </Link>
          </div>
        </div>
      </section>

      {/* Unified Testimonials and Features Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-40 left-10 w-64 h-64 border-2 border-purple-100/50 rounded-full"></div>
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-100/30 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-40 w-32 h-32 border-2 border-blue-100/50 rounded-full"></div>
        </div>
        
        {/* Testimonials */}
        <div className="max-w-6xl mx-auto relative z-10 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {isEn ? (
                <>What our <span className="bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] bg-clip-text text-transparent">clients</span> say</>
              ) : (
                <>Lo que dicen nuestros <span className="bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] bg-clip-text text-transparent">clientes</span></>
              )}
            </h2>
            <p className="text-gray-500">
              {isEn ? 'Real results from companies using our platform' : 'Resultados reales de empresas que utilizan nuestra plataforma'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.testimonials.map((test, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50 hover:-translate-y-1 transition-transform">
                <div className="flex text-yellow-400 mb-4 gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {test.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {test.authorInitials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{test.authorName}</h4>
                    <p className="text-sm text-gray-500">{test.authorRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {isEn ? (
                <>Key <span className="bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] bg-clip-text text-transparent">features</span></>
              ) : (
                <>Características <span className="bg-gradient-to-r from-[#9D62FA] to-[#7B5FE8] bg-clip-text text-transparent">principales</span></>
              )}
            </h2>
            <p className="text-gray-500">
              {isEn ? 'Everything you need to succeed' : 'Todo lo que necesitas para triunfar'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto">
            {data.features.map((feature, index) => {
              const Icon = feature.icon;
              
              let wrapperClasses = "";
              let headerClasses = "";
              let textClasses = "";
              let iconWrapperClasses = "";
              let iconClasses = "";

              if (index === 0) {
                 wrapperClasses = "lg:col-span-5 bg-gradient-to-br from-purple-50 to-white rounded-[2rem] p-10 border border-purple-100 flex flex-col justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300";
                 headerClasses = "font-bold text-gray-900 text-2xl md:text-3xl mb-4";
                 textClasses = "text-gray-600 leading-relaxed text-lg";
                 iconWrapperClasses = "w-16 h-16 bg-[#9D62FA] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-purple-500/30";
                 iconClasses = "w-8 h-8";
              } else if (index === 1) {
                 wrapperClasses = "lg:col-span-7 bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300";
                 headerClasses = "font-bold text-gray-900 text-2xl mb-4";
                 textClasses = "text-gray-600 leading-relaxed";
                 iconWrapperClasses = "w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6";
                 iconClasses = "w-6 h-6";
              } else if (index === 2) {
                 wrapperClasses = "lg:col-span-7 bg-gradient-to-br from-orange-50/50 to-rose-50/30 rounded-[2rem] p-10 border border-orange-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center";
                 headerClasses = "font-bold text-gray-900 text-3xl mb-4";
                 textClasses = "text-gray-600 leading-relaxed text-lg";
                 iconWrapperClasses = "w-14 h-14 bg-orange-100/80 text-orange-600 rounded-2xl flex items-center justify-center mb-8";
                 iconClasses = "w-7 h-7";
              } else {
                 wrapperClasses = "lg:col-span-5 bg-gradient-to-br from-[#F5F7FF] to-[#F1EEFF] rounded-[2rem] p-10 border border-indigo-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center";
                 headerClasses = "font-bold text-gray-900 text-2xl mb-4";
                 textClasses = "text-gray-600 leading-relaxed";
                 iconWrapperClasses = "w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6";
                 iconClasses = "w-6 h-6";
              }

              return (
                <div key={index} className={wrapperClasses}>
                  <div className={iconWrapperClasses}>
                    <Icon className={iconClasses} />
                  </div>
                  <h3 className={headerClasses}>{feature.title}</h3>
                  <p className={textClasses}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banner: Need This */}
      <section className="py-24 px-6 bg-[#1A1832] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-[#2D2A54] rounded-3xl p-10 md:p-14 border border-purple-500/20 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <CheckSquare className="w-8 h-8 text-purple-300" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {data.needThisTitle}
              </h3>
              <p className="text-purple-100/80 leading-relaxed text-lg">
                {data.needThisDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help You */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-cyan-50/60 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-purple-50/60 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-purple-600 font-bold tracking-wide uppercase text-sm mb-4 block">
            {data.helpYouSub}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data.helpYouTitle}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-16">
            {data.helpYouDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {data.helpYouList.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4 shadow-sm">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 text-lg leading-snug">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#7B5FE8] to-[#4F46E5] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#000000] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {data.ctaTitle}
          </h2>
          <p className="text-purple-100 text-lg mb-10">
            {data.ctaDescription}
          </p>
          <div className="flex justify-center">
            <Link href={`/${lang}/book-a-meeting`} className="bg-white text-purple-700 hover:bg-gray-50 font-bold px-6 py-3 rounded-xl transition-all shadow-xl inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {isEn ? 'Book a call' : 'Agendar llamada'}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 bg-[#FAFAFA] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-300 rounded-full px-5 py-2.5">
                <HelpCircle className="w-4 h-4 text-purple-600" />
                <span className="text-purple-600 text-xs font-bold uppercase tracking-widest">
                  {isEn ? 'WE ANSWER YOUR QUESTIONS' : 'RESOLVEMOS TUS DUDAS'}
                </span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {isEn ? (
                <>Frequently asked <span className="text-purple-600">questions</span></>
              ) : (
                <>Preguntas <span className="text-purple-600">frecuentes</span></>
              )}
            </h2>
            <p className="text-gray-500">
              {isEn ? 'Clarify your doubts about how our data process works.' : 'Aclara tus dudas sobre cómo funciona nuestro proceso de data.'}
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, index) => {
              const faqStyles = [
                {
                  border: 'border-purple-500', 
                  text: 'text-purple-600', 
                  bg: 'bg-purple-50',
                  iconGradient: 'from-purple-500 to-purple-600',
                  Icon: MessageSquare
                },
                {
                  border: 'border-[#EB4C81]', 
                  text: 'text-[#EB4C81]', 
                  bg: 'bg-pink-50',
                  iconGradient: 'from-[#EB4C81] to-[#FF758C]',
                  Icon: Database
                },
                {
                  border: 'border-blue-500', 
                  text: 'text-blue-600', 
                  bg: 'bg-blue-50',
                  iconGradient: 'from-blue-500 to-cyan-500',
                  Icon: HelpCircle
                }
              ];
              
              const style = faqStyles[index % faqStyles.length];
              const isOpen = openFaqIndex === index;
              const IconComponent = style.Icon;

              return (
                <div key={index} className={`bg-white rounded-2xl shadow-sm border overflow-hidden transition-all hover:shadow-md border-l-[6px] ${isOpen ? style.border : 'border-gray-100 border-l-transparent'}`}>
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full flex items-center gap-4 p-6 text-left transition-colors ${isOpen ? style.bg : 'hover:bg-gray-50'}`}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${style.iconGradient} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg ${isOpen ? style.text : 'text-gray-900'}`}>
                        {faq.question}
                      </h3>
                      {!isOpen && (
                        <p className="text-sm text-gray-500 mt-1">{isEn ? 'Click to discover more' : 'Haz click para descubrir más'}</p>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? `rotate-180 ${style.text}` : 'text-gray-400'}`} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 animate-in slide-in-from-top-2">
                       <p className="text-gray-600 leading-relaxed md:pl-[4.5rem]">
                         {faq.answer}
                       </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
