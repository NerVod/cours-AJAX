const promesse1 = new Promise(function (resolve, reject) {
    setTimeout( function () {
        // reject("Dette non remboursée");
        resolve("100 euros"); //inutile car reject en premier => comme un "return"
        
    }, 3000);
});




promesse1
    .then(function(valeurDeResolutionPromesse1) {
    console.log("Promesse tenue !");
    console.log("valeurDeResolutionPromesse1", valeurDeResolutionPromesse1)
    return 200
    // le return 200 est Equivalent à :
    // return new Promise(function (resolve, reject){
        // resolve(200);  
    }).then(function(valeurDeResolutionPromesse2) {
        console.log("🚀 ~ file: index2.js ~ line 21 ~ valeurDeResolutionPromesse2", valeurDeResolutionPromesse2)
        return 2000
    })
    .then(function(valeurDeResolutionPromesse3) {
        console.log("🚀 ~ file: index2.js ~ line 25 ~ .then ~ valeurDeResolutionPromesse3", valeurDeResolutionPromesse3)
        // throw new Error("Sauve qui peut !")
        return 3000
    })
    .then(function(valeurDeResolutionPromesse4) {
        console.log("🚀 ~ file: index2.js ~ line 29 ~ .then ~ valeurDeResolutionPromesse4", valeurDeResolutionPromesse4)
        return 4000
    })
    .then(function(valeurDeResolutionPromesse5) {
    console.log("🚀 ~ file: index2.js ~ line 33 ~ .then ~ valeurDeResolutionPromesse5", valeurDeResolutionPromesse5)
        
        return 5000
    })
    
    .catch(function(erreur) {
        console.log("erreur ", erreur);
        
        // return 300;
        throw new Error("Nouvelle erreur", );
        // return new Promise (function (resolve, reject) {
        //     reject("Nouvelle erreur");
        // });
    })
    .then(function (valeurDeResolutionPromesse2) {
        console.log("promesse 2 tenue");
        console.log("valeurDeResolutionPromesse2", valeurDeResolutionPromesse2)
    })
    .catch(function(erreur) {
        console.log("erreur", erreur);
        return 300;
    } )
