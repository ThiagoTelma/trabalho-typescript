// Exercício 11- Classe Pessoa
import { esperarEnter, perguntar } from "../services/readline";

export class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

export async function classePessoa() {
    console.log("=== EXERCÍCIO 11 ===\n");
    const nome = await perguntar("Digite o nome da pessoa: ");
    const idadeStr = await perguntar("Digite a idade da pessoa: ");

    const idade = parseInt(idadeStr);

    if (isNaN(idade)) {
        console.log("Idade inválida! Digite um número inteiro.");
        return;
    }

    const pessoa = new Pessoa(nome, idade);
    pessoa.apresentar();
    await esperarEnter();
}