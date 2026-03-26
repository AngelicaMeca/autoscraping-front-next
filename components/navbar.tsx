'use client';

import { ChevronDown, BookText, Users, Calendar, RefreshCw, Database, Layers, Monitor, Zap, Beaker, UsersRound } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  variant?: 'adaptive' | 'dark-only';
}

export default function Navbar({ variant = 'dark-only' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnLightBg, setIsOnLightBg] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);

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
    if (isScrolled) {
      if (isLight) {
        return 'bg-white/80 backdrop-blur-lg border-gray-200/50 shadow-lg';
      }
      return 'bg-black/30 backdrop-blur-lg border-white/20 shadow-lg';
    }
    return 'bg-white/10 backdrop-blur-md border-white/20';
  };

  const textClass = isLight ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-white/80';
  const logoClass = isLight ? 'text-gray-900' : 'text-white';
  const logoAccentClass = isLight ? 'text-gray-600' : 'text-white/50';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 border transition-all duration-300 ${getContainerClass()}`}>
          <Link href="/" className="flex items-center">
            <span className={`text-xl font-bold transition-colors duration-300 ${logoClass}`}>
              AUTO<span className={`transition-colors duration-300 ${logoAccentClass}`}>SCRAPING</span>
            </span>
          </Link>

          <div className="flex items-center gap-8">
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
                    <h3 className="text-purple-600 text-xs font-bold uppercase tracking-wider mb-4">Featured Solutions</h3>

                    <div className="space-y-4">
                      <Link href="/data-factory" className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors cursor-pointer">
                        <div className="bg-purple-600 p-2.5 rounded-xl flex-shrink-0">
                          <Beaker className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm mb-1">Data Factory</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">Automated data delivery tailored to your business needs on a regular basis.</p>
                        </div>
                      </Link>

                      <Link href="/data-squad" className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors cursor-pointer">
                        <div className="bg-pink-600 p-2.5 rounded-xl flex-shrink-0">
                          <UsersRound className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm mb-1">Data Squad</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">Expert teams collaborating directly with you throughout the data lifecycle.</p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-purple-600 text-xs font-bold uppercase tracking-wider mb-4">All Services</h3>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                        <RefreshCw className="w-4 h-4 text-purple-600" />
                        <span className="font-medium">Data Extraction</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                        <Database className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">DaaS</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                        <Layers className="w-4 h-4 text-green-600" />
                        <span className="font-medium">Datadock</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                        <Monitor className="w-4 h-4 text-orange-600" />
                        <span className="font-medium">Botcraft</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                        <Zap className="w-4 h-4 text-pink-600" />
                        <span className="font-medium">Automation</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button className={`flex items-center gap-2 text-sm transition-colors duration-300 ${textClass}`}>
              <BookText className="w-4 h-4" />
              <span>Recursos</span>
            </button>
            <button className={`flex items-center gap-2 text-sm transition-colors duration-300 ${textClass}`}>
              <Users className="w-4 h-4" />
              <span>Company</span>
            </button>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition">
              <Calendar className="w-4 h-4" />
              <span>Book a Meeting</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
