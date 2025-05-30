"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercício 5 - Números pares de 1 a 20
const readline_1 = require("../services/readline");
async function numerosPares() {
    console.log("=== EXERCÍCIO 5 ===\n");
    console.log('Números pares de 1 a 20: \n');
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
    await (0, readline_1.esperarEnter)();
}
exports.default = numerosPares;
