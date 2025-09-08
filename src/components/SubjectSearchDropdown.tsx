'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Search, ChevronDown, BookOpen, X } from 'lucide-react'

interface Subject {
  key: string
  title: string
  emoji: string
  description: string
  lessonCount: number
  color: string
}

interface SubjectSearchDropdownProps {
  subjects: Subject[]
  className?: string
}

const SubjectSearchDropdown: React.FC<SubjectSearchDropdownProps> = ({ 
  subjects, 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Filter subjects based on search term
  const filteredSubjects = subjects.filter(subject =>
    subject.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchTerm('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Focus input when dropdown opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject)
    setIsOpen(false)
    setSearchTerm('')
  }

  const handleClearSelection = () => {
    setSelectedSubject(null)
    setSearchTerm('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
      setSearchTerm('')
    }
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm hover:border-blue-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Sélectionner une matière"
      >
        <div className="flex items-center gap-3">
          <Search className="h-4 w-4 text-gray-400 flex-shrink-0" />
          <span className="text-gray-700 truncate">
            {selectedSubject ? (
              <div className="flex items-center gap-2">
                <span className="text-lg">{selectedSubject.emoji}</span>
                <span>{selectedSubject.title}</span>
                <span className="text-sm text-gray-500">({selectedSubject.lessonCount} leçons)</span>
              </div>
            ) : (
              'Rechercher une matière...'
            )}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {selectedSubject && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleClearSelection()
              }}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Effacer la sélection"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
          <ChevronDown 
            className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-80 overflow-hidden animate-fade-in-up">
          {/* Search Input */}
          <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Tapez pour filtrer les matières..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white shadow-sm"
                autoComplete="off"
              />
            </div>
          </div>

          {/* Subjects List */}
          <div className="max-h-60 overflow-y-auto">
            {filteredSubjects.length > 0 ? (
              <ul role="listbox" className="py-1">
                {filteredSubjects.map((subject) => (
                  <li key={subject.key} role="option">
                    <Link
                      href={`/catalogue/${subject.key}`}
                      onClick={() => handleSubjectSelect(subject)}
                      className="flex items-center gap-4 px-4 py-4 hover:bg-blue-50 transition-all duration-200 group border-b border-gray-50 last:border-b-0"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {subject.emoji}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                            {subject.title}
                          </h3>
                          <span className="text-xs text-blue-600 bg-blue-100 px-2.5 py-1 rounded-full font-medium">
                            {subject.lessonCount} leçons
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                          {subject.description}
                        </p>
                      </div>
                      <BookOpen className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-6 py-12 text-center text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p className="font-medium text-gray-700 mb-1">Aucune matière trouvée</p>
                <p className="text-sm text-gray-500">Essayez un autre terme de recherche</p>
              </div>
            )}
          </div>

          {/* Quick Access to All Subjects */}
          <div className="border-t border-gray-100 p-4 bg-gradient-to-r from-gray-50 to-blue-50">
            <Link
              href="/catalogue"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors py-2 px-4 rounded-lg hover:bg-white hover:shadow-sm"
            >
              <BookOpen className="h-4 w-4" />
              Voir toutes les matières
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default SubjectSearchDropdown
