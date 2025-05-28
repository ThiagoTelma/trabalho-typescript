// Exercício 3 - Calcular média de três notas
import { esperarEnter, perguntar } from "../services/readline";

async function calcularMedia() {
    console.log("=== EXERCÍCIO 3 ===\n");
    const notas: number[] = [];
    for (let i = 0; i < 3; i++) {
        const nota = await perguntar(`Digite a nota ${i + 1}: `);
        notas.push(parseFloat(nota));
    }
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    console.log(`A média das notas é: ${media.toFixed(2)}\n`);
    await esperarEnter();
}

export default calcularMedia;
