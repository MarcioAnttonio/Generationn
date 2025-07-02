const readline = require("readline-sync");

console.log(`Bem vindo ao Generation restaurante!`);
let codigo = readline.questionInt("Digite o numero do produto escolhido \n 1 - Cachorro quente \n 2 - X Salada\n 3 - X-Bacon\n 4 - Bauru\n 5 - Refrigerante\n 6 - Suco de Laranja\n");
let quantidade = parseInt(readline.question("Digite a quantidade comprada: "));

let produto = ""
let preço = 0;

switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        preço = 10.00;
        break;
    case 2:
        produto = "X-Salada";
        preço = 15.00;
        break;
    case 3:
        produto = "X-Bacon";
        preço = 18.00;
        break;
    case 4:
        produto = "Bauru";
        preço = 12.00;
        break;
    case 5:
        produto = "Refrigerante";
        preço = 8.00;
        break;
    case 6:
        produto = "Suco de laranja";
        preço = 13.00;
        break;
    default:
        console.log("Produto");
}

let total = quantidade * preço; 

console.log(`Você escolheu o produto: ${codigo}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);

console.log(`Obrigado pela compra, volte sempre!`);