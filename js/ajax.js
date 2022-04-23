let p = document.querySelector("p");

p.addEventListener("click", () => {
  //METODO VIEJO
  // let xhr = new XMLHttpRequest();
  // console.log(xhr);
  // xhr.open("GET", "archivo.txt");
  // console.log(xhr);
  // xhr.send();
  // setTimeout(() => {
  //   console.log("respuesta: " + xhr.response);
  // }, 1000);
  //
  //
  //NUEVO
  // fetch("./data/archivo.txt")
  //   .then((res) => {
  //     console.log(res);
  //     // console.log(res.headers.get("Content-Type"));
  //     // console.log(res.status);
  //     // console.log(res.url);
  //     // console.log(res.type);
  //     // console.log(res.text());
  //     return res.text();
  //   })
  //   .then((res) => {
  //     console.log(res);
  //     document.querySelector("#respuesta").innerHTML = `<h2>
  //     ${res}
  //     </h2>`;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  //
  //
  //
  //JSON
  fetch("./data/datos.json")
    .then((res) => {
      return res.json();
    })
    .then((resJson) => {
      // console.log(resJson);
      // console.log(resJson.nombre);
      // console.log(resJson.apellido);
      // console.log(resJson.edad);
      mostrarHTML(resJson);
    })
    .catch((err) => {
      console.error("no hay respuesta");
    });
});

function mostrarHTML({ nombre, apellido, edad, labura }) {
  // const { nombre, apellido, edad } = obj;

  let respuesta = document.querySelector("#respuesta");

  respuesta.innerHTML = `
  <p>${labura}</p>
  `;
}
// <p>Apellido: ${apellido}</p>
// <p>Edad: ${edad}</p>
