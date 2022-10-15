const senha = document.getElementById('senha');
const botao = document.getElementById('btn-login');
const check = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
const contador = document.getElementById('counter');
const box = document.getElementById('textarea');
const loginE = document.getElementById('email');

function login() {
  if (loginE.value === 'tryber@teste.com' && senha.value === '123456') {
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

function checkedBtn() {
  const fieldCheck = document.getElementsByName('content');
  const filled = Object.values(fieldCheck);
  let checkFill = []; // Tem que ser declarada para não dar undefined
  for (let i = 0; i < fieldCheck.length; i += 1) {
    if (filled[i].checked) {
      checkFill += ` ${filled[i].value}, `; // Usamos template Literals
    }
  }
  return checkFill;
}
checkedBtn();

function checkedRadio(component) {
  const fieldRadio = document.getElementsByName(component);
  const selectedRadio = Object.values(fieldRadio);
  let checkRd = '';
  for (let i = 0; i < fieldRadio.length; i += 1) {
    if (selectedRadio[i].checked) {
      checkRd = selectedRadio[i].value;
    }
  }
  return checkRd;
}
checkedRadio();

function formulario() {
  const formNome = document.getElementById('nome');
  const apelido = document.getElementById('input-name');
  const ultimoNome = document.getElementById('input-lastname');
  formNome.innerText = `Nome: ${apelido.value} ${ultimoNome.value}`;
  const emailValido = document.getElementById('input-email');
  loginE.innerText = `Email: ${emailValido.value}`;
}
function formFild2() {
  const subject = document.getElementsByClassName('subject');
  const sub = [];
  for (let index = 0; index < subject.length; index += 1) {
    const arrayVazio = subject[index];
    if (arrayVazio.checked === true) {
      sub.push(arrayVazio.value);
    }
  }
  return sub;
}
const formularioFinal = document.getElementById('form-data');
const result = () => {
  const create = document.createElement('p');
  const familys = document.querySelector('input[name="family"]:checked');
  create.innerText = `Família: ${familys.value}`;
  formularioFinal.appendChild(create);
};
const observation = () => {
  const create = document.createElement('p');
  const txt = document.getElementById('textarea').value;
  create.innerText = `Observações: ${txt}`;
  formularioFinal.appendChild(create);
};
const forms = document.getElementById('evaluation-form');
submit.addEventListener('click', (event) => {
  event.preventDefault();
  forms.style.display = 'none';
  formulario();
  result();
  observation();
  const casaHouse = document.getElementById('casa');
  const inputHause = document.getElementById('house');
  casaHouse.innerText = `Casa: ${inputHause.value}`;
  const avaliationForm = document.getElementById('avaliacao');
  const inputForm = document.querySelector('input[name="rate"]:checked');
  avaliationForm.innerText = `Avaliação: ${inputForm.value}`;
  const materiasTech = document.getElementById('materias');
  materiasTech.innerText = `Matérias: ${formFild2().join(', ')}`;
});
