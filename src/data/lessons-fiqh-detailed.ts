import { Lesson } from './lessons'

export const allLessonsFiqh: Record<string, Lesson> = {
  'fiqh-n1-fondamentaux-01': {
    slug: 'fiqh-n1-fondamentaux-01',
    title: 'Découvrir le fiqh : adorer Allah au quotidien',
    summary: "Comprendre que le fiqh, ce sont les **règles faciles** pour bien adorer Allah chaque jour (propreté, prière, bonnes manières).",
    level: 'n1-fondamentaux',
    subject: 'Fiqh (Jurisprudence)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 15,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      'Dire ce qu’est le fiqh (règles de la pratique)',
      'Citer 3 moments où on applique le fiqh (toilettes, prière, repas)',
      'Adopter une intention sincère'
    ],
    keywords: ['fiqh','adoration','règles','intention'],
    sources: [
      { title: 'Référentiel interne Fiqh N1', url: 'https://example.com/fiqh-n1', type: 'website', description: 'Progression GrowSavoir — niveau enfants' }
    ],
    body: {
      introduction: {
        title: 'Le fiqh, à quoi ça sert ?',
        content: `Le **fiqh** nous apprend **comment** faire les choses qu’Allah aime : rester **propre**, **prier**, se **comporter** avec douceur. On commence par une **bonne intention** (pour plaire à Allah).`
      },
      mainContent: [
        { type: 'concept', title: 'Trois domaines du fiqh N1', content: `1) **Propreté** (ṭahâra) 2) **Prière** (ṣalât) 3) **Bonnes manières** (adab).` },
        { type: 'example', title: 'Exemples quotidiens', content: `Se laver les mains, faire les **ablutions**, dire « **Bismillah** » avant de manger.` },
        { type: 'activity', title: 'Mon intention', content: `Dis à voix basse : « Je fais cela **pour Allah**. »` },
        { type: 'summary', title: 'Récap', content: `Fiqh = **règles** pour adorer Allah **chaque jour**.` }
      ],
      conclusion: {
        summary: 'Tu sais présenter le fiqh simplement.',
        keyTakeaways: ['Intention','Propreté','Prière','Adab'],
        nextSteps: ['La **propreté** et la ṭahâra (leçon 2)'],
        additionalResources: [
          { title: 'Affiche « Qu’est-ce que le fiqh ? »', description: 'Mémo illustré N1', url: 'https://example.com/fiqh-n1' }
        ]
      }
    },
    assessment: {
      quiz: [
        { question: 'Le fiqh sert à…', type: 'multiple-choice', options: ['Raconter des histoires','Savoir comment adorer Allah'], correctAnswer: 'Savoir comment adorer Allah', explanation: 'Fiqh = règles pratiques', points: 10 }
      ],
      passingScore: 80,
      timeLimit: 8
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['fiqh','n1','introduction'] }
  },

  'fiqh-n1-fondamentaux-02': {
    slug: 'fiqh-n1-fondamentaux-02',
    title: 'Ṭahâra — être propre pour plaire à Allah',
    summary: 'Découvrir la pureté rituelle et l’hygiène : propreté du corps, des vêtements et du lieu de prière ; gestes simples.',
    level: 'n1-fondamentaux',
    subject: 'Fiqh (Jurisprudence)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 16,
    isLocked: false,
    prerequisites: ['fiqh-n1-fondamentaux-01'],
    learningObjectives: ['Dire que la propreté fait partie de la foi', 'Lister 3 gestes d’hygiène', 'Préparer un endroit propre pour prier'],
    keywords: ['tahara','propreté','hygiène'],
    sources: [ { title: 'Référentiel interne Fiqh N1 — ṭahâra', url: 'https://example.com/fiqh-n1', type: 'website', description: 'Notions adaptées enfants' } ],
    body: {
      introduction: { title: 'Propre = prêt', content: `Être **propre** du corps, des **vêtements** et du **lieu** : on se lave les mains, on change de vêtements sales, on nettoie l’endroit de prière.` },
      mainContent: [
        { type: 'example', title: 'Avant la prière', content: `Vérifier : mains propres, vêtements **propres**, sol **propre**.` },
        { type: 'activity', title: 'Checklist propreté', content: `Je coche : [ ] mains [ ] visage [ ] vêtements [ ] tapis propre.` },
        { type: 'summary', title: 'Récap', content: `La **propreté** plaît à Allah.` }
      ],
      conclusion: { summary: 'Tu sais te préparer proprement.', keyTakeaways: ['Corps','Vêtements','Lieu'], nextSteps: ['Les **ablutions** (leçon 3)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Pour prier, mes vêtements doivent être…', type: 'multiple-choice', options: ['Propres','Sales'], correctAnswer: 'Propres', explanation: 'Condition simple', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['fiqh','n1','tahara'] }
  },

  'fiqh-n1-fondamentaux-03': {
    slug: 'fiqh-n1-fondamentaux-03',
    title: 'Wudû’ — les ablutions étape par étape',
    summary: 'Apprendre les étapes simples du wudû’ pour les enfants et savoir quand le faire.',
    level: 'n1-fondamentaux',
    subject: 'Fiqh (Jurisprudence)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['fiqh-n1-fondamentaux-02'],
    learningObjectives: ['Citer les étapes du wudû’ en version courte', 'Exécuter le geste correctement avec un adulte', 'Dire quand refaire le wudû’ (notion)'],
    keywords: ['wudu','ablutions','prière'],
    sources: [ { title: 'Référentiel interne Fiqh N1 — wudû’', url: 'https://example.com/fiqh-n1', type: 'website', description: 'Fiche étapes simplifiées' } ],
    body: {
      introduction: { title: 'Se préparer à prier', content: `Le **wudû’** est une **ablution** avec de l’eau : on **lave** certaines parties du corps avant de **prier**.` },
      mainContent: [
        { type: 'concept', title: 'Étapes (version N1)', content: `1) Intention 2) Mains 3) Bouche & nez 4) Visage 5) Bras jusqu’aux coudes 6) Tête/oreilles (passer la main mouillée) 7) Pieds jusqu’aux chevilles.` },
        { type: 'activity', title: 'Je m’entraîne', content: `Refais les étapes **doucement**, avec l’aide d’un adulte et **sans gaspiller l’eau**.` },
        { type: 'summary', title: 'Récap', content: `Wudû’ = **propreté rituelle** avant la prière.` }
      ],
      conclusion: { summary: 'Tu sais faire le wudû’ (niveau enfant).', keyTakeaways: ['Étapes','Calme','Économie d’eau'], nextSteps: ['Ce qui **annule** le wudû’ (leçon 4)'], additionalResources: [ { title: 'Poster Wudû’ enfants', description: 'Étapes illustrées', url: 'https://example.com/fiqh-n1' } ] }
    },
    assessment: { quiz: [ { question: 'Laver les **pieds** fait-il partie du wudû’ ?', type: 'multiple-choice', options: ['Non','Oui'], correctAnswer: 'Oui', explanation: 'Étape N1', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['fiqh','n1','wudu'] }
  },

  'fiqh-n1-fondamentaux-04': {
    slug: 'fiqh-n1-fondamentaux-04',
    title: 'Ce qui annule le wudû’ — rester prêt pour la prière',
    summary: 'Connaître quelques situations qui demandent de refaire les ablutions (niveau enfant) et apprendre la discrétion et l’hygiène.',
    level: 'n1-fondamentaux',
    subject: 'Fiqh (Jurisprudence)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 14,
    isLocked: false,
    prerequisites: ['fiqh-n1-fondamentaux-03'],
    learningObjectives: ['Citer 2-3 annulatifs simples', 'Agir avec discrétion et propreté', 'Refaire les ablutions calmement'],
    keywords: ['wudu','annulatifs','hygiène'],
    sources: [ { title: 'Référentiel interne Fiqh N1 — Annulatifs', url: 'https://example.com/fiqh-n1', type: 'website', description: 'Notions adaptées enfants' } ],
    body: {
      introduction: { title: 'Rester en état de wudû’', content: `Parfois, on doit **refaire** le wudû’. On reste **discret** et on garde une **bonne hygiène**.` },
      mainContent: [
        { type: 'example', title: 'Situations courantes', content: `Aller aux **toilettes** ; **gaz** ; **sommeil profond**.` },
        { type: 'activity', title: 'Je récapitule', content: `Quand cela arrive → je **refais** mes ablutions avec **calme**.` },
        { type: 'summary', title: 'Récap', content: `Je connais quand **refaire** le wudû’.` }
      ],
      conclusion: { summary: 'Tu sais quand refaire les ablutions.', keyTakeaways: ['Annulatifs','Discrétion','Hygiène'], nextSteps: ['Découvrir la **prière** (leçon 5)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Après être allé aux toilettes, je…', type: 'multiple-choice', options: ['Ne fais rien','Refais le wudû’'], correctAnswer: 'Refais le wudû’', explanation: 'Annulatif courant', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['fiqh','n1','annulatifs'] }
  },

  'fiqh-n1-fondamentaux-05': {
    slug: 'fiqh-n1-fondamentaux-05',
    title: 'Ṣalât — qu’est-ce que la prière ?',
    summary: 'Découvrir la prière : ses **horaires**, ses **rangs** (unités), et l’idée de se tourner vers la **qibla** (direction de la Ka‘ba).',
    level: 'n1-fondamentaux',
    subject: 'Fiqh (Jurisprudence)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: ['fiqh-n1-fondamentaux-04'],
    learningObjectives: ['Nommer 5 prières obligatoires', 'Comprendre la notion de qibla', 'Connaître l’idée des unités (rak‘ât)'],
    keywords: ['prière','salat','qibla','horaires'],
    sources: [ { title: 'Référentiel interne Fiqh N1 — Ṣalât', url: 'https://example.com/fiqh-n1', type: 'website', description: 'Repères enfants' } ],
    body: {
      introduction: { title: 'Rencontre avec Allah', content: `Il y a **5 prières** dans la journée : **Fajr**, **Ḍuhr**, **‘Aṣr**, **Maghrib**, **‘Ishâ**. On se tourne vers la **qibla**.` },
      mainContent: [
        { type: 'example', title: 'Unité (rak‘a)', content: `Une **rak‘a** = se **tenir debout**, **inclinaison** (rukû‘), **prosternation** (sujûd).` },
        { type: 'activity', title: 'Je repère la qibla', content: `Avec un adulte, repère la **direction** de la Ka‘ba dans la pièce.` },
        { type: 'summary', title: 'Récap', content: `5 prières, **qibla**, unités (rak‘ât).` }
      ],
      conclusion: { summary: 'Tu connais les bases de la prière.', keyTakeaways: ['5 prières','Qibla','Rak‘ât'], nextSteps: ['Les **gestes** de la prière (leçon 6)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Combien y a-t-il de prières quotidiennes obligatoires ?', type: 'multiple-choice', options: ['3','5'], correctAnswer: '5', explanation: 'Rythme de la journée', points: 10 } ], passingScore: 80, timeLimit: 7 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['fiqh','n1','salat'] }
  },

  'fiqh-n1-fondamentaux-06': {
    slug: 'fiqh-n1-fondamentaux-06',
    title: 'Gestes & positions — se tenir, s’incliner, se prosterner',
    summary: 'Apprendre les **positions principales** de la prière avec calme et respect (version enfant).',
    level: 'n1-fondamentaux',
    subject: 'Fiqh (Jurisprudence)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['fiqh-n1-fondamentaux-05'],
    learningObjectives: ['Adopter les positions principales', 'Se déplacer en douceur entre les positions', 'Garder le calme et la concentration'],
    keywords: ['gestes','rukû‘','sujûd','qiyâm'],
    sources: [ { title: 'Référentiel interne Fiqh N1 — Gestes', url: 'https://example.com/fiqh-n1', type: 'website', description: 'Fiche gestuelle N1' } ],
    body: {
      introduction: { title: 'Prière avec sérénité', content: `On prie **calmement** : debout (**qiyâm**), **inclinaison** (**rukû‘**), **prosternation** (**sujûd**), position **assise**.` },
      mainContent: [
        { type: 'activity', title: 'Entraînement doux', content: `Avec un adulte, **mime** les positions lentement (sans paroles).` },
        { type: 'exercise', title: 'Je retiens', content: `Donne l’ordre : debout → inclinaison → prosternation → assis.` },
        { type: 'summary', title: 'Récap', content: `Des **gestes** respectueux et **calmes**.` }
      ],
      conclusion: { summary: 'Tu connais les gestes principaux.', keyTakeaways: ['Calme','Ordre des positions'], nextSteps: ['Dire des **formules** simples (leçon 7)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Quelle position correspond à « mettre le front au sol » ?', type: 'multiple-choice', options: ['Rukû‘ (inclinaison)','Sujûd (prosternation)'], correctAnswer: 'Sujûd (prosternation)', explanation: 'Front au sol', points: 10 } ], passingScore: 80, timeLimit: 7 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['fiqh','n1','gestes'] }
  },

  'fiqh-n1-fondamentaux-07': {
    slug: 'fiqh-n1-fondamentaux-07',
    title: 'Formules & adkâr simples pendant la prière',
    summary: 'Découvrir des **formules faciles** à dire pendant la prière (niveau enfant) et l’importance de la concentration (khushû‘).',
    level: 'n1-fondamentaux',
    subject: 'Fiqh (Jurisprudence)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: ['fiqh-n1-fondamentaux-06'],
    learningObjectives: ['Dire Bismillah/Allahu Akbar/Subḥâna Rabbiyal-‘Aẓîm/Subḥâna Rabbiyal-A‘la', 'Rester concentré', 'Suivre un adulte en prière'],
    keywords: ['adhkar','formules','khushu'],
    sources: [ { title: 'Référentiel interne Fiqh N1 — Adkâr', url: 'https://example.com/fiqh-n1', type: 'website', description: 'Formules simplifiées' } ],
    body: {
      introduction: { title: 'Des mots qui embellissent la prière', content: `On dit **Allahu Akbar** en changeant de position, **Subḥâna Rabbiyal-‘Aẓîm** en inclinaison, **Subḥâna Rabbiyal-A‘la** en prosternation. On reste **concentré**.` },
      mainContent: [
        { type: 'example', title: 'Formules clés (N1)', content: `• *Allahu Akbar* · • *Subḥâna Rabbiyal-‘Aẓîm* · • *Subḥâna Rabbiyal-A‘la*.` },
        { type: 'activity', title: 'Je répète doucement', content: `Répète **3 fois** avec un adulte, en chuchotant.` },
        { type: 'summary', title: 'Récap', content: `Des **adkâr** pour accompagner les **gestes**.` }
      ],
      conclusion: { summary: 'Tu connais des formules simples.', keyTakeaways: ['Allahu Akbar','Subḥâna…'], nextSteps: ['La **mosquée** et l’**adhân** (leçon 8)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'En prosternation, on dit surtout…', type: 'multiple-choice', options: ['Subḥâna Rabbiyal-A‘la','Bonjour'], correctAnswer: 'Subḥâna Rabbiyal-A‘la', explanation: 'Formule de sujûd', points: 10 } ], passingScore: 80, timeLimit: 7 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['fiqh','n1','adhkar'] }
  },

  'fiqh-n1-fondamentaux-08': {
    slug: 'fiqh-n1-fondamentaux-08',
    title: 'La mosquée & l’adhân — respect et bonnes manières',
    summary: 'Découvrir la **mosquée**, l’**appel à la prière** (adhân) et les **bonnes manières** du lieu.',
    level: 'n1-fondamentaux',
    subject: 'Fiqh (Jurisprudence)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 16,
    isLocked: false,
    prerequisites: ['fiqh-n1-fondamentaux-07'],
    learningObjectives: ['Dire ce qu’est l’adhân', 'Lister 4 adab de la mosquée', 'Respecter le calme du lieu'],
    keywords: ['mosquée','adhan','adab'],
    sources: [ { title: 'Référentiel interne Fiqh N1 — Mosquée', url: 'https://example.com/fiqh-n1', type: 'website', description: 'Adab niveau enfant' } ],
    body: {
      introduction: { title: 'Un lieu de paix', content: `À la **mosquée**, on reste **propre**, on parle **doucement**, on **écoute**, on **range** ses chaussures. L’**adhân** appelle à la prière.` },
      mainContent: [
        { type: 'example', title: 'Adab', content: `Arriver **calmement**, couper le **téléphone**, **ne pas courir** dans la salle de prière.` },
        { type: 'activity', title: 'Je prépare mon sac', content: `Mettre un petit **tapis**, un **sac à chaussures**, une **bouteille** d’eau (à l’extérieur de la salle).` },
        { type: 'summary', title: 'Récap', content: `Mosquée = **respect** et **écoute**.` }
      ],
      conclusion: { summary: 'Tu connais les adab de la mosquée.', keyTakeaways: ['Calme','Propreté','Respect'], nextSteps: ['Partage & aumône (leçon 9)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Dans la mosquée, je…', type: 'multiple-choice', options: ['Cours et crie','Reste calme et parle doucement'], correctAnswer: 'Reste calme et parle doucement', explanation: 'Adab du lieu', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['fiqh','n1','mosquée'] }
  },

  'fiqh-n1-fondamentaux-09': {
    slug: 'fiqh-n1-fondamentaux-09',
    title: 'Partage & aumône (ṣadaqa) — aider et donner',
    summary: 'Comprendre la **ṣadaqa** : donner, partager, aider ; exemples adaptés aux enfants.',
    level: 'n1-fondamentaux',
    subject: 'Fiqh (Jurisprudence)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 14,
    isLocked: false,
    prerequisites: ['fiqh-n1-fondamentaux-08'],
    learningObjectives: ['Donner un exemple de ṣadaqa', 'Partager avec sincérité', 'Aider à la maison/école'],
    keywords: ['sadaqa','partage','entraide'],
    sources: [ { title: 'Référentiel interne Fiqh N1 — Ṣadaqa', url: 'https://example.com/fiqh-n1', type: 'website', description: 'Idées de partage' } ],
    body: {
      introduction: { title: 'Donner avec le sourire', content: `La **ṣadaqa** = donner **de bon cœur** : un jouet, un vêtement, un sourire, une **aide**.` },
      mainContent: [
        { type: 'activity', title: 'Boîte de partage', content: `Prépare une petite **boîte** pour rassembler ce que tu veux **donner**.` },
        { type: 'exercise', title: 'Je liste', content: `Note **3 façons** d’aider aujourd’hui.` },
        { type: 'summary', title: 'Récap', content: `Donner = **faire plaisir** à Allah et aux gens.` }
      ],
      conclusion: { summary: 'Tu sais ce qu’est la ṣadaqa.', keyTakeaways: ['Donner','Aider','Sincérité'], nextSteps: ['Découvrir **Ramadan** (leçon 10)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Une forme de ṣadaqa peut être…', type: 'multiple-choice', options: ['Crier','Aider un camarade'], correctAnswer: 'Aider un camarade', explanation: 'Aide = sadaqa', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['fiqh','n1','sadaqa'] }
  },

  'fiqh-n1-fondamentaux-10': {
    slug: 'fiqh-n1-fondamentaux-10',
    title: 'Ramadan & jeûne (ṣiyâm) — découvrir le mois béni',
    summary: 'Connaître le mois de **Ramadan**, le **jeûne** (pour les grands) et ce que l’enfant peut faire : bonnes actions, suḥûr/iftâr en famille.',
    level: 'n1-fondamentaux',
    subject: 'Fiqh (Jurisprudence)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: ['fiqh-n1-fondamentaux-09'],
    learningObjectives: ['Dire que le jeûne est pour les grands', 'Participer avec de bonnes actions', 'Connaître suḥûr/iftâr (repas)'],
    keywords: ['ramadan','jeûne','siyam'],
    sources: [ { title: 'Référentiel interne Fiqh N1 — Ramadan', url: 'https://example.com/fiqh-n1', type: 'website', description: 'Notions enfantines' } ],
    body: {
      introduction: { title: 'Un mois spécial', content: `En **Ramadan**, les grands **jeûnent** du lever au coucher du soleil. L’enfant **apprend** et fait **beaucoup de bonnes actions**.` },
      mainContent: [
        { type: 'example', title: 'Moments du jour', content: `**Suḥûr** (avant l’aube) — **Iftâr** (rupture du jeûne au coucher du soleil).` },
        { type: 'activity', title: 'Calendrier de bonnes actions', content: `Chaque jour : **prière**, **aide**, **lecture**, **sourire**.` },
        { type: 'summary', title: 'Récap', content: `Ramadan = **efforts** + **joie** en famille.` }
      ],
      conclusion: { summary: 'Tu sais ce qu’on fait en Ramadan.', keyTakeaways: ['Jeûne (pour grands)','Bonnes actions'], nextSteps: ['Vendredi & Jumu‘a (leçon 11)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Qui doit jeûner le Ramadan ?', type: 'multiple-choice', options: ['Tous les enfants','Les grands (adultes)'], correctAnswer: 'Les grands (adultes)', explanation: 'L’enfant apprend et participe autrement', points: 10 } ], passingScore: 80, timeLimit: 7 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['fiqh','n1','ramadan'] }
  },

  'fiqh-n1-fondamentaux-11': {
    slug: 'fiqh-n1-fondamentaux-11',
    title: 'Vendredi (Jumu‘a) — un jour spécial',
    summary: 'Découvrir le **vendredi** : prière en groupe à la mosquée pour les grands, bonnes manières et propreté particulière.',
    level: 'n1-fondamentaux',
    subject: 'Fiqh (Jurisprudence)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 14,
    isLocked: false,
    prerequisites: ['fiqh-n1-fondamentaux-10'],
    learningObjectives: ['Dire que le vendredi est spécial', 'Citer 2 adab du vendredi', 'Se préparer proprement'],
    keywords: ['vendredi','jumu‘a','adab'],
    sources: [ { title: 'Référentiel interne Fiqh N1 — Jumu‘a', url: 'https://example.com/fiqh-n1', type: 'website', description: 'Rappels N1' } ],
    body: {
      introduction: { title: 'Le jour béni', content: `Le **vendredi**, on se **prépare** bien : propreté, beaux **vêtements**, prière à la **mosquée** pour les grands.` },
      mainContent: [
        { type: 'example', title: 'Adab du vendredi', content: `Être **propre**, arriver **à l’heure**, écouter **calmement**.` },
        { type: 'activity', title: 'Je me prépare', content: `Prépare tes **vêtements propres** la veille.` },
        { type: 'summary', title: 'Récap', content: `Vendredi = **respect** et **joie**.` }
      ],
      conclusion: { summary: 'Tu connais la Jumu‘a.', keyTakeaways: ['Propreté','Ponctualité','Écoute'], nextSteps: ['Projet N1 (leçon 12)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Le vendredi, on…', type: 'multiple-choice', options: ['Fait du bruit à la mosquée','Écoute calmement'], correctAnswer: 'Écoute calmement', explanation: 'Adab du vendredi', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['fiqh','n1','vendredi'] }
  },

  'fiqh-n1-fondamentaux-12': {
    slug: 'fiqh-n1-fondamentaux-12',
    title: 'Projet & Évaluation N1 — « Je me prépare à prier »',
    summary: 'Réaliser une **affiche** : propreté, wudû’, qibla, gestes, formules. Puis quiz final sur les notions-clés.',
    level: 'n1-fondamentaux',
    subject: 'Fiqh (Jurisprudence)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: [
      'fiqh-n1-fondamentaux-01','fiqh-n1-fondamentaux-02','fiqh-n1-fondamentaux-03','fiqh-n1-fondamentaux-04','fiqh-n1-fondamentaux-05','fiqh-n1-fondamentaux-06','fiqh-n1-fondamentaux-07','fiqh-n1-fondamentaux-08','fiqh-n1-fondamentaux-09','fiqh-n1-fondamentaux-10','fiqh-n1-fondamentaux-11'
    ],
    learningObjectives: ['Organiser les étapes', 'Expliquer son affiche', 'Réussir le quiz final'],
    keywords: ['projet','évaluation','prière'],
    sources: [ { title: 'Référentiel interne Fiqh N1 — Synthèse', url: 'https://example.com/fiqh-n1', type: 'website', description: 'Checklist finale' } ],
    body: {
      introduction: { title: 'Consigne du projet', content: `Crée une **affiche** : 1) **Propreté** 2) **Wudû’** 3) **Qibla** 4) **Gestes** 5) **Formules**.` },
      mainContent: [
        { type: 'concept', title: 'Checklist', content: `Tout cocher : ✔ Propreté ✔ Wudû’ ✔ Qibla ✔ Gestes ✔ Formules.` },
        { type: 'activity', title: 'Je présente', content: `Explique ton affiche en **2 minutes** à quelqu’un.` },
        { type: 'summary', title: 'Bravo 🎉', content: `Tu valides **Fiqh N1** !` }
      ],
      conclusion: { summary: 'Niveau N1 terminé.', keyTakeaways: ['Ṭahâra','Wudû’','Ṣalât','Adab'], nextSteps: ['Passer au **N2** (approfondir la prière et la purification)'], additionalResources: [ { title: 'Modèle d’affiche', description: 'Gabarit à imprimer', url: 'https://example.com/fiqh-n1' } ] }
    },
    assessment: {
      quiz: [
        { question: 'La **qibla** est…', type: 'multiple-choice', options: ['La direction de la Ka‘ba','Le tapis de prière'], correctAnswer: 'La direction de la Ka‘ba', explanation: 'Orientation de la prière', points: 10 },
        { question: 'Avant de prier, je fais…', type: 'multiple-choice', options: ['Rien','Le wudû’ si besoin'], correctAnswer: 'Le wudû’ si besoin', explanation: 'Préparation', points: 10 }
      ],
      passingScore: 80,
      timeLimit: 18
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['fiqh','n1','évaluation'] }
  }
}
