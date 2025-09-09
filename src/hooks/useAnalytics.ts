'use client'

import { useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { 
  trackEvent, 
  trackLessonStart, 
  trackLessonComplete, 
  trackSearch, 
  trackSubjectView, 
  trackThemeChange, 
  trackProgressUpdate 
} from '@/lib/analytics'
import { 
  trackLessonInteraction, 
  trackSearchBehavior, 
  trackNavigationPattern, 
  trackUserEngagement 
} from '@/lib/hotjar'
import { addBreadcrumb, trackUserAction } from '@/lib/sentry'

export function useAnalytics() {
  const pathname = usePathname()

  // Tracker les changements de page
  useEffect(() => {
    addBreadcrumb(`Page view: ${pathname}`, 'navigation')
  }, [pathname])

  // Fonctions de tracking
  const trackLessonStartEvent = useCallback((lessonTitle: string, subject: string) => {
    trackLessonStart(lessonTitle, subject)
    trackLessonInteraction('start', lessonTitle, subject)
    trackUserAction('lesson_start', { lessonTitle, subject })
  }, [])

  const trackLessonCompleteEvent = useCallback((lessonTitle: string, subject: string, score?: number) => {
    trackLessonComplete(lessonTitle, subject, score)
    trackLessonInteraction('complete', lessonTitle, subject)
    trackUserAction('lesson_complete', { lessonTitle, subject, score })
  }, [])

  const trackSearchEvent = useCallback((query: string, resultsCount: number, filters?: Record<string, any>) => {
    trackSearch(query, resultsCount)
    trackSearchBehavior(query, filters || {})
    trackUserAction('search', { query, resultsCount, filters })
  }, [])

  const trackSubjectViewEvent = useCallback((subject: string) => {
    trackSubjectView(subject)
    trackUserAction('subject_view', { subject })
  }, [])

  const trackThemeChangeEvent = useCallback((theme: string) => {
    trackThemeChange(theme)
    trackUserAction('theme_change', { theme })
  }, [])

  const trackProgressUpdateEvent = useCallback((subject: string, progress: number) => {
    trackProgressUpdate(subject, progress)
    trackUserAction('progress_update', { subject, progress })
  }, [])

  const trackNavigationEvent = useCallback((from: string, to: string) => {
    trackNavigationPattern(from, to)
    trackUserAction('navigation', { from, to })
  }, [])

  const trackEngagementEvent = useCallback((type: string, details: Record<string, any>) => {
    trackUserEngagement(type, details)
    trackUserAction('engagement', { type, details })
  }, [])

  const trackCustomEvent = useCallback((action: string, category: string, label?: string, value?: number) => {
    trackEvent({ action, category, label, value })
    trackUserAction('custom_event', { action, category, label, value })
  }, [])

  return {
    trackLessonStartEvent,
    trackLessonCompleteEvent,
    trackSearchEvent,
    trackSubjectViewEvent,
    trackThemeChangeEvent,
    trackProgressUpdateEvent,
    trackNavigationEvent,
    trackEngagementEvent,
    trackCustomEvent,
  }
}
