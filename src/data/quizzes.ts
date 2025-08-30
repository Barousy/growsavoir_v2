// Interface pour les quiz
export interface Quiz {
  id: string
  lessonId: string
  title: string
  description: string
  questions: QuizQuestion[]
  passingScore: number
  timeLimit: number
  isActive: boolean
  category: 'lesson' | 'subject' | 'level' | 'special'
}

// Interface pour les questions de quiz
export interface QuizQuestion {
  id: string
  question: string
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'ordering' | 'matching'
  options?: string[]
  correctAnswer: string
  explanation: string
  points: number
  difficulty: number
  image?: string
  audio?: string
}

// Données des quiz
export const quizzes: Record<string, Quiz> = {
  'alphabet-arabe-quiz': {
    id: 'alphabet-arabe-quiz',
    lessonId: 'alphabet-arabe-debutant',
    title: 'Quiz de l\'Alphabet Arabe',
    description: 'Testez vos connaissances sur l\'alphabet arabe',
    questions: [
      {
        id: 'q1',
        question: 'Combien de lettres contient l\'alphabet arabe ?',
        type: 'multiple-choice',
        options: ['26', '27', '28', '29'],
        correctAnswer: '28',
        explanation: 'L\'alphabet arabe contient exactement 28 lettres.',
        points: 10,
        difficulty: 1
      },
      {
        id: 'q2',
        question: 'L\'arabe s\'écrit de droite à gauche.',
        type: 'true-false',
        correctAnswer: 'true',
        explanation: 'Oui, l\'arabe s\'écrit de droite à gauche, contrairement au français.',
        points: 10,
        difficulty: 1
      },
      {
        id: 'q3',
        question: 'Quelle est la première lettre de l\'alphabet arabe ?',
        type: 'fill-blank',
        correctAnswer: 'Alif',
        explanation: 'Alif (أ) est la première lettre de l\'alphabet arabe.',
        points: 15,
        difficulty: 2
      }
    ],
    passingScore: 70,
    timeLimit: 300,
    isActive: true,
    category: 'lesson'
  },
  'voyelles-arabe-quiz': {
    id: 'voyelles-arabe-quiz',
    lessonId: 'voyelles-arabe',
    title: 'Quiz des Voyelles Arabes',
    description: 'Testez vos connaissances sur les voyelles arabes (harakât)',
    questions: [
      {
        id: 'q1',
        question: 'Combien y a-t-il de voyelles courtes principales en arabe ?',
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3',
        explanation: 'Il y a trois voyelles courtes principales : Fatha, Kasra et Damma.',
        points: 10,
        difficulty: 1
      },
      {
        id: 'q2',
        question: 'Fatha (َ) donne le son "a".',
        type: 'true-false',
        correctAnswer: 'true',
        explanation: 'Oui, Fatha (َ) donne le son "a" comme dans "chat".',
        points: 10,
        difficulty: 1
      }
    ],
    passingScore: 70,
    timeLimit: 240,
    isActive: true,
    category: 'lesson'
  },
  'english-basics-quiz': {
    id: 'english-basics-quiz',
    lessonId: 'english-basics',
    title: 'Quiz des Bases Anglaises',
    description: 'Testez vos connaissances sur les bases de l\'anglais',
    questions: [
      {
        id: 'q1',
        question: 'Quelle est la traduction de "Hello" ?',
        type: 'multiple-choice',
        options: ['Au revoir', 'Bonjour', 'Merci', 'S\'il vous plaît'],
        correctAnswer: 'Bonjour',
        explanation: 'Hello signifie "bonjour" en anglais.',
        points: 10,
        difficulty: 1
      },
      {
        id: 'q2',
        question: 'Goodbye signifie "bonjour".',
        type: 'true-false',
        correctAnswer: 'false',
        explanation: 'Non, Goodbye signifie "au revoir" en anglais.',
        points: 10,
        difficulty: 1
      }
    ],
    passingScore: 70,
    timeLimit: 300,
    isActive: true,
    category: 'lesson'
  },
  'grammaire-francaise-quiz': {
    id: 'grammaire-francaise-quiz',
    lessonId: 'grammaire-francaise',
    title: 'Quiz de Grammaire Française',
    description: 'Testez vos connaissances sur la grammaire française',
    questions: [
      {
        id: 'q1',
        question: 'Quel article utilise-t-on devant "chat" ?',
        type: 'multiple-choice',
        options: ['la', 'le', 'une', 'un'],
        correctAnswer: 'le',
        explanation: 'Chat est un nom masculin, donc on utilise "le" (défini) ou "un" (indéfini).',
        points: 10,
        difficulty: 2
      },
      {
        id: 'q2',
        question: 'Les articles se placent après les noms.',
        type: 'true-false',
        correctAnswer: 'false',
        explanation: 'Non, les articles se placent devant les noms.',
        points: 10,
        difficulty: 1
      }
    ],
    passingScore: 70,
    timeLimit: 300,
    isActive: true,
    category: 'lesson'
  },
  'addition-soustraction-quiz': {
    id: 'addition-soustraction-quiz',
    lessonId: 'addition-soustraction',
    title: 'Quiz d\'Addition et Soustraction',
    description: 'Testez vos connaissances sur l\'addition et la soustraction',
    questions: [
      {
        id: 'q1',
        question: 'Que signifie le symbole + ?',
        type: 'multiple-choice',
        options: ['Enlever', 'Ajouter', 'Multiplier', 'Diviser'],
        correctAnswer: 'Ajouter',
        explanation: 'Le symbole + signifie "ajouter" ou "plus".',
        points: 10,
        difficulty: 1
      },
      {
        id: 'q2',
        question: 'Que donne 3 + 2 ?',
        type: 'multiple-choice',
        options: ['4', '5', '6', '7'],
        correctAnswer: '5',
        explanation: '3 + 2 = 5 : si j\'ai 3 objets et que j\'en ajoute 2, j\'ai 5 objets.',
        points: 10,
        difficulty: 1
      }
    ],
    passingScore: 70,
    timeLimit: 300,
    isActive: true,
    category: 'lesson'
  }
}

