# Promesses - Chaînage de promesses

La fonction constructeur `Promise` en JavaScript permet d'effectuer des traitements asynchrones. Une promesse représente une valeur qui peut être disponible immédiatement ou dans le futur, voire jamais en cas d'erreur.

Voir la documentation des promesses : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise.

## Objectif

Nous allons réaliser le tirage des 6 numéros du loto en utilisant les promesses afin de simuler le temps écoulé entre le tirage de deux numéros consécutifs.

1. Commencez par créer une promesse appelée `promesseDuPremierNumero` à l'aide du constructeur `Promise` qui se résout au bout de 3 secondes et affiche dans la console le message "tirage du loto !".
2. Reprenez la promesse précédente, effacez le message et faites en sorte que la valeur de résolution soit un nombre entier aléatoire compris entre 1 et 49. Affichez dans la méthode `then()` de la promesse le nombre aléatoire correspondant au premier numéro du tirage.
3. Le tirage du loto se compose de 5 numéros compris entre 1 et 49 et d'un numéro complémentaire compris entre 1 et 10. Lorsque la première promesse se termine, attendez 2 secondes supplémentaires puis renvoyez un tableau à 2 indices, contenant le premier numéro du tirage suivi d'un nouveau numéro, calculé lui aussi aléatoirement.
4. Répétez l'opération autant de fois que nécessaire en utilisant la possibilité de chaînage des promesses (sous la forme `promesse.then(...).then(...).then(...)` etc.), jusqu'à obtenir une promesse qui se résout à un tableau contenant les 6 numéros du tirage.
5. Votre chaîne de promesses devrait normalement ressembler à : `promesseDuPremierNumero.then().then().then().then().then().then()`. A l'intérieur du 6ème `then()`, affichez la valeur de résolution contenant normalement un tableau à 6 indices avec les 6 numéros du tirage du loto. Affichez ce tableau dans la console avec le message "Les numéros du loto sont ..." suivi du tableau.

## Notions

- Promise
- Promise.prototype.then
- setTimeout
- Math.random