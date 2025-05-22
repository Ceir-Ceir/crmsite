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
  icons: {
    icon: [
      { url: '/assets/logo.png' },
      { url: '/assets/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/logo.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.png" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
