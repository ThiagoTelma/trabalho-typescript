import { esperarEnter, perguntar } from "../services/readline";

async function calcularIMC() {
    console.log("=== EXERCÍCIO 15 ===\n");
    console.log("-- Calculadora de IMC --\n");

    const pesoStr = await perguntar("Digite o peso em kg: ");
    const peso = parseFloat(pesoStr);

    const alturaStr = await perguntar("Digite a altura (ex: 1.75 ou 175): ");
    let altura = parseFloat(alturaStr);
    
    // Converte de cm para metros se necessário
    if (altura > 3) {
        altura = altura / 100;
    }

    if (isNaN(peso) || peso <= 0) {
        console.log("Peso inválido. Digite um número válido.");
        return;
    }

    if (isNaN(altura) || altura <= 0) {
        console.log("Altura inválida. Digite um número válido.");
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = "";
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc < 34.9) classificacao = "Obesidade grau 1";
    else if (imc < 39.9) classificacao = "Obesidade grau 2";
    else classificacao = "Obesidade grau 3";

    console.log(`\nSeu IMC é ${imc.toFixed(2)} (${classificacao})`);

    await esperarEnter();
}

export default calcularIMC;
