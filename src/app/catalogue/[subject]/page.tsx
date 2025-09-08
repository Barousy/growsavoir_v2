import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BookOpen, Clock, Trophy, Lock, Unlock, ArrowLeft } from 'lucide-react'
import { getLessonsBySubject, getLessonBySlug } from '@/data/all-lessons'
import { getLevelById } from '@/data/levels'
import { hasUnlockedAccess } from '@/lib/access'

type SubjectPageProps = {
  params: Promise<{ subject: string }>
}

const subjectMapping: Record<string, string> = {
  arabic: 'Langue Arabe',
  french: 'Langue Française',
  english: 'Langue Anglaise',
  mathematics: 'Mathématiques',
  sciences: 'Sciences',
  'computer-science': 'Informatique',
  aqida: 'Aqida',
  fiqh: 'Fiqh (Jurisprudence)',
  sira: 'Sîra (Biographie du Prophète ﷺ)',
  'islamic-history': 'Histoire de l\'Islam',
  'personal-development': 'Développement Personnel',
}

export async function generateMetadata({ params }: SubjectPageProps) {
  const { subject } = await params
  const subjectName = subjectMapping[subject]
  if (!subjectName) {
    return { title: "Matière non trouvée" }
  }
  return { title: `${subjectName} — GrowSavoir` }
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { subject } = await params
  const subjectName = subjectMapping[subject]
  if (!subjectName) {
    notFound()
  }

  const lessons = getLessonsBySubject(subjectName)
  const unlocked = await hasUnlockedAccess()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/catalogue"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour au catalogue
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">{subjectName}</h1>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {lessons.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">Aucune leçon trouvée pour cette matière.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lessons.map((lesson) => {
              const level = getLevelById(lesson.level)
              const isLessonLocked = lesson.isLocked && !unlocked

              return (
                <Link
                  key={lesson.slug}
                  href={`/lessons/${lesson.slug}`}
                  className={`block bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow ${isLessonLocked ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{lesson.title}</h2>
                      <p className="text-sm text-gray-600 mt-1">{lesson.summary}</p>
                    </div>
                    {isLessonLocked ? (
                      <Lock className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Unlock className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {lesson.estimatedMinutes} min
                    </div>
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 mr-1" />
                      {level?.name || 'Niveau'}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

