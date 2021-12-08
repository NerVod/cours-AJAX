// Exemple de requête avec rxjs.ajax
rxjs.ajax
  .ajax({
    url: "https://swapi.dev/api/people/10/",
    method: "GET",
  })
  // L'observable (et donc la requête) est déclenché par la souscription
  .subscribe({
    next: function (reponseHTTP) {
      const personnage = reponseHTTP.response;
      console.log(personnage);
    },
    error: function (error) {
      console.log(error);
    },
    complete: function () {
      console.log("requête terminée");
    },
  });

// Exemple d'utilisation d'opérateurs
const operateurMap = rxjs.operators.map;

const observableDeNombres = new rxjs.Observable(function (observateur) {
  observateur.next(1);
  observateur.next(2);
  observateur.next(3);
  observateur.next(4);
});

const observableModifie = observableDeNombres.pipe(
  operateurMap(function (x) {
    return x * x; // On met le nombre au carré
  })
);

observableModifie.subscribe({
  next: function (x) {
    console.log("x", x);
  },
});
