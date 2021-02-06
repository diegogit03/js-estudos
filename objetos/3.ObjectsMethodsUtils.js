'use strict'

const produto = { nome: 'Produto', preco: 1.8 };
const outraCoisa = produto;

// produto e outraCoisa tem um vinculo mesmo sendo variaveis completamente diferente
outraCoisa.nome = '';
// aqui está a prova:
console.log(produto);

// para evitar que este vinculo te atrapalhe você pode agir assim:

// o metodo assign dentro do Object serve para concatenar objetos
const caneca = Object.assign({ conteudos: 'previos' }, produto, { estampa: 'logo de js' });
// obs: o primeiro objeto poderia ser vazio

caneca.nome = 'Caneca';

console.log(caneca);

// existem outras alternativas como o spread operator

const camisa = { ...produto, estampa: 'Icone do TS' };

console.log(camisa);

// Object.freeze recebe o objeto que devera ser congelado e não receberá setters

Object.freeze(produto);
// me retornará um erro pois ele definirá writable como false em todas as propriedades
// produto.nome = '';

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
});

// para verificarmos se como esta a estrutura da propriedade produto, utilizaremos o metodo "getOwnPropertyDescriptor"

// ele recebe qual o objeto e qual a propriedade

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

Object.defineProperty(caneca, 'preco', {
    writable: false,
    configurable: true
});

// utilizaremos a palavra chave delete para deletar a chave preco do caneca

delete caneca.preco;

console.log(caneca);

// para visualizar somente os valores de um objeto utilizaremos "Object.values(objeto)"

console.log(Object.values(caneca));

const pessoa = { nome: 'diego', idade: '13' };

// para obtermos tanto chave quanto valor de cada propriedade utilizaremos "Object.entries()"

// me retornará um array multidimensional com a seguinte estrutura: [ [ 'chave', 'valor' ], [ 'chave', 'valor' ] ]
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(entry => {
    console.log(`\na chave é: ${entry[0]} \no valor é ${entry[1]} \n`);
});