/*

    funções geradoras: 

    Geradores são funções cuja execução pode ser interrompida e 
    posteriormente reconduzida. Seus contextos (de associações de
     variáveis) ficarão salvos entre cada recondução.
 
*/

// funções geradoras utilizam a palavra-chave function*
function* geradora1(){
    // yield é um retorno feito para geradores
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
};

const g1 = geradora1();

console.log(g1);
// primeiro yield
console.log(g1.next());
// segundo yield
console.log(g1.next());
// terceiro yield
console.log(g1.next());
/*
    não tem mais yield, portanto 
    ele gera um objeto com value 
    undefined e true porque terminou
*/
console.log(g1.next());