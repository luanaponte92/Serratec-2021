const ler = require("prompt-sync")();

var mesDeNascimento =ler("Mes do seu nascimento: ");
var diaDoNascimento = ler("Dia do aniversario: ");

var  validacao1= mesDeNascimento==1 && diaDoNascimento>=21;
var validacao2 = mesDeNascimento==2 && diaDoNascimento<=19;

var juncao = validacao1 || validacao2;

console.log("Você é inteligente?", juncao, "!");