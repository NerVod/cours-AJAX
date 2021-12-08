function ajax(options) {
    const requete = new XMLHttpRequest();
    requete.open(options.method, options.url);
    requete.send();

    requete.onload = function() {
        // si on fait typeOf requete.response //=> c'est du "String"
        //On le parse pour retrouver un objet dans la variable data
        const data = JSON.parse(requete.response); // supposons que la réponse est au format JSON
        let textStatus;
        const jqXHR = requete;
        requete.proprieteBidon = "ma propriété perso";
        if (requete.status >= 200 && requete.status < 400) {
            textStatus = "success";
            options.success(data,textStatus, jqXHR)

        }
        if (requete.status >=400) {
            textStatus = "error";
        }
    };
}



// ci dessous l'option en argument
ajax({
    url:"https://swapi.dev/api/starships/9",
    method:"GET",
    success: function(data, textStatus, jqXHR) { 
    console.log("🚀 ~ file: index.js ~ line 31 ~ jqXHR", jqXHR)
    console.log("🚀 ~ file: index.js ~ line 31 ~ textStatus", textStatus)
    console.log("🚀 ~ file: index.js ~ line 31 ~ data", data)
        
    }

});