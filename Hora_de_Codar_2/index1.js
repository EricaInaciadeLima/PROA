//1

const primeiro_numero = parseInt(prompt("Digite o primeiro número: "));
const segundo_numero = parseInt(prompt("Digite o segundo número: "));

if (primeiro_numero > segundo_numero) {
  alert("O primeiro número é maior que o segundo número " + primeiro_numero);
} else if (primeiro_numero === segundo_numero) {
  alert("Os dois números são iguais");
} else {
  alert("O segundo número é maior que o primeiro número " + segundo_numero);
}
