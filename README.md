# videoEx site

Official product website and Safari demo for videoEx. Astro 7 + Tailwind 4, with English and Simplified Chinese pages.

The production website is published with GitHub Pages at <https://szlab-ai.github.io/videoex-site/>. Pushing to `main` runs `.github/workflows/deploy.yml`, following the PageTOC site's deployment pattern.

## Pages

| Purpose | English | 简体中文 |
| --- | --- | --- |
| Marketing | `/videoex-site/en/` | `/videoex-site/zh/` |
| Privacy policy | `/videoex-site/en/privacy/` | `/videoex-site/zh/privacy/` |
| Support | `/videoex-site/en/support/` | `/videoex-site/zh/support/` |

`/videoex-site/demo/` is an English test video page for Safari and App Review. The site root redirects to `/videoex-site/en/`.

## Local build

```sh
npm ci
npm run build
```

## Screenshots and App Store link

Copy web screenshots into `public/screenshots/`, named `hero-mac.en.png`, `hero-mac.zh.png`, `hero-iphone.en.png`, `hero-iphone.zh.png`, plus one `feature-<1-4>-*.en.png` and `.zh.png` per feature. Missing images show labeled placeholders. Then rebuild and deploy.

Set `APP_STORE_URL` in `src/lib/config.ts` only after the public App Store listing is live. The intended URL is kept there as `FUTURE_APP_STORE_URL`; until then the homepage shows a non-clickable coming-soon label.

The `/demo/` clip is from Blender Foundation's *Sintel* trailer, licensed CC BY 3.0. Its attribution appears directly below the video.
