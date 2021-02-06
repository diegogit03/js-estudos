/*

    closures: 

    são valores do escopo lexico de uma função
    que não mudam.

*/

function retornaFuncao(nome){
    return function(){
        return nome;
    };
};

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);