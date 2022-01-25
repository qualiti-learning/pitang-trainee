class Conta {
  agencia = 1234;
  saldo = 0;
  endereco = "Recife...";

  constructor(nome, cidade, numero_conta) {
    this.nome = nome;
    this.cidade = cidade;
    this.numero_conta = numero_conta;
  }

  getSaldo() {
    return this.saldo;
  }

  setSaldo(saldo) {
    this.saldo = saldo;
  }
}

class ContaCorrente extends Conta {
  constructor(nome, cidade, numero_conta, idade) {
    super(nome, cidade, numero_conta);
    this.idade = idade;
  }

  setSaldo(saldo) {
    const novoSaldo = saldo + saldo * 0.05;

    super.setSaldo(novoSaldo);
  }
}

class ContaPoupanca extends Conta {
  setSaldo(saldo) {
    this.saldo = saldo + saldo * 0.95;
  }
}

const contaCorrente = new ContaCorrente("Keven", "Recife", 123456, 10);
const contaPoupanca = new ContaPoupanca("Leone", "Recife", 1234568);

console.log(contaCorrente);
console.log(contaPoupanca);
