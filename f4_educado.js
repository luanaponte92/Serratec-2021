/*O programa "Educado" irá perguntar o seu nome,
e também como você gostaria de ser chamado. 
Depois disso, uma saudação para você aparece na tela.*/

const ler = require("prompt-sync")();

var  nome = ler ("Olá, qual é o seu nome? ");
var apelido= ler("Prazer em te conhecer, " + nome + ", como você prefere ser chamado?" );

console.log("Que legal, a partir de agora vou te chamar de ", apelido);