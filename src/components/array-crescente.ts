// Exercicio 10 - Ordenar Array em ordem crescente
import { esperarEnter, perguntar } from "../services/readline";

async function arrayCrescente() {
    console.log("=== EXERCÍCIO 10 ===\n");
    const numerosStr =
        (await perguntar("Digite números separados por espaço:")) || "";

    const numeros = numerosStr
        .split(" ")
        .map((n) => parseFloat(n))
        .filter((n) => !isNaN(n));

    if (numeros.length === 0) {
        console.log("Nenhum número válido foi digitado.");
    } else {
        numeros.sort((a, b) => a - b);
        console.log("Números ordenados:\n", numeros);
        await esperarEnter();
    }
}

export default arrayCrescente;
