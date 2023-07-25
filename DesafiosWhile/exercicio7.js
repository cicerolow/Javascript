// 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.
// 1 + 2 + 3 + 4 + 5 +.... 100

// resultado = resultado + 3
// 6 + 4
// 10 + 5
// 15 + 6 



// let contador = 1;
// let soma = 0;

// while (contador < 100) {
//     soma = soma + contador;
//     contador++;
//     console.log(contador)
// }
// console.log(`soma e igual = ${contador}`);

let resultado = 0;
let contador = 1;

while (contador <= 100) {
    resultado = resultado + contador;
    //resultado += contador
    contador++;
    console.log(resultado)
}

