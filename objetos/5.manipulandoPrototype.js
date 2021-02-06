'use strict'

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Diego', 'Henrique de Oliveira Madero');

// Para sabermos como esta o __proto__ de um objeto ja instanciado basta utilizar o seguinte metodo

console.log(Object.getPrototypeOf(pessoa1));

// simularemos um pequeno uso de "herança falsa"

const pessoa2 = {
    nome: 'Diego',
    sobrenome: 'H.'
}

Object.setPrototypeOf(pessoa2, Pessoa.prototype);

console.log(pessoa2.nomeCompleto());
console.log(Object.getPrototypeOf(pessoa2));

// após essa simulação de herança "encaixando" no objeto depois de ja estar feito
// criaremos o objeto com a herança pré definida 

// parametro1: passaremos o prototype de quem será herdado
// parametro2: será um objeto parecido com o parametro passado para o "Object.defineProperties()"

const pessoa3 = Object.create(Pessoa.prototype, {
    nome: {
        enumerable: true,
        writable: false,
        configurable: false,
        value: 'Maria'
    },

    sobrenome: {
        enumerable: true,
        writable: false,
        configurable: false,
        value: 'Da Silva'
    }
});

console.log(Object.getPrototypeOf(pessoa3));
console.log(pessoa3.nomeCompleto());