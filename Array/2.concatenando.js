'use strict'
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
//maneira errada
var array3 = array1 + array2;

console.log(array3);
console.log(typeof array3);

//maneira certa
array3 = array1.concat(array2);

console.log(array3);
console.log(typeof array3);

//maneira certa no padrão ecma
array3 = [...array1, ...array2, 7, ...[8, 9, 10]];

console.log(array3);
console.log(typeof array3);