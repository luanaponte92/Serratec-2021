/*7- O programa “Compromissos” gerencia a sua agenda do mês. 
Você pode digitar um compromisso, informando o dia e a descrição
do evento, e consultar se existe algum apontamento para determinado
dia.*/

const ler = require("prompt-sync")();

var dia = [];
do{
var diadocompromisso =  Number( ler("Olá! Qual dia do mês deseja agendar um compromisso? "));
var diaindisponivel = "";
 
    for (let index = 0; index < dia.length; index++) {
        if ( dia[index] == diadocompromisso ){
            diaindisponivel = true;
        } 
    }
    if (diaindisponivel == true){
        var outrodia = ler("Esse dia já possui compromisso marcado, gostaria de agendar outro dia? ")
    }else{
        dia.push(diadocompromisso);
        let compromisso= ler("Olá! Qual compromisso gostaria de agendar no dia " + diadocompromisso +"? ");
        console.log("O compromisso " + compromisso + " foi agendado!");
        outrodia =  ler("Gostaria de agendar mais algum compromisso digite (sim): ");
    }

} while(outrodia == "sim" )