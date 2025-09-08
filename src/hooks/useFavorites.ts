'use client'

import { useState, useEffect } from 'react'
import { Lesson } from '@/data/lessons'

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    // Charger les favoris depuis le localStorage
    const savedFavorites = localStorage.getItem('growsavoir-favorites')
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites))
      } catch (error) {
        console.error('Erreur lors du chargement des favoris:', error)
      }
    }
  }, [])

  const addToFavorites = (lessonSlug: string) => {
    const newFavorites = [...favorites, lessonSlug]
    setFavorites(newFavorites)
    localStorage.setItem('growsavoir-favorites', JSON.stringify(newFavorites))
  }

  const removeFromFavorites = (lessonSlug: string) => {
    const newFavorites = favorites.filter(slug => slug !== lessonSlug)
    setFavorites(newFavorites)
    localStorage.setItem('growsavoir-favorites', JSON.stringify(newFavorites))
  }

  const toggleFavorite = (lessonSlug: string) => {
    if (favorites.includes(lessonSlug)) {
      removeFromFavorites(lessonSlug)
    } else {
      addToFavorites(lessonSlug)
    }
  }

  const isFavorite = (lessonSlug: string) => favorites.includes(lessonSlug)

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
  }
}
