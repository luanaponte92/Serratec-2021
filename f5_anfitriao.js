/*O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos impressos,
tanto nos plurais quanto na quantidade de visitas.
Visitas: 1
Você já nos visitou uma vez.

Visitas: 2
Você já nos visitou duas vezes.

Visitas: 3
Você já nos visitou 3 vezes.*/


const ler = require("prompt-sync")();

var nome = ler("Digite seu nome: ")
console.log("Bem vindo ",nome, "!");

var visitas = Number(ler("Digite a quantidade de visitas: "));

if (visitas <= 0) {
    console.log("Você nunca nos visitou.",nome);
} else if (visitas == 1) {
    console.log("Você já nos visitou uma vez",nome);
} else if (visitas == 2) {
    console.log("Você já nos visitou duas vezes",nome);
} else {
    console.log("Você já nos visitou", visitas,"vezes",nome,"!!");
}