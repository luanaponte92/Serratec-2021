/*No programa “Conto nos dedos”, a criança diz até qual número quer contar,
e os números aparecem na tela em sequência. Ela vai experimentar vários números,
até que digite um zero para parar de contar.*/


const ler = require("prompt-sync")();

var valor = Number(ler("Qual número você deseja contar: "));

do {    
    for (let index = 0; index < valor; index++) {
        console.log("Numero ->",index)
    }
    valor = Number(ler("Digite outro número ou 0 para sair: "));
} while (valor !== 0);