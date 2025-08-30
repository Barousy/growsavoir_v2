// Configuration des données de la plateforme GrowSavoir

// Configuration des niveaux
export const LEVEL_CONFIG = {
  DEBUTANT: {
    id: 'debutant',
    name: 'Débutant',
    difficulty: 1,
    ageRange: '3-6 ans',
    isLocked: false,
    requiredScore: 0,
    color: 'bg-green-100 text-green-800 border-green-200'
  },
  INTERMEDIAIRE: {
    id: 'intermediaire',
    name: 'Intermédiaire',
    difficulty: 2,
    ageRange: '7-10 ans',
    isLocked: true,
    requiredScore: 80,
    color: 'bg-blue-100 text-blue-800 border-blue-200'
  },
  AVANCE: {
    id: 'avance',
    name: 'Avancé',
    difficulty: 3,
    ageRange: '11-14 ans',
    isLocked: true,
    requiredScore: 85,
    color: 'bg-purple-100 text-purple-800 border-purple-200'
  },
  EXPERT: {
    id: 'expert',
    name: 'Expert',
    difficulty: 4,
    ageRange: '15-18 ans',
    isLocked: true,
    requiredScore: 90,
    color: 'bg-red-100 text-red-800 border-red-200'
  }
} as const

// Configuration des catégories de matières
export const SUBJECT_CATEGORIES = {
  LANGUAGE: 'language',
  SCIENCE: 'science',
  MATHEMATICS: 'mathematics',
  COMPUTER_SCIENCE: 'computer-science',
  ISLAMIC_SCIENCES: 'islamic-sciences',
  PERSONAL_DEVELOPMENT: 'personal-development'
} as const

// Configuration des catégories de badges
export const BADGE_CATEGORIES = {
  ACHIEVEMENT: 'achievement',
  STREAK: 'streak',
  SCORE: 'score',
  PARTICIPATION: 'participation',
  SPECIAL: 'special'
} as const

// Configuration des raretés de badges
export const BADGE_RARITIES = {
  COMMON: 'common',
  RARE: 'rare',
  EPIC: 'epic',
  LEGENDARY: 'legendary'
} as const

// Configuration des types de quiz
export const QUIZ_TYPES = {
  MULTIPLE_CHOICE: 'multiple-choice',
  TRUE_FALSE: 'true-false',
  FILL_BLANK: 'fill-blank',
  ORDERING: 'ordering',
  MATCHING: 'matching'
} as const

// Configuration des catégories de quiz
export const QUIZ_CATEGORIES = {
  LESSON: 'lesson',
  SUBJECT: 'subject',
  LEVEL: 'level',
  SPECIAL: 'special'
} as const

// Configuration des scores
export const SCORE_CONFIG = {
  PASSING_SCORE: 70,
  PERFECT_SCORE: 100,
  HIGH_ACHIEVER_THRESHOLD: 90,
  POINTS_PER_QUESTION: 10
} as const

// Configuration des temps
export const TIME_CONFIG = {
  DEFAULT_QUIZ_TIME_LIMIT: 300, // 5 minutes
  DEFAULT_LESSON_TIME: 60, // 1 heure
  STREAK_RESET_HOURS: 24, // 24 heures
  SESSION_TIMEOUT_MINUTES: 30 // 30 minutes
} as const

// Configuration des limites
export const LIMITS_CONFIG = {
  MAX_LESSONS_PER_DAY: 5,
  MAX_QUIZ_ATTEMPTS: 3,
  MAX_STREAK_DAYS: 365,
  MIN_AGE: 3,
  MAX_AGE: 18
} as const

// Configuration des couleurs par défaut
export const DEFAULT_COLORS = {
  PRIMARY: 'bg-blue-500',
  SUCCESS: 'bg-green-500',
  WARNING: 'bg-yellow-500',
  DANGER: 'bg-red-500',
  INFO: 'bg-cyan-500',
  SECONDARY: 'bg-gray-500'
} as const

