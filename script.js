const email = document.getElementById('email')
const senha = document.getElementById('senha')
const botao = document.getElementById('btn-login')


function login() {

  if (email.value === "tryber@teste.com" && senha.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.")
  }
  botao.addEventListener('click', login)
}

login()



