/** Editorial X-vs-Y articles (J7). Auto catalog pages stay in place when no file exists. */
type Mod = {
  frontmatter: {
    title: string;
    description: string;
    slug: string;
    updated: string;
    category?: string;
  };
  Content: any;
  rawContent?: () => string;
};
const fr = import.meta.glob<Mod>('../comparisons/fr/*.md', { eager: true });
const en = import.meta.glob<Mod>('../comparisons/en/*.md', { eager: true });
export const editorialComparisons = { fr: Object.values(fr), en: Object.values(en) };
export function editorialComparison(lang: 'fr' | 'en', slug: string) {
  return editorialComparisons[lang].find((g) => g.frontmatter.slug === slug);
}