// Configuration des icônes par défaut
export const DEFAULT_ICONS = {
  LESSON: '📚',
  QUIZ: '❓',
  BADGE: '🏆',
  USER: '👤',
  SETTINGS: '⚙️',
  HELP: '❓',
  LOGOUT: '🚪'
} as const

// Configuration des messages d'erreur
export const ERROR_MESSAGES = {
  LESSON_NOT_FOUND: 'Leçon non trouvée',
  QUIZ_NOT_FOUND: 'Quiz non trouvé',
  SUBJECT_NOT_FOUND: 'Matière non trouvée',
  LEVEL_NOT_FOUND: 'Niveau non trouvé',
  BADGE_NOT_FOUND: 'Badge non trouvé',
  USER_NOT_FOUND: 'Utilisateur non trouvé',
  INVALID_CREDENTIALS: 'Identifiants invalides',
  ACCESS_DENIED: 'Accès refusé',
  LESSON_LOCKED: 'Cette leçon est verrouillée',
  PREREQUISITES_NOT_MET: 'Prérequis non satisfaits'
} as const

// Configuration des messages de succès
export const SUCCESS_MESSAGES = {
  LESSON_COMPLETED: 'Leçon terminée avec succès !',
  QUIZ_PASSED: 'Quiz réussi !',
  BADGE_EARNED: 'Nouveau badge obtenu !',
  STREAK_UPDATED: 'Série mise à jour !',
  PROGRESS_SAVED: 'Progression sauvegardée',
  PROFILE_UPDATED: 'Profil mis à jour'
} as const

// Configuration des paramètres de pagination
export const PAGINATION_CONFIG = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 50,
  DEFAULT_PAGE: 1
} as const

// Configuration des paramètres de recherche
export const SEARCH_CONFIG = {
  MIN_QUERY_LENGTH: 2,
  MAX_RESULTS: 100,
  SEARCH_DELAY_MS: 300
} as const

// Configuration des paramètres de cache
export const CACHE_CONFIG = {
  LESSON_CACHE_TTL: 3600, // 1 heure
  QUIZ_CACHE_TTL: 1800, // 30 minutes
  USER_CACHE_TTL: 900, // 15 minutes
  SUBJECT_CACHE_TTL: 7200 // 2 heures
} as const

// Types utilitaires dérivés de la configuration
export type LevelId = typeof LEVEL_CONFIG[keyof typeof LEVEL_CONFIG]['id']
export type SubjectCategory = typeof SUBJECT_CATEGORIES[keyof typeof SUBJECT_CATEGORIES]
export type BadgeCategory = typeof BADGE_CATEGORIES[keyof typeof BADGE_CATEGORIES]
export type BadgeRarity = typeof BADGE_RARITIES[keyof typeof BADGE_RARITIES]
export type QuizType = typeof QUIZ_TYPES[keyof typeof QUIZ_TYPES]
export type QuizCategory = typeof QUIZ_CATEGORIES[keyof typeof QUIZ_CATEGORIES]

// Fonctions utilitaires de configuration
export function getLevelConfig(levelId: string) {
  return Object.values(LEVEL_CONFIG).find(level => level.id === levelId)
}

export function isLevelLocked(levelId: string): boolean {
  const level = getLevelConfig(levelId)
  return level?.isLocked ?? true
}

export function getRequiredScore(levelId: string): number {
  const level = getLevelConfig(levelId)
  return level?.requiredScore ?? 100
}

export function getLevelColor(levelId: string): string {
  const level = getLevelConfig(levelId)
  return level?.color ?? DEFAULT_COLORS.SECONDARY
}

export function isValidSubjectCategory(category: string): category is SubjectCategory {
  return Object.values(SUBJECT_CATEGORIES).includes(category as SubjectCategory)
}

export function isValidBadgeCategory(category: string): category is BadgeCategory {
  return Object.values(BADGE_CATEGORIES).includes(category as BadgeCategory)
}

export function isValidQuizType(type: string): type is QuizType {
  return Object.values(QUIZ_TYPES).includes(type as QuizType)
}
