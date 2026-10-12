const fs = require('node:fs/promises');
const path = require('node:path');
const esbuild = require('esbuild');
require('dotenv').config({ path: '.env.local' });
require('dotenv').config();

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
async function main() {
  // Place the bundle beside the project so external packages resolve its node_modules.
  const bundle = path.resolve('node_modules/.cache/tejesh/prerender.cjs');
  try {
    await esbuild.build({ entryPoints: ['src/prerender.js'], outfile: bundle, bundle: true,
      platform: 'node', format: 'cjs', packages: 'external', loader: { '.js': 'jsx' },
      define: { 'process.env.REACT_APP_SITE_URL': JSON.stringify(process.env.REACT_APP_SITE_URL || ''),
        'process.env.NODE_ENV': '"production"' } });
    const { renderPage, getPageSEO, pagePaths, origin } = require(bundle);
    const noindex = process.env.REACT_APP_NOINDEX === 'true' || (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production');
    const template = (await fs.readFile('build/index.html', 'utf8')).replace(/<title>.*?<\/title>/s, '');
    for (const route of [...pagePaths, '/404']) {
      const page = getPageSEO(route);
      const meta = (name, content, property = false) => `<meta data-rh="true" ${property ? 'property' : 'name'}="${name}" content="${escapeHtml(content)}"/>`;
      const head = `<title data-rh="true">${escapeHtml(page.title)}</title>` +
        meta('description', page.description) + meta('keywords', page.keywords) +
        meta('robots', noindex || page.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large') +
        `<link data-rh="true" rel="canonical" href="${escapeHtml(page.url)}"/>` +
        ['type', 'title', 'description', 'url', 'image', 'image:alt', 'site_name', 'locale'].map((name, index) =>
          meta(`og:${name}`, [page.article ? 'article' : 'website', page.title, page.description, page.url, page.image, page.imageAlt, 'Tejesh Profine', 'en_IN'][index], true)).join('') +
        meta('twitter:card', 'summary_large_image') + meta('twitter:title', page.title) +
        meta('twitter:description', page.description) + meta('twitter:image', page.image) +
        `<script data-rh="true" type="application/ld+json">${JSON.stringify(page.schema).replace(/</g, '\\u003c')}</script>`;
      const html = template.replace('</head>', `${head}</head>`).replace('<div id="root"></div>', () => `<div id="root">${renderPage(route)}</div>`);
      if (html.includes('Switched to client rendering')) throw new Error(`SSR failed for ${route}`);
      const filename = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
      await fs.mkdir(path.dirname(`build/${filename}`), { recursive: true });
      await fs.writeFile(`build/${filename}`, html);
    }
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pagePaths.map(route => `  <url><loc>${escapeHtml(new URL(route, `${origin}/`).href)}</loc></url>`).join('\n')}\n</urlset>\n`;
    const index = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${escapeHtml(origin)}/sitemap.xml</loc></sitemap></sitemapindex>\n`;
    const robots = noindex ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${origin}/sitemap.xml\n`;
    const schema = `${JSON.stringify(getPageSEO('/').schema['@graph'][0], null, 2)}\n`;
    await Promise.all([
      fs.writeFile('build/sitemap.xml', sitemap), fs.writeFile('build/sitemap-index.xml', index),
      fs.writeFile('build/robots.txt', robots), fs.writeFile('build/local-business-schema.json', schema),
    ]);
    // Keep the development server's public artifacts in sync with production defaults.
    if (!noindex) await Promise.all([
      fs.writeFile('public/sitemap.xml', sitemap), fs.writeFile('public/sitemap-index.xml', index),
      fs.writeFile('public/robots.txt', robots), fs.writeFile('public/local-business-schema.json', schema),
    ]);
    console.log(`Prerendered ${pagePaths.length} pages and a noindex 404 page (${noindex ? 'preview' : 'production'}).`);
  } finally { await fs.rm(bundle, { force: true }); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
