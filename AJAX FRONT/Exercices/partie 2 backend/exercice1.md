# Exercice 1 - Texte

## Présentation
La méthode [`ajax()`](http://api.jquery.com/jquery.ajax/) de jQuery permet de mettre en oeuvre de façon simplifiée la technique de mise à jour asynchrone Ajax.

Cette méthode s'utilise de la façon suivante :

``` language-javascript
$.ajax({
  url: 'http://www.example.com', // Où est-ce qu’on envoie la requête ?
  method: 'POST', // Comment est envoyée la requête (méthode GET ou POST) ?
  data: '', // Qu’est-ce qu’on envoie comme données dans la requête HTTP ? (sous la forme variable=valeur&autrevariable=autrevaleur&etc... )
  dataType: 'json', // Quelle est la forme des données qu’on reçoit ? ('text', 'html', 'json').
  success: function(data, textStatus, jqXHR) {
    //
  }, // Qu’est ce qu’on fait quand on reçoit une réponse ? (il s’agit ici d’une fonction qui sera executée par jQuery à la réception des données).
  error: function(jqXHR, textStatus, errorThrown) {
    //
  }, // Qu’est ce qu’on fait si la requête échoue ? (il s’agit ici d’une fonction qui sera executée par jQuery en cas d’erreur).
});
```

##  Objectif

Créez un serveur [express](https://expressjs.com/).

Le serveur doit servir une page HTML et doit également pouvoir renvoyer un contenu texte en réponse à une autre adresse prévue, par exemple :
``` language-http
/extraits/mon-texte.txt
```

Faire en sorte que lorsqu'un utilisateur clique sur un bouton sur la page d'accueil, le texte brut contenu dans le fichier texte soit téléchargé et affiché sous le titre dans une zone prévue à cet effet.
