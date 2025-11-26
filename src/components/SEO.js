import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Tejesh Profine - #1 uPVC Windows & Aluminium Doors in Chittor, Tirupathi | Kommerling Partner",
  description = "Tejesh Profine - #1 uPVC Windows & Aluminium Doors in Chittor, Tirupathi. Established 2025. Premium Kommerling uPVC windows, energy-efficient aluminium doors. Free quotes, expert installation across Chittor District. Call +91 9949360406",
  keywords = "uPVC windows Chittor, aluminium windows Tirupathi, uPVC doors Chittor District, aluminium doors Tirupathi, Kommerling uPVC windows, sliding systems Chittor, facade solutions Tirupathi, windows and doors Chittor, energy efficient windows Tirupathi, uPVC windows near me, aluminium windows Chittor, best uPVC windows Tirupathi, premium windows Chittor District, window installation Chittor, door installation Tirupathi, Tejesh Profine",
  ogImage = "/og-image.jpg",
  url = "https://tejeshprofine.com",
  type = "website",
  schema = null
}) => {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tejesh Profine",
    "description": "Premium uPVC windows and aluminium doors manufacturer and installer in Chittor District, Tirupathi. Authorized Kommerling partner with expert installation services.",
    "url": "https://tejeshprofine.com",
    "telephone": "+91-9949360406",
    "email": "info@tejeshprofine.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tirupathi",
      "addressLocality": "Chittor District",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.6288",
      "longitude": "79.4192"
    },
    "openingHours": "Mo-Sa 09:00-18:00",
    "priceRange": "$$",
    "image": "https://tejeshprofine.com/og-image.jpg",
    "founder": {
      "@type": "Person",
      "name": "V. Venkatesulu"
    },
    "foundingDate": "2025",
    "areaServed": ["Chittor District", "Tirupathi", "Andhra Pradesh"]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Tejesh Profine" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {!schema && (
        <script type="application/ld+json">
          {JSON.stringify(defaultSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

