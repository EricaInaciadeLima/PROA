let lista = [];
let soma = 0;

for (let i = 1; i <= 4; i++) {
  let valor = parseFloat(prompt("Digite um número: "));
  lista.push(valor);

  if (valor > 0 && valor < 10) {
    soma = soma + valor;
  }
}

let media = soma / lista.length;

if (media > 5) {
  alert("Você passou no teste " + media);
} else {
  alert("Tente novamente  " + media);
}
