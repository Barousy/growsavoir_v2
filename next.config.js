/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configuration pour Netlify
  experimental: {
    // Désactiver turbopack en production
    ...(process.env.NODE_ENV === 'production' && {
      turbo: false,
    }),
    // Activer turbopack en développement
    ...(process.env.NODE_ENV === 'development' && {
      turbo: {
        rules: {
          '*.svg': {
            loaders: ['@svgr/webpack'],
            as: '*.js',
          },
        },
      },
    }),
  },
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  // Configuration pour Netlify
  trailingSlash: false,
  // Redirections désactivées pour Netlify
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/fr',
  //       permanent: false,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
