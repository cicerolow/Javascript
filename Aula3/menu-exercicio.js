import PromptSync from "prompt-sync";
// import = mostrar
import {} from "./exercicio.js"

const prompt = PromptSync();

//menu para escolher qual exercicio o usuario escolher

let exercicio;
let continuar;

do {

    exercicio = parseInt(prompt("Digite um numero que represente um exercicio de 1 a 4: "));


    switch (exercicio) {
        case 1:
            //Chamando funcao helloWorld()
            helloWorld("Hello World!!!");
        case 2:
            //objeto
            let aluno = {
                nome: "Rebeca", //separar propriedade usa a virgula
                idade: 19,
                hardSkills: ["Figma", "HTML", "CSS", "Web Responsive"],
            }
            console.log(aluno.nome, aluno.idade, aluno.hardSkills[2]);
            //exibindo objeto inteiro
            console.log("Objeto aluno", aluno);

            break; //finalizar

        default:
            console.log("Digite um numero de 1 a 4!!!");
            break; 
    }

    continuar = prompt("Deseja continuar ver outros exercicios? Digite s para SIM digite n para NAO: ");
    //continuar = prompt("Deseja continuar ver outros exercicios? Digite s para SIM digite n para NAO: ").toLocaleLowerCase(); //toLocaleLowerCase transforma o texto em minusculo

} while (continuar.toLocaleLowerCase() === "s");

function helloWorld(frase) {
    console.log(frase);
}