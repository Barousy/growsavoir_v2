import { Lesson } from './lessons'

export const allLessonsAqida: Record<string, Lesson> = {
  'aqida-n1-fondamentaux-01': {
    slug: 'aqida-n1-fondamentaux-01',
    title: 'Allah est Un — Le Créateur (at-Tawḥîd)',
    summary: "Découvrir que Dieu (Allah) est Unique, Créateur de tout, et que nous L'adorons Lui seul.",
    level: 'n1-fondamentaux',
    subject: 'Aqîda (Creed)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      "Dire qu'Allah est Unique (Unicité)",
      'Nommer quelques créations d’Allah',
      "Comprendre que l'on adore Allah seul"
    ],
    keywords: ['tawhid','créateur','adoration'],
    sources: [ { title: 'Programme interne Aqîda N1', url: 'https://example.com/aqida-n1', type: 'website', description: 'Référentiel pédagogique GrowSavoir' } ],
    body: {
      introduction: {
        title: 'Qui nous a créés ?',
        content: `Allah a **créé** le ciel, la terre, les animaux, **toi** et **moi**. Il est **Unique** (un Seul Dieu). Nous L’**adorons** Lui seul.`
      },
      mainContent: [
        { type: 'concept', title: 'Unicité', content: `Un seul Créateur, un seul Dieu à adorer. Rien ne Lui ressemble.` },
        { type: 'example', title: 'Exemples de création', content: `Montagnes, pluie, plantes, étoiles : signes de la **Puissance** d’Allah.` },
        { type: 'activity', title: 'Je regarde les signes', content: `Dessine 3 choses qu’Allah a créées et dis « **Mâ shâ Allah** ». ` },
        { type: 'exercise', title: 'Je complète', content: `Allah est **Un** ; Allah a **créé** __ ; On **adore** __ seul.` },
        { type: 'summary', title: 'Récap', content: `Allah est **Unique** et **Créateur** ; je L’adore **seul**.` }
      ],
      conclusion: {
        summary: "Tu sais dire qu'Allah est Unique et Créateur.",
        keyTakeaways: ['Unicité','Création','Adoration'],
        nextSteps: ['Découvrir **les beaux Noms d’Allah** (leçon 2)'],
        additionalResources: [ { title: 'Affiche : Allah a créé…', description: 'Fiche à compléter', url: 'https://example.com/aqida-n1' } ]
      }
    },
    assessment: {
      quiz: [ { question: 'Combien de dieux adorons-nous ?', type: 'multiple-choice', options: ['Plusieurs','Un seul'], correctAnswer: 'Un seul', explanation: 'Unicité', points: 10 } ],
      passingScore: 80,
      timeLimit: 8
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['aqida','n1','tawhid'] }
  },

  'aqida-n1-fondamentaux-02': {
    slug: 'aqida-n1-fondamentaux-02',
    title: 'Les plus beaux Noms (al-Asmâ’ al-Ḥusnâ) — 5 noms à retenir',
    summary: "Connaître et aimer quelques Noms d’Allah : ar-Raḥmân, ar-Raḥîm, al-Khâliq, as-Samî‘, al-Baṣîr.",
    level: 'n1-fondamentaux',
    subject: 'Aqîda (Creed)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['aqida-n1-fondamentaux-01'],
    learningObjectives: ['Citer 5 Noms', 'Relier Nom ↔ sens simple', 'Utiliser les Noms dans une invocation courte'],
    keywords: ['asma al-husna','noms d’Allah'],
    sources: [ { title: 'Programme interne Aqîda N1', url: 'https://example.com/aqida-n1', type: 'website', description: 'Sélection pédagogique' } ],
    body: {
      introduction: { title: 'Allah a de beaux Noms', content: `Exemples : **ar-Raḥmân** (Le Tout-Miséricordieux), **ar-Raḥîm** (Le Très-Miséricordieux), **al-Khâliq** (Le Créateur), **as-Samî‘** (Il entend tout), **al-Baṣîr** (Il voit tout).` },
      mainContent: [
        { type: 'example', title: 'Cartes Nom → sens', content: `al-Khâliq → Créateur ; as-Samî‘ → Il **entend** ; al-Baṣîr → Il **voit**.` },
        { type: 'activity', title: 'Invocation courte', content: `Dis : « **Yâ Raḥmân**, aide-moi à être gentil. »` },
        { type: 'exercise', title: 'Je relie', content: `Entendre → **as-Samî‘** ; Voir → **al-Baṣîr** ; Miséricordieux → **ar-Raḥmân/ar-Raḥîm**.` },
        { type: 'summary', title: 'Récap', content: `Apprendre des **Noms** pour mieux aimer Allah.` }
      ],
      conclusion: { summary: 'Tu connais 5 Noms importants.', keyTakeaways: ['Raḥmân','Raḥîm','Khâliq','Samî‘','Baṣîr'], nextSteps: ['Découvrir les **Anges** (leçon 3)'], additionalResources: [ { title: 'Cartes des Noms', description: 'À colorier', url: 'https://example.com/aqida-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Quel Nom signifie qu’Allah **voit** tout ?', type: 'multiple-choice', options: ['al-Baṣîr','al-Khâliq'], correctAnswer: 'al-Baṣîr', explanation: 'al-Baṣîr = Le Clairvoyant', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['aqida','n1','asma'] }
  },

  'aqida-n1-fondamentaux-03': {
    slug: 'aqida-n1-fondamentaux-03',
    title: 'Les Anges — serviteurs d’Allah',
    summary: 'Croire aux Anges : ils obéissent à Allah ; quelques rôles connus (Jibrîl, Mîkâ’îl…).',
    level: 'n1-fondamentaux',
    subject: 'Aqîda (Creed)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: ['aqida-n1-fondamentaux-02'],
    learningObjectives: ['Dire que les Anges existent', 'Citer 2 rôles', 'Respecter cette croyance'],
    keywords: ['anges','malâika','jibril'],
    sources: [ { title: 'Programme interne Aqîda N1', url: 'https://example.com/aqida-n1', type: 'website', description: 'Notions enfants' } ],
    body: {
      introduction: { title: 'Qui sont les Anges ?', content: `Les **Anges** sont des créatures d’Allah. Ils **obéissent** toujours. **Jibrîl** transmet la Révélation ; d’autres **protègent** et **écrivent** nos actions.` },
      mainContent: [
        { type: 'example', title: 'Exemples de rôles', content: `Jibrîl (révélation), Mikâ’îl (pluie), Anges qui **écrivent** (droite/gauche).` },
        { type: 'activity', title: 'Vrai ou Faux', content: `Les Anges **désobéissent** ? (Faux)` },
        { type: 'exercise', title: 'Je complète', content: `Les Anges sont des **serviteurs** d’Allah.` },
        { type: 'summary', title: 'Récap', content: `Je **crois** aux Anges d’Allah.` }
      ],
      conclusion: { summary: 'Tu connais la croyance aux Anges.', keyTakeaways: ['Obéissance','Rôles'], nextSteps: ['Les **Livres** révélés (leçon 4)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Jibrîl est connu pour…', type: 'multiple-choice', options: ['La Révélation','La pêche'], correctAnswer: 'La Révélation', explanation: "Il a transmis la Révélation aux Prophètes.", points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['aqida','n1','anges'] }
  },

  'aqida-n1-fondamentaux-04': {
    slug: 'aqida-n1-fondamentaux-04',
    title: 'Les Livres révélés — le Coran et autres écrits',
    summary: 'Croire aux Livres révélés par Allah : le **Coran** est le dernier et préservé.',
    level: 'n1-fondamentaux',
    subject: 'Aqîda (Creed)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['aqida-n1-fondamentaux-03'],
    learningObjectives: ['Nommer le Coran', 'Citer qu’il existe d’autres livres révélés', 'Respecter le Coran (adab)'],
    keywords: ['livres','coran','révélation'],
    sources: [ { title: 'Programme interne Aqîda N1', url: 'https://example.com/aqida-n1', type: 'website', description: 'Repères enfants' } ],
    body: {
      introduction: { title: 'Le Livre d’Allah', content: `Le **Coran** est la Parole d’Allah, révélée au Prophète **Muhammad ﷺ**. D’autres livres : **Tawrah**, **Injîl**, **Zabûr**…` },
      mainContent: [
        { type: 'activity', title: 'Adab avec le Coran', content: `Propres **mains**, écouter avec **respect**, ranger avec **soin**.` },
        { type: 'example', title: 'Révélations précédentes', content: `Nous **respectons** tous les Livres révélés d’Allah.` },
        { type: 'exercise', title: 'Je coche', content: `Le Coran est : [ ] un roman [x] la Parole d’Allah.` },
        { type: 'summary', title: 'Récap', content: `Je crois aux **Livres** ; le Coran est **dernier** et **préservé**.` }
      ],
      conclusion: { summary: 'Tu sais nommer et respecter le Coran.', keyTakeaways: ['Coran','Adab'], nextSteps: ['Les **Prophètes** (leçon 5)'], additionalResources: [ { title: 'Affiche adab du Coran', description: 'Rappels visuels', url: 'https://example.com/aqida-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Le Coran est…', type: 'multiple-choice', options: ['La Parole d’Allah','Un conte'], correctAnswer: 'La Parole d’Allah', explanation: 'Livre révélé', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['aqida','n1','livres'] }
  },

  'aqida-n1-fondamentaux-05': {
    slug: 'aqida-n1-fondamentaux-05',
    title: 'Les Prophètes et Messagers — exemples à suivre',
    summary: 'Croire aux Prophètes et Messagers ; citer quelques noms et qualités (vérité, patience).',
    level: 'n1-fondamentaux',
    subject: 'Aqîda (Creed)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['aqida-n1-fondamentaux-04'],
    learningObjectives: ['Dire que les Prophètes transmettent le message', 'Citer 3 Prophètes', 'Imiter une qualité'],
    keywords: ['prophètes','messagers','sunna'],
    sources: [ { title: 'Programme interne Aqîda N1', url: 'https://example.com/aqida-n1', type: 'website', description: 'Notions enfants' } ],
    body: {
      introduction: { title: 'Qui sont-ils ?', content: `Des hommes choisis par Allah : **Nûḥ**, **Ibrâhîm**, **Mûsâ**, **‘Îsâ**, et **Muhammad ﷺ** le **dernier** des Messagers.` },
      mainContent: [
        { type: 'example', title: 'Qualités', content: `Vérité, patience, confiance en Allah.` },
        { type: 'activity', title: 'Je m’inspire', content: `Choisis une **qualité** et donne un **exemple** aujourd’hui.` },
        { type: 'exercise', title: 'Je cite', content: `Écris **3** noms de Prophètes.` },
        { type: 'summary', title: 'Récap', content: `Je crois aux **Prophètes** et j’essaie d’**imiter** leurs belles qualités.` }
      ],
      conclusion: { summary: 'Tu connais quelques Prophètes.', keyTakeaways: ['Message','Qualités'], nextSteps: ['Les **piliers de la foi** (leçon 6)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Le dernier Messager est…', type: 'multiple-choice', options: ['Mûsâ','Muhammad ﷺ'], correctAnswer: 'Muhammad ﷺ', explanation: 'Sceau des Prophètes', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['aqida','n1','prophètes'] }
  },

  'aqida-n1-fondamentaux-06': {
    slug: 'aqida-n1-fondamentaux-06',
    title: 'Les six piliers de la foi (al-Îmân) — panorama',
    summary: 'Croire en Allah, Ses Anges, Ses Livres, Ses Messagers, le Jour dernier et le Destin (bien/mal).',
    level: 'n1-fondamentaux',
    subject: 'Aqîda (Creed)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['aqida-n1-fondamentaux-05'],
    learningObjectives: ['Nommer les 6 piliers', 'Associer un exemple simple à chaque pilier', 'Réciter la liste'],
    keywords: ['piliers de la foi','iman'],
    sources: [ { title: 'Programme interne Aqîda N1', url: 'https://example.com/aqida-n1', type: 'website', description: 'Résumé N1' } ],
    body: {
      introduction: { title: 'La base de la croyance', content: `1) Allah 2) Anges 3) Livres 4) Messagers 5) Jour dernier 6) Destin.` },
      mainContent: [
        { type: 'example', title: 'Exemples', content: `Jour dernier → Allah nous questionnera ; Destin → Allah **sait** tout.` },
        { type: 'activity', title: 'Je mémorise', content: `Répète la liste **3 fois** avec gestes (six doigts).` },
        { type: 'summary', title: 'Récap', content: `Les **6 piliers** = **al-Îmân**.` }
      ],
      conclusion: { summary: 'Tu sais citer les 6 piliers.', keyTakeaways: ['Allah','Anges','Livres','Messagers','Jour dernier','Destin'], nextSteps: ['Jour dernier (leçon 7)'], additionalResources: [ { title: 'Affiche 6 piliers', description: 'Mémo à imprimer', url: 'https://example.com/aqida-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Fait-il partie des 6 piliers : croire aux Anges ?', type: 'multiple-choice', options: ['Non','Oui'], correctAnswer: 'Oui', explanation: 'C’est le 2e pilier', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['aqida','n1','piliers-foi'] }
  },

  'aqida-n1-fondamentaux-07': {
    slug: 'aqida-n1-fondamentaux-07',
    title: 'Le Jour dernier — rendre des comptes (niveau enfant)',
    summary: 'Comprendre simplement que nous répondrons de nos actions ; encourager les bonnes œuvres et le repentir.',
    level: 'n1-fondamentaux',
    subject: 'Aqîda (Creed)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: ['aqida-n1-fondamentaux-06'],
    learningObjectives: ['Dire que nos actes comptent', 'Citer 3 bonnes actions', 'Comprendre le repentir'],
    keywords: ['jour dernier','jugement','bonnes actions'],
    sources: [ { title: 'Programme interne Aqîda N1', url: 'https://example.com/aqida-n1', type: 'website', description: 'Approche bienveillante' } ],
    body: {
      introduction: { title: 'Mes actions comptent', content: `Un jour, Allah nous **demandera** ce que nous avons fait. Faisons de **bonnes actions** et demandons **pardon** quand on se trompe.` },
      mainContent: [
        { type: 'example', title: 'Bonnes actions', content: `Dire **salam**, aider, dire **merci**, partager.` },
        { type: 'activity', title: 'Mon carnet de bien', content: `Écris 3 bonnes actions faites aujourd’hui.` },
        { type: 'summary', title: 'Récap', content: `Je me prépare par les **bonnes œuvres**.` }
      ],
      conclusion: { summary: 'Tu sais que nos actes sont importants.', keyTakeaways: ['Responsabilité','Pardon'], nextSteps: ['Destin (leçon 8)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Que faire si on se trompe ?', type: 'multiple-choice', options: ['Ignorer','Demander pardon'], correctAnswer: 'Demander pardon', explanation: 'Repentir', points: 10 } ], passingScore: 80, timeLimit: 7 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['aqida','n1','jour-dernier'] }
  },

  'aqida-n1-fondamentaux-08': {
    slug: 'aqida-n1-fondamentaux-08',
    title: 'Le Destin (al-Qadar) — Allah sait tout, je choisis et j’agis',
    summary: 'Aborder simplement : Allah sait, écrit et veut ; nous choisissons et sommes responsables.',
    level: 'n1-fondamentaux',
    subject: 'Aqîda (Creed)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['aqida-n1-fondamentaux-07'],
    learningObjectives: ['Dire « Allah sait tout »', 'Agir et faire des choix', 'Accepter ce qui arrive avec patience'],
    keywords: ['qadar','destin','sagesse'],
    sources: [ { title: 'Programme interne Aqîda N1', url: 'https://example.com/aqida-n1', type: 'website', description: 'Notions débutantes' } ],
    body: {
      introduction: { title: 'Confiance en Allah', content: `Allah **sait** tout et Il **écrit** tout. Nous **choisissons** le bien et nous **agissons**. On fait **des efforts** et on a **confiance** en Allah.` },
      mainContent: [
        { type: 'example', title: 'Deux idées ensemble', content: `Je révise **et** je demande à Allah de m’aider.` },
        { type: 'activity', title: 'Patience', content: `Raconte une situation où tu as été **patient**.` },
        { type: 'summary', title: 'Récap', content: `Qadar = **science** d’Allah + **nos choix**.` }
      ],
      conclusion: { summary: 'Tu comprends le Qadar de manière simple.', keyTakeaways: ['Effort','Confiance'], nextSteps: ['Adorer Allah **seul** (leçon 9)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Doit-on agir ou attendre sans rien faire ?', type: 'multiple-choice', options: ['Attendre','Agir et demander l’aide d’Allah'], correctAnswer: 'Agir et demander l’aide d’Allah', explanation: 'Effort + confiance', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['aqida','n1','qadar'] }
  },

  'aqida-n1-fondamentaux-09': {
    slug: 'aqida-n1-fondamentaux-09',
    title: 'Aimer Allah et L’adorer seul — sincérité (al-Ikhlâṣ)',
    summary: 'Comprendre que l’adoration appartient à Allah seul ; faire les actes pour Lui, avec sincérité.',
    level: 'n1-fondamentaux',
    subject: 'Aqîda (Creed)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: ['aqida-n1-fondamentaux-08'],
    learningObjectives: ['Dire que l’adoration est pour Allah seul', 'Donner 3 exemples d’actes d’adoration', 'Expliquer la sincérité simplement'],
    keywords: ['ikhlas','adoration','sincérité'],
    sources: [ { title: 'Programme interne Aqîda N1', url: 'https://example.com/aqida-n1', type: 'website', description: 'Repères' } ],
    body: {
      introduction: { title: 'Pour qui je le fais ?', content: `Prière, invocations, aumône, bonnes actions : je les fais pour **Allah**. C’est la **sincérité**.` },
      mainContent: [
        { type: 'example', title: 'Exemples', content: `Dire « **Bismillah** », prier, aider sa famille **pour plaire à Allah**.` },
        { type: 'activity', title: 'Intention', content: `Avant une action, dis : « Je le fais **pour Allah** ». ` },
        { type: 'summary', title: 'Récap', content: `Adorer **Allah seul** avec **ikhlâṣ**.` }
      ],
      conclusion: { summary: 'Tu comprends la sincérité.', keyTakeaways: ['Intention','Adoration'], nextSteps: ['La **Shahâda** (leçon 10)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'À qui doit-on adresser la prière ?', type: 'multiple-choice', options: ['À Allah seul','À plusieurs'], correctAnswer: 'À Allah seul', explanation: 'Unicité dans l’adoration', points: 10 } ], passingScore: 80, timeLimit: 7 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['aqida','n1','ikhlas'] }
  },

  'aqida-n1-fondamentaux-10': {
    slug: 'aqida-n1-fondamentaux-10',
    title: 'La Shahâda — sens et implications',
    summary: 'Comprendre « Lâ ilâha illa-llâh, Muhammadun rasûlullâh » : un seul Dieu, et Muhammad est Son Messager.',
    level: 'n1-fondamentaux',
    subject: 'Aqîda (Creed)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['aqida-n1-fondamentaux-09'],
    learningObjectives: ['Dire la Shahâda correctement', 'Expliquer son sens simple', 'Donner 2 conséquences dans la vie quotidienne'],
    keywords: ['shahada','tawhid','messager'],
    sources: [ { title: 'Programme interne Aqîda N1', url: 'https://example.com/aqida-n1', type: 'website', description: 'Formulation et sens' } ],
    body: {
      introduction: { title: 'Deux phrases importantes', content: `**Lâ ilâha illa-llâh** (il n’y a de dieu digne d’adoration qu’Allah) ; **Muhammadun rasûlullâh** (Muhammad est le Messager d’Allah).` },
      mainContent: [
        { type: 'example', title: 'Dans ma vie', content: `J’**obéis** à Allah, je **suis** la voie du Prophète ﷺ.` },
        { type: 'activity', title: 'Je répète correctement', content: `Apprends la phrase avec un adulte, calmement.` },
        { type: 'summary', title: 'Récap', content: `Shahâda = **unicité** + **message**.` }
      ],
      conclusion: { summary: 'Tu connais la Shahâda et son sens.', keyTakeaways: ['Un Dieu','Messager'], nextSteps: ['Protéger sa foi (leçon 11)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'La Shahâda affirme…', type: 'multiple-choice', options: ['Plusieurs dieux','Un seul Dieu et le Message de Muhammad'], correctAnswer: 'Un seul Dieu et le Message de Muhammad', explanation: 'Sens de la Shahâda', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['aqida','n1','shahada'] }
  },

  'aqida-n1-fondamentaux-11': {
    slug: 'aqida-n1-fondamentaux-11',
    title: 'Protéger sa foi — éviter le shirk et les superstitions (niveau enfant)',
    summary: 'Expliquer simplement qu’on n’adore rien ni personne d’autre qu’Allah ; éviter les superstitions et chercher protection auprès d’Allah.',
    level: 'n1-fondamentaux',
    subject: 'Aqîda (Creed)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['aqida-n1-fondamentaux-10'],
    learningObjectives: ['Dire que toute adoration est pour Allah', 'Reconnaître quelques superstitions', 'Apprendre une courte invocation de protection'],
    keywords: ['shirk','protection','invocation'],
    sources: [ { title: 'Programme interne Aqîda N1', url: 'https://example.com/aqida-n1', type: 'website', description: 'Approche simple et bienveillante' } ],
    body: {
      introduction: { title: 'Ma foi, je la protège', content: `Je n’**adore** que **Allah** : je ne demande pas à des objets, je ne crois pas aux **porte-bonheurs**. Je cherche **protection** auprès d’Allah.` },
      mainContent: [
        { type: 'example', title: 'Exemples', content: `Ne pas croire qu’un bracelet **protège** ; on dit : « **A‘ûdhu billâh** » (Je cherche refuge auprès d’Allah).` },
        { type: 'activity', title: 'Je choisis la bonne action', content: `Quand j’ai peur : [ ] parler à un objet magique [x] faire une **invocation**.` },
        { type: 'summary', title: 'Récap', content: `Adoration = pour **Allah seul** ; je **rejette** les superstitions.` }
      ],
      conclusion: { summary: 'Tu sais protéger ta foi.', keyTakeaways: ['Allah seul','Rejeter superstition'], nextSteps: ['Bilan **N1** (leçon 12)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Un porte-bonheur protège-t-il vraiment ?', type: 'multiple-choice', options: ['Oui','Non'], correctAnswer: 'Non', explanation: "La protection vient d'Allah", points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['aqida','n1','protéger-foi'] }
  },

  'aqida-n1-fondamentaux-12': {
    slug: 'aqida-n1-fondamentaux-12',
    title: 'Projet & Évaluation N1 — Mon livret de croyance',
    summary: 'Réaliser un petit livret : Allah Unique, Noms, Anges, Livres, Prophètes, 6 piliers, Jour dernier, Qadar, Ikhlâṣ, Shahâda ; quiz final.',
    level: 'n1-fondamentaux',
    subject: 'Aqîda (Creed)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 25,
    isLocked: false,
    prerequisites: [
      'aqida-n1-fondamentaux-01','aqida-n1-fondamentaux-02','aqida-n1-fondamentaux-03','aqida-n1-fondamentaux-04','aqida-n1-fondamentaux-05','aqida-n1-fondamentaux-06','aqida-n1-fondamentaux-07','aqida-n1-fondamentaux-08','aqida-n1-fondamentaux-09','aqida-n1-fondamentaux-10','aqida-n1-fondamentaux-11'
    ],
    learningObjectives: ['Réviser toutes les notions', 'Présenter un livret clair', 'Répondre au quiz final'],
    keywords: ['projet','évaluation','livret'],
    sources: [ { title: 'Programme interne Aqîda N1', url: 'https://example.com/aqida-n1', type: 'website', description: 'Synthèse et évaluation' } ],
    body: {
      introduction: { title: 'Consignes du livret', content: `Chaque page : un **titre**, une **phrase**, un **dessin**. Ex. « Allah est **Unique** » ; « Je crois aux **Anges** »…` },
      mainContent: [
        { type: 'concept', title: 'Checklist', content: `Tawḥîd — 5 Noms — Anges — Livres — Prophètes — 6 piliers — Jour dernier — Qadar — Ikhlâṣ — Shahâda.` },
        { type: 'activity', title: 'Je présente', content: `Explique ton livret en **2 minutes** à quelqu’un.` },
        { type: 'summary', title: 'Bravo 🎉', content: `Tu termines **Aqîda N1** !` }
      ],
      conclusion: { summary: 'Niveau N1 validé.', keyTakeaways: ['Unicité','Piliers de la foi'], nextSteps: ['Passer au **N2** (approfondir)'], additionalResources: [ { title: 'Modèle de livret', description: 'Gabarit à imprimer', url: 'https://example.com/aqida-n1' } ] }
    },
    assessment: {
      quiz: [
        { question: 'Combien y a-t-il de piliers de la foi ?', type: 'multiple-choice', options: ['5','6'], correctAnswer: '6', explanation: 'Liste : Allah, Anges, Livres, Messagers, Jour dernier, Destin', points: 10 },
        { question: 'La prière doit être adressée…', type: 'multiple-choice', options: ['À Allah seul','À des objets'], correctAnswer: 'À Allah seul', explanation: 'Unicité de l’adoration', points: 10 }
      ],
      passingScore: 80,
      timeLimit: 20
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['aqida','n1','évaluation'] }
  }
}
