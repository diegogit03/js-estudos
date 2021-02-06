/*

    factory-function:

    Factory-functions, são funções fabricas
    como o proprio nome ja diz, porém exigem
    sabedoria ao cria-las, é simples de faze-la
    mas não é facil construir uma boa, exige muito
    treino.

*/

function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        peso: 63,
        fala: function(assunto){
            return `${nome} está ${assunto}`
        },
        falaPeso: function(){
            return `${nome} pesa ${this.peso}`
        }
    };
};

const p1 = criaPessoa('Diego', 'Henrique de Olivera Madero');

console.log(p1.falaPeso());