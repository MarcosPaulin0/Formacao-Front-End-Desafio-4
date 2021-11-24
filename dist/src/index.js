"use strict";
/* Pega o valor dos elementos do input */
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.getElementById("button");
/* Função soma */
function sum(a, b) {
    return a + b;
}
/* No click do botão somar ele joga no console.log o valor que tiver */
button.addEventListener("click", function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
console.log("oi");
