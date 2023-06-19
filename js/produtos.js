
/* criação do banner dinâmico com imagens em carrossel */
let time = 2500,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)



//criação de modal 

const botao01 = document.getElementById("b01");
const modal01 = document.getElementById("m01");
const botaof01 = document.getElementById("bf01");

botao01.onclick = function () {
    modal01.showModal();
}
botaof01.onclick = function () {
    modal01.close();
}

const botao02 = document.getElementById("b02");
const modal02 = document.getElementById("m02");
const botaof02 = document.getElementById("bf02");

botao02.onclick = function () {
    modal02.showModal();
}
botaof02.onclick = function () {
    modal02.close();
}

const botao03 = document.getElementById("b03");
const modal03 = document.getElementById("m03");
const botaof03 = document.getElementById("bf03");

botao03.onclick = function () {
    modal03.showModal();
}
botaof03.onclick = function () {
    modal03.close();
}

const botao04 = document.getElementById("b04");
const modal04 = document.getElementById("m04");
const botaof04 = document.getElementById("bf04");

botao04.onclick = function () {
    modal04.showModal();
}
botaof04.onclick = function () {
    modal04.close();
}

const botao05 = document.getElementById("b05");
const modal05 = document.getElementById("m05");
const botaof05 = document.getElementById("bf05");

botao05.onclick = function () {
    modal05.showModal();
}
botaof05.onclick = function () {
    modal05.close();
}

const botao06 = document.getElementById("b06");
const modal06 = document.getElementById("m06");
const botaof06 = document.getElementById("bf06");

botao06.onclick = function () {
    modal06.showModal();
}
botaof06.onclick = function () {
    modal06.close();
}
const botao07 = document.getElementById("b07");
const modal07 = document.getElementById("m07");
const botaof07 = document.getElementById("bf07");

botao07.onclick = function () {
    modal07.showModal();
}
botaof07.onclick = function () {
    modal07.close();
}
const botao08 = document.getElementById("b08");
const modal08 = document.getElementById("m08");
const botaof08 = document.getElementById("bf08");

botao08.onclick = function () {
    modal08.showModal();
}
botaof08.onclick = function () {
    modal08.close();
}
const botao09 = document.getElementById("b09");
const modal09 = document.getElementById("m09");
const botaof09 = document.getElementById("bf09");

botao09.onclick = function () {
    modal09.showModal();
}
botaof09.onclick = function () {
    modal09.close();
}

const botao10 = document.getElementById("b10");
const modal10 = document.getElementById("m10");
const botaof10 = document.getElementById("bf10");

botao10.onclick = function () {
    modal10.showModal();
}
botaof10.onclick = function () {
    modal10.close();
}

const botao11 = document.getElementById("b11");
const modal11 = document.getElementById("m11");
const botaof11 = document.getElementById("bf11");

botao11.onclick = function () {
    modal11.showModal();
}
botaof11.onclick = function () {
    modal11.close();
}
const botao12 = document.getElementById("b12");
const modal12 = document.getElementById("m12");
const botaof12 = document.getElementById("bf12");

botao12.onclick = function () {
    modal12.showModal();
}
botaof12.onclick = function () {
    modal12.close();
}

const botao13 = document.getElementById("b13");
const modal13 = document.getElementById("m13");
const botaof13 = document.getElementById("bf13");

botao13.onclick = function () {
    modal13.showModal();
}
botaof13.onclick = function () {
    modal13.close();
}

const botao14 = document.getElementById("b14");
const modal14 = document.getElementById("m14");
const botaof14 = document.getElementById("bf14");

botao14.onclick = function () {
    modal14.showModal();
}
botaof14.onclick = function () {
    modal14.close();
}

const botao15 = document.getElementById("b15");
const modal15 = document.getElementById("m15");
const botaof15 = document.getElementById("bf15");

botao15.onclick = function () {
    modal15.showModal();
}
botaof15.onclick = function () {
    modal15.close();
}

const botao16 = document.getElementById("b16");
const modal16 = document.getElementById("m16");
const botaof16 = document.getElementById("bf16");

