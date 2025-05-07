import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Engineering Services in San Diego",
  description: "CRM Construction offers expert general engineering services in San Diego. From storm drain installation to utility work, our Veriforce certified crews deliver quality results.",
  keywords: "General Engineering San Diego, Storm Drain Installation, Utility Installation, Construction Services San Diego",
  openGraph: {
    title: "General Engineering Services in San Diego | CRM Construction",
    description: "Expert general engineering services with Veriforce certified crews. Call now for a free quote.",
    type: "website",
  },
};

export default function GeneralEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 