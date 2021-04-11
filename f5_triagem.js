/* 8- A finalidade do sistema "Triagem" é ajudar o hospital a identificar os
pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do
paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas,
receberá a avaliação na tela.
*/

const ler = require("prompt-sync") ();

console.log("Sistema de triagem: ")
var nome=ler("Nome do paciente: ");
var vacinado=ler("Já foi vacinado? ");
var infeccao= (vacinado!="sim");

console.log("Paciente:", nome);
console.log("Vacinado? ", vacinado);
console.log ("[Triagem]");
console.log("Sujeito a infecção? ", infeccao);