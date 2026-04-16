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

export async function GET() {
  return NextResponse.json(FALLBACK_POST, {
    headers: {
      'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
    },
  });
}
