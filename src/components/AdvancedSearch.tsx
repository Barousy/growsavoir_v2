'use client'

import { useState } from 'react'
import { Search, Filter, X, Clock, Users, BookOpen } from 'lucide-react'

interface SearchFilters {
  query: string
  ageGroup: string
  level: string
  subject: string
}

interface AdvancedSearchProps {
  onSearch: (filters: SearchFilters) => void
  className?: string
}

export default function AdvancedSearch({ onSearch, className = '' }: AdvancedSearchProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    ageGroup: '',
    level: '',
    subject: ''
  })

  const ageGroups = [
    { key: 'preschool', label: 'Maternelle', age: '3-6 ans' },
    { key: 'primary', label: 'Primaire', age: '7-10 ans' },
    { key: 'middle', label: 'Collège', age: '11-14 ans' },
    { key: 'high', label: 'Lycée', age: '15-18 ans' }
  ]

  const levels = [
    { key: 'n1', label: 'N1 - Fondamentaux' },
    { key: 'n2', label: 'N2 - Intermédiaire' },
    { key: 'n3', label: 'N3 - Avancé' },
    { key: 'n4', label: 'N4 - Expert' }
  ]

  const subjects = [
    { key: 'arabic', label: 'Langue Arabe' },
    { key: 'french', label: 'Langue Française' },
    { key: 'english', label: 'Langue Anglaise' },
    { key: 'mathematics', label: 'Mathématiques' },
    { key: 'sciences', label: 'Sciences' },
    { key: 'aqida', label: 'Aqida' },
    { key: 'fiqh', label: 'Fiqh' }
  ]

  const handleSearch = () => {
    onSearch(filters)
  }

  const clearFilters = () => {
    setFilters({
      query: '',
      ageGroup: '',
      level: '',
      subject: ''
    })
    onSearch({
      query: '',
      ageGroup: '',
      level: '',
      subject: ''
    })
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== '')

  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-4 ${className}`}>
      {/* Search Bar */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une leçon..."
            value={filters.query}
            onChange={(e) => setFilters(prev => ({ ...prev, query: e.target.value }))}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Rechercher
        </button>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`p-2 rounded-lg transition-colors ${
            isExpanded ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Filter className="h-4 w-4" />
        </button>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Advanced Filters */}
      {isExpanded && (
        <div className="border-t border-gray-200 pt-4 space-y-4 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Age Group Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="h-4 w-4 inline mr-1" />
                Tranche d'âge
              </label>
              <select
                value={filters.ageGroup}
                onChange={(e) => setFilters(prev => ({ ...prev, ageGroup: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Toutes les tranches</option>
                {ageGroups.map(group => (
                  <option key={group.key} value={group.key}>
                    {group.label} ({group.age})
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <BookOpen className="h-4 w-4 inline mr-1" />
                Niveau
              </label>
              <select
                value={filters.level}
                onChange={(e) => setFilters(prev => ({ ...prev, level: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Tous les niveaux</option>
                {levels.map(level => (
                  <option key={level.key} value={level.key}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="h-4 w-4 inline mr-1" />
                Matière
              </label>
              <select
                value={filters.subject}
                onChange={(e) => setFilters(prev => ({ ...prev, subject: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Toutes les matières</option>
                {subjects.map(subject => (
                  <option key={subject.key} value={subject.key}>
                    {subject.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Filter Actions */}
          <div className="flex items-center justify-between pt-2">
            <div className="text-sm text-gray-500">
              {hasActiveFilters ? 'Filtres actifs' : 'Aucun filtre appliqué'}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearFilters}
                className="px-3 py-1.5 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                Effacer
              </button>
              <button
                onClick={handleSearch}
                className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Appliquer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
