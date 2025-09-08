import Link from 'next/link'
import { BookOpen, Globe, Calculator, Microscope, Computer, Building2, Brain, Trophy, ArrowRight, Star, Users, Clock } from 'lucide-react'

export default function HomePage() {
  const subjects = [
    {
      key: 'arabic',
      title: 'Langue Arabe',
      emoji: '📖',
              description: 'Apprentissage de l&apos;arabe avec support RTL et harakât',
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e0e7ff" fill-opacity="0.3"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 mb-8">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Plateforme éducative moderne
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Bienvenue sur{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient">
                GrowSavoir
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto sm:text-xl">
              Découvrez un monde d&apos;apprentissage ludique et structuré. 
              Des langues aux sciences, en passant par les sciences islamiques, 
              chaque leçon est conçue pour grandir ensemble.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/catalogue"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <BookOpen className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Découvrir les leçons
                <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/quiz"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-xl shadow-lg hover:shadow-xl ring-1 ring-gray-300 hover:ring-gray-400 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <Trophy className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Démarrer un quiz
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">48+</div>
                <div className="text-sm text-gray-600">Leçons par matière</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4</div>
                <div className="text-sm text-gray-600">Niveaux progressifs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">10+</div>
                <div className="text-sm text-gray-600">Matières disponibles</div>
              </div>
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
                className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/50 transition-all duration-300"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{subject.emoji}</span>
                    <subject.icon className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {subject.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {subject.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <BookOpen className="h-3 w-3 mr-1" />
                      <span>48 leçons</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 mr-1 text-yellow-500" />
                      <span>4 niveaux</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-blue-600 font-medium group-hover:text-blue-700">
                    Explorer
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Levels Showcase Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Progression par Niveaux
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Une progression claire et structurée avec des couleurs distinctives pour chaque tranche d'âge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* N1 - Fondamentaux */}
            <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-emerald-50/0 group-hover:from-green-50/50 group-hover:to-emerald-50/50 rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">N1 - Fondamentaux</h3>
                <p className="text-sm text-gray-600 mb-4">Niveau d&apos;introduction pour les enfants de 6-8 ans</p>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                    N1 - Fondamentaux
                  </span>
                  <div className="flex items-center justify-center text-xs text-gray-500">
                    <Users className="h-3 w-3 mr-1" />
                    <span>6-8 ans</span>
                  </div>
                </div>
              </div>
            </div>

            {/* N2 - Intermédiaire */}
            <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/0 to-amber-50/0 group-hover:from-yellow-50/50 group-hover:to-amber-50/50 rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-yellow-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">N2 - Intermédiaire</h3>
                <p className="text-sm text-gray-600 mb-4">Niveau de développement pour les enfants de 9-11 ans</p>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                    N2 - Intermédiaire
                  </span>
                  <div className="flex items-center justify-center text-xs text-gray-500">
                    <Users className="h-3 w-3 mr-1" />
                    <span>9-11 ans</span>
                  </div>
                </div>
              </div>
            </div>

            {/* N3 - Avancé */}
            <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-red-50/0 group-hover:from-orange-50/50 group-hover:to-red-50/50 rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">N3 - Avancé</h3>
                <p className="text-sm text-gray-600 mb-4">Niveau de maîtrise pour les enfants de 12-14 ans</p>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
                    N3 - Avancé
                  </span>
                  <div className="flex items-center justify-center text-xs text-gray-500">
                    <Users className="h-3 w-3 mr-1" />
                    <span>12-14 ans</span>
                  </div>
                </div>
              </div>
            </div>

            {/* N4 - Expert */}
            <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-pink-50/0 group-hover:from-red-50/50 group-hover:to-pink-50/50 rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-red-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">N4 - Expert</h3>
                <p className="text-sm text-gray-600 mb-4">Niveau d&apos;excellence pour les adolescents de 15-18 ans</p>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
                    N4 - Expert
                  </span>
                  <div className="flex items-center justify-center text-xs text-gray-500">
                    <Users className="h-3 w-3 mr-1" />
                    <span>15-18 ans</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pourquoi Choisir GrowSavoir ?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Une approche moderne et complète de l'éducation islamique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/50 rounded-2xl transition-all duration-300"></div>
              <div className="relative text-center">
                <div className="mx-auto h-20 w-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Gamification
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Badges, séries et progression pour motiver l&apos;apprentissage et maintenir l'engagement
                </p>
                <div className="mt-4 flex items-center justify-center text-sm text-blue-600 font-medium">
                  <span>Découvrir les récompenses</span>
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-emerald-50/0 group-hover:from-green-50/50 group-hover:to-emerald-50/50 rounded-2xl transition-all duration-300"></div>
              <div className="relative text-center">
                <div className="mx-auto h-20 w-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Contenu Structuré
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Parcours progressifs adaptés à chaque tranche d'âge avec une pédagogie éprouvée
                </p>
                <div className="mt-4 flex items-center justify-center text-sm text-green-600 font-medium">
                  <span>Voir la progression</span>
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-pink-50/0 group-hover:from-purple-50/50 group-hover:to-pink-50/50 rounded-2xl transition-all duration-300"></div>
              <div className="relative text-center">
                <div className="mx-auto h-20 w-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Multilingue
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Support complet FR/EN/AR avec RTL pour l'arabe et interface adaptative
                </p>
                <div className="mt-4 flex items-center justify-center text-sm text-purple-600 font-medium">
                  <span>Changer de langue</span>
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
