/*

    function constructors(funções contrutoras):

    Uma função construtora seria algo mais 
    perto de uma classe que de uma função 
    se ja programou em OO(orientação a objetos)
    esta acostumado, mais se não pesquise sobre
    e veja os exemplos a seguir:

*/

/*
    classes ou funções construtoras sempre 
    devem começar com letra maiscula em seu 
    nome(pois é uma convenção).
*/


function Pessoa(nome, sobrenome){
    /* valores dentro de uma função construtora, são chamados de atributo */
    this.nome = nome;

    /* note que em funções contrutoras, utilizamos this para torna-la 
    uma especie de variavel modelo que pode ser clonada(instanciada) 
    com todos seus atributos */
    this.sobrenome = sobrenome;

    /* funções dentro de uma função construtora, são chamados de metodos */
    this.metodoApresentarSobrenome = function(){
        console.log(`${this.nome} tem o sobrenome de ${this.sobrenome}`);
    };
};

// instancia da classe(ou clone da função construtora)
const Pessoa1 = new Pessoa('Diego', 'Henrique de Oliveira Madero');

Pessoa1.metodoApresentarSobrenome();