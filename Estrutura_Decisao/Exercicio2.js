// Exercício 2: Verificação de dia da semana

// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante.


let prompt = require("prompt-sync")()

let numero = parseInt(prompt("Digite um numero de 1 a 7: "));

switch (numero) {
    case 1:
        console.log("Segunda-Feira");
        break;
    case 2:
        console.log("Terca-Feira");
        break;
    case 3:
        console.log("Quarta-Feira");
        break;
    case 4:
        console.log("Quinta-Feira");
        break;
    case 5:
        console.log("Sexta-Feira");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Coloque um numero de 1 a 7!!!");
        break;
}