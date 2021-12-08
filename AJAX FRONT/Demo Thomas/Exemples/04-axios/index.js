const bouton = document.querySelector("button");
const ul = document.querySelector("ul");

bouton.addEventListener("click", function () {
  axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/comments?postId=3",
  })
    .then(function (reponseHTTP) {
      const commentaires = reponseHTTP.data;

      for (var i = 0, length = commentaires.length; i < length; i++) {
        const commentaire = commentaires[i];
        const li = document.createElement("li");
        li.innerHTML = `
        <h3>${commentaire.name}</h3>
        <p>${commentaire.body}</p>
      `;
        ul.appendChild(li);
      }
    })
    .catch(function (erreur) {
      // Traitement de l'erreur dans le bloc ".catch()"
      console.log("erreur :", erreur);
    });
});
