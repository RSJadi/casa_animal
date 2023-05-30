// ---------- Adicionar E Remover Popup ---------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener('focus', () => {
    label.classList.add('required-popup');
  });
  // Ocultar popup de campo obrigatório
  input.addEventListener('blur', () => {
    label.classList.remove('required-popup');
  });
}

// ---------- VALIDAÇÃO E-MAIL ---------- //
const emailInput = document.getElementById("email");
const emailLabel = document.querySelector('label[for="email"]');
const emailHelper = document.getElementById("email-helper");

// ---------- Validar Valor Do Input Email ---------- //
emailInput.addEventListener('input', (e) => {
  const value = e.target.value;

  if (value.includes('@') && value.includes('.com')) {
    emailInput.classList.add('correct');
    emailHelper.classList.remove('visible');
    inputsCorretos.email = true;
  } else {
    emailInput.classList.remove('correct');
    emailInput.classList.add('error');
    emailHelper.innerText = '* O Email precisa ter um "@" e um ".com" !';
    emailHelper.classList.add('visible');
    inputsCorretos.email = false;
  }
})

togglePopup(emailInput, emailLabel)


// ---------- VALIDAÇÃO SENHA ---------- //
const senhaInput = document.getElementById("senha");
const senhaLabel = document.querySelector('label[for="senha"]');
const senhaHelper = document.getElementById("senha-helper");

// ---------- Validar Valor Do Input Senha ---------- //
senhaInput.addEventListener('input', (e) => {
  const value = e.target.value;

  if (value.length <= 5) {
    senhaInput.classList.remove('correct');
    senhaInput.classList.add('error');
    senhaHelper.innerText = '* Sua senha precisa ter 6 ou mais caracteres!';
    senhaHelper.classList.add('visible');
    inputsCorretos.senha = false;
  } else {
    senhaInput.classList.remove('error');
    senhaInput.classList.add('correct');
    senhaHelper.classList.remove('visible');
    inputsCorretos.senha = true;
  }
})

togglePopup(senhaInput, senhaLabel)


// ---------- EVITAR ENVIO DO FORMULÁRIO ---------- //
let btnSubimit = document.getElementById("button")
let inputsCorretos = {
  email: false,
  senha: false,
}

btnSubimit.addEventListener("click", (e) => {

  if (
    inputsCorretos.email == false ||
    inputsCorretos.senha == false) {
    e.preventDefault()
    alert('Os campos obrigatórios precisam ser preenchidos corretamente 😉')
  } else {
    alert("Formulário enviado com Sucesso 🐶 ")
  }
})

