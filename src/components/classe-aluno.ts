// Exercício 12 - Classe Aluno
import { esperarEnter, perguntar } from "../services/readline";
import { Pessoa } from "./classe-pessoa";

class Aluno extends Pessoa {
    matricula: string;

    constructor(nome: string, idade: number, matricula: string) {
        super(nome, idade);
        this.matricula = matricula;
    }

    apresentarAluno(): void {
        console.log(
            `Meu nome é ${this.nome}, tenho ${this.idade} anos e minha matrícula é ${this.matricula}.\n`
        );
    }
}

async function classeAluno() {
    console.log("=== EXERCÍCIO 12 ===\n");
    const nome = await perguntar("Digite o nome do aluno: ");
    const idadeStr = await perguntar("Digite a idade do aluno: ");
    const matricula = await perguntar("Digite a matrícula do aluno: ");

    const idade = parseInt(idadeStr);

    if (isNaN(idade)) {
        console.log("Idade inválida! Digite um número inteiro.");
        return;
    }

    const aluno = new Aluno(nome, idade, matricula);
    aluno.apresentarAluno();
    await esperarEnter();
}

export default classeAluno;
