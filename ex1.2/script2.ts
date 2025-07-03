import readlinesync = require("readline-sync");

const numeros: Set <number> = new Set<number>();
// SET ignora numeros repetidos. = Cria uma caixinha que guarda os numeros nao repetidos.

// tamanho da caixinha, quantidade de numero que o usuario vai digitar. 11 numeros nao pode ser repetidos
while (numeros.size < 11) {
    let numeroDigitado: number = readlinesync.questionInt(`Digite o número ${numeros.size + 1} (entre 1 e 10): `);
    numeros.add(numeroDigitado);
// mesmo funcao do .push, mas usado no Set. 
}


//Como decobri depois que precisava transformar o set em array, melhor e mais pratico fazer direto
// console.log("\nNúmeros digitados (sem repetição):\n");
// for (let temp of numeros) {
//     console.log(temp);
// }

// Set nao organiza os numeros, tem que converter em Array.from e assim poder usar o .sort. 
let numerosOrdenados = Array.from(numeros);
numerosOrdenados.sort((a, b) => a - b);
// a e b sao variaveis temporarias, funcao de comparacao 

console.log("\nNumeros Digitados (Sem repeticao):\n");
for (let temp of numerosOrdenados) {
    console.log(temp);
}