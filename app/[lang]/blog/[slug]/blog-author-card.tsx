import Image from 'next/image';
import { getStrapiImageUrl, type StrapiAuthor } from '@/lib/strapi';

interface Props {
  author: StrapiAuthor;
  lang: string;
}

// LinkedIn SVG
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

function getBioText(bio?: { type: string; children: { type: string; text: string }[] }[]): string {
  if (!bio?.length) return '';
  return bio
    .filter((b) => b.type === 'paragraph')
    .map((b) => b.children.map((c) => c.text).join(''))
    .join(' ');
}

export default function BlogAuthorCard({ author, lang }: Props) {
  const isEn = lang === 'en';
  const photoUrl = author.photo
    ? getStrapiImageUrl(author.photo as Parameters<typeof getStrapiImageUrl>[0])
    : '';
  const bioText = getBioText(author.bio as Parameters<typeof getBioText>[0]);

  return (
    <div
      className="rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start"
      style={{
        background: 'linear-gradient(135deg, #0f1535 0%, #1a2060 50%, #0f1535 100%)',
        border: '1px solid rgba(99,102,241,0.2)',
      }}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        {photoUrl ? (
          <div className="w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-purple-500/30">
            <Image
              src={photoUrl}
              alt={author.name}
              width={96}
              height={96}
              className="object-cover w-full h-full object-top"
            />
          </div>
        ) : (
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center text-white font-bold text-3xl"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)' }}
          >
            {author.name[0].toUpperCase()}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 text-center sm:text-left">
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgba(167,139,250,0.8)' }}>
          {isEn ? 'Written by' : 'Escrito por'}
        </p>
        <h3 className="text-white font-extrabold text-xl mb-2">{author.name}</h3>
        {bioText && (
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {bioText}
          </p>
        )}

        {/* Actions */}
        {author.linkedin && (
          <div className="flex items-center gap-3 justify-center sm:justify-start flex-wrap">
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{ background: 'rgba(10,102,194,0.2)', border: '1px solid rgba(10,102,194,0.4)', color: '#60a5fa' }}
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
