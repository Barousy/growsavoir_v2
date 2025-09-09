'use client'

import { useEffect } from 'react'
import { trackPerformanceIssue } from '@/lib/sentry'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Mesurer les Core Web Vitals
    const measurePerformance = () => {
      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              trackPerformanceIssue('FCP', entry.startTime, 1800) // Seuil: 1.8s
            }
          }
        })
        observer.observe({ entryTypes: ['paint'] })
      }

      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            trackPerformanceIssue('LCP', entry.startTime, 2500) // Seuil: 2.5s
          }
        })
        observer.observe({ entryTypes: ['largest-contentful-paint'] })
      }

      // First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const fidEntry = entry as PerformanceEventTiming
            if (fidEntry.processingStart && fidEntry.startTime) {
              trackPerformanceIssue('FID', fidEntry.processingStart - fidEntry.startTime, 100) // Seuil: 100ms
            }
          }
        })
        observer.observe({ entryTypes: ['first-input'] })
      }

      // Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          }
          trackPerformanceIssue('CLS', clsValue, 0.1) // Seuil: 0.1
        })
        observer.observe({ entryTypes: ['layout-shift'] })
      }

      // Time to Interactive (TTI) - approximation
      const tti = performance.timing.loadEventEnd - performance.timing.navigationStart
      if (tti > 0) {
        trackPerformanceIssue('TTI', tti, 3800) // Seuil: 3.8s
      }
    }

    // Mesurer après le chargement de la page
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    // Mesurer les performances de navigation
    const measureNavigation = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        // Tracker les métriques de navigation
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
        const loadComplete = navigation.loadEventEnd - navigation.loadEventStart
        const totalLoadTime = navigation.loadEventEnd - navigation.fetchStart
        
        // Vérifier les seuils de performance
        trackPerformanceIssue('DOM Content Loaded', domContentLoaded, 1000)
        trackPerformanceIssue('Load Complete', loadComplete, 2000)
        trackPerformanceIssue('Total Load Time', totalLoadTime, 3000)
      }
    }

    measureNavigation()

    // Nettoyage
    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  return null // Ce composant ne rend rien
}
