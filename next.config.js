/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/crmsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/crmsite/' : '',
}

module.exports = nextConfig
