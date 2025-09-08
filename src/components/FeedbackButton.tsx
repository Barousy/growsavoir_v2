'use client'

import { useState } from 'react'
import { ThumbsUp, ThumbsDown, MessageCircle, X } from 'lucide-react'

interface FeedbackButtonProps {
  lessonId: string
  className?: string
}

export default function FeedbackButton({ lessonId, className = '' }: FeedbackButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [rating, setRating] = useState<'positive' | 'negative' | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!rating) return

    // Here you would typically send the feedback to your API
    console.log('Feedback submitted:', { lessonId, rating, feedback })
    
    setIsSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsSubmitted(false)
      setFeedback('')
      setRating(null)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className={`fixed bottom-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-lg ${className}`}>
        <div className="flex items-center gap-2">
          <ThumbsUp className="h-4 w-4" />
          <span className="text-sm font-medium">Merci pour votre retour !</span>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Feedback Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
        aria-label="Donner un avis sur cette leçon"
      >
        <MessageCircle className="h-5 w-5" />
      </button>

      {/* Feedback Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Votre avis nous intéresse</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cette leçon vous a-t-elle été utile ?
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setRating('positive')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                      rating === 'positive'
                        ? 'bg-green-50 border-green-200 text-green-700'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    Oui
                  </button>
                  <button
                    type="button"
                    onClick={() => setRating('negative')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                      rating === 'negative'
                        ? 'bg-red-50 border-red-200 text-red-700'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <ThumbsDown className="h-4 w-4" />
                    Non
                  </button>
                </div>
              </div>

              {/* Feedback Text */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Commentaire (optionnel)
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Partagez votre expérience..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  rows={3}
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={!rating}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
