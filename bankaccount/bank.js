class contaBancaria {

    constructor(agencia, num, tipo, saldo) {

        this.saldo = 0;
        this.agencia = agencia;
        this.num = num;
        this.tipo = tipo;
    };

    set saldo(valor) {
        this.saldo = valor;
    }

    get saldo() {
        return saldo;
    }

    sacar(valor) {
        if (valor > this.saldo) {
            return console.log("Saque nao autorizado; saldo insuficiente");
        }

        this.saldo = this.saldo - valor;
        return this.saldo;
    }

    depositar(valor) {
        this.saldo = this.saldo + valor;
        return this.saldo; 
    }

};


class contaCorrente extends contaBancaria {

    constructor (agencia, num, cartaoCredito) {
        super(agencia, num);
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

};

class contaPoupanca extends contaBancaria {
    constructor(agencia, num) {
        super(agencia, num);
        this.tipo = 'poupanca';
    }
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, num) {
        super(agencia, num);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if (valor > 500) {
            return "Operacao negada";
        }

        this.saldo = this.saldo - valor;
        return this.saldo;
    }
};


const conta = new contaCorrente(1, 211, true);
const contaUni = new contaUniversitaria(2, 333);