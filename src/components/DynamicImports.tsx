'use client'

import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'

// Composants lourds chargés dynamiquement
export const DynamicProgressDashboard = dynamic(
  () => import('./ProgressDashboard'),
  {
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Chargement du tableau de bord...</span>
        </div>
      </div>
    ),
    ssr: false, // Désactiver le rendu côté serveur pour ce composant
  }
)

export const DynamicAdvancedSearch = dynamic(
  () => import('./AdvancedSearch'),
  {
    loading: () => (
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span className="text-sm">Chargement...</span>
      </div>
    ),
  }
)

export const DynamicSubjectSearchDropdown = dynamic(
  () => import('./SubjectSearchDropdown'),
  {
    loading: () => (
      <div className="w-full h-10 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
    ),
  }
)

export const DynamicThemeToggle = dynamic(
  () => import('./ThemeToggle'),
  {
    loading: () => (
      <div className="w-32 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
    ),
  }
)

// Composants de leçon chargés dynamiquement
export const DynamicProgressTracker = dynamic(
  () => import('./ProgressTracker'),
  {
    loading: () => (
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    ),
  }
)

// Composants de navigation chargés dynamiquement
export const DynamicNavigation = dynamic(
  () => import('./Navigation'),
  {
    loading: () => (
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  }
)
