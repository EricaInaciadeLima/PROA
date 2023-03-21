let lista = [];
let soma = 0;

for (let i = 1; i <= 6; i++) {
  let valor = Number(prompt("Digite um número: "));
  lista.unshift(valor);
  soma = soma + valor;
  console.log(lista);
}

let calculo_aritmetica = soma / lista.length;
console.log(calculo_aritmetica);
alert("Resultado do cálculo aritmetico:  " + calculo_aritmetica);
