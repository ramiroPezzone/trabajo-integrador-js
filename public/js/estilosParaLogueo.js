if (document.querySelector(".contenedor-form-logueo")) {
  const formularioDeLogueo = document.querySelector(".contenedor-form-logueo"),
    seccionAdmins = document.querySelector(".btn-p-logueo"),
    cancelar = document.querySelector(".btn-cancelar");

  seccionAdmins.addEventListener("click", () => {
      formularioDeLogueo.classList.add("contenedor-form-logueo-activo")
  });

  cancelar.addEventListener("click", ()=>{
      formularioDeLogueo.classList.remove("contenedor-form-logueo-activo")
  })
}
