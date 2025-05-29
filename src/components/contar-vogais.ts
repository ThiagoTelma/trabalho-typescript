import { esperarEnter, perguntar } from "../services/readline";

async function contarVogais() {
    console.log("=== EXERCÍCIO 8 ===\n");

    const texto = await perguntar("Digite uma frase: ");

    const vogais = texto.match(/[aeiouáéíóúàèìòùãõâêîôû]/gi);
    texto.trim();

    if (!texto || texto.length === 0) {
        console.log("Frase inválida. Por favor, digite algo. \n");
        return;
    }

    const quantidade = vogais ? vogais.length : 0;
    console.log(`Quantidade de vogais: ${quantidade}`);

    await esperarEnter();
}

export default contarVogais;
