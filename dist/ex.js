"use strict";
/* ------ Exercício 1 --------

function soma(a:any, b:any){
    return a+ b;
}
console.log(soma(1,1));
console.log(soma('1',1));
console.log(soma('1','1')); */
/* ------ Exercício 2 ------
let var1 = "texto";
let var2 = 5;
let var3 = true;

console.log(typeof var1)
console.log(typeof var2)
console.log(typeof var3)

// Os tipos pré definidos das variáveis não aceitam atribuições de valores fora dos que já foram definidos
var1 = 3;
var2 = true;
var3 = "texto"; */
// ------- Exercício 3 ------
var items;
items = ['10', '12', '15', '20', '22'];
function soma(items) {
    return items + 1;
}
console.log(soma("O valor {items} somado com 1 = {soma}."));
