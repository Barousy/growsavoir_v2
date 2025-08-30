import Link from 'next/link'
import { BookOpen, Lock, Unlock } from 'lucide-react'
import { getProgramOverview, getTotalLessonCount, getLessonCountBySubject } from '@/data'

export default function CataloguePage() {
  // Obtenir les vraies données du programme
  const programOverview = getProgramOverview()
  const totalLessons = getTotalLessonCount()
  
  const subjects = [
    {
      key: 'arabic',
      title: 'Langue Arabe',
      emoji: '📖',
      description: 'Apprentissage de l\'arabe avec support RTL et harakât',
      lessonCount: getLessonCountBySubject('Langue Arabe'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      key: 'french',
      title: 'Langue Française',
      emoji: '🇫🇷',
      description: 'Maîtrise de la langue française',
      lessonCount: getLessonCountBySubject('Langue Française'),
      color: 'from-red-500 to-red-600',
    },
    {
      key: 'english',
      title: 'Langue Anglaise',
      emoji: '🇬🇧',
      description: 'Apprentissage de l\'anglais',
      lessonCount: getLessonCountBySubject('Langue Anglaise'),
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      key: 'mathematics',
      title: 'Mathématiques',
      emoji: '🔢',
      description: 'Sciences mathématiques et logique',
      lessonCount: getLessonCountBySubject('Mathématiques'),
      color: 'from-green-500 to-green-600',
    },
    {
      key: 'sciences',
      title: 'Sciences',
      emoji: '🔬',
      description: 'Sciences naturelles et expérimentales',
      lessonCount: getLessonCountBySubject('Sciences'),
      color: 'from-purple-500 to-purple-600',
    },
    {
      key: 'computer-science',
      title: 'Informatique',
      emoji: '💻',
      description: 'Programmation et technologies numériques',
      lessonCount: getLessonCountBySubject('Informatique'),
      color: 'from-gray-500 to-gray-600',
    },
    {
      key: 'aqida',
      title: 'Aqida',
      emoji: '🕌',
      description: 'Croyance islamique authentique',
      lessonCount: getLessonCountBySubject('Aqîda (Creed)'),
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      key: 'fiqh',
      title: 'Fiqh',
      emoji: '📚',
      description: 'Jurisprudence islamique de base',
      lessonCount: getLessonCountBySubject('Fiqh (Jurisprudence)'),
      color: 'from-orange-500 to-orange-600',
    },
    {
      key: 'sira',
      title: 'Sira',
      emoji: '📖',
      description: 'Biographie du Prophète ﷺ',
      lessonCount: getLessonCountBySubject('Sîra (Biographie du Prophète ﷺ)'),
      color: 'from-teal-500 to-teal-600',
    },
    {
      key: 'islamic-history',
      title: 'Histoire de l\'Islam',
      emoji: '🏛️',
      description: 'Histoire des premiers siècles de l\'Islam',
      lessonCount: getLessonCountBySubject('Histoire de l\'Islam'),
      color: 'from-pink-500 to-pink-600',
    },
    {
      key: 'personal-development',
      title: 'Développement Personnel',
      emoji: '🌟',
      description: 'Adab et éthique islamique',
      lessonCount: getLessonCountBySubject('Développement Personnel'),
      color: 'from-cyan-500 to-cyan-600',
    },
  ]

  const ageGroups = [
    { key: 'preschool', title: 'Maternelle', age: '3-6 ans', color: 'bg-blue-100 text-blue-800' },
    { key: 'primary', title: 'Primaire', age: '7-10 ans', color: 'bg-green-100 text-green-800' },
    { key: 'middle', title: 'Collège', age: '11-14 ans', color: 'bg-purple-100 text-purple-800' },
    { key: 'high', title: 'Lycée', age: '15-18 ans', color: 'bg-orange-100 text-orange-800' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Catalogue des Leçons
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Découvrez notre collection complète de leçons organisées par matière et par niveau
            </p>
          </div>
        </div>
      </div>

      {/* Age Groups Filter */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filtrer par âge :</h2>
          <div className="flex flex-wrap gap-3">
            {ageGroups.map((group) => (
              <button
                key={group.key}
                className={`px-4 py-2 rounded-full text-sm font-medium ${group.color} hover:opacity-80 transition-opacity`}
              >
                {group.title} ({group.age})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div key={subject.key} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Subject Header */}
              <div className={`bg-gradient-to-r ${subject.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{subject.emoji}</span>
                  <div className="text-right">
                    <div className="text-sm opacity-90">Leçons</div>
                    <div className="text-2xl font-bold">{subject.lessonCount}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">{subject.title}</h3>
                <p className="text-sm opacity-90 mt-2">{subject.description}</p>
              </div>

              {/* Subject Content */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Age Groups */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Niveaux disponibles :</h4>
                    <div className="flex flex-wrap gap-2">
                      {ageGroups.map((group) => (
                        <span
                          key={group.key}
                          className={`px-2 py-1 rounded text-xs font-medium ${group.color}`}
                        >
                          {group.title}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sample Lessons */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Exemples de leçons :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Niveau Débutant</span>
                        <Unlock className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Niveau Intermédiaire</span>
                        <Lock className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Niveau Avancé</span>
                        <Lock className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/catalogue/${subject.key}`}
                    className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Explorer {subject.title}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Prêt à commencer votre apprentissage ?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Rejoignez des milliers d'étudiants qui apprennent et grandissent avec GrowSavoir
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Commencer gratuitement
            </Link>
            <Link
              href="/quiz"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Essayer un quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
