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

After a build, `npm test` includes hydration tests against `build/`, so rebuild after editing page markup. The supplied Formspree endpoint is configured in `src/data/site.json`; `REACT_APP_FORMSPREE_ENDPOINT` optionally overrides it after a rebuild. No SMTP credentials are required and no fake success is shown. Local checks cannot establish Formspree account activation or real inbox delivery or production Core Web Vitals.

## Formspree enquiries

Main-site enquiry forms submit to the supplied `https://formspree.io/f/maeqdgzb` endpoint, stored as public configuration in `src/data/site.json`. An optional `REACT_APP_FORMSPREE_ENDPOINT` build-time setting overrides it, including on Vercel. Explicitly setting that override to an empty string disables submissions and shows a phone/WhatsApp fallback. The privacy policy identifies Formspree as the form processor. Confirm the recipient, allowed domains and any CAPTCHA settings in the Formspree dashboard before launch.

## Landing pages

The complete-service landing page is `/landing/services`. Individual landing pages are `/landing/upvc-windows`, `/landing/aluminium-windows`, `/landing/upvc-doors`, `/landing/aluminium-doors`, `/landing/sliding-systems`, `/landing/facade-solutions`, `/landing/installation` and `/landing/maintenance`. Edit `src/data/landingPages.json` for their content and `src/data/site.json` for unique SEO metadata. Existing service detail URLs are preserved. Advertising landing pages use a prominent Call Now panel, the business telephone number and opening hours. WhatsApp remains a secondary link. Main-site enquiry forms still use Formspree.

### Landing-page company assets

The company showcase displays user-authorized official logos, without testimonial quotations or claims that these companies are clients. Sources:

- My Home Group: https://www.myhomeconstructions.com/assets/myhome/logo.svg
- Rajapushpa: https://rajapushpa.in/assets/logo.svg
- Brigade: logo asset linked from https://www.brigadegroup.com/
- Prestige: logo asset linked from https://www.prestigeconstructions.com/

Landing-page floating contacts provide the verified Google Business Profile Maps link, a telephone link and WhatsApp.

### Transparent brand logo

Header and footer use `public/tp-logo-transparent.png`, derived from the original `public/tp-logo.png` with the built-in image generation editor. The original remains available. Edit prompt: remove only the white and gray background and rectangular tile, including background inside the mark; preserve the existing gold TP monogram geometry, beveled texture, colors, perspective and proportions; add no text, shapes or shadows; output genuine transparent alpha. The normal image build produces optimized WebP assets that retain transparency.

### Analytics and paid-search preparation

Public build-time IDs are configured through `REACT_APP_GA4_ID`, `REACT_APP_CLARITY_ID`, `REACT_APP_GOOGLE_ADS_ID`. Empty ID overrides disable the corresponding integration. The verified Google Ads ID and website-call label have public source defaults; GA4 and Clarity still require their environment settings. `REACT_APP_TRACKING_ENABLED` must be `true` after account checks; it is `true` for the verified GA4 and Clarity projects. The verified GA4 web stream is `16118121659`, measurement ID `G-KPX0DJJLQH`. Use IDs verified in the **sriadithayinteiors@gmail.com** business accounts, never IDs from another signed-in profile. Scripts only load on the configured production hostname, after the visitor's consent; localhost and preview hosts do not collect traffic. Rebuild after changing these settings.

GA4 Enhanced Measurement is disabled. Keep Enhanced Measurement off (especially history-based page views, outbound links and form interactions) for this stream. The app sends one manual `page_view` per route transition, including journal articles, and updates the virtual-page context for engagement events. Unknown paths use a fixed `/404` measurement URL. Only validated Google click identifiers are included in measurement URLs, and only with advertising consent; all other query parameters are excluded. Approved city and service campaign names preserve manual attribution. Form values and WhatsApp message text never enter event parameters.

GA4 property `558646268` is linked to Ads account `168-183-2284`. Website contact intent must remain secondary in Ads; the advertising goal is qualified calls. `generate_lead` fires only after Formspree confirms successful delivery. `whatsapp_form_open`, `whatsapp_click`, `phone_click`, `map_click` and `email_click` measure intent. They do not prove a completed call or a WhatsApp message being sent. Do not configure a direct Ads conversion and a GA4 import as primary for the same action. Enhanced conversions and remarketing are not configured.

Consent-gated interaction measurement covers existing internal links, contact placements, form starts/submission attempts/validation and delivery errors, scroll milestones, visible sections, FAQ openings, gallery filters, company-logo links, menu toggles and product-video start/progress/pause/completion/errors. Event parameters accept only existing paths and fixed labels, never arbitrary text or input values. Scroll, section and video milestones are deduplicated. Listeners are removed on route changes. The mobile privacy notice keeps all three choices in one compact row with 44px touch targets.

