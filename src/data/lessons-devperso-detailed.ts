import { Lesson } from './lessons'

export const allLessonsDevPerso: Record<string, Lesson> = {
  'devperso-n1-fondamentaux-01': {
    slug: 'devperso-n1-fondamentaux-01',
    title: 'Je me présente et j’écoute',
    summary: 'Apprendre à dire son prénom, écouter les autres et respecter les tours de parole.',
    level: 'n1-fondamentaux',
    subject: 'Développement Personnel',
    ageGroup: '6-8 ans',
    estimatedMinutes: 12,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      'Se présenter en une phrase',
      'Écouter activement (regard, silence, reformulation)',
      'Respecter les tours de parole'
    ],
    keywords: ['présentation','écoute','respect','tour de parole'],
    sources: [ { title: 'Programme interne — DP N1', url: 'https://example.com/devperso-n1', type: 'website', description: 'Progression N1' } ],
    body: {
      introduction: { title: 'Qui suis‑je ?', content: `Je dis **mon prénom** et **ce que j’aime** (un jeu, un fruit). J’**écoute** les autres sans couper la parole.` },
      mainContent: [
        { type: 'concept', title: 'Écoute active', content: `1) Je **regarde**. 2) Je **me tais**. 3) Je **reformule** : « Tu as dit que… ». ` },
        { type: 'activity', title: 'Ronde des prénoms', content: `Chaque élève se présente en **1 phrase**. Les autres **reformulent**.` },
        { type: 'summary', title: 'Récap', content: `Se présenter + **écouter** = **bien vivre ensemble**.` }
      ],
      conclusion: { summary: 'Tu sais te présenter et écouter.', keyTakeaways: ['Regard','Silence','Reformulation'], nextSteps: ['Découvrir mes **émotions** (leçon 2)'], additionalResources: [ { title: 'Affiche Écoute Active', description: 'Mémo 3 étapes', url: 'https://example.com/devperso-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Écouter activement, c’est…', type: 'multiple-choice', options: ['Regarder et reformuler','Parler fort'], correctAnswer: 'Regarder et reformuler', explanation: 'Règle de base', points: 10 } ], passingScore: 80, timeLimit: 5 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['devperso','n1','écoute'] }
  },

  'devperso-n1-fondamentaux-02': {
    slug: 'devperso-n1-fondamentaux-02',
    title: 'Mes émotions de base',
    summary: 'Identifier joie, tristesse, colère, peur et dire « Je ressens… ».',
    level: 'n1-fondamentaux',
    subject: 'Développement Personnel',
    ageGroup: '6-8 ans',
    estimatedMinutes: 14,
    isLocked: false,
    prerequisites: ['devperso-n1-fondamentaux-01'],
    learningObjectives: ['Nommer 4 émotions', 'Exprimer « Je ressens… »', 'Choisir une stratégie calme'],
    keywords: ['émotions','joie','colère','peur','tristesse'],
    sources: [ { title: 'Programme interne — Émotions N1', url: 'https://example.com/devperso-n1', type: 'website', description: 'Repères émotionnels' } ],
    body: {
      introduction: { title: 'Je mets des mots', content: `**Joie**, **tristesse**, **colère**, **peur**. Je dis : « **Je ressens** de la joie/colère… ». ` },
      mainContent: [
        { type: 'concept', title: 'Feu tricolore', content: `**Rouge**: je m’arrête ; **Orange**: je respire ; **Vert**: je parle calmement.` },
        { type: 'activity', title: 'Cartes émotion', content: `Je choisis une **carte** et je complète: « Je ressens… quand… »` },
        { type: 'summary', title: 'Récap', content: `Nommer aide à **se calmer**.` }
      ],
      conclusion: { summary: 'Tu sais nommer tes émotions.', keyTakeaways: ['Je ressens…','Feu tricolore'], nextSteps: ['**Respiration calme** (leçon 3)'], additionalResources: [ { title: 'Cartes émotions', description: '4 pictos à imprimer', url: 'https://example.com/devperso-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Dire « Je ressens… » sert à…', type: 'multiple-choice', options: ['Se moquer','Se comprendre et se calmer'], correctAnswer: 'Se comprendre et se calmer', explanation: 'Alphabétisation émotionnelle', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['devperso','n1','émotions'] }
  },

  'devperso-n1-fondamentaux-03': {
    slug: 'devperso-n1-fondamentaux-03',
    title: 'Respiration calme et retour au calme',
    summary: 'S’entraîner à respirer profondément pour revenir au calme en 1 minute.',
    level: 'n1-fondamentaux',
    subject: 'Développement Personnel',
    ageGroup: '6-8 ans',
    estimatedMinutes: 10,
    isLocked: false,
    prerequisites: ['devperso-n1-fondamentaux-02'],
    learningObjectives: ['Pratiquer une respiration 4–4', 'Utiliser la main comme guide', 'Revenir au calme en classe'],
    keywords: ['respiration','calme','auto-régulation'],
    sources: [ { title: 'DP N1 — Outils de retour au calme', url: 'https://example.com/devperso-n1', type: 'website', description: 'Techniques brèves' } ],
    body: {
      introduction: { title: 'Je souffle', content: `J’inspire **4** temps, je souffle **4** temps. Je trace les **doigts** de ma main en respirant.` },
      mainContent: [
        { type: 'activity', title: '1 minute zen', content: `Un **sablier** d’1 min : je respire doucement jusqu’au bout.` },
        { type: 'summary', title: 'Récap', content: `Respirer aide mon **cerveau** à **se poser**.` }
      ],
      conclusion: { summary: 'Tu connais une technique rapide.', keyTakeaways: ['4–4','Sablier'], nextSteps: ['**Routines** (leçon 4)'], additionalResources: [ { title: 'Affiche Respiration', description: 'Pas à pas visuel', url: 'https://example.com/devperso-n1' } ] }
    },
    assessment: { quiz: [ { question: 'La respiration 4–4 veut dire…', type: 'multiple-choice', options: ['Respirer au hasard','Inspire 4, souffle 4'], correctAnswer: 'Inspire 4, souffle 4', explanation: 'Routine simple', points: 10 } ], passingScore: 80, timeLimit: 5 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['devperso','n1','respiration'] }
  },

  'devperso-n1-fondamentaux-04': {
    slug: 'devperso-n1-fondamentaux-04',
    title: 'Routines du matin et du soir',
    summary: 'Comprendre l’utilité de petites routines pour bien commencer et terminer la journée.',
    level: 'n1-fondamentaux',
    subject: 'Développement Personnel',
    ageGroup: '6-8 ans',
    estimatedMinutes: 12,
    isLocked: false,
    prerequisites: ['devperso-n1-fondamentaux-03'],
    learningObjectives: ['Lister 3 tâches du matin', 'Lister 3 tâches du soir', 'Cocher une routine sur 5 jours'],
    keywords: ['routine','habitudes','organisation'],
    sources: [ { title: 'DP N1 — Routines', url: 'https://example.com/devperso-n1', type: 'website', description: 'Grille simple' } ],
    body: {
      introduction: { title: 'Des petits pas', content: `Matin : **réveil, toilette, cartable**. Soir : **rangement, pyjama, histoire**.` },
      mainContent: [
        { type: 'activity', title: 'Checklist 5 jours', content: `Je coche mes **3 tâches** matin/soir pendant **5 jours**.` },
        { type: 'summary', title: 'Récap', content: `Des **habitudes** donnent du **rythme**.` }
      ],
      conclusion: { summary: 'Tu crées ta routine.', keyTakeaways: ['Matin/Soir','Checklist'], nextSteps: ['**Mes affaires en ordre** (leçon 5)'], additionalResources: [ { title: 'Fiche Routine', description: 'Tableau à cocher', url: 'https://example.com/devperso-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Une routine aide à…', type: 'multiple-choice', options: ['Se perdre','S’organiser'], correctAnswer: 'S’organiser', explanation: 'Pouvoir d’habitude', points: 10 } ], passingScore: 80, timeLimit: 5 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['devperso','n1','routine'] }
  },

  'devperso-n1-fondamentaux-05': {
    slug: 'devperso-n1-fondamentaux-05',
    title: 'Mes affaires en ordre',
    summary: 'Ranger son sac et sa table, étiqueter ses cahiers, retrouver vite ses affaires.',
    level: 'n1-fondamentaux',
    subject: 'Développement Personnel',
    ageGroup: '6-8 ans',
    estimatedMinutes: 12,
    isLocked: false,
    prerequisites: ['devperso-n1-fondamentaux-04'],
    learningObjectives: ['Classer par catégorie', 'Étiqueter cahiers', 'Ranger en 3 minutes chrono'],
    keywords: ['rangement','ordre','cartable','étiquettes'],
    sources: [ { title: 'DP N1 — Organisation simple', url: 'https://example.com/devperso-n1', type: 'website', description: 'Tris et étiquettes' } ],
    body: {
      introduction: { title: 'Chaque chose à sa place', content: `Je **range** par **catégories** : écriture, lecture, coloriage.` },
      mainContent: [
        { type: 'activity', title: '3 minutes chrono', content: `Je mets **crayons** dans trousse, **cahiers** empilés, **déchets** à la poubelle.` },
        { type: 'summary', title: 'Récap', content: `Un espace **clair** aide à **apprendre**.` }
      ],
      conclusion: { summary: 'Tu sais t’organiser.', keyTakeaways: ['Catégories','Étiquettes'], nextSteps: ['**Objectif simple** (leçon 6)'], additionalResources: [ { title: 'Etiquettes à imprimer', description: 'Nom, matière, couleur', url: 'https://example.com/devperso-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Ranger par catégories veut dire…', type: 'multiple-choice', options: ['Tout mélanger','Regrouper ce qui se ressemble'], correctAnswer: 'Regrouper ce qui se ressemble', explanation: 'Principe de base', points: 10 } ], passingScore: 80, timeLimit: 5 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['devperso','n1','organisation'] }
  },

  'devperso-n1-fondamentaux-06': {
    slug: 'devperso-n1-fondamentaux-06',
    title: 'Mon objectif en 3 étapes',
    summary: 'Se fixer un objectif simple et le découper en 3 petites actions réalisables.',
    level: 'n1-fondamentaux',
    subject: 'Développement Personnel',
    ageGroup: '6-8 ans',
    estimatedMinutes: 14,
    isLocked: false,
    prerequisites: ['devperso-n1-fondamentaux-05'],
    learningObjectives: ['Choisir un objectif simple', 'Découper en 3 étapes', 'Cocher l’avancée'],
    keywords: ['objectif','plan','étapes','motivation'],
    sources: [ { title: 'DP N1 — Objectifs', url: 'https://example.com/devperso-n1', type: 'website', description: 'Méthode 3 étapes' } ],
    body: {
      introduction: { title: 'Je choisis un but', content: `Exemple: **lire 10 minutes** ce soir. Étapes: **préparer le livre**, **mettre un sablier**, **lire au calme**.` },
      mainContent: [
        { type: 'activity', title: 'Mon mini-plan', content: `J’écris **mon objectif** et **3 étapes**. Je coche quand c’est fait.` },
        { type: 'summary', title: 'Récap', content: `Un **petit plan** aide à **réussir**.` }
      ],
      conclusion: { summary: 'Tu sais te fixer un petit objectif.', keyTakeaways: ['3 étapes','Coche'], nextSteps: ['**Persévérance** (leçon 7)'], additionalResources: [ { title: 'Fiche objectif', description: 'Gabarit simple', url: 'https://example.com/devperso-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Pour atteindre un but, je peux…', type: 'multiple-choice', options: ['Le rêver seulement','Le découper en étapes'], correctAnswer: 'Le découper en étapes', explanation: 'Planifier', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['devperso','n1','objectif'] }
  },

  'devperso-n1-fondamentaux-07': {
    slug: 'devperso-n1-fondamentaux-07',
    title: 'Effort et persévérance — le pouvoir du « encore »',
    summary: 'Comprendre que l’on progresse avec des efforts répétés : « Je ne sais pas **encore** ». ',
    level: 'n1-fondamentaux',
    subject: 'Développement Personnel',
    ageGroup: '6-8 ans',
    estimatedMinutes: 12,
    isLocked: false,
    prerequisites: ['devperso-n1-fondamentaux-06'],
    learningObjectives: ['Donner un exemple d’effort', 'Employer « encore »', 'Célébrer une petite victoire'],
    keywords: ['persévérance','effort','état d’esprit'],
    sources: [ { title: 'DP N1 — Esprit de progression', url: 'https://example.com/devperso-n1', type: 'website', description: 'Growth mindset adapté' } ],
    body: {
      introduction: { title: 'Je progresse', content: `Dire « **encore** » au lieu de « Je n’y arrive pas ». Chaque jour, un **petit effort**.` },
      mainContent: [
        { type: 'activity', title: 'Victoire du jour', content: `J’écris une **petite réussite** d’aujourd’hui.` },
        { type: 'summary', title: 'Récap', content: `Efforts **répétés** = **progrès**.` }
      ],
      conclusion: { summary: 'Tu adoptes le mot « encore ».', keyTakeaways: ['Encore','Petits pas'], nextSteps: ['**Politesse** (leçon 8)'], additionalResources: [ { title: 'Carnet des progrès', description: '1 ligne par jour', url: 'https://example.com/devperso-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Je n’y arrive pas…', type: 'multiple-choice', options: ['et j’abandonne','encore (je continue)'], correctAnswer: 'encore (je continue)', explanation: 'État d’esprit', points: 10 } ], passingScore: 80, timeLimit: 5 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['devperso','n1','persévérance'] }
  },

  'devperso-n1-fondamentaux-08': {
    slug: 'devperso-n1-fondamentaux-08',
    title: 'Politesse et respect — les mots magiques',
    summary: 'Dire bonjour, s’il te plaît, merci, pardon ; prendre soin des lieux et des personnes.',
    level: 'n1-fondamentaux',
    subject: 'Développement Personnel',
    ageGroup: '6-8 ans',
    estimatedMinutes: 12,
    isLocked: false,
    prerequisites: ['devperso-n1-fondamentaux-07'],
    learningObjectives: ['Utiliser 4 mots magiques', 'Demander sans exiger', 'Respecter le matériel commun'],
    keywords: ['politesse','respect','vivre-ensemble'],
    sources: [ { title: 'DP N1 — Vivre ensemble', url: 'https://example.com/devperso-n1', type: 'website', description: 'Rituels de classe' } ],
    body: {
      introduction: { title: 'Des mots qui aident', content: `Je dis **bonjour**, **s’il te plaît**, **merci**, **pardon**.` },
      mainContent: [
        { type: 'activity', title: 'Jeu de rôle', content: `Par deux, on **joue** une situation et on place les **mots magiques**.` },
        { type: 'summary', title: 'Récap', content: `Politesse = **respect** des **personnes** et des **lieux**.` }
      ],
      conclusion: { summary: 'Tu pratiques la politesse.', keyTakeaways: ['Merci','Pardon'], nextSteps: ['**Travail en équipe** (leçon 9)'], additionalResources: [ { title: 'Affiche Mots Magiques', description: 'Poster classe', url: 'https://example.com/devperso-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Quand je reçois de l’aide, je dis…', type: 'multiple-choice', options: ['Rien','Merci'], correctAnswer: 'Merci', explanation: 'Rituel social', points: 10 } ], passingScore: 80, timeLimit: 5 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['devperso','n1','politesse'] }
  },

  'devperso-n1-fondamentaux-09': {
    slug: 'devperso-n1-fondamentaux-09',
    title: 'Travail en équipe et entraide',
    summary: 'Comprendre les rôles simples (porte‑parole, gardien du temps) et s’entraider.',
    level: 'n1-fondamentaux',
    subject: 'Développement Personnel',
    ageGroup: '6-8 ans',
    estimatedMinutes: 14,
    isLocked: false,
    prerequisites: ['devperso-n1-fondamentaux-08'],
    learningObjectives: ['Choisir un rôle', 'Aider un camarade', 'Respecter les tours'],
    keywords: ['équipe','entraide','rôle','coopération'],
    sources: [ { title: 'DP N1 — Coopération', url: 'https://example.com/devperso-n1', type: 'website', description: 'Rôles simples' } ],
    body: {
      introduction: { title: 'On réussit ensemble', content: `En équipe, chacun a un **rôle** et on **s’entraide**.` },
      mainContent: [
        { type: 'activity', title: 'Mission minute', content: `En **3 minutes**, on construit une **tour** de cubes. Un **gardien du temps** aide à finir.` },
        { type: 'summary', title: 'Récap', content: `Coopérer = **parler**, **écouter**, **aider**.` }
      ],
      conclusion: { summary: 'Tu sais coopérer.', keyTakeaways: ['Rôles','Aide'], nextSteps: ['**Gérer le temps** (leçon 10)'], additionalResources: [ { title: 'Cartes de rôles', description: 'À découper', url: 'https://example.com/devperso-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Un gardien du temps sert à…', type: 'multiple-choice', options: ['Décorer','Aider l’équipe à finir à temps'], correctAnswer: 'Aider l’équipe à finir à temps', explanation: 'Gestion simple', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['devperso','n1','coopération'] }
  },

  'devperso-n1-fondamentaux-10': {
    slug: 'devperso-n1-fondamentaux-10',
    title: 'Gérer le temps avec un sablier',
    summary: 'Découvrir les blocs de 5/10 minutes et utiliser un sablier pour rester concentré.',
    level: 'n1-fondamentaux',
    subject: 'Développement Personnel',
    ageGroup: '6-8 ans',
    estimatedMinutes: 12,
    isLocked: false,
    prerequisites: ['devperso-n1-fondamentaux-09'],
    learningObjectives: ['Choisir un bloc 5/10 min', 'Rester concentré jusqu’à la fin', 'Évaluer « facile/moyen/difficile »'],
    keywords: ['temps','sablier','concentration'],
    sources: [ { title: 'DP N1 — Gestion du temps', url: 'https://example.com/devperso-n1', type: 'website', description: 'Blocs courts' } ],
    body: {
      introduction: { title: 'Des blocs de temps', content: `Je choisis **5** ou **10 minutes** avec un **sablier**. Je reste **focus** jusqu’à la fin.` },
      mainContent: [
        { type: 'activity', title: 'Focus 10', content: `Je lis/calcule **10 min** sans m’arrêter. Puis je note : **facile/moyen/difficile**.` },
        { type: 'summary', title: 'Récap', content: `Un **sablier** m’aide à **finir**.` }
      ],
      conclusion: { summary: 'Tu utilises le sablier.', keyTakeaways: ['5/10 min','Focus'], nextSteps: ['**Conflit : je-messages** (leçon 11)'], additionalResources: [ { title: 'Sablier papier', description: 'Patron à découper', url: 'https://example.com/devperso-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Pendant un bloc de 10 min, je…', type: 'multiple-choice', options: ['Change d’activité souvent','Reste concentré jusqu’à la fin'], correctAnswer: 'Reste concentré jusqu’à la fin', explanation: 'Bloc unique', points: 10 } ], passingScore: 80, timeLimit: 5 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['devperso','n1','temps'] }
  },

  'devperso-n1-fondamentaux-11': {
    slug: 'devperso-n1-fondamentaux-11',
    title: 'Résoudre un petit conflit — messages « je »',
    summary: 'Utiliser un message « je » et 3 étapes pour régler un désaccord simple.',
    level: 'n1-fondamentaux',
    subject: 'Développement Personnel',
    ageGroup: '6-8 ans',
    estimatedMinutes: 14,
    isLocked: false,
    prerequisites: ['devperso-n1-fondamentaux-10'],
    learningObjectives: ['Dire un message « je »', 'Proposer une solution', 'Dire merci en fin d’échange'],
    keywords: ['conflit','communication','message je'],
    sources: [ { title: 'DP N1 — Communication bienveillante', url: 'https://example.com/devperso-n1', type: 'website', description: 'Étapes simples' } ],
    body: {
      introduction: { title: 'Parler sans blesser', content: `Étapes : 1) **Je ressens**… 2) **Quand** tu… 3) **Je propose**…` },
      mainContent: [
        { type: 'activity', title: 'Jeu de rôle court', content: `Ex. « Je me **sens** triste **quand** on me coupe la parole. **Je propose** de lever la main. »` },
        { type: 'summary', title: 'Récap', content: `Parler **calmement** aide à **se comprendre**.` }
      ],
      conclusion: { summary: 'Tu sais exprimer un message « je ».', keyTakeaways: ['Je ressens','Je propose'], nextSteps: ['**Projet N1** (leçon 12)'], additionalResources: [ { title: 'Fiche Message Je', description: 'Modèle à trous', url: 'https://example.com/devperso-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Dans un message « je », on dit d’abord…', type: 'multiple-choice', options: ['Tu es méchant','Je ressens…'], correctAnswer: 'Je ressens…', explanation: 'Langage responsable', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['devperso','n1','conflit'] }
  },

  'devperso-n1-fondamentaux-12': {
    slug: 'devperso-n1-fondamentaux-12',
    title: 'Projet & Évaluation — « Je progresse chaque jour »',
    summary: 'Créer un mini‑portfolio (émotions, respiration, routine, objectif, entraide) et passer le quiz final.',
    level: 'n1-fondamentaux',
    subject: 'Développement Personnel',
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: [
      'devperso-n1-fondamentaux-01','devperso-n1-fondamentaux-02','devperso-n1-fondamentaux-03','devperso-n1-fondamentaux-04','devperso-n1-fondamentaux-05','devperso-n1-fondamentaux-06','devperso-n1-fondamentaux-07','devperso-n1-fondamentaux-08','devperso-n1-fondamentaux-09','devperso-n1-fondamentaux-10','devperso-n1-fondamentaux-11'
    ],
    learningObjectives: ['Assembler ses outils', 'Présenter 2 min', 'Réussir le quiz final'],
    keywords: ['projet','portfolio','évaluation'],
    sources: [ { title: 'DP N1 — Projet', url: 'https://example.com/devperso-n1', type: 'website', description: 'Clôture du niveau' } ],
    body: {
      introduction: { title: 'Mon portfolio', content: `Je rassemble **5 fiches**: **émotions**, **respiration**, **routine**, **objectif**, **entraide**.` },
      mainContent: [
        { type: 'activity', title: 'Je présente', content: `En **2 minutes**, je montre **2 outils** que j’utilise le plus et **pourquoi**.` },
        { type: 'summary', title: 'Bravo 🎉', content: `Tu valides **Développement Personnel N1** !` }
      ],
      conclusion: { summary: 'Niveau terminé.', keyTakeaways: ['Calme','Organisation','Coopération'], nextSteps: ['Passer à **N2** (projets plus longs, responsabilités)'], additionalResources: [ { title: 'Modèle de portfolio', description: 'Couverture + sommaire', url: 'https://example.com/devperso-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Quand je suis en colère, je peux…', type: 'multiple-choice', options: ['Crier plus fort','Respirer 4–4'], correctAnswer: 'Respirer 4–4', explanation: 'Retour au calme', points: 10 }, { question: 'Pour atteindre un but, je fais…', type: 'multiple-choice', options: ['Un grand saut sans plan','3 petites étapes'], correctAnswer: '3 petites étapes', explanation: 'Planification', points: 10 } ], passingScore: 80, timeLimit: 12 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['devperso','n1','projet'] }
  }
}
