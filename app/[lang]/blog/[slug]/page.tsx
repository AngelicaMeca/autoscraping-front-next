'use client';

import { notFound } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLang } from '@/hooks/useLang';

/**
 * Future blog post page.
 * Replace the static content with data from your CMS or MDX renderer.
 */
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const lang = useLang();

  // TODO: fetch post data from CMS / MDX file based on params.slug
  // const post = await getPost(params.slug, lang);
  // if (!post) notFound();

  // Temporary placeholder — remove when CMS is wired up
  notFound();

  // Template for when posts are ready:
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-28 pb-4 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Blog', href: `/${lang}/blog` },
              { label: params.slug },
            ]}
            className="text-gray-500"
          />
        </div>
      </div>

      {/* TODO: render post content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {/* post.title */}
        </h1>
        {/* <MDXContent source={post.content} /> */}
      </article>

      <Footer />
    </main>
  );
}
