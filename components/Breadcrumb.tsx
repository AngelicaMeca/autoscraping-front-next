'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useLang } from '@/hooks/useLang';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Visible breadcrumb navigation.
 * Mirrors the JSON-LD BreadcrumbList injected by route layouts.
 *
 * Usage (in a page component):
 * <Breadcrumb items={[{ label: 'Data Factory', href: '/data-factory' }, { label: 'AI Web Scraping' }]} />
 */
export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const lang = useLang();

  const homeLabel = lang === 'en' ? 'Home' : 'Inicio';

  const allItems: BreadcrumbItem[] = [
    { label: homeLabel, href: `/${lang}` },
    ...items,
  ];

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-sm ${className}`}>
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1;
        return (
          <span key={index} className="flex items-center gap-1.5">
            {index === 0 && <Home className="w-3.5 h-3.5 flex-shrink-0" />}

            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-purple-600 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={isLast ? 'font-medium truncate max-w-[200px]' : ''}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}

            {!isLast && <ChevronRight className="w-3.5 h-3.5 text-current opacity-40 flex-shrink-0" />}
          </span>
        );
      })}
    </nav>
  );
}
