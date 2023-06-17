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


// ---------- EVITAR ENVIO DO FORMULÁRIO ---------- //
let btnSubimit = document.getElementById("button")
let inputsCorretos = {
  email: false,
}

btnSubimit.addEventListener("click", (e) => {

  if (
    inputsCorretos.email == false) {
    e.preventDefault()
    alert('O campo obrigatório precisa ser preenchido corretamente!')
  } else {
    alert(" E-mail enviado com Sucesso 🐶 Clique na logo para voltar pra Home.")
  }
})
