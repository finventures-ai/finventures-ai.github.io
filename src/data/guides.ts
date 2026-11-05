/** FR/EN slug pairs for cornerstone guides (hreflang). */
export const guidePairs: { fr: string; en: string }[] = [
  { fr: 'avis-systeme-io', en: 'systeme-io-review' },
  { fr: 'systeme-io-vs-clickfunnels', en: 'systeme-io-vs-clickfunnels' },
  { fr: 'meilleurs-outils-courriel-gratuits-2026', en: 'best-free-email-marketing-tools-2026' },
  { fr: 'kit-vs-mailerlite', en: 'kit-vs-mailerlite' },
  { fr: 'meilleurs-outils-video-ia', en: 'best-ai-video-tools' },
];
type Mod = { frontmatter: { title: string; description: string; slug: string; updated: string }; Content: any };
const fr = import.meta.glob<Mod>('../guides/fr/*.md', { eager: true });
const en = import.meta.glob<Mod>('../guides/en/*.md', { eager: true });
export const guides = { fr: Object.values(fr), en: Object.values(en) };
export function altSlug(lang: 'fr' | 'en', slug: string) {
  const p = guidePairs.find((x) => x[lang] === slug);
  return p ? p[lang === 'fr' ? 'en' : 'fr'] : slug;
}
