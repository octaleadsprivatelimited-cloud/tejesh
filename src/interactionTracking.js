import { trackForm, trackInteraction } from './analytics';
import { normalizePath, pagePaths } from './seo';
const knownPaths = new Set(pagePaths);

export function contactPlacement(link) {
  if (link.closest('.floating-contacts-bottom')) return 'bottom';
  if (link.closest('.floating-contacts-side, .whatsapp-link')) return 'side';
  if (link.closest('header, .topbar')) return 'header';
  if (link.closest('footer')) return 'footer';
  if (link.closest('form')) return 'form';
  if (link.closest('.hero, .landing-hero')) return 'hero';
  return 'page';
}

// Delegated listeners also cover lazy-loaded pages. Only fixed labels and
// existing route paths are measured; input values and link queries are excluded.
export function installInteractionTracking() {
  const removers = [];
  const startedForms = new WeakSet();
  const invalidForms = new WeakSet();
  const videos = new WeakMap();
  const scrollMilestones = new Set();
  const sectionIds = new WeakMap();
  const main = document.getElementById('main-content');
  let nextSection = 0, scrollFrame;
  function listen(target, name, callback, options) {
    target.addEventListener(name, callback, options);
    removers.push(() => target.removeEventListener(name, callback, options));
  }
  function formMethod(form) { return form.classList.contains('whatsapp-lead-form') ? 'whatsapp' : 'formspree'; }
  listen(document, 'focusin', e => {
    const form = e.target.closest?.('form.enquiry-form');
    if (form && !startedForms.has(form) && trackForm('form_start', formMethod(form))) startedForms.add(form);
  });
  listen(document, 'invalid', e => {
    const form = e.target.closest?.('form.enquiry-form');
    if (form && !invalidForms.has(form) && trackForm('form_error', formMethod(form), 'validation')) invalidForms.add(form);
  }, true);
  listen(document, 'input', e => {
    const form = e.target.closest?.('form.enquiry-form');
    if (form) invalidForms.delete(form);
  });
  listen(document, 'click', e => {
    const link = e.target.closest?.('a[href]');
    if (link) {
      const url = new URL(link.href, window.location.href);
      const path = normalizePath(url.pathname);
      if (url.origin === window.location.origin && !url.hash && knownPaths.has(path)) trackInteraction('navigation_click', path);
      if (link.closest('.company-logos')) {
        const company = { 'www.myhomeconstructions.com':'myhome', 'rajapushpa.in':'rajapushpa', 'www.brigadegroup.com':'brigade', 'www.prestigeconstructions.com':'prestige' }[url.hostname];
        if (company) trackInteraction('company_logo_click', company);
      }
    }
    const button = e.target.closest?.('button');
    if (button?.closest('.filters')) trackInteraction('gallery_filter', button.textContent.trim());
  });
  listen(document, 'toggle', e => {
    if (e.target.matches?.('main details[open]')) trackInteraction('faq_open', Array.from(document.querySelectorAll('main details')).indexOf(e.target));
  }, true);
  function measureScroll() {
    scrollFrame = undefined;
    const available = document.documentElement.scrollHeight - window.innerHeight;
    if (available <= 0) return;
    const percent = (window.scrollY / available) * 100;
    for (const milestone of [25,50,75,90]) {
      if (percent >= milestone && !scrollMilestones.has(milestone) && trackInteraction('scroll_depth', milestone)) scrollMilestones.add(milestone);
    }
  }
  listen(window, 'scroll', () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(measureScroll); }, { passive:true });
  function videoState(video) {
    if (!videos.has(video)) videos.set(video, { started:false, complete:false, progress:new Set() });
    return videos.get(video);
  }
  for (const type of ['playing','pause','ended','error','timeupdate']) {
    listen(document, type, e => {
      const video = e.target;
      if (!video.matches?.('.product-demo video')) return;
      const state = videoState(video);
      if (type === 'playing' && !state.started && trackInteraction('video_start')) state.started = true;
      if (type === 'pause' && state.started && !video.ended) trackInteraction('video_pause');
      if (type === 'error') trackInteraction('video_error');
      if (type === 'ended' && !state.complete && trackInteraction('video_complete')) state.complete = true;
      if (type !== 'timeupdate' || !Number.isFinite(video.duration) || video.duration <= 0) return;
      const percent = video.currentTime / video.duration * 100;
      for (const milestone of [25,50,75]) {
        if (percent >= milestone && !state.progress.has(milestone) && trackInteraction('video_progress', milestone)) state.progress.add(milestone);
      }
      // Native loop playback does not fire "ended"; count completion near the end.
      if (percent >= 95 && !state.complete && trackInteraction('video_complete')) state.complete = true;
    }, true);
  }
  const observer = main && typeof IntersectionObserver === 'function' ? new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting && trackInteraction('section_view', sectionIds.get(entry.target))) observer.unobserve(entry.target);
    }
  }, { threshold:.15 }) : null;
  function observeSections() {
    main?.querySelectorAll('section.section-panel, section.hero').forEach(section => {
      if (sectionIds.has(section)) return;
      sectionIds.set(section, `section_${++nextSection}`);
      observer?.observe(section);
    });
  }
  observeSections();
  const mutations = observer && typeof MutationObserver === 'function' ? new MutationObserver(observeSections) : null;
  mutations?.observe(main, { childList:true, subtree:true });
  return () => { removers.forEach(remove => remove()); cancelAnimationFrame(scrollFrame); observer?.disconnect(); mutations?.disconnect(); };
}
