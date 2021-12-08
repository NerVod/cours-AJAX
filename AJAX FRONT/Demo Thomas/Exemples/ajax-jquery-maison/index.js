function ajax(options) {
  const requete = new XMLHttpRequest();
  requete.open(options.method, options.url);
  requete.send();

  requete.onload = function () {
    typeof requete.response; // "string"
    const data = JSON.parse(requete.response); // Supposons que la réponse est au format JSON
    let textStatus;
    const jqXHR = requete;
    requete.proprieteBidon = "ma propriété perso";
    if (requete.status >= 200 && requete.status < 400) {
      textStatus = "success";
      options.success(data, textStatus, jqXHR);
    }
    if (requete.status >= 400) {
      textStatus = "error";
    }
  };
}

ajax({
  url: "https://swapi.dev/api/starships/9",
  method: "GET",
  success: function (data, textStatus, jqXHR) {
    console.log("🚀 ~ file: index.js ~ line 26 ~ data", data);
    console.log("🚀 ~ file: index.js ~ line 26 ~ textStatus", textStatus);
    console.log("🚀 ~ file: index.js ~ line 26 ~ jqXHR", jqXHR);
  },
});
