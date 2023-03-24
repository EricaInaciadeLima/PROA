let notas = [];
let soma = 0;
let notaValida = false;

for (let i = 1; i <= 6; i++) {
  notaValida = false;
  
  while (!notaValida) {
    let nota = parseFloat(prompt(`Digite a nota ${i} (entre 0 e 10):`));
   
    
    if (nota >= 0 && nota <= 10) {
      notas.push(nota);
      soma += nota;
      notaValida = true;
    } else {
      alert("Nota inválida. Digite um valor entre 0 e 10.");
    }
  }
}

const media = soma / notas.length;
console.log(`A média do aluno é: ${media.toFixed(2)}`);