const readline = require("readline-sync");

let primeiroNumero = parseInt(readline.question("Digite o primeiro número do intervalo: "));
let segundoNumero = parseInt(readline.question("Digite o segundo número do intervalo: "));

if (primeiroNumero >= segundoNumero) {
    console.log("Intervalo invalido!");
}else {
    console.log(`No intervalo entre ${primeiroNumero} e ${segundoNumero}:`);

    for (let i = primeiroNumero; i <= segundoNumero; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} é multiplo por 3 e 5`);
        } 
    }
}