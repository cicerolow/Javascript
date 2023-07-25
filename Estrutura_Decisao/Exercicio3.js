// Exercício 3: Verificação de números em ordem crescente

// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

// let prompt = require("prompt-sync")()


// let verificacao1= prompt("Digite um numero: ");
// let verificacao2= prompt("Digite um numero: ");
// let verificacao3= prompt("Digite um numero: ");

// if (verificacao2 > verificacao1 && verificacao3 > verificacao2) {
//     console.log("Confirmado com sucesso");
    
// }else{
//     console.log("Ordem errada");
// }

let prompt = require("prompt-sync")()

let numero1= prompt("Digite o primeiro numero: ");
let numero2= prompt("Digite o segundo numero: ");
let numero3= prompt("Digite o terceiro numero: ");

if (numero1 > numero2 && numero2 > numero3) {
    console.log("Ordem crescente");

    
}else if(numero3 > numero2 && numero2 > numero1){
    console.log("Ordem decrescente");

}else{
    console.log("Nenhuma ordem");
}