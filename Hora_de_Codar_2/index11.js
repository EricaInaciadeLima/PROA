const primeiro_numero = parseInt(prompt("Digite o primeiro número: "));
const segundo_numero = parseInt(prompt("Digite o segundo número: "));

const operacoes = parseInt(prompt("Escolha uma operação:  1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação "));

if (operacoes === 1) {
    const adicao = primeiro_numero + segundo_numero
    alert(`Resultado da adição: ${primeiro_numero} + ${segundo_numero}  = ${adicao}`);
} else if (operacoes === 2) {
    const subtracao = primeiro_numero  - segundo_numero
    alert(`Resultado da subtração: ${primeiro_numero} - ${segundo_numero}  = ${subtracao}`);
} else if (operacoes === 3) {
    const divisao = primeiro_numero / segundo_numero
    alert(`Resultado da divisão: ${primeiro_numero} / ${segundo_numero}  = ${divisao}`);
} else if (operacoes === 4) {
    const multiplicacao = primeiro_numero * segundo_numero
    alert(`Resultado da adição: ${primeiro_numero} * ${segundo_numero}  = ${multiplicacao}`);
} else {
    alert(
        "Opção inválida. Por favor, digite 1, 2, 3 e 4."
      );
}