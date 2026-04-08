'use client';

import { useState, useEffect, useCallback } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, RefreshCw } from 'lucide-react';
import type { InstagramPost } from '@/app/api/instagram/route';

const POLL_INTERVAL = 30 * 60 * 1000; // 30 minutes

// Client-side fallback shown only when the API call fails completely
const CLIENT_FALLBACK: InstagramPost = {
  imageUrl: 'https://www.instagram.com/p/DUQ0Y2VjjCD/media/?size=l',
  caption:
    'Descubre cómo la extracción de datos transforma negocios. Optimiza tus decisiones y escala con nosotros. \n\n#autoscraping #DataFactory #DataSquad',
  profileName: 'AutoScraping',
  profileHandle: '@autoscraping',
  postUrl: 'https://www.instagram.com/reel/DUQ0Y2VjjCD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  likes: '145',
  comments: '12',
};

function proxiedUrl(url: string) {
  if (!url) return '';
  return `/api/instagram/image?url=${encodeURIComponent(url)}`;
}

export default function InstagramCard() {
  const [post, setPost] = useState<InstagramPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPost = useCallback(async (isManual = false) => {
    if (isManual) setRefreshing(true);
    try {
      // Bust the cache on manual refresh with a timestamp param
      const url = isManual
        ? `/api/instagram?t=${Date.now()}`
        : '/api/instagram';
      const res = await fetch(url);
      if (res.ok) {
        const data: InstagramPost = await res.json();
        setPost(data);
        setImgError(false); // reset image error on new data
      } else {
        setPost(CLIENT_FALLBACK);
      }
    } catch {
      setPost(CLIENT_FALLBACK);
    } finally {
      setLoading(false);
      if (isManual) setRefreshing(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  // Poll every 30 minutes for fresh content
  useEffect(() => {
    const timer = setInterval(() => fetchPost(), POLL_INTERVAL);
    return () => clearInterval(timer);
  }, [fetchPost]);

  const displayPost = post ?? CLIENT_FALLBACK;

  // Proxy the CDN URL through our server-side proxy to avoid CORS
  const hasImage = !!displayPost.imageUrl && !imgError;
  const imageProxyUrl = proxiedUrl(displayPost.imageUrl);

  // Separate caption text from hashtags
  const rawCaption = displayPost.caption ?? '';
  const hashtags = rawCaption.match(/#\w[\w\u00C0-\u017F]*/g) ?? [];
  const captionText = rawCaption.replace(/#\w[\w\u00C0-\u017F]*/g, '').trim();
  const truncatedCaption =
    captionText.length > 160 ? captionText.slice(0, 160) + '…' : captionText;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
      {/* ── Image area ── */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        {loading ? (
          /* Skeleton */
          <div className="w-full h-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] animate-pulse flex items-center justify-center">
            <Instagram className="w-14 h-14 text-white/40 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        ) : hasImage ? (
          <>
            <img
              src={imageProxyUrl}
              alt={`Último post de Instagram de ${displayPost.profileName}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              onError={() => setImgError(true)}
            />
            {/* Subtle gradient overlay at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            {/* Instagram badge top-right */}
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow">
              <Instagram className="w-4 h-4 text-[#E1306C]" />
            </div>
          </>
        ) : (
          /* Gradient fallback when image unavailable */
          <div className="w-full h-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex flex-col items-center justify-center gap-2">
            <Instagram className="w-16 h-16 text-white/90" />
            <p className="text-white/70 text-xs font-medium">@autoscraping</p>
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {loading ? (
          /* Skeleton loader */
          <div className="animate-pulse space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div className="h-4 bg-gray-200 rounded w-28" />
            </div>
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />
            <div className="h-3 bg-gray-200 rounded w-4/6" />
          </div>
        ) : (
          <>
            {/* Profile row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm">
                  AS
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-tight">
                    {displayPost.profileName}
                  </p>
                  <p className="text-gray-500 text-xs">{displayPost.profileHandle}</p>
                </div>
              </div>

              {/* Manual refresh button */}
              <button
                onClick={() => fetchPost(true)}
                disabled={refreshing}
                title="Actualizar"
                className="text-gray-400 hover:text-purple-600 transition disabled:opacity-40"
              >
                <RefreshCw
                  className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`}
                />
              </button>
            </div>

            {/* Caption */}
            {truncatedCaption && (
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                {truncatedCaption}
              </p>
            )}

            {/* Hashtags */}
            {hashtags.length > 0 && (
              <p className="text-purple-600 text-xs font-medium leading-relaxed">
                {hashtags.slice(0, 5).join(' ')}
              </p>
            )}

            {/* Engagement & link */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <span className="text-gray-700 font-semibold text-sm">
                    {displayPost.likes}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700 font-semibold text-sm">
                    {displayPost.comments}
                  </span>
                </div>
              </div>

              <a
                href={displayPost.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-purple-600 hover:text-purple-700 transition bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-full"
                aria-label="Ver en Instagram"
              >
                Ver en Instagram
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
