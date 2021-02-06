'use strict'

const numeros = [1, 10, 3, 4, 50, 6, 7, 8, 9, 30, 80];
// map gera um novo array com as modificações
const numerosTriplo = numeros.map(valor => valor * 3);

console.log(numerosTriplo);

const pessoas = [
    {Nome: 'Diego', idade: '25'},
    {Nome: 'Diego', idade: '25'},
    {Nome: 'Diego', idade: '25'},
    {Nome: 'Pedro', idade: '13'},
    {Nome: 'Victor', idade: '30'},
    {Nome: 'maria', idade: '47'},
];

const diegosModificados = pessoas.map(pessoa => {
    if(pessoa.Nome === 'Diego') return {
        Nome: 'Diego Henrique',
        idade: '13'
    };

    return pessoa;
});

console.log(diegosModificados);