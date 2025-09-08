'use client'

import { useEffect, useState } from 'react'
import { defaultLocale, Locale, locales } from './config'

const COOKIE_NAME = 'locale'

function readLocale(): Locale {
  if (typeof document === 'undefined') return defaultLocale
  const cookie = document.cookie
    .split('; ')
    .find((c) => c.startsWith(`${COOKIE_NAME}=`))
  const value = cookie?.split('=')[1]
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale
}

function writeLocale(locale: Locale) {
  document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=31536000`
}

export function useLocaleCookie() {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    setLocale(readLocale())
  }, [])

  const updateLocale = (newLocale: Locale) => {
    writeLocale(newLocale)
    setLocale(newLocale)
  }

  return [locale, updateLocale] as const
}
