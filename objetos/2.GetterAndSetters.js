'use strict'

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,

        // aqui eu crio um getter(um getter será uma maneira de obter a informação sem mexer em um valor diretamente)
        get: function(){
            return estoquePrivado;
        },
        // aqui eu crio um setter(um setter modificará um atributo que normalmente será uma dependencia do getter)
        set: function(valor){
            if(typeof valor !== 'number') throw new TypeError('Value type is invalid in setter');
            estoquePrivado = valor;
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 1;
console.log(p1.estoque);