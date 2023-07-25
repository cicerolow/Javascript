//EXEMPLO - 1:

// let nomes = ["Alana", "Alexia", "Samanta", "Thiago", "Odirlei"];
//              0           1       2           3         4

// for (let contador = 0; contador < nomes.length; contador++) {
//     const cadaElemento = nomes[contador];
//     console.log(cadaElemento);    
// }

// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[2]);
// console.log(nomes[3]);
// console.log(nomes[4]);

// let nomes = ["Alana", "Alexia", "Samanta", "Thiago", "Odirlei"];
//              0           1       2           3         4

// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[2]);
// console.log(nomes[3]);
// console.log(nomes[4]);

// for (let contador = 0; contador < nomes.length; contador++) {
//     const cadaElemento = nomes[contador];
//     console.log(cadaElemento);    
// }

//Uso do .forEach - ler as listas

// nomes.forEach(cadaElemento => {
//     console.log(cadaElemento);
// })

// nomes.forEach(cadaElemento, posicao => {
//     console.log(posicao, cadaElemento);
// })


//EXEMPLO - 2:

//const frutas = ["Pera", "Uva", "Maca", "Salada Mista"];
// for (let contador = 0; contador < frutas.length; contador++) {
//     const cadaElemento = frutas[contador];
//     // console.log(cadaElemento);    
//     console.log(contador, cadaElemento); //Mostrar sequencia numerica
// }

// frutas.forEach(cadaElemento =>{
//     console.log(cadaElemento);
// })


//EXEMPLO - 3: AUMENTO SALARIO

// let salario = 1000;

// while (salario < 5000) {
//     salario =+ 100;  //salario = salario + 100;
//     console.log("O seu salario ainda e R$" + salario);
// }

// while (salario < 5000) {
//     salario + 100;
//console.log("O seu salario ainda e R$" + salario);
// }

//EXEMPLO - 4:

// let salario = 1000;
// let contador = 0;

// while (salario < 5000) {
//     salario + 100; // salario = salario + 100;
//     contador++;

//     console.log("O seu salario ainda e R$" + salario);

// }
// console.log(contador);

// do {
//     salario =+ 100;
// contador++;
// console.log("O seu salario ainda e R$" + salario);

// }while (salario < 5000) {
// console.log(contador);

// }
// console.log(contador);

// const prompt = require('prompt-sync')()

// let numeroEscolhido;
// do {
//     numeroEscolhido = prompt("Digite um numero: ")

// } while (numeroEscolhido != "5");



const prompt = require('prompt-sync')()

let senha;
do {
    let senha = prompt("Digite a senha: ")

    if (senha != "123") {

        console.lof("senha incorreta");
    }

} while (senha == "123");
console.lof("senha incorreta");


