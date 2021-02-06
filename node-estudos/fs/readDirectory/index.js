/* 

    importando o modulo nativo do node fs 

    obs: estou utilizando o fs em sua versão promise nativa

    docs:
    https://nodejs.org/dist/latest-v12.x/docs/api/fs.html'
    integrado com promises do ecma
    https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_promises_api

*/
const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
};

async function walk(files, rootDir){
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        
        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;

        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        };

        console.log(fileFullPath);
    }
};

readdir('C:/Users/Usuario/Documents/www/JS estudos/node-estudos');