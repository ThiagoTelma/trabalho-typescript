"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercício 18 - Contar Palavras em uma string
const readline_1 = require("../services/readline");
function contarPalavras(frase) {
    const palavras = frase.trim().split(/\s+/);
    return palavras.filter((p) => p.length > 0).length;
}
async function contadorDePalavras() {
    console.log("=== EXERCÍCIO 18 ===\n");
    const frase = await (0, readline_1.perguntar)("Digite uma frase: ");
    const quantidade = contarPalavras(frase);
    console.log(`A frase possui ${quantidade} palavra(s).\n`);
    await (0, readline_1.esperarEnter)();
}
exports.default = contadorDePalavras;
