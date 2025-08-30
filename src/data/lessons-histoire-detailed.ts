import { Lesson } from './lessons'

// Histoire de l'Islam — N1 (6–8 ans)
// Source principale demandée : Ibn Kathîr — Al-Bidāya wa an-Nihāya (adaptation niveau enfants)

export const allLessonsHistoire: Record<string, Lesson> = {
  'histoire-n1-fondamentaux-01': {
    slug: 'histoire-n1-fondamentaux-01',
    title: 'Création des cieux et de la terre — Le grand début',
    summary: "Découvrir qu'Allah a créé les cieux, la terre, la nuit et le jour ; remercier Allah pour Sa création.",
    level: 'n1-fondamentaux',
    subject: "Histoire de l'Islam",
    ageGroup: '6-8 ans',
    estimatedMinutes: 15,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      "Dire qu'Allah a créé les cieux et la terre",
      'Employer les mots : création, ordre, gratitude',
      'Observer des signes : soleil, lune, alternance jour/nuit'
    ],
    keywords: ['création','cieux','terre','soleil','lune'],
    sources: [
      { title: 'Ibn Kathîr — Al-Bidāya wa an-Nihāya (chapitres de la création)', url: '#', type: 'book', description: 'Source primaire, récit des commencements (adapté N1)' }
    ],
    body: {
      introduction: {
        title: 'Qui a tout créé ?',
        content: `Allah est le **Créateur**. Il a créé les **cieux** et la **terre**, la **nuit** et le **jour**, le **soleil** et la **lune**. Tout est **ordonné** par Sa sagesse.`
      },
      mainContent: [
        { type: 'concept', title: 'Signes autour de nous', content: `Le **soleil** éclaire le **jour** ; la **lune** éclaire la **nuit** ; les **étoiles** nous guident.` },
        { type: 'activity', title: 'Je remercie', content: `Note **3 choses** que tu aimes dans la création (ex. la pluie, les arbres, la lumière) et dis : **Al-ḥamdulillāh**.` },
        { type: 'summary', title: 'Récap', content: `Le grand début : Allah a **créé** les cieux et la terre.` }
      ],
      conclusion: {
        summary: 'Tu sais que la création vient d’Allah.',
        keyTakeaways: ['Créateur','Ordre','Gratitude'],
        nextSteps: ['Création d’**Âdam** عليه السلام (leçon 2)'],
        additionalResources: [ { title: 'Affiche — Les signes de la création', description: 'Poster à colorier', url: '#' } ]
      }
    },
    assessment: {
      quiz: [ { question: "Qui a créé les cieux et la terre ?", type: 'multiple-choice', options: ['Allah','Personne'], correctAnswer: 'Allah', explanation: 'Croyance de base', points: 10 } ],
      passingScore: 80,
      timeLimit: 5
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['histoire','n1','création'] }
  },

  'histoire-n1-fondamentaux-02': {
    slug: 'histoire-n1-fondamentaux-02',
    title: "Création d'Âdam عليه السلام — Premier homme et prophète",
    summary: "Comprendre qu'Âdam est le premier homme et le premier prophète, honoré par Allah.",
    level: 'n1-fondamentaux',
    subject: "Histoire de l'Islam",
    ageGroup: '6-8 ans',
    estimatedMinutes: 15,
    isLocked: false,
    prerequisites: ['histoire-n1-fondamentaux-01'],
    learningObjectives: ["Dire qu'Âdam est le premier homme", 'Expliquer simple: Allah lui a appris', 'Respecter les enseignements'],
    keywords: ['Âdam','premier prophète','création'],
    sources: [ { title: 'Ibn Kathîr — Al-Bidāya (Âdam)', url: '#', type: 'book', description: 'Adaptation enfant' } ],
    body: {
      introduction: { title: 'Le premier prophète', content: `Allah a créé **Âdam** عليه السلام et lui a **enseigné**. Il est notre premier **prophète**.` },
      mainContent: [
        { type: 'concept', title: 'Dignité humaine', content: `Respecter **l’humain** : dire **vraies paroles**, ne pas **faire de mal**.` },
        { type: 'activity', title: 'Je retiens', content: `Complète : Âdam est le **premier** ______ (homme/prophète).` },
        { type: 'summary', title: 'Récap', content: `Âdam : **créé** par Allah, **enseigné** par Allah.` }
      ],
      conclusion: { summary: 'Tu connais Âdam عليه السلام.', keyTakeaways: ['Création','Enseignement'], nextSteps: ['**Nûḥ** عليه السلام (leçon 3)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Âdam est…', type: 'multiple-choice', options: ['Le premier homme et prophète','Un roi'], correctAnswer: 'Le premier homme et prophète', explanation: 'Récit fondateur', points: 10 } ], passingScore: 80, timeLimit: 5 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['histoire','n1','adam'] }
  },

  'histoire-n1-fondamentaux-03': {
    slug: 'histoire-n1-fondamentaux-03',
    title: 'Nûḥ عليه السلام — Patience et arche',
    summary: "Nûḥ appelle à adorer Allah ; Allah sauve les croyants dans l'arche.",
    level: 'n1-fondamentaux',
    subject: "Histoire de l'Islam",
    ageGroup: '6-8 ans',
    estimatedMinutes: 16,
    isLocked: false,
    prerequisites: ['histoire-n1-fondamentaux-02'],
    learningObjectives: ['Citer Nûḥ', 'Définir « patience » (sabr) simplement', 'Dire que les croyants ont été sauvés'],
    keywords: ['Nûḥ','déluge','arche','patience'],
    sources: [ { title: 'Ibn Kathîr — Al-Bidāya (Nûḥ)', url: '#', type: 'book', description: 'Récit du Déluge' } ],
    body: {
      introduction: { title: 'Appel et patience', content: `Le prophète **Nûḥ** a parlé **longtemps** à son peuple. Allah a **sauvé** les croyants dans une **arche**.` },
      mainContent: [
        { type: 'activity', title: 'Je m’inspire', content: `Je m’entraîne à la **patience** pendant une petite tâche (ranger, lire 5 min).` },
        { type: 'summary', title: 'Récap', content: `Nûḥ : **appel**, **patience**, **sauvetage**.` }
      ],
      conclusion: { summary: 'Tu connais l’histoire de Nûḥ.', keyTakeaways: ['Sabr','Sauvetage'], nextSteps: ['**Ibrâhîm** عليه السلام (leçon 4)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Nûḥ a appelé à…', type: 'multiple-choice', options: ['Adorer Allah','Désobéir'], correctAnswer: 'Adorer Allah', explanation: 'Tawḥîd', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['histoire','n1','nuh'] }
  },

  'histoire-n1-fondamentaux-04': {
    slug: 'histoire-n1-fondamentaux-04',
    title: 'Ibrâhîm عليه السلام — Adorer Allah seul',
    summary: "Ibrâhîm refuse les idoles et choisit d'adorer Allah seul ; modèle de courage.",
    level: 'n1-fondamentaux',
    subject: "Histoire de l'Islam",
    ageGroup: '6-8 ans',
    estimatedMinutes: 16,
    isLocked: false,
    prerequisites: ['histoire-n1-fondamentaux-03'],
    learningObjectives: ['Dire « adorer Allah seul »', 'Donner un exemple de courage', 'Respecter la vérité'],
    keywords: ['Ibrâhîm','tawḥîd','courage'],
    sources: [ { title: 'Ibn Kathîr — Al-Bidāya (Ibrâhîm)', url: '#', type: 'book', description: 'Histoires des prophètes' } ],
    body: {
      introduction: { title: 'Le choix de la vérité', content: `**Ibrâhîm** a compris que seul **Allah** mérite l’adoration. Il a **refusé** les idoles.` },
      mainContent: [
        { type: 'activity', title: 'Je dis la vérité', content: `Trouve une **bonne parole** à dire aujourd’hui (remercier, excuser).` },
        { type: 'summary', title: 'Récap', content: `Ibrâhîm : **tawḥîd**, **courage**, **vérité**.` }
      ],
      conclusion: { summary: 'Tu connais Ibrâhîm عليه السلام.', keyTakeaways: ['Tawḥîd','Courage'], nextSteps: ['**Ismâʿîl** et la **Ka‘ba** (leçon 5)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Qui mérite l’adoration ?', type: 'multiple-choice', options: ['Seules des statues','Allah seul'], correctAnswer: 'Allah seul', explanation: 'Unicité', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['histoire','n1','ibrahim'] }
  },

  'histoire-n1-fondamentaux-05': {
    slug: 'histoire-n1-fondamentaux-05',
    title: 'Ismâʿîl عليه السلام et la Ka‘ba — Zamzam et construction',
    summary: 'Découvrir la source Zamzam et la construction de la Ka‘ba par Ibrâhîm et Ismâʿîl.',
    level: 'n1-fondamentaux',
    subject: "Histoire de l'Islam",
    ageGroup: '6-8 ans',
    estimatedMinutes: 17,
    isLocked: false,
    prerequisites: ['histoire-n1-fondamentaux-04'],
    learningObjectives: ['Citer Zamzam', 'Dire que la Ka‘ba a été élevée', 'Apprécier la coopération père-fils'],
    keywords: ['Ismâʿîl','Zamzam','Ka‘ba'],
    sources: [ { title: 'Ibn Kathîr — Al-Bidāya (Ismâʿîl, Zamzam, Ka‘ba)', url: '#', type: 'book', description: 'Épisodes fondateurs à La Mecque' } ],
    body: {
      introduction: { title: 'Une ville bénie', content: `À **La Mecque**, Allah a fait jaillir **Zamzam**. **Ibrâhîm** et **Ismâʿîl** ont **élevé** les bases de la **Ka‘ba**.` },
      mainContent: [
        { type: 'example', title: 'Ensemble', content: `**Aide** et **coopération** pour une œuvre de **bien**.` },
        { type: 'activity', title: 'Je coopère', content: `Réalise une **petite tâche** en **équipe** (ranger une table).` },
        { type: 'summary', title: 'Récap', content: `Zamzam et **Ka‘ba** à la Mecque.` }
      ],
      conclusion: { summary: 'Tu connais Zamzam et la Ka‘ba.', keyTakeaways: ['Mecque','Zamzam','Ka‘ba'], nextSteps: ['**Quraysh** et La Mecque préislamique (leçon 6)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Qui a élevé les bases de la Ka‘ba ?', type: 'multiple-choice', options: ['Ibrâhîm et Ismâʿîl','Nûḥ et Mûsâ'], correctAnswer: 'Ibrâhîm et Ismâʿîl', explanation: 'Récit connu', points: 10 } ], passingScore: 80, timeLimit: 7 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['histoire','n1','kaaba'] }
  },

  'histoire-n1-fondamentaux-06': {
    slug: 'histoire-n1-fondamentaux-06',
    title: 'Quraysh et La Mecque — gardiens de la Ka‘ba',
    summary: 'Situer la tribu de Quraysh, leur rôle autour de la Ka‘ba et les valeurs (hospitalité, respect du sacré).',
    level: 'n1-fondamentaux',
    subject: "Histoire de l'Islam",
    ageGroup: '6-8 ans',
    estimatedMinutes: 15,
    isLocked: false,
    prerequisites: ['histoire-n1-fondamentaux-05'],
    learningObjectives: ['Nommer Quraysh', 'Relier à la Ka‘ba', 'Citer une belle valeur (hospitalité)'],
    keywords: ['Quraysh','Mecque','Ka‘ba','valeurs'],
    sources: [ { title: 'Ibn Kathîr — Al-Bidāya (Généalogies et Mecque)', url: '#', type: 'book', description: 'Contexte préislamique' } ],
    body: {
      introduction: { title: 'Autour de la Maison sacrée', content: `La tribu de **Quraysh** vivait à **La Mecque** et honorait la **Ka‘ba**.` },
      mainContent: [
        { type: 'activity', title: 'Bonne manière', content: `Liste **3 bonnes manières** dans un lieu sacré : **calme**, **propreté**, **respect**.` },
        { type: 'summary', title: 'Récap', content: `**Quraysh** : ville de **Mecque**, **Ka‘ba**.` }
      ],
      conclusion: { summary: 'Tu situes Quraysh.', keyTakeaways: ['Mecque','Ka‘ba'], nextSteps: ['**Année de l’Éléphant** (leçon 7)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Quraysh est lié à…', type: 'multiple-choice', options: ['La Mecque et la Ka‘ba','Rome'], correctAnswer: 'La Mecque et la Ka‘ba', explanation: 'Repère clé', points: 10 } ], passingScore: 80, timeLimit: 5 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['histoire','n1','quraysh'] }
  },

  'histoire-n1-fondamentaux-07': {
    slug: 'histoire-n1-fondamentaux-07',
    title: "L'Année de l’Éléphant — Protection de la Ka‘ba",
    summary: 'Une armée a voulu attaquer La Mecque, mais Allah a protégé la Ka‘ba.',
    level: 'n1-fondamentaux',
    subject: "Histoire de l'Islam",
    ageGroup: '6-8 ans',
    estimatedMinutes: 15,
    isLocked: false,
    prerequisites: ['histoire-n1-fondamentaux-06'],
    learningObjectives: ['Dire « Ka‘ba protégée »', 'Retenir la confiance en Allah', 'Raconter en 2 phrases l’épisode'],
    keywords: ['éléphant','Ka‘ba','protection'],
    sources: [ { title: 'Ibn Kathîr — Al-Bidāya (Année de l’Éléphant)', url: '#', type: 'book', description: 'Épisode célèbre' } ],
    body: {
      introduction: { title: 'Protection', content: `Une armée avec des **éléphants** voulait attaquer **La Mecque**. Allah a **protégé** la **Ka‘ba**.` },
      mainContent: [
        { type: 'activity', title: 'Je retiens', content: `Mot-clé : **protection**. Colle un **autocollant** en forme de **bouclier** sur ta fiche.` },
        { type: 'summary', title: 'Récap', content: `Année de l’**Éléphant** : Ka‘ba **protégée**.` }
      ],
      conclusion: { summary: 'Tu connais cet événement.', keyTakeaways: ['Protection','Ka‘ba'], nextSteps: ['**Naissance du Prophète ﷺ** (leçon 8)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Qui a protégé la Ka‘ba ?', type: 'multiple-choice', options: ['Allah','Une statue'], correctAnswer: 'Allah', explanation: 'Protection divine', points: 10 } ], passingScore: 80, timeLimit: 5 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['histoire','n1','elephant'] }
  },

  'histoire-n1-fondamentaux-08': {
    slug: 'histoire-n1-fondamentaux-08',
    title: 'Naissance du Prophète Muhammad ﷺ — Mecque',
    summary: 'Situer la naissance à La Mecque ; connaître Amina, ʿAbd al-Muṭṭalib et Ḥalîma (nourrice).',
    level: 'n1-fondamentaux',
    subject: "Histoire de l'Islam",
    ageGroup: '6-8 ans',
    estimatedMinutes: 16,
    isLocked: false,
    prerequisites: ['histoire-n1-fondamentaux-07'],
    learningObjectives: ['Dire que le Prophète ﷺ est né à La Mecque', 'Citer Amina et Ḥalîma', 'Respecter la famille et les aînés'],
    keywords: ['naissance','Amina','Halima','Mecque'],
    sources: [ { title: 'Ibn Kathîr — Al-Bidāya (Naissance du Prophète ﷺ)', url: '#', type: 'book', description: 'Repères de naissance' } ],
    body: {
      introduction: { title: 'Une naissance bénie', content: `Le Prophète **Muhammad ﷺ** est né à **La Mecque**. Sa maman : **Amina**. Sa nourrice : **Ḥalîma**.` },
      mainContent: [
        { type: 'activity', title: 'Je relie', content: `Relie : **Amina** → maman ; **Ḥalîma** → nourrice ; **Mecque** → ville.` },
        { type: 'summary', title: 'Récap', content: `Naissance à **La Mecque**.` }
      ],
      conclusion: { summary: 'Tu connais la naissance du Prophète ﷺ.', keyTakeaways: ['Mecque','Amina','Ḥalîma'], nextSteps: ['**Jeunesse (al-Amîn)** (leçon 9)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Où est né le Prophète ﷺ ?', type: 'multiple-choice', options: ['La Mecque','Médine'], correctAnswer: 'La Mecque', explanation: 'Repère clé', points: 10 } ], passingScore: 80, timeLimit: 5 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['histoire','n1','naissance'] }
  },

  'histoire-n1-fondamentaux-09': {
    slug: 'histoire-n1-fondamentaux-09',
    title: 'Jeunesse : « al-Amîn » — le digne de confiance',
    summary: 'Découvrir la qualité de vérité et de confiance dans la jeunesse du Prophète ﷺ.',
    level: 'n1-fondamentaux',
    subject: "Histoire de l'Islam",
    ageGroup: '6-8 ans',
    estimatedMinutes: 15,
    isLocked: false,
    prerequisites: ['histoire-n1-fondamentaux-08'],
    learningObjectives: ['Expliquer « al-Amîn »', 'Donner un exemple de vérité', 'Imiter une bonne action'],
    keywords: ['jeunesse','al-amîn','confiance','vérité'],
    sources: [ { title: 'Ibn Kathîr — Al-Bidāya (Jeunesse du Prophète ﷺ)', url: '#', type: 'book', description: 'Qualités reconnues' } ],
    body: {
      introduction: { title: 'Digne de confiance', content: `On appelait le Prophète ﷺ **al-Amîn** : il **disait la vérité** et on pouvait **lui confier** des biens.` },
      mainContent: [
        { type: 'activity', title: 'Je m’engage', content: `Aujourd’hui, je fais une **action honnête** (rendre un objet, dire la vérité).` },
        { type: 'summary', title: 'Récap', content: `Qualité : **confiance** et **vérité**.` }
      ],
      conclusion: { summary: 'Tu connais « al-Amîn ».', keyTakeaways: ['Vérité','Confiance'], nextSteps: ['**Contexte de l’Arabie** (leçon 10)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: '« al-Amîn » signifie…', type: 'multiple-choice', options: ['Digne de confiance','Très en colère'], correctAnswer: 'Digne de confiance', explanation: 'Surnom du Prophète ﷺ', points: 10 } ], passingScore: 80, timeLimit: 5 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['histoire','n1','al-amin'] }
  },

  'histoire-n1-fondamentaux-10': {
    slug: 'histoire-n1-fondamentaux-10',
    title: 'Contexte de la péninsule — déserts, oasis, caravanes',
    summary: 'Repères géographiques et économiques simples : désert/oasis, routes commerciales.',
    level: 'n1-fondamentaux',
    subject: "Histoire de l'Islam",
    ageGroup: '6-8 ans',
    estimatedMinutes: 16,
    isLocked: false,
    prerequisites: ['histoire-n1-fondamentaux-09'],
    learningObjectives: ['Différencier désert/oasis', 'Décrire une caravane', 'Placer Mecque sur carte simple'],
    keywords: ['désert','oasis','caravane','Mecque'],
    sources: [ { title: 'Ibn Kathîr — Contexte arabe préislamique (Al-Bidāya)', url: '#', type: 'book', description: 'Repères synthétisés' } ],
    body: {
      introduction: { title: 'Autour de nous', content: `Beaucoup de **déserts** et des **oasis** avec de l’eau. Des **caravanes** relient les **villes**.` },
      mainContent: [
        { type: 'activity', title: 'Je place', content: `Sur une carte simplifiée, place **La Mecque** et dessine une **route**.` },
        { type: 'summary', title: 'Récap', content: `Désert **≠** oasis ; caravane = **échanges**.` }
      ],
      conclusion: { summary: 'Tu connais le décor de la sîra.', keyTakeaways: ['Désert/Oasis','Routes'], nextSteps: ['**Révision & mots-clés** (leçon 11)'], additionalResources: [ { title: 'Carte muette Arabie', description: 'À imprimer', url: '#' } ] }
    },
    assessment: { quiz: [ { question: 'Une oasis, c’est…', type: 'multiple-choice', options: ['Un endroit avec de l’eau','Un volcan'], correctAnswer: 'Un endroit avec de l’eau', explanation: 'Définition simple', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['histoire','n1','contexte'] }
  },

  'histoire-n1-fondamentaux-11': {
    slug: 'histoire-n1-fondamentaux-11',
    title: 'Révision N1 — frise du début du monde à la naissance du Prophète ﷺ',
    summary: 'Construire une frise : Création des cieux → Âdam → Nûḥ → Ibrâhîm → Ismâʿîl/Ka‘ba → Quraysh → Éléphant → Naissance.',
    level: 'n1-fondamentaux',
    subject: "Histoire de l'Islam",
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: [
      'histoire-n1-fondamentaux-01','histoire-n1-fondamentaux-02','histoire-n1-fondamentaux-03','histoire-n1-fondamentaux-04','histoire-n1-fondamentaux-05','histoire-n1-fondamentaux-06','histoire-n1-fondamentaux-07','histoire-n1-fondamentaux-08','histoire-n1-fondamentaux-09','histoire-n1-fondamentaux-10'
    ],
    learningObjectives: ['Ordonner 8 étapes', 'Présenter la frise en 2 min', 'Utiliser 6 mots-clés'],
    keywords: ['frise','révision','chronologie'],
    sources: [ { title: 'Synthèse N1 (adaptée d’Ibn Kathîr)', url: '#', type: 'book', description: 'Sélection d’étapes majeures' } ],
    body: {
      introduction: { title: 'On assemble', content: `Prépare une **frise** avec 8 **cartes** (dessin + mot-clé).` },
      mainContent: [
        { type: 'concept', title: 'Étapes', content: `Création cieux/terre → Âdam → Nûḥ → Ibrâhîm → Ismâʿîl/Ka‘ba → Quraysh → Année de l’Éléphant → Naissance.` },
        { type: 'activity', title: 'Je présente', content: `Explique ta frise à un camarade en **2 minutes**.` },
        { type: 'summary', title: 'Récap', content: `Tu connais les **grands repères**.` }
      ],
      conclusion: { summary: 'Révision terminée.', keyTakeaways: ['Repères','Mots-clés'], nextSteps: ['**Projet & évaluation** (leçon 12)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Place dans l’ordre : Âdam / Création des cieux', type: 'multiple-choice', options: ['Création des cieux avant Âdam','Âdam avant création des cieux'], correctAnswer: 'Création des cieux avant Âdam', explanation: 'Chronologie', points: 10 } ], passingScore: 80, timeLimit: 7 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['histoire','n1','révision'] }
  },

  'histoire-n1-fondamentaux-12': {
    slug: 'histoire-n1-fondamentaux-12',
    title: 'Projet & Évaluation — « Du ciel à La Mecque »',
    summary: 'Créer une affiche : ciel/terre, Âdam, Nûḥ, Ibrâhîm, Zamzam/Ka‘ba, Quraysh, Éléphant, Naissance ; puis quiz final.',
    level: 'n1-fondamentaux',
    subject: "Histoire de l'Islam",
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: [
      'histoire-n1-fondamentaux-11'
    ],
    learningObjectives: ['Synthétiser visuellement', 'Raconter en 2 min', 'Réussir le quiz'],
    keywords: ['projet','affiche','évaluation'],
    sources: [ { title: 'Projet N1 (adapté d’Ibn Kathîr)', url: '#', type: 'book', description: 'Fil rouge du niveau' } ],
    body: {
      introduction: { title: 'Consignes', content: `Sur une **A3**, dessine les **8 étapes** et écris un **mot-clé** sous chaque dessin.` },
      mainContent: [
        { type: 'activity', title: 'Je présente', content: `Explique ton affiche en **2 minutes**.` },
        { type: 'summary', title: 'Bravo 🎉', content: `Tu valides **Histoire N1** !` }
      ],
      conclusion: { summary: 'Niveau terminé.', keyTakeaways: ['Création','Prophètes','Mecque'], nextSteps: ['Passer à **N2** (périodes à Médine, conquêtes, etc.)'], additionalResources: [ { title: 'Modèle d’affiche', description: 'Gabarit à imprimer', url: '#' } ] }
    },
    assessment: { quiz: [ { question: 'Qui a créé les cieux et la terre ?', type: 'multiple-choice', options: ['Allah','Les hommes'], correctAnswer: 'Allah', explanation: 'Croyance de base', points: 10 }, { question: 'Quelle source d’eau bénie se trouve à La Mecque ?', type: 'multiple-choice', options: ['Zamzam','Nil'], correctAnswer: 'Zamzam', explanation: 'Repère historique', points: 10 } ], passingScore: 80, timeLimit: 18 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['histoire','n1','projet'] }
  }
}
