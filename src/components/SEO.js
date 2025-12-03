import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Tejesh Profine - Top uPVC Industry | uPVC Manufacturers & Suppliers in Andhra Pradesh, Tamil Nadu, Karnataka",
  description = "Tejesh Profine - Leading uPVC industry manufacturer and supplier across Andhra Pradesh, Tamil Nadu, Karnataka. Premium Kommerling uPVC windows, doors, and facade solutions. Expert installation, energy-efficient products. Free quotes. Call +91 9949360406",
  keywords = "uPVC industry Andhra Pradesh, uPVC industry Tamil Nadu, uPVC industry Karnataka, uPVC manufacturers Andhra Pradesh, uPVC manufacturers Tamil Nadu, uPVC manufacturers Karnataka, uPVC suppliers Andhra Pradesh, uPVC suppliers Tamil Nadu, uPVC suppliers Karnataka, uPVC companies Andhra Pradesh, uPVC companies Tamil Nadu, uPVC companies Karnataka, uPVC dealers Andhra Pradesh, uPVC dealers Tamil Nadu, uPVC dealers Karnataka, uPVC windows Andhra Pradesh, uPVC windows Tamil Nadu, uPVC windows Karnataka, uPVC doors Andhra Pradesh, uPVC doors Tamil Nadu, uPVC doors Karnataka, Kommerling uPVC Andhra Pradesh, Kommerling uPVC Tamil Nadu, Kommerling uPVC Karnataka, uPVC industry Hyderabad, uPVC industry Chennai, uPVC industry Bangalore, uPVC industry Visakhapatnam, uPVC industry Vijayawada, uPVC industry Coimbatore, uPVC industry Madurai, uPVC industry Mysore, uPVC industry Tirupati, uPVC windows Hyderabad, uPVC windows Chennai, uPVC windows Bangalore, uPVC windows Visakhapatnam, uPVC windows Vijayawada, uPVC windows Guntur, uPVC windows Kakinada, uPVC windows Rajahmundry, uPVC windows Nellore, uPVC windows Kadapa, uPVC windows Anantapur, uPVC windows Eluru, uPVC windows Kurnool, uPVC windows Chittoor, uPVC windows Ongole, uPVC windows Coimbatore, uPVC windows Trichy, uPVC windows Salem, uPVC windows Tirunelveli, uPVC windows Erode, uPVC windows Vellore, uPVC windows Thanjavur, uPVC windows Dindigul, uPVC windows Hosur, uPVC windows Hubli, uPVC windows Mangalore, uPVC windows Belgaum, uPVC windows Gulbarga, uPVC windows Davanagere, uPVC windows Bellary, uPVC windows Tumkur, uPVC windows Shimoga, uPVC doors Hyderabad, uPVC doors Chennai, uPVC doors Bangalore, uPVC doors Visakhapatnam, uPVC doors Vijayawada, uPVC doors Guntur, uPVC doors Coimbatore, uPVC doors Madurai, uPVC doors Mysore, uPVC manufacturers Hyderabad, uPVC manufacturers Chennai, uPVC manufacturers Bangalore, uPVC manufacturers Visakhapatnam, uPVC manufacturers Vijayawada, uPVC manufacturers Coimbatore, uPVC suppliers Hyderabad, uPVC suppliers Chennai, uPVC suppliers Bangalore, uPVC suppliers Visakhapatnam, uPVC suppliers Vijayawada, uPVC suppliers Coimbatore, best uPVC manufacturers South India, top uPVC suppliers South India, uPVC industry near me, uPVC manufacturing companies, uPVC window manufacturers, uPVC door manufacturers, energy efficient uPVC products, premium uPVC solutions",
  ogImage = "/gallery/tejesh profine chittor kommerling.jpg",
  url = "https://tejeshprofine.com",
  type = "website",
  schema = null
}) => {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    "name": "Tejesh Profine",
    "description": "Leading uPVC industry manufacturer and supplier of premium Kommerling uPVC windows, doors, and facade solutions across Andhra Pradesh, Tamil Nadu, and Karnataka. Expert installation services with energy-efficient products.",
    "url": "https://tejeshprofine.com",
    "telephone": "+91-9949360406",
    "email": "info@tejeshprofine.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tirupathi",
      "addressLocality": "Chittoor District",
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
    "image": "https://tejeshprofine.com/gallery/tejesh profine chittor kommerling.jpg",
    "founder": {
      "@type": "Person",
      "name": "V. Venkatesulu"
    },
    "foundingDate": "2025",
    "areaServed": [
      {"@type": "State", "name": "Andhra Pradesh"},
      {"@type": "State", "name": "Tamil Nadu"},
      {"@type": "State", "name": "Karnataka"},
      {"@type": "City", "name": "Hyderabad"},
      {"@type": "City", "name": "Chennai"},
      {"@type": "City", "name": "Bangalore"},
      {"@type": "City", "name": "Visakhapatnam"},
      {"@type": "City", "name": "Vijayawada"},
      {"@type": "City", "name": "Guntur"},
      {"@type": "City", "name": "Tirupati"},
      {"@type": "City", "name": "Kakinada"},
      {"@type": "City", "name": "Rajahmundry"},
      {"@type": "City", "name": "Nellore"},
      {"@type": "City", "name": "Kadapa"},
      {"@type": "City", "name": "Anantapur"},
      {"@type": "City", "name": "Eluru"},
      {"@type": "City", "name": "Kurnool"},
      {"@type": "City", "name": "Chittoor"},
      {"@type": "City", "name": "Ongole"},
      {"@type": "City", "name": "Coimbatore"},
      {"@type": "City", "name": "Madurai"},
      {"@type": "City", "name": "Trichy"},
      {"@type": "City", "name": "Salem"},
      {"@type": "City", "name": "Tirunelveli"},
      {"@type": "City", "name": "Erode"},
      {"@type": "City", "name": "Vellore"},
      {"@type": "City", "name": "Thanjavur"},
      {"@type": "City", "name": "Dindigul"},
      {"@type": "City", "name": "Hosur"},
      {"@type": "City", "name": "Nagercoil"},
      {"@type": "City", "name": "Mysore"},
      {"@type": "City", "name": "Hubli"},
      {"@type": "City", "name": "Mangalore"},
      {"@type": "City", "name": "Belgaum"},
      {"@type": "City", "name": "Gulbarga"},
      {"@type": "City", "name": "Davanagere"},
      {"@type": "City", "name": "Bellary"},
      {"@type": "City", "name": "Tumkur"},
      {"@type": "City", "name": "Shimoga"},
      {"@type": "City", "name": "Hassan"},
      {"@type": "City", "name": "Udupi"},
      {"@type": "City", "name": "Warangal"},
      {"@type": "City", "name": "Karimnagar"},
      {"@type": "City", "name": "Nizamabad"},
      {"@type": "City", "name": "Khammam"},
      {"@type": "City", "name": "Nalgonda"},
      {"@type": "City", "name": "Ramagundam"},
      {"@type": "City", "name": "Siddipet"},
      {"@type": "City", "name": "Tirupathi"},
      {"@type": "City", "name": "Chittoor District"}
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "uPVC Windows and Doors",
        "category": "Building Materials"
      }
    }
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

