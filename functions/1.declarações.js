'use strict'
// Declaração de função 
falaOi();

function falaOi(){
    console.log('Oie');
}

// First-class objects (objetos de primeira classe)
// Function expression
const souUmDado = /* função anonima */function(){
    console.log('Sou um dado.');
};

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:');
    funcao();
}

executaFuncao(souUmDado);

// Arrow function 

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

// Dentro de um objeto

const obj = {
    falar: function(){
        console.log('Estou falando...');
    },
    falarSemFuncaoAnonima(){
        console.log('Estou falando... sem uma função anonima esta é uma feature nova do ecma');
    }
};

obj.falar();
obj.falarSemFuncaoAnonima();