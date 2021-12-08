# Promesses - Exécution de promesses en parallèle

Nous avons vu jusqu'ici comment démarrer une promesse et attendre sa résolution, ainsi que comment **chaîner** plusieurs promesses les unes à la suite des autres.
Il est également possible d'exécuter plusieurs promesses **en parallèle** à l'aide de la fonction `Promise.all()`.

`Promise.all()` prend en argument un tableau de promesses et se résout lorsque la dernière promesse du tableau a fini de se résoudre.
La valeur de résolution de `Promise.all()` est un tableau contenant, dans l'ordre, les valeurs de résolution respectives de chacune des promesses du tableau passé en argument.

Voir la documentation : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all.

## Objectif

1. Commencez par créer une promesse qui se résout instantanément et renvoie un texte. Affichez alors dans la console le message "promesse 1 terminée".
2. Créez une deuxième promesse qui se résout au bout de 5 secondes et renvoie le nombre 42. Affichez alors dans la console le message "promesse 2 terminée".
3. Créez une troisième promesse qui se résout à un booléen (`true` ou `false`) au bout de 1 seconde. Affichez alors dans la console le message "promesse 3 terminée".
4. Créez une quatrième promesse qui se résout à un objet possédant une propriété `name` et une méthode `quelEstMonNom` affichant le nom de l'objet, le tout au bout de 2 secondes. Affichez alors dans la console le message "promesse 4 terminée".
5. Créez une cinquième promesse qui se résout au bout d'un temps aléatoire compris en 5 et 10 secondes, et dont la valeur de résolution sera égale au même nombre que vous aurez généré aléatoirement. Affichez alors dans la console le message "promesse 5 terminée".
6. Reprenez les 5 promesses ci-dessus en les mettant dans un tableau. Utilisez `Promise.all()` pour toutes les exécuter en parallèle. Récupérez la valeur de résolution de l'appel à `Promise.all()` dans la méthode `then()` de la promesse renvoyée et affichez cette valeur dans la console.
7. Observez l'ordre d'apparition des messages dans la console.

## Notions

- Promise
- Promise.all
- setTimeout
- Math.random