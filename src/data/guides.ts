/** FR/EN slug pairs for cornerstone guides (hreflang). */
export const guidePairs: { fr: string; en: string }[] = [
  { fr: 'avis-systeme-io', en: 'systeme-io-review' },
  { fr: 'systeme-io-vs-clickfunnels', en: 'systeme-io-vs-clickfunnels' },
  { fr: 'meilleurs-outils-courriel-gratuits-2026', en: 'best-free-email-marketing-tools-2026' },
  { fr: 'kit-vs-mailerlite', en: 'kit-vs-mailerlite' },
  { fr: 'meilleurs-outils-video-ia', en: 'best-ai-video-tools' },
  { fr: 'choisir-plateforme-courriel-automatisations', en: 'choose-email-platform-automation-essentials' },
  { fr: 'choisir-outil-tunnel-vente-petite-entreprise', en: 'choose-funnel-builder-small-business' },
  { fr: 'flux-video-ia-sources-verifiees', en: 'source-grounded-ai-video-workflow' },
];
type Mod = { frontmatter: { title: string; description: string; slug: string; updated: string }; Content: any };
const fr = import.meta.glob<Mod>('../guides/fr/*.md', { eager: true });
const en = import.meta.glob<Mod>('../guides/en/*.md', { eager: true });
function byUpdated(a: Mod, b: Mod) {
  const d = String(b.frontmatter.updated).localeCompare(String(a.frontmatter.updated));
  return d || a.frontmatter.slug.localeCompare(b.frontmatter.slug);
}
export const guides = {
  fr: Object.values(fr).sort(byUpdated),
  en: Object.values(en).sort(byUpdated),
};
export function altSlug(lang: 'fr' | 'en', slug: string) {
  const p = guidePairs.find((x) => x[lang] === slug);
  return p ? p[lang === 'fr' ? 'en' : 'fr'] : slug;
}
