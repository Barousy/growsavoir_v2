// Structure complète du programme éducatif GrowSavoir
// Basé sur les spécifications détaillées fournies

export interface ProgramLevel {
  id: string
  name: string
  description: string
  difficulty: number
  ageRange: string
  isLocked: boolean
  requiredScore: number
  color: string
  evaluationType: string
  evaluationDescription: string
}

export interface SubjectProgram {
  id: string
  name: string
  category: string
  description: string
  icon: string
  color: string
  levels: ProgramLevel[]
  methodology?: string
  sources?: string[]
}

export interface LessonStructure {
  id: string
  title: string
  level: string
  subject: string
  objectives: string[]
  content: string[]
  evaluation: string
  duration: number
  prerequisites: string[]
  isLocked: boolean
}

// Configuration des niveaux du programme
export const PROGRAM_LEVELS: Record<string, ProgramLevel> = {
  'n1-fondamentaux': {
    id: 'n1-fondamentaux',
    name: 'N1 - Fondamentaux',
    description: 'Niveau d\'introduction et de base',
    difficulty: 1,
    ageRange: '3-6 ans',
    isLocked: false,
    requiredScore: 0,
    color: 'bg-green-100 text-green-800 border-green-200',
    evaluationType: 'QCM + tâches authentiques courtes',
    evaluationDescription: 'Évaluations formatives avec feedback immédiat'
  },
  'n2-intermediaire': {
    id: 'n2-intermediaire',
    name: 'N2 - Intermédiaire',
    description: 'Niveau de développement et d\'approfondissement',
    difficulty: 2,
    ageRange: '7-10 ans',
    isLocked: true,
    requiredScore: 80,
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    evaluationType: 'Mini-projets guidés',
    evaluationDescription: 'Projets pratiques avec accompagnement'
  },
  'n3-avance': {
    id: 'n3-avance',
    name: 'N3 - Avancé',
    description: 'Niveau de maîtrise et d\'analyse',
    difficulty: 3,
    ageRange: '11-14 ans',
    isLocked: true,
    requiredScore: 85,
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    evaluationType: 'Dossiers analytiques / exposés',
    evaluationDescription: 'Travaux de recherche et d\'analyse'
  },
  'n4-expert': {
    id: 'n4-expert',
    name: 'N4 - Expert',
    description: 'Niveau d\'excellence et de spécialisation',
    difficulty: 4,
    ageRange: '15-18 ans',
    isLocked: true,
    requiredScore: 90,
    color: 'bg-red-100 text-red-800 border-red-200',
    evaluationType: 'Capstone (projet intégrateur)',
    evaluationDescription: 'Projets complets avec critères publiés'
  }
}

