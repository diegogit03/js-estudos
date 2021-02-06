const fs = require('fs').promises;

module.exports = (caminhoArquivo, dados) => {
    fs.writeFile(caminhoArquivo, dados, {
        flag: 'w',
        encoding: 'utf-8'
    });
}

// fs.writeFile(caminhoArquivo, 'log\n', {
//     // a flag "w" significa que mesmo que ja haja algo escrito nele, ele será recriado
//     // caso seja "a" o valor da flag será feito o processo inverso
//     flag: 'a',
//     encoding: 'utf-8'
// });