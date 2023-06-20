const addButton = document.querySelector(".qtd_add"); // botão que aumenta (+)quantidade de produto
const subButton = document.querySelector(".qtd_remove"); //botão que subtrai (-) quantidade de produtos
const prodButton = document.querySelector(".btn"); //botão que leva aos produtos quando o carrinho tá vazio
let inputQtd = document.querySelector(".qtd_input");
let valorProduto = document.querySelector(".prodprice");
const prod = document.getElementById("prod");
const waysPayment = document.querySelector(".data") 
const vazio = document.getElementById("vazio");
let total = document.getElementById("value")
const seeProd = document.getElementById("see-prod") // botão de ver produtos no carrinho vazio
const end = document.querySelector(".end"); // botão de finalizar compra
const telaPagamento = document.getElementById("telaPagamento");
const confirmarPagamento = document.getElementById("confirmarPagamento"); //botao confirmar pagamento

// let produto = document.querySelector(".product")
// TESTE
// let novoProduto = {
//     nome:"Ração",
//     descricao: "500g de ração marca x sabor frango",
//     preco: 10.00
// } 


// const novoItem = document.createElement("div");
// novoItem.innerHTML = `${novoProduto.nome} <br> ${novoProduto.descricao} <br> R$ ${novoProduto.precopreco}`;
// prod.insertBefore(novoItem, produto);

function updateTotal() {
  let qtd = Number(inputQtd.value);
  let price = Number(valorProduto.dataset.preco);

  total.innerHTML = (qtd * price).toFixed(2);
}

function addProd() {
    inputQtd.value = Number(inputQtd.value) + 1;

    updateTotal();
}

function subProd(){
    if(inputQtd.value > 0){

        inputQtd.value = Number(inputQtd.value) - 1;

        updateTotal();
    }
    if(inputQtd.value == 0 && total.innerHTML == "0.00" ){
        prod.style.display = "none";
        waysPayment.style.display = "none";
        vazio.style.display = "flex";
        vazio.style.justifyContent = "center";
        vazio.style.alignItems = "center";
        vazio.style.flexWrap = "wrap";
        vazio.style.flexDirection = "column";
        vazio.style.textAlign = "center";
        vazio.style.height = "100vh";
    }
    
}

//função para redirecionar p/ pág de produtos quando clicar no botão "Ver Produtos" com o carrinho vazio
seeProd.addEventListener("click", function() {
        window.location.href = "produtos.html"
});

addButton.addEventListener("click", addProd);
subButton.addEventListener("click", subProd);

end.addEventListener("click", ()=> {
    telaPagamento.style.display = "flex";
    prod.style.display = "none";
    waysPayment.style.display = "none";
})


confirmarPagamento.addEventListener("click", function (event) {
    // Verifica se alguma opção de pagamento está selecionada
    let opcoesPagamento = document.querySelectorAll(".opcaoPagamento");
    let opcaoSelecionada = false;
  
    for (let i = 0; i < opcoesPagamento.length; i++) {
      if (opcoesPagamento[i].checked) {
        opcaoSelecionada = true;
        alert("Seu pedido foi realizado com sucesso✅ Dê uma olhadinha no seu email(Veja também o spam)");
        window.location.href = "index.html"
        break;
      }
    }
   // SE NENHUMA OPÇÃO FOR SELECIONADA
    if (!opcaoSelecionada) {
      event.preventDefault(); // Impede o envio do formulário
      alert("Escolha forma que deseja realizar seu pagamento.");
      
      
    }
});
