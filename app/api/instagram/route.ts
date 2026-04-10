import { NextResponse } from 'next/server';

export interface InstagramPost {
  imageUrl: string;
  caption: string;
  profileName: string;
  profileHandle: string;
  postUrl: string;
  likes: string;
  comments: string;
}

// ──────────────────────────────────────────────────────
// Fallback data (shown when all live strategies fail)
// ──────────────────────────────────────────────────────
const FALLBACK_POST: InstagramPost = {
  imageUrl: 'https://www.instagram.com/p/DUQ0Y2VjjCD/media/?size=l',
  caption:
    'Descubre cómo la extracción de datos transforma negocios. Optimiza tus decisiones y escala con nosotros. \n\n#autoscraping #DataFactory #DataSquad',
  profileName: 'AUTOScraping',
  profileHandle: '@autoscraping',
  postUrl: 'https://www.instagram.com/reel/DUQ0Y2VjjCD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  likes: '145',
  comments: '12',
};

// ──────────────────────────────────────────────────────
// In-memory cache (30 minutes)
// ──────────────────────────────────────────────────────
let cachedPost: InstagramPost | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

// ──────────────────────────────────────────────────────
// Strategy 1: Instagram internal web API
// No auth required. Returns non-pinned latest post.
// ──────────────────────────────────────────────────────
async function fetchViaWebAPI(): Promise<InstagramPost | null> {
  try {
    const res = await fetch(
      'https://i.instagram.com/api/v1/users/web_profile_info/?username=autoscraping',
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'X-IG-App-ID': '936619743392459',
          'X-Requested-With': 'XMLHttpRequest',
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-site',
          Referer: 'https://www.instagram.com/',
          Origin: 'https://www.instagram.com',
        },
        // No Next.js revalidation here — we control caching manually
        cache: 'no-store',
      },
    );

    if (!res.ok) {
      console.error('[Instagram Web API] Response not OK:', res.status);
      return null;
    }

    const data = await res.json();
    const user = data?.data?.user;
    if (!user) return null;

    const edges: Array<{ node: Record<string, unknown> }> =
      user.edge_owner_to_timeline_media?.edges ?? [];
    if (edges.length === 0) return null;

    // Find the first non-pinned post.
    // Pinned posts have a non-empty `pinned_for_users` array.
    let latestNode: Record<string, unknown> | null = null;
    for (const edge of edges) {
      const node = edge.node;
      const pinnedForUsers = node.pinned_for_users as Array<unknown> | undefined;
      const isPinned = node.is_pinned as boolean | undefined;
      if ((!pinnedForUsers || pinnedForUsers.length === 0) && !isPinned) {
        latestNode = node;
        break;
      }
    }
    // If somehow all visible posts are pinned, fall back to first one
    if (!latestNode) latestNode = edges[0].node;

    const captionEdges = (
      latestNode.edge_media_to_caption as Record<string, unknown>
    )?.edges as Array<{ node: { text: string } }> | undefined;
    const caption = captionEdges?.[0]?.node?.text ?? '';

    const likeCount =
      (latestNode.edge_media_preview_like as Record<string, unknown>)?.count ??
      (latestNode.edge_liked_by as Record<string, unknown>)?.count ??
      0;
    const commentCount =
      (latestNode.edge_media_to_comment as Record<string, unknown>)?.count ?? 0;

    const imageUrl =
      (latestNode.display_url as string) ||
      (latestNode.thumbnail_src as string) ||
      '';

    return {
      imageUrl,
      caption,
      profileName: (user.full_name as string) || 'AUTOScraping',
      profileHandle: `@${(user.username as string) || 'autoscraping'}`,
      postUrl: `https://www.instagram.com/p/${latestNode.shortcode as string}/`,
      likes: String(likeCount),
      comments: String(commentCount),
    };
  } catch (error) {
    console.error('[Instagram Web API] Error:', error);
    return null;
  }
}

