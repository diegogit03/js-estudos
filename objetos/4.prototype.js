'use strict'

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodoCompetido = function(){
        console.log('sou o primeiro');
    }
}

// Aqui fizemos uma especie de "encaixe", ou uma simulação de herança
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.metodoCompetido = function(){
    console.log('sou o segundo');
}

const pessoa1 = new Pessoa('Diego', 'Henrique de Oliveira Madero');
const pessoa2 = new Pessoa('João', 'Da Silva');

console.log(pessoa1.nomeCompleto());
console.log(pessoa2.nomeCompleto());

// aqui verificamos se nossa "herança" falsa é igual a herança do nosso objeto final, ja instanciado
console.log(Pessoa.prototype === pessoa2.__proto__);

// aqui teremos como resultado o primeiro metodo criado no construtor poís o motor do JS verificará primeiro no construtor sempre
pessoa1.metodoCompetido();