class Cilindro{
    constructor(pi,radio,altura){
        this.pi = pi;
        this.radio = radio;
        this.altura = altura;
    }        

    volumen() {
        var volumen = (this.pi * this.radio * (2*this.altura));
        return volumen;
    }
 }