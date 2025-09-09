'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface PreloaderProps {
  children: React.ReactNode
}

export default function Preloader({ children }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Précharger les routes importantes
    const preloadRoutes = [
      '/catalogue',
      '/progression',
      '/contact',
      '/auth/login',
    ]

    // Précharger les routes après un délai
    const preloadTimer = setTimeout(() => {
      preloadRoutes.forEach(route => {
        router.prefetch(route)
      })
    }, 2000)

    // Simuler le chargement initial
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => {
      clearTimeout(preloadTimer)
      clearTimeout(loadingTimer)
    }
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-white font-bold text-2xl">G</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            GrowSavoir
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Chargement de votre plateforme éducative...
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
