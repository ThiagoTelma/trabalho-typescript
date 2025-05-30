"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercício 1 - Soma de dois números
const readline_1 = require("../services/readline");
async function calcularSoma() {
    console.log("=== EXERCÍCIO 1 ===\n");
    const n1Str = await (0, readline_1.perguntar)("Digite o primeiro número inteiro: ");
    const n2Str = await (0, readline_1.perguntar)("Digite o segundo número inteiro: ");
    const n1 = parseInt(n1Str);
    const n2 = parseInt(n2Str);
    if (isNaN(n1) || isNaN(n2)) {
        console.log("Entrada inválida! Digite números inteiros.");
    }
    else {
        const soma = n1 + n2;
        console.log(`Resultado: ${soma}\n`);
        await (0, readline_1.esperarEnter)();
    }
}
exports.default = calcularSoma;
