const ler = require("prompt-sync")();

var  numero1= parseFloat(ler("Qual o primeiro número: "));
var operador= ler("Qual o operador: ex: +, -, x, / ?");
var numero2 = parseFloat(ler("Qual o segundo número: "));
var resultado;


if (operador==="+"){
    resultado=numero1+numero2;
    console.log("O resultado é :", resultado);
} else if( operador === "-"){
    resultado=numero1-numero2;
    console.log("O resultado é :", resultado);
} else if (operador.toLowerCase() === "x"){
    resultado=numero1*numero2;
    console.log("O resultado é :", resultado);
} else if (operador === "/"){
    resultado=numero1/numero2;
    console.log("O resultado é :", resultado);
}
else{
    console.log("Não entendi o que você quis fazer");
}