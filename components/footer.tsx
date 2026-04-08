import { Linkedin, Instagram, Facebook, Github, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#111827] via-[#312E81] to-[#581C87] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              AUTO<span className="text-purple-400">SCRAPING</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Convertimos la web en tu ventaja competitiva.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/autoscraping"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/autoscraping"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/autoscraping"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/autoscraping"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/data-factory" className="text-gray-300 hover:text-white text-sm transition">
                  Data Factory
                </Link>
              </li>
              <li>
                <Link href="/data-squad" className="text-gray-300 hover:text-white text-sm transition">
                  Data Squad
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 tracking-wider">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@autoscraping.com" className="text-gray-300 hover:text-white text-sm transition">
                  hello@autoscraping.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+12341567890" className="text-gray-300 hover:text-white text-sm transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  Urquiza 123, Santiago del Estero, Argentina
                </p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  8 The Green STE A Dover, DE 19901, USA
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AUTOSCRAPING. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
