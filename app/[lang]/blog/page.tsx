'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import BlogHero from './blog-hero';
import BlogFilters from './blog-filters';
import BlogEmpty from './blog-empty';
import BlogCta from './blog-cta';

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BlogHero />
      <BlogFilters />
      <BlogEmpty />
      <BlogCta />
      <Footer />
    </main>
  );
}
