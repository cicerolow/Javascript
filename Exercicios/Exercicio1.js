// 1. Faça um programa que receba o nome, cargo e salário de um funcionário. 
// Se o funcionário ganhar abaixo de 1000 reais, calcule o salário acrescido de 10%. 
// Ao final exiba o nome, o cargo e o salário desse funcionário.


let prompt = require("prompt-sync")()

let nome = (prompt("Digite o seu nome: "))
let cargo = (prompt("Digite o seu cargo: "))
let salario = parseInt(prompt("Digite o seu salario: "))
let acrescido = parseInt(prompt("Digite o seu nome: "))

if (salario<=1000) {
    let novoSalario = salario+(salario*(10/100))
    let novoSalario = salario * .25
    console.log(nome+", o seu salario hoje e R$"+salario+" na funcao de "+cargo+" com o aumento voce passara a receber R$"+novoSalario+".")
}else{
    console.log("Voce nao tera aumento, maninho/a!")
}
