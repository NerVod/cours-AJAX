# Exercice 2 - JSON

##  Objectif

Reprenez le serveur [express](https://expressjs.com/) créé à l'exercice 1.

Le serveur doit pouvoir renvoyer un contenu [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) en réponse à une adresse prévue, par exemple :
``` language-http
/extraits/mon-json.json
```

Ce contenu doit être généré par le serveur à la volée (à chaque requête) et contenir au moins 3 propritétés avec des valeurs de votre choix.

Faire en sorte que lorsqu'un utilisateur clique sur un bouton sur la page affichée, le contenu JSON soit téléchargé.

Lorsque le contenu est obtenu côté client (navigateur) affichez la valeur de chaque propriété dans un paragraphe différent.
