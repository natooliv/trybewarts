const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('btn-login');
const check = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
const contador = document.getElementById('counter');
const box = document.getElementById('textarea');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  botao.addEventListener('click', login);
}

login();

function verification() {
  if (check.checked) {
    submit.disabled = false;
  }
}

check.addEventListener('click', verification);

function contadorBox(event) {
  contador.innerHTML = 500;
  contador.innerHTML -= event.target.value.length;
}
box.addEventListener('keyup', contadorBox);