// Structure complète du programme par matière
export const SUBJECT_PROGRAMS: SubjectProgram[] = [
  {
    id: 'langue-arabe',
    name: 'Langue Arabe',
    category: 'language',
    description: 'Voie "lecture + classique" avec progression complète',
    icon: '📚',
    color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    levels: [
      PROGRAM_LEVELS['n1-fondamentaux'],
      PROGRAM_LEVELS['n2-intermediaire'],
      PROGRAM_LEVELS['n3-avance'],
      PROGRAM_LEVELS['n4-expert']
    ]
  },
  {
    id: 'langue-francaise',
    name: 'Langue Française',
    category: 'language',
    description: 'Aligné CECR (A1-C1) avec progression structurée',
    icon: '🇫🇷',
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    levels: [
      PROGRAM_LEVELS['n1-fondamentaux'],
      PROGRAM_LEVELS['n2-intermediaire'],
      PROGRAM_LEVELS['n3-avance'],
      PROGRAM_LEVELS['n4-expert']
    ]
  },
  {
    id: 'langue-anglaise',
    name: 'Langue Anglaise',
    category: 'language',
    description: 'Aligné CEFR (A1-C1) avec compétences communicatives',
    icon: '🇬🇧',
    color: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    levels: [
      PROGRAM_LEVELS['n1-fondamentaux'],
      PROGRAM_LEVELS['n2-intermediaire'],
      PROGRAM_LEVELS['n3-avance'],
      PROGRAM_LEVELS['n4-expert']
    ]
  },
  {
    id: 'mathematiques',
    name: 'Mathématiques',
    category: 'mathematics',
    description: 'Progression "concept → maîtrise" avec applications pratiques',
    icon: '🔢',
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    levels: [
      PROGRAM_LEVELS['n1-fondamentaux'],
      PROGRAM_LEVELS['n2-intermediaire'],
      PROGRAM_LEVELS['n3-avance'],
      PROGRAM_LEVELS['n4-expert']
    ]
  },
  {
    id: 'sciences',
    name: 'Sciences',
    category: 'science',
    description: 'Tronc commun inspiré NGSS avec démarche scientifique',
    icon: '🔬',
    color: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    levels: [
      PROGRAM_LEVELS['n1-fondamentaux'],
      PROGRAM_LEVELS['n2-intermediaire'],
      PROGRAM_LEVELS['n3-avance'],
      PROGRAM_LEVELS['n4-expert']
    ]
  },
  {
    id: 'informatique',
    name: 'Informatique',
    category: 'computer-science',
    description: 'Compétences numériques → CS avec progression technique',
    icon: '💻',
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    levels: [
      PROGRAM_LEVELS['n1-fondamentaux'],
      PROGRAM_LEVELS['n2-intermediaire'],
      PROGRAM_LEVELS['n3-avance'],
      PROGRAM_LEVELS['n4-expert']
    ]
  },
  {
    id: 'aqida',
    name: 'Aqîda (Creed)',
    category: 'islamic-sciences',
    description: 'Méthodologie Athari/Salaf avec authenticité vérifiée',
    icon: '☪️',
    color: 'bg-amber-100 text-amber-800 border-amber-200',
    methodology: 'Sources : Coran, Sahîh al-Bukhârî & Muslim, Sunan avec vérification (Albânî, Shu\'ayb al-Arna\'ût…), consensus des Salaf. Textes de référence : al-Wasitiyya (Ibn Taymiyya), Lum\'at al-I\'tiqâd (Ibn Qudâma), Sharh as-Sunna (al-Barbahârî), at-Tahâwiyya (avec lecture salafie).',
    sources: ['Coran', 'Sahîh al-Bukhârî', 'Sahîh Muslim', 'Sunan', 'al-Wasitiyya', 'Lum\'at al-I\'tiqâd', 'Sharh as-Sunna', 'at-Tahâwiyya'],
    levels: [
      PROGRAM_LEVELS['n1-fondamentaux'],
      PROGRAM_LEVELS['n2-intermediaire'],
      PROGRAM_LEVELS['n3-avance'],
      PROGRAM_LEVELS['n4-expert']
    ]
  },
  {
    id: 'fiqh',
    name: 'Fiqh (Jurisprudence)',
    category: 'islamic-sciences',
    description: 'Comparatif des madhhabs avec dalîl documenté',
    icon: '⚖️',
    color: 'bg-teal-100 text-teal-800 border-teal-200',
    methodology: 'Usûl : Qur\'ân, Sunna sahîha, ijmâ\', qiyâs. Présentation comparative (4 madhhabs) en actes d\'adoration, avec position rajih documentée.',
    sources: ['Qur\'ân', 'Sunna sahîha', 'Ijma\'', 'Qiyâs', '4 madhhabs'],
    levels: [
      PROGRAM_LEVELS['n1-fondamentaux'],
      PROGRAM_LEVELS['n2-intermediaire'],
      PROGRAM_LEVELS['n3-avance'],
      PROGRAM_LEVELS['n4-expert']
    ]
  },
  {
    id: 'sira',
    name: 'Sîra (Biographie du Prophète ﷺ)',
    category: 'islamic-sciences',
    description: 'Biographie complète avec leçons et méthodologie',
    icon: '🕌',
    color: 'bg-rose-100 text-rose-800 border-rose-200',
    methodology: 'Sources authentiques avec distinction entre maghâzî/sîra (authentifié) et isrâ\'îliyyât (mentionnées, mais signalées/écartées si faibles).',
    sources: ['Sahîh al-Bukhârî', 'Sahîh Muslim', 'Sources authentiques'],
    levels: [
      PROGRAM_LEVELS['n1-fondamentaux'],
      PROGRAM_LEVELS['n2-intermediaire'],
      PROGRAM_LEVELS['n3-avance'],
      PROGRAM_LEVELS['n4-expert']
    ]
  },
  {
    id: 'histoire-islam',
    name: 'Histoire de l\'Islam',
    category: 'islamic-sciences',
    description: 'D\'après Ibn Kathîr – Al-Bidâya wa-n-Nihâya',
    icon: '📜',
    color: 'bg-lime-100 text-lime-800 border-lime-200',
    methodology: 'Trame principale : Ibn Kathîr, corroborée par Ṭabarî, Dhahabî, avec notation d\'authenticité (isnâd/riwâyât). On distingue le maghâzî/sîra (authentifié) des isrâ\'îliyyât (mentionnées, mais signalées/écartées si faibles).',
    sources: ['Ibn Kathîr - Al-Bidâya wa-n-Nihâya', 'Ṭabarî', 'Dhahabî'],
    levels: [
      PROGRAM_LEVELS['n1-fondamentaux'],
      PROGRAM_LEVELS['n2-intermediaire'],
      PROGRAM_LEVELS['n3-avance'],
      PROGRAM_LEVELS['n4-expert']
    ]
  },
  {
    id: 'developpement-personnel',
    name: 'Développement Personnel',
    category: 'personal-development',
    description: 'Éthique & méthodes avec progression pratique',
    icon: '🌟',
    color: 'bg-violet-100 text-violet-800 border-violet-200',
    levels: [
      PROGRAM_LEVELS['n1-fondamentaux'],
      PROGRAM_LEVELS['n2-intermediaire'],
      PROGRAM_LEVELS['n3-avance'],
      PROGRAM_LEVELS['n4-expert']
    ]
  }
]

// Fonctions utilitaires
export function getSubjectProgram(subjectId: string): SubjectProgram | undefined {
  return SUBJECT_PROGRAMS.find(subject => subject.id === subjectId)
}

export function getProgramLevel(levelId: string): ProgramLevel | undefined {
  return PROGRAM_LEVELS[levelId]
}

export function getSubjectsByCategory(category: string): SubjectProgram[] {
  return SUBJECT_PROGRAMS.filter(subject => subject.category === category)
}

export function getAllProgramLevels(): ProgramLevel[] {
  return Object.values(PROGRAM_LEVELS)
}

export function getUnlockedLevels(): ProgramLevel[] {
  return getAllProgramLevels().filter(level => !level.isLocked)
}

export function getLockedLevels(): ProgramLevel[] {
  return getAllProgramLevels().filter(level => level.isLocked)
}




