# Application Terminal Simulé

Ce projet est une application simple de terminal simulé construite en utilisant React, Vite.js et TypeScript. L'application simule une interface en ligne de commande où les utilisateurs peuvent entrer diverses commandes, et elle répond avec la sortie appropriée. Ce projet a été développé dans le cadre d'une évaluation pratique pour démontrer la maîtrise de la gestion de projet, de la collaboration avec Git, et du développement web en utilisant des frameworks JavaScript modernes.

## Membres

| Nom complet          | Adresse email étudiante                 | Rôle            |
|----------------------|-----------------------------------------|-----------------|
| Bilal Mezrai         | bilal.mezrai@ecole-isitech.com          | Product Owner   |
| Nikolaï ZLODEYEV     | nikolai.zlodeyev@ecole-isitech.fr       | Développeur Senior |
| Anas El Maliki       | anas.elmaliki@ecole-isitech.fr          | Développeur Senior |
| Massinissa AitMahamed| massinissa.aitmahamed@ecole-isitech.fr  | Développeur Senior |

## Note d'intention

L'objectif de ce projet est de développer un terminal simulé capable de répondre aux commandes utilisateur avec des sorties dynamiques. Le projet est conçu pour appliquer les principes clés de l'ingénierie logicielle, y compris le contrôle de version, les stratégies de branching, et l'intégration/déploiement continu, tout en encourageant la collaboration entre les membres de l'équipe.

### Choix Techniques

- **React avec TypeScript :** Choisi pour son architecture basée sur les composants et la sécurité offerte par le typage, ce qui aide à détecter les erreurs tôt dans le développement.
- **Vite.js :** Sélectionné pour ses temps de build rapides et son expérience de développement moderne, qui simplifie la configuration et améliore la productivité des développeurs.
- **Vercel :** Utilisé pour le déploiement continu afin de s'assurer que la dernière version de l'application est toujours en ligne et accessible.

Lien vercel : https://isitech-l2-infra-dev-grp-4-2ba8-clmufqljf.vercel.app/

### Défis et Solutions

- **Défi :** Gestion du branching et des pull requests au sein de l'équipe.
  - **Solution :** Nous avons mis en place une stratégie de branching incluant des branches feature pour chaque développeur, une branche de pré-production pour les tests d'intégration, et une branche de production pour les versions stables. Les pull requests sont utilisées pour réviser le code avant le merge.
  
- **Défi :** Implémentation des réponses dynamiques aux commandes.
  - **Solution :** Les commandes comme `date` sont gérées en vérifiant l'entrée utilisateur et en utilisant JavaScript pour générer dynamiquement la sortie appropriée.

- **Défi :** Assurer la qualité et la cohérence du code.
  - **Solution :** Nous avons utilisé TypeScript pour la sécurité des types, ESLint pour le linting, et configuré un workflow GitHub Actions pour exécuter des tests et des linters à chaque push.

## Pour Commencer

Bienvenue dans le guide de configuration de l'environnement de développement de `terminal-app`. Ce document fournit des instructions complètes pour faciliter une configuration fluide et cohérente dans divers environnements de développement.

### Installation des Dépendances

Pour installer les dépendances du projet, exécutez :

```bash
npm install


lien vercel : https://terminalgroup4.vercel.app/