// src/app/catalogue/page.tsx
import Link from 'next/link'
import { BookOpen, Lock, Unlock, ShieldCheck, Search, Filter, Grid, List, ChevronDown } from 'lucide-react'
import { getTotalLessonCount, getLessonCountBySubject } from '@/data'
import { hasUnlockedAccess } from '@/lib/access'
import Breadcrumbs from '@/components/Breadcrumbs'
import SubjectSearchDropdown from '@/components/SubjectSearchDropdown'

export default async function CataloguePage() {
  // Accès global (cookie gs_unlock)
  const unlocked = await hasUnlockedAccess()

  // Compteur global
  const totalLessons = getTotalLessonCount()

  const subjects = [
    {
      key: 'arabic',
      title: 'Langue Arabe',
      emoji: '📖',
      description: "Apprentissage de l'arabe avec support RTL et harakât",
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
      description: "Apprentissage de l'anglais",
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
      title: "Histoire de l'Islam",
      emoji: '🏛️',
      description: "Histoire des premiers siècles de l'Islam",
      lessonCount: getLessonCountBySubject("Histoire de l'Islam"),
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
             {/* Header */}
             <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            items={[{ label: 'Catalogue des Leçons' }]} 
            className="mb-6"
          />
          
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Catalogue des Leçons
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Découvrez {totalLessons} leçon{totalLessons > 1 ? 's' : ''} organisées par matière et par niveau
            </p>

            {/* État d'accès global */}
            <div className="mt-6 flex items-center justify-center">
              {unlocked ? (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium ring-1 ring-inset ring-green-200">
                  <ShieldCheck className="h-4 w-4" />
                  Accès avancé activé — N2/N3/N4 déverrouillés
                </span>
              ) : (
                <Link
                  href="/unlock"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <Lock className="h-4 w-4" />
                  Déverrouiller l'accès avancé
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

             {/* Search and Filters */}
             <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                   {/* Subject Search Dropdown */}
                   <div className="flex-1 max-w-md">
                     <SubjectSearchDropdown subjects={subjects} />
                   </div>
            
            {/* Filters */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filtrer par âge :</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {ageGroups.map((group) => (
                  <button
                    key={group.key}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${group.color} hover:opacity-80 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  >
                    {group.title} ({group.age})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.key}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-600"
            >
              {/* Subject Header */}
              <div className={`bg-gradient-to-r ${subject.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-4xl drop-shadow-sm group-hover:scale-110 transition-transform duration-300">{subject.emoji}</span>
                    <div className="text-right">
                      <div className="text-xs/5 opacity-90">Leçons</div>
                      <div className="text-2xl font-extrabold group-hover:scale-105 transition-transform duration-300">{subject.lessonCount}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-blue-100 transition-colors">{subject.title}</h3>
                  <p className="text-sm/6 opacity-95 mt-2">{subject.description}</p>
                </div>
              </div>

              {/* Subject Content */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Age Groups */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Niveaux disponibles :</h4>
                    <div className="flex flex-wrap gap-2">
                      {ageGroups.map((group) => (
                        <span
                          key={group.key}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${group.color} ring-1 ring-inset ring-black/5 group-hover:scale-105 transition-transform duration-200`}
                        >
                          {group.title}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sample Lessons (icônes dynamiques selon l'accès) */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Exemples de leçons :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Niveau Débutant</span>
                        <Unlock className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Niveau Intermédiaire</span>
                        {unlocked ? (
                          <Unlock className="h-4 w-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <Lock className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                        )}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Niveau Avancé</span>
                        {unlocked ? (
                          <Unlock className="h-4 w-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <Lock className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/catalogue/${subject.key}`}
                    className="group/btn w-full bg-gray-900 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-black transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:shadow-lg hover:scale-105"
                    aria-label={`Explorer ${subject.title}`}
                  >
                    <BookOpen className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                    <span>Explorer {subject.title}</span>
                    <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
