import { Lesson } from './lessons'

export const allLessonsSira: Record<string, Lesson> = {
  'sira-n1-fondamentaux-01': {
    slug: 'sira-n1-fondamentaux-01',
    title: 'Qui est le Prophète Muhammad ﷺ ? — Présentation',
    summary: 'Découvrir simplement qui est Muhammad ﷺ : le dernier Messager, envoyé par Allah avec un message de bonté et de vérité.',
    level: 'n1-fondamentaux',
    subject: 'Sîra (Biographie du Prophète ﷺ)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 15,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      'Dire que Muhammad ﷺ est le dernier Messager',
      'Situer La Mecque comme ville de naissance',
      'Citer deux qualités : honnêteté et miséricorde'
    ],
    keywords: ['sira','Muhammad','Prophète','Mecque','message'],
    sources: [
      { title: 'Référentiel interne Sîra N1', url: 'https://example.com/sira-n1', type: 'website', description: 'Progression GrowSavoir — niveau enfants' }
    ],
    body: {
      introduction: {
        title: 'Le dernier Messager',
        content: `Muhammad ﷺ est le **dernier Messager** d’Allah. Il est né à **La Mecque**. Son message appelle à **adorer Allah** et à être **juste et bienveillant**.`
      },
      mainContent: [
        { type: 'concept', title: 'Un modèle', content: `Le Prophète ﷺ est un **exemple** pour nous : il disait la **vérité** et aidait les gens.` },
        { type: 'example', title: 'Deux qualités', content: `• **Honnêteté** (al-Amîn — le digne de confiance) • **Douceur** avec les enfants.` },
        { type: 'activity', title: 'Je retiens', content: `Complète : Muhammad ﷺ est le **dernier** ________ d’Allah.` },
        { type: 'summary', title: 'Récap', content: `Je sais qui est le Prophète ﷺ et quelles sont ses **qualités**.` }
      ],
      conclusion: {
        summary: 'Tu peux présenter en une phrase qui est le Prophète ﷺ.',
        keyTakeaways: ['Dernier Messager','Mecque','Qualités'],
        nextSteps: ['Découvrir sa **naissance** et son **enfance** (leçon 2)'],
        additionalResources: [ { title: 'Affiche « Qui est le Prophète ﷺ ? »', description: 'Mémo illustré', url: 'https://example.com/sira-n1' } ]
      }
    },
    assessment: {
      quiz: [ { question: 'Muhammad ﷺ est…', type: 'multiple-choice', options: ['Un roi','Le dernier Messager'], correctAnswer: 'Le dernier Messager', explanation: 'Croyance de base', points: 10 } ],
      passingScore: 80,
      timeLimit: 6
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sira','n1','présentation'] }
  },

  'sira-n1-fondamentaux-02': {
    slug: 'sira-n1-fondamentaux-02',
    title: 'Naissance et enfance — Amina, ʿAbd al-Muṭṭalib, Ḥalîma',
    summary: 'Connaître des éléments simples de la naissance et de l’enfance : famille proche et nourrice Ḥalîma.',
    level: 'n1-fondamentaux',
    subject: 'Sîra (Biographie du Prophète ﷺ)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 16,
    isLocked: false,
    prerequisites: ['sira-n1-fondamentaux-01'],
    learningObjectives: ['Citer le nom de sa maman (Amina)', 'Dire qu’il a été allaité par Ḥalîma', 'Situer la Mecque comme lieu de naissance'],
    keywords: ['naissance','enfance','Amina','Halima','Mecque'],
    sources: [ { title: 'Référentiel interne Sîra N1 — Enfance', url: 'https://example.com/sira-n1', type: 'website', description: 'Notions adaptées enfants' } ],
    body: {
      introduction: { title: 'Ses débuts', content: `Le Prophète ﷺ est né à **La Mecque**. Sa maman s’appelait **Amina**. Sa famille s’occupait bien de lui. Il a été allaité par **Ḥalîma**.` },
      mainContent: [
        { type: 'example', title: 'Entourage', content: `Son grand-père **ʿAbd al-Muṭṭalib** aimait beaucoup l’enfant.` },
        { type: 'activity', title: 'Je relie', content: `Relie : **Amina** → maman ; **Ḥalîma** → nourrice ; **Mecque** → ville.` },
        { type: 'summary', title: 'Récap', content: `Naissance à **La Mecque** ; maman **Amina** ; nourrice **Ḥalîma**.` }
      ],
      conclusion: { summary: 'Tu connais l’enfance du Prophète ﷺ (version N1).', keyTakeaways: ['Mecque','Amina','Ḥalîma'], nextSteps: ['La **jeunesse** et le surnom **al-Amîn** (leçon 3)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Le Prophète ﷺ est né à…', type: 'multiple-choice', options: ['Médine','La Mecque'], correctAnswer: 'La Mecque', explanation: 'Ville de naissance', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sira','n1','naissance'] }
  },

  'sira-n1-fondamentaux-03': {
    slug: 'sira-n1-fondamentaux-03',
    title: 'Jeunesse — « al-Amîn » le digne de confiance',
    summary: 'Découvrir la jeunesse du Prophète ﷺ : honnêteté, travail, aide aux gens ; surnom « al-Amîn ». ',
    level: 'n1-fondamentaux',
    subject: 'Sîra (Biographie du Prophète ﷺ)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 16,
    isLocked: false,
    prerequisites: ['sira-n1-fondamentaux-02'],
    learningObjectives: ['Expliquer le sens de « al-Amîn »', 'Donner un exemple d’honnêteté', 'Imiter une bonne action'],
    keywords: ['jeunesse','al-amin','honnêteté','travail'],
    sources: [ { title: 'Référentiel interne Sîra N1 — Jeunesse', url: 'https://example.com/sira-n1', type: 'website', description: 'Exemples accessibles' } ],
    body: {
      introduction: { title: 'Digne de confiance', content: `On appelait le Prophète ﷺ **al-Amîn** : le **digne de confiance**. Il **disait la vérité** et **gardait les dépôts**.` },
      mainContent: [
        { type: 'example', title: 'Bon comportement', content: `Aider les voisins, ne pas **tricher**, rendre ce qu’on te confie.` },
        { type: 'activity', title: 'Je m’engage', content: `Aujourd’hui, je fais une action **honnête** (ex. rendre un objet prêté).` },
        { type: 'summary', title: 'Récap', content: `Être **fiable** et **véridique** comme le Prophète ﷺ.` }
      ],
      conclusion: { summary: 'Tu connais le surnom « al-Amîn ».', keyTakeaways: ['Vérité','Confiance'], nextSteps: ['Mariage avec **Khadîja** (leçon 4)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: '« al-Amîn » veut dire…', type: 'multiple-choice', options: ['Fort','Digne de confiance'], correctAnswer: 'Digne de confiance', explanation: 'Qualité du Prophète ﷺ', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sira','n1','al-amin'] }
  },

  'sira-n1-fondamentaux-04': {
    slug: 'sira-n1-fondamentaux-04',
    title: 'Mariage avec Khadîja رضي الله عنها — une famille aimante',
    summary: 'Découvrir le mariage avec Khadîja, la confiance et le soutien ; construire une famille sur la bonté.',
    level: 'n1-fondamentaux',
    subject: 'Sîra (Biographie du Prophète ﷺ)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 15,
    isLocked: false,
    prerequisites: ['sira-n1-fondamentaux-03'],
    learningObjectives: ['Nommer Khadîja', 'Dire qu’elle a soutenu le Prophète ﷺ', 'Citer une valeur familiale : bonté/entraide'],
    keywords: ['khadija','famille','soutien'],
    sources: [ { title: 'Référentiel interne Sîra N1 — Famille', url: 'https://example.com/sira-n1', type: 'website', description: 'Notions familiales' } ],
    body: {
      introduction: { title: 'Une épouse fidèle', content: `**Khadîja** a **épousé** le Prophète ﷺ. Elle était **bienveillante** et l’a **soutenu** toute sa vie.` },
      mainContent: [
        { type: 'example', title: 'Soutien', content: `Écouter, encourager, **aider** : de belles valeurs dans une famille.` },
        { type: 'activity', title: 'Je remercie', content: `Écris un petit **merci** à quelqu’un qui t’aide.` },
        { type: 'summary', title: 'Récap', content: `Khadîja : un **grand soutien** pour le Prophète ﷺ.` }
      ],
      conclusion: { summary: 'Tu connais Khadîja رضي الله عنها.', keyTakeaways: ['Bienveillance','Soutien'], nextSteps: ['La **Révélation** (leçon 5)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Khadîja était…', type: 'multiple-choice', options: ['Indifférente','Un grand soutien'], correctAnswer: 'Un grand soutien', explanation: 'Qualité de Khadîja', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sira','n1','khadija'] }
  },

  'sira-n1-fondamentaux-05': {
    slug: 'sira-n1-fondamentaux-05',
    title: 'La Révélation — Grotte de Ḥirâ’ et Jibrîl عليه السلام',
    summary: 'Comprendre que la Révélation vient d’Allah par l’Ange Jibrîl ; première sourate révélée « Lis ! ». ',
    level: 'n1-fondamentaux',
    subject: 'Sîra (Biographie du Prophète ﷺ)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: ['sira-n1-fondamentaux-04'],
    learningObjectives: ['Dire que le Coran vient d’Allah', 'Nommer l’Ange Jibrîl', 'Expliquer simplement « Lis ! »'],
    keywords: ['révélation','Jibril','Hira','Lis'],
    sources: [ { title: 'Référentiel interne Sîra N1 — Révélation', url: 'https://example.com/sira-n1', type: 'website', description: 'Événement fondateur' } ],
    body: {
      introduction: { title: 'Début de la mission', content: `Dans la grotte de **Ḥirâ’**, l’Ange **Jibrîl** a apporté la Révélation d’Allah au Prophète ﷺ : « **Lis !** ». C’est le début du **Coran**.` },
      mainContent: [
        { type: 'example', title: 'Avec douceur', content: `Le Prophète ﷺ a reçu l’aide et le **réconfort** de Khadîja.` },
        { type: 'activity', title: 'Mot-clé', content: `Entoure le mot : **Lis** (Iqra).` },
        { type: 'summary', title: 'Récap', content: `La Révélation vient d’**Allah** par **Jibrîl**.` }
      ],
      conclusion: { summary: 'Tu sais comment la Révélation a commencé.', keyTakeaways: ['Iqra','Jibrîl','Coran'], nextSteps: ['Les **premiers musulmans** (leçon 6)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Qui a apporté la Révélation ?', type: 'multiple-choice', options: ['Mikâ’îl','Jibrîl'], correctAnswer: 'Jibrîl', explanation: 'Ange de la Révélation', points: 10 } ], passingScore: 80, timeLimit: 7 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sira','n1','revelation'] }
  },

  'sira-n1-fondamentaux-06': {
    slug: 'sira-n1-fondamentaux-06',
    title: 'Les premiers musulmans — Khadîja, Abû Bakr, ʿAlî, Zayd',
    summary: 'Découvrir les premiers croyants qui ont soutenu le Prophète ﷺ et cru en son message.',
    level: 'n1-fondamentaux',
    subject: 'Sîra (Biographie du Prophète ﷺ)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 16,
    isLocked: false,
    prerequisites: ['sira-n1-fondamentaux-05'],
    learningObjectives: ['Citer 3 premiers croyants', 'Dire qu’ils ont soutenu le Prophète ﷺ', 'Imiter leur courage par de bonnes actions'],
    keywords: ['premiers musulmans','abubakr','ali','zayd'],
    sources: [ { title: 'Référentiel interne Sîra N1 — Premiers croyants', url: 'https://example.com/sira-n1', type: 'website', description: 'Repères simples' } ],
    body: {
      introduction: { title: 'Les premiers soutiens', content: `**Khadîja**, **Abû Bakr**, **ʿAlî**, **Zayd** ont cru au message. Ils ont **aidé** et **soutenu** le Prophète ﷺ.` },
      mainContent: [
        { type: 'example', title: 'Aider la vérité', content: `Parler gentiment, encourager, **partager** le bien.` },
        { type: 'activity', title: 'Je m’inspire', content: `Écris le nom d’un **premier croyant** et une **qualité**.` },
        { type: 'summary', title: 'Récap', content: `Ils ont été **courageux** et **fidèles**.` }
      ],
      conclusion: { summary: 'Tu connais les premiers croyants.', keyTakeaways: ['Soutien','Courage'], nextSteps: ['Patience à La Mecque (leçon 7)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Faisait-il partie des premiers croyants ?', type: 'multiple-choice', options: ['Abû Bakr','Pharaon'], correctAnswer: 'Abû Bakr', explanation: 'Compagnon proche', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sira','n1','premiers'] }
  },

  'sira-n1-fondamentaux-07': {
    slug: 'sira-n1-fondamentaux-07',
    title: 'Patience et confiance — difficultés à La Mecque',
    summary: 'Comprendre que le Prophète ﷺ a rencontré des difficultés, mais il a été patient et confiant en Allah.',
    level: 'n1-fondamentaux',
    subject: 'Sîra (Biographie du Prophète ﷺ)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 15,
    isLocked: false,
    prerequisites: ['sira-n1-fondamentaux-06'],
    learningObjectives: ['Dire que la patience est importante', 'Donner un exemple de patience', 'Chercher l’aide d’Allah par la prière'],
    keywords: ['patience','mecque','confiance'],
    sources: [ { title: 'Référentiel interne Sîra N1 — Patience', url: 'https://example.com/sira-n1', type: 'website', description: 'Approche bienveillante' } ],
    body: {
      introduction: { title: 'Face aux difficultés', content: `À **La Mecque**, certaines personnes ont refusé le message. Le Prophète ﷺ a été **patient** et a mis sa **confiance** en Allah.` },
      mainContent: [
        { type: 'activity', title: 'Je pratique', content: `Quand je suis **frustré**, je respire et je dis : « **Astaghfirullah** » (je demande pardon) et je **prie**.` },
        { type: 'summary', title: 'Récap', content: `**Patience** + **confiance** = force du croyant.` }
      ],
      conclusion: { summary: 'Tu peux appliquer la patience dans ta vie.', keyTakeaways: ['Sabr','Confiance'], nextSteps: ['Voyage à **Ṭâ’if** et bienveillance (leçon 8)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Que faire quand c’est difficile ?', type: 'multiple-choice', options: ['Se décourager','Être patient et demander l’aide d’Allah'], correctAnswer: 'Être patient et demander l’aide d’Allah', explanation: 'Sabr + tawakkul', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sira','n1','patience'] }
  },

  'sira-n1-fondamentaux-08': {
    slug: 'sira-n1-fondamentaux-08',
    title: 'Voyage à Ṭâ’if — répondre par la douceur',
    summary: 'Apprendre que le Prophète ﷺ a répondu avec douceur et invocation, même quand les gens étaient durs.',
    level: 'n1-fondamentaux',
    subject: 'Sîra (Biographie du Prophète ﷺ)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 15,
    isLocked: false,
    prerequisites: ['sira-n1-fondamentaux-07'],
    learningObjectives: ['Citer Ṭâ’if comme épisode de la sîra', 'Dire que le Prophète ﷺ a invoqué pour le bien', 'Imiter la douceur'],
    keywords: ['taif','douceur','invocation'],
    sources: [ { title: 'Référentiel interne Sîra N1 — Ṭâ’if', url: 'https://example.com/sira-n1', type: 'website', description: 'Épisode niveau enfant' } ],
    body: {
      introduction: { title: 'Douceur et pardon', content: `À **Ṭâ’if**, des gens ont été **durs**. Le Prophète ﷺ a **invoqué** Allah et a montré de la **douceur**.` },
      mainContent: [
        { type: 'activity', title: 'Je choisis la douceur', content: `Quand quelqu’un est dur, je **réponds calmement** et je dis une **bonne parole**.` },
        { type: 'summary', title: 'Récap', content: `La **douceur** change les cœurs.` }
      ],
      conclusion: { summary: 'Tu connais l’épisode de Ṭâ’if.', keyTakeaways: ['Douceur','Invocation'], nextSteps: ['La **Hijra** vers Médine (leçon 9)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'À Ṭâ’if, le Prophète ﷺ a répondu avec…', type: 'multiple-choice', options: ['Colère','Douceur et invocation'], correctAnswer: 'Douceur et invocation', explanation: 'Exemple de patience', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sira','n1','taif'] }
  },

  'sira-n1-fondamentaux-09': {
    slug: 'sira-n1-fondamentaux-09',
    title: 'La Hijra — partir à Médine',
    summary: 'Comprendre simplement la migration (Hijra) vers Médine : nouvelle ville, frères et sœurs en foi (Anṣâr).',
    level: 'n1-fondamentaux',
    subject: 'Sîra (Biographie du Prophète ﷺ)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 17,
    isLocked: false,
    prerequisites: ['sira-n1-fondamentaux-08'],
    learningObjectives: ['Dire que la Hijra mène à Médine', 'Connaître les Anṣâr (accueillants)', 'Apprécier l’entraide'],
    keywords: ['hijra','medine','ansar','entraide'],
    sources: [ { title: 'Référentiel interne Sîra N1 — Hijra', url: 'https://example.com/sira-n1', type: 'website', description: 'Migration vers Médine' } ],
    body: {
      introduction: { title: 'Changer de ville', content: `Le Prophète ﷺ a quitté **La Mecque** pour **Médine**. Les **Anṣâr** (habitants) ont **accueilli** les nouveaux arrivants.` },
      mainContent: [
        { type: 'example', title: 'Fraternité', content: `Partager **repas**, **maison**, **sourire** : entraide.` },
        { type: 'activity', title: 'Je partage', content: `Aujourd’hui, je partage quelque chose avec un(e) camarade.` },
        { type: 'summary', title: 'Récap', content: `**Hijra** = nouvelles **opportunités** et **fraternité**.` }
      ],
      conclusion: { summary: 'Tu sais ce qu’est la Hijra.', keyTakeaways: ['Médine','Anṣâr','Partage'], nextSteps: ['Vie à **Médine** (leçon 10)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'La Hijra, c’est aller de La Mecque à…', type: 'multiple-choice', options: ['Riyad','Médine'], correctAnswer: 'Médine', explanation: 'Nouvelle ville', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sira','n1','hijra'] }
  },

  'sira-n1-fondamentaux-10': {
    slug: 'sira-n1-fondamentaux-10',
    title: 'Vie à Médine — mosquée, fraternité, règles de vie',
    summary: 'Découvrir la construction de la mosquée, la fraternité entre croyants et des règles de bonne vie en communauté.',
    level: 'n1-fondamentaux',
    subject: 'Sîra (Biographie du Prophète ﷺ)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: ['sira-n1-fondamentaux-09'],
    learningObjectives: ['Dire que la mosquée est le centre de la ville', 'Citer un exemple de fraternité', 'Respecter les règles de vie ensemble'],
    keywords: ['medine','mosquée','fraternité','règles'],
    sources: [ { title: 'Référentiel interne Sîra N1 — Médine', url: 'https://example.com/sira-n1', type: 'website', description: 'Vie de la première communauté' } ],
    body: {
      introduction: { title: 'Construire ensemble', content: `À **Médine**, le Prophète ﷺ et les compagnons ont **construit la mosquée**. On y **priait**, on **apprenait**, on **partageait**.` },
      mainContent: [
        { type: 'example', title: 'Règles simples', content: `Se **respecter**, dire **salâm**, **aider** les plus faibles.` },
        { type: 'activity', title: 'Acte de fraternité', content: `Écris une **action** pour rendre l’école plus **solidaire**.` },
        { type: 'summary', title: 'Récap', content: `Mosquée = **cœur** de la ville ; **fraternité** au quotidien.` }
      ],
      conclusion: { summary: 'Tu connais la vie à Médine.', keyTakeaways: ['Mosquée','Fraternité'], nextSteps: ['Qualités du Prophète ﷺ (leçon 11)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'La mosquée à Médine servait à…', type: 'multiple-choice', options: ['Dormir seulement','Prier, apprendre, partager'], correctAnswer: 'Prier, apprendre, partager', explanation: 'Centre de vie', points: 10 } ], passingScore: 80, timeLimit: 7 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sira','n1','medine'] }
  },

  'sira-n1-fondamentaux-11': {
    slug: 'sira-n1-fondamentaux-11',
    title: 'Qualités du Prophète ﷺ — miséricorde, justice, douceur',
    summary: 'Mettre en avant des qualités à imiter dans la vie de tous les jours : miséricorde, justice, douceur, vérité.',
    level: 'n1-fondamentaux',
    subject: 'Sîra (Biographie du Prophète ﷺ)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 17,
    isLocked: false,
    prerequisites: ['sira-n1-fondamentaux-10'],
    learningObjectives: ['Citer 3 qualités du Prophète ﷺ', 'Donner un exemple concret', 'S’engager à imiter une qualité'],
    keywords: ['qualités','miséricorde','justice','douceur'],
    sources: [ { title: 'Référentiel interne Sîra N1 — Qualités', url: 'https://example.com/sira-n1', type: 'website', description: 'Éducation du caractère' } ],
    body: {
      introduction: { title: 'Un caractère magnifique', content: `Le Prophète ﷺ était **miséricordieux**, **juste**, **doux**, et **véridique**.` },
      mainContent: [
        { type: 'activity', title: 'Je choisis une qualité', content: `Aujourd’hui, j’imite la **douceur** : je parle calmement et j’aide.` },
        { type: 'summary', title: 'Récap', content: `Imiter les **qualités** du Prophète ﷺ chaque jour.` }
      ],
      conclusion: { summary: 'Tu as choisi une qualité à imiter.', keyTakeaways: ['Douceur','Justice','Vérité'], nextSteps: ['Projet & évaluation (leçon 12)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Parmi ces qualités du Prophète ﷺ :', type: 'multiple-choice', options: ['Égoïsme','Miséricorde'], correctAnswer: 'Miséricorde', explanation: 'Exemple à suivre', points: 10 } ], passingScore: 80, timeLimit: 6 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sira','n1','qualites'] }
  },

  'sira-n1-fondamentaux-12': {
    slug: 'sira-n1-fondamentaux-12',
    title: 'Projet & Évaluation N1 — Frise de la sîra',
    summary: 'Construire une petite frise : naissance → jeunesse → révélation → premiers croyants → patience → Hijra → Médine → qualités ; puis quiz final.',
    level: 'n1-fondamentaux',
    subject: 'Sîra (Biographie du Prophète ﷺ)',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: [
      'sira-n1-fondamentaux-01','sira-n1-fondamentaux-02','sira-n1-fondamentaux-03','sira-n1-fondamentaux-04','sira-n1-fondamentaux-05','sira-n1-fondamentaux-06','sira-n1-fondamentaux-07','sira-n1-fondamentaux-08','sira-n1-fondamentaux-09','sira-n1-fondamentaux-10','sira-n1-fondamentaux-11'
    ],
    learningObjectives: ['Ordonner les étapes principales', 'Présenter la frise en 2 minutes', 'Valider les notions de base'],
    keywords: ['projet','frise','évaluation'],
    sources: [ { title: 'Référentiel interne Sîra N1 — Synthèse', url: 'https://example.com/sira-n1', type: 'website', description: 'Checklist finale' } ],
    body: {
      introduction: { title: 'Consignes', content: `Sur une **feuille**, dessine une **frise** avec 6 à 8 étapes de la sîra. Ajoute un **mot-clé** à chaque étape.` },
      mainContent: [
        { type: 'concept', title: 'Étapes possibles', content: `Naissance — Jeunesse (al-Amîn) — Révélation — Premiers croyants — Patience — Ṭâ’if — **Hijra** — **Médine** — Qualités.` },
        { type: 'activity', title: 'Je présente', content: `Explique ta frise en **2 minutes** à quelqu’un.` },
        { type: 'summary', title: 'Bravo 🎉', content: `Tu valides **Sîra N1** !` }
      ],
      conclusion: { summary: 'Niveau N1 terminé.', keyTakeaways: ['Révélation','Hijra','Qualités'], nextSteps: ['Passer au **N2** (approfondir)'], additionalResources: [ { title: 'Modèle de frise', description: 'Gabarit à imprimer', url: 'https://example.com/sira-n1' } ] }
    },
    assessment: {
      quiz: [
        { question: 'La Révélation a commencé dans…', type: 'multiple-choice', options: ['La grotte de Ḥirâ’','Une école'], correctAnswer: 'La grotte de Ḥirâ’', explanation: 'Début du Coran', points: 10 },
        { question: 'La Hijra mène à…', type: 'multiple-choice', options: ['Damas','Médine'], correctAnswer: 'Médine', explanation: 'Migration', points: 10 }
      ],
      passingScore: 80,
      timeLimit: 18
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sira','n1','projet'] }
  }
}
