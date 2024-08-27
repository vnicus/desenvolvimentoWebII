function juntarNome() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;

    document.getElementById("nomeCompleto").innerHTML = "<strong>" + nome + " " + sobrenome + "<strong>";
}

function limparNome() {
    document.getElementById("nomes").reset();
}

function juntarNomesCompleto() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getEletementById("sobrenome").value;
    let resultado = "<strong>" + nome + " " + sobrenome + "</strong><br/>" +
        "<button id='voltar' onclick='location.reload()'>Voltar</button>";

    document.writeln(resultado);
    mostrarlog(nome, sobrenome);
    ajustarfoco();
}