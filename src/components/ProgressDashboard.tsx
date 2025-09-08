'use client'

import { useState } from 'react'
import { Trophy, BookOpen, Clock, Target, TrendingUp, Award, Calendar, BarChart3 } from 'lucide-react'
import { useProgress } from '@/hooks/useProgress'
import { getAllLessons } from '@/data/all-lessons'
import { getLevelById } from '@/data/levels'

export default function ProgressDashboard() {
  const { getOverallProgress, getSubjectProgress } = useProgress()
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'all'>('all')
  
  const allLessons = getAllLessons()
  const lessonsArray = Object.values(allLessons)
  const overallProgress = getOverallProgress(lessonsArray)

  const formatTime = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} min`
    }
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}min`
  }

  const getStreakDays = () => {
    // Simulation d'une série de jours consécutifs
    return Math.floor(Math.random() * 30) + 1
  }

  const getWeeklyGoal = () => {
    return 5 // Objectif de 5 leçons par semaine
  }

  const getCompletedThisWeek = () => {
    // Simulation des leçons complétées cette semaine
    return Math.floor(Math.random() * 8) + 1
  }

  const weeklyProgress = getCompletedThisWeek()
  const weeklyGoal = getWeeklyGoal()
  const weeklyPercentage = (weeklyProgress / weeklyGoal) * 100

  return (
    <div className="space-y-6">
      {/* En-tête avec statistiques principales */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Trophy className="w-6 h-6" />
            Tableau de Bord
          </h2>
          <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{getStreakDays()} jours de suite</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">{overallProgress.completedLessons}</div>
            <div className="text-blue-100">Leçons terminées</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">{formatTime(overallProgress.totalTimeSpent)}</div>
            <div className="text-blue-100">Temps d'étude</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">{Math.round(overallProgress.completionPercentage)}%</div>
            <div className="text-blue-100">Progression globale</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">{overallProgress.subjectProgress.length}</div>
            <div className="text-blue-100">Matières étudiées</div>
          </div>
        </div>
      </div>

      {/* Objectif hebdomadaire */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-green-500" />
            Objectif de la semaine
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {weeklyProgress}/{weeklyGoal} leçons
          </span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
          <div 
            className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(weeklyPercentage, 100)}%` }}
          />
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            {weeklyPercentage >= 100 ? '🎉 Objectif atteint !' : `${Math.round(weeklyGoal - weeklyProgress)} leçons restantes`}
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            {Math.round(weeklyPercentage)}%
          </span>
        </div>
      </div>

      {/* Progression par matière */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-purple-500" />
          Progression par matière
        </h3>
        
        <div className="space-y-4">
          {overallProgress.subjectProgress.map((subject) => {
            const percentage = subject.totalLessons > 0 
              ? (subject.completedLessons / subject.totalLessons) * 100 
              : 0

            return (
              <div key={subject.subject} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {subject.subject}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {subject.completedLessons}/{subject.totalLessons}
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{formatTime(subject.totalTimeSpent)} d'étude</span>
                  <span>{Math.round(percentage)}% complété</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Récompenses et badges */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-500" />
          Récompenses
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { 
              name: 'Premier Pas', 
              description: 'Première leçon terminée',
              earned: overallProgress.completedLessons >= 1,
              icon: '🎯'
            },
            { 
              name: 'Étudiant Assidu', 
              description: '5 leçons terminées',
              earned: overallProgress.completedLessons >= 5,
              icon: '📚'
            },
            { 
              name: 'Marathonien', 
              description: '1 heure d\'étude',
              earned: overallProgress.totalTimeSpent >= 60,
              icon: '⏰'
            },
            { 
              name: 'Expert', 
              description: '50% de progression',
              earned: overallProgress.completionPercentage >= 50,
              icon: '🏆'
            },
          ].map((badge, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                badge.earned 
                  ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20' 
                  : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700'
              }`}
            >
              <div className="text-2xl mb-2">{badge.icon}</div>
              <div className={`font-medium text-sm ${
                badge.earned ? 'text-yellow-800 dark:text-yellow-200' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {badge.name}
              </div>
              <div className={`text-xs ${
                badge.earned ? 'text-yellow-600 dark:text-yellow-300' : 'text-gray-400 dark:text-gray-500'
              }`}>
                {badge.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistiques d'activité */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          Activité récente
        </h3>
        
        <div className="space-y-3">
          {[
            { action: 'Leçon terminée', subject: 'Langue Arabe', time: 'Il y a 2 heures' },
            { action: 'Note ajoutée', subject: 'Mathématiques', time: 'Il y a 1 jour' },
            { action: 'Leçon commencée', subject: 'Sciences', time: 'Il y a 2 jours' },
            { action: 'Badge débloqué', subject: 'Premier Pas', time: 'Il y a 3 jours' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <div className="flex-1">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.action}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                  {activity.subject}
                </span>
              </div>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
