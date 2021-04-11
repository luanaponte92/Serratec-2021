/*Os boletos da "Universidade" são emitidos com vencimento no dia 15 do
mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido
um desconto na próxima mensalidade. O programa irá receber o número
do boleto e o dia do pagamento, e emitir o extrato.
Dia hoje: 10
Número do Boleto: 1234
Dia de pagamento: 11
Desconto na próxima mensalidade? true*/

const ler = require("prompt-sync") ();

var boleto = ler("Digite o número do boleto: ");
var pagamento = ler("Dia do pagamento: ");

var desconto = (pagamento>=10) && (pagamento<=13);

console.log("RESULTADO: ");

console.log("Número do Boleto: ", boleto);
console.log("Dia de pagamento: ", pagamento);
console.log("Desconto na próxima mensalidade? ", desconto);