"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercício 3 - Calcular média de três notas
const readline_1 = require("../services/readline");
async function calcularMedia() {
    console.log("=== EXERCÍCIO 3 ===\n");
    const notas = [];
    for (let i = 0; i < 3; i++) {
        const nota = await (0, readline_1.perguntar)(`Digite a nota ${i + 1}: `);
        notas.push(parseFloat(nota));
    }
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    console.log(`A média das notas é: ${media.toFixed(2)}\n`);
}
exports.default = calcularMedia;
