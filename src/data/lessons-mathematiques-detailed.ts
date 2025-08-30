import { Lesson } from './lessons'

export const allLessonsMathematiques: Record<string, Lesson> = {
  'mathematiques-n1-fondamentaux-01': {
    slug: 'mathematiques-n1-fondamentaux-01',
    title: 'Compter et écrire les nombres de 0 à 10',
    summary: 'Construire le sens du nombre : compter, dire, lire et écrire 0–10 ; correspondance terme à terme.',
    level: 'n1-fondamentaux',
    subject: 'Mathématiques',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      'Réciter la suite orale de 0 à 10',
      'Associer quantité ↔ chiffre (10-frame, doigts, objets)',
      'Écrire correctement les chiffres 0–10'
    ],
    keywords: ['nombres', '0-10', 'comptage', 'écriture des chiffres', 'ten-frame'],
    sources: [
      { title: 'Éduscol — Nombres CP', url: 'https://eduscol.education.fr', type: 'website', description: 'Repères de progressivité — nombres et calcul' }
    ],
    body: {
      introduction: {
        title: 'Découvrir les nombres 0 à 10',
        content: `On compte des **objets**, on montre avec les **doigts**, on complète un **dixier (10-frame)**. Le **zéro** représente « aucune quantité ».`
      },
      mainContent: [
        { type: 'concept', title: 'Représentations', content: `Nombre **5** = 🖐️ doigts = ⚪⚪⚪⚪⚪ = chiffre **5**.\nUtilise un **10-frame** : remplis 1 à 10 cases.` },
        { type: 'example', title: 'Correspondance', content: `Associe : **7** ↔ sept ⚫⚫⚫⚫⚫⚫⚫ ; **0** ↔ aucune bille.`, examples: [ { code: '10-frame', title: 'Grille de 10', description: 'Cases à compléter', explanation: 'Visualiser la quantité' } ] },
        { type: 'activity', title: 'Je compte', content: `Compte **8** cubes ; écris le chiffre. Puis enlève 3, combien reste-t-il ?` },
        { type: 'exercise', title: "J'écris sans modèle", content: `Trace **0–10**. Attention au sens du tracé.` },
        { type: 'summary', title: 'Récap', content: `Lire/écrire/compter **0–10** ; zéro = absence.` }
      ],
      conclusion: {
        summary: 'Tu sais compter et écrire 0–10.',
        keyTakeaways: ['Quantité ↔ chiffre', '10-frame'],
        nextSteps: ['Aller vers **11–20**'],
        additionalResources: [
          { title: 'Cartes 10-frame', description: 'Gabarits à imprimer', url: 'https://eduscol.education.fr' },
          { title: 'Affiche 0–10', description: 'Chiffres et doigts', url: 'https://eduscol.education.fr' }
        ]
      }
    },
    assessment: {
      quiz: [
        { question: 'Combien de billes ⚫⚫⚫⚫⚫ ?', type: 'multiple-choice', options: ['4','5','6'], correctAnswer: '5', explanation: 'On compte 5', points: 10 },
        { question: 'Que représente **0** ?', type: 'multiple-choice', options: ['Une bille','Aucune bille'], correctAnswer: 'Aucune bille', explanation: 'Zéro = absence', points: 10 }
      ],
      passingScore: 80,
      timeLimit: 15
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['maths','n1','0-10'] }
  },

  'mathematiques-n1-fondamentaux-02': {
    slug: 'mathematiques-n1-fondamentaux-02',
    title: 'Nombres de 11 à 20 — groupements et décompositions',
    summary: 'Construire 11–20 avec un paquet de 10 + quelques unités ; lire, écrire et représenter.',
    level: 'n1-fondamentaux',
    subject: 'Mathématiques',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['mathematiques-n1-fondamentaux-01'],
    learningObjectives: [
      'Composer 11–20 comme 10 + unités',
      'Lire/écrire 11–20',
      'Comparer des quantités simples jusqu’à 20'
    ],
    keywords: ['11-20', 'dizaine + unités', 'représentations'],
    sources: [ { title: 'Éduscol — Dizaine/Unité', url: 'https://eduscol.education.fr', type: 'website', description: 'Premiers groupements par 10' } ],
    body: {
      introduction: { title: '10 et encore…', content: `**11** = **10** + **1** ; **17** = **10** + **7**. Utilise un **paquet de 10** et des **unités**.` },
      mainContent: [
        { type: 'example', title: 'Représenter 14', content: `\n- 📦 de 10 + ⚫⚫⚫⚫ (4 unités)\n- Écriture : **14**\n- Mots : **quatorze**` },
        { type: 'activity', title: 'Fabrique 18', content: `Prends un paquet de 10, ajoute 8 unités. Écris, lis, représente.` },
        { type: 'exercise', title: 'Décomposer', content: `15 = 10 + __ ; 12 = 10 + __ ; 19 = 10 + __` },
        { type: 'summary', title: 'Récap', content: `11–20 = **10 + unités**.` }
      ],
      conclusion: { summary: 'Tu manipules 11–20.', keyTakeaways: ['10 + u'], nextSteps: ['Comparer et ordonner 0–20'], additionalResources: [ { title: 'Cartes D/U', description: 'Dizaine & unités', url: 'https://eduscol.education.fr' } ] },
    },
    assessment: { quiz: [ { question: '17 = 10 + __', type: 'multiple-choice', options: ['5','7'], correctAnswer: '7', explanation: '10+7', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['maths','n1','11-20'] }
  },

  'mathematiques-n1-fondamentaux-03': {
    slug: 'mathematiques-n1-fondamentaux-03',
    title: 'Comparer et ordonner jusqu’à 20 (<, >, =)',
    summary: 'Utiliser les symboles <, >, = ; ranger des nombres ; repérer le plus grand/petit jusqu’à 20.',
    level: 'n1-fondamentaux',
    subject: 'Mathématiques',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['mathematiques-n1-fondamentaux-02'],
    learningObjectives: [ 'Comparer deux nombres', 'Ordonner 3 à 5 nombres', 'Utiliser <, >, =' ],
    keywords: ['comparer','ordonner','< > ='],
    sources: [ { title: 'CNED — Comparer des nombres', url: 'https://www.cned.fr', type: 'website', description: 'Initiation aux comparateurs' } ],
    body: {
      introduction: { title: 'Qui est le plus grand ?', content: `On compare d’abord la **dizaine**, puis les **unités**.` },
      mainContent: [
        { type: 'example', title: 'Exemples', content: `14 **>** 9 ; 12 **<** 18 ; 15 **=** 15.`, examples: [ { code: '14 > 9', title: 'Comparer', description: 'Plus grand', explanation: 'Une dizaine vs aucune' } ] },
        { type: 'activity', title: 'Je place le bon signe', content: `11 __ 10 ; 7 __ 9 ; 16 __ 16` },
        { type: 'exercise', title: 'J’ordonne', content: `Range : 12, 5, 19, 8, 15 (du plus petit au plus grand).` },
        { type: 'summary', title: 'Récap', content: `Comparer = utiliser **<, >, =**.` }
      ],
      conclusion: { summary: 'Tu compares et ranges jusqu’à 20.', keyTakeaways: ['Dizaine puis unités'], nextSteps: ['Additions jusque 10'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Quel signe ? 12 __ 18', type: 'multiple-choice', options: ['>','<','='], correctAnswer: '<', explanation: '12 est plus petit', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['maths','n1','comparaison'] }
  },

  'mathematiques-n1-fondamentaux-04': {
    slug: 'mathematiques-n1-fondamentaux-04',
    title: 'Additionner jusqu’à 10 — « mettre ensemble »',
    summary: 'Comprendre l’addition comme réunion de collections ; utiliser + et = ; stratégies avec 10-frame et doigts.',
    level: 'n1-fondamentaux',
    subject: 'Mathématiques',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['mathematiques-n1-fondamentaux-03'],
    learningObjectives: [ 'Modéliser l’addition (réunion/ajout)', 'Calculer jusqu’à 10', 'Écrire une égalité a + b = c' ],
    keywords: ['addition','+','='],
    sources: [ { title: 'Éduscol — Additions au CP', url: 'https://eduscol.education.fr', type: 'website', description: 'Situations d’ajout et de réunion' } ],
    body: {
      introduction: { title: 'Addition = ajouter', content: `Ex.: 3 bonbons + 2 bonbons = 5 bonbons.` },
      mainContent: [
        { type: 'example', title: 'Modèles', content: `**4 + 1 = 5**, **2 + 3 = 5**, **5 + 0 = 5**`, examples: [ { code: '10-frame', title: 'Compléter à 5', description: 'Stratégie visuelle', explanation: 'Remplir les cases' } ] },
        { type: 'activity', title: 'Je complète', content: `__ + 3 = 5 ; 4 + __ = 7 ; 0 + 6 = __` },
        { type: 'exercise', title: 'Calcul mental', content: `2+2, 3+1, 4+3, 5+4, 6+1 (résultats ≤ 10).` },
        { type: 'summary', title: 'Récap', content: `Addition = **+** ; total avec **=**.` }
      ],
      conclusion: { summary: 'Addition jusqu’à 10 acquise.', keyTakeaways: ['Réunion/ajout','10-frame'], nextSteps: ['Soustraction jusqu’à 10'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: '4 + 3 = __', type: 'multiple-choice', options: ['6','7','8'], correctAnswer: '7', explanation: '4+3=7', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['maths','n1','addition'] }
  },

  'mathematiques-n1-fondamentaux-05': {
    slug: 'mathematiques-n1-fondamentaux-05',
    title: 'Soustraire jusqu’à 10 — « enlever »',
    summary: 'Comprendre la soustraction comme retrait ; utiliser − et = ; compléter des faits jusqu’à 10.',
    level: 'n1-fondamentaux',
    subject: 'Mathématiques',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['mathematiques-n1-fondamentaux-04'],
    learningObjectives: [ 'Modéliser la soustraction (enlever/comparer)', 'Calculer jusqu’à 10', 'Écrire a − b = c' ],
    keywords: ['soustraction','-','='],
    sources: [ { title: 'CNED — Soustractions CP', url: 'https://www.cned.fr', type: 'website', description: 'Retrait et complément à' } ],
    body: {
      introduction: { title: 'Soustraction = enlever', content: `Ex.: 7 pommes **− 2** = 5 pommes.` },
      mainContent: [
        { type: 'example', title: 'Modèles', content: `**5 − 0 = 5**, **5 − 2 = 3**, **7 − 3 = 4**` },
        { type: 'activity', title: 'Je complète', content: `__ − 3 = 2 ; 9 − __ = 1 ; 6 − 6 = __` },
        { type: 'exercise', title: 'Calcul mental', content: `5−1, 6−2, 8−3, 9−4, 10−5.` },
        { type: 'summary', title: 'Récap', content: `Soustraction = **−** ; résultat avec **=**.` }
      ],
      conclusion: { summary: 'Soustractions jusqu’à 10 maîtrisées.', keyTakeaways: ['Retrait','Complément'], nextSteps: ['Stratégies jusqu’à 20'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: '8 − 3 = __', type: 'multiple-choice', options: ['4','5','6'], correctAnswer: '5', explanation: '8-3=5', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['maths','n1','soustraction'] }
  },

  'mathematiques-n1-fondamentaux-06': {
    slug: 'mathematiques-n1-fondamentaux-06',
    title: 'À 20 : faire 10, doubles et presque-doubles',
    summary: 'Addition/soustraction jusqu’à 20 avec stratégies : compléter à 10, doubles (5+5), presque-doubles (6+7).',
    level: 'n1-fondamentaux',
    subject: 'Mathématiques',
    ageGroup: '6-8 ans',
    estimatedMinutes: 24,
    isLocked: false,
    prerequisites: ['mathematiques-n1-fondamentaux-05'],
    learningObjectives: [ 'Utiliser « faire 10 »', 'Mémoriser quelques doubles', 'Résoudre jusqu’à 20' ],
    keywords: ['faire 10','doubles','20'],
    sources: [ { title: 'Éduscol — Stratégies de calcul', url: 'https://eduscol.education.fr', type: 'website', description: 'Procédures expertes' } ],
    body: {
      introduction: { title: 'Stratégies utiles', content: `**Faire 10** : 8 + 2 = 10 puis +3 → 13. **Doubles** : 4+4, 5+5. **Presque-doubles** : 6+7 = 6+6+1.` },
      mainContent: [
        { type: 'example', title: 'Exemples guidés', content: `9+5 → (9+1)+4 = 14 ; 7+7 = 14 ; 12−9 → (10−9)+2 = 3.` },
        { type: 'activity', title: 'Je choisis la stratégie', content: `8+6 ; 5+5 ; 11−9 ; 13−5` },
        { type: 'exercise', title: 'Entraînement', content: `10 calculs variés (résultats ≤ 20).` },
        { type: 'summary', title: 'Récap', content: `Jusqu’à 20 avec **stratégies**.` }
      ],
      conclusion: { summary: 'Tu calcules efficacement jusqu’à 20.', keyTakeaways: ['compléter à 10','doubles'], nextSteps: ['Dizaine et unités jusqu’à 99'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: '6 + 7 = __', type: 'multiple-choice', options: ['12','13','14'], correctAnswer: '13', explanation: 'Presque-double 6+6+1', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['maths','n1','jusqua20'] }
  },

  'mathematiques-n1-fondamentaux-07': {
    slug: 'mathematiques-n1-fondamentaux-07',
    title: 'Valeur des chiffres — dizaines et unités (0–99)',
    summary: 'Comprendre la numération décimale : un nombre à deux chiffres = dizaines + unités ; écrire, lire et décomposer.',
    level: 'n1-fondamentaux',
    subject: 'Mathématiques',
    ageGroup: '6-8 ans',
    estimatedMinutes: 25,
    isLocked: false,
    prerequisites: ['mathematiques-n1-fondamentaux-06'],
    learningObjectives: [ 'Lire/écrire 0–99', 'Décomposer D + U', 'Identifier la **valeur** du chiffre' ],
    keywords: ['dizaines','unités','valeur de position'],
    sources: [ { title: 'Éduscol — Numération décimale', url: 'https://eduscol.education.fr', type: 'website', description: 'Première approche D/U' } ],
    body: {
      introduction: { title: 'Position = valeur', content: `Dans **34**, le **3** signifie **3 dizaines** (30) et le **4** signifie **4 unités**.` },
      mainContent: [
        { type: 'example', title: 'Décompositions', content: `58 = 5D + 8U ; 70 = 7D + 0U ; 06 = 0D + 6U (écrire **6**).` },
        { type: 'activity', title: 'Qui suis-je ?', content: `J’ai 4 dizaines et 2 unités. Qui suis-je ? (42)` },
        { type: 'exercise', title: 'D/U', content: `Écris D et U de : 27, 50, 99, 13, 06.` },
        { type: 'summary', title: 'Récap', content: `Deux chiffres → **D**izaines & **U**nités.` }
      ],
      conclusion: { summary: 'Tu lis et décomposes 0–99.', keyTakeaways: ['place value'], nextSteps: ['Géométrie : formes 2D/3D'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Dans 47, le 4 vaut…', type: 'multiple-choice', options: ['4 unités','4 dizaines'], correctAnswer: '4 dizaines', explanation: 'Valeur de position', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['maths','n1','dizaines-unites'] }
  },

  'mathematiques-n1-fondamentaux-08': {
    slug: 'mathematiques-n1-fondamentaux-08',
    title: 'Formes 2D et 3D — reconnaître et décrire',
    summary: 'Identifier cercle, triangle, carré, rectangle ; reconnaître cube, boule, cylindre, pyramide ; décrire avec des mots simples.',
    level: 'n1-fondamentaux',
    subject: 'Mathématiques',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['mathematiques-n1-fondamentaux-07'],
    learningObjectives: [ 'Nommer 4 formes 2D et 4 solides 3D', 'Décrire côtés/coins (2D)', 'Relier objets du quotidien' ],
    keywords: ['géométrie','formes','2D','3D'],
    sources: [ { title: 'CNED — Géométrie au CP', url: 'https://www.cned.fr', type: 'website', description: 'Formes usuelles' } ],
    body: {
      introduction: { title: '2D vs 3D', content: `**2D**: plat (cercle, triangle, carré, rectangle). **3D**: en volume (cube, **sphere**/boule, cylindre, pyramide).` },
      mainContent: [
        { type: 'example', title: 'Objets du quotidien', content: `Roue → **cercle**, boîte → **cube**, canette → **cylindre**.` },
        { type: 'activity', title: 'Je classe', content: `Découpe des images et classe en **2D** / **3D**.` },
        { type: 'exercise', title: 'Je décris', content: `Le carré a **4 côtés égaux** et **4 sommets**. Le rectangle a 4 côtés, 4 sommets.` },
        { type: 'summary', title: 'Récap', content: `Noms et propriétés simples.` }
      ],
      conclusion: { summary: 'Tu reconnais les formes courantes.', keyTakeaways: ['2D plats','3D volumes'], nextSteps: ['Grandeurs : longueurs non standard'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Une canette est proche de quel solide ?', type: 'multiple-choice', options: ['Cube','Cylindre'], correctAnswer: 'Cylindre', explanation: 'Forme cylindrique', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['maths','n1','formes'] }
  },

  'mathematiques-n1-fondamentaux-09': {
    slug: 'mathematiques-n1-fondamentaux-09',
    title: 'Mesurer des longueurs — unités non standard',
    summary: 'Comparer et estimer des longueurs ; mesurer avec des unités non conventionnelles (cubes, trombones).',
    level: 'n1-fondamentaux',
    subject: 'Mathématiques',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['mathematiques-n1-fondamentaux-08'],
    learningObjectives: [ 'Comparer long/court', 'Mesurer avec unités non standard', 'Aligner sans espace/chevauchement' ],
    keywords: ['mesures','longueurs','unités non standard'],
    sources: [ { title: 'Éduscol — Grandeurs et mesures', url: 'https://eduscol.education.fr', type: 'website', description: 'Initiation à la mesure' } ],
    body: {
      introduction: { title: 'Mesurer, c’est comparer', content: `On **aligne** des unités **identiques** **sans espace**. On annonce « environ … unités ». ` },
      mainContent: [
        { type: 'example', title: 'Exemple', content: `Le crayon mesure **7 trombones**. La règle mesure **10 cubes**.` },
        { type: 'activity', title: 'Je mesure', content: `Choisis un objet et mesure-le avec des **carrés** de papier identiques.` },
        { type: 'exercise', title: 'Je compare', content: `Range du plus **court** au plus **long** : ficelle A (6 unités), B (4), C (9).` },
        { type: 'summary', title: 'Récap', content: `Même unité, alignée correctement.` }
      ],
      conclusion: { summary: 'Tu sais mesurer avec des unités simples.', keyTakeaways: ['Comparer','Aligner'], nextSteps: ['Le temps : heures et demi-heures'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Pour mesurer, on doit…', type: 'multiple-choice', options: ['Changer d’unité à chaque objet','Utiliser la **même** unité identique'], correctAnswer: 'Utiliser la **même** unité identique', explanation: 'Comparaison possible', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['maths','n1','mesures'] }
  },

  'mathematiques-n1-fondamentaux-10': {
    slug: 'mathematiques-n1-fondamentaux-10',
    title: 'Lire l’heure : heures pleines et demi-heures',
    summary: 'Reconnaître les heures sur l’horloge (aiguilles) : « … heures », « … heures et demie ». Séquences de la journée.',
    level: 'n1-fondamentaux',
    subject: 'Mathématiques',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['mathematiques-n1-fondamentaux-09'],
    learningObjectives: [ 'Lire heures pleines', 'Lire demi-heures', 'Associer moments de la journée' ],
    keywords: ['heure','horloge','demi-heure'],
    sources: [ { title: 'CNED — Lire l’heure', url: 'https://www.cned.fr', type: 'website', description: 'Apprendre l’horloge' } ],
    body: {
      introduction: { title: 'Deux aiguilles', content: `Grande aiguille = **minutes**, Petite aiguille = **heures**.\n**3 h** : petite sur 3, grande sur 12. **3 h 30** : petite entre 3 et 4, grande sur 6.` },
      mainContent: [
        { type: 'example', title: 'Exemples', content: `7 h ; 10 h ; 1 h 30 ; 6 h 30.`, examples: [ { code: '🕒', title: 'Lecture', description: 'Heure/demi-heure', explanation: '' } ] },
        { type: 'activity', title: 'Je place les aiguilles', content: `Dessine **8 h** puis **8 h 30**.` },
        { type: 'exercise', title: 'J’associe', content: `Petit déjeuner → **7 h 30** ; École → **8 h 30** ; Dodo → **20 h** (exemples).` },
        { type: 'summary', title: 'Récap', content: `Heures **pleines** et **et demie**.` }
      ],
      conclusion: { summary: 'Tu lis les heures simples.', keyTakeaways: ['aiguilles','heures & demi'], nextSteps: ['Monnaie en euros'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Grande aiguille sur 12, petite sur 4 →', type: 'multiple-choice', options: ['4 h','4 h 30'], correctAnswer: '4 h', explanation: 'Heure pleine', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['maths','n1','heure'] }
  },

  'mathematiques-n1-fondamentaux-11': {
    slug: 'mathematiques-n1-fondamentaux-11',
    title: 'Monnaie (€) — reconnaître et compter de petites sommes',
    summary: 'Identifier les pièces € et c ; composer des montants simples jusqu’à 2 € ; faire l’appoint avec pièces courantes.',
    level: 'n1-fondamentaux',
    subject: 'Mathématiques',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['mathematiques-n1-fondamentaux-10'],
    learningObjectives: [ 'Reconnaître pièces 1c/2c/5c/10c/20c/50c/1€/2€', 'Compter par 1, 2, 5, 10', 'Composer ≤ 2 €' ],
    keywords: ['monnaie','euros','centimes'],
    sources: [ { title: 'Banque de France — L’euro', url: 'https://www.banque-france.fr', type: 'website', description: 'Découvrir les pièces' } ],
    body: {
      introduction: { title: 'Pièces en euros', content: `Centimes : **1c, 2c, 5c, 10c, 20c, 50c** ; Pièces : **1€**, **2€**.` },
      mainContent: [
        { type: 'example', title: 'Composer un montant', content: `**30c** = 10c + 10c + 10c ; **1€** = 50c + 50c ; **2€** = 1€ + 1€.` },
        { type: 'activity', title: 'Je paie', content: `Prix : **70c**. Donne des pièces pour faire **70c**.` },
        { type: 'exercise', title: "J'additionne", content: `1€ + 20c + 20c = __ ; 50c + 20c + 5c = __` },
        { type: 'summary', title: 'Récap', content: `Reconnaître et **compter** les pièces.` }
      ],
      conclusion: { summary: 'Tu sais compter de petites sommes.', keyTakeaways: ['compter par 1/2/5/10','équivalences'], nextSteps: ['Données et problèmes'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: '50c + 20c = __', type: 'multiple-choice', options: ['60c','70c','80c'], correctAnswer: '70c', explanation: '50+20', points: 10 } ], passingScore: 80, timeLimit: 15 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['maths','n1','monnaie'] }
  },

  'mathematiques-n1-fondamentaux-12': {
    slug: 'mathematiques-n1-fondamentaux-12',
    title: 'Données & Problèmes — lire un petit tableau/diagramme',
    summary: 'Lire un tableau de 2–3 lignes/colonnes ; compter des occurrences ; résoudre 3 problèmes additifs/soustractifs simples.',
    level: 'n1-fondamentaux',
    subject: 'Mathématiques',
    ageGroup: '6-8 ans',
    estimatedMinutes: 25,
    isLocked: false,
    prerequisites: [
      'mathematiques-n1-fondamentaux-01','mathematiques-n1-fondamentaux-04','mathematiques-n1-fondamentaux-05','mathematiques-n1-fondamentaux-06'
    ],
    learningObjectives: [ 'Lire un tableau/diagramme barres très simple', 'Compter et comparer des effectifs', 'Résoudre 3 petits problèmes' ],
    keywords: ['données','tableau','problèmes'],
    sources: [ { title: 'Éduscol — Organisation et gestion de données', url: 'https://eduscol.education.fr', type: 'website', description: 'Premières lectures de tableaux' } ],
    body: {
      introduction: { title: 'Lire pour décider', content: `On **compte**, on **compare**, on **conclut**. Puis on résout des **problèmes** en une étape.` },
      mainContent: [
        { type: 'example', title: 'Tableau (préférences)', content: `| Fruit | Enfants |\n|---|---|\n| Pomme | 6 |\n| Banane | 4 |\n| Orange | 2 |` },
        { type: 'activity', title: 'Questions', content: `Quel fruit est préféré ? Combien d’enfants au total ?` },
        { type: 'exercise', title: 'Problèmes', content: `1) Il y a 6 pommes et 3 bananes. Combien de fruits ? 2) J’ai 9 billes, j’en donne 2. Combien reste-t-il ? 3) Pour aller à 10, combien manque-t-il à 7 ?` },
        { type: 'summary', title: 'Récap', content: `Lire un tableau, additionner/soustraire en **1 étape**.` }
      ],
      conclusion: { summary: 'Évaluation de fin de **N1** Maths — réussi 🎉', keyTakeaways: ['nombres','calcul','mesures/données'], nextSteps: ['Passer au **N2**'], additionalResources: [ { title: 'Fiche révision N1', description: 'Synthèse à imprimer', url: 'https://eduscol.education.fr' } ] }
    },
    assessment: {
      quiz: [
        { question: 'Dans le tableau, le fruit le plus choisi est…', type: 'multiple-choice', options: ['Banane','Pomme','Orange'], correctAnswer: 'Pomme', explanation: 'Effectif le plus grand', points: 10 },
        { question: '9 − 2 = __', type: 'multiple-choice', options: ['6','7','8'], correctAnswer: '7', explanation: 'Retrait', points: 10 }
      ],
      passingScore: 80,
      timeLimit: 25
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['maths','n1','données','évaluation'] }
  }
}
