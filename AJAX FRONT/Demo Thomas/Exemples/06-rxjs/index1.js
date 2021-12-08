console.log("rxjs", rxjs);

const scienceEtVie = new rxjs.Observable(function (observateur) {
  let numero = 1;
  const maxNumero = 20;

  const id = setInterval(function () {
    // Emet une valeur
    observateur.next("Science et Vie N°" + numero);
    numero++;

    if (numero > maxNumero) {
      clearInterval(id);
      // Termine l'observable
      observateur.complete();
    }
  }, 1000);
});

const abonneJean = {
  next: function (numero) {
    console.log("Jean vient de recevoir : " + numero);
  },
  error: function (erreur) {
    console.log("erreur", erreur);
  },
  complete: function () {
    console.log(
      "Jean vient d'être averti que Science et Vie a arrêté de publier"
    );
  },
};

const abonneMarc = {
  next: function (numero) {
    console.log("Marc vient de recevoir : " + numero);
  },
  error: function (erreur) {
    console.log("erreur", erreur);
  },
  complete: function () {
    console.log(
      "Marc vient d'être averti que Science et Vie a arrêté de publier"
    );
  },
};

scienceEtVie.subscribe(abonneJean);
setTimeout(function () {
  scienceEtVie.subscribe(abonneMarc);
}, 5000);
