import site from './data/site.json';
import { getPageSEO, normalizePath, pagePaths } from './seo';
import landings from './data/landingPages.json';

const consentKey = 'tejesh-consent-v1';
const denied = { analytics: false, advertising: false };
const gaId = process.env.REACT_APP_GA4_ID || '';
const clarityId = process.env.REACT_APP_CLARITY_ID || '';
const adsId = process.env.REACT_APP_GOOGLE_ADS_ID || '';
const validGa = /^G-[A-Z0-9]+$/.test(gaId);
const validClarity = /^[a-z0-9]+$/.test(clarityId);
const validAds = /^AW-\d+$/.test(adsId);
const knownPaths = new Set(pagePaths);
const knownCampaigns = new Set(['tirupati','bengaluru','hyderabad',...landings.map(service => service.slug.replace(/-/g, '_'))].map(name => `tejesh_${name}`));
let active = denied;
let googleStarted = false;
let clarityStarted = false;
let gaConfigured = false;
let adsConfigured = false;
let previousPage = '';
function acquisition() {
  const query = new URLSearchParams(window.location.search);
  const campaign = query.get('utm_campaign');
  if (query.get('utm_source') === 'google' && query.get('utm_medium') === 'cpc' && knownCampaigns.has(campaign)) return { campaign_source: 'google', campaign_medium: 'cpc', campaign_name: campaign };
  return {};
}
function referringOrigin() {
  try { return new URL(document.referrer).origin + '/'; } catch { return ''; }
}
function measurementUrl(pathname) {
  const page = getPageSEO(pathname);
  const url = new URL(page.noindex ? new URL('/404', page.url).href : page.url);
  // Only Google click identifiers are retained, and only with advertising consent.
  // Never forward arbitrary landing-page parameters or WhatsApp message text.
  if (active.advertising) {
    const query = new URLSearchParams(window.location.search);
    for (const key of ['gclid', 'gbraid', 'wbraid']) {
      const value = query.get(key);
      if (value && /^[A-Za-z0-9_-]{20,512}$/.test(value)) url.searchParams.set(key, value);
    }
  }
  return url.href;
}

