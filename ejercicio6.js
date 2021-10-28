var numero1 = parseInt(prompt("Dame un numero"));
var numero2 = parseInt(prompt("Dame otro numero"));

function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min +1)) + min
  }

  alert(getRandomArbitrary(numero1, numero2));