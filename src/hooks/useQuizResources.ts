'use client'

import { useMemo } from 'react'
import { getQuizSnippetsFromResources } from '@/data/resources'

export function useQuizResources() {
  const snippets = useMemo(() => getQuizSnippetsFromResources(), [])

  // API de base pour alimenter des questions plus tard
  return {
    snippets,
    getByLesson: (slug?: string) => snippets.filter((s) => (slug ? s.lessonSlug === slug : true)),
  }
}


