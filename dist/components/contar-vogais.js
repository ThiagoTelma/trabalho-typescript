"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("../services/readline");
async function contarVogais() {
    console.log("=== EXERCÍCIO 8 ===\n");
    const texto = await (0, readline_1.perguntar)("Digite uma frase: ");
    const vogais = texto.match(/[aeiouáéíóúàèìòùãõâêîôû]/gi);
    texto.trim();
    if (!texto || texto.length === 0) {
        console.log("Frase inválida. Por favor, digite algo. \n");
        return;
    }
    const quantidade = vogais ? vogais.length : 0;
    console.log(`Quantidade de vogais: ${quantidade}`);
    await (0, readline_1.esperarEnter)();
}
exports.default = contarVogais;
