const promesse = new Promise(function (resolve, reject) {
    setTimeout( function () {
        resolve("100 euros");
        
    }, 3000);
});

const promesse2 = promesse.then(function(valeurDeResolutionPromesse1) {
    console.log("Promesse tenue !");
    console.log("valeurDeResolutionPromesse1", valeurDeResolutionPromesse1)


    return 200
    // le return 200 est Equivalent à :

    // return new Promise(function (resolve, reject){
        // resolve(200);
}) 
    
// asynchrone se résoud après le code synchrone

promesse2.then(function(valeurDeResolutionPromesse2) {
    console.log("promesse 2 tenue !");
    console.log('valeurDeResolutionPromsesse2', valeurDeResolutionPromesse2)
})


// window.onload = function (event){
//     console.log('document chargé !')
// }


// setTimeout( function () {
//     console.log("fin du setTimeout")
// }, 0);

// setInterval(function() {
//     console.log("Interval")
// },1000)

// console.log(promesse);



// console.log("fin du code")      // code synchrone, normal dans le flux du traitement 
// console.log("fin du code")      // code synchrone, normal dans le flux du traitement 
// console.log("fin du code")      // code synchrone, normal dans le flux du traitement 
// console.log("fin du code")      // code synchrone, normal dans le flux du traitement 