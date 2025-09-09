'use client'

// Configuration Google Analytics 4
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// Types pour les événements
export interface GAEvent {
  action: string
  category: string
  label?: string
  value?: number
}

export interface GAPageView {
  page_title: string
  page_location: string
  page_path: string
}

// Initialisation de Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined' || !GA_TRACKING_ID) return

  // Charger le script Google Analytics
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
  document.head.appendChild(script)

  // Initialiser gtag
  ;(window as any).dataLayer = (window as any).dataLayer || []
  function gtag(...args: any[]) {
    ;(window as any).dataLayer.push(args)
  }
  gtag('js', new Date())
  gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  })

  // Exposer gtag globalement
  ;(window as any).gtag = gtag
}

// Fonction pour envoyer des événements
export const trackEvent = (event: GAEvent) => {
  if (typeof window === 'undefined' || !(window as any).gtag) return

  ;(window as any).gtag('event', event.action, {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
  })
}

// Fonction pour envoyer des vues de page
export const trackPageView = (pageData: GAPageView) => {
  if (typeof window === 'undefined' || !(window as any).gtag) return

  ;(window as any).gtag('config', GA_TRACKING_ID, {
    page_title: pageData.page_title,
    page_location: pageData.page_location,
    page_path: pageData.page_path,
  })
}

// Événements spécifiques à l'éducation
export const trackLessonStart = (lessonTitle: string, subject: string) => {
  trackEvent({
    action: 'lesson_start',
    category: 'education',
    label: `${subject} - ${lessonTitle}`,
  })
}

export const trackLessonComplete = (lessonTitle: string, subject: string, score?: number) => {
  trackEvent({
    action: 'lesson_complete',
    category: 'education',
    label: `${subject} - ${lessonTitle}`,
    value: score,
  })
}

export const trackSearch = (query: string, resultsCount: number) => {
  trackEvent({
    action: 'search',
    category: 'engagement',
    label: query,
    value: resultsCount,
  })
}

export const trackSubjectView = (subject: string) => {
  trackEvent({
    action: 'subject_view',
    category: 'navigation',
    label: subject,
  })
}

export const trackThemeChange = (theme: string) => {
  trackEvent({
    action: 'theme_change',
    category: 'preferences',
    label: theme,
  })
}

export const trackProgressUpdate = (subject: string, progress: number) => {
  trackEvent({
    action: 'progress_update',
    category: 'education',
    label: subject,
    value: progress,
  })
}

// Fonction pour mesurer les performances
export const trackPerformance = (metric: string, value: number) => {
  if (typeof window === 'undefined' || !(window as any).gtag) return

  ;(window as any).gtag('event', 'timing_complete', {
    name: metric,
    value: Math.round(value),
  })
}
