export const defaultLocale = 'fr'
export const locales = ['fr', 'en', 'ar'] as const

export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  ar: 'العربية'
}

export const rtlLocales: Locale[] = ['ar']

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale)
}
