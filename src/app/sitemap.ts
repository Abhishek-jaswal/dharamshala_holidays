import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skdholidays.in'
  const now     = new Date()

  return [
    {
      url:              baseUrl,
      lastModified:     now,
      changeFrequency:  'weekly',
      priority:         1.0,
    },
    {
      url:              `${baseUrl}/taxi`,
      lastModified:     now,
      changeFrequency:  'monthly',
      priority:         0.9,
    },
    {
      url:              `${baseUrl}/rentals`,
      lastModified:     now,
      changeFrequency:  'monthly',
      priority:         0.9,
    },
    {
      url:              `${baseUrl}/packages`,
      lastModified:     now,
      changeFrequency:  'monthly',
      priority:         0.9,
    },
    {
      url:              `${baseUrl}/contact`,
      lastModified:     now,
      changeFrequency:  'yearly',
      priority:         0.7,
    },
  ]
}
