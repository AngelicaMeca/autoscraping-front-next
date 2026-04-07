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

// Fallback data from a real Instagram post (used when all live strategies fail)
const FALLBACK_POST: InstagramPost = {
  imageUrl: '',
  caption: 'El lunes por la mañana define quién gana la semana. 🏁 Si tu proceso de extracción de datos es manual, ya perdiste la mañana. Con AUTOscraping, la escala de 100 a 1 millón de datos sucede mientras duermes.',
  profileName: 'AutoScraping',
  profileHandle: '@autoscraping',
  postUrl: 'https://www.instagram.com/autoscraping/',
  likes: '24',
  comments: '3',
};

// In-memory cache
let cachedPost: InstagramPost | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 3600 * 1000; // 1 hour

// ──────────────────────────────────────────────────────
// Strategy 1: Instagram Graph API (official, most reliable)
// Requires INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_USER_ID
// ──────────────────────────────────────────────────────
async function fetchViaGraphAPI(): Promise<InstagramPost | null> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const igUserId = process.env.INSTAGRAM_USER_ID;

  if (!accessToken || !igUserId) return null;

  try {
    const graphUrl = `https://graph.instagram.com/${igUserId}/media?fields=id,caption,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&limit=5&access_token=${accessToken}`;
    const res = await fetch(graphUrl, { next: { revalidate: 3600 } });

    if (!res.ok) return null;

    const data = await res.json();
    const posts = data?.data;
    if (!posts || posts.length === 0) return null;

    // The Graph API returns posts in reverse chronological order.
    // Pinned posts are not specially marked via Graph API - they
    // appear first. We take the first post as "latest".
    const latestPost = posts[0];

    return {
      imageUrl: latestPost.media_url || latestPost.thumbnail_url || '',
      caption: latestPost.caption || '',
      profileName: 'AutoScraping',
      profileHandle: '@autoscraping',
      postUrl: latestPost.permalink || 'https://www.instagram.com/autoscraping/',
      likes: String(latestPost.like_count ?? '0'),
      comments: String(latestPost.comments_count ?? '0'),
    };
  } catch (error) {
    console.error('[Instagram Graph API] Error:', error);
    return null;
  }
}

// ──────────────────────────────────────────────────────
// Strategy 2: Instagram internal web API
// Uses the public web app ID to query the profile info
// No authentication required, but rate-limited
// ──────────────────────────────────────────────────────
async function fetchViaWebAPI(): Promise<InstagramPost | null> {
  try {
    const res = await fetch(
      'https://i.instagram.com/api/v1/users/web_profile_info/?username=autoscraping',
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'X-IG-App-ID': '936619743392459',
          'X-Requested-With': 'XMLHttpRequest',
          'Accept': '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-site',
          'Referer': 'https://www.instagram.com/',
          'Origin': 'https://www.instagram.com',
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.error('[Instagram Web API] Response not OK:', res.status);
      return null;
    }

    const data = await res.json();
    const user = data?.data?.user;
    if (!user) return null;

    const edges = user.edge_owner_to_timeline_media?.edges;
    if (!edges || edges.length === 0) return null;

    // Find the first non-pinned post
    // Pinned posts have `pinned_for_users` array populated
    let latestNode = null;
    for (const edge of edges) {
      const node = edge.node;
      const isPinned = node.pinned_for_users && node.pinned_for_users.length > 0;
      if (!isPinned) {
        latestNode = node;
        break;
      }
    }

    // If all posts are pinned, just take the first one
    if (!latestNode) {
      latestNode = edges[0].node;
    }

    const caption = latestNode.edge_media_to_caption?.edges?.[0]?.node?.text || '';
    const likeCount = latestNode.edge_media_preview_like?.count ?? latestNode.edge_liked_by?.count ?? 0;
    const commentCount = latestNode.edge_media_to_comment?.count ?? 0;

    return {
      imageUrl: latestNode.display_url || latestNode.thumbnail_src || '',
      caption,
      profileName: user.full_name || 'AutoScraping',
      profileHandle: `@${user.username || 'autoscraping'}`,
      postUrl: `https://www.instagram.com/p/${latestNode.shortcode}/`,
      likes: String(likeCount),
      comments: String(commentCount),
    };
  } catch (error) {
    console.error('[Instagram Web API] Error:', error);
    return null;
  }
}

