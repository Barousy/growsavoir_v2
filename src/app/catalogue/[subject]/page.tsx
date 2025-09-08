import Link from 'next/link'
import { getLessonsBySubject } from '@/data/all-lessons'

type SubjectParams = Promise<{ subject: string }> | { subject: string } | undefined

const subjectMapping: Record<string, string> = {
  'arabic': 'Langue Arabe',
  'french': 'Langue Française',
  'english': 'Langue Anglaise',
  'mathematics': 'Mathématiques',
  'sciences': 'Sciences',
  'computer-science': 'Informatique',
  'aqida': 'Aqîda (Creed)',
  'fiqh': 'Fiqh (Jurisprudence)',
  'sira': 'Sîra (Biographie du Prophète ﷺ)',
  'islamic-history': "Histoire de l'Islam",
  'personal-development': 'Développement Personnel',
}

export default async function SubjectPage({ params }: { params: SubjectParams }) {
  const resolved = (params as any)?.then ? await (params as Promise<{ subject: string }>) : (params as { subject: string } | undefined)
  const key = resolved?.subject ?? ''
  const subjectName = subjectMapping[key]

  if (!subjectName) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-2">Matière inconnue</h1>
        <p className="text-gray-600">La matière « {key} » est introuvable.</p>
        <Link href="/catalogue" className="text-blue-600 hover:underline">← Retour au catalogue</Link>
      </div>
    )
  }

  const lessons = getLessonsBySubject(subjectName)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">{subjectName}</h1>
          <p className="text-gray-600 mt-2">{lessons.length} leçon{lessons.length > 1 ? 's' : ''}</p>
          <div className="mt-3">
            <Link href="/catalogue" className="text-blue-600 hover:underline">← Retour au catalogue</Link>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <div key={lesson.slug} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">{lesson.title}</h2>
              <p className="text-gray-600 mt-2 line-clamp-3">{lesson.summary}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">Niveau: {lesson.level.toUpperCase()}</span>
                <Link href={`/lessons/${lesson.slug}`} className="text-blue-600 hover:underline">Ouvrir la leçon →</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

