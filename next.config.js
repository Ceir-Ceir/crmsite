// next.config.js
import mdx from '@next/mdx';

const withMDX = mdx({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx']
};

export default withMDX(nextConfig);
