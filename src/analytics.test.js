function load() {
  jest.resetModules();
  process.env.REACT_APP_TRACKING_ENABLED = 'true';
  process.env.REACT_APP_SITE_URL = 'http://localhost';
  process.env.REACT_APP_GA4_ID = 'G-TEST123';
  process.env.REACT_APP_CLARITY_ID = 'test123';
  process.env.REACT_APP_GOOGLE_ADS_ID = 'AW-123456';
  process.env.REACT_APP_ADS_LEAD_LABEL = 'testLabel';
  return require('./analytics');
}
beforeEach(() => { document.head.innerHTML = ''; delete window.dataLayer; delete window.clarity; localStorage.clear(); window.history.replaceState({}, '', '/'); });
afterEach(() => { ['TRACKING_ENABLED','SITE_URL','GA4_ID','CLARITY_ID','GOOGLE_ADS_ID','ADS_LEAD_LABEL'].forEach(key => delete process.env[`REACT_APP_${key}`]); });
test('no third-party scripts or events before permission', () => {
  const a = load(); a.applyConsent(null); a.trackContact('generate_lead');
  expect(document.querySelectorAll('script')).toHaveLength(0); expect(window.dataLayer).toBeUndefined();
});
test('analytics consent measures clean route transitions without advertising or form values', () => {
  const a = load(); a.applyConsent({ analytics: true, advertising: false });
  window.history.replaceState({}, '', '/contact?email=private@example.com&phone=12345678');
  a.trackPage('/contact'); a.trackPage('/contact'); a.trackPage('/landing/services'); a.trackContact('whatsapp_form_open');
  const commands = window.dataLayer.map(args => Array.from(args));
  expect(commands.filter(c => c[1] === 'page_view')).toHaveLength(2);
  expect(commands.some(c => c[0] === 'config' && c[1] === 'AW-123456')).toBe(false);
  expect(JSON.stringify(commands)).not.toMatch(/private@example|12345678|\?email/);
  expect(window.clarity.q[0][0]).toBe('consentv2');
});
test('contact intent and form enquiries never count as completed Ads calls', () => {
  const a = load(); a.applyConsent({ analytics: true, advertising: true });
  a.trackContact('whatsapp_form_open'); a.trackContact('phone_click'); a.trackContact('generate_lead');
  expect(window.dataLayer.map(args => Array.from(args)).filter(c => c[1] === 'conversion')).toEqual([]);
});
test('production integration stays off on other hosts and rejects stale consent', () => {
  const a = load(); process.env.REACT_APP_SITE_URL = 'https://tejeshprofine.com';
  a.applyConsent({analytics:true,advertising:true}); expect(document.querySelectorAll('script')).toHaveLength(0);
  localStorage.setItem('tejesh-consent-v1', JSON.stringify({ analytics: true, advertising: true, saved: 1 })); expect(a.readConsent()).toBeNull();
});
test('classifies contact actions without exposing target URLs', () => {
  const a=load(); expect(a.contactAction('https://wa.me/123?text=private')).toBe('whatsapp_click');
  expect(a.contactAction('tel:+919949360406')).toBe('phone_click'); expect(a.contactAction('/services')).toBeNull();
});

test('keeps controlled campaign attribution without forwarding arbitrary query values', () => {
  const a = load(); window.history.replaceState({}, '', '/landing/services?utm_source=google&utm_medium=cpc&utm_campaign=tejesh_hyderabad&email=private@example.com');
  a.applyConsent({analytics:true,advertising:false});
  const config=window.dataLayer.map(args=>Array.from(args)).find(c=>c[0]==='config' && c[1]==='G-TEST123');
  expect(config[2].campaign_name).toBe('tejesh_hyderabad'); expect(JSON.stringify(config)).not.toContain('private@example.com');
});

test('Google click attribution requires advertising consent and excludes enquiry parameters', () => {
  const a = load();
  window.history.replaceState({}, '', '/landing/services?gclid=ABCDEFGHIJKLMNOPQRSTUVWXYZ012345&email=private@example.com&text=PrivateMessage');
  a.applyConsent({analytics:true,advertising:false}); a.trackPage('/landing/services');
  expect(JSON.stringify(window.dataLayer)).not.toContain('ABCDEFGHIJKLMNOPQRSTUVWXYZ012345');
  a.applyConsent({analytics:true,advertising:true}); a.trackContact('phone_click','bottom');
  const commands = window.dataLayer.map(args => Array.from(args));
  const contact = commands.find(c => c[1] === 'phone_click');
  expect(contact[2].page_location).toContain('?gclid=ABCDEFGHIJKLMNOPQRSTUVWXYZ012345');
  expect(contact[2].placement).toBe('bottom');
  expect(JSON.stringify(commands)).not.toMatch(/private@example|PrivateMessage/);
});

test('tracks article actions, sanitizes missing-page URLs and updates virtual-page context', () => {
  const a = load(); a.applyConsent({analytics:true,advertising:false});
  const {pagePaths} = require('./seo');
  const article = pagePaths.find(path => path.startsWith('/blog/'));
  window.history.replaceState({}, '', article); a.trackPage(article); a.trackContact('phone_click');
  window.history.replaceState({}, '', '/private@example.com'); a.trackPage('/private@example.com');
  const commands = window.dataLayer.map(args => Array.from(args));
  expect(commands.filter(c => c[1] === 'phone_click')).toHaveLength(1);
  expect(commands.filter(c => c[0] === 'set' && c[1]?.page_location)).toHaveLength(2);
  expect(commands.filter(c => c[1] === 'page_view').at(-1)[2].page_location).toBe('http://localhost/404');
  expect(JSON.stringify(commands)).not.toContain('private@example.com');
});

test('measurement contract rejects arbitrary strings, user values and unknown routes', () => {
  const a = load(); a.applyConsent({analytics:true,advertising:true});
  a.trackForm('form_error','formspree','network'); a.trackInteraction('video_progress',50);
  a.trackInteraction('navigation_click','/contact'); a.trackInteraction('gallery_filter','Windows');
  a.trackInteraction('navigation_click','/private@example.com'); a.trackInteraction('gallery_filter','PrivateMessage');
  a.trackInteraction('video_progress',999); a.trackForm('form_error','private@example.com','network');
  const events = window.dataLayer.map(args => Array.from(args)).filter(c => c[0] === 'event');
  expect(events.map(c => c[1])).toEqual(['form_error','video_progress','navigation_click','gallery_filter']);
  expect(JSON.stringify(events)).not.toMatch(/private@example|PrivateMessage|999/);
  expect(events.some(c => c[1] === 'conversion')).toBe(false);
});
