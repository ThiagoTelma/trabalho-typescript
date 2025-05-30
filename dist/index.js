"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adivinhar_numero_1 = __importDefault(require("./components/adivinhar-numero"));
const array_crescente_1 = __importDefault(require("./components/array-crescente"));
const calculadora_1 = __importDefault(require("./components/calculadora"));
const calculadora_imc_1 = __importDefault(require("./components/calculadora-imc"));
const calcular_media_1 = __importDefault(require("./components/calcular-media"));
const calcular_soma_1 = __importDefault(require("./components/calcular-soma"));
const classe_aluno_1 = __importDefault(require("./components/classe-aluno"));
const classe_carro_1 = __importDefault(require("./components/classe-carro"));
const classe_pessoa_1 = require("./components/classe-pessoa");
const contar_palavras_1 = __importDefault(require("./components/contar-palavras"));
const contar_vogais_1 = __importDefault(require("./components/contar-vogais"));
const encontrar_maior_numero_1 = __importDefault(require("./components/encontrar-maior-numero"));
const leitura_numeros_1 = __importDefault(require("./components/leitura-numeros"));
const numero_par_1 = __importDefault(require("./components/numero-par"));
const numeros_pares_1 = __importDefault(require("./components/numeros-pares"));
const tabuada_1 = __importDefault(require("./components/tabuada"));
const transformar_fahrenheit_1 = __importDefault(require("./components/transformar-fahrenheit"));
const validar_senha_1 = __importDefault(require("./components/validar-senha"));
const readline_1 = require("./services/readline");
// Menu
async function menu() {
    let opcao = "";
    do {
        console.log(`
        \n=== MENU DE EXERCÍCIOS ===
        \n1 - Soma de dois números
        \n2 - Verificar par ou ímpar
        \n3 - Calcular média de três notas
        \n4 - Converter Celsius para Fahrenheit
        \n5 - Exibir números pares de 1 a 20
        \n6 - Ler 5 números e armazenar em array
        \n7 - Encontrar maior número em um array
        \n8 - Contar vogais em uma string
        \n9 - Calculadora simples
        \n10 - Ordenar array em ordem crescente
        \n11 - Classe Pessoa
        \n12 - Classe Aluno
        \n13 - Classe Carro
        \n14 - Tabuada
        \n15 - Calculadora de IMC
        \n16 - Validar senha
        \n17 - Jogo de adivinhação
        \n18 - Contar palavras em uma string
        \n0 - Sair\n`);
        opcao = await (0, readline_1.perguntar)("Escolha uma opção (0-18): ");
        switch (opcao) {
            case "1":
                await (0, calcular_soma_1.default)();
                break;
            case "2":
                await (0, numero_par_1.default)();
                break;
            case "3":
                await (0, calcular_media_1.default)();
                break;
            case "4":
                await (0, transformar_fahrenheit_1.default)();
                break;
            case "5":
                await (0, numeros_pares_1.default)();
                break;
            case "6":
                await (0, leitura_numeros_1.default)();
                break;
            case "7":
                await (0, encontrar_maior_numero_1.default)();
                break;
            case "8":
                await (0, contar_vogais_1.default)();
                break;
            case "9":
                await (0, calculadora_1.default)();
                break;
            case "10":
                await (0, array_crescente_1.default)();
                break;
            case "11":
                await (0, classe_pessoa_1.classePessoa)();
                break;
            case "12":
                await (0, classe_aluno_1.default)();
                break;
            case "13":
                await (0, classe_carro_1.default)();
                break;
            case "14":
                await (0, tabuada_1.default)();
                break;
            case "15":
                await (0, calculadora_imc_1.default)();
                break;
            case "16":
                await (0, validar_senha_1.default)();
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
                console.log("Opção não existe...\n");
        }
    } while (opcao !== "0");
    readline_1.rl.close();
}
menu();
