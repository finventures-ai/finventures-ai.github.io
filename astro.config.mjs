// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { sitemapInclude } from './src/data/indexPolicy.ts';

/** GitHub Pages user site (finventures-ai.github.io). Cloudflare Pages mirror later. */
export default defineConfig({
  site: 'https://finventures-ai.github.io',
  integrations: [
    sitemap({
      filter: (page) => sitemapInclude(page),
    }),
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
