/**
 * Indexation SEO — ~35 pages hub (D-CONTENT-TIER, 5 nov. 2026).
 * Les autres pages restent en ligne avec noindex,follow et hors sitemap.
 * Ne jamais supprimer une page existante : seulement retirer de l'index.
 */
export const INDEXED_REVIEWS = [
  'systeme-io',
  'kit',
  'mailerlite',
  'clickfunnels',
  'gohighlevel',
  'heygen',
] as const;

export const INDEXED_VS = [
  'gohighlevel-vs-systeme-io',
  'brevo-vs-activecampaign',
  'clickfunnels-vs-gohighlevel',
  'kit-vs-activecampaign',
  'kit-vs-brevo',
  'mailerlite-vs-activecampaign',
  'mailerlite-vs-brevo',
  'synthesia-vs-heygen',
] as const;

/** Path without lang prefix, always ending with / except root which is '/' */
export function isIndexedPath(pathWithoutLang: string): boolean {
  const p = pathWithoutLang === '' ? '/' : pathWithoutLang.endsWith('/') || pathWithoutLang === '/'
    ? pathWithoutLang
    : `${pathWithoutLang}/`;

  if (p === '/') return true;
  if (p === '/guides/') return true;
  if (p === '/methode/' || p === '/how-we-evaluate/') return true;
  if (p.startsWith('/category/') && ['email', 'funnels', 'ai'].some((c) => p === `/category/${c}/`)) return true;
  if (p.startsWith('/guides/') && p !== '/guides/') return true; // cornerstone articles
  if (p.startsWith('/review/')) {
    const slug = p.slice('/review/'.length).replace(/\/$/, '');
    return (INDEXED_REVIEWS as readonly string[]).includes(slug);
  }
  if (p.startsWith('/vs/')) {
    const pair = p.slice('/vs/'.length).replace(/\/$/, '');
    return (INDEXED_VS as readonly string[]).includes(pair);
  }
  // pricing, studio, go, other vs/reviews → noindex
  return false;
}

/** Full URL filter for @astrojs/sitemap */
export function sitemapInclude(url: string): boolean {
  try {
    const u = new URL(url);
    const path = u.pathname;
    if (path.includes('/studio/')) return false;
    if (path.includes('/go/')) return false;
    // root redirect page
    if (path === '/' || path === '') return true;
    const m = path.match(/^\/(fr|en)(\/.*)?$/);
    if (!m) return false;
    const rest = m[2] && m[2] !== '/' ? (m[2].endsWith('/') ? m[2] : `${m[2]}/`) : '/';
    return isIndexedPath(rest);
  } catch {
    return false;
  }
}

/** Count of intentionally indexed locale pages (FR+EN pairs counted separately). */
export const INDEXED_TARGET_NOTE =
  'Homes (2) + guides index (2) + method (2) + categories (6) + guides (16) + reviews (12) + comparisons (16)';
