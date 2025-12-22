import { Metadata } from "next";
import Script from "next/script";

const baseUrl = "https://crmco.us";

const cityData = {
  "san-diego": "San Diego",
  "chula-vista": "Chula Vista",
  "el-cajon": "El Cajon",
  "escondido": "Escondido",
  "la-mesa": "La Mesa",
  "national-city": "National City",
  "oceanside": "Oceanside",
  "carlsbad": "Carlsbad",
  "jamul": "Jamul",
  "alpine": "Alpine",
  "descanso": "Descanso",
  "ramona": "Ramona",
  "poway": "Poway",
  "santee": "Santee",
} as const;

const serviceData = {
  "demolition": {
    title: "Demolition Services",
    description: "Professional demolition services in",
  },
  "excavation": {
    title: "Excavation Services",
    description: "Expert excavation services in",
  },
  "dumpster-rentals": {
    title: "Dumpster Rental Services",
    description: "Reliable dumpster rental services in",
  },
  "concrete-washouts": {
    title: "Concrete Washout Services",
    description: "Professional concrete washout services in",
  },
  "asphalt-paving": {
    title: "Asphalt Paving Services",
    description: "Professional asphalt paving services in",
  },
} as const;

type ServiceSlug = keyof typeof serviceData;
type CitySlug = keyof typeof cityData;

const normalizeServiceType = (serviceType: string): ServiceSlug | null => {
  const normalized = serviceType === "dumpster-rental" ? "dumpster-rentals" : serviceType;
  return normalized in serviceData ? (normalized as ServiceSlug) : null;
};

export async function generateMetadata({
  params,
}: {
  params: { serviceType: string; city: string };
}): Promise<Metadata> {
  const serviceSlug = normalizeServiceType(params.serviceType);
  const citySlug = params.city as CitySlug;
  const city = cityData[citySlug];
  const service = serviceSlug ? serviceData[serviceSlug] : undefined;

  if (!city || !service) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const title = `${service.title} in ${city} | CRM Construction`;
  const description = `${service.description} ${city}. Licensed and insured construction services with experienced crews. Get a free quote today!`;
  const url = `${baseUrl}/services/${serviceSlug}/${params.city}`;

  return {
    title,
    description,
    keywords: `${service.title}, ${city}, construction services, San Diego County`,
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
  const serviceSlug = normalizeServiceType(params.serviceType);
  const citySlug = params.city as CitySlug;
  const city = cityData[citySlug];
  const service = serviceSlug ? serviceData[serviceSlug] : undefined;

  const servicePath = serviceSlug ? `${baseUrl}/services/${serviceSlug}` : `${baseUrl}/services`;
  const pageUrl = serviceSlug && city ? `${servicePath}/${params.city}` : `${baseUrl}/services`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CRM Construction",
    "image": `${baseUrl}/assets/logo.png`,
    "description": service && city ? `${service.description} ${city}` : undefined,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1527 Old Highway 80 #103",
      "addressLocality": "El Cajon",
      "addressRegion": "CA",
      "postalCode": "92021",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7947",
      "longitude": "-116.9625",
    },
    "url": pageUrl,
    "telephone": "+16197784997",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00",
    },
    "sameAs": [
      "https://www.facebook.com/crmconstruction",
      "https://www.linkedin.com/company/crmconstruction",
    ],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${baseUrl}/services`,
      },
      service && {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": servicePath,
      },
      service && city && {
        "@type": "ListItem",
        "position": 4,
        "name": city,
        "item": pageUrl,
      },
    ].filter(Boolean),
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
