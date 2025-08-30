import { Lesson } from './lessons'

export const allLessonsInformatique: Record<string, Lesson> = {
  'informatique-n1-fondamentaux-01': {
    slug: 'informatique-n1-fondamentaux-01',
    title: "Découvrir l'ordinateur : à quoi ça sert ?",
    summary: "Identifier les parties d'un ordinateur (écran, clavier, souris/tablette) et adopter les bons gestes (allumer/éteindre, posture).",
    level: 'n1-fondamentaux',
    subject: 'Informatique',
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: [],
    learningObjectives: [
      "Nommer écran, unité centrale/tablette, clavier, souris/touchpad",
      "Allumer / éteindre correctement",
      "Adopter une posture confortable et sûre"
    ],
    keywords: ['ordinateur','écran','clavier','souris','posture'],
    sources: [
      { title: 'CNED — Premiers pas numériques', url: 'https://www.cned.fr', type: 'website', description: 'Découverte du matériel' }
    ],
    body: {
      introduction: {
        title: "Bienvenue dans l'univers de l'informatique !",
        content: `Un **ordinateur** sert à **écrire**, **dessiner**, **apprendre**, **jouer**, et **communiquer**. Il se compose d’un **écran**, d’un **clavier**, et d’une **souris** (ou d’un **écran tactile**).`
      },
      mainContent: [
        { type: 'concept', title: 'Les parties principales', content: `Écran = ce que l’on **voit** ; Clavier = on **écrit** ; Souris/touchpad = on **pointe** et **clique**.` },
        { type: 'example', title: 'Gestes sûrs', content: `On **allume** avec le bouton, on **éteint** via **Quitter/Arrêter** (pas en débranchant). Posture : dos droit, écran à distance d’un bras.` },
        { type: 'activity', title: 'Je repère', content: `Entoure sur une photo : **écran / clavier / souris**.` },
        { type: 'exercise', title: 'Routine', content: `Allume → Ouvre le programme « Dessin » → Ferme → Éteins correctement.` },
        { type: 'summary', title: 'Récap', content: `Je nomme les **parties** et j’adopte les **bons gestes**.` }
      ],
      conclusion: {
        summary: "Tu sais identifier l'ordinateur et l'utiliser en sécurité.",
        keyTakeaways: ['Écran/Clavier/Souris','Allumer/Éteindre','Posture'],
        nextSteps: ['Maîtriser la **souris et le clavier** (leçon 2)'],
        additionalResources: [ { title: 'Affiche matériel', description: 'Parts of a computer', url: 'https://www.cned.fr' } ]
      }
    },
    assessment: {
      quiz: [
        { question: 'À quoi sert le clavier ?', type: 'multiple-choice', options: ['À voir','À écrire'], correctAnswer: 'À écrire', explanation: 'Le clavier sert à saisir du texte.', points: 10 },
        { question: 'Comment éteindre correctement ?', type: 'multiple-choice', options: ['Débrancher','Menu Arrêter/Éteindre'], correctAnswer: 'Menu Arrêter/Éteindre', explanation: 'On arrête via le système.', points: 10 }
      ],
      passingScore: 80,
      timeLimit: 10
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['informatique','n1','découverte'] }
  },

  'informatique-n1-fondamentaux-02': {
    slug: 'informatique-n1-fondamentaux-02',
    title: 'Souris et clavier : cliquer, glisser, taper',
    summary: 'Apprendre les actions de base : clic, double-clic, glisser-déposer ; touches Entrée, Espace, Retour arrière, Majuscule.',
    level: 'n1-fondamentaux',
    subject: 'Informatique',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['informatique-n1-fondamentaux-01'],
    learningObjectives: [ 'Pointer et cliquer avec précision', 'Glisser-déposer un objet', 'Taper son prénom et une courte phrase' ],
    keywords: ['souris','clavier','cliquer','glisser','taper'],
    sources: [ { title: 'Pix — Compétences numériques débutant', url: 'https://pix.fr', type: 'website', description: 'Gestes élémentaires' } ],
    body: {
      introduction: { title: 'Pointer, cliquer, taper', content: `**Clic gauche** pour sélectionner, **double-clic** pour ouvrir, **glisser** pour déplacer. Clavier : **Espace**, **Entrée**, **Retour arrière (⌫)**, **Majuscule**.` },
      mainContent: [
        { type: 'activity', title: 'Je vise', content: `Clique sur 10 cibles (grosses puis petites).` },
        { type: 'exercise', title: 'Je tape', content: `Écris ton **prénom** puis « Bonjour ! ». Utilise **Majuscule** pour la première lettre.` },
        { type: 'summary', title: 'Récap', content: `Souris précise + frappe simple.` }
      ],
      conclusion: { summary: 'Tu sais cliquer et taper des mots.', keyTakeaways: ['clic/double-clic','glisser','taper'], nextSteps: ['Découvrir **fichiers et dossiers** (leçon 3)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Pour ouvrir un dossier :', type: 'multiple-choice', options: ['Un clic','Un double-clic'], correctAnswer: 'Un double-clic', explanation: 'Comportement courant', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['informatique','n1','souris-clavier'] }
  },

  'informatique-n1-fondamentaux-03': {
    slug: 'informatique-n1-fondamentaux-03',
    title: 'Fichiers et dossiers : ranger pour retrouver',
    summary: 'Créer, nommer, enregistrer et ouvrir un fichier ; organiser dans des dossiers ; glisser-déposer.',
    level: 'n1-fondamentaux',
    subject: 'Informatique',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['informatique-n1-fondamentaux-02'],
    learningObjectives: [ 'Créer/renommer un dossier', 'Enregistrer un document', 'Ouvrir/fermer correctement' ],
    keywords: ['fichier','dossier','enregistrer','ouvrir'],
    sources: [ { title: 'CNED — Organiser ses fichiers', url: 'https://www.cned.fr', type: 'website', description: 'Arborescence simple' } ],
    body: {
      introduction: { title: 'Un classeur numérique', content: `Un **fichier** est comme une **feuille**. Un **dossier** est comme une **chemise**. On les **nomme** clairement.` },
      mainContent: [
        { type: 'example', title: 'Bon nommage', content: `« Dessin_chat_2025 » mieux que « Nouveau document ».` },
        { type: 'activity', title: 'Je range', content: `Crée un dossier **Mes travaux** puis un sous-dossier **Dessins**. Enregistre un dessin dedans.` },
        { type: 'exercise', title: 'Je retrouve', content: `Ouvre le fichier « Dessin_chat_2025 ». Modifie → Enregistre.` },
        { type: 'summary', title: 'Récap', content: `Créer/nommer/enregistrer/ouvrir.` }
      ],
      conclusion: { summary: 'Tu sais ranger tes documents.', keyTakeaways: ['Arborescence','Nom clair'], nextSteps: ['Découvrir **Internet** (leçon 4)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Un dossier, c’est…', type: 'multiple-choice', options: ['Une feuille','Une chemise qui contient des fichiers'], correctAnswer: 'Une chemise qui contient des fichiers', explanation: 'Image mentale utile', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['informatique','n1','fichiers'] }
  },

  'informatique-n1-fondamentaux-04': {
    slug: 'informatique-n1-fondamentaux-04',
    title: 'Internet et sécurité : règles d’or',
    summary: 'Découvrir le navigateur, un lien, un onglet ; connaître 3 règles de sécurité (infos perso, demande à un adulte, mots de passe).',
    level: 'n1-fondamentaux',
    subject: 'Informatique',
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: ['informatique-n1-fondamentaux-03'],
    learningObjectives: [ 'Ouvrir un site depuis un favori', 'Reconnaître un lien', 'Dire 3 règles de sécurité' ],
    keywords: ['internet','navigateur','sécurité','CNIL'],
    sources: [ { title: 'CNIL — Internet sans crainte', url: 'https://www.cnil.fr', type: 'website', description: 'Règles simples pour les enfants' } ],
    body: {
      introduction: { title: 'Naviguer en sécurité', content: `**Navigateur** = application pour aller sur le **Web**. **Lien** = texte/image qui mène vers une page. **Onglet** = nouvelle page.` },
      mainContent: [
        { type: 'concept', title: '3 règles d’or', content: `1) Ne jamais partager **nom/adresse/téléphone** ; 2) **Demander** à un adulte si un message te gêne ; 3) Utiliser des **mots de passe** forts avec un adulte.` },
        { type: 'activity', title: 'Je repère un lien', content: `Sur une capture, entoure **les liens** (mots soulignés).` },
        { type: 'exercise', title: 'Vrai/Faux', content: `Donner son adresse à un inconnu en ligne : **Faux**.` },
        { type: 'summary', title: 'Récap', content: `Découvrir le Web en **sécurité**.` }
      ],
      conclusion: { summary: 'Tu connais les règles essentielles.', keyTakeaways: ['Infos perso','Demander aide','Mot de passe'], nextSteps: ['Penser **algorithmes** (leçon 5)'], additionalResources: [ { title: 'Internet Sans Crainte (jeune public)', description: 'Supports pédagogiques', url: 'https://www.internetsanscrainte.fr' } ] }
    },
    assessment: { quiz: [ { question: 'On partage son adresse à un inconnu ?', type: 'multiple-choice', options: ['Oui','Non'], correctAnswer: 'Non', explanation: 'Règle de sécurité', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['informatique','n1','internet-sécurité'] }
  },

  'informatique-n1-fondamentaux-05': {
    slug: 'informatique-n1-fondamentaux-05',
    title: 'Pensée algorithmique — séquences (débranché)',
    summary: 'Comprendre qu’un programme est une **suite ordonnée** d’instructions ; créer des séquences pour un « robot ». ',
    level: 'n1-fondamentaux',
    subject: 'Informatique',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['informatique-n1-fondamentaux-04'],
    learningObjectives: [ 'Ordonner des étapes', 'Décrire un trajet sur quadrillage', 'Exécuter une séquence simple' ],
    keywords: ['algorithme','séquence','débranché'],
    sources: [ { title: 'code.org — CS Unplugged (débutants)', url: 'https://code.org', type: 'website', description: 'Activités sans écran' } ],
    body: {
      introduction: { title: 'Un programme = une recette', content: `Comme une recette de cuisine : **d’abord**, **ensuite**, **puis**. L’ordre compte !` },
      mainContent: [
        { type: 'activity', title: 'Robot en classe', content: `Donne des ordres **Avance / Tourne à droite / Tourne à gauche** pour atteindre un autocollant.` },
        { type: 'exercise', title: 'Je code sur quadrillage', content: `Depuis (0,0) jusqu’à (2,1) : **Avance, Avance, Droite, Avance**.` },
        { type: 'summary', title: 'Récap', content: `Séquence = **ordre d’actions**.` }
      ],
      conclusion: { summary: 'Tu sais écrire une petite séquence.', keyTakeaways: ['Ordre','Instructions'], nextSteps: ['Ajouter des **boucles** (leçon 6)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Dans un programme, l’**ordre** est-il important ?', type: 'multiple-choice', options: ['Non','Oui'], correctAnswer: 'Oui', explanation: 'Séquence = ordre', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['informatique','n1','algorithmes'] }
  },

  'informatique-n1-fondamentaux-06': {
    slug: 'informatique-n1-fondamentaux-06',
    title: 'Boucles — répéter pour aller plus vite (débranché)',
    summary: 'Découvrir la répétition : « répète 4 fois avancer » ; simplifier une longue séquence par une boucle.',
    level: 'n1-fondamentaux',
    subject: 'Informatique',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['informatique-n1-fondamentaux-05'],
    learningObjectives: [ 'Remplacer répétitions par boucle', 'Exécuter une boucle simple', 'Comprendre « répète N fois »' ],
    keywords: ['boucle','répétition','unplugged'],
    sources: [ { title: 'CS Unplugged — Répétitions', url: 'https://csunplugged.org', type: 'website', description: 'Activités papier' } ],
    body: {
      introduction: { title: 'Répéter efficacement', content: `Au lieu de **Avance, Avance, Avance, Avance** → **Répète 4 fois [Avance]**.` },
      mainContent: [
        { type: 'example', title: 'Motifs', content: `Dessine un motif de **4** carrés : **Répète 4 fois [■]**.` },
        { type: 'activity', title: 'Parcours', content: `Atteins la case (0,4) : **Répète 4 fois [Avance]**.` },
        { type: 'summary', title: 'Récap', content: `Boucle = **répéter** plusieurs fois.` }
      ],
      conclusion: { summary: 'Tu sais utiliser les boucles.', keyTakeaways: ['Répète N fois'], nextSteps: ['Découvrir les **conditions** (leçon 7)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Quelle écriture est plus courte ?', type: 'multiple-choice', options: ['Avance x4','Répète 4 fois [Avance]'], correctAnswer: 'Répète 4 fois [Avance]', explanation: 'Notion de boucle', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['informatique','n1','boucles'] }
  },

  'informatique-n1-fondamentaux-07': {
    slug: 'informatique-n1-fondamentaux-07',
    title: 'Conditions simples — si … alors … (débranché)',
    summary: 'Introduire la logique conditionnelle : SI carte rouge ALORS stop, SINON avance ; choisir une action selon une situation.',
    level: 'n1-fondamentaux',
    subject: 'Informatique',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['informatique-n1-fondamentaux-06'],
    learningObjectives: [ 'Comprendre SI/ALORS', 'Choisir une action selon une condition', 'Combiner condition + séquence' ],
    keywords: ['condition','si alors','logique'],
    sources: [ { title: 'code.org — If/Else (débutants)', url: 'https://code.org', type: 'website', description: 'Cours visuels' } ],
    body: {
      introduction: { title: 'Décider selon la situation', content: `**SI** carte **rouge** → **stop** ; **SINON** → **avance**. ` },
      mainContent: [
        { type: 'activity', title: 'Feu tricolore', content: `Rouge = stop ; Vert = avance ; Orange = avance **doucement**.` },
        { type: 'exercise', title: 'Labyrinthe', content: `**SI** mur **ALORS** tourne à gauche **SINON** avance.` },
        { type: 'summary', title: 'Récap', content: `Condition = **choisir** une action.` }
      ],
      conclusion: { summary: 'Tu sais utiliser une condition simple.', keyTakeaways: ['Si/Alors'], nextSteps: ['Passer au **codage par blocs** (leçon 8)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'SI rouge ALORS…', type: 'multiple-choice', options: ['Avancer','Stop'], correctAnswer: 'Stop', explanation: 'Règle du feu', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['informatique','n1','conditions'] }
  },

  'informatique-n1-fondamentaux-08': {
    slug: 'informatique-n1-fondamentaux-08',
    title: 'Programmer par blocs — premiers scripts (Scratch/Blockly)',
    summary: 'Créer un mini-programme avec « quand drapeau cliqué », « dire », « avancer » ; déplacer un personnage.',
    level: 'n1-fondamentaux',
    subject: 'Informatique',
    ageGroup: '6-8 ans',
    estimatedMinutes: 22,
    isLocked: false,
    prerequisites: ['informatique-n1-fondamentaux-07'],
    learningObjectives: [ 'Lancer un script (événement)', 'Déplacer un sprite', 'Afficher un message' ],
    keywords: ['scratch','blockly','événements','sprites'],
    sources: [ { title: 'Scratch — Getting Started', url: 'https://scratch.mit.edu', type: 'website', description: 'Démarrer avec Scratch' } ],
    body: {
      introduction: { title: 'Drag & drop', content: `On **assemble** des **blocs** comme des **Lego**. Exemple d’événement : **Quand drapeau vert cliqué**.` },
      mainContent: [
        { type: 'example', title: 'Script de base', content: `Quand **drapeau cliqué** → **dire \"Bonjour !\"** → **avancer de 10 pas**.` },
        { type: 'activity', title: 'Je déplace', content: `Fais bouger ton personnage **à droite** puis **à gauche** en appuyant sur les flèches.` },
        { type: 'summary', title: 'Récap', content: `Événement + action(s) = **script**.` }
      ],
      conclusion: { summary: 'Tu as créé ton premier script 🎉', keyTakeaways: ['Blocs','Événements','Déplacement'], nextSteps: ['Ajouter **sons et décors** (leçon 9)'], additionalResources: [ { title: 'Tutoriels Scratch Junior', description: 'Pas à pas visuels', url: 'https://scratch.mit.edu' } ] }
    },
    assessment: { quiz: [ { question: 'Quel bloc démarre un script ?', type: 'multiple-choice', options: ['Dire','Quand drapeau cliqué'], correctAnswer: 'Quand drapeau cliqué', explanation: 'Bloc événement', points: 10 } ], passingScore: 80, timeLimit: 9 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['informatique','n1','blocs'] }
  },

  'informatique-n1-fondamentaux-09': {
    slug: 'informatique-n1-fondamentaux-09',
    title: 'Sons, costumes et décors — enrichir un projet',
    summary: 'Changer le costume d’un sprite, changer le décor, jouer un son au bon moment.',
    level: 'n1-fondamentaux',
    subject: 'Informatique',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['informatique-n1-fondamentaux-08'],
    learningObjectives: [ 'Changer costume/décor', 'Jouer un son', 'Synchroniser son + action' ],
    keywords: ['sons','costumes','décors','multimédia'],
    sources: [ { title: 'Scratch — Sounds & Costumes', url: 'https://scratch.mit.edu', type: 'website', description: 'Tutoriels média' } ],
    body: {
      introduction: { title: 'Rendre vivant', content: `Un **costume** change l’apparence d’un personnage. Un **décor** change l’arrière-plan. On peut **jouer un son**.` },
      mainContent: [
        { type: 'example', title: 'Script', content: `Quand **drapeau cliqué** → **changer costume** → **jouer son** → **dire \"Coucou !\"**.` },
        { type: 'activity', title: 'Carte animée', content: `Crée une **carte de vœux** : nouveau décor + son + message.` },
        { type: 'summary', title: 'Récap', content: `Costume + décor + son = **projet riche**.` }
      ],
      conclusion: { summary: 'Tu sais enrichir ton projet.', keyTakeaways: ['Costumes','Décors','Sons'], nextSteps: ['**Déboguer** un script (leçon 10)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Pour changer l’apparence du personnage :', type: 'multiple-choice', options: ['Décor','Costume'], correctAnswer: 'Costume', explanation: 'Décor = fond', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['informatique','n1','média'] }
  },

  'informatique-n1-fondamentaux-10': {
    slug: 'informatique-n1-fondamentaux-10',
    title: 'Débogage — trouver et corriger les erreurs',
    summary: 'Tester étape par étape, repérer où ça bloque, modifier un bloc ; stratégie « essayer → observer → corriger ». ',
    level: 'n1-fondamentaux',
    subject: 'Informatique',
    ageGroup: '6-8 ans',
    estimatedMinutes: 18,
    isLocked: false,
    prerequisites: ['informatique-n1-fondamentaux-09'],
    learningObjectives: [ 'Tester un script', 'Repérer une erreur', 'Corriger et retester' ],
    keywords: ['débogage','erreur','tester'],
    sources: [ { title: 'code.org — Debugging basics', url: 'https://code.org', type: 'website', description: 'Essayer, observer, corriger' } ],
    body: {
      introduction: { title: 'Tout le monde se trompe, et c’est normal !', content: `Le **débogage** sert à **corriger** les erreurs. On **essaie**, on **observe**, on **corrige**, on **réessaie**.` },
      mainContent: [
        { type: 'activity', title: 'Où est l’erreur ?', content: `Le personnage ne bouge pas : le bloc **événement** manque. Ajoute **Quand drapeau cliqué**.` },
        { type: 'exercise', title: 'Étapes', content: `1) Lancer 2) Observer 3) Changer un bloc 4) Relancer 5) Valider.` },
        { type: 'summary', title: 'Récap', content: `Déboguer = **améliorer**.` }
      ],
      conclusion: { summary: 'Tu sais déboguer un petit script.', keyTakeaways: ['Tester','Corriger'], nextSteps: ['Événements clavier/souris (leçon 11)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Le script ne démarre pas. Il manque souvent…', type: 'multiple-choice', options: ['Un décor','Un bloc événement'], correctAnswer: 'Un bloc événement', explanation: 'Ex: quand drapeau cliqué', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['informatique','n1','debug'] }
  },

  'informatique-n1-fondamentaux-11': {
    slug: 'informatique-n1-fondamentaux-11',
    title: 'Événements clavier/souris — interactions',
    summary: 'Réagir à une touche du clavier (flèche droite/gauche) et au clic de la souris ; créer une mini-interaction.',
    level: 'n1-fondamentaux',
    subject: 'Informatique',
    ageGroup: '6-8 ans',
    estimatedMinutes: 20,
    isLocked: false,
    prerequisites: ['informatique-n1-fondamentaux-10'],
    learningObjectives: [ 'Utiliser événements clavier', 'Utiliser événement clic', 'Créer une mini-interaction' ],
    keywords: ['événements','clavier','souris','interaction'],
    sources: [ { title: 'Scratch — Events', url: 'https://scratch.mit.edu', type: 'website', description: 'Réagir aux entrées' } ],
    body: {
      introduction: { title: 'Je joue avec mon programme', content: `**Quand touche →** le sprite **bouge** ; **Quand clic →** il **parle**.` },
      mainContent: [
        { type: 'example', title: 'Scripts', content: `Quand **touche droite pressée** → **x = x + 10** ; Quand **sprite cliqué** → **dire \"Salut !\"**` },
        { type: 'activity', title: 'Mini-jeu', content: `Déplace le personnage pour **attraper** une étoile.` },
        { type: 'summary', title: 'Récap', content: `Interactions = **événements utilisateurs**.` }
      ],
      conclusion: { summary: 'Ton projet réagit à toi ✨', keyTakeaways: ['Clavier','Souris','Événements'], nextSteps: ['Projet final (leçon 12)'], additionalResources: [] }
    },
    assessment: { quiz: [ { question: 'Pour réagir à la flèche droite, on utilise…', type: 'multiple-choice', options: ['Un décor','Un événement clavier'], correctAnswer: 'Un événement clavier', explanation: 'Entrée utilisateur', points: 10 } ], passingScore: 80, timeLimit: 8 },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['informatique','n1','événements'] }
  },

  'informatique-n1-fondamentaux-12': {
    slug: 'informatique-n1-fondamentaux-12',
    title: 'Projet & Évaluation N1 — Carte animée interactive',
    summary: 'Réaliser une petite carte animée : message + décor + son + déplacement + interaction clavier/souris. Quiz final sur les notions-clés.',
    level: 'n1-fondamentaux',
    subject: 'Informatique',
    ageGroup: '6-8 ans',
    estimatedMinutes: 25,
    isLocked: false,
    prerequisites: [
      'informatique-n1-fondamentaux-01','informatique-n1-fondamentaux-02','informatique-n1-fondamentaux-03','informatique-n1-fondamentaux-04','informatique-n1-fondamentaux-05','informatique-n1-fondamentaux-06','informatique-n1-fondamentaux-07','informatique-n1-fondamentaux-08','informatique-n1-fondamentaux-09','informatique-n1-fondamentaux-10','informatique-n1-fondamentaux-11'
    ],
    learningObjectives: [ 'Assembler événements + actions', 'Intégrer sons/décors', 'Présenter un mini-projet' ],
    keywords: ['projet','évaluation','scratch'],
    sources: [ { title: 'code.org — Hour of Code', url: 'https://code.org', type: 'website', description: 'Projets courts' } ],
    body: {
      introduction: { title: 'Consignes du projet', content: `Crée une **carte animée** qui **affiche un message**, **change de décor**, **joue un son**, **se déplace** et **réagit** à une touche ou au clic.` },
      mainContent: [
        { type: 'concept', title: 'Checklist', content: `• 1 message — • 1 décor — • 1 son — • 1 déplacement — • 1 interaction.` },
        { type: 'activity', title: 'Plan rapide', content: `Choisis un **thème** (anniversaire, remerciement, météo…). Fais un **croquis** (storyboard).` },
        { type: 'summary', title: 'Rendu', content: `Montre ton projet et explique **comment il fonctionne**.` }
      ],
      conclusion: { summary: 'Bravo 🎉 Tu valides le niveau **N1** en informatique !', keyTakeaways: ['Séquences','Boucles','Événements','Débogage'], nextSteps: ['Passer au **N2** : variables, plus de logique'], additionalResources: [ { title: 'Galerie de projets débutants', description: 'Inspiration', url: 'https://scratch.mit.edu' } ] }
    },
    assessment: {
      quiz: [
        { question: 'Un **événement** sert à…', type: 'multiple-choice', options: ['Décorer le sprite','Démarrer une action en réponse à quelque chose'], correctAnswer: 'Démarrer une action en réponse à quelque chose', explanation: 'Ex: drapeau, touche, clic', points: 10 },
        { question: 'Quelle suite décrit une **boucle** ?', type: 'multiple-choice', options: ['Dire Bonjour une fois','Répéter 5 fois Avancer'], correctAnswer: 'Répéter 5 fois Avancer', explanation: 'Itération', points: 10 }
      ],
      passingScore: 80,
      timeLimit: 20
    },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), author: 'GrowSavoir', version: '1.0.0', tags: ['informatique','n1','projet'] }
  }
}
