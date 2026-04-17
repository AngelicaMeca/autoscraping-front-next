'use client';

import Image from 'next/image';
import type { StrapiBlock, StrapiInlineNode, StrapiTextNode, StrapiLinkNode, StrapiImage } from '@/lib/strapi';
import { getStrapiImageUrl, slugifyHeading } from '@/lib/strapi';

// ─── Inline nodes ─────────────────────────────────────────────────────────────

function RenderText({ node }: { node: StrapiTextNode }) {
  let el: React.ReactNode = node.text;
  if (node.code)          el = <code className="bg-gray-100 text-purple-700 rounded px-1.5 py-0.5 text-[0.85em] font-mono">{el}</code>;
  if (node.bold)          el = <strong className="font-bold">{el}</strong>;
  if (node.italic)        el = <em>{el}</em>;
  if (node.underline)     el = <u>{el}</u>;
  if (node.strikethrough) el = <s>{el}</s>;
  return <>{el}</>;
}

function RenderLink({ node }: { node: StrapiLinkNode }) {
  return (
    <a
      href={node.url}
      target={node.url.startsWith('http') ? '_blank' : undefined}
      rel={node.url.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-purple-600 underline underline-offset-2 hover:text-purple-800 transition-colors"
    >
      {node.children.map((c, i) => <RenderText key={i} node={c as StrapiTextNode} />)}
    </a>
  );
}

function RenderInline({ node }: { node: StrapiInlineNode }) {
  if (node.type === 'link') return <RenderLink node={node as StrapiLinkNode} />;
  return <RenderText node={node as StrapiTextNode} />;
}

// ─── Blocks ───────────────────────────────────────────────────────────────────

function RenderBlock({ block }: { block: StrapiBlock }) {
  const inlines = block.children as StrapiInlineNode[];

  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-gray-700 leading-relaxed mb-5 text-[1.05rem]">
          {inlines.map((c, i) => <RenderInline key={i} node={c} />)}
        </p>
      );

    case 'heading': {
      const level = block.level ?? 2;
      const rawText = (block.children as StrapiInlineNode[]).map((c) => ('text' in c ? c.text : '')).join('');
      const id = slugifyHeading(rawText);
      const sizeMap: Record<number, string> = {
        1: 'text-2xl md:text-3xl mt-12 mb-5',
        2: 'text-xl md:text-2xl mt-10 mb-4',
        3: 'text-lg md:text-xl mt-8 mb-3',
        4: 'text-base md:text-lg mt-6 mb-2',
        5: 'text-base mt-4 mb-2',
        6: 'text-sm mt-4 mb-2',
      };
      const className = `font-bold text-gray-900 leading-tight scroll-mt-28 ${sizeMap[level] ?? sizeMap[2]}`;
      const content = inlines.map((c, i) => <RenderInline key={i} node={c} />);
      if (level === 1) return <h1 id={id} className={className}>{content}</h1>;
      if (level === 2) return <h2 id={id} className={className}>{content}</h2>;
      if (level === 3) return <h3 id={id} className={className}>{content}</h3>;
      if (level === 4) return <h4 id={id} className={className}>{content}</h4>;
      if (level === 5) return <h5 id={id} className={className}>{content}</h5>;
      return <h6 id={id} className={className}>{content}</h6>;
    }

    case 'list': {
      const Tag = block.format === 'ordered' ? 'ol' : 'ul';
      const listClass =
        block.format === 'ordered'
          ? 'list-decimal list-outside ml-6 mb-5 space-y-2 text-gray-700 text-[1.05rem]'
          : 'list-disc list-outside ml-6 mb-5 space-y-2 text-gray-700 text-[1.05rem]';
      return (
        <Tag className={listClass}>
          {(block.children as StrapiBlock[]).map((item, i) => (
            <li key={i} className="leading-relaxed">
              {(item.children as StrapiInlineNode[]).map((c, j) => <RenderInline key={j} node={c} />)}
            </li>
          ))}
        </Tag>
      );
    }

    case 'quote':
      return (
        <blockquote className="border-l-4 border-purple-400 pl-6 py-2 my-6 bg-purple-50 rounded-r-xl">
          <p className="text-gray-700 italic leading-relaxed text-[1.05rem]">
            {inlines.map((c, i) => <RenderInline key={i} node={c} />)}
          </p>
        </blockquote>
      );

    case 'code':
      return (
        <pre className="bg-gray-900 rounded-xl p-5 mb-6 overflow-x-auto">
          <code className="text-green-300 font-mono text-sm leading-relaxed whitespace-pre">
            {inlines.map((c, i) => <span key={i}>{(c as StrapiTextNode).text}</span>)}
          </code>
        </pre>
      );

    case 'image': {
      const imgRaw = block.image;
      const imgData: StrapiImage | null = Array.isArray(imgRaw)
        ? ((imgRaw as unknown as StrapiImage[])[0] ?? null)
        : (imgRaw ?? null);
      if (!imgData) return null;
      const src = getStrapiImageUrl(imgData);
      const alt = imgData.alternativeText ?? '';
      const w = imgData.width ?? 800;
      const h = imgData.height ?? 450;
      return (
        <figure className="my-8">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: `${w}/${h}` }}>
            <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" />
          </div>
          {alt && <figcaption className="text-center text-sm text-gray-400 mt-2 italic">{alt}</figcaption>}
        </figure>
      );
    }

    default:
      return null;
  }
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function BlogPostContent({ blocks }: { blocks: StrapiBlock[] }) {
  if (!blocks?.length) return null;
  return (
    <div className="prose-none max-w-none">
      {blocks.map((block, i) => <RenderBlock key={i} block={block} />)}
    </div>
  );
}