export function trackingAvailable() {
  if (typeof window === 'undefined' || process.env.REACT_APP_NOINDEX === 'true' || process.env.REACT_APP_TRACKING_ENABLED !== 'true') return false;
  const host = new URL(process.env.REACT_APP_SITE_URL || site.origin).hostname.replace(/^www\./, '');
  return window.location.hostname.replace(/^www\./, '') === host && (validGa || validClarity || validAds);
}
export function readConsent() {
  try {
    const value = JSON.parse(localStorage.getItem(consentKey));
    if (value && Date.now() - value.saved < 180 * 86400000 && typeof value.analytics === 'boolean' && typeof value.advertising === 'boolean') return value;
  } catch { /* Storage can be unavailable in privacy mode. */ }
  return null;
}
function gtag() { window.dataLayer.push(arguments); }
function script(id, src) {
  if (document.getElementById(id)) return;
  const element = document.createElement('script'); element.id = id; element.src = src; element.async = true;
  document.head.appendChild(element);
}
function googleConsent(value) {
  return { analytics_storage: value.analytics ? 'granted' : 'denied', ad_storage: value.advertising ? 'granted' : 'denied', ad_user_data: value.advertising ? 'granted' : 'denied', ad_personalization: 'denied' };
}
export function applyConsent(value) {
  active = value || denied;
  if (!trackingAvailable()) return;
  if (!googleStarted && ((active.analytics && validGa) || (active.advertising && validAds))) {
    window.dataLayer = window.dataLayer || [];
    gtag('consent', 'default', googleConsent(denied));
    gtag('set', 'ads_data_redaction', true);
    gtag('js', new Date());

    googleStarted = true;
    script('tejesh-google-tag', `https://www.googletagmanager.com/gtag/js?id=${validGa ? gaId : adsId}`);
  }
  if (googleStarted) gtag('consent', 'update', googleConsent(active));
  if (googleStarted && active.analytics && validGa && !gaConfigured) {
    gtag('config', gaId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, page_location: measurementUrl(window.location.pathname), page_referrer: referringOrigin(), ...acquisition() }); gaConfigured = true;
  }
  if (googleStarted && active.advertising && validAds && !adsConfigured) {
    gtag('config', adsId, { send_page_view: false, allow_ad_personalization_signals: false, page_location: measurementUrl(window.location.pathname), page_referrer: referringOrigin() }); adsConfigured = true;
  }
  if (active.analytics && validClarity && !clarityStarted) {
    window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
    window.clarity('consentv2', { analytics_Storage: 'granted', ad_Storage: active.advertising ? 'granted' : 'denied' });
    script('tejesh-clarity', `https://www.clarity.ms/tag/${clarityId}`);
    clarityStarted = true;
  } else if (clarityStarted) window.clarity('consentv2', { analytics_Storage: active.analytics ? 'granted' : 'denied', ad_Storage: active.advertising ? 'granted' : 'denied' });
}
export function saveConsent(value) {
  const reload = (active.analytics && !value.analytics) || (active.advertising && !value.advertising);
  try { localStorage.setItem(consentKey, JSON.stringify({ ...value, saved: Date.now() })); } catch { /* Keep the choice for this page if storage is blocked. */ }
  applyConsent(value);
  // A reload unloads already-running third-party scripts after withdrawal.
  if (reload) window.location.reload();
}
export function trackPage(pathname) {
  if (!trackingAvailable() || !active.analytics || !validGa || !googleStarted) return;
  const page = getPageSEO(pathname);
  const canonical = page.noindex ? new URL('/404', page.url).href : page.url;
  if (previousPage === canonical) return;
  const context = { page_title: page.title, page_location: page.noindex ? canonical : measurementUrl(pathname), page_referrer: previousPage || referringOrigin() };
  // Keep automatic session/engagement events on the current virtual page too.
  gtag('set', context);
  gtag('event', 'page_view', { send_to: gaId, ...context });
  previousPage = canonical;
}
function event(name, parameters) {
  if (!trackingAvailable() || !active.analytics || !validGa || !googleStarted) return false;
  const path = normalizePath(window.location.pathname);
  if (!knownPaths.has(path)) return false;
  gtag('event', name, { send_to: gaId, page_location: measurementUrl(path), page_path: path, ...parameters });
  return true;
}
export function trackContact(action, placement = 'page') {
  if (!trackingAvailable()) return;
  const allowed = ['generate_lead', 'whatsapp_click', 'whatsapp_form_open', 'phone_click', 'map_click', 'email_click'];
  if (!allowed.includes(action)) return;
  const path = normalizePath(window.location.pathname);
  if (!knownPaths.has(path)) return;
  // Never pass form values, link URLs, query strings, phone numbers or email addresses.
  return event(action, { contact_method: action === 'generate_lead' ? 'formspree' : action.replace(/_(click|form_open)$/, ''), placement: ['header','footer','side','bottom','hero','form','page'].includes(placement) ? placement : 'page' });
}
export function trackForm(action, method, errorType) {
  if (!['form_start','form_submit','form_error'].includes(action) || !['formspree','whatsapp'].includes(method)) return false;
  const parameters = { form_id: method, contact_method: method };
  if (action === 'form_error') parameters.error_type = ['validation','network','timeout','rate_limit','service','unavailable'].includes(errorType) ? errorType : 'service';
  return event(action, parameters);
}
export function trackInteraction(action, detail) {
  if (action === 'navigation_click' && knownPaths.has(detail)) return event(action, { destination_path: detail });
  if (action === 'scroll_depth' && [25,50,75,90].includes(detail)) return event(action, { percent_scrolled: detail });
  if (action === 'section_view' && /^section_\d{1,3}$/.test(detail)) return event(action, { section_id: detail });
  if (action === 'gallery_filter' && ['All','Windows','Doors','Systems'].includes(detail)) return event(action, { filter_name: detail });
  if (action === 'menu_toggle' && ['open','close'].includes(detail)) return event(action, { menu_state: detail });
  if (action === 'faq_open' && Number.isInteger(detail) && detail >= 0 && detail < 100) return event(action, { question_index: detail });
  if (action === 'company_logo_click' && ['myhome','rajapushpa','brigade','prestige'].includes(detail)) return event(action, { company_id: detail });
  if (['video_start','video_complete','video_pause','video_error'].includes(action)) return event(action, { video_id: 'product_demo' });
  if (action === 'video_progress' && [25,50,75].includes(detail)) return event(action, { video_id: 'product_demo', video_percent: detail });
  return false;
}
export function contactAction(href) {
  try {
    const url = new URL(href, site.origin);
    if (url.protocol === 'tel:') return 'phone_click';
    if (url.protocol === 'mailto:') return 'email_click';
    if (url.hostname === 'wa.me' || url.hostname === 'api.whatsapp.com') return 'whatsapp_click';
    if ((url.hostname === 'www.google.com' || url.hostname === 'google.com') && url.pathname.startsWith('/maps')) return 'map_click';
  } catch { /* Invalid links have no measurement. */ }
  return null;
}
