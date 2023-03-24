let alunosAprovados = 0;

do {
  let nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
  let nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));
  let media = (nota1 + nota2) / 2;

  if (media >= 9.5) {
    alunosAprovados++;
    alert("O aluno foi aprovado com média " + media.toFixed(2));
  } else {
    alert("O aluno foi reprovado com média " + media.toFixed(2));
  }

  var resposta = prompt("Calcular a média de outro aluno? (S/N)").toUpperCase();
} while (resposta === "S");

alert("Quantidade de alunos aprovados: " + alunosAprovados);