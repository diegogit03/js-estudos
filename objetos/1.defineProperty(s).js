'use strict'
 
// DefineProperty -> DefineProperties

function Produto(nome, preco, estoque){

    // definindo uma propriedade neste elemento(this) chamada estoque
    Object.defineProperty(this, 'estoque', {
        // ele mostrará a chave?
        enumerable: false,
        // qual o valor do estoque?
        value: estoque,
        // o valor do estoque pode ser alterado?
        writable: false,
        // é configuravel(apaga-lá, modificar sua chave, pode haver outro defineProperty modificando-a)?
        configurable: false,
    });

    // defineProperties recebe em que objeto ele deve definir isto e quais propriedades ele deve definir
    Object.defineProperties(this, {
        // cada chave do objeto de defineProperties será uma propriedade igual a de cima
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}

// a chave não sera visivel porém será uma especie de getter anonimo
console.log(p1.estoque);