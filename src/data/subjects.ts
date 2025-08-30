// Interface pour les sujets d'apprentissage
export interface Subject {
  id: string
  name: string
  description: string
  icon: string
  color: string
  category: 'language' | 'science' | 'mathematics' | 'computer-science' | 'islamic-sciences' | 'personal-development'
  isActive: boolean
  lessonCount: number
  difficulty: number
}

// Données des sujets
export const subjects: Record<string, Subject> = {
  'langue-arabe': {
    id: 'langue-arabe',
    name: 'Langue Arabe',
    description: 'Apprentissage de l\'arabe avec support complet RTL et harakât',
    icon: '📚',
    color: 'bg-green-500',
    category: 'language',
    isActive: true,
    lessonCount: 4,
    difficulty: 1
  },
  'langue-anglaise': {
    id: 'langue-anglaise',
    name: 'Langue Anglaise',
    description: 'Maîtrise de l\'anglais avec approche communicative',
    icon: '🇬🇧',
    color: 'bg-blue-500',
    category: 'language',
    isActive: true,
    lessonCount: 2,
    difficulty: 1
  },
  'langue-francaise': {
    id: 'langue-francaise',
    name: 'Langue Française',
    description: 'Perfectionnement du français avec grammaire et conjugaison',
    icon: '🇫🇷',
    color: 'bg-blue-600',
    category: 'language',
    isActive: true,
    lessonCount: 2,
    difficulty: 1
  },
  'mathematiques': {
    id: 'mathematiques',
    name: 'Mathématiques',
    description: 'Découverte des mathématiques de manière ludique et progressive',
    icon: '🔢',
    color: 'bg-purple-500',
    category: 'mathematics',
    isActive: true,
    lessonCount: 1,
    difficulty: 1
  },
  'sciences': {
    id: 'sciences',
    name: 'Sciences',
    description: 'Exploration du monde scientifique avec expérimentations',
    icon: '🔬',
    color: 'bg-yellow-500',
    category: 'science',
    isActive: true,
    lessonCount: 1,
    difficulty: 1
  },
  'informatique': {
    id: 'informatique',
    name: 'Informatique',
    description: 'Initiation à la programmation et aux technologies numériques',
    icon: '💻',
    color: 'bg-gray-500',
    category: 'computer-science',
    isActive: true,
    lessonCount: 1,
    difficulty: 1
  },
  'aqida': {
    id: 'aqida',
    name: 'Aqida',
    description: 'Fondements de la croyance islamique selon Ahl as-Sunna',
    icon: '🕌',
    color: 'bg-emerald-500',
    category: 'islamic-sciences',
    isActive: true,
    lessonCount: 0,
    difficulty: 1
  },
  'fiqh': {
    id: 'fiqh',
    name: 'Fiqh',
    description: 'Jurisprudence islamique et règles pratiques',
    icon: '📖',
    color: 'bg-emerald-600',
    category: 'islamic-sciences',
    isActive: true,
    lessonCount: 0,
    difficulty: 1
  },
  'sira': {
    id: 'sira',
    name: 'Sira',
    description: 'Biographie du Prophète Muhammad ﷺ et de ses compagnons',
    icon: '🌟',
    color: 'bg-emerald-700',
    category: 'islamic-sciences',
    isActive: true,
    lessonCount: 0,
    difficulty: 1
  },
  'histoire-islam': {
    id: 'histoire-islam',
    name: 'Histoire de l\'Islam',
    description: 'Histoire islamique basée sur al-Bidaya wa al-Nihaya d\'Ibn Kathir',
    icon: '📜',
    color: 'bg-emerald-800',
    category: 'islamic-sciences',
    isActive: true,
    lessonCount: 0,
    difficulty: 1
  },
  'developpement-personnel': {
    id: 'developpement-personnel',
    name: 'Développement Personnel',
    description: 'Compétences de vie et développement du caractère',
    icon: '🌱',
    color: 'bg-pink-500',
    category: 'personal-development',
    isActive: true,
    lessonCount: 0,
    difficulty: 1
  }
}

// Fonction pour récupérer un sujet par son ID
export function getSubjectById(id: string): Subject | undefined {
  return subjects[id]
}

// Fonction pour récupérer tous les sujets
export function getAllSubjects(): Subject[] {
  return Object.values(subjects)
}

// Fonction pour récupérer les sujets actifs
export function getActiveSubjects(): Subject[] {
  return getAllSubjects().filter(subject => subject.isActive)
}

// Fonction pour récupérer les sujets par catégorie
export function getSubjectsByCategory(category: Subject['category']): Subject[] {
  return getAllSubjects().filter(subject => subject.category === category)
}

// Fonction pour récupérer les sujets avec des leçons
export function getSubjectsWithLessons(): Subject[] {
  return getAllSubjects().filter(subject => subject.lessonCount > 0)
}



