import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Données de test simplifiées sans accès à la base de données
    const testData = {
      timestamp: new Date().toISOString(),
      totalLessons: 150,
      programOverview: {
        subjects: ['Langue Arabe', 'Langue Française', 'Langue Anglaise', 'Mathématiques', 'Sciences'],
        levels: ['N1-Fondamentaux', 'N2-Intermédiaire', 'N3-Avancé', 'N4-Expert'],
        totalStudents: 1000
      },
      subjects: {
        arabic: {
          count: 45,
          lessons: [
            { title: 'Alphabet Arabe', level: 'Débutant' },
            { title: 'Prononciation', level: 'Débutant' },
            { title: 'Écriture', level: 'Débutant' }
          ]
        },
        french: {
          count: 38,
          lessons: [
            { title: 'Grammaire de base', level: 'Débutant' },
            { title: 'Conjugaison', level: 'Débutant' },
            { title: 'Vocabulaire', level: 'Débutant' }
          ]
        },
        english: {
          count: 42,
          lessons: [
            { title: 'Basic Grammar', level: 'Débutant' },
            { title: 'Vocabulary', level: 'Débutant' },
            { title: 'Pronunciation', level: 'Débutant' }
          ]
        }
      },
      levels: ['n1-fondamentaux', 'n2-intermediaire', 'n3-avance', 'n4-expert'],
      status: 'success'
    }

    return NextResponse.json(testData)
  } catch (error) {
    console.error('Erreur lors du test des données:', error)
    return NextResponse.json(
      { 
        error: 'Erreur lors du chargement des données',
        details: error instanceof Error ? error.message : 'Erreur inconnue',
        status: 'error'
      },
      { status: 500 }
    )
  }
}
