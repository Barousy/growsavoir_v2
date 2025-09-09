import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { BookOpen, Trophy, Clock, TrendingUp, Target, Award } from 'lucide-react'
import { DynamicProgressDashboard } from '@/components/DynamicImports'

export default function ProgressionPage() {
  const subjects = [
    {
      name: 'Langue Arabe',
      progress: 75,
      lessonsCompleted: 15,
      totalLessons: 20,
      currentLevel: 'Intermédiaire',
      nextLevel: 'Avancé',
      color: 'from-blue-500 to-blue-600',
      emoji: '📖'
    },
    {
      name: 'Informatique',
      progress: 60,
      lessonsCompleted: 12,
      totalLessons: 20,
      currentLevel: 'Débutant',
      nextLevel: 'Intermédiaire',
      color: 'from-green-500 to-green-600',
      emoji: '💻'
    },
    {
      name: 'Aqida',
      progress: 90,
      lessonsCompleted: 18,
      totalLessons: 20,
      currentLevel: 'Avancé',
      nextLevel: 'Expert',
      color: 'from-yellow-500 to-yellow-600',
      emoji: '🕌'
    },
    {
      name: 'Mathématiques',
      progress: 45,
      lessonsCompleted: 9,
      totalLessons: 20,
      currentLevel: 'Débutant',
      nextLevel: 'Intermédiaire',
      color: 'from-purple-500 to-purple-600',
      emoji: '🔢'
    }
  ]

  const achievements = [
    {
      title: 'Première Leçon',
      description: 'A complété sa première leçon',
      icon: '🎯',
      earnedAt: 'Il y a 2 semaines',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      title: 'Série de 3 jours',
      description: 'A étudié 3 jours consécutifs',
      icon: '🔥',
      earnedAt: 'Il y a 1 semaine',
      color: 'bg-orange-100 text-orange-800'
    },
    {
      title: 'Score Parfait',
      description: 'A obtenu 100% à un quiz',
      icon: '⭐',
      earnedAt: 'Il y a 3 jours',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'Explorateur',
      description: 'A exploré 3 matières différentes',
      icon: '🗺️',
      earnedAt: 'Hier',
      color: 'bg-green-100 text-green-800'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Votre Progression
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Suivez votre évolution et célébrez vos accomplissements
            </p>
          </div>
        </div>
      </div>

      {/* Progress Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DynamicProgressDashboard />
      </div>

      {/* Legacy Stats Overview - Hidden for now */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Leçons Complétées</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">54</div>
              <p className="text-xs text-muted-foreground">
                +8 cette semaine
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Score Moyen</CardTitle>
              <Trophy className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">
                +3% ce mois
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Série Actuelle</CardTitle>
              <Clock className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 jours</div>
              <p className="text-xs text-muted-foreground">
                Record: 15 jours
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Badges Obtenus</CardTitle>
              <Award className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                +2 ce mois
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Subject Progress */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Progression par Matière</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${subject.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-2xl">{subject.emoji}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{subject.name}</CardTitle>
                      <CardDescription>
                        Niveau {subject.currentLevel} • {subject.lessonsCompleted}/{subject.totalLessons} leçons
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progression</span>
                        <span>{subject.progress}%</span>
                      </div>
                      <Progress value={subject.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Niveau actuel:</span>
                      <Badge variant="outline">{subject.currentLevel}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Prochain niveau:</span>
                      <Badge variant="secondary">{subject.nextLevel}</Badge>
                    </div>

                    <Link href={`/catalogue/${subject.name.toLowerCase().replace(' ', '-')}`}>
                      <Button variant="outline" className="w-full">
                        Continuer l'apprentissage
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Badges et Accomplissements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{achievement.icon}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                  <Badge variant="outline" className={achievement.color}>
                    {achievement.earnedAt}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Continuez votre progression !
              </h3>
              <p className="text-gray-600 mb-6">
                Chaque leçon vous rapproche de vos objectifs. Gardez le rythme et débloquez de nouveaux niveaux.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/catalogue">
                  <Button>
                    Explorer les Leçons
                  </Button>
                </Link>
                <Link href="/quiz">
                  <Button variant="outline">
                    Passer un Quiz
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
