'use strict'

const numeros = [1, 10, 3, 4, 50, 6, 7, 8, 9, 30, 80];
const total = numeros.reduce((acumulador, valor, indice, array) => acumulador += valor || acumulador + valor, 0);

console.log(total);

const pessoas = [
    {Nome: 'Diego', idade: '25'},
    {Nome: 'Pedro', idade: '13'},
    {Nome: 'Victor', idade: '30'},
    {Nome: 'maria', idade: '47'},
];

// Retornando pessoa mais velha

const maisVelha = pessoas.reduce((acumulador, valor, indice, array) => {
    if(acumulador.idade > valor.idade) return acumulador;

    return valor;
}, 0);

console.log(maisVelha);