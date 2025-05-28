"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercício 12 - Classe Aluno
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
class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }
    apresentarAluno() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e minha matrícula é ${this.matricula}.`);
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
    aluno.apresentar();
    aluno.apresentarAluno();
}
exports.default = classeAluno;
