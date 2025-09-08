export interface Lesson {
  slug: string
  title: string
  summary: string
  level: string
  subject: string
  ageGroup: string
  estimatedMinutes: number
  isLocked: boolean
  prerequisites: string[]
  learningObjectives: string[]
  keywords: string[]
  requiredScore?: number
  sources: Array<{
    title: string
    url: string
    type?: 'website' | 'video' | 'document' | 'book'
    description: string
  }>
  body: {
    introduction: {
      title: string
      content: string
      image?: string
      videoUrl?: string
    }
    mainContent: Array<{
      type: 'concept' | 'example' | 'activity' | 'exercise' | 'summary'
      title: string
      content: string
      examples?: Array<{
        title: string
        description: string
        code?: string
        image?: string
        explanation: string
      }>
    }>
    conclusion: {
      summary: string
      keyTakeaways: string[]
      nextSteps: string[]
      additionalResources: Array<{
        title: string
        url: string
        description: string
      }>
    }
  }
  assessment: {
    quiz: Array<{
      question: string
      type: 'multiple-choice' | 'true-false' | 'fill-blank'
      options?: string[]
      correctAnswer: string
      explanation: string
      points: number
    }>
    passingScore: number
    timeLimit?: number
  }
  metadata: {
    createdAt: string
    updatedAt: string
    author: string
    reviewedBy?: string
    version: string
    tags: string[]
  }
}

