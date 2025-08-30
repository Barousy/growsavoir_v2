# Structure des Leçons - GrowSavoir

## Vue d'ensemble

Ce répertoire contient toutes les leçons de la plateforme GrowSavoir, organisées par niveaux et matières. Chaque leçon suit une structure standardisée et complète.

## Organisation des Fichiers

### 1. `lessons.ts` - Niveau Débutant (3-6 ans)
- **16 leçons** débloquées par défaut
- **Matières couvertes :**
  - Langue Arabe (3 leçons)
  - Langue Anglaise (2 leçons)
  - Langue Française (2 leçons)
  - Mathématiques (1 leçon)
  - Sciences (1 leçon)
  - Informatique (2 leçons)
  - Sciences Islamiques (3 leçons)
  - Histoire de l'Islam (1 leçon)
  - Développement Personnel (1 leçon)

### 2. `lessons-intermediaire.ts` - Niveau Intermédiaire (7-10 ans)
- **2 leçons** verrouillées (accès premium)
- **Matières couvertes :**
  - Langue Arabe (Grammaire)
  - Langue Anglaise (Conversation avancée)

### 3. `lessons-avance-expert.ts` - Niveaux Avancé et Expert
- **Niveau Avancé (11-14 ans) :** 1 leçon verrouillée
- **Niveau Expert (15-18 ans) :** 1 leçon verrouillée
- **Matières couvertes :**
  - Langue Arabe (Littérature et Poésie)

### 4. `all-lessons.ts` - Combinaison de Toutes les Leçons
- **Fichier utilitaire** qui combine toutes les leçons
- **Fonctions utilitaires** pour filtrer et rechercher les leçons

## Structure d'une Leçon

Chaque leçon suit cette structure standardisée :

```typescript
interface Lesson {
  slug: string                    // Identifiant unique
  title: string                   // Titre de la leçon
  summary: string                 // Résumé court
  level: string                   // Niveau (debutant, intermediaire, avance, expert)
  subject: string                 // Matière
  ageGroup: string                // Groupe d'âge cible
  estimatedMinutes: number        // Temps estimé
  isLocked: boolean               // Si la leçon est verrouillée
  prerequisites: string[]         // Prérequis (slugs des leçons)
  learningObjectives: string[]    // Objectifs d'apprentissage
  keywords: string[]              // Mots-clés pour la recherche
  sources: Array<{                // Sources et références
    title: string
    url: string
    type: 'website' | 'video' | 'document' | 'book'
    description: string
  }>
  body: {                         // Contenu principal
    introduction: {               // Introduction
      title: string
      content: string
      image?: string
      videoUrl?: string
    }
    mainContent: Array<{         // Contenu principal
      type: 'concept' | 'example' | 'activity' | 'exercise' | 'summary'
      title: string
      content: string
      examples?: Array<{         // Exemples détaillés
        title: string
        description: string
        code?: string
        image?: string
        explanation: string
      }>
    }>
    conclusion: {                 // Conclusion
      summary: string
      keyTakeaways: string[]
      nextSteps: string[]
      additionalResources: Array<{
        title: string
        url: string
        description: string
      }>
    }
  }
  assessment: {                   // Évaluation
    quiz: Array<{                // Questions du quiz
      question: string
      type: 'multiple-choice' | 'true-false' | 'fill-blank'
      options?: string[]
      correctAnswer: string
      explanation: string
      points: number
    }>
    passingScore: number         // Score de passage
    timeLimit?: number           // Limite de temps
  }
  metadata: {                     // Métadonnées
    createdAt: string
    updatedAt: string
    author: string
    reviewedBy?: string
    version: string
    tags: string[]
  }
}
```

## Fonctions Utilitaires

Le fichier `all-lessons.ts` fournit plusieurs fonctions utilitaires :

- `getAllLessons()` - Obtenir toutes les leçons
- `getLessonsByLevel(level)` - Filtrer par niveau
- `getLessonsBySubject(subject)` - Filtrer par matière
- `getLessonsByAgeGroup(ageGroup)` - Filtrer par groupe d'âge
- `getUnlockedLessons()` - Obtenir les leçons débloquées
- `getLockedLessons()` - Obtenir les leçons verrouillées
- `getTotalLessonCount()` - Nombre total de leçons
- `getLessonCountByLevel(level)` - Nombre de leçons par niveau
- `getLessonCountBySubject(subject)` - Nombre de leçons par matière

## Utilisation

```typescript
import { 
  allLessons, 
  getLessonsByLevel, 
  getUnlockedLessons 
} from '@/data/all-lessons'

// Obtenir toutes les leçons
const allLessonsData = allLessons

// Obtenir les leçons de niveau débutant
const beginnerLessons = getLessonsByLevel('debutant')

// Obtenir les leçons débloquées
const unlockedLessons = getUnlockedLessons()
```

## Ajout de Nouvelles Leçons

Pour ajouter une nouvelle leçon :

1. **Choisir le bon fichier** selon le niveau
2. **Suivre la structure** de l'interface `Lesson`
3. **Ajouter les prérequis** appropriés
4. **Mettre à jour les métadonnées**
5. **Tester la validation** TypeScript

## Notes Importantes

- **Niveau Débutant :** Toutes les leçons sont débloquées par défaut
- **Niveaux Supérieurs :** Les leçons sont verrouillées et nécessitent un accès premium
- **Prérequis :** Chaque leçon peut avoir des prérequis (slugs des leçons précédentes)
- **Sources :** Chaque leçon inclut des références authentiques et vérifiées
- **Évaluation :** Chaque leçon inclut un quiz avec questions et explications

## Maintenance

- **Versioning :** Chaque leçon a un numéro de version
- **Révision :** Chaque leçon est révisée par un expert du domaine
- **Mise à jour :** Les leçons sont régulièrement mises à jour
- **Validation :** Toutes les leçons passent la validation TypeScript



