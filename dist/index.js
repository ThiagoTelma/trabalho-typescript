"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adivinhar_numero_1 = __importDefault(require("./components/adivinhar-numero"));
const array_crescente_1 = __importDefault(require("./components/array-crescente"));
const calcular_media_1 = __importDefault(require("./components/calcular-media"));
const calcular_soma_1 = __importDefault(require("./components/calcular-soma"));
const classe_pessoa_1 = __importDefault(require("./components/classe-pessoa"));
const contar_palavras_1 = __importDefault(require("./components/contar-palavras"));
const encontrar_maior_numero_1 = __importDefault(require("./components/encontrar-maior-numero"));
const leitura_numeros_1 = __importDefault(require("./components/leitura-numeros"));
const transformar_fahrenheit_1 = __importDefault(require("./components/transformar-fahrenheit"));
const readline_1 = require("./services/readline");
// Menu
async function menu() {
    let opcao = "";
    do {
        console.log(`
    \n=== MENU DE EXERCÍCIOS ===\n
        1 - Soma de dois números
        2 - Verificar par ou ímpar
        3 - Calcular média de três notas
        4 - Converter Celsius para Fahrenheit
        5 - Exibir números pares de 1 a 20
        6 - Ler 5 números e armazenar em array
        7 - Encontrar maior número em um array
        8 - Contar vogais em uma string
        9 - Calculadora simples
        10 - Ordenar array em ordem crescente
        11 - Classe Pessoa
        12 - Classe Aluno
        13 - Classe Carro
        14 - Tabuada
        15 - Calculadora de IMC
        16 - Validar senha
        17 - Jogo de adivinhação
        18 - Contar palavras em uma string
        0 - Sair`);
        opcao = await (0, readline_1.perguntar)("Escolha uma opção (0-18): ");
        switch (opcao) {
            case "1":
                await (0, calcular_soma_1.default)();
                break;
            case "3":
                await (0, calcular_media_1.default)();
                break;
            case "4":
                await (0, transformar_fahrenheit_1.default)();
                break;
            case "6":
                await (0, leitura_numeros_1.default)();
                break;
            case "7":
                await (0, encontrar_maior_numero_1.default)();
                break;
            case "10":
                await (0, array_crescente_1.default)();
                break;
            case "12":
                await (0, classe_pessoa_1.default)();
                break;
            case "17":
                await (0, adivinhar_numero_1.default)();
                break;
            case "18":
                await (0, contar_palavras_1.default)();
                break;
            case "0":
                console.log("Encerrando...");
                break;
            default:
                console.log("Opção ainda não implementada.\n");
        }
    } while (opcao !== "0");
    readline_1.rl.close();
}
menu();
