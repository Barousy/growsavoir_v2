import { Lesson } from './lessons'

export const allLessonsFrancais: Record<string, Lesson> = {
  'francais-n1-fondamentaux-01': {
    slug: 'francais-n1-fondamentaux-01',
    title: "Alphabet & voyelles (a, e, i, o, u, y)",
    summary: "Découvrir l'alphabet français et les voyelles ; lire des syllabes simples.",
    level: 'n1-fondamentaux',
    subject: 'Langue Française',
    ageGroup: '6-8 ans',
    estimatedMinutes: 25,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      "Connaître l'alphabet (noms des lettres)",
      'Identifier les 6 voyelles a/e/i/o/u/y',
      'Lire des syllabes CV simples (ma, mi, mo…)',
      'Écrire quelques syllabes simples au son'
    ],
    keywords: ['alphabet', 'voyelles', 'lecture', 'CV', 'n1'],
    sources: [
      {
        title: 'Éduscol — Lecture au CP : premiers repères',
        url: 'https://eduscol.education.fr',
        type: 'website',
        description: 'Références officielles lecture/décodage'
      }
    ],
    body: {
      introduction: {
        title: "Bienvenue dans l'alphabet français",
        content: `En français, on lit de **gauche à droite**. L'alphabet comprend **26 lettres** : 6 **voyelles** (a, e, i, o, u, y) et des **consonnes**. Nous allons commencer par les voyelles et des syllabes **CV** (consonne + voyelle).`
      },
      mainContent: [
        {
          type: 'concept',
          title: 'Les 6 voyelles',
          content: `**a, e, i, o, u, y** — écoute et répète.
Exemples de syllabes : **ma, mi, mo** / **ta, ti, to** / **lu, la, li**.`
        },
        {
          type: 'example',
          title: 'Tableau de syllabes CV',
          content: `| Consonne | a | e | i | o | u | y |
|---|---|---|---|---|---|---|
| m | ma | me | mi | mo | mu | my |
| t | ta | te | ti | to | tu | ty |
| l | la | le | li | lo | lu | ly |`,
          examples: [
            { code: 'ma / mi / mo', title: 'Série m + voyelles', description: 'Lecture CV', explanation: 'On associe m + a/e/i/o/u/y' },
            { code: 'ta / ti / to', title: 'Série t + voyelles', description: 'Lecture CV', explanation: 'Même principe avec t' }
          ]
        },
        {
          type: 'activity',
          title: 'Je coche le bon son',
          content: `- [x] **ma** commence par **m**
- [ ] **ti** se lit **ta**
- [x] **lu** contient la voyelle **u**`
        },
        {
          type: 'exercise',
          title: 'Je lis et j’épelle',
          content: `Lis à voix haute : **ma, mi, mo, la, li, lo, ta, ti, to**.
Épelle les voyelles : **a, e, i, o, u, y**.`
        },
        {
          type: 'summary',
          title: 'À retenir',
          content: `26 lettres ; 6 voyelles. Lecture de syllabes **CV**.`
        }
      ],
      conclusion: {
        summary: `Bravo ! Tu connais les voyelles et tu sais lire des syllabes **CV**.`,
        keyTakeaways: ['Voyelles a/e/i/o/u/y', 'Syllabes CV lues'],
        nextSteps: ['Passer aux syllabes **CVC** (consonne-voyelle-consonne)'],
        additionalResources: [
          { title: 'Affiche des voyelles (PDF)', description: 'Support visuel à imprimer', url: 'https://eduscol.education.fr' },
          { title: 'Jeu de cartes syllabes', description: 'Associer consonnes et voyelles', url: 'https://eduscol.education.fr' }
        ]
      }
    },
    assessment: {
      quiz: [
        {
          question: 'Combien de voyelles principales en français ?',
          type: 'multiple-choice',
          options: ['4', '5', '6'],
          correctAnswer: '6',
          explanation: 'a, e, i, o, u, y',
          points: 10
        },
        {
          question: 'La syllabe **ma** est de type…',
          type: 'multiple-choice',
          options: ['CV', 'CVC'],
          correctAnswer: 'CV',
          explanation: 'Consonne + voyelle',
          points: 10
        }
      ],
      passingScore: 80,
      timeLimit: 20
    },
    metadata: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author: 'GrowSavoir',
      version: '1.1.0',
      tags: ['français', 'n1', 'alphabet', 'voyelles']
    }
  },

  'francais-n1-fondamentaux-02': {
    slug: 'francais-n1-fondamentaux-02',
    title: 'Syllabes CVC (fermer la syllabe)',
    summary: 'Lire des syllabes CVC et des mots courts (mal, sol, lit…).',
    level: 'n1-fondamentaux',
    subject: 'Langue Française',
    ageGroup: '6-8 ans',
    estimatedMinutes: 25,
    isLocked: false,
    prerequisites: ['francais-n1-fondamentaux-01'],
    learningObjectives: [
      'Lire des syllabes CVC',
      'Différencier CV et CVC',
      'Lire des mots courts du quotidien',
      "Coder à l'écrit quelques CVC"
    ],
    keywords: ['lecture', 'CVC', 'débutant'],
    sources: [
      { title: 'Éduscol — Lecture/décodage', url: 'https://eduscol.education.fr', type: 'website', description: 'Repères officiels' }
    ],
    body: {
      introduction: {
        title: 'Fermer la syllabe',
        content: `Une syllabe **CVC** se termine par une **consonne** : **mal, sol, lit**. On garde la voyelle courte et nette.`
      },
      mainContent: [
        { type: 'concept', title: 'CV vs CVC', content: `**ma** (CV) ≠ **mal** (CVC). On **ajoute** une consonne finale.` },
        { type: 'example', title: 'Tableau CVC', content: `| CVC | Lecture |
|---|---|
| mal | mal |
| sol | sol |
| lit | lit |
| mer | mer |`, examples: [ { code: 'mal / sol / lit', title: 'CVC simples', description: 'Lecture fermée', explanation: 'Consonne finale audible' } ] },
        { type: 'activity', title: 'Vrai/Faux', content: `- [x] **mal** est une syllabe **CVC**
- [ ] **ma** est CVC
- [x] **sol** se termine par une consonne` },
        { type: 'exercise', title: 'Je lis 12 CVC', content: `mal, sel, sol, lit, mer, cul, tul, pal, bol, fil, tas, mus` },
        { type: 'summary', title: 'Récap', content: `CVC = voyelle **fermée** par une consonne.` }
      ],
      conclusion: {
        summary: 'Tu sais lire **CVC**. On ajoute des sons fréquents.',
        keyTakeaways: ['CV ≠ CVC', 'lecture de mots courts'],
        nextSteps: ['Aller vers **sons fréquents** (ch, ou, oi)'],
        additionalResources: [ { title: 'Fiche CVC à imprimer', description: 'Liste d’entraînement', url: 'https://eduscol.education.fr' } ]
      }
    },
    assessment: {
      quiz: [
        { question: 'Quelle forme est CVC ?', type: 'multiple-choice', options: ['ma', 'mal'], correctAnswer: 'mal', explanation: 'Consonne finale', points: 10 },
        { question: 'Dans **sol**, la dernière lettre est…', type: 'multiple-choice', options: ['voyelle','consonne'], correctAnswer: 'consonne', explanation: 'CVC', points: 10 }
      ],
      passingScore: 80,
      timeLimit: 20
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.1.0', tags: ['français', 'n1', 'CVC'] }
  },

  'francais-n1-fondamentaux-03': {
    slug: 'francais-n1-fondamentaux-03',
    title: 'Sons fréquents : ch / ou / oi',
    summary: 'Lire et reconnaître ch / ou / oi dans des mots simples.',
    level: 'n1-fondamentaux',
    subject: 'Langue Française',
    ageGroup: '6-8 ans',
    estimatedMinutes: 26,
    isLocked: false,
    prerequisites: ['francais-n1-fondamentaux-02'],
    learningObjectives: [
      'Reconnaître et lire ch / ou / oi',
      'Lire des mots fréquents avec ces sons',
      'Écrire quelques exemples',
      'Discriminer à l’oral ces trois sons'
    ],
    keywords: ['sons', 'digrammes', 'ou', 'oi', 'ch'],
    sources: [ { title: 'CNED — Lire/écrire au CP', url: 'https://www.cned.fr', type: 'website', description: 'Ressources pédagogiques' } ],
    body: {
      introduction: { title: 'Trois sons utiles', content: `**ch** → /ʃ/ (cha), **ou** → /u/ (loup), **oi** → /wa/ (roi).` },
      mainContent: [
        { type: 'example', title: 'Mots modèles', content: `**chat**, **loup**, **roi**, **chou**, **bois**.`, examples: [ { code: 'chat / loup / roi', title: 'Références', description: 'ch / ou / oi', explanation: 'Associer son/graphie' } ] },
        { type: 'activity', title: 'Je coche', content: `- [x] **ch** dans **chou**
- [x] **ou** dans **loup**
- [x] **oi** dans **bois**` },
        { type: 'exercise', title: 'Je lis puis j’écris', content: `Lis : **chat, loup, roi**. Écris 3 mots avec **oi**.` },
        { type: 'summary', title: 'Récap', content: `**ch/ou/oi** repérés et lus.` }
      ],
      conclusion: { summary: 'Tu lis **ch, ou, oi**.', keyTakeaways: ['ch = /ʃ/', 'ou = /u/', 'oi = /wa/'], nextSteps: ['c/ç/ss et g/gu/ge'], additionalResources: [ { title: 'Affiche sons ch/ou/oi', description: 'Mémo visuel', url: 'https://www.cned.fr' } ] }
    },
    assessment: { quiz: [ { question: 'Dans **roi**, le son est…', type: 'multiple-choice', options: ['/ʁo/', '/wa/'], correctAnswer: '/wa/', explanation: 'oi → /wa/', points: 10 }, { question: 'Coche un mot avec **ch**', type: 'multiple-choice', options: ['lait','chou'], correctAnswer: 'chou', explanation: 'ch → /ʃ/', points: 10 } ], passingScore: 80, timeLimit: 20 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.1.0', tags: ['français','n1','sons'] }
  },

  'francais-n1-fondamentaux-04': {
    slug: 'francais-n1-fondamentaux-04',
    title: 'c/ç/ss et g/ge/gu — sons [s]/[ʒ]/[g]',
    summary: 'Lire le son [s] avec c/ç/ss et distinguer g dur/g doux (ge/gi).',
    level: 'n1-fondamentaux',
    subject: 'Langue Française',
    ageGroup: '6-8 ans',
    estimatedMinutes: 26,
    isLocked: false,
    prerequisites: ['francais-n1-fondamentaux-03'],
    learningObjectives: [ 'Lire [s] avec c/ç/ss', 'Lire g dur [g] vs g doux [ʒ]', 'Appliquer sur des mots fréquents', 'Coder 4 à 5 mots' ],
    keywords: ['cédille','ss','ge','gi','orthographe'],
    sources: [ { title: 'Éduscol — Étude du code', url: 'https://eduscol.education.fr', type: 'website', description: 'Repères sons/graphies' } ],
    body: {
      introduction: { title: 'Graphies courantes', content: `- **c** devant e/i/y → [s] (ex. **ce**, **ici**).
- **ç** → [s] (ex. **garçon**).
- **ss** → [s] (ex. **classe**).
- **g** devant e/i/y → [ʒ] (**genou**, **girafe**).
- **ga/go/gu** → [g] (**gâteau**, **gomme**, **guitare**).` },
      mainContent: [
        { type: 'example', title: 'Mots modèles', content: `**classe, garçon, glace, genou, girafe, guitare**.`, examples: [ { code: 'classe / garçon / glace', title: 'Repérage [s]', description: 'c/ç/ss', explanation: 'Trois façons pour [s]' } ] },
        { type: 'activity', title: 'Classe le son', content: `Coche **[s]** ou **[ʒ]/[g]** pour : **ce**, **ça**, **tasse**, **girafe**, **gomme**.` },
        { type: 'exercise', title: 'Dictée flash', content: `Écris 6 mots : **classe, garçon, glace, genou, girafe, guitare**.` },
        { type: 'summary', title: 'Récap', content: `c/ç/ss donnent souvent **[s]** ; **g** varie selon la voyelle suivante.` }
      ],
      conclusion: { summary: 'Tu sais repérer **[s]** et **[g]/[ʒ]**.', keyTakeaways: ['c/ç/ss → [s]','ge/gi → [ʒ]','ga/go/gu → [g]'], nextSteps: ['Voyelles nasales simples'], additionalResources: [ { title: 'Fiche sons c/ç/ss & g', description: 'Mémo pratique', url: 'https://eduscol.education.fr' } ] }
    },
    assessment: { quiz: [ { question: 'Le **ç** de garçon se lit…', type: 'multiple-choice', options: ['[k]','[s]'], correctAnswer: '[s]', explanation: 'cédille → [s]', points: 10 }, { question: 'Dans **girafe**, le **g** se lit…', type: 'multiple-choice', options: ['[g]','[ʒ]'], correctAnswer: '[ʒ]', explanation: 'g + i/e → [ʒ]', points: 10 } ], passingScore: 80, timeLimit: 20 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.1.0', tags: ['français','n1','sons','cédille'] }
  },

  'francais-n1-fondamentaux-05': {
    slug: 'francais-n1-fondamentaux-05',
    title: 'Voyelles nasales (an/en/on/in) — découverte',
    summary: 'Reconnaître an/en/on/in dans des mots courants (sans exceptions).',
    level: 'n1-fondamentaux',
    subject: 'Langue Française',
    ageGroup: '6-8 ans',
    estimatedMinutes: 24,
    isLocked: false,
    prerequisites: ['francais-n1-fondamentaux-04'],
    learningObjectives: [ 'Identifier les nasales an/en/on/in', 'Lire des mots simples avec ces sons', 'Repérer la lettre muette n/m en fin' ],
    keywords: ['nasales','lecture','débutant'],
    sources: [ { title: 'CNED — Sons du français', url: 'https://www.cned.fr', type: 'website', description: 'Découverte phonologique' } ],
    body: {
      introduction: { title: 'Respire par le nez…', content: `Les **nasales** se prononcent en **faisant passer l’air par le nez** : **an/en/on/in**.` },
      mainContent: [
        { type: 'example', title: 'Mots modèles', content: `**maman** (an), **dent** (en), **bon** (on), **lapin** (in).`, examples: [ { code: 'maman / dent / bon / lapin', title: 'Repérage', description: 'an / en / on / in', explanation: 'Prononciation nasale' } ] },
        { type: 'activity', title: 'Je pointe le son', content: `Place **an/en/on/in** sous : **chant, vent, ballon, lapin**.` },
        { type: 'exercise', title: 'Lecture guidée', content: `Lis 10 mots : **chant, vent, bonbon, lapin, maison, enfant, pantalon, dimanche, menton, ballon**.` },
        { type: 'summary', title: 'Récap', content: `Tu reconnais **an/en/on/in** dans des mots courants.` }
      ],
      conclusion: { summary: 'Les nasales sont repérées.', keyTakeaways: ['an/en/on/in reconnus'], nextSteps: ['Accents (é/è/ê) & diacritiques'], additionalResources: [ { title: 'Affiche nasales', description: 'Mémo images', url: 'https://www.cned.fr' } ] }
    },
    assessment: { quiz: [ { question: 'Dans **lapin**, le son final est…', type: 'multiple-choice', options: ['on','in'], correctAnswer: 'in', explanation: 'lap**in**', points: 10 } ], passingScore: 80, timeLimit: 20 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.1.0', tags: ['français','n1','nasales'] }
  },

  'francais-n1-fondamentaux-06': {
    slug: 'francais-n1-fondamentaux-06',
    title: 'Accents (é/è/ê) et signes (ç, ï, ë)',
    summary: 'Lire et écrire correctement les accents et quelques signes.',
    level: 'n1-fondamentaux',
    subject: 'Langue Française',
    ageGroup: '6-8 ans',
    estimatedMinutes: 24,
    isLocked: false,
    prerequisites: ['francais-n1-fondamentaux-05'],
    learningObjectives: [ 'Reconnaître é/è/ê', 'Utiliser ç, ï, ë dans quelques mots', 'Appliquer en dictée flash' ],
    keywords: ['accents','orthographe'],
    sources: [ { title: 'Académie française — Accents', url: 'https://www.academie-francaise.fr', type: 'website', description: 'Rappels orthographiques' } ],
    body: {
      introduction: { title: 'Pourquoi des accents ?', content: `Les **accents** aident à **prononcer** et parfois **différencier** des mots : **é/è/ê** ; la **cédille** (ç) donne le son [s].` },
      mainContent: [
        { type: 'example', title: 'Mots modèles', content: `**été, père, tête, garçon, maïs, Noël**.`, examples: [ { code: 'tête / été / garçon', title: 'Accents & cédille', description: 'é/è/ê/ç', explanation: 'Repérage visuel' } ] },
        { type: 'activity', title: 'Je place le bon accent', content: `Complète : t__te (tête), p__re (père), __té (été).` },
        { type: 'exercise', title: 'Dictée flash', content: `Écris : **tête, été, garçon, Noël, maïs**.` },
        { type: 'summary', title: 'Récap', content: `é aigu, è grave, ê circonflexe ; ç pour [s].` }
      ],
      conclusion: { summary: 'Accents repérés et utilisés.', keyTakeaways: ['é/è/ê', 'ç, ï, ë'], nextSteps: ['Mots-outils fréquents'], additionalResources: [ { title: 'Affiche accents', description: 'Mémo visuel', url: 'https://www.academie-francaise.fr' } ] }
    },
    assessment: { quiz: [ { question: 'Le **ç** de garçon sert à…', type: 'multiple-choice', options: ['[k]','[s]'], correctAnswer: '[s]', explanation: 'cédille = [s]', points: 10 } ], passingScore: 80, timeLimit: 20 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.1.0', tags: ['français','n1','accents'] }
  },

  'francais-n1-fondamentaux-07': {
    slug: 'francais-n1-fondamentaux-07',
    title: 'Mots outils (le, la, les, un, une, et, est, à, dans, sur)',
    summary: 'Lire et employer des mots-outils très fréquents dans de petites phrases.',
    level: 'n1-fondamentaux',
    subject: 'Langue Française',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['francais-n1-fondamentaux-06'],
    learningObjectives: [ 'Lire des mots-outils', 'Construire de courtes phrases correctes', 'Repérer prépositions simples' ],
    keywords: ['mots-outils','lecture','phrases'],
    sources: [ { title: 'Éduscol — Étude de la langue', url: 'https://eduscol.education.fr', type: 'website', description: 'Grammaire de phrase' } ],
    body: {
      introduction: { title: 'Des mots très utiles', content: `Ces mots aident à **former des phrases** : **le, la, les, un, une, et, est, à, dans, sur**.` },
      mainContent: [
        { type: 'example', title: 'Mini-phrases', content: `**Le** chat **est** sur **la** table. / **Une** pomme **dans** **le** sac. / Paul **et** Lila.`, examples: [ { code: 'Le chat est sur la table.', title: 'Phrase modèle', description: 'mots-outils', explanation: 'Préposition **sur**' } ] },
        { type: 'activity', title: 'Je choisis le bon mot', content: `__ chat est sur __ chaise. (Le / la)` },
        { type: 'exercise', title: 'Je produis', content: `Écris 3 phrases avec **à / dans / sur**.` },
        { type: 'summary', title: 'Récap', content: `Mots-outils lus et employés dans des phrases.` }
      ],
      conclusion: { summary: 'Tu emploies les mots-outils.', keyTakeaways: ['Fonctions simples des mots-outils'], nextSteps: ["Nom/Article/Adjectif : première approche"], additionalResources: [ { title: 'Liste mots-outils CP', description: 'Fréquence élevée', url: 'https://eduscol.education.fr' } ] }
    },
    assessment: { quiz: [ { question: 'Choisis : __ chat est sur __ table.', type: 'multiple-choice', options: ['Le / la','La / le'], correctAnswer: 'Le / la', explanation: 'Genre des noms', points: 10 } ], passingScore: 80, timeLimit: 20 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.1.0', tags: ['français','n1','mots-outils'] }
  },

  'francais-n1-fondamentaux-08': {
    slug: 'francais-n1-fondamentaux-08',
    title: 'Nom, article, adjectif — première approche',
    summary: 'Identifier nom, article et adjectif dans des GN simples (le petit chat).',
    level: 'n1-fondamentaux',
    subject: 'Langue Française',
    ageGroup: '6-8 ans',
    estimatedMinutes: 24,
    isLocked: false,
    prerequisites: ['francais-n1-fondamentaux-07'],
    learningObjectives: [ 'Repérer le nom', "Associer l'article (défini/indéfini)", "Ajouter un adjectif d'aspect/couleur", 'Produire 3 GN' ],
    keywords: ['grammaire','GN','adjectif'],
    sources: [ { title: 'Éduscol — Grammaire GN', url: 'https://eduscol.education.fr', type: 'website', description: 'Groupe nominal simple' } ],
    body: {
      introduction: { title: 'Le groupe nominal (GN)', content: `Un **GN** peut contenir : **article + nom (+ adjectif)** : **le chat noir**.` },
      mainContent: [
        { type: 'example', title: 'Exemples', content: `**le** chien **blanc** / **une** robe **rouge** / **les** fleurs **jaunes**.`, examples: [ { code: 'le chat noir', title: 'GN modèle', description: 'article + nom + adjectif', explanation: 'Ordre stable' } ] },
        { type: 'activity', title: 'Je souligne', content: `Souligne l’**article**, entoure le **nom**, surligne l’**adjectif**.` },
        { type: 'exercise', title: 'Je produis 3 GN', content: `Écris 3 GN avec **article + nom + adjectif**.` },
        { type: 'summary', title: 'Récap', content: `Tu sais construire des **GN simples**.` }
      ],
      conclusion: { summary: 'GN repéré et produit.', keyTakeaways: ['Article + nom (+ adjectif)'], nextSteps: ['Phrase minimale : Sujet + Verbe + Complément'], additionalResources: [ { title: 'Mémo GN', description: 'Schéma simple', url: 'https://eduscol.education.fr' } ] }
    },
    assessment: { quiz: [ { question: 'Dans **la petite maison**, quel est le **nom** ?', type: 'multiple-choice', options: ['la','petite','maison'], correctAnswer: 'maison', explanation: 'Nom noyau du GN', points: 10 } ], passingScore: 80, timeLimit: 20 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.1.0', tags: ['français','n1','GN'] }
  },

  'francais-n1-fondamentaux-09': {
    slug: 'francais-n1-fondamentaux-09',
    title: 'La phrase : majuscule, point ; Sujet + Verbe + Complément',
    summary: 'Construire et lire des phrases courtes correctement ponctuées.',
    level: 'n1-fondamentaux',
    subject: 'Langue Française',
    ageGroup: '6-8 ans',
    estimatedMinutes: 24,
    isLocked: false,
    prerequisites: ['francais-n1-fondamentaux-08'],
    learningObjectives: [ 'Reconnaître début/fin de phrase', 'Former S+V+C simples', 'Ponctuer correctement' ],
    keywords: ['phrase','ponctuation','SVC'],
    sources: [ { title: 'Éduscol — Maîtrise de la langue', url: 'https://eduscol.education.fr', type: 'website', description: 'Règles de base' } ],
    body: {
      introduction: { title: 'Une phrase complète', content: `La phrase commence par **majuscule** et se termine par un **point**. Elle contient au minimum un **sujet** et un **verbe**.` },
      mainContent: [
        { type: 'example', title: 'Exemples S+V+C', content: `**Léo** (**sujet**) **mange** (**verbe**) **une pomme** (**complément**).`, examples: [ { code: 'Lina lit un livre.', title: 'SVC', description: 'Phrase minimale', explanation: 'Sujet + verbe + complément' } ] },
        { type: 'activity', title: 'Je corrige', content: `ajoute majuscule/point : **leo parle au chat**` },
        { type: 'exercise', title: 'Je produis 3 phrases', content: `Écris 3 phrases S+V+C avec des GN de la leçon 8.` },
        { type: 'summary', title: 'Récap', content: `Phrase = Majuscule + S/V/C + Point.` }
      ],
      conclusion: { summary: 'Tu sais former des phrases simples.', keyTakeaways: ['Majuscule/Point','S+V+C'], nextSteps: ['Présent : verbes fréquents'], additionalResources: [ { title: 'Affiche phrase SVC', description: 'Mémo classe', url: 'https://eduscol.education.fr' } ] }
    },
    assessment: { quiz: [ { question: 'Dans **Léo joue au ballon.**, quel est le **verbe** ?', type: 'multiple-choice', options: ['Léo','joue','ballon'], correctAnswer: 'joue', explanation: 'Action', points: 10 } ], passingScore: 80, timeLimit: 20 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.1.0', tags: ['français','n1','phrase'] }
  },

  'francais-n1-fondamentaux-10': {
    slug: 'francais-n1-fondamentaux-10',
    title: 'Présent — être/avoir & 1er groupe (je/tu/il/elle)',
    summary: 'Conjuguer être/avoir et deux verbes du 1er groupe au présent (formes JE/TU/IL/ELLE).',
    level: 'n1-fondamentaux',
    subject: 'Langue Française',
    ageGroup: '6-8 ans',
    estimatedMinutes: 26,
    isLocked: false,
    prerequisites: ['francais-n1-fondamentaux-09'],
    learningObjectives: [ 'Mémoriser être/avoir (JE/TU/IL/ELLE)', 'Conjuguer 1er groupe : parler/aimer', 'Produire des phrases conjuguées' ],
    keywords: ['conjugaison','présent','être','avoir','1er groupe'],
    sources: [ { title: 'CNED — Conjugaison de base', url: 'https://www.cned.fr', type: 'website', description: 'Fiches de mémorisation' } ],
    body: {
      introduction: { title: 'Formes à connaître', content: `**Être** : je **suis**, tu **es**, il/elle **est**.
**Avoir** : j’**ai**, tu **as**, il/elle **a**.
**Parler** : je **parle**, tu **parles**, il/elle **parle**.` },
      mainContent: [
        { type: 'example', title: 'Phrases modèles', content: `**Je suis** content. **Tu as** un livre. **Elle parle** doucement.`, examples: [ { code: 'Je parle / Tu parles / Elle parle', title: '1er groupe', description: 'Présent', explanation: 'Terminaisons -e / -es / -e' } ] },
        { type: 'activity', title: 'Je choisis', content: `Complète : **Tu __ un stylo.** (as / es)` },
        { type: 'exercise', title: 'Mini-conjugaison', content: `Conjugue **aimer** (je/tu/il/elle). Écris 4 phrases.` },
        { type: 'summary', title: 'Récap', content: `Être/Avoir + 1er groupe au présent (formes de base).` }
      ],
      conclusion: { summary: 'Tu conjugues au présent (formes JE/TU/IL/ELLE).', keyTakeaways: ['suis/es/est','ai/as/a','-e/-es/-e'], nextSteps: ['Compréhension écrite courte'], additionalResources: [ { title: 'Cartes Conjugaison', description: 'Être/Avoir + 1er groupe', url: 'https://www.cned.fr' } ] }
    },
    assessment: { quiz: [ { question: 'Choisis la bonne forme : **Il __ un chat.**', type: 'multiple-choice', options: ['a','as','ai'], correctAnswer: 'a', explanation: 'Il/elle **a**', points: 10 } ], passingScore: 80, timeLimit: 20 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.1.0', tags: ['français','n1','conjugaison'] }
  },

  'francais-n1-fondamentaux-11': {
    slug: 'francais-n1-fondamentaux-11',
    title: 'Compréhension — petit texte & questions',
    summary: 'Lire un court paragraphe et répondre à 3 questions simples.',
    level: 'n1-fondamentaux',
    subject: 'Langue Française',
    ageGroup: '6-8 ans',
    estimatedMinutes: 25,
    isLocked: false,
    prerequisites: ['francais-n1-fondamentaux-10'],
    learningObjectives: [ 'Lire un paragraphe court', 'Répondre à qui/où/quoi', 'Reformuler une idée' ],
    keywords: ['compréhension','lecture'],
    sources: [ { title: 'Éduscol — Comprendre des textes courts', url: 'https://eduscol.education.fr', type: 'website', description: 'Repères de compréhension' } ],
    body: {
      introduction: { title: 'Je lis pour comprendre', content: `Lis calmement, repère **mots clés** et **signes**, puis réponds.` },
      mainContent: [
        { type: 'example', title: 'Texte', content: `Lina **a** un **chat** noir. Le matin, **elle** **parle** au chat. Le chat **est** sur la chaise **dans** la cuisine.`, examples: [ { code: 'Lina / chat / chaise / cuisine', title: 'Mots clés', description: 'Repérage', explanation: 'Aide à répondre' } ] },
        { type: 'activity', title: 'Questions', content: `1) Qui a un chat ?
2) Où est le chat ?
3) Que fait Lina ?` },
        { type: 'exercise', title: 'Je reformule', content: `Écris une phrase qui résume le texte.` },
        { type: 'summary', title: 'Récap', content: `Comprendre un **texte court** (3–4 phrases).` }
      ],
      conclusion: { summary: 'Tu réponds à des questions simples.', keyTakeaways: ['Qui/Où/Quoi'], nextSteps: ['Évaluation finale N1'], additionalResources: [ { title: 'Grille questions', description: 'Qui ? Où ? Quoi ?', url: 'https://eduscol.education.fr' } ] }
    },
    assessment: { quiz: [ { question: 'Où est le chat ?', type: 'multiple-choice', options: ['Dans la cuisine','Dans le jardin','Dans la salle de bain'], correctAnswer: 'Dans la cuisine', explanation: 'Sur la chaise dans la cuisine', points: 10 } ], passingScore: 80, timeLimit: 20 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.1.0', tags: ['français','n1','compréhension'] }
  },

  'francais-n1-fondamentaux-12': {
    slug: 'francais-n1-fondamentaux-12',
    title: 'Évaluation finale N1 — lecture & langue',
    summary: 'Valider les compétences : lecture de mots/phrases, sons fréquents, GN simple, phrase S+V+C, présent être/avoir.',
    level: 'n1-fondamentaux',
    subject: 'Langue Française',
    ageGroup: '6-8 ans',
    estimatedMinutes: 30,
    isLocked: false,
    prerequisites: [
      'francais-n1-fondamentaux-01','francais-n1-fondamentaux-02','francais-n1-fondamentaux-03','francais-n1-fondamentaux-04','francais-n1-fondamentaux-05','francais-n1-fondamentaux-06','francais-n1-fondamentaux-07','francais-n1-fondamentaux-08','francais-n1-fondamentaux-09','francais-n1-fondamentaux-10','francais-n1-fondamentaux-11'
    ],
    learningObjectives: [
      'Lire mots et phrases courtes',
      'Identifier sons/digrammes vus',
      'Reconnaître GN simple',
      'Former une phrase S+V+C',
      'Conjuguer être/avoir (je/tu/il/elle)'
    ],
    keywords: ['évaluation','lecture','grammaire','conjugaison'],
    sources: [ { title: 'Éduscol — Maîtrise de la langue : attendus', url: 'https://eduscol.education.fr', type: 'website', description: 'Repères de fin de cycle (adaptés N1)' } ],
    body: {
      introduction: { title: 'Consignes', content: `Lis **calmement** ; réponds **sans te précipiter**.` },
      mainContent: [
        { type: 'concept', title: 'Partie 1 — Lecture de mots', content: `Lis : **classe, garçon, chat, loup, roi, maison, lapin** (sons ch/ou/oi, c/ç, nasales).` },
        { type: 'concept', title: 'Partie 2 — Phrases', content: `Lis puis ajoute **majuscule/point** : **leo parle au chat**` },
        { type: 'example', title: 'Texte court', content: `Paul **a** un **livre**. **Il** **lit** dans le **salon**. Le **chat** **est** **sur** la chaise.`, examples: [ { code: 'Paul a un livre.', title: 'Phrase 1', description: 'Lecture', explanation: 'Sujet + verbe + complément' } ] },
        { type: 'activity', title: 'Questions', content: `1) Qui a un livre ?
2) Où est Paul ?
3) Où est le chat ?` },
        { type: 'exercise', title: 'Grammaire & conjugaison', content: `1) Souligne l’**article** et entoure le **nom** : **le petit chat**.
2) Conjugue **être** (je/tu/il/elle).
3) Écris 1 phrase S+V+C avec **aimer**.` },
        { type: 'summary', title: 'Vérifie', content: `Majuscule/point, sons corrects, GN, conjugaison.` }
      ],
      conclusion: { summary: 'Bravo ! Tu valides le niveau **N1** en français 🎉', keyTakeaways: ['Lecture de base','GN simple','Présent être/avoir'], nextSteps: ['Passer à **N2** (textes un peu plus longs)'], additionalResources: [ { title: 'Révisions N1 — fiche', description: 'Tout-en-un', url: 'https://eduscol.education.fr' } ] }
    },
    assessment: {
      quiz: [
        { question: 'Dans **garçon**, la lettre **ç** se lit…', type: 'multiple-choice', options: ['[k]','[s]'], correctAnswer: '[s]', explanation: 'cédille', points: 10 },
        { question: 'Complète : **Elle __ un livre.**', type: 'multiple-choice', options: ['a','as','ai'], correctAnswer: 'a', explanation: 'Elle **a**', points: 10 },
        { question: 'Un **GN** simple contient…', type: 'multiple-choice', options: ['Nom seul','Article + nom (+ adjectif)'], correctAnswer: 'Article + nom (+ adjectif)', explanation: 'Structure GN', points: 10 }
      ],
      passingScore: 80,
      timeLimit: 30
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.1.0', tags: ['français','n1','évaluation'] }
  }
}
