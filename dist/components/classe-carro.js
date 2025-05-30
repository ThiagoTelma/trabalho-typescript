"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("../services/readline");
// Implementando a interface Veiculo na classe Carro
class Carro {
    constructor() {
        this.velocidade = 0;
    }
    acelerar() {
        this.velocidade += 10;
        console.log(`O carro acelerou. Velocidade atual: ${this.velocidade} km/h`);
    }
    frear() {
        this.velocidade = Math.max(0, this.velocidade - 10);
        console.log(`O carro freou. Velocidade atual: ${this.velocidade} km/h`);
    }
}
async function classeCarro() {
    console.log("=== EXERCÍCIO 13 ===\n");
    const carro = new Carro();
    carro.acelerar();
    carro.acelerar();
    carro.frear();
    carro.frear();
    carro.frear();
    await (0, readline_1.esperarEnter)();
}
exports.default = classeCarro;
