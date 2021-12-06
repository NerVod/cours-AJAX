console.log('jQuery', $);
const $boutonChargement = $("button");
const $ul = $("ul");

$boutonChargement.on("click", function() {
    $.ajax({
        url:"https://swapi.dev/api/planets",
        method:"GET",
        success: function (data, textStatus,jqXHR) {
        console.log("🚀 ~ file: index.js ~ line 10 ~ $boutonChargement.on ~ jqXHR", jqXHR)
        console.log("🚀 ~ file: index.js ~ line 10 ~ $boutonChargement.on ~ textStatus", textStatus)
        console.log("🚀 ~ file: index.js ~ line 10 ~ $boutonChargement.on ~ data", data)
        
            
            
            



            const planetes = data.results;
            for (var i= 0, length = planetes.length; i < length; i++) {
                const planete = planetes[i]

            const $li = $("<li></li>");
            $li.html("<strong>" + planete.name + "</strong>");
            $ul.append($li);            


            }

        },

        error: function (jqXHR , textStatus, erreur) {
        console.log("🚀 ~ file: index.js ~ line 31 ~ $boutonChargement.on ~ erreur", erreur)

        console.log("code de status", jqXHR.textStatus)
        }



    });

});