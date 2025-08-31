// src/data/all-lessons.ts
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

export type LessonDict = Record<string, Lesson>

// Convertit proprement un array OU un record en record typé
function toRecord<T extends { slug: string }>(
  input: Record<string, T> | T[]
): Record<string, T> {
  return Array.isArray(input)
    ? Object.fromEntries(input.map((l) => [l.slug, l]))
    : input
}

// Agrégation (peu importe si chaque source est un array ou un record)
export const allLessons: LessonDict = {
  ...toRecord(allLessonsArabe),
  ...toRecord(allLessonsFrancais),
  ...toRecord(allLessonsAnglais),
  ...toRecord(allLessonsMathematiques),
  ...toRecord(allLessonsSciences),
  ...toRecord(allLessonsInformatique),
  ...toRecord(allLessonsAqida),
  ...toRecord(allLessonsFiqh),
  ...toRecord(allLessonsSira),
  ...toRecord(allLessonsHistoire),
  ...toRecord(allLessonsDevPerso),
 }

// Utilitaires
export const getLessonBySlug = (slug: string): Lesson | null => allLessons[slug] || null
export const getAllLessons = (): LessonDict => allLessons
export const getLessonsByLevel = (level: string): Lesson[] =>
  Object.values(allLessons).filter((l) => l.level === level)
export const getLessonsBySubject = (subject: string): Lesson[] =>
  Object.values(allLessons).filter((l) => l.subject === subject)
export const getLessonsByAgeGroup = (ageGroup: string): Lesson[] =>
  Object.values(allLessons).filter((l) => l.ageGroup === ageGroup)
export const getUnlockedLessons = (): Lesson[] =>
  Object.values(allLessons).filter((l) => !l.isLocked)
export const getLockedLessons = (): Lesson[] =>
  Object.values(allLessons).filter((l) => l.isLocked)
export const getTotalLessonCount = (): number =>
  Object.keys(allLessons).length
export const getLessonCountByLevel = (level: string): number =>
  getLessonsByLevel(level).length
export const getLessonCountBySubject = (subject: string): number =>
  getLessonsBySubject(subject).length

export const getLessonsByProgramLevel = (programLevel: string): Lesson[] =>
  Object.values(allLessons).filter((l) => l.level === programLevel)

export const getLessonsBySubjectAndLevel = (subject: string, level: string): Lesson[] =>
  Object.values(allLessons).filter((l) => l.subject === subject && l.level === level)

export const getProgramOverview = (): Record<string, Record<string, number>> => {
  const subjects = [
    'Langue Arabe',
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
  subjects.forEach((s) => {
    overview[s] = {}
    levels.forEach((lvl) => {
      overview[s][lvl] = getLessonsBySubjectAndLevel(s, lvl).length
    })
  })
  return overview
}
