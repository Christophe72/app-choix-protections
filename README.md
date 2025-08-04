# Guide des Circuits Électriques - RGIE Belgique 🇧🇪

Application Next.js 15 pour référencer les types de circuits électriques et normes selon le RGIE (Règlement Général sur les Installations Électriques) en Belgique.

## 🚀 Fonctionnalités

- **Circuits Types** : Visualisation des différents types de circuits avec leurs spécifications
- **Normes RGIE** : Référentiel des articles du règlement belge
- **Interface moderne** : Design responsive avec TailwindCSS
- **Base de données** : SQLite avec Prisma ORM
- **API REST** : Endpoints pour circuits et normes

## 🛠️ Technologies

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Prisma** - ORM et gestion de base de données
- **SQLite** - Base de données légère
- **TailwindCSS** - Framework CSS utilitaire
- **React Hook Form** - Gestion des formulaires
- **Zod** - Validation des schémas

## 📦 Installation

\`\`\`bash

# Cloner le projet

git clone <repo-url>
cd app-choix-protections

# Installer les dépendances

npm install

# Configurer la base de données

npx prisma generate
npx prisma db push
npx tsx prisma/seed.ts

# Lancer le serveur de développement

npm run dev
\`\`\`

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Structure du Projet

\`\`\`
app-choix-protections/
├── app/
│ ├── api/
│ │ ├── circuits/route.ts # API circuits
│ │ └── normes/route.ts # API normes RGIE
│ ├── layout.tsx # Layout principal
│ ├── page.tsx # Page d'accueil
│ └── globals.css # Styles globaux
├── prisma/
│ ├── schema.prisma # Schéma de base de données
│ └── seed.ts # Données d'initialisation
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
\`\`\`

## 📊 Modèles de Données

### CircuitType

- `nom` : Type de circuit (ex: "Prises Cuisine")
- `section` : Section des conducteurs (ex: "2.5 mm²")
- `longueurMax` : Longueur maximale autorisée
- `disjoncteur` : Ampérage du disjoncteur
- `typeCourbe` : Type de courbe (B, C, D)
- `differentiel` : Protection différentielle
- `remarque` : Notes particulières

### NormeRGIE

- `article` : Numéro d'article RGIE
- `description` : Description de la norme

## 🔧 Scripts Disponibles

\`\`\`bash
npm run dev # Serveur de développement
npm run build # Build de production
npm run start # Serveur de production
npm run lint # Linting ESLint
npm run db:generate # Générer le client Prisma
npm run db:push # Pousser le schéma vers la DB
npm run db:seed # Peupler la base de données
\`\`\`

## 📋 Circuits Types Inclus

1. **Prises Cuisine** - 2.5mm², 20A, Courbe C, 30mA Type A
2. **Éclairage** - 1.5mm², 16A, Courbe B, 30mA Type AC
3. **Prises Ordinaires** - 2.5mm², 16A, Courbe C, 30mA Type AC
4. **Gros Électroménager** - 2.5mm², 20A, Courbe C, 30mA Type A
5. **Chauffage Électrique** - 2.5mm², 20A, Courbe C, 30mA Type AC

## ⚖️ Normes RGIE Référencées

- **Article 4.4.3** - Protection différentielle 30mA
- **Article 4.5.2** - Section minimale éclairage
- **Article 4.5.3** - Section minimale prises
- **Article 4.6.1** - Limitation nombre de prises
- **Article 4.7.2** - Circuits dédiés électroménager

## 🎯 Développement Futur

- [ ] Calculateur de sections de conducteurs
- [ ] Générateur de schémas unifilaires
- [ ] Export PDF des spécifications
- [ ] Mode sombre
- [ ] Recherche et filtres avancés
- [ ] Authentification et profils utilisateurs

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou soumettre une pull request.

---

⚡ **Développé pour les électriciens et bureaux d'études en Belgique**
# app-choix-protections 
Guide des Circuits Electriques - RGIE Belgique 
 
Application Next.js 15 avec TypeScript, TailwindCSS et Prisma 
pour la gestion des circuits electriques selon le RGIE. 
# app-choix-protections 
Guide des Circuits Electriques - RGIE Belgique 
 
Application Next.js 15 avec TypeScript, TailwindCSS et Prisma 
pour la gestion des circuits electriques selon le RGIE. 
