const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const app = require('../server');
let server, base;
before(async () => {
  server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  base = `http://127.0.0.1:${server.address().port}`;
});
after(() => new Promise(resolve => server.close(resolve)));

test('deep links serve their own crawlable HTML', async () => {
  for (const route of ['/services', '/upvc-windows', '/blog/6', '/landing/services', '/landing/upvc-windows', '/landing/maintenance']) {
    const response = await fetch(`${base}${route}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert(html.includes(`rel="canonical" href="https://tejeshprofine.com${route}"`));
    assert(html.includes('<h1'));
  }
});
test('unknown pages, articles and assets return genuine 404s', async () => {
  for (const route of ['/does-not-exist', '/blog/999', '/missing.js', '/api/missing', '/landing/unknown-service']) {
    assert.equal((await fetch(`${base}${route}`)).status, 404);
  }
});
test('old location URLs redirect to existing service pages', async () => {
  const response = await fetch(`${base}/upvc-windows-tirupathi`, { redirect: 'manual' });
  assert.equal(response.status, 308); assert.equal(response.headers.get('location'), '/upvc-windows');
});
test('catalog API and cache policy work', async () => {
  const response = await fetch(`${base}/api/services`);
  assert.equal(response.status, 200); assert.equal((await response.json()).length, 6);
  assert(response.headers.get('cache-control').includes('s-maxage=3600'));
  assert.equal((await fetch(`${base}/api/services`, { method: 'POST' })).status, 405);
});
test('retired SMTP endpoint returns a clear migration response', async () => {
 const response = await fetch(`${base}/api/contact`, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:'Test Person'})});
 assert.equal(response.status,410); assert.equal((await response.json()).success,false);
});
test('legal pages, favicon and retired reviews URL resolve correctly', async () => {
  for (const route of ['/privacy-policy','/terms-of-service','/icons/icon-32.png']) assert.equal((await fetch(`${base}${route}`)).status,200);
  const redirect = await fetch(`${base}/testimonials`, {redirect:'manual'});
  assert.equal(redirect.status,308); assert.equal(redirect.headers.get('location'),'/contact');
  assert.deepEqual(await (await fetch(`${base}/api/testimonials`)).json(),[]);
});
