import adivinhaçãoNumero from "./components/adivinhar-numero";
import arrayCrescente from "./components/array-crescente";
import calcularMedia from "./components/calcular-media";
import calcularSoma from "./components/calcular-soma";
import classeAluno from "./components/classe-aluno";
import classeCarro from "./components/classe-carro";
import { classePessoa } from "./components/classe-pessoa";
import contadorDePalavras from "./components/contar-palavras";
import encontrarMaiorNumero from "./components/encontrar-maior-numero";
import leituraNumeros from "./components/leitura-numeros";
import numerosPares from "./components/numeros-pares";
import Tabuada from "./components/tabuada";
import transformarFahrenheit from "./components/transformar-fahrenheit";
import validarSenha from "./components/validar-senha";
import { rl, perguntar } from "./services/readline";

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

        opcao = await perguntar("Escolha uma opção (0-18): ");

        switch (opcao) {
            case "1":
                await calcularSoma();
                break;
            case "3":
                await calcularMedia();
                break;
            case "4":
                await transformarFahrenheit();
                break;
            case "5":
                await numerosPares();
                break;
            case "6":
                await leituraNumeros();
                break;
            case "7":
                await encontrarMaiorNumero();
                break;
            case "10":
                await arrayCrescente();
                break;
            case "11":
                await classePessoa();
                break;
            case "12":
                await classeAluno();
                break;
            case "13":
                await classeCarro();
                break;
            case "14":
                await Tabuada();
                break;
            case "16":
                await validarSenha();0
                
                break;
            case "17":
                await adivinhaçãoNumero();
                break;
            case "18":
                await contadorDePalavras();
                break;
            case "0":
                console.log("Encerrando...");
                break;
            default:
                console.log("Opção ainda não implementada.\n");
        }
    } while (opcao !== "0");

    rl.close();
}
menu();
