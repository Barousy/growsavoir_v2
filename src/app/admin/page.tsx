'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Users, Trophy, Settings, Plus, Edit, Trash2, Eye } from 'lucide-react'

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login')
    } else if (session && session.user?.role !== 'ADMIN') {
      router.push('/')
    }
  }, [status, session, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    )
  }

  if (!session || session.user?.role !== 'ADMIN') {
    return null
  }

  const stats = [
    {
      title: 'Utilisateurs',
      value: '1,234',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Leçons',
      value: '156',
      change: '+8%',
      icon: BookOpen,
      color: 'text-green-600'
    },
    {
      title: 'Quiz',
      value: '89',
      change: '+15%',
      icon: Trophy,
      color: 'text-yellow-600'
    },
    {
      title: 'Matières',
      value: '11',
      change: '+2%',
      icon: Settings,
      color: 'text-purple-600'
    }
  ]

  const recentActions = [
    {
      action: 'Nouvelle leçon créée',
      subject: 'Langue Arabe',
      user: 'Admin',
      time: 'Il y a 2 heures',
      type: 'create'
    },
    {
      action: 'Utilisateur mis à jour',
      subject: 'Profil utilisateur',
      user: 'Admin',
      time: 'Il y a 4 heures',
      type: 'update'
    },
    {
      action: 'Quiz modifié',
      subject: 'Mathématiques',
      user: 'Admin',
      time: 'Il y a 6 heures',
      type: 'update'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Tableau de Bord Administrateur
              </h1>
              <p className="mt-2 text-gray-600">
                Gérez le contenu et les utilisateurs de GrowSavoir
              </p>
            </div>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              ADMIN
            </Badge>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.change} ce mois
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Actions Rapides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admin/lessons/new">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <Plus className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Nouvelle Leçon</h3>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/admin/users">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Gérer Utilisateurs</h3>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/admin/subjects">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <BookOpen className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Gérer Matières</h3>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/admin/settings">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <Settings className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Paramètres</h3>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Recent Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Actions Récentes</h2>
          <Card>
            <CardHeader>
              <CardTitle>Activité Récente</CardTitle>
              <CardDescription>
                Dernières modifications effectuées
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActions.map((action, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-2 h-2 rounded-full ${
                        action.type === 'create' ? 'bg-green-500' : 
                        action.type === 'update' ? 'bg-blue-500' : 'bg-red-500'
                      }`}></div>
                      <div>
                        <p className="font-medium">{action.action}</p>
                        <p className="text-sm text-gray-600">{action.subject}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{action.user}</p>
                      <p className="text-xs text-gray-500">{action.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Management */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestion du Contenu</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Leçons</CardTitle>
                <CardDescription>
                  Gérez le contenu éducatif
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Total des leçons</span>
                    <Badge variant="outline">156</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Leçons publiées</span>
                    <Badge variant="secondary">142</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">En attente</span>
                    <Badge variant="destructive">14</Badge>
                  </div>
                  <Link href="/admin/lessons">
                    <Button className="w-full mt-4">
                      <Eye className="h-4 w-4 mr-2" />
                      Voir Toutes les Leçons
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Utilisateurs</CardTitle>
                <CardDescription>
                  Gérez les comptes utilisateurs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Total des utilisateurs</span>
                    <Badge variant="outline">1,234</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Élèves</span>
                    <Badge variant="secondary">987</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Parents/Enseignants</span>
                    <Badge variant="secondary">234</Badge>
                  </div>
                  <Link href="/admin/users">
                    <Button className="w-full mt-4">
                      <Users className="h-4 w-4 mr-2" />
                      Gérer les Utilisateurs
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
