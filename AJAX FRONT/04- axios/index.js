
const bouton = document.querySelector("button");
const ul = document.querySelector("ul")


bouton.addEventListener("click", function() {

   const promesseDeReponseHTTP = axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/comments?postId=3",
    
    }).then(function (reponseHTTP) {
      
      const commentaires = reponseHTTP.data;

      for ( var i=0, length = commentaires.length; i< length; i++) {
          const commentaire = commentaires[i];
          const li = document.createElement("li");
          li.innerHTML = `
          <h2>${commentaire.name}</h2>
          <p>${commentaire.body}</p>
          `;
          ul.appendChild(li);
      }
          
    })
    .catch(function(erreur) {
        //traitement de l'erreur dans le bloc ".catch()"
        console.log("erreur :", erreur)
    })

})
