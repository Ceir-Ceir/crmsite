import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CRM Construction | Heavy-Duty Construction Services in San Diego",
    template: "%s | CRM Construction",
  },
  description: "CRM Construction offers comprehensive construction services in San Diego. From general engineering to demolition, excavation, and material delivery. Serving San Diego County since 1997.",
  keywords: "Construction San Diego, General Engineering San Diego, Demolition San Diego, Excavation San Diego, Construction Services",
  openGraph: {
    title: "CRM Construction | Heavy-Duty Construction Services in San Diego",
    description: "Professional construction services serving San Diego County. Call now for a free quote.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
