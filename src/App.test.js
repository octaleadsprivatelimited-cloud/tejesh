import { getPageSEO, pagePaths } from './seo';

test('service pages have distinct canonical URLs and service structured data', () => {
  const page = getPageSEO('/upvc-windows/');
  expect(page.url).toBe('https://tejeshprofine.com/upvc-windows');
  expect(page.title).toContain('Kommerling uPVC Windows');
  expect(page.schema['@graph'].some(item => item['@type'] === 'Service')).toBe(true);
});

test('articles get article metadata and unknown routes are noindex', () => {
  expect(getPageSEO('/blog/1').schema['@graph'].some(item => item['@type'] === 'BlogPosting')).toBe(true);
  expect(getPageSEO('/blog/999').noindex).toBe(true);
  expect(getPageSEO('/blog/1abc').noindex).toBe(true);
  expect(getPageSEO('/missing').noindex).toBe(true);
  expect(new Set(pagePaths).size).toBe(38);
});
