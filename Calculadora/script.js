function sumar() {
    var resul=0;
    var x = parseInt(document.getElementById('n1').value);
    var y = parseInt(document.getElementById('n2').value);
    resul = x + y;
    document.getElementById('resultado').innerHTML = resul;
}

function restar() {
    var resul=0;
    var x = parseInt(document.getElementById('n1').value);
    var y = parseInt(document.getElementById('n2').value);
    resul = x - y;
    document.getElementById('resultado').innerHTML = resul;
}

function multiplicacion() {
    var resul=0;
    var x = parseInt(document.getElementById('n1').value);
    var y = parseInt(document.getElementById('n2').value);
    resul = x * y;
    document.getElementById('resultado').innerHTML = resul;
}

function division() {
    var x = parseInt(document.getElementById('n1').value);
    var y = parseInt(document.getElementById('n2').value);
    var resul = 0;
    if (y > 0) {
        resul = x / y;
    } else {
        resul = 'Error'
    }
    document.getElementById('resultado').innerHTML = resul;
}
