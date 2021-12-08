const bouton = document.querySelector("button");
const ul = document.querySelector("ul");

bouton.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/comments?postId=3", {
    method: "GET",
  })
    // /!\ Etape supplémentaire par rapport à Axios.
    .then(function (response) {
      // response.body contient une valeur de type ReadableStream, il faut appeler l'une des méthodes présentes sur response (text(), json(), etc.) pour lire le contenu du body.
      return response.json(); // response.json() renvoie une promesse
    })
    .then(function (commentaires) {
      console.log("json", commentaires);

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
