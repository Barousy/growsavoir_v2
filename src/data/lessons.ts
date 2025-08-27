// Données des leçons - en real app, ceci viendrait de la base de données
export interface Lesson {
  slug: string
  title: string
  summary: string
  minutes: number
  isLocked: boolean
  subject: string
  ageGroup: string
  body: {
    sections: Array<{
      type: string
      title: string
      content: string
      image?: string
      examples?: Array<{
        letter?: string
        name: string
        pronunciation: string
        meaning: string
      }>
      instructions?: string[]
      words?: Array<{
        arabic: string
        transliteration: string
        french: string
      }>
    }>
  }
}

export const lessons: Record<string, Lesson> = {
  'alphabet-arabe-debutant': {
    slug: 'alphabet-arabe-debutant',
    title: 'L\'Alphabet Arabe - Niveau Débutant',
    summary: 'Découverte des 28 lettres de l\'alphabet arabe avec prononciation',
    minutes: 15,
    isLocked: false,
    subject: 'Langue Arabe',
    ageGroup: 'Maternelle',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'Bienvenue dans l\'apprentissage de l\'arabe',
          content: 'Aujourd\'hui, nous allons découvrir les lettres de l\'alphabet arabe. L\'arabe est une langue magnifique parlée par plus de 400 millions de personnes dans le monde.',
          image: '/images/arabic-intro.jpg'
        },
        {
          type: 'lesson',
          title: 'Les premières lettres',
          content: 'Commençons par les 5 premières lettres de l\'alphabet arabe. Chaque lettre a sa propre forme et son propre son.',
          examples: [
            { letter: 'ا', name: 'Alif', pronunciation: 'A', meaning: 'Première lettre' },
            { letter: 'ب', name: 'Baa', pronunciation: 'B', meaning: 'Deuxième lettre' },
            { letter: 'ت', name: 'Taa', pronunciation: 'T', meaning: 'Troisième lettre' },
            { letter: 'ث', name: 'Thaa', pronunciation: 'TH', meaning: 'Quatrième lettre' },
            { letter: 'ج', name: 'Jiim', pronunciation: 'J', meaning: 'Cinquième lettre' }
          ]
        },
        {
          type: 'activity',
          title: 'Activité pratique',
          content: 'Maintenant, pratiquons ensemble ! Répétez chaque lettre après l\'écoute de sa prononciation.',
          instructions: [
            'Écoutez attentivement la prononciation',
            'Répétez à haute voix',
            'Observez la forme de chaque lettre',
            'Associez le son à la forme'
          ]
        },
        {
          type: 'vocabulary',
          title: 'Vocabulaire de base',
          content: 'Apprenons quelques mots simples qui commencent par ces lettres.',
          words: [
            { arabic: 'أب', transliteration: 'Ab', french: 'Père' },
            { arabic: 'بنت', transliteration: 'Bint', french: 'Fille' },
            { arabic: 'تمر', transliteration: 'Tamr', french: 'Datte' }
          ]
        }
      ]
    }
  },
  'english-basics': {
    slug: 'english-basics',
    title: 'Bases de l\'Anglais',
    summary: 'Apprendre les bases de la langue anglaise',
    minutes: 20,
    isLocked: false,
    subject: 'Langue Anglaise',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'Bienvenue dans l\'apprentissage de l\'anglais',
          content: 'L\'anglais est une langue internationale parlée par plus de 1,5 milliard de personnes. Commençons par les bases !',
          image: '/images/english-intro.jpg'
        },
        {
          type: 'lesson',
          title: 'Les salutations',
          content: 'Apprenons les salutations de base en anglais pour commencer à communiquer.',
          examples: [
            { name: 'Hello', pronunciation: 'Hé-lo', meaning: 'Bonjour' },
            { name: 'Good morning', pronunciation: 'Goud mor-ning', meaning: 'Bonjour (matin)' },
            { name: 'Good afternoon', pronunciation: 'Goud af-ter-noun', meaning: 'Bonjour (après-midi)' },
            { name: 'Goodbye', pronunciation: 'Goud-baï', meaning: 'Au revoir' }
          ]
        },
        {
          type: 'activity',
          title: 'Pratique des salutations',
          content: 'Pratiquons ensemble les salutations en anglais !',
          instructions: [
            'Répétez chaque salutation',
            'Pratiquez avec un partenaire',
            'Utilisez les bonnes intonations',
            'Souriez en parlant'
          ]
        }
      ]
    }
  },
  'grammaire-francaise': {
    slug: 'grammaire-francaise',
    title: 'Grammaire Française - Niveau Débutant',
    summary: 'Les bases de la grammaire française',
    minutes: 20,
    isLocked: false,
    subject: 'Langue Française',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'Bienvenue dans la grammaire française',
          content: 'La grammaire française peut sembler complexe, mais nous allons l\'apprendre étape par étape !',
          image: '/images/french-intro.jpg'
        },
        {
          type: 'lesson',
          title: 'Les articles définis et indéfinis',
          content: 'Découvrons les articles qui accompagnent les noms en français.',
          examples: [
            { name: 'Le', pronunciation: 'Le', meaning: 'Article défini masculin' },
            { name: 'La', pronunciation: 'La', meaning: 'Article défini féminin' },
            { name: 'Un', pronunciation: 'Un', meaning: 'Article indéfini masculin' },
            { name: 'Une', pronunciation: 'Une', meaning: 'Article indéfini féminin' }
          ]
        }
      ]
    }
  },
  'addition-soustraction': {
    slug: 'addition-soustraction',
    title: 'Addition et Soustraction',
    summary: 'Opérations de base avec les nombres',
    minutes: 20,
    isLocked: false,
    subject: 'Mathématiques',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'Bienvenue dans les mathématiques',
          content: 'Les mathématiques sont partout autour de nous ! Commençons par les opérations de base.',
          image: '/images/math-intro.jpg'
        },
        {
          type: 'lesson',
          title: 'L\'addition',
          content: 'L\'addition, c\'est ajouter des nombres ensemble. C\'est comme rassembler des objets !',
          examples: [
            { name: '2 + 3', pronunciation: 'Deux plus trois', meaning: 'Égal 5' },
            { name: '7 + 4', pronunciation: 'Sept plus quatre', meaning: 'Égal 11' },
            { name: '10 + 5', pronunciation: 'Dix plus cinq', meaning: 'Égal 15' }
          ]
        },
        {
          type: 'activity',
          title: 'Calculons ensemble',
          content: 'Pratiquons l\'addition avec des exercices simples.',
          instructions: [
            'Lisez chaque opération',
            'Calculez mentalement',
            'Vérifiez votre réponse',
            'Pratiquez régulièrement'
          ]
        }
      ]
    }
  }
}

// Fonction pour récupérer une leçon par slug
export function getLessonBySlug(slug: string): Lesson | null {
  return lessons[slug] || null
}

// Fonction pour récupérer toutes les leçons
export function getAllLessons(): Lesson[] {
  return Object.values(lessons)
}
