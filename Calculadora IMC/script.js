function imc() {
    let resul = 0;
    var m = parseFloat(document.getElementById('masa').value);
    var a = parseFloat(document.getElementById('altura').value);
    resul = m / (a ^ 2);
    if (m > 0 && a > 0) {
        if (resul >= 40) {
            document.getElementById('resultado').innerHTML = `Obeso (Clase 3) ${resul.toFixed(2)}`;
        } else if (resul >= 35) {
            document.getElementById('resultado').innerHTML = `Obeso (Clase 2) ${resul.toFixed(2)}`;
        } else if (resul >= 30) {
            document.getElementById('resultado').innerHTML = `Obeso (Clase 1) ${resul.toFixed(2)}`;
        } else if (resul >= 25) {
            document.getElementById('resultado').innerHTML = `Sobrepeso (Pre-obeso) ${resul.toFixed(2)}`;
        } else if (resul >= 18.5) {
            document.getElementById('resultado').innerHTML = `Rango normal ${resul.toFixed(2)}`;
        } else if (resul >= 17) {
            document.getElementById('resultado').innerHTML = `Bajo peso (delgadez leve) ${resul.toFixed(2)}`;
        } else if (resul >= 16) {
            document.getElementById('resultado').innerHTML = `Bajo peso (delgadez moderada) ${resul.toFixed(2)}`;
        } else {
            document.getElementById('resultado').innerHTML = `Bajo peso (delgadez severa) ${resul.toFixed(2)}`;
        }
    } else {
        document.getElementById('resultado').innerHTML = 'Error Los Valores no pueden ser negativos';
    }
}
