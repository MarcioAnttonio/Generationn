const readline = require("readline-sync");

let numero = readline.questionInt("Digite o numero: ");

if(numero % 2 == 0 && numero >=0) {
    console.log(`O numero ${numero} é par e positivo`);
} else if(numero % 2 != 0 && numero < 0) {
    console.log(`O numero ${numero} é impar e negativo`);
} else if (numero % 2 == 0 && numero < 0) {
    console.log(`O numero ${numero} é par e negativo`);
}else if (numero % 2 != 0 && numero >= 0) {
    console.log(`O numero ${numero} é impar e positivo`);
}