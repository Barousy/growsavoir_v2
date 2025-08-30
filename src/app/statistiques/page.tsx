import Link from 'next/link'
import { ArrowLeft, BookOpen, Lock, Unlock, BarChart3 } from 'lucide-react'
import { getProgramOverview, getLessonsBySubject, getTotalLessonCount, getLessonCountBySubject } from '@/data'

export default function StatistiquesPage() {
  const programOverview = getProgramOverview()
  const totalLessons = getTotalLessonCount()
  
  const subjects = [
    'Langue Arabe',
    'Langue Française', 
    'Langue Anglaise',
    'Mathématiques',
    'Sciences',
    'Informatique',
    'Aqîda (Creed)',
    'Fiqh (Jurisprudence)',
    'Sîra (Biographie du Prophète ﷺ)',
    'Histoire de l\'Islam',
    'Développement Personnel'
  ]

  const levels = [
    { id: 'n1-fondamentaux', name: 'N1 - Fondamentaux', color: 'bg-green-100 text-green-800' },
    { id: 'n2-intermediaire', name: 'N2 - Intermédiaire', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'n3-avance', name: 'N3 - Avancé', color: 'bg-orange-100 text-orange-800' },
    { id: 'n4-expert', name: 'N4 - Expert', color: 'bg-red-100 text-red-800' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour à l&apos;accueil
            </Link>
            
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-900">Statistiques du Programme</h1>
              <p className="text-gray-600">Vue d&apos;ensemble complète de GrowSavoir</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques générales */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-white">
          <div className="text-6xl mb-4">📊</div>
          <h2 className="text-4xl font-bold mb-4">Statistiques du Programme</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Découvrez la structure complète de notre programme éducatif
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold">{totalLessons}</div>
              <div className="text-sm opacity-90">Total des leçons</div>
            </div>
            <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold">11</div>
              <div className="text-sm opacity-90">Matières</div>
            </div>
            <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold">4</div>
              <div className="text-sm opacity-90">Niveaux</div>
            </div>
            <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold">4</div>
              <div className="text-sm opacity-90">Tranches d&apos;âge</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tableau détaillé du programme */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Structure détaillée du programme</h3>
            <p className="text-sm text-gray-600">Nombre de leçons par matière et par niveau</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Matière
                  </th>
                  {levels.map((level) => (
                    <th key={level.id} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {level.name}
                    </th>
                  ))}
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {subjects.map((subject) => {
                  const subjectLessons = getLessonsBySubject(subject)
                  const totalSubjectLessons = subjectLessons.length
                  
                  return (
                    <tr key={subject} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{subject}</div>
                        <div className="text-sm text-gray-500">
                          {totalSubjectLessons} leçon{totalSubjectLessons > 1 ? 's' : ''}
                        </div>
                      </td>
                      {levels.map((level) => {
                        const levelLessons = subjectLessons.filter(lesson => lesson.level === level.id)
                        const lessonCount = levelLessons.length
                        
                        return (
                          <td key={level.id} className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="text-sm font-medium text-gray-900">{lessonCount}</div>
                            {lessonCount > 0 && (
                              <div className="text-xs text-gray-500">
                                {levelLessons.filter(l => !l.isLocked).length} débloquées
                              </div>
                            )}
                          </td>
                        )
                      })}
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-lg font-bold text-blue-600">{totalSubjectLessons}</div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Résumé par niveau */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level) => {
            const levelLessons = getLessonsBySubject('').filter(lesson => lesson.level === level.id)
            const unlockedLessons = levelLessons.filter(lesson => !lesson.isLocked)
            
            return (
              <div key={level.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${level.color}`}>
                    {level.name}
                  </span>
                  <BarChart3 className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{levelLessons.length}</div>
                  <div className="text-sm text-gray-600">leçons</div>
                  <div className="mt-2 text-xs text-green-600">
                    {unlockedLessons.length} débloquées
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link
            href="/catalogue"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Explorer le catalogue complet
          </Link>
        </div>
      </div>
    </div>
  )
}




