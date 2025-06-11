"use client";

import Script from "next/script";

export default function GoogleTracking() {
  const ga4Id = process.env.NEXT_PUBLIC_GTAG_ID || "G-R69K3DN4B3";
  const googleAdsId = "AW-17073008016"; // Your Google Ads ID from earlier
  
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
        strategy="afterInteractive"
      />
      <Script id="google-tracking" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Configure Google Analytics 4
          gtag('config', '${ga4Id}');
          
          // Configure Google Ads Conversion Tracking
          gtag('config', '${googleAdsId}');
        `}
      </Script>
    </>
  );
}