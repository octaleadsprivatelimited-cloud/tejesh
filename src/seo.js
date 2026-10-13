import site from './data/site.json';
import posts from './data/blogPosts';
import landings from './data/landingPages.json';

export const origin = (process.env.REACT_APP_SITE_URL || site.origin).replace(/\/$/, '');
export const absoluteUrl = path => new URL(path, `${origin}/`).href;
export const normalizePath = path => path.replace(/\/+$/, '') || '/';
export const pagePaths = [...Object.keys(site.routes), ...posts.map(post => `/blog/${post.id}`)];

export function getPageSEO(pathname) {
  const path = normalizePath(pathname);
  const article = posts.find(post => path === `/blog/${post.id}`);
  const route = site.routes[path];
  const missing = !route && !article;
  const title = article ? `${article.title} | ${site.name}` : route?.title || `Page Not Found | ${site.name}`;
  const description = article?.excerpt || route?.description || 'This page could not be found. Explore our windows, doors and installation services.';
  const url = absoluteUrl(path);
  const service = landings.find(item => path === `/${item.slug}` || path === `/landing/${item.slug}`);
  const image = absoluteUrl(article?.image || service?.image || site.image);
  const businessId = `${origin}/#business`;
  const graph = [
    { '@type': 'LocalBusiness', '@id': businessId, name: site.name,
      url: `${origin}/`, telephone: site.phone, email: site.email, image: absoluteUrl(site.image),
      address: { '@type': 'PostalAddress', ...site.address },
      hasMap: site.mapsUrl,
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: site.openingHours.days, opens: site.openingHours.opens, closes: site.openingHours.closes }],
      areaServed: ['Andhra Pradesh', 'Tamil Nadu', 'Karnataka'].map(name => ({ '@type': 'State', name })) },
    { '@type': 'WebSite', '@id': `${origin}/#website`, name: site.name, url: `${origin}/`, publisher: { '@id': businessId } },
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description,
      isPartOf: { '@id': `${origin}/#website` }, about: { '@id': businessId }, inLanguage: 'en-IN' },
  ];
  if (path !== '/' && !missing) {
    const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') }];
    if (article) crumbs.push({ '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog') });
    crumbs.push({ '@type': 'ListItem', position: crumbs.length + 1, name: article?.title || title.split(' | ')[0], item: url });
    graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumbs`, itemListElement: crumbs });
  }
  if (article) graph.push({ '@type': 'BlogPosting', '@id': `${url}#article`, headline: article.title,
    description, image, datePublished: article.date, author: { '@type': 'Organization', name: article.author },
    publisher: { '@id': businessId }, mainEntityOfPage: { '@id': `${url}#webpage` } });
  const services = ['/upvc-windows', '/upvc-doors', '/aluminium-windows', '/aluminium-doors', '/sliding-systems', '/facade-solutions', '/installation', '/maintenance'];
  if (services.includes(path) || (path.startsWith('/landing/') && path !== '/landing/services' && !missing)) graph.push({ '@type': 'Service', name: title.split(' | ')[0], description,
    url, provider: { '@id': businessId }, areaServed: { '@type': 'AdministrativeArea', name: 'Andhra Pradesh' } });
  if (path.startsWith('/landing/') && service?.faq?.length) graph.push({ '@type': 'FAQPage', '@id': `${url}#questions`, mainEntity: service.faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) });
  return { title, description, keywords: route?.keywords || article?.category || '', url, image,
    imageAlt: article?.title || (service ? `${service.title} collection reference` : 'Tejesh Profine windows and doors'), article, noindex: missing,
    schema: { '@context': 'https://schema.org', '@graph': graph } };
}
