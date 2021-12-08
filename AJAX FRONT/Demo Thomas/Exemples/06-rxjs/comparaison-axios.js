axios({
  url: "https://swapi.dev/api/people/10/",
  method: "GET",
})
  .then(function (reponseHTTP) {
    const personnage = reponseHTTP.data;
  })
  .catch(function (erreur) {
    console.log("erreur :", erreur);
  });
