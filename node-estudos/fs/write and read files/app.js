const path = require('path');

const writeModule = require('./modules/write');
const readModule = require('./modules/read');

const caminhoArquivoJson = path.resolve(__dirname, 'teste.json');

const pessoas = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Eduardo' },
    { nome: 'Luiza' },
];

const json = JSON.stringify(pessoas, '', 2);

writeModule(caminhoArquivoJson, json);


async function leArquivo(caminho){
    const dados = await readModule(caminho);
    return dados;
};

const dadosArquivo = leArquivo(caminhoArquivoJson).then(dados => console.log(dados));