function ajax(options) {
  // coder la fonction
  return new Promise(function (resolve, reject) {
    const requete = new XMLHttpRequest();
    requete.open(options.method, options.url);
    requete.send();

    requete.onload = function () {
      const response = {
        data: JSON.parse(requete.response),
      };
      if (requete.status >= 200 && requete.status < 400) {
        resolve(response);
      }
      if (requete.status >= 400) {
        reject(new Error("code de status " + requete.status));
      }
    };

    requete.onerror = function () {
      reject(new Error("la requête a échoué"));
    };
  });
}

ajax({
  url: "https://jsonplaceholder.typicode.com/posts/1",
  method: "GET",
})
  .then(function (response) {
    console.log("response", response);
    console.log("response.data", response.data);
  })
  .catch(function (erreur) {
    console.log("erreur", erreur);
  });
