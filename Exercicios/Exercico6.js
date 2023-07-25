// 6.

let prompt = require("prompt-sync")()


let nota1 = parseFloat(prompt("Qual a primeira nota: "))
let nota2 = parseFloat(prompt("Qual a segunda nota: "))
let nota3 = parseFloat(prompt("Qual a terceira nota: "))
let nota4 = parseFloat(prompt("Qual a quarta nota: "))

let media = (nota1 + nota2 + nota3 + nota4) / 4

console.log("A media foi " + media)

if (media >= 7) {
    console.log("O aluno foi aprovado")

}else if(media < 5){ 
console.log("O aluno foi reprovado")

}else{
    console.log("O aluno esta de recuperacao")
}
