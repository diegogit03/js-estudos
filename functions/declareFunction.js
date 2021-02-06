const lib = require('./lib');

/* 

    AVISO!!

    este repositorio não tem como objetivo de ensinar o basico sobre JS como:

    * laços de repetição
    * declaração de variaveis
    * como as funções funcional em seu modelo mais basico
    * oque é node
    * como funciona um array em seu modelo mais basico

    aqui teremos conceitos intermediarios como:

    * hoisting
    * this e suas armadilhas
    * closures
    * escopo lexico
    * callbacks

*/

/*

    Function hoisting:

    O function hoisting é um processo realizado, na interpretação do javascript
    tendo como principal objetivo deixar seu codigo assincrono, ou seja você pode
    invocar a função antes mesmo, de sua declaração ser feita, pois o hoisting sobe 
    a declaração desta função ao topo do codigo.

    obs: o mesmo acontece com variaveis.

*/

lib.dividerToTitle('Function hoisting:');

thisIsATest();

function thisIsATest(){
    console.log('hello world');
}

/* 

    Functions the citizens of first class(funções os cidadões de primeira classe)

    no javascript costumamos chamar funções como cidadões de primeiro mundo, poís estão 
    presente em muitos lugares, e tem uma extrema importancia na composição de qualquer 
    programa "NOHELLOWORD".

*/

/* 

    arrow functions o coringa do JS:

    agora começaremos a falar sobre um dos maiores medos dos programadores antes ES6 e pós,
    pois o this ficou mais poderoso em certas situações que ele podia atrapalhar, porém:

    " Com grandes poderes, vem grandes responsabilidades "

    contextualizando:

    fugi um pouco do assunto principal, mais vou explicar melhor agora. arrow functions ou
    funções de flecha(com uma tradução literal), tem como objetivo principal vazar escopos,
    assim fazendo o this, herdar o codigo o escopo acima, as arrow functions são bem utilizadas
    em callbacks por sua flexibilidade e skill de vazar algum escopo sem muitos transtornos.

    exemplo de arrow-function:

*/

lib.dividerToTitle('arrow-function');

lib.IsArrowFunction = (argument) => {
    console.log(this);
};

lib.IsNotArrowFunction = function(){
    console.log(this);
};

lib.IsArrowFunction();
lib.IsNotArrowFunction();

/* 

    ambos estão com uma função anonima, porém a IsNotArrowFunction retorna 
    o JSON lib ao contrario da IsArrowFunction, que pula seu escopo para o global
    assim retornando "{}"

*/
