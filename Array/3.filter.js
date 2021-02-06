'use strict'
const numeros = [1, 10, 3, 4, 50, 6, 7, 8, 9, 30, 80];

const callback = (valor, indice, array) => valor > 10 && indice > 5;

// filter filtra um array trazendo um array com os valores que você quer
var numerosFiltrados = numeros.filter(callback);

console.log(numerosFiltrados);

numerosFiltrados = numeros.filter((valor, indice, array)=>{
    console.log(valor, indice, array);
    return valor >= 10;
});

console.log(numerosFiltrados);

const pessoas = [
    {Nome: 'Diego', idade: '25'},
    {Nome: 'Pedro', idade: '13'},
    {Nome: 'Victor', idade: '30'},
    {Nome: 'maria', idade: '47'},
];

const pessoasComMenosDeTrintaAnos = pessoas.filter(value => value.idade < '30');
const pessoasComMaisDeTrintaAnos = pessoas.filter(value => value.idade > '30');


console.log(pessoasComMenosDeTrintaAnos);
console.log(pessoasComMaisDeTrintaAnos);