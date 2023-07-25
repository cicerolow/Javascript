// Faça um programa que receba dois valores e imprima qual é o maior número digitado.

// let numeroB = 25;
// let numeroC = 7;

// if (numeroA > numeroC && numeroA > numeroB) {
// console.log(numeroA + ' ' + 'e o maior Numero!');
// }
// else if (numeroC > numeroA && numeroC > numeroB) {
// console.log(numeroC + ' ' + 'e o maior Numero!');
// }
// else {
// console.log(numeroB + ' ' + 'e o maior Numero!');
// }


// let numero1 = parseInt(prompt("Informe o primeiro número: "))

// if (numero1 > numero2) {
//     console.log("numero1 maior: ")
// }


// let numero2 = parseInt(prompt("Informe o segundo número: "))

// let letra = prompt("Digite uma letra")


// console.log(numeroB + ' ' + 'e o maior Numero!');



let prompt = require("prompt-sync")()

let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
let valor2 = parseFloat(prompt("Digite o segundo valor: "))

if (valor1 > valor2) {
    console.log("O primeiro valor e maior: " + valor)
    
}else if ((valor2 > valor1)) {
    console.log("O segundo valor e maior: " + valor)
    
}else{
    console.log("Os valores sao iguais.: ")
}
