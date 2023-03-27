var nome_usuario = prompt("Digite seu nome. Por favor!");
var tratamento_dado = nome_usuario.charAt(0).toUpperCase() + nome_usuario.slice(1);

alert(` Olá ${tratamento_dado}, é um prazer ter você por aqui!`);

var saldo = 50;

function ver_saldo() {
  var senha = 3589;
  var digite_senha = Number(prompt("Digite a senha. Por favor!"));
  while (digite_senha !== senha) {
    alert("Senha incorreta!");
    ver_saldo();
  }
  alert("Seu saldo atual é: " + saldo);
  inicio();
}
function fazer_deposito() {
  var deposito = parseFloat(prompt("Qual o valor para depósito?"));

  if (!deposito) {
    alert("Por favor, informe um número:");
    fazer_deposito();
  } else if (deposito <= 0) {
    alert("Operação não autorizada.");
    fazer_deposito();
  } else {
    saldo += deposito;
    ver_saldo();
  }
}

function fazer_saque() {
  var senha = 3589;
  var digite_senha = Number(prompt("Digite a senha. Por favor!"));
  while (digite_senha !== senha) {
    alert("Senha incorreta!");
    fazer_saque();
  }
  let saque = parseFloat(prompt("Qual o valor para saque?"));

  if (!saque) {
    alert("Por favor, informe um valor:");
    fazer_saque();
  } else if (saque > saldo || saque <= 0) {
    alert("Operação não autorizada.");
    fazer_saque();
  } else {
    saldo -= saque;
    ver_saldo();
  }

  inicio();
}
function transferencia() {
  var senha = 3589;
  var digite_senha = Number(prompt("Digite a senha. Por favor!"));
  while (digite_senha !== senha) {
    alert("Senha incorreta!");
    transferencia();
  }

  var numero_conta = Number(prompt("Digite o número da conta:"));
  var transferencias = parseFloat(prompt("Qual o valor para transferência?"));
  if (!numero_conta) {
    alert("Digite os números da conta.");
    transferencia();
  } else if (!transferencias) {
    alert("Por favor, informe um valor:");
    transferencia();
  } else if (transferencias > saldo || transferencias <= 0) {
    alert("Operação não autorizada.");
    transferencia();
  } else {
    saldo -= transferencias;
    ver_saldo();
  }
}
function extrato() {
  var senha = 3589;
  var digite_senha = Number(prompt("Digite a senha. Por favor!"));
  while (digite_senha !== senha) {
    alert("Senha incorreta!");
    extrato();
  }
  const exibir = "Saldo: R$150,00  Saque: R$25,00  Depósito: R$50,00";

  alert(exibir);
  inicio();
}
function sair() {
  var confirma = confirm("Você deseja sair?");
  if (confirma) {
    alert(`${nome_usuario}, foi um prazer ter você por aqui!`)
    window.close();
  } else {
    inicio();
  }
}

function erro() {
  alert("Por favor, informe um número entre 1 e 6");
  inicio();
}

function inicio() {
  var escolha = parseInt(
    prompt(
      "Selecione uma opção 1. Saldo 2. Extrato 3. Saque 4.  Depósito 5. Transferência e 6. Sair"
    )
  );

  switch (escolha) {
    case 1:
      ver_saldo();

      break;
    case 2:
      extrato();

      break;
    case 3:
      fazer_saque();

      break;
    case 4:
      fazer_deposito();

      break;
    case 5:
      transferencia();

      break;
    case 6:
      sair();

      break;

    default:
      erro();
      break;
  }
}

inicio();