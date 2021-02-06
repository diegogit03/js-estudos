const nome = 'Diego';
const sobrenome = 'Henrique';

const falaNome = function(){
    console.log(nome, sobrenome);
};

//exportando o nome de um jeito mais curto
exports.nome = nome;
//exportando o sobrenome da maneira mais longa
module.exports.sobrenome = sobrenome;

/*

    o nosso module.exports atualmente esta assim:

    { nome: 'Diego', sobrenome: 'Henrique' }

    para conseguir acessar este objeto em outro arquivo basta
    utilizar require('./caminhoDaPastaOuArquivo') dentro de uma
    variavel, e a variavel virá o objeto acima

*/