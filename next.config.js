/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export (Next.js 13+)
  trailingSlash: true,
  basePath: '', // REPO_NAME = your GitHub repo name
};

module.exports = nextConfig;
