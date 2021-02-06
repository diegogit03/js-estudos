'use strict'
/*

    funções utilizando parametros por meio
    da variavel argument:

    obs: a variavel argument só esta disponivel 
    com a palavra chave function

    recursos pós-es6, utilizados:
    * operador spread

*/
function funcao(){
    /*  colocas todas os 
        argumentos dentro
        deste array */
    [...arguments].forEach(argument => {
        console.log(argument);
    });
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/* 

    criando valores padrões com recursos
    do javascript antigo

*/

function defaultArgumentsNoEcma(argument){
    /*
        aplica um argumento padrão
        se não for recebido o 
        parametro b
    */
    argument = argument || 'a default';

    console.log(argument);
};

// com argumentos
defaultArgumentsNoEcma('no default');
// sem argumentos
defaultArgumentsNoEcma();

/*

    criando o mesmo exemplo nas versões
    mais novas do javascript

*/

function defaultArgumentsWithEcma(argument = 'a default'){
    console.log(argument);
};

// com  argumentos
defaultArgumentsWithEcma('no default');
// sem argumentos
defaultArgumentsWithEcma();

/*

    destruturação de parametros

*/

function destructToArguments({ nome, sobrenome }){
    console.log(`your is: ${nome} ${sobrenome}`);
};

let profile = { nome: 'Diego', sobrenome: 'Henrique de Oliveira Madero' };

destructToArguments(profile);