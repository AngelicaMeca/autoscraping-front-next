/**
 * Detecta si el entorno actual es un deploy de preview (Vercel, Netlify, etc.)
 * para evitar que URLs temporales sean indexadas por Google.
 */
export function isPreviewEnvironment(): boolean {
  // Vercel: VERCEL_ENV es 'preview' en PRs y deploys de rama
  if (process.env.VERCEL_ENV === 'preview') return true;
  // Netlify: CONTEXT es 'deploy-preview' o 'branch-deploy'
  if (
    process.env.CONTEXT === 'deploy-preview' ||
    process.env.CONTEXT === 'branch-deploy'
  )
    return true;
  // Fallback genérico: NODE_ENV !== 'production' y hay URL externa no-canonical
  if (
    process.env.NODE_ENV !== 'production' &&
    process.env.NEXT_PUBLIC_SITE_URL &&
    !process.env.NEXT_PUBLIC_SITE_URL.includes('autoscraping.com')
  )
    return true;

  return false;
}

export const SITE_URL = 'https://www.autoscraping.com';
