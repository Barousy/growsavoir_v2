import { Lesson } from './lessons'
import { allLessonsArabe } from './lessons-arabe-detailed'
import { allLessonsFrancais } from './lessons-francais-detailed'
import { allLessonsAnglais } from './lessons-anglais-detailed'
import { allLessonsMathematiques } from './lessons-mathematiques-detailed'
import { allLessonsSciences } from './lessons-sciences-detailed'
import { allLessonsInformatique } from './lessons-informatique-detailed'
import { allLessonsAqida } from './lessons-aqida-detailed'
import { allLessonsFiqh } from './lessons-fiqh-detailed'
import { allLessonsSira } from './lessons-sira-detailed'
import { allLessonsHistoire } from './lessons-histoire-detailed'
import { allLessonsDevPerso } from './lessons-devperso-detailed'

type LessonDict = Record<string, Lesson>

/** Accepte tableau OU objet, et retourne un Record<slug, Lesson>. 
 *  On tolère des types partiels pour éviter l'erreur TS que tu vois.
 */
function toRecordUnsafe(input: unknown): LessonDict {
  if (Array.isArray(input)) {
    const rec: LessonDict = {}
    for (const l of input as any[]) {
      if (l && (l as any).slug) {
        rec[(l as any).slug as string] = l as Lesson
      }
    }
    return rec
  }
  return (input as LessonDict) ?? {}
}

// Agrégation (peu importe si chaque source est un array ou un record)
export const allLessons: LessonDict = {
  ...toRecordUnsafe(allLessonsArabe),
  ...toRecordUnsafe(allLessonsFrancais),
  ...toRecordUnsafe(allLessonsAnglais),
  ...toRecordUnsafe(allLessonsMathematiques),
  ...toRecordUnsafe(allLessonsSciences),
  ...toRecordUnsafe(allLessonsInformatique),
  ...toRecordUnsafe(allLessonsAqida),
  ...toRecordUnsafe(allLessonsFiqh),
  ...toRecordUnsafe(allLessonsSira),
  ...toRecordUnsafe(allLessonsHistoire),
  ...toRecordUnsafe(allLessonsDevPerso),
}

// --- Utilitaires ---

export const getLessonBySlug = (slug: string): Lesson | null =>
  allLessons[slug] ?? null

export const getAllLessons = (): LessonDict => allLessons

export const getLessonsByLevel = (level: string): Lesson[] =>
  Object.values(allLessons).filter((lesson) => lesson.level === level)

export const getLessonsBySubject = (subject: string): Lesson[] =>
  Object.values(allLessons).filter(
    (lesson) => (lesson.subject || '').toLowerCase() === subject.toLowerCase()
  )

export const getLessonsByAgeGroup = (ageGroup: string): Lesson[] =>
  Object.values(allLessons).filter((lesson) => lesson.ageGroup === ageGroup)

export const getUnlockedLessons = (): Lesson[] =>
  Object.values(allLessons).filter((lesson) => !lesson.isLocked)

export const getLockedLessons = (): Lesson[] =>
  Object.values(allLessons).filter((lesson) => lesson.isLocked)

export const getTotalLessonCount = (): number =>
  Object.keys(allLessons).length

export const getLessonCountByLevel = (level: string): number =>
  getLessonsByLevel(level).length

export const getLessonCountBySubject = (subject: string): number =>
  getLessonsBySubject(subject).length

export const getLessonsByProgramLevel = (programLevel: string): Lesson[] =>
  Object.values(allLessons).filter((lesson) => lesson.level === programLevel)

export const getLessonsBySubjectAndLevel = (subject: string, level: string): Lesson[] =>
  Object.values(allLessons).filter(
    (lesson) =>
      (lesson.subject || '').toLowerCase() === subject.toLowerCase() &&
      lesson.level === level
  )

export const getProgramOverview = (): Record<string, Record<string, number>> => {
  const subjects = [
    'Arabe',
    'Langue Française',
    'Langue Anglaise',
    'Mathématiques',
    'Sciences',
    'Informatique',
    'Aqîda (Creed)',
    'Fiqh (Jurisprudence)',
    'Sîra (Biographie du Prophète ﷺ)',
    "Histoire de l'Islam",
    'Développement Personnel',
  ]
  const levels = ['n1-fondamentaux', 'n2-intermediaire', 'n3-avance', 'n4-expert']

  const overview: Record<string, Record<string, number>> = {}
  for (const s of subjects) {
    overview[s] = {}
    for (const lvl of levels) {
      overview[s][lvl] = getLessonsBySubjectAndLevel(s, lvl).length
    }
  }
  return overview
}
