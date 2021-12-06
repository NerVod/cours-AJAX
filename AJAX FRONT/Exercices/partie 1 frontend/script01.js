console.log("jQuery", $);
$ol = $('ol');

$(function() {

  $.ajax({
      url: "https://swapi.dev/api/starships",
      method: "GET",
      data:"",
      dataType:"json",
      success: function(data,textStatus,jqXHR){
          console.log("🚀 ~ file: script01.js ~ line 11 ~ data,textStatus,jqXHR", data,textStatus,jqXHR)

          const vaisseaux = data.results

          for (var i=0, length = vaisseaux.length; i< length; i++  ) {
              const vaisseau = vaisseaux[i]

              const $li = $("<li></li>")
              $li.html (vaisseau.name);

              $ol.append($li)
          }
        },
        error: function(jqXHR,textStatus, erreur) {
        console.log("🚀 ~ file: script01.js ~ line 26 ~ jqXHR,textStatus, erreur", jqXHR,textStatus, erreur)
        console.log("code de status", jqXHR.textStatus)
        }

      
      
      
      
    })














})