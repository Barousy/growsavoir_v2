// Export du nouvel agrégateur et des données du programme
export * from './all-lessons'

// Export des nouvelles leçons structurées selon le programme complet
export * from './lessons-arabe-detailed'
export * from './lessons-francais-detailed'
export * from './lessons-anglais-detailed'
export * from './lessons-mathematiques-detailed'
export * from './lessons-sciences-detailed'
export * from './lessons-informatique-detailed'
export * from './lessons-aqida-detailed'
export * from './lessons-fiqh-detailed'
export * from './lessons-sira-detailed'
export * from './lessons-histoire-detailed'
export * from './lessons-devperso-detailed'

// Export de la structure du programme (sans conflits)
export { 
  PROGRAM_LEVELS, 
  SUBJECT_PROGRAMS, 
  getSubjectProgram, 
  getProgramLevel,
  getAllProgramLevels
} from './program-structure'

// Export des autres données
export * from './levels'
export * from './subjects'
export * from './age-groups'
export * from './badges'
export * from './quizzes'
export * from './config'

// Types pour la validation
interface LessonData {
  slug: string
  title: string
  level: string
  subject: string
}

interface SubjectData {
  id: string
  name: string
}

interface LevelData {
  id: string
  name: string
}

interface QuizData {
  id: string
  questions: unknown[]
}

interface BadgeData {
  id: string
  name: string
}

// Fonctions utilitaires pour la validation des données
export function validateLessonData(lesson: unknown): lesson is LessonData {
  // Validation basique des leçons
  return lesson !== null && 
         typeof lesson === 'object' &&
         'slug' in lesson && typeof (lesson as LessonData).slug === 'string' && 
         'title' in lesson && typeof (lesson as LessonData).title === 'string' &&
         'level' in lesson && typeof (lesson as LessonData).level === 'string' &&
         'subject' in lesson && typeof (lesson as LessonData).subject === 'string'
}

export function validateSubjectData(subject: unknown): subject is SubjectData {
  // Validation basique des sujets
  return subject !== null && 
         typeof subject === 'object' &&
         'id' in subject && typeof (subject as SubjectData).id === 'string' && 
         'name' in subject && typeof (subject as SubjectData).name === 'string'
}

export function validateLevelData(level: unknown): level is LevelData {
  // Validation basique des niveaux
  return level !== null && 
         typeof level === 'object' &&
         'id' in level && typeof (level as LevelData).id === 'string' && 
         'name' in level && typeof (level as LevelData).name === 'string'
}

export function validateQuizData(quiz: unknown): quiz is QuizData {
  // Validation basique des quiz
  return quiz !== null && 
         typeof quiz === 'object' &&
         'id' in quiz && typeof (quiz as QuizData).id === 'string' && 
         'questions' in quiz && Array.isArray((quiz as QuizData).questions)
}

export function validateBadgeData(badge: unknown): badge is BadgeData {
  // Validation basique des badges
  return badge !== null && 
         typeof badge === 'object' &&
         'id' in badge && typeof (badge as BadgeData).id === 'string' && 
         'name' in badge && typeof (badge as BadgeData).name === 'string'
}

// Fonctions de statistiques du programme (placeholder)
export function getProgramStatistics() {
  return {
    totalLessons: 0,
    totalSubjects: 0,
    totalLevels: 4,
    lessonsBySubject: {},
    lessonsByLevel: {},
    unlockedLessons: 0,
    lockedLessons: 0,
  }
}

// Fonctions de recherche et filtrage avancées (placeholder)
export function searchLessons(query: string, filters?: {
  subject?: string
  level?: string
  ageGroup?: string
  isLocked?: boolean
}) {
  return []
}

// Fonctions d'export et d'import des données (placeholder)
export function exportLessonData(lessonId: string) {
  return {
    lesson: null,
    metadata: {
      exportedAt: new Date().toISOString(),
      version: '1.0.0',
      source: 'GrowSavoir Platform'
    }
  }
}

export function importLessonData(lessonData: unknown) {
  if (!validateLessonData(lessonData)) {
    throw new Error('Invalid lesson data format')
  }
  return {
    success: true,
    lesson: lessonData,
    message: 'Lesson data imported successfully'
  }
}
