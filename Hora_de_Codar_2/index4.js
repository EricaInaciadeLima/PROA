//4

let valor1 = parseInt(prompt("Digite um número: "));
let valor2 = parseInt(prompt("Digite um número: "));
let valor3 = parseInt(prompt("Digite um número: "));

let verificacao_maoir_valor = Math.max(valor1, valor2, valor3);
let verificacao_menor_valor = Math.min(valor1, valor2, valor3);
let verificacao_meio_valor =
  valor1 + valor2 + valor3 - verificacao_maoir_valor - verificacao_menor_valor;

const soma_dos_valores_maiores =
  verificacao_maoir_valor + verificacao_meio_valor;

console.log(
  `Resultado da soma: ${verificacao_maoir_valor} + ${verificacao_menor_valor} = ` +
    soma_dos_valores_maiores
);

console.log(valor1);
console.log(valor2);
console.log(valor3);
