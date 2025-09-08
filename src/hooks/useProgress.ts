'use client'

import { useState, useEffect } from 'react'
import { Lesson } from '@/data/lessons'

interface LessonProgress {
  slug: string
  completed: boolean
  score?: number
  timeSpent: number
  lastAccessed: string
  notes?: string
}

interface SubjectProgress {
  subject: string
  totalLessons: number
  completedLessons: number
  averageScore: number
  totalTimeSpent: number
}

export function useProgress() {
  const [progress, setProgress] = useState<Record<string, LessonProgress>>({})

  useEffect(() => {
    // Charger la progression depuis le localStorage
    const savedProgress = localStorage.getItem('growsavoir-progress')
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress))
      } catch (error) {
        console.error('Erreur lors du chargement de la progression:', error)
      }
    }
  }, [])

  const updateProgress = (lessonSlug: string, updates: Partial<LessonProgress>) => {
    const currentProgress = progress[lessonSlug] || {
      slug: lessonSlug,
      completed: false,
      timeSpent: 0,
      lastAccessed: new Date().toISOString(),
    }

    const updatedProgress = {
      ...currentProgress,
      ...updates,
      lastAccessed: new Date().toISOString(),
    }

    const newProgress = {
      ...progress,
      [lessonSlug]: updatedProgress,
    }

    setProgress(newProgress)
    localStorage.setItem('growsavoir-progress', JSON.stringify(newProgress))
  }

  const markAsCompleted = (lessonSlug: string, score?: number) => {
    updateProgress(lessonSlug, {
      completed: true,
      score,
    })
  }

  const addTimeSpent = (lessonSlug: string, additionalTime: number) => {
    const currentProgress = progress[lessonSlug]
    if (currentProgress) {
      updateProgress(lessonSlug, {
        timeSpent: currentProgress.timeSpent + additionalTime,
      })
    }
  }

  const addNotes = (lessonSlug: string, notes: string) => {
    updateProgress(lessonSlug, { notes })
  }

  const getLessonProgress = (lessonSlug: string): LessonProgress | null => {
    return progress[lessonSlug] || null
  }

  const getSubjectProgress = (subject: string, lessons: Lesson[]): SubjectProgress => {
    const subjectLessons = lessons.filter(lesson => lesson.subject === subject)
    const totalLessons = subjectLessons.length
    const completedLessons = subjectLessons.filter(lesson => 
      progress[lesson.slug]?.completed
    ).length

    const scores = subjectLessons
      .map(lesson => progress[lesson.slug]?.score)
      .filter(score => score !== undefined) as number[]

    const averageScore = scores.length > 0 
      ? scores.reduce((sum, score) => sum + score, 0) / scores.length 
      : 0

    const totalTimeSpent = subjectLessons.reduce((total, lesson) => {
      return total + (progress[lesson.slug]?.timeSpent || 0)
    }, 0)

    return {
      subject,
      totalLessons,
      completedLessons,
      averageScore,
      totalTimeSpent,
    }
  }

  const getOverallProgress = (lessons: Lesson[]) => {
    const allLessons = Object.values(lessons)
    const totalLessons = allLessons.length
    const completedLessons = allLessons.filter(lesson => 
      progress[lesson.slug]?.completed
    ).length

    const totalTimeSpent = allLessons.reduce((total, lesson) => {
      return total + (progress[lesson.slug]?.timeSpent || 0)
    }, 0)

    const subjects = [...new Set(allLessons.map(lesson => lesson.subject))]
    const subjectProgress = subjects.map(subject => 
      getSubjectProgress(subject, allLessons)
    )

    return {
      totalLessons,
      completedLessons,
      completionPercentage: totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0,
      totalTimeSpent,
      subjectProgress,
    }
  }

  const resetProgress = () => {
    setProgress({})
    localStorage.removeItem('growsavoir-progress')
  }

  return {
    progress,
    updateProgress,
    markAsCompleted,
    addTimeSpent,
    addNotes,
    getLessonProgress,
    getSubjectProgress,
    getOverallProgress,
    resetProgress,
  }
}
