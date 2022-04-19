function guardar_storage() {
  let persona = {
    nombre: "Brenda",
    edad: 22,
    correo: "bren@bren.com",
  };
}

let nombre = "Evelyn";

localStorage.setItem("nombre", nombre);
localStorage.setItem("persona", JSON.stringify(persona));
