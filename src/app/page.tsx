import Link from 'next/link'
import { BookOpen, Globe, Calculator, Microscope, Computer, Building2, Brain, Trophy } from 'lucide-react'

export default function HomePage() {
  const subjects = [
    {
      key: 'arabic',
      title: 'Langue Arabe',
      emoji: '📖',
      description: 'Apprentissage de l\'arabe avec support RTL et harakât',
      color: 'bg-blue-500',
      icon: Globe,
    },
    {
      key: 'french',
      title: 'Langue Française',
      emoji: '🇫🇷',
      description: 'Maîtrise de la langue française',
      color: 'bg-red-500',
      icon: BookOpen,
    },
    {
      key: 'english',
      title: 'Langue Anglaise',
      emoji: '🇬🇧',
      description: 'Apprentissage de l\'anglais',
      color: 'bg-indigo-500',
      icon: BookOpen,
    },
    {
      key: 'mathematics',
      title: 'Mathématiques',
      emoji: '🔢',
      description: 'Sciences mathématiques et logique',
      color: 'bg-green-500',
      icon: Calculator,
    },
    {
      key: 'sciences',
      title: 'Sciences',
      emoji: '🔬',
      description: 'Sciences naturelles et expérimentales',
      color: 'bg-purple-500',
      icon: Microscope,
    },
    {
      key: 'computer-science',
      title: 'Informatique',
      emoji: '💻',
      description: 'Programmation et technologies numériques',
      color: 'bg-gray-500',
      icon: Computer,
    },
    {
      key: 'aqida',
      title: 'Aqida',
      emoji: '🕌',
      description: 'Croyance islamique authentique',
      color: 'bg-yellow-500',
      icon: Building2,
    },
    {
      key: 'personal-development',
      title: 'Développement Personnel',
      emoji: '🌟',
      description: 'Adab et éthique islamique',
      color: 'bg-pink-500',
      icon: Brain,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Bienvenue sur{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                GrowSavoir v2.0
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Découvrez un monde d'apprentissage ludique et structuré. 
              Des langues aux sciences, en passant par les sciences islamiques, 
              chaque leçon est conçue pour grandir ensemble.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/catalogue"
                className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Découvrir les leçons
              </Link>
              <Link
                href="/quiz"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Démarrer un quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos Matières
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Un curriculum complet adapté à tous les âges et niveaux
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject) => (
              <Link
                key={subject.key}
                href={`/catalogue/${subject.key}`}
                className="group relative bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{subject.emoji}</span>
                  <subject.icon className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {subject.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {subject.description}
                </p>
                <div className="mt-4 flex items-center text-sm text-blue-600 font-medium">
                  Explorer
                  <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pourquoi Choisir GrowSavoir ?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gamification
              </h3>
              <p className="text-gray-600">
                Badges, séries et progression pour motiver l'apprentissage
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Contenu Structuré
              </h3>
              <p className="text-gray-600">
                Parcours progressifs adaptés à chaque tranche d'âge
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Multilingue
              </h3>
              <p className="text-gray-600">
                Support complet FR/EN/AR avec RTL pour l'arabe
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
