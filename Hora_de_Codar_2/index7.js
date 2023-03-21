let lista = [];
var soma = 0;

for (let i = 0; i <= 5; i++) {
  let valor = Number(prompt("Digite um número: "));
  lista.push(valor);

  if (lista[i] < 72) {
    soma += lista[i];
  }

  console.log(lista);
  console.log(soma);
}
alert(`Os números inseridos: ${lista}`);
alert(`A soma dos números: ${soma}`);
