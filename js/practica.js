// let n1 = prompt("Cuantas cajas?");
// n1 = parseInt(n1);
// let n2 = 12;
// let n3 = 140;

// function resultado(n1, n2, n3) {
//   document.write("Cantidad de cajones: ", (n1 * n2) / n3);
// }
// resultado(n1, n2, n3);

// FUNCIONALIDAD
localStorage.setItem("calc", calcular);
window.addEventListener("load", () => {
  // dos constantes con los elementos que necesitamos
  const display = document.querySelector(".display");
  const KeyPadButtons = document.getElementsByClassName("num");

  //constante para transformar HTMLCollection a Array
  const KeyPadButtonsArray = Array.from(KeyPadButtons);

  //iteramos al nuevo Array de botones
  KeyPadButtonsArray.forEach((button) => {
    //a cada boton le agregamos un listener
    button.addEventListener("click", () => {
      calculadora(button, display);
    });
  });
});

function calculadora(button, display) {
  switch (button.innerHTML) {
    case "C":
      borrar(display);
      break;

    case "=":
      calcular(display);
      break;

    case "cht":
      cht(display);
      break;

    case "mcn":
      x84(display);
      break;

    default:
      actualizar(display, button);
      break;
  }
}

function calcular(display) {
  display.innerHTML = eval(display.innerHTML);
  //localStorage.c = localStorage.c + calcular;
}

function actualizar(display, button) {
  if (display.innerHTML == 0) {
    display.innerHTML = "";
  }
  display.innerHTML += button.innerHTML;
}

function borrar(display) {
  display.innerHTML = 0;
}
