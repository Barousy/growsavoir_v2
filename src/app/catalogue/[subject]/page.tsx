import Link from 'next/link'
import { BookOpen, Clock, Lock, Unlock, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getLessonsBySubject, getLessonCountBySubject } from '@/data'

// Mapping des clés de sujet vers les noms complets
const subjectMapping = {
  arabic: 'Langue Arabe',
  french: 'Langue Française',
  english: 'Langue Anglaise',
  mathematics: 'Mathématiques',
  sciences: 'Sciences',
  'computer-science': 'Informatique',
  aqida: 'Aqîda (Creed)',
  fiqh: 'Fiqh (Jurisprudence)',
  sira: 'Sîra (Biographie du Prophète ﷺ)',
  'islamic-history': 'Histoire de l\'Islam',
  'personal-development': 'Développement Personnel'
}

// Configuration des émojis et descriptions
const subjectConfig = {
  'Langue Arabe': {
    emoji: '📖',
    description: 'Apprentissage de l&apos;arabe avec support RTL et harakât'
  },
  'Langue Française': {
    emoji: '🇫🇷',
    description: 'Maîtrise de la langue française'
  },
  'Langue Anglaise': {
    emoji: '🇬🇧',
    description: 'Apprentissage de l&apos;anglais'
  },
  'Mathématiques': {
    emoji: '🔢',
    description: 'Sciences mathématiques et logique'
  },
  'Sciences': {
    emoji: '🔬',
    description: 'Sciences naturelles et expérimentales'
  },
  'Informatique': {
    emoji: '💻',
    description: 'Programmation et technologies numériques'
  },
  'Aqîda (Creed)': {
    emoji: '🕌',
    description: 'Croyance islamique authentique'
  },
  'Fiqh (Jurisprudence)': {
    emoji: '📚',
    description: 'Jurisprudence islamique de base'
  },
  'Sîra (Biographie du Prophète ﷺ)': {
    emoji: '📖',
    description: 'Biographie du Prophète ﷺ'
  },
  'Histoire de l\'Islam': {
    emoji: '🏛️',
    description: 'Histoire des premiers siècles de l&apos;Islam'
  },
  'Développement Personnel': {
    emoji: '🌟',
    description: 'Adab et éthique islamique'
  }
}

export default function SubjectPage({ params }: { params: { subject: string } }) {
  const { subject: subjectKey } = params
  const subjectName = subjectMapping[subjectKey as keyof typeof subjectMapping]

  if (!subjectName) {
    notFound()
  }

  // Récupérer les vraies leçons pour ce sujet
  const lessons = getLessonsBySubject(subjectName)
  const lessonCount = getLessonCountBySubject(subjectName)
  const config = subjectConfig[subjectName as keyof typeof subjectConfig] || { emoji: '❓', description: 'Description non disponible' }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/catalogue"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour au catalogue
            </Link>
            
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-900">{subjectName}</h1>
              <p className="text-gray-600">{config?.description ?? ''}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-white">
          <div className="text-6xl mb-4">{config?.emoji ?? ''}</div>
          <h2 className="text-4xl font-bold mb-4">{subjectName}</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{config?.description ?? ''}</p>
          <div className="mt-4 text-lg opacity-90">
            {lessonCount} leçons disponibles
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {lessons.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucune leçon disponible</h3>
            <p className="text-gray-600">Les leçons pour cette matière seront bientôt disponibles.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => (
              <div key={lesson.slug} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      lesson.level === 'n1-fondamentaux' ? 'bg-green-100 text-green-800' :
                      lesson.level === 'n2-intermediaire' ? 'bg-yellow-100 text-yellow-800' :
                      lesson.level === 'n3-avance' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {lesson.level === 'n1-fondamentaux' ? 'N1 - Fondamentaux' :
                       lesson.level === 'n2-intermediaire' ? 'N2 - Intermédiaire' :
                       lesson.level === 'n3-avance' ? 'N3 - Avancé' :
                       lesson.level === 'n4-expert' ? 'N4 - Expert' : lesson.level}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {lesson.estimatedMinutes} min
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{lesson.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{lesson.summary}</p>
                  
                  <div className="flex items-center justify-between">
                    {lesson.isLocked ? (
                      <div className="flex items-center text-gray-500">
                        <Lock className="h-4 w-4 mr-2" />
                        <span className="text-sm">Verrouillé</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-green-600">
                        <Unlock className="h-4 w-4 mr-2" />
                        <span className="text-sm">Disponible</span>
                      </div>
                    )}
                    
                    {!lesson.isLocked && (
                      <Link
                        href={`/lessons/${lesson.slug}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center"
                      >
                        <BookOpen className="h-4 w-4 mr-2" />
                        Commencer
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
