import RichText from '@/components/RichText'
import { notFound } from 'next/navigation'
import { BookOpen, Clock, Trophy, ArrowLeft, Target, Users } from 'lucide-react'
import Link from 'next/link'
import LessonActions from '@/components/LessonActions'
import { getLessonBySlug } from '@/data/all-lessons'
import { getLevelById } from '@/data/levels'

export default function LessonPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Récupérer la leçon basée sur le slug
  const lesson = getLessonBySlug(slug)
  if (!lesson) {
    notFound()
  }

  const level = getLevelById(lesson?.level || 'debutant')
  const isArabic = lesson.subject?.toLowerCase().includes('arabe')

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

            <LessonActions isLocked={lesson.isLocked} />
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Lesson Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {lesson.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {lesson.summary}
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <BookOpen className="h-4 w-4" />
                  <span>{lesson.subject}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{lesson.estimatedMinutes} minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{lesson.ageGroup}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Trophy className="h-4 w-4" />
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      level?.color || 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {level?.name || 'Niveau'}
                  </span>
                </div>
              </div>

              {/* Learning Objectives */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Objectifs d&apos;apprentissage
                </h3>
                <ul className="space-y-2">
                  {lesson.learningObjectives.map((objective: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-2 text-blue-800">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-right ml-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">📖</div>
              <div className="text-sm text-gray-500">
                {lesson.metadata.version}
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lesson.body.introduction.image}
                alt={lesson.body.introduction.title}
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
          {lesson.body.mainContent.map((section: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                {section.type === 'concept' && '📚'}
                {section.type === 'example' && '💡'}
                {section.type === 'activity' && '🎮'}
                {section.type === 'exercise' && '✏️'}
                {section.type === 'summary' && '📝'}
                <span className="ml-3">{section.title}</span>
              </h2>

              {/* Rendu adapté par type */}
              {section.type === 'activity' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Activité :</h3>
                  <div className="bg-white rounded-lg p-4 border border-green-100">
                    <RichText markdown={section.content} rtl={isArabic} />
                  </div>
                </div>
              ) : section.type === 'exercise' ? (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">Exercice :</h3>
                  <div className="bg-white rounded-lg p-4 border border-purple-100">
                    <RichText markdown={section.content} rtl={isArabic} />
                  </div>
                </div>
              ) : (
                <>
                  <RichText markdown={section.content} rtl={isArabic} />

                  {section.image && (
                    <div className="mt-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={section.image}
                        alt={section.title}
                        className="rounded-lg shadow-sm"
                      />
                    </div>
                  )}

                  {section.videoUrl && (
                    <div className="mt-6 aspect-video">
                      <iframe
                        src={section.videoUrl}
                        title={`video-${index}`}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  )}
                </>
              )}

              {/* Examples */}
              {section.examples && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Exemples :</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.examples.map((example: any, idx: number) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg p-4 border border-blue-100"
                      >
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
              {lesson.body.conclusion.keyTakeaways.map((takeaway: string, idx: number) => (
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
              {lesson.body.conclusion.nextSteps.map((step: string, idx: number) => (
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
              {lesson.body.conclusion.additionalResources.map(
                (resource: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-blue-100">
                    <h4 className="font-medium text-blue-900 mb-1">{resource.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 underline"
                    >
                      Accéder à la ressource →
                    </a>
                  </div>
                )
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
            {lesson.sources.map((source: any, idx: number) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">{source.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{source.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 capitalize">{source.type}</span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 underline"
                  >
                    Visiter →
                  </a>
                </div>
              </div>
            ))}
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
