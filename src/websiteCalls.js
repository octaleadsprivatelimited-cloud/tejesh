function normalizePhone(value) {
  const digits = String(value || '').replace(/\D/g, '');
  return `+${digits.length === 10 ? '91' : ''}${digits}`;
}

const BUSINESS_PHONE = '+919949360406';
const DISPLAY_PHONE = '+91 9949360406';
const PHONE_TEXT = /(?:\+?91[\s-]*)?99493[\s-]*60406/g;

// Keep React's elements, labels and SVGs intact while replacing phone text/hrefs.
export function createWebsiteCalls(browser, destination, gtag) {
  let enabled = false;
  let generation = 0;
  let forwarding;
  let observer;
  const links = new Map();
  const texts = new Map();

  function replaceNumbers() {
    const document = browser?.document;
    if (!enabled || !forwarding || !document?.body || !document.querySelectorAll) return;
    for (const [element] of links) if (!element.isConnected) links.delete(element);
    for (const [node] of texts) if (!node.isConnected) texts.delete(node);
    for (const link of document.querySelectorAll('a[href^="tel:"]')) {
      const href = link.getAttribute('href');
      if (!links.has(link) && normalizePhone(href.slice(4)) !== BUSINESS_PHONE) continue;
      if (!links.has(link)) links.set(link, href);
      if (href !== `tel:${forwarding.mobile}`) link.setAttribute('href', `tel:${forwarding.mobile}`);
    }
    const walker = document.createTreeWalker(document.body, browser.NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement?.closest('script, style, textarea, [data-no-call-tracking], a[href*="wa.me"], a[href*="api.whatsapp.com"]')) continue;
      const original = texts.get(node) ?? node.nodeValue;
      const next = original.replace(PHONE_TEXT, forwarding.formatted);
      if (next !== original && !texts.has(node)) texts.set(node, original);
      if (node.nodeValue !== next) node.nodeValue = next;
    }
  }

  function stop() {
    enabled = false;
    generation += 1;
    observer?.disconnect();
    observer = undefined;
    forwarding = undefined;
    for (const [link, href] of links) link.setAttribute('href', href);
    for (const [node, text] of texts) node.nodeValue = text;
    links.clear();
    texts.clear();
  }

  function start() {
    if (enabled || !browser || !destination) return;
    enabled = true;
    const version = ++generation;
    gtag('config', destination, {
      phone_conversion_number: DISPLAY_PHONE,
      phone_conversion_callback(formatted, mobile) {
        if (!enabled || version !== generation || !/^[+\d ()-]{7,30}$/.test(formatted || '')) return;
        const digits = String(mobile || '').replace(/\D/g, '');
        if (!/^[1-9]\d{7,14}$/.test(digits)) return;
        forwarding = { formatted, mobile: `+${digits}` };
        replaceNumbers();
        if (!observer && browser.MutationObserver && browser.document.body) {
          observer = new browser.MutationObserver(replaceNumbers);
          observer.observe(browser.document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['href'] });
        }
      },
      phone_conversion_options: { timeout: 5000 },
    });
  }

  return { start, stop };
}
