'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useAnalytics } from '@/hooks/useAnalytics'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  actualTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light')
  const { trackThemeChangeEvent } = useAnalytics()

  useEffect(() => {
    // Récupérer le thème sauvegardé
    const savedTheme = localStorage.getItem('growsavoir-theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Définir le thème par défaut
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    let resolvedTheme: 'light' | 'dark'
    if (theme === 'system') {
      resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } else {
      resolvedTheme = theme
    }

    root.classList.add(resolvedTheme)
    root.setAttribute('data-theme', resolvedTheme)
    setActualTheme(resolvedTheme)

    // Forcer l'application du thème sur le body
    document.body.className = resolvedTheme

    // Sauvegarder le thème
    localStorage.setItem('growsavoir-theme', theme)
    
    // Tracker le changement de thème
    trackThemeChangeEvent(theme)
  }, [theme, trackThemeChangeEvent])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
