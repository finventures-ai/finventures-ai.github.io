// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/** GitHub Pages user site (finventures-ai.github.io). No base path needed. */
export default defineConfig({
  site: 'https://finventures-ai.github.io',
  integrations: [sitemap({ filter: (p) => !p.includes('/studio/') })],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
