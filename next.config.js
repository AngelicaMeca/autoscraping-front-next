/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: ['camera=()', 'microphone=()', 'geolocation=()', 'interest-cohort=()', 'payment=()', 'usb=()'].join(', '),
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://calendly.com https://assets.calendly.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https: http://localhost:1337",
      "connect-src 'self' https://app.asana.com https://calendly.com http://localhost:1337",
      "frame-src https://calendly.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join('; '),
  },
];

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Enable Next.js image optimization (supported by @netlify/plugin-nextjs)
    // Removed `unoptimized: true` so next/image can serve WebP/AVIF automatically.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        // LinkedIn CDN for post images
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/**',
      },
      {
        // Strapi local uploads (development)
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        // Strapi production uploads — update hostname when deploying
        protocol: 'https',
        hostname: 'strapi.autoscraping.com', // ← change to your production Strapi domain
        pathname: '/uploads/**',
      },
    ],
    // Reasonable cache TTL for CDN images
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
