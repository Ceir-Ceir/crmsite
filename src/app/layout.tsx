import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CRM Construction | Heavy-Duty Construction Services in San Diego",
    template: "%s | CRM Construction",
  },
  description:
    "CRM Construction offers comprehensive construction services in San Diego. From general engineering to demolition, excavation, and material delivery. Serving San Diego County since 1997.",
  keywords:
    "Construction San Diego, General Engineering San Diego, Demolition San Diego, Excavation San Diego, Construction Services",
  openGraph: {
    title: "CRM Construction | Heavy-Duty Construction Services in San Diego",
    description:
      "Professional construction services serving San Diego County. Call now for a free quote.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/assets/logo.png" },
      { url: "/assets/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/assets/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_MEASUREMENT_ID = "G-R69K3DN4B3"; // Your Google Analytics 4 Measurement ID
  const AW_CONVERSION_ID = "AW-17073008016"; // Your Google Ads Conversion ID

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/assets/logo.png" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />

        {/* Google tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          id="gtag-init" // Add an ID to the script for better identification
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname, // Recommended for SPA/Next.js
              });
              gtag('config', '${AW_CONVERSION_ID}');
            `,
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}