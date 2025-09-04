import ServiceClient from "./ServiceClient";

export const dynamic = "error";
export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ serviceType: string; city: string }[]> {
  const services = [
    "demolition",
    "excavation",
    "dumpster-rentals",
    "dumpster-rental",
    "concrete-washouts",
    "asphalt-paving",
  ];
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
    "santee",
  ];

  const paths: { serviceType: string; city: string }[] = [];
  for (const service of services) {
    for (const city of cities) {
      paths.push({ serviceType: service, city });
    }
  }
  return paths;
}

export default function Page({ params }: { params: { serviceType: string; city: string } }) {
  return <ServiceClient params={params} />;
}
