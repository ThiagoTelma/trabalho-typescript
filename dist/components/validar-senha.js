"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("../services/readline");
async function validarSenha() {
    console.log("=== EXERCÍCIO 16 ===");
    console.log("A senha deve conter: no mínimo 8 caracteres, UMA letra maiúscula, UMA letra minúscula e pelo menos 1 número. \n");
    let senhaValida = false;
    do {
        const senha = await (0, readline_1.perguntar)("Digite uma senha: \n");
        // Verifica se a senha tem pelo menos 8 caracteres
        const tamanhoValido = senha.length >= 8;
        // Verifica se a senha tem pelo menos uma letra maiúscula
        const contemMaiuscula = /[A-Z]/.test(senha);
        // Verifica se a senha tem pelo menos uma letra minúscula
        const contemMinuscula = /[a-z]/.test(senha);
        // Verifica se a senha tem pelo menos um número
        const contemNumero = /\d/.test(senha);
        // A senha é válida se todos os critérios forem atendidos
        if (tamanhoValido &&
            contemMaiuscula &&
            contemMinuscula &&
            contemNumero) {
            console.log("Senha válida! \n");
            senhaValida = true;
        }
        else {
            console.log("Senha inválida. Certifique-se de atender a todos os critérios. \n");
        }
    } while (!senhaValida);
    await (0, readline_1.esperarEnter)();
}
exports.default = validarSenha;
