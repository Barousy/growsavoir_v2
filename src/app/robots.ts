import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/auth/forgot-password',
        '/unlock',
        '/test',
        '/test-data',
      ],
    },
    sitemap: 'https://growsavoir.com/sitemap.xml',
  }
}
