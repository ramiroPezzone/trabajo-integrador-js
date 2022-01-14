const inputFoto = document.querySelector("#foto"),
campoDeVisualizacion = document.querySelector("#previsualizacionDeImagen")

inputFoto.addEventListener("change", () => {
    const fotoNueva = inputFoto.files;

    if(!fotoNueva || !fotoNueva.length) {
        campoDeVisualizacion.src = "";
        return
    }

    const fotoUnica = fotoNueva[0]

    const objectURL = URL.createObjectURL(fotoUnica);

    console.log(objectURL);

    campoDeVisualizacion.src = objectURL
})