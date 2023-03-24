let dentroIntervalo = 0;
let foraIntervalo = 0;

for (let i = 1; i <= 10; i++) {
  let valor =parseFloat(prompt(`Digite o valor ${i}:`));


  if (valor >= 24 && valor <= 42) {
    dentroIntervalo++;
  } else {
    foraIntervalo++;
  }
}

console.log(`Quantidade de valores dentro do intervalo: ${dentroIntervalo}`);
console.log(`Quantidade de valores fora do intervalo: ${foraIntervalo}`);