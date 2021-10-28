var texto = prompt("Ingresa una palabra con mayusculas")
var palabra = texto;
for(index = 0; index<palabra.length;index++)
    if(palabra[index] == palabra[index].toUpperCase()){
        alert(palabra[index] + " Es mayuscula");
    }else {
        alert(palabra[index] + " No es mayuscula");
    }

