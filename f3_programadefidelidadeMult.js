const ler = require("prompt-sync")();

console.log("Bem vindo ao programa de fidelidade onde a cada 1 cupom seu, corresponde a 3 pontos.");
var  cupom= ler ("Digite seus cupons: ");
var resultado = cupom * 3;


console.log("Seus cupons valem " + resultado + " pontos!");