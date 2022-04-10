let n1 = prompt("Cuantos alfajores?");
n1 = parseInt(n1);
let n2 = 12;
let n3 = 140;

function resultado(n1, n2, n3) {
  document.write("Cantidad de cajones: ", (n1 * n2) / n3);
}
resultado(n1, n2, n3);
