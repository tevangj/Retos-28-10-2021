var numero1 = prompt("Dame un numero");
var numero2 = prompt("Dame otro numero");

function mcd(n1,n2){
var deposito = [];
for(index = 1; index <= n1 && index <= n2; index++){
    if(n1 % index == 0 && n2 % index == 0){
        deposito.push(index);
    }
}

 return deposito[deposito.length - 1];
}

alert(mcd(numero1,numero2))

