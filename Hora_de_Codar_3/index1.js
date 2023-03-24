alert("Insira dois valores. Por favor.");
let primeiro_numero = parseInt(prompt("Digite o primeiro número: "));
let segundo_numero = parseInt(prompt("Digite o segundo número: "));

if (segundo_numero <= 0) {
  alert("O segundo valor não pode ser 0 ou negativo. Digite novo valor.");
  let segundo_numero = parseInt(prompt("Digite o segundo número: "));
  let divisao = primeiro_numero / segundo_numero;
  alert("O resultado da divisão é: " + divisao);
} else {
  let divisao = primeiro_numero / segundo_numero;
  alert("O resultado da divisão é: " + divisao);
}
