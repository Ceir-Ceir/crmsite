/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')();

const nextConfig = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true,
  }
});

module.exports = nextConfig;
