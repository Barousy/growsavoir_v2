import RichText from '@/components/RichText'
import { notFound } from 'next/navigation'
import { BookOpen, Clock, Lock, Unlock, Trophy, ArrowLeft, ChevronRight, Share2, Bookmark, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getLessonBySlug } from '@/data/all-lessons'
import { getLevelById } from '@/data/levels'
import { hasUnlockedAccess } from '@/lib/access'
import PrintButton from '@/components/PrintButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredData from '@/components/StructuredData'
import ProgressTracker from '@/components/ProgressTracker'
import { Metadata } from 'next'

type SlugParams = Promise<{ slug: string }>

// Génération des métadonnées dynamiques pour chaque leçon
export async function generateMetadata({ params }: { params: SlugParams }): Promise<Metadata> {
  const { slug } = await params
  const lesson = getLessonBySlug(slug)
  
  if (!lesson) {
    return {
      title: 'Leçon non trouvée - GrowSavoir',
      description: 'Cette leçon n\'existe pas sur GrowSavoir.'
    }
  }

  const level = getLevelById(lesson.level)
  const levelName = level?.name || 'Niveau inconnu'
  
  // Description optimisée pour le SEO
  const description = `${lesson.summary} | ${lesson.subject} - ${levelName} | Apprenez avec GrowSavoir, plateforme éducative moderne pour l'apprentissage des langues et sciences islamiques.`
  
  // Mots-clés pour le SEO
  const keywords = [
    'growsavoir',
    'apprentissage',
    'éducation',
    'cours en ligne',
    lesson.subject.toLowerCase(),
    levelName.toLowerCase(),
    ...lesson.keywords,
    'islamique',
    'arabe',
    'français',
    'mathématiques'
  ].join(', ')

  return {
    title: `${lesson.title} - ${lesson.subject} | GrowSavoir`,
    description,
    keywords,
    authors: [{ name: 'GrowSavoir' }],
    creator: 'GrowSavoir',
    publisher: 'GrowSavoir',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://growsavoir.com'),
    alternates: {
      canonical: `/lessons/${slug}`,
    },
    openGraph: {
      title: lesson.title,
      description: lesson.summary,
      url: `https://growsavoir.com/lessons/${slug}`,
      siteName: 'GrowSavoir',
      locale: 'fr_FR',
      type: 'article',
      publishedTime: new Date().toISOString(),
      authors: ['GrowSavoir'],
      section: lesson.subject,
      tags: lesson.keywords,
      images: [
        {
          url: '/og-lesson-image.jpg', // Image à créer
          width: 1200,
          height: 630,
          alt: lesson.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: lesson.title,
      description: lesson.summary,
      images: ['/og-lesson-image.jpg'],
      creator: '@growsavoir',
      site: '@growsavoir',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // À remplacer par votre code
    },
  }
}

export default async function LessonPage({ params }: { params: SlugParams }) {
  const { slug } = await params


  // Récupérer la leçon basée sur le slug
  const lesson = getLessonBySlug(slug)
  if (!lesson) {
    notFound()
  }
  const unlocked = await hasUnlockedAccess()
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

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData lesson={lesson} />
      {/* Header */}
      <div className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            items={[
              { label: 'Catalogue', href: '/catalogue' },
              { label: lesson.subject || 'Matière', href: `/catalogue/${lesson.subject?.toLowerCase().replace(/\s+/g, '-')}` },
              { label: lesson.title }
            ]} 
            className="mb-4"
          />
          
          <div className="flex items-center justify-between gap-4 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/catalogue"
                className="group flex items-center text-gray-700 hover:text-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md px-1"
                aria-label="Retour au catalogue"
              >
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Retour au catalogue
              </Link>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors">
                <Bookmark className="h-4 w-4" />
              </button>
              <PrintButton />
              
              {lesson.isLocked ? (
                <div className="flex items-center px-4 py-2 text-gray-600 bg-gray-100 rounded-lg" aria-live="polite">
                  <Lock className="h-4 w-4 mr-2" />
                  Contenu verrouillé
                </div>
              ) : (
                <div className="flex items-center px-4 py-2 text-green-700 bg-green-100 rounded-lg" aria-live="polite">
                  <Unlock className="h-4 w-4 mr-2" />
                  Contenu débloqué
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Lesson Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug">
                {lesson.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                {lesson.summary}
              </p>
              
              <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
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
              <div className="text-2xl sm:text-3xl font-bold text-blue-600" aria-hidden>
                📖
              </div>
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="mb-6 sm:mb-8">
          <ProgressTracker lesson={lesson} />
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
            🎯 {lesson.body.introduction.title}
          </h2>

          <RichText markdown={lesson.body.introduction.content} rtl={isArabic} />

          {lesson.body.introduction.image && (

            <div className="mt-4 sm:mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lesson.body.introduction.image}
                alt={lesson.body.introduction.title}
                className="rounded-lg shadow-sm w-full h-auto"
              />
            </div>
          )}

          {lesson.body.introduction.videoUrl && (
            <div className="mt-4 sm:mt-6 aspect-video">
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
        <div className="space-y-6 sm:space-y-8">
          {lesson.body.mainContent.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
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
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 sm:p-6 mb-6">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-3 sm:mb-4">Exemples :</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {section.examples.map((example, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 border border-blue-100">
                        <div className="text-center">
                          {example.code && (
                            <div className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
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
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
            📝 Conclusion
          </h2>

          <RichText
            markdown={lesson.body.conclusion.summary}
            rtl={isArabic}
          />

          {/* Key Takeaways */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-yellow-900 mb-3">Points Clés :</h3>
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
            <h3 className="text-base sm:text-lg font-semibold text-green-900 mb-3">Prochaines Étapes :</h3>
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
            <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-3">Ressources Additionnelles :</h3>
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
        </li>
      ))}
    </ul>
  </section>
)}
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6 sm:mt-8">
          <div className="flex items-center justify-between gap-3">
            <button className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
              ← Leçon précédente
            </button>
            
            <Link
              href={`/quiz/${lesson.slug}`}
              className="flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Commencer le quiz"
            >
              Commencer le quiz
              <Trophy className="h-4 w-4 ml-2" />
            </Link>
            
            <button className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
              Leçon suivante →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
