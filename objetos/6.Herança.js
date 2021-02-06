'use strict'

/*

    para treinarmos todo conhecimento obtido até agora faremos um ecommerce
    utilizando o conceito de "herança".

*/

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor){
    this.preco += valor;
}

Produto.prototype.desconto = function(valor){
    this.preco -= valor;
}

function Camiseta(nome, preco, cor){
    // aqui clonaremos o construtor do produto para cá
    Produto.call(this, nome, preco);

    this.cor = cor;
}

const camiseta = new Camiseta('Regata', 7.5, 'Preta');

// aqui acontecerá um erro, por não termos o prototype do produto
// camiseta.aumento(10);

console.log(camiseta);
console.log(Object.getPrototypeOf(camiseta));

/* jeito errado de resolvermos isto: */
// Camiseta.prototype = Produto.prototype;
/*

    explicação porque estará errado:

    o principal motivo que esta pratica acima não deve ser praticada
    é a "acoplação" que daremos a nosso codigo, ou seja tudo ficará 
    totalmente dependente(na maioria das vezes isto leva a codigo ilegivel)
    
    mas porque acoplado?

    poís o prototype de Produto criará um vinculo forte com o prototype
    de Camiseta assim não possibilitando modificar o prototype.

*/

// jeito certo

// criaremos um objeto independente que "herda" do jeito certo o Produto

Camiseta.prototype = Object.create(Produto.prototype);

// para evitarmos maiores dores de cabeça, com o construtor de Camisa herdar somente o construtor de Produtos
// faremos da seguinte forma:

Camiseta.prototype.constructor = Camiseta;

const camiseta2 = new Camiseta('Manga longa', 6.5, 'Amarela');

console.log(camiseta2);