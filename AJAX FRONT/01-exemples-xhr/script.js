// récupérer les éléments du DOM
const boutonChargement = document.querySelector("button");
const ul = document.querySelector("ul");

boutonChargement.addEventListener("click", function (evenement) {
  //création de la requête
  const requete = new XMLHttpRequest();


  //suivi des changements d'états de readyState
  requete.onreadystatechange = function() {
      console.log(requete.readyState)

      if(requete.readyState === 4){
          //on pourrait gérer la réception de la réponse à cet endroit
      }

  }


   


  /**ENVOI DE LA REQUETE */

  //configuration de la requête
  requete.open("GET", "https://swapi.dev/api/people", true);
  console.log("OPEN", requete.readyState)

  //envoi de la requête
  requete.send();
  console.log("LOADING", requete.readyState);

  ul.innerHTML =
    "chargement des personnages en cours (ça peut prendre un moment)...";

  /**RECEPTION DE LA REPONSE */

  // autre écriture :
  requete.addEventListener("load", function () {
    // code de traitement du onload ci dessous
  });

  requete.onload = function () {

    // Code de status OK (>= 200 et < 400)
    if (requete.status >= 200 && requete.status < 400) {
        console.log("DONE", requete.readyState);
        // On retire l'indicateur de chargement
        ul.innerHTML = "";
    
        console.log("réponse", requete.response);
    
        //JSON.parse() convertit une chaine de charactère contenant du JSON en objet / tableau JavaScript
        const reponseJSON = JSON.parse(requete.response);
        console.log("reponseJSON", reponseJSON);
    
        const personnages = reponseJSON.results;
        console.log("personnages", personnages);
    
        for (var i = 0, length = personnages.length; i < length; i++) {
          const personnage = personnages[i];
          const li = document.createElement("li");
          li.innerHTML = "<strong>" + personnage.name + "</strong>";
          ul.appendChild(li);
        }

    }

    // erreur client(>= 400) / serveur (>= 500)
        if(requete.status >= 400){
            ul.innerHTML = "Une erreur s'est produite lors de la requête. Code de statut : <strong>" + requete.status + "</strong>";
        }


  };

// autre syntaxe pour le requete.onerror
  requete.addEventListener("error", function() {
      // gestion de l'erreur envoi au serveur ( problème connexion)
  })

  requete.onerror = function() {
      // La requête ne parvient jamais au serveur

      ul.innerHTML ="Echec de l'envoi de la requête";
  }


});
