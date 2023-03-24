let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let soma = num1 + num2;
let quantidade = 2;

for (let i = num1 + 1; i < num2; i++) {
  soma += i;
  quantidade++;
}

let media = soma / quantidade;

console.log("A média dos números entre " + num1 + " e " + num2 + " é: " + media);
