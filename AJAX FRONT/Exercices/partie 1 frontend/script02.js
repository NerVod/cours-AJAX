const $ul = $('ul');
const $boutonPrecedent = $('button#previous');
const $boutonSuivant = $('button#next')

let url = "https://swapi.dev/api/people";
let urlSuivante = "";
let urlPrecedente ="";



$.ajax({
    url: url,
      method: "GET",
     
      success: function(data,textStatus,jqXHR){
          $ul.html("");

          const personnages = data.results

          for (var i=0; i < personnages.length; i++  ) {
              const personnage = personnages[i]
            const urlSplit = personnage.url.split('/');
            const id = urlSplit[urlSplit.length -2];
              const $li = $("<li></li>")
              $li.html (id + " " + personnage.name);

              $ul.append($li)
          }

          urlSuivante = data.next;
          urlPrecedente = data.previous;

          if (urlPrecedente === null){
              $boutonPrecedent.hide();
          }else {
              $boutonPrecedent.show();
          }

          
    },
        

});











