let n = prompt("Digite o valor de N:");

for (let i = 1; i <= n; i++) {
  console.log(`Tabuada do ${i}: `);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log(""); // linha em branco para separar as tabuadas
}