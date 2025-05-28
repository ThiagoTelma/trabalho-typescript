import * as readline from "readline";

// Setup de entrada do usuário
export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function esperarEnter(): Promise<void> {
    return new Promise((resolve) => {
        rl.question("Pressione Enter para continuar...", () => {
            resolve();
        });
    });
}

// Função para ler entrada do usuário
export function perguntar(pergunta: string): Promise<string> {
    return new Promise((resolve) => rl.question(pergunta, resolve));
}
