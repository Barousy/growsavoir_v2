'use client'

import { Printer } from 'lucide-react'

export default function PrintButton() {

  return (
    <button
      onClick={() => window.print()}
      aria-label="Imprimer la leçon"
      className="flex items-center px-4 py-2 text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"

    >
      <Printer className="h-4 w-4 mr-2" />
      Imprimer
    </button>
  )
}

