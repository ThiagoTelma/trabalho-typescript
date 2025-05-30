"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercício 4 - Transformar Celsius para Fahrenheit
const readline_1 = require("../services/readline");
async function transformarFahrenheit() {
    console.log("=== EXERCÍCIO 4 ===\n");
    const celsiusStr = (await (0, readline_1.perguntar)("Digite a temperatura em graus Celsius:")) || "";
    const celsius = parseFloat(celsiusStr);
    if (isNaN(celsius)) {
        console.log("Entrada inválida! Digite um número válido.");
    }
    else {
        const fahrenheit = (celsius * 9) / 5 + 32;
        console.log(`Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F\n`);
        await (0, readline_1.esperarEnter)();
    }
}
exports.default = transformarFahrenheit;
