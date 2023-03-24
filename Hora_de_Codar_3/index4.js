let numeros = [];
let soma = 0;

for (let i = 15; i <= 100; i++) {
  numeros.push(i);
  soma += i;
}

let media = soma / numeros.length;

console.log("A média dos números entre 15 e 100 é: " + media);