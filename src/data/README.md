# Structure des Données - GrowSavoir

Ce dossier contient toutes les données et interfaces nécessaires au fonctionnement de la plateforme GrowSavoir.

## Structure des Fichiers

### 📚 `lessons.ts`
Contient l'interface `Lesson` et les données de toutes les leçons disponibles.

**Interface Lesson :**
- `slug` : Identifiant unique de la leçon
- `title` : Titre de la leçon
- `summary` : Résumé court
- `level` : Niveau (debutant, intermediaire, avance, expert)
- `subject` : Matière de la leçon
- `ageGroup` : Groupe d'âge cible
- `estimatedMinutes` : Temps estimé pour compléter
- `isLocked` : Si la leçon est verrouillée
- `prerequisites` : Prérequis (IDs des leçons)
- `learningObjectives` : Objectifs d'apprentissage
- `keywords` : Mots-clés pour la recherche
- `sources` : Sources et références
- `body` : Contenu structuré de la leçon
- `assessment` : Quiz et évaluation
- `metadata` : Métadonnées (auteur, version, etc.)

### 🎯 `levels.ts`
Contient l'interface `Level` et les données des niveaux d'apprentissage.

**Interface Level :**
- `id` : Identifiant du niveau
- `name` : Nom du niveau
- `description` : Description détaillée
- `difficulty` : Niveau de difficulté (1-4)
- `ageRange` : Plage d'âge cible
- `isLocked` : Si le niveau est verrouillé
- `requiredScore` : Score requis pour débloquer
- `color` : Couleur d'affichage

### 📖 `subjects.ts`
Contient l'interface `Subject` et les données des matières disponibles.

**Interface Subject :**
- `id` : Identifiant de la matière
- `name` : Nom de la matière
- `description` : Description détaillée
- `icon` : Icône représentative
- `color` : Couleur d'affichage
- `category` : Catégorie (language, science, etc.)
- `isActive` : Si la matière est active
- `lessonCount` : Nombre de leçons disponibles
- `difficulty` : Niveau de difficulté

### 👶 `age-groups.ts`
Contient l'interface `AgeGroup` et les données des groupes d'âge.

**Interface AgeGroup :**
- `id` : Identifiant du groupe
- `name` : Nom du groupe
- `description` : Description détaillée
- `minAge` : Âge minimum
- `maxAge` : Âge maximum
- `color` : Couleur d'affichage
- `icon` : Icône représentative
- `isActive` : Si le groupe est actif

### 🏆 `badges.ts`
Contient l'interface `Badge` et les données des badges de progression.

**Interface Badge :**
- `id` : Identifiant du badge
- `name` : Nom du badge
- `description` : Description détaillée
- `icon` : Icône du badge
- `color` : Couleur d'affichage
- `category` : Catégorie (achievement, streak, etc.)
- `isActive` : Si le badge est actif
- `criteria` : Critères pour obtenir le badge
- `rarity` : Rareté (common, rare, epic, legendary)

### ❓ `quizzes.ts`
Contient l'interface `Quiz` et les données des quiz d'évaluation.

**Interface Quiz :**
- `id` : Identifiant du quiz
- `lessonId` : ID de la leçon associée
- `title` : Titre du quiz
- `description` : Description détaillée
- `questions` : Liste des questions
- `passingScore` : Score de passage
- `timeLimit` : Limite de temps (secondes)
- `isActive` : Si le quiz est actif
- `category` : Catégorie du quiz

### 📋 `index.ts`
Fichier d'export principal qui regroupe toutes les interfaces et fonctions utilitaires.

## Utilisation

### Import des Données
```typescript
import { 
  lessons, 
  levels, 
  subjects, 
  ageGroups, 
  badges, 
  quizzes 
} from '@/data'
```

### Import des Types
```typescript
import type { 
  Lesson, 
  Level, 
  Subject, 
  AgeGroup, 
  Badge, 
  Quiz 
} from '@/data'
```

### Import des Fonctions Utilitaires
```typescript
import { 
  getLessonsBySubject,
  getLessonsByLevel,
  getSubjectStats,
  getUserProgress 
} from '@/data'
```

## Fonctions Utilitaires Disponibles

- `getLessonsBySubject(subjectId)` : Récupère les leçons d'une matière
- `getLessonsByLevel(level)` : Récupère les leçons d'un niveau
- `getLessonsByAgeGroup(ageGroup)` : Récupère les leçons d'un groupe d'âge
- `getSubjectStats(subjectId)` : Récupère les statistiques d'une matière
- `getUserProgress(userId)` : Récupère la progression d'un utilisateur
- `getAvailableLessons(userLevel)` : Récupère les leçons disponibles pour un niveau
- `getNextLesson(currentLessonId)` : Récupère la leçon suivante
- `getLessonPrerequisites(lessonId)` : Récupère les prérequis d'une leçon
- `isLessonAccessible(lessonId, userCompletedLessons)` : Vérifie l'accessibilité d'une leçon

## Structure des Données

### Leçons Disponibles (Niveau Débutant)
1. **Alphabet Arabe** - Langue Arabe
2. **Voyelles Arabes** - Langue Arabe  
3. **Nombres Arabes** - Langue Arabe
4. **English Basics** - Langue Anglaise
5. **English Conversation** - Langue Anglaise
6. **Grammaire Française** - Langue Française
7. **Conjugaison Française** - Langue Française
8. **Addition et Soustraction** - Mathématiques
9. **Découverte des Sciences** - Sciences
10. **Introduction à la Programmation** - Informatique

### Matières Actives
- **Langues** : Arabe, Anglais, Français
- **Sciences** : Mathématiques, Sciences, Informatique
- **Sciences Islamiques** : Aqida, Fiqh, Sira, Histoire de l'Islam
- **Développement Personnel** : Compétences de vie

### Groupes d'Âge
- **3-6 ans** : Éveil et découverte
- **7-10 ans** : Développement et consolidation
- **11-14 ans** : Approfondissement et maîtrise
- **15-18 ans** : Excellence et spécialisation

## Notes de Développement

- Toutes les données sont actuellement en mode "mock" (statique)
- Les fonctions utilitaires retournent des valeurs par défaut
- L'intégration avec la base de données sera faite ultérieurement
- Les leçons verrouillées nécessitent un score minimum ou des prérequis
- Le système de badges est basé sur des critères de progression

## Prochaines Étapes

1. **Intégration Base de Données** : Remplacer les données statiques par des requêtes Prisma
2. **Système de Progression** : Implémenter le suivi des utilisateurs
3. **Validation des Données** : Ajouter des schémas de validation Zod
4. **Tests Unitaires** : Créer des tests pour toutes les fonctions utilitaires
5. **Internationalisation** : Ajouter le support multi-langues pour le contenu



