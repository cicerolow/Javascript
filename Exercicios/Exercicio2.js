// 2. Uma empresa decide dar aumento de 30% aos funcionários cujo salário é inferior a 500 reais. 
// Escreva um programa que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito a aumento.


let prompt = require("prompt-sync")()

let salario = parseFloat(prompt("Digite seu salario: "));

if (salario < 500) {
    salarioReajuste = (salario * 0.3) + salario;

    console.log(`Seu salario foi reajustado em 30%, ficando R$ ${salarioReajuste}`)
    console.log("Seu salario foi reajustado em 30%, ficando R$ " + salarioReajuste)
    
}else{
    console.log("Voce nao tem direito a reajuste! :")
}