import { NextResponse } from 'next/server';

/**
 * Image proxy for Instagram CDN images.
 * Instagram blocks cross-origin image loading with strict CORS headers.
 * This endpoint fetches the image server-side and serves it directly,
 * bypassing CORS restrictions.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return new NextResponse('Missing url parameter', { status: 400 });
  }

  // Only allow Instagram CDN URLs for security
  const allowedHosts = [
    'instagram.fcor2-1.fna.fbcdn.net',
    'instagram.fcor2-2.fna.fbcdn.net',
    'scontent.cdninstagram.com',
    'scontent-',
    'instagram.',
    'cdninstagram.com',
  ];

  try {
    const url = new URL(imageUrl);
    const isAllowed = allowedHosts.some(
      (host) => url.hostname.includes(host) || url.hostname.endsWith('.fbcdn.net') || url.hostname.endsWith('.cdninstagram.com')
    );

    if (!isAllowed) {
      return new NextResponse('URL not allowed', { status: 403 });
    }
  } catch {
    return new NextResponse('Invalid URL', { status: 400 });
  }

  try {
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Referer': 'https://www.instagram.com/',
      },
    });

    if (!response.ok) {
      return new NextResponse('Failed to fetch image', { status: response.status });
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('[Instagram Image Proxy] Error:', error);
    return new NextResponse('Error fetching image', { status: 500 });
  }
}
