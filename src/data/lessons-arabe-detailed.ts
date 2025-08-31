import { Lesson } from './lessons'

export const allLessonsArabe: Record<string, Lesson> = {
   "arabe-n1-fondamentaux-01": {
    "slug": "arabe-n1-fondamentaux-01",
    "title": "L'alphabet arabe - Les lettres de base",
    "summary": "Découvrir et apprendre les 28 lettres de l'alphabet arabe",
    "level": "n1-fondamentaux",
    "subject": "Langue Arabe",
    "ageGroup": "6-8 ans",
    "estimatedMinutes": 20,
    "isLocked": false,
    "prerequisites": [],
    "learningObjectives": [
      "Citer les 28 lettres de l’alphabet arabe",
      "Connaître le sens d’écriture (droite → gauche)",
      "Identifier les lettres avec et sans points",
      "Comprendre les 4 formes d’écriture (isolée, initiale, médiane, finale)",
      "Savoir qu’il existe 6 lettres qui ne se lient pas à gauche"
    ],
    "keywords": [
      "arabe",
      "alphabet",
      "lettres",
      "écriture droite-gauche",
      "formes d’écriture",
      "n1"
    ],
    "sources": [
  {
    "title": "Alphabet arabe — Wikipédia",
    "url": "https://fr.wikipedia.org/wiki/Alphabet_arabe",
    "type": "website",
    "description": "Référence générale sur les lettres, les formes et la direction de l’écriture"
  }
],
    "body": {
      "introduction": {
        "title": "Bienvenue dans l’alphabet arabe",
        "content": `
L’arabe s’écrit **de droite à gauche** et comporte **28 lettres**.  
Chaque lettre peut changer de forme selon sa **position dans le mot** :

- **Isolée**
- **Initiale** (au début)
- **Médiane** (au milieu)
- **Finale** (à la fin)

> 🎯 Objectif : connaître les **noms des lettres**, repérer les **points** et comprendre les **formes d’écriture**.
        `,
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arabic_alphabet.svg/640px-Arabic_alphabet.svg.png"
      },
      "mainContent": [
        {
          "type": "concept",
          "title": "Les 28 lettres (nom et repères)",
          "content": `
| Lettre | Nom (ar) | Nom (fr/translit.) | Points |
|---|---|---|---|
| ا | ألف | alif | 0 |
| ب | باء | bâ | 1 (bas) |
| ت | تاء | tâ | 2 (haut) |
| ث | ثاء | thâ | 3 (haut) |
| ج | جيم | jîm | 1 (bas) |
| ح | حاء | ḥâ (soufflée) | 0 |
| خ | خاء | khâ | 1 (haut) |
| د | دال | dâl | 0 |
| ذ | ذال | dhâl | 1 (haut) |
| ر | راء | râ | 0 |
| ز | زاي | zay | 1 (haut) |
| س | سين | sîn | 0 |
| ش | شين | shîn | 3 (haut) |
| ص | صاد | ṣâd | 0 |
| ض | ضاد | ḍâd | 1 (haut) |
| ط | طاء | ṭâ | 0 |
| ظ | ظاء | ẓâ | 1 (haut) |
| ع | عين | ‘ayn | 0 |
| غ | غين | ghayn | 1 (haut) |
| ف | فاء | fâ | 1 (haut) |
| ق | قاف | qâf | 2 (haut)* |
| ك | كاف | kâf | 0 |
| ل | لام | lâm | 0 |
| م | ميم | mîm | 0 |
| ن | نون | nûn | 1 (haut) |
| هـ | هاء | hâ | 0 |
| و | واو | wâw | 0 |
| ي | ياء | yâ | 2 (bas)** |

\* selon police : parfois 1 point.  
\** yâ’ isolé/final peut s’écrire avec ou sans points (selon le style).
          `
        },
        {
          "type": "concept",
          "title": "Connexion des lettres : rappel clé",
          "content": `
La plupart des lettres s’attachent **à droite et à gauche**.  
⚠️ **6 lettres** ne se lient **pas** à la lettre **suivante** (à gauche) :  
**ا — د — ذ — ر — ز — و**

> Elles se lient à droite (si précédées), mais **coupent** la liaison vers la suite.
          `
        },
        {
          "type": "example",
          "title": "Formes d’écriture : isolée / initiale / médiane / finale",
          "content": `
Exemples pratiques :

**ب (bâ)**  
- Isolée : ب  
- Initiale : بـ  
- Médiane : ـبـ  
- Finale : ـب

**م (mîm)**  
- Isolée : م  
- Initiale : مـ  
- Médiane : ـمـ  
- Finale : ـم

**ل (lâm)**  
- Isolée : ل  
- Initiale : لـ  
- Médiane : ـلـ  
- Finale : ـل
          `,
          "examples": [
            {
              "code": "ب / بـ / ـبـ / ـب",
              "title": "bâ — 4 formes",
              "description": "La lettre s’attache selon sa position",
              "explanation": "À mémoriser visuellement."
            },
            {
              "code": "م / مـ / ـمـ / ـم",
              "title": "mîm — 4 formes",
              "description": "Formes très fréquentes",
              "explanation": "On les retrouve partout."
            }
          ]
        },
        {
          "type": "activity",
          "title": "Repérage rapide (Vrai/Faux)",
          "content": `
- [x] **ث** a **3 points**  
- [ ] **م** a **1 point**  
- [x] **ن** a **1 point**  
- [x] **ز** a **1 point**  
- [ ] **ا** s’attache à la lettre suivante
          `
        },
        {
          "type": "exercise",
          "title": "Copie guidée (formes)",
          "content": `
Recopie lentement les séries (respecte la **direction droite→gauche**) :

- ب — بـ — ـبـ — ـب  
- م — مـ — ـمـ — ـم  
- ل — لـ — ـلـ — ـل

> Astuce : dis à voix haute le **nom** de la lettre pendant que tu écris.
          `
        },
        {
          "type": "summary",
          "title": "Récapitulatif",
          "content": `
- 28 lettres, écriture **droite → gauche**  
- Lettres avec/sans **points** (attention à leur position)  
- **4 formes** selon l’emplacement dans le mot  
- **6 lettres** ne se lient pas à gauche (aperçu)
          `
        }
      ],
      "conclusion": {
        "summary": `
**Bravo !** Tu connais l’**alphabet arabe**, la **direction d’écriture** et les **formes** de base.  
Tu es prêt(e) pour la lecture avec **voyelles courtes (harakât)** dans la prochaine leçon.
        `,
        "keyTakeaways": [
          "28 lettres, droite → gauche",
          "Points = lettres différentes",
          "4 formes : isolée / initiale / médiane / finale",
          "6 lettres non-liantes (aperçu)"
        ],
        "nextSteps": [
          "Passer à la leçon 2 : Les voyelles courtes (Harakât)",
          "S’entraîner à copier 10 lettres/jour (4 formes)"
        ],
        "additionalResources": [
          {
            "title": "Alphabet arabe — Wikipédia",
            "description": "Table d’ensemble et nomenclature",
            "url": "https://fr.wikipedia.org/wiki/Alphabet_arabe"
          }
        ]
      }
    },
    "assessment": {
      "quiz": [
        {
          "question": "Combien de formes peut prendre une lettre arabe selon sa position ?",
          "type": "multiple-choice",
          "options": ["2", "3", "4", "5"],
          "correctAnswer": "4",
          "explanation": "Isolée, initiale, médiane, finale.",
          "points": 10
        }
      ],
      "passingScore": 80,
      "timeLimit": 30
    },
    "metadata": {
      "createdAt": "2025-08-30T06:37:37.889Z",
      "updatedAt": "2025-08-30T06:37:37.895Z",
      "author": "GrowSavoir",
      "version": "1.0.0",
      "tags": ["arabe", "n1", "leçon", "fondamentaux", "alphabet"]
    }
  },
"arabe-n1-fondamentaux-02": {
  "slug": "arabe-n1-fondamentaux-02",
  "title": "Les voyelles courtes (Harakât)",
  "summary": "Comprendre fatha, kasra, damma et lire des syllabes simples (CV).",
  "level": "n1-fondamentaux",
  "subject": "Langue Arabe",
  "ageGroup": "6-8 ans",
  "estimatedMinutes": 18,
  "isLocked": false,
  "prerequisites": ["arabe-n1-fondamentaux-01"],
  "learningObjectives": [
    "Reconnaître les 3 voyelles courtes : fatha (a), kasra (i), damma (ou)",
    "Savoir où se placent les signes (au-dessus / en-dessous)",
    "Lire des syllabes simples de type CV (ba / bi / bou…)",
    "Différencier clairement les sons a / i / ou"
  ],
  "keywords": [
    "arabe","harakat","fatha","kasra","damma","voyelles courtes","CV","n1"
  ],
  "sources": [
  {
    "title": "Harakat — Wikipédia",
    "url": "https://fr.wikipedia.org/wiki/Harakat",
    "type": "website",
    "description": "Présentation des voyelles brèves en arabe"
  }
],
  "body": {
    "introduction": {
      "title": "Les harakât : la vie des lettres",
      "content": `
Les **voyelles courtes** (الحركات) permettent de **prononcer** les lettres :

- **Fatha** ( ـَ ) → son **a**
- **Kasra** ( ـِ ) → son **i**
- **Damma** ( ـُ ) → son **ou**

> Exemple clé : **بَ / بِ / بُ** = **ba / bi / bou**.
      `,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Arabic_harakat.png/320px-Arabic_harakat.png"
      // pas de videoUrl ici pour éviter tout contenu incohérent
    },
    "mainContent": [
      {
        "type": "concept",
        "title": "Où se placent les signes ?",
        "content": `
- **Fatha** se place **au-dessus** de la lettre : بَ  
- **Kasra** se place **en-dessous** : بِ  
- **Damma** se place **au-dessus** (petit wāw) : بُ
        `
      },
      {
        "type": "example",
        "title": "Tableau de lecture (CV)",
        "content": `
| Lettre | + Fatha | Son | + Kasra | Son | + Damma | Son |
|---|---|---|---|---|---|---|
| ب | بَ | **ba** | بِ | **bi** | بُ | **bou** |
| ت | تَ | **ta** | تِ | **ti** | تُ | **tou** |
| م | مَ | **ma** | مِ | **mi** | مُ | **mou** |
        `,
        "examples": [
          {
            "code": "بَ / بِ / بُ",
            "title": "ba / bi / bou",
            "description": "3 sons avec la même consonne",
            "explanation": "Le signe vocalique change le son."
          }
        ]
      },
      {
        "type": "activity",
        "title": "Coche le bon son",
        "content": `
- [ ] **تِ** = ta  
- [x] **تَ** = ta  
- [ ] **تُ** = ti
        `
      },
      {
        "type": "exercise",
        "title": "Lecture syllabique guidée",
        "content": `
Lis à voix haute :

- **بَ** — **بِ** — **بُ**  
- **مَ** — **مِ** — **مُ**  
- **تَ** — **تِ** — **تُ**

> Astuce : garde la voyelle **courte** (un tout petit temps), sans l’allonger.
        `
      },
      {
        "type": "summary",
        "title": "À retenir",
        "content": `
- 3 voyelles courtes : **a / i / ou**  
- Placement : **fatha** (haut), **kasra** (bas), **damma** (haut)  
- Lecture **CV** : ba, bi, bou…
        `
      }
    ],
    "conclusion": {
      "summary": `
Parfait ! Tu sais lire des **syllabes CV** grâce aux harakât.  
Prochaine étape : les **voyelles longues (madd)** pour allonger les sons.
      `,
      "keyTakeaways": [
        "Fatha → a",
        "Kasra → i",
        "Damma → ou",
        "Lecture CV acquise"
      ],
      "nextSteps": [
        "Passer à la leçon 3 : voyelles longues (madd)",
        "Relire 10 combinaisons CV différentes"
      ],
      "additionalResources": [
        {
          "title": "Harakat — Wikipédia",
          "description": "Détails sur les voyelles brèves",
          "url": "https://fr.wikipedia.org/wiki/Harakat"
        }
      ]
    }
  },
  "assessment": {
    "quiz": [
      {
        "question": "Quel signe donne le son **i** ?",
        "type": "multiple-choice",
        "options": ["Fatha (ـَ)", "Kasra (ـِ)", "Damma (ـُ)", "Sukûn (ـْ)"],
        "correctAnswer": "Kasra (ـِ)",
        "explanation": "Kasra se place **en-dessous** et donne le son **i**.",
        "points": 10
      },
      {
        "question": "Comment lit-on **بُ** ?",
        "type": "multiple-choice",
        "options": ["ba", "bi", "bou", "bé"],
        "correctAnswer": "bou",
        "explanation": "Damma (ـُ) produit le son **ou**.",
        "points": 10
      }
    ],
    "passingScore": 80,
    "timeLimit": 30
  },
  "metadata": {
    "createdAt": "2025-08-30T06:37:37.896Z",
    "updatedAt": "2025-08-30T06:37:37.896Z",
    "author": "GrowSavoir",
    "version": "1.0.0",
    "tags": ["arabe","n1","harakat","voyelles courtes"]
  }
},
"arabe-n1-fondamentaux-03": {
  "slug": "arabe-n1-fondamentaux-03",
  "title": "Les voyelles longues (madd)",
  "summary": "Maîtriser les voyelles longues ā / ī / ū formées avec alif, yâ’ et wâw.",
  "level": "n1-fondamentaux",
  "subject": "Langue Arabe",
  "ageGroup": "6-8 ans",
  "estimatedMinutes": 22,
  "isLocked": false,
  "prerequisites": ["arabe-n1-fondamentaux-02"],
  "learningObjectives": [
    "Reconnaître les lettres de prolongement : ا ، و ، ي",
    "Associer a/i/u aux longues ā/ī/ū",
    "Lire des syllabes longues (CVV) et des mots simples",
    "Identifier l’alif maqṣūra (ى) en fin de mot"
  ],
  "keywords": [
    "arabe","voyelles longues","madd","alif","waw","ya","alif maqṣūra","n1"
  ],
  "sources": [
  {
    "title": "Harakât & Madd — aperçu",
    "url": "https://fr.wikipedia.org/wiki/Harakat",
    "type": "website",
    "description": "Rappels sur les signes vocaliques et le prolongement"
  }
],

  "body": {
    "introduction": {
      "title": "Prolonger le son : ā / ī / ū",
      "content": `
Les **voyelles longues** s’écrivent avec des **lettres de prolongement** (حروف المدّ) :
- **ا** (*alif*) → **ā**
- **ي** (*yâ’* sans points phonétiques) → **ī**
- **و** (*wâw*) → **ū**

> Règle clé : la **voyelle courte** précède et **correspond** à la lettre de prolongement :
> **fatha + ا = ā**, **kasra + ي = ī**, **damma + و = ū**.
      `
    },
    "mainContent": [
      {
        "type": "concept",
        "title": "Lettres de prolongement (حروف المدّ)",
        "content": `
On obtient une **voyelle longue** quand :
- la consonne porte la voyelle courte correspondante (**ـَ / ـِ / ـُ**),
- puis vient **ا / ي / و** **sans voyelle** (sukûn implicite).

Ex. **بَ + ا → بَ ا = بَا (bā)**, **بِ + ي → بِـي = بِـي (bī)**, **بُ + و → بُو (bū)**.
        `
      },
      {
        "type": "example",
        "title": "Tableau de correspondance",
        "content": `
| Courte | + Lettre | Longue | Exemple | Lecture |
|---|---|---|---|---|
| **a** (ـَ) | **ا** | **ā** | بَا | **bā** |
| **i** (ـِ) | **ي** | **ī** | بِـي | **bī** |
| **u** (ـُ) | **و** | **ū** | بُو | **bū** |
        `,
        "examples": [
          {
            "code": "بَا / بِـي / بُو",
            "title": "bā / bī / bū",
            "description": "Même consonne ب avec 3 voyelles longues",
            "explanation": "La lettre qui suit prolonge le son."
          }
        ]
      },
      {
        "type": "concept",
        "title": "ā en fin de mot : l’alif maqṣūra (ى)",
        "content": `
La **lettre ى** (alif maqṣūra) se lit **ā** en fin de mot :
- **هُدَى** (*hudā*), **فَتَى** (*fatā*).
> Graphie différente, **même son** que **ا** long.
        `
      },
      {
        "type": "activity",
        "title": "Coche la bonne réponse",
        "content": `
- [x] **فَ + ا** → **فَا = fā**  
- [ ] **كِ + و** → **كُو = kū**  
- [x] **نِ + ي** → **نِي = nī**  
- [x] **هُ + و** → **هُو = hū**  
- [ ] **رَ + ي** → **رُو = rū**
        `
      },
      {
        "type": "exercise",
        "title": "Lis puis écris",
        "content": `
**Lecture :**
- بَا — تِي — مُو — سَابَا — كِتَاب — نُور

**Écriture (transforme la courte en longue) :**
- **بَ** → **بَا**  
- **مِ** → **مِي**  
- **رُ** → **رُو**

> Astuce : allonge **doucement** la voix sur la voyelle longue (1 temps complet).
        `
      },
      {
        "type": "summary",
        "title": "Récapitulatif",
        "content": `
- **ا / ي / و** servent de **prolongement**  
- Correspondances : **a→ā**, **i→ī**, **u→ū**  
- **ى** en fin de mot = **ā**
        `
      }
    ],
    "conclusion": {
      "summary": `
Bravo 🎉 Tu sais former et lire les **voyelles longues**.  
Prochaine étape : le **sukûn** (ـْ) pour lire les syllabes **CVC**.
      `,
      "keyTakeaways": [
        "fatha+ا → ā",
        "kasra+ي → ī",
        "damma+و → ū",
        "ى final = ā"
      ],
      "nextSteps": [
        "Passer à la leçon 4 : le sukûn",
        "Relire 10 mots simples avec voyelles longues"
      ],
      "additionalResources": [
        {
          "title": "Harakat — Wikipédia (rappels)",
          "description": "Contexte sur les signes et le prolongement",
          "url": "https://fr.wikipedia.org/wiki/Harakat"
        }
      ]
    }
  },
  "assessment": {
    "quiz": [
      {
        "question": "Quelle combinaison donne **ī** ?",
        "type": "multiple-choice",
        "options": [
          "fatha + ا",
          "kasra + ي",
          "damma + و",
          "kasra + و"
        ],
        "correctAnswer": "kasra + ي",
        "explanation": "Courte **i** + **yâ’** (sans voyelle) → **ī**.",
        "points": 10
      }
    ],
    "passingScore": 80,
    "timeLimit": 30
  },
  "metadata": {
    "createdAt": "2025-08-30T06:37:37.896Z",
    "updatedAt": "2025-08-30T06:37:37.896Z",
    "author": "GrowSavoir",
    "version": "1.0.0",
    "tags": ["arabe","n1","voyelles longues","madd"]
  }
},
"arabe-n1-fondamentaux-04": {
  "slug": "arabe-n1-fondamentaux-04",
  "title": "Le sukûn (ـْ) — syllabes fermées CVC",
  "summary": "Lire les syllabes fermées grâce au sukûn : de CV → CVC (ex. بَ + مْ = بَم / bam).",
  "level": "n1-fondamentaux",
  "subject": "Langue Arabe",
  "ageGroup": "6-8 ans",
  "estimatedMinutes": 20,
  "isLocked": false,
  "prerequisites": ["arabe-n1-fondamentaux-01", "arabe-n1-fondamentaux-02", "arabe-n1-fondamentaux-03"],
  "learningObjectives": [
    "Reconnaître le signe du sukûn (ـْ) : absence de voyelle",
    "Lire des structures CVC en combinant voyelle courte + consonne muette",
    "Différencier voyelles courtes (CV) vs. syllabes fermées (CVC)",
    "Appliquer le sukûn dans des mots simples (ex. نُور، كِتَاب، سَمْك)"
  ],
  "keywords": ["arabe","sukûn","CVC","lecture","débutant","n1"],
  "sources": [
  {
    "title": "Syllabe — notion générale",
    "url": "https://fr.wikipedia.org/wiki/Syllabe",
    "type": "website",
    "description": "Rappel sur syllabes ouvertes/fermées"
  }
],

  "body": {
    "introduction": {
      "title": "Qu’est-ce que le sukûn ?",
      "content": `
Le **sukûn** (ـْ) indique **l’absence de voyelle** sur une consonne.  
Il permet de lire des **syllabes fermées** de type **CVC**.

Exemples rapides :
- **بْ** = \`b\` (arrêt, pas de voyelle)
- **مْ** = \`m\`
- **بَ + مْ = بَم** → **bam**
      `
    },
    "mainContent": [
      {
        "type": "concept",
        "title": "De CV vers CVC",
        "content": `
Rappels :
- **CV** : consonne + **voyelle courte** → **بَ = ba**
- **CVC** : **voyelle courte** + **consonne avec sukûn** → **بَم = bam**

Schéma :
1) on lit la voyelle courte (**a / i / ou**) sur la première consonne,
2) on **ferme** la syllabe avec une consonne portant **sukûn (ـْ)**.
        `
      },
      {
        "type": "example",
        "title": "Tableau de combinaisons fréquentes",
        "content": `
| Base (CV) | + Consonne (sukûn) | Résultat CVC | Lecture |
|---|---|---|---|
| **بَ** | **مْ** | **بَم** | **bam** |
| **مِ** | **نْ** | **مِن** | **min** |
| **تُ** | **بْ** | **تُبْ** | **toub** |
| **سَ** | **كْ** | **سَكْ** | **sak** |
| **لِ** | **بْ** | **لِبْ** | **lib** |
        `,
        "examples": [
          { "code": "بَم / مِن / تُبْ", "title": "bam / min / toub", "description": "CVC simples", "explanation": "On ferme la syllabe par une consonne muette." }
        ]
      },
      {
        "type": "concept",
        "title": "Position et lecture naturelle",
        "content": `
- Le **sukûn** se place **au-dessus** de la consonne (ـْ).
- On **n’allonge pas** la voyelle courte : *ba* ≠ *bā*.
- On enchaîne \`CV\` → \`CVC\` en **un seul souffle** : \`ba\` → \`bam\`.
        `
      },
      {
        "type": "activity",
        "title": "Vrai / Faux",
        "content": `
- [x] Le **sukûn** signifie **absence de voyelle**.  
- [ ] **بْ** se lit **bou**.  
- [x] **مِ + نْ = مِن** (*min*).  
- [ ] **CVC** signifie **consonne + voyelle longue**.
        `
      },
      {
        "type": "exercise",
        "title": "Lecture guidée",
        "content": `
Lis à voix haute puis écris en translittération (bam / min / toub) :

- **بَم** — **مِن** — **تُبْ**  
- **سَكْ** — **لِبْ** — **حَبْ**

> Astuce : ne pas ajouter de voyelle après la consonne en **sukûn**.
        `
      },
      {
        "type": "summary",
        "title": "À retenir",
        "content": `
- **Sukûn (ـْ)** = pas de voyelle  
- Passage **CV → CVC** grâce au **sukûn**  
- Ne pas confondre **courtes** (a/i/ou) et **longues** (ā/ī/ū)
        `
      }
    ],
    "conclusion": {
      "summary": `
Bravo ! Tu sais fermer une syllabe avec le **sukûn** et lire **CVC**.  
Prochaine étape : **shadda (ّ)** pour lire les **consonnes doublées**.
      `,
      "keyTakeaways": [
        "Sukûn = absence de voyelle",
        "Structure CVC maîtrisée",
        "Attention à ne pas allonger la voyelle courte"
      ],
      "nextSteps": [
        "S’entraîner à lire 10 mots contenant un sukûn",
        "Passer à la leçon 5 : **shadda (ّ)**"
      ],
      "additionalResources": []
    }
  },
  "assessment": {
    "quiz": [
      {
        "question": "Que signifie le signe **ـْ** posé sur une consonne ?",
        "type": "multiple-choice",
        "options": [
          "Voyelle a",
          "Voyelle i",
          "Absence de voyelle",
          "Voyelle ou"
        ],
        "correctAnswer": "Absence de voyelle",
        "explanation": "Le sukûn marque l’absence de voyelle.",
        "points": 10
      },
      {
        "question": "Comment lit-on **بَ + مْ** ?",
        "type": "multiple-choice",
        "options": ["bām", "bam", "bima", "boum"],
        "correctAnswer": "bam",
        "explanation": "CV (ba) + consonne muette (m) → **bam**.",
        "points": 10
      }
    ],
    "passingScore": 80,
    "timeLimit": 30
  },
  "metadata": {
    "createdAt": "2025-08-30T06:37:37.897Z",
    "updatedAt": "2025-08-30T06:37:37.897Z",
    "author": "GrowSavoir",
    "version": "1.0.0",
    "tags": ["arabe","n1","sukûn","CVC"]
  }
},
"arabe-n1-fondamentaux-05": {
  "slug": "arabe-n1-fondamentaux-05",
  "title": "La shadda (ّ) — consonne doublée",
  "summary": "Comprendre et lire la consonne doublée (gemination) avec shadda : rab-b, mud-da…",
  "level": "n1-fondamentaux",
  "subject": "Langue Arabe",
  "ageGroup": "6-8 ans",
  "estimatedMinutes": 20,
  "isLocked": false,
  "prerequisites": ["arabe-n1-fondamentaux-02","arabe-n1-fondamentaux-03","arabe-n1-fondamentaux-04"],
  "learningObjectives": [
    "Reconnaître le signe shadda (ّ)",
    "Comprendre que shadda = consonne doublée (C + C)",
    "Lire des syllabes et mots avec shadda (CV + C doublée)",
    "Savoir placer shadda avec fatha/ kasra/ damma"
  ],
  "keywords": ["arabe","shadda","consonne doublée","gemination","n1"],
  "sources": [
    {
      "title": "Diacritiques arabes — aperçu pédagogique",
      "url": "https://fr.wikipedia.org/wiki/Harakat",
      "type": "website",
      "description": "Rappels sur les signes et la gemination"
    }
  ],
  "body": {
    "introduction": {
      "title": "Qu’indique la shadda (ّ) ?",
      "content": `
La **shadda** ( ّ ) indique que la **consonne est doublée** (on l’entend **deux fois**).  
On peut la voir comme : **première consonne avec sukûn** + **même consonne avec voyelle**.

Exemples :
- **رَبّ** = *rab-b*  
- **مُدَّ** = *mud-da*  
- **حَبّ** = *ḥabb*

> Visuellement, la **shadda** se place au-dessus de la lettre.  
> Avec **kasra**, la kasra reste **en dessous** et la shadda **au-dessus**.
      `
    },
    "mainContent": [
      {
        "type": "concept",
        "title": "Principe = C + C (doublée)",
        "content": `
Lecture pas à pas :

- **بَّ** = **بْ + بَ** → *bba*  
- **بِّ** = **بْ + بِ** → *bbi*  
- **بُّ** = **بْ + بُ** → *bbu*

> On **colle** la première consonne (sukûn) à la seconde vocalisée.
        `
      },
      {
        "type": "example",
        "title": "Tableau de lecture avec shadda",
        "content": `
| Graphie | Lecture | Décomposition |
|---|---|---|
| **رَبّ** | **rab-b** | رَ + **بْ** + **بَ** |
| **مُدَّ** | **mud-da** | مُ + **دْ** + **دَ** |
| **حَبّ** | **ḥabb** | حَ + **بْ** + **بَ** |
| **شَدَّ** | **shad-da** | شَ + **دْ** + **دَ** |
        `,
        "examples": [
          {
            "code": "رَبّ / مُدَّ / حَبّ",
            "title": "rab-b / mud-da / ḥabb",
            "description": "Exemples fréquents",
            "explanation": "On entend bien **deux fois** la consonne avec shadda."
          }
        ]
      },
      {
        "type": "activity",
        "title": "Coche la bonne décomposition",
        "content": `
- [x] **مُدَّ** = مُ + **دْ** + **دَ**  
- [ ] **رَبّ** = رَ + **بَ** (une seule fois)  
- [x] **حَبّ** = حَ + **بْ** + **بَ**
        `
      },
      {
        "type": "exercise",
        "title": "Lis puis écris",
        "content": `
**Lecture** :  
- **شَدَّ** — **وَدّ** — **حَقّ** — **حَبّ**  

**Écriture** (transforme sans shadda → avec shadda) :  
- **مُدَ** → **مُدَّ**  
- **رَبَ** → **رَبَّ** (puis **رَبّ** selon mot)  
- **حَبَ** → **حَبَّ / حَبّ**

> Astuce : marque une **micro-pause** entre les deux consonnes identiques.
        `
      },
      {
        "type": "summary",
        "title": "À retenir",
        "content": `
- **Shadda (ّ)** = **consonne doublée**  
- On lit comme **CØ + CV** (sukûn implicite puis voyelle)  
- Shadda coexiste avec **fatha/ kasra/ damma**
        `
      }
    ],
    "conclusion": {
      "summary": `
Excellent 💪 Tu sais lire et écrire la **shadda**.  
Prochaine étape recommandée : **tanwîn** (an/ in/ oun) ou **lettres solaires & lunaires** selon ton programme.
      `,
      "keyTakeaways": [
        "Shadda = C doublée",
        "Lecture collée : CØ + CV",
        "Compatible avec a / i / ou"
      ],
      "nextSteps": [
        "S’entraîner sur 10 mots avec shadda",
        "Passer à la leçon 6 (tanwîn) si elle suit dans ton programme"
      ],
      "additionalResources": [
        {
          "title": "Rappels sur les diacritiques",
          "description": "Vue d’ensemble utile pour réviser",
          "url": "https://fr.wikipedia.org/wiki/Harakat"
        }
      ]
    }
  },
  "assessment": {
    "quiz": [
      {
        "question": "Que signifie la shadda (ّ) posée sur une lettre ?",
        "type": "multiple-choice",
        "options": [
          "Voyelle longue",
          "Consonne doublée",
          "Absence de voyelle",
          "Pause de lecture"
        ],
        "correctAnswer": "Consonne doublée",
        "explanation": "Shadda = même consonne lue deux fois (CØ + CV).",
        "points": 10
      },
      {
        "question": "La bonne décomposition de **مُدَّ** est…",
        "type": "multiple-choice",
        "options": [
          "مُ + دَ",
          "مُ + دْ + دَ",
          "مَ + دَ",
          "مُ + دُ"
        ],
        "correctAnswer": "مُ + دْ + دَ",
        "explanation": "Shadda sur **د** = **دْ + دَ** avec damma sur **م**.",
        "points": 10
      }
    ],
    "passingScore": 80,
    "timeLimit": 30
  },
  "metadata": {
    "createdAt": "2025-08-30T06:37:37.899Z",
    "updatedAt": "2025-08-30T06:37:37.899Z",
    "author": "GrowSavoir",
    "version": "1.0.0",
    "tags": ["arabe","n1","shadda","gemination"]
  }
},
"arabe-n1-fondamentaux-06": {
  "slug": "arabe-n1-fondamentaux-06",
  "title": "Le tanwîn (ــً / ــٍ / ــٌ) — an / in / un",
  "summary": "Apprendre la nunation : les marques d’indéfini prononcées an / in / un en fin de mot.",
  "level": "n1-fondamentaux",
  "subject": "Langue Arabe",
  "ageGroup": "6-8 ans",
  "estimatedMinutes": 20,
  "isLocked": false,
  "prerequisites": [
    "arabe-n1-fondamentaux-01",
    "arabe-n1-fondamentaux-02",
    "arabe-n1-fondamentaux-03",
    "arabe-n1-fondamentaux-04",
    "arabe-n1-fondamentaux-05"
  ],
  "learningObjectives": [
    "Reconnaître les trois signes du tanwîn : ً / ٍ / ٌ",
    "Lire correctement an / in / un en fin de mot",
    "Savoir que le tanwîn marque l’indéfini (pas avec ال )",
    "Appliquer la règle d’alif du tanwîn fatha (…ًا) et ses exceptions simples"
  ],
  "keywords": ["arabe","tanwîn","nunation","an","in","un","n1"],
  "sources": [
    {
      "title": "Harakât — Wikipédia (rappels)",
      "url": "https://fr.wikipedia.org/wiki/Harakat",
      "type": "website",
      "description": "Présentation des voyelles brèves et rappels utiles sur le tanwîn"
    }
  ],
  "body": {
    "introduction": {
      "title": "Qu’est-ce que le tanwîn ?",
      "content": `
Le **tanwîn** (التنوين) ajoute un **son de n** en fin de mot.  
Il existe **trois formes** :

- **ً** (*fathatan*) → **an**
- **ٍ** (*kasratan*) → **in**
- **ٌ** (*dammatan*) → **un**

> Le tanwîn indique souvent que le nom est **indéfini**. **Il ne s’emploie pas avec** l’article défini **ال** (*al-*).
      `
    },
    "mainContent": [
      {
        "type": "concept",
        "title": "Lecture des trois tanwîn",
        "content": `
On lit **an / in / un** **en fin de mot** uniquement :

- **كِتَابٌ** → *kitāb**un***  
- **كِتَابٍ** → *kitāb**in***  
- **كِتَابًا** → *kitāb**an*** (voir l’**alif** ci-dessous)
        `
      },
      {
        "type": "example",
        "title": "Tableau d’exemples (indéfini)",
        "content": `
| Mot (base) | + ٌ (un) | + ٍ (in) | + ً (an) | Lecture |
|---|---|---|---|---|
| كِتَاب | كِتَابٌ | كِتَابٍ | كِتَابًا | kitabun / kitabin / kitaban |
| قَلَم | قَلَمٌ | قَلَمٍ | قَلَمًا | qalamun / qalamin / qalaman |
| مَدْرَسَة | مَدْرَسَةٌ | مَدْرَسَةٍ | مَدْرَسَةً | madrasatun / madrasatin / madrasatan |
        `,
        "examples": [
          {
            "code": "كِتَابًا",
            "title": "kitāban",
            "description": "Fathatan avec alif",
            "explanation": "Tanwîn fatḥ s’écrit souvent **…ًا**."
          }
        ]
      },
      {
        "type": "concept",
        "title": "Tanwîn fatḥ : l’**alif** et les exceptions simples",
        "content": `
- En général, **on ajoute un alif** avant **ً** : **قَلَمًا**.  
- **Pas d’alif** après **ة** (*tâ’ marbûṭa*) : **مَدْرَسَةً**.  
- **Pas d’alif** après **ى** (*alif maqṣūra*) : **هُدًى** (*hudān*).  

> Pour N1 : retiens surtout **…ًا** sauf **…ةً** et **…ىً**.
        `
      },
      {
        "type": "activity",
        "title": "Vrai / Faux",
        "content": `
- [x] **الكتاب** ne prend pas de tanwîn.  
- [x] **مَدْرَسَةً** s’écrit **sans** alif après **ة**.  
- [ ] **قَلَمٍ** se lit **qalaman**.  
- [x] **كِتَابٌ** se lit **kitābun**.
        `
      },
      {
        "type": "exercise",
        "title": "Lis puis transforme",
        "content": `
**Lecture** :  
- **قَلَمٌ** — **كِتَابًا** — **مَدْرَسَةٍ** — **هُدًى**

**Transformation en ً (an)** :  
- **قَلَم** → **قَلَمًا**  
- **مَدْرَسَة** → **مَدْرَسَةً**  
- **كِتَاب** → **كِتَابًا**

> Astuce : pense **indéfini** + **son n** final.
        `
      },
      {
        "type": "summary",
        "title": "À retenir",
        "content": `
- **ً / ٍ / ٌ** → **an / in / un** en **fin de mot**  
- Pas de tanwîn avec **ال**  
- **…ًا** en général, **…ةً / …ىً** sans alif
        `
      }
    ],
    "conclusion": {
      "summary": `
Bravo ! Tu sais lire et écrire le **tanwîn**.  
À ce stade, tu maîtrises **harakât**, **madd**, **sukûn**, **shadda** et **tanwîn** : la base parfaite pour lire des mots simples.
      `,
      "keyTakeaways": [
        "Tanwîn = an / in / un",
        "Marque d’indéfini en fin de mot",
        "Règle de l’alif du fathatan (et exceptions)"
      ],
      "nextSteps": [
        "S’entraîner à lire un petit texte avec tanwîn",
        "Poursuivre vers **lettres solaires & lunaires** ou **alif madda** selon le programme"
      ],
      "additionalResources": [
        {
          "title": "Harakat — wiki (rappels utiles)",
          "description": "Compléments sur les diacritiques et la lecture",
          "url": "https://fr.wikipedia.org/wiki/Harakat"
        }
      ]
    }
  },
  "assessment": {
    "quiz": [
      {
        "question": "Le tanwîn **ً** se lit…",
        "type": "multiple-choice",
        "options": ["in", "un", "an", "on"],
        "correctAnswer": "an",
        "explanation": "Fathatan se lit **an**.",
        "points": 10
      },
      {
        "question": "Quelle forme est correcte avec **tâ’ marbûṭa** ?",
        "type": "multiple-choice",
        "options": ["مَدْرَسَةًا", "مَدْرَسَةً", "مَدْرَسَةٍا", "مَدْرَسَةٌا"],
        "correctAnswer": "مَدْرَسَةً",
        "explanation": "Après **ة**, on écrit **…ةً** sans alif ajouté.",
        "points": 10
      },
      {
        "question": "Le tanwîn s’emploie avec **ال** (article défini) ?",
        "type": "multiple-choice",
        "options": ["Oui", "Non"],
        "correctAnswer": "Non",
        "explanation": "Le tanwîn marque l’indéfini, il ne se combine pas avec **ال**.",
        "points": 10
      }
    ],
    "passingScore": 80,
    "timeLimit": 30
  },
  "metadata": {
    "createdAt": "2025-08-30T06:37:37.900Z",
    "updatedAt": "2025-08-30T06:37:37.900Z",
    "author": "GrowSavoir",
    "version": "1.0.0",
    "tags": ["arabe","n1","tanwîn","nunation"]
  }
},
"arabe-n1-fondamentaux-07": {
  "slug": "arabe-n1-fondamentaux-07",
  "title": "Lettres solaires & lunaires (ال)",
  "summary": "Assimilation du lâm de l’article (al-) avec les lettres solaires ; prononciation claire avec les lettres lunaires.",
  "level": "n1-fondamentaux",
  "subject": "Langue Arabe",
  "ageGroup": "6-8 ans",
  "estimatedMinutes": 22,
  "isLocked": false,
  "prerequisites": [
    "arabe-n1-fondamentaux-01",
    "arabe-n1-fondamentaux-02",
    "arabe-n1-fondamentaux-03",
    "arabe-n1-fondamentaux-04",
    "arabe-n1-fondamentaux-05",
    "arabe-n1-fondamentaux-06"
  ],
  "learningObjectives": [
    "Connaître la liste des lettres solaires et lunaires (14 + 14)",
    "Prononcer correctement l’article défini ال devant chaque groupe",
    "Repérer la shadda sur les lettres solaires (assimilation du lâm)",
    "Lire et classer des mots simples : الشمس / القمر / النور / الكتاب …"
  ],
  "keywords": ["arabe","lettres solaires","lettres lunaires","assimilation","article défini","al","n1"],
  "sources": [
    {
      "title": "Lettres solaires et lunaires — aperçu",
      "url": "https://fr.wikipedia.org/wiki/Consonnes_solaires_et_lunaires",
      "type": "website",
      "description": "Règle de l’assimilation du lâm de l’article"
    }
  ],
  "body": {
    "introduction": {
      "title": "ال : article défini et deux comportements",
      "content": `
L’article **ال** (*al-*) se place **avant** un nom pour le rendre **défini**.  
Selon la première lettre du mot, on distingue :

- **Lettres solaires (شمسية)** : le **lâm** s’**assimile** → on **n’entend pas** \`l\` et on met **shadda** sur la lettre suivante. Ex. **الشَّمْس** (*ash-shams*).
- **Lettres lunaires (قمرية)** : le **lâm** se **prononce** clairement. Ex. **القَمَر** (*al-qamar*).
      `
    },
    "mainContent": [
      {
        "type": "concept",
        "title": "Les 14 lettres solaires (assimilation + shadda)",
        "content": `
**ت ث د ذ ر ز س ش ص ض ط ظ ل ن**

Exemples :  
- **النُّور** (*an-nūr*)  
- **السَّلام** (*as-salām*)  
- **الرَّجُل** (*ar-rajul*)  
- **الدَّرْس** (*ad-dars*)  

> Indice visuel : on voit souvent une **shadda** sur la première lettre du mot après **ال**.
        `
      },
      {
        "type": "concept",
        "title": "Les 14 lettres lunaires (lâm prononcé)",
        "content": `
**ا ب ج ح خ ع غ ف ق ك م هـ و ي**

Exemples :  
- **القَلَم** (*al-qalam*)  
- **الكِتاب** (*al-kitāb*)  
- **الهاتِف** (*al-hātif*)  
- **اليوم** (*al-yawm*)
        `
      },
      {
        "type": "example",
        "title": "Tableau comparatif",
        "content": `
| Type | Mot | Lecture | Règle |
|---|---|---|---|
| Solaire | **الشَّمْس** | *ash-shams* | Assimilation + **shadda** |
| Solaire | **النُّور** | *an-nūr* | Assimilation + **shadda** |
| Lunaire | **القَمَر** | *al-qamar* | Lâm **prononcé** |
| Lunaire | **الكِتاب** | *al-kitāb* | Lâm **prononcé** |
        `,
        "examples": [
          { "code": "الشَّمْس / القَمَر", "title": "ash-shams / al-qamar", "description": "Solaire vs lunaire", "explanation": "Shadda visible pour la solaire ; lâm audible pour la lunaire." }
        ]
      },
      {
        "type": "activity",
        "title": "Classe les mots (S = solaire / L = lunaire)",
        "content": `
- **النُّور** ☐ S ☐ L  
- **القَلَم** ☐ S ☐ L  
- **الرَّجُل** ☐ S ☐ L  
- **اليوم** ☐ S ☐ L

> Corrigé attendu : S, L, S, L.
        `
      },
      {
        "type": "exercise",
        "title": "Lis correctement ال + mot",
        "content": `
Lis à voix haute en appliquant la bonne règle :

- **السَّلام** → *as-salām*  
- **الكتاب** → *al-kitāb*  
- **الزَّهْر** → *az-zahr*  
- **المَدْرَسَة** → *al-madrasa*

> Astuce : si tu vois **shadda** juste après **ال**, pense **lettre solaire**.
        `
      },
      {
        "type": "summary",
        "title": "À retenir",
        "content": `
- **ال** + **solaire** → **assimilation** du lâm + **shadda**  
- **ال** + **lunaire** → **lâm prononcé**  
- 14 lettres dans chaque groupe
        `
      }
    ],
    "conclusion": {
      "summary": `
Bravo ! Tu sais distinguer **lettres solaires** et **lunaires** et lire l’article **ال** correctement.  
Tu peux maintenant lire des phrases simples avec des mots définis.
      `,
      "keyTakeaways": [
        "Solaire : assimilation + shadda",
        "Lunaire : lâm prononcé",
        "14 lettres par groupe"
      ],
      "nextSteps": [
        "S’exercer avec 10 mots de chaque groupe",
        "Passer à la leçon 8 (selon ton plan : alif madda / hamzat al-wasl / petite lecture guidée)"
      ],
      "additionalResources": [
        {
          "title": "Consonnes solaires et lunaires — repères",
          "description": "Table et explications détaillées",
          "url": "https://fr.wikipedia.org/wiki/Consonnes_solaires_et_lunaires"
        }
      ]
    }
  },
  "assessment": {
    "quiz": [
      {
        "question": "Dans **الشَّمْس**, le lâm de **ال** est…",
        "type": "multiple-choice",
        "options": ["prononcé clairement", "assimilé (non prononcé) avec shadda"],
        "correctAnswer": "assimilé (non prononcé) avec shadda",
        "explanation": "Lettre solaire ش → assimilation.",
        "points": 10
      },
      {
        "question": "Le mot **القَلَم** commence par une lettre…",
        "type": "multiple-choice",
        "options": ["solaire", "lunaire"],
        "correctAnswer": "lunaire",
        "explanation": "ق fait partie des lettres lunaires → on prononce **al-qalam**.",
        "points": 10
      },
      {
        "question": "Coche la liste correcte des **lettres solaires** :",
        "type": "multiple-choice",
        "options": [
          "ا ب ج ح خ ع غ ف ق ك م هـ و ي",
          "ت ث د ذ ر ز س ش ص ض ط ظ ل ن"
        ],
        "correctAnswer": "ت ث د ذ ر ز س ش ص ض ط ظ ل ن",
        "explanation": "Ce sont les 14 lettres solaires.",
        "points": 10
      }
    ],
    "passingScore": 80,
    "timeLimit": 30
  },
  "metadata": {
    "createdAt": "2025-08-30T06:37:37.901Z",
    "updatedAt": "2025-08-30T06:37:37.901Z",
    "author": "GrowSavoir",
    "version": "1.0.0",
    "tags": ["arabe","n1","lettres solaires","lettres lunaires","assimilation","al"]
  }
},
"arabe-n1-fondamentaux-08": {
  "slug": "arabe-n1-fondamentaux-08",
  "title": "Hamza (ء), Alif Madda (آ) & Hamzat al-Wasl (ٱ)",
  "summary": "Savoir lire la coupure glottale (hamza), distinguer آ et ٱ, et prononcer correctement en début/liaison.",
  "level": "n1-fondamentaux",
  "subject": "Langue Arabe",
  "ageGroup": "6-8 ans",
  "estimatedMinutes": 24,
  "isLocked": false,
  "prerequisites": [
    "arabe-n1-fondamentaux-01",
    "arabe-n1-fondamentaux-02",
    "arabe-n1-fondamentaux-03",
    "arabe-n1-fondamentaux-04",
    "arabe-n1-fondamentaux-05",
    "arabe-n1-fondamentaux-06",
    "arabe-n1-fondamentaux-07"
  ],
  "learningObjectives": [
    "Reconnaître la hamza (ء) et ses sièges : أ / إ / ؤ / ئ / ء",
    "Comprendre آ (alif madda) = hamza + voyelle longue ā",
    "Distinguer hamzat al-qaṭ‘ (toujours prononcée) et hamzat al-waṣl (ٱ)",
    "Lire correctement au début du mot et en liaison"
  ],
  "keywords": ["arabe","hamza","alif madda","hamzat al-wasl","lecture","n1"],
  "sources": [
    {
      "title": "Hamza — présentation synthétique",
      "url": "https://fr.wikipedia.org/wiki/Hamza",
      "type": "website",
      "description": "Rappels sur hamza, ses positions et signes associés"
    }
  ],
  "body": {
    "introduction": {
      "title": "La hamza : petite « coupure » de voix",
      "content": `
La **hamza** (ء) représente une **coupure** de la voix.  
Elle peut apparaître **au début**, **au milieu** ou **à la fin** du mot, portée par une « chaise » (أ / إ / ؤ / ئ) ou **seule** (ء).

> Deux types utiles :  
> **Hamzat al-qaṭ‘** (coupure **toujours prononcée**) et **hamzat al-waṣl** (ٱ) prononcée **seulement en début d’énoncé**.
      `
    },
    "mainContent": [
      {
        "type": "concept",
        "title": "Hamza initiale (toujours prononcée)",
        "content": `
- **أَ… / إِ… / أُ…** selon la **voyelle courte** :  
  **أَمَل** (*amal*), **إِمَام** (*imām*), **أُمّ** (*umm*).

> Au **début du mot**, on **voit** et on **prononce** la hamza (hamzat al-qaṭ‘).
        `
      },
      {
        "type": "concept",
        "title": "Hamza au milieu / à la fin : sièges",
        "content": `
- **ؤ** (sur **wâw**) : souvent après **damma** → **سُؤَال** (*su’āl*).  
- **ئ** (sur **yâ’**) : souvent après **kasra** → **سَائِل** (*sā’il*).  
- **ء** (sur la ligne) : en **fin** ou sans siège → **شيء** (*shay’*).

> Pour N1, retiens des **exemples modèles** plutôt que toutes les règles détaillées.
        `
      },
      {
        "type": "concept",
        "title": "آ = alif madda (hamza + ā)",
        "content": `
Le signe **آ** combine **hamza + alif long** → **ā** prolongé.  
Exemples : **آدَم** (*Ādam*), **آباء** (*ābā’*).

> On **entend ā** d’emblée ; visuellement, c’est un **alif** avec un **madd** au-dessus.
        `
      },
      {
        "type": "concept",
        "title": "Hamzat al-Wasl (ٱ) : prononcée seulement au début",
        "content": `
**ٱ** (souvent écrit **ا** sans signe) se **prononce** seulement si on **commence** par ce mot ;  
en **liaison**, on **ne la prononce pas**.

Exemples :
- **ٱسْم** (*ism*) → en liaison : **بِسْمِ الله** (*bismi-llāh*)  
- **ٱبْن** (*ibn*) → **مُحَمَّدُ بْنُ…** (la hamza disparaît en liaison)  
- **الـ** (article) : on ne prononce pas de hamza en liaison → **بِاسمِ**/**بالكتاب**.

> Indice courant : sur les livres de lecture, on voit parfois le petit signe **waṣla** sur l’alif initial.
        `
      },
      {
        "type": "example",
        "title": "Tableau récapitulatif",
        "content": `
| Cas | Graphie | Exemple | Lecture |
|---|---|---|---|
| Début (qaṭ‘) | **أَ / إِ / أُ** | **إِمَام** | *imām* |
| Milieu (wâw) | **ؤ** | **سُؤَال** | *su’āl* |
| Milieu (yâ’) | **ئ** | **سَائِل** | *sā’il* |
| Fin | **ء** | **شيء** | *shay’* |
| Alif madda | **آ** | **آدَم** | *Ādam* |
| Hamzat al-waṣl | **ٱ** | **ٱسْم / بِسْمِ** | *ism / bismi* |
        `,
        "examples": [
          { "code": "آدَم / سُؤَال / سَائِل / شيء", "title": "Ādam / su’āl / sā’il / shay’", "description": "Hamza : différents sièges", "explanation": "Repère la chaise : أ/إ/ؤ/ئ/ء" }
        ]
      },
      {
        "type": "activity",
        "title": "Coche la bonne catégorie",
        "content": `
- **إِمَام** → ☐ waṣl ☐ madda ☑ **qaṭ‘**  
- **بِسْمِ** (…الله) → ☑ **waṣl** ☐ qaṭ‘ ☐ madda  
- **آدَم** → ☐ waṣl ☑ **madda** ☐ qaṭ‘  
- **سُؤَال** → ☑ **hamza sur wâw (ؤ)** ☐ hamza sur yâ’ (ئ)
        `
      },
      {
        "type": "exercise",
        "title": "Lecture guidée début vs liaison",
        "content": `
Lis **en début** puis **en liaison** :

- **ٱسْم** → *ism* ; **بِسْمِ الله** → *bismi-llāh*  
- **ٱبْن** → *ibn* ; **مُحَمَّدُ بْنُ…** → *muḥammadu bnu…*  
- **الْكِتَاب** → *al-kitāb* ; **بِالْكِتَاب** → *bi-l-kitāb*

> Astuce : si un mot **précède**, la **hamzat al-waṣl tombe**.
        `
      },
      {
        "type": "summary",
        "title": "À retenir",
        "content": `
- **Hamza** = coupure **prononcée** ; plusieurs **sièges** (أ / إ / ؤ / ئ / ء)  
- **آ** = **hamza + ā** (alif madda)  
- **ٱ** = hamzat al-**waṣl** : **prononcée seulement au début**, **muette en liaison**
        `
      }
    ],
    "conclusion": {
      "summary": `
Bravo ! Tu distingues **hamza**, **alif madda** et **hamzat al-waṣl**.  
Tu peux désormais lire des mots plus variés en respectant la **prononciation en début** et **en liaison**.
      `,
      "keyTakeaways": [
        "Hamza = coupure prononcée",
        "آ = madda (ā long)",
        "ٱ = waṣl (tombe en liaison)"
      ],
      "nextSteps": [
        "S’entraîner sur un court texte contenant آ / ٱ / ؤ / ئ",
        "Passer à la leçon 9 : lecture guidée de mots/phrases (révision globale N1)"
      ],
      "additionalResources": [
        {
          "title": "Hamza — repères (Wikipédia)",
          "description": "Détails et exemples supplémentaires",
          "url": "https://fr.wikipedia.org/wiki/Hamza"
        }
      ]
    }
  },
  "assessment": {
    "quiz": [
      {
        "question": "La hamzat al-waṣl (ٱ) est prononcée…",
        "type": "multiple-choice",
        "options": [
          "toujours",
          "jamais",
          "seulement en début d’énoncé"
        ],
        "correctAnswer": "seulement en début d’énoncé",
        "explanation": "En liaison, la hamza de waṣl **disparaît**.",
        "points": 10
      },
      {
        "question": "Le signe **آ** correspond à…",
        "type": "multiple-choice",
        "options": [
          "voyelle courte a",
          "hamza sur yâ’",
          "alif madda (hamza + ā)"
        ],
        "correctAnswer": "alif madda (hamza + ā)",
        "explanation": "On lit **ā** long dès le début.",
        "points": 10
      },
      {
        "question": "Dans **سَائِل**, la hamza est portée par…",
        "type": "multiple-choice",
        "options": ["wâw (ؤ)", "yâ’ (ئ)", "sans siège (ء)"],
        "correctAnswer": "yâ’ (ئ)",
        "explanation": "On voit **ئ** (hamza sur yâ’).",
        "points": 10
      }
    ],
    "passingScore": 80,
    "timeLimit": 30
  },
  "metadata": {
    "createdAt": "2025-08-30T06:37:37.902Z",
    "updatedAt": "2025-08-30T06:37:37.902Z",
    "author": "GrowSavoir",
    "version": "1.0.0",
    "tags": ["arabe","n1","hamza","alif madda","hamzat al-wasl"]
  }
},
"arabe-n1-fondamentaux-09": {
  "slug": "arabe-n1-fondamentaux-09",
  "title": "Lecture guidée — révision N1",
  "summary": "Lire des mots et mini-phrases en combinant harakât, madd, sukûn, shadda, tanwîn, hamza et ال (solaires/lunaires).",
  "level": "n1-fondamentaux",
  "subject": "Langue Arabe",
  "ageGroup": "6-8 ans",
  "estimatedMinutes": 25,
  "isLocked": false,
  "prerequisites": [
    "arabe-n1-fondamentaux-01",
    "arabe-n1-fondamentaux-02",
    "arabe-n1-fondamentaux-03",
    "arabe-n1-fondamentaux-04",
    "arabe-n1-fondamentaux-05",
    "arabe-n1-fondamentaux-06",
    "arabe-n1-fondamentaux-07",
    "arabe-n1-fondamentaux-08"
  ],
  "learningObjectives": [
    "Appliquer toutes les notions N1 en lecture de mots",
    "Lire des mini-phrases simples avec ال (solaire/lunaire)",
    "Repérer et prononcer correctement hamza, shadda, tanwîn",
    "Gagner en fluidité (CV, CVC, longues ā/ī/ū)"
  ],
  "keywords": ["arabe","lecture","révision","débutant","n1"],
  "sources": [
    {
      "title": "Récap diacritiques (harakât, shadda, tanwîn)",
      "url": "https://fr.wikipedia.org/wiki/Harakat",
      "type": "website",
      "description": "Rappels utiles pour la lecture"
    }
  ],
  "body": {
    "introduction": {
      "title": "Objectif : lire avec fluidité",
      "content": `
Nous allons **réviser en lisant** : syllabes **CV/CVC**, **voyelles longues**, **sukûn**, **shadda**, **tanwîn**, **lettres solaires/lunaires** et **hamza**.  
Lis **calmement**, puis **un peu plus vite** en gardant une **prononciation claire**.`
    },
    "mainContent": [
      {
        "type": "concept",
        "title": "Échauffement — syllabes & mots",
        "content": `
Lis à voix haute (CV → CVC → longues) :

- **بَ / بِ / بُ** — **تَ / تِ / تُ** — **مَ / مِ / مُ**  
- **بَم / مِن / تُبْ / سَكْ / لِبْ**  
- **بَا / بِـي / بُو** — **تَا / تِي / تُو** — **مَا / مِي / مُو**`
      },
      {
        "type": "example",
        "title": "Mots fréquents (mélange de règles)",
        "content": `
| Mot | Lecture | Règle mise en jeu |
|---|---|---|
| **كِتَابٌ** | kitābun | madd + tanwîn (un) |
| **نُور** | nūr | madd (ū) |
| **رَبّ** | rab-b | shadda |
| **مَدْرَسَةً** | madrasatan | sukûn + tanwîn (an, sans alif après ة) |
| **الشَّمْس** | ash-shams | solaire + shadda |
| **القَمَر** | al-qamar | lunaire (lâm prononcé) |
| **إِمَام** | imām | hamza initiale (qaṭ‘) |
| **بِسْمِ** | bismi | waṣl en liaison |
        `,
        "examples": [
          { "code": "كِتَابٌ / رَبّ / الشَّمْس", "title": "kitābun / rab-b / ash-shams", "description": "madd+tanwîn, shadda, solaire", "explanation": "Vérifie les signes avant de lire." }
        ]
      },
      {
        "type": "concept",
        "title": "Mini-phrases avec ال (solaire / lunaire)",
        "content": `
- **السَّلامُ نُورٌ.** → *as-salāmu nūrun.*  
- **القَلَمُ فِي الكِتَابِ.** → *al-qalamu fī al-kitābi.*  
- **النُّورُ جَمِيلٌ.** → *an-nūru jamīlun.*  
- **الهَاتِفُ قَرِيبٌ.** → *al-hātifu qarībun.*`
      },
      {
        "type": "activity",
        "title": "Vrai / Faux (compréhension rapide)",
        "content": `
- [x] Dans **الشَّمْس**, on **n’entend pas** le **l** de **ال**.  
- [ ] **القَلَم** est un mot à **lettre solaire**.  
- [x] **رَبّ** contient une **consonne doublée**.  
- [x] **مَدْرَسَةً** s’écrit **sans alif** après **ة**.`
      },
      {
        "type": "exercise",
        "title": "Lecture guidée (progression)",
        "content": `
**1) Mots isolés :**  
**مُدَرِّسٌ** — **مَدْرَسَةٌ** — **كِتَابٌ** — **نُورٌ** — **رَجُلٌ** — **إِمَامٌ**

**2) Groupes nominaux :**  
**الرَّجُلُ الصَّالِحُ** — **القَلَمُ الجَدِيدُ** — **الكِتَابُ المُهِمُّ**

**3) Phrases courtes :**  
- **الكِتَابُ مُفِيدٌ.**  
- **الشَّمْسُ سَاطِعَةٌ.**  
- **بِسْمِ اللهِ نَقْرَأُ.**

> Astuce : repère d’abord les **signes** (shadda, tanwîn, hamza…), puis lis **sans t’arrêter**.`
      },
      {
        "type": "summary",
        "title": "Récapitulatif",
        "content": `
Tu as révisé **toutes les bases** : harakât, **ā/ī/ū**, **sukûn**, **shadda**, **tanwîn**, **solaires/lunaires**, **hamza/waṣl**.  
Objectif : **fluidité** et **précision**.`
      }
    ],
    "conclusion": {
      "summary": `
Bravo ! Tu sais lire des **mots** et **mini-phrases** en combinant toutes les règles N1.  
On continue avec plus de lecture guidée et quelques règles d’orthographe simples.`,
      "keyTakeaways": [
        "Toujours repérer les signes avant de lire",
        "Appliquer solaire/lunaire sur ال",
        "Garder les voyelles courtes vraiment courtes"
      ],
      "nextSteps": [
        "S’entraîner 5 minutes/jour à voix haute",
        "Passer à la leçon 10 : Lecture guidée thématique (famille/école/objets)"
      ],
      "additionalResources": [
        {
          "title": "Harakât — rappels",
          "description": "Révisions des signes vocaliques",
          "url": "https://fr.wikipedia.org/wiki/Harakat"
        }
      ]
    }
  },
  "assessment": {
    "quiz": [
      {
        "question": "Dans **الشَّمْس**, le lâm de **ال** est…",
        "type": "multiple-choice",
        "options": ["prononcé clairement", "assimilé (non prononcé) avec shadda"],
        "correctAnswer": "assimilé (non prononcé) avec shadda",
        "explanation": "Lettre solaire ش → assimilation + shadda.",
        "points": 10
      },
      {
        "question": "Lisez **رَبّ**. Quelle analyse est correcte ?",
        "type": "multiple-choice",
        "options": ["ra-b", "rab-b", "ra-bu", "rib-bu"],
        "correctAnswer": "rab-b",
        "explanation": "Shadda sur ب → consonne doublée.",
        "points": 10
      },
      {
        "question": "**مَدْرَسَةً** s’écrit…",
        "type": "multiple-choice",
        "options": ["…ةًا", "…ةً", "…ةٍا", "…ةٌا"],
        "correctAnswer": "…ةً",
        "explanation": "Après **ة**, le tanwîn fatḥ **sans alif** ajouté.",
        "points": 10
      }
    ],
    "passingScore": 80,
    "timeLimit": 30
  },
  "metadata": {
    "createdAt": "2025-08-30T06:37:37.903Z",
    "updatedAt": "2025-08-30T06:37:37.903Z",
    "author": "GrowSavoir",
    "version": "1.0.0",
    "tags": ["arabe","n1","lecture","révision"]
  }
},
"arabe-n1-fondamentaux-10": {
  "slug": "arabe-n1-fondamentaux-10",
  "title": "Lecture guidée — thèmes : famille, école, objets",
  "summary": "Lire des mots et mini-phrases autour de la famille, de l’école et des objets en réutilisant toutes les règles N1.",
  "level": "n1-fondamentaux",
  "subject": "Langue Arabe",
  "ageGroup": "6-8 ans",
  "estimatedMinutes": 25,
  "isLocked": false,
  "prerequisites": [
    "arabe-n1-fondamentaux-01",
    "arabe-n1-fondamentaux-02",
    "arabe-n1-fondamentaux-03",
    "arabe-n1-fondamentaux-04",
    "arabe-n1-fondamentaux-05",
    "arabe-n1-fondamentaux-06",
    "arabe-n1-fondamentaux-07",
    "arabe-n1-fondamentaux-08",
    "arabe-n1-fondamentaux-09"
  ],
  "learningObjectives": [
    "Lire couramment des mots thématiques avec harakât, madd, sukûn, shadda, tanwîn",
    "Appliquer correctement ال (solaires/lunaires) dans des mini-phrases",
    "Renforcer la compréhension globale par de courtes lectures"
  ],
  "keywords": ["arabe","lecture","famille","école","objets","n1"],
  "sources": [
    {
      "title": "Harakât — rappels utiles pour la lecture",
      "url": "https://fr.wikipedia.org/wiki/Harakat",
      "type": "website",
      "description": "Diacritiques et lecture syllabique"
    }
  ],
  "body": {
    "introduction": {
      "title": "Objectif : lire des mots du quotidien",
      "content": `
On réutilise **toutes les bases N1** dans des thèmes proches de l’enfant :  
**famille**, **école**, **objets**. Lis **lentement**, repère les **signes**, puis relis **plus vite**.`
    },
    "mainContent": [
      {
        "type": "concept",
        "title": "Vocabulaire — Famille 👨‍👩‍👧‍👦",
        "content": `
- **أَبٌ** (*abun*) — **أُمٌّ** (*ummun*, shadda) — **أَخٌ** (*akhun*) — **أُخْتٌ** (*ukhtun*)  
- **جَدٌّ** (*jaddun*, shadda) — **جَدَّةٌ** (*jaddatun*, shadda) — **أُسْرَةٌ** (*usratun*)  
- **وَلَدٌ** (*waladun*) — **بِنْتٌ** (*bintun*) — **طِفْلٌ** (*tiflun*)
        `
      },
      {
        "type": "concept",
        "title": "Vocabulaire — École 🏫",
        "content": `
- **مُعَلِّمٌ** (*mu‘allimun*, shadda) — **تِلْمِيذٌ** (*tilmīdhun*)  
- **مَدْرَسَةٌ** (*madrasatun*) — **فَصْلٌ** (*faṣlun*) — **سَبُّورَةٌ** (*sabbūratun*, shadda + madd)  
- **كِتَابٌ** (*kitābun*) — **قَلَمٌ** (*qalamun*) — **دَفْتَرٌ** (*daftarun*) — **مَكْتَبٌ** (*maktabun*)
        `
      },
      {
        "type": "concept",
        "title": "Vocabulaire — Objets 🧰",
        "content": `
- **بَابٌ** (*bābun*, ā) — **نُورٌ** (*nūrun*, ū) — **مِفْتَاحٌ** (*miftāḥun*, sukûn + ā)  
- **سَاعَةٌ** (*sā‘atun*, ā) — **كُرْسِيٌّ** (*kursiyyun*, yّ) — **مِصْبَاحٌ** (*miṣbāḥun*)
        `
      },
      {
        "type": "example",
        "title": "Mini-phrases (solaires / lunaires, shadda, tanwîn)",
        "content": `
- **الأُمُّ فِي البَيْتِ.** → *al-ummu fī al-bayti.*  
- **الأَبُ يَقْرَأُ الكِتَابَ.** → *al-abu yaqra’u al-kitāba.*  
- **المُعَلِّمُ فِي الفَصْلِ.** → *al-mu‘allimu fī al-faṣli.*  
- **السَّبُّورَةُ كَبِيرَةٌ.** → *as-sabbūratu kabīratun.* (solaire + shadda)  
- **القَلَمُ عَلَى المَكْتَبِ.** → *al-qalamu ‘alā al-maktabi.*
        `,
        "examples": [
          { "code": "السَّبُّورَةُ كَبِيرَةٌ", "title": "as-sabbūratu kabīratun", "description": "Lettre solaire + shadda", "explanation": "Assimilation du lâm dans **ال**." }
        ]
      },
      {
        "type": "activity",
        "title": "Vrai / Faux (lecture & règle)",
        "content": `
- [x] **المُعَلِّمُ** contient une **shadda**.  
- [ ] **السَّبُّورَة** se lit **al-sabbūra** (on prononce le **l**).  
- [x] **كِتَابٌ** a un **tanwîn**.  
- [x] **القَلَم** commence par une **lettre lunaire**.
        `
      },
      {
        "type": "exercise",
        "title": "Lecture guidée (progression)",
        "content": `
**1) Mots isolés (lis puis relis vite) :**  
**أُمٌّ** — **جَدٌّ** — **مُعَلِّمٌ** — **فَصْلٌ** — **كِتَابٌ** — **مِفْتَاحٌ** — **كُرْسِيٌّ**

**2) Groupes nominaux :**  
**القَلَمُ الجَدِيدُ** — **الكِتَابُ المُفِيدُ** — **المَكْتَبُ النَّظِيفُ**

**3) Phrases courtes :**  
- **الأَبُ فِي المَدْرَسَةِ.**  
- **البِنْتُ تَقْرَأُ الكِتَابَ.**  
- **نُورٌ فِي الفَصْلِ.**

> Astuce : repère d’abord **shadda / tanwîn / madd / sukûn / ال** puis lis **d’un seul souffle**.`
      },
      {
        "type": "summary",
        "title": "Récapitulatif",
        "content": `
- Lecture de mots fréquents (famille/école/objets)  
- Application de **toutes** les règles N1 en contexte  
- Phrases simples pour consolider la fluidité`
      }
    ],
    "conclusion": {
      "summary": `
Bravo ! Tu lis maintenant des mots et phrases **du quotidien** avec les règles N1.  
On continue avec plus de lecture et de petites compréhensions.`,
      "keyTakeaways": [
        "Repérer les signes avant de lire",
        "Appliquer solaire/lunaire sur ال",
        "Conserver des voyelles courtes… courtes"
      ],
      "nextSteps": [
        "Relire chaque liste 2 fois par jour",
        "Passer à la leçon 11 : lecture guidée — petites scènes"
      ],
      "additionalResources": [
        {
          "title": "Harakât — révisions",
          "description": "Rappels de base pour la lecture",
          "url": "https://fr.wikipedia.org/wiki/Harakat"
        }
      ]
    }
  },
  "assessment": {
    "quiz": [
      {
        "question": "Dans **السَّبُّورَة**, le lâm de **ال** est…",
        "type": "multiple-choice",
        "options": ["prononcé", "assimilé (non prononcé) avec shadda"],
        "correctAnswer": "assimilé (non prononcé) avec shadda",
        "explanation": "Solaire **س** → assimilation + shadda.",
        "points": 10
      },
      {
        "question": "Le mot **مُعَلِّمٌ** contient…",
        "type": "multiple-choice",
        "options": ["une voyelle longue uniquement", "une shadda", "un sukûn uniquement", "rien de spécial"],
        "correctAnswer": "une shadda",
        "explanation": "Sur **لّ** (lām doublé).",
        "points": 10
      },
      {
        "question": "Choisis la lecture correcte : **القَلَمُ عَلَى المَكْتَبِ**",
        "type": "multiple-choice",
        "options": [
          "al-qalamu ‘alā al-maktabi",
          "al-qalamu ‘alā l-maktabi",
          "al-qalamu ‘alā am-maktabi"
        ],
        "correctAnswer": "al-qalamu ‘alā al-maktabi",
        "explanation": "Lunaire **ق** → lâm prononcé.",
        "points": 10
      }
    ],
    "passingScore": 80,
    "timeLimit": 30
  },
  "metadata": {
    "createdAt": "2025-08-30T06:37:37.904Z",
    "updatedAt": "2025-08-30T06:37:37.904Z",
    "author": "GrowSavoir",
    "version": "1.0.0",
    "tags": ["arabe","n1","lecture","famille","école","objets"]
  }
},
"arabe-n1-fondamentaux-11": {
  "slug": "arabe-n1-fondamentaux-11",
  "title": "Lecture guidée — petites scènes & mini-dialogues",
  "summary": "Lire des scènes très courtes (maison/école) en réutilisant toutes les règles N1, avec questions de compréhension.",
  "level": "n1-fondamentaux",
  "subject": "Langue Arabe",
  "ageGroup": "6-8 ans",
  "estimatedMinutes": 25,
  "isLocked": false,
  "prerequisites": [
    "arabe-n1-fondamentaux-01",
    "arabe-n1-fondamentaux-02",
    "arabe-n1-fondamentaux-03",
    "arabe-n1-fondamentaux-04",
    "arabe-n1-fondamentaux-05",
    "arabe-n1-fondamentaux-06",
    "arabe-n1-fondamentaux-07",
    "arabe-n1-fondamentaux-08",
    "arabe-n1-fondamentaux-09",
    "arabe-n1-fondamentaux-10"
  ],
  "learningObjectives": [
    "Lire des mini-scènes et dialogues simples avec fluidité",
    "Appliquer harakât, madd, sukûn, shadda, tanwîn, hamza, et ال (solaires/lunaires)",
    "Comprendre l’essentiel d’une situation simple (qui ? où ? quoi ?)",
    "Repérer les signes clés dans un texte court"
  ],
  "keywords": ["arabe","lecture","dialogue","compréhension","n1"],
  "sources": [
    {
      "title": "Harakât — rappels",
      "url": "https://fr.wikipedia.org/wiki/Harakat",
      "type": "website",
      "description": "Révision des signes pour la lecture"
    }
  ],
  "body": {
    "introduction": {
      "title": "Lire en contexte",
      "content": `
On va lire des **situations très courtes** (maison/école).  
Lis **d’abord lentement** en repérant les signes (shadda, tanwîn…), puis **relis plus vite**.
> Ponctuation utile : **،** (virgule), **؟** (question), **.** (point).`
    },
    "mainContent": [
      {
        "type": "example",
        "title": "Scène 1 — À la maison",
        "content": `
**الأُمُّ** فِي **البَيْتِ**. **الوَلَدُ** يَقْرَأُ **الكِتَابَ**.  
**الأَبُ** يَكْتُبُ **الدَّرْسَ**. **النُّورُ** فِي **الغُرْفَةِ**.

**Questions :**  
1) Qui lit le livre ?  
2) Où est la lumière ?  
3) Que fait le père ?`
      },
      {
        "type": "example",
        "title": "Scène 2 — À l’école",
        "content": `
**المُعَلِّمُ** فِي **الفَصْلِ**. **التِّلْمِيذُ** كِتَابُهُ **عَلَى المَكْتَبِ**.  
**السَّبُّورَةُ** كَبِيرَةٌ، **والقَلَمُ** جَدِيدٌ.

**Questions :**  
1) Où est le livre de l’élève ?  
2) Comment est le tableau ?  
3) Le stylo est-il ancien ou nouveau ?`
      },
      {
        "type": "activity",
        "title": "Vrai / Faux (compréhension rapide)",
        "content": `
- [x] Dans la scène 1, **le père écrit la leçon**.  
- [ ] Dans la scène 2, **le livre est sous la table**.  
- [x] **السَّبُّورَةُ** montre une **lettre solaire** avec **shadda**.`
      },
      {
        "type": "concept",
        "title": "Repérage des signes dans la scène",
        "content": `
Cherche et souligne :
- 1 **shadda** (ex. المُعَلِّمُ)  
- 1 **tanwîn** (ex. كَبِيرَةٌ)  
- 1 **madd** (ex. كِتَاب)  
- 1 **sukûn** (ex. المَكْتَبِ)`
      },
      {
        "type": "exercise",
        "title": "Lecture guidée (rôle A / rôle B)",
        "content": `
**Dialogue court :**  
— **الأُمُّ:** هَلِ الكِتَابُ فِي الغُرْفَةِ؟  
— **الوَلَدُ:** نَعَمْ، الكِتَابُ فِي الغُرْفَةِ.

Lis le rôle **A**, puis **B** — ensuite inversez les rôles.  
> Astuce : marque bien la **question ؟** et la **réponse**.`
      },
      {
        "type": "summary",
        "title": "Récapitulatif",
        "content": `
- Tu sais lire des **mini-scènes** avec **toutes les règles N1**  
- Tu vérifies la **compréhension** par des questions simples  
- Tu repères visuellement les **signes** dans un texte`
      }
    ],
    "conclusion": {
      "summary": `
Bravo ! Tu lis maintenant des **situations courtes** en appliquant les règles.  
On termine N1 avec une **évaluation finale** (leçon 12).`,
      "keyTakeaways": [
        "Lecture contextualisée",
        "Compréhension de base (qui/où/quoi)",
        "Repérage des signes dans le texte"
      ],
      "nextSteps": [
        "Relire chaque scène 2 fois",
        "Passer à la leçon 12 : évaluation finale N1"
      ],
      "additionalResources": [
        {
          "title": "Harakât — révisions rapides",
          "description": "Rappels utiles avant le test",
          "url": "https://fr.wikipedia.org/wiki/Harakat"
        }
      ]
    }
  },
  "assessment": {
    "quiz": [
      {
        "question": "Dans la scène 2, le mot **السَّبُّورَةُ** contient :",
        "type": "multiple-choice",
        "options": ["une lettre lunaire", "une lettre solaire avec shadda"],
        "correctAnswer": "une lettre solaire avec shadda",
        "explanation": "س fait partie des **solaires** → assimilation + shadda.",
        "points": 10
      },
      {
        "question": "Où est le **livre de l’élève** dans la scène 2 ?",
        "type": "multiple-choice",
        "options": ["Sous la table", "Sur le bureau", "Dans le cartable"],
        "correctAnswer": "Sur le bureau",
        "explanation": "« كِتَابُهُ عَلَى المَكْتَبِ ».",
        "points": 10
      },
      {
        "question": "Dans la scène 1, que fait **le père** ?",
        "type": "multiple-choice",
        "options": ["Il lit", "Il écrit la leçon", "Il dort"],
        "correctAnswer": "Il écrit la leçon",
        "explanation": "« الأَبُ يَكْتُبُ الدَّرْسَ ».",
        "points": 10
      }
    ],
    "passingScore": 80,
    "timeLimit": 30
  },
  "metadata": {
    "createdAt": "2025-08-30T06:37:37.905Z",
    "updatedAt": "2025-08-30T06:37:37.905Z",
    "author": "GrowSavoir",
    "version": "1.0.0",
    "tags": ["arabe","n1","lecture","dialogue","compréhension"]
  }
},
"arabe-n1-fondamentaux-12": {
  "slug": "arabe-n1-fondamentaux-12",
  "title": "Évaluation finale N1 — lecture & règles",
  "summary": "Évaluer la lecture (mots/mini-texte) et l’application des règles : harakât, madd, sukûn, shadda, tanwîn, hamza, et ال (solaires/lunaires).",
  "level": "n1-fondamentaux",
  "subject": "Langue Arabe",
  "ageGroup": "6-8 ans",
  "estimatedMinutes": 30,
  "isLocked": false,
  "prerequisites": [
    "arabe-n1-fondamentaux-01",
    "arabe-n1-fondamentaux-02",
    "arabe-n1-fondamentaux-03",
    "arabe-n1-fondamentaux-04",
    "arabe-n1-fondamentaux-05",
    "arabe-n1-fondamentaux-06",
    "arabe-n1-fondamentaux-07",
    "arabe-n1-fondamentaux-08",
    "arabe-n1-fondamentaux-09",
    "arabe-n1-fondamentaux-10",
    "arabe-n1-fondamentaux-11"
  ],
  "learningObjectives": [
    "Valider la lecture de syllabes CV/CVC et de mots fréquents",
    "Identifier correctement shadda, tanwîn, hamza, madd, sukûn",
    "Appliquer la règle des lettres solaires/lunaires avec ال",
    "Comprendre un mini-texte et répondre à 2–3 questions"
  ],
  "keywords": ["arabe","évaluation","lecture","n1","diacritiques"],
  "sources": [
    {
      "title": "Harakât — synthèse",
      "url": "https://fr.wikipedia.org/wiki/Harakat",
      "type": "website",
      "description": "Rappels utiles pour l’examen"
    }
  ],
  "body": {
    "introduction": {
      "title": "Comment passer l’évaluation",
      "content": `
Lis **calmement**, repère les **signes**, puis relis **plus vite**.  
Réponds aux questions **sans te précipiter**.`
    },
    "mainContent": [
      {
        "type": "concept",
        "title": "Rappel express (checklist)",
        "content": `
- **Harakât** : a / i / ou  
- **Madd** : ā / ī / ū  
- **Sukûn** : pas de voyelle (CVC)  
- **Shadda** : consonne doublée  
- **Tanwîn** : an / in / un (indéfini, fin de mot)  
- **ال** : solaire (assimilation) / lunaire (lâm prononcé)  
- **Hamza** : أ / إ / ؤ / ئ / ء ; **ٱ** tombe en liaison`
      },
      {
        "type": "example",
        "title": "Texte de lecture (mini-paragraphe)",
        "content": `
**الأَخُ** فِي **البَيْتِ**. **الأُمُّ** تَطْبُخُ **الطَّعَامَ**، **والأَبُ** يَقْرَأُ **الكِتَابَ**.  
**الأُخْتُ** فِي **الغُرْفَةِ**، وَ**النُّورُ** **قَوِيٌّ**. **القَلَمُ** **عَلَى المَكْتَبِ**.

**Questions :**  
1) Qui lit le livre ?  
2) Où est la sœur ?  
3) Que peut-on dire de la lumière ?`
      },
      {
        "type": "activity",
        "title": "Repérage (coche si trouvé dans le texte)",
        "content": `
- [ ] **Shadda**  
- [ ] **Tanwîn**  
- [ ] **Lettre solaire** après **ال**  
- [ ] **Lettre lunaire** après **ال**  
- [ ] **Sukûn**  
- [ ] **Hamza** (début/milieu/fin)`
      },
      {
        "type": "exercise",
        "title": "Lecture des mots (précision)",
        "content": `
Lis ces mots en indiquant **la règle principale** mise en jeu :

- **رَبّ** ( … ) — **كِتَابٌ** ( … ) — **مَدْرَسَةٍ** ( … ) — **الشَّمْس** ( … ) — **القَمَر** ( … ) — **إِمَام** ( … )

> Exemple de réponse : **رَبّ** → *shadda* ; **كِتَابٌ** → *madd + tanwîn* ; etc.`
      },
      {
        "type": "summary",
        "title": "Fin de l’évaluation — vérifie",
        "content": `
- Ai-je **lu clairement** les mots/phrases ?  
- Ai-je **repéré** shadda/tanwîn/hamza/madd/sukûn ?  
- Ai-je appliqué **solaire/lunaire** correctement ?`
      }
    ],
    "conclusion": {
      "summary": `
Bravo 🎉 Tu as terminé l’**évaluation finale N1**.  
Tu peux passer au **N2** ou consolider encore 1–2 semaines avec des lectures courtes.`,
      "keyTakeaways": [
        "Lecture de base acquise",
        "Règles N1 appliquées en contexte",
        "Capable de répondre à des questions simples"
      ],
      "nextSteps": [
        "Passer au programme **n2-intermediaire**",
        "Continuer 5–10 min de lecture quotidienne"
      ],
      "additionalResources": [
        {
          "title": "Harakât — récapitulatif",
          "description": "Pour réviser en autonomie",
          "url": "https://fr.wikipedia.org/wiki/Harakat"
        }
      ]
    }
  },
  "assessment": {
    "quiz": [
      {
        "question": "Dans **الطَّعَامَ**, après **ال** on a une lettre…",
        "type": "multiple-choice",
        "options": ["lunaire (l prononcé)", "solaire (assimilation + shadda)"],
        "correctAnswer": "solaire (assimilation + shadda)",
        "explanation": "ط est **solaire** → assimilation + shadda.",
        "points": 10
      },
      {
        "question": "Quel mot contient **tanwîn** dans le texte ?",
        "type": "multiple-choice",
        "options": ["قَوِيٌّ", "الكِتَابَ", "الأَبُ"],
        "correctAnswer": "قَوِيٌّ",
        "explanation": "Dammatan **ٌ** à la fin.",
        "points": 10
      },
      {
        "question": "Dans **مَدْرَسَةٍ**, la caractéristique principale est…",
        "type": "multiple-choice",
        "options": ["shadda", "sukûn + tanwîn", "madd"],
        "correctAnswer": "sukûn + tanwîn",
        "explanation": "On voit **دْ** puis **…ةٍ**.",
        "points": 10
      },
      {
        "question": "La **hamza** est présente dans…",
        "type": "multiple-choice",
        "options": ["الأَبُ", "القَلَمُ", "النُّورُ"],
        "correctAnswer": "الأَبُ",
        "explanation": "Hamza **أ** initiale (qaṭ‘).",
        "points": 10
      },
      {
        "question": "Le lâm de **القَمَر** est…",
        "type": "multiple-choice",
        "options": ["assimilé (lettre solaire)", "prononcé (lettre lunaire)"],
        "correctAnswer": "prononcé (lettre lunaire)",
        "explanation": "ق est **lunaire**.",
        "points": 10
      }
    ],
    "passingScore": 80,
    "timeLimit": 30
  },
  "metadata": {
    "createdAt": "2025-08-30T06:37:37.906Z",
    "updatedAt": "2025-08-30T06:37:37.906Z",
    "author": "GrowSavoir",
    "version": "1.0.0",
    "tags": ["arabe","n1","évaluation","lecture","diacritiques"]
  }
},
  "arabe-n2-intermediaire-01": {
  slug: "arabe-n2-intermediaire-01",
  title: "Révision N1 + formes des lettres (début/milieu/fin)",
  summary: "Consolider N1 et automatiser les formes des lettres selon la position.",
  level: "n2-intermediaire",
  subject: "Langue Arabe",
  ageGroup: "7-10 ans",
  estimatedMinutes: 35,
  isLocked: true,
  prerequisites: ["arabe-n1-fondamentaux-12"],
  learningObjectives: [
    "Identifier la forme d’une lettre selon sa position",
    "Lire des mots courts en continu",
    "Écrire proprement en respectant les formes"
  ],
  keywords: ["arabe", "forme des lettres", "révision N1", "n2"],
  sources: [
    {
      title: "Rappel des formes des lettres",
      url: "https://example.com/formes",
      description: "Tableau des formes isolée/début/milieu/fin."
    }
  ],
  body: {
    introduction: {
      title: "On repart sur de bonnes bases",
      content: "Avant d’avancer, on **stabilise** les acquis : formes de lettres, lecture fluide, écriture soignée."
    },
    mainContent: [
      { type: "concept", title: "Formes des lettres", content: "Chaque lettre change selon sa position. Ex. ب : ﺏ / بـ / ـبـ / ـب." },
      { type: "example", title: "Lecture guidée", content: "Lis : بَاب، كِتَاب، مَدْرَسَة." },
      { type: "activity", title: "Copie structurée", content: "Copie 6 mots en colonnes (isolée → début → milieu → fin)." }
    ],
    conclusion: {
      summary: "Les bases sont solides : on peut accélérer en N2.",
      keyTakeaways: ["Formes = position", "Lecture d’un seul flux", "Écriture lisible"],
      nextSteps: ["Passer à la leçon 2 (liaison et mots simples)"],
      additionalResources: [
        { title: "Fiches formes", description: "Cartes à imprimer des 28 lettres.", url: "https://example.com/fiches-formes" }
      ]
    }
  },
  assessment: {
    quiz: [
      {
        question: "La forme d’une lettre dépend de…",
        type: "multiple-choice",
        options: ["La couleur", "Sa position dans le mot", "La police"],
        correctAnswer: "Sa position dans le mot",
        explanation: "Début/milieu/fin/isolée.",
        points: 2
      }
    ],
    passingScore: 80,
    timeLimit: 10
  },
  metadata: {
    createdAt: "2025-09-01T00:00:00.000Z",
    updatedAt: "2025-09-01T00:00:00.000Z",
    author: "GrowSavoir",
    version: "1.0.0",
    tags: ["arabe", "n2", "formes"]
  }
},

"arabe-n2-intermediaire-02": {
  slug: "arabe-n2-intermediaire-02",
  title: "Lire et écrire les mots simples (liaison)",
  summary: "Liaison entre lettres et lecture/écriture de mots à 2–3 lettres.",
  level: "n2-intermediaire",
  subject: "Langue Arabe",
  ageGroup: "7-10 ans",
  estimatedMinutes: 35,
  isLocked: true,
  prerequisites: ["arabe-n2-intermediaire-01"],
  learningObjectives: ["Appliquer la liaison", "Lire 2–3 lettres", "Écrire des mots simples"],
  keywords: ["arabe", "liaison", "n2"],
  sources: [{ title: "Table de liaison des lettres", url: "https://example.com/liaison", description: "Quelles lettres se lient/ne se lient pas ?" }],
  body: {
    introduction: { title: "La liaison, c’est la fluidité", content: "Certaines lettres **ne se lient pas à droite** : ا د ذ ر ز و." },
    mainContent: [
      { type: "concept", title: "Liaison", content: "Beaucoup se lient des deux côtés ; les 6 lettres ci-dessus coupent la chaîne." },
      { type: "example", title: "Lecture guidée", content: "Lis : بَاب، كِتَاب، نُور، دَرْس." },
      { type: "activity", title: "Dictée courte", content: "Écris 5 mots dictés (2–3 lettres)." }
    ],
    conclusion: {
      summary: "Tu sais lier et lire/écrire des mots courts.",
      keyTakeaways: ["6 lettres non-liantes à droite", "Liaison = fluence", "Pratique !"],
      nextSteps: ["Leçon 3 (syllabes)"],
      additionalResources: [{ title: "Exos liaison", description: "Exercices progressifs", url: "https://example.com/exos-liaison" }]
    }
  },
  assessment: {
    quiz: [
      {
        question: "Quelles lettres ne se lient pas à droite ?",
        type: "multiple-choice",
        options: ["ب ت ث", "ا د ذ ر ز و", "ك ل م"],
        correctAnswer: "ا د ذ ر ز و",
        explanation: "Ce sont les 6 lettres non-liantes à droite.",
        points: 2
      }
    ],
    passingScore: 80,
    timeLimit: 10
  },
  metadata: { createdAt: "2025-09-01T00:00:00.000Z", updatedAt: "2025-09-01T00:00:00.000Z", author: "GrowSavoir", version: "1.0.0", tags: ["arabe", "n2", "liaison"] }
},

"arabe-n2-intermediaire-03": {
  slug: "arabe-n2-intermediaire-03",
  title: "Syllabes : CV / CVC (segmentation)",
  summary: "Découper et lire correctement les syllabes CV/CVC.",
  level: "n2-intermediaire",
  subject: "Langue Arabe",
  ageGroup: "7-10 ans",
  estimatedMinutes: 40,
  isLocked: true,
  prerequisites: ["arabe-n2-intermediaire-02"],
  learningObjectives: ["Segmenter en syllabes", "Lire CV/CVC", "Assembler rapidement"],
  keywords: ["arabe", "syllabe", "CV", "CVC", "n2"],
  sources: [{ title: "Méthode syllabique arabe", url: "https://example.com/syllabes", description: "Principes de découpage." }],
  body: {
    introduction: { title: "Lire par syllabes", content: "Lecture syllabique = **rapide et sûre** : CV, CVC." },
    mainContent: [
      { type: "concept", title: "CV/CVC", content: "Ex : با (CV), بَكْ (CVC)." },
      { type: "example", title: "Exemples guidés", content: "Lis : بَا / بَكْ / مَا / مَدْ / سُور / كِتَاب." },
      { type: "activity", title: "Découpage", content: "Découpe 6 mots en syllabes et lis-les à voix haute." }
    ],
    conclusion: {
      summary: "Tu sais découper CV/CVC et lire plus vite.",
      keyTakeaways: ["CV/CVC = base de fluence", "Segmentation = stabilité", "Lire à voix haute"],
      nextSteps: ["Leçon 4 : shadda"],
      additionalResources: [{ title: "Cartes syllabiques", description: "Jeu CV/CVC", url: "https://example.com/cartes-cv" }]
    }
  },
  assessment: {
    quiz: [
      { question: "Quel mot est CVC ?", type: "multiple-choice", options: ["با", "بَكْ", "ما"], correctAnswer: "بَكْ", explanation: "CVC = consonne+voyelle+consonne.", points: 2 }
    ],
    passingScore: 80,
    timeLimit: 10
  },
  metadata: { createdAt: "2025-09-01T00:00:00.000Z", updatedAt: "2025-09-01T00:00:00.000Z", author: "GrowSavoir", version: "1.0.0", tags: ["arabe", "n2", "syllabes"] }
},

"arabe-n2-intermediaire-04": {
  slug: "arabe-n2-intermediaire-04",
  title: "Shadda (ّ) : la gémination",
  summary: "Comprendre et lire la consonne doublée (shadda).",
  level: "n2-intermediaire",
  subject: "Langue Arabe",
  ageGroup: "7-10 ans",
  estimatedMinutes: 40,
  isLocked: true,
  prerequisites: ["arabe-n2-intermediaire-03"],
  learningObjectives: ["Identifier la shadda", "Lire les syllabes avec shadda", "Écrire correctement"],
  keywords: ["arabe", "shadda", "n2"],
  sources: [{ title: "La shadda expliquée", url: "https://example.com/shadda", description: "Règle et exemples." }],
  body: {
    introduction: { title: "Force et durée", content: "La **shadda** double la consonne (peut porter une voyelle)." },
    mainContent: [
      { type: "concept", title: "Lire la shadda", content: "بَّ /bba/, بِّ /bbi/, بُّ /bbu/." },
      { type: "example", title: "Mots fréquents", content: "رَبّ، حَقّ، شَدَّ، مَدَّ." },
      { type: "activity", title: "Lecture/écriture", content: "Lis puis écris 8 mots contenant la shadda." }
    ],
    conclusion: {
      summary: "Tu reconnais et lis la shadda sans hésitation.",
      keyTakeaways: ["Consonne doublée", "Peut porter une voyelle", "Attention à la durée"],
      nextSteps: ["Leçon 5 : sukûn"],
      additionalResources: [{ title: "Feuilles shadda", description: "Exercices gradués", url: "https://example.com/exos-shadda" }]
    }
  },
  assessment: {
    quiz: [
      { question: "Comment se lit **بَّ** ?", type: "multiple-choice", options: ["ba", "bba", "abba"], correctAnswer: "bba", explanation: "Consonne doublée + fatha.", points: 2 }
    ],
    passingScore: 80,
    timeLimit: 10
  },
  metadata: { createdAt: "2025-09-01T00:00:00.000Z", updatedAt: "2025-09-01T00:00:00.000Z", author: "GrowSavoir", version: "1.0.0", tags: ["arabe", "n2", "shadda"] }
},

"arabe-n2-intermediaire-05": {
  slug: "arabe-n2-intermediaire-05",
  title: "Sukûn (ْ) : arrêt de la voyelle",
  summary: "Lire les syllabes fermées avec sukûn.",
  level: "n2-intermediaire",
  subject: "Langue Arabe",
  ageGroup: "7-10 ans",
  estimatedMinutes: 35,
  isLocked: true,
  prerequisites: ["arabe-n2-intermediaire-04"],
  learningObjectives: ["Identifier le sukûn", "Lire CVC", "Écrire avec sukûn"],
  keywords: ["arabe", "sukûn", "CVC", "n2"],
  sources: [{ title: "Le sukûn", url: "https://example.com/sukun", description: "Exemples et règles simples." }],
  body: {
    introduction: { title: "Silence sur la voyelle", content: "Le **sukûn** marque l’absence de voyelle." },
    mainContent: [
      { type: "concept", title: "CVC", content: "Ex : بَكْ (bak), مُسْلِم (muslim)." },
      { type: "example", title: "Lecture", content: "Lis : بَكْ, مَدْرَسَة, سُوقْ." },
      { type: "activity", title: "Dictée", content: "3 lignes de mots avec sukûn (CVC)." }
    ],
    conclusion: {
      summary: "Tu sais lire/écrire avec sukûn.",
      keyTakeaways: ["Pas de voyelle", "Structure CVC fréquente", "Lire clairement"],
      nextSteps: ["Leçon 6 : tanwîn"],
      additionalResources: [{ title: "Exos sukûn", description: "Séries graduées", url: "https://example.com/exos-sukun" }]
    }
  },
  assessment: {
    quiz: [
      {
        question: "Dans **بَكْ**, la dernière lettre…",
        type: "multiple-choice",
        options: ["porte une voyelle", "porte un sukûn", "porte une shadda"],
        correctAnswer: "porte un sukûn",
        explanation: "CVC.",
        points: 2
      }
    ],
    passingScore: 80,
    timeLimit: 10
  },
  metadata: { createdAt: "2025-09-01T00:00:00.000Z", updatedAt: "2025-09-01T00:00:00.000Z", author: "GrowSavoir", version: "1.0.0", tags: ["arabe", "n2", "sukûn"] }
},

"arabe-n2-intermediaire-06": {
  slug: "arabe-n2-intermediaire-06",
  title: "Tanwîn (ً ٍ ٌ) : an / in / un",
  summary: "Lire les finales en –an / –in / –un.",
  level: "n2-intermediaire",
  subject: "Langue Arabe",
  ageGroup: "7-10 ans",
  estimatedMinutes: 40,
  isLocked: true,
  prerequisites: ["arabe-n2-intermediaire-05"],
  learningObjectives: ["Reconnaître le tanwîn", "Lire les finales", "Écrire avec tanwîn"],
  keywords: ["arabe", "tanwîn", "n2"],
  sources: [{ title: "Le tanwîn", url: "https://example.com/tanwin", description: "Prononciation et exemples." }],
  body: {
    introduction: { title: "Double voyelle", content: "Le **tanwîn** double la voyelle courte en fin de mot : -an/-in/-un." },
    mainContent: [
      { type: "concept", title: "Lecture", content: "كِتَابٌ، قَلَمٍ، بَيْتًا." },
      { type: "example", title: "Exercices", content: "Lis/écris 8 mots avec tanwîn varié." },
      { type: "activity", title: "Mini-phrase", content: "Rédige 3 phrases contenant des mots avec tanwîn." }
    ],
    conclusion: {
      summary: "Tu lis les finales en -an/-in/-un.",
      keyTakeaways: ["Double voyelle finale", "Nasalisation correcte", "Écriture soignée"],
      nextSteps: ["Leçon 7 : hamza"],
      additionalResources: [{ title: "Fiche tanwîn", description: "Repères visuels", url: "https://example.com/fiche-tanwin" }]
    }
  },
  assessment: {
    quiz: [
      { question: "Le tanwîn **ٌ** se lit :", type: "multiple-choice", options: ["-an", "-in", "-un"], correctAnswer: "-un", explanation: "Damma double.", points: 2 }
    ],
    passingScore: 80,
    timeLimit: 10
  },
  metadata: { createdAt: "2025-09-01T00:00:00.000Z", updatedAt: "2025-09-01T00:00:00.000Z", author: "GrowSavoir", version: "1.0.0", tags: ["arabe", "n2", "tanwîn"] }
},

"arabe-n2-intermediaire-07": {
  slug: "arabe-n2-intermediaire-07",
  title: "Hamza (ء) : positions et supports",
  summary: "Lire/écrire la hamza selon sa position (sur/alif/ya/waw/ligne).",
  level: "n2-intermediaire",
  subject: "Langue Arabe",
  ageGroup: "7-10 ans",
  estimatedMinutes: 45,
  isLocked: true,
  prerequisites: ["arabe-n2-intermediaire-06"],
  learningObjectives: ["Supports de la hamza", "Règles simples", "Écriture propre"],
  keywords: ["arabe", "hamza", "n2"],
  sources: [{ title: "Hamza positions", url: "https://example.com/hamza", description: "Supports et cas fréquents." }],
  body: {
    introduction: { title: "Le coup de glotte", content: "La **hamza** peut être sur ا/و/ي ou sur la ligne ; support selon la voyelle la plus forte." },
    mainContent: [
      { type: "concept", title: "Supports", content: "أ (alif), ؤ (waw), ئ (ya), ء (ligne)." },
      { type: "example", title: "Lecture", content: "سَأَلَ، سُؤَال، مِئَة، شَيْء." },
      { type: "activity", title: "Écriture guidée", content: "Écris 10 mots variés avec hamza." }
    ],
    conclusion: {
      summary: "Tu sais choisir/lire la hamza courante.",
      keyTakeaways: ["Support = voyelle forte", "Cas fréquents : أؤئء", "Pratique d’écriture"],
      nextSteps: ["Leçon 8 : alif maqṣūra"],
      additionalResources: [{ title: "Exos hamza", description: "Séries graduées", url: "https://example.com/exos-hamza" }]
    }
  },
  assessment: {
    quiz: [
      { question: "Dans **سُؤَال**, la hamza est portée par…", type: "multiple-choice", options: ["alif", "waw", "ya"], correctAnswer: "waw", explanation: "Hamza sur **ؤ**.", points: 2 }
    ],
    passingScore: 80,
    timeLimit: 12
  },
  metadata: { createdAt: "2025-09-01T00:00:00.000Z", updatedAt: "2025-09-01T00:00:00.000Z", author: "GrowSavoir", version: "1.0.0", tags: ["arabe", "n2", "hamza"] }
},

"arabe-n2-intermediaire-08": {
  slug: "arabe-n2-intermediaire-08",
  title: "Alif Maqṣūra (ى) vs Yā (ي)",
  summary: "Différencier ى et ي en fin de mot (lecture/écriture).",
  level: "n2-intermediaire",
  subject: "Langue Arabe",
  ageGroup: "7-10 ans",
  estimatedMinutes: 35,
  isLocked: true,
  prerequisites: ["arabe-n2-intermediaire-07"],
  learningObjectives: ["Reconnaître ى vs ي", "Lire sans confusion", "Écrire les finales"],
  keywords: ["arabe", "alif maqṣūra", "ya", "n2"],
  sources: [{ title: "Alif maqṣūra", url: "https://example.com/alif-maqsura", description: "Règles d’usage et exemples." }],
  body: {
    introduction: { title: "Deux lettres proches", content: "**ى** = a long final ; **ي** = i/ī." },
    mainContent: [
      { type: "concept", title: "Lecture", content: "هدى (hudā), فتى (fatā) vs نبيّ (nabiyy)." },
      { type: "example", title: "Comparaisons", content: "سعى / سعي، هدى / هدي." },
      { type: "activity", title: "Copie ciblée", content: "Écris 8 mots avec ى puis 8 avec ي." }
    ],
    conclusion: {
      summary: "Plus de confusion entre ى et ي.",
      keyTakeaways: ["ى = a long final", "ي = i/ī", "Regarder la **forme** finale"],
      nextSteps: ["Leçon 9 : tā’ marbūṭa"],
      additionalResources: [{ title: "Fiche ى/ي", description: "Repères visuels", url: "https://example.com/fiche-ya" }]
    }
  },
  assessment: {
    quiz: [
      { question: "Dans **هدى**, la dernière lettre est…", type: "multiple-choice", options: ["ي", "ى", "ة"], correctAnswer: "ى", explanation: "Alif maqṣūra.", points: 2 }
    ],
    passingScore: 80,
    timeLimit: 10
  },
  metadata: { createdAt: "2025-09-01T00:00:00.000Z", updatedAt: "2025-09-01T00:00:00.000Z", author: "GrowSavoir", version: "1.0.0", tags: ["arabe", "n2", "ى vs ي"] }
},

"arabe-n2-intermediaire-09": {
  slug: "arabe-n2-intermediaire-09",
  title: "Tā’ marbūṭa (ة) vs Tā’ (ت)",
  summary: "Lire/écrire correctement ة et ت en fin de mot.",
  level: "n2-intermediaire",
  subject: "Langue Arabe",
  ageGroup: "7-10 ans",
  estimatedMinutes: 35,
  isLocked: true,
  prerequisites: ["arabe-n2-intermediaire-08"],
  learningObjectives: ["Différencier ة vs ت", "Prononcer en pause/liaison", "Écrire les finales"],
  keywords: ["arabe", "tā’ marbūṭa", "n2"],
  sources: [{ title: "Tā’ marbūṭa", url: "https://example.com/ta-marbuta", description: "Règles simples et exemples." }],
  body: {
    introduction: { title: "Deux t en finale", content: "**ة** = -a(h) en pause ; **-t** en liaison. **ت** = t." },
    mainContent: [
      { type: "concept", title: "Lecture", content: "رحمة (raḥma[h]) vs بنت (bint)." },
      { type: "example", title: "Contextes", content: "مدرسة جميلة → la **t** réapparaît en liaison." },
      { type: "activity", title: "Écriture", content: "Dictée de 10 mots variés (ة / ت)." }
    ],
    conclusion: {
      summary: "Tu gères les finales ة / ت.",
      keyTakeaways: ["ة = a(h) en pause, t en liaison", "ت = t", "Regarder le contexte"],
      nextSteps: ["Leçon 10 : madd"],
      additionalResources: [{ title: "Fiches ة/ت", description: "Repères et exos", url: "https://example.com/fiche-ta" }]
    }
  },
  assessment: {
    quiz: [
      { question: "En pause, **ة** se prononce…", type: "multiple-choice", options: ["t", "d", "a(h)"], correctAnswer: "a(h)", explanation: "Comportement en pause.", points: 2 }
    ],
    passingScore: 80,
    timeLimit: 10
  },
  metadata: { createdAt: "2025-09-01T00:00:00.000Z", updatedAt: "2025-09-01T00:00:00.000Z", author: "GrowSavoir", version: "1.0.0", tags: ["arabe", "n2", "tā’ marbūṭa"] }
},

"arabe-n2-intermediaire-10": {
  slug: "arabe-n2-intermediaire-10",
  title: "Madd : prolongation du son (ـا ـو ـي) et signe de madd",
  summary: "Comprendre et lire les prolongations (ā/ū/ī) et le signe de madd.",
  level: "n2-intermediaire",
  subject: "Langue Arabe",
  ageGroup: "7-10 ans",
  estimatedMinutes: 40,
  isLocked: true,
  prerequisites: ["arabe-n2-intermediaire-09"],
  learningObjectives: ["Identifier les voyelles longues", "Durée correcte", "Reconnaître le signe de madd"],
  keywords: ["arabe", "madd", "n2"],
  sources: [{ title: "Le madd", url: "https://example.com/madd", description: "Durées et exemples simples." }],
  body: {
    introduction: { title: "Tirer le son", content: "ا (ā), و (ū), ي (ī). Le signe ~ peut marquer un madd supplémentaire." },
    mainContent: [
      { type: "concept", title: "Durée", content: "ā/ū/ī durent plus que a/u/i." },
      { type: "example", title: "Lecture", content: "قال، نور، كريم." },
      { type: "activity", title: "Exercices", content: "Lis 12 mots avec voyelles longues, puis écris-les." }
    ],
    conclusion: {
      summary: "Tu maîtrises les prolongations.",
      keyTakeaways: ["ا/و/ي = voyelles longues", "Durée régulière", "Repérer le signe de madd"],
      nextSteps: ["Leçon 11 : ال + solaires/lunaires (approfondissement)"],
      additionalResources: [{ title: "Cartes de lecture", description: "Mots à voyelles longues", url: "https://example.com/longues" }]
    }
  },
  assessment: {
    quiz: [
      { question: "Dans **نور**, la voyelle longue est…", type: "multiple-choice", options: ["ا", "و", "ي"], correctAnswer: "و", explanation: "و = ū.", points: 2 }
    ],
    passingScore: 80,
    timeLimit: 10
  },
  metadata: { createdAt: "2025-09-01T00:00:00.000Z", updatedAt: "2025-09-01T00:00:00.000Z", author: "GrowSavoir", version: "1.0.0", tags: ["arabe", "n2", "madd"] }
},

"arabe-n2-intermediaire-11": {
  slug: "arabe-n2-intermediaire-11",
  title: "Article défini ال + lettres solaires/lunaires (approfondissement)",
  summary: "Assimilation (solaires) vs maintien (lunaires).",
  level: "n2-intermediaire",
  subject: "Langue Arabe",
  ageGroup: "7-10 ans",
  estimatedMinutes: 40,
  isLocked: true,
  prerequisites: ["arabe-n2-intermediaire-10"],
  learningObjectives: ["Identifier solaires/lunaires", "Appliquer l’assimilation", "Lire des GN"],
  keywords: ["arabe", "ال", "solaires", "lunaires", "n2"],
  sources: [{ title: "Solaires/Lunaires", url: "https://example.com/sol-lun", description: "Rappels et exercices." }],
  body: {
    introduction: { title: "Le soleil et la lune", content: "Solaires assimilent le **l** (الشَّمْس), lunaires le gardent (القَمَر)." },
    mainContent: [
      { type: "concept", title: "Listes", content: "Solaires : ت ث د ذ ر ز س ش ص ض ط ظ ل ن. Lunaires : ب ج ح خ ع غ ف ق ك م هـ و ي." },
      { type: "example", title: "Lecture", content: "الشَّمْس، السَّلام، القَمَر، الكِتاب." },
      { type: "activity", title: "Tri + lecture", content: "Classe 12 mots en solaire/lunaire puis lis-les." }
    ],
    conclusion: {
      summary: "Tu appliques l’assimilation correctement.",
      keyTakeaways: ["Solaires = assimilation du **l**", "Lunaires = maintien", "Repérer la 1re lettre"],
      nextSteps: ["Leçon 12 : phrases simples"],
      additionalResources: [{ title: "Cartes mémo", description: "Listes solaires/lunaires", url: "https://example.com/cartes-sol-lun" }]
    }
  },
  assessment: {
    quiz: [
      { question: "Dans **السَّلام**, la lettre après ال est…", type: "multiple-choice", options: ["solaire", "lunaire"], correctAnswer: "solaire", explanation: "س = solaire.", points: 2 }
    ],
    passingScore: 80,
    timeLimit: 10
  },
  metadata: { createdAt: "2025-09-01T00:00:00.000Z", updatedAt: "2025-09-01T00:00:00.000Z", author: "GrowSavoir", version: "1.0.0", tags: ["arabe", "n2", "solaires-lunaires"] }
},

"arabe-n2-intermediaire-12": {
  slug: "arabe-n2-intermediaire-12",
  title: "Phrases simples : lecture et dictée",
  summary: "Lire et écrire des phrases courtes (VSO / GN + adjectif).",
  level: "n2-intermediaire",
  subject: "Langue Arabe",
  ageGroup: "7-10 ans",
  estimatedMinutes: 45,
  isLocked: true,
  prerequisites: ["arabe-n2-intermediaire-11"],
  learningObjectives: ["Lire des phrases courtes", "Ordre des mots simple", "Écrire une phrase correcte"],
  keywords: ["arabe", "phrase", "dictée", "n2"],
  sources: [{ title: "Phrases simples", url: "https://example.com/phrases-n2", description: "Modèles VSO et GN + adjectif." }],
  body: {
    introduction: { title: "On assemble", content: "On lit/écrit des phrases courtes : **verbe–sujet–complément** ou **GN + adjectif**." },
    mainContent: [
      { type: "concept", title: "Ordres simples", content: "كَتَبَ الوَلَدُ الدَّرسَ. / البَيْتُ جَمِيلٌ." },
      { type: "example", title: "Lecture guidée", content: "Lis 6 phrases puis réponds à une question très simple." },
      { type: "activity", title: "Dictée", content: "Dictée de 4 phrases (ponctuation minimale)." }
    ],
    conclusion: {
      summary: "Tu lis/écris des phrases simples.",
      keyTakeaways: ["VSO courant", "Accord GN + adjectif", "Ponctuation simple"],
      nextSteps: ["Révision générale N2 et passage N3"],
      additionalResources: [{ title: "Cahier de phrases", description: "Pages d’entraînement", url: "https://example.com/cahier-phrases" }]
    }
  },
  assessment: {
    quiz: [
      { question: "Quel ordre correspond à **كَتَبَ الوَلَدُ الدَّرسَ** ?", type: "multiple-choice", options: ["SVO", "VSO", "OVS"], correctAnswer: "VSO", explanation: "verbe–sujet–objet.", points: 2 }
    ],
    passingScore: 80,
    timeLimit: 12
  },
  metadata: { createdAt: "2025-09-01T00:00:00.000Z", updatedAt: "2025-09-01T00:00:00.000Z", author: "GrowSavoir", version: "1.0.0", tags: ["arabe", "n2", "phrases"] }
}
}