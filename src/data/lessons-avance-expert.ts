import { Lesson } from './lessons'

export const lessonsAvance: Record<string, Lesson> = {
  'litterature-arabe-avance': {
    slug: 'litterature-arabe-avance',
    title: 'Littérature Arabe - Niveau Avancé',
    summary: 'Étude de la littérature arabe classique et moderne avec analyse de textes',
    level: 'avance',
    subject: 'Langue Arabe',
    ageGroup: '11-14 ans',
    estimatedMinutes: 75,
    isLocked: true,
    prerequisites: ['grammaire-arabe-intermediaire'],
    learningObjectives: [
      'Analyser des textes littéraires arabes',
      'Comprendre les figures de style',
      'Apprécier la beauté de la langue arabe',
      'Écrire des textes créatifs',
      'Développer le sens critique'
    ],
    keywords: ['arabe', 'littérature', 'analyse', 'figures de style', 'textes', 'créativité'],
    sources: [
      {
        title: 'Anthologie de Littérature Arabe - Institut du Monde Arabe',
        url: 'https://www.imarabe.org/fr/litterature-arabe',
        type: 'book',
        description: 'Collection de textes littéraires arabes classiques et modernes'
      }
    ],
    body: {
      introduction: {
        title: 'La Littérature Arabe : L\'Art de la Langue !',
        content: 'Découvrons la richesse de la littérature arabe !',
        image: '/images/litterature-arabe-avance.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-litterature-arabe-avance'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Les Figures de Style',
          content: 'Les figures de style embellissent le langage.',
          examples: [
            {
              title: 'La Métaphore',
              description: 'Comparaison implicite',
              code: 'الاستعارة',
              explanation: 'La métaphore est une figure de style qui compare deux choses sans utiliser "comme" ou "tel".'
            },
            {
              title: 'L\'Hyperbole',
              description: 'Exagération',
              code: 'المبالغة',
              explanation: 'L\'hyperbole exagère pour créer un effet dramatique ou humoristique.'
            }
          ]
        }
      ],
      conclusion: {
        summary: 'Nous apprécions maintenant la beauté de la littérature arabe !',
        keyTakeaways: [
          'Les figures de style enrichissent le langage',
          'La littérature arabe est très riche',
          'L\'analyse de texte développe le sens critique'
        ],
        nextSteps: [
          'Lire régulièrement des textes littéraires',
          'Passer au niveau expert'
        ],
        additionalResources: [
          {
            title: 'Bibliothèque Littéraire Arabe',
            url: 'https://www.litterature-arabe.fr',
            description: 'Collection de textes littéraires arabes en ligne'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Qu\'est-ce qu\'une métaphore ?',
          type: 'multiple-choice',
          options: ['Une exagération', 'Une comparaison implicite', 'Une répétition', 'Une question'],
          correctAnswer: 'Une comparaison implicite',
          explanation: 'La métaphore est une figure de style qui compare deux choses sans utiliser "comme" ou "tel".',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 60
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Ahmed Hassan - Enseignant d\'Arabe',
      version: '1.0.0',
      tags: ['arabe', 'littérature', 'avancé', 'langue', 'analyse', 'figures de style']
    }
  }
}

export const lessonsExpert: Record<string, Lesson> = {
  'poesie-arabe-expert': {
    slug: 'poesie-arabe-expert',
    title: 'Poésie Arabe - Niveau Expert',
    summary: 'Étude approfondie de la poésie arabe classique avec analyse métrique et stylistique',
    level: 'expert',
    subject: 'Langue Arabe',
    ageGroup: '15-18 ans',
    estimatedMinutes: 90,
    isLocked: true,
    prerequisites: ['litterature-arabe-avance'],
    learningObjectives: [
      'Analyser la métrique arabe (Al-Aroud)',
      'Comprendre les genres poétiques',
      'Apprécier la poésie classique',
      'Écrire des poèmes en arabe',
      'Maîtriser les techniques poétiques'
    ],
    keywords: ['arabe', 'poésie', 'métrique', 'Al-Aroud', 'classique', 'techniques'],
    sources: [
      {
        title: 'Al-Aroud : La Métrique Arabe - Académie de Langue Arabe',
        url: 'https://www.arabic-academy.org/aroud',
        type: 'book',
        description: 'Traité complet sur la métrique arabe et ses règles'
      }
    ],
    body: {
      introduction: {
        title: 'La Poésie Arabe : L\'Art de la Métrique !',
        content: 'Plongeons dans l\'univers fascinant de la poésie arabe !',
        image: '/images/poesie-arabe-expert.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-poesie-arabe-expert'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'La Métrique Arabe (Al-Aroud)',
          content: 'Al-Aroud est la science de la métrique poétique arabe.',
          examples: [
            {
              title: 'Le Mètre Basit',
              description: 'Mètre poétique classique',
              code: 'البسيط',
              explanation: 'Le mètre Basit est l\'un des mètres les plus utilisés en poésie arabe classique.'
            },
            {
              title: 'Le Mètre Kamil',
              description: 'Mètre poétique complet',
              code: 'الكامل',
              explanation: 'Le mètre Kamil est caractérisé par sa régularité et sa beauté rythmique.'
            }
          ]
        }
      ],
      conclusion: {
        summary: 'Nous maîtrisons maintenant les secrets de la poésie arabe !',
        keyTakeaways: [
          'Al-Aroud est la science de la métrique arabe',
          'La poésie arabe a des règles précises',
          'La pratique développe la maîtrise poétique'
        ],
        nextSteps: [
          'Étudier différents mètres poétiques',
          'Créer ses propres poèmes'
        ],
        additionalResources: [
          {
            title: 'Académie de Poésie Arabe',
            url: 'https://www.poesie-arabe-academie.fr',
            description: 'Ressources avancées pour l\'étude de la poésie arabe'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Qu\'est-ce qu\'Al-Aroud ?',
          type: 'multiple-choice',
          options: ['Un genre poétique', 'La science de la métrique', 'Un poète célèbre', 'Un style d\'écriture'],
          correctAnswer: 'La science de la métrique',
          explanation: 'Al-Aroud est la science qui étudie la métrique et les règles de la poésie arabe.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 75
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Ahmed Hassan - Enseignant d\'Arabe',
      version: '1.0.0',
      tags: ['arabe', 'poésie', 'expert', 'langue', 'métrique', 'Al-Aroud']
    }
  }
}



