'use client'

import { Lock, Unlock, Printer } from 'lucide-react'

interface LessonActionsProps {
  isLocked: boolean
}

export default function LessonActions({ isLocked }: LessonActionsProps) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handlePrint}
        className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <Printer className="h-4 w-4 mr-2" />
        Imprimer
      </button>
      
      {isLocked ? (
        <div className="flex items-center px-4 py-2 text-gray-500 bg-gray-100 rounded-lg">
          <Lock className="h-4 w-4 mr-2" />
          Contenu verrouillé
        </div>
      ) : (
        <div className="flex items-center px-4 py-2 text-green-600 bg-green-100 rounded-lg">
          <Unlock className="h-4 w-4 mr-2" />
          Contenu débloqué
        </div>
      )}
    </div>
  )
}


