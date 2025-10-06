# Gestion de Tickets de Support

## Description
Ce projet est une application basée sur une architecture microservices qui permet la gestion des demandes de support client. Les utilisateurs peuvent créer, suivre et résoudre des tickets de support, tandis que les agents de support peuvent gérer et répondre à ces tickets.

## Fonctionnalités Principales
- **Soumission de Tickets** : Les utilisateurs peuvent soumettre des tickets de support via une interface web.
- **Suivi des Tickets** : Les utilisateurs peuvent voir l'état actuel de leurs tickets en temps réel.
- **Gestion des Agents** : Les agents de support peuvent consulter, assigner et résoudre les tickets.
- **Statistiques** : Les administrateurs peuvent accéder à des tableaux de bord pour visualiser les performances des agents et des tendances d'incidents.

## Technologies Utilisées
- **Backend** : Node.js avec Express pour les services de gestion des tickets et des utilisateurs.
- **Base de Données** : MongoDB pour stocker les informations sur les tickets et les utilisateurs.
- **Frontend** : React pour une interface utilisateur dynamique et réactive.
- **Gestion des Conteneurs** : Docker pour déployer chaque microservice dans un conteneur séparé.
- **Infrastructure** : Kubernetes pour l'orchestration et la gestion des conteneurs.

## Installation
1. Clonez le référentiel.
2. Installez les dépendances pour chaque microservice.
3. Configurez les variables d'environnement.
4. Utilisez Docker Compose ou Kubernetes pour déployer l'application.

## Contribuer
N'hésitez pas à proposer des améliorations ou des corrections via des pull requests.

## License
Ce projet est sous licence MIT.