"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercicio 10 - Ordenar Array em ordem crescente
const readline_1 = require("../services/readline");
async function arrayCrescente() {
    console.log("=== EXERCÍCIO 10 ===\n");
    const numerosStr = (await (0, readline_1.perguntar)("Digite números separados por espaço:")) || "";
    const numeros = numerosStr
        .split(" ")
        .map((n) => parseFloat(n))
        .filter((n) => !isNaN(n));
    if (numeros.length === 0) {
        console.log("Nenhum número válido foi digitado.");
    }
    else {
        numeros.sort((a, b) => a - b);
        console.log("Números ordenados:\n", numeros);
        await (0, readline_1.esperarEnter)();
    }
}
exports.default = arrayCrescente;
