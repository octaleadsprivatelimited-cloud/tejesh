# Vercel deployment

The repository is prepared locally. Publishing requires connecting the GitHub repository to a Vercel project with access to that repository. No deployment is performed by these local changes.

## Project configuration

Import `octaleadsprivatelimited-cloud/tejesh` and select the branch you intend to deploy. Use repository root `.`. `vercel.json` sets:

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
| `REACT_APP_FORMSPREE_ENDPOINT` | Exact `https://formspree.io/f/...` URL from your Formspree dashboard. |

The Formspree endpoint is public and is embedded in the frontend. No SMTP account or password is needed. Rebuild after changing either value. Until an endpoint is supplied, forms display an unavailable message and phone fallback without transmitting data.

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
