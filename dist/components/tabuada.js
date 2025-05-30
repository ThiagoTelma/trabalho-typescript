"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("../services/readline");
async function Tabuada() {
    console.log("=== EXERCÍCIO 14 ===\n");
    const numero = Number(await (0, readline_1.perguntar)("Digite um número inteiro: "));
    if (isNaN(numero)) {
        console.log("Valor inválido! Por favor, insira um número inteiro.");
    }
    else {
        console.log(`\nTabuada do ${numero}: \n`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }
    await (0, readline_1.esperarEnter)();
}
exports.default = Tabuada;
