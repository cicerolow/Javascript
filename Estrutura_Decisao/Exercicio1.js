// Exercício 1: Verificação de login

// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login foi bem-sucedido ou não.


let prompt = require("prompt-sync")()


// let usuarioCadastro = (prompt("informe nome do usuario: "));
// console.log(usuarioCadastro);

// let senhaCadastro = prompt("Informe sua senha: ");
// console.log(senhaCadastro);

// if (usuarioCadastro == "admin" && senhaCadastro == "123") {
//     console.log("login bem-sucedido");    
    
// }else{
//     console.log("Nome de usuario ou senha incorretos!!!")
// }

let nomeUsuario = (prompt("Digite o nome de usuario: "));
let senha = prompt("Digite a senha: ");

if (nomeUsuario == "admin" && senha == "123") {
    console.log("login bem-sucedido");    
    
}else{
    console.log("Nome de usuario ou senha incorretos!!!")
}

