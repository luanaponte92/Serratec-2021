const ler = require("prompt-sync")();

console.log("====BANCO DE SANGUE====");
console.log("Digite 'sim' ou 'não' nas restrições a seguir");

var idade= ler("Você está abaixo de 16 ou acima de 69 anos: ");
var peso=ler("Pesa menos de 50kg: ");
var hepatite= ler("Portador de Hepatite: ");
var malaria=ler("Já teve Malária: ");
var recente=ler("fez doação recente: ");


var resultado = !(
idade == "sim" ||
peso == "sim" ||
hepatite == "sim" ||
malaria == "sim" ||
recente == "sim"
);


console.log("==RESULTADO DA TRIAGEM==");
console.log("Pode doar sangue? ", resultado);

var razao= ""

if (idade == "sim") razao = "Abaixo ou acima da idade.";
if (peso== "sim") razao += "Infelizmente está abaixo do peso.";
if (hepatite == "sim") razao += "Infelizmente você já teve Hepatite.";
if ( malaria == "sim") razao += "Infelizmente você já teve Malária.";
if ( recente == "sim") razao += "Você fez uma doação recente.";


console.log("Motivo: ", razao);