# Exercice 4 - TGV

## Objectif
Reprenez le site [express](https://expressjs.com/) créé pour les exercices précédants.

### Étape 1
Créez une nouvelle base de données comprenant une collection dans laquelle vous importerez le contenu du fichier [`regularite-mensuelle-tgv.json`](https://www.data.gouv.fr/en/datasets/regularite-mensuelle-tgv-sncf/) à l'aide de [mongoimport](https://docs.mongodb.org/manual/reference/program/mongoimport/).

### Étape 2
Au chargement de la page, affichez dans un `<select>` les gares de départ.

### Étape 3
Au changement sur le premier `<select>` ([`.change()`](http://api.jquery.com/change/) avec jQuery), affichez un second `<select>` grâce à une requête Ajax vous permettant de récupérer les gares d'arrivée.

### Étape 4
Au changement sur le second `<select>`, affichez un troisième `<select>` grâce à une requête Ajax vous permettant de récupérer les dates.

### Étape 5
Au changement sur le troisième `<select>`, affichez les informations liées à la combinaison de la gare de départ, la gare d'arrivée et la date :

 - nombre_de_trains_ayant_circule
 - nombre_de_trains_annules
 - taux_regularite
 - commentaire

