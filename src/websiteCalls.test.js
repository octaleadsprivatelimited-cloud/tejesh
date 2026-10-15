import { createWebsiteCalls } from './websiteCalls';

afterEach(() => { document.body.innerHTML = ''; });

test('updates phone links and visible numbers while preserving Call Now labels and WhatsApp', async () => {
  document.body.innerHTML = '<a href="tel:+919949360406"><svg></svg>Call Now</a><p>Call +91 9949360406</p><a href="https://wa.me/919949360406">+91 9949360406</a>';
  const tag = jest.fn();
  const calls = createWebsiteCalls(window, 'AW-123/test', tag);
  calls.start(); calls.start();
  expect(tag).toHaveBeenCalledTimes(1);
  expect(tag.mock.calls[0].slice(0, 2)).toEqual(['config', 'AW-123/test']);
  const callback = tag.mock.calls[0][2].phone_conversion_callback;
  callback('1800 123 4567', '18001234567');
  expect(document.querySelector('a').getAttribute('href')).toBe('tel:+18001234567');
  expect(document.querySelector('a').textContent).toBe('Call Now');
  expect(document.querySelector('svg')).not.toBeNull();
  expect(document.querySelector('p').textContent).toBe('Call 1800 123 4567');
  expect(document.querySelector('a[href^="https:"]').textContent).toBe('+91 9949360406');
  const link = document.createElement('a'); link.href = 'tel:9949360406'; link.textContent = 'Call Now'; document.body.appendChild(link);
  await new Promise(resolve => setTimeout(resolve, 0));
  expect(link.getAttribute('href')).toBe('tel:+18001234567');
  calls.stop();
  expect(document.querySelector('a').getAttribute('href')).toBe('tel:+919949360406');
  expect(document.querySelector('p').textContent).toBe('Call +91 9949360406');
  expect(link.getAttribute('href')).toBe('tel:9949360406');
  callback('1800 999 9999', '18009999999');
  expect(link.getAttribute('href')).toBe('tel:9949360406');
});

test('invalid and stale forwarding responses cannot change the dialled number', () => {
  document.body.innerHTML = '<a href="tel:+919949360406">+91 9949360406</a>';
  const tag = jest.fn(); const calls = createWebsiteCalls(window, 'AW-123/test', tag);
  calls.start(); const oldCallback = tag.mock.calls[0][2].phone_conversion_callback;
  oldCallback('<script>bad</script>', '123');
  expect(document.querySelector('a').getAttribute('href')).toBe('tel:+919949360406');
  calls.stop(); calls.start();
  oldCallback('1800 123 4567', '18001234567');
  expect(document.querySelector('a').getAttribute('href')).toBe('tel:+919949360406');
  calls.stop();
});
