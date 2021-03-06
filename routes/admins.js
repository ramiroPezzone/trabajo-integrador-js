const controller = require('../controllers/admins'),
    express = require('express'),
    routes = express.Router(),
    multer = require('multer');

// Configuración de multer
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const updates = multer({ storage });

// Rutas de admins

routes.get('/', controller.raiz)

routes.get('/crear-producto', controller.crear)

routes.post('/guardar', updates.single('images'), controller.guardar)

routes.get('/editar/:id', controller.editar)

routes.post('/borrar/:id', controller.borrar)

routes.post('/guardarCambios/:id', updates.single('images'), controller.guardarCambios)

module.exports = routes