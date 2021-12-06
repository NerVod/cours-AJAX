# Exercice 3 - Autocomplete

##  Objectif

### Serveur
Reprenez le serveur [express](https://expressjs.com/) créé aux exercices précédents

Le serveur doit pouvoir renvoyer un contenu [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) en réponse à une adresse prévue, par exemple :

``` language-http
/extraits/mon-json.json
```

Ce contenu doit être généré par le serveur à la volée (à chaque requête).

Le serveur doit récupérer un paramètre passé avec la méthode GET dans la requête HTTP.

Le paramètre doit ensuite être utilisé dans une requête MongoDB pour retrouver les restaurants de New York dont le nom commence par la valeur texte passée en GET.

La liste de résultats doit être renvoyée au client au format JSON.


### Client

Le serveur doit générer une page contenant un formulaire permettant de saisir du texte.

Un script doit interrompre l'envoi du formulaire et gérer l'envoi des données via une requête Ajax.

Le script (côté client) recevant la réponse de la requête asynchrone doit afficher une liste de noms de restaurants sous le formulaire.