export const lessons: Record<string, Lesson> = {
  'alphabet-arabe-debutant': {
    slug: 'alphabet-arabe-debutant',
    title: 'L\'Alphabet Arabe - Niveau Débutant',
    summary: 'Découverte complète des 28 lettres de l\'alphabet arabe avec prononciation, écriture et premiers mots',
    level: 'debutant',
    subject: 'Langue Arabe',
    ageGroup: '3-6 ans',
    estimatedMinutes: 45,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      'Reconnaître et nommer les 28 lettres de l\'alphabet arabe',
      'Prononcer correctement chaque lettre avec ses variations',
      'Écrire les lettres en position initiale, médiane et finale',
      'Associer les lettres aux sons correspondants',
      'Construire des mots simples avec les lettres apprises'
    ],
    keywords: ['arabe', 'alphabet', 'lettres', 'prononciation', 'écriture', 'harakât'],
    sources: [
      {
        title: 'Alphabet Arabe - Institut du Monde Arabe',
        url: 'https://www.imarabe.org/fr/alphabet-arabe',
        type: 'website',
        description: 'Ressources officielles pour l\'apprentissage de l\'arabe'
      }
    ],
    body: {
      introduction: {
        title: 'Bienvenue dans le Monde de l\'Alphabet Arabe !',
        content: 'L\'alphabet arabe est magnifique et mystérieux !',
        image: '/images/arabic-alphabet.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-arabic-alphabet'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Les 28 Lettres de l\'Alphabet Arabe',
          content: 'L\'alphabet arabe contient 28 lettres, chacune avec sa propre forme.',
          examples: [
            {
              title: 'Alif (أ)',
              description: 'Première lettre de l\'alphabet',
              code: 'أ',
              explanation: 'Alif est comme notre lettre A. Elle se prononce "a".'
            }
          ]
        }
      ],
      conclusion: {
        summary: 'Nous avons découvert les merveilles de l\'alphabet arabe !',
        keyTakeaways: [
          'L\'alphabet arabe contient 28 lettres',
          'L\'arabe s\'écrit de droite à gauche',
          'Chaque lettre a 3 positions différentes'
        ],
        nextSteps: [
          'Pratiquer l\'écriture des lettres quotidiennement',
          'Passer à la leçon suivante : "Les Voyelles Arabes"'
        ],
        additionalResources: [
          {
            title: 'Application : Alphabet Arabe pour Enfants',
            url: 'https://play.google.com/store/apps/details?id=com.arabic.alphabet',
            description: 'Application interactive pour apprendre l\'alphabet'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Combien de lettres contient l\'alphabet arabe ?',
          type: 'multiple-choice',
          options: ['26', '27', '28', '29'],
          correctAnswer: '28',
          explanation: 'L\'alphabet arabe contient exactement 28 lettres.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 30
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Ahmed Hassan - Enseignant d\'Arabe',
      version: '1.0.0',
      tags: ['arabe', 'alphabet', 'lettres', 'débutant', 'langue', 'écriture']
    }
  },
  'voyelles-arabe': {
    slug: 'voyelles-arabe',
    title: 'Les Voyelles Arabes (Harakât) - Niveau Débutant',
    summary: 'Apprentissage des voyelles courtes et longues en arabe avec leurs signes diacritiques et prononciation',
    level: 'debutant',
    subject: 'Langue Arabe',
    ageGroup: '3-6 ans',
    estimatedMinutes: 40,
    isLocked: false,
    prerequisites: ['alphabet-arabe-debutant'],
    learningObjectives: [
      'Identifier les trois voyelles courtes : Fatha, Kasra, Damma',
      'Reconnaître les voyelles longues : Alif, Ya, Waw',
      'Prononcer correctement les mots avec voyelles',
      'Lire des syllabes simples avec voyelles',
      'Écrire des mots basiques avec harakât'
    ],
    keywords: ['arabe', 'voyelles', 'harakât', 'fatha', 'kasra', 'damma', 'prononciation'],
    sources: [
      {
        title: 'Les Voyelles en Arabe - Académie de Langue Arabe',
        url: 'https://www.arabic-academy.org/vowels',
        type: 'website',
        description: 'Guide complet des voyelles arabes avec audio'
      }
    ],
    body: {
      introduction: {
        title: 'Les Voyelles : La Musique de l\'Arabe !',
        content: 'Les voyelles donnent vie aux lettres arabes !',
        image: '/images/arabic-vowels.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-arabic-vowels'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Les Trois Voyelles Courtes',
          content: 'En arabe, nous avons trois voyelles courtes principales.',
          examples: [
            {
              title: 'Fatha (َ)',
              description: 'Voyelle courte "a"',
              code: 'َ',
              explanation: 'Fatha se place au-dessus de la lettre et se prononce "a" comme dans "chat".'
            },
            {
              title: 'Kasra (ِ)',
              description: 'Voyelle courte "i"',
              code: 'ِ',
              explanation: 'Kasra se place sous la lettre et se prononce "i" comme dans "si".'
            },
            {
              title: 'Damma (ُ)',
              description: 'Voyelle courte "u"',
              code: 'ُ',
              explanation: 'Damma se place au-dessus de la lettre et se prononce "u" comme dans "lune".'
            }
          ]
        }
      ],
      conclusion: {
        summary: 'Les voyelles arabes sont maintenant nos amies !',
        keyTakeaways: [
          'Fatha = son "a", Kasra = son "i", Damma = son "u"',
          'Les voyelles courtes se placent au-dessus ou en-dessous des lettres',
          'Les voyelles longues sont des lettres à part entière'
        ],
        nextSteps: [
          'Pratiquer la lecture de syllabes avec voyelles',
          'Passer à la leçon suivante : "Les Nombres Arabes"'
        ],
        additionalResources: [
          {
            title: 'Exercices de Voyelles - Site Pédagogique',
            url: 'https://www.arabic-exercises.com/vowels',
            description: 'Exercices interactifs pour maîtriser les voyelles'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Quelle voyelle se prononce "a" ?',
          type: 'multiple-choice',
          options: ['Fatha', 'Kasra', 'Damma', 'Sukun'],
          correctAnswer: 'Fatha',
          explanation: 'Fatha (َ) se prononce "a" et se place au-dessus de la lettre.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 25
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Ahmed Hassan - Enseignant d\'Arabe',
      version: '1.0.0',
      tags: ['arabe', 'voyelles', 'harakât', 'débutant', 'langue', 'prononciation']
    }
  },
  'nombres-arabe': {
    slug: 'nombres-arabe',
    title: 'Les Nombres Arabes - Niveau Débutant',
    summary: 'Apprentissage des nombres de 1 à 20 en arabe avec écriture, prononciation et comptage',
    level: 'debutant',
    subject: 'Langue Arabe',
    ageGroup: '3-6 ans',
    estimatedMinutes: 50,
    isLocked: false,
    prerequisites: ['alphabet-arabe-debutant', 'voyelles-arabe'],
    learningObjectives: [
      'Compter de 1 à 20 en arabe',
      'Reconnaître l\'écriture des nombres arabes',
      'Prononcer correctement chaque nombre',
      'Associer les nombres aux quantités',
      'Utiliser les nombres dans des phrases simples'
    ],
    keywords: ['arabe', 'nombres', 'comptage', '1-20', 'quantités', 'prononciation'],
    sources: [
      {
        title: 'Nombres Arabes - Ressources Pédagogiques',
        url: 'https://www.arabic-numbers.org/1-20',
        type: 'website',
        description: 'Guide complet des nombres arabes avec audio et exercices'
      }
    ],
    body: {
      introduction: {
        title: 'Apprenons à Compter en Arabe !',
        content: 'Les nombres arabes sont partout autour de nous !',
        image: '/images/arabic-numbers.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-arabic-numbers'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Les Nombres de 1 à 10',
          content: 'Commençons par les dix premiers nombres.',
          examples: [
            {
              title: 'Wahid (واحد) = 1',
              description: 'Premier nombre',
              code: 'واحد',
              explanation: 'Wahid se prononce "wa-hid" et signifie "un".'
            },
            {
              title: 'Ithnan (اثنان) = 2',
              description: 'Deuxième nombre',
              code: 'اثنان',
              explanation: 'Ithnan se prononce "ith-nan" et signifie "deux".'
            },
            {
              title: 'Thalatha (ثلاثة) = 3',
              description: 'Troisième nombre',
              code: 'ثلاثة',
              explanation: 'Thalatha se prononce "tha-la-tha" et signifie "trois".'
            }
          ]
        },
        {
          type: 'activity',
          title: 'Activité de Comptage',
          content: 'Comptons ensemble les objets de la classe !'
        }
      ],
      conclusion: {
        summary: 'Nous savons maintenant compter en arabe !',
        keyTakeaways: [
          'Les nombres arabes s\'écrivent de droite à gauche',
          'Chaque nombre a sa propre prononciation',
          'Les nombres nous aident à compter les objets'
        ],
        nextSteps: [
          'Pratiquer le comptage quotidiennement',
          'Passer à la leçon suivante : "Les Couleurs Arabes"'
        ],
        additionalResources: [
          {
            title: 'Jeu de Nombres - Application Interactive',
            url: 'https://www.arabic-games.com/numbers',
            description: 'Jeu éducatif pour apprendre les nombres'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Comment dit-on "un" en arabe ?',
          type: 'multiple-choice',
          options: ['Ithnan', 'Wahid', 'Thalatha', 'Arba\'a'],
          correctAnswer: 'Wahid',
          explanation: 'Wahid (واحد) signifie "un" en arabe.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 30
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Ahmed Hassan - Enseignant d\'Arabe',
      version: '1.0.0',
      tags: ['arabe', 'nombres', 'comptage', 'débutant', 'langue', 'quantités']
    }
  },
  'english-basics': {
    slug: 'english-basics',
    title: 'English Basics - Niveau Débutant',
    summary: 'Introduction aux bases de l\'anglais : alphabet, prononciation et premiers mots',
    level: 'debutant',
    subject: 'Langue Anglaise',
    ageGroup: '3-6 ans',
    estimatedMinutes: 40,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      'Reconnaître et prononcer l\'alphabet anglais',
      'Apprendre les premiers mots de base',
      'Comprendre les sons de l\'anglais',
      'Saluer et se présenter simplement',
      'Compter de 1 à 10 en anglais'
    ],
    keywords: ['anglais', 'alphabet', 'prononciation', 'mots de base', 'saluer'],
    sources: [
      {
        title: 'English Basics for Kids - British Council',
        url: 'https://learnenglishkids.britishcouncil.org/basic-english',
        type: 'website',
        description: 'Ressources officielles pour l\'apprentissage de l\'anglais'
      }
    ],
    body: {
      introduction: {
        title: 'Welcome to English !',
        content: 'L\'anglais est une langue amusante à apprendre !',
        image: '/images/english-basics.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-english-basics'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'The English Alphabet',
          content: 'L\'alphabet anglais contient 26 lettres.',
          examples: [
            {
              title: 'A (A)',
              description: 'Première lettre',
              code: 'A',
              explanation: 'A se prononce "éi" comme dans "apple" (pomme).'
            },
            {
              title: 'B (B)',
              description: 'Deuxième lettre',
              code: 'B',
              explanation: 'B se prononce "bi" comme dans "book" (livre).'
            },
            {
              title: 'C (C)',
              description: 'Troisième lettre',
              code: 'C',
              explanation: 'C se prononce "si" comme dans "cat" (chat).'
            }
          ]
        },
        {
          type: 'activity',
          title: 'Greetings Activity',
          content: 'Apprenons à nous saluer en anglais !'
        }
      ],
      conclusion: {
        summary: 'We are learning English !',
        keyTakeaways: [
          'L\'alphabet anglais a 26 lettres',
          'Hello = Bonjour, Goodbye = Au revoir',
          'Les sons anglais sont différents du français'
        ],
        nextSteps: [
          'Pratiquer l\'alphabet quotidiennement',
          'Passer à la leçon suivante : "English Conversation"'
        ],
        additionalResources: [
          {
            title: 'English Learning App for Kids',
            url: 'https://www.english-apps.com/kids',
            description: 'Application interactive pour apprendre l\'anglais'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Combien de lettres contient l\'alphabet anglais ?',
          type: 'multiple-choice',
          options: ['24', '25', '26', '27'],
          correctAnswer: '26',
          explanation: 'L\'alphabet anglais contient exactement 26 lettres.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 25
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Sarah Johnson - Enseignante d\'Anglais',
      version: '1.0.0',
      tags: ['anglais', 'alphabet', 'débutant', 'langue', 'prononciation']
    }
  },
  'english-conversation': {
    slug: 'english-conversation',
    title: 'English Conversation - Niveau Débutant',
    summary: 'Apprentissage des expressions de base pour converser en anglais',
    level: 'debutant',
    subject: 'Langue Anglaise',
    ageGroup: '3-6 ans',
    estimatedMinutes: 45,
    isLocked: false,
    prerequisites: ['english-basics'],
    learningObjectives: [
      'Utiliser les formules de politesse de base',
      'Poser et répondre à des questions simples',
      'Parler de soi et de sa famille',
      'Exprimer ses goûts et préférences',
      'Participer à une conversation simple'
    ],
    keywords: ['anglais', 'conversation', 'politesse', 'questions', 'famille'],
    sources: [
      {
        title: 'English Conversation for Beginners - BBC Learning',
        url: 'https://www.bbc.co.uk/learningenglish/conversation',
        type: 'website',
        description: 'Guide de conversation anglaise pour débutants'
      }
    ],
    body: {
      introduction: {
        title: 'Let\'s Talk in English !',
        content: 'Apprenons à converser en anglais !',
        image: '/images/english-conversation.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-english-conversation'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Basic Greetings and Politeness',
          content: 'Les formules de politesse sont essentielles.',
          examples: [
            {
              title: 'Hello / Hi',
              description: 'Salutation informelle',
              code: 'Hello!',
              explanation: 'Hello se dit à tout moment de la journée.'
            },
            {
              title: 'Good morning / Good afternoon / Good evening',
              description: 'Salutations selon l\'heure',
              code: 'Good morning!',
              explanation: 'Good morning se dit le matin jusqu\'à midi.'
            },
            {
              title: 'How are you?',
              description: 'Demander des nouvelles',
              code: 'How are you?',
              explanation: 'Question pour demander comment va la personne.'
            }
          ]
        },
        {
          type: 'activity',
          title: 'Family Conversation',
          content: 'Parler de sa famille en anglais !'
        }
      ],
      conclusion: {
        summary: 'We can now have simple conversations !',
        keyTakeaways: [
          'Hello = Bonjour, How are you? = Comment allez-vous?',
          'Thank you = Merci, You\'re welcome = De rien',
          'Les conversations commencent par des salutations'
        ],
        nextSteps: [
          'Pratiquer les conversations quotidiennement',
          'Passer à la leçon suivante : "Grammaire Française"'
        ],
        additionalResources: [
          {
            title: 'Conversation Practice - Interactive Platform',
            url: 'https://www.conversation-practice.com/english',
            description: 'Plateforme pour pratiquer la conversation'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Comment dit-on "Comment allez-vous?" en anglais ?',
          type: 'multiple-choice',
          options: ['What is your name?', 'How are you?', 'Where are you?', 'How old are you?'],
          correctAnswer: 'How are you?',
          explanation: 'How are you? est la traduction de "Comment allez-vous?"',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 30
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Sarah Johnson - Enseignante d\'Anglais',
      version: '1.0.0',
      tags: ['anglais', 'conversation', 'débutant', 'langue', 'politesse']
    }
  },
  'grammaire-francaise': {
    slug: 'grammaire-francaise',
    title: 'Grammaire Française - Niveau Débutant',
    summary: 'Introduction aux règles de base de la grammaire française : articles, noms et adjectifs',
    level: 'debutant',
    subject: 'Langue Française',
    ageGroup: '3-6 ans',
    estimatedMinutes: 50,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      'Reconnaître les articles définis et indéfinis',
      'Identifier les noms masculins et féminins',
      'Accorder les adjectifs avec les noms',
      'Construire des phrases simples',
      'Utiliser la ponctuation de base'
    ],
    keywords: ['français', 'grammaire', 'articles', 'noms', 'adjectifs', 'accords'],
    sources: [
      {
        title: 'Grammaire Française pour Enfants - Académie Française',
        url: 'https://www.academie-francaise.fr/grammaire-enfants',
        type: 'website',
        description: 'Ressources officielles de grammaire française'
      }
    ],
    body: {
      introduction: {
        title: 'La Grammaire : Les Règles du Français !',
        content: 'La grammaire nous aide à bien parler et écrire !',
        image: '/images/grammaire-francaise.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-grammaire-francaise'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Les Articles',
          content: 'Les articles précèdent les noms.',
          examples: [
            {
              title: 'Le / La / Les',
              description: 'Articles définis',
              code: 'le chat, la maison, les enfants',
              explanation: 'Le = masculin singulier, La = féminin singulier, Les = pluriel.'
            },
            {
              title: 'Un / Une / Des',
              description: 'Articles indéfinis',
              code: 'un garçon, une fille, des livres',
              explanation: 'Un = masculin singulier, Une = féminin singulier, Des = pluriel.'
            }
          ]
        },
        {
          type: 'activity',
          title: 'Jeu des Accords',
          content: 'Accordons les adjectifs avec les noms !'
        }
      ],
      conclusion: {
        summary: 'La grammaire française n\'est plus un mystère !',
        keyTakeaways: [
          'Les articles définis : le, la, les',
          'Les articles indéfinis : un, une, des',
          'Les adjectifs s\'accordent avec les noms'
        ],
        nextSteps: [
          'Pratiquer les accords quotidiennement',
          'Passer à la leçon suivante : "Conjugaison Française"'
        ],
        additionalResources: [
          {
            title: 'Exercices de Grammaire - Site Éducatif',
            url: 'https://www.grammaire-exercices.fr/enfants',
            description: 'Exercices interactifs de grammaire'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Quel article utilise-t-on pour "chat" (masculin singulier) ?',
          type: 'multiple-choice',
          options: ['la', 'le', 'les', 'une'],
          correctAnswer: 'le',
          explanation: 'Pour un nom masculin singulier, on utilise l\'article "le".',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 30
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Marie Dubois - Enseignante de Français',
      version: '1.0.0',
      tags: ['français', 'grammaire', 'débutant', 'langue', 'articles']
    }
  },
  'conjugaison-francaise': {
    slug: 'conjugaison-francaise',
    title: 'Conjugaison Française - Niveau Débutant',
    summary: 'Apprentissage des verbes du premier groupe et de la conjugaison au présent',
    level: 'debutant',
    subject: 'Langue Française',
    ageGroup: '3-6 ans',
    estimatedMinutes: 55,
    isLocked: false,
    prerequisites: ['grammaire-francaise'],
    learningObjectives: [
      'Identifier les verbes du premier groupe',
      'Conjuguer les verbes au présent de l\'indicatif',
      'Reconnaître les pronoms personnels',
      'Utiliser les verbes dans des phrases',
      'Comprendre la notion de temps'
    ],
    keywords: ['français', 'conjugaison', 'verbes', 'présent', 'pronoms', 'premier groupe'],
    sources: [
      {
        title: 'Conjugaison Française - Bescherelle',
        url: 'https://www.bescherelle.com/conjugaison-enfants',
        type: 'website',
        description: 'Guide de conjugaison française pour enfants'
      }
    ],
    body: {
      introduction: {
        title: 'La Conjugaison : Donner Vie aux Verbes !',
        content: 'Les verbes changent selon qui fait l\'action !',
        image: '/images/conjugaison-francaise.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-conjugaison-francaise'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Les Pronoms Personnels',
          content: 'Les pronoms indiquent qui fait l\'action.',
          examples: [
            {
              title: 'Je / Tu / Il / Elle',
              description: 'Pronoms singuliers',
              code: 'je mange, tu manges, il mange, elle mange',
              explanation: 'Je = moi, Tu = toi, Il = lui (garçon), Elle = elle (fille).'
            },
            {
              title: 'Nous / Vous / Ils / Elles',
              description: 'Pronoms pluriels',
              code: 'nous mangeons, vous mangez, ils mangent, elles mangent',
              explanation: 'Nous = nous, Vous = vous, Ils = eux (garçons), Elles = elles (filles).'
            }
          ]
        },
        {
          type: 'activity',
          title: 'Conjugaison du Verbe Manger',
          content: 'Conjuguons ensemble le verbe manger !'
        }
      ],
      conclusion: {
        summary: 'Nous savons maintenant conjuguer les verbes !',
        keyTakeaways: [
          'Les verbes changent selon le pronom',
          'Je mange, tu manges, il mange',
          'La conjugaison suit des règles précises'
        ],
        nextSteps: [
          'Pratiquer la conjugaison quotidiennement',
          'Passer à la leçon suivante : "Addition et Soustraction"'
        ],
        additionalResources: [
          {
            title: 'Jeux de Conjugaison - Site Éducatif',
            url: 'https://www.conjugaison-jeux.fr/enfants',
            description: 'Jeux interactifs pour apprendre la conjugaison'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Comment conjugue-t-on "manger" avec "je" ?',
          type: 'multiple-choice',
          options: ['manges', 'mange', 'mangeons', 'mangent'],
          correctAnswer: 'mange',
          explanation: 'Avec "je", le verbe manger se conjugue "je mange".',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 35
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Marie Dubois - Enseignante de Français',
      version: '1.0.0',
      tags: ['français', 'conjugaison', 'débutant', 'langue', 'verbes']
    }
  },
  'addition-soustraction': {
    slug: 'addition-soustraction',
    title: 'Addition et Soustraction - Niveau Débutant',
    summary: 'Apprentissage des opérations de base : addition et soustraction avec des nombres simples',
    level: 'debutant',
    subject: 'Mathématiques',
    ageGroup: '3-6 ans',
    estimatedMinutes: 60,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      'Comprendre le concept d\'addition',
      'Comprendre le concept de soustraction',
      'Résoudre des problèmes simples',
      'Utiliser des objets pour compter',
      'Reconnaître les symboles + et -'
    ],
    keywords: ['mathématiques', 'addition', 'soustraction', 'nombres', 'opérations', 'comptage'],
    sources: [
      {
        title: 'Mathématiques pour Enfants - CNRS',
        url: 'https://www.cnrs.fr/maths-enfants',
        type: 'website',
        description: 'Ressources mathématiques pour les jeunes enfants'
      }
    ],
    body: {
      introduction: {
        title: 'Les Mathématiques : Compter et Calculer !',
        content: 'Les mathématiques nous aident à comprendre le monde !',
        image: '/images/addition-soustraction.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-addition-soustraction'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'L\'Addition',
          content: 'L\'addition, c\'est ajouter des quantités.',
          examples: [
            {
              title: '2 + 3 = 5',
              description: 'Addition simple',
              code: '2 + 3 = 5',
              explanation: 'Si j\'ai 2 pommes et que j\'en ajoute 3, j\'ai maintenant 5 pommes.'
            },
            {
              title: '1 + 4 = 5',
              description: 'Autre addition',
              code: '1 + 4 = 5',
              explanation: 'Si j\'ai 1 crayon et que j\'en prends 4, j\'ai 5 crayons en tout.'
            }
          ]
        },
        {
          type: 'concept',
          title: 'La Soustraction',
          content: 'La soustraction, c\'est enlever des quantités.',
          examples: [
            {
              title: '5 - 2 = 3',
              description: 'Soustraction simple',
              code: '5 - 2 = 3',
              explanation: 'Si j\'ai 5 bonbons et que j\'en mange 2, il m\'en reste 3.'
            }
          ]
        },
        {
          type: 'activity',
          title: 'Jeu des Objets',
          content: 'Utilisons des objets pour comprendre les opérations !'
        }
      ],
      conclusion: {
        summary: 'Nous savons maintenant additionner et soustraire !',
        keyTakeaways: [
          'L\'addition ajoute des quantités (+)',
          'La soustraction enlève des quantités (-)',
          'On peut utiliser des objets pour compter'
        ],
        nextSteps: [
          'Pratiquer les calculs quotidiennement',
          'Passer à la leçon suivante : "Découverte des Sciences"'
        ],
        additionalResources: [
          {
            title: 'Jeux Mathématiques - Site Éducatif',
            url: 'https://www.maths-jeux.fr/enfants',
            description: 'Jeux interactifs pour apprendre les mathématiques'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Que donne 3 + 2 ?',
          type: 'multiple-choice',
          options: ['4', '5', '6', '7'],
          correctAnswer: '5',
          explanation: '3 + 2 = 5. Si j\'ai 3 objets et que j\'en ajoute 2, j\'ai 5 objets.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 40
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Pierre Martin - Enseignant de Mathématiques',
      version: '1.0.0',
      tags: ['mathématiques', 'addition', 'soustraction', 'débutant', 'nombres', 'opérations']
    }
  },
  'decouverte-sciences': {
    slug: 'decouverte-sciences',
    title: 'Découverte des Sciences - Niveau Débutant',
    summary: 'Introduction aux sciences : observation, expérimentation et découverte du monde',
    level: 'debutant',
    subject: 'Sciences',
    ageGroup: '3-6 ans',
    estimatedMinutes: 55,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      'Observer le monde qui nous entoure',
      'Poser des questions scientifiques',
      'Conduire des expériences simples',
      'Comprendre les phénomènes naturels',
      'Développer la curiosité scientifique'
    ],
    keywords: ['sciences', 'observation', 'expérimentation', 'découverte', 'nature', 'curiosité'],
    sources: [
      {
        title: 'Sciences pour Enfants - Cité des Sciences',
        url: 'https://www.cite-sciences.fr/enfants',
        type: 'website',
        description: 'Ressources scientifiques pour les jeunes enfants'
      }
    ],
    body: {
      introduction: {
        title: 'Les Sciences : Observer et Découvrir !',
        content: 'Les sciences nous aident à comprendre le monde !',
        image: '/images/decouverte-sciences.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-decouverte-sciences'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'L\'Observation',
          content: 'Observer, c\'est regarder attentivement.',
          examples: [
            {
              title: 'Observer une Plante',
              description: 'Observation de la nature',
              code: 'Regarder, toucher, sentir',
              explanation: 'On observe une plante en la regardant, en la touchant, en la sentant.'
            },
            {
              title: 'Observer le Ciel',
              description: 'Observation du ciel',
              code: 'Regarder les nuages, le soleil',
              explanation: 'On observe le ciel pour voir les nuages, le soleil, les étoiles.'
            }
          ]
        },
        {
          type: 'concept',
          title: 'L\'Expérimentation',
          content: 'Expérimenter, c\'est tester des idées.',
          examples: [
            {
              title: 'Expérience de l\'Eau',
              description: 'Expérience simple',
              code: 'Verser de l\'eau dans différents récipients',
              explanation: 'On verse de l\'eau dans différents récipients pour voir ce qui se passe.'
            }
          ]
        },
        {
          type: 'activity',
          title: 'Expérience des Couleurs',
          content: 'Mélangeons les couleurs pour découvrir de nouvelles teintes !'
        }
      ],
      conclusion: {
        summary: 'Nous sommes maintenant de petits scientifiques !',
        keyTakeaways: [
          'Observer attentivement le monde',
          'Poser des questions sur ce qu\'on voit',
          'Expérimenter pour comprendre'
        ],
        nextSteps: [
          'Continuer à observer le monde',
          'Passer à la leçon suivante : "Introduction à la Programmation"'
        ],
        additionalResources: [
          {
            title: 'Expériences Scientifiques - Site Éducatif',
            url: 'https://www.sciences-experiences.fr/enfants',
            description: 'Expériences scientifiques simples et amusantes'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Que fait-on quand on observe ?',
          type: 'multiple-choice',
          options: ['On ferme les yeux', 'On regarde attentivement', 'On dort', 'On court'],
          correctAnswer: 'On regarde attentivement',
          explanation: 'Observer, c\'est regarder attentivement pour comprendre ce qu\'on voit.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 35
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Sophie Bernard - Enseignante de Sciences',
      version: '1.0.0',
      tags: ['sciences', 'observation', 'débutant', 'découverte', 'expérimentation']
    }
  },
  'introduction-programmation': {
    slug: 'introduction-programmation',
    title: 'Introduction à la Programmation - Niveau Débutant',
    summary: 'Découverte de la programmation : algorithmes simples et logique informatique',
    level: 'debutant',
    subject: 'Informatique',
    ageGroup: '3-6 ans',
    estimatedMinutes: 50,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      'Comprendre ce qu\'est un algorithme',
      'Suivre des instructions étape par étape',
      'Résoudre des problèmes logiques',
      'Utiliser la pensée computationnelle',
      'Créer des séquences d\'instructions'
    ],
    keywords: ['informatique', 'programmation', 'algorithme', 'logique', 'instructions', 'séquence'],
    sources: [
      {
        title: 'Programmation pour Enfants - Code.org',
        url: 'https://code.org/learn',
        type: 'website',
        description: 'Ressources pour apprendre la programmation dès le plus jeune âge'
      }
    ],
    body: {
      introduction: {
        title: 'La Programmation : Donner des Instructions !',
        content: 'La programmation, c\'est comme donner des instructions à un robot !',
        image: '/images/introduction-programmation.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-introduction-programmation'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Qu\'est-ce qu\'un Algorithme ?',
          content: 'Un algorithme, c\'est une série d\'instructions.',
          examples: [
            {
              title: 'Algorithme du Matin',
              description: 'Séquence d\'instructions',
              code: '1. Se lever\n2. Se laver\n3. S\'habiller\n4. Prendre le petit-déjeuner',
              explanation: 'Un algorithme, c\'est comme une recette : on suit les étapes une par une.'
            },
            {
              title: 'Algorithme du Brossage de Dents',
              description: 'Instructions simples',
              code: '1. Prendre sa brosse\n2. Mettre du dentifrice\n3. Brosser ses dents\n4. Rincer',
              explanation: 'Chaque étape doit être faite dans l\'ordre pour que ça marche.'
            }
          ]
        },
        {
          type: 'activity',
          title: 'Jeu des Instructions',
          content: 'Donnons des instructions à notre partenaire !'
        }
      ],
      conclusion: {
        summary: 'Nous savons maintenant créer des algorithmes !',
        keyTakeaways: [
          'Un algorithme est une série d\'instructions',
          'Les instructions doivent être dans l\'ordre',
          'La programmation suit une logique précise'
        ],
        nextSteps: [
          'Pratiquer la création d\'algorithmes',
          'Passer à la leçon suivante : "HTML et CSS de Base"'
        ],
        additionalResources: [
          {
            title: 'Jeux de Programmation - Site Éducatif',
            url: 'https://www.programmation-jeux.fr/enfants',
            description: 'Jeux interactifs pour apprendre la programmation'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Qu\'est-ce qu\'un algorithme ?',
          type: 'multiple-choice',
          options: ['Un jeu', 'Une série d\'instructions', 'Un dessin', 'Une chanson'],
          correctAnswer: 'Une série d\'instructions',
          explanation: 'Un algorithme est une série d\'instructions à suivre étape par étape.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 30
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Thomas Dubois - Enseignant d\'Informatique',
      version: '1.0.0',
      tags: ['informatique', 'programmation', 'débutant', 'algorithme', 'logique']
    }
  },
  'html-css-basics': {
    slug: 'html-css-basics',
    title: 'HTML et CSS de Base - Niveau Débutant',
    summary: 'Introduction au langage HTML et aux styles CSS pour créer des pages web simples',
    level: 'debutant',
    subject: 'Informatique',
    ageGroup: '3-6 ans',
    estimatedMinutes: 60,
    isLocked: false,
    prerequisites: ['introduction-programmation'],
    learningObjectives: [
      'Comprendre la structure HTML de base',
      'Utiliser les balises HTML simples',
      'Appliquer des styles CSS basiques',
      'Créer une page web simple',
      'Modifier l\'apparence d\'éléments'
    ],
    keywords: ['informatique', 'HTML', 'CSS', 'web', 'balises', 'styles', 'page web'],
    sources: [
      {
        title: 'HTML et CSS pour Enfants - Mozilla Developer Network',
        url: 'https://developer.mozilla.org/fr/docs/Web/HTML/Enfants',
        type: 'website',
        description: 'Guide HTML et CSS adapté aux jeunes apprenants'
      }
    ],
    body: {
      introduction: {
        title: 'HTML et CSS : Créer des Pages Web !',
        content: 'HTML et CSS nous permettent de créer des pages web !',
        image: '/images/html-css-basics.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-html-css-basics'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Qu\'est-ce que HTML ?',
          content: 'HTML, c\'est le squelette de la page web.',
          examples: [
            {
              title: 'Balise HTML',
              description: 'Structure de base',
              code: '<html>\n<head>\n<title>Ma Page</title>\n</head>\n<body>\n<h1>Bonjour</h1>\n</body>\n</html>',
              explanation: 'HTML utilise des balises pour structurer le contenu de la page.'
            },
            {
              title: 'Balises Simples',
              description: 'Balises de base',
              code: '<h1>Titre</h1>\n<p>Paragraphe</p>\n<img src="image.jpg">',
              explanation: 'h1 = titre principal, p = paragraphe, img = image.'
            }
          ]
        },
        {
          type: 'concept',
          title: 'Qu\'est-ce que CSS ?',
          content: 'CSS, c\'est le maquillage de la page web.',
          examples: [
            {
              title: 'Styles CSS',
              description: 'Mise en forme',
              code: 'h1 {\n  color: blue;\n  font-size: 24px;\n}',
              explanation: 'CSS permet de changer la couleur, la taille, la police du texte.'
            }
          ]
        },
        {
          type: 'activity',
          title: 'Créer une Page Web',
          content: 'Créons ensemble une page web simple !'
        }
      ],
      conclusion: {
        summary: 'Nous savons maintenant créer des pages web !',
        keyTakeaways: [
          'HTML structure le contenu de la page',
          'CSS embellit l\'apparence de la page',
          'Les balises HTML ont des noms spécifiques'
        ],
        nextSteps: [
          'Pratiquer la création de pages web',
          'Passer à la leçon suivante : "Bases de l\'Aqida"'
        ],
        additionalResources: [
          {
            title: 'Éditeur HTML en Ligne - CodePen',
            url: 'https://codepen.io/pen/',
            description: 'Éditeur en ligne pour tester HTML et CSS'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Quelle balise HTML utilise-t-on pour un titre principal ?',
          type: 'multiple-choice',
          options: ['<p>', '<h1>', '<img>', '<div>'],
          correctAnswer: '<h1>',
          explanation: 'La balise <h1> est utilisée pour le titre principal de la page.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 40
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Thomas Dubois - Enseignant d\'Informatique',
      version: '1.0.0',
      tags: ['informatique', 'HTML', 'CSS', 'débutant', 'web', 'balises']
    }
  },
  'bases-aqida': {
    slug: 'bases-aqida',
    title: 'Bases de l\'Aqida - Niveau Débutant',
    summary: 'Introduction aux fondements de la croyance islamique selon la voie des pieux prédécesseurs',
    level: 'debutant',
    subject: 'Aqida',
    ageGroup: '3-6 ans',
    estimatedMinutes: 45,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      'Comprendre qui est Allah (سبحانه وتعالى)',
      'Connaître les six piliers de la foi',
      'Apprendre les noms et attributs d\'Allah',
      'Comprendre l\'importance de la croyance',
      'Développer l\'amour d\'Allah'
    ],
    keywords: ['aqida', 'croyance', 'islam', 'Allah', 'foi', 'prédécesseurs', 'salaf'],
    sources: [
      {
        title: 'Aqida Tahawiyya - Imam Abu Ja\'far at-Tahawi',
        url: 'https://www.islamhouse.com/aqida-tahawiyya',
        type: 'document',
        description: 'Traité de croyance sunnite de référence'
      },
      {
        title: 'Sharh Aqida al-Wasitiyya - Sheikh al-Islam Ibn Taymiyyah',
        url: 'https://www.islamhouse.com/aqida-wasitiyya',
        type: 'document',
        description: 'Explication de la croyance des gens de la Sunna'
      }
    ],
    body: {
      introduction: {
        title: 'L\'Aqida : Les Fondements de Notre Croyance',
        content: 'L\'Aqida nous enseigne les bases de notre religion !',
        image: '/images/bases-aqida.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-bases-aqida'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Qui est Allah (سبحانه وتعالى) ?',
          content: 'Allah est notre Créateur et Seigneur.',
          examples: [
            {
              title: 'Allah est Unique',
              description: 'Tawhid - L\'unicité d\'Allah',
              code: 'لا إله إلا الله',
              explanation: 'Allah est le seul à mériter d\'être adoré. Il n\'y a pas d\'autre divinité.'
            },
            {
              title: 'Allah est le Créateur',
              description: 'Khaliq - Le Créateur',
              code: 'الخالق',
              explanation: 'Allah a créé tout ce qui existe : le ciel, la terre, les étoiles, les animaux.'
            }
          ]
        },
        {
          type: 'concept',
          title: 'Les Six Piliers de la Foi',
          content: 'La foi comprend six piliers essentiels.',
          examples: [
            {
              title: 'Croire en Allah',
              description: 'Premier pilier',
              code: 'الإيمان بالله',
              explanation: 'Croire qu\'Allah existe, qu\'Il est Unique et qu\'Il mérite d\'être adoré.'
            },
            {
              title: 'Croire aux Anges',
              description: 'Deuxième pilier',
              code: 'الإيمان بالملائكة',
              explanation: 'Croire qu\'Allah a créé des anges qui exécutent Ses ordres.'
            }
          ]
        },
        {
          type: 'activity',
          title: 'Apprendre les Noms d\'Allah',
          content: 'Apprenons ensemble les beaux noms d\'Allah !'
        }
      ],
      conclusion: {
        summary: 'Nous avons appris les bases de notre croyance !',
        keyTakeaways: [
          'Allah est Unique et mérite d\'être adoré',
          'La foi a six piliers essentiels',
          'Allah a des noms et attributs parfaits'
        ],
        nextSteps: [
          'Mémoriser les six piliers de la foi',
          'Passer à la leçon suivante : "Introduction au Fiqh"'
        ],
        additionalResources: [
          {
            title: 'Livre : Les Fondements de la Croyance - Sheikh al-Uthaymin',
            url: 'https://www.islamhouse.com/fondements-croyance',
            description: 'Livre de référence sur l\'Aqida sunnite'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Combien y a-t-il de piliers de la foi ?',
          type: 'multiple-choice',
          options: ['4', '5', '6', '7'],
          correctAnswer: '6',
          explanation: 'La foi comprend six piliers essentiels selon les enseignements islamiques authentiques.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 30
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Sheikh Ahmed al-Hassan - Enseignant de Sciences Islamiques',
      version: '1.0.0',
      tags: ['aqida', 'croyance', 'débutant', 'islam', 'foi', 'Allah']
    }
  },
  'introduction-fiqh': {
    slug: 'introduction-fiqh',
    title: 'Introduction au Fiqh - Niveau Débutant',
    summary: 'Découverte des règles pratiques de l\'Islam selon les enseignements des pieux prédécesseurs',
    level: 'debutant',
    subject: 'Fiqh',
    ageGroup: '3-6 ans',
    estimatedMinutes: 50,
    isLocked: false,
    prerequisites: ['bases-aqida'],
    learningObjectives: [
      'Comprendre ce qu\'est le Fiqh',
      'Connaître les cinq piliers de l\'Islam',
      'Apprendre les règles de base de la prière',
      'Comprendre l\'importance des actes d\'adoration',
      'Développer l\'amour des bonnes actions'
    ],
    keywords: ['fiqh', 'jurisprudence', 'islam', 'piliers', 'prière', 'adoration', 'prédécesseurs'],
    sources: [
      {
        title: 'Kitab at-Tawhid - Sheikh Muhammad ibn Abd al-Wahhab',
        url: 'https://www.islamhouse.com/kitab-tawhid',
        type: 'book',
        description: 'Livre fondamental sur l\'unicité d\'Allah et les actes d\'adoration'
      },
      {
        title: 'Bulugh al-Maram - Imam Ibn Hajar al-Asqalani',
        url: 'https://www.islamhouse.com/bulugh-maram',
        type: 'book',
        description: 'Compilation des hadiths authentiques sur les règles pratiques'
      }
    ],
    body: {
      introduction: {
        title: 'Le Fiqh : Les Règles de Notre Religion',
        content: 'Le Fiqh nous enseigne comment pratiquer notre religion !',
        image: '/images/introduction-fiqh.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-introduction-fiqh'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Qu\'est-ce que le Fiqh ?',
          content: 'Le Fiqh, c\'est la compréhension des règles de l\'Islam.',
          examples: [
            {
              title: 'Définition du Fiqh',
              description: 'Compréhension des règles',
              code: 'الفقه',
              explanation: 'Le Fiqh est la science qui nous apprend comment pratiquer notre religion correctement.'
            },
            {
              title: 'Sources du Fiqh',
              description: 'Le Coran et la Sunna',
              code: 'القرآن والسنة',
              explanation: 'Le Fiqh se base sur le Coran et la Sunna authentique du Prophète (صلى الله عليه وسلم).'
            }
          ]
        },
        {
          type: 'concept',
          title: 'Les Cinq Piliers de l\'Islam',
          content: 'L\'Islam repose sur cinq piliers fondamentaux.',
          examples: [
            {
              title: 'La Chahada',
              description: 'Premier pilier',
              code: 'الشهادة',
              explanation: 'Témoigner qu\'il n\'y a de divinité qu\'Allah et que Muhammad est Son Messager.'
            },
            {
              title: 'La Prière',
              description: 'Deuxième pilier',
              code: 'الصلاة',
              explanation: 'Accomplir les cinq prières quotidiennes selon les règles enseignées.'
            }
          ]
        },
        {
          type: 'activity',
          title: 'Apprendre les Mouvements de la Prière',
          content: 'Apprenons ensemble comment faire la prière !'
        }
      ],
      conclusion: {
        summary: 'Nous avons appris les bases du Fiqh !',
        keyTakeaways: [
          'Le Fiqh nous enseigne les règles pratiques',
          'L\'Islam a cinq piliers fondamentaux',
          'La prière est un acte d\'adoration important'
        ],
        nextSteps: [
          'Mémoriser les cinq piliers de l\'Islam',
          'Passer à la leçon suivante : "La Vie du Prophète"'
        ],
        additionalResources: [
          {
            title: 'Livre : Les Règles de la Prière - Sheikh al-Albani',
            url: 'https://www.islamhouse.com/regles-priere',
            description: 'Guide pratique sur la prière selon la Sunna'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Combien y a-t-il de piliers de l\'Islam ?',
          type: 'multiple-choice',
          options: ['3', '4', '5', '6'],
          correctAnswer: '5',
          explanation: 'L\'Islam repose sur cinq piliers fondamentaux selon les enseignements authentiques.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 35
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Sheikh Ahmed al-Hassan - Enseignant de Sciences Islamiques',
      version: '1.0.0',
      tags: ['fiqh', 'jurisprudence', 'débutant', 'islam', 'piliers', 'prière']
    }
  },
  'vie-prophete': {
    slug: 'vie-prophete',
    title: 'La Vie du Prophète (صلى الله عليه وسلم) - Niveau Débutant',
    summary: 'Découverte de la vie exemplaire du Prophète Muhammad selon les sources authentiques',
    level: 'debutant',
    subject: 'Sira',
    ageGroup: '3-6 ans',
    estimatedMinutes: 55,
    isLocked: false,
    prerequisites: ['bases-aqida', 'introduction-fiqh'],
    learningObjectives: [
      'Connaître les grandes étapes de la vie du Prophète',
      'Apprendre les qualités morales du Prophète',
      'Comprendre l\'importance de suivre son exemple',
      'Développer l\'amour du Prophète',
      'Apprendre les bonnes manières'
    ],
    keywords: ['sira', 'prophète', 'Muhammad', 'vie', 'exemple', 'qualités', 'authentique'],
    sources: [
      {
        title: 'Sira Ibn Hisham - Abu Muhammad Abd al-Malik ibn Hisham',
        url: 'https://www.islamhouse.com/sira-ibn-hisham',
        type: 'book',
        description: 'Biographie authentique du Prophète (صلى الله عليه وسلم)'
      },
      {
        title: 'Sahih al-Bukhari - Imam Muhammad al-Bukhari',
        url: 'https://www.islamhouse.com/sahih-bukhari',
        type: 'book',
        description: 'Recueil de hadiths authentiques du Prophète (صلى الله عليه وسلم)'
      }
    ],
    body: {
      introduction: {
        title: 'La Sira : La Vie Exemplaire du Prophète',
        content: 'Le Prophète Muhammad (صلى الله عليه وسلم) est notre meilleur exemple !',
        image: '/images/vie-prophete.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-vie-prophete'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'La Naissance et l\'Enfance',
          content: 'Le Prophète est né à La Mecque.',
          examples: [
            {
              title: 'Naissance à La Mecque',
              description: 'Lieu de naissance',
              code: 'مكة المكرمة',
              explanation: 'Le Prophète Muhammad (صلى الله عليه وسلم) est né à La Mecque en l\'an 570.'
            },
            {
              title: 'Orphelin de père et de mère',
              description: 'Situation familiale',
              code: 'يتيم',
              explanation: 'Le Prophète a perdu son père avant sa naissance et sa mère à l\'âge de 6 ans.'
            }
          ]
        },
        {
          type: 'concept',
          title: 'Les Qualités du Prophète',
          content: 'Le Prophète avait des qualités exceptionnelles.',
          examples: [
            {
              title: 'Al-Amin (Le Digne de Confiance)',
              description: 'Qualité de confiance',
              code: 'الأمين',
              explanation: 'Les gens de La Mecque l\'appelaient "Al-Amin" car il était toujours digne de confiance.'
            },
            {
              title: 'La Bonté et la Miséricorde',
              description: 'Qualités morales',
              code: 'الرحمة',
              explanation: 'Le Prophète était très bon et miséricordieux envers tous, même ses ennemis.'
            }
          ]
        },
        {
          type: 'activity',
          title: 'Apprendre les Bonnes Manières',
          content: 'Apprenons ensemble les bonnes manières du Prophète !'
        }
      ],
      conclusion: {
        summary: 'Nous avons appris à aimer notre Prophète !',
        keyTakeaways: [
          'Le Prophète Muhammad (صلى الله عليه وسلم) est notre exemple',
          'Il avait des qualités morales exceptionnelles',
          'Nous devons suivre son exemple dans nos vies'
        ],
        nextSteps: [
          'Lire des histoires de la vie du Prophète',
          'Passer à la leçon suivante : "Histoire de l\'Islam"'
        ],
        additionalResources: [
          {
            title: 'Livre : La Biographie du Prophète - Sheikh Safi ar-Rahman al-Mubarakfuri',
            url: 'https://www.islamhouse.com/biographie-prophete',
            description: 'Biographie complète et authentique du Prophète'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Où est né le Prophète Muhammad (صلى الله عليه وسلم) ?',
          type: 'multiple-choice',
          options: ['Médine', 'La Mecque', 'Taif', 'Jeddah'],
          correctAnswer: 'La Mecque',
          explanation: 'Le Prophète Muhammad (صلى الله عليه وسلم) est né à La Mecque en l\'an 570.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 35
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Sheikh Ahmed al-Hassan - Enseignant de Sciences Islamiques',
      version: '1.0.0',
      tags: ['sira', 'prophète', 'débutant', 'islam', 'Muhammad', 'exemple']
    }
  },
  'histoire-islam': {
    slug: 'histoire-islam',
    title: 'Histoire de l\'Islam - Niveau Débutant',
    summary: 'Découverte de l\'histoire islamique selon l\'œuvre d\'Ibn Kathir "Al-Bidaya wa An-Nihaya"',
    level: 'debutant',
    subject: 'Histoire de l\'Islam',
    ageGroup: '3-6 ans',
    estimatedMinutes: 60,
    isLocked: false,
    prerequisites: ['vie-prophete'],
    learningObjectives: [
      'Comprendre les grandes périodes de l\'histoire islamique',
      'Connaître les événements importants de l\'Islam',
      'Apprendre l\'histoire des califes bien-guidés',
      'Développer la fierté de notre héritage',
      'Comprendre l\'importance de l\'histoire'
    ],
    keywords: ['histoire', 'islam', 'califes', 'événements', 'Ibn Kathir', 'Al-Bidaya', 'authentique'],
    sources: [
      {
        title: 'Al-Bidaya wa An-Nihaya - Imam Ibn Kathir',
        url: 'https://www.islamhouse.com/bidaya-nihaya',
        type: 'book',
        description: 'Œuvre majeure d\'Ibn Kathir sur l\'histoire islamique complète'
      },
      {
        title: 'Tarikh at-Tabari - Imam Muhammad ibn Jarir at-Tabari',
        url: 'https://www.islamhouse.com/tarikh-tabari',
        type: 'book',
        description: 'Histoire des prophètes et des rois selon at-Tabari'
      }
    ],
    body: {
      introduction: {
        title: 'L\'Histoire de l\'Islam : Notre Héritage Glorieux',
        content: 'L\'histoire de l\'Islam est remplie de leçons et d\'exemples !',
        image: '/images/histoire-islam.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-histoire-islam'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Les Premiers Temps de l\'Islam',
          content: 'L\'Islam a commencé à La Mecque.',
          examples: [
            {
              title: 'La Révélation du Coran',
              description: 'Début de la révélation',
              code: 'نزل القرآن',
              explanation: 'Le Coran a commencé à être révélé au Prophète (صلى الله عليه وسلم) dans la grotte de Hira.'
            },
            {
              title: 'Les Premiers Musulmans',
              description: 'Premiers convertis',
              code: 'أول المسلمين',
              explanation: 'Khadija (رضي الله عنها), Abu Bakr (رضي الله عنه), et Ali (رضي الله عنه) furent parmi les premiers musulmans.'
            }
          ]
        },
        {
          type: 'concept',
          title: 'L\'Hégire et Médine',
          content: 'Le Prophète a émigré vers Médine.',
          examples: [
            {
              title: 'L\'Hégire (622)',
              description: 'Émigration vers Médine',
              code: 'الهجرة',
              explanation: 'En 622, le Prophète (صلى الله عليه وسلم) a émigré de La Mecque vers Médine pour échapper aux persécutions.'
            },
            {
              title: 'La Première Mosquée',
              description: 'Construction de Quba',
              code: 'مسجد قباء',
              explanation: 'La première mosquée de l\'Islam, Masjid Quba, a été construite à Médine.'
            }
          ]
        },
        {
          type: 'activity',
          title: 'Timeline de l\'Histoire Islamique',
          content: 'Créons ensemble une timeline des événements importants !'
        }
      ],
      conclusion: {
        summary: 'Nous avons découvert notre histoire glorieuse !',
        keyTakeaways: [
          'L\'Islam a commencé à La Mecque en 610',
          'L\'Hégire vers Médine a eu lieu en 622',
          'Notre histoire est remplie d\'exemples et de leçons'
        ],
        nextSteps: [
          'Lire des livres d\'histoire islamique',
          'Passer à la leçon suivante : "Développement Personnel"'
        ],
        additionalResources: [
          {
            title: 'Livre : Histoire de l\'Islam pour Enfants - Sheikh Safi ar-Rahman al-Mubarakfuri',
            url: 'https://www.islamhouse.com/histoire-enfants',
            description: 'Histoire islamique adaptée aux jeunes lecteurs'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'En quelle année a eu lieu l\'Hégire ?',
          type: 'multiple-choice',
          options: ['610', '615', '622', '630'],
          correctAnswer: '622',
          explanation: 'L\'Hégire, l\'émigration du Prophète de La Mecque vers Médine, a eu lieu en l\'an 622.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 40
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Sheikh Ahmed al-Hassan - Enseignant de Sciences Islamiques',
      version: '1.0.0',
      tags: ['histoire', 'islam', 'débutant', 'califes', 'événements', 'Ibn Kathir']
    }
  },
  'developpement-personnel': {
    slug: 'developpement-personnel',
    title: 'Développement Personnel - Niveau Débutant',
    summary: 'Introduction aux compétences de vie et au développement personnel reconnus unanimement',
    level: 'debutant',
    subject: 'Développement Personnel',
    ageGroup: '3-6 ans',
    estimatedMinutes: 50,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      'Développer la confiance en soi',
      'Apprendre à gérer ses émotions',
      'Développer la persévérance',
      'Apprendre à travailler en équipe',
      'Cultiver la curiosité et la créativité'
    ],
    keywords: ['développement', 'personnel', 'confiance', 'émotions', 'persévérance', 'équipe', 'créativité'],
    sources: [
      {
        title: 'Développement Personnel pour Enfants - UNESCO',
        url: 'https://www.unesco.org/education-personal-development',
        type: 'website',
        description: 'Ressources éducatives sur le développement personnel des enfants'
      },
      {
        title: 'Compétences de Vie - Organisation Mondiale de la Santé',
        url: 'https://www.who.int/life-skills-education',
        type: 'document',
        description: 'Guide sur les compétences de vie essentielles pour les enfants'
      }
    ],
    body: {
      introduction: {
        title: 'Le Développement Personnel : Devenir le Meilleur de Soi !',
        content: 'Le développement personnel nous aide à grandir et à nous améliorer !',
        image: '/images/developpement-personnel.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-developpement-personnel'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'La Confiance en Soi',
          content: 'La confiance en soi, c\'est croire en ses capacités.',
          examples: [
            {
              title: 'Croire en Ses Capacités',
              description: 'Confiance en soi',
              code: 'أنا أستطيع',
              explanation: 'La confiance en soi, c\'est croire qu\'on peut réussir ce qu\'on entreprend.'
            },
            {
              title: 'Essayer de Nouvelles Choses',
              description: 'Oser essayer',
              code: 'جرب جديد',
              explanation: 'Quand on a confiance en soi, on ose essayer de nouvelles activités.'
            }
          ]
        },
        {
          type: 'concept',
          title: 'La Gestion des Émotions',
          content: 'Apprendre à gérer ses émotions est important.',
          examples: [
            {
              title: 'Reconnaître ses Émotions',
              description: 'Identification des émotions',
              code: 'أشعر بـ',
              explanation: 'Il est important de reconnaître ce qu\'on ressent : joie, tristesse, colère, peur.'
            },
            {
              title: 'Exprimer ses Émotions',
              description: 'Expression saine',
              code: 'أعبر عن',
              explanation: 'Exprimer ses émotions de manière calme et respectueuse aide à se sentir mieux.'
            }
          ]
        },
        {
          type: 'activity',
          title: 'Jeu de la Confiance',
          content: 'Jouons ensemble pour développer notre confiance !'
        }
      ],
      conclusion: {
        summary: 'Nous sommes maintenant plus confiants et plus forts !',
        keyTakeaways: [
          'La confiance en soi se développe en essayant',
          'Gérer ses émotions aide à mieux vivre',
          'Le développement personnel est un voyage continu'
        ],
        nextSteps: [
          'Pratiquer les exercices de confiance',
          'Continuer à développer ses compétences'
        ],
        additionalResources: [
          {
            title: 'Exercices de Développement Personnel - Site Éducatif',
            url: 'https://www.developpement-exercices.fr/enfants',
            description: 'Exercices pratiques pour le développement personnel'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Qu\'est-ce que la confiance en soi ?',
          type: 'multiple-choice',
          options: ['Avoir peur', 'Croire en ses capacités', 'Être triste', 'Être en colère'],
          correctAnswer: 'Croire en ses capacités',
          explanation: 'La confiance en soi, c\'est croire qu\'on peut réussir ce qu\'on entreprend.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 30
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Dr. Marie Dubois - Psychologue de l\'Enfant',
      version: '1.0.0',
      tags: ['développement', 'personnel', 'débutant', 'confiance', 'émotions', 'compétences']
    }
  }
}
