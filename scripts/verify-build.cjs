const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');
const { gzipSync } = require('node:zlib');
const config = require('../vercel.json');
const site = require('../src/data/site.json');

const sitemap = new JSDOM(fs.readFileSync('build/sitemap.xml', 'utf8'), { contentType: 'application/xml' });
const paths = [...sitemap.window.document.querySelectorAll('loc')].map(node => new URL(node.textContent).pathname);
assert.equal(new Set(paths).size, paths.length, 'Sitemap must contain unique URLs');
assert.equal(paths.length, Object.keys(site.routes).length + 6, 'Sitemap must include every page and article');
const preview = /^Disallow: \/$/m.test(fs.readFileSync('build/robots.txt', 'utf8'));
const titles = new Set();
const descriptions = new Set();
let internalLinks = 0;
for (const route of [...paths, '/404']) {
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  const { document } = new JSDOM(fs.readFileSync(path.join('build', file), 'utf8')).window;
  assert.equal(document.querySelectorAll('title').length, 1, `Duplicate title on ${route}`);
  assert(!titles.has(document.title), `Duplicate title: ${document.title}`); titles.add(document.title);
  assert.equal(document.querySelectorAll('meta[name="description"]').length, 1, `Duplicate/missing description on ${route}`);
  assert.equal(document.querySelectorAll('link[rel="canonical"]').length, 1, `Duplicate/missing canonical on ${route}`);
  const description = document.querySelector('meta[name="description"]').content;
  assert(description && !descriptions.has(description), `Duplicate/empty description on ${route}`); descriptions.add(description);
  for (const a of document.querySelectorAll('a[href]')) {
    const href = a.getAttribute('href');
    assert(href && href !== '#', `Empty link on ${route}`);
    if (href.startsWith('/') || href.startsWith('#')) {
      const url = new URL(href, `https://tejeshprofine.com${route}`);
      const targetFile = url.pathname === '/' ? 'index.html' : `${url.pathname.slice(1)}.html`;
      const target = path.join('build', targetFile);
      assert(fs.existsSync(target) || fs.existsSync(path.join('build', decodeURI(url.pathname))), `Broken internal link ${href} on ${route}`);
      if (url.hash) {
        const targetDoc = new JSDOM(fs.readFileSync(target, 'utf8')).window.document;
        assert(targetDoc.getElementById(url.hash.slice(1)), `Missing anchor ${href} on ${route}`);
      }
      internalLinks++;
    }
    if (href.startsWith('tel:')) assert(/^tel:\+?[0-9]+$/.test(href), `Invalid phone link on ${route}`);
  }
  for (const icon of document.querySelectorAll('link[rel="icon"],link[rel="apple-touch-icon"]')) assert(fs.existsSync(path.join('build', icon.getAttribute('href'))), 'Missing favicon');
  const canonical = document.querySelector('link[rel="canonical"]').href;
  assert.equal(new URL(canonical).pathname, route, `Canonical mismatch on ${route}`);
  assert.equal(document.querySelectorAll('h1').length, 1, `Expected one H1 on ${route}`);
  assert(document.getElementById('root').textContent.trim().length > 200, `Missing HTML body on ${route}`);
  const graph = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent);
  assert(graph['@graph'].some(item => item['@type'] === 'LocalBusiness'));
  assert(!JSON.stringify(graph).includes('aggregateRating'), 'Unverified ratings must not be emitted');
  assert(/^https:\/\//.test(document.querySelector('meta[property="og:image"]').content));
  const selectors = ['img[src]', 'script[src]', 'link[rel="stylesheet"]', 'link[rel="preload"][as="image"]'];
  for (const asset of document.querySelectorAll(selectors.join(','))) {
    const url = asset.getAttribute('src') || asset.getAttribute('href');
    if (url?.startsWith('/')) assert(fs.existsSync(path.join('build', decodeURI(url))), `Missing asset: ${url} on ${route}`);
  }
  for (const image of document.querySelectorAll('[srcset], [imagesrcset]')) {
    const candidates = image.getAttribute('srcset') || image.getAttribute('imagesrcset');
    for (const candidate of candidates.split(',')) {
      const url = candidate.trim().split(/\s+/)[0];
      assert(fs.existsSync(path.join('build', decodeURI(url))), `Missing responsive image: ${url}`);
    }
  }
  for (const element of document.querySelectorAll('[style]')) {
    for (const match of element.getAttribute('style').matchAll(/url\((?:"([^"]+)"|'([^']+)'|([^()]+))\)/g)) {
      const asset = match[1] || match[2] || match[3];
      if (asset.startsWith('/')) assert(fs.existsSync(path.join('build', decodeURI(asset))), `Missing background: ${asset} on ${route}`);
    }
  }
  const robots = document.querySelector('meta[name="robots"]').content;
  assert.equal(robots.includes('noindex'), preview || route === '/404', `Indexing policy mismatch on ${route}`);
  if (route === '/') assert(!document.querySelector('video'), 'Initial home HTML must not load a video');
}
assert.equal(config.cleanUrls, true);
assert(!config.rewrites?.some(rule => rule.destination === '/index.html'), 'Do not turn unknown routes into soft 404s');
const assets = JSON.parse(fs.readFileSync('build/asset-manifest.json', 'utf8'));
const main = fs.readFileSync(path.join('build', assets.files['main.js'].replace(/^\//, '')));
console.log(`Verified SEO, one H1, structured data and local assets on ${paths.length} pages + 404.`);
console.log(`Main JavaScript: ${(gzipSync(main).length / 1024).toFixed(1)} KB gzip. No initial homepage video.`);

console.log(`Verified ${internalLinks} internal links and unique descriptions across all rendered pages.`);
