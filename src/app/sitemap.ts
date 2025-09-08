import { MetadataRoute } from 'next'
import { getAllLessons } from '@/data/all-lessons'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://growsavoir.com'
  const lessons = getAllLessons()
  
  // Pages statiques principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/catalogue`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/auth/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/auth/register`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Pages de matières
  const subjectPages = [
    'arabic', 'french', 'english', 'mathematics', 'sciences', 
    'computer-science', 'aqida', 'fiqh', 'sira', 'islamic-history', 
    'personal-development'
  ].map(subject => ({
    url: `${baseUrl}/catalogue/${subject}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Pages de leçons individuelles
  const lessonPages = Object.values(lessons).map(lesson => ({
    url: `${baseUrl}/lessons/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...subjectPages, ...lessonPages]
}
