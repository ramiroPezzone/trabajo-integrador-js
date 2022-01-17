const admins = [
  {
    usuario: "admin123",
    password: "admin123",
  },
];
const logueo = {
  login: (req, res) => {
    if (!(req.body.usuario == admins[0].usuario && req.body.password == admins[0].password)) {
      res.send(`<div style="text-align: center; display:flex; flex-direction:column;"><h1 style="text-align:center">Nombre de usuario o contraseña incorrectos</h1><h2>Vuelva atrás para volver a intentar</h2></div>`)
    } else {
      res.redirect("/admins");
    }
  },
};

module.exports = logueo;
