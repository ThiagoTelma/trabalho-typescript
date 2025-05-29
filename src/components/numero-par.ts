import { esperarEnter, perguntar } from "../services/readline";

async function numeroPar() {
    console.log("=== EXERCÍCIO 2 ===\n");

    const numeroStr = await perguntar("Digite um número inteiro: ");
    const numero = parseInt(numeroStr);

    if (isNaN(numero)) {
        console.log("Valor inválido! Por favor, digite um número inteiro. \n");
    } else {
        if (numero % 2 === 0) {
            console.log(`O número ${numero} é PAR. \n`);
        } else {
            console.log(`O número ${numero} é ÍMPAR. \n`);
        }
    }
    await esperarEnter();
}

export default numeroPar;
