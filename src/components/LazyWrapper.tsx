'use client'

import { Suspense, lazy, ComponentType } from 'react'
import { Loader2 } from 'lucide-react'

interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function LazyWrapper({ children, fallback }: LazyWrapperProps) {
  return (
    <Suspense fallback={fallback || <DefaultFallback />}>
      {children}
    </Suspense>
  )
}

function DefaultFallback() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <Loader2 className="w-5 h-5 animate-spin" />
        <span>Chargement...</span>
      </div>
    </div>
  )
}

// Composants lazy pour les sections lourdes
export const LazyProgressDashboard = lazy(() => import('./ProgressDashboard'))
export const LazyAdvancedSearch = lazy(() => import('./AdvancedSearch'))
export const LazySubjectSearchDropdown = lazy(() => import('./SubjectSearchDropdown'))

// Wrapper pour les composants avec fallback personnalisé
export function withLazyLoading<T extends object>(
  Component: ComponentType<T>,
  fallback?: React.ReactNode
) {
  return function LazyComponent(props: T) {
    return (
      <LazyWrapper fallback={fallback}>
        <Component {...props} />
      </LazyWrapper>
    )
  }
}
