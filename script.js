function calcularPorcentagem(){
    let valor = document.getElementById("valor").value;
    let porcentagem = document.getElementById("porcentagem").value;
    
    if (valor === "" || porcentagem === "") {
        alert("Por favor preencha o campo com um valor válido");
    } else {
        let resultado = (valor/100)*porcentagem;
        resultado = resultado.toFixed(2);
        document.getElementById("resultado").textContent = resultado;
        document.getElementById("apresentarValor").textContent = valor;
        document.getElementById("apresentarPorcentagem").textContent = porcentagem;
        document.getElementById("apresentarResultado").style.display = "block";
    }  
}

function calcularDesconto(){
    let valorProduto = document.getElementById("valorProduto").value;
    let porcentagemDesconto = document.getElementById("porcentagemDesconto").value;
    
    if (valorProduto === "" || porcentagemDesconto === "") {
        alert("Por favor preencha o campo com um valor válido")
    } else {
        let valorDesconto = ((valorProduto/100)*porcentagemDesconto).toFixed(2);
        valorDesconto = parseFloat(valorDesconto);
        let valorFinal = valorProduto-valorDesconto.toFixed(2);

        document.getElementById("apresentarValorProduto").textContent = valorProduto;
        document.getElementById("apresentarDesconto").textContent = porcentagemDesconto;
        document.getElementById("valorFinal").textContent = valorFinal;
        document.getElementById("valorDesconto").textContent = valorDesconto;
        document.getElementById("apresentarValorComDesconto").style.display = "block";
    }
    
}

