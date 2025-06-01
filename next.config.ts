// next.config.js
import mdx from '@next/mdx';

const withMDX = mdx();

const nextConfig = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true
  }
});

export default nextConfig;
