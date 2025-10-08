export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Craving Cuisine",
    "description": "Fresh food delivery service in Lahore for offices, meetings, conferences and events",
    "url": "https://craving-cuisine.vercel.app",
    "telephone": "+92 301 6828719",
    "email": "muhammadhamidofficial0@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressCountry": "Pakistan"
    },
    "servesCuisine": ["Pakistani", "Continental", "Asian"],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "openingHours": "Mo-Su 08:00-22:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 31.5204,
        "longitude": 74.3587
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Small Office Catering",
            "description": "Fresh daily meals for 5-20 people"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medium Office Catering",
            "description": "Fresh daily meals for 20-80 people"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Large Events Catering",
            "description": "Premium catering for 80-150 people"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
