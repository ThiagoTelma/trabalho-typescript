"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("../services/readline");
async function numeroPar() {
    console.log("=== EXERCÍCIO 2 ===\n");
    const numeroStr = await (0, readline_1.perguntar)("Digite um número inteiro: ");
    const numero = parseInt(numeroStr);
    if (isNaN(numero)) {
        console.log("Valor inválido! Por favor, digite um número inteiro. \n");
    }
    else {
        if (numero % 2 === 0) {
            console.log(`O número ${numero} é PAR. \n`);
        }
        else {
            console.log(`O número ${numero} é ÍMPAR. \n`);
        }
    }
    await (0, readline_1.esperarEnter)();
}
exports.default = numeroPar;
