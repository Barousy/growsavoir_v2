'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initGA, trackPageView } from '@/lib/analytics'

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialiser Google Analytics
    initGA()
  }, [])

  useEffect(() => {
    // Tracker les changements de page
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`
      
      trackPageView({
        page_title: document.title,
        page_location: url,
        page_path: pathname,
      })
    }
  }, [pathname, searchParams])

  return <>{children}</>
}