botao16.onclick = function () {
    modal16.showModal();
}
botaof16.onclick = function () {
    modal16.close();
}

const botao17 = document.getElementById("b17");
const modal17 = document.getElementById("m17");
const botaof17 = document.getElementById("bf17");

botao17.onclick = function () {
    modal17.showModal();
}
botaof17.onclick = function () {
    modal17.close();
}

const botao18 = document.getElementById("b18");
const modal18 = document.getElementById("m18");
const botaof18 = document.getElementById("bf18");

botao18.onclick = function () {
    modal18.showModal();
}
botaof18.onclick = function () {
    modal18.close();
}

const botao19 = document.getElementById("b19");
const modal19 = document.getElementById("m19");
const botaof19 = document.getElementById("bf19");

botao19.onclick = function () {
    modal19.showModal();
}
botaof19.onclick = function () {
    modal19.close();
}

const botao20 = document.getElementById("b20");
const modal20 = document.getElementById("m20");
const botaof20 = document.getElementById("bf20");

botao20.onclick = function () {
    modal20.showModal();
}
botaof20.onclick = function () {
    modal20.close();
}



// validar dados do formulário

const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");

const emailInput = document.getElementById("email");
const emailLabel = document.getElementById("emailLabel");
const emailHelper = document.getElementById("email-helper");

const telefoneInput = document.getElementById("telefone");
const telefoneLabel = document.getElementById("telefoneLabel");
const telefoneHelper = document.getElementById("telefone-helper");

const idadeInput = document.getElementById("idade");
const idadeLabel = document.getElementById("idadeLabel");
const idadeHelper = document.getElementById("idade-helper");

const enviar = document.getElementById("enviar")

function togglePopup(input, label) {
    input.addEventListener("focus", () => {
        label.classList.add("required-popup")
    })

    input.addEventListener("blur", () => {
        label.classList.remove("required-popup")
    })
}

togglePopup(usernameInput, usernameLabel)
togglePopup(emailInput, emailLabel);
togglePopup(telefoneInput, telefoneLabel)
togglePopup(idadeInput, idadeLabel);

usernameInput.addEventListener("input", (event) => {
    const value = event.target.value;

    if (value.length <= 10) {
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = "O nome precisa ter mais de 10 caracteres";
        usernameHelper.classList.add("visible");
    } else {
        usernameInput.classList.remove("error");
        usernameInput.classList.add("correct");
        usernameHelper.classList.remove("visible");
    }
})

telefoneInput.addEventListener("input", (event) => {
    const value = event.target.value;

    if (value.length < 8) {
        telefoneInput.classList.remove("correct");
        telefoneInput.classList.add("error");
        telefoneHelper.innerText = "O telefone precisa conter ao menos oito dígitos.";
        telefoneHelper.classList.add("visible");
    } else {
        telefoneInput.classList.remove("error");
        telefoneInput.classList.add("correct");
        telefoneHelper.classList.remove("visible");
    }
})

emailInput.addEventListener("input", (event) => {
    const value = event.target.value;

    if (value.includes("@") && value.includes(".com")) {
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailHelper.classList.remove("visible")
    } else {
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "O email precisa ser um e-mail válido"
        emailHelper.classList.add("visible")
    }
})

idadeInput.addEventListener("input", (event) => {
    const value = event.target.value;

    if (value === Number("") || value < 12) {
        idadeInput.classList.remove("correct")
        idadeInput.classList.add("error");
        idadeHelper.innerText = "Para realizar perguntas deve-se ter mais de 12 anos de idade.";
        idadeHelper.classList.add("visible");
    } else {
        idadeInput.classList.remove("error");
        idadeInput.classList.add("correct");
        idadeHelper.classList.remove("visible");
    }
})


//link para conexão com a página home(index.html)
$('#enviar').on('click', function (event) {
    var button = $('#enviar');

    button.prop('disabled', true);

    var valid = $("#formProdutosSem").valid();
    console.log(valid);
    if (!valid) {

        e.preventDefault();
        button.prop('disabled', false);
    } else {
        $('#formProdutosSem').submit("index.html");
    }
});

