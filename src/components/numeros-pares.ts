// Exercício 5 - Números pares de 1 a 20
import { esperarEnter } from "../services/readline";

async function numerosPares() {
    console.log("=== EXERCÍCIO 5 ===\n");

    console.log('Números pares de 1 a 20: \n');

    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

    await esperarEnter();
}

export default numerosPares