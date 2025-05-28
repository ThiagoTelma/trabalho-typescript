"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercício 17 - Jogo de adivinhar numero
const readline_1 = require("../services/readline");
async function adivinhaçãoNumero() {
    console.log("=== EXERCÍCIO 17 ===\n");
    const numeroSorteado = Math.floor(Math.random() * 100) + 1;
    let tentativa = null;
    console.log("Tente adivinhar o número entre 1 e 100!");
    while (tentativa !== numeroSorteado) {
        const entrada = (await (0, readline_1.perguntar)("Digite seu palpite:")) || "";
        tentativa = parseInt(entrada);
        if (isNaN(tentativa)) {
            console.log("Entrada inválida! Digite um número inteiro.");
            continue;
        }
        if (tentativa < numeroSorteado) {
            console.log("Maior!");
        }
        else if (tentativa > numeroSorteado) {
            console.log("Menor!");
        }
        else {
            console.log(`Parabéns! Você acertou o número ${numeroSorteado}!`);
        }
    }
}
exports.default = adivinhaçãoNumero;
