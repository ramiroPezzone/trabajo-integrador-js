const inputFoto = document.querySelector("#foto"),
campoDeVisualizacion = document.querySelector("#previsualizacionDeImagen")

inputFoto.addEventListener("change", () => {
    const fotoNueva = inputFoto.files;

    if(!fotoNueva || !fotoNueva.length || fotoNueva == "[]") {
        campoDeVisualizacion.src = "/images/sin-imagen.png";
        return
    }

    const fotoUnica = fotoNueva[0]

    const objectURL = URL.createObjectURL(fotoUnica);

    campoDeVisualizacion.src = objectURL
})