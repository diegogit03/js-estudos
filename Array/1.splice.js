'use strict'
const nomes = ["Diego", "Maria", "Igor"];

// nomes.splice(index, quantidadeDeElementosASeremApagados, nome1, nome2)

nomes.splice(0, 1);

console.log(nomes);

nomes.splice(0, 0, 'Henrique', 'João');

console.log(nomes);

nomes.splice(-2, 3)

console.log(nomes);