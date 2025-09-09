export type ResourceType = 'pdf' | 'video' | 'audio' | 'image' | 'link'

export interface Resource {
  id: string
  title: string
  description: string
  type: ResourceType
  url: string
  subject: string
  lessonSlug?: string
  language?: string
  keywords?: string[]
  durationSec?: number
}

const resources: Resource[] = [
  {
    id: 'r-001',
    title: 'Alphabet arabe – fiche PDF',
    description: 'Fiche mémo imprimable pour apprendre les lettres arabes.',
    type: 'pdf',
    url: '/resources/arabic/alphabet.pdf',
    subject: 'Langue Arabe',
    lessonSlug: 'arabe-n1-fondamentaux-01',
    language: 'ar',
    keywords: ['alphabet', 'arabe', 'débutant'],
  },
  {
    id: 'r-002',
    title: 'Histoire – Les 5 piliers (audio)',
    description: 'Courte capsule audio sur les piliers de l’Islam.',
    type: 'audio',
    url: 'https://cdn.example.com/audio/piliers.mp3',
    subject: 'Aqida',
    language: 'fr',
    keywords: ['piliers', 'aqida'],
    durationSec: 180,
  },
  {
    id: 'r-003',
    title: 'Activité interactive H5P – QCM arabe N1',
    description: 'Questionnaire interactif H5P lié à la leçon Arabe N1 fondamentaux 01.',
    type: 'link',
    url: 'https://h5p.org/h5p/embed/109109',
    subject: 'Langue Arabe',
    lessonSlug: 'arabe-n1-fondamentaux-01',
    language: 'fr',
    keywords: ['h5p', 'quiz', 'arabe'],
  },
]

export function getAllResources() {
  return resources
}

export function getResourcesBySubject(subject: string) {
  return resources.filter((r) => r.subject === subject)
}

export function getResourcesByLesson(slug: string) {
  return resources.filter((r) => r.lessonSlug === slug)
}

export function searchResources(query: string) {
  const q = query.toLowerCase().trim()
  if (!q) return resources
  return resources.filter((r) =>
    [
      r.title,
      r.description,
      r.subject,
      ...(r.keywords || []),
      r.lessonSlug || '',
    ]
      .join(' ')
      .toLowerCase()
      .includes(q)
  )
}

// Simple helper to expose quiz-ready facts/snippets from resources later
export interface QuizSnippet {
  resourceId: string
  lessonSlug?: string
  text: string
}

export function getQuizSnippetsFromResources(): QuizSnippet[] {
  // Placeholder extraction (later: parse PDF/metadata)
  return resources.map((r) => ({
    resourceId: r.id,
    lessonSlug: r.lessonSlug,
    text: `${r.title} — ${r.description}`,
  }))
}


