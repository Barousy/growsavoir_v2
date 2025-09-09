'use client'

// Configuration Hotjar
export const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID || '1234567'
export const HOTJAR_VERSION = process.env.NEXT_PUBLIC_HOTJAR_VERSION || '6'

// Initialisation de Hotjar
export const initHotjar = () => {
  if (typeof window === 'undefined' || !HOTJAR_ID) return

  // Charger le script Hotjar
  const script = document.createElement('script')
  script.innerHTML = `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${HOTJAR_ID},hjsv:${HOTJAR_VERSION}};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `
  document.head.appendChild(script)
}

// Fonctions pour tracker des événements spécifiques
export const trackHotjarEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window === 'undefined' || !(window as any).hj) return

  ;(window as any).hj('event', eventName, properties)
}

// Événements spécifiques à l'éducation
export const trackLessonInteraction = (action: string, lessonTitle: string, subject: string) => {
  trackHotjarEvent('lesson_interaction', {
    action,
    lesson_title: lessonTitle,
    subject,
    timestamp: new Date().toISOString(),
  })
}

export const trackSearchBehavior = (query: string, filters: Record<string, any>) => {
  trackHotjarEvent('search_behavior', {
    query,
    filters,
    timestamp: new Date().toISOString(),
  })
}

export const trackNavigationPattern = (from: string, to: string) => {
  trackHotjarEvent('navigation_pattern', {
    from_page: from,
    to_page: to,
    timestamp: new Date().toISOString(),
  })
}

export const trackUserEngagement = (engagementType: string, details: Record<string, any>) => {
  trackHotjarEvent('user_engagement', {
    type: engagementType,
    details,
    timestamp: new Date().toISOString(),
  })
}
