const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.next',  // Build directory
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  // Add CSP headers to fix Google Analytics
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://stats.g.doubleclick.net;
              frame-src 'self';
              object-src 'none';
            `.replace(/\s{2,}/g, ' ').trim()
          }
        ]
      }
    ]
  }
};

module.exports = withMDX(nextConfig);