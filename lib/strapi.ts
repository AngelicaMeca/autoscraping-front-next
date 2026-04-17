/**
 * Strapi v5 integration helper
 * ─────────────────────────────
 * Env vars en .env.local:
 *   NEXT_PUBLIC_STRAPI_URL  = http://localhost:1337
 *   STRAPI_TOKEN            = <token de solo lectura>
 */

// ⚠️ NO leer env vars aquí como constantes de módulo — en Next.js 13.5 se
// evalúan en tiempo de compilación antes de que .env.local esté disponible.
// Se leen dentro de cada función para garantizar valores correctos en runtime.
const COLLECTION = 'posts';

function getConfig() {
  return {
    url: process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337',
    token: process.env.STRAPI_TOKEN ?? '',
  };
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
  size?: number;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
}

export interface StrapiCategory {
  id: number;
  documentId: string;
  name: string;    // "web scraping"
  slug: string;    // "web-scraping"
}

export interface StrapiAuthor {
  id: number;
  documentId: string;
  name: string;
  bio?: StrapiBlock[];
  photo?: StrapiImage | StrapiImage[] | null;
}

// ─── Rich-text blocks ─────────────────────────────────────────────────────────

export type StrapiBlockType =
  | 'paragraph'
  | 'heading'
  | 'list'
  | 'list-item'
  | 'quote'
  | 'code'
  | 'image'
  | 'link';

export interface StrapiTextNode {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

export interface StrapiLinkNode {
  type: 'link';
  url: string;
  children: StrapiTextNode[];
}

export type StrapiInlineNode = StrapiTextNode | StrapiLinkNode;

export interface StrapiBlock {
  type: StrapiBlockType;
  level?: number;
  format?: 'ordered' | 'unordered';
  image?: StrapiImage | StrapiImage[];
  children: (StrapiBlock | StrapiInlineNode)[];
}

export interface StrapiPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: StrapiBlock[];
  cover?: StrapiImage[];
  category?: StrapiCategory;
  author?: StrapiAuthor;
  publishedAt?: string;
  publishedat?: string;
  createdAt: string;
  updatedAt: string;
  locale?: string;
}

export interface StrapiCategoryFull extends StrapiCategory {
  posts?: StrapiPost[];
}

