let express = require('express'),
    routes = express.Router(),
    controller = require('../controllers/productos'),
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

// Rutas de productos

routes.get('/', controller.raiz)

routes.get('/crear', controller.crear)

routes.post('/guardar', updates.single('imagen'), controller.guardar)

module.exports = routes;