/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configuration pour Netlify
  turbopack: process.env.NODE_ENV === 'development' ? {
    // exemple de règle, garder minimal
  } : undefined,
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  trailingSlash: false,
}

module.exports = nextConfig