// Fonction pour récupérer un quiz par son ID
export function getQuizById(id: string): Quiz | undefined {
  return quizzes[id]
}

// Fonction pour récupérer tous les quiz
export function getAllQuizzes(): Quiz[] {
  return Object.values(quizzes)
}

// Fonction pour récupérer les quiz actifs
export function getActiveQuizzes(): Quiz[] {
  return getAllQuizzes().filter(quiz => quiz.isActive)
}

// Fonction pour récupérer les quiz par leçon
export function getQuizzesByLesson(lessonId: string): Quiz[] {
  return getAllQuizzes().filter(quiz => quiz.lessonId === lessonId)
}

// Fonction pour récupérer les quiz par catégorie
export function getQuizzesByCategory(category: Quiz['category']): Quiz[] {
  return getAllQuizzes().filter(quiz => quiz.category === category)
}

// Fonction pour calculer le score d'un quiz
export function calculateQuizScore(quizId: string, answers: Record<string, string>): {
  score: number
  totalPoints: number
  percentage: number
  passed: boolean
  correctAnswers: number
  totalQuestions: number
} {
  const quiz = getQuizById(quizId)
  if (!quiz) {
    return {
      score: 0,
      totalPoints: 0,
      percentage: 0,
      passed: false,
      correctAnswers: 0,
      totalQuestions: 0
    }
  }

  let score = 0
  let correctAnswers = 0
  const totalQuestions = quiz.questions.length

  quiz.questions.forEach(question => {
    const userAnswer = answers[question.id]
    if (userAnswer && userAnswer.toLowerCase() === question.correctAnswer.toLowerCase()) {
      score += question.points
      correctAnswers++
    }
  })

  const totalPoints = quiz.questions.reduce((sum, q) => sum + q.points, 0)
  const percentage = Math.round((score / totalPoints) * 100)
  const passed = percentage >= quiz.passingScore

  return {
    score,
    totalPoints,
    percentage,
    passed,
    correctAnswers,
    totalQuestions
  }
}



