function borrarDatos(formId) {
    document.getElementById(formId).reset();
}
function sombra() {
    var largo = Number(document.getElementById("largo").value);
    var grado = Number(document.getElementById("grado").value);
    var angulo = Number(document.getElementById("angulo").value);

    var resultado = largo * (Math.sin((grado + angulo) * Math.PI / 180) / Math.sin(grado * Math.PI / 180));
    resultado = Math.round(resultado) + " cm";
    document.getElementById("resultado").value = resultado;
}
function potencia() {
    var voltaje = Number(document.getElementById("voltaje").value);
    var corriente = Number(document.getElementById("corriente").value);
    var resultado2 = voltaje * corriente;
    var resultado = Math.round(resultado2) + " W";
    document.getElementById("resultado2").value = resultado;
}
function corriente() {
    var potencia = Number(document.getElementById("potencia").value);
    var voltaje = Number(document.getElementById("voltaje2").value);
    var resultado3 = potencia / voltaje;
    var resultado = Math.round(resultado3) + " A";
    document.getElementById("resultado3").value = resultado;
}
function conductor() {
    var corriente = Number(document.getElementById("corriente2").value);
    if (corriente <= 14) {
        resultado = 1.5;
    } else if (corriente <= 16) {
        resultado = 2.08;
    } else if (corriente <= 18) {
        resultado = 2.5;
    } else if (corriente <= 21) {
        resultado = 3.31;
    } else if (corriente <= 24) {
        resultado = 4;
    } else if (corriente <= 28) {
        resultado = 5.26;
    } else if (corriente <= 31) {
        resultado = 6;
    } else if (corriente <= 38) {
        resultado = 8.37;
    } else if (corriente <= 42) {
        resultado = 10;
    } else if (corriente <= 50) {
        resultado = 13.3;
    } else if (corriente <= 56) {
        resultado = 16;
    } else if (corriente <= 66) {
        resultado = 21.1;
    } else if (corriente <= 73) {
        resultado = 25;
    } else if (corriente <= 76) {
        resultado = 26.7;
    } else if (corriente <= 87) {
        resultado = 33.6;
    } else if (corriente <= 89) {
        resultado = 35;
    } else if (corriente <= 100) {
        resultado = 42.4;
    } else if (corriente <= 108) {
        resultado = 50;
    } else if (corriente <= 116) {
        resultado = 53.5;
    } else if (corriente <= 133) {
        resultado = 67.4;
    } else if (corriente <= 136) {
        resultado = 70;
    } else if (corriente <= 153) {
        resultado = 85;
    } else if (corriente <= 164) {
        resultado = 95;
    } else if (corriente <= 176) {
        resultado = 107.2;
    } else if (corriente <= 188) {
        resultado = 120;
    } else if (corriente <= 195) {
        resultado = 126.7;
    } else if (corriente <= 216) {
        resultado = 150;
    } else if (corriente <= 217) {
        resultado = 152;
    } else if (corriente <= 239) {
        resultado = 177.3;
    } else if (corriente <= 245) {
        resultado = 185;
    } else if (corriente <= 259) {
        resultado = 202.7;
    } else if (corriente <= 286) {
        resultado = 240;
    } else if (corriente <= 296) {
        resultado = 253.3;
    } else if (corriente <= 328) {
        resultado = 300;
    } else {
        resultado = 0;
    }
    var resultado = resultado + " mm²";
    document.getElementById("resultado4").value = resultado;
}
function conductor2() {
    var corriente = Number(document.getElementById("corriente3").value);
    if (corriente <= 17) {
        valor = 1.5;
    } else if (corriente <= 21) {
        valor = 2.08;
    } else if (corriente <= 23) {
        valor = 2.5;
    } else if (corriente <= 28) {
        valor = 3.31;
    } else if (corriente <= 31) {
        valor = 4;
    } else if (corriente <= 37) {
        valor = 5.26;
    } else if (corriente <= 40) {
        valor = 6;
    } else if (corriente <= 49) {
        valor = 8.37;
    } else if (corriente <= 54) {
        valor = 10;
    } else if (corriente <= 65) {
        valor = 13.3;
    } else if (corriente <= 73) {
        valor = 16;
    } else if (corriente <= 86) {
        valor = 21.1;
    } else if (corriente <= 95) {
        valor = 25;
    } else if (corriente <= 99) {
        valor = 26.7;
    } else if (corriente <= 114) {
        valor = 33.6;
    } else if (corriente <= 117) {
        valor = 35;
    } else if (corriente <= 132) {
        valor = 42.4;
    } else if (corriente <= 141) {
        valor = 50;
    } else if (corriente <= 152) {
        valor = 53.5;
    } else if (corriente <= 175) {
        valor = 67.4;
    } else if (corriente <= 179) {
        valor = 70;
    } else if (corriente <= 201) {
        valor = 85;
    } else if (corriente <= 216) {
        valor = 95;
    } else if (corriente <= 232) {
        valor = 107.2;
    } else if (corriente <= 249) {
        valor = 120;
    } else if (corriente <= 257) {
        valor = 126.7;
    } else if (corriente <= 285) {
        valor = 150;
    } else if (corriente <= 287) {
        valor = 152;
    } else if (corriente <= 316) {
        valor = 177.3;
    } else if (corriente <= 324) {
        valor = 185;
    } else if (corriente <= 342) {
        valor = 202.7;
    } else if (corriente <= 380) {
        valor = 240;
    } else if (corriente <= 392) {
        valor = 253.3;
    } else if (corriente <= 435) {
        valor = 300;
    }
    var resultado = valor + " mm²";
    document.getElementById("resultado5").value = resultado;
}
function ducto() {
    var C24 = Number(document.getElementById("cables").value);
    var C25 = Number(document.getElementById("secConductor").value);
    if ((C25 <= 1.5 && C24 === 1) ||
        (C25 <= 1.5 && C24 === 2) ||
        (C25 <= 1.5 && C24 === 3) ||
        (C25 <= 1.5 && C24 === 4) ||
        (C25 <= 1.5 && C24 === 5)) {
        valor = 16;
    } else if ((C25 <= 2.5 && C24 === 1) ||
        (C25 <= 2.5 && C24 === 2) ||
        (C25 <= 2.5 && C24 === 3) ||
        (C25 <= 2.5 && C24 === 4) ||
        (C25 <= 2.5 && C24 === 5)) {
        valor = 20;
    } else if ((C25 <= 4 && C24 === 1) ||
        (C25 <= 4 && C24 === 2) ||
        (C25 <= 4 && C24 === 3) ||
        (C25 <= 4 && C24 === 4) ||
        (C25 <= 4 && C24 === 5)) {
        valor = 25;
    } else if ((C25 <= 6 && C24 === 1) ||
        (C25 <= 6 && C24 === 2) ||
        (C25 <= 6 && C24 === 3) ||
        (C25 <= 6 && C24 === 4) ||
        (C25 <= 6 && C24 === 5)) {
        valor = 25;
    } else if ((C25 <= 10 && C24 === 1) ||
        (C25 <= 10 && C24 === 2) ||
        (C25 <= 10 && C24 === 3) ||
        (C25 <= 10 && C24 === 4) ||
        (C25 <= 10 && C24 === 5)) {
        valor = 32;
    } else if ((C25 <= 16 && C24 === 1) ||
        (C25 <= 16 && C24 === 2) ||
        (C25 <= 16 && C24 === 3) ||
        (C25 <= 16 && C24 === 4) ||
        (C25 <= 16 && C24 === 5)) {
        valor = 40;
    } else if ((C25 <= 25 && C24 === 1) ||
        (C25 <= 25 && C24 === 2) ||
        (C25 <= 25 && C24 === 3) ||
        (C25 <= 25 && C24 === 4) ||
        (C25 <= 25 && C24 === 5)) {
        valor = 50;
    } else if ((C25 <= 35 && C24 === 1) ||
        (C25 <= 35 && C24 === 2) ||
        (C25 <= 35 && C24 === 3) ||
        (C25 <= 35 && C24 === 4) ||
        (C25 <= 35 && C24 === 5)) {
        valor = 50;
    } else if ((C25 <= 50 && C24 === 1) ||
        (C25 <= 50 && C24 === 2) ||
        (C25 <= 50 && C24 === 3) ||
        (C25 <= 50 && C24 === 4) ||
        (C25 <= 50 && C24 === 5)) {
        valor = 63;
    } else if ((C25 <= 70 && C24 === 1) ||
        (C25 <= 70 && C24 === 2) ||
        (C25 <= 70 && C24 === 3) ||
        (C25 <= 70 && C24 === 4) ||
        (C25 <= 70 && C24 === 5)) {
        valor = 75;
    } else if ((C25 <= 95 && C24 === 1) ||
        (C25 <= 95 && C24 === 2) ||
        (C25 <= 95 && C24 === 3) ||
        (C25 <= 95 && C24 === 4) ||
        (C25 <= 95 && C24 === 5)) {
        valor = 100;
    } else if ((C25 <= 120 && C24 === 1) ||
        (C25 <= 120 && C24 === 2) ||
        (C25 <= 120 && C24 === 3) ||
        (C25 <= 120 && C24 === 4) ||
        (C25 <= 120 && C24 === 5)) {
        valor = 100;
    } else {
        valor = 0;
    }
    var resultado = valor + " mm";
    document.getElementById("resultado6").value = resultado;
}
function ductof() {
    var C30 = Number(document.getElementById("cantCables").value);
    var C31 = Number(document.getElementById("seccConductor").value);
    if (C31 <= 1.5 && C30 === 1) {
        result = 16;
    } else if (C31 <= 1.5 && C30 === 2) {
        result = 16;
    } else if (C31 <= 1.5 && C30 === 3) {
        result = 16;
    } else if (C31 <= 1.5 && C30 === 4) {
        result = 20;
    } else if (C31 <= 1.5 && C30 === 5) {
        result = 25;
    } else if (C31 <= 2.5 && C30 === 1) {
        result = 16;
    } else if (C31 <= 2.5 && C30 === 2) {
        result = 20;
    } else if (C31 <= 2.5 && C30 === 3) {
        result = 20;
    } else if (C31 <= 2.5 && C30 === 4) {
        result = 32;
    } else if (C31 <= 2.5 && C30 === 5) {
        result = 32;
    } else if (C31 <= 4 && C30 === 1) {
        result = 16;
    } else if (C31 <= 4 && C30 === 2) {
        result = 25;
    } else if (C31 <= 4 && C30 === 3) {
        result = 25;
    } else if (C31 <= 4 && C30 === 4) {
        result = 32;
    } else if (C31 <= 4 && C30 === 5) {
        result = 40;
    } else if (C31 <= 6 && C30 === 1) {
        result = 16;
    } else if (C31 <= 6 && C30 === 2) {
        result = 25;
    } else if (C31 <= 6 && C30 === 3) {
        result = 32;
    } else if (C31 <= 6 && C30 === 4) {
        result = 32;
    } else if (C31 <= 6 && C30 === 5) {
        result = 40;
    } else if (C31 <= 10 && C30 === 1) {
        result = 20;
    } else if (C31 <= 10 && C30 === 2) {
        result = 32;
    } else if (C31 <= 10 && C30 === 3) {
        result = 32;
    } else if (C31 <= 10 && C30 === 4) {
        result = 40;
    } else if (C31 <= 10 && C30 === 5) {
        result = 50;
    } else if (C31 <= 16 && C30 === 1) {
        result = 25;
    } else if (C31 <= 16 && C30 === 2) {
        result = 32;
    } else if (C31 <= 16 && C30 === 3) {
        result = 40;
    } else if (C31 <= 16 && C30 === 4) {
        result = 50;
    } else if (C31 <= 16 && C30 === 5) {
        result = 50;
    } else if (C31 <= 25 && C30 === 1) {
        result = 25;
    } else if (C31 <= 25 && C30 === 2) {
        result = 40;
    } else if (C31 <= 25 && C30 === 3) {
        result = 50;
    } else if (C31 <= 25 && C30 === 4) {
        result = 50;
    } else if (C31 <= 25 && C30 === 5) {
        result = 63;
    } else if (C31 <= 35 && C30 === 1) {
        result = 32;
    } else if (C31 <= 35 && C30 === 2) {
        result = 40;
    } else if (C31 <= 35 && C30 === 3) {
        result = 50;
    } else if (C31 <= 35 && C30 === 4) {
        result = 63;
    } else if (C31 <= 35 && C30 === 5) {
        result = 63;
    } else if (C31 <= 50 && C30 === 1) {
        result = 32;
    } else if (C31 <= 50 && C30 === 2) {
        result = 50;
    } else if (C31 <= 50 && C30 === 3) {
        result = 63;
    } else if (C31 <= 50 && C30 === 4) {
        result = 63;
    } else if (C31 <= 50 && C30 === 5) {
        result = 75;
    } else if (C31 <= 70 && C30 === 1) {
        result = 40;
    } else if (C31 <= 70 && C30 === 2) {
        result = 50;
    } else if (C31 <= 70 && C30 === 3) {
        result = 63;
    } else if (C31 <= 70 && C30 === 4) {
        result = 75;
    } else if (C31 <= 70 && C30 === 5) {
        result = 75;
    } else if (C31 <= 95 && C30 === 1) {
        result = 40;
    } else if (C31 <= 95 && C30 === 2) {
        result = 63;
    } else if (C31 <= 95 && C30 === 3) {
        result = 75;
    } else if (C31 <= 95 && C30 === 4) {
        result = 100;
    } else if (C31 <= 95 && C30 === 5) {
        result = 100;
    } else if (C31 <= 120 && C30 === 1) {
        result = 50;
    } else if (C31 <= 120 && C30 === 2) {
        result = 63;
    } else if (C31 <= 120 && C30 === 3) {
        result = 75;
    } else if (C31 <= 120 && C30 === 4) {
        result = 100;
    } else if (C31 <= 120 && C30 === 5) {
        result = 100;
    } else {
        result = 0;
    }
    var resultado = result + " mm";
    document.getElementById("resultado7").value = resultado;
}
function ductoSub() {
    var C36 = Number(document.getElementById("canCables").value);
    var C37 = Number(document.getElementById("seccConducto").value);
    if (C37 <= 1.5 && C36 == 1) {
        valor = 25;
    } else if (C37 <= 1.5 && C36 == 2) {
        valor = 25;
    } else if (C37 <= 1.5 && C36 == 3) {
        valor = 25;
    } else if (C37 <= 1.5 && C36 == 4) {
        valor = 32;
    } else if (C37 <= 1.5 && C36 == 5) {
        valor = 32;
    } else if (C37 <= 2.5 && C36 == 1) {
        valor = 25;
    } else if (C37 <= 2.5 && C36 == 2) {
        valor = 25;
    } else if (C37 <= 2.5 && C36 == 3) {
        valor = 32;
    } else if (C37 <= 2.5 && C36 == 4) {
        valor = 32;
    } else if (C37 <= 2.5 && C36 == 5) {
        valor = 40;
    } else if (C37 <= 4 && C36 == 1) {
        valor = 25;
    } else if (C37 <= 4 && C36 == 2) {
        valor = 32;
    } else if (C37 <= 4 && C36 == 3) {
        valor = 40;
    } else if (C37 <= 4 && C36 == 4) {
        valor = 40;
    } else if (C37 <= 4 && C36 == 5) {
        valor = 40;
    } else if (C37 <= 6 && C36 == 1) {
        valor = 32;
    } else if (C37 <= 6 && C36 == 2) {
        valor = 32;
    } else if (C37 <= 6 && C36 == 3) {
        valor = 50;
    } else if (C37 <= 6 && C36 == 4) {
        valor = 50;
    } else if (C37 <= 6 && C36 == 5) {
        valor = 50;
    } else if (C37 <= 10 && C36 == 1) {
        valor = 40;
    } else if (C37 <= 10 && C36 == 2) {
        valor = 50;
    } else if (C37 <= 10 && C36 == 3) {
        valor = 63;
    } else if (C37 <= 10 && C36 == 4) {
        valor = 63;
    } else if (C37 <= 10 && C36 == 5) {
        valor = 63;
    } else if (C37 <= 16 && C36 == 1) {
        valor = 50;
    } else if (C37 <= 16 && C36 == 2) {
        valor = 50;
    } else if (C37 <= 16 && C36 == 3) {
        valor = 63;
    } else if (C37 <= 16 && C36 == 4) {
        valor = 63;
    } else if (C37 <= 16 && C36 == 5) {
        valor = 63;
    } else if (C37 <= 25 && C36 == 1) {
        valor = 63;
    } else if (C37 <= 25 && C36 == 2) {
        valor = 63;
    } else if (C37 <= 25 && C36 == 3) {
        valor = 75;
    } else if (C37 <= 25 && C36 == 4) {
        valor = 75;
    } else if (C37 <= 25 && C36 == 5) {
        valor = 75;
    } else if (C37 <= 35 && C36 == 1) {
        valor = 63;
    } else if (C37 <= 35 && C36 == 2) {
        valor = 75;
    } else if (C37 <= 35 && C36 == 3) {
        valor = 75;
    } else if (C37 <= 35 && C36 == 4) {
        valor = 90;
    } else if(C37 <= 35 && C36 == 5) {
        valor = 90;
    } else if (C37 <= 50 && C36 == 1) {
        valor = 75;
    } else if (C37 <= 50 && C36 == 2) {
        valor = 75;
    } else if (C37 <= 50 && C36 == 3) {
        valor = 90;
    } else if (C37 <= 50 && C36 == 4) {
        valor = 90;
    } else if (C37 <= 50 && C36 == 5) {
        valor = 110;
    } else if (C37 <= 70 && C36 == 1) {
        valor = 90;
    } else if (C37 <= 70 && C36 == 2) {
        valor = 90;
    } else if (C37 <= 70 && C36 == 3) {
        valor = 110;
    } else if (C37 <= 70 && C36 == 4) {
        valor = 110;
    } else if (C37 <= 70 && C36 == 5) {
        valor = 110;
    } else if (C37 <= 95 && C36 == 1) {
        valor = 110;
    } else if (C37 <= 95 && C36 == 2) {
        valor = 110;
    } else if (C37 <= 95 && C36 == 3) {
        valor = 110;
    } else if (C37 <= 95 && C36 == 4) {
        valor = 140;
    } else if (C37 <= 95 && C36 == 5) {
        valor = 140;
    } else if (C37 <= 120 && C36 == 1) {
        valor = 140;
    } else if (C37 <= 120 && C36 == 2) {
        valor = 140;
    } else if (C37 <= 120 && C36 == 3) {
        valor = 160;
    } else if (C37 <= 120 && C36 == 4) {
        valor = 160;
    } else if (C37 <= 120 && C36 == 5) {
        valor = 160;
    } else {
        valor = 0;
    }
    var resultado = valor + " mm";
    document.getElementById("resultado8").value = resultado;
}