function calcularPorcentagem(){
    let valor = document.getElementById("valor").value;
    let porcentagem = document.getElementById("porcentagem").value;
    let resultado = (valor/100)*porcentagem;

    document.getElementById("resultado").textContent = resultado;
    document.getElementById("apresentarValor").textContent = valor;
    document.getElementById("apresentarPorcentagem").textContent = porcentagem;
    document.getElementById("apresentarResultado").style.display = "block";
}

function calcularDesconto(){
    let valorProduto = document.getElementById("valorProduto").value;
    let porcentagemDesconto = document.getElementById("porcentagemDesconto").value;
    let valorDesconto = (valorProduto/100)*porcentagemDesconto;
    let valorFinal = valorProduto-valorDesconto;

    document.getElementById("apresentarValorProduto").textContent = valorProduto;
    document.getElementById("apresentarDesconto").textContent = porcentagemDesconto;
    document.getElementById("valorFinal").textContent = valorFinal;
    document.getElementById("apresentarValorComDesconto").style.display = "block";
}

