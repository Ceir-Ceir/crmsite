// ✅ File: app/services/[serviceType]/[city]/page.tsx
import ServiceClient from "./ServiceClient";

export async function generateStaticParams() {
  const services = ["demolition", "excavation", "dumpster-rentals", "concrete-washouts"];
  const cities = [
    "san-diego",
    "chula-vista",
    "el-cajon",
    "escondido",
    "la-mesa",
    "national-city",
    "oceanside",
    "carlsbad",
    "poway",
    "santee"
  ];

  const paths = [];

  for (const service of services) {
    for (const city of cities) {
      paths.push({ serviceType: service, city });
    }
  }

  return paths;
}

export const dynamicParams = false;

export default function Page({ params }: { params: { serviceType: string; city: string } }) {
  return <ServiceClient params={params} />;
}
