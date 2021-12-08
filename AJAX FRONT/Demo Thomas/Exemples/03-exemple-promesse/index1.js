const promesse1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("100 euros");
  }, 3000);
});

// La valeur de retour de la méthode .then() d'une promesse est TOUJOURS une nouvelle promesse.
promesse1
  .then(function (valeurDeResolutionPromesse1) {
    console.log("promesse tenue !");
    console.log("valeurDeResolutionPromesse1", valeurDeResolutionPromesse1);

    return 200;
    // Equivalent à :
    //   return new Promise(function (resolve, reject) {
    //     resolve(200);
    //   });
  })
  .then(function (valeurDeResolutionPromesse2) {
    console.log("promesse2 tenue !");
    console.log("valeurDeResolutionPromesse2", valeurDeResolutionPromesse2);
  });
