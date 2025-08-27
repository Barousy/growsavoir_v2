# GrowSavoir - Site Éducatif Islamique Moderne

Un site éducatif ludique et structuré proposant des enseignements progressifs en langues (arabe, français, anglais), sciences, mathématiques, informatique et sciences islamiques.

## 🎯 Objectifs

- **Curriculum structuré** par parcours → matière → niveaux → unités → leçons + exercices
- **Quatre tranches d'âge** : 3-6, 7-10, 11-14, 15-18 ans
- **Gamification bienveillante** avec badges et progression
- **Support multilingue** (FR/EN/AR) avec RTL pour l'arabe
- **Sciences islamiques** avec références authentifiées

## 🚀 Technologies

- **Frontend**: Next.js 15.5.2 (App Router) + TypeScript
- **UI**: Tailwind CSS + shadcn/ui + Radix UI + Lucide Icons
- **Base de données**: PostgreSQL (Neon) + Prisma ORM
- **Authentification**: NextAuth.js
- **Formulaires**: React Hook Form + Zod
- **Internationalisation**: next-intl
- **Déploiement**: Netlify

## 📚 Matières Disponibles

- **Langues**: Arabe (RTL + harakât), Français, Anglais
- **Sciences**: Mathématiques, Sciences naturelles, Informatique
- **Islamiques**: Aqida, Fiqh, Sira, Histoire de l'Islam, Développement personnel

## 🏗️ Architecture

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── admin/             # Panel d'administration
│   ├── api/               # API routes
│   │   └── auth/         # Authentification
│   ├── auth/              # Pages d'authentification
│   ├── catalogue/         # Catalogue des leçons
│   ├── dashboard/         # Tableau de bord utilisateur
│   ├── lessons/           # Pages des leçons
│   ├── progression/       # Suivi de progression
│   └── quiz/              # Système de quiz
├── components/             # Composants réutilisables
│   └── ui/               # Composants shadcn/ui
├── lib/                   # Utilitaires et configurations
├── i18n/                  # Internationalisation
└── types/                 # Types TypeScript
```

## 🚀 Installation et Démarrage

### Prérequis

- Node.js 18+ 
- npm ou yarn
- PostgreSQL (Neon recommandé)

### 1. Cloner le projet

```bash
git clone https://github.com/Barousy/growsavoir_v2.git
cd growsavoir_v2/growsavoir
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration de l'environnement

```bash
cp .env.example .env
```

Remplir les variables dans `.env` :

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/growsavoir"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

### 4. Base de données

```bash
# Générer le client Prisma
npm run db:generate

# Pousser le schéma vers la base
npm run db:push

# Ou créer une migration
npm run db:migrate

# Peupler avec les données initiales
npm run db:seed

# Ouvrir Prisma Studio (optionnel)
npm run db:studio
```

### 5. Démarrer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📖 Scripts Disponibles

```bash
npm run dev          # Développement local
npm run build        # Build de production
npm run start        # Démarrer en production
npm run lint         # Vérification ESLint
npm run db:generate  # Générer le client Prisma
npm run db:push      # Pousser le schéma DB
npm run db:migrate   # Créer une migration
npm run db:seed      # Peupler la base
npm run db:studio    # Interface Prisma Studio
```

## 🗄️ Modèle de Données

### Entités Principales

- **User**: Utilisateurs avec rôles (STUDENT, PARENT, TEACHER, ADMIN)
- **Subject**: Matières d'enseignement
- **AgeGroup**: Groupes d'âge (3-6, 7-10, 11-14, 15-18)
- **Lesson**: Leçons avec contenu structuré
- **Quiz**: Système de questions/réponses
- **Progress**: Suivi de progression des utilisateurs
- **Badge**: Système de gamification

### Relations

```
User ←→ Progress ←→ Lesson
Lesson → Subject
Lesson → AgeGroup
Quiz → Lesson
QuizQuestion → Quiz
QuizOption → QuizQuestion
```

## 🌍 Internationalisation

- **Langues supportées**: Français (FR), Anglais (EN), Arabe (AR)
- **Support RTL** pour l'arabe
- **Typographie arabe** avec polices appropriées
- **Harakât et diacritiques** supportés

## 🔐 Authentification

- **NextAuth.js** avec adaptateur PostgreSQL
- **Rôles utilisateur** : Élève, Parent/Enseignant, Admin
- **Gestion des sessions** sécurisée
- **OAuth optionnel** (Google, etc.)

## 🎨 Interface Utilisateur

- **Design responsive** mobile-first
- **Composants accessibles** (WCAG 2.1 AA)
- **Thème clair** (mode sombre ultérieur)
- **Palette de couleurs** cohérente
- **Animations** avec Framer Motion

## 📱 Fonctionnalités

### Pour les Élèves
- Catalogue de leçons par matière et niveau
- Leçons interactives avec contenu multimédia
- Quiz auto-corrigés avec feedback
- Système de badges et progression
- Tableau de bord personnel

### Pour les Parents/Enseignants
- Suivi de plusieurs élèves
- Rapports de progression
- Export PDF/CSV
- Recommandations personnalisées

### Pour les Administrateurs
- Gestion du contenu (CRUD)
- Validation des leçons
- Upload de médias
- Statistiques d'utilisation

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests E2E
npm run test:e2e

# Vérification accessibilité
npm run test:a11y
```

## 🚀 Déploiement

### Netlify

1. Connecter le repository GitHub
2. Configurer les variables d'environnement
3. Build command: `npm run build`
4. Publish directory: `.next`

### Variables d'environnement de production

```env
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="production-secret"
```

## 📚 Documentation

- **Guide Admin**: Comment ajouter des leçons et gérer le contenu
- **Guide Contribution**: Standards pour le contenu et les traductions
- **API Reference**: Documentation des endpoints
- **Architecture**: Détails techniques et décisions

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/Barousy/growsavoir_v2/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Barousy/growsavoir_v2/discussions)
- **Email**: support@growsavoir.com

## 🗺️ Roadmap

### Phase 1 (Actuelle) ✅
- [x] Structure de base Next.js
- [x] Schéma de base de données
- [x] Pages principales (Accueil, Catalogue)
- [x] Navigation et composants UI
- [x] Système d'authentification
- [x] Pages de leçons et quiz
- [x] Système de progression
- [x] Panel d'administration

### Phase 2 (En cours)
- [ ] Internationalisation complète
- [ ] Système de badges
- [ ] Tests complets
- [ ] Déploiement production

### Phase 3 (Prochaine)
- [ ] Mode sombre
- [ ] Applications mobiles
- [ ] IA pour recommandations
- [ ] Communauté et forums

### Phase 4 (Future)
- [ ] Système de paiement
- [ ] Contenu premium
- [ ] API publique
- [ ] Intégrations tierces

---

**GrowSavoir** - Grandir ensemble dans la connaissance 🌱📚
