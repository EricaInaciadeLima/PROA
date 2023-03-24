var contagem = 30;

var intervalo = setInterval(function () {
  if (contagem === 0) {
    document.write("EXPLOSÃO");
    clearInterval(intervalo);
  } else {
    document.write(contagem + "<br>");
    contagem--;
  }
}, 1000);
