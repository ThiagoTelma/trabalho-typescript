import { esperarEnter } from "../services/readline";

// Definindo a interface Veiculo
interface Veiculo {
  acelerar(): void;
  frear(): void;
}

// Implementando a interface Veiculo na classe Carro
class Carro implements Veiculo {
  private velocidade: number;

  constructor() {
    this.velocidade = 0;
  }

  acelerar(): void {
    this.velocidade += 10;
    console.log(`O carro acelerou. Velocidade atual: ${this.velocidade} km/h`);
  }

  frear(): void {
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

    await esperarEnter();
}

export default classeCarro