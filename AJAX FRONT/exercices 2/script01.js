var tirerUnNombre = function() {

    var nombre = Math.random();   
    nombre = nombre*49;
    console.log(nombre);
}
tirerUnNombre();

const tirage = {}

const promesseDuPremierNumero = new Promise(function (resolve, reject) {
  setTimeout(function () {
      const numero1 = tirerUnNombre()
    console.log("numero1");
  }, 3000);
})
.then(function () {
  let numeroChoisi = (tirerUnNombre()*49);
  return numeroChoisi;
});
console.log(numeroChoisi)

