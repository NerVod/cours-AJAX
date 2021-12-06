// Ciblage du DOM
const boutonChargement = document.querySelector("button");
const ul = document.querySelector("ul");

boutonChargement.addEventListener("click", function () {
  // création de la requête
  const requete = new XMLHttpRequest();

  // suivi des changements d'état de readyState
  requete.onreadystatechange = function () {
    console.log(requete.readyState);

    if (requete.readyState === 4) {
      // on pourrait gérer la réception de la réponse à cet endroit.
    }
  };

  /* ENVOI DE LA REQUETE */

  // configuration de la requête
  requete.open("GET", "https://swapi.dev/api/people", true);

  // envoi de la requête
  requete.send();

  ul.innerHTML =
    "chargement des personnages en cours (ça peut prendre un moment)...";

  /* RECEPTION DE LA REPONSE */

  // Syntaxe alternative à requete.onload
  requete.addEventListener("load", function () {
    // ...
  });

  requete.onload = function () {
    // Code de statut OK (>= 200 et < 400)
    if (requete.status >= 200 && requete.status < 400) {
      // On retire l'indicateur de chargement
      ul.innerHTML = "";

      console.log("réponse", requete.response);

      // JSON.parse() convertit une chaîne de caractères contenant du JSON en objet / tableau JavaScript
      const reponseJSON = JSON.parse(requete.response);
      console.log("réponse JSON", reponseJSON);

      const personnages = reponseJSON.results;
      console.log("personnages", personnages);

      for (var i = 0, length = personnages.length; i < length; i++) {
        const personnage = personnages[i];
        const li = document.createElement("li");
        li.innerHTML = "<strong>" + personnage.name + "</strong>";
        ul.appendChild(li);
      }
    }

    // Erreur client (>= 400) / serveur (>= 500)
    if (requete.status >= 400) {
      ul.innerHTML =
        "Une erreur s'est produite lors de la requête. Code de statut : <strong>" +
        requete.status +
        "</strong>";
    }
  };

  // équivalent de requete.onerror
  requete.addEventListener("error", function () {
    //   ...
  });

  requete.onerror = function () {
    // La requête ne parvient jamais au serveur
    ul.innerHTML = "Echec de l'envoi de la requête";
  };
});
