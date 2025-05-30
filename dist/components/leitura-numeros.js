"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercício 6 - Ler 5 numeros e mostrar o array
const readline_1 = require("../services/readline");
async function leituraNumeros() {
    console.log("=== EXERCÍCIO 6 ===\n");
    const numeros = [];
    for (let i = 0; i < 5; i++) {
        const entrada = (await (0, readline_1.perguntar)(`Digite o número ${i + 1}:`)) || "";
        const num = parseFloat(entrada);
        if (isNaN(num)) {
            console.log("Entrada inválida! Por favor, digite um número válido.");
            i--;
        }
        else {
            numeros.push(num);
        }
    }
    console.log("Números digitados: \n", numeros);
    await (0, readline_1.esperarEnter)();
}
exports.default = leituraNumeros;
