// Interface pour les badges de progression
export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  color: string
  category: 'achievement' | 'streak' | 'score' | 'participation' | 'special'
  isActive: boolean
  criteria: {
    type: 'lessons_completed' | 'streak_days' | 'score_threshold' | 'time_spent' | 'custom'
    value: number
    description: string
  }
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

// Données des badges
export const badges: Record<string, Badge> = {
  'first-lesson': {
    id: 'first-lesson',
    name: 'Première Leçon',
    description: 'A complété sa première leçon',
    icon: '🎯',
    color: 'bg-green-100 text-green-800 border-green-200',
    category: 'achievement',
    isActive: true,
    criteria: {
      type: 'lessons_completed',
      value: 1,
      description: 'Compléter 1 leçon'
    },
    rarity: 'common'
  },
  'lesson-master': {
    id: 'lesson-master',
    name: 'Maître des Leçons',
    description: 'A complété 10 leçons',
    icon: '👑',
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    category: 'achievement',
    isActive: true,
    criteria: {
      type: 'lessons_completed',
      value: 10,
      description: 'Compléter 10 leçons'
    },
    rarity: 'rare'
  },
  'streak-3': {
    id: 'streak-3',
    name: 'Série de 3 Jours',
    description: 'A étudié 3 jours de suite',
    icon: '🔥',
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    category: 'streak',
    isActive: true,
    criteria: {
      type: 'streak_days',
      value: 3,
      description: 'Étudier 3 jours consécutifs'
    },
    rarity: 'common'
  },
  'streak-7': {
    id: 'streak-7',
    name: 'Série de 7 Jours',
    description: 'A étudié 7 jours de suite',
    icon: '🔥🔥',
    color: 'bg-red-100 text-red-800 border-red-200',
    category: 'streak',
    isActive: true,
    criteria: {
      type: 'streak_days',
      value: 7,
      description: 'Étudier 7 jours consécutifs'
    },
    rarity: 'rare'
  },
  'perfect-score': {
    id: 'perfect-score',
    name: 'Score Parfait',
    description: 'A obtenu 100% à un quiz',
    icon: '⭐',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    category: 'score',
    isActive: true,
    criteria: {
      type: 'score_threshold',
      value: 100,
      description: 'Obtenir 100% à un quiz'
    },
    rarity: 'epic'
  },
  'high-achiever': {
    id: 'high-achiever',
    name: 'Haut Performeur',
    description: 'A obtenu 90% ou plus à 5 quiz',
    icon: '🏆',
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    category: 'score',
    isActive: true,
    criteria: {
      type: 'score_threshold',
      value: 90,
      description: 'Obtenir 90% ou plus à 5 quiz'
    },
    rarity: 'epic'
  },
  'dedicated-learner': {
    id: 'dedicated-learner',
    name: 'Apprenant Dévoué',
    description: 'A passé 1 heure à étudier',
    icon: '⏰',
    color: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    category: 'participation',
    isActive: true,
    criteria: {
      type: 'time_spent',
      value: 60,
      description: 'Passer 60 minutes à étudier'
    },
    rarity: 'common'
  },
  'arabic-explorer': {
    id: 'arabic-explorer',
    name: 'Explorateur de l\'Arabe',
    description: 'A complété 3 leçons d\'arabe',
    icon: '📚',
    color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    category: 'special',
    isActive: true,
    criteria: {
      type: 'lessons_completed',
      value: 3,
      description: 'Compléter 3 leçons d\'arabe'
    },
    rarity: 'rare'
  },
  'math-wizard': {
    id: 'math-wizard',
    name: 'Magicien des Maths',
    description: 'A complété 5 leçons de mathématiques',
    icon: '🔢',
    color: 'bg-pink-100 text-pink-800 border-pink-200',
    category: 'special',
    isActive: true,
    criteria: {
      type: 'lessons_completed',
      value: 5,
      description: 'Compléter 5 leçons de mathématiques'
    },
    rarity: 'epic'
  },
  'science-pioneer': {
    id: 'science-pioneer',
    name: 'Pionnier des Sciences',
    description: 'A complété 3 leçons de sciences',
    icon: '🔬',
    color: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    category: 'special',
    isActive: true,
    criteria: {
      type: 'lessons_completed',
      value: 3,
      description: 'Compléter 3 leçons de sciences'
    },
    rarity: 'rare'
  }
}

// Fonction pour récupérer un badge par son ID
export function getBadgeById(id: string): Badge | undefined {
  return badges[id]
}

// Fonction pour récupérer tous les badges
export function getAllBadges(): Badge[] {
  return Object.values(badges)
}

// Fonction pour récupérer les badges actifs
export function getActiveBadges(): Badge[] {
  return getAllBadges().filter(badge => badge.isActive)
}

// Fonction pour récupérer les badges par catégorie
export function getBadgesByCategory(category: Badge['category']): Badge[] {
  return getAllBadges().filter(badge => badge.category === category)
}

// Fonction pour récupérer les badges par rareté
export function getBadgesByRarity(rarity: Badge['rarity']): Badge[] {
  return getAllBadges().filter(badge => badge.rarity === rarity)
}

// Fonction pour vérifier si un utilisateur a gagné un badge
export function hasEarnedBadge(
  badgeId: string,
  userStats: {
    lessonsCompleted: number
    currentStreak: number
    bestScore: number
    totalTimeSpent: number
  }
): boolean {
  const badge = getBadgeById(badgeId)
  if (!badge) return false

  switch (badge.criteria.type) {
    case 'lessons_completed':
      return userStats.lessonsCompleted >= badge.criteria.value
    case 'streak_days':
      return userStats.currentStreak >= badge.criteria.value
    case 'score_threshold':
      return userStats.bestScore >= badge.criteria.value
    case 'time_spent':
      return userStats.totalTimeSpent >= badge.criteria.value
    default:
      return false
  }
}



