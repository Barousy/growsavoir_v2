import Link from 'next/link'
import { BookOpen, Globe, Calculator, Microscope, Computer, Building2, Brain, Trophy, ArrowRight, Star, Users, Clock, Sparkles, Zap } from 'lucide-react'

export default function HomePage() {
  const subjects = [
    {
      key: 'arabic',
      title: 'Langue Arabe',
      emoji: '📚',
      description: 'Apprentissage de l\'arabe avec support RTL et harakât',
      color: 'from-blue-500 to-blue-600',
      icon: Globe,
      gradient: 'from-blue-50 to-blue-100',
      stats: { lessons: 48, levels: 4, difficulty: 'Progressif' }
    },
    {
      key: 'french',
      title: 'Langue Française',
      emoji: '🇫🇷',
      description: 'Maîtrise de la langue française',
      color: 'from-red-500 to-red-600',
      icon: BookOpen,
      gradient: 'from-red-50 to-red-100',
      stats: { lessons: 48, levels: 4, difficulty: 'Progressif' }
    },
    {
      key: 'english',
      title: 'Langue Anglaise',
      emoji: '🇬🇧',
      description: 'Apprentissage de l\'anglais',
      color: 'from-indigo-500 to-indigo-600',
      icon: BookOpen,
      gradient: 'from-indigo-50 to-indigo-100',
      stats: { lessons: 48, levels: 4, difficulty: 'Progressif' }
    },
    {
      key: 'mathematics',
      title: 'Mathématiques',
      emoji: '🧮',
      description: 'Sciences mathématiques et logique',
      color: 'from-green-500 to-green-600',
      icon: Calculator,
      gradient: 'from-green-50 to-green-100',
      stats: { lessons: 48, levels: 4, difficulty: 'Progressif' }
    },
    {
      key: 'sciences',
      title: 'Sciences',
      emoji: '🔬',
      description: 'Sciences naturelles et expérimentales',
      color: 'from-purple-500 to-purple-600',
      icon: Microscope,
      gradient: 'from-purple-50 to-purple-100',
      stats: { lessons: 48, levels: 4, difficulty: 'Progressif' }
    },
    {
      key: 'computer-science',
      title: 'Informatique',
      emoji: '💻',
      description: 'Programmation et technologies numériques',
      color: 'from-gray-500 to-gray-600',
      icon: Computer,
      gradient: 'from-gray-50 to-gray-100',
      stats: { lessons: 48, levels: 4, difficulty: 'Progressif' }
    },
    {
      key: 'aqida',
      title: 'Aqida',
      emoji: '🕌',
      description: 'Croyance islamique authentique',
      color: 'from-yellow-500 to-yellow-600',
      icon: Building2,
      gradient: 'from-yellow-50 to-yellow-100',
      stats: { lessons: 48, levels: 4, difficulty: 'Progressif' }
    },
    {
      key: 'personal-development',
      title: 'Développement Personnel',
      emoji: '✨',
      description: 'Adab et éthique islamique',
      color: 'from-pink-500 to-pink-600',
      icon: Brain,
      gradient: 'from-pink-50 to-pink-100',
      stats: { lessons: 48, levels: 4, difficulty: 'Progressif' }
    },
    {
      key: 'fiqh',
      title: 'Fiqh',
      emoji: '⚖️',
      description: 'Jurisprudence islamique et règles pratiques',
      color: 'from-emerald-500 to-emerald-600',
      icon: Building2,
      gradient: 'from-emerald-50 to-emerald-100',
      stats: { lessons: 48, levels: 4, difficulty: 'Progressif' }
    },
    {
      key: 'sira',
      title: 'Sira',
      emoji: '📖',
      description: 'Biographie du Prophète et histoire islamique',
      color: 'from-amber-500 to-amber-600',
      icon: BookOpen,
      gradient: 'from-amber-50 to-amber-100',
      stats: { lessons: 48, levels: 4, difficulty: 'Progressif' }
    },
    {
      key: 'islamic-history',
      title: 'Histoire',
      emoji: '🏛️',
      description: 'Histoire de l\'Islam et civilisation musulmane',
      color: 'from-orange-500 to-orange-600',
      icon: BookOpen,
      gradient: 'from-orange-50 to-orange-100',
      stats: { lessons: 48, levels: 4, difficulty: 'Progressif' }
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
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
              Découvrez un monde d'apprentissage ludique et structuré. 
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((subject) => (
              <Link
                key={subject.key}
                href={`/catalogue/${subject.key}`}
                className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-transparent overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  {/* Header with emoji and icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{subject.emoji}</span>
                      </div>
                      {/* Floating particles effect */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-100"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-200"></div>
                    </div>
                    <subject.icon className="h-8 w-8 text-gray-300 group-hover:text-gray-400 transition-all duration-300 group-hover:scale-110" />
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {subject.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-2">
                    {subject.description}
                  </p>
                  
                  {/* Enhanced stats */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">{subject.stats.lessons} leçons</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-700">{subject.stats.levels} niveaux</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">{subject.stats.difficulty}</span>
                      </div>
                      <div className="px-2 py-1 bg-gray-100 rounded-full">
                        <span className="text-xs font-medium text-gray-600">Gratuit</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                      <span>Explorer</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${subject.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* N1 - Fondamentaux */}
            <div className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-4xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">N1 - Fondamentaux</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Niveau d'introduction pour les enfants de 6-8 ans</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">6-8 ans</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
                    <span className="text-sm font-bold text-green-800">Gratuit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* N2 - Intermédiaire */}
            <div className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-4xl">🌿</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">N2 - Intermédiaire</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Niveau de développement pour les enfants de 9-11 ans</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">9-11 ans</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full">
                    <span className="text-sm font-bold text-yellow-800">Premium</span>
                  </div>
                </div>
              </div>
            </div>

            {/* N3 - Avancé */}
            <div className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-4xl">🌳</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">N3 - Avancé</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Niveau de maîtrise pour les enfants de 12-14 ans</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium text-gray-700">12-14 ans</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full">
                    <span className="text-sm font-bold text-orange-800">Premium</span>
                  </div>
                </div>
              </div>
            </div>

            {/* N4 - Expert */}
            <div className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="text-4xl">🌟</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">N4 - Expert</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Niveau d'excellence pour les adolescents de 15-18 ans</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="h-4 w-4 text-purple-500" />
                    <span className="text-sm font-medium text-gray-700">15-18 ans</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                    <span className="text-sm font-bold text-purple-800">Premium</span>
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
                  Badges, séries et progression pour motiver l'apprentissage et maintenir l'engagement
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
