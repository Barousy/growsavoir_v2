# Guide de Déploiement - GrowSavoir

Ce guide explique comment déployer GrowSavoir sur Netlify avec une base de données PostgreSQL (Neon).

## 🚀 Prérequis

### Comptes Requis
- **GitHub** : Pour héberger le code source
- **Netlify** : Pour l'hébergement et le déploiement
- **Neon** : Pour la base de données PostgreSQL

### Outils Locaux
- **Git** : Pour la gestion des versions
- **Node.js** : Version 18+ recommandée
- **npm** ou **yarn** : Gestionnaire de paquets

## 📦 Préparation du Projet

### 1. Structure du Repository

Assurez-vous que votre repository contient :
```
growsavoir/
├── src/                    # Code source
├── prisma/                 # Schéma et migrations
├── docs/                   # Documentation
├── .env.example           # Variables d'environnement
├── package.json           # Dépendances
├── next.config.js         # Configuration Next.js
└── README.md              # Documentation
```

### 2. Configuration Git

```bash
# Initialiser le repository (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: GrowSavoir platform"

# Ajouter le remote GitHub
git remote add origin https://github.com/username/growsavoir_v2.git

# Pousser vers GitHub
git push -u origin main
```

## 🗄️ Configuration de la Base de Données

### 1. Créer un Compte Neon

1. Allez sur [neon.tech](https://neon.tech)
2. Créez un compte gratuit
3. Créez un nouveau projet
4. Notez les informations de connexion

### 2. Variables d'Environnement Neon

```env
# Format de l'URL Neon
DATABASE_URL="postgresql://username:password@ep-xxx-xxx-xxx.region.aws.neon.tech/database?sslmode=require"
```

### 3. Initialiser la Base

```bash
# Installer les dépendances
npm install

# Générer le client Prisma
npm run db:generate

# Pousser le schéma vers Neon
npm run db:push

# Peupler avec les données initiales
npm run db:seed
```

## 🌐 Configuration Netlify

### 1. Connecter le Repository

1. Connectez-vous à [netlify.com](https://netlify.com)
2. Cliquez sur "New site from Git"
3. Choisissez GitHub
4. Sélectionnez votre repository `growsavoir_v2`
5. Configurez les paramètres de build

### 2. Paramètres de Build

```bash
# Build command
npm run build

# Publish directory
.next

# Base directory
growsavoir
```

### 3. Variables d'Environnement

Dans Netlify, allez dans **Site settings > Environment variables** et ajoutez :

```env
# Base de données
DATABASE_URL="postgresql://username:password@ep-xxx-xxx-xxx.region.aws.neon.tech/database?sslmode=require"

# NextAuth.js
NEXTAUTH_URL="https://yourdomain.netlify.app"
NEXTAUTH_SECRET="your-super-secret-key-here"

# Autres variables
NODE_ENV="production"
```

### 4. Configuration Avancée

Créez un fichier `netlify.toml` à la racine du projet :

```toml
[build]
  base = "growsavoir"
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## 🔧 Configuration de Production

### 1. Optimisations Next.js

Vérifiez votre `next.config.js` :

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactiver ESLint en production
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Configuration des images
  images: {
    domains: ['yourdomain.netlify.app'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Redirections
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fr',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
```

### 2. Variables d'Environnement de Production

Créez un fichier `.env.production` :

```env
# Base de données de production
DATABASE_URL="postgresql://username:password@ep-xxx-xxx-xxx.region.aws.neon.tech/database?sslmode=require"

# NextAuth.js
NEXTAUTH_URL="https://yourdomain.netlify.app"
NEXTAUTH_SECRET="production-secret-key"

# Environnement
NODE_ENV="production"
```

## 🚀 Déploiement

### 1. Déploiement Automatique

1. **Push automatique** : Chaque push sur `main` déclenche un déploiement
2. **Preview** : Les pull requests créent des déploiements de prévisualisation
3. **Rollback** : Possibilité de revenir à une version précédente

### 2. Déploiement Manuel

```bash
# Build local
npm run build

# Déployer via Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

### 3. Vérification du Déploiement

1. **Build** : Vérifiez que le build se termine sans erreur
2. **Fonctionnalités** : Testez les pages principales
3. **Base de données** : Vérifiez la connexion
4. **Authentification** : Testez l'inscription/connexion

## 🔍 Monitoring et Maintenance

### 1. Logs Netlify

- **Build logs** : Dans l'interface Netlify
- **Function logs** : Pour les API routes
- **Analytics** : Métriques de performance

### 2. Base de Données

- **Neon Dashboard** : Monitoring des performances
- **Sauvegardes** : Automatiques quotidiennes
- **Métriques** : Connexions, requêtes, stockage

### 3. Performance

- **Lighthouse** : Audit de performance
- **Core Web Vitals** : Métriques Google
- **Netlify Analytics** : Données d'utilisation

## 🚨 Dépannage

### Problèmes Courants

#### Build Échoue
```bash
# Vérifiez les dépendances
npm install

# Vérifiez la configuration
npm run build

# Consultez les logs Netlify
```

#### Erreur de Base de Données
```bash
# Vérifiez l'URL de connexion
# Testez la connexion locale
npm run db:studio

# Vérifiez les permissions Neon
```

#### Erreur d'Authentification
```bash
# Vérifiez NEXTAUTH_SECRET
# Vérifiez NEXTAUTH_URL
# Testez en local
```

### Support

- **Netlify** : [docs.netlify.com](https://docs.netlify.com)
- **Neon** : [docs.neon.tech](https://docs.neon.tech)
- **Next.js** : [nextjs.org/docs](https://nextjs.org/docs)

## 🔄 Mises à Jour

### 1. Processus de Mise à Jour

```bash
# 1. Mettre à jour le code
git pull origin main

# 2. Installer les nouvelles dépendances
npm install

# 3. Mettre à jour la base de données
npm run db:migrate

# 4. Tester en local
npm run dev

# 5. Pousser vers GitHub
git push origin main
```

### 2. Déploiement Staging

1. Créez une branche `staging`
2. Testez les nouvelles fonctionnalités
3. Déployez sur un environnement de test
4. Validez avant de merger sur `main`

## 📊 Analytics et SEO

### 1. Google Analytics

Ajoutez votre ID GA dans `next.config.js` :

```javascript
const nextConfig = {
  env: {
    GA_TRACKING_ID: 'G-XXXXXXXXXX',
  },
}
```

### 2. Sitemap

Générez automatiquement un sitemap :

```bash
npm install next-sitemap
```

### 3. Robots.txt

Créez un fichier `public/robots.txt` :

```txt
User-agent: *
Allow: /

Sitemap: https://yourdomain.netlify.app/sitemap.xml
```

---

**Félicitations !** 🎉 Votre plateforme GrowSavoir est maintenant déployée et accessible en ligne.
