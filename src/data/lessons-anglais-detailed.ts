import { Lesson } from './lessons'

export const allLessonsAnglais: Record<string, Lesson> = {
  'anglais-n1-fondamentaux-01': {
    slug: 'anglais-n1-fondamentaux-01',
    title: 'Alphabet & Phonics — A to Z',
    summary: 'Découvrir les 26 lettres (noms) et les sons de base (phonics) pour lire des syllabes simples.',
    level: 'n1-fondamentaux',
    subject: 'Langue Anglaise',
    ageGroup: '6-8 ans',
    estimatedMinutes: 25,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      'Connaître les 26 lettres (noms A–Z)',
      'Associer quelques sons de base (a/e/i/o/u, consonnes fréquentes)',
      'Lire des syllabes simples (CVC : cat, bed, sit, dog, sun)'
    ],
    keywords: ['anglais','alphabet','phonics','CVC','n1'],
    sources: [
      { title: 'British Council Kids — Alphabet', url: 'https://learnenglishkids.britishcouncil.org', type: 'website', description: 'Activités pour découvrir l’alphabet' }
    ],
    body: {
      introduction: {
        title: 'Welcome to English! — Alphabet & Phonics',
        content: `En anglais, on lit de **gauche à droite**. L’alphabet compte **26 lettres**. On apprend le **nom** de la lettre (A, B, C…) et un **son de base** (a /æ/ comme **cat**).`
      },
      mainContent: [
        { type: 'concept', title: 'Letter names & basic sounds', content: `A /eɪ/ (a — **/æ/**), B /biː/, C /siː/…\nVoyelles courtes : **a /æ/** (cat), **e /ɛ/** (bed), **i /ɪ/** (sit), **o /ɒ/** (UK; dog), **u /ʌ/** (sun).` },
        { type: 'example', title: 'CVC de référence', content: `**cat, bed, sit, dog, sun** (C = consonne, V = voyelle)`, examples: [ { code: 'cat', title: 'CVC', description: 'c-a-t', explanation: 'Fusion des sons' } ] },
        { type: 'activity', title: 'I spy… (Je repère)', content: `Entoure la lettre initiale : **(c)**at, **(d)**og, **(s)**un, **(b)**ed.` },
        { type: 'exercise', title: 'Blend the sounds', content: `Lis **/k/ + /æ/ + /t/** → **cat** ; **/d/ + /ɒ/ + /g/** → **dog**.` },
        { type: 'summary', title: 'À retenir', content: `26 lettres. Phonics = **sons**. Lecture **CVC** de base.` }
      ],
      conclusion: { summary: 'Bravo ! Tu connais l’alphabet et tu lis des CVC simples.', keyTakeaways: ['Letter names', 'Voyelles courtes', 'CVC'], nextSteps: ['Approfondir les voyelles courtes (plus de CVC)'], additionalResources: [ { title: 'Alphabet poster', description: 'Affiche A–Z à imprimer', url: 'https://learnenglishkids.britishcouncil.org' } ] }
    },
    assessment: { quiz: [ { question: 'Quel mot est **CVC** ?', type: 'multiple-choice', options: ['cat','tea'], correctAnswer: 'cat', explanation: 'CVC = consonne-voyelle-consonne', points: 10 } ], passingScore: 80, timeLimit: 20 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['anglais','n1','alphabet','phonics'] }
  },

  'anglais-n1-fondamentaux-02': {
    slug: 'anglais-n1-fondamentaux-02',
    title: 'Short Vowels — a / e / i / o / u',
    summary: 'Maîtriser les voyelles courtes dans des mots CVC fréquents.',
    level: 'n1-fondamentaux',
    subject: 'Langue Anglaise',
    ageGroup: '6-8 ans',
    estimatedMinutes: 25,
    isLocked: false,
    prerequisites: ['anglais-n1-fondamentaux-01'],
    learningObjectives: [ 'Lire et discriminer a/e/i/o/u courts', 'Décoder 15 mots CVC', 'Orthographier 5 CVC simples' ],
    keywords: ['phonics','CVC','short vowels','a e i o u'],
    sources: [ { title: 'Phonics (CVC) — BBC Bitesize', url: 'https://www.bbc.co.uk/bitesize', type: 'website', description: 'Décodage CVC' } ],
    body: {
      introduction: { title: 'Voyelles courtes', content: `**a /æ/** cat ; **e /ɛ/** bed ; **i /ɪ/** sit ; **o /ɒ/** dog ; **u /ʌ/** sun.` },
      mainContent: [
        { type: 'example', title: 'Listes CVC', content: `**a**: cat, map, bag — **e**: bed, pen, leg — **i**: pin, sit, fin — **o**: dog, box, pot — **u**: sun, cup, bus` },
        { type: 'activity', title: 'Tic-tac-toe CVC', content: `Coche si la voyelle est correcte : c**a**t / p**e**n / f**i**n / s**o**ck / b**u**s` },
        { type: 'exercise', title: 'Dictée-sons', content: `Écris 10 CVC dictés (ex : cat, pen, pig, box, sun).` },
        { type: 'summary', title: 'Récap', content: `5 voyelles courtes → lecture fluide des CVC.` }
      ],
      conclusion: { summary: 'Les CVC sont acquis. On ajoute les **sight words**.', keyTakeaways: ['a/e/i/o/u courts', 'CVC'], nextSteps: ['Greetings & sight words (the, a, I, and, is)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Dans **bed**, la voyelle est…', type: 'multiple-choice', options: ['/æ/','/ɛ/'], correctAnswer: '/ɛ/', explanation: 'e court', points: 10 } ], passingScore: 80, timeLimit: 20 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['anglais','n1','phonics','CVC'] }
  },

  'anglais-n1-fondamentaux-03': {
    slug: 'anglais-n1-fondamentaux-03',
    title: 'Greetings & Introductions + Sight Words',
    summary: 'Dire bonjour/au revoir, se présenter, et lire les mots outils the, a/an, I, and, is.',
    level: 'n1-fondamentaux',
    subject: 'Langue Anglaise',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['anglais-n1-fondamentaux-02'],
    learningObjectives: [ 'Saluer et se présenter', 'Employer to be (I am / You are)', 'Lire 5 sight words' ],
    keywords: ['greetings','introductions','sight words','to be'],
    sources: [ { title: 'British Council Kids — Greetings', url: 'https://learnenglishkids.britishcouncil.org', type: 'website', description: 'Salutations et dialogues' } ],
    body: {
      introduction: { title: 'Hello!', content: `**Hello! Hi! Goodbye!** — **I am** Adam. **I am 7.** **You are** my friend.` },
      mainContent: [
        { type: 'example', title: 'Mini-dialogue', content: `— Hello! What is your name? — **I am** Lina. — **I am** Adam. — Nice to meet you!` },
        { type: 'concept', title: 'Sight words', content: `**the, a/an, I, and, is**` },
        { type: 'activity', title: 'Je coche', content: `Coche les sight words dans : **I am Adam and this is a cat.**` },
        { type: 'exercise', title: 'Je produis', content: `Écris 3 phrases : **I am …** / **This is …**` },
        { type: 'summary', title: 'Récap', content: `Salutations + **to be** (I am), sight words lus.` }
      ],
      conclusion: { summary: 'Tu sais te présenter en anglais.', keyTakeaways: ['Hello/Goodbye','I am','Sight words'], nextSteps: ['Numbers & Colours'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Complète : **I __ Adam.**', type: 'multiple-choice', options: ['is','am'], correctAnswer: 'am', explanation: 'I **am**', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['anglais','n1','greetings','sight words'] }
  },

  'anglais-n1-fondamentaux-04': {
    slug: 'anglais-n1-fondamentaux-04',
    title: 'Numbers 0–20 & Colours',
    summary: 'Compter de 0 à 20 et nommer les couleurs de base.',
    level: 'n1-fondamentaux',
    subject: 'Langue Anglaise',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['anglais-n1-fondamentaux-03'],
    learningObjectives: [ 'Compter 0–20', 'Nommer les couleurs', 'Utiliser There is/are avec numbers' ],
    keywords: ['numbers','colours','counting'],
    sources: [ { title: 'Cambridge Primary — Numbers & Colours', url: 'https://www.cambridgeinternational.org', type: 'website', description: 'Repères débutants' } ],
    body: {
      introduction: { title: '0–20 & colours', content: `0–20 : zero, one, two, three… twenty. Couleurs : red, blue, yellow, green, black, white, pink, orange, brown, purple.` },
      mainContent: [
        { type: 'activity', title: 'Colour by number', content: `Colore **3** étoiles en **red**, **2** cercles en **blue**.` },
        { type: 'exercise', title: 'There is / There are', content: `**There are** three cats. **There is** one dog.` },
        { type: 'summary', title: 'Récap', content: `Nombres + couleurs + **there is/are**.` }
      ],
      conclusion: { summary: 'Comptage et couleurs acquis.', keyTakeaways: ['0–20','couleurs','there is/are'], nextSteps: ['Classroom objects & prepositions'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'How many? 🐱🐱🐱', type: 'multiple-choice', options: ['two','three'], correctAnswer: 'three', explanation: '3 cats', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['anglais','n1','numbers','colours'] }
  },

  'anglais-n1-fondamentaux-05': {
    slug: 'anglais-n1-fondamentaux-05',
    title: 'Classroom Objects & Prepositions (in/on/under)',
    summary: 'Nommer les objets de la classe et utiliser in / on / under.',
    level: 'n1-fondamentaux',
    subject: 'Langue Anglaise',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['anglais-n1-fondamentaux-04'],
    learningObjectives: [ 'Vocabulaire scolaire', 'Prépositions in/on/under', 'Phrases There is/are + préposition' ],
    keywords: ['classroom','prepositions','in/on/under'],
    sources: [ { title: 'British Council Kids — Prepositions', url: 'https://learnenglishkids.britishcouncil.org', type: 'website', description: 'in/on/under pour enfants' } ],
    body: {
      introduction: { title: 'In / On / Under', content: `Objet : book, pen, pencil, bag, desk, chair, board.\nPrépositions : **in** (dans), **on** (sur), **under** (sous).` },
      mainContent: [
        { type: 'example', title: 'Phrases modèles', content: `**The pen is on the desk.** / **The book is in the bag.** / **The cat is under the chair.**` },
        { type: 'activity', title: 'Vrai/Faux image mentale', content: `F: **The pen is under the desk.** (non, il est sur le bureau) ; V: **The book is in the bag.**` },
        { type: 'exercise', title: 'Je produis', content: `Écris 5 phrases : objet + **is** + **in/on/under** + lieu.` },
        { type: 'summary', title: 'Récap', content: `Objets de classe + **in/on/under**.` }
      ],
      conclusion: { summary: 'Tu sais localiser un objet.', keyTakeaways: ['in / on / under'], nextSteps: ['Family & possessives my/your'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Choisis : The cat is __ the chair.', type: 'multiple-choice', options: ['on','under'], correctAnswer: 'under', explanation: 'sous', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['anglais','n1','classroom','prepositions'] }
  },

  'anglais-n1-fondamentaux-06': {
    slug: 'anglais-n1-fondamentaux-06',
    title: 'Family & Possessives — my / your',
    summary: 'Parler de la famille proche et utiliser my/your correctement.',
    level: 'n1-fondamentaux',
    subject: 'Langue Anglaise',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['anglais-n1-fondamentaux-05'],
    learningObjectives: [ 'Vocabulaire famille (mother, father, sister, brother…)', 'Utiliser my/your', 'Phrases simples be/have' ],
    keywords: ['family','possessives','my','your'],
    sources: [ { title: 'Kids ESL — Family words', url: 'https://www.eslkidslab.com', type: 'website', description: 'Jeux et affiches famille' } ],
    body: {
      introduction: { title: 'My family', content: `mother, father, sister, brother, grandma, grandpa.\n**My** = mon/ma ; **Your** = ton/ta.` },
      mainContent: [
        { type: 'example', title: 'Phrases modèles', content: `**This is my sister.** **Your father is nice.** **I have a brother.**` },
        { type: 'activity', title: 'Je choisis', content: `__ mother (my/your) — __ brother (my/your)` },
        { type: 'exercise', title: 'Je produis', content: `Écris 4 phrases sur ta famille avec **my/your**.` },
        { type: 'summary', title: 'Récap', content: `Famille + **my/your** + be/have simples.` }
      ],
      conclusion: { summary: 'Tu présentes ta famille.', keyTakeaways: ['Family words','my/your'], nextSteps: ['Days & routines (present simple)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Complète : This is __ mother.', type: 'multiple-choice', options: ['my','your'], correctAnswer: 'my', explanation: 'mon/ma', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['anglais','n1','family','possessives'] }
  },

  'anglais-n1-fondamentaux-07': {
    slug: 'anglais-n1-fondamentaux-07',
    title: 'Days of the Week & Daily Routines',
    summary: 'Connaître les jours et décrire une routine simple au présent.',
    level: 'n1-fondamentaux',
    subject: 'Langue Anglaise',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['anglais-n1-fondamentaux-06'],
    learningObjectives: [ 'Nommer Monday→Sunday', 'Employer I get up / I go to school', 'Ajouter heures simples (o’clock)' ],
    keywords: ['days','routines','present simple'],
    sources: [ { title: 'ESL Kids — Days & Routines', url: 'https://www.eslkidstuff.com', type: 'website', description: 'Fiches pédagogiques' } ],
    body: {
      introduction: { title: 'Monday to Sunday', content: `Days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.\nRoutine: **I get up at seven o’clock. I go to school.**` },
      mainContent: [
        { type: 'example', title: 'Routine modèle', content: `**On Monday**, I get up at 7 o’clock. I go to school. **On Saturday**, I play.` },
        { type: 'activity', title: 'Vrai/Faux', content: `F: Sunday est un jour d’école. V: Saturday est le week-end.` },
        { type: 'exercise', title: 'Je produis', content: `Écris ta routine (2 phrases) pour **Monday** et **Saturday**.` },
        { type: 'summary', title: 'Récap', content: `Jours + routine **I + verbe** au présent.` }
      ],
      conclusion: { summary: 'Tu présentes une routine.', keyTakeaways: ['Days','Present simple (I …)'], nextSteps: ['Weather & Clothes'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'After Friday, the day is…', type: 'multiple-choice', options: ['Saturday','Thursday'], correctAnswer: 'Saturday', explanation: 'Order of days', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['anglais','n1','days','routines'] }
  },

  'anglais-n1-fondamentaux-08': {
    slug: 'anglais-n1-fondamentaux-08',
    title: 'Weather & Clothes — It is… / I wear…',
    summary: 'Décrire la météo et choisir des vêtements adaptés.',
    level: 'n1-fondamentaux',
    subject: 'Langue Anglaise',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['anglais-n1-fondamentaux-07'],
    learningObjectives: [ 'Dire la météo (sunny, rainy, cold…)', 'Associer vêtements (coat, hat…)', 'Phrases It is… / I wear…' ],
    keywords: ['weather','clothes','it is','I wear'],
    sources: [ { title: 'British Council Kids — Weather', url: 'https://learnenglishkids.britishcouncil.org', type: 'website', description: 'Météo pour enfants' } ],
    body: {
      introduction: { title: 'What’s the weather like?', content: `Weather: sunny, rainy, cloudy, windy, hot, cold.\nClothes: coat, hat, boots, T-shirt, shorts.` },
      mainContent: [
        { type: 'example', title: 'Phrases modèles', content: `**It is rainy. I wear a coat.** / **It is hot. I wear a T-shirt.**` },
        { type: 'activity', title: 'Je choisis', content: `Associe météo→vêtements : **cold → coat** ; **hot → T-shirt** …` },
        { type: 'exercise', title: 'Je produis', content: `Écris 3 phrases **It is … / I wear …**.` },
        { type: 'summary', title: 'Récap', content: `Météo + vêtements = phrases utiles.` }
      ],
      conclusion: { summary: 'Tu parles de la météo et des habits.', keyTakeaways: ['It is…','I wear…'], nextSteps: ['Animals & can/can’t'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Il fait froid. Tu choisis…', type: 'multiple-choice', options: ['T-shirt','Coat'], correctAnswer: 'Coat', explanation: 'Vêtement chaud', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['anglais','n1','weather','clothes'] }
  },

  'anglais-n1-fondamentaux-09': {
    slug: 'anglais-n1-fondamentaux-09',
    title: 'Animals & Abilities — can / can’t',
    summary: 'Vocabulaire des animaux et verbes d’action avec can/can’t.',
    level: 'n1-fondamentaux',
    subject: 'Langue Anglaise',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['anglais-n1-fondamentaux-08'],
    learningObjectives: [ 'Nommer 10 animaux', 'Utiliser can/can’t avec verbes simples (run, jump, swim)', 'Produire phrases affirmatives/négatives' ],
    keywords: ['animals','can','can’t','verbs'],
    sources: [ { title: 'ESL Games — Animals & can', url: 'https://www.eslgamesplus.com', type: 'website', description: 'Jeux pour can/can’t' } ],
    body: {
      introduction: { title: 'Animals & actions', content: `cat, dog, bird, fish, horse, duck, frog, lion, elephant, monkey.\nVerbes : run, jump, swim, fly.` },
      mainContent: [
        { type: 'example', title: 'Phrases modèles', content: `**A bird can fly.** **A fish can swim.** **A cat can’t fly.**` },
        { type: 'activity', title: 'Vrai/Faux', content: `A fish can fly. (F) ; A duck can swim. (T)` },
        { type: 'exercise', title: 'Je produis', content: `3 phrases avec **can** et 2 phrases avec **can’t**.` },
        { type: 'summary', title: 'Récap', content: `can/can’t + verbe (forme de base).` }
      ],
      conclusion: { summary: 'Tu sais exprimer une capacité.', keyTakeaways: ['can = capacité','can’t = impossibilité'], nextSteps: ['Reading practice (phrases courtes)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'A bird __ fly.', type: 'multiple-choice', options: ['can','can’t'], correctAnswer: 'can', explanation: 'Capacité', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['anglais','n1','animals','can'] }
  },

  'anglais-n1-fondamentaux-10': {
    slug: 'anglais-n1-fondamentaux-10',
    title: 'Reading Practice — sight words + CVC sentences',
    summary: 'Lire des phrases courtes combinant sight words et CVC.',
    level: 'n1-fondamentaux',
    subject: 'Langue Anglaise',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['anglais-n1-fondamentaux-09'],
    learningObjectives: [ 'Lire 10 phrases simples', 'Repérer sight words', 'Comprendre qui/quoi/où' ],
    keywords: ['reading','sight words','CVC'],
    sources: [ { title: 'Dolch/Fry Sight Words (intro)', url: 'https://sightwords.com', type: 'website', description: 'Listes de base' } ],
    body: {
      introduction: { title: 'Je lis des phrases', content: `Sight words : **the, a, I, and, is, to, it**.` },
      mainContent: [
        { type: 'example', title: 'Phrases modèles', content: `**I am Tom.** **The cat is on the bed.** **It is hot.** **I can run.**` },
        { type: 'activity', title: 'Repérage', content: `Surligne les **sight words** dans 4 phrases.` },
        { type: 'exercise', title: 'Lecture guidée', content: `Lis 8 phrases et réponds **qui/quoi/où**.` },
        { type: 'summary', title: 'Récap', content: `Lecture fluide de **phrases courtes**.` }
      ],
      conclusion: { summary: 'Tu lis des phrases simples.', keyTakeaways: ['Sight words','CVC + sens'], nextSteps: ['Mini-scènes & dialogues'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Dans **The cat is on the bed.**, « on » signifie…', type: 'multiple-choice', options: ['dans','sur'], correctAnswer: 'sur', explanation: 'on = sur', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['anglais','n1','reading'] }
  },

  'anglais-n1-fondamentaux-11': {
    slug: 'anglais-n1-fondamentaux-11',
    title: 'Mini-scenes & Short Dialogues',
    summary: 'Lire 2 mini-scènes du quotidien et répondre à 3 questions.',
    level: 'n1-fondamentaux',
    subject: 'Langue Anglaise',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['anglais-n1-fondamentaux-10'],
    learningObjectives: [ 'Lire 2 scènes (home/school)', 'Répondre who/where/what', 'Repérer prépositions et be/can' ],
    keywords: ['dialogues','comprehension','reading'],
    sources: [ { title: 'Kids dialogues — routines', url: 'https://learnenglishkids.britishcouncil.org', type: 'website', description: 'Scènes très courtes' } ],
    body: {
      introduction: { title: 'Reading in context', content: `Lis **lentement**, repère **mots utiles** (be, can, in/on/under), puis **relis plus vite**.` },
      mainContent: [
        { type: 'example', title: 'Home', content: `Tom is in the kitchen. The cat is on the chair. Tom can drink water.` },
        { type: 'example', title: 'School', content: `The pen is on the desk. Anna is in the classroom. She can read.` },
        { type: 'activity', title: 'Questions', content: `Home : 1) Where is Tom? 2) Where is the cat? 3) What can Tom do?\nSchool : 1) Where is the pen? 2) Where is Anna? 3) What can she do?` },
        { type: 'summary', title: 'Récap', content: `Lecture **en contexte** + compréhension simple.` }
      ],
      conclusion: { summary: 'Tu comprends des scènes courtes.', keyTakeaways: ['Who/Where/What'], nextSteps: ['Final test (N1)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Where is the pen?', type: 'multiple-choice', options: ['in the bag','on the desk'], correctAnswer: 'on the desk', explanation: 'Phrase du texte', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['anglais','n1','dialogues'] }
  },

  'anglais-n1-fondamentaux-12': {
    slug: 'anglais-n1-fondamentaux-12',
    title: 'Final Assessment N1 — Phonics & Reading',
    summary: 'Valider phonics (CVC, voyelles courtes), vocabulaire de base, prépositions, be/can, compréhension de mini-texte.',
    level: 'n1-fondamentaux',
    subject: 'Langue Anglaise',
    ageGroup: '6-8 ans',
    estimatedMinutes: 30,
    isLocked: false,
    prerequisites: [
      'anglais-n1-fondamentaux-01','anglais-n1-fondamentaux-02','anglais-n1-fondamentaux-03','anglais-n1-fondamentaux-04','anglais-n1-fondamentaux-05','anglais-n1-fondamentaux-06','anglais-n1-fondamentaux-07','anglais-n1-fondamentaux-08','anglais-n1-fondamentaux-09','anglais-n1-fondamentaux-10','anglais-n1-fondamentaux-11'
    ],
    learningObjectives: [ 'Lire des CVC et phrases courtes', 'Identifier sight words et prépositions', 'Utiliser be/can', 'Comprendre un mini-paragraphe' ],
    keywords: ['assessment','phonics','reading','N1'],
    sources: [ { title: 'Phonics & Early Reading — overview', url: 'https://www.bbc.co.uk/bitesize', type: 'website', description: 'Révisions' } ],
    body: {
      introduction: { title: 'Consignes', content: `Lis calmement. Repère les **sons** et **mots outils**.` },
      mainContent: [
        { type: 'concept', title: 'Part 1 — Phonics', content: `Lis 10 CVC : **cat, pen, pig, box, sun, map, bed, fish (fi-sh), dog, bus**.` },
        { type: 'concept', title: 'Part 2 — Phrases', content: `**The cat is under the chair.** **It is rainy. I wear a coat.** **I can jump.**` },
        { type: 'example', title: 'Mini-texte', content: `It is Saturday. Anna is at home. She can read a book. The cat is on the bed.`, examples: [ { code: 'Saturday / home / read / on the bed', title: 'Mots clés', description: 'Aide à répondre', explanation: '' } ] },
        { type: 'activity', title: 'Questions', content: `1) Where is Anna? 2) What can she do? 3) Where is the cat?` },
        { type: 'summary', title: 'Vérifie', content: `CVC, sight words, prépositions, be/can, compréhension.` }
      ],
      conclusion: { summary: 'Bravo 🎉 Tu termines le niveau **N1** en anglais.', keyTakeaways: ['Phonics','Phrases simples','Compréhension'], nextSteps: ['Passer à **N2** : lectures un peu plus longues'], additionalResources: [ { title: 'Révisions N1 (pack)', description: 'Listes CVC + phrases', url: 'https://sightwords.com' } ] }
    },
    assessment: {
      quiz: [
        { question: 'Choisis le CVC :', type: 'multiple-choice', options: ['tea','cat'], correctAnswer: 'cat', explanation: 'CVC', points: 10 },
        { question: 'It is cold. I wear a…', type: 'multiple-choice', options: ['coat','T-shirt'], correctAnswer: 'coat', explanation: 'Vêtement chaud', points: 10 },
        { question: 'Where is the cat (texte) ?', type: 'multiple-choice', options: ['under the chair','on the bed'], correctAnswer: 'on the bed', explanation: 'Mini-texte', points: 10 }
      ],
      passingScore: 80,
      timeLimit: 30
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['anglais','n1','assessment'] }
  }
}
