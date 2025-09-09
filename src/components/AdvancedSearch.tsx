'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, X, Clock, BookOpen, Star, Lock, Unlock } from 'lucide-react'
import { getAllLessons } from '@/data/all-lessons'
import { getLevelById } from '@/data/levels'
import Link from 'next/link'

interface SearchFilters {
  query: string
  subject: string
  level: string
  difficulty: string
  duration: string
  isLocked: string
  sortBy: string
}

export default function AdvancedSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    subject: '',
    level: '',
    difficulty: '',
    duration: '',
    isLocked: '',
    sortBy: 'title'
  })
  const [results, setResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const allLessons = getAllLessons()
  const lessons = Object.values(allLessons)

  const subjects = [...new Set(lessons.map(lesson => lesson.subject))]
  const levels = [...new Set(lessons.map(lesson => lesson.level))]

  const searchLessons = () => {
    setIsSearching(true)
    
    let filtered = lessons.filter(lesson => {
      // Recherche textuelle
      if (filters.query) {
        const query = filters.query.toLowerCase()
        const matchesQuery = 
          lesson.title.toLowerCase().includes(query) ||
          lesson.summary.toLowerCase().includes(query) ||
          lesson.keywords.some(keyword => keyword.toLowerCase().includes(query)) ||
          lesson.subject.toLowerCase().includes(query)
        
        if (!matchesQuery) return false
      }

      // Filtre par matière
      if (filters.subject && lesson.subject !== filters.subject) return false

      // Filtre par niveau
      if (filters.level && lesson.level !== filters.level) return false

      // Filtre par difficulté
      if (filters.difficulty) {
        const level = getLevelById(lesson.level)
        if (level?.difficulty?.toString() !== filters.difficulty) return false
      }

      // Filtre par durée
      if (filters.duration) {
        const duration = lesson.estimatedMinutes
        switch (filters.duration) {
          case 'short':
            if (duration > 15) return false
            break
          case 'medium':
            if (duration < 15 || duration > 30) return false
            break
          case 'long':
            if (duration < 30) return false
            break
        }
      }

      // Filtre par statut de verrouillage
      if (filters.isLocked !== '') {
        const isLocked = filters.isLocked === 'true'
        if (lesson.isLocked !== isLocked) return false
      }

      return true
    })

    // Tri
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'title':
          return a.title.localeCompare(b.title)
        case 'duration':
          return a.estimatedMinutes - b.estimatedMinutes
        case 'level':
          return a.level.localeCompare(b.level)
        case 'subject':
          return a.subject.localeCompare(b.subject)
        default:
          return 0
      }
    })

    setResults(filtered)
    setIsSearching(false)
  }

  useEffect(() => {
    if (filters.query || filters.subject || filters.level || filters.difficulty || filters.duration || filters.isLocked) {
      searchLessons()
    } else {
      setResults([])
    }
  }, [filters])

  const resetFilters = () => {
    setFilters({
      query: '',
      subject: '',
      level: '',
      difficulty: '',
      duration: '',
      isLocked: '',
      sortBy: 'title'
    })
    setResults([])
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
      >
        <Search className="w-4 h-4" />
        <span>Recherche avancée</span>
        <Filter className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 p-6 w-96 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recherche avancée</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-6">
            {/* Recherche textuelle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Recherche
              </label>
              <input
                type="text"
                value={filters.query}
                onChange={(e) => setFilters(prev => ({ ...prev, query: e.target.value }))}
                placeholder="Titre, description, mots-clés..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Matière */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Matière
              </label>
              <select
                value={filters.subject}
                onChange={(e) => setFilters(prev => ({ ...prev, subject: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Toutes les matières</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            {/* Niveau */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Niveau
              </label>
              <select
                value={filters.level}
                onChange={(e) => setFilters(prev => ({ ...prev, level: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Tous les niveaux</option>
                {levels.map(level => {
                  const levelData = getLevelById(level)
                  return (
                    <option key={level} value={level}>
                      {levelData?.name || level}
                    </option>
                  )
                })}
              </select>
            </div>

            {/* Durée */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Durée
              </label>
              <select
                value={filters.duration}
                onChange={(e) => setFilters(prev => ({ ...prev, duration: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Toutes les durées</option>
                <option value="short">Court (&lt; 15 min)</option>
                <option value="medium">Moyen (15-30 min)</option>
                <option value="long">Long (&gt; 30 min)</option>
              </select>
            </div>

            {/* Statut */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Statut
              </label>
              <select
                value={filters.isLocked}
                onChange={(e) => setFilters(prev => ({ ...prev, isLocked: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Tous</option>
                <option value="false">Gratuit</option>
                <option value="true">Payant</option>
              </select>
            </div>

            {/* Tri */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Trier par
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="title">Titre</option>
                <option value="duration">Durée</option>
                <option value="level">Niveau</option>
                <option value="subject">Matière</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Réinitialiser
            </button>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {isSearching ? 'Recherche...' : `${results.length} résultat${results.length > 1 ? 's' : ''}`}
            </div>
          </div>

          {/* Résultats */}
          {results.length > 0 && (
            <div className="mt-6 max-h-96 overflow-y-auto">
              <div className="space-y-2">
                {results.map(lesson => (
                  <Link
                    key={lesson.slug}
                    href={`/lessons/${lesson.slug}`}
                    className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">{lesson.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{lesson.summary}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            {lesson.subject}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {lesson.estimatedMinutes} min
                          </span>
                          {lesson.isLocked ? (
                            <span className="flex items-center gap-1 text-orange-500">
                              <Lock className="w-3 h-3" />
                              Payant
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-green-500">
                              <Unlock className="w-3 h-3" />
                              Gratuit
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}