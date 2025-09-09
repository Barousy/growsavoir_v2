import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
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
