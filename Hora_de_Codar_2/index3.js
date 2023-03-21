// 3
var valor1 = parseInt(prompt("Digite um número: "));
var valor2 = parseInt(prompt("Digite um número: "));
var valor3 = parseInt(prompt("Digite um número: "));

let maiorValor = valor1;
if (valor2 > maiorValor) {
  maiorValor = valor2;
}
if (valor3 > maiorValor) {
  maiorValor = valor3;
}
console.log("O maior valor é: " + maiorValor);

console.log(valor1);
console.log(valor2);
console.log(valor3);
