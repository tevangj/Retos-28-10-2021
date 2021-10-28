
function volumenCilindro(){
    var pi = 3.1416
    var radio = prompt("Cual es el radio");
    var altura = prompt("Cual es la altura");
    
    var cilindro = new Cilindro(pi,radio,altura);

    console.log(cilindro.volumen());


}
volumenCilindro();
