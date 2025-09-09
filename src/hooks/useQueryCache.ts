'use client'

import { useState, useEffect, useCallback } from 'react'

interface CacheOptions {
  ttl?: number // Time to live in milliseconds
  staleTime?: number // Time before data is considered stale
}

interface CacheEntry<T> {
  data: T
  timestamp: number
  ttl: number
}

class QueryCache {
  private cache = new Map<string, CacheEntry<any>>()
  private defaultTTL = 5 * 60 * 1000 // 5 minutes
  private defaultStaleTime = 2 * 60 * 1000 // 2 minutes

  set<T>(key: string, data: T, options: CacheOptions = {}) {
    const ttl = options.ttl || this.defaultTTL
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    })
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key)
    if (!entry) return null

    const now = Date.now()
    const isExpired = now - entry.timestamp > entry.ttl

    if (isExpired) {
      this.cache.delete(key)
      return null
    }

    return entry.data
  }

  isStale(key: string): boolean {
    const entry = this.cache.get(key)
    if (!entry) return true

    const now = Date.now()
    const staleTime = this.defaultStaleTime
    return now - entry.timestamp > staleTime
  }

  invalidate(key: string) {
    this.cache.delete(key)
  }

  clear() {
    this.cache.clear()
  }

  getStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    }
  }
}

const queryCache = new QueryCache()

export function useQueryCache() {
  const [stats, setStats] = useState(queryCache.getStats())

  const setCache = useCallback(<T>(key: string, data: T, options?: CacheOptions) => {
    queryCache.set(key, data, options)
    setStats(queryCache.getStats())
  }, [])

  const getCache = useCallback(<T>(key: string): T | null => {
    return queryCache.get<T>(key)
  }, [])

  const invalidateCache = useCallback((key: string) => {
    queryCache.invalidate(key)
    setStats(queryCache.getStats())
  }, [])

  const clearCache = useCallback(() => {
    queryCache.clear()
    setStats(queryCache.getStats())
  }, [])

  const isStale = useCallback((key: string) => {
    return queryCache.isStale(key)
  }, [])

  return {
    setCache,
    getCache,
    invalidateCache,
    clearCache,
    isStale,
    stats,
  }
}

// Hook spécialisé pour les données de leçons
export function useLessonsCache() {
  const { setCache, getCache, invalidateCache, isStale } = useQueryCache()

  const cacheKey = 'lessons-data'
  const cacheOptions = { ttl: 10 * 60 * 1000 } // 10 minutes

  const getCachedLessons = useCallback(() => {
    return getCache(cacheKey)
  }, [getCache, cacheKey])

  const setCachedLessons = useCallback((data: any) => {
    setCache(cacheKey, data, cacheOptions)
  }, [setCache, cacheKey, cacheOptions])

  const invalidateLessonsCache = useCallback(() => {
    invalidateCache(cacheKey)
  }, [invalidateCache, cacheKey])

  const shouldRefetch = useCallback(() => {
    return isStale(cacheKey)
  }, [isStale, cacheKey])

  return {
    getCachedLessons,
    setCachedLessons,
    invalidateLessonsCache,
    shouldRefetch,
  }
}
