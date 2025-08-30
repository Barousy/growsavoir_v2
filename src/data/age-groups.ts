// Interface pour les groupes d'âge
export interface AgeGroup {
  id: string
  name: string
  description: string
  minAge: number
  maxAge: number
  color: string
  icon: string
  isActive: boolean
}

// Données des groupes d'âge
export const ageGroups: Record<string, AgeGroup> = {
  '3-6': {
    id: '3-6',
    name: '3-6 ans',
    description: 'Éveil et découverte - Premiers apprentissages',
    minAge: 3,
    maxAge: 6,
    color: 'bg-green-100 text-green-800 border-green-200',
    icon: '👶',
    isActive: true
  },
  '7-10': {
    id: '7-10',
    name: '7-10 ans',
    description: 'Développement et consolidation - Apprentissages structurés',
    minAge: 7,
    maxAge: 10,
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: '🧒',
    isActive: true
  },
  '11-14': {
    id: '11-14',
    name: '11-14 ans',
    description: 'Approfondissement et maîtrise - Développement des compétences',
    minAge: 11,
    maxAge: 14,
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    icon: '👦',
    isActive: true
  },
  '15-18': {
    id: '15-18',
    name: '15-18 ans',
    description: 'Excellence et spécialisation - Préparation aux études supérieures',
    minAge: 15,
    maxAge: 18,
    color: 'bg-red-100 text-red-800 border-red-200',
    icon: '👨‍🎓',
    isActive: true
  }
}

// Fonction pour récupérer un groupe d'âge par son ID
export function getAgeGroupById(id: string): AgeGroup | undefined {
  return ageGroups[id]
}

// Fonction pour récupérer tous les groupes d'âge
export function getAllAgeGroups(): AgeGroup[] {
  return Object.values(ageGroups)
}

// Fonction pour récupérer les groupes d'âge actifs
export function getActiveAgeGroups(): AgeGroup[] {
  return getAllAgeGroups().filter(group => group.isActive)
}

// Fonction pour récupérer le groupe d'âge approprié pour un âge donné
export function getAgeGroupForAge(age: number): AgeGroup | undefined {
  return getAllAgeGroups().find(group => age >= group.minAge && age <= group.maxAge)
}

// Fonction pour vérifier si un âge est dans un groupe d'âge
export function isAgeInGroup(age: number, groupId: string): boolean {
  const group = getAgeGroupById(groupId)
  if (!group) return false
  return age >= group.minAge && age <= group.maxAge
}



