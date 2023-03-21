let lista = [];

for (let i = 1; i <= 4; i++) {
  let valor = Number(prompt("Digite um número: "));
  lista.push(valor);
  console.log(lista);
}
let primeiro_elemento = lista[0];
let ultimo_elemento = lista[3];
let maior_elemento = Math.max.apply(null, lista);

console.log("primeiro número: " + primeiro_elemento);
console.log("último número: " + ultimo_elemento);
console.log("maior número: " + maior_elemento);