// ──────────────────────────────────────────────────────
// Strategy 3: Scrape Instagram profile page HTML
// Parses embedded JSON data from the page source
// ──────────────────────────────────────────────────────
async function fetchViaPageScrape(): Promise<InstagramPost | null> {
  try {
    const res = await fetch('https://www.instagram.com/autoscraping/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Cache-Control': 'no-cache',
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const html = await res.text();

    // Try to find and parse embedded JSON data
    // Instagram embeds post data in various script tag patterns

    // Pattern 1: window._sharedData (legacy but sometimes still present)
    const sharedDataMatch = html.match(/window\._sharedData\s*=\s*({.+?});\s*<\/script>/s);
    if (sharedDataMatch) {
      try {
        const sharedData = JSON.parse(sharedDataMatch[1]);
        const user = sharedData?.entry_data?.ProfilePage?.[0]?.graphql?.user;
        if (user) {
          return extractPostFromGraphQLUser(user);
        }
      } catch { /* parse failed, continue */ }
    }

    // Pattern 2: __additionalDataLoaded
    const additionalMatch = html.match(/window\.__additionalDataLoaded\s*\(\s*['"][^'"]+['"]\s*,\s*({.+?})\s*\)\s*;/s);
    if (additionalMatch) {
      try {
        const additionalData = JSON.parse(additionalMatch[1]);
        const user = additionalData?.graphql?.user || additionalData?.user;
        if (user) {
          return extractPostFromGraphQLUser(user);
        }
      } catch { /* parse failed, continue */ }
    }

    // Pattern 3: Look for require("ScheduledServerJS").handle patterns with media data
    const requireMatch = html.match(/"edge_owner_to_timeline_media"\s*:\s*(\{[^}]+(?:\{[^}]*\}[^}]*)*\})/s);
    if (requireMatch) {
      try {
        // Try to extract individual post data from the match
        const shortcodeMatches = [...html.matchAll(/"shortcode"\s*:\s*"([A-Za-z0-9_-]+)"/g)];
        const displayUrlMatches = [...html.matchAll(/"display_url"\s*:\s*"([^"]+)"/g)];
        
        if (shortcodeMatches.length > 0) {
          const shortcode = shortcodeMatches[0][1];
          const displayUrl = displayUrlMatches.length > 0 
            ? displayUrlMatches[0][1].replace(/\\u0026/g, '&') 
            : '';
          
          return {
            imageUrl: displayUrl,
            caption: '',
            profileName: 'AutoScraping',
            profileHandle: '@autoscraping',
            postUrl: `https://www.instagram.com/p/${shortcode}/`,
            likes: '0',
            comments: '0',
          };
        }
      } catch { /* parse failed, continue */ }
    }

    return null;
  } catch (error) {
    console.error('[Instagram Page Scrape] Error:', error);
    return null;
  }
}

function extractPostFromGraphQLUser(user: Record<string, unknown>): InstagramPost | null {
  const timelineMedia = user.edge_owner_to_timeline_media as Record<string, unknown> | undefined;
  const edges = (timelineMedia?.edges as Array<{ node: Record<string, unknown> }>) || [];
  
  if (edges.length === 0) return null;

  // Find first non-pinned post
  let latestNode: Record<string, unknown> | null = null;
  for (const edge of edges) {
    const node = edge.node;
    const pinnedForUsers = node.pinned_for_users as Array<unknown> | undefined;
    const isPinned = pinnedForUsers && pinnedForUsers.length > 0;
    if (!isPinned) {
      latestNode = node;
      break;
    }
  }

  if (!latestNode) {
    latestNode = edges[0].node;
  }

  const captionEdges = (latestNode.edge_media_to_caption as Record<string, unknown>)?.edges as Array<{ node: { text: string } }> | undefined;
  const caption = captionEdges?.[0]?.node?.text || '';
  const likeCount = (latestNode.edge_media_preview_like as Record<string, unknown>)?.count ?? 0;
  const commentCount = (latestNode.edge_media_to_comment as Record<string, unknown>)?.count ?? 0;

  return {
    imageUrl: (latestNode.display_url as string) || (latestNode.thumbnail_src as string) || '',
    caption,
    profileName: (user.full_name as string) || 'AutoScraping',
    profileHandle: `@${(user.username as string) || 'autoscraping'}`,
    postUrl: `https://www.instagram.com/p/${latestNode.shortcode}/`,
    likes: String(likeCount),
    comments: String(commentCount),
  };
}

// ──────────────────────────────────────────────────────
// Strategy 4: Custom scraping endpoint
// ──────────────────────────────────────────────────────
async function fetchViaCustomScraper(): Promise<InstagramPost | null> {
  const scraperUrl = process.env.INSTAGRAM_SCRAPER_URL;
  if (!scraperUrl) return null;

  try {
    const res = await fetch(scraperUrl, { next: { revalidate: 3600 } });
    if (!res.ok) return null;

    const data = await res.json();
    return {
      imageUrl: data.imageUrl || '',
      caption: data.caption || '',
      profileName: data.profileName || 'AutoScraping',
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
// Main handler - tries all strategies in order
// ──────────────────────────────────────────────────────
export async function GET() {
  const now = Date.now();

  // Return cached data if still fresh
  if (cachedPost && now - cacheTimestamp < CACHE_DURATION) {
    return NextResponse.json(cachedPost, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' },
    });
  }

  try {
    // Try each strategy in order of reliability
    let post: InstagramPost | null = null;

    // 1. Official Graph API (most reliable when configured)
    post = await fetchViaGraphAPI();
    if (post) {
      console.log('[Instagram] ✅ Fetched via Graph API');
      cachedPost = post;
      cacheTimestamp = now;
      return NextResponse.json(post, {
        headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' },
      });
    }

    // 2. Internal web API (no auth needed, may be rate-limited)
    post = await fetchViaWebAPI();
    if (post) {
      console.log('[Instagram] ✅ Fetched via Web API');
      cachedPost = post;
      cacheTimestamp = now;
      return NextResponse.json(post, {
        headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' },
      });
    }

    // 3. Page scraping (parses HTML for embedded data)
    post = await fetchViaPageScrape();
    if (post) {
      console.log('[Instagram] ✅ Fetched via page scrape');
      cachedPost = post;
      cacheTimestamp = now;
      return NextResponse.json(post, {
        headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' },
      });
    }

    // 4. Custom scraper endpoint
    post = await fetchViaCustomScraper();
    if (post) {
      console.log('[Instagram] ✅ Fetched via custom scraper');
      cachedPost = post;
      cacheTimestamp = now;
      return NextResponse.json(post, {
        headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' },
      });
    }

    // 5. Fallback to hardcoded data
    console.warn('[Instagram] ⚠️ All strategies failed, using fallback data');
    cachedPost = FALLBACK_POST;
    cacheTimestamp = now;

    return NextResponse.json(FALLBACK_POST, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' },
    });
  } catch (error) {
    console.error('[Instagram API] Unexpected error:', error);

    return NextResponse.json(FALLBACK_POST, {
      headers: { 'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600' },
    });
  }
}
