import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getPageSEO } from '../seo';

export default function SEO() {
  const { pathname } = useLocation();
  const page = getPageSEO(pathname);
  const robots = page.noindex || process.env.REACT_APP_NOINDEX === 'true'
    ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';
  return (
    <Helmet>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="keywords" content={page.keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={page.url} />
      <meta property="og:type" content={page.article ? 'article' : 'website'} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={page.url} />
      <meta property="og:image" content={page.image} />
      <meta property="og:image:alt" content={page.imageAlt} />
      <meta property="og:site_name" content="Tejesh Profine" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={page.image} />
      <script type="application/ld+json">{JSON.stringify(page.schema).replace(/</g, '\\u003c')}</script>
    </Helmet>
  );
}
