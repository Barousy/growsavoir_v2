import { getTotalLessonCount, getLessonCountBySubject, getLessonsBySubject, getProgramOverview } from '@/data'

export default function TestDataPage() {
  const totalLessons = getTotalLessonCount()
  const programOverview = getProgramOverview()
  
  // Test des données pour quelques matières
  const arabicLessons = getLessonsBySubject('Langue Arabe')
  const frenchLessons = getLessonsBySubject('Langue Française')
  const englishLessons = getLessonsBySubject('Langue Anglaise')
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Test des Données du Programme</h1>
        
        {/* Statistiques générales */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Statistiques Générales</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{totalLessons}</div>
              <div className="text-sm text-gray-600">Total des leçons</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{arabicLessons.length}</div>
              <div className="text-sm text-gray-600">Leçons Arabe</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{frenchLessons.length}</div>
              <div className="text-sm text-gray-600">Leçons Français</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">{englishLessons.length}</div>
              <div className="text-sm text-gray-600">Leçons Anglais</div>
            </div>
          </div>
        </div>

        {/* Vue d'ensemble du programme */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Vue d'ensemble du Programme</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            {JSON.stringify(programOverview, null, 2)}
          </pre>
        </div>

        {/* Détail des leçons d'arabe */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Leçons d'Arabe (Premières 5)</h2>
          <div className="space-y-4">
            {arabicLessons.slice(0, 5).map((lesson, index) => (
              <div key={lesson.slug} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg">{lesson.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{lesson.summary}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    lesson.level === 'n1-fondamentaux' ? 'bg-green-100 text-green-800' :
                    lesson.level === 'n2-intermediaire' ? 'bg-yellow-100 text-yellow-800' :
                    lesson.level === 'n3-avance' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {lesson.level}
                  </span>
                  <span className="text-gray-500">{lesson.estimatedMinutes} min</span>
                  <span className={lesson.isLocked ? 'text-red-500' : 'text-green-500'}>
                    {lesson.isLocked ? '🔒 Verrouillé' : '🔓 Débloqué'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Détail des leçons de français */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Leçons de Français (Premières 5)</h2>
          <div className="space-y-4">
            {frenchLessons.slice(0, 5).map((lesson, index) => (
              <div key={lesson.slug} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg">{lesson.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{lesson.summary}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    lesson.level === 'n1-fondamentaux' ? 'bg-green-100 text-green-800' :
                    lesson.level === 'n2-intermediaire' ? 'bg-yellow-100 text-yellow-800' :
                    lesson.level === 'n3-avance' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {lesson.level}
                  </span>
                  <span className="text-gray-500">{lesson.estimatedMinutes} min</span>
                  <span className={lesson.isLocked ? 'text-red-500' : 'text-green-500'}>
                    {lesson.isLocked ? '🔒 Verrouillé' : '🔓 Débloqué'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Détail des leçons d'anglais */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Leçons d'Anglais (Premières 5)</h2>
          <div className="space-y-4">
            {englishLessons.slice(0, 5).map((lesson, index) => (
              <div key={lesson.slug} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg">{lesson.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{lesson.summary}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    lesson.level === 'n1-fondamentaux' ? 'bg-green-100 text-green-800' :
                    lesson.level === 'n2-intermediaire' ? 'bg-yellow-100 text-yellow-800' :
                    lesson.level === 'n3-avance' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {lesson.level}
                  </span>
                  <span className="text-gray-500">{lesson.estimatedMinutes} min</span>
                  <span className={lesson.isLocked ? 'text-red-500' : 'text-green-500'}>
                    {lesson.isLocked ? '🔒 Verrouillé' : '🔓 Débloqué'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}





