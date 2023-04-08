var nome_hotel = prompt("Digite o nome do hotel. Por favor!");
const tratamento_dado_1 =
  nome_hotel.charAt(0).toUpperCase() + nome_hotel.slice(1);

alert(`O nome do hotel é ${tratamento_dado_1}`);

var nome_usuario = prompt("Digite seu nome. Por favor!");
const tratamento_dado_2 =
  nome_usuario.charAt(0).toUpperCase() + nome_usuario.slice(1);

var senha = 2678;
var digite_senha = Number(prompt("Digite a senha. Por favor!"));
while (digite_senha !== senha || !digite_senha) {
  alert("Senha incorreta!");
  var digite_senha = Number(prompt("Digite a senha. Por favor!"));
}

alert(` Olá ${tratamento_dado_2}, é um prazer ter você por aqui!`);

alert(
  `Bem vindo ao Hotel ${tratamento_dado_1}, ${tratamento_dado_2}. É um imenso prazer ter você por aqui!`
);

function reservar_quartos() {
  alert(`HOTEL ${tratamento_dado_1} - RESERVA DE QUARTOS`);
  var valor_diaria = parseFloat(prompt("Qual o valor padrão da diária?"));
  var quantas_diarias = parseInt(prompt("Quantas diárias serão necessárias?"));

  if (valor_diaria <= 0 || !valor_diaria) {
    alert(`Valor inválido, ${tratamento_dado_2}.`);
    reservar_quartos();
  } else if (quantas_diarias <= 0 || quantas_diarias > 30) {
    alert(`Quantidade de diárias inválida, ${tratamento_dado_2}.`);
    reservar_quartos();
  } else {
    alert(
      `O valor de ${quantas_diarias} dias de hospedagem é de R$${
        quantas_diarias * valor_diaria
      }.`
    );
    const nome_hospede = prompt("Qual o nome do hóspede?");
    const tratamento_dado =
      nome_hotel.charAt(0).toUpperCase() + nome_hospede.slice(1);
    const verificar = prompt(
      `${tratamento_dado_2}, você confirma a hospedagem para ${tratamento_dado} por ${quantas_diarias} dias? S/N`
    );

    if (verificar === "S" || verificar === "s") {
      alert(
        `${tratamento_dado_2}, reserva efetuada para ${tratamento_dado}. O valor total é de R$${
          quantas_diarias * valor_diaria
        }.`
      );
    } else {
      alert(`${tratamento_dado_2}, reserva não efetuada.`);
    }
  }

  inicio();
}

function cadastro_hospedes() {
  alert(`HOTEL ${tratamento_dado_1.toLocaleUpperCase} - CADASTRO DE HÓSPEDES`);
  var valor_diaria = parseFloat(prompt("Qual o valor padrão da diária?"));

  let gratuidades = 0;
  let meias_hospedagens = 0;
  let valor_total = 0;

  while (true) {
    var nome_hospede = prompt('Digite o nome do hóspede ou "PARE" para sair:');

    if (nome_hospede.toUpperCase() === "PARE") {
      break;
    }

    var idade = parseInt(prompt("Digite a idade do hóspede:"));
    let valor_hospedagem = valor_diaria;

    if (idade < 6) {
      gratuidades++;
      alert(`${nome_hospede} cadastrada(o) com sucesso. Possui gratuidade`);
      continue;
    } else if (idade > 60) {
      meias_hospedagens++;
      valor_hospedagem = valor_diaria / 2;
      alert(`${nome_hospede} cadastrada(o) com sucesso. Paga meia`);
    } else {
      alert(`${nome_hospede} cadastrada(o) com sucesso.`);
    }

    valor_total += valor_hospedagem;
  }
  alert(
    `${tratamento_dado_2}, o valor total das hospedagens é: R$${valor_total.toFixed(
      2
    )}; ${gratuidades} gratuidade(s); ${meias_hospedagens} meia(s)`
  );

  inicio();
}

function cadastrar_pesquisar_listar() {
  const hospedes = [];

  let contador = 0;

  while (true) {
    const opcao = prompt(
      "Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Listar - 4. Sair"
    );

    if (opcao === "1") {
      if (contador >= 15) {
        alert("Máximo de cadastros atingido");
        continue;
      }

      const nome_hospede = prompt("Qual o nome do Hóspede?");

      if (nome_hospede.trim() === "") {
        alert("Por favor, digite um nome válido");
        continue;
      }

      hospedes.push(nome_hospede);
      console.log(hospedes.push(nome_hospede));
      contador++;

      alert("Hóspede " + nome_hospede + " foi cadastrado(a) com sucesso!");
    } else if (opcao === "2") {
      const nome_hospede = prompt("Qual o nome do Hóspede?");
      const index = hospedes.indexOf(nome_hospede);

      if (index === -1) {
        alert("Hóspede não encontrado");
      } else {
        alert("Hóspede " + nome_hospede + " foi encontrado");
      }
    } else if (opcao === "3") {
      let lista_hospedes = "Lista de hóspedes:\n\n";
      hospedes.forEach(function (hospede) {
        lista_hospedes += hospede + "\n";
      });
      alert(lista_hospedes);
    } else if (opcao === "4") {
      inicio();
      break;
    } else {
      alert("Opção inválida. Escolha as opção enter 1 a 4.");
    }
  }
}

