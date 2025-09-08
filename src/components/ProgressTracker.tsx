'use client'

import { useState } from 'react'
import { CheckCircle, Clock, Star, BookOpen, Target, TrendingUp } from 'lucide-react'
import { useProgress } from '@/hooks/useProgress'
import { Lesson } from '@/data/lessons'

interface ProgressTrackerProps {
  lesson: Lesson
  onNotesToggle?: () => void
}

export default function ProgressTracker({ lesson, onNotesToggle }: ProgressTrackerProps) {
  const { getLessonProgress, markAsCompleted, addNotes } = useProgress()
  const [showNotes, setShowNotes] = useState(false)
  const [notes, setNotes] = useState('')
  const [isCompleting, setIsCompleting] = useState(false)

  const progress = getLessonProgress(lesson.slug)
  const isCompleted = progress?.completed || false
  const score = progress?.score
  const timeSpent = progress?.timeSpent || 0
  const savedNotes = progress?.notes || ''

  const handleComplete = async () => {
    setIsCompleting(true)
    // Simuler une évaluation (dans une vraie app, ce serait un quiz)
    const score = Math.floor(Math.random() * 20) + 80 // Score simulé entre 80-100
    markAsCompleted(lesson.slug, score)
    
    // Animation de succès
    setTimeout(() => {
      setIsCompleting(false)
    }, 1000)
  }

  const handleSaveNotes = () => {
    addNotes(lesson.slug, notes)
    setShowNotes(false)
  }

  const formatTime = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} min`
    }
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}min`
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-500" />
          Progression
        </h3>
        {isCompleted && (
          <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Terminée</span>
          </div>
        )}
      </div>

      {/* Statistiques de la leçon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Durée estimée</p>
          <p className="font-semibold text-gray-900 dark:text-white">
            {lesson.estimatedMinutes} min
          </p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
            <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Temps passé</p>
          <p className="font-semibold text-gray-900 dark:text-white">
            {formatTime(timeSpent)}
          </p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-2">
            <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Score</p>
          <p className="font-semibold text-gray-900 dark:text-white">
            {score ? `${score}/100` : '--'}
          </p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-2">
            <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Niveau</p>
          <p className="font-semibold text-gray-900 dark:text-white">
            {lesson.level}
          </p>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Progression
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {isCompleted ? '100%' : '0%'}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${
              isCompleted 
                ? 'bg-gradient-to-r from-green-500 to-green-600' 
                : 'bg-gradient-to-r from-blue-500 to-blue-600'
            }`}
            style={{ width: isCompleted ? '100%' : '0%' }}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        {!isCompleted ? (
          <button
            onClick={handleComplete}
            disabled={isCompleting}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isCompleting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Finalisation...
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4" />
                Marquer comme terminée
              </>
            )}
          </button>
        ) : (
          <div className="flex-1 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-6 py-3 rounded-lg font-medium text-center">
            ✅ Leçon terminée avec succès !
          </div>
        )}

        <button
          onClick={() => {
            setShowNotes(!showNotes)
            setNotes(savedNotes)
            onNotesToggle?.()
          }}
          className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          📝 Notes
        </button>
      </div>

      {/* Zone de notes */}
      {showNotes && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Mes notes sur cette leçon
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Ajoutez vos notes, questions, ou points importants..."
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
            rows={4}
          />
          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={() => setShowNotes(false)}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              Annuler
            </button>
            <button
              onClick={handleSaveNotes}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Sauvegarder
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
