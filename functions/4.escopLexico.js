/*

    escopo lexico:

    Uma função sempre guarda 
    o escopo da onde ela foi 
    declarada, e não utiliza
    o escopo de onde foi invocada

*/

const nome = 'Diego';

function falaNome(){
    /*
        Numa situação como
        esta a saída seria henrique
        const nome = 'Henrique';
    */
    console.log(nome);
};

function usaFalaNome(){
    /*
    
        a falaNome() nunca irá "roubar"
        o escopo da usaFalaNome(), portanto
        a saída será Diego.
    
    */
    const nome = 'Henrique';
    falaNome();
};

usaFalaNome();