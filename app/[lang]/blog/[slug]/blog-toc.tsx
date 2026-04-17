'use client';

import { useState, useEffect } from 'react';
import { List } from 'lucide-react';

interface Heading {
  text: string;
  level: number;
  id: string;
}

interface Props {
  headings: Heading[];
  lang: string;
}

export default function BlogToc({ headings, lang }: Props) {
  const isEn = lang === 'en';
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(true);

  // Track which heading is in view via IntersectionObserver
  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 96; // height of sticky navbar
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveId(id);
  };

  if (!headings.length) return null;

  return (
    <aside className="w-full">
      {/* Header */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center justify-between mb-4 group"
      >
        <div className="flex items-center gap-2">
          <List className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">
            {isEn ? 'Table of Contents' : 'Tabla de contenidos'}
          </span>
        </div>
        <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {isOpen && (
        <nav>
          <ul className="space-y-1">
            {headings.map(({ text, level, id }, index) => {
              const isActive = activeId === id;
              const indent = level === 1 ? '' : level === 2 ? 'pl-3' : 'pl-6';
              return (
                <li key={id}>
                  <button
                    onClick={() => handleClick(id)}
                    className={`w-full text-left flex items-start gap-2.5 py-1.5 px-2 rounded-lg text-[0.8rem] leading-snug transition-all duration-200 ${
                      isActive
                        ? 'text-purple-700 font-semibold bg-purple-50'
                        : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50 font-medium'
                    } ${indent}`}
                  >
                    {/* Number indicator */}
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center mt-0.5 transition-colors ${
                        isActive
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="leading-tight">{text}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* Progress indicator */}
      <div className="mt-5 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5">
          <span>{isEn ? 'Progress' : 'Progreso'}</span>
          <span>
            {activeId
              ? `${headings.findIndex((h) => h.id === activeId) + 1} / ${headings.length}`
              : `0 / ${headings.length}`}
          </span>
        </div>
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: activeId
                ? `${((headings.findIndex((h) => h.id === activeId) + 1) / headings.length) * 100}%`
                : '0%',
              background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
            }}
          />
        </div>
      </div>
    </aside>
  );
}
