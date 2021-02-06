'use strict'
/* 

    return retorna um valor, assim 
    fazendo a função assumir este 
    valor.

    obs: se uma função não retorna 
    nenhum valor, ela será undefined

*/

function somaQueRetorna(a, b){
    return a + b;
};

function somaQueNaoRetorna(a, b){
    console.log(a + b);
};

/* 

    além de executa-lá mostrara que seu
    valor é undefined

*/
console.log(somaQueNaoRetorna(1,2));

/* 

    neste console a saída sera somente 3
    poís seu valor é 3

*/
console.log(somaQueRetorna(1,2));

/*

    retorno de funções

*/

function falaFrase(comeco){
    /* Escopo mais alto */
    function falaResto(resto){
        return comeco + ' ' + resto;
    };

    /* Escopo intermediario */
    return falaResto;
};

/* 

    Neste caso seria assim o valor desta
    variavel:

    olaMundo = falaResto()

    obs: quando você passar o parametro a 
    falaResto() ele guarda, o parametro comeco
    passado em no falaFrase.

*/

/* Escopo global */

const olaMundo = falaFrase('Olá');

console.log(olaMundo('Mundo'));