Clarity uses Consent V2 and masks both enquiry forms. Keep strict masking enabled in the Clarity project. Privacy choices are stored for 180 days; withdrawal reloads the page to unload existing scripts. Validate consent, route navigation and a controlled test submission using GA4 DebugView/Tag Assistant after deployment. Local unit tests validate the event contract without contacting Google, Clarity or Formspree.

Eight service Search campaigns were created in Ads account `168-183-2284`, with 24 ad groups, 496 exact/phrase keywords and 24 responsive search ads. As of 16 October they use one Maximize clicks portfolio strategy and one shared INR 127.11/day budget, with the account-default Phone call leads goal, Google Search only, presence targeting in Tirupati/Bengaluru/Hyderabad, and Monday-Saturday 09:30-22:30 IST scheduling. Qualified Calls from ads are primary, require 60 seconds and count once per ad interaction. Call reporting and auto-tagging are enabled. The six GA4 contact/lead events remain secondary. Live navigation, page, section, scroll and video events were verified in GA4 Realtime.

The combined average net daily budget remains INR 127.11. On 16 October, the eight individual budgets (40/20/20/12/15/8/7/5.11) were replaced by one shared budget linked to a common Maximize clicks portfolio strategy. This reallocates unused budget across services without increasing the total. Maximize clicks optimizes clicks; qualified call data is needed before assessing conversion-focused bidding. At 2x daily spending and 18% GST this is INR 299.98, respecting the user's INR 300 total including GST limit. On 13 October the uPVC Windows budget had been raised to INR 300 before GST; it was restored to INR 40 and held for the rest of that day because Google's spending ceiling uses the day's highest budget. A one-time Google rule (`62171715`) enables it on 14 October between 09:00 and 10:00 IST and emails the business account on changes or errors. The other seven campaigns were enabled and eligible (learning) when checked; serving and call performance require real traffic.

The shared list `Tejesh | Call lead quality exclusions` contains 40 phrase negatives and is applied to all eight campaigns. Broad exclusions for free/installation/installer/repair/maintenance were replaced with specific software phrases so genuine quotations and service enquiries remain eligible. The verified Gajulamandyam Business Profile was selected in a dedicated showroom location group for the account-level location asset. See `marketing/README.md` and `marketing/campaign-plan.json` for operational status. Generated CSVs are paused creation templates only: **do not upload their Add rows again to this existing account**.

Deployment check: the Chrome Vercel dashboard observed on 2026-10-13 connects `tejeshprofine.com` to project `tejesh-profines-projects/5`, repository `tejeshprofine/5`. This checkout's origin is `octaleadsprivatelimited-cloud/tejesh`. The existing production project is linked using a task-specific Vercel CLI login verified as sriadithayinteiors@gmail.com. Deploy this checkout directly with the CLI; Git pushes to this origin do not update the connected tejeshprofine/5 repository.

Business contact and enquiry delivery email: **sriadithayinteiors@gmail.com**. Clarity project **yx070si4fg**, strict masking enabled. Ads account **168-183-2284**; invitation to Octaleads MCC **506-089-4911** is left pending at the user's request. The owner added funds and authorized call advertising. The tax form was left unchanged at the user's latest request.

## Call improvements — 16 October 2026

The uPVC Windows Price and quotation ad now uses 12 relevant headlines and four call-focused descriptions, with a `call-now` display path. Its editor showed Good ad strength before saving. Ad review and real call performance still require verification after serving.

A new primary Phone call lead action, **Calls from website | 60s**, was created in Ads. It counts once per interaction, requires 60 seconds and uses a 30-day click window with no invented monetary value. Its public tag destination is `AW-18510402042/nMcCCPj-jJ4dEPqjufpE`. Website phone clicks and WhatsApp/form events remain secondary.

The source configures Google's forwarding-number callback only with advertising consent on the production host and when tracking is enabled. It updates telephone links and visible numbers while preserving Call Now text, icons and WhatsApp links, observes route changes, and restores the business number when consent is withdrawn. No click is sent as a completed-call conversion. See [Google's website-call instructions](https://support.google.com/google-ads/answer/6095883).

**Deployment is pending.** This GitHub origin is not the repository linked to the live Vercel project. To publish, use the existing `tejesh-profines-projects/5` project from its authorized account. Keep `REACT_APP_TRACKING_ENABLED=true`, `REACT_APP_GOOGLE_ADS_ID=AW-18510402042`, `REACT_APP_GOOGLE_ADS_WEBSITE_CALL_LABEL=nMcCCPj-jJ4dEPqjufpE`, and the existing verified GA4/Clarity settings. An explicitly empty Ads override disables call tracking. Verify the live call links and tag after deploying; Google Ads currently requires the website tag installation. Do not create a new hosting project or claim that a push to this origin publishes the site.

Advertiser verification is due **14 November 2026**. The owner must complete it; no identity or legal declarations were submitted during this audit.