function reservar_evento() {
  const horas = parseInt(prompt("Qual a duração do evento em horas?"));
  const quantos_garcons = parseInt(
    prompt("Quantos garçons serão necessários?")
  );

  const custo = horas * 10.5 * quantos_garcons;
  alert(`Custo total: R$${custo.toFixed(2)} .`);

  const verificar = prompt("  Gostaria de efetuar a reserva? S/N");

  if (verificar === "S" || verificar === "s") {
    alert(`${tratamento_dado_2}, reserva efetuada com sucesso.`);
  } else {
    alert(`${tratamento_dado_2}, reserva não efetuada.`);
  }

  inicio();
}

function buffet() {
  const convidados = parseInt(
    prompt("Qual o número de convidados para o evento?")
  );

  while (convidados < 0 || convidados === "") {
    alert("Valor incorreto, insira a quantidade de convidados");
    auditorio();
  }
  if (convidados > 350) {
    alert("Quantidade de convidados superior à capacidade máxima.");
    buffet();
  } else {
    const cafe = 0.2 * convidados;
    const agua = 0.5 * convidados;
    const salgados = 7 * convidados;
    const custo = cafe * 0.8 + agua * 0.4 + (salgados / 100) * 34;
    alert(
      `O evento precisará de ${cafe} litros de café, ${agua}  litros de água, ${salgados} salgados. O custo total do evento será de R$${custo.toFixed(
        2
      )}  .`
    );

    const verificar = prompt("  Gostaria de efetuar a reserva? S/N");

    if (verificar === "S" || verificar === "s") {
      alert(`${tratamento_dado_2}, reserva efetuada com sucesso.`);
    } else {
      alert(`${tratamento_dado_2}, reserva não efetuada.`);
    }
  }
  inicio();
}
function auditorio() {
  const convidados = parseInt(
    prompt("Qual o número de convidados para o evento?")
  );
  if (!convidados || convidados < 0) {
    alert("Valor incorreto, insira a quantidade de convidados");
    auditorio();
  } else if (convidados > 350 || convidados < 0) {
    alert("Quantidade de convidados superior à capacidade máxima.");
    auditorio();
  } else {
    if (convidados > 150) {
      var cadeiras_mais = convidados - 150;
      if (cadeiras_mais > 70) {
        alert("Use o auditório Colorado");
      } else {
        alert(
          `Use o auditório Laranja (inclua mais ${cadeiras_mais} cadeiras).`
        );
      }
    } else if (convidados > 0 && convidados < 150) {
      alert(`Use o auditório Laranja.`);
    } else if (convidados > 220 || convidados === 350) {
      alert("Use o auditório Colorado");
    }
  }
  const verificar = prompt("  Gostaria de efetuar a reserva? S/N");

  if (verificar === "S" || verificar === "s") {
    alert(`${tratamento_dado_2}, reserva efetuada com sucesso.`);
  } else {
    alert(`${tratamento_dado_2}, reserva não efetuada.`);
  }

  inicio();
}
function reservar_restaurante() {
  let dia_semana = prompt("Qual o dia do seu evento?").toLowerCase(); // converte para
  let hora = parseInt(prompt("Qual a hora do seu evento?"));
  let disponivel = false;

  if (
    dia_semana === "segunda" ||
    dia_semana === "terca" ||
    dia_semana === "quarta" ||
    dia_semana === "quinta" ||
    dia_semana === "sexta"
  ) {
    if (hora >= 7 && hora <= 23) {
      disponivel = true;
    }
  } else if (dia_semana === "sabado" || dia_semana === "domingo") {
    if (hora >= 7 && hora <= 15) {
      disponivel = true;
    }
  }

  if (disponivel) {
    let nome_empresa = prompt("Qual o nome da empresa?");
    alert(
      `Restaurante reservado para ${nome_empresa}: ${dia_semana} às ${hora}hs.`
    );
  } else {
    alert("Restaurante indisponível");
  }

  inicio();
}
function abastecer_carros() {
  alert(`HOTEL ${tratamento_dado_1.toLocaleUpperCase} - ABASTECER`);
  let valorAlcoolWayne = parseFloat(
    prompt("Qual o valor do álcool no posto Wayne Oil?")
  );
  let valorGasolinaWayne = parseFloat(
    prompt("Qual o valor da gasolina no posto Wayne Oil?")
  );
  let valorAlcoolStark = parseFloat(
    prompt("Qual o valor do álcool no posto Stark Petrol?")
  );
  let valorGasolinaStark = parseFloat(
    prompt("Qual o valor da gasolina no posto Stark Petrol?")
  );

  var preco_alcoolWayne = valorAlcoolWayne * 0.7; // desconto de 30%
  var preco_gasolinaWayne = valorGasolinaWayne;
  var preco_alcoolStark = valorAlcoolStark * 0.7; // desconto de 30%
  var preco_gasolinaStark = valorGasolinaStark;

  var custo_alcoolWayne = preco_alcoolWayne * 42;
  var custo_gasolinaWayne = preco_gasolinaWayne * 42;
  var custo_alcoolStark = preco_alcoolStark * 42;
  var custo_gasolinaStark = preco_gasolinaStark * 42;

  let combustivel = "";
  let posto = "";
  if (
    preco_alcoolWayne < preco_gasolinaWayne &&
    preco_alcoolWayne < preco_alcoolStark &&
    preco_alcoolWayne < preco_gasolinaStark
  ) {
    combustivel = "álcool";
    posto = "Wayne Oil";
  } else if (
    preco_gasolinaWayne < preco_alcoolWayne &&
    preco_gasolinaWayne < preco_alcoolStark &&
    preco_gasolinaWayne < preco_gasolinaStark
  ) {
    combustivel = "gasolina";
    posto = "Wayne Oil";
  } else if (
    preco_alcoolStark < preco_alcoolWayne &&
    preco_alcoolStark < preco_gasolinaWayne &&
    preco_alcoolStark < preco_gasolinaStark
  ) {
    combustivel = "álcool";
    posto = "Stark Petrol";
  } else if (
    preco_gasolinaStark < preco_alcoolWayne &&
    preco_gasolinaStark < preco_gasolinaWayne &&
    preco_gasolinaStark < preco_alcoolStark
  ) {
    combustivel = "gasolina";
    posto = "Stark Petrol";
  }

  alert(`É mais barato abastecer com ${combustivel} no posto ${posto}.`);

  inicio();
}
function manutencao_arcondicionado() {
  var menor_orcamento = Number.POSITIVE_INFINITY;
  var empresa_menor_orcamento = "";

  do {
    var nome_empresa = prompt("Qual o nome da empresa?");
    var valor_aparelho = parseFloat(prompt("Qual o valor por aparelho?"));
    var quantidade_aparelho = parseInt(
      prompt("Qual a quantidade de aparelhos?")
    );
    var desconto = parseFloat(prompt("Qual a porcentagem de desconto?"));
    var minimo_desconto = parseInt(
      prompt("Qual o número mínimo de aparelhos para conseguir o desconto?")
    );

    var valor_total = valor_aparelho * quantidade_aparelho;
    var valor_desconto = 0;

    if (quantidade_aparelho >= minimo_desconto) {
      valor_desconto = valor_total * (desconto / 100);
    }

    var valor_final = valor_total - valor_desconto;

    if (valor_final < menor_orcamento) {
      menor_orcamento = valor_final;
      empresa_menor_orcamento = nome_empresa;
    }

    alert("O serviço de " + nome_empresa + " custará R$ " + valor_final);

    var continuar = prompt("Deseja informar novos dados? (S/N)").toUpperCase();
  } while (continuar === "S" || continuar === "s");

  alert(
    "O orçamento de menor valor é o de " +
      empresa_menor_orcamento +
      " por R$ " +
      menor_orcamento
  );
  inicio();
}

