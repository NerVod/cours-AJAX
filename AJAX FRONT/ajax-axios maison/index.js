function ajax(options) {
    //coder la fonction

    return new Promise(function(resolve, reject) {
        const requete = new XMLHttpRequest() 
        requete.open(options.method, options.url);
        requete.send()

        requete.onload = function () {
            const response = JSON.parse(requete.response)
            if(requete.status <= 200 && requete.qtatus < 400) {
                
            }
            if(requete.status >= 400) {
                reject(new Error("code de status " + requete.status))
            }
        };
        
    });
}


ajax({
    url:"https://jsonplaceholder.typicode.com/comments?postId=1",
    method:"GET",
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function(erreur) {});
