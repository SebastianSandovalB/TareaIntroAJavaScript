var btn = document.getElementById("btn");
var btnSumar = document.getElementById("btnSumar");
var btnRestar = document.getElementById("btnRestar");
var btnMultiplicar = document.getElementById("btnMultiplicar");
var btnDividir = document.getElementById("btnDividir");



var resultado = document.getElementById("resultado"); 
var resultado2 = document.getElementById("resultado2")

var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");
var inputUnoCalc = document.getElementById("input-uno-calc");
var inputDosCalc = document.getElementById("input-dos-calc");


function suma(n1, n2) {
   
    return parseInt(n1) + parseInt(n2);
}
function resta(n1, n2) {

    return parseInt(n1) - parseInt(n2);
}
function multiplica(n1, n2) {

    return parseInt(n1) * parseInt(n2);
}
function divide(n1, n2) {

    return parseInt(n1) / parseInt(n2);
}
function random(min, max) {
    
    return Math.floor(Math.random() * parseInt(max-1)) + parseInt(min);
}
function validar(n1, n2, tipo){

    if (n1 === "") {
        alert("ingrese valor en casilla 1")
    }else if(n2 === ""){
        alert("ingrese valor en casilla 2")
    }

    if (n1%1 != 0) {
        alert("El numero ingresado en la casilla 1 no es entero")
    } else if (n2 % 1 != 0){
        alert("El numero ingresado en la casilla 2 no es entero")
    }

    if (tipo === "division" && n2 == 0 ) {
        alert("No es posible dividir por 0")
    }

}

btn.addEventListener("click", function () {

    var min = inputUno.value;
    var max = inputDos.value;

    validar(min,max,"random");

    resultado.innerHTML = random(min, max); 
});

btnSumar.addEventListener("click", function () {

    var n1 = inputUnoCalc.value;
    var n2 = inputDosCalc.value;

    validar(n1, n2,"suma");

    resultado2.innerHTML = suma(n1, n2);
});

btnRestar.addEventListener("click", function () {

    var n1 = inputUnoCalc.value;
    var n2 = inputDosCalc.value;

    validar(n1, n2, "resta");

    resultado2.innerHTML = resta(n1, n2);
});
btnMultiplicar.addEventListener("click", function () {

    var n1 = inputUnoCalc.value;
    var n2 = inputDosCalc.value;

    validar(n1, n2, "multiplicacion");

    resultado2.innerHTML = multiplica(n1, n2);
});
btnDividir.addEventListener("click", function () {

    var n1 = inputUnoCalc.value;
    var n2 = inputDosCalc.value;

    validar(n1, n2, "division");

    resultado2.innerHTML = divide(n1, n2);
});