# Projet DataViz - Mapping des arrêts TAN Nantes

## Description

Ce projet de DataVizualisation a pour objectif de visualiser les arrêts de bus et de tram de la ville de Nantes sur une carte numérique interactive. En utilisant les données ouvertes de la Ville de Nantes et un fond de carte OpenStreetMap, l'application permet d'afficher les métadonnées associées aux arrêts, incluant les informations d'accessibilité et les correspondances avec les lignes de transport.

## Fonctionnalités

### Étape 1 : Visualisation de base

- [x] **Affichage des arrêts de bus** : Représentation des arrêts de bus de Nantes sur la carte, avec des symboles distincts.
- [x] **Affichage des arrêts de tram** : Visualisation des arrêts de tram sur le même fond de carte.
- [ ] **Affichage des métadonnées** : Accès aux informations détaillées des arrêts (accessibilité, correspondances, liens avec le tram) via clic ou survol.
- [ ] **Couleurs par ligne** : Connexion graphique des arrêts avec des codes couleur différents pour chaque ligne.

### Étape 2 : Améliorations

- [ ] **Affichage des trajets par ligne** : Liaisons graphiques des arrêts selon les itinéraires disponibles via les données Open Data de la ville.
- [ ] **Photos d’arrêts** : Affichage des photos pour certains arrêts, récupérées par exemple via Google Street View.
- [ ] **Filtrage des données** : Option pour filtrer l'affichage selon les métadonnées et par type de ligne (bus ou tram).
- [ ] **Légende** : Ajout d’une légende explicite sur l'affichage.

## Technologies Utilisées

- **Open Data de la Ville de Nantes** : Données de localisation et de métadonnées des arrêts de transport.
- **OpenStreetMap** : Fond de carte, avec possibilité d’intégration via l’add-on *Leaflet*.
- **Google Street View (facultatif)** : Pour récupérer les photos des arrêts sélectionnés.
