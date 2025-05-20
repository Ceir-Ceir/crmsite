import { Metadata } from "next";
import Script from "next/script";

// City data for metadata
const cityData = {
  "san-diego": "San Diego",
  "chula-vista": "Chula Vista",
  "el-cajon": "El Cajon",
  "escondido": "Escondido",
  "la-mesa": "La Mesa",
  "national-city": "National City",
  "oceanside": "Oceanside",
  "carlsbad": "Carlsbad",
  "poway": "Poway",
  "santee": "Santee"
};

// Service data for metadata
const serviceData = {
  "demolition": {
    title: "Demolition Services",
    description: "Professional demolition services in"
  },
  "excavation": {
    title: "Excavation Services",
    description: "Expert excavation services in"
  },
  "dumpster-rentals": {
    title: "Dumpster Rental Services",
    description: "Reliable dumpster rental services in"
  },
  "concrete-washouts": {
    title: "Concrete Washout Services",
    description: "Professional concrete washout services in"
  }
};

export async function generateMetadata({ params }: { params: { serviceType: string; city: string } }): Promise<Metadata> {
  const city = cityData[params.city as keyof typeof cityData];
  const service = serviceData[params.serviceType as keyof typeof serviceData];

  if (!city || !service) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found."
    };
  }

  const title = `${service.title} in ${city} | CRM Construction`;
  const description = `${service.description} ${city}. Licensed and insured construction services with experienced crews. Get a free quote today!`;
  const url = `https://crmconstruction.com/services/${params.serviceType}/${params.city}`;

  return {
    title,
    description,
    keywords: `${service.title}, ${city}, Construction Services, San Diego County`,
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: "CRM Construction",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ServiceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serviceType: string; city: string };
}) {
  const city = cityData[params.city as keyof typeof cityData];
  const service = serviceData[params.serviceType as keyof typeof serviceData];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CRM Construction",
    "image": "https://crmconstruction.com/assets/logo.png",
    "description": `${service?.description} ${city}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1527 Old Highway 80 #103",
      "addressLocality": "El Cajon",
      "addressRegion": "CA",
      "postalCode": "92021",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7947",
      "longitude": "-116.9625"
    },
    "url": `https://crmconstruction.com/services/${params.serviceType}/${params.city}`,
    "telephone": "+16197784997",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/crmconstruction",
      "https://www.linkedin.com/company/crmconstruction"
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://crmconstruction.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://crmconstruction.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service?.title || "Service",
        "item": `https://crmconstruction.com/services/${params.serviceType}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": city,
        "item": `https://crmconstruction.com/services/${params.serviceType}/${params.city}`
      }
    ]
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="breadcrumb-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      {children}
    </>
  );
} 