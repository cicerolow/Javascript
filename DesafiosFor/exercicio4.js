// 4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.



// let prompt = require('prompt-sync')()

// let numero = prompt('Digite um numero: ') 

// for (let contador = 1; contador <= 10; contador++)
//     //    console.log("3 x "+contador+" = " + (3*contador));
//     console.log("1 x "+contador+" = " + (1*contador));

let prompt = require('prompt-sync')()

let numero = parseInt(prompt("Digite o numero desejado: "));

for (let contador = 1; contador <= 10; contador++)
    //console.log("3 x "+contador+" = " + (3*contador));
    //console.log(`2 x ${contador} = ${2 * contador}`);
    console.log(`${contador} ${contador} = ${2 * contador}`);


