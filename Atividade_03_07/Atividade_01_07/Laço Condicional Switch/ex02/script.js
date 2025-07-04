const readline = require("readline-sync");

let nome = readline.question("Nome do colaborador: ");
let codigo = readline.question("Cargo do colaborador? \n 1- Gerente \n 2- Vendedor \n 3- Supervisor \n 4- Motorista \n 5- Estoquista \n 6- Tecnico de TI \n");
let salario = parseFloat(readline.question("Salário: "));

let Cargo = "";
let reajuste = 0;

switch (codigo) {
    case "1":
        Cargo = "Gerente";
        reajuste = 0.10;
        break; 
    case "2":
        Cargo = "Vendedor";
        reajuste = 0.07;
        break;  
    case "3":
        Cargo = "Supervisor"; 
        reajuste = 0.09;
        break;
    case "4":
        Cargo = "Motorista";
        reajuste = 0.06;
        break;
    case "5":
        Cargo = "Estoquista";
        reajuste = 0.05;
        break;
    case "6":
        Cargo = "Tecnico de TI";
        reajuste = 0.08;
        break;
    default:
        console.log("Cargo inválido.");
}

let novoSalario = salario + (salario * reajuste);

console.log("\nNome do colaborador: " + nome);
console.log("Cargo:" + Cargo);
console.log("Salário: R$ " + novoSalario.toFixed(2));