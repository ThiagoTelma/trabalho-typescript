// Exercício 18 - Contar Palavras em uma string
import { esperarEnter, perguntar } from "../services/readline";

function contarPalavras(frase: string): number {
    const palavras = frase.trim().split(/\s+/);
    return palavras.filter((p) => p.length > 0).length;
}

async function contadorDePalavras() {
    console.log("=== EXERCÍCIO 18 ===\n");
    const frase = await perguntar("Digite uma frase: ");
    const quantidade = contarPalavras(frase);
    console.log(`A frase possui ${quantidade} palavra(s).\n`);
    await esperarEnter();
}

export default contadorDePalavras;
