"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercício 12 - Classe Aluno
const readline_1 = require("../services/readline");
const classe_pessoa_1 = require("./classe-pessoa");
class Aluno extends classe_pessoa_1.Pessoa {
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }
    apresentarAluno() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e minha matrícula é ${this.matricula}.\n`);
    }
}
async function classeAluno() {
    console.log("=== EXERCÍCIO 12 ===\n");
    const nome = await (0, readline_1.perguntar)("Digite o nome do aluno: ");
    const idadeStr = await (0, readline_1.perguntar)("Digite a idade do aluno: ");
    const matricula = await (0, readline_1.perguntar)("Digite a matrícula do aluno: ");
    const idade = parseInt(idadeStr);
    if (isNaN(idade)) {
        console.log("Idade inválida! Digite um número inteiro.");
        return;
    }
    const aluno = new Aluno(nome, idade, matricula);
    aluno.apresentarAluno();
    await (0, readline_1.esperarEnter)();
}
exports.default = classeAluno;
