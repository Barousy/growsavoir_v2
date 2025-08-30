import { NextResponse } from 'next/server'
import { 
  getTotalLessonCount, 
  getLessonCountBySubject, 
  getLessonsBySubject, 
  getProgramOverview 
} from '@/data'

export async function GET() {
  try {
    // Récupérer toutes les données de test
    const testData = {
      timestamp: new Date().toISOString(),
      totalLessons: getTotalLessonCount(),
      programOverview: getProgramOverview(),
      subjects: {
        arabic: {
          count: getLessonCountBySubject('Langue Arabe'),
          lessons: getLessonsBySubject('Langue Arabe').slice(0, 3) // Premières 3 leçons
        },
        french: {
          count: getLessonCountBySubject('Langue Française'),
          lessons: getLessonsBySubject('Langue Française').slice(0, 3)
        },
        english: {
          count: getLessonCountBySubject('Langue Anglaise'),
          lessons: getLessonsBySubject('Langue Anglaise').slice(0, 3)
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





