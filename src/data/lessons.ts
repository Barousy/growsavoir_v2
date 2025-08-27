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
  'voyelles-arabe': {
    slug: 'voyelles-arabe',
    title: 'Les Voyelles Arabes (Harakât)',
    summary: 'Apprentissage des voyelles courtes et longues',
    minutes: 20,
    isLocked: false,
    subject: 'Langue Arabe',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'Les Voyelles en Arabe',
          content: 'Les voyelles en arabe sont appelées "harakât" et sont essentielles pour la prononciation correcte.',
          image: '/images/arabic-vowels.jpg'
        },
        {
          type: 'lesson',
          title: 'Voyelles courtes (Harakât)',
          content: 'Les voyelles courtes se placent au-dessus ou en-dessous des lettres.',
          examples: [
            { letter: 'َ', name: 'Fatha', pronunciation: 'A', meaning: 'Voyelle courte A' },
            { letter: 'ِ', name: 'Kasra', pronunciation: 'I', meaning: 'Voyelle courte I' },
            { letter: 'ُ', name: 'Damma', pronunciation: 'U', meaning: 'Voyelle courte U' }
          ]
        },
        {
          type: 'activity',
          title: 'Pratique des voyelles',
          content: 'Pratiquons la lecture avec les voyelles courtes.',
          instructions: [
            'Identifiez chaque voyelle',
            'Prononcez correctement',
            'Lisez des mots simples',
            'Pratiquez régulièrement'
          ]
        }
      ]
    }
  },
  'nombres-arabe': {
    slug: 'nombres-arabe',
    title: 'Les Nombres en Arabe',
    summary: 'Compter de 1 à 100 en arabe',
    minutes: 25,
    isLocked: true,
    subject: 'Langue Arabe',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'Compter en Arabe',
          content: 'Apprenons à compter en arabe, une compétence essentielle pour la vie quotidienne.',
          image: '/images/arabic-numbers.jpg'
        },
        {
          type: 'lesson',
          title: 'Les nombres de 1 à 10',
          content: 'Commençons par les dix premiers nombres en arabe.',
          examples: [
            { name: '١', pronunciation: 'Wahid', meaning: 'Un' },
            { name: '٢', pronunciation: 'Ithnan', meaning: 'Deux' },
            { name: '٣', pronunciation: 'Thalatha', meaning: 'Trois' },
            { name: '٤', pronunciation: 'Arba\'a', meaning: 'Quatre' },
            { name: '٥', pronunciation: 'Khamsa', meaning: 'Cinq' }
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
  'english-conversation': {
    slug: 'english-conversation',
    title: 'Conversation Anglaise',
    summary: 'Pratiquer la conversation en anglais',
    minutes: 25,
    isLocked: false,
    subject: 'Langue Anglaise',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'Conversation en Anglais',
          content: 'La conversation est la clé pour maîtriser une langue. Pratiquons ensemble !',
          image: '/images/english-conversation.jpg'
        },
        {
          type: 'lesson',
          title: 'Questions et réponses',
          content: 'Apprenons à poser des questions et à y répondre en anglais.',
          examples: [
            { name: 'What is your name?', pronunciation: 'Wat iz your neim?', meaning: 'Comment vous appelez-vous ?' },
            { name: 'How are you?', pronunciation: 'Haou ar you?', meaning: 'Comment allez-vous ?' },
            { name: 'Where do you live?', pronunciation: 'Wear do you live?', meaning: 'Où habitez-vous ?' }
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
  'conjugaison-francaise': {
    slug: 'conjugaison-francaise',
    title: 'Conjugaison des Verbes',
    summary: 'Apprendre à conjuguer les verbes français',
    minutes: 25,
    isLocked: false,
    subject: 'Langue Française',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'La Conjugaison Française',
          content: 'La conjugaison est la base de la communication en français. Apprenons-la ensemble !',
          image: '/images/french-conjugation.jpg'
        },
        {
          type: 'lesson',
          title: 'Le présent de l\'indicatif',
          content: 'Commençons par le temps le plus utilisé : le présent.',
          examples: [
            { name: 'Je parle', pronunciation: 'Je parle', meaning: 'Je parle' },
            { name: 'Tu parles', pronunciation: 'Tu parle', meaning: 'Tu parles' },
            { name: 'Il/Elle parle', pronunciation: 'Il/Elle parle', meaning: 'Il/Elle parle' }
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
  },
  'decouverte-sciences': {
    slug: 'decouverte-sciences',
    title: 'Découverte des Sciences',
    summary: 'Introduction aux sciences naturelles',
    minutes: 20,
    isLocked: false,
    subject: 'Sciences',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'Bienvenue dans le monde des sciences',
          content: 'Les sciences nous aident à comprendre le monde qui nous entoure. Découvrons-les ensemble !',
          image: '/images/sciences-intro.jpg'
        },
        {
          type: 'lesson',
          title: 'Les trois états de la matière',
          content: 'La matière peut exister sous trois formes : solide, liquide et gazeuse.',
          examples: [
            { name: 'Solide', pronunciation: 'Solide', meaning: 'Forme fixe (glace)' },
            { name: 'Liquide', pronunciation: 'Liquide', meaning: 'Forme fluide (eau)' },
            { name: 'Gazeux', pronunciation: 'Gazeux', meaning: 'Forme volatile (vapeur)' }
          ]
        }
      ]
    }
  },
  'introduction-programmation': {
    slug: 'introduction-programmation',
    title: 'Introduction à la Programmation',
    summary: 'Découverte des concepts de base de la programmation',
    minutes: 30,
    isLocked: false,
    subject: 'Informatique',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'Bienvenue dans la programmation',
          content: 'La programmation, c\'est comme donner des instructions à un ordinateur. C\'est passionnant !',
          image: '/images/programming-intro.jpg'
        },
        {
          type: 'lesson',
          title: 'Qu\'est-ce qu\'un algorithme ?',
          content: 'Un algorithme est une série d\'instructions pour résoudre un problème.',
          examples: [
            { name: 'Recette de cuisine', pronunciation: 'Recette de cuisine', meaning: 'Instructions étape par étape' },
            { name: 'Plan de route', pronunciation: 'Plan de route', meaning: 'Chemin à suivre' },
            { name: 'Règles de jeu', pronunciation: 'Règles de jeu', meaning: 'Ordre des actions' }
          ]
        }
      ]
    }
  },
  'html-css-basics': {
    slug: 'html-css-basics',
    title: 'HTML et CSS - Les Bases',
    summary: 'Créer votre première page web',
    minutes: 35,
    isLocked: false,
    subject: 'Informatique',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'Créer des pages web',
          content: 'HTML et CSS sont les langages de base pour créer des sites web. Commençons !',
          image: '/images/html-css.jpg'
        },
        {
          type: 'lesson',
          title: 'Structure HTML',
          content: 'HTML organise le contenu de votre page web.',
          examples: [
            { name: '<html>', pronunciation: 'HTML', meaning: 'Balise racine' },
            { name: '<head>', pronunciation: 'Head', meaning: 'En-tête de page' },
            { name: '<body>', pronunciation: 'Body', meaning: 'Corps de page' }
          ]
        }
      ]
    }
  },
  'bases-aqida': {
    slug: 'bases-aqida',
    title: 'Bases de l\'Aqida',
    summary: 'Introduction aux fondements de la croyance',
    minutes: 20,
    isLocked: false,
    subject: 'Aqida',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'Bienvenue dans l\'étude de l\'Aqida',
          content: 'L\'Aqida est la science des fondements de la croyance islamique. Étudions ensemble !',
          image: '/images/aqida-intro.jpg'
        },
        {
          type: 'lesson',
          title: 'Les six piliers de la foi',
          content: 'La foi islamique repose sur six piliers fondamentaux.',
          examples: [
            { name: 'Allah', pronunciation: 'Allah', meaning: 'Croire en Allah' },
            { name: 'Les Anges', pronunciation: 'Les Anges', meaning: 'Croire aux anges' },
            { name: 'Les Livres', pronunciation: 'Les Livres', meaning: 'Croire aux livres révélés' }
          ]
        }
      ]
    }
  },
  'introduction-fiqh': {
    slug: 'introduction-fiqh',
    title: 'Introduction au Fiqh',
    summary: 'Bases de la jurisprudence islamique',
    minutes: 20,
    isLocked: false,
    subject: 'Fiqh',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'Bienvenue dans l\'étude du Fiqh',
          content: 'Le Fiqh est la science qui étudie les règles pratiques de l\'Islam. Découvrons-la !',
          image: '/images/fiqh-intro.jpg'
        },
        {
          type: 'lesson',
          title: 'Les cinq piliers de l\'Islam',
          content: 'L\'Islam repose sur cinq piliers fondamentaux.',
          examples: [
            { name: 'Shahada', pronunciation: 'Shahada', meaning: 'Attestation de foi' },
            { name: 'Salat', pronunciation: 'Salat', meaning: 'Prière' },
            { name: 'Zakat', pronunciation: 'Zakat', meaning: 'Aumône légale' }
          ]
        }
      ]
    }
  },
  'vie-prophete': {
    slug: 'vie-prophete',
    title: 'La Vie du Prophète ﷺ',
    summary: 'Découverte de la biographie prophétique',
    minutes: 20,
    isLocked: false,
    subject: 'Sira',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'La Vie du Prophète Muhammad ﷺ',
          content: 'Découvrons ensemble la vie exemplaire du dernier Messager d\'Allah.',
          image: '/images/prophet-life.jpg'
        },
        {
          type: 'lesson',
          title: 'La naissance et l\'enfance',
          content: 'Les premières années de la vie du Prophète ﷺ.',
          examples: [
            { name: 'Naissance', pronunciation: 'Naissance', meaning: '570 après J.-C. à La Mecque' },
            { name: 'Orphelin', pronunciation: 'Orphelin', meaning: 'Perte des parents très jeune' },
            { name: 'Éducation', pronunciation: 'Éducation', meaning: 'Élevé par son grand-père puis son oncle' }
          ]
        }
      ]
    }
  },
  'histoire-islam': {
    slug: 'histoire-islam',
    title: 'Histoire de l\'Islam',
    summary: 'Les premiers siècles de l\'Islam',
    minutes: 20,
    isLocked: false,
    subject: 'Histoire de l\'Islam',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'L\'Histoire de l\'Islam',
          content: 'Découvrons ensemble les événements qui ont marqué les premiers siècles de l\'Islam.',
          image: '/images/islamic-history.jpg'
        },
        {
          type: 'lesson',
          title: 'L\'expansion de l\'Islam',
          content: 'Comment l\'Islam s\'est répandu dans le monde.',
          examples: [
            { name: 'Arabie', pronunciation: 'Arabie', meaning: 'Terre d\'origine' },
            { name: 'Syrie', pronunciation: 'Syrie', meaning: 'Première expansion' },
            { name: 'Égypte', pronunciation: 'Égypte', meaning: 'Conquête en 640' }
          ]
        }
      ]
    }
  },
  'adab-islamique': {
    slug: 'adab-islamique',
    title: 'Adab Islamique',
    summary: 'Les bonnes manières en Islam',
    minutes: 20,
    isLocked: false,
    subject: 'Développement Personnel',
    ageGroup: 'Primaire',
    body: {
      sections: [
        {
          type: 'introduction',
          title: 'Les Bonnes Manières en Islam',
          content: 'L\'Islam nous enseigne les meilleures manières de nous comporter. Apprenons-les !',
          image: '/images/adab-islamic.jpg'
        },
        {
          type: 'lesson',
          title: 'La politesse au quotidien',
          content: 'Les règles de politesse enseignées par l\'Islam.',
          examples: [
            { name: 'Salam', pronunciation: 'Salam', meaning: 'Salutation de paix' },
            { name: 'Merci', pronunciation: 'Merci', meaning: 'Reconnaissance' },
            { name: 'Pardon', pronunciation: 'Pardon', meaning: 'Demande d\'excuse' }
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
