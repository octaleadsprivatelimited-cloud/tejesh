# Tejesh Profine

React website for uPVC windows, aluminium doors and installation services in Tirupati and Chittoor. Builds static HTML for every public page, with React hydration for interactive features, and deploys static assets plus API functions to Vercel.

## Local preview

Use Node 24 (`nvm use` if nvm is installed).

```sh
npm ci --legacy-peer-deps
npm run build
npm run check
npm run serve
```

Open http://localhost:3000. The server binds to the local machine. Set `PORT` to use another port. To develop with live reload, run `npm run dev:api` and `npm start` in separate terminals; CRA forwards API requests to port 3009.

## SEO and content

Edit `src/data/site.json` for the canonical production domain and each page's title, description and focused search phrases. Edit `src/data/blogPosts.js` for articles; the article list, detail pages and article schema share this source. Catalog data lives in `src/data/services.json` and `src/data/portfolio.json`.

The production build generates 38 crawlable HTML pages, canonical URLs, Open Graph and Twitter cards, LocalBusiness/WebSite/WebPage/BreadcrumbList schema, Service schema on service pages, and BlogPosting schema on articles. Each page has one H1. Unknown URLs return 404, and obsolete location URLs redirect to the corresponding existing service page. Sitemaps contain only real routes; no artificial modification dates are emitted.

`public/sitemap.xml`, `public/sitemap-index.xml`, `public/robots.txt` and `public/local-business-schema.json` are generated from the route metadata. Do not edit them by hand. Existing Google and Bing verification values are preserved; verify their ownership in the associated webmaster accounts before launch. Business hours, precise coordinates, prices and ratings are omitted from structured data until verified.

Focused phrases are used in page titles, descriptions and homepage content. The keywords field is retained for editorial reference; Google's ranking does not use the meta-keywords tag. The phrases are based on the existing business and services, without search-volume claims. Confirm actual service areas and use Search Console query data after launch to refine them.

## Performance

`npm run build` converts 37 existing images to WebP at a maximum width of 1600 pixels, preserving originals for sharing and existing external links. Generated files are under `public/optimized`; `src/data/images.json` maps their dimensions and URLs. Responsive 480px and 960px variants are generated where useful. The Image component supplies srcset, intrinsic dimensions, lazy loading, error fallbacks and asynchronous decoding; the hero image loads eagerly at high priority.

Product videos load near the viewport and autoplay muted, with player controls and a manual-play fallback. Reduced-motion visitors can start playback themselves. System serif and sans-serif fonts avoid font downloads. Routes load their own JavaScript chunks and show a skeleton while loading. The mobile navigation uses an accessible disclosure with Escape and outside-click handling. Catalog pages render their data directly rather than blocking on an initial API fetch. Hashed JavaScript/CSS/fonts cache for a year; unhashed images have shorter caching so replacements can update. Measure mobile Core Web Vitals after deployment; local build checks do not establish a Lighthouse score or a ranking improvement.

## Verification

```sh
npm run build
npm run lint
npm run check
npm run test:server
node scripts/verify-vercel.cjs
CI=true npm test -- --watchAll=false --runInBand
```

The build check validates every page's head tags, canonical, H1, structured data, image paths and stylesheet/script references. Server tests check deep links, genuine 404s, redirects, API methods, API responses and the retired SMTP endpoint. Formspree submission responses are mocked in frontend tests; tests do not send real enquiries.

See [Vercel deployment](VERCEL_DEPLOYMENT_FIX.md) for the deployment configuration and account setup.

## Website audit and design

The site uses a restrained editorial layout with warm stone backgrounds, deep green text, gold accents, square controls and no shadows or hover animations. The original React/CRA/Tailwind stack and brand logo are retained.

The audit removed invented testimonials, social placeholders, project counts, fixed-price packages and unsupported warranty/availability claims. The old testimonials URL redirects to Contact. Product imagery is presented as collection references rather than fabricated completed projects. All existing product, journal, support and application routes remain accessible. Privacy and terms pages are linked from every footer. Review the policy content against the business's actual Formspree retention and service practices before publishing.

Validation includes 906 internal links, unique titles/descriptions, favicon and image assets, form success/server/network failure behavior, menu interactions, server routes and hydration of all prerendered pages. Browser checks covered all 29 pages plus the 404 at 320, 480, 768 and 1440 CSS pixels without document overflow. The 320px check used same-origin frames because the browser's viewport override was affected by its display scaling. Both WhatsApp and Octaleads external links responded HTTP 200 during the audit.

After a build, `npm test` includes hydration tests against `build/`, so rebuild after editing page markup. Set REACT_APP_FORMSPREE_ENDPOINT to your own Formspree endpoint and rebuild to enable enquiry delivery. No SMTP credentials are required and no fake success is shown. Local checks cannot establish Formspree account activation or real inbox delivery or production Core Web Vitals.

## Formspree enquiries

Both enquiry forms submit directly to the Formspree endpoint configured by `REACT_APP_FORMSPREE_ENDPOINT`. Copy `.env.example` to `.env.local`, add the form URL from your own dashboard, and rebuild. Blank configuration shows a phone/WhatsApp fallback. No account ID is guessed. The privacy policy identifies Formspree as the form processor. Confirm the recipient, allowed domains and any CAPTCHA settings in the Formspree dashboard before launch.

## Landing pages

The complete-service landing page is `/landing/services`. Individual landing pages are `/landing/upvc-windows`, `/landing/aluminium-windows`, `/landing/upvc-doors`, `/landing/aluminium-doors`, `/landing/sliding-systems`, `/landing/facade-solutions`, `/landing/installation` and `/landing/maintenance`. Edit `src/data/landingPages.json` for their content and `src/data/site.json` for unique SEO metadata. Existing service detail URLs are preserved. Landing pages ask only for name and phone and open WhatsApp with those details and the service interest prefilled. The visitor sends the message in WhatsApp; these forms do not use Formspree. Main-site enquiry forms still use Formspree.

### Landing-page company assets

The company showcase displays user-authorized official logos, without testimonial quotations or claims that these companies are clients. Sources:

- My Home Group: https://www.myhomeconstructions.com/assets/myhome/logo.svg
- Rajapushpa: https://rajapushpa.in/assets/logo.svg
- Brigade: logo asset linked from https://www.brigadegroup.com/
- Prestige: logo asset linked from https://www.prestigeconstructions.com/

Landing-page floating contacts provide Google Maps search for the business, a telephone link and WhatsApp. A verified Maps place URL can replace the search link once available.

### Transparent brand logo

Header and footer use `public/tp-logo-transparent.png`, derived from the original `public/tp-logo.png` with the built-in image generation editor. The original remains available. Edit prompt: remove only the white and gray background and rectangular tile, including background inside the mark; preserve the existing gold TP monogram geometry, beveled texture, colors, perspective and proportions; add no text, shapes or shadows; output genuine transparent alpha. The normal image build produces optimized WebP assets that retain transparency.
