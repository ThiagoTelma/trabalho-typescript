"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
exports.classePessoa = classePessoa;
// Exercício 11- Classe Pessoa
const readline_1 = require("../services/readline");
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
exports.Pessoa = Pessoa;
async function classePessoa() {
    console.log("=== EXERCÍCIO 11 ===\n");
    const nome = await (0, readline_1.perguntar)("Digite o nome da pessoa: ");
    const idadeStr = await (0, readline_1.perguntar)("Digite a idade da pessoa: ");
    const idade = parseInt(idadeStr);
    if (isNaN(idade)) {
        console.log("Idade inválida! Digite um número inteiro.");
        return;
    }
    const pessoa = new Pessoa(nome, idade);
    pessoa.apresentar();
    await (0, readline_1.esperarEnter)();
}
