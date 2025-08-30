import { Lesson } from './lessons'

export const lessonsIntermediaire: Record<string, Lesson> = {
  'grammaire-arabe-intermediaire': {
    slug: 'grammaire-arabe-intermediaire',
    title: 'Grammaire Arabe - Niveau Intermédiaire',
    summary: 'Apprentissage des règles de grammaire arabe : noms, verbes et phrases',
    level: 'intermediaire',
    subject: 'Langue Arabe',
    ageGroup: '7-10 ans',
    estimatedMinutes: 60,
    isLocked: true,
    prerequisites: ['alphabet-arabe-debutant', 'voyelles-arabe', 'nombres-arabe'],
    learningObjectives: [
      'Comprendre la structure des noms arabes',
      'Apprendre les règles de conjugaison',
      'Construire des phrases simples',
      'Utiliser les temps verbaux de base',
      'Reconnaître les parties du discours'
    ],
    keywords: ['arabe', 'grammaire', 'noms', 'verbes', 'phrases', 'conjugaison'],
    sources: [
      {
        title: 'Grammaire Arabe - Institut du Monde Arabe',
        url: 'https://www.imarabe.org/fr/grammaire-arabe',
        type: 'website',
        description: 'Guide de grammaire arabe pour niveau intermédiaire'
      }
    ],
    body: {
      introduction: {
        title: 'La Grammaire Arabe : Les Règles de la Langue !',
        content: 'La grammaire nous aide à bien parler et écrire l\'arabe !',
        image: '/images/grammaire-arabe-intermediaire.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-grammaire-arabe-intermediaire'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Les Noms Arabes',
          content: 'Les noms arabes ont un genre et un nombre.',
          examples: [
            {
              title: 'Genre Masculin et Féminin',
              description: 'Classification des noms',
              code: 'مذكر ومؤنث',
              explanation: 'En arabe, chaque nom est soit masculin (مذكر) soit féminin (مؤنث).'
            },
            {
              title: 'Nombre Singulier et Pluriel',
              description: 'Formes du pluriel',
              code: 'مفرد وجمع',
              explanation: 'Les noms peuvent être au singulier (مفرد) ou au pluriel (جمع).'
            }
          ]
        }
      ],
      conclusion: {
        summary: 'Nous comprenons maintenant la grammaire arabe !',
        keyTakeaways: [
          'Les noms arabes ont un genre et un nombre',
          'La grammaire suit des règles précises',
          'La pratique améliore la compréhension'
        ],
        nextSteps: [
          'Pratiquer la grammaire quotidiennement',
          'Passer au niveau avancé'
        ],
        additionalResources: [
          {
            title: 'Exercices de Grammaire Arabe',
            url: 'https://www.grammaire-arabe-exercices.fr',
            description: 'Exercices interactifs de grammaire arabe'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Combien y a-t-il de genres en arabe ?',
          type: 'multiple-choice',
          options: ['1', '2', '3', '4'],
          correctAnswer: '2',
          explanation: 'En arabe, il y a deux genres : masculin (مذكر) et féminin (مؤنث).',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 45
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Ahmed Hassan - Enseignant d\'Arabe',
      version: '1.0.0',
      tags: ['arabe', 'grammaire', 'intermédiaire', 'langue', 'noms', 'verbes']
    }
  },
  'conversation-anglaise-intermediaire': {
    slug: 'conversation-anglaise-intermediaire',
    title: 'Conversation Anglaise - Niveau Intermédiaire',
    summary: 'Développement des compétences de conversation en anglais avec vocabulaire étendu',
    level: 'intermediaire',
    subject: 'Langue Anglaise',
    ageGroup: '7-10 ans',
    estimatedMinutes: 65,
    isLocked: true,
    prerequisites: ['english-basics', 'english-conversation'],
    learningObjectives: [
      'Participer à des conversations plus complexes',
      'Utiliser un vocabulaire étendu',
      'Exprimer des opinions et préférences',
      'Raconter des histoires simples',
      'Comprendre différents accents'
    ],
    keywords: ['anglais', 'conversation', 'vocabulaire', 'opinions', 'histoires', 'accents'],
    sources: [
      {
        title: 'English Conversation Intermediate - British Council',
        url: 'https://learnenglish.britishcouncil.org/intermediate-conversation',
        type: 'website',
        description: 'Ressources pour conversation anglaise de niveau intermédiaire'
      }
    ],
    body: {
      introduction: {
        title: 'Advanced English Conversation !',
        content: 'Let\'s improve our English conversation skills !',
        image: '/images/conversation-anglaise-intermediaire.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=example-conversation-anglaise-intermediaire'
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Expressing Opinions',
          content: 'Learn how to express your thoughts and opinions.',
          examples: [
            {
              title: 'I think that...',
              description: 'Expressing opinion',
              code: 'I think that learning English is fun.',
              explanation: 'Use "I think that..." to express your opinion about something.'
            },
            {
              title: 'In my opinion...',
              description: 'Another way to express opinion',
              code: 'In my opinion, reading books is important.',
              explanation: '"In my opinion..." is a formal way to share your thoughts.'
            }
          ]
        }
      ],
      conclusion: {
        summary: 'We can now have more complex conversations !',
        keyTakeaways: [
          'Express opinions using "I think that..."',
          'Use expanded vocabulary in conversations',
          'Practice makes perfect in language learning'
        ],
        nextSteps: [
          'Practice conversation daily',
          'Move to advanced level'
        ],
        additionalResources: [
          {
            title: 'English Conversation Practice',
            url: 'https://www.conversation-practice.com/intermediate',
            description: 'Interactive conversation practice platform'
          }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'How do you express an opinion in English ?',
          type: 'multiple-choice',
          options: ['I think that...', 'I am...', 'I have...', 'I do...'],
          correctAnswer: 'I think that...',
          explanation: 'Use "I think that..." to express your opinion about something.',
          points: 10
        }
      ],
      passingScore: 70,
      timeLimit: 50
    },
    metadata: {
      createdAt: '2024-01-15T17:00:00Z',
      updatedAt: '2024-01-15T17:00:00Z',
      author: 'Équipe Pédagogique GrowSavoir',
      reviewedBy: 'Prof. Sarah Johnson - Enseignante d\'Anglais',
      version: '1.0.0',
      tags: ['anglais', 'conversation', 'intermédiaire', 'langue', 'opinions', 'vocabulaire']
    }
  }
}



