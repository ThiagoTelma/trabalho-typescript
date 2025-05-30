"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercício 7 - Encontrar maior número em um array
const readline_1 = require("../services/readline");
async function encontrarMaiorNumero() {
    console.log("=== EXERCÍCIO 7 ===\n");
    const n = await (0, readline_1.perguntar)("Digite os números separados por espaço: ");
    const numeros = n.split(" ").map(Number);
    if (numeros.some(isNaN)) {
        console.log("Entrada inválida! Certifique-se de digitar apenas números.");
    }
    else {
        const maior = Math.max(...numeros);
        console.log(`O maior número é: ${maior}\n`);
        await (0, readline_1.esperarEnter)();
    }
}
exports.default = encontrarMaiorNumero;
