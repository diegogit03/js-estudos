const fs = require('fs').promises;

module.exports = (caminhoArquivo) => fs.readFile(caminhoArquivo, 'utf-8');