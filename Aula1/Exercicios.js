// let prompt = require('prompt-sync')()


// let nome = prompt('Digite seu nome: ') 
// console.log('Ola ' + nome)


// let numero = prompt('Digite um numero: ')

// if (numero > 10) {
//     console.log("Maior que 10") 

// }else if (numero == 10) {
//     console.log("Igual a 10")

// }else{
//     console.log("Menor que 10")
// }


// let letra = prompt("Digite uma letra: ")
// if (letra == "a") {
//     console.log("letra a")

// }else if (letra == "b") {
//     console.log("letra b")

// }else if (letra == "c") {
//     console.log("letra c")

// }else{
//     console.log("letra nao existe")

// }

// switch (letra) {
//     case "a":
//         console.log("letra a")
//         break;
//         case "b":
//         console.log("letra b")
//         break;
//         case "c":
//         console.log("letra c")
//         break;

//     default:
//         console.log("letra nao existe")
//         break;
// }


// let pNum = prompt("Digite o primeiro numero: ")
// let sNum = prompt("Digite o segundo numero: ")

// let soma = pNum + sNum;

// console.log("A soma e: " + soma)


// let pNum = parseInt(prompt("Digite o primeiro numero: "))
// let sNum = prompt("Digite o segundo numero: ")

// let soma = pNum + parseInt(sNum);

// if (soma > 10) {
//     console.log("A soma e: " + soma + "e e maior que 10")
    
// }else if (soma == 10) {
//     console.log("A soma e: " + soma + "e e igual a 10")
    
// }else{
//     console.log("A soma e: " + soma + "e e menor que 10")
// }


// let letra = prompt("Digite uma letra")
// let numero = prompt("Digite um numero")

// if (letra == "a" || numero == "1"){
//     console.log("Acertou!!!")

// }else{
//     console.log("Errou!!!")
// }


let numero = parseInt(prompt("Digite um numero: "))

let restante = numero % 2

console.log(restante)

if (restante != 0){
    console.log("O numero e impar")

}else{
    console.log("O numero e par")
}