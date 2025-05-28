// Exercício 6 - Ler 5 numeros e mostrar o array
import { esperarEnter, perguntar } from "../services/readline";

async function leituraNumeros() {
    console.log("=== EXERCÍCIO 6 ===\n");
    const numeros: number[] = [];

    for (let i = 0; i < 5; i++) {
        const entrada = (await perguntar(`Digite o número ${i + 1}:`)) || "";
        const num = parseFloat(entrada);

        if (isNaN(num)) {
            console.log(
                "Entrada inválida! Por favor, digite um número válido."
            );
            i--;
        } else {
            numeros.push(num);
        }
    }

    console.log("Números digitados: \n", numeros);
    await esperarEnter();
}

export default leituraNumeros;
