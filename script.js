const url = "https://api.nasa.gov/planetary/apod";

function listaImagenes() {
  fetch(url)
    .then((response) => response.json())
    .then((datosImagenes) => {
      console.log(datosImagenes);
      // const card
    })
    .catch();
}

listaImagenes();
