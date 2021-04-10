const ler = require("prompt-sync")();

var verificarSexo = ler("Qual o seu sexo? ");
var verificarAnoNascimento = ler("Qual o seu ano de nascimento? ");
const anoAtual = 2021;
var idade = anoAtual - verificarAnoNascimento ;

var emancipado = idade >= 21 && verificarSexo === "Feminino" || idade >= 18 && verificarSexo === "Masculino";

console.log("Sexo:", verificarSexo);
console.log("Ano de nascimento: ", verificarAnoNascimento);
console.log("Cidadão Emancipado? ", emancipado);