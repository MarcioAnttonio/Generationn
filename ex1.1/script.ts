import { read } from "fs";
import readlinesync = require("readline-sync");

console.log("\nDigite 5 cores diferentes: \n");

let cores: string[] = []; 

// Usuario digita 5 cores diferentes
// e as cores sao armazenadas em um array com o .push
for (let i = 0; i < 5; i++) {
    //let corDigitada: string = readlinesync.question(`Cor : ${i + 1}: `);
    cores.push(readlinesync.question(`Cor : ${i + 1}: `));
}

// console.log("\nCores digitadas:");
// for (let temp of cores) {
//     console.log(temp);
// }

// let coresOrdenadas: string[] = cores.sort();    
// console.log("\nCores em ordem alfabetica:");
// for (let temp of coresOrdenadas) {
//     console.log(temp);
// }   


// dua formas diferentes de fazer. 
console.log("\nCores digitadas:\n" + cores.join("\n"));
console.log("\nCores em ordem alfabetica:\n" + [...cores].sort().join("\n")); 