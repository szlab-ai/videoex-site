import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://videoex.popeye-ken.chatgpt.site',
  base: '/',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true },
  },
  integrations: [sitemap({
    i18n: { defaultLocale: 'en', locales: { en: 'en', zh: 'zh-Hans' } },
    filter: (page) => !/^https:\/\/videoex\.popeye-ken\.chatgpt\.site\/$/.test(page) && !/\/404\/?$/.test(page) && !/\/demo\/?$/.test(page),
  })],
  vite: { plugins: [tailwindcss()] },
});
