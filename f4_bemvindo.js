/*O programa “bem-vindo” pergunta seu nome e sobrenome,
e depois gentilmentete cumprimenta.*/

const ler = require("prompt-sync")();

var  nome = ler ("Olá, qual é o seu nome? ");
var sobrenome= ler ("Prazer em te conhecer, " + nome + "e qual seu sobrenome? ");

console.log("Olá " + nome , sobrenome + " seja bem vindo ao universo da programação!");