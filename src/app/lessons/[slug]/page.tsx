import RichText from '@/components/RichText'
import { notFound } from 'next/navigation'
import { BookOpen, Clock, Lock, Unlock, Printer, Trophy, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getLessonBySlug } from '@/data/all-lessons'
import { getLevelById } from '@/data/levels'
import { hasUnlockedAccess } from '@/lib/access'

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // Récupérer la leçon basée sur le slug
  const lesson = getLessonBySlug(slug)
  if (!lesson) {
    notFound()
  }
  const unlocked = hasUnlockedAccess()
  if (lesson.isLocked && !unlocked) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-xl mx-auto px-4 py-16">
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
            <h1 className="text-2xl font-bold mb-2">Contenu verrouillé</h1>
            <p className="text-gray-600 mb-6">
              Cette leçon est réservée (N2/N3/N4). Entre la clé pour tout déverrouiller.
            </p>
            <a
              href="/unlock"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Déverrouiller l’accès
            </a>
          </div>
        </div>
      </div>
    )
  }
  const level = getLevelById(lesson?.level || 'debutant')
  const isArabic = lesson.subject?.toLowerCase().includes('arabe')

  const handlePrint = () => {
    try {
      // Vérifier si window est disponible (côté client)
      if (typeof window !== 'undefined') {
        window.print()
      }
    } catch (error) {
      console.error('Erreur lors de l\'impression:', error)
      // Optionnel : afficher un message d'erreur à l'utilisateur
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/catalogue"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Retour au catalogue
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePrint}
                className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Printer className="h-4 w-4 mr-2" />
                Imprimer
              </button>
              
              {lesson.isLocked ? (
                <div className="flex items-center px-4 py-2 text-gray-500 bg-gray-100 rounded-lg">
                  <Lock className="h-4 w-4 mr-2" />
                  Contenu verrouillé
                </div>
              ) : (
                <div className="flex items-center px-4 py-2 text-green-600 bg-green-100 rounded-lg">
                  <Unlock className="h-4 w-4 mr-2" />
                  Contenu débloqué
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Lesson Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {lesson.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {lesson.summary}
              </p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  {lesson.subject}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {lesson.estimatedMinutes} minutes
                </div>
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 mr-2" />
                  {level?.name || 'Niveau'}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                📖
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            🎯 {lesson.body.introduction.title}
          </h2>

          <RichText markdown={lesson.body.introduction.content} rtl={isArabic} />

          {lesson.body.introduction.image && (
            <div className="mt-6">
              <Image
                src={lesson.body.introduction.image}
                alt={lesson.body.introduction.title}
                width={800}
                height={450}
                className="rounded-lg shadow-sm"
              />
            </div>
          )}

          {lesson.body.introduction.videoUrl && (
            <div className="mt-6 aspect-video">
              <iframe
                src={lesson.body.introduction.videoUrl}
                title="intro-video"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {lesson.body.mainContent.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                {section.type === 'concept' && '📚'}
                {section.type === 'example' && '💡'}
                {section.type === 'activity' && '🎮'}
                {section.type === 'exercise' && '✏️'}
                {section.type === 'summary' && '📝'}
                <span className="ml-3">{section.title}</span>
              </h2>

              <RichText markdown={section.content} rtl={isArabic} />

              {/* Examples */}
              {section.examples && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Exemples :</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.examples.map((example, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 border border-blue-100">
                        <div className="text-center">
                          {example.code && (
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                              {example.code}
                            </div>
                          )}
                          <div className="text-sm font-medium text-gray-900 mb-1">
                            {example.title}
                          </div>
                          <div className="text-xs text-gray-600 mb-2">
                            {example.description}
                          </div>
                          <div className="text-xs text-gray-500">
                            {example.explanation}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            📝 Conclusion
          </h2>

          <RichText
            markdown={lesson.body.conclusion.summary}
            rtl={isArabic}
          />

          {/* Key Takeaways */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Points Clés :</h3>
            <ul className="space-y-2">
              {lesson.body.conclusion.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-yellow-800">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Next Steps */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Prochaines Étapes :</h3>
            <ul className="space-y-2">
              {lesson.body.conclusion.nextSteps.map((step, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-green-800">
                  <span className="text-green-600 mt-1">→</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Resources */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Ressources Additionnelles :</h3>
            <div className="space-y-3">
            {(lesson.body.conclusion.additionalResources ?? []).length > 0 && (
  <section className="mt-8">
    <h2 className="text-lg font-semibold mb-3">Pour aller plus loin</h2>
    <ul className="list-disc pl-5 space-y-1">
      {(lesson.body.conclusion.additionalResources ?? []).map((r, i) => (
        <li key={i}>
          <a href={r.url} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
            {r.title}
          </a>
          {r.description ? <span className="text-gray-600"> — {r.description}</span> : null}
          {r.type ? <span className="ml-2 inline-block rounded bg-gray-100 px-2 py-0.5 text-xs">{r.type}</span> : null}
        </li>
      ))}
    </ul>
  </section>
)}
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            📚 Sources et Références
          </h2>
          <div className="space-y-4">
          {(lesson.sources ?? []).length > 0 && (
  <section className="mt-8">
    <h2 className="text-lg font-semibold mb-3">Ressources</h2>
    <ul className="list-disc pl-5 space-y-1">
      {(lesson.sources ?? []).map((r, i) => (
        <li key={i}>
          <a href={r.url} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
            {r.title}
          </a>
          {r.description ? <span className="text-gray-600"> — {r.description}</span> : null}
          {r.type ? <span className="ml-2 inline-block rounded bg-gray-100 px-2 py-0.5 text-xs">{r.type}</span> : null}
        </li>
      ))}
    </ul>
  </section>
)}
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
          <div className="flex items-center justify-between">
            <button className="flex items-center px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              ← Leçon précédente
            </button>
            
            <Link
              href={`/quiz/${lesson.slug}`}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Commencer le quiz
              <Trophy className="h-4 w-4 ml-2" />
            </Link>
            
            <button className="flex items-center px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              Leçon suivante →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
