let altura = parseFloat(prompt("Digite sua altura:"));
let sexo = parseInt(
  prompt(" Digite o número de acordo com sexo: Feminino 1 ou Masculino 2.")
);

if (sexo === 1) {
  let peso_ideal = 62.1 * altura - 44.7;
  alert(`O seu peso ideal é ${peso_ideal.toFixed(2)} kg.`);
} else if (sexo === 2) {
  let peso_ideal = 72.7 * altura - 58;
  alert(`O seu peso ideal é ${peso_ideal.toFixed(2)} kg.`);
} else {
  alert(
    "Opção inválida. Por favor, digite 1 para feminino ou 2 para masculino."
  );
}
