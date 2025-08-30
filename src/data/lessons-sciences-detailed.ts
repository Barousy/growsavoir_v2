import { Lesson } from './lessons'

export const allLessonsSciences: Record<string, Lesson> = {
  'sciences-n1-fondamentaux-01': {
    slug: 'sciences-n1-fondamentaux-01',
    title: 'Qu’est-ce que la science ? Observer et se poser des questions',
    summary: 'Découvrir la démarche scientifique: observer, questionner, imaginer, expérimenter et conclure en sécurité.',
    level: 'n1-fondamentaux',
    subject: 'Sciences',
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      'Comprendre les 5 étapes simples de la démarche scientifique',
      'Utiliser ses cinq sens pour observer',
      'Connaître 5 règles de sécurité de base en sciences'
    ],
    keywords: ['observation', 'question', 'expérience', 'sécurité', 'méthode scientifique'],
    sources: [
      { title: 'Éduscol — Démarche d’investigation', url: 'https://eduscol.education.fr', type: 'website', description: 'Repères pour l’investigation scientifique' },
      { title: 'La main à la pâte', url: 'https://www.fondation-lamap.org', type: 'website', description: 'Pédagogie par l’investigation pour le primaire' }
    ],
    body: {
      introduction: {
        title: 'Observer, c’est déjà faire de la science !',
        content: `La science commence par **observer** avec ses **cinq sens**, puis **se poser des questions** : *Que se passe-t-il ? Pourquoi ?* On **imagine** une réponse (hypothèse), on **teste** (expérimente), puis on **conclut** et on **explique**.`
      },
      mainContent: [
        { type: 'concept', title: 'Les 5 étapes', content: `1) Observer · 2) Questionner · 3) Imaginer (hypothèse) · 4) Tester · 5) Conclure.` },
        { type: 'example', title: 'Exemple simple', content: `La plante près de la fenêtre pousse-t-elle mieux ? → Hypothèse : **oui** car plus de lumière → Test : placer deux plantes (fenêtre / placard) et observer.` },
        { type: 'activity', title: 'Chasse aux observations', content: `Regarde la classe/maison : **3 choses** à décrire (couleur, forme, texture, odeur, son).` },
        { type: 'exercise', title: 'Sécurité en sciences', content: `Règles : 1) Ne rien goûter 2) Protéger les yeux 3) Ranger 4) L’eau loin des prises 5) Demander l’aide d’un adulte.` },
        { type: 'summary', title: 'À retenir', content: `Science = **observer + questionner + tester** en sécurité.` }
      ],
      conclusion: {
        summary: 'Tu connais la démarche pour faire une petite expérience.',
        keyTakeaways: ['Observer', 'Questionner', 'Tester', 'Conclure', 'Sécurité'],
        nextSteps: ['Utiliser les **cinq sens** pour mieux observer (leçon 2)'],
        additionalResources: [
          { title: 'Affiche Démarche scientifique', description: '5 étapes illustrées à imprimer', url: 'https://www.fondation-lamap.org' }
        ]
      }
    },
    assessment: {
      quiz: [
        { question: 'La première étape de la démarche scientifique est…', type: 'multiple-choice', options: ['Tester', 'Observer'], correctAnswer: 'Observer', explanation: 'On observe d’abord.', points: 10 },
        { question: 'Citer une règle de sécurité.', type: 'multiple-choice', options: ['Goûter les produits', 'Demander l’aide d’un adulte'], correctAnswer: 'Demander l’aide d’un adulte', explanation: 'On ne goûte rien et on se fait aider.', points: 10 }
      ],
      passingScore: 80,
      timeLimit: 12
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sciences','n1','méthode'] }
  },

  'sciences-n1-fondamentaux-02': {
    slug: 'sciences-n1-fondamentaux-02',
    title: 'Les cinq sens : voir, entendre, toucher, sentir, goûter',
    summary: 'Identifier les cinq sens et relier chaque sens à son organe ; mener de petites observations sensorielles.',
    level: 'n1-fondamentaux',
    subject: 'Sciences',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['sciences-n1-fondamentaux-01'],
    learningObjectives: [ 'Nommer 5 sens', 'Associer organe ↔ sens', 'Décrire une observation sensorielle' ],
    keywords: ['cinq sens', 'organe', 'observer'],
    sources: [ { title: 'Cité des sciences — Corps humain', url: 'https://www.cite-sciences.fr', type: 'website', description: 'Ressources ludiques sur les sens' } ],
    body: {
      introduction: { title: 'Nos outils d’observation', content: `Yeux = **voir** ; Oreilles = **entendre** ; Peau/main = **toucher** ; Nez = **sentir** ; Langue = **goûter**.` },
      mainContent: [
        { type: 'example', title: 'Table de correspondance', content: `Image d’un citron : **voir** (jaune), **sentir** (acide), **goûter** (acide), **toucher** (lisse), **entendre** (aucun son).` },
        { type: 'activity', title: 'Boîtes mystère', content: `Touche (sans regarder) et décris : **doux/rugueux**, **chaud/froid**, **dur/mou**.` },
        { type: 'exercise', title: 'Je décris', content: `Choisis un objet et décris-le avec **au moins 3 sens**.` },
        { type: 'summary', title: 'Récap', content: `5 sens = 5 façons de **collecter des informations**.` }
      ],
      conclusion: { summary: 'Tu sais utiliser tes sens pour mieux observer.', keyTakeaways: ['Organes et sens'], nextSteps: ['Vivant / non vivant'], additionalResources: [ { title: 'Fiche 5 sens', description: 'Trace écrite à compléter', url: 'https://www.fondation-lamap.org' } ] }
    },
    assessment: { quiz: [ { question: 'Quel organe pour sentir ?', type: 'multiple-choice', options: ['Nez','Main'], correctAnswer: 'Nez', explanation: 'Le nez sent les odeurs.', points: 10 } ], passingScore: 80, timeLimit: 10 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sciences','n1','cinq-sens'] }
  },

  'sciences-n1-fondamentaux-03': {
    slug: 'sciences-n1-fondamentaux-03',
    title: 'Vivant ou non vivant ? Les besoins des êtres vivants',
    summary: 'Distinguer vivant/non vivant et identifier les besoins essentiels : air, eau, nourriture, habitat, lumière (pour les plantes).',
    level: 'n1-fondamentaux',
    subject: 'Sciences',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['sciences-n1-fondamentaux-02'],
    learningObjectives: [ 'Classer vivant / non vivant', 'Nommer les besoins vitaux', 'Donner des exemples' ],
    keywords: ['vivant', 'non vivant', 'besoins'],
    sources: [ { title: 'La main à la pâte — Vivant/non vivant', url: 'https://www.fondation-lamap.org', type: 'website', description: 'Séquences d’investigation' } ],
    body: {
      introduction: { title: 'Qu’est-ce qui est vivant ?', content: `Un être vivant **naît**, **grandit**, **se nourrit**, **respire**, parfois **se déplace**, et meurt. Il a des **besoins**.` },
      mainContent: [
        { type: 'activity', title: 'Tri d’images', content: `Classe **chat, pierre, plante, robot, champignon, voiture** en vivant / non vivant.` },
        { type: 'concept', title: 'Besoins essentiels', content: `Animaux : **air, eau, nourriture, abri**. Plantes : **eau, lumière, air, sol**.` },
        { type: 'exercise', title: 'Je justifie', content: `Pourquoi la **pierre** n’est pas vivante ? Pourquoi la **plante** est vivante ?` },
        { type: 'summary', title: 'Récap', content: `Vivant = besoins + cycle de vie.` }
      ],
      conclusion: { summary: 'Tu sais distinguer vivant/non vivant.', keyTakeaways: ['Besoins', 'Cycle de vie'], nextSteps: ['Parties d’une **plante** (leçon 4)'], additionalResources: [ { title: 'Affiche vivant/non vivant', description: 'Critères simples', url: 'https://www.fondation-lamap.org' } ] }
    },
    assessment: { quiz: [ { question: 'Une plante a besoin de…', type: 'multiple-choice', options: ['Lumière','Essence'], correctAnswer: 'Lumière', explanation: 'La plante fabrique sa matière avec la lumière.', points: 10 } ], passingScore: 80, timeLimit: 12 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sciences','n1','vivant'] }
  },

  'sciences-n1-fondamentaux-04': {
    slug: 'sciences-n1-fondamentaux-04',
    title: 'Les plantes : racine, tige, feuilles, fleur',
    summary: 'Identifier les parties d’une plante et leurs rôles ; comprendre les besoins (eau, lumière) via une germination simple.',
    level: 'n1-fondamentaux',
    subject: 'Sciences',
    ageGroup: '6-8 ans',
    estimatedMinutes: 24,
    isLocked: false,
    prerequisites: ['sciences-n1-fondamentaux-03'],
    learningObjectives: [ 'Nommer 4 parties', 'Associer rôle ↔ partie', 'Observer une germination' ],
    keywords: ['plantes', 'parties', 'germination'],
    sources: [ { title: 'La main à la pâte — Plantes', url: 'https://www.fondation-lamap.org', type: 'website', description: 'Séquences cycle 2' } ],
    body: {
      introduction: { title: 'Découvrir la plante', content: `**Racine** (boire), **tige** (tenir/transport), **feuilles** (fabriquer avec la lumière), **fleur** (reproduction).` },
      mainContent: [
        { type: 'example', title: 'Schéma légendé', content: `Racine ↓ — Tige | — Feuilles 🌿 — Fleur ✿.` },
        { type: 'activity', title: 'Germination du haricot', content: `Place un **haricot** dans un coton humide près d’une fenêtre. Observe 5 jours : **racine** puis **tige**.` },
        { type: 'exercise', title: 'Je relie', content: `Rôle → Partie : « Boire l’eau du sol » → **racine** ; « Tenir la plante » → **tige** …` },
        { type: 'summary', title: 'Récap', content: `Chaque partie a un **rôle**.` }
      ],
      conclusion: { summary: 'Tu connais les parties de la plante.', keyTakeaways: ['Racine/tige/feuille/fleur'], nextSteps: ['Découvrir les **animaux** (leçon 5)'], additionalResources: [ { title: 'Fiche schéma plante', description: 'Légender une plante', url: 'https://www.fondation-lamap.org' } ] }
    },
    assessment: { quiz: [ { question: 'Quelle partie absorbe l’eau ?', type: 'multiple-choice', options: ['Feuille','Racine'], correctAnswer: 'Racine', explanation: 'La racine puise l’eau.', points: 10 } ], passingScore: 80, timeLimit: 12 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sciences','n1','plantes'] }
  },

  'sciences-n1-fondamentaux-05': {
    slug: 'sciences-n1-fondamentaux-05',
    title: 'Les animaux : grandes familles et besoins',
    summary: 'Reconnaître quelques grandes familles (mammifères, oiseaux, poissons, reptiles, amphibiens) et leurs besoins communs.',
    level: 'n1-fondamentaux',
    subject: 'Sciences',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['sciences-n1-fondamentaux-04'],
    learningObjectives: [ 'Citer 5 familles', 'Donner 1 exemple par famille', 'Rappeler les besoins vitaux' ],
    keywords: ['animaux', 'classification', 'besoins'],
    sources: [ { title: 'Muséum national d’Histoire naturelle — Oiseaux et mammifères', url: 'https://www.mnhn.fr', type: 'website', description: 'Découvertes naturalistes' } ],
    body: {
      introduction: { title: 'Des animaux très différents', content: `**Mammifères** (chat), **oiseaux** (moineau), **poissons** (poisson rouge), **reptiles** (lézard), **amphibiens** (grenouille).` },
      mainContent: [
        { type: 'example', title: 'Indices rapides', content: `Oiseau = **plumes** ; Mammifère = **poils** ; Poisson = **nageoires** ; Reptile = **écailles** ; Amphibien = **peau nue**.` },
        { type: 'activity', title: 'Je classe', content: `Place **baleine, canard, carpe, serpent, grenouille** dans la bonne famille.` },
        { type: 'exercise', title: 'Besoins', content: `Tous ont besoin d’**air**, **eau**, **nourriture**, **abri**.` },
        { type: 'summary', title: 'Récap', content: `Familles + besoins communs.` }
      ],
      conclusion: { summary: 'Tu reconnais de grandes familles animales.', keyTakeaways: ['Plumes/poils/nageoires…'], nextSteps: ['Habitats et milieux (leçon 6)'], additionalResources: [ { title: 'Fiche animaux', description: 'Cartes à classer', url: 'https://www.fondation-lamap.org' } ] }
    },
    assessment: { quiz: [ { question: 'Le moineau appartient aux…', type: 'multiple-choice', options: ['Mammifères','Oiseaux'], correctAnswer: 'Oiseaux', explanation: 'Plumes = oiseau.', points: 10 } ], passingScore: 80, timeLimit: 10 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sciences','n1','animaux'] }
  },

  'sciences-n1-fondamentaux-06': {
    slug: 'sciences-n1-fondamentaux-06',
    title: 'Habitats et milieux : forêt, désert, mer',
    summary: 'Relier quelques animaux/plantes à leur habitat et comprendre l’idée d’adaptation simple.',
    level: 'n1-fondamentaux',
    subject: 'Sciences',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['sciences-n1-fondamentaux-05'],
    learningObjectives: [ 'Citer 3 habitats', 'Associer 2 êtres vivants par habitat', 'Comprendre « s’adapter » simplement' ],
    keywords: ['habitats', 'milieux', 'adaptation'],
    sources: [ { title: 'Parc zoologique — fiches habitats', url: 'https://www.parczoologiqueparis.fr', type: 'website', description: 'Milieux de vie et espèces' } ],
    body: {
      introduction: { title: 'Où vivent-ils ?', content: `**Forêt** (renard, chêne), **désert** (dromadaire, cactus), **mer** (poisson, algues).` },
      mainContent: [
        { type: 'example', title: 'Adaptations', content: `Dromadaire : réserve d’eau ; Cactus : stocke l’eau ; Poisson : nageoires et branchies.` },
        { type: 'activity', title: 'Relie', content: `Relie chaque animal à son **habitat** : renard ↔ forêt ; dromadaire ↔ désert ; thon ↔ mer.` },
        { type: 'exercise', title: 'Je justifie', content: `Pourquoi le **cactus** vit-il au désert ?` },
        { type: 'summary', title: 'Récap', content: `Milieu = **besoins adaptés**.` }
      ],
      conclusion: { summary: 'Tu fais le lien entre êtres vivants et milieux.', keyTakeaways: ['Forêt/désert/mer'], nextSteps: ['Météo & saisons (leçon 7)'], additionalResources: [ { title: 'Cartes habitats', description: 'Forêt, désert, mer à manipuler', url: 'https://www.fondation-lamap.org' } ] }
    },
    assessment: { quiz: [ { question: 'Le dromadaire vit surtout…', type: 'multiple-choice', options: ['En forêt','Au désert'], correctAnswer: 'Au désert', explanation: 'Adapté au désert.', points: 10 } ], passingScore: 80, timeLimit: 10 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sciences','n1','habitats'] }
  },

  'sciences-n1-fondamentaux-07': {
    slug: 'sciences-n1-fondamentaux-07',
    title: 'Météo et saisons : observer le temps qu’il fait',
    summary: 'Nommer des phénomènes météo simples (pluie, vent, soleil, nuages), lire un thermomètre simple, relier aux saisons.',
    level: 'n1-fondamentaux',
    subject: 'Sciences',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['sciences-n1-fondamentaux-06'],
    learningObjectives: [ 'Décrire la météo du jour', 'Lire la température entière', 'Associer activités/saisons' ],
    keywords: ['météo', 'saisons', 'thermomètre'],
    sources: [ { title: 'Météo-France — Météo des enfants', url: 'https://meteofrance.com', type: 'website', description: 'Découvrir la météo' } ],
    body: {
      introduction: { title: 'Quel temps fait-il ?', content: `Météo : **ensoleillé**, **nuageux**, **pluvieux**, **venteux** ; Température : nombre de **degrés** (°C).` },
      mainContent: [
        { type: 'example', title: 'Thermomètre', content: `Lecture **entières** : 0°C (très froid), 10°C (frais), 20°C (doux), 30°C (chaud).` },
        { type: 'activity', title: 'Journal météo', content: `Sur 5 jours : dessine le **pictogramme** du temps et note la température.` },
        { type: 'exercise', title: 'Saisons', content: `Associe **neige** → hiver ; **fleurs** → printemps ; **plage** → été ; **feuilles qui tombent** → automne.` },
        { type: 'summary', title: 'Récap', content: `Décrire, mesurer, relier aux saisons.` }
      ],
      conclusion: { summary: 'Tu sais décrire la météo simplement.', keyTakeaways: ['Pictogrammes','°C','Saisons'], nextSteps: ['États de la matière & eau (leçon 8)'], additionalResources: [ { title: 'Roue des saisons', description: 'Activité à fabriquer', url: 'https://www.fondation-lamap.org' } ] }
    },
    assessment: { quiz: [ { question: '20°C correspond à…', type: 'multiple-choice', options: ['Très froid','Plutôt doux'], correctAnswer: 'Plutôt doux', explanation: 'Température modérée', points: 10 } ], passingScore: 80, timeLimit: 10 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sciences','n1','météo'] }
  },

  'sciences-n1-fondamentaux-08': {
    slug: 'sciences-n1-fondamentaux-08',
    title: 'L’eau autour de nous : solide, liquide, gaz',
    summary: 'Découvrir les états de l’eau et quelques changements simples (glace ↔ eau ↔ vapeur).',
    level: 'n1-fondamentaux',
    subject: 'Sciences',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['sciences-n1-fondamentaux-07'],
    learningObjectives: [ 'Nommer 3 états de l’eau', 'Observer fonte/évaporation (sécurité)', 'Relier météo ↔ états' ],
    keywords: ['eau', 'solide', 'liquide', 'gaz'],
    sources: [ { title: 'Cité des sciences — Eau', url: 'https://www.cite-sciences.fr', type: 'website', description: 'Ateliers et ressources sur l’eau' } ],
    body: {
      introduction: { title: 'Trois états', content: `**Glace** = solide ; **eau** = liquide ; **vapeur** = gaz.` },
      mainContent: [
        { type: 'example', title: 'Changements', content: `**Glace → eau** = fondre ; **Eau → vapeur** = s’évaporer ; **Vapeur → eau** = se condenser.` },
        { type: 'activity', title: 'Gobelets d’eau', content: `Place un gobelet d’eau **au soleil** et un **à l’ombre**. Observe : le niveau baisse au soleil (évaporation).` },
        { type: 'exercise', title: 'Je relie', content: `Neige → **solide** ; Pluie → **liquide** ; Nuage → **gouttelettes/gaz** (mélange).` },
        { type: 'summary', title: 'Récap', content: `L’eau change d’état selon la **température**.` }
      ],
      conclusion: { summary: 'Tu sais nommer les états de l’eau.', keyTakeaways: ['Solide/liquide/gaz'], nextSteps: ['Matériaux et propriétés (leçon 9)'], additionalResources: [ { title: 'Fiche états de l’eau', description: 'Schéma à compléter', url: 'https://www.fondation-lamap.org' } ] }
    },
    assessment: { quiz: [ { question: 'La glace qui fond devient…', type: 'multiple-choice', options: ['Gaz','Liquide'], correctAnswer: 'Liquide', explanation: 'Fonte = solide → liquide', points: 10 } ], passingScore: 80, timeLimit: 10 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sciences','n1','eau'] }
  },

  'sciences-n1-fondamentaux-09': {
    slug: 'sciences-n1-fondamentaux-09',
    title: 'Matières et matériaux : propriétés simples',
    summary: 'Reconnaître quelques matériaux (bois, métal, plastique, verre, tissu) et leurs propriétés (dur, souple, étanche, transparent).',
    level: 'n1-fondamentaux',
    subject: 'Sciences',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['sciences-n1-fondamentaux-08'],
    learningObjectives: [ 'Nommer 5 matériaux', 'Associer objets ↔ matériau', 'Choisir un matériau selon une propriété' ],
    keywords: ['matériaux', 'propriétés', 'objets'],
    sources: [ { title: 'La main à la pâte — Matériaux', url: 'https://www.fondation-lamap.org', type: 'website', description: 'Ateliers de tri et tests' } ],
    body: {
      introduction: { title: 'De quoi est fait l’objet ?', content: `**Bois**, **métal**, **plastique**, **verre**, **tissu** : chaque matériau a des **propriétés**.` },
      mainContent: [
        { type: 'example', title: 'Propriétés', content: `Dur (métal), **souple** (tissu), **étanche** (plastique), **transparent** (verre), **isolant** (bois).` },
        { type: 'activity', title: 'Test d’étanchéité', content: `Quel gobelet retient l’eau ? (plastique vs carton).` },
        { type: 'exercise', title: 'Bon choix', content: `Pour une **fenêtre**, je choisis : **verre** (transparent).` },
        { type: 'summary', title: 'Récap', content: `On **choisit** un matériau selon l’usage.` }
      ],
      conclusion: { summary: 'Tu relis objets et matériaux.', keyTakeaways: ['Propriétés utiles'], nextSteps: ['Forces et mouvements (leçon 10)'], additionalResources: [ { title: 'Fiche tri matériaux', description: 'Tableau à cocher', url: 'https://www.fondation-lamap.org' } ] }
    },
    assessment: { quiz: [ { question: 'Quel matériau est transparent ?', type: 'multiple-choice', options: ['Verre','Bois'], correctAnswer: 'Verre', explanation: 'On voit à travers.', points: 10 } ], passingScore: 80, timeLimit: 10 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sciences','n1','matériaux'] }
  },

  'sciences-n1-fondamentaux-10': {
    slug: 'sciences-n1-fondamentaux-10',
    title: 'Forces et mouvements : pousser, tirer, frotter',
    summary: 'Comprendre qu’un mouvement change avec une force (pousser/tirer) et que le frottement peut ralentir.',
    level: 'n1-fondamentaux',
    subject: 'Sciences',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['sciences-n1-fondamentaux-09'],
    learningObjectives: [ 'Identifier pousser/tirer', 'Relier force ↔ changement de mouvement', 'Comprendre le rôle du frottement' ],
    keywords: ['forces', 'mouvement', 'frottement'],
    sources: [ { title: 'Cité des sciences — Mouvement', url: 'https://www.cite-sciences.fr', type: 'website', description: 'Ressources jeunes publics' } ],
    body: {
      introduction: { title: 'Mettre en mouvement', content: `Une **force** (pousser/tirer) peut **démarrer**, **arrêter** ou **changer** la direction d’un objet.` },
      mainContent: [
        { type: 'example', title: 'Pousser vs tirer', content: `Tirer un chariot / pousser une boîte.` },
        { type: 'activity', title: 'Course de billes', content: `Fais rouler une bille sur **table**, **serviette**, **herbe** : où va-t-elle le plus loin ? (moins de **frottement**).` },
        { type: 'exercise', title: 'Je prévois', content: `Sur glace lisse, la bille ira **plus loin**/**moins loin** ? (plus loin).` },
        { type: 'summary', title: 'Récap', content: `Force → mouvement ; **frottement** ralentit.` }
      ],
      conclusion: { summary: 'Tu manipules la notion de force.', keyTakeaways: ['Pousser/Tirer','Frottement'], nextSteps: ['Terre et ciel (leçon 11)'], additionalResources: [ { title: 'Fiche expériences mouvement', description: 'Protocoles simples', url: 'https://www.fondation-lamap.org' } ] }
    },
    assessment: { quiz: [ { question: 'Le frottement fait…', type: 'multiple-choice', options: ['Accélérer','Ralentir'], correctAnswer: 'Ralentir', explanation: 'Opposition au mouvement', points: 10 } ], passingScore: 80, timeLimit: 10 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sciences','n1','forces'] }
  },

  'sciences-n1-fondamentaux-11': {
    slug: 'sciences-n1-fondamentaux-11',
    title: 'Terre et ciel : jour/nuit, Soleil, Lune et ombres',
    summary: 'Comprendre l’alternance jour/nuit, repérer le Soleil comme source de lumière et d’ombre ; découvrir la Lune.',
    level: 'n1-fondamentaux',
    subject: 'Sciences',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['sciences-n1-fondamentaux-10'],
    learningObjectives: [ 'Distinguer jour/nuit', 'Comprendre ombre/lumière', 'Observer la Lune' ],
    keywords: ['Terre', 'Soleil', 'Lune', 'ombre'],
    sources: [ { title: 'NASA Space Place (FR) — Soleil & Lune', url: 'https://spaceplace.nasa.gov', type: 'website', description: 'Ressources enfants' } ],
    body: {
      introduction: { title: 'Lumière et ombres', content: `Le **Soleil** éclaire la Terre : c’est le **jour**. Quand il n’éclaire plus notre région : c’est la **nuit**. Un objet **bloque** la lumière → **ombre**.` },
      mainContent: [
        { type: 'activity', title: 'Ombres portées', content: `Au soleil, observe l’ombre d’un bâton le matin et l’après-midi : la **longueur** change.` },
        { type: 'example', title: 'La Lune', content: `La Lune **ne brille pas** par elle-même : elle **réfléchit** la lumière du Soleil.` },
        { type: 'exercise', title: 'Vrai/Faux', content: `La nuit, il n’y a plus de Soleil dans le ciel de la Terre (Vrai, pour notre côté).` },
        { type: 'summary', title: 'Récap', content: `Jour/nuit, ombre, Lune éclairée par le Soleil.` }
      ],
      conclusion: { summary: 'Tu comprends les cycles simples Terre-ciel.', keyTakeaways: ['Jour/Nuit','Ombres','Lune'], nextSteps: ['Hygiène et santé (leçon 12)'], additionalResources: [ { title: 'Carte d’observation de la Lune', description: 'Suivi sur un mois', url: 'https://spaceplace.nasa.gov' } ] }
    },
    assessment: { quiz: [ { question: 'Une ombre apparaît quand…', type: 'multiple-choice', options: ['La lumière passe à travers','La lumière est bloquée'], correctAnswer: 'La lumière est bloquée', explanation: 'Ombre = absence de lumière', points: 10 } ], passingScore: 80, timeLimit: 10 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sciences','n1','terre-ciel'] }
  },

  'sciences-n1-fondamentaux-12': {
    slug: 'sciences-n1-fondamentaux-12',
    title: 'Hygiène et santé : se protéger et rester en forme',
    summary: 'Gestes d’hygiène (mains, dents), sommeil, activité physique et alimentation équilibrée ; sécurité domestique simple.',
    level: 'n1-fondamentaux',
    subject: 'Sciences',
    ageGroup: '6-8 ans',
    estimatedMinutes: 24,
    isLocked: false,
    prerequisites: [
      'sciences-n1-fondamentaux-01','sciences-n1-fondamentaux-02','sciences-n1-fondamentaux-03'
    ],
    learningObjectives: [ 'Lister 4 gestes d’hygiène', 'Citer 3 familles d’aliments', 'Relier sommeil/activité à la santé' ],
    keywords: ['hygiène', 'santé', 'sécurité'],
    sources: [
      { title: 'Santé publique France — Hygiène mains', url: 'https://www.santepubliquefrance.fr', type: 'website', description: 'Ressources éducatives' }
    ],
    body: {
      introduction: { title: 'Mon corps en forme', content: `**Se laver les mains**, **brosser ses dents**, **bien dormir**, **bouger** chaque jour, **manger équilibré**.` },
      mainContent: [
        { type: 'example', title: 'Routine santé', content: `Lavage des mains : avant de manger / après toilettes. Dents : matin et soir 2 min.` },
        { type: 'activity', title: 'Mon menu équilibré', content: `Compose une assiette : **fruits/légumes**, **féculents**, **protéines**, **eau**.` },
        { type: 'exercise', title: 'Sécurité', content: `Entoure les **gestes sûrs** : ne pas toucher les prises ; demander pour utiliser une paire de ciseaux.` },
        { type: 'summary', title: 'Récap', content: `Habitudes qui **protègent** ma santé.` }
      ],
      conclusion: { summary: 'Tu connais les gestes pour rester en bonne santé.', keyTakeaways: ['Hygiène','Sommeil','Bouger','Manger équilibré'], nextSteps: ['Bilan N1 : mini-projet d’investigation à la maison'], additionalResources: [ { title: 'Affiche hygiène des mains', description: 'Étapes illustrées', url: 'https://www.santepubliquefrance.fr' } ] }
    },
    assessment: {
      quiz: [
        { question: 'On se lave les mains…', type: 'multiple-choice', options: ['Après avoir joué dehors uniquement','Avant de manger et après les toilettes'], correctAnswer: 'Avant de manger et après les toilettes', explanation: 'Moments clés', points: 10 },
        { question: 'La boisson conseillée au quotidien est…', type: 'multiple-choice', options: ['Soda','Eau'], correctAnswer: 'Eau', explanation: 'Hydratation saine', points: 10 }
      ],
      passingScore: 80,
      timeLimit: 14
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['sciences','n1','hygiène'] }
  }
}
