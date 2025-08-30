'use client'

import { useState, useEffect } from 'react'

export default function TestPage() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const testData = async () => {
      try {
        // Test des données directement
        const response = await fetch('/api/test-data')
        if (response.ok) {
          const result = await response.json()
          setData(result)
        } else {
          setError('Erreur lors du chargement des données')
        }
      } catch (err) {
        setError('Erreur de connexion')
      } finally {
        setLoading(false)
      }
    }

    testData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des données...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Erreur</h1>
          <p className="text-gray-600">{error}</p>
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <p className="text-sm text-gray-700">
              Vérifiez que le serveur fonctionne sur http://localhost:3000
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Test des Données</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Données reçues</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Serveur connecté</h3>
          <p className="text-green-700">
            Le serveur fonctionne correctement. Vous pouvez maintenant tester les autres pages.
          </p>
          <div className="mt-4 space-x-4">
            <a href="/" className="text-blue-600 hover:underline">Page d'accueil</a>
            <a href="/catalogue" className="text-blue-600 hover:underline">Catalogue</a>
            <a href="/statistiques" className="text-blue-600 hover:underline">Statistiques</a>
          </div>
        </div>
      </div>
    </div>
  )
}





