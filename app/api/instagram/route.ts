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

// Fallback data from the latest real Instagram post (extracted manually)
// This serves as default content when live fetching fails
const FALLBACK_POST: InstagramPost = {
  imageUrl: 'https://instagram.fcor2-1.fna.fbcdn.net/v/t51.71878-15/658406018_1995781737736087_7099935043248373479_n.jpg?stp=dst-jpg_e15_tt6&_nc_ht=instagram.fcor2-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2gGiaz5u26idMRP5w9NUN8S6Cs-owMGic78APXpy94Y78587zr8LNYov0Quij7rySH8&_nc_ohc=_vmn_tSWRDgQ7kNvwETwRBq&_nc_gid=wE3QC10FxLMVTWTwEFr4kg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Afw3JL2jeennqbs3ofITpOYBuakQBN-M1M_tqRULVh_wHg&oe=69D04FD4&_nc_sid=8b3546',
  caption: 'El lunes por la mañana define quién gana la semana. 🏁 Si tu proceso de extracción de datos es manual, ya perdiste la mañana. Con AUTOscraping, la escala de 100 a 1 millón de datos sucede mientras duermes. Eficiencia, escalabilidad y, sobre todo, la tranquilidad de que tu infraestructura no se rompe cuando más la necesitas. Automatiza hoy. Domina el lunes. 💻🔥',
  profileName: 'AutoScraping',
  profileHandle: '@autoscraping',
  postUrl: 'https://www.instagram.com/autoscraping/',
  likes: '24',
  comments: '3',
};

// Cache the result in memory for the serverless function lifetime
let cachedPost: InstagramPost | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 3600 * 1000; // 1 hour in ms

export async function GET() {
  const now = Date.now();

  // Return cached data if still fresh
  if (cachedPost && now - cacheTimestamp < CACHE_DURATION) {
    return NextResponse.json(cachedPost, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' },
    });
  }

  try {
    // ──────────────────────────────────────────────────────
    // Strategy 1: Instagram Graph API (if token is configured)
    // To enable: set INSTAGRAM_ACCESS_TOKEN in .env
    // Get token from https://developers.facebook.com/
    // ──────────────────────────────────────────────────────
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const igUserId = process.env.INSTAGRAM_USER_ID;

    if (accessToken && igUserId) {
      const graphUrl = `https://graph.instagram.com/${igUserId}/media?fields=id,caption,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&limit=1&access_token=${accessToken}`;
      const graphRes = await fetch(graphUrl, { next: { revalidate: 3600 } });

      if (graphRes.ok) {
        const graphData = await graphRes.json();
        const latestPost = graphData?.data?.[0];

        if (latestPost) {
          const post: InstagramPost = {
            imageUrl: latestPost.media_url || latestPost.thumbnail_url || FALLBACK_POST.imageUrl,
            caption: latestPost.caption || '',
            profileName: 'AutoScraping',
            profileHandle: '@autoscraping',
            postUrl: latestPost.permalink || 'https://www.instagram.com/autoscraping/',
            likes: String(latestPost.like_count || '0'),
            comments: String(latestPost.comments_count || '0'),
          };

          cachedPost = post;
          cacheTimestamp = now;

          return NextResponse.json(post, {
            headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' },
          });
        }
      }
    }

    // ──────────────────────────────────────────────────────
    // Strategy 2: Custom scraping endpoint (if configured)
    // Autoscraping can set up their own proxy/scraper
    // and point INSTAGRAM_SCRAPER_URL to it
    // ──────────────────────────────────────────────────────
    const scraperUrl = process.env.INSTAGRAM_SCRAPER_URL;

    if (scraperUrl) {
      const scraperRes = await fetch(scraperUrl, { next: { revalidate: 3600 } });

      if (scraperRes.ok) {
        const scraperData = await scraperRes.json();
        const post: InstagramPost = {
          imageUrl: scraperData.imageUrl || FALLBACK_POST.imageUrl,
          caption: scraperData.caption || FALLBACK_POST.caption,
          profileName: scraperData.profileName || 'AutoScraping',
          profileHandle: scraperData.profileHandle || '@autoscraping',
          postUrl: scraperData.postUrl || 'https://www.instagram.com/autoscraping/',
          likes: String(scraperData.likes || '0'),
          comments: String(scraperData.comments || '0'),
        };

        cachedPost = post;
        cacheTimestamp = now;

        return NextResponse.json(post, {
          headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' },
        });
      }
    }

    // ──────────────────────────────────────────────────────
    // Fallback: Return the latest known post data
    // ──────────────────────────────────────────────────────
    cachedPost = FALLBACK_POST;
    cacheTimestamp = now;

    return NextResponse.json(FALLBACK_POST, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' },
    });
  } catch (error) {
    console.error('[Instagram API] Error fetching post:', error);

    return NextResponse.json(FALLBACK_POST, {
      headers: { 'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600' },
    });
  }
}
