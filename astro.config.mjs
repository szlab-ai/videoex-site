import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://szlab-ai.github.io',
  base: '/videoex-site/',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true },
  },
  integrations: [sitemap({
    i18n: { defaultLocale: 'en', locales: { en: 'en', zh: 'zh-Hans' } },
    filter: (page) => !/\/videoex-site\/$/.test(page) && !/\/404\/?$/.test(page) && !/\/demo\/?$/.test(page),
  })],
  vite: { plugins: [tailwindcss()] },
});
