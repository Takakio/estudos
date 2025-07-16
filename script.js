function calcularPorcentagem(){
    let valor = document.getElementById("valor").value;
    let porcentagem = document.getElementById("porcentagem").value;
    let resultado = (valor/100)*porcentagem;

    document.getElementById("resultado").textContent = resultado;
}

