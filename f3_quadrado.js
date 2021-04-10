const ler = require("prompt-sync")();

var  numero = ler ("Digite um número: ");
var resultado = numero * numero;

console.log("O quadrado do " + numero + " é: " + resultado);