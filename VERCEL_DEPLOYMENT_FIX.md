# Vercel deployment

Production was deployed on 2026-10-13 to `tejesh-profines-projects/5` using the Vercel CLI authenticated as `sriadithayinteiors@gmail.com`. The live canonical origin is `https://tejeshprofine.com`. All 38 rendered pages and the custom 404 were checked over HTTPS.

## Project configuration

This checkout is `octaleadsprivatelimited-cloud/tejesh`, branch `main`. The existing Vercel Git integration points to `tejeshprofine/5`; changing it to this checkout was denied because the connected Vercel GitHub identity lacks repository write/admin access. Direct CLI deployment works, but pushes to this checkout do not trigger that existing integration. Use repository root `.`. `vercel.json` sets:

- Node 24 via `package.json` (consistent with `.nvmrc`).
- Install: `npm ci --legacy-peer-deps` using the committed lockfile.
- Build: `npm run build` (image optimization, CRA bundle, static page rendering).
- Output: `build`.
- Clean URLs and no trailing slash; `/upvc-windows` serves its own HTML file.
- `/api/*.js` functions for catalogs. Enquiry forms submit directly to Formspree.
- Permanent redirects for obsolete location URLs and the www host.
- Browser caching for hashed static assets and optimized images, plus response security headers.

There is no catch-all rewrite to the homepage: unknown pages return Vercel's 404 response with the generated `404.html`. Refreshing an existing deep link works through its generated HTML file.

## Environment variables

Copy `.env.example` to `.env.local` for local testing. Set the same public build-time values in Vercel:

| Variable | Purpose |
| --- | --- |
| `REACT_APP_SITE_URL` | Canonical origin, currently `https://tejeshprofine.com`. |
| `REACT_APP_FORMSPREE_ENDPOINT` | Optional override; default is the supplied `https://formspree.io/f/maeqdgzb` endpoint. |

The Formspree endpoint is public and is embedded in the frontend. No SMTP account or password is needed. Rebuild after changing either value. The supplied endpoint is configured in source so builds work without an environment override. Explicitly setting the override to an empty string disables forms with a phone fallback.

In Formspree, select the intended recipient, complete any required email verification, and confirm allowed domains include the production domain and your local test origin if domain restrictions are enabled. Configure spam protection to match the integration. If your form requires an interactive CAPTCHA, its corresponding widget must be integrated before launch; the current form handles JSON submissions and displays provider errors.

Success is shown only after a successful JSON response; timeouts, rejected submissions and rate limits keep entered details and show actionable errors. The old SMTP `/api/contact` endpoint returns 410 with a link to the current contact page. Test submissions in automated tests are mocked and do not contact Formspree.

For preview deployments, `scripts/build.cjs` reads `VERCEL_ENV` and sets `REACT_APP_NOINDEX=true`. The built robots file disallows crawling and every page has a noindex meta tag. Production deployments allow indexing. Keep Vercel preview Deployment Protection enabled if previews should also be private: noindex is not access control.

## Domain and launch

1. Add `tejeshprofine.com` and `www.tejeshprofine.com` to the project and apply Vercel's actual DNS instructions. The www redirect targets the canonical apex domain. If the final domain differs, update `site.json`, the redirect destination and the public environment variable together.
2. Confirm the connected GitHub account or team can access this repository. Use the configured production branch; do not change Git author identities to work around account access.
3. Run the verification commands in README locally, then push/deploy when ready.
4. On a Vercel preview, check direct URLs `/services`, `/upvc-windows`, `/blog/6`, missing URLs, static assets, APIs and noindex metadata. Run the same checks on production after release.
5. Verify the production domain in Google Search Console and Bing Webmaster Tools, using the account's issued verification values. Submit `https://tejeshprofine.com/sitemap.xml` and inspect representative URLs.
6. Confirm the real address, hours, service areas and business listings are consistent, and measure mobile field performance after traffic arrives.

## Sources

- [Vercel static configuration](https://vercel.com/docs/project-configuration/vercel-json)
- [Vercel supported Node versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)
- [Google JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google supported meta tags](https://developers.google.com/search/docs/crawling-indexing/special-tags)

- [Formspree JavaScript integration](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax)

## Verified cloud setup

- GA4 `G-KPX0DJJLQH`, property `558646268`: a live page view appeared in Realtime. Enhanced Measurement is disabled, with email and enquiry-query redaction enabled.
- Clarity `yx070si4fg`: the production tag loads after analytics consent; strict masking is enabled. Dashboard processing may lag behind installation.
- Formspree `maeqdgzb`: enabled; workflow recipient verified as `sriadithayinteiors@gmail.com`.
- Search Console: domain ownership auto verified through the existing DNS record. Updated sitemap accepted with 38 discovered pages.
- Vercel domain settings: apex serves production; www redirects permanently to apex. The earlier reciprocal redirect conflict was fixed.
- Google Ads `168-183-2284`: no campaign launched; billing setup incomplete. User will add funds later. Octaleads MCC `506-089-4911` invitation sent and left pending at the user’s explicit request.
