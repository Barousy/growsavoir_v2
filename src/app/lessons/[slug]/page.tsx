import { notFound } from 'next/navigation'
import { BookOpen, Clock, Trophy, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import LessonActions from '@/components/LessonActions'
import { getLessonBySlug } from '@/data/lessons'

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Récupérer la leçon basée sur le slug
  const lesson = getLessonBySlug(slug)

  if (!lesson) {
    notFound()
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
            
            <LessonActions isLocked={lesson.isLocked} />
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
                  {lesson.minutes} minutes
                </div>
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 mr-2" />
                  Niveau Débutant
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

        {/* Lesson Sections */}
        <div className="space-y-8">
          {lesson.body.sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                {section.type === 'introduction' && '🎯'}
                {section.type === 'lesson' && '📚'}
                {section.type === 'activity' && '🎮'}
                {section.type === 'vocabulary' && '📝'}
                <span className="ml-3">{section.title}</span>
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {section.content}
                </p>

                {/* Examples */}
                {section.examples && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Exemples :</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.examples.map((example, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 border border-blue-100">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                              {example.letter}
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              {example.name}
                            </div>
                            <div className="text-xs text-gray-600">
                              {example.pronunciation}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {example.meaning}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Instructions */}
                {section.instructions && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">Instructions :</h3>
                    <ol className="list-decimal list-inside space-y-2 text-green-800">
                      {section.instructions.map((instruction, idx) => (
                        <li key={idx}>{instruction}</li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Vocabulary */}
                {section.words && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-4">Vocabulaire :</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {section.words.map((word, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 border border-purple-100 text-center">
                          <div className="text-2xl font-bold text-purple-600 mb-2">
                            {word.arabic}
                          </div>
                          <div className="text-sm text-gray-600 mb-1">
                            {word.transliteration}
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            {word.french}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
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
