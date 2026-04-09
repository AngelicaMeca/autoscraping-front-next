'use client';

import { ChevronDown, BookText, Users, Calendar, RefreshCw, Database, Layers, Monitor, Zap, Beaker, UsersRound, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  variant?: 'adaptive' | 'dark-only';
}

export default function Navbar({ variant = 'dark-only' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnLightBg, setIsOnLightBg] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      if (variant === 'adaptive') {
        const heroHeight = window.innerHeight;
        const lightSectionStart = heroHeight - 100;
        const darkSectionStart = lightSectionStart + 1000;

        if (scrollY < lightSectionStart) {
          setIsOnLightBg(false);
        } else if (scrollY < darkSectionStart) {
          setIsOnLightBg(true);
        } else {
          setIsOnLightBg(false);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [variant]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showSolutionsDropdown && !target.closest('.solutions-dropdown-container')) {
        setShowSolutionsDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showSolutionsDropdown]);

  const isLight = variant === 'adaptive' && isOnLightBg;

  const getContainerClass = () => {
    return 'bg-black/60 backdrop-blur-md border-white/20';
  };

  const textClass = 'text-white hover:text-white/80';
  const logoClass = 'text-white';
  const logoAccentClass = 'text-white/50';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 border transition-all duration-300 ${getContainerClass()}`}>
          <Link href="/" className="flex items-center gap-1">
            <Image 
              src="/logo.png" 
              alt="AutoScraping" 
              width={120} 
              height={60}
              className="h-12 w-auto"
              style={{ transform: 'scaleX(-1)', filter: 'brightness(1.2) contrast(1.1)' }}
            />
            <span className="text-xl font-bold text-white transition-colors duration-300">
              AUTOScraping
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative solutions-dropdown-container">
              <button
                onClick={() => setShowSolutionsDropdown(!showSolutionsDropdown)}
                className={`flex items-center gap-2 text-sm transition-colors duration-300 ${textClass}`}
              >
                <BookText className="w-4 h-4" />
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {showSolutionsDropdown && (
                <div className="absolute top-full left-0 mt-4 w-[350px] bg-white rounded-3xl shadow-2xl p-6 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="mb-6">
                    <h3 className="text-purple-600 text-xs font-bold uppercase tracking-wider mb-4">Soluciones Destacadas</h3>

                    <div className="space-y-4">
                      <Link href="/data-factory" className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors cursor-pointer">
                        <div className="bg-purple-600 p-2.5 rounded-xl flex-shrink-0">
                          <Beaker className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm mb-1">Data Factory</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">Entrega automatizada de datos adaptada a las necesidades de tu negocio de manera regular.</p>
                        </div>
                      </Link>

                      <Link href="/data-squad" className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors cursor-pointer">
                        <div className="bg-pink-600 p-2.5 rounded-xl flex-shrink-0">
                          <UsersRound className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm mb-1">Data Squad</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">Equipos expertos colaborando directamente contigo a lo largo del ciclo de vida del dato.</p>
                        </div>
                      </Link>
                    </div>
                  </div>

                </div>
              )}
            </div>

            <button className={`flex items-center gap-2 text-sm transition-colors duration-300 ${textClass}`}>
              <BookText className="w-4 h-4" />
              <span>Recursos</span>
            </button>
            <Link href="/about" className={`flex items-center gap-2 text-sm transition-colors duration-300 ${textClass}`}>
              <Users className="w-4 h-4" />
              <span>Company</span>
            </Link>
            <Link href="/book-a-meeting" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition">
              <Calendar className="w-4 h-4" />
              <span>Book a Meeting</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled || isLight ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${logoClass}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden overflow-y-auto pt-24 pb-12 px-6 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            <div className="space-y-4 mb-4">
              <h3 className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">Solutions</h3>
              <Link
                href="/data-factory"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 active:bg-white/10"
              >
                <div className="bg-purple-600 p-2.5 rounded-xl flex-shrink-0">
                  <Beaker className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Data Factory</h4>
                  <p className="text-xs text-gray-400">Entrega de datos automatizada</p>
                </div>
              </Link>
              <Link
                href="/data-squad"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 active:bg-white/10"
              >
                <div className="bg-pink-600 p-2.5 rounded-xl flex-shrink-0">
                  <UsersRound className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Data Squad</h4>
                  <p className="text-xs text-gray-400">Equipos técnicos expertos</p>
                </div>
              </Link>
            </div>

            <div className="h-px bg-white/10 my-2"></div>

            <button className="flex justify-between items-center w-full py-4 text-white text-lg font-medium border-b border-white/10">
              <span className="flex items-center gap-3"><BookText className="w-5 h-5 text-purple-400"/> Recursos</span>
            </button>
            
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex justify-between items-center w-full py-4 text-white text-lg font-medium border-b border-white/10"
            >
              <span className="flex items-center gap-3"><Users className="w-5 h-5 text-purple-400"/> Company</span>
            </Link>

            <Link onClick={() => setIsMobileMenuOpen(false)} href="/book-a-meeting" className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-lg py-4 rounded-2xl transition w-full mt-6 font-bold shadow-lg shadow-blue-600/20">
              <Calendar className="w-5 h-5" />
              <span>Book a Meeting</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
