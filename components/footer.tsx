'use client';

import { Linkedin, Instagram, Facebook, Github, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { useLang } from '@/hooks/useLang';

export default function Footer() {
  const t = useTranslation();
  const lang = useLang();

  return (
    <footer className="bg-gradient-to-br from-[#111827] via-[#312E81] to-[#581C87] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image src="/logo.png" alt="AUTOScraping" width={40} height={40} className="h-10 w-auto brightness-0 invert" />
              <span className="text-xl font-bold tracking-wide">
                <span className="text-white">AUTO</span><span className="text-purple-400">Scraping</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">{t.footer.tagline}</p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/autoscraping"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/autoscraping"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/autoscraping"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/autoscraping"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@Autoscraping"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-lg flex items-center justify-center transition"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 tracking-wider">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}`} className="text-gray-300 hover:text-white text-sm transition">
                  {t.footer.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/data-factory`} className="text-gray-300 hover:text-white text-sm transition">
                  Data Factory
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/data-squad`} className="text-gray-300 hover:text-white text-sm transition">
                  Data Squad
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="text-gray-300 hover:text-white text-sm transition">
                  {t.footer.about}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 tracking-wider">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@autoscraping.com" className="text-gray-300 hover:text-white text-sm transition">
                  info@autoscraping.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+16314004766" className="text-gray-300 hover:text-white text-sm transition">
                  +1 (631) 400-4766
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">Urquiza 123, Santiago del Estero, Argentina</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">8 The Green STE A Dover, DE 19901, USA</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AUTOScraping. {t.footer.allRightsReserved}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <Link href={`/${lang}/privacy-policy`} className="text-gray-400 hover:text-white text-sm transition">{t.footer.privacyPolicy}</Link>
            <Link href={`/${lang}/terms-and-conditions`} className="text-gray-400 hover:text-white text-sm transition">{t.footer.termsOfService}</Link>
            <Link href={`/${lang}/disclaimer`} className="text-gray-400 hover:text-white text-sm transition">{t.footer.disclaimer}</Link>
            <Link href={`/${lang}/cookie-policy`} className="text-gray-400 hover:text-white text-sm transition">{t.footer.cookiePolicy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
