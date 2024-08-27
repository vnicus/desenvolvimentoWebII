// FUNÇÃO SOMAR
function somar() {
    let val1 = parseFloat(document.getElementById("valor1").value);
    let val2 = parseFloat(document.getElementById("valor2").value);

    let soma = val1 + val2; //pode colocar, let soma = parseFloat(val1) + parseFloat(val2);

    document.getElementById("resultado").innerHTML = soma;
};

//FUNÇÃO SUBTRAIR
function subtrair() {
    let val1 = parseFloat(document.getElementById("valor1").value);
    let val2 = parseFloat(document.getElementById("valor2").value);

    let sub = val1 - val2; //pode colocar, let soma = parseFloat(val1) + parseFloat(val2);

    document.getElementById("resultado").innerHTML = sub;
};


//FUNÇÃO MULTIPLICAR
function multiplicar() {
    let val1 = parseFloat(document.getElementById("valor1").value);
    let val2 = parseFloat(document.getElementById("valor2").value);

    let multi = val1 * val2; //pode colocar, let soma = parseFloat(val1) + parseFloat(val2);

    document.getElementById("resultado").innerHTML = multi;
};


//FUNÇÃO DIVIDIR
function dividir() {

    let val1 = parseFloat(document.getElementById("valor1").value);
    let val2 = parseFloat(document.getElementById("valor2").value);

    if (val2 == 0) {
        alert("Digite o Valor 2, diferente de ZERO");
        document.getElementById("valor2").focus();
    } else {
        let dividir = val1 / val2; //pode colocar, let soma = parseFloat(val1) + parseFloat(val2);
        document.getElementById("resultado").innerHTML = dividir;
    };
};