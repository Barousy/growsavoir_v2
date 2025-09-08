'use client'

import { Lesson } from '@/data/lessons'
import { getLevelById } from '@/data/levels'

interface StructuredDataProps {
  lesson: Lesson
}

export default function StructuredData({ lesson }: StructuredDataProps) {
  const level = getLevelById(lesson.level)
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": lesson.title,
    "description": lesson.summary,
    "provider": {
      "@type": "Organization",
      "name": "GrowSavoir",
      "url": "https://growsavoir.com",
      "logo": "https://growsavoir.com/icon.svg",
      "description": "Plateforme éducative moderne pour l'apprentissage des langues et sciences islamiques"
    },
    "courseCode": lesson.slug,
    "educationalLevel": level?.name || lesson.level,
    "teaches": lesson.learningObjectives,
    "about": {
      "@type": "Thing",
      "name": lesson.subject
    },
    "timeRequired": `PT${lesson.estimatedMinutes}M`,
    "inLanguage": "fr",
    "isAccessibleForFree": !lesson.isLocked,
    "educationalUse": "instruction",
    "learningResourceType": "lesson",
    "typicalAgeRange": lesson.ageGroup,
    "keywords": lesson.keywords.join(", "),
    "url": `https://growsavoir.com/lessons/${lesson.slug}`,
    "dateCreated": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "GrowSavoir"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GrowSavoir",
      "url": "https://growsavoir.com"
    },
    "isPartOf": {
      "@type": "Course",
      "name": lesson.subject,
      "provider": {
        "@type": "Organization",
        "name": "GrowSavoir"
      }
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "instructor": {
        "@type": "Organization",
        "name": "GrowSavoir"
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
