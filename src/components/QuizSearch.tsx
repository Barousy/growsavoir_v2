'use client'

import { Search } from 'lucide-react'
import React from 'react'

export default function QuizSearch() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 flex items-center">
      <Search className="h-5 w-5 text-gray-400 mr-3" />
      <input
        type="text"
        placeholder="Rechercher un quiz (titre ou matière)…"
        className="w-full outline-none"
        onChange={(e) => {
          const q = e.currentTarget.value.toLowerCase()
          const cards = document.querySelectorAll<HTMLElement>('[data-qcard]')
          cards.forEach((c) => {
            const hay = (c.dataset.hay || '').toLowerCase()
            c.style.display = hay.includes(q) ? '' : 'none'
          })
        }}
      />
    </div>
  )
}


