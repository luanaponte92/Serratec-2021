/* O posto de Saúde irá vacinar hoje contra a Covid os cidadãos 
com 67 anos. Ao entrar, deve ser solicitada a idade, para então
exibir as mensagens de direcionamento:
acima de 67 anos = Por quê não vacinou ainda?
Abaixo de 67 anos = Volte na próxima semana
67 anos completos = Vacinação hoje.
*/

const ler = require("prompt-sync") ();
console.log("--Fila da vacina COVID --");
var idade= ler ("Digite sua idade: ");

var vacinahoje = (idade == 67);
var voltar = idade <67;
var superior = idade >= 68;

if (vacinahoje) console.log ("Vacinação hoje.");
if (voltar) console.log ("Volte na próxima semana.");
if (superior) console.log ("Por quê não vacinou ainda?");