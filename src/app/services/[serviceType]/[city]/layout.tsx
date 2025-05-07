import { Metadata } from "next";

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

  return {
    title: `${service.title} in ${city} | CRM Construction`,
    description: `${service.description} ${city}. Licensed and insured construction services with experienced crews. Get a free quote today!`,
    keywords: `${service.title}, ${city}, Construction Services, San Diego County`,
    openGraph: {
      title: `${service.title} in ${city} | CRM Construction`,
      description: `${service.description} ${city}. Licensed and insured construction services with experienced crews. Get a free quote today!`,
      type: "website",
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 