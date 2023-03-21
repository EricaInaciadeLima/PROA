let ano_nascimento = Number(prompt("Coloque o ano de nascimento: "));
const idade =  2023 - ano_nascimento;

if ( idade >= 16) {
    alert("Você pode votar!")
} else {
    alert("Você não pode votar esse ano.")
}