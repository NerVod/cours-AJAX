# Exercice 3

## Présentation

AJAX permet de contrôler l'envoi de formulaires en contournant le fonctionnement standard du navigateur, et ainsi d'empêcher le rechargement de la page.

## Objectif

Nous allons charger des publications provenant de l'API JSONPlaceholder. Nous ne chargerons qu'une seule publication à la fois, en fonction du numéro de la publication que l'utilisateur aura sélectionné au moyen d'un formulaire.

**Partie 1**

1. Créez un document HTML et prévoyez un champ `<input>` de type `number` (SANS FORMULAIRE) et ayant pour attribut `name="postId"`. Prévoyez également une balise `<article></article>` en-dessous du champ de saisie. C'est à cet emplacement que nous afficheront la publication une fois chargée.
2. Pensez à assigner une valeur par défaut de `"1"` au champ de saisie et à limiter les valeurs possibles à des nombres supérieurs ou égaux à 1.
3. Lisez la valeur initiale du champ de saisie et utilisez la valeur récupérée pour charger la publication avec l'id correspondant dès le chargement de la page. Reportez-vous pour ce faire à la documentation disponible ici : https://jsonplaceholder.typicode.com/guide/.
4. A l'aide d'un gestionnaire d'événement sur le champ de saisie, à chaque fois que l'utilisateur modifie la valeur du champ, chargez à nouveau l'article correspondant et venez remplacer le contenu de la balise `<article></article>` par le nouvel article.

**Partie 2**

5. Désormais, modifiez votre code HTML pour rajouter une balise `<form>` autour du champ de saisie, ainsi qu'un second champ `<input>` de type `submit`.
6. Cette fois, faites en sorte que le chargement de la publication se fasse à la validation du formulaire (clic sur le bouton de soumission). /!\ Prêtez attention à empêcher le rechargement de la page.
7. Une fois le chargement de la publication terminé, prévoyez une nouvelle balise `<ul></ul>` en bas de page et faites en sorte de ne charger à cet emplacement que les commentaires associés à la publication choisie par l'utilisateur. Vous pouvez vous reporter à la documentation pour trouver comment charger des commentaires : https://jsonplaceholder.typicode.com/guide/ (_Listing nested resources_).
8. Prévoyez des indicateurs de chargement pour la publication et la liste de commentaires, par exemple : "chargement en cours...".