const readline = require('readline-sync');

let a = readline.questionInt('Digite o numero de a: ');
let b = readline.questionInt('Digite o numero de b: ');
let c = readline.questionInt('Digite o numero de c: ');

let soma = a + b;

console.log(`A soma de a e b é: ${soma}`);

if (soma > c) {
    console.log(`A soma de a e b é maior que c`);
} else if (soma < c) {
    console.log(`A soma de a e b é menor que c`);
}  else {
    console.log(`A soma de a e b é igual a c`);
}