//desestruturando
const {nome} = require('./modulo1');
//sem desestruturar
const modulo = require('./modulo1');
const multiplica = require('./modulo2');

console.log(multiplica(2, 2));

console.log(nome, modulo.sobrenome);