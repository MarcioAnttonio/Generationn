const readline = require("readline-sync");

let numero;
let soma = 0;

do {
    numero = parseInt(readline.question("Digite um numero ou 0 para encerrar:"));
    if (!isNaN(numero) && numero > 0) {
        soma += numero; 
    }
} while (numero !== 0);

console.log(`A soma dos números positivos é: ${soma}`);