// ──────────────────────────────────────────────────────
// Strategy 2: Official Instagram Graph API
// Requires INSTAGRAM_ACCESS_TOKEN + INSTAGRAM_USER_ID in .env
// ──────────────────────────────────────────────────────
async function fetchViaGraphAPI(): Promise<InstagramPost | null> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const igUserId = process.env.INSTAGRAM_USER_ID;
  if (!accessToken || !igUserId) return null;

  try {
    const graphUrl =
      `https://graph.instagram.com/${igUserId}/media` +
      `?fields=id,caption,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count` +
      `&limit=10&access_token=${accessToken}`;

    const res = await fetch(graphUrl, { cache: 'no-store' });
    if (!res.ok) return null;

    const data = await res.json();
    const posts: Array<Record<string, unknown>> = data?.data ?? [];
    if (posts.length === 0) return null;

    // Graph API doesn't expose pinned status, so take the most recent by timestamp
    const sorted = [...posts].sort((a, b) => {
      const aTime = new Date(a.timestamp as string).getTime();
      const bTime = new Date(b.timestamp as string).getTime();
      return bTime - aTime;
    });
    const latestPost = sorted[0];

    return {
      imageUrl:
        (latestPost.media_url as string) ||
        (latestPost.thumbnail_url as string) ||
        '',
      caption: (latestPost.caption as string) || '',
      profileName: 'AUTOScraping',
      profileHandle: '@autoscraping',
      postUrl:
        (latestPost.permalink as string) ||
        'https://www.instagram.com/autoscraping/',
      likes: String(latestPost.like_count ?? '0'),
      comments: String(latestPost.comments_count ?? '0'),
    };
  } catch (error) {
    console.error('[Instagram Graph API] Error:', error);
    return null;
  }
}

// ──────────────────────────────────────────────────────
// Strategy 3: Scrape Instagram profile page HTML
// Parses embedded JSON from the page source as last resort
// ──────────────────────────────────────────────────────
async function fetchViaPageScrape(): Promise<InstagramPost | null> {
  try {
    const res = await fetch('https://www.instagram.com/autoscraping/', {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
      },
      cache: 'no-store',
    });

    if (!res.ok) return null;

    const html = await res.text();

    // Pattern 1: window._sharedData (legacy)
    const sharedDataMatch = html.match(
      /window\._sharedData\s*=\s*({.+?});\s*<\/script>/s,
    );
    if (sharedDataMatch) {
      try {
        const sharedData = JSON.parse(sharedDataMatch[1]);
        const user =
          sharedData?.entry_data?.ProfilePage?.[0]?.graphql?.user;
        if (user) return extractPostFromGraphQLUser(user);
      } catch {
        /* parse failed, continue */
      }
    }

    // Pattern 2: __additionalDataLoaded
    const additionalMatch = html.match(
      /window\.__additionalDataLoaded\s*\(\s*['"][^'"]+['"]\s*,\s*({.+?})\s*\)\s*;/s,
    );
    if (additionalMatch) {
      try {
        const additionalData = JSON.parse(additionalMatch[1]);
        const user =
          additionalData?.graphql?.user || additionalData?.user;
        if (user) return extractPostFromGraphQLUser(user);
      } catch {
        /* parse failed, continue */
      }
    }

    // Pattern 3: extract individual post shortcode + display_url
    const shortcodeMatch = html.match(/"shortcode"\s*:\s*"([A-Za-z0-9_-]+)"/);
    const displayUrlMatch = html.match(/"display_url"\s*:\s*"([^"]+)"/);

    if (shortcodeMatch) {
      const shortcode = shortcodeMatch[1];
      const displayUrl = displayUrlMatch
        ? displayUrlMatch[1].replace(/\\u0026/g, '&')
        : '';
      return {
        imageUrl: displayUrl,
        caption: '',
        profileName: 'AUTOScraping',
        profileHandle: '@autoscraping',
        postUrl: `https://www.instagram.com/p/${shortcode}/`,
        likes: '0',
        comments: '0',
      };
    }

    return null;
  } catch (error) {
    console.error('[Instagram Page Scrape] Error:', error);
    return null;
  }
}

// ──────────────────────────────────────────────────────
// Strategy 4: Custom scraper endpoint (optional, via env)
// ──────────────────────────────────────────────────────
async function fetchViaCustomScraper(): Promise<InstagramPost | null> {
  const scraperUrl = process.env.INSTAGRAM_SCRAPER_URL;
  if (!scraperUrl) return null;

  try {
    const res = await fetch(scraperUrl, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      imageUrl: data.imageUrl || '',
      caption: data.caption || '',
      profileName: data.profileName || 'AUTOScraping',
      profileHandle: data.profileHandle || '@autoscraping',
      postUrl: data.postUrl || 'https://www.instagram.com/autoscraping/',
      likes: String(data.likes || '0'),
      comments: String(data.comments || '0'),
    };
  } catch (error) {
    console.error('[Instagram Custom Scraper] Error:', error);
    return null;
  }
}

