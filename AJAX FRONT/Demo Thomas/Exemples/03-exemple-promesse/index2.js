const promesse1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // reject("dettes non remboursées");
    resolve(100);
  }, 3000);
});

// La valeur de retour de la méthode .then() d'une promesse est TOUJOURS une nouvelle promesse.
promesse1
  .then(function (valeurDeResolutionPromesse1) {
    console.log("promesse tenue !");
    console.log("valeurDeResolutionPromesse1", valeurDeResolutionPromesse1);
    return 200;
  })
  .then(function (valeurDeResolutionPromesse2) {
    console.log("valeurDeResolutionPromesse2", valeurDeResolutionPromesse2);
    return 201;
  })
  .then(function (valeurDeResolutionPromesse3) {
    console.log("valeurDeResolutionPromesse3", valeurDeResolutionPromesse3);
    throw new Error("Sauve qui peut !!!");
    return 202;
  })
  .then(function (valeurDeResolutionPromesse4) {
    console.log("valeurDeResolutionPromesse4", valeurDeResolutionPromesse4);
    return 203;
  })
  .then(function (valeurDeResolutionPromesse5) {
    console.log("valeurDeResolutionPromesse5", valeurDeResolutionPromesse5);
    return 204;
  })
  // Ce premier bloc catch() s'applique à tous les then() précédents ainsi qu'à la promesse de départ.
  .catch(function (erreur) {
    console.log("erreur", erreur);
    return 300;

    /* Pour provoquer une interruption de la chaîne de promesses (reject), on a 3 possibilités :
     1. throw new Error("nouvelle erreur");
     2. return new Promise(function (resolve, reject) {
       reject(new Error("nouvelle erreur"));
     });
     3. return Promise.reject(new Error("nouvelle erreur"));
    */
  })
  .then(function (valeurDeResolutionPromesse6) {
    console.log("valeurDeResolutionPromesse6", valeurDeResolutionPromesse6);
  })
  // Ce deuxième bloc catch s'applique à tous les then() depuis le dernier bloc catch().
  .catch(function (erreur) {
    console.log("erreur", erreur);
  });
