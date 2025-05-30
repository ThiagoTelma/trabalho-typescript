"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("../services/readline");
function calcular(operacao, num1, num2) {
    switch (operacao) {
        case "1":
            return num1 + num2;
        case "2":
            return num1 - num2;
        case "3":
            return num1 * num2;
        case "4":
            if (num2 === 0)
                return "Erro: divisão por zero.";
            return num1 / num2;
        default:
            return "Operação invalida.";
    }
}
async function calculadora() {
    console.log("=== EXERCÍCIO 9 ===\n");
    let continuar = false;
    do {
        console.log("\n=== CALCULADORA SIMPLES ===");
        console.log("1 - Soma (+)");
        console.log("2 - Subtração (-)");
        console.log("3 - Multiplicação (*)");
        console.log("4 - Divisão (/)\n");
        const operacao = await (0, readline_1.perguntar)("Escolha a operacao (1-4): ");
        // Encerra imediatamente se a operação não for válida
        if (!["1", "2", "3", "4"].includes(operacao)) {
            console.log("Opção inválida. Retornando ao menu.");
            return;
        }
        const num1 = await (0, readline_1.perguntar)("\nDigite o primeiro numero:");
        let numeroUm = parseInt(num1);
        const num2 = await (0, readline_1.perguntar)("\nDigite o segundo numero: ");
        let numeroDois = parseInt(num2);
        if (isNaN(numeroUm) || isNaN(numeroDois)) {
            console.log("Valor invalido! Digite apenas números.");
        }
        const resultado = calcular(operacao, numeroUm, numeroDois);
        console.log(`Resultado: ${resultado} \n`);
        const resposta = await (0, readline_1.perguntar)("\nDeseja fazer outra operacao? (s/n): ");
        if (resposta === "n") {
            continuar = false;
        }
        continuar = resposta.toLowerCase() === "s";
    } while (continuar);
}
exports.default = calculadora;
