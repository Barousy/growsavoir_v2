'use client'

import { Printer } from 'lucide-react'

export default function PrintButton() {
  const handlePrint = () => {
    try {
      window.print()
    } catch (error) {
      console.error('Erreur lors de l\'impression:', error)
    }
  }

  return (
    <button
      onClick={handlePrint}
      className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
    >
      <Printer className="h-4 w-4 mr-2" />
      Imprimer
    </button>
  )
}
