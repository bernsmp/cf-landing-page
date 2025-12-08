import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://cognitivefingerprint.ai'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/assessment/', '/results/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
