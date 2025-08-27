import Link from 'next/link'
import { BookOpen, Clock, Lock, Unlock, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

// Mock data - en real app, ceci viendrait de la base de données
const subjects = {
  arabic: {
    title: 'Langue Arabe',
    emoji: '📖',
    description: 'Apprentissage de l\'arabe avec support RTL et harakât',
    lessons: [
      {
        id: 'alphabet-arabe-debutant',
        title: 'L\'Alphabet Arabe - Niveau Débutant',
        summary: 'Découverte des 28 lettres de l\'alphabet arabe',
        minutes: 15,
        level: 'Débutant',
        isLocked: false,
        slug: 'alphabet-arabe-debutant'
      },
      {
        id: 'voyelles-arabe',
        title: 'Les Voyelles Arabes (Harakât)',
        summary: 'Apprentissage des voyelles courtes et longues',
        minutes: 20,
        level: 'Débutant',
        isLocked: false,
        slug: 'voyelles-arabe'
      },
      {
        id: 'nombres-arabe',
        title: 'Les Nombres en Arabe',
        summary: 'Compter de 1 à 100 en arabe',
        minutes: 25,
        level: 'Intermédiaire',
        isLocked: true,
        slug: 'nombres-arabe'
      }
    ]
  },
  french: {
    title: 'Langue Française',
    emoji: '🇫🇷',
    description: 'Maîtrise de la langue française',
    lessons: [
      {
        id: 'grammaire-francaise',
        title: 'Grammaire Française - Niveau Débutant',
        summary: 'Les bases de la grammaire française',
        minutes: 20,
        level: 'Débutant',
        isLocked: false,
        slug: 'grammaire-francaise'
      },
      {
        id: 'conjugaison-francaise',
        title: 'Conjugaison des Verbes',
        summary: 'Apprendre à conjuguer les verbes français',
        minutes: 25,
        level: 'Débutant',
        isLocked: false,
        slug: 'conjugaison-francaise'
      }
    ]
  },
  'computer-science': {
    title: 'Informatique',
    emoji: '💻',
    description: 'Programmation et technologies numériques',
    lessons: [
      {
        id: 'introduction-programmation',
        title: 'Introduction à la Programmation',
        summary: 'Découverte des concepts de base de la programmation',
        minutes: 30,
        level: 'Débutant',
        isLocked: false,
        slug: 'introduction-programmation'
      },
      {
        id: 'html-css-basics',
        title: 'HTML et CSS - Les Bases',
        summary: 'Créer votre première page web',
        minutes: 35,
        level: 'Débutant',
        isLocked: false,
        slug: 'html-css-basics'
      }
    ]
  },
  mathematics: {
    title: 'Mathématiques',
    emoji: '🔢',
    description: 'Sciences mathématiques et logique',
    lessons: [
      {
        id: 'addition-soustraction',
        title: 'Addition et Soustraction',
        summary: 'Opérations de base avec les nombres',
        minutes: 20,
        level: 'Débutant',
        isLocked: false,
        slug: 'addition-soustraction'
      }
    ]
  }
}

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: subjectKey } = await params
  const subject = subjects[subjectKey as keyof typeof subjects]

  if (!subject) {
    notFound()
  }

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
              <h1 className="text-2xl font-bold text-gray-900">{subject.title}</h1>
              <p className="text-gray-600">{subject.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-white">
          <div className="text-6xl mb-4">{subject.emoji}</div>
          <h2 className="text-4xl font-bold mb-4">{subject.title}</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{subject.description}</p>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subject.lessons.map((lesson) => (
            <div key={lesson.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    lesson.level === 'Débutant' ? 'bg-green-100 text-green-800' :
                    lesson.level === 'Intermédiaire' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {lesson.level}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {lesson.minutes} min
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
      </div>
    </div>
  )
}
