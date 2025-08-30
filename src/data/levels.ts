// Interface pour les niveaux d'apprentissage
export interface Level {
  id: string
  name: string
  description: string
  difficulty: number
  ageRange: string
  isLocked: boolean
  requiredScore?: number
  color: string
}

// Données des niveaux - Nomenclature uniforme
export const levels: Record<string, Level> = {
  'n1-fondamentaux': {
    id: 'n1-fondamentaux',
    name: 'N1 - Fondamentaux',
    description: 'Niveau d\'introduction pour les enfants de 6-8 ans',
    difficulty: 1,
    ageRange: '6-8 ans',
    isLocked: false,
    color: 'bg-green-100 text-green-800 border-green-200'
  },
  'n2-intermediaire': {
    id: 'n2-intermediaire',
    name: 'N2 - Intermédiaire',
    description: 'Niveau de développement pour les enfants de 9-11 ans',
    difficulty: 2,
    ageRange: '9-11 ans',
    isLocked: true,
    requiredScore: 80,
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  },
  'n3-avance': {
    id: 'n3-avance',
    name: 'N3 - Avancé',
    description: 'Niveau de maîtrise pour les enfants de 12-14 ans',
    difficulty: 3,
    ageRange: '12-14 ans',
    isLocked: true,
    requiredScore: 85,
    color: 'bg-orange-100 text-orange-800 border-orange-200'
  },
  'n4-expert': {
    id: 'n4-expert',
    name: 'N4 - Expert',
    description: 'Niveau d\'excellence pour les adolescents de 15-18 ans',
    difficulty: 4,
    ageRange: '15-18 ans',
    isLocked: true,
    requiredScore: 90,
    color: 'bg-red-100 text-red-800 border-red-200'
  }
}

// Fonction pour récupérer un niveau par son ID
export function getLevelById(id: string): Level | undefined {
  return levels[id]
}

// Fonction pour récupérer tous les niveaux
export function getAllLevels(): Level[] {
  return Object.values(levels)
}

// Fonction pour récupérer les niveaux débloqués
export function getUnlockedLevels(): Level[] {
  return getAllLevels().filter(level => !level.isLocked)
}

// Fonction pour vérifier si un niveau est accessible
export function isLevelAccessible(levelId: string, userScore: number = 0): boolean {
  const level = getLevelById(levelId)
  if (!level) return false
  if (!level.isLocked) return true
  if (level.requiredScore && userScore >= level.requiredScore) return true
  return false
}