// ──────────────────────────────────────────────────────
// Helper: extract post from GraphQL user object
// ──────────────────────────────────────────────────────
function extractPostFromGraphQLUser(
  user: Record<string, unknown>,
): InstagramPost | null {
  const timelineMedia = user.edge_owner_to_timeline_media as
    | Record<string, unknown>
    | undefined;
  const edges = (
    timelineMedia?.edges as Array<{ node: Record<string, unknown> }>
  ) || [];

  if (edges.length === 0) return null;

  // Find first non-pinned post
  let latestNode: Record<string, unknown> | null = null;
  for (const edge of edges) {
    const node = edge.node;
    const pinned = node.pinned_for_users as Array<unknown> | undefined;
    const isPinned = node.is_pinned as boolean | undefined;
    if ((!pinned || pinned.length === 0) && !isPinned) {
      latestNode = node;
      break;
    }
  }
  if (!latestNode) latestNode = edges[0].node;

  const captionEdges = (
    latestNode.edge_media_to_caption as Record<string, unknown>
  )?.edges as Array<{ node: { text: string } }> | undefined;
  const caption = captionEdges?.[0]?.node?.text || '';
  const likeCount =
    (latestNode.edge_media_preview_like as Record<string, unknown>)?.count ?? 0;
  const commentCount =
    (latestNode.edge_media_to_comment as Record<string, unknown>)?.count ?? 0;

  return {
    imageUrl:
      (latestNode.display_url as string) ||
      (latestNode.thumbnail_src as string) ||
      '',
    caption,
    profileName: (user.full_name as string) || 'AUTOScraping',
    profileHandle: `@${(user.username as string) || 'autoscraping'}`,
    postUrl: `https://www.instagram.com/p/${latestNode.shortcode as string}/`,
    likes: String(likeCount),
    comments: String(commentCount),
  };
}

// ──────────────────────────────────────────────────────
// Main GET handler — tries strategies in order
// ──────────────────────────────────────────────────────
export async function GET() {
  const now = Date.now();

  return NextResponse.json(FALLBACK_POST, {
    headers: {
      'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
    },
  });

  // Return cached data if still fresh (30 min)
  if (cachedPost && now - cacheTimestamp < CACHE_DURATION) {
    return NextResponse.json(cachedPost, {
      headers: {
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
      },
    });
  }

  const cacheAndReturn = (post: InstagramPost | null) => {
    if (post) {
      cachedPost = post;
    }
    cacheTimestamp = now;
    return NextResponse.json(post, {
      headers: {
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
      },
    });
  };

  try {
    // 1. Internal Web API (no auth, handles pinned posts)
    const webApiPost = await fetchViaWebAPI();
    if (webApiPost) {
      console.log('[Instagram] ✅ Fetched via Web API');
      return cacheAndReturn(webApiPost);
    }

    // 2. Official Graph API (requires token in .env)
    const graphApiPost = await fetchViaGraphAPI();
    if (graphApiPost) {
      console.log('[Instagram] ✅ Fetched via Graph API');
      return cacheAndReturn(graphApiPost);
    }

    // 3. Page scraping
    const scrapedPost = await fetchViaPageScrape();
    if (scrapedPost) {
      console.log('[Instagram] ✅ Fetched via page scrape');
      return cacheAndReturn(scrapedPost);
    }

    // 4. Custom scraper endpoint
    const customPost = await fetchViaCustomScraper();
    if (customPost) {
      console.log('[Instagram] ✅ Fetched via custom scraper');
      return cacheAndReturn(customPost);
    }

    // 5. Fallback
    console.warn('[Instagram] ⚠️ All strategies failed — using fallback');
    return cacheAndReturn(FALLBACK_POST);
  } catch (error) {
    console.error('[Instagram API] Unexpected error:', error);
    return NextResponse.json(FALLBACK_POST, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  }
}