function erro() {
  alert("Por favor, informe um número entre 1 e 10.");
  inicio();
}

function sair() {
  var confirma = confirm("Você deseja sair?");
  if (confirma) {
    alert(`Muito obrigado e até logo, ${tratamento_dado_2}.`);
    window.close();
  } else {
    inicio();
  }
}

function inicio() {
  var escolha = parseInt(
    prompt(
      "Selecione uma opção 1.) Reserva de Quartos 2.) Cadastro de Hóspedes 3.) Pesquisa de Hóspedes 4.) Abastecimento de Carros 5.) Reservar um evento 6.) Buffet 7.) Reserva dos Auditórios 8.) Reserva do Restaurante 9.) Manutenção do Ar Condicionado 10.) Sair"
    )
  );
  switch (escolha) {
    case 1:
      reservar_quartos();
      break;
    case 2:
      cadastro_hospedes();
      break;
    case 3:
      cadastrar_pesquisar_listar();
      break;
    case 4:
      abastecer_carros();
      break;
    case 5:
      reservar_evento();
      break;
    case 6:
      buffet();
      break;
    case 7:
      auditorio();
      break;
    case 8:
      reservar_restaurante();
    case 9:
      manutencao_arcondicionado();
    case 10:
      sair();
      break;
    default:
      erro();
  }
}
inicio();
