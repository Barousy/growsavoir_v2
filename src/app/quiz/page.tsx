import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Clock, Trophy, Star } from 'lucide-react'

export default function QuizPage() {
  const availableQuizzes = [
    {
      id: '1',
      title: 'Alphabet Arabe - Niveau Débutant',
      subject: 'Langue Arabe',
      duration: '10 min',
      questions: 5,
      difficulty: 'Débutant',
      description: 'Testez vos connaissances sur l\'alphabet arabe',
      color: 'from-blue-500 to-blue-600',
      emoji: '📖'
    },
    {
      id: '2',
      title: 'Introduction à l\'Informatique',
      subject: 'Informatique',
      duration: '15 min',
      questions: 8,
      difficulty: 'Débutant',
      description: 'Évaluez votre compréhension des bases de l\'informatique',
      color: 'from-green-500 to-green-600',
      emoji: '💻'
    },
    {
      id: '3',
      title: 'Les Six Piliers de la Foi',
      subject: 'Aqida',
      duration: '20 min',
      questions: 10,
      difficulty: 'Débutant',
      description: 'Testez vos connaissances sur les fondements de la foi islamique',
      color: 'from-yellow-500 to-yellow-600',
      emoji: '🕌'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quiz et Évaluations
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Testez vos connaissances et suivez votre progression
            </p>
          </div>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableQuizzes.map((quiz) => (
            <Card key={quiz.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* Quiz Header */}
              <div className={`bg-gradient-to-r ${quiz.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{quiz.emoji}</span>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {quiz.difficulty}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold">{quiz.title}</h3>
                <p className="text-sm opacity-90 mt-2">{quiz.description}</p>
              </div>

              {/* Quiz Content */}
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Subject */}
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{quiz.subject}</span>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{quiz.duration}</span>
                  </div>

                  {/* Questions */}
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{quiz.questions} questions</span>
                  </div>

                  {/* Action Button */}
                  <Link href={`/quiz/${quiz.id}`} className="block">
                    <Button className="w-full">
                      Commencer le Quiz
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à tester vos connaissances ?
            </h2>
            <p className="text-gray-600 mb-6">
              Choisissez un quiz ci-dessus et commencez à évaluer votre niveau. 
              Chaque quiz vous donnera un score et des badges pour récompenser vos efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalogue">
                <Button variant="outline">
                  Explorer les Leçons
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button>
                  Créer un Compte
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
