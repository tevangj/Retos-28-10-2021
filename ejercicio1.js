var hoy = new Date();
var dia = hoy.getDate();
var listaDias =  ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
var fecha = listaDias[hoy.getDay()];
var hora = hoy.getHours();
var minutos = hoy.getMinutes();
var segundos = hoy.getSeconds();


function amPM(){
var ampm = "";
    if (hora > 12) {
        ampm = "PM";
        hora = hora - 12;
        var actual = hora + " " + ampm;
    } else {
        ampm = "AM";
        hora = hora;
        var actual = hora + " " + ampm;
    }
return actual 
}


console.log("Hoy es: " + fecha);
console.log("La hora actual es: " + amPM() + " " + minutos + ":" + segundos);