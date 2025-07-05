import readline = require("readline-sync");
import { Queue } from "./queueMetodos";


const fila = new Queue<string>();
let continua: string = '';
do{

    console.log("1- Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.");
    console.log("2- Listar todos os clientes na fila");
    console.log("3- Chamar (retirar) uma pessoa da fila"); // fazer uma segunda opcao retirar 
    console.log("0- Sair.");  
    let opcao = readline.questionInt(" ->")

    switch (opcao) {
        case 1:
            fila.enqueue(readline.question("Nome:"));
            break;
        case 2:
            console.log("Clientes na fila:");
            fila.printQueue();
            break;
        case 3:
            const chamado = fila.peek();
            if (chamado) {
            console.log(`Chamando: ${chamado}  Sala 5`);
            fila.dequeue();
            } else {
            console.log("Fila vazia.");
            break;
            }
        case 0:
            console.log("Obrigado, volte sempre!");
            break;

            default:
                console.log("Opção inválida, tente novamente.");
        } 
        
        continua = readline.question("Deseja continuar? (s/n): ");
}
        while  (continua === "s");
        if (continua !== "s") {
            console.log("Obrigado por usar o sistema!");
        }
            
            