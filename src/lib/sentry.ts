'use client'

import * as Sentry from '@sentry/nextjs'

// Configuration Sentry
const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN || 'https://your-dsn@sentry.io/project-id'

// Initialisation de Sentry
export const initSentry = () => {
  if (typeof window === 'undefined' || !SENTRY_DSN) return

  Sentry.init({
    dsn: SENTRY_DSN,
    environment: process.env.NODE_ENV,
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    integrations: [],
    beforeSend(event) {
      // Filtrer les erreurs non critiques
      if (event.exception) {
        const error = event.exception.values?.[0]
        if (error?.type === 'ChunkLoadError' || error?.type === 'Loading chunk') {
          return null // Ignorer les erreurs de chargement de chunks
        }
      }
      return event
    },
  })
}

// Fonctions utilitaires pour Sentry
export const captureException = (error: Error, context?: Record<string, any>) => {
  Sentry.captureException(error, {
    tags: {
      component: 'growsavoir',
    },
    extra: context,
  })
}

export const captureMessage = (message: string, level: 'info' | 'warning' | 'error' = 'info') => {
  Sentry.captureMessage(message, level)
}

export const setUserContext = (user: { id: string; email?: string; name?: string }) => {
  Sentry.setUser(user)
}

export const addBreadcrumb = (message: string, category: string, level: 'info' | 'warning' | 'error' = 'info') => {
  Sentry.addBreadcrumb({
    message,
    category,
    level,
    timestamp: Date.now() / 1000,
  })
}

// Fonctions spécifiques à l'éducation
export const trackLessonError = (error: Error, lessonTitle: string, subject: string) => {
  captureException(error, {
    lesson_title: lessonTitle,
    subject,
    error_type: 'lesson_error',
  })
}

export const trackPerformanceIssue = (metric: string, value: number, threshold: number) => {
  if (value > threshold) {
    captureMessage(`Performance issue: ${metric} is ${value}ms (threshold: ${threshold}ms)`, 'warning')
  }
}

export const trackUserAction = (action: string, details: Record<string, any>) => {
  addBreadcrumb(`User action: ${action}`, 'user_action', 'info')
  Sentry.setContext('user_action', {
    action,
    details,
    timestamp: new Date().toISOString(),
  })
}
