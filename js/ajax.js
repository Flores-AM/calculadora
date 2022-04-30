let p = document.querySelector("#chocolate");

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

function mostrarHTML({ chocolate, mani, maicena }) {
  // const { nombre, apellido, edad } = obj;

  let respuesta = document.querySelector("#r-chocolate");

  respuesta.innerHTML = `
  <p>${chocolate}</p>
  `;
}
// <p>Apellido: ${apellido}</p>
// <p>Edad: ${edad}</p>

let mani = document.querySelector("#mani");

mani.addEventListener("click", () => {
  fetch("./data/datos.json")
    .then((res) => {
      return res.json();
    })
    .then((resJson) => {
      mostrarHTMLmani(resJson);
    })
    .catch((err) => {
      console.error("no hay respuesta");
    });
});

function mostrarHTMLmani({ chocolate, mani, maicena }) {
  let respuesta = document.querySelector("#r-mani");

  respuesta.innerHTML = `
  <p>${mani}</p>
  `;
}

///////////////////////

let maicena = document.querySelector("#maicena");

maicena.addEventListener("click", () => {
  fetch("./data/datos.json")
    .then((res) => {
      return res.json();
    })
    .then((resJson) => {
      mostrarHTMLmaicena(resJson);
    })
    .catch((err) => {
      console.error("no hay respuesta");
    });
});

function mostrarHTMLmaicena({ chocolate, mani, maicena }) {
  let respuesta = document.querySelector("#r-maicena");

  respuesta.innerHTML = `
  <p>${maicena}</p>
  `;
}
