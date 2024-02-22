let totalGeral = 0;
limpar();

function adicionar(){
    //recuperar valores, nome do produto, quantidade, valor.

    //quebrar o campo do produto em valor e nome.
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    //fim quebrar o campo do produto em valor e nome

    let quantidade = document.getElementById('quantidade').value;
    let valor = document.getElementById('produto');

    //calcular o preço.
    let preco = quantidade * valorUnitario;


    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;

    //atualizar o total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;


}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 0;
}