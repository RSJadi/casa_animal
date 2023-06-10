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


  // ---------- VALIDAÇÃO USERNAME VERSÃO FULL ---------- //
  let cepAdotarInput = document.getElementById("cep_adotar");
  let cepAdotarLabel = document.querySelector('label[for="cep_adotar"]');
  let cepAdotarHelper = document.getElementById("cep_helper_adote");
  
  //togglePopup(cepAdotarInput, cepAdotarLabel)
  
  // Validar valor do input
  cepAdotarInput.addEventListener("change", (e)=> {
    let valor = e.target.value;
    
    if (valor.includes('@') && valor.includes('.com')){
      // Adicionar estilos dinâmicos se o valor estiver correto
      cepAdotarHelper.classList.remove("visible");
      cepAdotarInput.classList.remove("error");
      cepAdotarInput.classList.add("correct");
      inputsCorretos.cep_adotar = true
    } else {
      // Adicionar estilos dinâmicos se o valor estiver incorreto
      cepAdotarInput.classList.remove("correct");
      cepAdotarInput.classList.add("error");
      cepAdotarHelper.innerText = "Digite seu e-mail corretamente!";
      cepAdotarHelper.classList.add("visible");
      inputsCorretos.cep_adotar = false
    }
  })


// ---------- EVITAR ENVIO DO FORMULARIO - 2 ---------- //

let btnSubmit = document.querySelector(".validacao1");
let inputsCorretos = {
  cep_adotar: false
};

function abrirPopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "block";
}

function fecharPopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "none";
}

btnSubmit.addEventListener("click", (e)=>{
  if(inputsCorretos.cep_adotar == false){
    e.preventDefault()
    alert("Para encontrar seu novo amigo, preencha o campo de e-mail corretamente!")
  } else {
    alert("O e-mail foi enviado com sucesso! Verifique sua caixa postal, siga as instruções e entre em contato com a ONG mais próxima de você!")
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
    instagram: "https://www.instagram.com/bichosdogueto/?igshid=NTc4MTIwNjQ2YQ==",
    facebook: ""
  },

  {
    entidade: "ONG GARRA",
    endereco: "Av. Interlagos, 730 - Ipanema",
    cidade: "Rio de Janeiro",      
    estado: "RJ",
    cep: "07421-030",
    site: "https://www.onggarra.com/",
    instagram: "https://www.instagram.com/garranimal/?igshid=NTc4MTIwNjQ2YQ%3D%3D",
    facebook: ""
  },
  {
    entidade: "CLUBE DO GATO",
    endereco: "Rua Nossa Senhora dos Guararapes, 188",
    cidade: "Brasília",  
    estado: "DF",
    cep: "09540-030",
    site: "https://clubedogato.org.br/",
    instagram: "https://www.instagram.com/clubedogatobrasil/?igshid=NTc4MTIwNjQ2YQ%3D%3D",
    facebook: ""
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

