"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Create script elements manually to avoid CSP issues
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-R69K3DN4B3';
    document.head.appendChild(gtagScript);

    // Initialize gtag after script loads
    gtagScript.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      
      window.gtag('js', new Date());
      window.gtag('config', 'G-R69K3DN4B3');
      window.gtag('config', 'AW-17073008016');
      
      console.log('Google Analytics loaded successfully');
    };

    return () => {
      // Cleanup
      if (gtagScript.parentNode) {
        gtagScript.parentNode.removeChild(gtagScript);
      }
    };
  }, []);

  return null;
}