interface StrapiListResponse<T> {
  data: T[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}

// ─── Utility functions ────────────────────────────────────────────────────────

export function getStrapiImageUrl(
  cover: StrapiImage | StrapiImage[] | undefined | null,
  preferFormat?: keyof NonNullable<StrapiImage['formats']>,
): string {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337';
  const img = Array.isArray(cover) ? cover[0] : cover;
  if (!img) return '';
  if (preferFormat && img.formats?.[preferFormat]?.url) {
    const u = img.formats[preferFormat]!.url;
    return u.startsWith('http') ? u : `${strapiUrl}${u}`;
  }
  return img.url.startsWith('http') ? img.url : `${strapiUrl}${img.url}`;
}

export function getPublishedAt(post: StrapiPost): string | undefined {
  return post.publishedAt ?? post.publishedat ?? post.createdAt;
}

/** Extrae texto plano de un bloque de manera recursiva */
function blockToText(block: StrapiBlock | StrapiInlineNode): string {
  if ('text' in block) return (block as StrapiTextNode).text ?? '';
  if ('children' in block) {
    return ((block as StrapiBlock).children ?? []).map(blockToText).join('');
  }
  return '';
}

/** Calcula tiempo de lectura en minutos (200 wpm) */
export function calcReadingTime(blocks?: StrapiBlock[]): number {
  if (!blocks?.length) return 1;
  const words = blocks
    .map(blockToText)
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** Genera un id slugificado para un heading */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/** Extrae los headings del content para la tabla de contenidos */
export function extractHeadings(blocks?: StrapiBlock[]): { text: string; level: number; id: string }[] {
  if (!blocks?.length) return [];
  return blocks
    .filter((b) => b.type === 'heading' && (b.level === 1 || b.level === 2 || b.level === 3))
    .map((b) => {
      const text = (b.children as StrapiInlineNode[]).map(blockToText).join('');
      return { text, level: b.level ?? 2, id: slugifyHeading(text) };
    });
}

/** Extrae texto plano del primer párrafo como excerpt */
export function getExcerptFromBlocks(blocks?: StrapiBlock[], maxChars = 160): string {
  if (!blocks?.length) return '';
  for (const block of blocks) {
    if (block.type === 'paragraph') {
      const text = (block.children as StrapiTextNode[]).map((n) => n.text ?? '').join('');
      if (text.trim()) return text.length > maxChars ? text.slice(0, maxChars).trimEnd() + '…' : text;
    }
  }
  return '';
}

// ─── Core fetch ───────────────────────────────────────────────────────────────

async function strapiGet<T>(path: string, params: Record<string, string> = {}): Promise<T> {
  const { url: STRAPI_URL, token: STRAPI_TOKEN } = getConfig();

  const base = `${STRAPI_URL}/api/${path}`;
  const qs = Object.entries(params)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join('&');
  const fullUrl = qs ? `${base}?${qs}` : base;

  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (STRAPI_TOKEN) headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;

  const res = await fetch(fullUrl, {
    headers,
    cache: 'no-store',
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`[Strapi] ${res.status} ${res.statusText} — ${body.slice(0, 200)}`);
  }

  return res.json() as Promise<T>;
}

// ─── API pública ──────────────────────────────────────────────────────────────

export async function getCategories(): Promise<StrapiCategory[]> {
  try {
    const res = await strapiGet<StrapiListResponse<StrapiCategory>>('categories', {
      'fields[0]': 'name',
      'fields[1]': 'slug',
      'sort': 'name:asc',
      'pagination[pageSize]': '50',
    });
    return res.data ?? [];
  } catch (err) {
    console.error('[Strapi] getCategories failed:', err);
    return [];
  }
}

export async function getPosts(
  _locale?: string,       // reservado para cuando actives i18n en Strapi
  categorySlug?: string,
  page = 1,
): Promise<{ posts: StrapiPost[]; total: number; pageCount: number }> {
  const params: Record<string, string> = {
    'populate[cover][fields][0]': 'url',
    'populate[cover][fields][1]': 'alternativeText',
    'populate[cover][fields][2]': 'width',
    'populate[cover][fields][3]': 'height',
    'populate[cover][fields][4]': 'formats',
    'populate[category][fields][0]': 'name',
    'populate[category][fields][1]': 'slug',
    'populate[author][fields][0]': 'name',
    'sort': 'publishedAt:desc',
    'pagination[page]': String(page),
    'pagination[pageSize]': '12',
  };
  // NO pasamos locale: posts no tiene i18n activado en Strapi
  if (categorySlug && categorySlug !== 'all') params['filters[category][slug][$eq]'] = categorySlug;

  try {
    const res = await strapiGet<StrapiListResponse<StrapiPost>>(COLLECTION, params);
    return { posts: res.data ?? [], total: res.meta?.pagination?.total ?? 0, pageCount: res.meta?.pagination?.pageCount ?? 0 };
  } catch (err) {
    console.error('[Strapi] getPosts failed:', err);
    return { posts: [], total: 0, pageCount: 0 };
  }
}

export async function getPost(slug: string, _locale?: string): Promise<StrapiPost | null> {
  // _locale reservado para cuando actives i18n — no lo pasamos ahora
  const params: Record<string, string> = {
    'filters[slug][$eq]': slug,
    'populate[cover][fields][0]': 'url',
    'populate[cover][fields][1]': 'alternativeText',
    'populate[cover][fields][2]': 'width',
    'populate[cover][fields][3]': 'height',
    'populate[cover][fields][4]': 'formats',
    'populate[category][fields][0]': 'name',
    'populate[category][fields][1]': 'slug',
    'populate[author][fields][0]': 'name',
    'populate[author][fields][1]': 'bio',
  };

  try {
    const res = await strapiGet<StrapiListResponse<StrapiPost>>(COLLECTION, params);
    return res.data?.[0] ?? null;
  } catch (err) {
    console.error('[Strapi] getPost failed:', err);
    return null;
  }
}

export async function getRelatedPosts(categorySlug: string, excludeSlug: string, _locale?: string): Promise<StrapiPost[]> {
  const params: Record<string, string> = {
    'filters[category][slug][$eq]': categorySlug,
    'filters[slug][$ne]': excludeSlug,
    'populate[cover][fields][0]': 'url',
    'populate[cover][fields][1]': 'alternativeText',
    'populate[cover][fields][2]': 'width',
    'populate[cover][fields][3]': 'height',
    'populate[cover][fields][4]': 'formats',
    'populate[category][fields][0]': 'name',
    'populate[category][fields][1]': 'slug',
    'populate[author][fields][0]': 'name',
    'sort': 'publishedAt:desc',
    'pagination[pageSize]': '3',
  };

  try {
    const res = await strapiGet<StrapiListResponse<StrapiPost>>(COLLECTION, params);
    return res.data ?? [];
  } catch (err) {
    console.error('[Strapi] getRelatedPosts failed:', err);
    return [];
  }
}

export async function getAllPostSlugs(): Promise<{ slug: string; locale: string }[]> {
  const params: Record<string, string> = {
    'fields[0]': 'slug',
    'fields[1]': 'locale',
    'pagination[pageSize]': '100',
  };
  try {
    const res = await strapiGet<StrapiListResponse<StrapiPost>>(COLLECTION, params);
    return (res.data ?? []).map((p) => ({ slug: p.slug, locale: p.locale ?? 'es' }));
  } catch (err) {
    console.error('[Strapi] getAllPostSlugs failed:', err);
    return [];
  }
}
