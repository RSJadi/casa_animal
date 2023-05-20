//function formatarCEP(input) {
    // Remove todos os caracteres não numéricos
    //let cep = input.value.replace(/\D/g, '');


   // let cep = input.value;
    // Verifica se o CEP possui 8 dígitos
  // if (cep.length === 8) {
       //Formata o CEP no formato "xxxxx-xxx"
    // cep = cep.substring(0, 5) + '-' + cep.substring(5, 8);
   // }
  
    // Define o valor formatado no campo de entrada
   //input.value = cep;
  //}
  

   //<form action="">
 // <label for="cep_adotar">Onde seu novo amigo lhe encontrará? Informe aqui seu CEP e mostraremos as entidades parceiras mais pertinho de você!</label>
 // <input type="text" maxlength="8" pattern="[0-9]{8}" id="cep_adotar" name="cep_adotar" oninput="formatarCEP(this)">
  //<p id = "cep_helper_adote" class="cep_helper_adote_ajuda"></p>
//</form>

//value = value.substring(0, 5) + '-' + value.substring(5, 8)

  // ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
      label.classList.add("required-popup");
    });
  
    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
      label.classList.remove("required-popup");
    });
  }
  
  function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
  }
  
  function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
  }



  // ---------- VALIDAÇÃO USERNAME ---------- //
//let cepAdotarInput = document.getElementById("cep_adotar");
//let cepAdotarLabel = document.querySelector('label[for="cep_adotar"]');
//let cepAdotarHelper = document.getElementById("cep_helper_adote");

//togglePopup(cepAdotarInput, cepAdotarLabel)

// Validar valor do input
//cepAdotarInput.addEventListener("blur", (e)=> {
 // let valor = e.target.value;


 // if(valor.match(/^\d+$/) && valor.length === 8){
    // Adicionar estilos dinâmicos se o valor estiver correto
 //   estilizarInputCorreto(cepAdotarInput, cepAdotarHelper);
 //   inputsCorretos.cep_adotar = true
//  } else {
    // Adicionar estilos dinâmicos se o valor estiver incorreto
 //   cepAdotarHelper.innerText = "Digite apenas oito caracteres numéricos!";
  //  estilizarInputIncorreto(cepAdotarInput, cepAdotarHelper);
 //   inputsCorretos.cep_adotar = false
//  }
//})




  // ---------- VALIDAÇÃO USERNAME VERSÃO FULL ---------- //
  let cepAdotarInput = document.getElementById("cep_adotar");
  let cepAdotarLabel = document.querySelector('label[for="cep_adotar"]');
  let cepAdotarHelper = document.getElementById("cep_helper_adote");
  
  //togglePopup(cepAdotarInput, cepAdotarLabel)
  
  // Validar valor do input
  cepAdotarInput.addEventListener("change", (e)=> {
    let valor = e.target.value;
    
    if(valor.match(/^\d+$/) && valor.length === 8){
      // Adicionar estilos dinâmicos se o valor estiver correto
      cepAdotarHelper.classList.remove("visible");
      cepAdotarInput.classList.remove("error");
      cepAdotarInput.classList.add("correct");
      inputsCorretos.cep_adotar = true
    } else {
      // Adicionar estilos dinâmicos se o valor estiver incorreto
      cepAdotarInput.classList.remove("correct");
      cepAdotarInput.classList.add("error");
      cepAdotarHelper.innerText = "Digite apenas os oito caracteres numéricos!";
      cepAdotarHelper.classList.add("visible");
      inputsCorretos.cep_adotar = false
    }
  })



// ---------- EVITAR ENVIO DO FORMULARIO ---------- //

//let btnSubmit = document.querySelector('button[type="submit"]')
//let inputsCorretos = {
    //cep_adotar: false
//}

  //btnSubmit.addEventListener("click", (e)=>{
   // if(inputsCorretos.cep_adotar == false){
   //   e.preventDefault()
   //   alert("Para encontrar seu novo amigo, preencha o campo de CEP corretamente!")
   // }else{
   //   alert("O formulário foi enviado com sucesso!")
   // }
 // } )


// ---------- EVITAR ENVIO DO FORMULARIO - 2 ---------- //

let btnSubmit = document.querySelector('button[type="submit"]')
let inputsCorretos = {
    cep_adotar: false
}

function abrirPopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "block";
}

function fecharPopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "none";
}

//function validar() {
  // Lógica de validação aqui
  //let btnValidacao = document.getElementById("btnValidacao");
  //btnValidacao.click();
//}


btnSubmit.addEventListener("click", (e)=>{
  if(inputsCorretos.cep_adotar == false){
    e.preventDefault()
    alert("Para encontrar seu novo amigo, preencha o campo de CEP corretamente!")
  } else {
    //validar()
    abrirPopup()
    fecharPopup()
  }
} )


// -------- ELEMENTOS DAS ONGS ---------- //
const arrayOngs = [
  {
    entidade: "PROJETO BICHOS DO GUETO",
    endereco: "Rua Araras do Rio de Janeiro, 55",
    cidade: "Mairiporã",    
    estado: "SP",
    cep: "09540-030",
    site: "http://projetobichosdogueto.blogspot.com/p/o-projeto.html",
    instagram: "url",
    facebook: "url"
  },

  {
    entidade: "ONG GARRA",
    endereco: "Av. Interlagos, 730 - Ipanema",
    cidade: "Rio de Janeiro",      
    estado: "RJ",
    cep: "07421-030",
    site: "url",
    instagram: "url",
    facebook: "url"  
  },
  {
    entidade: "CLUBE DO GATO",
    endereco: "Rua Amélia Jobim, 188",
    cidade: "Brasília",  
    estado: "DF",
    cep: "09540-030",
    site: "url",
    instagram: "url",
    facebook: "url"    
  },
]

for (let i=0; i<arrayOngs.length; i++) {
  const article = document.createElement('article');
  article.setAttribute('id' , 'post-$[i+1]');

  article.innerHTML = `
  <div class="entidade">${arrayOngs[i].entidade}</div>
  <div class="endereco">${arrayOngs[i].endereco}</div>
  <div class="cidade">${arrayOngs[i].cidade}</div>
  <div class="estado">${arrayOngs[i].estado}</div>
  <div class="cepOngs">${arrayOngs[i].cep}</div>
  <div class="site">${arrayOngs[i].site}</div>
  <div class="instagram">${arrayOngs[i].instagram}</div>
  <div class="facebook">${arrayOngs[i].facebook}</div>
  `

  const ongs = document.getElementsByClassName('ongs')[0];
  ongs.appendChild(article)
}



















//<label for="username">*Username:</label>
//<input type="text" id="username" name="username">
//<p id="username-helper" class="helper-text">Mensagem de ajuda</p>



// ---------- VALIDAÇÃO USERNAME ---------- //
//let usernameInput = document.getElementById("username");
//let usernameLabel = document.querySelector('label[for="username"]');
//let usernameHelper = document.getElementById("username-helper");

//togglePopup(usernameInput, usernameLabel)

// Validar valor do input
//usernameInput.addEventListener("change", (e)=> {
  //let valor = e.target.value

 // if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
   // usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
  //  estilizarInputIncorreto(usernameInput, usernameHelper);
  //  inputsCorretos.username = false
 // } else {
  //  // Adicionar estilos dinâmicos se o valor estiver correto
 //   estilizarInputCorreto(usernameInput, usernameHelper);
 //   inputsCorretos.username = true
//  }
//})