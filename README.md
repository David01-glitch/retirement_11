# Retirement Hobby Hub

A premium, production-ready React website for retirees and adults 50+ — a peaceful community for gardening, woodworking, painting, knitting, DIY crafts, and creative living.

## Stack

- **React 18** + **Vite 5** (fast dev, optimized production builds)
- **Tailwind CSS 3** (warm earthy design system, custom palette)
- **Framer Motion** (scroll reveals, floating elements, animated accordions)
- **Lucide React** (icons)
- **React Intersection Observer** (available for advanced patterns)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
npm run preview
```

The `dist/` folder is fully static and can be deployed to Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, or any static host.

## Project structure

```
src/
├── assets/images/      Local SVG illustrations (hero, hobbies, blog, projects, community, tutorials)
├── components/         Reusable building blocks (Header, Reveal)
├── sections/           Page sections (Hero, Hobbies, Articles, Projects, Community, Tutorials, Newsletter, FAQ, Contact, Footer)
├── hooks/              useScrolled
├── utils/              Google Analytics helpers (gtag wrappers)
├── data/               Content (hobbies, articles, projects, testimonials, FAQs, tutorials)
├── index.css           Tailwind layers + design tokens
├── main.jsx
└── App.jsx
```

## Google Analytics

The gtag.js snippet for `G-4J046JXWVC` is embedded in `index.html` (production location). Custom events are sent through `src/utils/analytics.js`:

- `page_view` on mount
- `nav_click`, `cta_click`
- `article_expand`, `article_share`
- `newsletter_signup`, `contact_submit`

## Image policy

**All images are stored locally** in `src/assets/images/**` as SVG illustrations — no Unsplash, Pexels, Pixabay, or external CDN dependencies. SVGs are vector, tiny (<2 KB each), and scale perfectly on every device.

## Accessibility (50+ audience)

- Base font size: 17px, line-height 1.7
- Strong color contrast (WCAG AA on every text/background pair)
- Large 44px+ touch targets on all buttons
- Focus-visible outlines (olive)
- Semantic HTML (`header`, `main`, `section`, `article`, `figure`, `figcaption`, `nav`, `footer`)
- Descriptive `alt` text on every image

## SEO

- Title, description, keywords, author meta tags
- Open Graph + Twitter Card tags
- JSON-LD Organization structured data
- Semantic landmarks
- Lazy-loaded images (`loading="lazy"`)
- Preconnect to Google Fonts

## Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
Drag `dist/` to https://app.netlify.com/drop or connect the repo with build command `npm run build` and publish directory `dist`.

### Cloudflare Pages
Build command: `npm run build` · Output directory: `dist`

## Performance notes

- Vite bundles with esbuild minification
- Images are inline SVGs under 4 KB — bundled into the JS payload, zero extra HTTP requests
- Google Fonts loaded with `preconnect`
- Framer Motion variants use viewport `once: true` to skip re-animations
- All sections use `whileInView` with margin to start animations slightly before they enter the viewport

## Customization

- **Colors**: `tailwind.config.js` → `theme.extend.colors` (`cream`, `olive`, `terracotta`, `wood`)
- **Content**: `src/data/content.js` (articles, hobbies, testimonials, FAQs)
- **GA ID**: replace `G-4J046JXWVC` in `index.html` and add `VITE_GA_ID` env wiring if you want it dynamic

## License

© Retirement Hobby Hub. All rights reserved.
