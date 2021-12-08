
const bouton = document.querySelector("button");
const ul = document.querySelector("ul")


bouton.addEventListener("click", function() {

    fetch("https://jsonplaceholder.typicode.com/comments?postId=3", {
        method: "GET",
    }).then(function(response) {
    console.log("bouton.addEventListener ~ response", response);
    console.log(response.body);

    return response.json();
   
    
})
    .then(function(json) {
        console.log("json", json)
        
    });

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
// )};

