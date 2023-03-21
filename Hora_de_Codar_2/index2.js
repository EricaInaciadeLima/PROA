// 2

const valor = parseInt(prompt("Digite um número: "));

const analisando = () => {
  if (valor > 0) {
    alert("O número é positivo " + valor);
  } else if (valor < 0) {
    alert("O número é negativo " + valor);
  } else {
    alert("O número é zero " + valor);
  }
};

alert(analisando());
