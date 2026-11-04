# videoEx site

Official product website and Safari demo for videoEx. Astro 7 + Tailwind 4, with English and Simplified Chinese pages.

The production website is published with Sites at <https://videoex.popeye-ken.chatgpt.site/>. The source repository at `szlab-ai/videoex-site` is private; GitHub Pages is not used. The Sites project ID lives in `.openai/hosting.json`.

## Pages

| Purpose | English | 简体中文 |
| --- | --- | --- |
| Marketing | `/en/` | `/zh/` |
| Privacy policy | `/en/privacy/` | `/zh/privacy/` |
| Support | `/en/support/` | `/zh/support/` |

`/demo/` is an English test video page for Safari and App Review. The root redirects to `/en/`.

## Local build

```sh
npm ci
npm run build
```

## Screenshots and App Store link

Copy web screenshots into `public/screenshots/`, named `hero-mac.en.png`, `hero-mac.zh.png`, `hero-iphone.en.png`, `hero-iphone.zh.png`, plus one `feature-<1-4>-*.en.png` and `.zh.png` per feature. Missing images show labeled placeholders. Then rebuild and deploy.

Set `APP_STORE_URL` in `src/lib/config.ts` only after the public App Store listing is live. The intended URL is kept there as `FUTURE_APP_STORE_URL`; until then the homepage shows a non-clickable coming-soon label.

The `/demo/` clip is from Blender Foundation's *Sintel* trailer, licensed CC BY 3.0. Its attribution appears directly below the video.
