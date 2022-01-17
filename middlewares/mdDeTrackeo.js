const fs = require("fs"),
  path = require("path"),
  archivoAComprobar = path.join("logs", "rutasVisitadas.txt");

rutasVisitadas = (req, res, next) => {
  let ruta = req.path,
    fecha = new Date(),
    año = fecha.getFullYear(),
    mes = fecha.getMonth(),
    numeroDeDia = fecha.getUTCDate(),
    diaDeLaSemana = fecha.getDay(),
    hora = fecha.getHours(),
    minutos = fecha.getMinutes(),
    segundos = fecha.getSeconds();

  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  // SETEANDO LOS DÍAS
  if (diaDeLaSemana == 1) {
    diaDeLaSemana = "Lunes";
  } else if (diaDeLaSemana == 2) {
    diaDeLaSemana = "Martes";
  } else if (diaDeLaSemana == 3) {
    diaDeLaSemana = "Miércoles";
  } else if (diaDeLaSemana == 4) {
    diaDeLaSemana = "Jueves";
  } else if (diaDeLaSemana == 5) {
    diaDeLaSemana = "Viernes";
  } else if (diaDeLaSemana == 6) {
    diaDeLaSemana = "Sábado";
  } else {
    diaDeLaSemana = "Domingo";
  }

  // SETEANDO EL MES
  if (mes === 0) {
    mes = "Enero";
  } else if (mes == 1) {
    mes = "Febrero";
  } else if (mes == 2) {
    mes = "Marzo";
  } else if (mes == 3) {
    mes = "Abril";
  } else if (mes == 4) {
    mes = "Mayo";
  } else if (mes == 5) {
    mes = "Junio";
  } else if (mes == 6) {
    mes = "Julio";
  } else if (mes == 7) {
    mes = "Agosto";
  } else if (mes == 8) {
    mes = "Septiembre";
  } else if (mes == 9) {
    mes = "Octubre";
  } else if (mes == 10) {
    mes = "Noviembre";
  } else if (mes == 11) {
    mes = "Diciembre";
  }

  let fechaAImprimir = `El día ${diaDeLaSemana} ${numeroDeDia} de ${mes} del año ${año} a las ${hora}:${minutos} con ${segundos} segundos`;

  if (ruta == "/") {
    ruta = "Home page";
  } else if (ruta == "/productos") {
    ruta = "Sección de productos";
  } else if (ruta == "/admins") {
    ruta = "Sección admins";
  } else if (ruta == "/admins/crear-producto") {
    ruta = "Sección de creación de nuevo producto";
  } else if (ruta == "/admins/guardar") {
    ruta = "El usuario a creado un nuevo producto";
  } else if (ruta.includes("editar")) {
    ruta = "Edición de producto";
  } else if (ruta.includes("guardarCambios")) {
    ruta = "El usuario ha modificado un producto";
  } else if (ruta.includes("borrar")) {
    ruta = "Un producto ha sido eliminado";
  }

  if (!fs.existsSync(archivoAComprobar)) {
    fs.writeFileSync(
      archivoAComprobar,
      `Los usuarios han visitado las siguientes secciones del sitio web:\n-----------------------------------------------------------------\n`
    );
  }

  ruta = `*${fechaAImprimir}\n${ruta} \n-----------------------------------------------------------------`;
  fs.appendFileSync("logs/rutasVisitadas.txt", ruta + "\n");
  return next();
};

module.exports = rutasVisitadas;
