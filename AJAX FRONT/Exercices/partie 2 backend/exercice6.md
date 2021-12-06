# Exercice 6 - AngularJS

## Présentation

Nous avons utilisé jusqu'à maintenant jQuery pour réaliser des requêtes asynchrones. Nous pouvons aussi recourir à [AngularJS](https://angularjs.org/). Pour ce faire, il faut utiliser un contrôleur qui utilisera le service [`$http`](https://docs.angularjs.org/api/ng/service/$http) de la façon suivante :

``` language-javascript
angular.module(modulePrincipal)
.controller('MonControleur', ['$http', function($http) {
  $http.get('http://www.example.com/')
  .then(function(reponse) {
    // Réussite
  })
  .catch(function(error) {
    // Erreur
  });
}]);
```

## Objectif

Reprenez le blog.

Affichez seulement un article sur la page d'accueil.

Prévoyez une balise avec une directive `ng-controller` ayant pour enfant un bouton avec une directive `ng-click`. Chaque clic sur le bouton permet d'afficher l'article suivant.
