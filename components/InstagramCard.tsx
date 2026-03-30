'use client';

import { useState, useEffect } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import type { InstagramPost } from '@/app/api/instagram/route';

// Fallback data in case the API call fails entirely on the client side
const CLIENT_FALLBACK: InstagramPost = {
  imageUrl: '',
  caption: 'El lunes por la mañana define quién gana la semana. 🏁 Si tu proceso de extracción de datos es manual, ya perdiste la mañana. Con AUTOscraping, la escala de 100 a 1 millón de datos sucede mientras duermes.',
  profileName: 'AutoScraping',
  profileHandle: '@autoscraping',
  postUrl: 'https://www.instagram.com/autoscraping/',
  likes: '24',
  comments: '3',
};

export default function InstagramCard() {
  const [post, setPost] = useState<InstagramPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch('/api/instagram');
        if (res.ok) {
          const data: InstagramPost = await res.json();
          setPost(data);
        } else {
          setPost(CLIENT_FALLBACK);
        }
      } catch {
        setPost(CLIENT_FALLBACK);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  const displayPost = post || CLIENT_FALLBACK;

  // Proxy Instagram CDN images through our own API to bypass CORS
  const proxiedImageUrl = displayPost.imageUrl
    ? `/api/instagram/image?url=${encodeURIComponent(displayPost.imageUrl)}`
    : '';
  const hasImage = !!proxiedImageUrl && !imgError;

  // Truncate caption for display
  const truncatedCaption = displayPost.caption.length > 180
    ? displayPost.caption.substring(0, 180) + '...'
    : displayPost.caption;

  // Extract hashtags from caption
  const hashtags = displayPost.caption.match(/#\w+/g) || [];
  const captionWithoutHashtags = displayPost.caption.replace(/#\w+/g, '').trim();
  const truncatedCleanCaption = captionWithoutHashtags.length > 160
    ? captionWithoutHashtags.substring(0, 160) + '...'
    : captionWithoutHashtags;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
      {/* Image area */}
      <div className="relative h-48 overflow-hidden">
        {loading ? (
          /* Skeleton loader */
          <div className="w-full h-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] animate-pulse flex items-center justify-center">
            <Instagram className="w-16 h-16 text-white/50 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        ) : hasImage ? (
          <>
            <img
              src={proxiedImageUrl}
              alt={`Último post de Instagram de ${displayPost.profileName}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              onError={() => setImgError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </>
        ) : (
          /* Gradient fallback when no image available */
          <div className="w-full h-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center">
            <Instagram className="w-20 h-20 text-white/90" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {loading ? (
          /* Content skeleton */
          <div className="animate-pulse space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div className="h-4 bg-gray-200 rounded w-24" />
            </div>
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />
            <div className="h-3 bg-gray-200 rounded w-4/6" />
          </div>
        ) : (
          <>
            {/* Profile info */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                AS
              </div>
              <div>
                <p className="font-bold text-gray-900">{displayPost.profileName}</p>
                <p className="text-gray-500 text-xs">{displayPost.profileHandle}</p>
              </div>
            </div>

            {/* Caption */}
            <p className="text-gray-700 text-sm mb-2 leading-relaxed flex-1">
              {truncatedCleanCaption}
            </p>

            {/* Hashtags */}
            {hashtags.length > 0 && (
              <p className="text-purple-600 text-xs mb-4 font-medium">
                {hashtags.slice(0, 4).join(' ')}
              </p>
            )}

            {/* Engagement & Link */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <span className="text-gray-700 font-medium">{displayPost.likes}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-gray-700 font-medium">{displayPost.comments}</span>
                </div>
              </div>
              <a
                href={displayPost.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 transition"
                aria-label="Ver en Instagram"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
