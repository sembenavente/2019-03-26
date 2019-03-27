alert("hola");

/*
for (let index = 0; index < 1; index++) {

    var cantHoras = prompt("Ingresar las horas laborales");
    var cant = Number.parseFloat(cantHoras);

    if(!(cant<0 || cant >60)){
        
        calcularSueldo(cant);
    } else {
        alert("Error: ingreso una cantidad de horas no valido");
        index = -1
    }
    
}*/

function calcular(){
    var dato = document.getElementById("caja").nodeValue;
    alert("dato");
}

function mensaje(){
    alert("soy p");
    
}

function calcularSueldo(cant){
    var sueldo = 0;
    var pagoHora = 40;
if (cant <= 40) {
    sueldo = cant*pagoHora;
    alert("el sueldo total es de: " + sueldo);
} else {
    if (cant <= 50) {
        sueldo = ((cant-40) * (pagoHora * 2) + ((cant - (cant-40))*pagoHora));
        alert("el sueldo total es de: " + sueldo);
    } else {
        var horasEx = 10;
        var horSupExtra = cant - 50;
        sueldo = (40 * pagoHora) + (horasEx * (pagoHora*2)) + (horSupExtra * (pagoHora*3));
        alert("el sueldo total es de: " + sueldo);
    }
}
}
