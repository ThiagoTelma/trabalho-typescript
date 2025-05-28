// Exercício 17 - Jogo de adivinhar numero
import { esperarEnter, perguntar } from "../services/readline";

async function adivinhaçãoNumero() {
    console.log("=== EXERCÍCIO 17 ===\n");
    const numeroSorteado = Math.floor(Math.random() * 100) + 1;
    let tentativa: number | null = null;

    console.log("Tente adivinhar o número entre 1 e 100!");

    while (tentativa !== numeroSorteado) {
        const entrada = (await perguntar("Digite seu palpite:")) || "";
        tentativa = parseInt(entrada);

        if (isNaN(tentativa)) {
            console.log("Entrada inválida! Digite um número inteiro.");
            continue;
        }

        if (tentativa < numeroSorteado) {
            console.log("Maior!");
        } else if (tentativa > numeroSorteado) {
            console.log("Menor!");
        } else {
            console.log(`Parabéns! Você acertou o número ${numeroSorteado}!\n`);
            await esperarEnter();
        }
    }
}

export default adivinhaçãoNumero