// Exercício 7 - Encontrar maior número em um array
import { esperarEnter, perguntar } from "../services/readline";

async function encontrarMaiorNumero() {
    console.log("=== EXERCÍCIO 7 ===\n");
    const n = await perguntar("Digite os números separados por espaço: ");
    const numeros = n.split(" ").map(Number);

    if (numeros.some(isNaN)) {
        console.log(
            "Entrada inválida! Certifique-se de digitar apenas números."
        );
    } else {
        const maior = Math.max(...numeros);
        console.log(`O maior número é: ${maior}\n`);
        await esperarEnter();
    }
}

export default encontrarMaiorNumero;
