# Guide d'Administration - GrowSavoir

Ce guide explique comment administrer la plateforme GrowSavoir en tant qu'administrateur.

## 🔐 Accès Administrateur

### Rôle Requis
- Votre compte doit avoir le rôle `ADMIN` dans la base de données
- Connectez-vous avec vos identifiants administrateur

### Accès au Panel
- Connectez-vous à votre compte
- Cliquez sur votre nom dans la navigation
- Sélectionnez "Administration" dans le menu déroulant
- Ou naviguez directement vers `/admin`

## 📊 Tableau de Bord Principal

Le tableau de bord affiche :
- **Statistiques** : Nombre d'utilisateurs, leçons, quiz, matières
- **Actions rapides** : Créer une leçon, gérer les utilisateurs, etc.
- **Activité récente** : Dernières modifications effectuées
- **Gestion du contenu** : Vue d'ensemble des leçons et utilisateurs

## 📚 Gestion des Leçons

### Créer une Nouvelle Leçon

1. Cliquez sur "Nouvelle Leçon" dans les actions rapides
2. Remplissez les informations :
   - **Titre** : Nom de la leçon
   - **Résumé** : Description courte
   - **Matière** : Sélectionnez la matière
   - **Groupe d'âge** : Choisissez la tranche d'âge
   - **Contenu** : Utilisez l'éditeur pour structurer le contenu
   - **Statut** : Publiée ou brouillon
   - **Verrouillage** : Détermine si la leçon est accessible gratuitement

### Structure du Contenu

Le contenu d'une leçon doit être structuré en sections :

```json
{
  "sections": [
    {
      "type": "introduction",
      "title": "Bienvenue",
      "content": "Contenu de l'introduction..."
    },
    {
      "type": "lesson",
      "title": "Contenu principal",
      "content": "Contenu de la leçon...",
      "examples": ["Exemple 1", "Exemple 2"]
    },
    {
      "type": "activity",
      "title": "Activité pratique",
      "content": "Description de l'activité..."
    }
  ]
}
```

### Types de Sections

- **introduction** : Présentation de la leçon
- **lesson** : Contenu principal avec exemples
- **activity** : Activités pratiques
- **summary** : Résumé et points clés
- **references** : Sources et références (pour les sciences islamiques)

## 👥 Gestion des Utilisateurs

### Rôles Utilisateur

- **STUDENT** : Élève (accès aux leçons et quiz)
- **PARENT** : Parent (suivi des enfants)
- **TEACHER** : Enseignant (gestion de classe)
- **ADMIN** : Administrateur (accès complet)

### Actions Disponibles

- **Voir** : Consulter le profil d'un utilisateur
- **Modifier** : Changer le rôle, les informations
- **Désactiver** : Désactiver temporairement un compte
- **Supprimer** : Supprimer définitivement un compte

## 🏷️ Gestion des Matières

### Créer une Matière

1. Accédez à "Gérer Matières"
2. Cliquez sur "Nouvelle Matière"
3. Remplissez :
   - **Clé** : Identifiant unique (ex: "arabic")
   - **Titre** : Nom affiché (ex: "Langue Arabe")
   - **Emoji** : Icône représentative
   - **Description** : Explication de la matière
   - **Ordre** : Position dans la liste

### Organiser les Matières

- Utilisez le champ "Ordre" pour organiser l'affichage
- Activez/désactivez les matières selon vos besoins
- Ajoutez des emojis pour rendre l'interface plus attrayante

## 🎯 Gestion des Quiz

### Créer un Quiz

1. Sélectionnez la leçon associée
2. Créez le quiz avec :
   - **Titre** : Nom du quiz
   - **Questions** : Ajoutez des questions une par une
   - **Types de questions** : Choix multiples, vrai/faux, ordre, correspondance

### Types de Questions

- **Choix multiples** : Plusieurs options, une seule correcte
- **Vrai/Faux** : Question à deux réponses possibles
- **Ordre** : Remettre dans l'ordre
- **Correspondance** : Associer des éléments

## 📈 Statistiques et Rapports

### Métriques Disponibles

- **Utilisateurs** : Inscriptions, connexions, rôles
- **Contenu** : Leçons créées, publiées, consultées
- **Engagement** : Temps passé, progression, quiz passés
- **Performance** : Scores moyens, taux de réussite

### Export des Données

- **CSV** : Données tabulaires pour analyse
- **PDF** : Rapports formatés pour présentation
- **API** : Accès programmatique aux données

## 🔧 Configuration Système

### Paramètres Généraux

- **Site** : Nom, description, logo
- **Authentification** : Méthodes de connexion
- **Notifications** : Emails, push notifications
- **Sécurité** : Politiques de mots de passe, 2FA

### Internationalisation

- **Langues** : Français, Anglais, Arabe
- **Traductions** : Gérer les textes multilingues
- **RTL** : Support des langues de droite à gauche

## 🚨 Sécurité et Modération

### Modération du Contenu

- **Validation** : Approuver les leçons avant publication
- **Signalements** : Gérer les contenus signalés
- **Audit** : Historique des modifications

### Gestion des Utilisateurs

- **Suspension** : Suspendre temporairement un compte
- **Bannissement** : Exclure définitivement un utilisateur
- **Surveillance** : Surveiller l'activité suspecte

## 📱 Maintenance

### Sauvegardes

- **Base de données** : Sauvegardes automatiques quotidiennes
- **Fichiers** : Sauvegarde des médias et contenus
- **Configuration** : Sauvegarde des paramètres

### Mises à Jour

- **Système** : Mises à jour de sécurité et fonctionnalités
- **Contenu** : Actualisation des leçons et références
- **Base de données** : Optimisations et corrections

## 🆘 Support et Aide

### Ressources Disponibles

- **Documentation** : Ce guide et la documentation technique
- **Support** : Équipe technique pour les problèmes complexes
- **Communauté** : Forum des administrateurs

### Contact

- **Email** : admin@growsavoir.com
- **Discord** : Serveur de la communauté
- **GitHub** : Issues et discussions

---

**Note** : Ce guide est en constante évolution. Consultez régulièrement les mises à jour pour les nouvelles fonctionnalités.
