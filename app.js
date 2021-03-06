let express = require("express"),
  app = express(),
  rutaProductos = require("./routes/productos"),
  rutaAdmins = require("./routes/admins"),
  mongoose = require("mongoose"),
  fs = require("fs"),
  rutasVisitadas = require("./middlewares/mdDeTrackeo"),
  logueo = require("./routes/logueo");
port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

// Levantando servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});

// Conectando con mongoDB
mongoose.connect("mongodb://localhost/productos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Seteando motor de vistas
app.set("view engine", "ejs");

// Declarando carpeta public
app.use(express.static(__dirname + "/public"));

// Middleware para registro de rutas de ingreso del usuario
app.use(rutasVisitadas);

// Middlewares para manejos de post
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Raíz del sitio
app.get("/", (req, res) => {
  res.render("index");
});

// Rutas de productos
app.use("/productos", rutaProductos);

// Rutas de admins
app.use("/admins", logueo, rutaAdmins);

// Ruta de logueo
app.use("/login", logueo)
