# E-confident - Protection contre le cyberharcèlement

## Description
E-confident est une solution innovante de protection contre le cyberharcèlement, utilisant l'IA pour détecter et prévenir les situations à risque en temps réel.

## Prérequis
- Node.js (version 18 ou supérieure)
- npm (généralement installé avec Node.js)
- Git

## Installation

1. **Cloner le dépôt**
```bash
git clone https://gitlab.com/votre-username/e-confident.git
cd e-confident
```

2. **Installer les dépendances**
```bash
cd frontend
npm install
```

3. **Configuration de l'environnement**
Créez un fichier `.env.local` à la racine du dossier `frontend` avec les variables suivantes :
```env
NEXT_PUBLIC_API_URL=votre_url_api
```

## Développement

1. **Lancer le serveur de développement**
```bash
npm run dev
```
Le site sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000)

2. **Vérifier le code**
```bash
npm run lint
```

## Build et Production

1. **Créer une version de production**
```bash
npm run build
```

2. **Lancer la version de production**
```bash
npm run start
```

## Structure du Projet
```
frontend/
├── src/
│   ├── app/          # Pages Next.js
│   │   ├── page.tsx  # Page d'accueil
│   │   ├── contact/  # Page contact
│   │   └── about/    # Page à propos
│   └── components/   # Composants React
│       ├── Navbar.tsx
│       └── Footer.tsx
├── public/           # Assets statiques
└── package.json      # Dépendances
```

## Technologies Utilisées
- Next.js 14
- React
- TypeScript
- Tailwind CSS
- PostCSS

## Fonctionnalités Principales
- Détection en temps réel du cyberharcèlement
- Interface utilisateur moderne et responsive
- Animations fluides et interactives
- Support multilingue
- Protection des données sensibles

## Contribution
1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Déploiement
Le site est déployé sur Vercel. Chaque push sur la branche `main` déclenche un déploiement automatique.

## Support
Pour toute question ou problème, veuillez :
1. Consulter la [documentation](lien_vers_doc)
2. Ouvrir une issue sur GitLab
3. Contacter l'équipe de support

## Licence
Ce projet est sous licence [MIT](LICENSE).

## Auteurs
- Votre Nom - Développeur Principal

## Remerciements
- Tous les contributeurs
- La communauté open source
- Nos utilisateurs pour leurs retours précieux 